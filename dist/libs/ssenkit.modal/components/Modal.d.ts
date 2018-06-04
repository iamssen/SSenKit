import * as React from 'react';
import { ModalContentProps } from './types';
export interface Props {
    onClose: () => void;
    container?: string;
    dimStyle?: React.CSSProperties;
    children: React.ReactElement<ModalContentProps>;
}
declare const _default: React.ComponentType<Props>;
export default _default;
