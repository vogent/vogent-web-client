# Vogent Web Client

A TypeScript/JavaScript client library for integrating Vogent into web applications.

## Installation

### Bun
```bash
bun add @vogent/vogent-web-client
```

### NPM
```bash
npm install @vogent/vogent-web-client
```

### Yarn
```bash
yarn add @vogent/vogent-web-client
```

## Prerequisites

Before using VogentCall, you need to obtain the following from the Vogent API:
- `sessionId`: Unique session identifier
- `dialId`: Unique dial/call identifier
- `token`: Authentication token

You may call the [Create Dial](https://docs.vogent.ai/api-reference/create-a-new-dial) endpoint on the browser to create a browser dial (not a phone call), **but you must be using a public API key**. Do not use a private API key on the client.

## Usage

```typescript
import { VogentCall } from '@vogent/vogent-web-client';

// First, create a dial using the Vogent API
const response = await fetch('https://api.vogent.ai/api/dials', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer pub_vogent_...', // Make sure this is a public key, and not a private key.
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    callAgentId: 'your_call_agent_id',
    browserCall: true  // Set to true for web-based calls
  })
});

const { dialToken, sessionId, dialId } = await response.json();

// Create a new call instance with the dial details
const call = new VogentCall({
  sessionId: sessionId,
  dialId: dialId,
  token: dialToken
});

// Start the call
await call.start();

// Connect audio
const audioConn = await call.connectAudio();

// Monitor transcripts in real-time
const unsubscribe = call.monitorTranscript((transcript) => {
  transcript.forEach(({ text, speaker }) => {
    console.log(`${speaker}: ${text}`);
  });
});

// Listen for status changes
call.on('status', (status) => {
  console.log('Call status:', status);
});

// When done, clean up
unsubscribe();
await call.hangup();
```

## API Reference

### Constructor

```typescript
new VogentCall(dialDetails, config?)
```

**Parameters:**

- `dialDetails` (required):
  - `sessionId` (string): Unique session identifier
  - `dialId` (string): Unique dial/call identifier
  - `token` (string): Authentication token

- `config` (optional):
  - `baseUrl` (string): API base URL (defaults to 'https://api.vogent.ai')

**Example:**

```typescript
const call = new VogentCall(
  {
    sessionId: "session_123",
    dialId: "dial_456",
    token: "auth_token_789"
  },
  {
    baseUrl: "https://api.vogent.ai" // optional
  }
);
```

### Methods

#### `start()`

Starts the call session. Note: This does not connect audio automatically.

```typescript
await call.start();
```

**Returns:** `Promise<void>`

---

#### `connectAudio(liveListen?)`

Establishes the audio connection for the call.

```typescript
const audioConn = await call.connectAudio();
```

**Parameters:**
- `liveListen` (boolean, optional): Set to `true` for monitoring legs (e.g., humans listening to the call who the AI should not interact with). Defaults to `false`.

**Returns:** `Promise<VogentAudioConn>` - Audio connection handle

**Example:**

```typescript
// Regular participant
const audioConn = await call.connectAudio();

// Monitor-only participant (live listening)
const monitorConn = await call.connectAudio(true);
```

---

#### `monitorTranscript(callback)`

Subscribes to real-time transcript updates.

```typescript
const unsubscribe = call.monitorTranscript((transcript) => {
  // Handle transcript updates
});
```

**Parameters:**
- `callback` (function): Called with transcript updates. Receives an array of transcript objects.

**Transcript Object:**
```typescript
type Transcript = {
  text: string;      // The transcript text
  speaker: string;   // 'HUMAN', 'AI', or 'IVR' (if IVR detection is enabled)
}[];
```

**Returns:** `() => void` - Unsubscribe function

**Example:**

```typescript
const unsubscribe = call.monitorTranscript((transcript) => {
  transcript.forEach(({ text, speaker }) => {
    if (speaker === 'AI') {
      console.log('AI said:', text);
    } else if (speaker === 'HUMAN') {
      console.log('Human said:', text);
    }
  });
});

// Later, when you want to stop monitoring
unsubscribe();
```

---

#### `on(event, callback)`

Registers an event handler for call status changes.

```typescript
call.on('status', (status) => {
  console.log('Status changed:', status);
});
```

**Parameters:**
- `event` (string): Currently only supports `'status'`
- `callback` (function): Called when the dial status changes
---

#### `setPaused(paused)`

Pauses or resumes the AI during the call.

```typescript
await call.setPaused(true);  // Pause the AI
await call.setPaused(false); // Resume the AI
```

**Parameters:**
- `paused` (boolean): `true` to pause the AI, `false` to resume

**Returns:** `Promise<void>`

---

#### `hangup()`

Ends the current call.

```typescript
await call.hangup();
```

**Returns:** `Promise<void>`

## Utilities

### `dialStatusIsComplete(status)`

Helper function to check if a dial status indicates the call has completed.

```typescript
import { dialStatusIsComplete } from '@vogent/vogent-web-client';

call.on('status', (status) => {
  if (dialStatusIsComplete(status)) {
    console.log('Call is complete');
    // Clean up resources
  }
});
```

## TypeScript Support

This library is written in TypeScript and includes full type definitions.

```typescript
import { VogentCall, Transcript, VogentAudioConn } from '@vogent/vogent-web-client';
```

## Support

For more information and support:
- Documentation: [https://docs.vogent.ai](https://docs.vogent.ai)
- Issues: Please report issues on the GitHub repository
