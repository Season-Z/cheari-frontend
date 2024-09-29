import LazyImportComponent from '@/components/lazy-import-component';
import Icon from '@/icon';
import { PageRouterType } from '@cyberutopian/layout/dist/typings/navigation';
import { lazy } from 'react';
import App from '../App';

export const routes: PageRouterType[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: '/',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/information'))} />,
        options: {
          title: '信息展示',
          showNav: true,
          icon: <Icon type="icon-pingtai" />,
        },
      },
      {
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/data-analysis'))} />,
        options: {
          title: '数据分析',
          showNav: true,
          icon: <Icon type="icon-caidan_xiangmuguanliicon" />,
        },
        children: [
          {
            path: '/data-analysis/exposure-analysis',
            element: (
              <LazyImportComponent lazyChildren={lazy(() => import('@/pages/data-analysis/exposure-analysis'))} />
            ),
            options: {
              title: '曝光度分析',
              showNav: true,
            },
          },
          {
            path: '/data-analysis/evaluation-analysis',
            element: (
              <LazyImportComponent lazyChildren={lazy(() => import('@/pages/data-analysis/evaluation-analysis'))} />
            ),
            options: {
              title: '评价度分析',
              showNav: true,
            },
          },
          {
            path: '/data-analysis/channel-analysis',
            element: (
              <LazyImportComponent lazyChildren={lazy(() => import('@/pages/data-analysis/channel-analysis'))} />
            ),
            options: {
              title: '负面渠道分析',
              showNav: true,
            },
          },
        ],
      },
      {
        path: '/public-sentiment',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/public-sentiment'))} />,
        options: {
          title: '舆情显示',
          showNav: true,
          icon: <Icon type="icon-zhuanhuaguize" />,
        },
      },
      {
        path: '/login',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/login'))} />,
      },
      {
        path: '/login/register',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/register'))} />,
      },
    ],
  },
];
