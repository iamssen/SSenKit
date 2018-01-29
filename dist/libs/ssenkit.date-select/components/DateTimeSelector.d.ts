/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
import './DateTimeSelector.scss';
export interface Props {
    className?: string;
    date: moment.MomentInput;
    onChange: (date: Date) => void;
    disableBefore?: moment.MomentInput;
    disableAfter?: moment.MomentInput;
}
export interface State {
    date?: moment.Moment;
    time?: string;
}
export default class  extends React.Component<Props, State> {
    static defaultProps: object;
    render(): JSX.Element;
    onDateChange: (newDate: Date) => void;
    onTimeChange: (newTime: string) => void;
    private mergeDateTime(date, time);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    private propsToState(prevProps, nextProps);
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean;
}
