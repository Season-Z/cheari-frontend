import React from 'react';
export interface CreateContextOptions {
    strict?: boolean;
    errorMessage?: string;
    name?: string;
}
type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];
export declare function createContext<T>(options?: CreateContextOptions): CreateContextReturn<T>;
export {};
