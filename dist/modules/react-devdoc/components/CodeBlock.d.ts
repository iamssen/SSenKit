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
export interface CodeBlockProps {
    value: string;
    language?: string;
}
export declare function CodeBlock({ value, language }: CodeBlockProps): JSX.Element;
