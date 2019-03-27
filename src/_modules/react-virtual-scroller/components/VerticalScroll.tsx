import React, { Component, createRef, CSSProperties, ReactElement, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface VerticalScrollDrawerProps {
  containerRef: RefObject<HTMLDivElement>;
  thumbRef: RefObject<HTMLElement>;
  trackRef: RefObject<HTMLElement>;
  
  containerStyle: CSSProperties;
  thumbStyle: CSSProperties;
  trackStyle: CSSProperties;
}

export interface VerticalScrollProps {
  marginTop?: number;
  marginBottom?: number;
  contentHeight: number;
  viewportHeight: number;
  scrollPosition: number;
  onScroll: (scrollPosition: number, scrollRatio: number) => void;
  onScrollEnter?: () => void;
  onScrollLeave?: () => void;
  children: (drawer: VerticalScrollDrawerProps) => ReactElement;
}

export interface VerticalScrollState {
  thumbStyle: CSSProperties;
  trackStyle: CSSProperties;
  containerStyle: CSSProperties;
}

export class VerticalScroll extends Component<VerticalScrollProps, VerticalScrollState> {
  static defaultProps: Partial<VerticalScrollProps> = {
    marginTop: 0,
    marginBottom: 0,
  };
  
  private container: RefObject<HTMLDivElement> = createRef();
  private thumb: RefObject<HTMLElement> = createRef();
  private track: RefObject<HTMLElement> = createRef();
  
  private cursorStart: number = 0;
  private thumbStart: number = 0;
  private thumbMaximum: number = 0;
  
  private containerHeight: number = 0;
  private resizeObserver: ResizeObserver;
  
  constructor(props: VerticalScrollProps) {
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
        left: 0,
        right: 0,
        top: props.marginTop,
        height: 0,
      },
      
      trackStyle: {
        position: 'absolute',
        display: 'none',
        left: 0,
        right: 0,
        top: props.marginTop,
        bottom: props.marginBottom,
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
      if (entry.target === this.container.current && entry.contentRect.height !== this.containerHeight) {
        this.containerHeight = entry.contentRect.height;
        this.updateScroll();
      }
    }
  };
  
  updateScroll = () => {
    const {contentHeight, viewportHeight, marginTop, marginBottom, scrollPosition} = this.props;
    const {containerStyle, thumbStyle, trackStyle} = this.state;
    
    if (contentHeight > viewportHeight) {
      const trackHeight: number = this.containerHeight - marginTop! - marginBottom!;
      const thumbHeight: number = (viewportHeight / contentHeight) * trackHeight;
      const thumbY: number = (scrollPosition / contentHeight) * trackHeight;
      
      this.setState({
        containerStyle: {
          ...containerStyle,
          visibility: 'visible',
        },
        
        thumbStyle: {
          ...thumbStyle,
          display: 'block',
          top: thumbY + marginTop!,
          height: thumbHeight,
        },
        
        trackStyle: {
          ...trackStyle,
          display: 'block',
          top: marginTop,
          bottom: marginBottom,
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
    
    this.containerHeight = this.container.current.offsetHeight;
    this.resizeObserver.observe(this.container.current);
    
    this.thumb.current.addEventListener('mousedown', this.onMouseDown);
    
    this.updateScroll();
  }
  
  getSnapshotBeforeUpdate(prevProps: Readonly<VerticalScrollProps>): boolean {
    return [
      'marginTop',
      'marginBottom',
      'contentHeight',
      'viewportHeight',
    ].some((property: string) => this.props[property] !== prevProps[property]);
  }
  
  componentDidUpdate(prevProps: Readonly<VerticalScrollProps>, prevState: Readonly<VerticalScrollState>, snapshot: boolean) {
    if (snapshot) {
      this.updateScroll();
    }
  }
  
  componentWillUnmount() {
    this.resizeObserver.disconnect();
  }
  
  onMouseDown = (event: MouseEvent) => {
    this.cursorStart = event.screenY;
    this.thumbStart = this.thumb.current!.offsetTop - this.props.marginTop!;
    this.thumbMaximum = this.track.current!.clientHeight - this.thumb.current!.clientHeight;
    
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
    const move: number = event.screenY - this.cursorStart;
    
    let moveTo: number = this.thumbStart + move;
    
    if (moveTo < 0) {
      moveTo = 0;
    } else if (moveTo > this.thumbMaximum) {
      moveTo = this.thumbMaximum;
    }
    
    this.setState({
      thumbStyle: {
        ...this.state.thumbStyle,
        top: moveTo + this.props.marginTop!,
      },
    });
    
    const scrollRatio: number = moveTo / this.track.current!.clientHeight;
    const scrollPosition: number = this.props.contentHeight * scrollRatio;
    
    this.props.onScroll(scrollPosition, scrollRatio);
  };
}