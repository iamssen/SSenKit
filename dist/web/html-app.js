!function(e){function t(t){for(var r,c,a=t[0],i=t[1],l=t[2],s=0,p=[];s<a.length;s++)c=a[s],o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=function(e){return c.p+""+({}[e]||e)+".js"}(e),u=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");c.type=r,c.request=u,n[1](c)}o[e]=void 0}};var i=setTimeout(function(){u({type:"timeout",target:a})},12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=i;u.push([181,0]),n()}({16:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){o=!0,u=i}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e){var t=e.load,n=e.props,u=o(Object(r.useState)(null),2),c=u[0],a=u[1];return Object(r.useEffect)(function(){t.then(function(e){var t=e.default;a(Object(r.createElement)(t,n))})},[]),c}function c(e){return function(t){return Object(r.createElement)(u,{props:t,load:e()})}}},17:function(e,t,n){"use strict";var r=n(41),o=n(0),u=n.n(o),c=n(8),a=n(53),i=n.n(a),l=n(54),f=n.n(l);function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=Object(o.createContext)(),d=Object(c.c)(function(e){var t=e.intl,n=e.children;return t,u.a.createElement(p.Provider,{value:t},n)});function m(e){var t=e.children,n=s(e,["children"]);return u.a.createElement(c.a,n,u.a.createElement(d,null,t))}var v=n(6);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){o=!0,u=i}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return h}),n.d(t,"b",function(){return O}),Object(c.b)(i.a),Object(c.b)(f.a);var y=Object(o.createContext)();function h(e){var t=e.children,n=function(e){var t=b(Object(o.useState)(e),2),n=t[0],r=t[1];return{locale:n,updateLocale:Object(o.useCallback)(function(e){r(e),Object(v.c)(e)},[r])}}(e.currentLocale),c=n.locale,a=n.updateLocale;return u.a.createElement(m,{locale:c.slice(0,2),messages:r[c]},u.a.createElement(y.Provider,{value:{locale:c,updateLocale:a}},t))}function O(){return Object(o.useContext)(y)}},181:function(e,t,n){"use strict";n.r(t);var r=n(43),o=n(17),u=n(6),c=n(28),a=n(0),i=n.n(a),l=n(44),f=n.n(l),s=n(11);n(59);f.a.render(i.a.createElement(function(){return i.a.createElement(s.b,null,i.a.createElement(o.a,{currentLocale:Object(u.a)()},i.a.createElement(r.a,{routeStore:c.a})))},null),document.querySelector("#app"))},28:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=new(n(42).AsyncRouteStore)([{path:"/",exact:!0,component:function(){return new Promise(function(e){n.e(4).then(function(t){e(n(118))}.bind(null,n)).catch(n.oe)})}},{path:"/react-devdoc",component:function(){return new Promise(function(e){Promise.all([n.e(0),n.e(3)]).then(function(t){e(n(119))}.bind(null,n)).catch(n.oe)})}}])},32:function(e,t){},33:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),o=n(2),u=n(16);function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.routes=t,this.preloadIndex=void 0,this.preload=function(e){return new Promise(function(t,r){var u=n.routes.find(function(t){t.component;var n=i(t,["component"]);return null!==Object(o.d)(e,c({},n))});u?u.component().then(function(e){var r=e.default;n.preloadIndex.set(u,r),t()}):r(new Error("Can't find matched route from \"".concat(e,'"')))})},this.getRoute=function(e){var t=n.routes.find(function(t){return t.path===e});if(t){var a=t.component,l=c({},i(t,["component"]));return n.preloadIndex.has(t)?l.component=n.preloadIndex.get(t):l.render=Object(u.a)(a),Object(r.createElement)(o.a,c({},l,{key:e}))}throw new Error("Can't find matched route from \"".concat(e,'"'))},this.getAllRoutes=function(){return n.routes.map(function(e){var t=e.path;return n.getRoute(t)})},this.getRouteOptions=function(){return n.routes.map(function(e){e.component;return i(e,["component"])})},this.preloadIndex=new Map}},34:function(e,t,n){"use strict";n(0),n(2)},35:function(e,t,n){"use strict"},41:function(e){e.exports={"en-US":{"app.sample.text1":"Sample Content","app.sample.text2":"Test Text"},"ko-KR":{"app.sample.text1":"\uc0d8\ud50c \ucee8\ud150\uce20","app.sample.text2":"\ud14c\uc2a4\ud2b8 \ubb38\uc790\uc5f4"}}},42:function(e,t,n){"use strict";var r=n(32);n.o(r,"AsyncRouteStore")&&n.d(t,"AsyncRouteStore",function(){return r.AsyncRouteStore});var o=n(33);n.d(t,"AsyncRouteStore",function(){return o.a});n(34),n(16),n(35)},43:function(e,t,n){"use strict";var r=n(0),o=n.n(r),u=n(17),c=n(6);function a(){var e=Object(u.b)(),t=e.locale,n=e.updateLocale;return o.a.createElement("div",null,t," : ",c.b.map(function(e){return o.a.createElement("button",{key:e,onClick:function(){return n(e)}},e)}))}function i(e){var t=e.routeStore;return o.a.createElement(r.Fragment,null,t.getAllRoutes())}var l=n(11);function f(){return o.a.createElement(r.Fragment,null,o.a.createElement(l.c,{to:"/"},"Home"),o.a.createElement(l.c,{to:"/react-devdoc"},"react-devdoc"))}n(86);function s(e){var t=e.routeStore;return o.a.createElement(r.Fragment,null,o.a.createElement("div",null,o.a.createElement(a,null)),o.a.createElement("div",null,o.a.createElement(f,null)),o.a.createElement("div",null,o.a.createElement(i,{routeStore:t})))}n.d(t,"a",function(){return s})},59:function(e,t,n){"use strict";n(87),n(109)},6:function(e,t,n){"use strict";var r,o=n(29),u=n.n(o);!function(e){e.locale="locale"}(r||(r={})),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i});var c=["en-US","ko-KR"];function a(){return u.a.get(r.locale)||"en-US"}function i(e){u.a.set(r.locale,e)}},81:function(e,t){},84:function(e,t){},85:function(e,t){}});