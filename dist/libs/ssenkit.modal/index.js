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

module.exports = require("react-dom");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/_library/ssenkit.modal/components/index.scss
var components = __webpack_require__(3);
var components_default = /*#__PURE__*/__webpack_require__.n(components);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(1);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// CONCATENATED MODULE: ./src/_library/ssenkit.modal/components/Modal.tsx
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


var Modal_Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            modalContainer: null,
        };
        _this.closeModal = function () {
            _this.props.onClose();
        };
        return _this;
    }
    Component.prototype.componentDidMount = function () {
        this.container = typeof this.props.container === 'string'
            ? document.querySelector(this.props.container)
            : document.body;
        var modalContainer = document.createElement('div');
        modalContainer.setAttribute('class', '__ssenkit_modal_container__');
        this.container.appendChild(modalContainer);
        this.setState({
            modalContainer: modalContainer,
        });
    };
    Component.prototype.componentWillUnmount = function () {
        if (this.state.modalContainer) {
            this.container.removeChild(this.state.modalContainer);
            this.container = null;
        }
    };
    Component.prototype.render = function () {
        return this.state.modalContainer
            ? external__react_dom_["createPortal"]((external__react_["createElement"]("div", { style: this.props.dimStyle }, external__react_["cloneElement"](this.props.children, { closeModal: this.closeModal }))), this.state.modalContainer)
            : null;
    };
    Component.displayName = 'Modal';
    Component.defaultProps = {
        dimStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
    };
    return Component;
}(external__react_["Component"]));
/* harmony default export */ var Modal = (Modal_Component);

// CONCATENATED MODULE: ./src/_library/ssenkit.modal/components/openModal.tsx


/* harmony default export */ var openModal = (function (content, options) {
    if (options === void 0) { options = {}; }
    if (!options.dimStyle) {
        options.dimStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        };
    }
    var container = typeof options.container === 'string'
        ? document.querySelector(options.container)
        : document.body;
    var modalContainer = document.createElement('div');
    modalContainer.setAttribute('class', '__ssenkit_modal_container__');
    container.appendChild(modalContainer);
    var closeModal = function () {
        container.removeChild(modalContainer);
    };
    external__react_dom_["render"]((external__react_["createElement"]("div", { style: options.dimStyle },
        external__react_["cloneElement"](content, { closeModal: closeModal }),
        ";")), modalContainer);
    return closeModal;
});

// CONCATENATED MODULE: ./src/_library/ssenkit.modal/components/index.ts




// CONCATENATED MODULE: ./src/_library/ssenkit.modal/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });



/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map