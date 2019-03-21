import { highlight, LanguageDefinition, languages } from 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-less.min';
import 'prismjs/components/prism-sass.min';
import 'prismjs/components/prism-scss.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-diff.min';
import 'prismjs/components/prism-markdown.min';
import React from 'react';

export interface CodeBlockProps {
  value?: string;
  language?: string;
  children?: string;
}

export function CodeBlock({value, children, language = 'none'}: CodeBlockProps) {
  if (!children && !value) return null;
  
  if (['javascript jsx'].indexOf(language)) language = 'jsx';
  if (['typescript jsx'].indexOf(language)) language = 'tsx';
  if (['sh'].indexOf(language)) language = 'bash';
  if (!languages[language]) language = 'none';
  
  const grammar: LanguageDefinition = languages[language]
    ? languages[language]
    : languages.js;
  
  const html: string = highlight(children || value!, grammar);
  const className: string = 'language-' + language;
  
  return (
    <pre className={className}>
      <code className={className} dangerouslySetInnerHTML={{__html: html}}/>
    </pre>
  );
}