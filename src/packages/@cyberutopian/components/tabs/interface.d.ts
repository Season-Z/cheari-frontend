import { HTMLAttributes, RefObject } from 'react';
export interface TabsItemOptionType {
    /** @param 是否高亮 */
    isActive: boolean;
    /** @param 关闭标签页回调 */
    onCloseTab: (data: TabsType['activeKey'], data1: TabsItemType) => void;
    /** @param 高亮 */
    onChange: (data: TabsType['activeKey'], data1: TabsItemType) => void;
}
/**
 * 编辑器标签项类型
 */
export interface TabsItemType {
    /** @param 唯一键 */
    key: string | number;
    /** @param icon */
    icon?: string;
    /** @param 文件名 */
    fileName: string;
    /** @param 文件路由 */
    filePath?: string;
    [x: string]: any;
}
/**
 * 编辑器标签页组件类型
 */
export interface TabsType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tabsRef?: RefObject<HTMLDivElement>;
    /** @param 标签页数据 */
    items: TabsItemType[];
    /** @param 高亮的标签页 */
    activeKey: string | number;
    /** @param 关闭标签页回调 */
    onCloseTab: TabsItemOptionType['onCloseTab'];
    /** @param 切换标签页回调 */
    onChange: TabsItemOptionType['onChange'];
}
