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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("d3-array");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("ssenkit.dropdown-anchor");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "d3-array"
var external__d3_array_ = __webpack_require__(2);
var external__d3_array__default = /*#__PURE__*/__webpack_require__.n(external__d3_array_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(1);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/DayCell.tsx
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

/* harmony default export */ var DayCell = (function (_a) {
    var date = _a.date, selectedDay = _a.selectedDay, startDay = _a.startDay, endDay = _a.endDay, today = _a.today, disableBefore = _a.disableBefore, disableAfter = _a.disableAfter, onClick = _a.onClick;
    var disabled = (disableBefore && date.isBefore(disableBefore, 'day')) || (disableAfter && date.isAfter(disableAfter, 'day'));
    var selected = date.isSame(selectedDay, 'day');
    var styles = [];
    if (date.isBefore(startDay, 'day'))
        styles.push('before-month');
    if (date.isAfter(endDay, 'day'))
        styles.push('after-month');
    if (date.isSame(today, 'day'))
        styles.push('today');
    if (selected)
        styles.push('selected');
    if (disabled)
        styles.push('disabled');
    var props = {
        className: styles.join(' '),
    };
    if (!disabled && !selected)
        props.onClick = function () { return onClick(date); };
    return external__react_["createElement"]("td", __assign({}, props), date.format('D'));
});;

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/isSame.ts

/* harmony default export */ var isSame = (function (prevDate, nextDate, granularity) {
    var hasPrevDate = prevDate !== null && prevDate !== undefined;
    var hasNextDate = nextDate !== null && nextDate !== undefined;
    return hasPrevDate === hasNextDate && external__moment_(prevDate).isSame(nextDate, granularity);
});;

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/toMoment.ts

/* harmony default export */ var toMoment = (function (date, createDefaultValue) {
    return date ? external__moment_(date) : createDefaultValue();
});;

// EXTERNAL MODULE: ./src/_library/ssenkit.date-select/components/MonthSelector.scss
var MonthSelector = __webpack_require__(5);
var MonthSelector_default = /*#__PURE__*/__webpack_require__.n(MonthSelector);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/MonthSelector.tsx
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




var MonthSelector_default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            date: null,
            source: null,
        };
        _this.onYearChange = function (event) {
            var year = Number(event.target.value);
            var months = _this.state.source.get(year);
            var currentMonth = _this.state.date.month() + 1;
            var month = months.indexOf(currentMonth) > -1
                ? currentMonth
                : months[months.length - 1];
            _this.props.onChange(year, month);
        };
        _this.onMonthChange = function (event) {
            var year = _this.state.date.year();
            var month = Number(event.target.value);
            _this.props.onChange(year, month);
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var year = this.state.date.year();
        var month = this.state.date.month() + 1;
        var years = Array.from(this.state.source.keys());
        var months = this.state.source.get(year);
        return (external__react_["createElement"]("div", { className: 'MonthSelector ' + this.props.className },
            external__react_["createElement"]("select", { className: "select", value: year, onChange: this.onYearChange }, years.map(function (year) { return external__react_["createElement"]("option", { key: year, value: year },
                year,
                "\uB144"); })),
            external__react_["createElement"]("select", { className: "select", value: month, onChange: this.onMonthChange }, months.map(function (month) { return external__react_["createElement"]("option", { key: month, value: month },
                month,
                "\uC6D4"); }))));
    };
    default_1.prototype.parseSource = function (props) {
        var from, to;
        if (props.disableBefore && props.disableAfter) {
            from = external__moment_(props.disableBefore);
            to = external__moment_(props.disableAfter);
        }
        else if (props.disableBefore) {
            from = external__moment_(props.disableBefore);
            to = external__moment_().add(10, 'year').endOf('year');
        }
        else if (props.disableAfter) {
            from = external__moment_().subtract(10, 'year').startOf('year');
            to = external__moment_(props.disableAfter);
        }
        else {
            from = external__moment_().subtract(10, 'year').startOf('year');
            to = external__moment_().add(10, 'year').endOf('year');
        }
        var source = new Map();
        var itr = from.clone();
        while (itr.isSameOrBefore(to, 'month')) {
            var year = itr.year();
            var month = itr.month() + 1;
            if (!source.has(year))
                source.set(year, []);
            source.get(year).push(month);
            itr.add(1, 'month');
        }
        this.setState({ source: source });
    };
    default_1.prototype.componentWillMount = function () {
        this.parseSource(this.props);
        this.setState({ date: external__moment_(this.props.date) });
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        var prevProps = this.props;
        if (!isSame(prevProps.disableBefore, nextProps.disableBefore, 'month')
            || !isSame(prevProps.disableAfter, nextProps.disableAfter, 'month')) {
            this.parseSource(nextProps);
        }
        if (!isSame(prevProps.date, nextProps.date, 'month')) {
            this.setState({ date: external__moment_(nextProps.date) });
        }
    };
    default_1.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state.date !== nextState.date || this.state.source !== nextState.source;
    };
    default_1.defaultProps = {
        className: '',
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var components_MonthSelector = (MonthSelector_default_1);

// EXTERNAL MODULE: ./src/_library/ssenkit.date-select/components/DateSelector.scss
var DateSelector = __webpack_require__(6);
var DateSelector_default = /*#__PURE__*/__webpack_require__.n(DateSelector);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/DateSelector.tsx
var DateSelector___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DateSelector___assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








var PrevMonthButton = function (_a) {
    var date = _a.date, disableBefore = _a.disableBefore, onClick = _a.onClick;
    var disabled = disableBefore && date.isSameOrBefore(disableBefore, 'month');
    var props = {};
    if (!disabled) {
        props.onClick = function () { return onClick(date.clone().subtract(1, 'month')); };
    }
    else {
        props.disabled = true;
    }
    return (external__react_["createElement"]("button", DateSelector___assign({}, props),
        external__react_["createElement"]("span", { className: "fa fa-chevron-left", title: "Previous Month" })));
};
var NextMonthButton = function (_a) {
    var date = _a.date, disableAfter = _a.disableAfter, onClick = _a.onClick;
    var disabled = disableAfter && date.isSameOrAfter(disableAfter, 'month');
    var props = {};
    if (!disabled) {
        props.onClick = function () { return onClick(date.clone().add(1, 'month')); };
    }
    else {
        props.disabled = true;
    }
    return (external__react_["createElement"]("button", DateSelector___assign({}, props),
        external__react_["createElement"]("span", { className: "fa fa-chevron-right", title: "Next Month" })));
};
var DateSelector_default_1 = /** @class */ (function (_super) {
    DateSelector___extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeView = function (newMonth) {
            _this.setState({ view: newMonth });
        };
        _this.onMonthChange = function (year, month) {
            _this.setState({
                view: _this.state.view.clone().year(year).month(month - 1),
            });
        };
        _this.onDayClick = function (newDate) {
            _this.props.onChange(newDate.toDate());
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _a = this.state, view = _a.view, selectedDay = _a.selected, disableBefore = _a.disableBefore, disableAfter = _a.disableAfter;
        var today = external__moment_();
        var startDayOfMonth = view.clone().startOf('month');
        var endDayOfMonth = view.clone().endOf('month');
        var itr = startDayOfMonth.clone().startOf('week');
        var row = []; // of <DayCell>
        var rows = []; // of <tr>
        while (itr.isSameOrBefore(endDayOfMonth.clone().endOf('week'), 'day')) {
            // Create Day Cell
            row.push(external__react_["createElement"](DayCell, { key: itr.format('YYYYMMDD'), date: itr.clone(), selectedDay: selectedDay, startDay: startDayOfMonth, endDay: endDayOfMonth, today: today, disableBefore: disableBefore, disableAfter: disableAfter, onClick: this.onDayClick }));
            // Week break
            if (itr.day() === 6) {
                rows.push(external__react_["createElement"]("tr", { key: itr.format('W') }, row));
                row = [];
            }
            itr.add(1, 'day');
        }
        Object(external__d3_array_["range"])(rows.length, 6).forEach(function () {
            rows.push(external__react_["createElement"]("tr", null,
                external__react_["createElement"]("td", null, "\u00A0"),
                external__react_["createElement"]("td", null, "\u00A0"),
                external__react_["createElement"]("td", null, "\u00A0"),
                external__react_["createElement"]("td", null, "\u00A0"),
                external__react_["createElement"]("td", null, "\u00A0"),
                external__react_["createElement"]("td", null, "\u00A0"),
                external__react_["createElement"]("td", null, "\u00A0")));
        });
        return (external__react_["createElement"]("div", { className: 'DateSelector ' + this.props.className },
            external__react_["createElement"]("div", { role: "header" },
                external__react_["createElement"](PrevMonthButton, { date: view, disableBefore: disableBefore, onClick: this.changeView }),
                external__react_["createElement"](components_MonthSelector, { date: view, disableBefore: disableBefore, disableAfter: disableAfter, onChange: this.onMonthChange }),
                external__react_["createElement"](NextMonthButton, { date: view, disableAfter: disableAfter, onClick: this.changeView })),
            external__react_["createElement"]("table", { role: "body" },
                external__react_["createElement"]("thead", null,
                    external__react_["createElement"]("tr", null,
                        external__react_["createElement"]("th", null, "\uC77C"),
                        external__react_["createElement"]("th", null, "\uC6D4"),
                        external__react_["createElement"]("th", null, "\uD654"),
                        external__react_["createElement"]("th", null, "\uC218"),
                        external__react_["createElement"]("th", null, "\uBAA9"),
                        external__react_["createElement"]("th", null, "\uAE08"),
                        external__react_["createElement"]("th", null, "\uD1A0"))),
                external__react_["createElement"]("tbody", null, rows))));
    };
    default_1.prototype.componentWillMount = function () {
        this.propsToState({}, this.props);
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        this.propsToState(this.props, nextProps);
    };
    default_1.prototype.propsToState = function (prevProps, nextProps) {
        var state = {};
        var changed = false;
        if (!isSame(prevProps.date, nextProps.date, 'day')) {
            state.view = toMoment(nextProps.date, function () { return external__moment_(new Date); });
            state.selected = toMoment(nextProps.date);
            changed = true;
        }
        if (!isSame(prevProps.disableBefore, nextProps.disableBefore, 'day')) {
            state.disableBefore = toMoment(nextProps.disableBefore);
            changed = true;
        }
        if (!isSame(prevProps.disableAfter, nextProps.disableAfter, 'day')) {
            state.disableAfter = toMoment(nextProps.disableAfter);
            changed = true;
        }
        if (changed)
            this.setState(state);
    };
    default_1.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var prevState = this.state;
        return prevState.view !== nextState.view
            || prevState.selected !== nextState.selected
            || prevState.disableBefore !== nextState.disableBefore
            || prevState.disableAfter !== nextState.disableAfter;
    };
    default_1.defaultProps = {
        className: '',
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var components_DateSelector = (DateSelector_default_1);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/DateInput.tsx
var DateInput___extends = (this && this.__extends) || (function () {
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




var DateInput_format = 'YYYY-MM-DD';
var availableKeyCodes = __spread(Object(external__d3_array_["range"])(35, 40 + 1), [
    8,
    46,
    9,
    27,
    13
], Object(external__d3_array_["range"])(48, 57 + 1), Object(external__d3_array_["range"])(96, 105 + 1), [
    190,
    110,
    189,
]);
function getFormat(dateString) {
    if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(dateString)) {
        return 'YYYY-MM-DD';
    }
    else if (/[0-9]{4}.[0-9]{2}.[0-9]{2}/.test(dateString)) {
        return 'YYYY.MM.DD';
    }
    else if (/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/.test(dateString)) {
        return 'YYYY/MM/DD';
    }
    else if (/[0-9]{8}/.test(dateString)) {
        return 'YYYYMMDD';
    }
    return 'YYYY-MM-DD';
}
var DateInput_default_1 = /** @class */ (function (_super) {
    DateInput___extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dateString: '',
        };
        _this.onBlur = function (event) {
            _this.commitString(_this.state.dateString, event.currentTarget.value);
        };
        _this.onKeyDown = function (event) {
            if (event.keyCode === 13) {
                _this.commitString(_this.state.dateString, event.currentTarget.value);
                return;
            }
            var selectAll = event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true);
            if (selectAll || availableKeyCodes.indexOf(event.keyCode) !== -1)
                return;
            event.preventDefault();
            event.stopPropagation();
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        return (external__react_["createElement"]("input", { ref: function (r) { return _this.input = r; }, type: "text", className: 'DateInput form-control' + this.props.className, defaultValue: this.state.dateString, onBlur: this.onBlur, onKeyDown: this.onKeyDown }));
    };
    default_1.prototype.commitString = function (prevDateString, nextDateString) {
        if (prevDateString === nextDateString)
            return;
        var nextDate = external__moment_(nextDateString.replace(/\s/g, ''), getFormat(nextDateString), true);
        var isBefore = this.props.disableBefore && nextDate.isBefore(this.props.disableBefore);
        var isAfter = this.props.disableAfter && nextDate.isAfter(this.props.disableAfter);
        if (nextDate.isValid() && !isBefore && !isAfter) {
            this.setState({ dateString: nextDateString });
            this.props.onChange(nextDate.toDate());
        }
        else {
            this.input.value = prevDateString;
        }
    };
    default_1.prototype.componentWillMount = function () {
        this.propsToState({}, this.props);
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        this.propsToState(this.props, nextProps);
    };
    default_1.prototype.propsToState = function (prevProps, nextProps) {
        var state = {};
        var changed = false;
        if ((external__moment_["isMoment"](nextProps.date) || external__moment_["isDate"](nextProps.date)) && !isSame(prevProps.date, nextProps.date, 'day')) {
            var dateString = external__moment_(nextProps.date).format(DateInput_format);
            state.dateString = dateString;
            if (this.input)
                this.input.value = dateString;
            changed = true;
        }
        if (changed) {
            this.setState(state);
        }
    };
    default_1.defaultProps = {
        className: '',
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var DateInput = (DateInput_default_1);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/TimeInput.tsx
var TimeInput___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TimeInput___read = (this && this.__read) || function (o, n) {
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
var TimeInput___spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(TimeInput___read(arguments[i]));
    return ar;
};


var TimeInput_availableKeyCodes = TimeInput___spread(Object(external__d3_array_["range"])(35, 40 + 1), [
    8,
    46,
    9,
    27,
    13
], Object(external__d3_array_["range"])(48, 57 + 1), Object(external__d3_array_["range"])(96, 105 + 1), [
    186,
]);
var TimeInput_default_1 = /** @class */ (function (_super) {
    TimeInput___extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            timeString: '00:00:00',
        };
        _this.onBlur = function (event) {
            _this.commitString(_this.state.timeString, event.currentTarget.value);
        };
        _this.onKeyDown = function (event) {
            if (event.keyCode === 13) {
                _this.commitString(_this.state.timeString, event.currentTarget.value);
                return;
            }
            var selectAll = event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true);
            if (selectAll || TimeInput_availableKeyCodes.indexOf(event.keyCode) !== -1)
                return;
            event.preventDefault();
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        return (external__react_["createElement"]("input", { ref: function (r) { return _this.input = r; }, type: "text", className: 'TimeInput form-control' + this.props.className, defaultValue: this.state.timeString, onBlur: this.onBlur, onKeyDown: this.onKeyDown }));
    };
    default_1.prototype.commitString = function (prevTimeString, nextTimeString) {
        if (prevTimeString === nextTimeString)
            return;
        if (nextTimeString.trim() === '') {
            this.setState({ timeString: '00:00:00' });
            this.props.onChange('00:00:00');
            return;
        }
        if (!/^([0-9]{2}):([0-9]{2}):([0-9]{2})$/.test(nextTimeString)) {
            this.input.value = prevTimeString;
            return;
        }
        var times = nextTimeString.split(':');
        var HH = Number(times[0]);
        var mm = Number(times[1]);
        var ss = Number(times[2]);
        if (!isNaN(HH) && HH >= 0 && HH < 24
            && !isNaN(mm) && mm >= 0 && HH < 60
            && !isNaN(ss) && ss >= 0 && ss < 60) {
            this.setState({ timeString: nextTimeString });
            this.props.onChange(nextTimeString);
        }
        else {
            this.input.value = prevTimeString;
        }
    };
    default_1.prototype.componentWillMount = function () {
        this.propsToState({}, this.props);
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        this.propsToState(this.props, nextProps);
    };
    default_1.prototype.propsToState = function (prevProps, nextProps) {
        var state = {};
        var changed = false;
        if (prevProps.time !== nextProps.time) {
            state.timeString = nextProps.time;
            if (this.input)
                this.input.value = nextProps.time;
            changed = true;
        }
        if (changed) {
            this.setState(state);
        }
    };
    default_1.defaultProps = {
        className: '',
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var TimeInput = (TimeInput_default_1);

// EXTERNAL MODULE: ./src/_library/ssenkit.date-select/components/DateTimeSelector.scss
var DateTimeSelector = __webpack_require__(7);
var DateTimeSelector_default = /*#__PURE__*/__webpack_require__.n(DateTimeSelector);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/DateTimeSelector.tsx
var DateTimeSelector___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DateTimeSelector___read = (this && this.__read) || function (o, n) {
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








var DateTimeSelector_default_1 = /** @class */ (function (_super) {
    DateTimeSelector___extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDateChange = function (newDate) {
            var date = external__moment_(newDate);
            _this.setState({ date: date });
            _this.props.onChange(_this.mergeDateTime(date, _this.state.time));
        };
        _this.onTimeChange = function (newTime) {
            _this.setState({ time: newTime });
            _this.props.onChange(_this.mergeDateTime(_this.state.date, newTime));
        };
        return _this;
    }
    default_1.prototype.render = function () {
        return (external__react_["createElement"]("div", { className: 'DateTimeSelector ' + this.props.className },
            external__react_["createElement"]("div", { role: "inputs" },
                external__react_["createElement"](DateInput, { date: this.state.date, disableBefore: this.props.disableBefore, disableAfter: this.props.disableAfter, onChange: this.onDateChange }),
                external__react_["createElement"](TimeInput, { time: this.state.time, onChange: this.onTimeChange })),
            external__react_["createElement"](components_DateSelector, { date: this.state.date, disableBefore: this.props.disableBefore, disableAfter: this.props.disableAfter, onChange: this.onDateChange })));
    };
    default_1.prototype.mergeDateTime = function (date, time) {
        var _a = DateTimeSelector___read(time.split(':'), 3), HH = _a[0], mm = _a[1], ss = _a[2];
        return date.clone()
            .hour(Number(HH))
            .minute(Number(mm))
            .second(Number(ss))
            .toDate();
    };
    default_1.prototype.componentWillMount = function () {
        this.propsToState({}, this.props);
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        this.propsToState(this.props, nextProps);
    };
    default_1.prototype.propsToState = function (prevProps, nextProps) {
        var state = {};
        var changed = false;
        if (!isSame(prevProps.date, nextProps.date, 'day')) {
            state.date = toMoment(nextProps.date);
            changed = true;
        }
        var prevTime = prevProps.date ? external__moment_(prevProps.date).format('HH:mm:ss') : null;
        var nextTime = external__moment_(nextProps.date).format('HH:mm:ss');
        if (prevTime !== nextTime) {
            state.time = nextTime;
            changed = true;
        }
        if (changed)
            this.setState(state);
    };
    default_1.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var prevProps = this.props;
        var prevState = this.state;
        return prevState.date !== nextState.date
            || prevState.time !== nextState.time
            || prevProps.disableBefore !== nextProps.disableBefore
            || prevProps.disableAfter !== nextProps.disableAfter;
    };
    default_1.defaultProps = {
        className: '',
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var components_DateTimeSelector = (DateTimeSelector_default_1);

// EXTERNAL MODULE: ./src/_library/ssenkit.date-select/components/FromToDateTimeSelector.scss
var FromToDateTimeSelector = __webpack_require__(8);
var FromToDateTimeSelector_default = /*#__PURE__*/__webpack_require__.n(FromToDateTimeSelector);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/FromToDateTimeSelector.tsx
var FromToDateTimeSelector___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var FromToDateTimeSelector_default_1 = /** @class */ (function (_super) {
    FromToDateTimeSelector___extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        var _a = this.state, from = _a.from, to = _a.to;
        var _b = this.props, disableBefore = _b.disableBefore, disableAfter = _b.disableAfter;
        var toDisableBefore = (!disableBefore || (from && from.isAfter(disableBefore, 'day'))) ? from.toDate() : disableBefore;
        return (external__react_["createElement"]("div", { className: 'FromToDateTimeSelector ' + this.props.className },
            external__react_["createElement"](components_DateTimeSelector, { date: from.toDate(), disableBefore: disableBefore, disableAfter: disableAfter, onChange: function (newFrom) { return _this.changeFrom(newFrom); } }),
            external__react_["createElement"](components_DateTimeSelector, { date: to.toDate(), disableBefore: toDisableBefore, disableAfter: disableAfter, onChange: function (newTo) { return _this.changeTo(newTo); } })));
    };
    default_1.prototype.changeFrom = function (fromDate) {
        if (!isSame(this.state.from, fromDate, 'second')) {
            var from = external__moment_(fromDate);
            var state = { from: from };
            var toDate = void 0;
            if (this.state.to.isBefore(from)) {
                state.to = from.clone();
                toDate = state.to.toDate();
            }
            else {
                toDate = this.state.to.toDate();
            }
            this.setState(state);
            this.props.onChange({ from: fromDate, to: toDate });
        }
    };
    default_1.prototype.changeTo = function (to) {
        if (!isSame(this.state.to, to, 'second')) {
            this.setState({ to: external__moment_(to) });
            this.props.onChange({ from: this.state.from.toDate(), to: to });
        }
    };
    default_1.prototype.componentWillMount = function () {
        this.propsToState({}, this.props);
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        this.propsToState(this.props, nextProps);
    };
    default_1.prototype.propsToState = function (prevProps, nextProps) {
        var prevFromTo = prevProps.fromTo || { from: null, to: null };
        var nextFromTo = nextProps.fromTo || { from: null, to: null };
        var state = {};
        var changed = false;
        if (!isSame(prevFromTo.from, nextFromTo.from, 'second')) {
            state.from = external__moment_(nextFromTo.from);
            changed = true;
        }
        if (!isSame(prevFromTo.to, nextFromTo.to, 'second')) {
            state.to = external__moment_(nextFromTo.to);
            changed = true;
        }
        if (changed)
            this.setState(state);
    };
    default_1.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var prevProps = this.props;
        var prevState = this.state;
        return prevState.from !== nextState.from
            || prevState.to !== nextState.to
            || prevProps.disableBefore !== nextProps.disableBefore
            || prevProps.disableAfter !== nextProps.disableAfter;
    };
    default_1.defaultProps = {
        className: '',
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var components_FromToDateTimeSelector = (FromToDateTimeSelector_default_1);

// EXTERNAL MODULE: external "ssenkit.dropdown-anchor"
var external__ssenkit_dropdown_anchor_ = __webpack_require__(3);
var external__ssenkit_dropdown_anchor__default = /*#__PURE__*/__webpack_require__.n(external__ssenkit_dropdown_anchor_);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/types.ts
var types___read = (this && this.__read) || function (o, n) {
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

/* tslint:disable */
// param의 type이 맞는지 확인하기 위한 validator.
// 들어오는 param은 any 이어야 한다.
function isFromTo(obj) {
    return external__moment_["isDate"](obj.from) && external__moment_["isDate"](obj.to);
}
function isFrom(obj) {
    return external__moment_["isDate"](obj.from);
}
function isPeriod(obj) {
    return typeof obj.second === 'number';
}
function isLatest(obj) {
    return typeof obj.latest === 'string';
}
;
function dateRangeToParamRange(dateRange) {
    var format = 'YYYYMMDDHHmm';
    if (!dateRange) {
        return {
            startTime: external__moment_().format(format),
            endTime: external__moment_().format(format),
        };
    }
    if (isFromTo(dateRange)) {
        var fromTo = dateRange;
        return {
            startTime: external__moment_(fromTo.from).format(format),
            endTime: external__moment_(fromTo.to).format(format),
        };
    }
    if (isFrom(dateRange)) {
        var from = dateRange;
        return {
            startTime: external__moment_(from.from).format(format),
            endTime: external__moment_().format(format),
        };
    }
    if (isPeriod(dateRange)) {
        var period = dateRange;
        return {
            startTime: external__moment_().subtract(period.second, 'seconds').format(format),
            endTime: external__moment_().format(format),
        };
    }
    if (isLatest(dateRange)) {
        var latest = dateRange;
        var _a = types___read(/([0-9]+)([a-z]+)/.exec(latest.latest), 3), _ = _a[0], value = _a[1], unit = _a[2];
        //const unit = latest.latest.slice(-1);
        //const value = latest.latest.slice(0, -1);
        var endTime = external__moment_().format(format);
        var startTime = void 0;
        switch (unit) {
            case 'mi':
                startTime = external__moment_().subtract(value, 'minutes').format(format);
                break;
            case 'h':
                startTime = external__moment_().subtract(value, 'hours').format(format);
                break;
            case 'd':
                startTime = external__moment_().subtract(value, 'days').format(format);
                break;
            case 'w':
                startTime = external__moment_().subtract(value, 'weeks').format(format);
                break;
            case 'm':
                startTime = external__moment_().subtract(value, 'months').format(format);
                break;
            case 'y':
                startTime = external__moment_().subtract(value, 'years').format(format);
                break;
            default:
                throw new Error('알 수 없는 날짜 형식');
        }
        return {
            startTime: startTime,
            endTime: endTime,
        };
    }
}

// EXTERNAL MODULE: ./src/_library/ssenkit.date-select/components/FromToDateTimeDropDownSelector.scss
var FromToDateTimeDropDownSelector = __webpack_require__(9);
var FromToDateTimeDropDownSelector_default = /*#__PURE__*/__webpack_require__.n(FromToDateTimeDropDownSelector);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/FromToDateTimeDropDownSelectorButton.tsx
var FromToDateTimeDropDownSelectorButton___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FromToDateTimeDropDownSelectorButton___assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



function dateRangeToString(fromTo, format) {
    if (!fromTo)
        return '-';
    if (typeof fromTo.description === 'string') {
        return fromTo.description;
    }
    else if (isFromTo(fromTo)) {
        return external__moment_(fromTo.from).format(format) + ' ~ ' + external__moment_(fromTo.to).format(format);
    }
    throw new Error('FromTo 형식이 아니다.');
}
var FromToDateTimeDropDownSelectorButton_Component = /** @class */ (function (_super) {
    FromToDateTimeDropDownSelectorButton___extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.render = function () {
        var _a = this.props, fromTo = _a.fromTo, progressiveFromTo = _a.progressiveFromTo, children = _a.children, props = __rest(_a, ["fromTo", "progressiveFromTo", "children"]);
        var isProgressive = progressiveFromTo !== null && progressiveFromTo !== undefined;
        return (external__react_["createElement"]("button", FromToDateTimeDropDownSelectorButton___assign({ className: "btn btn-sm white dropdown-toggle", "aria-busy": isProgressive }, props), dateRangeToString(isProgressive ? progressiveFromTo : fromTo, 'YYYY년 MM월 DD일 HH:mm:ss')));
    };
    Component.displayName = 'FromToDateTimeDropDownSelectorButton';
    return Component;
}(external__react_["Component"]));
/* harmony default export */ var FromToDateTimeDropDownSelectorButton = (FromToDateTimeDropDownSelectorButton_Component);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/FromToDateTimeDownDownSelector.tsx
var FromToDateTimeDownDownSelector___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var FromToDateTimeDownDownSelector_default_1 = /** @class */ (function (_super) {
    FromToDateTimeDownDownSelector___extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            progressiveFromTo: null,
        };
        _this.onChange = function (progressiveFromTo) {
            _this.setState({ progressiveFromTo: progressiveFromTo });
        };
        _this.onComplete = function () {
            if (isFromTo(_this.state.progressiveFromTo)) {
                _this.props.onChange(_this.state.progressiveFromTo);
            }
            _this.setState({ progressiveFromTo: null });
            _this.anchor.close();
        };
        _this.onCancel = function () {
            _this.setState({ progressiveFromTo: null });
            _this.anchor.close();
        };
        _this.onAnchorClose = function () {
            _this.setState({ progressiveFromTo: null });
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        return (external__react_["createElement"](external__ssenkit_dropdown_anchor__default.a, { ref: function (r) { return _this.anchor = r; }, className: 'FromToDateTimeDownDownSelector ' + this.props.className, useOutboundClick: true, useAlternatePosition: this.props.useAlternatePosition, button: external__react_["cloneElement"](this.props.button, {
                fromTo: this.props.fromTo,
                progressiveFromTo: this.state.progressiveFromTo,
            }), onClose: this.onAnchorClose },
            external__react_["createElement"]("div", { role: "selector" },
                external__react_["createElement"](components_FromToDateTimeSelector, { fromTo: this.props.fromTo, onChange: this.onChange, disableBefore: this.props.disableBefore, disableAfter: this.props.disableAfter }),
                external__react_["createElement"]("div", { role: "buttons" },
                    external__react_["createElement"]("button", { className: "btn outline-1", onClick: this.onCancel }, "\uCDE8\uC18C"),
                    external__react_["createElement"]("button", { className: "btn light-blue", onClick: this.onComplete }, "\uC801\uC6A9")))));
    };
    default_1.defaultProps = {
        className: '',
        button: external__react_["createElement"](FromToDateTimeDropDownSelectorButton, null),
        useAlternatePosition: true,
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var FromToDateTimeDownDownSelector = (FromToDateTimeDownDownSelector_default_1);

// EXTERNAL MODULE: ./src/_library/ssenkit.date-select/components/DateRangeSelector.scss
var DateRangeSelector = __webpack_require__(10);
var DateRangeSelector_default = /*#__PURE__*/__webpack_require__.n(DateRangeSelector);

// EXTERNAL MODULE: ./src/_library/ssenkit.date-select/components/DefaultDateList.scss
var DefaultDateList = __webpack_require__(11);
var DefaultDateList_default = /*#__PURE__*/__webpack_require__.n(DefaultDateList);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/DefaultDateList.tsx

//import { translate, InjectedTranslateProps } from 'react-i18next';

//1h – 1m 데이터
//6h – 1m 데어터
//12h – 1분 데이터
//1D – 5분 데이터
//1W – 30분 데이터
//1M – 2시간 데이터
//1Y – 5년 데이터
/* harmony default export */ var components_DefaultDateList = (function (_a) {
    var dateRange = _a.dateRange, onSelect = _a.onSelect;
    return (external__react_["createElement"]("div", { className: "DefaultDateList" },
        external__react_["createElement"]("ul", null,
            external__react_["createElement"]("li", { onClick: function () { return onSelect({ latest: '1h' }); } }, 'date-range-1h'),
            external__react_["createElement"]("li", { onClick: function () { return onSelect({ latest: '6h' }); } }, 'date-range-6h'),
            external__react_["createElement"]("li", { onClick: function () { return onSelect({ latest: '12h' }); } }, 'date-range-12h')),
        external__react_["createElement"]("ul", null,
            external__react_["createElement"]("li", { onClick: function () { return onSelect({ latest: '1d' }); } }, 'date-range-1d'),
            external__react_["createElement"]("li", { onClick: function () { return onSelect({ latest: '1w' }); } }, 'date-range-1w'),
            external__react_["createElement"]("li", { onClick: function () { return onSelect({ latest: '1m' }); } }, 'date-range-1m'),
            external__react_["createElement"]("li", { onClick: function () { return onSelect({ latest: '1y' }); } }, 'date-range-1y'))));
});;

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/DateRangeSelector.tsx
var DateRangeSelector___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var DateRangeSelector_default_1 = /** @class */ (function (_super) {
    DateRangeSelector___extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onTabChange = function (tabIndex) {
            var state = { tabIndex: tabIndex };
            if (tabIndex === 1) {
                state.dateRange = {
                    from: external__moment_().startOf('day').toDate(),
                    to: external__moment_().toDate(),
                };
            }
            _this.setState(state);
        };
        _this.onDateCancel = function () {
            _this.props.onCancel();
        };
        _this.onDateComplete = function (dateRange) {
            _this.props.onComplete(dateRange);
        };
        _this.onDateChange = function (dateRange) {
            _this.props.onChange(dateRange);
            _this.setState({ dateRange: dateRange });
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        var selector, tab;
        var _a = this.state, tabIndex = _a.tabIndex, dateRange = _a.dateRange;
        if (tabIndex === 0) {
            tab = (external__react_["createElement"]("ul", { className: "nav nav-tabs" },
                external__react_["createElement"]("li", { className: "nav-item" },
                    external__react_["createElement"]("a", { className: "nav-link", onClick: function () { return _this.onTabChange(1); } }, "\uAE30\uAC04 \uC785\uB825")),
                external__react_["createElement"]("li", { className: "nav-item" },
                    external__react_["createElement"]("a", { className: "nav-link active" }, "\uAE30\uAC04 \uB9AC\uC2A4\uD2B8"))));
            selector = external__react_["cloneElement"](this.props.children, {
                dateRange: this.state.dateRange,
                onSelect: this.onDateComplete,
            });
        }
        else {
            tab = (external__react_["createElement"]("ul", { className: "nav nav-tabs" },
                external__react_["createElement"]("li", { className: "nav-item" },
                    external__react_["createElement"]("a", { className: "nav-link active" }, "\uAE30\uAC04 \uC785\uB825")),
                external__react_["createElement"]("li", { className: "nav-item" },
                    external__react_["createElement"]("a", { className: "nav-link", onClick: function () { return _this.onTabChange(0); } }, "\uAE30\uAC04 \uB9AC\uC2A4\uD2B8"))));
            selector = (external__react_["createElement"]("div", { role: "selector" },
                external__react_["createElement"](components_FromToDateTimeSelector, { fromTo: dateRange, disableBefore: this.props.disableBefore, disableAfter: this.props.disableAfter || external__moment_().endOf('day').toDate(), onChange: this.onDateChange }),
                external__react_["createElement"]("div", { role: "buttons" },
                    external__react_["createElement"]("button", { className: "btn outline-1", onClick: this.onDateCancel }, "\uCDE8\uC18C"),
                    external__react_["createElement"]("button", { className: "btn light-blue", onClick: function () { return _this.onDateComplete(dateRange); } }, "\uC801\uC6A9"))));
        }
        return (external__react_["createElement"]("div", { className: 'DateRangeSelector ' + this.props.className },
            external__react_["createElement"]("div", { role: "tab", className: "b-b b-primary nav-active-primary" }, tab),
            selector));
    };
    default_1.prototype.componentWillMount = function () {
        this.propsToState({}, this.props);
    };
    default_1.prototype.componentWillReceiveProps = function (nextProps) {
        this.propsToState(this.props, nextProps);
    };
    default_1.prototype.propsToState = function (prevProps, nextProps) {
        if (prevProps.dateRange !== nextProps.dateRange) {
            var prevState = this.state || {};
            var state = {};
            state.dateRange = nextProps.dateRange;
            var nextTabIndex = this.getTabIndex(nextProps.dateRange);
            if (prevState.tabIndex !== nextTabIndex) {
                state.tabIndex = nextTabIndex;
            }
            this.setState(state);
        }
    };
    default_1.prototype.getTabIndex = function (dateRange) {
        return isFromTo(dateRange) && !dateRange.description ? 1 : 0;
    };
    default_1.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var prevState = this.state;
        return prevState.dateRange !== nextState.dateRange || prevState.tabIndex !== nextState.tabIndex;
    };
    default_1.defaultProps = {
        className: '',
        date: { from: external__moment_().startOf('day').toDate() },
        children: external__react_["createElement"](components_DefaultDateList, null),
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var components_DateRangeSelector = (DateRangeSelector_default_1);

// EXTERNAL MODULE: ./src/_library/ssenkit.date-select/components/DateRangeDropDownSelector.scss
var DateRangeDropDownSelector = __webpack_require__(12);
var DateRangeDropDownSelector_default = /*#__PURE__*/__webpack_require__.n(DateRangeDropDownSelector);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/DateRangeDropDownSelectorButton.tsx
var DateRangeDropDownSelectorButton___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DateRangeDropDownSelectorButton___assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var DateRangeDropDownSelectorButton___rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



function DateRangeDropDownSelectorButton_dateRangeToString(dateRange, format) {
    if (!dateRange)
        return '-';
    if (typeof dateRange.description === 'string') {
        return dateRange.description;
    }
    else if (isLatest(dateRange)) {
        var latest = dateRange;
        return 'date-range-' + latest.latest;
    }
    else if (isFromTo(dateRange)) {
        var fromTo = dateRange;
        return external__moment_(fromTo.from).format(format) + ' ~ ' + external__moment_(fromTo.to).format(format);
    }
    else if (isFrom(dateRange)) {
        var from = dateRange;
        return external__moment_(from.from).format(format) + ' ~';
    }
    //if (isPeriod(dateRange)) {
    //  const period: Period = dateRange as Period;
    //}
    throw new Error('알 수 없는 DateRange 형식. description도 없고, FromTo나 From도 아니다.');
}
var DateRangeDropDownSelectorButton_Component = /** @class */ (function (_super) {
    DateRangeDropDownSelectorButton___extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.render = function () {
        var _a = this.props, dateRange = _a.dateRange, progressiveDateRange = _a.progressiveDateRange, children = _a.children, props = DateRangeDropDownSelectorButton___rest(_a, ["dateRange", "progressiveDateRange", "children"]);
        var isProgressive = progressiveDateRange !== null && progressiveDateRange !== undefined;
        return (external__react_["createElement"]("button", DateRangeDropDownSelectorButton___assign({ className: "btn btn-sm white dropdown-toggle", "aria-busy": isProgressive }, props), DateRangeDropDownSelectorButton_dateRangeToString(isProgressive ? progressiveDateRange : dateRange, 'YYYY년 MM월 DD일 HH:mm:ss')));
    };
    Component.displayName = 'DateRangeDropDownSelectorButton';
    return Component;
}(external__react_["Component"]));
;
/* harmony default export */ var DateRangeDropDownSelectorButton = (DateRangeDropDownSelectorButton_Component);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/components/DateRangeDropDownSelector.tsx
var DateRangeDropDownSelector___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DateRangeDropDownSelector_default_1 = /** @class */ (function (_super) {
    DateRangeDropDownSelector___extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            progressiveDateRange: null,
        };
        _this.onChange = function (progressiveDateRange) {
            _this.setState({ progressiveDateRange: progressiveDateRange });
        };
        _this.onComplete = function (dateRange) {
            _this.setState({ progressiveDateRange: null });
            _this.props.onChange(dateRange);
            _this.anchor.close();
        };
        _this.onCancel = function () {
            _this.setState({ progressiveDateRange: null });
            _this.anchor.close();
        };
        _this.onAnchorClose = function () {
            _this.setState({ progressiveDateRange: null });
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        return (external__react_["createElement"](external__ssenkit_dropdown_anchor__default.a, { ref: function (r) { return _this.anchor = r; }, className: 'DateRangeDropDownSelector ' + this.props.className, useOutboundClick: true, useAlternatePosition: this.props.useAlternatePosition, button: external__react_["cloneElement"](this.props.button, {
                dateRange: this.props.dateRange,
                progressiveDateRange: this.state.progressiveDateRange,
            }), onClose: this.onAnchorClose },
            external__react_["createElement"](components_DateRangeSelector, { dateRange: this.props.dateRange, disableBefore: this.props.disableBefore, disableAfter: this.props.disableAfter, onChange: this.onChange, onCancel: this.onCancel, onComplete: this.onComplete }, this.props.children)));
    };
    default_1.defaultProps = {
        className: '',
        button: external__react_["createElement"](DateRangeDropDownSelectorButton, null),
        useAlternatePosition: true,
    };
    return default_1;
}(external__react_["Component"]));
/* harmony default export */ var components_DateRangeDropDownSelector = (DateRangeDropDownSelector_default_1);

// CONCATENATED MODULE: ./src/_library/ssenkit.date-select/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DateSelector", function() { return components_DateSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MonthSelector", function() { return components_MonthSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DateInput", function() { return DateInput; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TimeInput", function() { return TimeInput; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DateTimeSelector", function() { return components_DateTimeSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FromToDateTimeSelector", function() { return components_FromToDateTimeSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FromToDateTimeDropDownSelector", function() { return FromToDateTimeDownDownSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DateRangeSelector", function() { return components_DateRangeSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DateRangeDropDownSelector", function() { return components_DateRangeDropDownSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DefaultDateList", function() { return components_DefaultDateList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isFromTo", function() { return isFromTo; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isFrom", function() { return isFrom; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isPeriod", function() { return isPeriod; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isLatest", function() { return isLatest; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "dateRangeToParamRange", function() { return dateRangeToParamRange; });













/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map