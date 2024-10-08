import type { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios';
export interface RequestInterceptors<T> {
    requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
    requestInterceptorsCatch?: (err: any) => any;
    responseInterceptors?: (result: T) => T;
    responseInterceptorsCatch?: (err: any) => any;
}
export interface CreateRequestConfig<T = AxiosResponse> extends CreateAxiosDefaults {
    interceptors?: RequestInterceptors<T>;
}
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: RequestInterceptors<T>;
}
export interface CancelRequestSource {
    [index: string]: () => void;
}
export interface FetchResponse<T> {
    code: string;
    msg: string;
    data: T;
}
export interface FetchRequestConfig<T, R> extends RequestConfig<FetchResponse<R>> {
    url: string;
    /** @param 请求入参 */
    data?: T;
}
export interface FetchOptions {
    /** @param 是否手动控制请求，而不是初始化就发送 */
    manual?: boolean;
}
/** useFetch out type */
export interface UseFetchReturnType<T = any, R = any> {
    loading: boolean;
    data?: R;
    sendRequest: (data?: T | null, newConfig?: FetchRequestConfig<T, R>) => Promise<FetchResponse<R>>;
    cancel: () => void;
    cancelAll: () => void;
}
