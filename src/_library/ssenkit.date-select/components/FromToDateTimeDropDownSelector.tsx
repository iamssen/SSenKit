import { DateTime } from 'luxon';
import * as React from 'react';
import DropDownAnchor from 'ssenkit.dropdown-anchor';
import { ContextState, withConsumer } from '../context';
import { FromTo, isFromTo } from '../types';
import './FromToDateTimeDropDownSelector.scss';
import FromToDateTimeDropDownSelectorButton from './FromToDateTimeDropDownSelectorButton';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';
import FromToDateTimeSelector from './FromToDateTimeSelector';

export interface Props {
  fromTo: FromTo;
  onChange: (fromTo: FromTo) => void;
  
  disableBefore?: DateTime;
  disableAfter?: DateTime;
  
  button?: React.ReactElement<FromToDateTimeDropDownSelectorButtonProps>;
  
  useAlternatePosition?: boolean;
}

interface InternalProps extends ContextState {
}

interface State {
  progressiveFromTo: FromTo | null;
}

class Component extends React.PureComponent<Props & InternalProps, State> {
  static displayName: string = 'FromToDateTimeDownDownSelector';
  
  private anchorRef: React.RefObject<DropDownAnchor> = React.createRef();
  
  static defaultProps: Partial<Props> = {
    button: <FromToDateTimeDropDownSelectorButton/>,
    useAlternatePosition: true,
  };
  
  constructor(props: Props & InternalProps) {
    super(props);
    
    this.state = {
      progressiveFromTo: null,
    };
  }
  
  render() {
    return (
      <DropDownAnchor ref={this.anchorRef}
                      className={'FromToDateTimeDownDownSelector ' + this.props.config.fromToDateTimeDropDownSelectorClassName}
                      useOutboundClick={true}
                      useAlternatePosition={this.props.useAlternatePosition}
                      button={
                        React.cloneElement(this.props.button as JSX.Element, {
                          fromTo: this.props.fromTo,
                          progressiveFromTo: this.state.progressiveFromTo,
                        })
                      }
                      onClose={this.onAnchorClose}>
        <div role="selector">
          <FromToDateTimeSelector fromTo={this.state.progressiveFromTo || this.props.fromTo}
                                  onChange={this.onChange}
                                  disableBefore={this.props.disableBefore}
                                  disableAfter={this.props.disableAfter}/>
          <div role="buttons">
            {
              React.cloneElement(this.props.config.fromToDateTimeDropDownSelectorCancelButton, {
                onClick: this.onCancel,
              })
            }
            
            {
              React.cloneElement(this.props.config.fromToDateTimeDropDownSelectorApplyButton, {
                onClick: this.onComplete,
              })
            }
          </div>
        </div>
      </DropDownAnchor>
    );
  }
  
  onChange = (progressiveFromTo: FromTo) => {
    this.setState({
      progressiveFromTo,
    });
  };
  
  onComplete = () => {
    if (isFromTo(this.state.progressiveFromTo)) {
      this.props.onChange(this.state.progressiveFromTo as FromTo);
    }
    
    this.setState({
      progressiveFromTo: null,
    });
    
    if (this.anchorRef.current) {
      this.anchorRef.current.close();
    }
  };
  
  onCancel = () => {
    this.setState({
      progressiveFromTo: null,
    });
    
    if (this.anchorRef.current) {
      this.anchorRef.current.close();
    }
  };
  
  onAnchorClose = () => {
    this.setState({
      progressiveFromTo: null,
    });
  };
}

export default withConsumer(Component) as React.ComponentType<Props>;