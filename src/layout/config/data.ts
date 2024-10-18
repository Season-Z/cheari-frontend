import { routes } from '@/router';
import { routerRoleAuth } from '@/utils';
import { freePaths } from './role';

export const getDomainRoutes = () => {
  const domains = routes[0].children?.filter((v) => !routerRoleAuth(freePaths, v.path!) && v.options?.headerNav);
  const domainRoutes = domains?.map((v) => ({ label: v.options?.title, key: v.path || v.children?.[0].path }));

  return { domainRoutes, domains };
};

/** 左侧菜单宽度 */
export const navigationWidth = {
  large: 216,
  small: 60,
};
