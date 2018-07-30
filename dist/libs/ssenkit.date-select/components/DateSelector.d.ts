import { DateTime } from 'luxon';
import * as React from 'react';
import './DateSelector.scss';
export interface Props {
    date: DateTime;
    onChange: (date: DateTime) => void;
    disableBefore?: DateTime;
    disableAfter?: DateTime;
}
declare const _default: React.ComponentType<Props>;
export default _default;