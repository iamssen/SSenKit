# `import { DateInput } from 'ssenkit.date-select'`

날짜를 입력하는 Input Text

입력 가능한 포맷은 아래와 같고, 공백은 제거되어서 판단된다. (즉, `YYYY - MM - DD`로 입력이 되어도 공백이 제거되어서 `YYYY-MM-DD`로 판정됨)
- `YYYY-MM-DD`
- `YYYY.MM.DD`
- `YYYYMMDD`

Props
- `date: moment.Moment | Date`
- `onChange: (date: Date) => void`
- `disableBefore?: moment.Moment | Date`
- `disableAfter?: moment.Moment | Date`