import { formatNavigationData } from '@/packages/@cyberutopian/layout';
import { NavigationMenuType, PageRouterType } from '@/packages/@cyberutopian/layout/typings/navigation';
import { useEffect, useState } from 'react';
import useGlobalData from './useGlobalData';

const useNavigateMenu = () => {
  const { domains, global } = useGlobalData();

  const [navigateMenu, setNavigateMenu] = useState<NavigationMenuType[]>([]);
  // const roleRef = useRef<string>();

  useEffect(() => {
    // if (roleRef.current === user?.teamRole) return;

    const list = domains.domains?.filter((v) =>
      [v.path, v.children?.[0].path].includes(global.domainRouteKey),
    ) as PageRouterType[];
    const menu = formatNavigationData('', list[0].children || []);

    setNavigateMenu(menu);

    // roleRef.current = user?.teamRole;
  }, [domains.domains, global.domainRouteKey]);

  return navigateMenu;
};

export default useNavigateMenu;
