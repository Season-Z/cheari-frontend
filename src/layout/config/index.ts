import { createContext } from '@/packages/@cyberutopian/hooks';

export * from './bread';
export * from './data';
export * from './role';

export const [LayoutContentProvider, useLayoutContentContext, LayoutContentContext] = createContext<{
  contentWidth: number;
  contentHeight: number;
}>();
