/// <reference types="react" />
import * as React from 'react';
export interface Props {
    menuClassName?: string;
    className?: string;
    value?: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
    minLength?: number;
    source: (request: {
        term: string;
    }, response: (data: object) => void) => void;
    children?: JSX.Element;
}
export default class  extends React.Component<Props, {}> {
    private input;
    private lastDisaptchedText;
    static defaultProps: Partial<Props>;
    render(): React.ReactElement<any>;
    componentDidMount(): void;
    onInputChange: (event: React.KeyboardEvent<{
        value: string;
    }>) => void;
    onInputSubmit: (event: React.KeyboardEvent<{
        value: string;
    }>) => void;
    onBlur: (event: Event) => void;
    dispatchChange: (text: string) => void;
    componentWillReceiveProps(nextProps: Readonly<Props>): void;
}
