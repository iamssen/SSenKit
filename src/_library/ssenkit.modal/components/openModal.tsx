import { ModalContentProps } from './types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface Options {
  container?: string;
  dimStyle?: React.CSSProperties;
}

export default function (content: React.ReactElement<ModalContentProps>, options: Options = {}) {
  if (!options.dimStyle) {
    options.dimStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    };
  }
  
  const container: Element = typeof options.container === 'string'
    ? document.querySelector(options.container)
    : document.body;
  
  const modalContainer: Element = document.createElement('div');
  modalContainer.setAttribute('class', '__ssenkit_modal_container__');
  container.appendChild(modalContainer);
  
  const closeModal: () => void = () => {
    container.removeChild(modalContainer);
  };
  
  ReactDOM.render((
    <div style={options.dimStyle}>
      {React.cloneElement(content as React.ReactElement<{closeModal: () => void}>, {closeModal})};
    </div>
  ), modalContainer);
  
  return closeModal;
}