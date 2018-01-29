/// <reference types="react" />
import * as moment from 'moment';
export interface Props {
    date: moment.Moment;
    selectedDay: moment.MomentInput;
    startDay: moment.MomentInput;
    endDay: moment.MomentInput;
    today: moment.MomentInput;
    disableBefore: moment.MomentInput;
    disableAfter: moment.MomentInput;
    onClick: (date: moment.Moment) => void;
}
declare const _default: ({date, selectedDay, startDay, endDay, today, disableBefore, disableAfter, onClick}: Props) => JSX.Element;
export default _default;
