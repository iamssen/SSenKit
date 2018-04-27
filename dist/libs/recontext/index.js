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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.teardowns = new Set;
        _this.subscriptions = new Set;
        _this.setContextState = function (stateOrProducer) {
            _this.setState({
                contextState: Object.assign({}, _this.state.contextState, typeof stateOrProducer === 'function'
                    ? stateOrProducer(_this.state.contextState)
                    : stateOrProducer),
            });
        };
        _this.dispatch = function (action) {
            var teardown = action(_this.state.contextState);
            if (typeof teardown === 'function') {
                var broken_1 = false;
                _this.teardowns.add(teardown);
                return function () {
                    if (!broken_1 && _this.teardowns.has(teardown)) {
                        teardown();
                        _this.teardowns.delete(teardown);
                    }
                    broken_1 = true;
                };
            }
            else {
                return function () {
                    // blank teardown
                };
            }
        };
        _this.subscribe = function (subscription) {
            if (!_this.subscriptions.has(subscription)) {
                _this.subscriptions.add(subscription);
            }
            return function () {
                _this.subscriptions.delete(subscription);
            };
        };
        // tslint:disable
        _this.updateStore = function (prevStore, nextStore) {
            var key = Object.keys(_this.state.contextState).find(function (key) {
                return prevStore === _this.state.contextState[key];
            });
            if (key) {
                _this.setState({
                    contextState: Object.assign({}, _this.state.contextState, (_a = {}, _a[key] = nextStore, _a)),
                });
            }
            var _a;
        };
        return _this;
        // tslint:enable
    }
    Provider.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.contextState !== this.state.contextState && this.subscriptions.size > 0) {
            try {
                for (var _a = __values(this.subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var subscription = _b.value;
                    subscription(this.state.contextState, prevState.contextState);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var e_1, _c;
    };
    Provider.prototype.componentWillUnmount = function () {
        try {
            for (var _a = __values(this.teardowns), _b = _a.next(); !_b.done; _b = _a.next()) {
                var teardown = _b.value;
                teardown();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.teardowns.clear();
        this.subscriptions.clear();
        var e_2, _c;
    };
    Provider.displayName = 'Recontext.Provider';
    return Provider;
}(React.Component));
exports.Provider = Provider;
function createStore(defaultInitialState, config) {
    return function (provider, initialState) {
        var state = Object.assign({}, defaultInitialState, initialState || {});
        var store;
        var actionsInput;
        function createActions(state) {
            return Object.keys(actionsInput).reduce(function (actions, key) {
                actions[key] = actionsInput[key](state);
                return actions;
            }, {});
        }
        function setState(update) {
            var nextState = Object.assign({}, state, update);
            var nextActions = createActions(nextState);
            var prevStore = store;
            var nextStore = Object.assign({}, nextState, nextActions);
            provider.updateStore(prevStore, nextStore);
            state = nextState;
            store = nextStore;
            return nextStore;
        }
        actionsInput = config(setState);
        store = Object.assign({}, state, createActions(state));
        return store;
    };
}
exports.createStore = createStore;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map