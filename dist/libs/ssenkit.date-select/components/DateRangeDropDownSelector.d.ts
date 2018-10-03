import * as moment from 'moment';
import * as React from 'react';
import { DateRange } from '../types';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DateRangeDropDownSelector.scss';
import { DateRangeDropDownSelectorButtonProps } from './DateRangeDropDownSelectorButtonProps';
export interface Props {
    dateRange: DateRange;
    onChange: (date: DateRange) => void;
    button?: React.ReactElement<DateRangeDropDownSelectorButtonProps>;
    children?: React.ReactElement<DatePresetSelectorProps>;
    disableBefore?: moment.Moment | Date;
    disableAfter?: moment.Moment | Date;
    useAlternatePosition?: boolean;
}
declare const _default: React.ComponentType<Props>;
export default _default;
