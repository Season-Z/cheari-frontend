/// <reference types="react" />
declare const useElementInViewport: () => {
    wrapper: import("react").RefObject<HTMLDivElement>;
    isElementInViewport: () => boolean;
};
export default useElementInViewport;
