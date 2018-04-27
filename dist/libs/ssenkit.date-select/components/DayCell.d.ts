/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
export interface Props {
    date: moment.Moment;
    selectedDay: moment.Moment | Date;
    startDay: moment.Moment | Date;
    endDay: moment.Moment | Date;
    today: moment.Moment | Date;
    disableBefore: moment.Moment | Date | undefined;
    disableAfter: moment.Moment | Date | undefined;
    onClick: (date: moment.Moment) => void;
}
export default class  extends React.PureComponent<Props, {}> {
    static displayName: string;
    render(): JSX.Element;
}
