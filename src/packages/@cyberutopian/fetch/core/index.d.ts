import type { AxiosInstance } from 'axios';
import { Request, RequestInterceptors } from './request';
type RequestInstanceType<T> = (AxiosInstance & Request & RequestInterceptors<T>) | null;
export declare let requestInstance: RequestInstanceType<any>;
export declare const setup: <T>(instance: RequestInstanceType<T>) => void;
export { default as fetch } from './fetch';
export * from './interface';
export { default as useFetch } from './useFetch';
export { Request } from './request';
