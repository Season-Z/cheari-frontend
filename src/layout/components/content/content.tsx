/*
 * @Author: zhouxishun
 * @Date: 2023-10-16 15:03:34
 * @LastEditors: zhouxishun
 * @LastEditTime: 2024-03-07 17:17:12
 * @Description:
 */
import { LayoutContentProvider } from '@/layout/config';
import React, { CSSProperties, FC, memo, useMemo } from 'react';

const Content: FC<{ children: React.ReactNode; width: number; height: number; style: CSSProperties }> = (props) => {
  const { children, width, height, style } = props;

  const contentWidth = useMemo(() => width - 12, [width]);
  const contentHeight = useMemo(() => height - 30, [height]);

  return (
    <div className="flex-1 h-full pr-[12px] pb-[12px] overflow-y-scroll flex flex-col" style={style}>
      <LayoutContentProvider value={{ contentWidth, contentHeight }}>
        <div className="flex-1" style={{ width: contentWidth + 'px' }}>
          {children}
        </div>
      </LayoutContentProvider>
      {/* <Gap /> */}
    </div>
  );
};

export default memo(Content);
