# 목표점?

svg를 쓸 필요는 없어보인다...
어차피 전부 absolute position으로 floating 시켜야하니깐...

```
<VerticalScroll paddingTop?={} // 상위 여분 생성
                paddingBottom?={} // 하위 여분 생성
                contentHeight={}
                viewportHeight={}
                scrollPosition={}
                onScroll={}
                onScrollEnter?={}
                onScrollLeave?={}
                >
{
  ({
    svgProps, // style(좌표 정보), 
    thumbProps, // thumbRef, y, height
    trackProps, // trackRef -> click 시에 특정 위치로 이동
    containerProps, // containerRef -> size detection을 위한 처리, size를 지속적으로 읽어낸다
  }) => (
    <div ...containerProps>
      <svg ...svgProps>
        <rect ...trackProps/>
        <rect ...thumbProps/>
      </svg>
    </div>
  )
}
</VerticalScroll>
```

- container
  - 자연스러운 css 등을 통한 위치 조정이 가능해야 한다
  - 내부 size를 watching해서 변화가 있을 경우 새로운 렌더링을 시작한다
- svg
  - position: absolute를 통해서 floating 시킨다 (container 영역 바깥으로 튀어나갈 수 있도록)
  - top, bottom 위치를 알려줘서 사이즈를 조절하게 한다
- thumb
  - svg 내부에서의 y, height 정보만 준다 (알아서 렌더링 하도록)
- track
  - svg 내부에서의 y, height 정보만 준다 (알아서 렌더링 하도록)