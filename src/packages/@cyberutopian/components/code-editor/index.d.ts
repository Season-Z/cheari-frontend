import { MonacoConfigParamsType } from './interface';
export declare const bootstrap: {
    config: (config?: MonacoConfigParamsType) => Promise<void>;
    init(): void;
};
export * from './editor';
