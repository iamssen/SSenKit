import { DateTime } from 'luxon';
import * as React from 'react';
import { FromTo } from '../types';
import './FromToDateTimeDropDownSelector.scss';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';
export interface Props {
    fromTo: FromTo;
    onChange: (fromTo: FromTo) => void;
    disableBefore?: DateTime;
    disableAfter?: DateTime;
    button?: React.ReactElement<FromToDateTimeDropDownSelectorButtonProps>;
    useAlternatePosition?: boolean;
}
declare const _default: React.ComponentType<Props>;
export default _default;
