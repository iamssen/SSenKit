import React from 'react';
import { CodeBlock } from 'react-devdoc';
import { VerticalScrollBasic } from './VerticalScrollBasic';
import { HorizontalScrollBasic } from './HorizontalScrollBasic';

export default function index() {
  return (
    <div>
      <h1>VerticalScroll</h1>
      <VerticalScrollBasic/>
      <CodeBlock value={require('!!raw-loader!./VerticalScrollBasic')} language="tsx"/>
      <h1>HorizontalScroll</h1>
      <HorizontalScrollBasic/>
      <CodeBlock value={require('!!raw-loader!./HorizontalScrollBasic')} language="tsx"/>
    </div>
  );
}