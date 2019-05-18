import React, { RefObject, useState } from 'react';
import { HorizontalScroll, HorizontalScrollDrawerProps } from 'react-virtual-scroller';

export function HorizontalScrollBasic() {
  const [contentWidth, setContentWidth] = useState(Math.floor(Math.random() * 30000) + 10000);
  const [viewportWidth, setViewportWidth] = useState(Math.floor(Math.random() * 10000) + 10000);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [containerWidth, setContainerWidth] = useState(250);
  
  function setRandomValues() {
    setContentWidth(Math.floor(Math.random() * 30000) + 10000);
    setViewportWidth(Math.floor(Math.random() * 10000) + 10000);
    setScrollPosition(0);
    setScrollRatio(0);
  }
  
  function setRandomContainerWidth() {
    setContainerWidth(Math.floor(Math.random() * 300) + 30);
  }
  
  function onScroll(nextScrollPosition: number, nextScrollRatio: number) {
    setScrollPosition(nextScrollPosition);
    setScrollRatio(nextScrollRatio);
  }
  
  return (
    <div>
      <div style={{width: containerWidth}}>
        <HorizontalScroll contentWidth={contentWidth}
                          viewportWidth={viewportWidth}
                          scrollPosition={scrollPosition}
                          marginLeft={15}
                          marginRight={15}
                          onScroll={onScroll}>
          {
            ({
               containerRef,
               thumbRef,
               trackRef,
               containerStyle,
               thumbStyle,
               trackStyle,
             }: HorizontalScrollDrawerProps) => (
              <div ref={containerRef}
                   style={{
                     ...containerStyle,
                     width: '100%',
                     height: 10,
                     backgroundColor: 'rgba(0, 0, 0, 0.3)',
                   }}>
                <div ref={trackRef as RefObject<HTMLDivElement>}
                     style={{
                       ...trackStyle,
                       top: -5,
                       bottom: -5,
                       backgroundColor: 'rgba(0, 0, 0, 0.3)',
                       border: 'rgba(0, 0, 0, 1)',
                     }}/>
                <div ref={thumbRef as RefObject<HTMLDivElement>}
                     style={{
                       ...thumbStyle,
                       top: -10,
                       bottom: -10,
                       backgroundColor: 'rgba(0, 0, 0, 0.3)',
                       border: 'rgba(0, 0, 0, 1)',
                     }}/>
              </div>
            )
          }
        </HorizontalScroll>
      </div>
      
      <ul>
        <li>scrollPosition: {scrollPosition}</li>
        <li>scrollRatio: {scrollRatio}</li>
        <li>contentWidth: {contentWidth}</li>
        <li>viewportWidth: {viewportWidth}</li>
      </ul>
      
      <div>
        <button onClick={setRandomValues}>
          set random values
        </button>
        
        <button onClick={setRandomContainerWidth}>
          set random container width
        </button>
      </div>
    </div>
  );
}