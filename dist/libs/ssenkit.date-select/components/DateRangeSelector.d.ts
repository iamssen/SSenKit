/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
import { DateRange } from '../types';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DateRangeSelector.scss';
export interface Props {
    className?: string;
    dateRange: DateRange;
    onChange: (progressiveDateRange: DateRange) => void;
    onCancel: () => void;
    onComplete: (dateRange: DateRange) => void;
    disableBefore?: moment.MomentInput;
    disableAfter?: moment.MomentInput;
    children?: React.ReactElement<DatePresetSelectorProps>;
}
export interface State {
    tabIndex?: number;
    dateRange?: DateRange;
}
export default class  extends React.Component<Props, State> {
    static defaultProps: object;
    render(): JSX.Element;
    onTabChange: (tabIndex: number) => void;
    onDateCancel: () => void;
    onDateComplete: (dateRange: DateRange) => void;
    onDateChange: (dateRange: DateRange) => void;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    private propsToState(prevProps, nextProps);
    private getTabIndex(dateRange);
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
}
