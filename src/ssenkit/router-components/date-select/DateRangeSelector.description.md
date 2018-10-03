# `import { DateRangeSelector } from 'ssenkit.date-select'`

기간을 선택한다.

Child Element(`props.children`)을 반드시 입력해줘야 한다.
Child Element는 우측 탭 선택시의 "미리 지정된 기간"의 구현에 사용된다.

Props
- `dateRange: DateRange`
- `disableBefore?: moment.Moment | Date`
- `disableAfter?: moment.Moment | Date`
- `onChange: (dateRange: DateRange) => void`
- `children: ReactElement<{dateRange: DateRange, onSelect: (dateRange: DateRange) => void}>`