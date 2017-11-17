React 16의 `ReactDOM.createPortal()`을 사용한다.

```
<Modal>
  <div>
    Content
  </div>
</Modal>
```

위와 같이 화면에 넣어주면 `<div>` 부분이 Modal로 뜨게 된다.

## Props

- `container?: string` 입력하지 않으면 Modal을 `document.body`에 띄우게 된다. 필요한 경우 `<Modal container="#modal-root">`와 같이 입력해서 Modal을 `#modal-root`에 띄울 수 있다.
- `dimStyle?: React.CSSProperties` 후방 DIM의 스타일을 바꿀 수 있다.