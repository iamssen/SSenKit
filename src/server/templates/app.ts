import { TemplateParams } from './types';

export default ({body, initialState}: TemplateParams) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset=UTF-8>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="libs/jquery-ui.css"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <base href="/"/>
    <script src="libs/jquery.js"></script>
    <script src="libs/jquery-ui.js"></script>
    <title>Title...</title>
    ${ typeof initialState === 'string' ? `<script>window.__INITIAL_STATE__=${initialState.replace(/</g, '\\u003c')}</script>` : '' }
  </head>
  
  <body>
    <div id="app">${body}</div>
  
    <script src="vendor.js"></script>
    <script src="init.js"></script>
    <script src="app.js"></script>
  </body>
</html>
`