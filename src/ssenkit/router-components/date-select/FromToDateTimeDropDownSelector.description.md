# `import { FromToDateTimeDropDownSelector } from 'ssenkit.date-select'`

From/To 기간을 입력할 수 있는 Date Selector

Props
- `fromTo: FromTo`
- `onChange: (fromTo: FromTo) => void`
- `disableBefore?: moment.Moment | Date`
- `disableAfter?: moment.Moment | Date`
- `button?: ReactElement<FromToDateTimeDropDownSelectorButtonProps>`
- `useAlternatePosition?: boolean = true`