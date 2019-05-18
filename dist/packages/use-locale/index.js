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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("locale-code");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(1);

// EXTERNAL MODULE: external "locale-code"
var external_locale_code_ = __webpack_require__(0);
var external_locale_code_default = /*#__PURE__*/__webpack_require__.n(external_locale_code_);

// CONCATENATED MODULE: ./src/_packages/use-locale/locale.ts


function getBrowserLocale() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$cookieKey = _ref.cookieKey,
      cookieKey = _ref$cookieKey === void 0 ? 'locale' : _ref$cookieKey,
      _ref$fallbackLanguage = _ref.fallbackLanguageCodes,
      fallbackLanguageCodes = _ref$fallbackLanguage === void 0 ? [] : _ref$fallbackLanguage;

  var languageCode = Object(external_js_cookie_["get"])(cookieKey);

  if (languageCode && external_locale_code_default.a.validate(languageCode)) {
    return languageCode;
  } else {
    var userLanguage = navigator.language;
    var fallbackLanguageCode = fallbackLanguageCodes.find(function (code) {
      return code === userLanguage;
    }) || fallbackLanguageCodes[0];
    Object(external_js_cookie_["set"])(cookieKey, fallbackLanguageCode);
    return fallbackLanguageCode;
  }
}
function setBrowserLocale(languageCode) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$cookieKey = _ref2.cookieKey,
      cookieKey = _ref2$cookieKey === void 0 ? 'locale' : _ref2$cookieKey;

  if (external_locale_code_default.a.validate(languageCode)) {
    Object(external_js_cookie_["set"])(cookieKey, languageCode);
  }
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/_packages/use-locale/useLocale.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useLocale(currentLocale) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$cookieKey = _ref.cookieKey,
      cookieKey = _ref$cookieKey === void 0 ? 'locale' : _ref$cookieKey;

  var _useState = Object(external_react_["useState"])(currentLocale),
      _useState2 = _slicedToArray(_useState, 2),
      locale = _useState2[0],
      setLocale = _useState2[1];

  var updateLocale = Object(external_react_["useCallback"])(function (nextLanguageCode) {
    if (external_locale_code_default.a.validate(nextLanguageCode)) {
      setLocale(nextLanguageCode);
      setBrowserLocale(nextLanguageCode, {
        cookieKey: cookieKey
      });
    }
  }, []);
  return {
    locale: locale,
    updateLocale: updateLocale
  };
}
// CONCATENATED MODULE: ./src/_packages/use-locale/index.ts
/* concated harmony reexport getBrowserLocale */__webpack_require__.d(__webpack_exports__, "getBrowserLocale", function() { return getBrowserLocale; });
/* concated harmony reexport setBrowserLocale */__webpack_require__.d(__webpack_exports__, "setBrowserLocale", function() { return setBrowserLocale; });
/* concated harmony reexport useLocale */__webpack_require__.d(__webpack_exports__, "useLocale", function() { return useLocale; });



/***/ })
/******/ ])));