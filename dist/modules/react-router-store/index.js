!function(t,n){for(var e in n)t[e]=n[e]}(exports,function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=7)}([function(t,n){t.exports=require("react")},function(t,n){t.exports=require("react-router")},function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e(0);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t){var n=t.load,e=t.props,u=o(Object(r.useState)(null),2),i=u[0],c=u[1];return Object(r.useEffect)(function(){n.then(function(t){var n=t.default;c(Object(r.createElement)(n,e))})},[]),i}function i(t){return function(n){return Object(r.createElement)(u,{props:n,load:t()})}}},function(t,n){},function(t,n,e){"use strict";e.d(n,"a",function(){return f});var r=e(0),o=e(1),u=e(2);function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)e=u[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)e=u[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var f=function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes=n,this.preloadIndex=void 0,this.preload=function(t){return new Promise(function(n,r){var u=e.routes.find(function(n){n.component;var e=a(n,["component"]);return null!==Object(o.matchPath)(t,i({},e))});u?u.component().then(function(t){var r=t.default;e.preloadIndex.set(u,r),n()}):r(new Error("Can't find matched route from \"".concat(t,'"')))})},this.getRoute=function(t){var n=e.routes.find(function(n){return n.path===t});if(n){var c=n.component,f=i({},a(n,["component"]));return e.preloadIndex.has(n)?f.component=e.preloadIndex.get(n):f.render=Object(u.a)(c),Object(r.createElement)(o.Route,i({},f,{key:t}))}throw new Error("Can't find matched route from \"".concat(t,'"'))},this.getAllRoutes=function(){return e.routes.map(function(t){var n=t.path;return e.getRoute(n)})},this.getRouteOptions=function(){return e.routes.map(function(t){t.component;return a(t,["component"])})},this.preloadIndex=new Map}},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e(0),o=e(1);function u(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)e=u[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)e=u[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes=n,this.preload=function(t){return Promise.resolve()},this.getRoute=function(t){var n=e.routes.find(function(n){return n.path===t});if(n)return Object(r.createElement)(o.Route,function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){i(t,n,e[n])})}return t}({},n,{key:t}));throw new Error("Can't find matched path. ".concat(t))},this.getAllRoutes=function(){return e.routes.map(function(t){var n=t.path;return e.getRoute(n)})},this.getRouteOptions=function(){return e.routes.map(function(t){t.component;return u(t,["component"])})}}},function(t,n,e){"use strict";function r(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n[0],o=n.slice(1),u=!0,i=!1,c=void 0;try{for(var a,f=o[Symbol.iterator]();!(u=(a=f.next()).done);u=!0){var l=a.value;if(r.length!==l.length)return!1}}catch(t){i=!0,c=t}finally{try{u||null==f.return||f.return()}finally{if(i)throw c}}return r.every(function(t){var n=!0,e=!1,r=void 0;try{for(var u,i=o[Symbol.iterator]();!(n=(u=i.next()).done);n=!0){var c=u.value.find(function(n){return t.path===n.path});if(!c||t.exact!==c.exact||t.sensitive!==c.sensitive||t.strict!==c.strict)return!1}}catch(t){e=!0,r=t}finally{try{n||null==i.return||i.return()}finally{if(e)throw r}}return!0})}e.d(n,"a",function(){return r})},function(t,n,e){"use strict";e.r(n);var r=e(3);for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);var u=e(4);e.d(n,"AsyncRouteStore",function(){return u.a});var i=e(5);e.d(n,"SyncRouteStore",function(){return i.a});var c=e(2);e.d(n,"renderAsyncRoute",function(){return c.a});var a=e(6);e.d(n,"compareRouteOptions",function(){return a.a})}]));