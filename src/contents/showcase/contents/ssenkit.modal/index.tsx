import { Description, Source } from 'app/components';
import * as React from 'react';
import Modal from './Modal.sample';
import OpenModal from './openModal.sample';

export default () => (
  <div className="app-body">
    <div className="page-header">
      <div className="row">
        <h1><code>import Modal, {'{ openModal }'} from 'ssenkit.modal'</code></h1>
      </div>
    </div>
    <div className="page-body ph-30 mv-30">
      <div className="box">
        <div className="box-body">
          <Description html={require('./Modal.description.md')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <Modal/>
          <Source source={require('!!raw-loader!./Modal.sample')}/>
        </div>
      </div>
  
      <div className="box">
        <div className="box-body">
          <Description html={require('./openModal.description.md')}/>
        </div>
      </div>
      
      <div className="box">
        <div className="box-body">
          <OpenModal/>
          <Source source={require('!!raw-loader!./openModal.sample')}/>
        </div>
      </div>
    </div>
  </div>
)