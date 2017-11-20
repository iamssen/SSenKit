/// <reference types="react" />
import * as moment from 'moment';
import * as React from 'react';
import { FromTo } from '../types';
import './FromToDateTimeDropDownSelector.scss';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';
export interface Props {
    className?: string;
    fromTo: FromTo;
    onChange: (fromTo: FromTo) => void;
    disableBefore?: moment.MomentInput;
    disableAfter?: moment.MomentInput;
    button?: React.ReactElement<FromToDateTimeDropDownSelectorButtonProps>;
    useAlternatePosition?: boolean;
}
export interface State {
    progressiveFromTo?: FromTo;
}
export default class  extends React.Component<Props, State> {
    private anchor;
    static defaultProps: object;
    state: State;
    render(): JSX.Element;
    onChange: (progressiveFromTo: FromTo) => void;
    onComplete: () => void;
    onCancel: () => void;
    onAnchorClose: () => void;
}
