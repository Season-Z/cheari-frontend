/// <reference types="react" />
interface UseNavVisibleType {
    maxWidth: number;
    minWidth: number;
    isExpanded: boolean;
}
declare const useNavVisible: ({ maxWidth, minWidth, isExpanded }: UseNavVisibleType) => {
    wrapperFatherDiv: import("react").RefObject<HTMLDivElement>;
    wrapperChildDiv: import("react").RefObject<HTMLDivElement>;
    navWidth: number;
    showNav: boolean;
    setActiveNav: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setForceHide: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useNavVisible;
