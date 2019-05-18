import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import React, { ComponentType, DetailedHTMLProps, HTMLAttributes, RefObject } from 'react';
import styled from 'styled-components';
import { VerticalScroll, VerticalScrollDrawerProps } from './VerticalScroll';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

export const VerticalScrollContainer: ComponentType<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = styled.div`
  width: 20px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.1);
  
  // Track and Thumb
  div {
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

describe('<VerticalScroll/>', () => {
  it('Sample Test', () => {
    //function onScroll(nextScrollPosition: number, nextScrollRatio: number) {
    //  console.log('VerticalScroll.test.tsx..onScroll()');
    //}
    //
    //const wrapper: ReactWrapper = mount(
    //  <VerticalScroll contentHeight={1000}
    //                  viewportHeight={100}
    //                  scrollPosition={0}
    //                  onScroll={onScroll}>
    //    {
    //      ({
    //         containerRef,
    //         thumbRef,
    //         trackRef,
    //         containerStyle,
    //         thumbStyle,
    //         trackStyle,
    //       }: VerticalScrollDrawerProps) => (
    //        <VerticalScrollContainer data-id="container" ref={containerRef} style={containerStyle}>
    //          <div data-id="track" ref={trackRef as RefObject<HTMLDivElement>} style={trackStyle}/>
    //          <div data-id="thumb" ref={thumbRef as RefObject<HTMLDivElement>} style={thumbStyle}/>
    //        </VerticalScrollContainer>
    //      )
    //    }
    //  </VerticalScroll>,
    //);
    //
    //console.log('VerticalScroll.test.tsx..()', wrapper.find('[data-id="thumb"]').debug());
    //expect(wrapper.find('[data-id="thumb"]')).toHaveStyle({display: 'block', top: 0});
  });
  
  it('Sample Test2', () => {
    //function onScroll(nextScrollPosition: number, nextScrollRatio: number) {
    //  console.log('VerticalScroll.test.tsx..onScroll()');
    //}
    //
    //const component: ReactTestRenderer = renderer.create(
    //  <div style={{height: 250}}>
    //    <VerticalScroll contentHeight={1000}
    //                    viewportHeight={100}
    //                    scrollPosition={0}
    //                    onScroll={onScroll}>
    //      {
    //        ({
    //           containerRef,
    //           thumbRef,
    //           trackRef,
    //           containerStyle,
    //           thumbStyle,
    //           trackStyle,
    //         }: VerticalScrollDrawerProps) => (
    //          <VerticalScrollContainer data-id="container" ref={containerRef} style={containerStyle}>
    //            <div data-id="track" ref={trackRef as RefObject<HTMLDivElement>} style={trackStyle}/>
    //            <div data-id="thumb" ref={thumbRef as RefObject<HTMLDivElement>} style={thumbStyle}/>
    //          </VerticalScrollContainer>
    //        )
    //      }
    //    </VerticalScroll>
    //  </div>,
    //);
    //
    //console.log('VerticalScroll.test.tsx..()', component.toJSON());
  });
});