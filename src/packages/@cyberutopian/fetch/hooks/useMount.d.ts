type fnType = (this: any, ...args: any[]) => any;
declare const useMount: <T extends fnType>(fn: T) => void;
export default useMount;
