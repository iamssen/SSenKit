!function(t){function e(e){for(var r,o,i=e[0],s=e[1],c=e[2],l=0,f=[];l<i.length;l++)o=i[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(p&&p(e);f.length;)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={8:0},a={8:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{1:1,2:1,3:1,4:1,5:1,6:1}[t]&&e.push(o[t]=new Promise(function(e,n){for(var r=({}[t]||t)+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=(l=a[u]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return e()}var c=document.getElementsByTagName("style");for(u=0;u<c.length;u++){var l;if((s=(l=c[u]).getAttribute("data-href"))===r||s===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,n(a)},p.href=o,document.getElementsByTagName("head")[0].appendChild(p)}).then(function(){o[t]=0}));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var u,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+""+({}[t]||t)+".js"}(t),u=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,s.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw t};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;u.push([161,0]),n()}({113:function(t,e){},117:function(t,e){},118:function(t,e){},12:function(t,e,n){"use strict";var r,o,a=n(4),u=n(16);(r||(r={})).createStore=u.b({user:null,inProgress:!1},function(t){return{updateUser:function(e){return function(){return t({inProgress:!0}),{update:function(n){e.user!==n&&t({user:n,inProgress:!1})},abort:function(e){t({inProgress:!1})}}}}}}),(o||(o={})).createStore=u.b({initialState:null},function(t){return{clean:function(){return function(){t({initialState:null})}}}});var i=n(25),s=n(33),c=n(0);n.d(e,"a",function(){return d}),n.d(e,"b",function(){return m});var l=c.createContext(),p=l.Provider,f=l.Consumer,d=function(t){function e(e){var n=t.call(this,e)||this,a=e.initialState?e.initialState.message.language:s.get("locale")||"en";return n.state={contextState:{dispatch:n.dispatch,subscribe:n.subscribe,initialState:o.createStore(n,{initialState:e.initialState}),user:r.createStore(n,{user:e.initialState?e.initialState.user.user:null}),message:i.b.createStore(n,{language:a,messages:i.c[a]})}},n}return a.b(e,t),e.prototype.render=function(){return c.createElement(p,{value:this.state.contextState},this.props.children)},e}(u.a);function m(t){return c.forwardRef(function(e,n){return c.createElement(f,null,function(r){return c.createElement(t,a.a({},r,e,{ref:n}))})})}},13:function(t,e,n){"use strict";var r=n(0),o=n(173),a=n(174),u=n(4),i=function(t){function e(e){var n=t.call(this,e)||this;return n.state={Component:null},n}return u.b(e,t),e.prototype.render=function(){return this.state.Component?r.createElement(this.state.Component,this.props.props):null},e.prototype.componentDidMount=function(){var t=this;this.props.load.then(function(e){var n=e.default;t.setState({Component:n})})},e}(r.PureComponent),s=function(t){return function(e){return r.createElement(i,{props:e,load:t()})}},c=function(){return function(t){var e=this;this.config=t,this.preload=function(t){return new Promise(function(n,r){var a=e.config.find(function(e){var n={};return n.path=e.path,n.exact=!0===e.exact,n.strict=!0===e.strict,null!==Object(o.a)(t,n)});a?a.component().then(function(t){var r=t.default;e.preloadIndex.set(a,r),n()}):r(new Error("Can't find matched route. "+t))})},this.getRoute=function(t){var n=e.config.find(function(e){return e.path===t});if(n){var o={};return o.path=n.path,o.exact=!0===n.exact,o.strict=!0===n.strict,e.preloadIndex.has(n)?o.component=e.preloadIndex.get(n):o.render=s(n.component),r.createElement(a.a,o)}throw new Error("Can't find matched path. "+t)},this.preloadIndex=new Map}}();e.a=new c([{path:"/",exact:!0,component:function(){return n.e(7).then(n.bind(null,588))}},{path:"/ssenkit/autocomplete-text-input",component:function(){return n.e(6).then(n.bind(null,582))}},{path:"/ssenkit/date-select",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,584))}},{path:"/ssenkit/dropdown-anchor",component:function(){return n.e(4).then(n.bind(null,579))}},{path:"/ssenkit/modal",component:function(){return n.e(3).then(n.bind(null,581))}},{path:"/ssenkit/restricted-text-input",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,580))}},{path:"/ssenkit/recontext",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,583))}}])},16:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u});var r=n(4),o=n(0),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.teardowns=new Set,e.subscriptions=new Set,e.setContextState=function(t){e.setState({contextState:Object.assign({},e.state.contextState,"function"==typeof t?t(e.state.contextState):t)})},e.dispatch=function(t){var n=t(e.state.contextState);if("function"==typeof n){var r=!1;return e.teardowns.add(n),function(){!r&&e.teardowns.has(n)&&(n(),e.teardowns.delete(n)),r=!0}}return function(){}},e.subscribe=function(t){return e.subscriptions.has(t)||e.subscriptions.add(t),function(){e.subscriptions.delete(t)}},e.updateStore=function(t,n){var r,o=Object.keys(e.state.contextState).find(function(n){return t===e.state.contextState[n]});o&&e.setState({contextState:Object.assign({},e.state.contextState,(r={},r[o]=n,r))})},e}return r.b(e,t),e.prototype.componentDidUpdate=function(t,e){var n,o;if(e.contextState!==this.state.contextState&&this.subscriptions.size>0)try{for(var a=r.f(this.subscriptions),u=a.next();!u.done;u=a.next()){(0,u.value)(this.state.contextState,e.contextState)}}catch(t){n={error:t}}finally{try{u&&!u.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}},e.prototype.componentWillUnmount=function(){var t,e;try{for(var n=r.f(this.teardowns),o=n.next();!o.done;o=n.next()){(0,o.value)()}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.teardowns.clear(),this.subscriptions.clear()},e.displayName="Recontext.Provider",e}(o.Component);function u(t,e){return function(n,r){var o,a,u=Object.assign({},t,r||{});function i(t){return Object.keys(a).reduce(function(e,n){return e[n]=a[n](t),e},{})}return a=e(function(t){var e=Object.assign({},u,t),r=i(e),a=o,s=Object.assign({},e,r);return n.updateStore(a,s),u=e,o=s,s}),o=Object.assign({},u,i(u))}}},161:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(12),a=n(0),u=n(60),i=n(64),s=n(65),c=n(18),l=n(586),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.b(e,t),e.prototype.render=function(){return a.createElement(c.a,{locale:this.props.message.language,messages:this.props.message.messages},a.createElement(l.a,null,a.createElement(i.a,{routerContents:a.createElement(s.a,null)})))},e.displayName="App",e}(a.PureComponent),f=Object(o.b)(p),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.b(e,t),e.prototype.render=function(){return a.createElement(o.a,{initialState:null},a.createElement(f,null))},e}(a.PureComponent);u.render(a.createElement(d,null),document.querySelector("#app"))},25:function(t,e,n){"use strict";var r=n(26),o=n.n(r),a=n(33),u=n(18),i=n(16),s=["en","ko"];Object(u.b)(n(116)),Object(u.b)(n(115));var c,l=n(86),p=a.get("locale")||"en";function f(t,e){return new o.a(l[p][t],p).format(e)}(c||(c={})).createStore=i.b({language:p,messages:l[p]},function(t){return{updateLanguage:function(e){return function(n){e.language!==n&&(t({language:n,messages:l[n]}),a.set("locale",n)),p=n}}}}),n.d(e,"a",function(){return s}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return c}),n.d(e,!1,function(){return f})},38:function(t,e,n){"use strict";var r=function(){return function(t){var e=t.user.updateUser().update;setTimeout(function(){e({firstName:"Seoyeon",lastName:"Lee",age:37})},1e3)}},o=function(){return function(t){var e=t.user.updateUser().update;setTimeout(function(){e(null)},1e3)}},a=function(){return function(t){var e=t.initialState;e.initialState&&e.clean()}};n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},51:function(t,e,n){t.exports={main:"SignButton-module__main___2lKYj"}},64:function(t,e,n){"use strict";var r=n(4),o=n(0),a=n(585),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.b(e,t),e.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement(a.a,{to:"/"},"Home"),o.createElement(a.a,{to:"/ssenkit/autocomplete-text-input"},"Autocomplete Text Input"),o.createElement(a.a,{to:"/ssenkit/date-select"},"Date Select"),o.createElement(a.a,{to:"/ssenkit/dropdown-anchor"},"Dropdown Anchor"),o.createElement(a.a,{to:"/ssenkit/modal"},"Modal"),o.createElement(a.a,{to:"/ssenkit/restricted-text-input"},"Restricted Text Input"),o.createElement(a.a,{to:"/ssenkit/recontext"},"ReContext"))},e.displayName="RouterNavigation",e}(o.PureComponent),i=n(12),s=function(t){return function(e){e.message.updateLanguage(t)}},c=n(25),l=n(66),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.change=function(t){e.props.dispatch(s(t))},e}return r.b(e,t),e.prototype.render=function(){var t=this;return o.createElement("div",{className:l.main},this.props.message.language," :",c.a.map(function(e){return o.createElement("button",{key:e,onClick:function(){return t.change(e)}},e)}))},e.displayName="LanguageChangeButton",e}(o.PureComponent),f=Object(i.b)(p),d=n(38),m=n(18),h=n(51),g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.b(e,t),e.prototype.render=function(){var t=this;return this.props.user.user?o.createElement("button",{className:h.main,onClick:function(){return t.props.dispatch(Object(d.c)())}},this.props.user.inProgress?"### ":null,this.props.intl.formatMessage({id:"app.main.sign-button.logout"})," - ",this.props.user.user.firstName," ",this.props.user.user.lastName):o.createElement("button",{className:h.main,onClick:function(){return t.props.dispatch(Object(d.b)())}},this.props.user.inProgress?"### ":null,this.props.intl.formatMessage({id:"app.main.sign-button.login"}))},e.displayName="SignButton",e}(o.PureComponent),b=Object(m.c)(Object(i.b)(g)),v=(n(82),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.b(e,t),e.prototype.render=function(){return o.createElement(o.StrictMode,null,o.createElement(o.Fragment,null,o.createElement("div",null,o.createElement(f,null),o.createElement(b,null)),o.createElement("div",null,o.createElement(u,null)),o.createElement("div",null,this.props.children,this.props.routerContents)))},e.displayName="app.components.main",e}(o.Component));e.a=v},65:function(t,e,n){"use strict";var r=n(4),o=n(13),a=n(0),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.b(e,t),e.prototype.render=function(){return a.createElement(a.Fragment,null,o.a.getRoute("/"),o.a.getRoute("/ssenkit/autocomplete-text-input"),o.a.getRoute("/ssenkit/date-select"),o.a.getRoute("/ssenkit/dropdown-anchor"),o.a.getRoute("/ssenkit/modal"),o.a.getRoute("/ssenkit/restricted-text-input"),o.a.getRoute("/ssenkit/recontext"))},e.displayName="AsyncRouterContents",e}(a.Component);e.a=u},66:function(t,e,n){t.exports={main:"LanguageChangeButton-module__main___21oWw"}},82:function(t,e,n){},86:function(t){t.exports={en:{"app.main.sign-button.login":"Login","app.main.sign-button.logout":"Logout","app.sample.text":"Sample Content"},ko:{"app.main.sign-button.login":"로그인","app.main.sign-button.logout":"로그아웃","app.sample.text":"샘플 컨텐츠"}}}});