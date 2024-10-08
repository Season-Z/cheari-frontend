/// <reference types="react" />
declare const useTransitionend: () => {
    wrapperDiv: import("react").RefObject<HTMLDivElement>;
    transitionend: boolean;
    transitionstart: boolean;
};
export default useTransitionend;
