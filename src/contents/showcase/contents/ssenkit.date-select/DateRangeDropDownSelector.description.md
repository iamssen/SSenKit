# `import { DateRangeDropDownSelector } from 'ssenkit.date-select'`

Drop Down 형태로 기간을 선택한다.

Props
- `className?: string`
- `dateRange: DateRange`
- `disableBefore?: moment.MomentInput`
- `disableAfter?: moment.MomentInput`
- `onChange: (dateRange: DateRange) => void`
- `children: ReactElement<{dateRange: DateRange, onSelect: (dateRange: DateRange) => void}>`
- `button?: ReactElement<DateRangeDropDownSelectorButtonProps>`
- `useAlternatePosition?: boolean = true`