import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalContentProps } from './types';

export interface Props {
  onClose: () => void;
  container?: string;
  dimStyle?: React.CSSProperties;
  children: React.ReactElement<ModalContentProps>;
}

interface InternalProps {
}

interface State {
  modalContainer: Element | null;
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'Modal';
  
  private container: Element | null;
  
  static defaultProps: Partial<Props> = {
    dimStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  };
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      modalContainer: null,
    };
  }
  
  componentDidMount() {
    this.container = typeof this.props.container === 'string'
      ? document.querySelector(this.props.container)
      : document.body;
    
    if (!this.container) {
      throw new Error(`Container "${this.props.container}" not found.`);
    }
    
    const modalContainer: Element = document.createElement('div');
    modalContainer.setAttribute('class', '__ssenkit_modal_container__');
    this.container.appendChild(modalContainer);
    
    this.setState({
      modalContainer,
    });
  }
  
  componentWillUnmount() {
    if (this.container && this.state.modalContainer) {
      this.container.removeChild(this.state.modalContainer);
      this.container = null;
    }
  }
  
  render() {
    return this.state.modalContainer
      ? ReactDOM.createPortal((
        <div style={this.props.dimStyle}>
          {React.cloneElement(this.props.children, {closeModal: this.closeModal})}
        </div>
      ), this.state.modalContainer)
      : null;
  }
  
  closeModal = () => {
    this.props.onClose();
  };
}

export default Component as React.ComponentType<Props>;