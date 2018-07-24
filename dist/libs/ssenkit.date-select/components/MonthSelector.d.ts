import { DateTime } from 'luxon';
import * as React from 'react';
import './MonthSelector.scss';
export interface Props {
    date: DateTime;
    onChange: (year: number, month: number) => void;
    disableBefore: DateTime;
    disableAfter: DateTime;
}
declare const _default: React.ComponentType<Props>;
export default _default;
