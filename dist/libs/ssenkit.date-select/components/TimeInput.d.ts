/// <reference types="react" />
import * as React from 'react';
export interface Props {
    className?: string;
    time: string;
    onChange: (time: string) => void;
}
export interface State {
    timeString?: string;
}
export default class  extends React.Component<Props, State> {
    private input;
    static defaultProps: object;
    state: State;
    render(): JSX.Element;
    onBlur: (event: React.FocusEvent<{
        value: string;
    }>) => void;
    onKeyDown: (event: React.KeyboardEvent<{
        value: string;
    }>) => void;
    private commitString(prevTimeString, nextTimeString);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    private propsToState(prevProps, nextProps);
}
