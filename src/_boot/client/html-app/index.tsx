import { Props as AppProps, Provider } from 'app/context';
import { getInitialTimezone } from 'seed/data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components';

class AppProvider extends React.PureComponent<{}, AppProps> {
  render() {
    return (
      <Provider initialState={null}
                currentTimezone={getInitialTimezone()}>
        <App/>
      </Provider>
    );
  }
}

ReactDOM.render((
  <AppProvider/>
), document.querySelector('#app'));


if (module.hot) {
  Error.stackTraceLimit = Infinity;
  console.clear();
  module.hot.accept();
}