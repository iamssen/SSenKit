(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var async_router_store_1 = __webpack_require__(4);
exports.AsyncRouterStore = async_router_store_1.default;
var sync_router_store_1 = __webpack_require__(6);
exports.SyncRouterStore = sync_router_store_1.default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_1 = __webpack_require__(1);
var render_1 = __webpack_require__(5);
var default_1 = /** @class */ (function () {
    function default_1(config) {
        var _this = this;
        this.config = config;
        this.preload = function (location) {
            return new Promise(function (resolve, reject) {
                var config = _this.config.find(function (config) {
                    var props = {};
                    props.path = config.path;
                    props.exact = config.exact === true;
                    props.strict = config.strict === true;
                    return react_router_1.matchPath(location, props) !== null;
                });
                if (config) {
                    config.component().then(function (_a) {
                        var Component = _a.default;
                        _this.preloadIndex.set(config, Component);
                        resolve();
                    });
                }
                else {
                    reject(new Error("Can't find matched route. " + location));
                }
            });
        };
        this.getRoute = function (path) {
            var config = _this.config.find(function (config) { return config.path === path; });
            if (config) {
                var props = {};
                props.path = config.path;
                props.exact = config.exact === true;
                props.strict = config.strict === true;
                if (_this.preloadIndex.has(config)) {
                    props.component = _this.preloadIndex.get(config);
                }
                else {
                    props.render = render_1.default(config.component);
                }
                return React.createElement(react_router_1.Route, props);
            }
            else {
                throw new Error("Can't find matched path. " + path);
            }
        };
        this.preloadIndex = new Map();
    }
    return default_1;
}());
exports.default = default_1;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RouterRenderContainer = /** @class */ (function (_super) {
    __extends(RouterRenderContainer, _super);
    function RouterRenderContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            Component: null,
        };
        return _this;
    }
    RouterRenderContainer.prototype.render = function () {
        return this.state.Component
            ? React.createElement(this.state.Component, this.props.props)
            : null;
    };
    RouterRenderContainer.prototype.componentWillMount = function () {
        var _this = this;
        this.props.load.then(function (_a) {
            var Component = _a.default;
            _this.setState({ Component: Component });
        });
    };
    return RouterRenderContainer;
}(React.Component));
exports.default = (function (load) {
    return function (props) { return React.createElement(RouterRenderContainer, {
        props: props,
        load: load(),
    }); };
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_1 = __webpack_require__(1);
var default_1 = /** @class */ (function () {
    function default_1(config) {
        var _this = this;
        this.config = config;
        this.getRoute = function (path) {
            var config = _this.config.find(function (config) { return config.path === path; });
            if (config) {
                var props = {};
                props.path = config.path;
                props.exact = config.exact === true;
                props.strict = config.strict === true;
                props.component = config.component;
                return React.createElement(react_router_1.Route, props);
            }
            else {
                throw new Error("Can't find matched path. " + path);
            }
        };
    }
    return default_1;
}());
exports.default = default_1;


/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map