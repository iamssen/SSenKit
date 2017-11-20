import { DropDownAnchorButtonProps } from 'ssenkit.dropdown-anchor';
import { DateRange } from '../types';
export interface DateRangeDropDownSelectorButtonProps extends DropDownAnchorButtonProps {
    dateRange?: DateRange;
    progressiveDateRange?: DateRange;
}
