import { DropDownAnchorButtonProps } from 'ssenkit.dropdown-anchor';
import { FromTo } from '../types';
export interface FromToDateTimeDropDownSelectorButtonProps extends DropDownAnchorButtonProps {
    fromTo?: FromTo;
    progressiveFromTo?: FromTo;
}
