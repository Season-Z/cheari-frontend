import { setup } from '@/packages/@cyberutopian/fetch';
import { request } from './request';

// @ts-ignore
setup(request);

export { fetch as cyberFetch, useFetch as useCyberFetch } from '@/packages/@cyberutopian/fetch';
export type { FetchOptions } from '@/packages/@cyberutopian/fetch';
