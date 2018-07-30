import { TemplateParams } from './types';

export default ({body, initialState}: TemplateParams) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset=UTF-8>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="libs/jquery-ui.css"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"/>
    <base href="/"/>
    <script src="libs/jquery.js"></script>
    <script src="libs/jquery-ui.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <title>Title...</title>
    ${ typeof initialState === 'string' ? `<script>window.__INITIAL_STATE__=${initialState.replace(/</g, '\\u003c')}</script>` : '' }
  </head>
  
  <body>
    <div id="app">${body}</div>
  
    <script src="vendor.js"></script>
    <script src="init.js"></script>
    <script src="style.js"></script>
    <!-- And if you use css themes you need require add their js files. -->
    <script src="app.js"></script>
  </body>
</html>
`