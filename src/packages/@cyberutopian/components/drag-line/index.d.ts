import { FC } from 'react';
import { HorizontalDragLine } from './horizontal-drag-line';
import { VerticalDragLine } from './vertical-drag-line';
declare const DragLine: FC & {
    HorizontalDragLine: typeof HorizontalDragLine;
    VerticalDragLine: typeof VerticalDragLine;
};
export { DragLine };
