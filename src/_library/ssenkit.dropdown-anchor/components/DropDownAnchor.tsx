import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './DropDownAnchor.scss';
import DropDownAnchorButtonProps from './DropDownAnchorButtonProps';
import DropDownContentProps from './DropDownContentProps';

export interface Props {
  className?: string;
  children: React.ReactElement<DropDownContentProps>;
  button: React.ReactElement<DropDownAnchorButtonProps>;
  useAlternatePosition?: boolean;
  useOutboundClick?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface State {
  open: boolean;
}

export default class extends React.PureComponent<Props, State> {
  private contentContainerRef: React.RefObject<HTMLDivElement> = React.createRef();
  private anchorButtonRef: React.RefObject<React.ReactInstance> = React.createRef();
  
  private outboundClickSubscription: ((event: MouseEvent) => void) | null;
  
  static defaultProps: Partial<Props> = {
    className: '',
    useAlternatePosition: true,
    useOutboundClick: false,
  };
  
  constructor(props: Props) {
    super(props);
    
    this.state = {
      open: false,
    };
  }
  
  render() {
    const buttonProps: DropDownAnchorButtonProps & {ref: React.RefObject<React.ReactInstance>} = {ref: this.anchorButtonRef};
    buttonProps['role'] = 'toggle';
    buttonProps['aria-expanded'] = this.state.open;
    
    let contentElement: JSX.Element | null = null;
    
    if (this.state.open) {
      contentElement = (
        <div ref={this.contentContainerRef} role="container">
          {React.cloneElement(this.props.children as JSX.Element, {close: this.close})}
        </div>
      );
      
      if (!this.props.useOutboundClick) buttonProps.onClick = this.openerCloseHandler;
    } else {
      buttonProps.onClick = this.openerOpenHandler;
    }
    
    return (
      <div className={'DropDownAnchor ' + this.props.className}>
        {React.cloneElement(this.props.button, buttonProps)}
        {contentElement}
      </div>
    );
  }
  
  componentDidUpdate() {
    if (this.state.open) {
      this.updateContentContainerPosition();
      this.subscribeOutboundClick();
    }
  }
  
  componentWillUnmount() {
    this.unsubscribeOutboundClick();
  }
  
  updateContentContainerPosition() {
    if (!this.anchorButtonRef.current || !this.contentContainerRef.current) return;
    
    const documentWidth: number = window.innerWidth;
    const documentHeight: number = window.innerHeight;
    
    const button: HTMLElement = ReactDOM.findDOMNode(this.anchorButtonRef.current) as HTMLElement;
    const contents: HTMLElement = ReactDOM.findDOMNode(this.contentContainerRef.current) as HTMLElement;
    
    if (!button) return;
    
    const buttonBound: ClientRect = button.getBoundingClientRect();
    const contentsBound: ClientRect = contents.getBoundingClientRect();
    
    const gap: number = 3;
    const alternatePositionMargin: number = 10; // FIXME JS 소숫점 Error 위치값 계산이 소숫점으로 들어가게 되면서 발생되는 에러를 해결하기 위한 여유분 추가
    
    let x: number = 0;
    let y: number = buttonBound.height + gap;
    
    if (this.props.useAlternatePosition && contentsBound.left + contentsBound.width + alternatePositionMargin > documentWidth) {
      x = buttonBound.width - contentsBound.width;
    }
    
    if (this.props.useAlternatePosition && buttonBound.top + buttonBound.height + gap + contentsBound.height > documentHeight) {
      y = -(contentsBound.height + gap);
    }
    
    contents.style.left = x + 'px';
    contents.style.top = y + 'px';
  }
  
  // ---------------------------------------------
  // outbound click
  // ---------------------------------------------
  subscribeOutboundClick = () => {
    // subscribe window click event for contents close
    if (!this.outboundClickSubscription && this.props.useOutboundClick) {
      this.outboundClickSubscription = event => this.outboundClickHandler(event);
      window.addEventListener('click', this.outboundClickSubscription);
    }
  };
  
  unsubscribeOutboundClick = () => {
    if (this.outboundClickSubscription) {
      window.removeEventListener('click', this.outboundClickSubscription);
      this.outboundClickSubscription = null;
    }
  };
  
  outboundClickHandler = (event: MouseEvent) => {
    if (!this.contentContainerRef.current) return;
    
    const contents: HTMLElement = ReactDOM.findDOMNode(this.contentContainerRef.current) as HTMLElement;
    const contentsBound: ClientRect = contents.getBoundingClientRect();
    
    const {clientX, clientY} = event;
    
    const toClose: boolean = clientX < contentsBound.left ||
      clientX > contentsBound.left + contentsBound.width ||
      clientY < contentsBound.top ||
      clientY > contentsBound.top + contentsBound.height;
    
    // FIXME Windows + Chrome 환경에서 <select> 선택 시 clientX, clientY가 0으로 들어오는 현상이 있어서 창이 닫히는 문제를 회피
    const isZero: boolean = clientX + clientY === 0;
    
    if (!isZero && toClose) this.closeContentContainer();
    
    event.stopPropagation();
  };
  
  // ---------------------------------------------
  // opener click
  // ---------------------------------------------
  openerOpenHandler = (event: React.MouseEvent<HTMLElement>) => {
    this.openContentContainer();
    event.stopPropagation();
  };
  
  openerCloseHandler = (event: React.MouseEvent<HTMLElement>) => {
    // this.cancelHandler(this.state.value);
    this.closeContentContainer();
    event.stopPropagation();
  };
  
  // ---------------------------------------------
  // open / close content container
  // ---------------------------------------------
  openContentContainer() {
    this.setState({
      open: true,
    });
    
    if (typeof this.props.onOpen === 'function') {
      this.props.onOpen();
    }
  }
  
  closeContentContainer() {
    //debugger;
    this.unsubscribeOutboundClick();
    this.setState({
      open: false,
    });
    
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }
  
  close = () => {
    if (this.state.open) this.closeContentContainer();
  };
}