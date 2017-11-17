import DropdownAnchor, { DropDownAnchorButtonProps, DropDownContentProps } from 'ssenkit.dropdown-anchor';
import * as React from 'react';
import styled from 'styled-components';

const Button: (props: DropDownAnchorButtonProps) => React.ReactElement<DropDownAnchorButtonProps> = (props) => (
  <button className="btn white dropdown-toggle" {...props}>
    {props['aria-expanded'] ? 'OPENED' : 'CLOSED'}
  </button>
);

const Content: React.ComponentClass<{}> = styled<{}>(({className, close}: DropDownContentProps & {className: string}) => (
  <div className={className}>
    <p>Hello...</p>
    <p>
      <button onClick={() => close()}>Close Dropdown</button>
    </p>
  </div>
))`
  width: 300px;
  height: 250px;
  padding: 10px;
  background-color: white;
  font-size: .875rem; // style copied from FlatKit Dropdown
  color: rgba(0, 0, 0, .87);
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, .1);
`;

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