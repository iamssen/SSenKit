import { ModalContentProps, openModal } from 'ssenkit.modal';
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
}

class Component extends React.Component<Props & InternalProps, State> {
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