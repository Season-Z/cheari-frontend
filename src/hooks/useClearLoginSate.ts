// import { navigationMenu } from '@/layout/config';
// import { useGlobalContext } from '@/providers/global';
// import { useCyberFetch } from '@/service';
import { useNavigate } from 'react-router-dom';

const useClearLoginSate = () => {
  const router = useNavigate();

  // const { clearUserInfo } = useGlobalContext();

  // const { sendRequest: logoutRequest } = useCyberFetch['GET/api/v1/users/logout']({}, { manual: true });

  const handleClear = async () => {
    // const { code } = await logoutRequest();
    // if (code === '200') {
    // clearUserInfo();
    // setGlobal((v) => ({ ...v, activeMenuKey: navigationMenu?.[0]?.value }));
    router('/login/', { replace: true });
    window.localStorage.clear();
    // }
  };

  return { handleClear };
};

export default useClearLoginSate;
