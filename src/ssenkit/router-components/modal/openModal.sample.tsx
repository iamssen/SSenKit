import { ModalContentProps, openModal } from 'ssenkit.modal';
import * as React from 'react';
import * as styles from './openModal.sample.module.scss';

const Content: React.StatelessComponent<ModalContentProps> = ({closeModal}) => {
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
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'openModal.sample';
  
  render() {
    return (
      <div>
        <button onClick={this.open}>Open Modal</button>
      </div>
    );
  }
  
  open = () => {
    openModal(<Content/>);
  };
}

export default Component as React.ComponentClass<Props>;