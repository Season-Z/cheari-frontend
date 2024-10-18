import React from 'react';
import paths from './path';
export type IIcons = keyof typeof paths;
export interface IIconProps extends React.HTMLAttributes<HTMLDivElement> {
    type: IIcons;
}
export default function Icon(props: IIconProps): import("react/jsx-runtime").JSX.Element;
