// eslint-disable-next-line @typescript-eslint/no-empty-interface

/**
 * Interface representing an active audio connection to a Vogent call.
 * Returned by VogentCall.connectAudio()
 */
export interface VogentAudioConn {
  /**
   * Register event handlers for connection events
   * @param ev - Event type to listen for
   * - 'mute': Fired when the connection's mute state changes
   * - 'disconnect': Fired when the connection is terminated
   * @param fn - Callback function to handle the event
   */
  on: (ev: 'mute' | 'disconnect' | 'track-added', fn: (...args: any[]) => void) => void;

  /**
   * Mute or unmute the audio connection
   * @param status - True to mute, false to unmute
   */
  mute: (status: boolean) => void;

  /**
   * Terminate the audio connection
   */
  disconnect: () => void;

  /**
   * Send DTMF digits through the connection
   * @param k - String of DTMF digits to send (0-9, *, #)
   */
  sendDigits: (k: string) => void;
}

/**
 * Interface representing a device that can establish audio connections
 * Currently implemented by VonageDevice
 */
export interface VogentDevice {
  /**
   * Establish an audio connection with the specified parameters
   * @param p - Connection parameters object containing:
   * - params.EltoDialSessionID: The session ID for the call
   * - params.LiveListen: Whether this is a monitoring connection
   * - params.DialID: The ID of the dial to connect to
   * @returns Promise resolving to an active audio connection
   */
  connect: (p: any) => Promise<VogentAudioConn>;
}
