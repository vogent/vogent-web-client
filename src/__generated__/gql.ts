/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation StartDialSession($sessionId: ID!) {\n    startDialSession(dialSessionId: $sessionId)\n  }\n": types.StartDialSessionDocument,
    "\n  mutation HangupCall($dialId: ID!, $dropVoicemail: Boolean, $transferNumber: String) {\n    hangupCall(dialId: $dialId, dropVoicemail: $dropVoicemail, transferNumber: $transferNumber)\n  }\n": types.HangupCallDocument,
    "\n  mutation SetPaused($dialId: ID!, $pauseStatus: Boolean!) {\n    pauseAI(dialId: $dialId, pauseStatus: $pauseStatus) {\n        id\n    }\n  }\n": types.SetPausedDocument,
    "\n  subscription RefreshTranscript($dialId: ID!) {\n    watchTranscript(dialId: $dialId) {\n      speaker\n      text\n      detailType\n    }\n  }\n": types.RefreshTranscriptDocument,
    "\n  mutation BrowserDialToken($input: BrowserDialTokenInput!) {\n    browserDialToken(input: $input) {\n      token\n      iceConfig\n      telephonyProvider\n      url\n    }\n  }\n": types.BrowserDialTokenDocument,
    "\n  subscription ConnectSession($sessionId: ID!) {\n    connectSession(sessionId: $sessionId) {\n      messageType\n      content {\n        __typename\n        ... on DialsUpdatedMessage {\n          contactId\n          dials {\n            id\n            status\n            answerType\n            phoneField\n            callDispositionId\n            systemResultType\n            toNumber\n          }\n          contactComplete\n        }\n        ... on DialConnectMessage {\n          dialId\n        }\n        ... on SessionUpdatedMessage {\n          dialSession {\n            id\n            status\n          }\n          reason\n        }\n      }\n    }\n  }\n": types.ConnectSessionDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StartDialSession($sessionId: ID!) {\n    startDialSession(dialSessionId: $sessionId)\n  }\n"): (typeof documents)["\n  mutation StartDialSession($sessionId: ID!) {\n    startDialSession(dialSessionId: $sessionId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation HangupCall($dialId: ID!, $dropVoicemail: Boolean, $transferNumber: String) {\n    hangupCall(dialId: $dialId, dropVoicemail: $dropVoicemail, transferNumber: $transferNumber)\n  }\n"): (typeof documents)["\n  mutation HangupCall($dialId: ID!, $dropVoicemail: Boolean, $transferNumber: String) {\n    hangupCall(dialId: $dialId, dropVoicemail: $dropVoicemail, transferNumber: $transferNumber)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetPaused($dialId: ID!, $pauseStatus: Boolean!) {\n    pauseAI(dialId: $dialId, pauseStatus: $pauseStatus) {\n        id\n    }\n  }\n"): (typeof documents)["\n  mutation SetPaused($dialId: ID!, $pauseStatus: Boolean!) {\n    pauseAI(dialId: $dialId, pauseStatus: $pauseStatus) {\n        id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription RefreshTranscript($dialId: ID!) {\n    watchTranscript(dialId: $dialId) {\n      speaker\n      text\n      detailType\n    }\n  }\n"): (typeof documents)["\n  subscription RefreshTranscript($dialId: ID!) {\n    watchTranscript(dialId: $dialId) {\n      speaker\n      text\n      detailType\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation BrowserDialToken($input: BrowserDialTokenInput!) {\n    browserDialToken(input: $input) {\n      token\n      iceConfig\n      telephonyProvider\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation BrowserDialToken($input: BrowserDialTokenInput!) {\n    browserDialToken(input: $input) {\n      token\n      iceConfig\n      telephonyProvider\n      url\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription ConnectSession($sessionId: ID!) {\n    connectSession(sessionId: $sessionId) {\n      messageType\n      content {\n        __typename\n        ... on DialsUpdatedMessage {\n          contactId\n          dials {\n            id\n            status\n            answerType\n            phoneField\n            callDispositionId\n            systemResultType\n            toNumber\n          }\n          contactComplete\n        }\n        ... on DialConnectMessage {\n          dialId\n        }\n        ... on SessionUpdatedMessage {\n          dialSession {\n            id\n            status\n          }\n          reason\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription ConnectSession($sessionId: ID!) {\n    connectSession(sessionId: $sessionId) {\n      messageType\n      content {\n        __typename\n        ... on DialsUpdatedMessage {\n          contactId\n          dials {\n            id\n            status\n            answerType\n            phoneField\n            callDispositionId\n            systemResultType\n            toNumber\n          }\n          contactComplete\n        }\n        ... on DialConnectMessage {\n          dialId\n        }\n        ... on SessionUpdatedMessage {\n          dialSession {\n            id\n            status\n          }\n          reason\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;