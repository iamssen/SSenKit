/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
export interface Props {
    className?: string;
    date: moment.MomentInput;
    onChange: (date: Date) => void;
    disableBefore?: moment.MomentInput;
    disableAfter?: moment.MomentInput;
}
export interface State {
    dateString?: string;
}
export default class  extends React.Component<Props, State> {
    private input;
    static defaultProps: Partial<Props>;
    state: State;
    render(): JSX.Element;
    onBlur: (event: React.FocusEvent<{
        value: string;
    }>) => void;
    onKeyDown: (event: React.KeyboardEvent<{
        value: string;
    }>) => void;
    private commitString(prevDateString, nextDateString);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    private propsToState(prevProps, nextProps);
}
