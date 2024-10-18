import { Request } from '@/packages/@cyberutopian/fetch';
import { message } from 'antd';
import { hiddenErrorUrls, reqOptions } from './config';

export const request = new Request({
  baseURL: reqOptions.baseURL,
  timeout: reqOptions.timeout,
  withCredentials: reqOptions.withCredentials,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      const { method = 'GET' } = config;
      config.headers.authorization = window.localStorage.getItem('token');

      if (method === 'get' || method === 'GET') {
        config.params = config.data;
      }

      // url 增加前缀
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      // 当操作成功时，给予一个默认值，使用时判断 data 是否存在即可
      // if (result.data.code === '200' && (result.data.data === null || result.data.data === undefined)) {
      //   result.data.data = [];
      // }
      if (result.data.code) {
        result.data.code = result.data.code.toString();
      }
      return result;
    },
    // 错误相应拦截器
    responseInterceptorsCatch(err) {
      // 401
      if (err.response.status === 401) {
        if (!window.location.pathname.startsWith('/login')) {
          message.error('重新登录');
          window.location.href = '/login';
          return;
        }
      }
      // 业务错误
      if (err.response.data?.code) {
        // 查询错误是否需要 View 自行处理
        if (hiddenErrorUrls.every((item) => !err.response.config?.url?.endsWith(item))) {
          message.error(err.response.data.msg);
        }
        return { ...err, data: err.response.data };
      } else {
        // 系统兜底错误
        console.error(err);
        message.error('系统异常，请稍后重试');
        return { ...err, data: { code: 500, err: '系统异常，请稍后重试' } };
      }
    },
  },
});
