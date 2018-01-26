import * as React from 'react';
import { RouteProps, RouteComponentProps } from 'react-router';
// tslint:disable
//type ComponentClass = React.ComponentClass<{}> | React.StatelessComponent<{}> | React.ClassicComponentClass<{}>;

interface Props {
  props: object;
  load: Promise<{default: React.ComponentType<any>}>;
}

interface State {
  Component: React.ComponentType<any>;
}

class RouterRenderContainer extends React.Component<Props, State> {
  state: State = {
    Component: null,
  };
  
  render() {
    return this.state.Component
      ? React.createElement(this.state.Component, this.props.props)
      : null;
  }
  
  componentWillMount() {
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