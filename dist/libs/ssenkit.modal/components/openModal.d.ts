import { ModalContentProps } from './types';
import * as React from 'react';
export interface Options {
    container?: string;
    dimStyle?: React.CSSProperties;
}
export default function (content: React.ReactElement<ModalContentProps>, options?: Options): () => void;
