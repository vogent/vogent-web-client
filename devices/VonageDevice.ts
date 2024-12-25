import { VogentCall } from './VogentDevice';
import { VonageClient, LoggingLevel } from '@vonage/client-sdk';

export class VonageCall {
  _callId: string;
  _client: VonageClient;
  _liveListen: boolean;
  _params: any;
  _handlers: {
    ev: 'mute' | 'disconnect';
    fn: (...args: any[]) => void;
  }[];

  constructor(callId: string, client: VonageClient, params: any) {
    this._callId = callId;
    this._client = client;
    this._params = params;
    this._handlers = [];

    this._client.on('callHangup', (callId, _, reason) => {
      if (callId !== this._callId) {
        return;
      }

      console.log('Call status changed', reason, callId);

      if (
        !this._liveListen &&
        (reason === 'REMOTE_HANGUP' || reason === 'REMOTE_NO_ANSWER_TIMEOUT')
      ) {
        console.log('Reconnecting');
        this._client
          .serverCall(this._params)
          .then((cid: string) => {
            this._callId = cid;
          })
          .catch((err) => {
            console.error('Error reconnecting', err);
            this.sendEvent('disconnect');
          });
      } else {
        this.sendEvent('disconnect');
      }
    });
  }

  mute(status: boolean) {
    if (status) {
      this._client.mute(this._callId).then(() => {
        this.sendEvent('mute', true);
      });
    } else {
      this._client.unmute(this._callId).then(() => {
        this.sendEvent('mute', false);
      });
    }
  }

  sendDigits(k: string) {
    this._client.sendDTMF(this._callId, k);
  }

  disconnect() {
    this._client.hangup(this._callId);
  }

  sendEvent(evName: string, ...args: any[]) {
    for (const { ev, fn } of this._handlers) {
      if (ev === evName) {
        fn(...args);
      }
    }
  }

  on(ev: 'mute' | 'disconnect', fn: (...args: any[]) => void) {
    this._handlers.push({
      ev,
      fn,
    });
  }
}

export class VonageDevice {
  _sessionId: string;
  _client: VonageClient;

  private constructor(sessionId: string, client: VonageClient, liveListen = false) {
    this._sessionId = sessionId;
    this._client = client;
  }

  static async getDevice(sessionToken: string, disableEffects = false): Promise<VonageDevice> {
    const client = new VonageClient({ loggingLevel: LoggingLevel.Warn });
    const sessId = await client.createSession(sessionToken);
    return new VonageDevice(sessId, client, disableEffects);
  }

  async connect(p: any): Promise<VogentCall> {
    const call = await this._client.serverCall(p.params);
    const v = new VonageCall(call, this._client, p.params);
    return v;
  }
}
