React 16의 `ReactDOM.createPortal()`을 사용하지 않는다.

`openModal(<div/>)`와 같이 간소하게 Modal을 열 수 있다는 장점이 있지만,
React 16의 `ReactDOM.createPortal()`을 사용한 `<Modal/>`과 다르게 Context 연결이 되지 않는다.

MobX나 React-Intl 등 React Context를 기반으로 하는 기술들이 연결되는 Modal 이라면
`openModal()`을 사용하면 안된다.

## Options

- `container?: string` 입력하지 않으면 Modal을 `document.body`에 띄우게 된다. 필요한 경우 `<Modal container="#modal-root">`와 같이 입력해서 Modal을 `#modal-root`에 띄울 수 있다.
- `dimStyle?: React.CSSProperties` 후방 DIM의 스타일을 바꿀 수 있다.