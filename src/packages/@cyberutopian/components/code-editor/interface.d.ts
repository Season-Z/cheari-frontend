import { Monaco } from '@monaco-editor/loader';
import * as monaco from 'monaco-editor';
import { IRange, editor } from 'monaco-editor';
import { HTMLAttributes, MutableRefObject, RefObject } from 'react';
export { monaco };
export type MonacoConfigParamsType = {
    paths?: {
        vs?: string;
    };
    'vs/nls'?: {
        availableLanguages?: object;
    };
    monaco?: Monaco;
};
export interface CodeEditorTabItemOptionType {
    /** @param 是否高亮 */
    isActive: boolean;
    /** @param 关闭标签页回调 */
    onCloseTab: (data: CodeEditorTabType['activeKey'], data1: CodeEditorTabItemType) => void;
    /** @param 高亮 */
    onChange: (data: CodeEditorTabType['activeKey'], data1: CodeEditorTabItemType) => void;
}
/**
 * 编辑器标签项类型
 */
export interface CodeEditorTabItemType {
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
export interface CodeEditorTabType extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tabsRef?: RefObject<HTMLDivElement>;
    /** @param 标签页数据 */
    items: CodeEditorTabItemType[];
    /** @param 高亮的标签页 */
    activeKey: string | number;
    /** @param 关闭标签页回调 */
    onCloseTab: CodeEditorTabItemOptionType['onCloseTab'];
    /** @param 切换标签页回调 */
    onChange: CodeEditorTabItemOptionType['onChange'];
}
/**
 * monaco对象
 */
export type MonacoType = Monaco;
/**
 * 编辑器类型
 */
export interface CodeEditorType {
    width?: number | string;
    height?: number | string;
    /** @param 源码 */
    value?: string;
    /** @param 路径 */
    path?: string;
    /** @param 语言 */
    language?: string;
    /** @param 跳转到的行 */
    line?: number;
    overrideServices?: editor.IEditorOverrideServices;
    options?: editor.IStandaloneEditorConstructionOptions;
    onMount?: (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => void;
    beforeMount?: (monaco: Monaco) => void;
    onChange?: (value: string | undefined, ev: editor.IModelContentChangedEvent) => void;
}
/**
 * 错误信息编辑器
 */
export interface ValidateCodeEditorType extends IRange, CodeEditorType {
    editorRef?: MutableRefObject<editor.IStandaloneCodeEditor | undefined | null>;
    monacoRef?: MutableRefObject<Monaco | null>;
    /** @param 错误信息 */
    errorMessage: string;
    /** @param 立刻设置 */
    immediately?: boolean;
    /** @param 额外的编辑器配置 */
    options?: editor.IEditorOptions;
}
