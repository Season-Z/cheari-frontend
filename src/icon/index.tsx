/*
 * @Author: zhouxishun
 * @Date: 2023-09-19 18:06:41
 * @LastEditors: zhouxishun
 * @LastEditTime: 2023-09-19 18:08:16
 * @Description:
 */
import React from 'react';
// import * as paths from './path.js'
import './index.css';
import paths from './path';

export type IIcons = keyof typeof paths;

export interface IIconProps extends React.HTMLAttributes<HTMLDivElement> {
  type: IIcons;
}

export default function Icon(props: IIconProps) {
  const extClass = props.className ? ' ' + props.className : '';
  const attrs: Partial<IIconProps> = { ...props };
  delete attrs.type;
  return (
    <div {...attrs} className={'icon' + extClass} style={{ ...(props.style ?? {}) }}>
      <svg width="1em" height="1em" viewBox="0 0 1024 1024" focusable="false" style={{ fill: 'currentColor' }}>
        {paths[props.type]}
      </svg>
    </div>
  );
}
