import { ReactNode } from 'react';
export interface TitleBarType {
    title?: string;
    subTitle?: string | ReactNode;
    extra?: ReactNode;
    className?: string;
}
export interface CardBlockType extends Partial<TitleBarType> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}
