import { DateTime } from 'luxon';
import * as React from 'react';
import { FromTo } from '../types';
import './FromToDateTimeSelector.scss';
export interface Props {
    fromTo: FromTo;
    onChange: (fromTo: FromTo) => void;
    disableBefore?: DateTime;
    disableAfter?: DateTime;
}
export interface State {
    from: DateTime;
    to: DateTime;
}
declare const _default: React.ComponentType<Props>;
export default _default;
