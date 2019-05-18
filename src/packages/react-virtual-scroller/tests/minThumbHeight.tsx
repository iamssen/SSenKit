import React, { RefObject, useState } from 'react';
import { VerticalScroll, VerticalScrollDrawerProps } from 'react-virtual-scroller';
import { VerticalScrollContainer } from '../skins/VerticalScrollContainer';

export function Test_minThumbHeight() {
  const [contentHeight] = useState(10000000000);
  const [viewportHeight] = useState(1000);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [containerHeight] = useState(250);
  
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
                        minThumbHeight={30}
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
              <VerticalScrollContainer ref={containerRef} style={containerStyle}>
                <div ref={trackRef as RefObject<HTMLDivElement>} style={trackStyle}/>
                <div ref={thumbRef as RefObject<HTMLDivElement>} style={thumbStyle}/>
              </VerticalScrollContainer>
            )
          }
        </VerticalScroll>
      </div>
      
      <ul>
        <li>scrollPosition: {scrollPosition}</li>
        <li>scrollRatio: {scrollRatio}</li>
        <li>contentHeight: {contentHeight}</li>
        <li>viewportHeight: {viewportHeight}</li>
        <li>Visible Content Area: {scrollPosition} → {scrollPosition + viewportHeight}</li>
      </ul>
    </div>
  );
}