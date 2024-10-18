import { UserInfoTpe } from '@/common/user';
import { createContext } from '@/packages/@cyberutopian/hooks';
import { cyberFetch } from '@/request';
import { FC, useEffect, useState } from 'react';

/** 全局上下文 */
export interface GlobalContextType {
  user?: UserInfoTpe | undefined;
  clearUserInfo: () => void;
  saveUserInfo: (data: any) => void;
  queryUserInfo: () => void;
}

export const [GlobalProvider, useGlobalContext, GlobalContext] = createContext<GlobalContextType>();

const Provider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInfoTpe>();
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

  // 储存用户信息
  const saveUserInfo = (user: any) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const clearUserInfo = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {}, []);

  const queryUserInfo = async () => {
    cyberFetch({ url: '/api/user', method: 'get' }).then((result) => {
      saveUserInfo(result.result);
    });
  };

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
        user,
        clearUserInfo,
        saveUserInfo,
        queryUserInfo,
      }}
    >
      {children}
    </GlobalProvider>
  );
};

export default Provider;
