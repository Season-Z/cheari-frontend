import Loading from '@/components/loading';
// import { UserRoleEnum } from '@/pages/settings/config';
// import { useGlobalContext } from '@/providers/global';
import { routerRoleAuth } from '@/utils';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BlankLayout from './blank-layout';
import { freePaths } from './config';
import Layout from './layout';

const Bootstrap: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  // const router = useNavigate();
  const [init, setInit] = useState(false);

  // const { loadUserInfo, user, groupInfo } = useGlobalContext();

  // 避免页面闪烁
  useEffect(() => {
    setInit(true);
  }, []);

  // useEffect(() => {
  //   if (!routerRoleAuth(userRequestRouterWhiteList, pathname)) {
  //     loadUserInfo();
  //   }
  // }, []);

  // if (!routerRoleAuth(userRequestRouterWhiteList, pathname)) {
  //   if (!user || !groupInfo) {
  //     return <Loading />;
  //   }
  // }
  if (!init) {
    return <Loading />;
  }

  if (routerRoleAuth(freePaths, pathname)) {
    return <BlankLayout>{children}</BlankLayout>;
  }

  // if (user?.teamRole) {
  //   // 首页跳转
  //   if (pathname === '/' && user.teamRole === UserRoleEnum.ROLE_ADMIN) {
  //     const route = routerRedirect[user?.teamRole];
  //     router(route, { replace: true });
  //     return null;
  //   }
  //   // 各角色权限页
  //   const rolePaths = (routerRolePaths as any)[user?.teamRole];
  //   if (!routerRoleAuth(rolePaths, pathname)) {
  //     message.warning(`没有${pathname}页面权限，已为您重新跳转页面`);
  //     // 未匹配到时自动跳转到默认路由
  //     const route = (routerRedirect as any)[user?.teamRole];
  //     router(route, { replace: true });
  //     return null;
  //   }
  // }

  return <Layout>{children}</Layout>;
};

export default Bootstrap;
