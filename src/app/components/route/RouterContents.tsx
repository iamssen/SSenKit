import routerStore from 'app/route/syncRouterStore';
import * as React from 'react';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'RouterContents';
  
  render() {
    return (
      <React.Fragment>
        {routerStore.getRoute('/')}
        {routerStore.getRoute('/ssenkit/autocomplete-text-input')}
        {routerStore.getRoute('/ssenkit/date-select')}
        {routerStore.getRoute('/ssenkit/dropdown-anchor')}
        {routerStore.getRoute('/ssenkit/modal')}
        {routerStore.getRoute('/ssenkit/restricted-text-input')}
        {routerStore.getRoute('/ssenkit/recontext')}
      </React.Fragment>
    );
  }
}

export default Component as React.ComponentClass<Props>;