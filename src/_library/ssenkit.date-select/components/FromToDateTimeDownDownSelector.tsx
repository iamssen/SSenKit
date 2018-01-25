import DropDownAnchor from 'ssenkit.dropdown-anchor';
import * as moment from 'moment';
import * as React from 'react';
import { FromTo, isFromTo } from '../types';
import './FromToDateTimeDropDownSelector.scss';
import FromToDateTimeDropDownSelectorButton from './FromToDateTimeDropDownSelectorButton';
import { FromToDateTimeDropDownSelectorButtonProps } from './FromToDateTimeDropDownSelectorButtonProps';
import FromToDateTimeSelector from './FromToDateTimeSelector';

export interface Props {
  className?: string;
  
  fromTo: FromTo;
  onChange: (fromTo: FromTo) => void;
  
  disableBefore?: moment.MomentInput;
  disableAfter?: moment.MomentInput;
  
  button?: React.ReactElement<FromToDateTimeDropDownSelectorButtonProps>;
  
  useAlternatePosition?: boolean;
}

export interface State {
  progressiveFromTo?: FromTo;
}

export default class extends React.Component<Props, State> {
  private anchor: DropDownAnchor;
  
  static defaultProps: object = {
    className: '',
    button: <FromToDateTimeDropDownSelectorButton/>,
    useAlternatePosition: true,
  };
  
  state: State = {
    progressiveFromTo: null,
  };
  
  render() {
    return (
      <DropDownAnchor ref={r => this.anchor = r}
                      className={'FromToDateTimeDownDownSelector ' + this.props.className}
                      useOutboundClick={true}
                      useAlternatePosition={this.props.useAlternatePosition}
                      button={React.cloneElement(this.props.button as JSX.Element, {
                        fromTo: this.props.fromTo,
                        progressiveFromTo: this.state.progressiveFromTo,
                      })}
                      onClose={this.onAnchorClose}>
        <div role="selector">
          <FromToDateTimeSelector fromTo={this.props.fromTo}
                                  onChange={this.onChange}
                                  disableBefore={this.props.disableBefore}
                                  disableAfter={this.props.disableAfter}/>
          <div role="buttons">
            <button className="btn outline-1" onClick={this.onCancel}>취소</button>
            <button className="btn light-blue" onClick={this.onComplete}>적용</button>
          </div>
        </div>
      </DropDownAnchor>
    );
  }
  
  onChange = (progressiveFromTo: FromTo) => {
    this.setState({progressiveFromTo});
  };
  
  onComplete = () => {
    if (isFromTo(this.state.progressiveFromTo)) {
      this.props.onChange(this.state.progressiveFromTo);
    }
    this.setState({progressiveFromTo: null});
    this.anchor.close();
  };
  
  onCancel = () => {
    this.setState({progressiveFromTo: null});
    this.anchor.close();
  };
  
  onAnchorClose = () => {
    this.setState({progressiveFromTo: null});
  };
}