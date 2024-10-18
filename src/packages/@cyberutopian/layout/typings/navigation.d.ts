import { Dispatch, HTMLAttributes, MouseEventHandler, ReactNode, SetStateAction } from 'react';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
export interface NavigationType extends HTMLAttributes<HTMLElement> {
    /** @param 最大宽度 */
    maxWidth: number;
    /** @param 最小宽度 */
    minWidth: number;
    /** @param 自动收起菜单的路由 */
    foldUpPath: string[];
    /** @param  */
    navigationMenu: NavigationMenuType[];
    /** @param 菜单顶部 */
    titleRender?: (data: boolean) => ReactNode;
    /** @param 点击菜单 */
    onItemClick?: (e: Parameters<MouseEventHandler<HTMLDivElement>>['0'], data: NavigationMenuType) => void;
}
export interface NavigationMenuType {
    title: string;
    value: string;
    route: string;
    icon?: Element | JSX.Element | ReactNode;
    children?: NavigationMenuType[];
}
export interface NavigationItemType {
    data: NavigationMenuType;
    activeKey?: string;
    setActiveKey: Dispatch<SetStateAction<string | undefined>>;
    open: string[];
    setOpen: Dispatch<SetStateAction<string[]>>;
    showNav: boolean;
    fatherKeys: string[];
}
type RouterOption = {
    options?: {
        title?: string;
        showNav?: boolean;
        headerNav?: boolean;
        icon?: Element | JSX.Element | ReactNode;
        role?: string[];
    };
};
type CustomIndexRouteObject = IndexRouteObject & RouterOption;
type CustomNonIndexRouteObject = Omit<NonIndexRouteObject, 'children' | 'element' | 'errorElement'> & RouterOption & {
    element?: Element | JSX.Element | null | ReactNode;
    errorElement?: Element | JSX.Element | null | ReactNode;
    children?: (CustomIndexRouteObject | CustomNonIndexRouteObject)[];
};
export type PageRouterType = CustomIndexRouteObject | CustomNonIndexRouteObject;
export {};
