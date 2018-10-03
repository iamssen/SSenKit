# `import { DateRangeDropDownSelector } from 'ssenkit.date-select'`

Drop Down 형태로 기간을 선택한다.

Props
- `dateRange: DateRange`
- `disableBefore?: moment.Moment | Date`
- `disableAfter?: moment.Moment | Date`
- `onChange: (dateRange: DateRange) => void`
- `children: ReactElement<{dateRange: DateRange, onSelect: (dateRange: DateRange) => void}>`
- `button?: ReactElement<DateRangeDropDownSelectorButtonProps>`
- `useAlternatePosition?: boolean = true`