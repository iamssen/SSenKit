import * as React from 'react';
import DropdownAnchor, { DropDownAnchorButtonProps, DropDownContentProps } from 'ssenkit.dropdown-anchor';
import * as styles from './DropdownAnchor.sample.module.scss';

class Button extends React.PureComponent<DropDownAnchorButtonProps> {
  render() {
    return (
      <button className="btn white dropdown-toggle" {...this.props}>
        {this.props['aria-expanded'] ? 'OPENED' : 'CLOSED'}
      </button>
    );
  }
}

class Content extends React.PureComponent<DropDownContentProps> {
  render() {
    return (
      <div className={styles.main}>
        <p>Hello...</p>
        <p>
          <button onClick={() => this.props.close && this.props.close()}>
            Close Dropdown
          </button>
        </p>
      </div>
    );
  }
}

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <DropdownAnchor button={<Button/>} useOutboundClick={true}>
          <Content/>
        </DropdownAnchor>
      </div>
    );
  }
}