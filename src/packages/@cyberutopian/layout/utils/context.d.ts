import { LayoutType } from '../typings/layout';
import { NavigationType, PageRouterType } from '../typings/navigation';
import { Dispatch, SetStateAction } from 'react';
export interface CyberLayoutContextType {
    /** @param 主题色 */
    theme: {
        color: string;
    };
    /** @param 项目路由 */
    routes: PageRouterType[];
}
export declare const CyberLayoutProvider: import("react").Provider<CyberLayoutContextType>, useCyberLayoutContext: () => CyberLayoutContextType, CyberLayoutContext: import("react").Context<CyberLayoutContextType>;
export interface LayoutContextType {
    /** @param 展开菜单 */
    isExpanded: boolean;
    /** @param 更改展开 */
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
    /** @param 主题色 */
    theme: LayoutType['theme'];
    /** @param 项目路由 */
    routes: LayoutType['routes'];
}
export declare const LayoutProvider: import("react").Provider<LayoutContextType>, useLayoutContext: () => LayoutContextType, LayoutContext: import("react").Context<LayoutContextType>;
export interface NavigationContextType {
    /** @param 密码修改弹窗触发器 */
    onItemClick?: NavigationType['onItemClick'];
    /** @param 展开菜单 */
    showNav: boolean;
}
export declare const NavigationProvider: import("react").Provider<NavigationContextType>, useNavigationContext: () => NavigationContextType, NavigationContext: import("react").Context<NavigationContextType>;
