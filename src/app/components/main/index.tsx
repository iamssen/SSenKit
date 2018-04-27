import RouterNavigation from 'app/components/route/RouterNavigation';
import * as React from 'react';
import { LanguageChangeButton, SignButton } from './components';
import './index.scss';

export interface Props {
  routerContents: React.ReactElement<{}>;
}

interface InternalProps {
}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'app.components.main';
  
  render() {
    return (
      <React.StrictMode>
        <React.Fragment>
          <div>
            <LanguageChangeButton/>
            <SignButton/>
          </div>
          <div>
            <RouterNavigation/>
          </div>
          <div>
            {this.props.children}
            {this.props.routerContents}
          </div>
        </React.Fragment>
      </React.StrictMode>
    );
  }
}

export default Component as React.ComponentType<Props>;