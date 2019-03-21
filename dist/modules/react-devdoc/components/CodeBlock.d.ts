/// <reference types="react" />
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
export interface CodeBlockProps {
    value?: string;
    language?: string;
    children?: string;
}
export declare function CodeBlock({ value, children, language }: CodeBlockProps): JSX.Element | null;
