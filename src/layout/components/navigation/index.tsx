import useNavigateMenu from '@/hooks/useNavigateMenu';
import { LayoutNavigation } from '@/packages/@cyberutopian/layout';
import { NavigationType } from '@/packages/@cyberutopian/layout/typings/navigation';
import { useNavigate } from 'react-router-dom';
import { foldUpPath, navigationWidth } from '../../config';
import NavigationHeader from './navigation-header';

const Navigation = () => {
  const navigate = useNavigate();
  const menu = useNavigateMenu();

  const onItemClick: NavigationType['onItemClick'] = (e, data) => {
    if (!data.route) return;

    if (data.route === '/query-console') {
      window.open(data.route, '_blank', 'noreferrer');
    } else {
      navigate(data.route);
    }
  };

  return (
    <LayoutNavigation
      className="bg-[#E8F8FF]"
      maxWidth={navigationWidth.large}
      minWidth={navigationWidth.small}
      foldUpPath={foldUpPath}
      navigationMenu={menu}
      onItemClick={onItemClick}
      titleRender={(showNav) => <NavigationHeader showNav={showNav} />}
    />
  );
};

export default Navigation;
