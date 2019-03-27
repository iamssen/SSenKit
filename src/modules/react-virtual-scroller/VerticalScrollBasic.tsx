import React, { RefObject, useState } from 'react';
import { VerticalScroll, VerticalScrollDrawerProps } from 'react-virtual-scroller';

export function VerticalScrollBasic() {
  const [contentHeight, setContentHeight] = useState(Math.floor(Math.random() * 30000) + 10000);
  const [viewportHeight, setViewportHeight] = useState(Math.floor(Math.random() * 10000) + 10000);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [containerHeight, setContainerHeight] = useState(250);
  
  function setRandomValues() {
    setContentHeight(Math.floor(Math.random() * 30000) + 10000);
    setViewportHeight(Math.floor(Math.random() * 10000) + 10000);
    setScrollPosition(0);
    setScrollRatio(0);
  }
  
  function setRandomContainerHeight() {
    setContainerHeight(Math.floor(Math.random() * 300) + 30);
  }
  
  function onScroll(nextScrollPosition: number, nextScrollRatio: number) {
    setScrollPosition(nextScrollPosition);
    setScrollRatio(nextScrollRatio);
  }
  
  return (
    <div>
      <div style={{height: containerHeight}}>
        <VerticalScroll contentHeight={contentHeight}
                        viewportHeight={viewportHeight}
                        scrollPosition={scrollPosition}
                        marginTop={15}
                        marginBottom={15}
                        onScroll={onScroll}>
          {
            ({
               containerRef,
               thumbRef,
               trackRef,
               containerStyle,
               thumbStyle,
               trackStyle,
             }: VerticalScrollDrawerProps) => (
              <div ref={containerRef}
                   style={{
                     ...containerStyle,
                     width: 10,
                     height: '100%',
                     backgroundColor: 'rgba(0, 0, 0, 0.3)',
                   }}>
                <div ref={trackRef as RefObject<HTMLDivElement>}
                     style={{
                       ...trackStyle,
                       left: -5,
                       right: -5,
                       backgroundColor: 'rgba(0, 0, 0, 0.3)',
                       border: 'rgba(0, 0, 0, 1)',
                     }}/>
                <div ref={thumbRef as RefObject<HTMLDivElement>}
                     style={{
                       ...thumbStyle,
                       left: -10,
                       right: -10,
                       backgroundColor: 'rgba(0, 0, 0, 0.3)',
                       border: 'rgba(0, 0, 0, 1)',
                     }}/>
              </div>
            )
          }
        </VerticalScroll>
      </div>
  
      <ul>
        <li>scrollPosition: {scrollPosition}</li>
        <li>scrollRatio: {scrollRatio}</li>
        <li>contentHeight: {contentHeight}</li>
        <li>viewportHeight: {viewportHeight}</li>
      </ul>
  
      <div>
        <button onClick={setRandomValues}>
          set random values
        </button>
    
        <button onClick={setRandomContainerHeight}>
          set random container height
        </button>
      </div>
    </div>
  );
}