import { FetchOptions, FetchRequestConfig, UseFetchReturnType } from './interface';
/**
 * @description: hook请求
 * @generic T 请求参数
 * @generic R 响应结构
 * @param {FetchRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
declare const useFetch: <T = any, R = any>(config: FetchRequestConfig<T, R>, options?: FetchOptions) => UseFetchReturnType<T, R>;
export default useFetch;
