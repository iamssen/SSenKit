import * as React from 'react';
import * as ReactDOM from 'react-dom';

export type VerticalPosition =
  'top down'
  | 'top up'
  | 'center'
  | 'bottom down'
  | 'bottom up'
  | ((target: ClientRect, content: ClientRect) => number);
export type HorizontalPosition =
  'left'
  | 'center'
  | 'right'
  | ((target: ClientRect, content: ClientRect) => number);

export interface Props {
  targetQuery?: string;
  content: () => React.ReactElement<{}>;
  verticalPosition?: VerticalPosition;
  horizontalPosition?: HorizontalPosition;
  verticalPositionOffset?: number;
  horizontalPositionOffset?: number;
}

interface InternalProps {
}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'ToolOverAnchor';
  
  static defaultProps: Partial<Props> = {
    //verticalPosition: ''
  };
  
  private element: HTMLElement;
  private content: HTMLElement;
  private targetRect: ClientRect;
  private contentRect: ClientRect;
  
  getElement = () => {
    let element: HTMLElement = ReactDOM.findDOMNode(this) as HTMLElement;
    if (typeof this.props.targetQuery === 'string') {
      return element.querySelector(this.props.targetQuery) as HTMLElement;
    }
    return element;
  };
  
  render() {
    return React.Children.only(this.props.children);
  }
  
  componentDidMount() {
    const element: HTMLElement = this.getElement();
    this.install(element);
    this.element = element;
  }
  
  componentWillUnmount() {
    if (this.element) {
      this.uninstall(this.element);
      this.element = null;
    }
  }
  
  install = (element: HTMLElement) => {
    if (!element) return;
    element.addEventListener('mouseenter', this.start);
  };
  
  uninstall = (element: HTMLElement) => {
    element.removeEventListener('mouseenter', this.start);
  };
  
  start = (event: MouseEvent) => {
    if (!this.element) return;
    
    const content: HTMLElement = document.createElement('div');
    content.style.position = 'fixed';
    //contentContainer.style.top = '10px';
    //contentContainer.style.left = '10px';
    content.style.zIndex = '6000';
    
    document.body.appendChild(content);
    ReactDOM.render(this.props.content(), content);
    
    requestAnimationFrame(() => {
      this.content = content;
      this.targetRect = this.element.getBoundingClientRect();
      this.contentRect = content.getBoundingClientRect();
    });
  };
}

export default Component as React.ComponentClass<Props>;