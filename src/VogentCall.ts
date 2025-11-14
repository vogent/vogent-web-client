/**
 * @fileoverview VogentCall provides the main interface for managing voice calls with Vogent's AI system.
 *
 * This class handles:
 * - Call lifecycle management (start, pause, hangup)
 * - Audio connection setup
 * - Real-time transcript monitoring
 * - Status event handling
 *
 * Basic usage:
 * ```typescript
 * const call = new VogentCall({
 *   sessionId: "session_id",
 *   dialId: "dial_id",
 *   token: "auth_token"
 * });
 *
 * // Start the call
 * await call.start();
 *
 * // Connect audio
 * const audioConn = await call.connectAudio();
 *
 * // Monitor transcripts
 * const unsubscribe = call.monitorTranscript((transcript) => {
 *   console.log(transcript);
 * });
 *
 * // Monitor status changes
 * call.on('status', (status) => {
 *   console.log('Call status:', status);
 * });
 *
 * // Later: cleanup
 * unsubscribe();
 * await call.hangup();
 * ```
 *
 * @see {@link https://docs.vogent.ai} for complete server documentation
 * @module VogentCall
 */

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition, ObservableSubscription } from '@apollo/client/utilities';
import {
  BrowserDialTokenType,
  Dial,
  DialsUpdatedMessage,
  SessionMessageType,
} from './__generated__/graphql';
import {
  AI_CONNECT_SESSION,
  AI_GET_TOKEN,
  AI_HANGUP_CALL,
  AI_START_DIAL_SESSION,
  AI_SET_PAUSED,
  REFRESH_TRANSCRIPT,
} from './queries';
import { createClient } from 'graphql-ws';
import { VogentAudioConn, VogentDevice } from './devices/VogentDevice';
import { VonageDevice } from './devices/VonageDevice';
import { dialStatusIsComplete } from './utils';
import { LivekitDevice } from './devices/LivekitDevice';

export type Transcript = {
  /** The text of the transcript */
  text: string;
  /** The speaker of the transcript currently either 'HUMAN' or 'AI', or 'IVR' if IVR detection is enabled */
  speaker: string;
}[];

/**
 * VogentCall manages the lifecycle and state of a voice call session
 */
export class VogentCall {
  /** Apollo GraphQL client instance for API communication */
  private client: ApolloClient<NormalizedCacheObject>;

  /** Unique identifier for the current session */
  private sessionId: string;

  /** Unique identifier for the current dial/call */
  private dialId: string;

  /** GraphQL subscription handle */
  private subscription?: ObservableSubscription;

  /** Base URL for the API endpoints */
  private baseUrl: string;

  /** Current dial/call state */
  private dial?: Dial;

  /** Array of event handlers for status changes */
  private _handlers: {
    ev: 'status';
    fn: (...args: any[]) => void;
  }[];

  /**
   * Creates a new VogentCall instance
   * @param dialDetails - Object containing session details and authentication, retrieved from the Vogent server API
   * @param dialDetails.sessionId - Unique session identifier
   * @param dialDetails.dialId - Unique dial/call identifier
   * @param dialDetails.token - Authentication token
   * @param config - Configuration options
   * @param config.baseUrl - API base URL (defaults to 'https://api.vogent.ai')
   */
  constructor(
    dialDetails: {
      sessionId: string;
      dialId: string;
      token: string;
    },
    config: {
      baseUrl: string;
    } = {
      baseUrl: 'https://api.vogent.ai',
    }
  ) {
    this._handlers = [];
    this.sessionId = dialDetails.sessionId;
    this.dialId = dialDetails.dialId;
    const token = dialDetails.token;

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      };
    });

    this.baseUrl = config.baseUrl;

    const httpLink = createHttpLink({
      uri: `${this.baseUrl}/query`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const wsBaseUrl = this.baseUrl.replace('https://', 'wss://').replace('http://', 'ws://');

    const wsLink = new GraphQLWsLink(
      createClient({
        url: `${wsBaseUrl}/query`,
        connectionParams: () => ({
          authToken: token,
        }),
      })
    );

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      wsLink,
      // @ts-ignore
      authLink.concat(httpLink)
    );

    this.client = new ApolloClient({
      cache: new InMemoryCache(),
      link: splitLink,
    });
  }

  /**
   * Registers an event handler for status changes
   * @param ev - Event type ('status')
   * - status: called when the dial status changes, see docs.vogent.ai for more details
   * @param fn - Callback function to handle the event
   */
  on(ev: 'status', fn: (...args: any[]) => void) {
    this._handlers.push({
      ev,
      fn,
    });
  }

  /**
   * Subscribes to transcript updates for the current call
   * @param fn - Callback function that receives transcript updates
   * @returns Function to unsubscribe from transcript updates
   */
  monitorTranscript(fn: (transcript: Transcript) => void): () => void {
    const subscription = this.client
      .subscribe({
        query: REFRESH_TRANSCRIPT,
        variables: {
          dialId: this.dialId,
        },
      })
      .subscribe(({ data }) => {
        console.log('monitorTranscript', data);

        if (!data?.watchTranscript) {
          return;
        }

        fn(
          data.watchTranscript.map((t) => ({
            text: t.text,
            speaker: t.speaker,
          }))
        );
      });

    return () => {
      subscription.unsubscribe();
    };
  }

  /**
   * Internal method to update dial state and trigger status handlers
   * @param dial - Updated dial information
   */
  private updateDial(dial: Dial) {
    if (!this.dial || dial.status !== this.dial.status) {
      this._handlers.forEach((h) => {
        h.fn(dial.status);
      });
    } else {
      return;
    }

    if (dialStatusIsComplete(dial.status)) {
      this.subscription?.unsubscribe();
    }

    this.dial = {
      ...this.dial,
      ...dial,
    };
  }

  /**
   * Establishes audio connection for the call
   * @param liveListen - Whether to enable live listening mode. This should be set to true for monitoring legs (e.g. humans that are listening
   * to the call who the AI should not interact with.)
   * @returns Promise resolving to audio connection handle
   */
  async connectAudio(liveListen = false): Promise<VogentAudioConn> {
    const token = await this.client.mutate({
      mutation: AI_GET_TOKEN,
      variables: {
        input: {
          type: BrowserDialTokenType.DialSession,
          dialSessionId: this.sessionId,
          liveListen: liveListen,
        },
      },
    });

    let d: VogentDevice;
    if (token.data!.browserDialToken.telephonyProvider === 'livekit') {
      d = await LivekitDevice.getDevice(
        token.data!.browserDialToken.token,
        token.data!.browserDialToken.url ?? ''
      );
    } else {
      d = await VonageDevice.getDevice(token.data!.browserDialToken.token, true);
    }

    const c = await d.connect({
      params: { EltoDialSessionID: this.sessionId, LiveListen: liveListen, DialID: this.dialId },
    });

    return c;
  }

  /**
   * Starts the call session. Does not connect audio, you must call connectAudio() to do so.
   */
  async start() {
    this.subscription = this.client
      .subscribe({
        query: AI_CONNECT_SESSION,
        variables: {
          sessionId: this.sessionId,
        },
      })
      .subscribe(({ data }) => {
        switch (data?.connectSession.messageType) {
          case SessionMessageType.GlobalCallConnect:
            this.client.mutate({
              mutation: AI_START_DIAL_SESSION,
              variables: {
                sessionId: this.sessionId,
              },
            });

            break;
          case SessionMessageType.SessionContactUpdate: {
            const content = data?.connectSession.content as DialsUpdatedMessage;
            if (content.dials.length != 1) {
              break;
            }

            this.updateDial(content.dials[0]);
          }
        }
      });
  }

  /**
   * Sets the pause state of the AI
   * @param paused - Whether to pause the AI or not.
   */
  async setPaused(paused: boolean) {
    if (!this.dialId) {
      return;
    }

    await this.client.mutate({
      mutation: AI_SET_PAUSED,
      variables: {
        dialId: this.dialId,
        pauseStatus: paused,
      },
    });
  }

  /**
   * Ends the current call
   */
  async hangup() {
    if (!this.dialId) {
      return;
    }

    await this.client.mutate({
      mutation: AI_HANGUP_CALL,
      variables: {
        dialId: this.dialId,
      },
    });
  }
}
