/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
import { DateRange } from '../types';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DateRangeDropDownSelector.scss';
import { DateRangeDropDownSelectorButtonProps } from './DateRangeDropDownSelectorButtonProps';
export interface Props {
    className?: string;
    dateRange: DateRange;
    onChange: (date: DateRange) => void;
    button?: React.ReactElement<DateRangeDropDownSelectorButtonProps>;
    children?: React.ReactElement<DatePresetSelectorProps>;
    disableBefore?: moment.MomentInput;
    disableAfter?: moment.MomentInput;
    useAlternatePosition?: boolean;
}
export interface State {
    progressiveDateRange?: DateRange;
}
export default class  extends React.Component<Props, State> {
    private anchor;
    static defaultProps: object;
    state: State;
    render(): JSX.Element;
    onChange: (progressiveDateRange: DateRange) => void;
    onComplete: (dateRange: DateRange) => void;
    onCancel: () => void;
    onAnchorClose: () => void;
}
