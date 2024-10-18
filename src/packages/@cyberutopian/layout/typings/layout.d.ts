import { HTMLAttributes, ReactNode } from 'react';
import { PageRouterType } from './navigation';
export type LayoutType = {
    children: ReactNode;
    loading?: boolean;
    theme: {
        color: string;
        bg: string;
    };
    routes: PageRouterType[];
    onExpand?: (isExpanded: boolean) => void;
} & HTMLAttributes<HTMLDivElement>;
