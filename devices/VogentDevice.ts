// eslint-disable-next-line @typescript-eslint/no-empty-interface

export interface VogentCall {
    on: (ev: 'mute' | 'disconnect', fn: (...args: any[]) => void) => void;
    mute: (status: boolean) => void;
    disconnect: () => void;
    sendDigits: (k: string) => void;
  }

  export interface VogentDevice {
    connect: (p: any) => Promise<VogentCall>;
  }
