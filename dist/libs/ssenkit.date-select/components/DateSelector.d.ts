/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
import './DateSelector.scss';
export interface Props {
    className?: string;
    date: moment.MomentInput;
    onChange: (date: Date) => void;
    disableBefore?: moment.MomentInput;
    disableAfter?: moment.MomentInput;
}
export interface State {
    view?: moment.Moment;
    selected?: moment.Moment;
    disableBefore?: moment.Moment;
    disableAfter?: moment.Moment;
}
export default class  extends React.Component<Props, State> {
    static defaultProps: object;
    render(): JSX.Element;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Readonly<Props>): void;
    propsToState(prevProps: Props, nextProps: Props): void;
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean;
    changeView: (newMonth: moment.Moment) => void;
    onMonthChange: (year: number, month: number) => void;
    onDayClick: (newDate: moment.Moment) => void;
}
