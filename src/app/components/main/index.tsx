import RouterNavigation from 'app/components/route/RouterNavigation';
import * as React from 'react';
import { LanguageChangeButton, TimezoneChangeSelect } from 'seed/components';
import './index.scss';
import * as styles from './layout.module.scss';

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
      <React.Fragment>
        {/*<div className={styles.header}>*/}
        {/*<LanguageChangeButton/>*/}
        {/*<SignButton/>*/}
        {/*<TimezoneChangeSelect/>*/}
        {/*</div>*/}
        
        <div className={styles.content}>
          <div className={styles.nav}>
            <RouterNavigation/>
            <hr/>
            <LanguageChangeButton/>
            <TimezoneChangeSelect/>
          </div>
          
          <div className={styles.body}>
            {this.props.children}
            {this.props.routerContents}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Component as React.ComponentClass<Props>;