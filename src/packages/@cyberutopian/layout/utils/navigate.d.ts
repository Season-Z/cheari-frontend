import { NavigationMenuType, PageRouterType } from '../typings/navigation';
/** 菜单权限数据 */
export declare const getNavigationData: (list: NavigationMenuType[], fatherKey?: string) => {
    menuMap: Record<string, NavigationMenuType>;
    menuList: NavigationMenuType[];
    menuOpenKeyMap: Record<string, string[]>;
    flatMenuList: NavigationMenuType[];
};
/** 格式化路由数据，菜单 */
export declare const formatNavigationData: (role: string, routes: PageRouterType[], parentPath?: string) => any[];
