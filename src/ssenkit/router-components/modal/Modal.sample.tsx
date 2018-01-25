import * as React from 'react';
import Modal, { ModalContentProps } from 'ssenkit.modal';
import * as styles from './Modal.sample.module.scss';

const Content: React.StatelessComponent<ModalContentProps> = ({closeModal}: ModalContentProps) => {
  return (
    <div className={styles.main}>
      <h1>HELLO?</h1>
      <button onClick={() => closeModal()}>Close Modal</button>
    </div>
  );
};

export interface Props {

}

interface InternalProps {

}

interface State {
  modal: React.ReactElement<{}>,
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'Modal.sample';
  
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