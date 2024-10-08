import LazyImportComponent from '@/components/lazy-import-component';
import Icon from '@/icon';
import { PageRouterType } from '@/packages/@cyberutopian/layout/typings/navigation';
import { lazy } from 'react';
import App from '../App';

export const routes: PageRouterType[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: '/members',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members'))} />,
        options: {
          title: '会员管理',
        },
        children: [
          {
            path: '/members/person',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members/person'))} />,
            options: {
              title: '会员管理',
            },
          },
          {
            path: '/members/message',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members/message'))} />,
            options: {
              title: '我的消息',
            },
          },
          {
            path: '/members/settings',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members/settings'))} />,
            options: {
              title: '设置',
            },
          },
          {
            path: '/members/account',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members/account'))} />,
            options: {
              title: '编辑资料',
            },
          },
          {
            path: '/members/case-detail',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members/case-detail'))} />,
            options: {
              title: '我的方案',
            },
          },
          {
            path: '/members/community-detail',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members/community-detail'))} />,
            options: {
              title: '我的社区',
            },
          },
          {
            path: '/members/order-detail',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members/order-detail'))} />,
            options: {
              title: '我的订单',
            },
          },
          {
            path: '/members/point',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/members/point'))} />,
            options: {
              title: '积分管理',
            },
          },
        ],
      },
      {
        path: '/',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/study'))} />,
        options: {
          title: '用户研究系统',
          headerNav: true,
        },
        children: [
          {
            path: '/',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/study/information'))} />,
            options: {
              title: '信息展示',
              showNav: true,
              icon: <Icon type="icon-pingtai" />,
            },
          },
          {
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/study/data-analysis'))} />,
            options: {
              title: '数据分析',
              showNav: true,
              icon: <Icon type="icon-caidan_xiangmuguanliicon" />,
            },
            children: [
              {
                path: '/data-analysis/exposure-analysis',
                element: (
                  <LazyImportComponent
                    lazyChildren={lazy(() => import('@/pages/study/data-analysis/exposure-analysis'))}
                  />
                ),
                options: {
                  title: '曝光度分析',
                  showNav: true,
                },
              },
              {
                path: '/data-analysis/evaluation-analysis',
                element: (
                  <LazyImportComponent
                    lazyChildren={lazy(() => import('@/pages/study/data-analysis/evaluation-analysis'))}
                  />
                ),
                options: {
                  title: '评价度分析',
                  showNav: true,
                },
              },
              {
                path: '/data-analysis/channel-analysis',
                element: (
                  <LazyImportComponent
                    lazyChildren={lazy(() => import('@/pages/study/data-analysis/channel-analysis'))}
                  />
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
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/study/public-sentiment'))} />,
            options: {
              title: '舆情显示',
              showNav: true,
              icon: <Icon type="icon-zhuanhuaguize" />,
            },
          },
        ],
      },
      {
        path: '/print',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/print'))} />,
        options: {
          title: '3D打印公共服务平台',
          headerNav: true,
        },
        children: [
          {
            path: '/print/print-cases',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/print/print-cases'))} />,
            options: {
              title: '3D打印方案',
              showNav: true,
              icon: <Icon type="icon-caidan_xiangmuguanliicon" />,
            },
          },
          {
            path: '/print/create-print',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/print/create-print'))} />,
            options: {
              title: '提交3D打印需求',
              showNav: true,
              icon: <Icon type="icon-pingtai" />,
            },
          },

          {
            path: '/print/create-print/print-step',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/print/print-step'))} />,
            options: {
              title: '打印步骤',
            },
          },
          {
            path: '/print/print-cases/print-cases-detail',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/print/print-cases-detail'))} />,
            options: {
              title: '3D打印方案',
            },
          },
        ],
      },
      {
        path: '/comprehensive',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive'))} />,
        options: {
          title: '研发设计综合服务平台',
          headerNav: true,
        },
        children: [
          {
            path: '/comprehensive/introduce',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive/introduce'))} />,
            options: {
              title: '平台介绍',
              showNav: true,
              icon: <Icon type="icon-zhuanhuaguize" />,
            },
          },
          {
            path: '/comprehensive/expert',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive/expert'))} />,
            options: {
              title: '专家介绍',
              showNav: true,
              icon: <Icon type="icon-zhuanhuaguize" />,
            },
          },
          {
            path: '/comprehensive/design-cases',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive/design-cases'))} />,
            options: {
              title: '设计方案介绍',
              showNav: true,
              icon: <Icon type="icon-zhuanhuaguize" />,
            },
          },
          {
            path: '/comprehensive/product',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive/product'))} />,
            options: {
              title: '3D产品介绍',
              showNav: true,
              icon: <Icon type="icon-zhuanhuaguize" />,
            },
          },
          {
            path: '/comprehensive/technical-training',
            element: (
              <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive/technical-training'))} />
            ),
            options: {
              title: '技术培训',
              showNav: true,
              icon: <Icon type="icon-zhuanhuaguize" />,
            },
          },
          {
            path: '/comprehensive/technical-testing',
            element: (
              <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive/technical-testing'))} />
            ),
            options: {
              title: '技术检测',
              showNav: true,
              icon: <Icon type="icon-zhuanhuaguize" />,
            },
          },
          {
            path: '/comprehensive/information',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive/information'))} />,
            options: {
              title: '信息及知识产权',
              showNav: true,
              icon: <Icon type="icon-zhuanhuaguize" />,
            },
          },
          {
            path: '/comprehensive/technical-training/detail',
            element: (
              <LazyImportComponent
                lazyChildren={lazy(() => import('@/pages/comprehensive/technical-training-detail'))}
              />
            ),
            options: {
              title: '技术培训',
            },
          },
          {
            path: '/comprehensive/information/detail',
            element: (
              <LazyImportComponent lazyChildren={lazy(() => import('@/pages/comprehensive/information-detail'))} />
            ),
            options: {
              title: '详情',
            },
          },
        ],
      },
      {
        path: '/user',
        element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user'))} />,
        options: {
          title: '用户社区',
          headerNav: true,
        },
        children: [
          {
            path: '/user/forum',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/forum'))} />,
            options: {
              title: '论坛',
              showNav: true,
              icon: <Icon type="icon-pingtai" />,
            },
            children: [
              {
                path: '/user/forum',
                element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/forum/forum-list'))} />,
                options: {
                  title: '论坛列表',
                },
              },
              {
                path: '/user/forum/chat-list',
                element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/forum/chat-list'))} />,
                options: {
                  title: '查看私信',
                },
              },
              {
                path: '/user/forum/chat-list/:id',
                element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/forum/chat-detail'))} />,
                options: {
                  title: '私信',
                },
              },
              {
                path: '/user/forum/reply-list',
                element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/forum/reply-list'))} />,
                options: {
                  title: '查看回复',
                },
              },
            ],
          },
          {
            path: '/user/picture',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/picture'))} />,
            options: {
              title: '图片',
              showNav: true,
              icon: <Icon type="icon-pingtai" />,
            },
            children: [
              {
                path: '/user/picture',
                element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/picture/picture-list'))} />,
                options: {
                  title: '图片',
                },
              },
              {
                path: '/user/picture/detail',
                element: (
                  <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/picture/picture-detail'))} />
                ),
                options: {
                  title: '图片详情',
                },
              },
            ],
          },
          {
            path: '/user/video',
            element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/video'))} />,
            options: {
              title: '视频',
              showNav: true,
              icon: <Icon type="icon-pingtai" />,
            },
            children: [
              {
                path: '/user/video',
                element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/video/video-list'))} />,
                options: {
                  title: '视频',
                },
              },
              {
                path: '/user/video/detail',
                element: <LazyImportComponent lazyChildren={lazy(() => import('@/pages/user/video/video-detail'))} />,
                options: {
                  title: '视频详情',
                },
              },
            ],
          },
        ],
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
