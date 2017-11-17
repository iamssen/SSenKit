import Modal, { ModalContentProps } from 'ssenkit.modal';
import * as React from 'react';
import styled from 'styled-components';

interface ContentProps extends ModalContentProps {
  className: string;
}

const Content: React.ComponentClass<{}> = styled<ContentProps>(({className, closeModal}) => {
  return (
    <div className={className}>
      <h1>HELLO?</h1>
      <button onClick={() => closeModal()}>Close Modal</button>
    </div>
  );
})`
  width: 500px;
  height: 250px;
  margin: 100px auto;
  background-color: #ffffff;
  border: 10px solid #000000;
  padding: 20px;
`;

export interface Props {

}

interface InternalProps {

}

interface State {
  modal: React.ReactElement<{}>,
}

class Component extends React.Component<Props & InternalProps, State> {
  state: State = {
    modal: null,
  };
  
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        {this.state.modal}
      </div>
    );
  }
  
  openModal = () => {
    this.setState({
      modal: (
        <Modal onClose={this.closeModal}>
          <Content/>
        </Modal>
      ),
    });
  };
  
  closeModal = () => {
    this.setState({
      modal: null,
    });
  };
}

export default Component as React.ComponentClass<Props>;