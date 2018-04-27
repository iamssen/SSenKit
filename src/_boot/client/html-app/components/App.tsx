import Main from 'app/components/main';
import AsyncRouterContents from 'app/components/route/AsyncRouterContents';
import { ContextState, withConsumer } from 'app/context';
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';

export interface Props {

}

interface InternalProps extends ContextState {
}

interface State {
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'App';
  
  render() {
    return (
      <IntlProvider locale={this.props.message.language} messages={this.props.message.messages}>
        <HashRouter>
          <Main routerContents={<AsyncRouterContents/>}/>
        </HashRouter>
      </IntlProvider>
    );
  }
}

export default withConsumer<Props & InternalProps>(Component) as React.ComponentType<Props>;