import * as React from 'react';
import { updateA, updateB } from '../actions';
import { ContextState, withConsumer } from '../context';
import { observer } from 'mobx-react';

export interface Props {
}

interface InternalProps extends ContextState {
}

interface State {
}

@observer
class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'Form';
  
  render() {
    return (
      <div>
        <input type="number"
               value={this.props.mobx.a.toString()}
               onChange={this.updateA}/>
        
        +
        
        <input type="number"
               value={this.props.mobx.b.toString()}
               onChange={this.updateB}/>
        
        =
        
        <span>
          {this.props.mobx.c}
        </span>
        
        <button onClick={this.randomUpdateA}>
          random update a
        </button>
  
        <button onClick={this.randomUpdateB}>
          random update b
        </button>
      </div>
    );
  }
  
  updateA = (event: React.ChangeEvent<{value: string}>) => {
    this.props.dispatch(updateA(parseInt(event.target.value) || 0));
  };
  
  updateB = (event: React.ChangeEvent<{value: string}>) => {
    this.props.dispatch(updateB(parseInt(event.target.value) || 0));
  };
  
  randomUpdateA = () => {
    this.props.dispatch(updateA(Math.floor(Math.random() * 10000)));
  }
  
  randomUpdateB = () => {
    this.props.dispatch(updateB(Math.floor(Math.random() * 10000)));
  }
}

export default withConsumer(Component) as React.ComponentType<Props>;