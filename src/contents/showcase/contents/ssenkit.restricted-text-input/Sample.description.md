입력 제한 기능을 가지는 Text Input

## Props

- `value: string`
- `onChange: (value: string) => void`
- `onSubmit: (value: string) => void` Enter Key에 의해서 Submit이 일어날때 발생한다.
- `availableCharacterPattern: RegExp` 입력 가능한 Character 범위를 정규식으로 입력한다. `[a-b]{2,3}`과 같이 Range는 지정하지 않는다. 허용 가능한 Character의 범위이지, 허용 가능한 문장을 체크하지 않는다.
- `children?: JSX.Element = <input type="text"/>` 필요한 경우 `<input/>`을 직접 입력할 수 있다.
  - 가능한 `<input/>`에 대한 스타일링 용도로만 사용하는게 좋다. `defaultValue`, `onChange`, `onKeyPress`, `onKeyDown`와 같은 기능은 내부적으로 덮어쓰기 때문에 무시된다.