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
  modalContainer: Element;
}

class Component extends React.Component<Props & InternalProps, State> {
  private container: Element;
  
  static defaultProps: Partial<Props> = {
    dimStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  };
  
  state: State = {
    modalContainer: null,
  };
  
  componentDidMount() {
    this.container = typeof this.props.container === 'string'
      ? document.querySelector(this.props.container)
      : document.body;
    
    const modalContainer: Element = document.createElement('div');
    modalContainer.setAttribute('class', '__ssenkit_modal_container__');
    this.container.appendChild(modalContainer);
    
    this.setState({
      modalContainer,
    });
  }
  
  componentWillUnmount() {
    if (this.state.modalContainer) {
      this.container.removeChild(this.state.modalContainer);
      this.container = null;
    }
  }
  
  render() {
    return this.state.modalContainer
      ? ReactDOM.createPortal((
        <div style={this.props.dimStyle}>
          {React.cloneElement(this.props.children as React.ReactElement<ModalContentProps>, {closeModal: this.closeModal})}
        </div>
      ), this.state.modalContainer)
      : null;
  }
  
  closeModal = () => {
    this.props.onClose();
  };
}

export default Component as React.ComponentClass<Props>;