import { gql } from './__generated__';

export const AI_START_DIAL_SESSION = gql(`
  mutation StartDialSession($sessionId: ID!) {
    startDialSession(dialSessionId: $sessionId)
  }
`);

export const AI_HANGUP_CALL = gql(`
  mutation HangupCall($dialId: ID!, $dropVoicemail: Boolean, $transferNumber: String) {
    hangupCall(dialId: $dialId, dropVoicemail: $dropVoicemail, transferNumber: $transferNumber)
  }
`);

export const AI_SET_PAUSED = gql(`
  mutation SetPaused($dialId: ID!, $pauseStatus: Boolean!) {
    pauseAI(dialId: $dialId, pauseStatus: $pauseStatus) {
        id
    }
  }
`);

export const REFRESH_TRANSCRIPT = gql(`
  subscription RefreshTranscript($dialId: ID!) {
    watchTranscript(dialId: $dialId) {
      speaker
      text
      detailType
    }
  }
`);

export const AI_GET_TOKEN = gql(`
  mutation BrowserDialToken($input: BrowserDialTokenInput!) {
    browserDialToken(input: $input) {
      token
      iceConfig
      telephonyProvider
      url
    }
  }
`);

export const AI_CONNECT_SESSION = gql(`
  subscription ConnectSession($sessionId: ID!) {
    connectSession(sessionId: $sessionId) {
      messageType
      content {
        __typename
        ... on DialsUpdatedMessage {
          contactId
          dials {
            id
            status
            answerType
            callDispositionId
            systemResultType
            toNumber
          }
          contactComplete
        }
        ... on DialConnectMessage {
          dialId
        }
        ... on SessionUpdatedMessage {
          dialSession {
            id
            status
          }
          reason
        }
      }
    }
  }
`);
