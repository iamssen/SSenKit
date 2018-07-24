import * as React from 'react';
import { DateTime } from 'luxon';
export interface Props {
    date: DateTime;
    selectedDay: DateTime;
    startDay: DateTime;
    endDay: DateTime;
    today: DateTime;
    disableBefore: DateTime | undefined;
    disableAfter: DateTime | undefined;
    onClick: (date: DateTime) => void;
}
export default class extends React.PureComponent<Props, {}> {
    static displayName: string;
    render(): JSX.Element;
}
