/*
 * @Author: zhouxishun
 * @Date: 2023-11-17 16:44:19
 * @LastEditors: zhouxishun
 * @LastEditTime: 2024-04-09 16:39:30
 * @Description:路由权限相关
 */

/**
 * 用户角色
 */
export enum UserRoleEnum {
  /** @params 超级管理员 */
  ROLE_ADMIN = 'ROLE_ADMIN',
  /** @param 管理员 */
  ROLE_MANAGER = 'ROLE_MANAGER',
  /** @param 开发者 */
  ROLE_USER = 'ROLE_USER',
}
export const UserRoleName = {
  [UserRoleEnum.ROLE_ADMIN]: '超级管理员',
  [UserRoleEnum.ROLE_MANAGER]: '管理员',
  [UserRoleEnum.ROLE_USER]: '开发者',
};

/**
 * 角色路由重定向
 */
export const routerRedirect: Record<UserRoleEnum, string> = {
  [UserRoleEnum.ROLE_ADMIN]: '/settings/members',
  [UserRoleEnum.ROLE_MANAGER]: '/',
  [UserRoleEnum.ROLE_USER]: '/',
};

/**
 * 路由权限
 */
export const routerRolePaths = {
  [UserRoleEnum.ROLE_ADMIN]: [
    /\/settings?(\/|$)/,
    '/task',
    /\/rule?(\/|$)/,
    /\/quality-level?(\/|$)/,
    /\/user?(\/|$)/,
    /\/system?(\/|$)/,
  ],
  [UserRoleEnum.ROLE_USER]: ['/', /\/project?(\/|$)/, /\/task?(\/|$)/, /\/query-console?(\/|$)/, /\/user?(\/|$)/],
  [UserRoleEnum.ROLE_MANAGER]: [
    '/',
    /\/user?(\/|$)/,
    /\/project?(\/|$)/,
    /\/task?(\/|$)/,
    /\/rule?(\/|$)/,
    /\/quality-level?(\/|$)/,
    /\/integration?(\/|$)/,
    /\/query-console?(\/|$)/,
    '/settings',
    /\/settings?(\/|$)/,
    /\/system?(\/|$)/,
  ],
};

/** 不需要整体layout的路由 */
export const freePaths = [/\/login?(\/|$)/, /\/register?(\/|$)/, /\/wiki?(\/|$)/, /\/query-console?(\/|$)/];

/** 左侧菜单需要收起的路由 */
export const foldUpPath = [
  '/project/:projectId/:scanId/view/:issueId',
  '/project/:projectId/:scanId/view',
  '/query-console',
];

/**
 * 请求当前用户信息路由白名单
 */
export const userRequestRouterWhiteList = [/\/login?(\/|$)/, /\/register?(\/|$)/];
