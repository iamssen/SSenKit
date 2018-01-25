import * as React from 'react';
import { Route } from 'react-router-dom';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'RouterContents';
  
  render() {
    return [
      <Route exact path="/"
             component={require('app/router-components/main').default}/>,
      <Route path="/ssenkit/autocomplete-text-input"
             component={require('ssenkit/router-components/autocomplete-text-input').default}/>,
      <Route path="/ssenkit/date-select"
             component={require('ssenkit/router-components/date-select').default}/>,
      <Route path="/ssenkit/dropdown-anchor"
             component={require('ssenkit/router-components/dropdown-anchor').default}/>,
      <Route path="/ssenkit/modal"
             component={require('ssenkit/router-components/modal').default}/>,
      <Route path="/ssenkit/restricted-text-input"
             component={require('ssenkit/router-components/restricted-text-input').default}/>,
    ];
  }
}

export default Component as React.ComponentClass<Props>;