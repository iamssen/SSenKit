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
  minThumbHeight?: number;
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
    minThumbHeight: 10,
  };
  
  // refs
  private container: RefObject<HTMLDivElement> = createRef();
  private thumb: RefObject<HTMLElement> = createRef();
  private track: RefObject<HTMLElement> = createRef();
  
  // grab and move
  private cursorStartScreenY: number = 0;
  private thumbStartTop: number = 0;
  
  // measure
  private containerHeight: number = 0;
  private trackHeight: number = 0;
  private thumbHeight: number = 0;
  private thumbMaxY: number = 0;
  
  // observer
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
        top: props.marginTop,
        height: 0,
      },
      
      trackStyle: {
        position: 'absolute',
        display: 'none',
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
  
  componentDidMount() {
    if (!this.container.current || !this.thumb.current || !this.track.current) {
      throw new Error('Did not assigned values to RefObject.current!');
    }
    
    this.containerHeight = this.container.current.offsetHeight;
    this.resizeObserver.observe(this.container.current);
    
    console.log('VerticalScroll.tsx..componentDidMount()', this.container.current, this.container.current.offsetHeight);
    
    this.thumb.current.addEventListener('mousedown', this.onMouseDown);
    
    this.updateSizes();
  }
  
  componentDidUpdate(prevProps: Readonly<VerticalScrollProps>, prevState: Readonly<VerticalScrollState>, snapshot: boolean) {
    if (['marginTop', 'marginBottom', 'contentHeight', 'viewportHeight'].some((p: string) => this.props[p] !== prevProps[p])) {
      this.updateSizes();
    } else if (prevProps.scrollPosition !== this.props.scrollPosition) {
      this.updatePosition();
    }
  }
  
  componentWillUnmount() {
    this.resizeObserver.disconnect();
  }
  
  // ---------------------------------------------
  // handlers
  // ---------------------------------------------
  private resizeHandler = (entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.target === this.container.current && entry.contentRect.height !== this.containerHeight) {
        this.containerHeight = entry.contentRect.height;
        this.updateSizes();
      }
    }
  };
  
  // ---------------------------------------------
  // measurement → update states
  // ---------------------------------------------
  /*
   memo
   - this: containerHeight
   - props: marginTop, marginBottom, viewportHeight, contentHeight
   */
  private updateSizes = () => {
    const {contentHeight, viewportHeight, marginTop, marginBottom, scrollPosition, minThumbHeight} = this.props;
    const {containerStyle, thumbStyle, trackStyle} = this.state;
    
    if (contentHeight > viewportHeight) {
      const trackHeight: number = this.containerHeight - marginTop! - marginBottom!;
      const thumbHeight: number = Math.max((viewportHeight / contentHeight) * trackHeight, minThumbHeight!);
      const thumbMaxY: number = trackHeight - thumbHeight;
      const thumbY: number = Math.min(Math.max(
        (scrollPosition / contentHeight) * thumbMaxY,
        0), thumbMaxY);
      
      this.trackHeight = trackHeight;
      this.thumbHeight = thumbHeight;
      this.thumbMaxY = thumbMaxY;
      
      console.log('VerticalScroll.tsx..updateSizes()', this.containerHeight, {thumbY, trackHeight, thumbHeight, thumbMaxY}, {contentHeight, viewportHeight, marginTop, marginBottom, scrollPosition, minThumbHeight});
      
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
  
  private updatePosition = () => {
    const {contentHeight, viewportHeight, marginTop, scrollPosition} = this.props;
    const {thumbStyle} = this.state;
    
    if (contentHeight > viewportHeight) {
      const thumbY: number = Math.min(Math.max(
        (scrollPosition / contentHeight) * this.thumbMaxY,
        0), this.thumbMaxY);
      
      this.setState({
        thumbStyle: {
          ...thumbStyle,
          top: thumbY + marginTop!,
        },
      });
    }
  };
  
  // ---------------------------------------------
  // grab and move
  // ---------------------------------------------
  private onMouseDown = (event: MouseEvent) => {
    this.cursorStartScreenY = event.screenY;
    this.thumbStartTop = this.thumb.current!.offsetTop - this.props.marginTop!;
    
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
    
    if (typeof this.props.onScrollEnter === 'function') {
      this.props.onScrollEnter();
    }
    
    event.stopPropagation();
  };
  
  private onMouseUp = (event: MouseEvent) => {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    
    if (typeof this.props.onScrollLeave === 'function') {
      this.props.onScrollLeave();
    }
    
    event.stopPropagation();
  };
  
  private onMouseMove = (event: MouseEvent) => {
    const nextY: number = Math.min(Math.max(this.thumbStartTop + event.screenY - this.cursorStartScreenY, 0), this.thumbMaxY);
    
    this.setState({
      thumbStyle: {
        ...this.state.thumbStyle,
        top: nextY + this.props.marginTop!,
      },
    });
    
    const scrollRatio: number = nextY / this.thumbMaxY;
    const scrollPosition: number = (this.props.contentHeight - this.props.viewportHeight) * scrollRatio;
    
    this.props.onScroll(scrollPosition, scrollRatio);
  };
}