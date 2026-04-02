declare module '@mkkellogg/gaussian-splats-3d' {
  export class Viewer {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    controls: any;
    constructor(options?: Record<string, unknown>);
    addSplatScene(path: string, options?: Record<string, unknown>): Promise<void>;
    start(): void;
    stop(): void;
    dispose(): Promise<void>;
  }

  export const LogLevel: {
    None: number;
    Error: number;
    Warning: number;
    Info: number;
    Debug: number;
  };

  export const SceneFormat: {
    Ply: number;
    Splat: number;
    KSplat: number;
    Spz: number;
  };
}
