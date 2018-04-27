import * as React from 'react';
import { RouteComponentProps } from 'react-router';

// tslint:disable

interface Props {
  props: object;
  load: Promise<{default: React.ComponentType<any>}>;
}

interface State {
  Component: React.ComponentType<any> | null;
}

class RouterRenderContainer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      Component: null,
    };
  }
  
  render() {
    return this.state.Component
      ? React.createElement(this.state.Component, this.props.props)
      : null;
  }
  
  componentDidMount() {
    this.props.load.then(({default: Component}) => {
      this.setState({Component});
    });
  }
}

export default (load: () => Promise<{default: React.ComponentType<any>}>): ((props: RouteComponentProps<any>) => React.ReactNode) => {
  return props => React.createElement(RouterRenderContainer, {
    props,
    load: load(),
  });
}