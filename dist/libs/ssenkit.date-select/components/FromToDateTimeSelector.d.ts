/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
import { FromTo } from '../types';
import './FromToDateTimeSelector.scss';
export interface Props {
    className?: string;
    fromTo: FromTo;
    onChange: (fromTo: FromTo) => void;
    disableBefore?: moment.MomentInput;
    disableAfter?: moment.MomentInput;
}
export interface State {
    from?: moment.Moment;
    to?: moment.Moment;
}
export default class  extends React.Component<Props, State> {
    static defaultProps: object;
    render(): JSX.Element;
    private changeFrom(fromDate);
    private changeTo(to);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    private propsToState(prevProps, nextProps);
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
}
