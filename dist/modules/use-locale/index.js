!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("locale-code")},function(e,t){e.exports=require("js-cookie")},function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),u=r.n(o);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"locale",t=Object(n.get)(e);return t&&u.a.validate(t)?t:"en-US"}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"locale";u.a.validate(e)&&Object(n.set)(t,e)}var c=r(2);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){var t=l(Object(c.useState)(e),2),r=t[0],n=t[1];return{locale:r,updateLocale:Object(c.useCallback)(function(e){u.a.validate(e)&&(n(e),a(e))},[])}}r.d(t,"getBrowserLocale",function(){return i}),r.d(t,"setBrowserLocale",function(){return a}),r.d(t,"useLocale",function(){return f})}]));