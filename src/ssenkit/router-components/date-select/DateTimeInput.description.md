# `import { DateTimeInput } from 'ssenkit.date-select'`

날짜와 시간을 입력하는 Input Text

입력 가능한 포맷은 아래와 같고, 공백은 제거되어서 판단된다. (즉, `yyyy - LL - dd   HH:mm:ss`로 입력이 되어도 공백이 제거되어서 `yyyy-LL-dd HH:mm:ss`로 판정됨)
- `yyyy-LL-dd HH:mm:ss`
- `yyyy.LL.dd HH:mm:ss`
- `yyyyLLdd HH:mm:ss`

Props
- `date: DateTime`
- `onChange: (date: DateTime) => void`
- `disableBefore?: DateTime`
- `disableAfter?: DateTime`