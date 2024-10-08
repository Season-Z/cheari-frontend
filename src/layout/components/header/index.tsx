/*
 * @Author: zhouxishun
 * @Date: 2023-09-18 13:57:18
 * @LastEditors: zhouxishun
 * @LastEditTime: 2024-03-07 17:05:12
 * @Description:
 */
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
