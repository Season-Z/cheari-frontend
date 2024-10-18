import { LayoutHeader } from '@/packages/@cyberutopian/layout';
import { memo } from 'react';
import HeaderContent from './header-content';
import HeaderDropdown from './header-dropdown';

const Header = () => {
  return (
    <LayoutHeader>
      <HeaderContent />
      <HeaderDropdown />
    </LayoutHeader>
  );
};

export default memo(Header);
