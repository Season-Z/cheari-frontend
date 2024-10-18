import type { AxiosInstance } from 'axios';
import { AxiosResponse } from 'axios';
import type { CreateRequestConfig, RequestConfig, RequestInterceptors } from './interface';
export declare class Request {
    instance: AxiosInstance;
    interceptorsObj?: RequestInterceptors<AxiosResponse>;
    abortControllerMap: Map<string, AbortController>;
    constructor(config: CreateRequestConfig);
    request<D, T>(config: RequestConfig<T>): Promise<T>;
    /**
     * 取消全部请求
     */
    cancelAllRequest(): void;
    /**
     * 取消指定的请求
     * @param url 待取消的请求URL
     */
    cancelRequest(url: string | string[]): void;
}
export { RequestConfig, RequestInterceptors };
