/** 设置全局状态函数类型 */
export type SetGlobalStateType<T> = (state: ((arg: any) => T) | T) => void;
declare const useGlobalState: <T>(initState?: T | undefined) => [T, SetGlobalStateType<T>];
export default useGlobalState;
