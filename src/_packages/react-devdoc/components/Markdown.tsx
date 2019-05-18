import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './CodeBlock';
import { getText } from './getText';

export interface MarkdownProps {
  text?: string;
  children?: string;
}

export function Markdown({text, children}: MarkdownProps) {
  const source: string | undefined = getText(text, children);
  
  return source
    ? <ReactMarkdown source={source} renderers={{code: CodeBlock}}/>
    : null;
}