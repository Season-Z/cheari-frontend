import { CSSProperties, ReactNode, RefObject } from 'react';
/**
 * 右键菜单类型
 */
export interface ContextmenuType {
    children: ((ref: RefObject<any>) => ReactNode) | ReactNode;
    data: ContextmenuListType[];
    className?: string;
    style?: CSSProperties;
    handleSelect?: (v: ContextmenuListType) => void;
    handleContext?: (e: MouseEvent) => void;
    shouldOpen?: boolean;
}
/**
 * 右键菜单menu list类型
 */
export interface ContextmenuListType {
    key: string;
    label?: string;
    icon?: string;
    type?: 'divider' | 'normal';
    danger?: boolean;
}
