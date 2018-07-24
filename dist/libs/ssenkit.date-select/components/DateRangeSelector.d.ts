import { DateTime } from 'luxon';
import * as React from 'react';
import { DateRange } from '../types';
import { DatePresetSelectorProps } from './DatePresetSelectorProps';
import './DateRangeSelector.scss';
export interface Props {
    dateRange: DateRange;
    onChange: (progressiveDateRange: DateRange) => void;
    onCancel: () => void;
    onComplete: (dateRange: DateRange) => void;
    disableBefore?: DateTime;
    disableAfter?: DateTime;
    children?: React.ReactElement<DatePresetSelectorProps>;
}
declare const _default: React.ComponentType<Props>;
export default _default;
