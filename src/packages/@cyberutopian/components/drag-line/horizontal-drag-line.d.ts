import { CSSProperties, FC } from 'react';
import { DraggableBounds } from 'react-draggable';
declare const HorizontalDragLine: FC<{
    initWidth: number;
    offsetWidth: number;
    style?: CSSProperties;
    position?: {
        x: number;
        y: number;
    };
    bounds?: DraggableBounds;
    onChange: (v: number) => void;
}>;
export { HorizontalDragLine };
