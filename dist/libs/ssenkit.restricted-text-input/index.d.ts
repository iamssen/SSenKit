import * as React from 'react';
export interface Props {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
    availableCharacterPattern: RegExp;
    children?: JSX.Element;
}
declare const _default: React.ComponentType<Props>;
export default _default;
