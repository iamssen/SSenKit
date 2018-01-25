import * as React from 'react';
import DropdownAnchor, { DropDownAnchorButtonProps, DropDownContentProps } from 'ssenkit.dropdown-anchor';
import * as styles from './DropdownAnchor.sample.module.scss';

const Button: (props: DropDownAnchorButtonProps) => React.ReactElement<DropDownAnchorButtonProps> = (props) => (
  <button className="btn white dropdown-toggle" {...props}>
    {props['aria-expanded'] ? 'OPENED' : 'CLOSED'}
  </button>
);

const Content: React.StatelessComponent<DropDownContentProps> = ({close}: DropDownContentProps) => (
  <div className={styles.main}>
    <p>Hello...</p>
    <p>
      <button onClick={() => close()}>Close Dropdown</button>
    </p>
  </div>
);

export default class extends React.Component<{}, {}> {
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