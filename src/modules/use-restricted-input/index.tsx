import React from 'react';
import { CodeBlock, Markdown } from 'react-devdoc';
import { Basic } from './Basic';
import { Callback } from './Callback';

export default function index() {
  return (
    <div>
      <Markdown text={require('use-restricted-input/readme.md')}/>
      <h1>Sample</h1>
      <Basic/>
      <CodeBlock value={require('!!raw-loader!./Basic')} language="tsx"/>
      <Callback/>
      <CodeBlock value={require('!!raw-loader!./Callback')} language="tsx"/>
    </div>
  );
}