/// <reference types="react" />
import { ContextmenuType } from './interface';
export declare const ContextmenuProvider: import("react").Provider<ContextmenuContextType>, useContextmenuContext: () => ContextmenuContextType, Context: import("react").Context<ContextmenuContextType>;
interface ContextmenuContextType {
    /** @param 标签切换允许控制器 */
    handleContext?: ContextmenuType['handleContext'];
    /** @param 选择选项 */
    handleSelect?: ContextmenuType['handleSelect'];
}
export {};
