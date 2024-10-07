import useGlobalData from '@/hooks/useGlobalData';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const HeaderContent = () => {
  const { domains, global, setGlobal } = useGlobalData();
  const router = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    const r = domains.domains?.find((v) => v.path === e.key) || {};

    setGlobal((v) => ({ ...v, domainRouteKey: e.key }));
    router(r?.children?.[0].path as string);
  };

  return (
    <div className="mr-auto flex items-center gap-2">
      <Menu
        className="bg-transparent"
        mode="horizontal"
        selectedKeys={[global.domainRouteKey!]}
        onClick={onClick}
        items={domains.domainRoutes as Required<MenuProps>['items'][number][]}
      />
    </div>
  );
};

export default HeaderContent;
