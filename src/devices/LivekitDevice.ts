import { VogentAudioConn } from './VogentDevice';
import {
  createLocalAudioTrack,
  DisconnectReason,
  RemoteParticipant,
  RemoteTrack,
  RemoteTrackPublication,
  Room,
  RoomEvent,
  Track,
} from 'livekit-client';

export class LivekitCall {
  _room: Room;
  _params: any;
  _handlers: {
    ev: 'mute' | 'disconnect' | 'track-added';
    fn: (...args: any[]) => void;
  }[];

  constructor(room: Room) {
    this._room = room;
    this._params = {};
    this._handlers = [];
  }

  mute(status: boolean) {
    if (status) {
      this._room.localParticipant.setMicrophoneEnabled(false).then(() => {
        this.sendEvent('mute', true);
      });
    } else {
      this._room.localParticipant.setMicrophoneEnabled(true).then(() => {
        this.sendEvent('mute', false);
      });
    }
  }

  sendDigits(k: string) {
    if (k.length != 1) {
      throw new Error('Invalid DTMF digit');
    }

    const code = k === '*' ? 10 : k === '#' ? 11 : parseInt(k);

    this._room.localParticipant.publishDtmf(code, k);
  }

  disconnect() {
    this._room.disconnect();
  }

  sendEvent(evName: string, ...args: any[]) {
    for (const { ev, fn } of this._handlers) {
      if (ev === evName) {
        fn(...args);
      }
    }
  }

  on(ev: 'mute' | 'disconnect' | 'track-added', fn: (...args: any[]) => void) {
    this._handlers.push({
      ev,
      fn,
    });
  }
}

export class LivekitDevice {
  _room: Room;
  _token: string;
  _url: string;

  private constructor(room: Room, token: string, url: string) {
    this._room = room;
    this._token = token;
    this._url = url;

    // speeds up connection attempt
    this._room.prepareConnection(this._url, this._token);

    this._room
      .on(RoomEvent.TrackSubscribed, this.handleTrackSubscribed)
      .on(RoomEvent.TrackUnsubscribed, this.handleTrackUnsubscribed)
      .on(RoomEvent.Disconnected, (reason?: DisconnectReason) => {
        console.log('Disconnected', reason);
        this.disconnect();
      });
  }

  static async getDevice(sessionToken: string, url: string): Promise<LivekitDevice> {
    const room = new Room();
    return new LivekitDevice(room, sessionToken, url);
  }

  disconnect() {
    this._room.disconnect();
  }

  handleTrackSubscribed(
    track: RemoteTrack,
    _publication: RemoteTrackPublication,
    _participant: RemoteParticipant
  ) {
    if (track.kind === 'audio') {
      const audioElement = track.attach();
      document.body.appendChild(audioElement);
      audioElement.style.display = 'none';
    }
  }

  handleTrackUnsubscribed(
    track: RemoteTrack,
    _publication: RemoteTrackPublication,
    _participant: RemoteParticipant
  ) {
    if (track.kind === 'audio') {
      // console.log('Track unsubscribed', track);
    }
  }

  async connect(_p: any): Promise<VogentAudioConn> {
    await this._room.connect(this._url, this._token, {});
    const lkcall = new LivekitCall(this._room);

    await this._room.localParticipant.setMicrophoneEnabled(true);

    return lkcall;
  }
}
