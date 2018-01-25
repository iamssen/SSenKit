# `import { SingleAutoCompleteTextInput } from 'ssenkit.autocomplete-text-input'`

<http://api.jqueryui.com/autocomplete/>의 React Wrapping.

jQuery UI에 의해서 `componentDidMount()` 시점에 구성되므로 Props는 초기화에만 사용되고, 이후 변경에 의한 적용이 이루어지지 않는다.

하단에 펼쳐지는 Menu같은 경우 Document 최상위에 만들어지게 되므로, `menuClassName`은 CSS 계층을 적용할 수 없다.

Props
- `className?: string` Input에 적용되는 CSS Class
- `menuClassName?: string` Menu에 적용되는 CSS Class
- `value?: string`
- `onChange: (value: string) => void`
- `minLength?: number = 2` 자동완성이 시작될 최소 문자수. Service 호출을 억제하는데 사용될 수 있다.
- `source: (request, response) => void` jQuery UI Autocomplete의 source 항목을 참조.
- `children?: JSX.Element = <input/>` 필요한 경우 `<input/>` tag를 Children Element로 넘겨서 Custom 할 수 있다.