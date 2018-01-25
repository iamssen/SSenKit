import { renderRoute } from 'common/components/route';
import * as React from 'react';
import { Route } from 'react-router-dom';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'AsyncRouterContents';
  
  render() {
    return [
      <Route exact path="/"
             render={renderRoute(() => import('app/router-components/main'))}/>,
      <Route path="/ssenkit/autocomplete-text-input"
             render={renderRoute(() => import('ssenkit/router-components/autocomplete-text-input'))}/>,
      <Route path="/ssenkit/date-select"
             render={renderRoute(() => import('ssenkit/router-components/date-select'))}/>,
      <Route path="/ssenkit/dropdown-anchor"
             render={renderRoute(() => import('ssenkit/router-components/dropdown-anchor'))}/>,
      <Route path="/ssenkit/modal"
             render={renderRoute(() => import('ssenkit/router-components/modal'))}/>,
      <Route path="/ssenkit/restricted-text-input"
             render={renderRoute(() => import('ssenkit/router-components/restricted-text-input'))}/>,
    ];
  }
}

export default Component as React.ComponentClass<Props>;