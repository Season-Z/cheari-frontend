import { useGlobalContext } from '@/providers/global';
import { routes } from '@/router';
import { formatNavigationData } from '@cyberutopian/layout';
import { NavigationMenuType } from '@cyberutopian/layout/dist/typings/navigation';
import { useEffect, useState } from 'react';

const useNavigateMenu = () => {
  const { user } = useGlobalContext();

  const [navigateMenu, setNavigateMenu] = useState<NavigationMenuType[]>([]);
  // const roleRef = useRef<string>();

  useEffect(() => {
    // if (roleRef.current === user?.teamRole) return;
    const menu = formatNavigationData('', routes[0].children || []);

    setNavigateMenu(menu);

    // roleRef.current = user?.teamRole;
  }, [user?.teamRole]);

  return navigateMenu;
};

export default useNavigateMenu;
