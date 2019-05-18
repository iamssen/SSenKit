(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{355:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),u=t(652);function s(e){var n=Object(r.useMemo)(function(){if("string"===typeof e){var n=new RegExp("[".concat(e,"]"));return function(e){return n.test(e)}}if("function"===typeof e)return e;throw new Error("availableCharacters must be string or function")},[e]);return{onKeyPress:Object(r.useCallback)(function(e){n(e.key)||(e.preventDefault(),e.stopPropagation())},[])}}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,u=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(i){a=!0,u=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw u}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(){var e=s("abcd0-9").onKeyPress,n=o(Object(r.useState)(""),2),t=n[0],u=n[1],i=Object(r.useCallback)(function(e){u(e.target.value)},[u]);return a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:t,onChange:i,onKeyPress:e}),a.a.createElement("p",null,'text is "',t,'"'))}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,u=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(i){a=!0,u=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw u}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=new Set(["a","b","c","d","1","2","3","@","#"]);function v(){var e=s(function(e){return l.has(e)}).onKeyPress,n=c(Object(r.useState)(""),2),t=n[0],u=n[1],o=Object(r.useCallback)(function(e){u(e.target.value)},[u]);return a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:t,onChange:o,onKeyPress:e}),a.a.createElement("p",null,'text is "',t,'"'))}function p(){return a.a.createElement("div",null,a.a.createElement(u.b,{text:t(659)}),a.a.createElement("h1",null,"Sample"),a.a.createElement(i,null),a.a.createElement(u.a,{value:t(660),language:"tsx"}),a.a.createElement(v,null),a.a.createElement(u.a,{value:t(661),language:"tsx"}))}t.d(n,"default",function(){return p})},652:function(e,n,t){"use strict";var r=t(638),a=(t(639),t(640),t(641),t(642),t(643),t(644),t(645),t(646),t(647),t(648),t(649),t(1)),u=t.n(a);function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var r=0,a=n;r<a.length;r++){var u=a[r];if("string"===typeof u)return u;if("object"===typeof u&&u.default&&"string"===typeof u.default)return u.default}}function o(e){var n=e.value,t=e.children,a=e.language,o=void 0===a?"none":a,i=s(t,n);if(!i)return null;["javascript jsx"].indexOf(o)&&(o="jsx"),["typescript jsx"].indexOf(o)&&(o="tsx"),["sh"].indexOf(o)&&(o="bash"),r.languages[o]||(o="none");var c=r.languages[o]?r.languages[o]:r.languages.js,l=Object(r.highlight)(i,c,o),v="language-"+o;return u.a.createElement("pre",{className:v},u.a.createElement("code",{className:v,dangerouslySetInnerHTML:{__html:l}}))}var i=t(650),c=t.n(i);function l(e){var n=s(e.text,e.children);return n?u.a.createElement(c.a,{source:n,renderers:{code:o}}):null}t.d(n,"a",function(){return o}),t.d(n,"b",function(){return l})},659:function(e,n,t){"use strict";t.r(n),n.default="# Installation\n\n```\nnpm install use-restricted-input\n```\n\n# Usage\n\n```typescript jsx\nimport React, { ChangeEvent } from 'react';\nimport useRestrictedInput from 'use-restricted-input';\n\nexport function Component() {\n  const {onKeyPress} = useRestrictedInput('abcd0-9');\n  const [text, setText] = useState<string>('');\n  \n  const onChange: (event: ChangeEvent<HTMLInputElement>) => void = useCallback((event: ChangeEvent<HTMLInputElement>) => {\n    setText(event.target.value);\n  }, [setText]);\n  \n  return (\n    <div>\n      <input type=\"text\"\n             value={text}\n             onChange={onChange}\n             onKeyPress={onKeyPress}/>\n      <p>\n        text is \"{text}\"\n      </p>\n    </div>\n  );\n}\n```\n\n# API\n\n```\nuseRestrictedInput(availableCharacters: string | ((character: string) => boolean)): { onKeyPress: (event: KeyboardEvent<InputElement>) => void }\n```\n\n- param\n  - `availableCharacters: string | ((character: string) => boolean)`\n    - `a-z0-9` or `abcde0-4#$`\n    - `(character: string) => boolean`\n- return\n  - `onKeyPress: (event: KeyboardEvent<InputElement>) => void`"},660:function(e,n,t){"use strict";t.r(n),n.default="import React, { ChangeEvent, useCallback, useState } from 'react';\nimport useRestrictedInput from 'use-restricted-input';\n\nexport function Basic() {\n  const {onKeyPress} = useRestrictedInput('abcd0-9');\n  const [text, setText] = useState<string>('');\n  \n  const onChange: (event: ChangeEvent<HTMLInputElement>) => void = useCallback((event: ChangeEvent<HTMLInputElement>) => {\n    setText(event.target.value);\n  }, [setText]);\n  \n  return (\n    <div>\n      <input type=\"text\"\n             value={text}\n             onChange={onChange}\n             onKeyPress={onKeyPress}/>\n      <p>\n        text is \"{text}\"\n      </p>\n    </div>\n  );\n}"},661:function(e,n,t){"use strict";t.r(n),n.default="import React, { ChangeEvent, useCallback, useState } from 'react';\nimport useRestrictedInput from 'use-restricted-input';\n\nconst availableCharacters: Set<string> = new Set([\n  'a', 'b', 'c', 'd', '1', '2', '3', '@', '#',\n]);\n\nexport function Callback() {\n  const {onKeyPress} = useRestrictedInput((char: string) => availableCharacters.has(char));\n  const [text, setText] = useState<string>('');\n  \n  const onChange: (event: ChangeEvent<HTMLInputElement>) => void = useCallback((event: ChangeEvent<HTMLInputElement>) => {\n    setText(event.target.value);\n  }, [setText]);\n  \n  return (\n    <div>\n      <input type=\"text\"\n             value={text}\n             onChange={onChange}\n             onKeyPress={onKeyPress}/>\n      <p>\n        text is \"{text}\"\n      </p>\n    </div>\n  );\n}"}}]);