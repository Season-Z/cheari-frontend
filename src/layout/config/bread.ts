/*
 * @Author: zhouxishun
 * @Date: 2023-12-20 14:10:07
 * @LastEditors: zhouxishun
 * @LastEditTime: 2024-03-22 15:36:37
 * @Description:面包屑
 */

import { BreadcrumbConfigType } from '@cyberutopian/layout/dist/typings/bread';

const projectInfo = [
  {
    title: '项目详情',
    route: '/project/:projectId',
    children: [
      {
        title: '扫描结果',
        route: '/project/:projectId/:scanId',
        children: [
          {
            title: '问题详情',
            route: '/project/:projectId/:scanId/view',
          },
          {
            title: '问题详情',
            route: '/project/:projectId/:scanId/view/:issueId',
          },
        ],
      },
    ],
  },
];

/** 面包屑配置 */
export const breadConfig: BreadcrumbConfigType[] = [
  {
    title: '首页看板',
    route: '/',
    children: projectInfo,
  },
  {
    title: '项目列表',
    route: '/project',
    children: projectInfo,
  },
  {
    title: '任务列表',
    route: '/task',
    children: [
      ...projectInfo,
      {
        title: '扫描结果',
        route: '/project/:projectId/:scanId',
        children: [
          {
            title: '问题详情',
            route: '/project/:projectId/:scanId/view',
          },
          {
            title: '问题详情',
            route: '/project/:projectId/:scanId/view/:issueId',
          },
        ],
      },
    ],
  },
  {
    title: '集成方式',
    route: '/integration',
    children: [
      {
        title: '文件上传',
        route: '/integration/file',
      },
      {
        title: 'Git',
        route: '/integration/git',
      },
      {
        title: 'GitLab',
        route: '/integration/gitlab',
      },
    ],
  },
  {
    title: '团队成员',
    route: '/settings/group-members',
    children: [
      {
        title: '成员详情',
        route: '/settings/group-members/:userId',
      },
    ],
  },
  {
    title: '所有成员',
    route: '/settings/members',
    children: [
      {
        title: '成员详情',
        route: '/settings/members/:userId',
      },
    ],
  },
];
