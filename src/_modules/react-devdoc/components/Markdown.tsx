import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './CodeBlock';

export interface MarkdownProps {
  text?: string;
  children?: string;
}

export function Markdown({ text, children }: MarkdownProps) {
  return (
    <ReactMarkdown source={text || children} renderers={{ code: CodeBlock }}/>
  );
}