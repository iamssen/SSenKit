import { App } from 'app';
import { AppContextProvider } from 'app/context';
import { cookieKeys } from 'app/data-types/cookie';
import { LanguageCode, languageCodes } from 'app/data-types/locale';
import { syncRouteStore } from 'app/route/syncRouteStore';
import { render } from 'ejs';
import { Request } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import template from '../_templates/index.ejs';

export function renderApp(req: Request, initialState: object = {}): string {
  const locale: LanguageCode = req.cookies[cookieKeys.locale] || req.acceptsLanguages(...languageCodes) || languageCodes[0];
  
  const body: string = renderToString((
    <StaticRouter location={req.url} context={{}}>
      <AppContextProvider currentLocale={locale}>
        <App routeStore={syncRouteStore}/>
      </AppContextProvider>
    </StaticRouter>
  ));
  
  return render(template, {
    base: '/',
    body,
    initialState: JSON.stringify(initialState),
  });
}