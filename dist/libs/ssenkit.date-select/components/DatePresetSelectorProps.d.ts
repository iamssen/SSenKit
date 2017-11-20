import { DateRange } from '../types';
export interface DatePresetSelectorProps {
    dateRange?: DateRange;
    onSelect?: (dateRange: DateRange) => void;
}
