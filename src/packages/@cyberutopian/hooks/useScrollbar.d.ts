/// <reference types="react" />
declare const useScrollbar: () => {
    wrapperRef: import("react").RefObject<HTMLDivElement>;
    scrollRect: () => void;
    scrollVisible: () => void;
};
export default useScrollbar;
