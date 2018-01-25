# `import { FromToDateTimeDropDownSelector } from 'ssenkit.date-select'`

From/To 기간을 입력할 수 있는 Date Selector

Props
- `className?: string`
- `fromTo: FromTo`
- `onChange: (fromTo: FromTo) => void`
- `disableBefore?: moment.MomentInput`
- `disableAfter?: moment.MomentInput`
- `button?: ReactElement<FromToDateTimeDropDownSelectorButtonProps>`
- `useAlternatePosition?: boolean = true`