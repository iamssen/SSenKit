/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
import './DateSelector.scss';
export interface Props {
    date: moment.Moment | Date;
    onChange: (date: Date) => void;
    disableBefore?: moment.Moment | Date;
    disableAfter?: moment.Moment | Date;
}
declare const _default: React.ComponentType<Props>;
export default _default;
