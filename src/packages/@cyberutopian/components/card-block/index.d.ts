import { FC } from 'react';
import { CardBlockType } from './interface';
import TitleBar from './title-bar';
declare const CardBlock: FC<CardBlockType> & {
    TitleBar: typeof TitleBar;
};
export { CardBlock };
