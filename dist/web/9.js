(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{462:function(e,n,a){"use strict";var o=a(449),t=(a(450),a(451),a(452),a(453),a(454),a(455),a(456),a(457),a(458),a(459),a(460),a(1)),r=a.n(t);function l(e){var n=e.value,a=e.children,t=e.language,l=void 0===t?"none":t;if(!a&&!n)return null;["javascript jsx"].indexOf(l)&&(l="jsx"),["typescript jsx"].indexOf(l)&&(l="tsx"),["sh"].indexOf(l)&&(l="bash"),o.languages[l]||(l="none");var c=o.languages[l]?o.languages[l]:o.languages.js,s=Object(o.highlight)(a||n,c),i="language-"+l;return r.a.createElement("pre",{className:i},r.a.createElement("code",{className:i,dangerouslySetInnerHTML:{__html:s}}))}var c=a(461),s=a.n(c);function i(e){var n=e.text,a=e.children;return r.a.createElement(s.a,{source:n||a,renderers:{code:l}})}a.d(n,"a",function(){return l}),a.d(n,"b",function(){return i})},465:function(e,n){e.exports="# Installation\n\n```\nnpm install use-locale\n```\n\n# API\n\n- `getBrowserLocale: ({cookieKey = 'locale', fallbackLanguageCodes = []}) => string`\n- `useLocale: (currentLocale: string, {cookieKey = 'locale'}) => { locale: string, updateLocale: (locale: string) => void }`\n\n# Basic usage\n\n```typescript jsx\nimport React from 'react';\nimport { useLocale, getBrowserLocale } from 'use-locale';\n\ntype LanguageCode = 'en-US' | 'ko-KR';\nconst languageCodes: LanguageCode[] = ['en-US', 'ko-KR'];\n\nexport function Component() {\n  const {locale, updateLocale} = useLocale<LanguageCode>(getBrowserLocale<LanguageCode>());\n  \n  return (\n    <div>\n      <div>\n        {locale}\n      </div>\n      \n      <ul>\n        {\n          languageCodes.map(languageCode => (\n            <li key={languageCode} onClick={() => updateLocale(languageCode)}>\n              {languageCode}\n            </li>\n          ))\n        }\n      </ul>\n    </div>\n  );\n}\n```\n\nBasic use of `useLocale()` is simple.\n\n# Wrapping with React 16.3 Context\n\nHowever, the locale information should be used globally in the application, it is wrapped using the React 16.3 Context API.\n\n```typescript\nexport type LanguageCode = 'en-US' | 'ko-KR';\nexport const languageCodes: LanguageCode[] = ['en-US', 'ko-KR'];\n```\n\n```typescript jsx\nimport React, { Consumer, Context, ReactNode, useContext, createContext } from 'react';\nimport { useLocale } from 'use-locale';\nimport { LanguageCode, languageCodes } from './locale';\n\nexport interface SampleContextProps {\n  currentLocale: string;\n  children: ReactNode;\n}\n\nexport interface SampleContextState {\n  locale: LanguageCode;\n  updateLocale: (locale: LanguageCode) => void;\n}\n\n// @ts-ignore\nconst SampleContext: Context<SampleContextState> = createContext<SampleContextState>();\n\nexport function SampleContextProvider({ currentLocale, children }: SampleContextProps) {\n  const { locale, updateLocale } = useLocale<LanguageCode>(currentLocale);\n  \n  return (\n    <SampleContext.Provider value={{\n      locale,\n      updateLocale,\n    }}>\n      {children}\n    </SampleContext.Provider>\n  );\n}\n\nexport function useSampleContextState(): SampleContextState {\n  return useContext(SampleContext);\n}\n\nexport const SampleContextConsumer: Consumer<SampleContextState> = SampleContext.Consumer;\n```\n\nFirst, make a context\n\n```typescript jsx\nimport React from 'react';\nimport { SampleContextProvider } from './sample-context';\nimport { LanguageCode } from './locale';\nimport { getBrowserLocale } from 'use-locale';\nimport { Main } from './main';\n\nexport function App() {\n  return (\n    <SampleContextProvider currentLocale={getBrowserLocale<LanguageCode>()}>\n      <Main/>\n    </SampleContextProvider>\n  )\n}\n```\n\nAnd wrap the application main in the provider \n\n```typescript jsx\nimport React from 'react';\nimport { useSampleContextState } from './sample-context';\nimport { LanguageCode, languageCodes } from './locale';\n\nexport function Component() {\n  const { locale, updateLocale } = useSampleContextState();\n  \n  return (\n    <div>\n      <div>\n        {locale}\n      </div>\n      \n      <ul>\n        {\n          languageCodes.map(languageCode => (\n            <li key={languageCode} onClick={() => updateLocale(languageCode)}>\n              {languageCode}\n            </li>\n          ))\n        }\n      </ul>\n    </div>\n  );\n}\n```\n\nYou can access the locale information from anywhere in the application through the hook\n\n# SSR\n\nAdditionally, the locale information in SSR (Server Side Rendering) can be obtained via a cookie\n\n```typescript jsx\nimport express, { Express, Request, Response } from 'express';\nimport { LanguageCode, languageCodes } from './locale';\n\nconst app: Express = express();\n\napp.get('/', (req, res) => {\n  const locale: LanguageCode = req.cookies['locale'] || req.acceptsLanguages(...languageCodes) || languageCodes[0];\n  \n  // res.send(ssr processed html text)\n});\n\napp.listen(8080);\n``` "},486:function(e,n,a){"use strict";a.r(n);var o=a(1),t=a.n(o),r=a(462);n.default=function(){return t.a.createElement("div",null,t.a.createElement(r.b,{text:a(465)}))}}}]);