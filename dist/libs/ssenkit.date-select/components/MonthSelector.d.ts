/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
import './MonthSelector.scss';
export interface Props {
    className?: string;
    date: moment.MomentInput;
    onChange: (year: number, month: number) => void;
    disableBefore?: moment.MomentInput;
    disableAfter?: moment.MomentInput;
}
export interface State {
    date?: moment.Moment;
    source?: Map<number, number[]>;
}
export default class  extends React.Component<Props, State> {
    static defaultProps: object;
    state: State;
    render(): JSX.Element;
    onYearChange: (event: React.ChangeEvent<{
        value: string;
    }>) => void;
    onMonthChange: (event: React.ChangeEvent<{
        value: string;
    }>) => void;
    parseSource(props: Props): void;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
}
