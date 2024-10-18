import type { CreateRequestConfig } from '@/packages/@cyberutopian/fetch';

/**
 * 请求url前缀
 */
export const prefix = {
  mock: '/mock',
  dev: '/dev',
  test: '/test',
};

/**
 * 统一请求配置项
 */
export const reqOptions: CreateRequestConfig = {
  baseURL: '/',
  timeout: 1000 * 60 * 5,
  withCredentials: true,
};

/**
 * 不使用 toast 错误提示的接口列表
 * （临时解决方案）
 */
export const hiddenErrorUrls = ['/api/v1/users/login', '/api/v1/build/git/branch'];
