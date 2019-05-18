import React, { Component, createRef, CSSProperties, ReactElement, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface HorizontalScrollDrawerProps {
  containerRef: RefObject<HTMLDivElement>;
  thumbRef: RefObject<HTMLElement>;
  trackRef: RefObject<HTMLElement>;
  
  containerStyle: CSSProperties;
  thumbStyle: CSSProperties;
  trackStyle: CSSProperties;
}

export interface HorizontalScrollProps {
  marginLeft?: number;
  marginRight?: number;
  contentWidth: number;
  viewportWidth: number;
  scrollPosition: number;
  onScroll: (scrollPosition: number, scrollRatio: number) => void;
  onScrollEnter?: () => void;
  onScrollLeave?: () => void;
  children: (drawer: HorizontalScrollDrawerProps) => ReactElement;
}

export interface HorizontalScrollState {
  thumbStyle: CSSProperties;
  trackStyle: CSSProperties;
  containerStyle: CSSProperties;
}

export class HorizontalScroll extends Component<HorizontalScrollProps, HorizontalScrollState> {
  static defaultProps: Partial<HorizontalScrollProps> = {
    marginLeft: 0,
    marginRight: 0,
  };
  
  private container: RefObject<HTMLDivElement> = createRef();
  private thumb: RefObject<HTMLElement> = createRef();
  private track: RefObject<HTMLElement> = createRef();
  
  private cursorStart: number = 0;
  private thumbStart: number = 0;
  private thumbMaximum: number = 0;
  
  private containerWidth: number = 0;
  private resizeObserver: ResizeObserver;
  
  constructor(props: HorizontalScrollProps) {
    super(props);
    
    this.resizeObserver = new ResizeObserver(this.resizeHandler);
    
    this.state = {
      containerStyle: {
        position: 'relative',
        visibility: 'hidden',
      },
      
      thumbStyle: {
        position: 'absolute',
        display: 'none',
        left: props.marginLeft,
        width: 0,
      },
      
      trackStyle: {
        position: 'absolute',
        display: 'none',
        left: props.marginLeft,
        right: props.marginRight,
      },
    };
  }
  
  render() {
    return this.props.children({
      containerRef: this.container,
      thumbRef: this.thumb,
      trackRef: this.track,
      containerStyle: this.state.containerStyle,
      thumbStyle: this.state.thumbStyle,
      trackStyle: this.state.trackStyle,
    });
  }
  
  resizeHandler = (entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.target === this.container.current && entry.contentRect.width !== this.containerWidth) {
        this.containerWidth = entry.contentRect.width;
        this.updateScroll();
      }
    }
  };
  
  updateScroll = () => {
    const {contentWidth, viewportWidth, marginLeft, marginRight, scrollPosition} = this.props;
    const {containerStyle, thumbStyle, trackStyle} = this.state;
    
    if (contentWidth > viewportWidth) {
      const trackWidth: number = this.containerWidth - marginLeft! - marginRight!;
      const thumbWidth: number = (viewportWidth / contentWidth) * trackWidth;
      const thumbX: number = (scrollPosition / contentWidth) * trackWidth;
      
      this.setState({
        containerStyle: {
          ...containerStyle,
          visibility: 'visible',
        },
        
        thumbStyle: {
          ...thumbStyle,
          display: 'block',
          left: thumbX + marginLeft!,
          width: thumbWidth,
        },
        
        trackStyle: {
          ...trackStyle,
          display: 'block',
          left: marginLeft,
          right: marginRight,
        },
      });
    } else {
      this.setState({
        containerStyle: {
          ...containerStyle,
          visibility: 'hidden',
        },
        
        thumbStyle: {
          ...thumbStyle,
          display: 'none',
        },
        
        trackStyle: {
          ...trackStyle,
          display: 'none',
        },
      });
    }
  };
  
  componentDidMount() {
    if (!this.container.current || !this.thumb.current || !this.track.current) {
      throw new Error('Did not assigned values to RefObject.current!');
    }
    
    this.containerWidth = this.container.current.offsetWidth;
    this.resizeObserver.observe(this.container.current);
    
    this.thumb.current.addEventListener('mousedown', this.onMouseDown);
    
    this.updateScroll();
  }
  
  getSnapshotBeforeUpdate(prevProps: Readonly<HorizontalScrollProps>): boolean {
    return [
      'marginLeft',
      'marginRight',
      'contentWidth',
      'viewportWidth',
    ].some((property: string) => this.props[property] !== prevProps[property]);
  }
  
  componentDidUpdate(prevProps: Readonly<HorizontalScrollProps>, prevState: Readonly<HorizontalScrollState>, snapshot: boolean) {
    if (snapshot) {
      this.updateScroll();
    }
  }
  
  componentWillUnmount() {
    this.resizeObserver.disconnect();
  }
  
  onMouseDown = (event: MouseEvent) => {
    this.cursorStart = event.screenX;
    this.thumbStart = this.thumb.current!.offsetLeft - this.props.marginLeft!;
    this.thumbMaximum = this.track.current!.clientWidth - this.thumb.current!.clientWidth;
    
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
    
    if (typeof this.props.onScrollEnter === 'function') {
      this.props.onScrollEnter();
    }
    
    event.stopPropagation();
  };
  
  onMouseUp = (event: MouseEvent) => {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    
    if (typeof this.props.onScrollLeave === 'function') {
      this.props.onScrollLeave();
    }
    
    event.stopPropagation();
  };
  
  onMouseMove = (event: MouseEvent) => {
    const move: number = event.screenX - this.cursorStart;
    
    let moveTo: number = this.thumbStart + move;
    
    if (moveTo < 0) {
      moveTo = 0;
    } else if (moveTo > this.thumbMaximum) {
      moveTo = this.thumbMaximum;
    }
    
    this.setState({
      thumbStyle: {
        ...this.state.thumbStyle,
        left: moveTo + this.props.marginLeft!,
      },
    });
    
    const scrollRatio: number = moveTo / this.track.current!.clientWidth;
    const scrollPosition: number = this.props.contentWidth * scrollRatio;
    
    this.props.onScroll(scrollPosition, scrollRatio);
  };
}