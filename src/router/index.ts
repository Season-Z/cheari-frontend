import { PageRouterType } from '@cyberutopian/layout/dist/typings/navigation';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const getMenus = (routes: PageRouterType[], parentPath = ''): any[] => {
  return (
    routes
      .filter((item) => item.options?.showNav)
      .map((item) => ({
        title: item.options?.title || '',
        icon: item.options?.icon,
        route: item.path ? parentPath + item.path : undefined,
        value: item.options?.title,
        children: (item.children && getMenus(item.children)) || [],
        role: item.options?.role,
      })) || []
  );
};

const router = createBrowserRouter(routes as any);

export * from './interface';
export { router, routes };
