/// <reference types="react" />
import * as React from 'react';
import { ModalContentProps } from './types';
export interface Props {
    onClose: () => void;
    container?: string;
    dimStyle?: React.CSSProperties;
    children: React.ReactElement<ModalContentProps>;
}
declare const _default: React.ComponentClass<Props>;
export default _default;
