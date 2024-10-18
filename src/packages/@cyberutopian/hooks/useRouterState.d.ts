interface RouterStateType {
    [x: string]: {
        state: any;
        sets: ((v: any) => void)[];
    };
}
export declare const routerStates: RouterStateType;
/** 设置全局状态函数类型 */
export type SetRouterStateType<T> = (state: ((arg: any) => T) | T) => void;
declare const useRouterState: <T>(initState?: T | undefined) => [T, SetRouterStateType<T>];
export default useRouterState;
