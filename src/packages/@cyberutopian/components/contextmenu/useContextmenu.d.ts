import { RefObject } from 'react';
declare const useContextmenu: (container: RefObject<HTMLElement> | null, contextmenuRef: RefObject<HTMLElement> | null, shouldOpen: boolean) => {
    visible: boolean;
    x: number;
    y: number;
};
export default useContextmenu;
