import { createContext } from '@/packages/@cyberutopian/hooks';
import { FC, useState } from 'react';

/** 全局上下文 */
export interface GlobalContextType {
  user: Record<string, any>;
}

export const [GlobalProvider, useGlobalContext, GlobalContext] = createContext<GlobalContextType>({});

const Provider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Record<string, any>>({});
  // // 当前登录用户团队
  // const [groupInfo, setGroupInfo] = useState<ResponseModelsType['GET/api/v1/teams/users']['data']>();

  // const { sendRequest: getUserRequest, loading: loadUserInfoLoading } = useCyberFetch['GET/api/v1/users/login-info'](
  //   {},
  //   { manual: true },
  // );

  // const { sendRequest: getUserGroupInfoReq, loading: loadUserGroupInfoLoading } = useCyberFetch[
  //   'GET/api/v1/teams/users'
  // ]({}, { manual: true });

  // const { sendRequest: switchCurrentGroupReq } = useCyberFetch['PUT/api/v1/teams/change/:teamId']({}, { manual: true });

  // const [searchParams] = useSearchParams();
  // const router = useNavigate();

  // // 全局loading
  // const globalLoading = useMemo(
  //   () => loadUserInfoLoading || loadUserGroupInfoLoading,
  //   [loadUserInfoLoading, loadUserGroupInfoLoading],
  // );

  // // 储存用户信息
  // const saveUserInfo = (user: LoginUserType) => {
  //   setUser(user);
  //   localStorage.setItem('user', JSON.stringify(user));
  // };

  // const clearUserInfo = () => {
  //   setUser(null);
  //   localStorage.removeItem('user');
  // };

  // const loadUserInfo = async () => {
  //   // 加载用户和团队信息
  //   const [res, groupRes] = await Promise.all([getUserRequest(), getUserGroupInfoReq()]);

  //   // 不存在团队的情况

  //   if (res.code === '200' && groupRes.code === '200') {
  //     const userInfo = {
  //       ...res.data,
  //       teamId: groupRes.data?.currentTeamId,
  //       teamName: groupRes.data?.currentTeamDisplayName,
  //       teamRole: groupRes.data?.currentTeamRole,
  //       teamInfo: groupRes.data?.teams?.find((v) => v.id === groupRes.data.currentTeamId) || {},
  //     };

  //     saveUserInfo(userInfo);
  //     setGroupInfo(groupRes.data);
  //     saveUserInfo(userInfo);

  //     // 如果用户没有创建团队，跳转到引导页面
  //     if (!groupRes.data) {
  //       router('/login/no-team', { replace: true });
  //       return userInfo;
  //     }
  //     return userInfo;
  //   }
  //   return;
  // };

  // const handleSwitchGroup = async (targetTeamId: string) => {
  //   const res = await switchCurrentGroupReq({}, { url: '/api/v1/teams/change/' + targetTeamId });
  //   if (res.code === '200') {
  //     const params = new URLSearchParams(window.location.search);
  //     params.delete('targetTeamId');
  //     let finalSearch = '';
  //     if (params.toString()) {
  //       finalSearch = '?' + params.toString();
  //     }
  //     window.location.href = window.location.pathname + finalSearch;
  //   }
  // };

  // useEffect(() => {
  //   if (searchParams?.get('targetTeamId')) {
  //     handleSwitchGroup(searchParams.get('targetTeamId') as string);
  //   }
  // }, [searchParams]);

  return (
    <GlobalProvider
      value={{
        user: {},
      }}
    >
      {children}
    </GlobalProvider>
  );
};

export default Provider;
