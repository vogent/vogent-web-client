import { ApolloClient, InMemoryCache, NormalizedCacheObject, split } from '@apollo/client';
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
} from './queries';
import { createClient } from 'graphql-ws';
import { VogentDevice } from './devices/VogentDevice';
import { VonageDevice } from './devices/VonageDevice';
import { dialStatusIsComplete } from './utils';

export class VogentCall {
  client: ApolloClient<NormalizedCacheObject>;
  sessionId: string;
  subscription?: ObservableSubscription;
  dial?: Dial;
  _handlers: {
    ev: 'status';
    fn: (...args: any[]) => void;
  }[];

  constructor(id: string, token: string) {
    this._handlers = [];
    this.sessionId = id;
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      };
    });

    const httpLink = createClient({
      url: `https://api.getelto.com/query`,
    });

    const wsLink = new GraphQLWsLink(
      createClient({
        url: `wss://api.getelto.com/query`,
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

  async start() {
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

    // setDevice(d);

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

    const c = await d.connect({
      params: { EltoDialSessionID: this.sessionId },
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
