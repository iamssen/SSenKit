import * as moment from 'moment';
import * as React from 'react';
import { FromTo } from '../types';
import './FromToDateTimeSelector.scss';
export interface Props {
    fromTo: FromTo;
    onChange: (fromTo: FromTo) => void;
    disableBefore?: moment.Moment | Date;
    disableAfter?: moment.Moment | Date;
}
export interface State {
    from: moment.Moment;
    to: moment.Moment;
}
declare const _default: React.ComponentType<Props>;
export default _default;
