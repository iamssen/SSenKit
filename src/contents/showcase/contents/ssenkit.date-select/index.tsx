import { Description, Source } from 'app/components';
import * as React from 'react';
import DateInput from './DateInput.sample';
import DateRangeDropDownSelector from './DateRangeDropDownSelector.sample';
import DateRangeSelector from './DateRangeSelector.sample';
import DateSelector from './DateSelector.sample';
import DateTimeSelector from './DateTimeSelector.sample';
import FromToDateTimeDropDownSelector from './FromToDateTimeDropDownSelector.sample';
import FromToDateTimeSelector from './FromToDateTimeSelector.sample';
import MonthSelector from './MonthSelector.sample';
import TimeInput from './TimeInput.sample';

export default () => (
  <div className="app-body">
    <div className="page-header">
      <div className="row">
        <h1><code>import {'{ DateRangeDropDownSelector }'} from 'ssenkit.date-select'</code></h1>
      </div>
    </div>
    <div className="page-body ph-30 mv-30">
      <div className="box">
        <div className="box-body">
          <Description html={require('./MonthSelector.description.md')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <MonthSelector/>
          <Source source={require('!!raw-loader!./MonthSelector.sample')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./DateInput.description.md')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <DateInput/>
          <Source source={require('!!raw-loader!./DateInput.sample')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./TimeInput.description.md')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <TimeInput/>
          <Source source={require('!!raw-loader!./TimeInput.sample')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./DateSelector.description.md')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <DateSelector/>
          <Source source={require('!!raw-loader!./DateSelector.sample')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./DateTimeSelector.description.md')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <DateTimeSelector/>
          <Source source={require('!!raw-loader!./DateTimeSelector.sample')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./FromToDateTimeSelector.description.md')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <FromToDateTimeSelector/>
          <Source source={require('!!raw-loader!./FromToDateTimeSelector.sample')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./FromToDateTimeDropDownSelector.description.md')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <FromToDateTimeDropDownSelector/>
          <Source source={require('!!raw-loader!./FromToDateTimeDropDownSelector.sample')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./DateRangeSelector.description.md')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <DateRangeSelector/>
          <Source source={require('!!raw-loader!./DateRangeSelector.sample')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <Description html={require('./DateRangeDropDownSelector.description.md')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <DateRangeDropDownSelector/>
          <Source source={require('!!raw-loader!./DateRangeDropDownSelector.sample')}/>
        </div>
      </div>
    </div>
  </div>
)