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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(2);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: ./src/_library/ssenkit.dropdown-anchor/components/DropDownAnchor.scss
var DropDownAnchor = __webpack_require__(3);
var DropDownAnchor_default = /*#__PURE__*/__webpack_require__.n(DropDownAnchor);

// CONCATENATED MODULE: ./src/_library/ssenkit.dropdown-anchor/components/DropDownAnchor.tsx
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



var DropDownAnchor_default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false,
        };
        // ---------------------------------------------
        // outbound click
        // ---------------------------------------------
        _this.subscribeOutboundClick = function () {
            // subscribe window click event for contents close
            if (!_this.outboundClickSubscription && _this.props.useOutboundClick) {
                _this.outboundClickSubscription = function (event) { return _this.outboundClickHandler(event); };
                window.addEventListener('click', _this.outboundClickSubscription);
            }
        };
        _this.unsubscribeOutboundClick = function () {
            if (_this.outboundClickSubscription) {
                window.removeEventListener('click', _this.outboundClickSubscription);
                _this.outboundClickSubscription = null;
            }
        };
        _this.outboundClickHandler = function (event) {
            var contents = external__react_dom_["findDOMNode"](_this.contentContainer);
            var contentsBound = contents.getBoundingClientRect();
            var clientX = event.clientX, clientY = event.clientY;
            var toClose = clientX < contentsBound.left ||
                clientX > contentsBound.left + contentsBound.width ||
                clientY < contentsBound.top ||
                clientY > contentsBound.top + contentsBound.height;
            // FIXME Windows + Chrome 환경에서 <select> 선택 시 clientX, clientY가 0으로 들어오는 현상이 있어서 창이 닫히는 문제를 회피
            var isZero = clientX + clientY === 0;
            if (!isZero && toClose)
                _this.closeContentContainer();
            event.stopPropagation();
        };
        // ---------------------------------------------
        // opener click
        // ---------------------------------------------
        _this.openerOpenHandler = function (event) {
            _this.openContentContainer();
            event.stopPropagation();
        };
        _this.openerCloseHandler = function (event) {
            // this.cancelHandler(this.state.value);
            _this.closeContentContainer();
            event.stopPropagation();
        };
        _this.close = function () {
            if (_this.state.open)
                _this.closeContentContainer();
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        var buttonProps = { ref: function (r) { return _this.anchorButton = r; } };
        buttonProps['role'] = 'toggle';
        buttonProps['aria-expanded'] = this.state.open;
        var contentElement;
        if (this.state.open) {
            contentElement = (external__react_["createElement"]("div", { ref: function (r) { return _this.contentContainer = r; }, role: "container" }, external__react_["cloneElement"](this.props.children, { close: this.close })));
            if (!this.props.useOutboundClick)
                buttonProps.onClick = this.openerCloseHandler;
        }
        else {
            buttonProps.onClick = this.openerOpenHandler;
        }
        return (external__react_["createElement"]("div", { className: 'DropDownAnchor ' + this.props.className },
            external__react_["cloneElement"](this.props.button, buttonProps),
            contentElement));
    };
    default_1.prototype.componentDidUpdate = function () {
        if (this.state.open) {
            this.updateContentContainerPosition();
            this.subscribeOutboundClick();
        }
    };
    default_1.prototype.componentWillUnmount = function () {
        this.unsubscribeOutboundClick();
    };
    default_1.prototype.updateContentContainerPosition = function () {
        var documentWidth = window.innerWidth;
        var documentHeight = window.innerHeight;
        var button = external__react_dom_["findDOMNode"](this.anchorButton);
        var contents = external__react_dom_["findDOMNode"](this.contentContainer);
        if (!button)
            return;
        var buttonBound = button.getBoundingClientRect();
        var contentsBound = contents.getBoundingClientRect();
        var gap = 3;
        var alternatePositionMargin = 10; // FIXME JS 소숫점 Error 위치값 계산이 소숫점으로 들어가게 되면서 발생되는 에러를 해결하기 위한 여유분 추가
        var x = 0;
        var y = buttonBound.height + gap;
        if (this.props.useAlternatePosition && contentsBound.left + contentsBound.width + alternatePositionMargin > documentWidth) {
            x = buttonBound.width - contentsBound.width;
        }
        if (this.props.useAlternatePosition && buttonBound.top + buttonBound.height + gap + contentsBound.height > documentHeight) {
            y = -(contentsBound.height + gap);
        }
        contents.style.left = x + 'px';
        contents.style.top = y + 'px';
    };
    // ---------------------------------------------
    // open / close content container
    // ---------------------------------------------
    default_1.prototype.openContentContainer = function () {
        this.setState({
            open: true,
        });
        if (typeof this.props.onOpen === 'function') {
            this.props.onOpen();
        }
    };
    default_1.prototype.closeContentContainer = function () {
        //debugger;
        this.unsubscribeOutboundClick();
        this.setState({
            open: false,
        });
        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    };
    default_1.defaultProps = {
        className: '',
        useAlternatePosition: true,
        useOutboundClick: false,
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var components_DropDownAnchor = (DropDownAnchor_default_1);

// CONCATENATED MODULE: ./src/_library/ssenkit.dropdown-anchor/components/index.ts


// CONCATENATED MODULE: ./src/_library/ssenkit.dropdown-anchor/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "default", function() { return components_DropDownAnchor; });



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map