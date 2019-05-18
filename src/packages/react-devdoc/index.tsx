import React from 'react';
import { Markdown } from 'react-devdoc';

export default function () {
  return (
    <div>
      <Markdown text={require('react-devdoc/readme.md')}/>
    </div>
  );
}