(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{464:function(e,n,t){"use strict";var o=t(451),i=(t(452),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(1)),r=t.n(i);function m(e){var n=e.value,t=e.language,i=void 0===t?"none":t;["javascript jsx"].indexOf(i)&&(i="jsx"),["typescript jsx"].indexOf(i)&&(i="tsx"),o.languages[i]||(i="none");var m=o.languages[i]?o.languages[i]:o.languages.js,a=Object(o.highlight)(n,m),s="language-"+i;return r.a.createElement("pre",{className:s},r.a.createElement("code",{className:s,dangerouslySetInnerHTML:{__html:a}}))}var a=t(461),s=t.n(a);function p(e){var n=e.text,t=e.children;return r.a.createElement(s.a,{source:n||t,renderers:{code:m}})}t.d(n,"a",function(){return m}),t.d(n,"b",function(){return p})},469:function(e,n){e.exports="# Installation\n\n```\nnpm install use-timezone\n```\n\n# API\n\n```typescript\ninterface Timezone {\n  countryCode: string;\n  countryName: string;\n  zoneName: string;\n  gmtOffset: number;\n  timestamp: number;\n}\n```\n\n- `timezoneList: Timezone[]`\n- `getBrowserTimezone: (cookieKey: string = 'timezone') => string`\n- `useTimezone: (currentTimezone: string) => { timezone: Timezone, updateTimezone: (timezone: string | Timezone) => void }`\n\n# Basic usage\n\n```typescript jsx\nimport React from 'react';\nimport { Timezone, useTimezone, getBrowserTimezone, timezoneList } from 'use-timezone';\n\nexport function Component() {\n  const {timezone, updateTimezone} = useTimezone(getBrowserTimezone());\n  \n  return (\n    <div>\n      <div>\n        {JSON.stringify(timezone)}\n      </div>\n      \n      <ul>\n        {\n          timezoneList.map(optionTimezone => (\n            <li key={optionTimezone.zoneName} onClick={() => updateTimezone(optionTimezone)}>\n              {optionTimezone.zoneName}\n            </li>\n          ))\n        }\n      </ul>\n    </div>\n  );\n}\n```\n\nBasic use of `useTimezone()` is simple.\n\n# Wrapping with React 16.3 Context\n\nHowever, the timezone information should be used globally in the application, it is wrapped using the React 16.3 Context API.\n\n```typescript jsx\nimport React, { Consumer, Context, ReactNode, useContext, createContext } from 'react';\nimport { Timezone, useTimezone } from 'use-timezone';\n\nexport interface SampleContextProps {\n  currentTimezone: string;\n  children: ReactNode;\n}\n\nexport interface SampleContextState {\n  timezone: Timezone;\n  updateTimezone: (timezone: string | Timezone) => void;\n}\n\n// @ts-ignore\nconst SampleContext: Context<SampleContextState> = createContext<SampleContextState>();\n\nexport function SampleContextProvider({ currentTimezone, children }: SampleContextProps) {\n  const { timezone, updateTimezone } = useTimezone(currentTimezone);\n  \n  return (\n    <SampleContext.Provider value={{\n      timezone,\n      updateTimezone,\n    }}>\n      {children}\n    </SampleContext.Provider>\n  );\n}\n\nexport function useSampleContextState(): SampleContextState {\n  return useContext(SampleContext);\n}\n\nexport const SampleContextConsumer: Consumer<SampleContextState> = SampleContext.Consumer;\n```\n\nFirst, make a context\n\n```typescript jsx\nimport React from 'react';\nimport { SampleContextProvider } from './sample-context';\nimport { getBrowserTimezone } from 'use-timezone';\nimport { Main } from './main';\n\nexport function App() {\n  return (\n    <SampleContextProvider currentTimezone={getBrowserTimezone()}>\n      <Main/>\n    </SampleContextProvider>\n  )\n}\n```\n\nAnd wrap the application main in the provider \n\n```typescript jsx\nimport React from 'react';\nimport { useSampleContextState } from './sample-context';\nimport { Timezone, useTimezone, getBrowserTimezone, timezoneList } from 'use-timezone';\n\nexport function Component() {\n  const { timezone, updateTimezone } = useSampleContextState();\n  \n  return (\n    <div>\n      <div>\n        {JSON.stringify(timezone)}\n      </div>\n      \n      <ul>\n        {\n          timezoneList.map(optionTimezone => (\n            <li key={optionTimezone.zoneName} onClick={() => updateTimezone(optionTimezone)}>\n              {optionTimezone.zoneName}\n            </li>\n          ))\n        }\n      </ul>\n    </div>\n  );\n}\n```\n\nYou can access the timezone information from anywhere in the application through the hook\n\n# SSR\n\nAdditionally, the timezone information in SSR (Server Side Rendering) can be obtained via a cookie\n\n```typescript jsx\nimport express, { Express, Request, Response } from 'express';\n\nconst app: Express = express();\n\napp.get('/', (req, res) => {\n  const timezone: string = req.cookies['timezone'] || 'Asia/Seoul';\n  \n  // res.send(ssr processed html text)\n});\n\napp.listen(8080);\n``` "},487:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),r=t(464);n.default=function(){return i.a.createElement("div",null,i.a.createElement(r.b,{text:t(469)}))}}}]);