import * as React from 'react';
import { updateA, updateB, updateArr } from '../actions';
import { ContextState, withConsumer } from '../context';
import { observer } from 'mobx-react';
import { range } from 'd3-array';

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
        
        <button onClick={this.randomUpdateArr}>
          random update arr
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
  };
  
  randomUpdateB = () => {
    this.props.dispatch(updateB(Math.floor(Math.random() * 10000)));
  };
  
  randomUpdateArr = () => {
    const a: number = 'a'.charCodeAt(0);
    const z: number = 'z'.charCodeAt(0);
    const strs: string[] = range(10).map(() => {
      return String.fromCharCode(Math.floor(Math.random() * (z - a)) + a);
    });
    
    this.props.dispatch(updateArr(strs));
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;