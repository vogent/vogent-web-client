/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  Map: { input: any; output: any; }
  Time: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AiChat = {
  __typename?: 'AIChat';
  id: Scalars['ID']['output'];
  prompt: Scalars['String']['output'];
  transcript: Array<SpeakerTextRes>;
};

export type AiEvalAggregateResult = {
  __typename?: 'AIEvalAggregateResult';
  numFailing: Scalars['Int']['output'];
  numPassing: Scalars['Int']['output'];
};

export type AiEvalConfig = {
  __typename?: 'AIEvalConfig';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  promptSnippet: Scalars['String']['output'];
  records: AiEvalRecordsResult;
  runs: AiEvalRunsResult;
};


export type AiEvalConfigRecordsArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type AiEvalConfigRunsArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type AiEvalListResultsResult = {
  __typename?: 'AIEvalListResultsResult';
  aiEvalResults: Array<AiEvalResult>;
  numAiEvalResults: Scalars['Int']['output'];
};

export type AiEvalRecord = {
  __typename?: 'AIEvalRecord';
  dial?: Maybe<Dial>;
  id: Scalars['ID']['output'];
  recordType: AiEvalRecordType;
};

export enum AiEvalRecordType {
  Dial = 'DIAL'
}

export type AiEvalRecordsResult = {
  __typename?: 'AIEvalRecordsResult';
  aiEvalRecords: Array<AiEvalRecord>;
  numAiEvalRecords: Scalars['Int']['output'];
};

export type AiEvalResult = {
  __typename?: 'AIEvalResult';
  createdAt: Scalars['Time']['output'];
  evalTranscript: Array<SpeakerTextRes>;
  id: Scalars['ID']['output'];
  numAlerts: Scalars['Int']['output'];
  record: AiEvalRecord;
  results: Array<AiEvalResultLine>;
};

export type AiEvalResultLine = {
  __typename?: 'AIEvalResultLine';
  accurate: Scalars['Boolean']['output'];
  index: Scalars['Int']['output'];
  modelOutput: Scalars['String']['output'];
  reason?: Maybe<Scalars['String']['output']>;
};

export type AiEvalRun = {
  __typename?: 'AIEvalRun';
  aggregateResult: AiEvalAggregateResult;
  callAgent: CallAgent;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  results: AiEvalListResultsResult;
  status: AiEvalRunStatus;
  versionedPrompt: VersionedPrompt;
};


export type AiEvalRunResultsArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export enum AiEvalRunStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Success = 'SUCCESS'
}

export type AiEvalRunsResult = {
  __typename?: 'AIEvalRunsResult';
  aiEvalRuns: Array<AiEvalRun>;
  numAiEvalRuns: Scalars['Int']['output'];
};

export type AiModel = {
  __typename?: 'AIModel';
  allowedAgentType: AllowedAgentType;
  id: Scalars['ID']['output'];
  modelOptions: Array<AiModelOption>;
  modelParams?: Maybe<Scalars['String']['output']>;
  modelType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  providerModelId: Scalars['String']['output'];
  public: Scalars['Boolean']['output'];
  workspaces: Array<Workspace>;
};

export type AiModelFilter = {
  agentType?: InputMaybe<AgentType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AiModelOption = {
  __typename?: 'AIModelOption';
  default: Scalars['String']['output'];
  fieldType?: Maybe<FieldType>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  range?: Maybe<Array<RangeEndpoint>>;
  valueType: AiModelOptionValueType;
};

export enum AiModelOptionValueType {
  Float = 'FLOAT',
  Int = 'INT',
  String = 'STRING'
}

export type AiModelsResult = {
  __typename?: 'AIModelsResult';
  aiModels: Array<AiModel>;
  numAiModels: Scalars['Int']['output'];
};

export type AiVoice = {
  __typename?: 'AIVoice';
  badges?: Maybe<Array<Scalars['String']['output']>>;
  gender: VoiceGender;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  providerDetails?: Maybe<Scalars['String']['output']>;
  providerVoiceId: Scalars['String']['output'];
  public: Scalars['Boolean']['output'];
  refText: Scalars['String']['output'];
  voiceOptions: Array<AiModelOption>;
  voiceTier: VoiceTier;
  workspaces: Array<AiVoiceWorkspace>;
};

export type AiVoiceWorkspace = {
  __typename?: 'AIVoiceWorkspace';
  providerDetails?: Maybe<Scalars['String']['output']>;
  workspace: Workspace;
};

export type AiVoicesResult = {
  __typename?: 'AIVoicesResult';
  aiVoices: Array<AiVoice>;
  numAiVoices: Scalars['Int']['output'];
};

export type ApiKey = {
  __typename?: 'APIKey';
  createdAt: Scalars['Time']['output'];
  createdBy: User;
  key: Scalars['String']['output'];
  lastUsed?: Maybe<Scalars['Time']['output']>;
  name: Scalars['String']['output'];
};

export enum AccessType {
  Deny = 'DENY',
  Grant = 'GRANT'
}

export type AdHocDialSession = {
  __typename?: 'AdHocDialSession';
  id: Scalars['ID']['output'];
  telephonyProvider: Scalars['String']['output'];
};

export type AddBalanceInput = {
  balanceCents: Scalars['Int']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type AddCallAgentFieldInput = {
  agentId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type AddDialAiEvalRecordInput = {
  aiEvalConfigId: Scalars['ID']['input'];
  dialIds: Array<Scalars['ID']['input']>;
};

export type AddKnowledgeBaseFilesInput = {
  files: Array<Scalars['Upload']['input']>;
  knowledgeBaseId: Scalars['ID']['input'];
};

export type AgentFieldValue = {
  fieldName: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum AgentType {
  CustomFlow = 'CUSTOM_FLOW',
  Standard = 'STANDARD'
}

export type AgentVariablesInput = {
  agentId: Scalars['ID']['input'];
  versionedPromptId?: InputMaybe<Scalars['ID']['input']>;
};

export type AggregateStats = {
  __typename?: 'AggregateStats';
  numCancels: Scalars['Int']['output'];
  numConnects: Scalars['Int']['output'];
  numDials: Scalars['Int']['output'];
  numMeetings: Scalars['Int']['output'];
  numNoAnswer: Scalars['Int']['output'];
  numPatched: Scalars['Int']['output'];
  totalCallTimeSecs: Scalars['Int']['output'];
};

export type AllWorkspacesFilterInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

export type AllWorkspacesResult = {
  __typename?: 'AllWorkspacesResult';
  numWorkspaces: Scalars['Int']['output'];
  workspaces: Array<Workspace>;
};

export enum AllowedAgentType {
  FlowOnly = 'FLOW_ONLY',
  StandardOnly = 'STANDARD_ONLY'
}

export enum AnswerType {
  Human = 'HUMAN',
  Machine = 'MACHINE',
  Other = 'OTHER',
  Unknown = 'UNKNOWN'
}

export type ApiFlowNode = {
  __typename?: 'ApiFlowNode';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nodeData: Scalars['Map']['output'];
  outputSchema?: Maybe<Scalars['String']['output']>;
  transitionRules: Array<FlowTransitionRule>;
  type: Scalars['String']['output'];
};

export type ApiFlowNodeDeleteResult = {
  __typename?: 'ApiFlowNodeDeleteResult';
  connectedNodes: Array<ApiFlowNode>;
};

export type ApiFlowNodeInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  nodeData: Scalars['Map']['input'];
  transitionRules: Array<FlowTransitionRuleInput>;
  type: Scalars['String']['input'];
};

export type ApolloPurpose = {
  __typename?: 'ApolloPurpose';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ApolloSettingsInput = {
  apolloPurposeId?: InputMaybe<Scalars['ID']['input']>;
  apolloUserId?: InputMaybe<Scalars['ID']['input']>;
  crmSpecificationId: Scalars['ID']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type ApolloUser = {
  __typename?: 'ApolloUser';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type AppConfig = {
  __typename?: 'AppConfig';
  billingConfig: Scalars['String']['output'];
};

export type AppNotice = {
  __typename?: 'AppNotice';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export enum ArrayConditionType {
  All = 'all',
  Any = 'any'
}

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type BasicUtteranceDetectorConfig = {
  __typename?: 'BasicUtteranceDetectorConfig';
  sensitivity: UtteranceDetectorSensitivity;
};

export type BasicUtteranceDetectorConfigInput = {
  sensitivity: UtteranceDetectorSensitivity;
};

export type BillingSubscription = {
  __typename?: 'BillingSubscription';
  manageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BillingUsageFilter = {
  range: TimeRange;
};

export type BrowserDialTokenInput = {
  dialSessionId?: InputMaybe<Scalars['ID']['input']>;
  telephonyProvider?: InputMaybe<Scalars['String']['input']>;
  type: BrowserDialTokenType;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type BrowserDialTokenRes = {
  __typename?: 'BrowserDialTokenRes';
  iceConfig?: Maybe<Scalars['String']['output']>;
  telephonyProvider: Scalars['String']['output'];
  token: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export enum BrowserDialTokenType {
  DialSession = 'DIAL_SESSION',
  LiveListen = 'LIVE_LISTEN'
}

export type CrmAction = {
  __typename?: 'CRMAction';
  actionId: Scalars['String']['output'];
  actionTitle: Scalars['String']['output'];
};

export type CrmActionInput = {
  actionPayload: Scalars['String']['input'];
  actionType: Scalars['String']['input'];
  contactId: Scalars['ID']['input'];
};

export type CrmActivity = {
  __typename?: 'CRMActivity';
  activityType: CrmActivityType;
  crmId: Scalars['String']['output'];
  notes: Scalars['String']['output'];
  time: Scalars['Time']['output'];
};

export enum CrmActivityType {
  Call = 'CALL',
  Note = 'NOTE'
}

export type CrmSpecification = {
  __typename?: 'CRMSpecification';
  connectionStatus: ConnectionStatus;
  description?: Maybe<Scalars['String']['output']>;
  hasCustomDispositions: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  listContactImportOptions: ListContactImportOptionsRes;
  listFilterConfig: ContactListFilterConfig;
  logo?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['Map']['output']>;
  name: Scalars['String']['output'];
  vesselId: Scalars['String']['output'];
};


export type CrmSpecificationListContactImportOptionsArgs = {
  sourceId: Scalars['String']['input'];
};

export type CallAgent = {
  __typename?: 'CallAgent';
  aiVoice?: Maybe<AiVoice>;
  backgroundNoiseType: Scalars['String']['output'];
  defaultExtractor?: Maybe<CallAgentExtractor>;
  defaultPrompt?: Maybe<VersionedPrompt>;
  extractors: Array<CallAgentExtractor>;
  functionDefinitions: Array<CallAgentFunctionDefinition>;
  id: Scalars['ID']['output'];
  idleMessageConfig: IdleMessageConfig;
  inboundWebhookResponse: Scalars['Boolean']['output'];
  inboundWebhookURL?: Maybe<Scalars['String']['output']>;
  ivrDetectionType: IvrDetectionType;
  ivrTaggingText?: Maybe<Scalars['String']['output']>;
  ivrVersionedPrompt?: Maybe<VersionedPrompt>;
  ivrVoice?: Maybe<AiVoice>;
  language: Scalars['String']['output'];
  maxDurationSeconds: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['Map']['output']>;
  name: Scalars['String']['output'];
  openingLine?: Maybe<Scalars['String']['output']>;
  openingLineType?: Maybe<OpeningLineType>;
  phoneNumbers: Array<PhoneNumber>;
  presets: Array<CallDataPreset>;
  prompts: Array<VersionedPrompt>;
  pronunciationMap?: Maybe<PronunciationMap>;
  transcriberConfig: TranscriberConfig;
  transferNumber?: Maybe<Scalars['String']['output']>;
  utteranceDetectorConfig: UtteranceDetectorConfig;
  voiceOptionValues?: Maybe<Array<ModelOptionValue>>;
  voiceVolumeLevel: Scalars['Int']['output'];
  workspaceId: Scalars['ID']['output'];
};

export type CallAgentExtractor = {
  __typename?: 'CallAgentExtractor';
  createdAt?: Maybe<Scalars['Time']['output']>;
  extractorFields: Array<ExtractorField>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Time']['output']>;
  useVariables: Scalars['Boolean']['output'];
};

export type CallAgentExtractorInput = {
  extractorFields: Array<ExtractorFieldInput>;
  name: Scalars['String']['input'];
};

export type CallAgentFilter = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CallAgentFunctionDefinition = {
  __typename?: 'CallAgentFunctionDefinition';
  functionDefinition: FunctionDefinition;
  lifecycleMessagesOverride?: Maybe<FunctionLifecycleMessages>;
};

export type CallAgentInput = {
  backgroundNoiseType?: InputMaybe<Scalars['String']['input']>;
  defaultExtractor?: InputMaybe<CallAgentExtractorInput>;
  defaultVersionedPrompt?: InputMaybe<CallAgentVersionedPromptInput>;
  defaultVoiceId: Scalars['ID']['input'];
  idleMessageConfig?: InputMaybe<IdleConfigInput>;
  inboundWebhookResponse?: InputMaybe<Scalars['Boolean']['input']>;
  inboundWebhookURL?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  linkedFunctionDefinitionInputs?: InputMaybe<Array<LinkFunctionDefinitionInput>>;
  maxDurationSeconds?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['Map']['input']>;
  name: Scalars['String']['input'];
  openingLine?: InputMaybe<NullableStringInput>;
  openingLineType?: InputMaybe<OpeningLineType>;
  transcriberParams?: InputMaybe<TranscriberParamsInput>;
  transferNumber?: InputMaybe<NullableStringInput>;
  utteranceDetectorConfig?: InputMaybe<UtteranceDetectorConfigInput>;
  voiceVolumeLevel?: InputMaybe<Scalars['Int']['input']>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type CallAgentVersionedPromptInput = {
  agentType: AgentType;
  aiModelId: Scalars['ID']['input'];
  flowDefinition?: InputMaybe<FlowDefinitionInput>;
  modelOptionValues?: InputMaybe<Array<ModelOptionValueInput>>;
  name: Scalars['String']['input'];
  prompt?: InputMaybe<Scalars['String']['input']>;
};

export type CallAgentsResult = {
  __typename?: 'CallAgentsResult';
  callAgents: Array<CallAgent>;
  numCallAgents: Scalars['Int']['output'];
};

export type CallDataPreset = {
  __typename?: 'CallDataPreset';
  data?: Maybe<Scalars['Map']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum CallDirection {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

export type CallDisposition = {
  __typename?: 'CallDisposition';
  crmSpecification?: Maybe<CrmSpecification>;
  crmSubtype?: Maybe<Scalars['String']['output']>;
  dialAlternateNumbers: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  mappedResult?: Maybe<DialResult>;
  name: Scalars['String']['output'];
};

export type CallRecording = {
  __typename?: 'CallRecording';
  downloadUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CallTranscript = {
  __typename?: 'CallTranscript';
  id: Scalars['ID']['output'];
  text: Array<SpeakerTextRes>;
};

export enum CallType {
  Browser = 'BROWSER',
  Phone = 'PHONE'
}

export enum ChatStreamMessageType {
  AppendText = 'APPEND_TEXT',
  NewSpeakerRes = 'NEW_SPEAKER_RES'
}

export type CloneAgentInput = {
  agentId: Scalars['ID']['input'];
  destAgentName: Scalars['String']['input'];
  destWorkspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type CloneExtractorInput = {
  callAgentId: Scalars['ID']['input'];
  clonedExtractorName: Scalars['String']['input'];
  extractorId: Scalars['ID']['input'];
};

export type CloneVoiceInput = {
  clip: Scalars['Upload']['input'];
  gender: VoiceGender;
  model: VoiceModel;
  name: Scalars['String']['input'];
  transcription?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type CoachingComment = {
  __typename?: 'CoachingComment';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  user: User;
  userId: Scalars['ID']['output'];
  visibility: CoachingCommentVisibility;
};

export enum CoachingCommentVisibility {
  ManagerOnly = 'MANAGER_ONLY',
  VisibleToRep = 'VISIBLE_TO_REP'
}

export type CompleteOnboardingInput = {
  skipSurvey?: InputMaybe<Scalars['Boolean']['input']>;
  survey?: InputMaybe<OnboardingSurveyInput>;
  workspaceId: Scalars['ID']['input'];
};

export enum ConnectionStatus {
  ApiKeyConnected = 'API_KEY_CONNECTED',
  LegacyConnected = 'LEGACY_CONNECTED',
  NotConnected = 'NOT_CONNECTED',
  OauthConnected = 'OAUTH_CONNECTED'
}

export type Contact = {
  __typename?: 'Contact';
  accountAttributes?: Maybe<Scalars['Map']['output']>;
  activities: Array<CrmActivity>;
  attributes?: Maybe<Scalars['Map']['output']>;
  contactList: ContactList;
  crmActions: Array<CrmAction>;
  crmLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sourceId?: Maybe<Scalars['String']['output']>;
};

export type ContactAttrFilter = {
  __typename?: 'ContactAttrFilter';
  allowedValues?: Maybe<Array<Scalars['String']['output']>>;
  attrName: Scalars['String']['output'];
  invert?: Maybe<Scalars['Boolean']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
};

export type ContactAttrFilterInput = {
  allowedValues?: InputMaybe<Array<Scalars['String']['input']>>;
  attrName: Scalars['String']['input'];
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactCompleteMessage = {
  __typename?: 'ContactCompleteMessage';
  contactId: Scalars['ID']['output'];
};

export type ContactFilter = {
  __typename?: 'ContactFilter';
  attrFilters?: Maybe<Array<ContactAttrFilter>>;
};

export type ContactFilterInput = {
  attrFilters?: InputMaybe<Array<ContactAttrFilterInput>>;
  sortDesc?: InputMaybe<Scalars['Boolean']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
};

export type ContactList = {
  __typename?: 'ContactList';
  accountSchema: Scalars['Map']['output'];
  activeDialSessions?: Maybe<Array<DialSession>>;
  contactCount: Scalars['Int']['output'];
  contacts: ContactsResult;
  crmSpecification: CrmSpecification;
  crmSpecificationId: Scalars['ID']['output'];
  deleted: Scalars['Boolean']['output'];
  fieldOptions: FieldOptionsResult;
  filterableFields: Array<FilterableField>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  schema: ContactListSchema;
  sourceId?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
  workspace: Workspace;
};


export type ContactListContactsArgs = {
  filter?: InputMaybe<ContactFilterInput>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type ContactListFieldOptionsArgs = {
  field: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
};

export type ContactListFilter = {
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ContactListFilterConfig = {
  __typename?: 'ContactListFilterConfig';
  serverSearch: Scalars['Boolean']['output'];
};

export type ContactListImportOption = {
  __typename?: 'ContactListImportOption';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ContactListImportOptionSpec = {
  __typename?: 'ContactListImportOptionSpec';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<ContactListImportOption>>;
};

export type ContactListResult = {
  __typename?: 'ContactListResult';
  contactLists: Array<ContactList>;
  numContactLists: Scalars['Int']['output'];
};

export type ContactListSchema = {
  __typename?: 'ContactListSchema';
  items: Array<ContactListSchemaItem>;
};

export type ContactListSchemaItem = {
  __typename?: 'ContactListSchemaItem';
  fieldType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isPhone: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type ContactsResult = {
  __typename?: 'ContactsResult';
  contacts: Array<Contact>;
  numContacts: Scalars['Int']['output'];
};

export type CreateAiEvalConfigInput = {
  name: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type CreateAiVoiceInput = {
  gender: VoiceGender;
  name: Scalars['String']['input'];
  provider: Scalars['String']['input'];
  providerDetails?: InputMaybe<Scalars['String']['input']>;
  providerId: Scalars['String']['input'];
  public: Scalars['Boolean']['input'];
  refAudio?: InputMaybe<Scalars['Upload']['input']>;
  refText?: InputMaybe<Scalars['String']['input']>;
};

export type CreateApiKeyInput = {
  apiKey: Scalars['String']['input'];
  integration: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type CreateApiKeyResponse = {
  __typename?: 'CreateAPIKeyResponse';
  success: Scalars['Boolean']['output'];
};

export type CreateAdHocDialSessionInput = {
  aiVoiceId?: InputMaybe<Scalars['ID']['input']>;
  browserCall?: InputMaybe<Scalars['Boolean']['input']>;
  callAgentExtractorId?: InputMaybe<Scalars['ID']['input']>;
  callAgentId?: InputMaybe<Scalars['ID']['input']>;
  callAgentInput?: InputMaybe<Scalars['Map']['input']>;
  fromPhoneNumberId?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  timeoutMinutes?: InputMaybe<Scalars['Int']['input']>;
  versionedPromptId?: InputMaybe<Scalars['ID']['input']>;
  webcallType?: InputMaybe<WebcallType>;
  webhookURL?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type CreateAiModelInput = {
  allowedAgentType: AllowedAgentType;
  modelParams?: InputMaybe<Scalars['String']['input']>;
  modelType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  providerModelId: Scalars['String']['input'];
  public: Scalars['Boolean']['input'];
};

export type CreateCallAgentExtractorInput = {
  callAgentId?: InputMaybe<Scalars['ID']['input']>;
  extractorFields: Array<ExtractorFieldInput>;
  name: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type CreateCallAgentNodeInput = {
  nodeInput: ApiFlowNodeInput;
  versionedPromptId: Scalars['ID']['input'];
};

export type CreateCallDataPresetInput = {
  callAgentId: Scalars['ID']['input'];
  data: Scalars['Map']['input'];
  name: Scalars['String']['input'];
};

export type CreateCallInput = {
  contactIds: Array<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  direction: Scalars['String']['input'];
  disposition: Scalars['String']['input'];
  integrationId: Scalars['String']['input'];
  sourceContactIds: Array<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type CreateChatInput = {
  agentId: Scalars['ID']['input'];
  callAgentInput?: InputMaybe<Scalars['Map']['input']>;
};

export type CreateCoachingCommentInput = {
  comment: Scalars['String']['input'];
  dialId: Scalars['ID']['input'];
  visibility: CoachingCommentVisibility;
};

export type CreateContactListInput = {
  importOpts?: InputMaybe<Array<CreateContactListOption>>;
  name: Scalars['String']['input'];
  sourceId?: InputMaybe<Scalars['String']['input']>;
  sourceName: Scalars['String']['input'];
  sourceType: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type CreateContactListOption = {
  fieldId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CreateDialCommentInput = {
  comment: Scalars['String']['input'];
  dialId: Scalars['ID']['input'];
};

export type CreateDialInput = {
  aiVoiceId?: InputMaybe<Scalars['ID']['input']>;
  browserCall?: InputMaybe<Scalars['Boolean']['input']>;
  callAgentExtractorId?: InputMaybe<Scalars['ID']['input']>;
  callAgentId: Scalars['ID']['input'];
  callAgentInput?: InputMaybe<Scalars['Map']['input']>;
  fromPhoneNumberId?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  timeoutMinutes?: InputMaybe<Scalars['Int']['input']>;
  toNumber?: InputMaybe<Scalars['String']['input']>;
  versionedModelId?: InputMaybe<Scalars['ID']['input']>;
  webcallType?: InputMaybe<WebcallType>;
  webhookURL?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateDialResult = {
  __typename?: 'CreateDialResult';
  dialId: Scalars['ID']['output'];
  dialToken: Scalars['String']['output'];
  sessionId: Scalars['ID']['output'];
  telephonyProvider: Scalars['String']['output'];
};

export type CreateDialSessionInput = {
  callAgentId?: InputMaybe<Scalars['ID']['input']>;
  cancelDispositionId?: InputMaybe<Scalars['ID']['input']>;
  contactFilter?: InputMaybe<ContactFilterInput>;
  contactListId: Scalars['ID']['input'];
  dialTreeStrategy: DialTreeStrategy;
  /** If empty, all phone numbers will be used */
  fromPhoneNumberIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  numParallel: Scalars['Int']['input'];
  phoneFields?: InputMaybe<Array<Scalars['String']['input']>>;
  recordingSetting: RecordingSettingType;
  sortDesc?: InputMaybe<Scalars['Boolean']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  /** If empty, the default set of fields will be used. */
  tableFields?: InputMaybe<Array<Scalars['String']['input']>>;
  voicemailId?: InputMaybe<Scalars['ID']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type CreateDialTaskInput = {
  callAgentId: Scalars['ID']['input'];
  inputData: Scalars['Map']['input'];
  keyInputs: Array<Scalars['String']['input']>;
};

export type CreateDispositionInput = {
  mappedResult?: InputMaybe<DialResult>;
  name: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type CreateFunctionDefinitionInput = {
  arguments: Array<ExtractorFieldInput>;
  description: Scalars['String']['input'];
  dsl: Scalars['String']['input'];
  lifecycleMessages?: InputMaybe<FunctionLifecycleMessagesInput>;
  name: Scalars['String']['input'];
  outputs?: InputMaybe<Array<ExtractorFieldInput>>;
  workspaceId: Scalars['ID']['input'];
};

export type CreateKnowledgeBaseInput = {
  name: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreatePricingProductInput = {
  billingName: Scalars['String']['input'];
  descriptiveName: Scalars['String']['input'];
  priceDecimal: Scalars['String']['input'];
};

export type CreateSalesfloorRoomInput = {
  name: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type CreateSpamScanInput = {
  phoneNumberIds: Array<Scalars['ID']['input']>;
};

export type CreateTaskAttemptInput = {
  fromPhoneNumberId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
  toNumber: Scalars['String']['input'];
  webhookUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserApiKeyInput = {
  name: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type CreateVersionedPromptInput = {
  agentType: AgentType;
  aiModelId: Scalars['ID']['input'];
  callAgentId: Scalars['ID']['input'];
  flowDefinition?: InputMaybe<FlowDefinitionInput>;
  modelOptionValues?: InputMaybe<Array<ModelOptionValueInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVesselConnectionResponse = {
  __typename?: 'CreateVesselConnectionResponse';
  success: Scalars['Boolean']['output'];
};

export type CreateVoicemailInput = {
  name: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type CreateWorkspaceInput = {
  initialUserEmail: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CurrentApolloUser = {
  __typename?: 'CurrentApolloUser';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DncRecord = {
  __typename?: 'DNCRecord';
  id: Scalars['ID']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type DncRecordInput = {
  contactId?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type DeleteCallAgentNodeInput = {
  nodeId: Scalars['ID']['input'];
  versionedPromptId: Scalars['ID']['input'];
};

export type Dial = {
  __typename?: 'Dial';
  aiPaused: Scalars['Boolean']['output'];
  aiResult?: Maybe<Scalars['Map']['output']>;
  answerType: AnswerType;
  billingUsage?: Maybe<Array<UsageLineItem>>;
  browserDial: Scalars['Boolean']['output'];
  callAgent?: Maybe<CallAgent>;
  callDisposition?: Maybe<CallDisposition>;
  callDispositionId?: Maybe<Scalars['ID']['output']>;
  coachingComments: Array<CoachingComment>;
  completedAt?: Maybe<Scalars['Time']['output']>;
  contact?: Maybe<Contact>;
  createdAt: Scalars['Time']['output'];
  dialComments: Array<DialComment>;
  dialInputs?: Maybe<Scalars['Map']['output']>;
  dialSessionId: Scalars['ID']['output'];
  dialTaskId?: Maybe<Scalars['ID']['output']>;
  feedbacks: Array<FeedbackType>;
  fromPhoneNumber?: Maybe<PhoneNumber>;
  id: Scalars['ID']['output'];
  incomingCall: Scalars['Boolean']['output'];
  inferenceEvents?: Maybe<Array<InferenceEvent>>;
  internalTransferDialId?: Maybe<Scalars['ID']['output']>;
  notes: Scalars['String']['output'];
  phoneField: Scalars['String']['output'];
  recordings: Array<CallRecording>;
  status: Scalars['String']['output'];
  systemResultType?: Maybe<SystemResultType>;
  toNumber: Scalars['String']['output'];
  transcript?: Maybe<CallTranscript>;
  user: User;
  versionedPrompt?: Maybe<VersionedPrompt>;
};

export type DialComment = {
  __typename?: 'DialComment';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type DialConnectMessage = {
  __typename?: 'DialConnectMessage';
  contactId?: Maybe<Scalars['ID']['output']>;
  dialId: Scalars['ID']['output'];
};

export type DialCreateMessage = {
  __typename?: 'DialCreateMessage';
  complete: Scalars['Boolean']['output'];
  dial: Dial;
};

export type DialEvent = {
  __typename?: 'DialEvent';
  eventType: DialEventType;
  pauseChangeMessage?: Maybe<PauseChangeMessage>;
  statusChangeMessage?: Maybe<StatusChangeMessage>;
};

export enum DialEventType {
  PauseChange = 'PAUSE_CHANGE',
  StatusChange = 'STATUS_CHANGE'
}

export type DialFilter = {
  agentFieldValues?: InputMaybe<Array<AgentFieldValue>>;
  callAgents?: InputMaybe<Array<Scalars['ID']['input']>>;
  callDirections?: InputMaybe<Array<CallDirection>>;
  callTypes?: InputMaybe<Array<CallType>>;
  extractorValues?: InputMaybe<Array<ExtractorValue>>;
  inputValues?: InputMaybe<Array<InputValue>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<TimeRange>;
};

export type DialListResult = {
  __typename?: 'DialListResult';
  dials: Array<Dial>;
  numDials: Scalars['Int']['output'];
};

export enum DialResult {
  Connected = 'CONNECTED',
  Meeting = 'MEETING',
  NoAnswer = 'NO_ANSWER'
}

export type DialSession = {
  __typename?: 'DialSession';
  /**
   * The allowed numbers that can be used to call in this session.
   * If empty, all phone numbers are allowed.
   */
  allowedPhoneIDs?: Maybe<Array<Scalars['ID']['output']>>;
  callAgent?: Maybe<CallAgent>;
  connectedDial?: Maybe<Dial>;
  contactFilter?: Maybe<ContactFilter>;
  contactList: ContactList;
  contactListId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Time']['output']>;
  dialTreeStrategy: DialTreeStrategy;
  dispositions: Array<CallDisposition>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  numParallel: Scalars['Int']['output'];
  phoneFields?: Maybe<Array<Scalars['String']['output']>>;
  recordingSetting: RecordingSettingType;
  sessionContacts: SessionContactsResult;
  sortDesc?: Maybe<Scalars['Boolean']['output']>;
  sortField?: Maybe<Scalars['String']['output']>;
  status: DialSessionStatus;
  tableFields?: Maybe<Array<Scalars['String']['output']>>;
  telephonyProvider: Scalars['String']['output'];
  voicemailId?: Maybe<Scalars['String']['output']>;
};


export type DialSessionDispositionsArgs = {
  subtype?: InputMaybe<Scalars['String']['input']>;
};


export type DialSessionSessionContactsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<SessionContactsFilter>;
  limit: Scalars['Int']['input'];
};

export type DialSessionFilter = {
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type DialSessionListResult = {
  __typename?: 'DialSessionListResult';
  dialSessions: Array<DialSession>;
  numDialSessions: Scalars['Int']['output'];
};

export enum DialSessionStatus {
  Active = 'ACTIVE',
  Complete = 'COMPLETE',
  Initialized = 'INITIALIZED',
  Paused = 'PAUSED'
}

export enum DialSessionUpdateReason {
  BrowserDisconnect = 'BROWSER_DISCONNECT',
  Manual = 'MANUAL',
  PassComplete = 'PASS_COMPLETE'
}

export type DialTask = {
  __typename?: 'DialTask';
  completedDial?: Maybe<Dial>;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  inputData: Scalars['Map']['output'];
  keyInputs: Array<Scalars['String']['output']>;
  results?: Maybe<Scalars['Map']['output']>;
  status: DialTaskStatus;
};

export type DialTaskFilter = {
  callAgents?: InputMaybe<Array<Scalars['ID']['input']>>;
  inputValues?: InputMaybe<Array<InputValue>>;
};

export type DialTaskListResult = {
  __typename?: 'DialTaskListResult';
  dialTasks: Array<DialTask>;
  numDialTasks: Scalars['Int']['output'];
};

export enum DialTaskStatus {
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Running = 'RUNNING'
}

export enum DialTreeStrategy {
  Connect = 'CONNECT',
  Skip = 'SKIP'
}

export type DialsUpdatedMessage = {
  __typename?: 'DialsUpdatedMessage';
  contactComplete: Scalars['Boolean']['output'];
  contactId?: Maybe<Scalars['ID']['output']>;
  dials: Array<Dial>;
};

export type ExtractorField = {
  __typename?: 'ExtractorField';
  customFieldJsonSchema?: Maybe<Scalars['String']['output']>;
  customFieldTs?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nullable: Scalars['Boolean']['output'];
  type: ExtractorFieldType;
};

export type ExtractorFieldInput = {
  customFieldJsonSchema?: InputMaybe<Scalars['String']['input']>;
  customFieldTs?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nullable: Scalars['Boolean']['input'];
  type: ExtractorFieldType;
};

export enum ExtractorFieldType {
  Boolean = 'BOOLEAN',
  Custom = 'CUSTOM',
  Float = 'FLOAT',
  Integer = 'INTEGER',
  String = 'STRING'
}

export type ExtractorValue = {
  fieldName: Scalars['String']['input'];
  valueBool?: InputMaybe<Scalars['Boolean']['input']>;
  valueString?: InputMaybe<Scalars['String']['input']>;
};

export enum FeedbackType {
  AiError = 'AI_ERROR',
  FalsePositive = 'FALSE_POSITIVE',
  PickupDelay = 'PICKUP_DELAY'
}

export type FieldOption = {
  __typename?: 'FieldOption';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FieldOptionsResult = {
  __typename?: 'FieldOptionsResult';
  fieldOptions: Array<FieldOption>;
  numFieldOptions: Scalars['Int']['output'];
};

export enum FieldType {
  Input = 'INPUT',
  Textarea = 'TEXTAREA'
}

export type FilterableField = {
  __typename?: 'FilterableField';
  fieldId: Scalars['String']['output'];
  fieldName: Scalars['String']['output'];
};

export enum FlowConditionType {
  Always = 'always',
  Equal = 'equal',
  Greater = 'greater',
  In = 'in',
  Language = 'language',
  Less = 'less'
}

export type FlowDefinition = {
  __typename?: 'FlowDefinition';
  aiOpen: Scalars['Boolean']['output'];
  globalContext?: Maybe<Scalars['String']['output']>;
  nodes: Array<ApiFlowNode>;
  openingLineType: OpeningLineType;
  useHistory: Scalars['Boolean']['output'];
};

export type FlowDefinitionInput = {
  aiOpen?: InputMaybe<Scalars['Boolean']['input']>;
  globalContext?: InputMaybe<Scalars['String']['input']>;
  nodes?: InputMaybe<Array<ApiFlowNodeInput>>;
  openingLineType?: InputMaybe<OpeningLineType>;
  useHistory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FlowTransitionRule = {
  __typename?: 'FlowTransitionRule';
  arrayConditionType?: Maybe<ArrayConditionType>;
  conditionType: FlowConditionType;
  field?: Maybe<Scalars['String']['output']>;
  transitionNodeId: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Scalars['String']['output']>>;
};

export type FlowTransitionRuleInput = {
  arrayConditionType?: InputMaybe<ArrayConditionType>;
  conditionType: FlowConditionType;
  field?: InputMaybe<Scalars['String']['input']>;
  transitionNodeId: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FunctionCallRes = {
  __typename?: 'FunctionCallRes';
  arguments: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type FunctionDefinition = {
  __typename?: 'FunctionDefinition';
  arguments: Array<ExtractorField>;
  description: Scalars['String']['output'];
  dslDefinition: Scalars['String']['output'];
  functionType: FunctionType;
  id: Scalars['ID']['output'];
  lifecycleMessages: FunctionLifecycleMessages;
  name: Scalars['String']['output'];
  outputs: Array<ExtractorField>;
};

export type FunctionDefinitionFilter = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FunctionDefinitionsResult = {
  __typename?: 'FunctionDefinitionsResult';
  functionDefinitions: Array<FunctionDefinition>;
  numFunctionDefinitions: Scalars['Int']['output'];
};

export type FunctionLifecycleMessages = {
  __typename?: 'FunctionLifecycleMessages';
  started: Array<Scalars['String']['output']>;
};

export type FunctionLifecycleMessagesInput = {
  started: Array<Scalars['String']['input']>;
};

export enum FunctionType {
  Api = 'API',
  CallTransfer = 'CALL_TRANSFER',
  Custom = 'CUSTOM',
  KnowledgeBase = 'KNOWLEDGE_BASE'
}

export type GrantCreditsInput = {
  balanceCents: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type HubspotSettingsInput = {
  crmSpecificationId: Scalars['ID']['input'];
  timezone?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export enum IvrDetectionType {
  None = 'NONE',
  Standard = 'STANDARD'
}

export type IdleConfigInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  idleDurationMilliseconds?: InputMaybe<Scalars['Int']['input']>;
  maxIdleMessages?: InputMaybe<Scalars['Int']['input']>;
  messages?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type IdleMessageConfig = {
  __typename?: 'IdleMessageConfig';
  enabled: Scalars['Boolean']['output'];
  idleDurationMilliseconds?: Maybe<Scalars['Int']['output']>;
  maxIdleMessages?: Maybe<Scalars['Int']['output']>;
  messages?: Maybe<Array<Scalars['String']['output']>>;
};

export type ImportPhoneNumberInput = {
  provider: Scalars['String']['input'];
  providerPhoneNumberId: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type InboundForwardNumberInput = {
  number?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type InferenceEvent = {
  __typename?: 'InferenceEvent';
  eventType: InferenceEventType;
  log?: Maybe<Scalars['String']['output']>;
  playId: Scalars['String']['output'];
  timestampMs: Scalars['Int']['output'];
};

export enum InferenceEventType {
  AudioInferenceFirstAudio = 'AUDIO_INFERENCE_FIRST_AUDIO',
  LlmInferenceEnded = 'LLM_INFERENCE_ENDED',
  LlmInferenceFirstToken = 'LLM_INFERENCE_FIRST_TOKEN',
  LlmInferenceStarted = 'LLM_INFERENCE_STARTED',
  StartSpeaking = 'START_SPEAKING',
  TranscriptReceived = 'TRANSCRIPT_RECEIVED'
}

export type InputValue = {
  inputName: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type IntegrationChoicesFilter = {
  search: Scalars['String']['input'];
};

export type IntegrationList = {
  __typename?: 'IntegrationList';
  label: Scalars['String']['output'];
  options: Array<ListListsItem>;
};

export type IntegrationListsResponse = {
  __typename?: 'IntegrationListsResponse';
  integrationLists: Array<IntegrationList>;
};

export type KnowledgeBase = {
  __typename?: 'KnowledgeBase';
  files: ListKnowledgeBaseFilesResult;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type KnowledgeBaseFilesArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type KnowledgeBaseFile = {
  __typename?: 'KnowledgeBaseFile';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: KnowledgeBaseFileStatus;
};

export enum KnowledgeBaseFileStatus {
  Active = 'ACTIVE',
  Processing = 'PROCESSING'
}

export type LinkFunctionDefinitionInput = {
  id: Scalars['ID']['input'];
  lifecycleMessagesOverride?: InputMaybe<FunctionLifecycleMessagesInput>;
};

export type LinkPhoneNumberInput = {
  agentId: Scalars['ID']['input'];
  phoneNumberId: Scalars['ID']['input'];
};

export type ListContactImportOptionsRes = {
  __typename?: 'ListContactImportOptionsRes';
  spec: Array<ContactListImportOptionSpec>;
};

export type ListKnowledgeBaseFilesResult = {
  __typename?: 'ListKnowledgeBaseFilesResult';
  knowledgeBaseFiles: Array<KnowledgeBaseFile>;
  numKnowledgeBaseFiles: Scalars['Int']['output'];
};

export type ListKnowledgeBasesResult = {
  __typename?: 'ListKnowledgeBasesResult';
  knowledgeBases: Array<KnowledgeBase>;
  numKnowledgeBases: Scalars['Int']['output'];
};

export type ListListsItem = {
  __typename?: 'ListListsItem';
  createdTime: Scalars['String']['output'];
  crmId: Scalars['String']['output'];
  crmSpecification: CrmSpecification;
  internalId?: Maybe<Scalars['String']['output']>;
  modifiedTime: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type LogCallResponse = {
  __typename?: 'LogCallResponse';
  success: Scalars['Boolean']['output'];
};

export type LogDialFeedbackInput = {
  dialId: Scalars['ID']['input'];
  feedbackType: FeedbackType;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LookupKnowledgeBaseInput = {
  knowledgeBaseFileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  knowledgeBaseId: Scalars['ID']['input'];
  query: Scalars['String']['input'];
};

export type LookupKnowledgeBaseResult = {
  __typename?: 'LookupKnowledgeBaseResult';
  references?: Maybe<Array<SpeakerTextKnowledgeBaseContext>>;
  result: Scalars['String']['output'];
};

export type MarkTaskCompleteInput = {
  dialId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
};

export type MemberCountRes = {
  __typename?: 'MemberCountRes';
  dialing: Scalars['Int']['output'];
};

export type ModelOptionValue = {
  __typename?: 'ModelOptionValue';
  optionId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type ModelOptionValueInput = {
  optionId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

export type MonitorActiveUsersInput = {
  workspaceId: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBalance: Workspace;
  addDialAiEvalRecord: AiEvalConfig;
  addKnowledgeBaseFiles: Array<KnowledgeBaseFile>;
  addPhoneNumber: PhoneNumber;
  agentVariables: Array<Scalars['String']['output']>;
  applyCRMAction: Contact;
  assignContactList: ContactList;
  browserDialToken: BrowserDialTokenRes;
  cloneAgent: CallAgent;
  cloneExtractor: CallAgentExtractor;
  cloneVoice: AiVoice;
  completeOnboarding: Workspace;
  connectCall: Scalars['Boolean']['output'];
  createAPIKey: CreateApiKeyResponse;
  createAdHocDialSession: AdHocDialSession;
  createAiChat: AiChat;
  createAiEvalConfig: AiEvalConfig;
  createAiModel: AiModel;
  createAiVoice: AiVoice;
  createCallAgent: CallAgent;
  createCallAgentExtractor: CallAgentExtractor;
  createCallAgentNode: ApiFlowNode;
  createCallDataPreset: CallDataPreset;
  createCoachingComment: CoachingComment;
  createContact: Contact;
  createContactList?: Maybe<Scalars['String']['output']>;
  createDNCRecords?: Maybe<Array<DncRecord>>;
  /** API Key only function for public */
  createDial: CreateDialResult;
  createDialComment: DialComment;
  createDialSession: DialSession;
  createDialTask: DialTask;
  createDisposition: CallDisposition;
  createFunctionDefinition: FunctionDefinition;
  createKnowledgeBase: KnowledgeBase;
  createPricingProduct: PricingProduct;
  createSalesfloorRoom: SalesfloorRoom;
  createSpamScan: Array<PhoneNumber>;
  createTaskAttempt: CreateDialResult;
  createUserApiKey: ApiKey;
  createVersionedPrompt: VersionedPrompt;
  createVoicemail: Voicemail;
  createWorkspace: Workspace;
  deleteAiVoice: Scalars['Boolean']['output'];
  deleteCallAgent: CallAgent;
  deleteCallAgentNode: ApiFlowNodeDeleteResult;
  deleteCallDataPreset: Scalars['Boolean']['output'];
  deleteContact?: Maybe<Scalars['ID']['output']>;
  deleteContactList?: Maybe<Scalars['ID']['output']>;
  deleteDisposition: Scalars['ID']['output'];
  deleteFunctionDefinition: FunctionDefinition;
  deleteKnowledgeBaseFile: Scalars['Boolean']['output'];
  deleteVoicemail: Scalars['ID']['output'];
  dialNumbers: Scalars['String']['output'];
  dialToken: Scalars['String']['output'];
  editSubscriptionLink: Scalars['String']['output'];
  endDialSession: Scalars['Boolean']['output'];
  enrollSelfLearning: Workspace;
  genTempToken: Scalars['String']['output'];
  generateVideoToken: VideoTokenResp;
  grantCredits: Workspace;
  hangupAllCalls: Scalars['Boolean']['output'];
  hangupCall: Scalars['Boolean']['output'];
  importPhoneNumber: PhoneNumber;
  linkPhoneNumber: CallAgent;
  logCall: LogCallResponse;
  logDialFeedback: Scalars['Boolean']['output'];
  login?: Maybe<AuthPayload>;
  lookupKnowledgeBase: LookupKnowledgeBaseResult;
  markTaskComplete: DialTask;
  newSubscriptionLink: Scalars['String']['output'];
  pauseAI: Dial;
  pauseDialSession: Scalars['Boolean']['output'];
  phoneNumberSearch?: Maybe<Array<Scalars['String']['output']>>;
  removeMemberAccess: Scalars['String']['output'];
  removePhoneNumber: PhoneNumber;
  resyncContacts: Scalars['ID']['output'];
  runAiEval: AiEvalRun;
  runExtractor: Scalars['Map']['output'];
  setMemberAccess: WorkspaceMember;
  setRecordingConfig: RecordingConfig;
  signUp?: Maybe<AuthPayload>;
  startDialSession: Scalars['Boolean']['output'];
  submitPhoneNumberOtp: SubmitPhoneNumberOtpResult;
  sudoToken: TokenRes;
  syncDispositions: SyncDispositionsResponse;
  testAiVoice: Scalars['String']['output'];
  unlinkPhoneNumberAgent: CallAgent;
  updateAiEvalConfig: AiEvalConfig;
  updateAiModel: AiModel;
  updateAiModelAccess: AiModel;
  updateAiVoice: AiVoice;
  updateAiVoiceAccess: AiVoice;
  updateApolloSettings: CrmSpecification;
  updateAppConfig: AppConfig;
  updateCallAgent: CallAgent;
  updateCallAgentExtractor: CallAgentExtractor;
  updateCallAgentNode: ApiFlowNode;
  updateCallAgentPronunciationMap: CallAgent;
  updateCustomDetectorRegexps: Workspace;
  updateDialMetadata: Dial;
  updateDialSessionName: DialSession;
  updateDisposition: CallDisposition;
  updateFunctionDefinition: FunctionDefinition;
  updateHubspotSettings: CrmSpecification;
  updateInboundForwardNumber?: Maybe<Scalars['String']['output']>;
  updateLimits: Workspace;
  updateRefillSettings: Workspace;
  updateSalesforceSettings: CrmSpecification;
  updateSalesloftSettings: CrmSpecification;
  updateSystemResultMapping: SystemResult;
  updateVersionedPrompt: VersionedPrompt;
  updateWorkspaceBillingConfig: Workspace;
  updateWorkspacePronunciationMap: Workspace;
  updateWorkspaceSettings: Workspace;
  updateWorkspaceUserSettings: Workspace;
  updateWorkspaceWebhook: Workspace;
  verifyPhoneNumber: PhoneNumberVerification;
};


export type MutationAddBalanceArgs = {
  input: AddBalanceInput;
};


export type MutationAddDialAiEvalRecordArgs = {
  input: AddDialAiEvalRecordInput;
};


export type MutationAddKnowledgeBaseFilesArgs = {
  input: AddKnowledgeBaseFilesInput;
};


export type MutationAddPhoneNumberArgs = {
  phoneNumber: Scalars['String']['input'];
  webhookUrl?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAgentVariablesArgs = {
  input: AgentVariablesInput;
};


export type MutationApplyCrmActionArgs = {
  input: CrmActionInput;
};


export type MutationAssignContactListArgs = {
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationBrowserDialTokenArgs = {
  input: BrowserDialTokenInput;
};


export type MutationCloneAgentArgs = {
  input: CloneAgentInput;
};


export type MutationCloneExtractorArgs = {
  input: CloneExtractorInput;
};


export type MutationCloneVoiceArgs = {
  input: CloneVoiceInput;
};


export type MutationCompleteOnboardingArgs = {
  input: CompleteOnboardingInput;
};


export type MutationConnectCallArgs = {
  dialId: Scalars['ID']['input'];
};


export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationCreateAdHocDialSessionArgs = {
  input: CreateAdHocDialSessionInput;
};


export type MutationCreateAiChatArgs = {
  input: CreateChatInput;
};


export type MutationCreateAiEvalConfigArgs = {
  input: CreateAiEvalConfigInput;
};


export type MutationCreateAiModelArgs = {
  input: CreateAiModelInput;
};


export type MutationCreateAiVoiceArgs = {
  input: CreateAiVoiceInput;
};


export type MutationCreateCallAgentArgs = {
  input: CallAgentInput;
};


export type MutationCreateCallAgentExtractorArgs = {
  input: CreateCallAgentExtractorInput;
};


export type MutationCreateCallAgentNodeArgs = {
  input: CreateCallAgentNodeInput;
};


export type MutationCreateCallDataPresetArgs = {
  input: CreateCallDataPresetInput;
};


export type MutationCreateCoachingCommentArgs = {
  input: CreateCoachingCommentInput;
};


export type MutationCreateContactArgs = {
  attributes?: InputMaybe<Scalars['Map']['input']>;
  contactListId: Scalars['ID']['input'];
  crmSpecificationName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationCreateContactListArgs = {
  csvFile?: InputMaybe<Scalars['Upload']['input']>;
  input: CreateContactListInput;
};


export type MutationCreateDncRecordsArgs = {
  input?: InputMaybe<DncRecordInput>;
};


export type MutationCreateDialArgs = {
  input: CreateDialInput;
};


export type MutationCreateDialCommentArgs = {
  input: CreateDialCommentInput;
};


export type MutationCreateDialSessionArgs = {
  input: CreateDialSessionInput;
};


export type MutationCreateDialTaskArgs = {
  input: CreateDialTaskInput;
};


export type MutationCreateDispositionArgs = {
  input: CreateDispositionInput;
};


export type MutationCreateFunctionDefinitionArgs = {
  input: CreateFunctionDefinitionInput;
};


export type MutationCreateKnowledgeBaseArgs = {
  input: CreateKnowledgeBaseInput;
};


export type MutationCreatePricingProductArgs = {
  input: CreatePricingProductInput;
};


export type MutationCreateSalesfloorRoomArgs = {
  input: CreateSalesfloorRoomInput;
};


export type MutationCreateSpamScanArgs = {
  input: CreateSpamScanInput;
};


export type MutationCreateTaskAttemptArgs = {
  input: CreateTaskAttemptInput;
};


export type MutationCreateUserApiKeyArgs = {
  input: CreateUserApiKeyInput;
};


export type MutationCreateVersionedPromptArgs = {
  input: CreateVersionedPromptInput;
};


export type MutationCreateVoicemailArgs = {
  file: Scalars['Upload']['input'];
  input: CreateVoicemailInput;
};


export type MutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationDeleteAiVoiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCallAgentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCallAgentNodeArgs = {
  input: DeleteCallAgentNodeInput;
};


export type MutationDeleteCallDataPresetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContactListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDispositionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFunctionDefinitionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteKnowledgeBaseFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteVoicemailArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDialNumbersArgs = {
  phoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  workspaceId: Scalars['ID']['input'];
};


export type MutationDialTokenArgs = {
  dialId: Scalars['ID']['input'];
};


export type MutationEditSubscriptionLinkArgs = {
  workspaceId: Scalars['ID']['input'];
};


export type MutationEndDialSessionArgs = {
  dialSessionId: Scalars['ID']['input'];
};


export type MutationEnrollSelfLearningArgs = {
  workspaceId: Scalars['ID']['input'];
};


export type MutationGenerateVideoTokenArgs = {
  roomId: Scalars['ID']['input'];
};


export type MutationGrantCreditsArgs = {
  input: GrantCreditsInput;
};


export type MutationHangupAllCallsArgs = {
  dialSessionId: Scalars['ID']['input'];
};


export type MutationHangupCallArgs = {
  dialId: Scalars['ID']['input'];
  dropVoicemail?: InputMaybe<Scalars['Boolean']['input']>;
  transferNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationImportPhoneNumberArgs = {
  input: ImportPhoneNumberInput;
};


export type MutationLinkPhoneNumberArgs = {
  input: LinkPhoneNumberInput;
};


export type MutationLogCallArgs = {
  dialId: Scalars['ID']['input'];
};


export type MutationLogDialFeedbackArgs = {
  input: LogDialFeedbackInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLookupKnowledgeBaseArgs = {
  input: LookupKnowledgeBaseInput;
};


export type MutationMarkTaskCompleteArgs = {
  input: MarkTaskCompleteInput;
};


export type MutationNewSubscriptionLinkArgs = {
  workspaceId: Scalars['ID']['input'];
};


export type MutationPauseAiArgs = {
  dialId: Scalars['ID']['input'];
  pauseStatus: Scalars['Boolean']['input'];
};


export type MutationPauseDialSessionArgs = {
  dialSessionId: Scalars['ID']['input'];
};


export type MutationPhoneNumberSearchArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  prefix: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRemoveMemberAccessArgs = {
  userId: Scalars['ID']['input'];
  workspaceId: Scalars['ID']['input'];
};


export type MutationRemovePhoneNumberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResyncContactsArgs = {
  contactListId: Scalars['ID']['input'];
};


export type MutationRunAiEvalArgs = {
  input: RunAiEvalInput;
};


export type MutationRunExtractorArgs = {
  dialId: Scalars['ID']['input'];
  extractorId: Scalars['ID']['input'];
  writeData?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSetMemberAccessArgs = {
  email: Scalars['String']['input'];
  role: Role;
  workspaceId: Scalars['ID']['input'];
};


export type MutationSetRecordingConfigArgs = {
  input: RecordingConfigInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationStartDialSessionArgs = {
  dialSessionId: Scalars['ID']['input'];
};


export type MutationSubmitPhoneNumberOtpArgs = {
  input: SubmitPhoneNumberOtpInput;
};


export type MutationSudoTokenArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationSyncDispositionsArgs = {
  crmSpecificationId: Scalars['ID']['input'];
  workspaceId: Scalars['ID']['input'];
};


export type MutationTestAiVoiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnlinkPhoneNumberAgentArgs = {
  input: UnlinkPhoneNumberAgentInput;
};


export type MutationUpdateAiEvalConfigArgs = {
  input: UpdateAiEvalConfigInput;
};


export type MutationUpdateAiModelArgs = {
  input: UpdateAiModelInput;
};


export type MutationUpdateAiModelAccessArgs = {
  input: UpdateAiModelAccessInput;
};


export type MutationUpdateAiVoiceArgs = {
  input: UpdateAiVoiceInput;
};


export type MutationUpdateAiVoiceAccessArgs = {
  input: UpdateAiVoiceAccessInput;
};


export type MutationUpdateApolloSettingsArgs = {
  input: ApolloSettingsInput;
};


export type MutationUpdateAppConfigArgs = {
  input: UpdateAppConfigInput;
};


export type MutationUpdateCallAgentArgs = {
  input: UpdateCallAgentInput;
};


export type MutationUpdateCallAgentExtractorArgs = {
  input: UpdateCallAgentExtractorInput;
};


export type MutationUpdateCallAgentNodeArgs = {
  input: UpdateCallAgentNodeInput;
};


export type MutationUpdateCallAgentPronunciationMapArgs = {
  input: UpdateCallAgentPronunciationMapInput;
};


export type MutationUpdateCustomDetectorRegexpsArgs = {
  input: UpdateWorkspaceCustomDetectorRegexps;
};


export type MutationUpdateDialMetadataArgs = {
  input: UpdateDialMetadataInput;
};


export type MutationUpdateDialSessionNameArgs = {
  input: UpdateDialSessionNameInput;
};


export type MutationUpdateDispositionArgs = {
  input: UpdateDispositionInput;
};


export type MutationUpdateFunctionDefinitionArgs = {
  input: UpdateFunctionDefinitionInput;
};


export type MutationUpdateHubspotSettingsArgs = {
  input: HubspotSettingsInput;
};


export type MutationUpdateInboundForwardNumberArgs = {
  input: InboundForwardNumberInput;
};


export type MutationUpdateLimitsArgs = {
  input?: InputMaybe<WorkspaceLimitsInput>;
};


export type MutationUpdateRefillSettingsArgs = {
  input: UpdateRefillSettingsInput;
};


export type MutationUpdateSalesforceSettingsArgs = {
  input: SalesforceSettingsInput;
};


export type MutationUpdateSalesloftSettingsArgs = {
  input: SalesloftSettingsInput;
};


export type MutationUpdateSystemResultMappingArgs = {
  input: UpdateSystemResultMappingInput;
};


export type MutationUpdateVersionedPromptArgs = {
  input: UpdateVersionedPromptInput;
};


export type MutationUpdateWorkspaceBillingConfigArgs = {
  input: UpdateWorkspaceBillingConfig;
};


export type MutationUpdateWorkspacePronunciationMapArgs = {
  input: UpdateWorkspacePronunciationMapInput;
};


export type MutationUpdateWorkspaceSettingsArgs = {
  input: UpdateWorkspaceSettingsInput;
};


export type MutationUpdateWorkspaceUserSettingsArgs = {
  input: UserWorkspaceSettingsInput;
};


export type MutationUpdateWorkspaceWebhookArgs = {
  input: WorkspaceWebhookInput;
};


export type MutationVerifyPhoneNumberArgs = {
  input: VerifyPhoneNumberInput;
};

export type NodeTransitionResult = {
  __typename?: 'NodeTransitionResult';
  fromNodeId: Scalars['String']['output'];
  result?: Maybe<Scalars['Any']['output']>;
  toNodeId: Scalars['String']['output'];
};

export type NullableIdInput = {
  value?: InputMaybe<Scalars['ID']['input']>;
};

export type NullableStringInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

export type OnboardingSurveyInput = {
  callVolume: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  referrer?: InputMaybe<Scalars['String']['input']>;
  useCase: Scalars['String']['input'];
};

export enum OpeningLineType {
  InboundOnly = 'INBOUND_ONLY',
  InboundOutbound = 'INBOUND_OUTBOUND',
  None = 'NONE'
}

export type OverLimitResult = {
  __typename?: 'OverLimitResult';
  exceededLimit: Scalars['Boolean']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  limitType?: Maybe<Scalars['String']['output']>;
};

export type PauseChangeMessage = {
  __typename?: 'PauseChangeMessage';
  pauseStatus: Scalars['Boolean']['output'];
};

export type PhoneNumber = {
  __typename?: 'PhoneNumber';
  callAgent?: Maybe<CallAgent>;
  id: Scalars['ID']['output'];
  number: Scalars['String']['output'];
  spamInfo?: Maybe<SpamData>;
  stats: PhoneNumberStats;
};

export type PhoneNumberStats = {
  __typename?: 'PhoneNumberStats';
  numConnects: Scalars['Int']['output'];
  numDials: Scalars['Int']['output'];
  numFails: Scalars['Int']['output'];
};

export type PhoneNumberVerification = {
  __typename?: 'PhoneNumberVerification';
  id: Scalars['ID']['output'];
};

export type PhoneNumbersResult = {
  __typename?: 'PhoneNumbersResult';
  numPhoneNumbers: Scalars['Int']['output'];
  phoneNumbers: Array<PhoneNumber>;
};

export type PricingProduct = {
  __typename?: 'PricingProduct';
  billingName: Scalars['String']['output'];
  descriptiveName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  priceDecimal: Scalars['String']['output'];
};

export type PronunciationEntry = {
  __typename?: 'PronunciationEntry';
  ipaPronunciation: Scalars['String']['output'];
  word: Scalars['String']['output'];
  wordReplacement?: Maybe<Scalars['String']['output']>;
};

export type PronunciationEntryInput = {
  ipaPronunciation: Scalars['String']['input'];
  word: Scalars['String']['input'];
  wordReplacement?: InputMaybe<Scalars['String']['input']>;
};

export type PronunciationMap = {
  __typename?: 'PronunciationMap';
  id: Scalars['ID']['output'];
  pronunciationEntries: Array<PronunciationEntry>;
};

export type Query = {
  __typename?: 'Query';
  aiChat: AiChat;
  aiEvalConfig: AiEvalConfig;
  aiEvalResult: AiEvalResult;
  aiEvalRun: AiEvalRun;
  aiModel: AiModel;
  aiModels: AiModelsResult;
  aiVoice: AiVoice;
  allWorkspaces: AllWorkspacesResult;
  appConfig: AppConfig;
  callAgent: CallAgent;
  callDataPreset: CallDataPreset;
  contact: Contact;
  contactList: ContactList;
  currentUser: User;
  dial: Dial;
  dialSession: DialSession;
  dialTask: DialTask;
  extractor: CallAgentExtractor;
  functionDefinition: FunctionDefinition;
  knowledgeBase: KnowledgeBase;
  phoneNumber: PhoneNumber;
  pricingProduct: PricingProduct;
  pricingProducts: Array<PricingProduct>;
  recording: CallRecording;
  salesfloorRoom: SalesfloorRoom;
  versionedPrompt: VersionedPrompt;
  voicemail: Voicemail;
  voices: AiVoicesResult;
  workspace: Workspace;
  workspaces: Array<Maybe<Workspace>>;
};


export type QueryAiChatArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAiEvalConfigArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAiEvalResultArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAiEvalRunArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAiModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAiModelsArgs = {
  filter?: InputMaybe<AiModelFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryAiVoiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAllWorkspacesArgs = {
  filter: AllWorkspacesFilterInput;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryCallAgentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCallDataPresetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactListArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDialArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDialSessionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDialTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExtractorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFunctionDefinitionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryKnowledgeBaseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhoneNumberArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPricingProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRecordingArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySalesfloorRoomArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVersionedPromptArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoicemailArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoicesArgs = {
  filter?: InputMaybe<VoiceFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryWorkspaceArgs = {
  id: Scalars['ID']['input'];
};

export type QuickstartProject = {
  __typename?: 'QuickstartProject';
  agentId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nonQuickstart: Scalars['Boolean']['output'];
};

export type RangeEndpoint = {
  __typename?: 'RangeEndpoint';
  label?: Maybe<Scalars['String']['output']>;
  value: Scalars['Float']['output'];
};

export type RecordingConfig = {
  __typename?: 'RecordingConfig';
  blockedAreaCodes?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
};

export type RecordingConfigInput = {
  blockedAreaCodes: Array<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export enum RecordingSettingType {
  BlockAreaCodes = 'BLOCK_AREA_CODES',
  RecordAll = 'RECORD_ALL',
  RecordNone = 'RECORD_NONE'
}

export enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Member = 'MEMBER'
}

export enum RoomMessageType {
  UserJoin = 'USER_JOIN',
  UserLeave = 'USER_LEAVE'
}

export type RunAiEvalInput = {
  aiEvalConfigId: Scalars['ID']['input'];
  callAgentId: Scalars['ID']['input'];
  versionedPromptId: Scalars['ID']['input'];
};

export type RunChatQueryInput = {
  aiChatId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type RunChatQueryStreamResult = {
  __typename?: 'RunChatQueryStreamResult';
  messageType: ChatStreamMessageType;
  speakerRes?: Maybe<SpeakerTextRes>;
  text?: Maybe<Scalars['String']['output']>;
};

export type RunModelCounterfactualInput = {
  dialId: Scalars['ID']['input'];
  versionedPromptId: Scalars['ID']['input'];
};

export type RunModelCounterfactualResult = {
  __typename?: 'RunModelCounterfactualResult';
  index: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type SalesfloorRoom = {
  __typename?: 'SalesfloorRoom';
  id: Scalars['ID']['output'];
  members: Array<SalesfloorRoomMember>;
  name: Scalars['String']['output'];
};

export type SalesfloorRoomMember = {
  __typename?: 'SalesfloorRoomMember';
  user: User;
};

export type SalesfloorRoomMessage = {
  __typename?: 'SalesfloorRoomMessage';
  joinedUser?: Maybe<User>;
  leftUserId?: Maybe<Scalars['ID']['output']>;
  messageType: RoomMessageType;
};

export enum SalesfloorType {
  Full = 'FULL',
  LiveListen = 'LIVE_LISTEN',
  None = 'NONE'
}

export type SalesforceSettingsInput = {
  crmSpecificationId: Scalars['ID']['input'];
  customFields?: InputMaybe<Array<Scalars['String']['input']>>;
  dispositionField?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export enum SalesloftNotesMode {
  Full = 'FULL',
  NotesOnly = 'NOTES_ONLY'
}

export type SalesloftSettingsInput = {
  crmSpecificationId: Scalars['ID']['input'];
  notesMode?: InputMaybe<SalesloftNotesMode>;
  workspaceId: Scalars['ID']['input'];
};

export type SessionContact = {
  __typename?: 'SessionContact';
  contact: Contact;
  dials?: Maybe<Array<Dial>>;
};

export type SessionContactsFilter = {
  complete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionContactsResult = {
  __typename?: 'SessionContactsResult';
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  numSessionContacts: Scalars['Int']['output'];
  sessionContacts: Array<SessionContact>;
};

export type SessionDialConnectMessage = {
  __typename?: 'SessionDialConnectMessage';
  dial: Dial;
  dialSessionId: Scalars['ID']['output'];
};

export type SessionDialDisconnectMessage = {
  __typename?: 'SessionDialDisconnectMessage';
  dialId: Scalars['ID']['output'];
  dialSessionId: Scalars['ID']['output'];
};

export type SessionLeaveMessage = {
  __typename?: 'SessionLeaveMessage';
  dialSessionId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type SessionMessage = {
  __typename?: 'SessionMessage';
  content?: Maybe<SessionMessageContent>;
  messageType: SessionMessageType;
};

export type SessionMessageContent = ContactCompleteMessage | DialConnectMessage | DialsUpdatedMessage | SessionUpdatedMessage;

export enum SessionMessageType {
  ContactComplete = 'CONTACT_COMPLETE',
  DialConnect = 'DIAL_CONNECT',
  GlobalCallConnect = 'GLOBAL_CALL_CONNECT',
  SessionContactUpdate = 'SESSION_CONTACT_UPDATE',
  SessionUpdate = 'SESSION_UPDATE'
}

export type SessionStatusChangeMessage = {
  __typename?: 'SessionStatusChangeMessage';
  dialSessionId: Scalars['ID']['output'];
  status: DialSessionStatus;
};

export type SessionUpdatedMessage = {
  __typename?: 'SessionUpdatedMessage';
  dialSession?: Maybe<DialSession>;
  reason?: Maybe<DialSessionUpdateReason>;
};

export type SetApolloUserResponse = {
  __typename?: 'SetApolloUserResponse';
  success: Scalars['Boolean']['output'];
};

export type SignUpInput = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SpamData = {
  __typename?: 'SpamData';
  flagged?: Maybe<Scalars['Boolean']['output']>;
  pendingScan: Scalars['Boolean']['output'];
  scanDate?: Maybe<Scalars['Time']['output']>;
};

export type SpeakerTextKnowledgeBaseContext = {
  __typename?: 'SpeakerTextKnowledgeBaseContext';
  file: KnowledgeBaseFile;
  text: Scalars['String']['output'];
};

export type SpeakerTextRes = {
  __typename?: 'SpeakerTextRes';
  audioEnd: Scalars['Int']['output'];
  audioStart: Scalars['Int']['output'];
  detailType?: Maybe<Scalars['String']['output']>;
  functionCalls?: Maybe<Array<FunctionCallRes>>;
  knowledgeBaseContext?: Maybe<Array<SpeakerTextKnowledgeBaseContext>>;
  nodeTransitionResult?: Maybe<NodeTransitionResult>;
  speaker: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type StatFilter = {
  contactLists?: InputMaybe<Array<Scalars['ID']['input']>>;
  dialSessions?: InputMaybe<Array<Scalars['ID']['input']>>;
  includeDispositions?: InputMaybe<Scalars['Boolean']['input']>;
  range: TimeRange;
};

export type StatusChangeMessage = {
  __typename?: 'StatusChangeMessage';
  status: Scalars['String']['output'];
};

export type SubmitPhoneNumberOtpInput = {
  otp: Scalars['String']['input'];
  phoneNumberVerificationId: Scalars['ID']['input'];
};

export type SubmitPhoneNumberOtpResult = {
  __typename?: 'SubmitPhoneNumberOtpResult';
  success: Scalars['Boolean']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  connectRoom: SalesfloorRoomMessage;
  connectSession: SessionMessage;
  listenForIncomingCalls: Dial;
  monitorActiveUsers: UserActivityMessage;
  runChatQueryStream: RunChatQueryStreamResult;
  runModelTranscriptCounterfactual: RunModelCounterfactualResult;
  watchDialEvents: DialEvent;
  watchTranscript: Array<SpeakerTextRes>;
  watchWorkspaceDialEvents: WorkspaceDialEvent;
};


export type SubscriptionConnectRoomArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionConnectSessionArgs = {
  sessionId: Scalars['ID']['input'];
};


export type SubscriptionListenForIncomingCallsArgs = {
  workspaceId: Scalars['ID']['input'];
};


export type SubscriptionMonitorActiveUsersArgs = {
  input: MonitorActiveUsersInput;
};


export type SubscriptionRunChatQueryStreamArgs = {
  input: RunChatQueryInput;
};


export type SubscriptionRunModelTranscriptCounterfactualArgs = {
  input: RunModelCounterfactualInput;
};


export type SubscriptionWatchDialEventsArgs = {
  dialId: Scalars['ID']['input'];
};


export type SubscriptionWatchTranscriptArgs = {
  dialId: Scalars['ID']['input'];
};


export type SubscriptionWatchWorkspaceDialEventsArgs = {
  workspaceId: Scalars['ID']['input'];
};

export type SyncDispositionsResponse = {
  __typename?: 'SyncDispositionsResponse';
  success: Scalars['Boolean']['output'];
};

export type SystemResult = {
  __typename?: 'SystemResult';
  mappedDisposition?: Maybe<CallDisposition>;
  name: Scalars['String']['output'];
  resultType: SystemResultType;
};

export enum SystemResultType {
  Busy = 'BUSY',
  Cancelled = 'CANCELLED',
  DialTreeFound = 'DIAL_TREE_FOUND',
  DncSkipped = 'DNC_SKIPPED',
  Failed = 'FAILED',
  NoAnswer = 'NO_ANSWER',
  NumberSkipped = 'NUMBER_SKIPPED',
  RateLimited = 'RATE_LIMITED',
  Timeout = 'TIMEOUT',
  UserHangup = 'USER_HANGUP',
  VoicemailLeft = 'VOICEMAIL_LEFT',
  VoicemailNotLeft = 'VOICEMAIL_NOT_LEFT'
}

export type TeamResult = {
  __typename?: 'TeamResult';
  members: Array<WorkspaceMember>;
  numMembers: Scalars['Int']['output'];
};

export type TimeCallStat = {
  __typename?: 'TimeCallStat';
  groups: Array<TimeCallStatValue>;
  time: Scalars['Time']['output'];
};

export type TimeCallStatLegend = {
  __typename?: 'TimeCallStatLegend';
  label: Scalars['String']['output'];
  statId: Scalars['String']['output'];
};

export type TimeCallStatValue = {
  __typename?: 'TimeCallStatValue';
  statId: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type TimeRange = {
  end?: InputMaybe<Scalars['Time']['input']>;
  start: Scalars['Time']['input'];
  /** IANA time zone */
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type TimeStatsResult = {
  __typename?: 'TimeStatsResult';
  legend: Array<TimeCallStatLegend>;
  stats: Array<TimeCallStat>;
};

export type TokenRes = {
  __typename?: 'TokenRes';
  token: Scalars['String']['output'];
};

export type TranscriberConfig = {
  __typename?: 'TranscriberConfig';
  type: Scalars['String']['output'];
};

export type TranscriberParamsInput = {
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  type: Scalars['String']['input'];
};

export type UnlinkPhoneNumberAgentInput = {
  agentId: Scalars['ID']['input'];
  phoneNumberId: Scalars['ID']['input'];
};

export type UpdateAiEvalConfigInput = {
  aiEvalConfigId: Scalars['ID']['input'];
  promptSnippet?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAiVoiceInput = {
  aiVoiceId: Scalars['ID']['input'];
  gender?: InputMaybe<VoiceGender>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerDetails?: InputMaybe<NullableStringInput>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  refAudio?: InputMaybe<Scalars['Upload']['input']>;
  refText?: InputMaybe<NullableStringInput>;
  workspaceId?: InputMaybe<NullableIdInput>;
};

export type UpdateAiModelAccessInput = {
  accessType: AccessType;
  aiModelId: Scalars['ID']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type UpdateAiModelInput = {
  aiModelId: Scalars['ID']['input'];
  allowedAgentType?: InputMaybe<AllowedAgentType>;
  modelParams?: InputMaybe<Scalars['String']['input']>;
  modelType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providerModelId?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateAiVoiceAccessInput = {
  accessType?: InputMaybe<AccessType>;
  aiVoiceId: Scalars['ID']['input'];
  providerDetails?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type UpdateAppConfigInput = {
  billingConfigJSON: Scalars['String']['input'];
};

export type UpdateCallAgentExtractorInput = {
  callAgentExtractorId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  extractorFields?: InputMaybe<Array<ExtractorFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  useVariables?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCallAgentInput = {
  agentId: Scalars['ID']['input'];
  backgroundNoiseType?: InputMaybe<Scalars['String']['input']>;
  callAgentExtractorId?: InputMaybe<NullableStringInput>;
  defaultPromptId?: InputMaybe<Scalars['ID']['input']>;
  idleMessageConfig?: InputMaybe<IdleConfigInput>;
  inboundWebhookResponse?: InputMaybe<Scalars['Boolean']['input']>;
  inboundWebhookURL?: InputMaybe<Scalars['String']['input']>;
  ivrDetectionType?: InputMaybe<IvrDetectionType>;
  ivrTaggingText?: InputMaybe<NullableStringInput>;
  ivrVersionedPromptId?: InputMaybe<NullableStringInput>;
  ivrVoiceId?: InputMaybe<NullableStringInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  linkedFunctionDefinitionInputs?: InputMaybe<Array<LinkFunctionDefinitionInput>>;
  maxDurationSeconds?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['Map']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openingLine?: InputMaybe<NullableStringInput>;
  openingLineType?: InputMaybe<OpeningLineType>;
  transcriberParams?: InputMaybe<TranscriberParamsInput>;
  transferNumber?: InputMaybe<NullableStringInput>;
  utteranceDetectorConfig?: InputMaybe<UtteranceDetectorConfigInput>;
  voiceId?: InputMaybe<Scalars['ID']['input']>;
  voiceOptionValues?: InputMaybe<Array<ModelOptionValueInput>>;
  voiceVolumeLevel?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCallAgentNodeInput = {
  nodeInput: ApiFlowNodeInput;
  versionedPromptId: Scalars['ID']['input'];
};

export type UpdateCallAgentPronunciationMapInput = {
  agentId: Scalars['ID']['input'];
  pronunciationEntries: Array<PronunciationEntryInput>;
};

export type UpdateDialMetadataInput = {
  crmData?: InputMaybe<Scalars['Map']['input']>;
  dialId: Scalars['ID']['input'];
  dispositionId?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDialSessionNameInput = {
  dialSessionId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateDispositionInput = {
  dialAlternateNumbers?: InputMaybe<Scalars['Boolean']['input']>;
  dispositionId: Scalars['ID']['input'];
  mappedResult?: InputMaybe<DialResult>;
  name?: InputMaybe<Scalars['String']['input']>;
  unsetMappedResult?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateFunctionDefinitionInput = {
  arguments?: InputMaybe<Array<ExtractorFieldInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  dsl?: InputMaybe<Scalars['String']['input']>;
  functionDefinitionId: Scalars['ID']['input'];
  lifecycleMessages?: InputMaybe<FunctionLifecycleMessagesInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  outputs?: InputMaybe<Array<ExtractorFieldInput>>;
};

export type UpdateRefillSettingsInput = {
  disableRefill?: InputMaybe<Scalars['Boolean']['input']>;
  refillAmountCents?: InputMaybe<Scalars['Int']['input']>;
  refillThresholdCents?: InputMaybe<Scalars['Int']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type UpdateSystemResultMappingInput = {
  crmId: Scalars['ID']['input'];
  mappedDispositionId?: InputMaybe<Scalars['ID']['input']>;
  resultType: SystemResultType;
  workspaceId: Scalars['ID']['input'];
};

export type UpdateVersionedPromptInput = {
  agentType?: InputMaybe<AgentType>;
  aiModelId?: InputMaybe<Scalars['ID']['input']>;
  flowDefinition?: InputMaybe<FlowDefinitionInput>;
  flowDefinitionJSON?: InputMaybe<Scalars['String']['input']>;
  modelOptionValues?: InputMaybe<Array<ModelOptionValueInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  versionedPromptId: Scalars['ID']['input'];
};

export type UpdateWorkspaceBillingConfig = {
  billingConfigJSON: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type UpdateWorkspaceCustomDetectorRegexps = {
  regexpsJSON: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type UpdateWorkspacePronunciationMapInput = {
  pronunciationEntries: Array<PronunciationEntryInput>;
  workspaceId: Scalars['ID']['input'];
};

export type UpdateWorkspaceSettingsInput = {
  defaultWebcallType?: InputMaybe<WebcallType>;
  workspaceId: Scalars['ID']['input'];
};

export type UsageInfo = {
  __typename?: 'UsageInfo';
  limit: Scalars['Int']['output'];
  usage: Scalars['Int']['output'];
};

export type UsageLineItem = {
  __typename?: 'UsageLineItem';
  description: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  totalPriceDecimal: Scalars['String']['output'];
  unitPriceDecimal: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  aggregateStats: AggregateStats;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  contactLists?: Maybe<Array<ContactList>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: UserStatus;
  superAdmin: Scalars['Boolean']['output'];
  timeStats: TimeStatsResult;
};


export type UserAggregateStatsArgs = {
  filter: StatFilter;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};


export type UserTimeStatsArgs = {
  filter: StatFilter;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserActivityMessage = {
  __typename?: 'UserActivityMessage';
  messageType: UserActivityMessageType;
  sessionDialConnectMessage?: Maybe<SessionDialConnectMessage>;
  sessionDialDisconnectMessage?: Maybe<SessionDialDisconnectMessage>;
  sessionLeaveMessage?: Maybe<SessionLeaveMessage>;
  sessionStatusChangeMessage?: Maybe<SessionStatusChangeMessage>;
  userSessionConnectMessage?: Maybe<UserSessionConnectMessage>;
};

export enum UserActivityMessageType {
  SessionDialConnect = 'SESSION_DIAL_CONNECT',
  SessionDialDisconnect = 'SESSION_DIAL_DISCONNECT',
  SessionLeave = 'SESSION_LEAVE',
  SessionStatusChange = 'SESSION_STATUS_CHANGE',
  UserSessionConnect = 'USER_SESSION_CONNECT'
}

export type UserSessionConnectMessage = {
  __typename?: 'UserSessionConnectMessage';
  user: User;
};

export type UserStatus = {
  __typename?: 'UserStatus';
  dialSession?: Maybe<DialSession>;
};

export type UserWorkspaceSettings = {
  __typename?: 'UserWorkspaceSettings';
  openCrmLink: Scalars['Boolean']['output'];
  openLinkedinLink: Scalars['Boolean']['output'];
};

export type UserWorkspaceSettingsInput = {
  openCrmLink?: InputMaybe<Scalars['Boolean']['input']>;
  openLinkedinLink?: InputMaybe<Scalars['Boolean']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type UtteranceDetectorConfig = {
  __typename?: 'UtteranceDetectorConfig';
  basic?: Maybe<BasicUtteranceDetectorConfig>;
  interruptionPlayTimeMs: Scalars['Int']['output'];
  type: UtteranceDetectorConfigType;
};

export type UtteranceDetectorConfigInput = {
  basic?: InputMaybe<BasicUtteranceDetectorConfigInput>;
  interruptionPlayTimeMs?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<UtteranceDetectorConfigType>;
};

export enum UtteranceDetectorConfigType {
  Advanced = 'ADVANCED',
  Basic = 'BASIC'
}

export enum UtteranceDetectorSensitivity {
  Fast = 'FAST',
  Medium = 'MEDIUM',
  Slow = 'SLOW',
  UltraFast = 'ULTRA_FAST'
}

export type VerifyPhoneNumberInput = {
  phoneNumber: Scalars['String']['input'];
  workspaceId: Scalars['ID']['input'];
};

export type VersionedPrompt = {
  __typename?: 'VersionedPrompt';
  agentType: AgentType;
  aiModel?: Maybe<AiModel>;
  createdAt: Scalars['Time']['output'];
  flowDefinition?: Maybe<FlowDefinition>;
  id: Scalars['ID']['output'];
  modelOptionValues?: Maybe<Array<ModelOptionValue>>;
  name: Scalars['String']['output'];
  prompt?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type VideoTokenResp = {
  __typename?: 'VideoTokenResp';
  sessionId: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VisibleWorkspaceLimits = {
  __typename?: 'VisibleWorkspaceLimits';
  concurrentDialLimit: Scalars['Int']['output'];
};

export type VoiceFilter = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum VoiceGender {
  Female = 'FEMALE',
  Male = 'MALE',
  Neutral = 'NEUTRAL'
}

export enum VoiceModel {
  Default = 'DEFAULT',
  Sesame = 'SESAME'
}

export enum VoiceTier {
  Premium = 'PREMIUM',
  Standard = 'STANDARD'
}

export type Voicemail = {
  __typename?: 'Voicemail';
  downloadUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum WebcallType {
  Legacy = 'legacy',
  Standard = 'standard'
}

export type Workspace = {
  __typename?: 'Workspace';
  activeDials: Array<Dial>;
  activeIncomingCalls: Array<Dial>;
  activeUsers: Array<User>;
  aggregateStats: AggregateStats;
  aiEvalConfigs: Array<AiEvalConfig>;
  aiModels: AiModelsResult;
  apiKeys?: Maybe<Array<ApiKey>>;
  apolloPurposes: Array<ApolloPurpose>;
  apolloUsers: Array<ApolloUser>;
  bannerMessage?: Maybe<Scalars['String']['output']>;
  billingUsage: Array<UsageLineItem>;
  callAgents: CallAgentsResult;
  concurrentDialCount: Scalars['Int']['output'];
  contactLists: ContactListResult;
  crmSpecification: CrmSpecification;
  crmSpecifications: Array<CrmSpecification>;
  customDetectorRegexps?: Maybe<Scalars['String']['output']>;
  defaultWebcallType: WebcallType;
  dialSessions: DialSessionListResult;
  dialTasks: DialTaskListResult;
  dials: DialListResult;
  dispositions: Array<CallDisposition>;
  functionDefinitions: FunctionDefinitionsResult;
  id: Scalars['ID']['output'];
  importedLists: IntegrationListsResponse;
  inboundForwardNumber?: Maybe<Scalars['String']['output']>;
  integrationChoices: Array<ListListsItem>;
  knowledgeBases: ListKnowledgeBasesResult;
  limits: WorkspaceLimits;
  member: WorkspaceMember;
  memberCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notice?: Maybe<AppNotice>;
  onboardingSurveyCompleted: Scalars['Boolean']['output'];
  overLimit: OverLimitResult;
  phoneNumberVerified: Scalars['Boolean']['output'];
  phoneNumbers: PhoneNumbersResult;
  pronunciationMap?: Maybe<PronunciationMap>;
  quickstartProjects: Array<QuickstartProject>;
  recordingConfig?: Maybe<RecordingConfig>;
  salesfloorRooms: Array<SalesfloorRoom>;
  salesfloorType: SalesfloorType;
  selfLearningEnrolled: Scalars['Boolean']['output'];
  spamUsage: UsageInfo;
  subscription?: Maybe<BillingSubscription>;
  systemResults: Array<SystemResult>;
  team: TeamResult;
  telephonyProvider: Scalars['String']['output'];
  timeStats: TimeStatsResult;
  userSettings: UserWorkspaceSettings;
  viewerRole: Role;
  visibleLimits: VisibleWorkspaceLimits;
  voicemails: Array<Voicemail>;
  voices: AiVoicesResult;
  wallet?: Maybe<WorkspaceWallet>;
  webhookSigningSecret: Scalars['String']['output'];
  webhookURL?: Maybe<Scalars['String']['output']>;
};


export type WorkspaceAggregateStatsArgs = {
  filter: StatFilter;
};


export type WorkspaceAiModelsArgs = {
  filter?: InputMaybe<AiModelFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceBillingUsageArgs = {
  filter: BillingUsageFilter;
};


export type WorkspaceCallAgentsArgs = {
  filter?: InputMaybe<CallAgentFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceContactListsArgs = {
  filter?: InputMaybe<ContactListFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceCrmSpecificationArgs = {
  id: Scalars['ID']['input'];
};


export type WorkspaceDialSessionsArgs = {
  filter?: InputMaybe<DialSessionFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceDialTasksArgs = {
  filter?: InputMaybe<DialTaskFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceDialsArgs = {
  filter?: InputMaybe<DialFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceDispositionsArgs = {
  crmId?: InputMaybe<Scalars['ID']['input']>;
  includeAll?: InputMaybe<Scalars['Boolean']['input']>;
  subtype?: InputMaybe<Scalars['String']['input']>;
};


export type WorkspaceFunctionDefinitionsArgs = {
  filter?: InputMaybe<FunctionDefinitionFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceIntegrationChoicesArgs = {
  integrationId: Scalars['String']['input'];
  search?: InputMaybe<IntegrationChoicesFilter>;
};


export type WorkspaceKnowledgeBasesArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceMemberArgs = {
  userId: Scalars['ID']['input'];
};


export type WorkspacePhoneNumbersArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceSystemResultsArgs = {
  crmId: Scalars['ID']['input'];
};


export type WorkspaceTeamArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type WorkspaceTimeStatsArgs = {
  filter: StatFilter;
};


export type WorkspaceVoicesArgs = {
  filter?: InputMaybe<VoiceFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type WorkspaceDialEvent = {
  __typename?: 'WorkspaceDialEvent';
  dialCreateMessage?: Maybe<DialCreateMessage>;
  eventType: WorkspaceDialEventType;
  statusChangeMessage?: Maybe<WorkspaceDialStatusChangeMessage>;
};

export enum WorkspaceDialEventType {
  DialCreate = 'DIAL_CREATE',
  StatusChange = 'STATUS_CHANGE'
}

export type WorkspaceDialStatusChangeMessage = {
  __typename?: 'WorkspaceDialStatusChangeMessage';
  complete: Scalars['Boolean']['output'];
  dialId: Scalars['ID']['output'];
  status: Scalars['String']['output'];
};

export type WorkspaceLimits = {
  __typename?: 'WorkspaceLimits';
  concurrentDialLimit: Scalars['Int']['output'];
  spamLimit: Scalars['Int']['output'];
  userPhoneNumberLimit: Scalars['Int']['output'];
};

export type WorkspaceLimitsInput = {
  concurrentDialLimit?: InputMaybe<Scalars['Int']['input']>;
  salesfloorType?: InputMaybe<SalesfloorType>;
  spamLimit?: InputMaybe<Scalars['Int']['input']>;
  userPhoneNumberLimit?: InputMaybe<Scalars['Int']['input']>;
  workspaceId: Scalars['ID']['input'];
};

export type WorkspaceMember = {
  __typename?: 'WorkspaceMember';
  role: Role;
  user: User;
};

export type WorkspaceWallet = {
  __typename?: 'WorkspaceWallet';
  balanceCents: Scalars['Int']['output'];
  billingConfig: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  refillAmountCents?: Maybe<Scalars['Int']['output']>;
  refillThresholdCents?: Maybe<Scalars['Int']['output']>;
};

export type WorkspaceWebhookInput = {
  webhookURL?: InputMaybe<NullableStringInput>;
  workspaceId: Scalars['ID']['input'];
};

export type StartDialSessionMutationVariables = Exact<{
  sessionId: Scalars['ID']['input'];
}>;


export type StartDialSessionMutation = { __typename?: 'Mutation', startDialSession: boolean };

export type HangupCallMutationVariables = Exact<{
  dialId: Scalars['ID']['input'];
  dropVoicemail?: InputMaybe<Scalars['Boolean']['input']>;
  transferNumber?: InputMaybe<Scalars['String']['input']>;
}>;


export type HangupCallMutation = { __typename?: 'Mutation', hangupCall: boolean };

export type SetPausedMutationVariables = Exact<{
  dialId: Scalars['ID']['input'];
  pauseStatus: Scalars['Boolean']['input'];
}>;


export type SetPausedMutation = { __typename?: 'Mutation', pauseAI: { __typename?: 'Dial', id: string } };

export type RefreshTranscriptSubscriptionVariables = Exact<{
  dialId: Scalars['ID']['input'];
}>;


export type RefreshTranscriptSubscription = { __typename?: 'Subscription', watchTranscript: Array<{ __typename?: 'SpeakerTextRes', speaker: string, text: string, detailType?: string | null }> };

export type BrowserDialTokenMutationVariables = Exact<{
  input: BrowserDialTokenInput;
}>;


export type BrowserDialTokenMutation = { __typename?: 'Mutation', browserDialToken: { __typename?: 'BrowserDialTokenRes', token: string, iceConfig?: string | null, telephonyProvider: string, url?: string | null } };

export type ConnectSessionSubscriptionVariables = Exact<{
  sessionId: Scalars['ID']['input'];
}>;


export type ConnectSessionSubscription = { __typename?: 'Subscription', connectSession: { __typename?: 'SessionMessage', messageType: SessionMessageType, content?: { __typename: 'ContactCompleteMessage' } | { __typename: 'DialConnectMessage', dialId: string } | { __typename: 'DialsUpdatedMessage', contactId?: string | null, contactComplete: boolean, dials: Array<{ __typename?: 'Dial', id: string, status: string, answerType: AnswerType, phoneField: string, callDispositionId?: string | null, systemResultType?: SystemResultType | null, toNumber: string }> } | { __typename: 'SessionUpdatedMessage', reason?: DialSessionUpdateReason | null, dialSession?: { __typename?: 'DialSession', id: string, status: DialSessionStatus } | null } | null } };


export const StartDialSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartDialSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDialSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dialSessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}}}]}]}}]} as unknown as DocumentNode<StartDialSessionMutation, StartDialSessionMutationVariables>;
export const HangupCallDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"HangupCall"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dropVoicemail"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transferNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hangupCall"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dialId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dialId"}}},{"kind":"Argument","name":{"kind":"Name","value":"dropVoicemail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dropVoicemail"}}},{"kind":"Argument","name":{"kind":"Name","value":"transferNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transferNumber"}}}]}]}}]} as unknown as DocumentNode<HangupCallMutation, HangupCallMutationVariables>;
export const SetPausedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetPaused"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pauseStatus"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pauseAI"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dialId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dialId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pauseStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pauseStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SetPausedMutation, SetPausedMutationVariables>;
export const RefreshTranscriptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"RefreshTranscript"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dialId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"watchTranscript"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dialId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dialId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speaker"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"detailType"}}]}}]}}]} as unknown as DocumentNode<RefreshTranscriptSubscription, RefreshTranscriptSubscriptionVariables>;
export const BrowserDialTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BrowserDialToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BrowserDialTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browserDialToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"iceConfig"}},{"kind":"Field","name":{"kind":"Name","value":"telephonyProvider"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<BrowserDialTokenMutation, BrowserDialTokenMutationVariables>;
export const ConnectSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ConnectSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connectSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DialsUpdatedMessage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactId"}},{"kind":"Field","name":{"kind":"Name","value":"dials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"answerType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneField"}},{"kind":"Field","name":{"kind":"Name","value":"callDispositionId"}},{"kind":"Field","name":{"kind":"Name","value":"systemResultType"}},{"kind":"Field","name":{"kind":"Name","value":"toNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactComplete"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DialConnectMessage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dialId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SessionUpdatedMessage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dialSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ConnectSessionSubscription, ConnectSessionSubscriptionVariables>;