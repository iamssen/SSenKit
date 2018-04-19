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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var d3_array_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var availableInputKeyCodes = __spread(d3_array_1.range(35, 40 + 1), [
    8,
    46,
    9,
    27,
    13,
]);
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (event) {
            _this.props.onChange(event.target.value);
        };
        _this.onKeyPress = function (event) {
            var selectAll = event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true);
            if (selectAll
                || availableInputKeyCodes.indexOf(event.keyCode) !== -1
                || _this.props.availableCharacterPattern.test(String.fromCharCode(event.charCode)))
                return;
            event.preventDefault();
            event.stopPropagation();
        };
        _this.onKeyDown = function (event) {
            if (event.keyCode === 13) {
                _this.props.onSubmit(event.currentTarget.value);
            }
        };
        return _this;
        //get text(): string {
        //  return this.input.value;
        //}
        //
        //set text(value: string) {
        //  if (this.input) {
        //    this.input.value = value;
        //    this.props.onChange(value);
        //  }
        //}
    }
    Component.prototype.render = function () {
        var _this = this;
        return React.cloneElement(this.props.children, {
            ref: function (r) { return _this.input = r; },
            defaultValue: this.props.value,
            onChange: this.onChange,
            onKeyPress: this.onKeyPress,
            onKeyDown: this.onKeyDown,
        });
    };
    Component.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.input && this.input.value !== nextProps.value) {
            this.input.value = nextProps.value;
        }
    };
    Component.displayName = 'Component9929265';
    Component.defaultProps = {
        children: React.createElement("input", { type: "text" }),
    };
    return Component;
}(React.Component));
exports.default = Component;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("d3-array");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map