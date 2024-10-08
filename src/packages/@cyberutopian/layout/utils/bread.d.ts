import { BreadcrumbConfigType } from '../typings/bread';
import { PageRouterType } from '../typings/navigation';
export declare const getRouterStoreName: (name: string) => string;
export declare const setRouterStack: (data: string[], name?: string) => void;
export declare const getRouterStack: (name?: string) => any;
export declare const setRouterMap: (data: Record<string, {
    pathname: string;
    params: string;
}>, name?: string) => void;
export declare const getRouterMap: (name?: string) => any;
export declare const getDetail: (routes: PageRouterType[], pathname: string, path: string) => false | {
    title: import("react/jsx-runtime").JSX.Element;
    href: any;
    value: any;
    className: string;
};
export declare const getBreadItems: (stack: string[], breadMap: Record<string, Record<string, string[]>>, pathname: string, routes: PageRouterType[]) => any[];
export declare const getBreadMap: (breadConfig: BreadcrumbConfigType[]) => Record<string, Record<string, string[]>>;
