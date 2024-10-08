/// <reference types="react" />
declare const useScrollCheck: () => {
    scrollEleRef: import("react").RefObject<HTMLDivElement>;
    scrolled: boolean;
};
export default useScrollCheck;
