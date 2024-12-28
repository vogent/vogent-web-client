import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject, split } from '@apollo/client';
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

export type Transcript = {
  text: string;
  speaker: string;
}[]

export class VogentCall {
  client: ApolloClient<NormalizedCacheObject>;
  sessionId: string;
  dialId: string;
  subscription?: ObservableSubscription;
  baseUrl: string;
  dial?: Dial;
  _handlers: {
    ev: 'status';
    fn: (...args: any[]) => void;
  }[];

  constructor(dialDetails: {
    sessionId: string;
    dialId: string;
    token: string;
  }, config: {
    baseUrl: string;
  } = {
    baseUrl: 'https://api.getelto.com',
  }) {
    this._handlers = [];
    this.sessionId = dialDetails.sessionId;
    this.dialId = dialDetails.dialId;
    let token = dialDetails.token;

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
      }
    });

    const wsBaseUrl = this.baseUrl.replace('https://', 'wss://').replace("http://", "ws://");

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

  on(ev: 'status', fn: (...args: any[]) => void) {
    this._handlers.push({
      ev,
      fn,
    });
  }

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

        fn(data.watchTranscript.map((t) => ({
          text: t.text,
          speaker: t.speaker,
        })));
      });

    return () => {
      subscription.unsubscribe();
    }
  }

  updateDial(dial: Dial) {
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

  async connectAudio(liveListen: boolean = false): Promise<VogentAudioConn> {
    const token = await this.client.mutate({
      mutation: AI_GET_TOKEN,
      variables: {
        input: {
          type: BrowserDialTokenType.DialSession,
          dialSessionId: this.sessionId,
        },
      },
    });

    const d: VogentDevice = await VonageDevice.getDevice(token.data!.browserDialToken.token, true);

    const c = await d.connect({
      params: { EltoDialSessionID: this.sessionId, LiveListen: liveListen, DialID: this.dialId },
    });

    return c;
  }

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

  async setPaused(paused: boolean) {
    if (!this.dial) {
      return;
    }

    await this.client.mutate({
      mutation: AI_SET_PAUSED,
      variables: {
        dialId: this.dial.id,
        pauseStatus: paused,
      },
    });
  }

  async hangup() {
    if (!this.dial) {
      return;
    }

    await this.client.mutate({
      mutation: AI_HANGUP_CALL,
      variables: {
        dialId: this.dial.id,
      },
    });
  }
}
