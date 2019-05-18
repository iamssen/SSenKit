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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-bash.min");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-css.min");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-diff.min");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-json.min");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-jsx.min");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-less.min");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markdown.min");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-sass.min");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-scss.min");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-tsx.min");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-typescript.min");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__(0);

// EXTERNAL MODULE: external "prismjs/components/prism-bash.min"
var prism_bash_min_ = __webpack_require__(3);

// EXTERNAL MODULE: external "prismjs/components/prism-css.min"
var prism_css_min_ = __webpack_require__(4);

// EXTERNAL MODULE: external "prismjs/components/prism-diff.min"
var prism_diff_min_ = __webpack_require__(5);

// EXTERNAL MODULE: external "prismjs/components/prism-json.min"
var prism_json_min_ = __webpack_require__(6);

// EXTERNAL MODULE: external "prismjs/components/prism-jsx.min"
var prism_jsx_min_ = __webpack_require__(7);

// EXTERNAL MODULE: external "prismjs/components/prism-less.min"
var prism_less_min_ = __webpack_require__(8);

// EXTERNAL MODULE: external "prismjs/components/prism-markdown.min"
var prism_markdown_min_ = __webpack_require__(9);

// EXTERNAL MODULE: external "prismjs/components/prism-sass.min"
var prism_sass_min_ = __webpack_require__(10);

// EXTERNAL MODULE: external "prismjs/components/prism-scss.min"
var prism_scss_min_ = __webpack_require__(11);

// EXTERNAL MODULE: external "prismjs/components/prism-tsx.min"
var prism_tsx_min_ = __webpack_require__(12);

// EXTERNAL MODULE: external "prismjs/components/prism-typescript.min"
var prism_typescript_min_ = __webpack_require__(13);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/_packages/react-devdoc/components/getText.ts
function getText() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  for (var _i = 0, _values = values; _i < _values.length; _i++) {
    var value = _values[_i];

    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'object' && value.default && typeof value.default === 'string') {
      return value.default;
    }
  }

  return undefined;
}
// CONCATENATED MODULE: ./src/_packages/react-devdoc/components/CodeBlock.tsx














function CodeBlock(_ref) {
  var value = _ref.value,
      children = _ref.children,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? 'none' : _ref$language;
  var text = getText(children, value);
  if (!text) return null;
  if (['javascript jsx'].indexOf(language)) language = 'jsx';
  if (['typescript jsx'].indexOf(language)) language = 'tsx';
  if (['sh'].indexOf(language)) language = 'bash';
  if (!external_prismjs_["languages"][language]) language = 'none';
  var grammar = external_prismjs_["languages"][language] ? external_prismjs_["languages"][language] : external_prismjs_["languages"].js;
  var html = Object(external_prismjs_["highlight"])(text, grammar, language);
  var className = 'language-' + language;
  return external_react_default.a.createElement("pre", {
    className: className
  }, external_react_default.a.createElement("code", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
}
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(2);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// CONCATENATED MODULE: ./src/_packages/react-devdoc/components/Markdown.tsx




function Markdown(_ref) {
  var text = _ref.text,
      children = _ref.children;
  var source = getText(text, children);
  return source ? external_react_default.a.createElement(external_react_markdown_default.a, {
    source: source,
    renderers: {
      code: CodeBlock
    }
  }) : null;
}
// CONCATENATED MODULE: ./src/_packages/react-devdoc/index.ts
/* concated harmony reexport CodeBlock */__webpack_require__.d(__webpack_exports__, "CodeBlock", function() { return CodeBlock; });
/* concated harmony reexport Markdown */__webpack_require__.d(__webpack_exports__, "Markdown", function() { return Markdown; });



/***/ })
/******/ ])));