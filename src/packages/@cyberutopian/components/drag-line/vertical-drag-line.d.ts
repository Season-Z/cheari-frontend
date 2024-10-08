import { CSSProperties, FC } from 'react';
import { DraggableBounds, DraggableData } from 'react-draggable';
declare const VerticalDragLine: FC<{
    initHeight: number;
    offsetHeight: number;
    className?: string;
    style?: CSSProperties;
    position?: {
        x: number;
        y: number;
    };
    bounds?: DraggableBounds;
    onChange: (v: number, data: DraggableData) => void;
}>;
export { VerticalDragLine };
