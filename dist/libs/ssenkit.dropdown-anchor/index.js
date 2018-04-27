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

Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = __webpack_require__(1);
exports.default = components_1.DropDownAnchor;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DropDownAnchor_1 = __webpack_require__(2);
exports.DropDownAnchor = DropDownAnchor_1.default;


/***/ }),
/* 2 */
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
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(4);
__webpack_require__(5);
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1(props) {
        var _this = _super.call(this, props) || this;
        _this.contentContainerRef = React.createRef();
        _this.anchorButtonRef = React.createRef();
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
            if (!_this.contentContainerRef.current)
                return;
            var contents = ReactDOM.findDOMNode(_this.contentContainerRef.current);
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
        _this.state = {
            open: false,
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var buttonProps = { ref: this.anchorButtonRef };
        buttonProps['role'] = 'toggle';
        buttonProps['aria-expanded'] = this.state.open;
        var contentElement = null;
        if (this.state.open) {
            contentElement = (React.createElement("div", { ref: this.contentContainerRef, role: "container" }, React.cloneElement(this.props.children, { close: this.close })));
            if (!this.props.useOutboundClick)
                buttonProps.onClick = this.openerCloseHandler;
        }
        else {
            buttonProps.onClick = this.openerOpenHandler;
        }
        return (React.createElement("div", { className: 'DropDownAnchor ' + this.props.className },
            React.cloneElement(this.props.button, buttonProps),
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
        if (!this.anchorButtonRef.current || !this.contentContainerRef.current)
            return;
        var documentWidth = window.innerWidth;
        var documentHeight = window.innerHeight;
        var button = ReactDOM.findDOMNode(this.anchorButtonRef.current);
        var contents = ReactDOM.findDOMNode(this.contentContainerRef.current);
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
}(React.PureComponent));
exports.default = default_1;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map