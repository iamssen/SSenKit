import React from 'react';
import { CodeBlock } from 'react-devdoc';
import { HorizontalScrollBasic } from './HorizontalScrollBasic';
import { Test_minThumbHeight } from './tests/minThumbHeight';
import { VerticalScrollBasic } from './VerticalScrollBasic';

export default function index() {
  return (
    <div>
      <h1>VerticalScroll</h1>
      <VerticalScrollBasic/>
      <CodeBlock value={require('!!raw-loader!./VerticalScrollBasic')} language="tsx"/>
      <CodeBlock value={require('!!raw-loader!./skins/VerticalScrollContainer')} language="tsx"/>
      <h1>HorizontalScroll</h1>
      <HorizontalScrollBasic/>
      <CodeBlock value={require('!!raw-loader!./HorizontalScrollBasic')} language="tsx"/>
      <h1>Tests</h1>
      <p>Should be set height of thumb to 30px by minThumbHeight</p>
      <Test_minThumbHeight/>
    </div>
  );
}