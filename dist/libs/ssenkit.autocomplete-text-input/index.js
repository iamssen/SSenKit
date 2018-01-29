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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// CONCATENATED MODULE: ./src/_library/ssenkit.autocomplete-text-input/components/MultipleAutoCompleteTextInput.tsx
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

function split(val) {
    return val.split(/,\s*/);
}
var MultipleAutoCompleteTextInput_default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastDisaptchedText = '';
        _this.onInputChange = function (event) {
            _this.dispatchChange(event.currentTarget.value);
        };
        _this.onInputSubmit = function (event) {
            if (event.keyCode === 13) {
                _this.props.onSubmit(event.currentTarget.value);
            }
        };
        _this.onBlur = function (event) {
            _this.dispatchChange(event.currentTarget['value']);
        };
        _this.dispatchChange = function (text) {
            if (_this.lastDisaptchedText !== text) {
                _this.props.onChange(text);
                _this.lastDisaptchedText = text;
            }
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        return external__react_["cloneElement"](this.props.children, {
            ref: function (r) { return _this.input = r; },
            defaultValue: this.props.value,
            onChange: this.onInputChange,
            onKeyDown: this.onInputSubmit,
        });
    };
    default_1.prototype.componentDidMount = function () {
        var _this = this;
        var self = this;
        var options = {
            minLength: this.props.minLength,
            source: this.props.source,
            focus: function () {
                // prevent value inserted on focus
                return false;
            },
            select: function (event, ui) {
                var terms = split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push('');
                this.value = terms.join(', ');
                self.dispatchChange(this.value);
                return false;
            },
            change: this.onBlur,
        };
        var hasInputClassName = typeof this.props.className === 'string';
        var hasMenuClassName = typeof this.props.menuClassName === 'string';
        if (hasInputClassName || hasMenuClassName) {
            var classes = {};
            if (hasInputClassName)
                classes['ui-autocomplete-input'] = this.props.className;
            if (hasMenuClassName)
                classes['ui-autocomplete'] = this.props.menuClassName;
            options['classes'] = classes;
        }
        $(this.input)
            .on('keydown', function (event) {
            if (event.keyCode === $.ui.keyCode.TAB && $(_this).autocomplete('instance').menu.active) {
                event.preventDefault();
            }
        })
            .autocomplete(options);
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.input.value !== nextProps.value) {
            this.input.value = nextProps.value;
        }
    };
    default_1.defaultProps = {
        minLength: 2,
        children: external__react_["createElement"]("input", { type: "text" }),
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var MultipleAutoCompleteTextInput = (MultipleAutoCompleteTextInput_default_1);

// CONCATENATED MODULE: ./src/_library/ssenkit.autocomplete-text-input/components/SingleAutoCompleteTextInput.tsx
var SingleAutoCompleteTextInput___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SingleAutoCompleteTextInput_default_1 = /** @class */ (function (_super) {
    SingleAutoCompleteTextInput___extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastDisaptchedText = '';
        _this.onInputChange = function (event) {
            _this.dispatchChange(event.currentTarget.value);
        };
        _this.onInputSubmit = function (event) {
            if (event.keyCode === 13) {
                _this.props.onSubmit(event.currentTarget.value);
            }
        };
        _this.onBlur = function (event) {
            _this.dispatchChange(event.currentTarget['value']);
        };
        _this.dispatchChange = function (text) {
            if (_this.lastDisaptchedText !== text) {
                _this.props.onChange(text);
                _this.lastDisaptchedText = text;
            }
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        return external__react_["cloneElement"](this.props.children, {
            ref: function (r) { return _this.input = r; },
            defaultValue: this.props.value,
            onChange: this.onInputChange,
            onKeyDown: this.onInputSubmit,
        });
    };
    default_1.prototype.componentDidMount = function () {
        var _this = this;
        var self = this;
        var options = {
            minLength: this.props.minLength,
            source: this.props.source,
            focus: function () {
                // prevent value inserted on focus
                return false;
            },
            select: function (event, ui) {
                self.dispatchChange(ui.item.value);
                return false;
            },
            change: this.onBlur,
        };
        var hasInputClassName = typeof this.props.className === 'string';
        var hasMenuClassName = typeof this.props.menuClassName === 'string';
        if (hasInputClassName || hasMenuClassName) {
            var classes = {};
            if (hasInputClassName)
                classes['ui-autocomplete-input'] = this.props.className;
            if (hasMenuClassName)
                classes['ui-autocomplete'] = this.props.menuClassName;
            options['classes'] = classes;
        }
        $(this.input)
            .on('keydown', function (event) {
            if (event.keyCode === $.ui.keyCode.TAB && $(_this).autocomplete('instance').menu.active) {
                event.preventDefault();
            }
        })
            .autocomplete(options);
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.input.value !== nextProps.value) {
            this.input.value = nextProps.value;
        }
    };
    default_1.defaultProps = {
        minLength: 2,
        children: external__react_["createElement"]("input", { type: "text" }),
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var SingleAutoCompleteTextInput = (SingleAutoCompleteTextInput_default_1);

// CONCATENATED MODULE: ./src/_library/ssenkit.autocomplete-text-input/components/index.ts



// CONCATENATED MODULE: ./src/_library/ssenkit.autocomplete-text-input/index.tsx
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MultipleAutoCompleteTextInput", function() { return MultipleAutoCompleteTextInput; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SingleAutoCompleteTextInput", function() { return SingleAutoCompleteTextInput; });



/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map