!function(t,n){for(var e in n)t[e]=n[e]}(exports,function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n){t.exports=require("react")},function(t,n){t.exports=require("react-router")},function(t,n){t.exports=require("tslib")},function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(1),u=e(2),i=function(t){function n(n){var e=t.call(this,n)||this;return e.state={Component:null},e}return u.__extends(n,t),n.prototype.render=function(){return this.state.Component?r.createElement(this.state.Component,this.props.props):null},n.prototype.componentDidMount=function(){var t=this;this.props.load.then(function(n){var e=n.default;t.setState({Component:e})})},n}(r.PureComponent),c=function(t){return function(n){return r.createElement(i,{props:n,load:t()})}},a=function(){return function(t){var n=this;this.config=t,this.preload=function(t){return new Promise(function(e,r){var u=n.config.find(function(n){var e={};return e.path=n.path,e.exact=!0===n.exact,e.strict=!0===n.strict,null!==Object(o.matchPath)(t,e)});u?u.component().then(function(t){var r=t.default;n.preloadIndex.set(u,r),e()}):r(new Error("Can't find matched route. "+t))})},this.getRoute=function(t){var e=n.config.find(function(n){return n.path===t});if(e){var u={};return u.path=e.path,u.exact=!0===e.exact,u.strict=!0===e.strict,n.preloadIndex.has(e)?u.component=n.preloadIndex.get(e):u.render=c(e.component),r.createElement(o.Route,u)}throw new Error("Can't find matched path. "+t)},this.preloadIndex=new Map}}(),f=function(){return function(t){var n=this;this.config=t,this.getRoute=function(t){var e=n.config.find(function(n){return n.path===t});if(e){var u={};return u.path=e.path,u.exact=!0===e.exact,u.strict=!0===e.strict,u.component=e.component,r.createElement(o.Route,u)}throw new Error("Can't find matched path. "+t)}}}();e.d(n,"AsyncRouterStore",function(){return a}),e.d(n,"SyncRouterStore",function(){return f})}]));
//# sourceMappingURL=index.js.map