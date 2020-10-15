(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./components/core/Icon/default.jsx":
/*!******************************************!*\
  !*** ./components/core/Icon/default.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icomoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icomoon */ "./node_modules/react-icomoon/dist/index.js");
/* harmony import */ var react_icomoon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icomoon__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\core\\Icon\\default.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var iconSet = __webpack_require__(/*! ../../../resources/Icons/selection.json */ "./resources/Icons/selection.json");

var Icon = function Icon(_ref) {
  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  return __jsx(react_icomoon__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    iconSet: iconSet
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 32
    }
  }));
};

_c = Icon;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

var _c;

$RefreshReg$(_c, "Icon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/core/Logo/default.jsx":
/*!******************************************!*\
  !*** ./components/core/Logo/default.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\core\\Logo\\default.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/*Boostrap Component*/


/*
  Description:  Set the logo image depending of the device type
  Author:       Maria Fernanda García M
  Date:         15/01/2020
  props:        logoType: type of the device (mobile, header, mobileFooter)
*/

var Logo = function Logo(props) {
  var logos = {
    footer: '/footerLogo.svg',
    mobileFooter: '/mobileLogo.svg',
    header: '/HeaderLogo.png'
  };
  var type = props.logoType || 'header';
  return __jsx("div", {
    className: "Logo Logo_".concat(type),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "".concat(logos[type]),
    alt: "El Espectador",
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

_c = Logo;
Logo.propTypes = {
  logoType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

var _c;

$RefreshReg$(_c, "Logo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/core/SiteLinks/SiteLinks.jsx":
/*!*************************************************!*\
  !*** ./components/core/SiteLinks/SiteLinks.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\core\\SiteLinks\\SiteLinks.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
Description:  Get the site links from an Object
Author:       Maria Fernanda García M
Date:         18/02/2020
props:        linksData --> Object with the links
*/

var siteLinks = function siteLinks(props) {
  //Object with links
  var linksData = props.linksData; //Convert the object keys into an array

  var name = Object.keys(linksData); //map the array to get the links code to return it

  var link = name.map(function (l) {
    var li = __jsx("li", {
      key: l,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: linksData[l],
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, l));

    return li;
  });
  return link;
};

/* harmony default export */ __webpack_exports__["default"] = (siteLinks);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/core/SocialMedia/default.jsx":
/*!*************************************************!*\
  !*** ./components/core/SocialMedia/default.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _properties_index_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../properties/index.json */ "./properties/index.json");
var _properties_index_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../properties/index.json */ "./properties/index.json", 1);
/* harmony import */ var _Icon_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icon/default */ "./components/core/Icon/default.jsx");





var _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\core\\SocialMedia\\default.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/*Resources*/


/*Images*/
//import tvIcon from '~/resources/images/tvIcon.svg';

/*
Description:  return an icon set with the social media buttons
Author:       Maria Fernanda García M
Date:         15/01/2020
props:        location: location of the component in the page (footer or header)
*/

var SocialMedia = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SocialMedia, _Component);

  var _super = _createSuper(SocialMedia);

  function SocialMedia(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SocialMedia);

    return _super.call(this, props); //Get site properties
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SocialMedia, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }
      }, __jsx("nav", {
        className: "SocialNetworks",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: _properties_index_json__WEBPACK_IMPORTED_MODULE_6__.exclusiveContentLink,
        className: "SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location, "LockIcon"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }
      }, __jsx(_Icon_default__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "lock",
        className: "SocialNetworks-Icon_".concat(this.props.location, "SvgHeight"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      })), __jsx("a", {
        href: _properties_index_json__WEBPACK_IMPORTED_MODULE_6__.facebookURL,
        className: "SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location, "FbIcon"),
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, __jsx(_Icon_default__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "facebook",
        className: "SocialNetworks-Icon_".concat(this.props.location, "SvgHeight"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      })), __jsx("a", {
        href: _properties_index_json__WEBPACK_IMPORTED_MODULE_6__.twitterURL,
        className: "SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location, "TwIcon"),
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, __jsx(_Icon_default__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "twitter",
        className: "SocialNetworks-Icon_".concat(this.props.location, "SvgHeight"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      })), __jsx("a", {
        href: _properties_index_json__WEBPACK_IMPORTED_MODULE_6__.youtubeURL,
        className: "SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location, "YtIcon"),
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, __jsx(_Icon_default__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "youtube",
        className: "SocialNetworks-Icon_".concat(this.props.location, "SvgHeight"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      })), __jsx("a", {
        href: _properties_index_json__WEBPACK_IMPORTED_MODULE_6__.instagramURL,
        className: "SocialNetworks-Icon SocialNetworks-Icon_".concat(this.props.location, "IgIcon"),
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }, __jsx(_Icon_default__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: "instagram",
        className: "SocialNetworks-Icon_".concat(this.props.location, "SvgHeight"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return SocialMedia;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/global/footer/default.jsx":
/*!**********************************************!*\
  !*** ./components/global/footer/default.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Icon/default.jsx */ "./components/core/Icon/default.jsx");
/* harmony import */ var _core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/SiteLinks/SiteLinks.jsx */ "./components/core/SiteLinks/SiteLinks.jsx");
/* harmony import */ var _properties_index_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../properties/index.json */ "./properties/index.json");
var _properties_index_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../properties/index.json */ "./properties/index.json", 1);
/* harmony import */ var _core_SocialMedia_default_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/SocialMedia/default.jsx */ "./components/core/SocialMedia/default.jsx");
/* harmony import */ var _core_Logo_default_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/Logo/default.jsx */ "./components/core/Logo/default.jsx");







var _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\global\\footer\\default.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/*Boostrap Component*/



/*React Components*/





/*Images*/

/*
Description:  Show footer with all its features
Author:       Maria Fernanda García M
Date:         15/01/2020
props:        siteProperties --> Properties of the site
*/

var Footer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    //save the state of the window width
    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "printSections", function (device, sections) {
      //Set     le of the menu depends of the device type
      var classLi = device === 'desktop' ? 'Footer-SectionsDesktopMenuItems' : 'Footer-BodyMobileMenuItems'; //Map to her the names from 'arrNameSection' an the code of the links
      //const footerSection = sections.values();

      var name = Object.keys(sections);
      var result = name.map(function (footerSection) {
        var div = __jsx("li", {
          className: classLi,
          key: footerSection.name,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 9
          }
        }, __jsx("a", {
          href: sections[footerSection],
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        }, footerSection));

        return div;
      });
      return result;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "mobileMenu", function () {
      var mobileCode = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"], {
        className: "Footer-MobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }, "Secciones"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        variant: "link",
        eventKey: "0",
        className: "Footer-ButtonMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerSecciones",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }
      }, _this.printSections('mobile', _this.sections))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }
      }, "Servicios "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        variant: "link",
        eventKey: "2",
        className: "Footer-ButtonMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "2",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerRedesServicios",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 15
        }
      }, __jsx("li", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/login/",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 19
        }
      }, "Iniciar Sesi\xF3n")), __jsx("li", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/suscripcion-digital/",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 19
        }
      }, "Suscr\xEDbete")), __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.servicios,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, "Red de portales"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        variant: "link",
        eventKey: "1",
        className: "Footer-ButtonMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "1",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerRedesServicios",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 15
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.redPortales,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }
      }));

      return mobileCode;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "desktopMenu", function () {
      var desktopCode = __jsx("div", {
        className: "Footer-DesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: 4,
        md: 12,
        sm: 12,
        className: "Footer-ColumnDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 15
        }
      }, "Secciones")), __jsx("ul", {
        className: "Footer-SectionsDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }
      }, _this.printSections('desktop', _this.sections))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: 3,
        md: 4,
        sm: 4,
        className: "Footer-DivisionDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }
      }, "Servicios")), __jsx("ul", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.servicios,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Footer-DivisionDesktopMenu_redes",
        lg: 5,
        md: 8,
        sm: 8,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 15
        }
      }, "Red de portales")), __jsx("ul", {
        className: "Footer-SectionLinksDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.redPortales,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 15
        }
      })))));

      return desktopCode;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "defineMenu", function () {
      if (_this.isMobile) {
        return _this.mobileMenu();
      } else {
        return _this.desktopMenu();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getSubtype", function () {
      if (_this.props.globalContent) {
        return _this.props.globalContent.subtype === 'column' ? true : false;
      }
    });

    _this.state = {
      width: true ? window.innerWidth : undefined,
      userCustomFields: null,
      userWantsAds: false,
      flagFetch: false,
      tpObject: true ? window['tp'] : undefined,
      userSubs: null,
      loggedIn: false,
      isSubscriptor: true,
      isMobile: false // sectionsName: [],

    }; //Get site properties

    var siteProp = _properties_index_json__WEBPACK_IMPORTED_MODULE_11__; //Get the group of links of 'redPortales'

    _this.redPortales = siteProp.Red_de_portales; //Get the group of links of 'servicios'

    _this.servicios = siteProp.Servicios; //Links for suscribe and login

    _this.suscribeLink = siteProp.suscribeLink; // this.loginLink = siteProperties.loginLink;

    _this.sections = siteProp.Secciones;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
       true && window.addEventListener('resize', this.handleWindowSizeChange);
       true && window.addEventListener('load', this.handleTP); // this.fetchSectionGroup();
      // this.fetchFooterItems();
    } //Get the json sections obtained from the API and return them to render

  }, {
    key: "render",
    value: function render() {
      //control the window width
      this.isMobile = this.state.width < 576;
      return __jsx("div", {
        className: "Footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "Footer-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "Footer-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 6,
        sm: 4,
        md: 5,
        lg: 6,
        xl: 6,
        className: "Footer-Logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 17
        }
      }, __jsx(_core_Logo_default_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        logoType: "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 17
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 17
        }
      }, __jsx(_core_Logo_default_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        logoType: "mobileFooter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 17
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 6,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        className: "Footer-Button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        href: "https://www.elespectador.com/suscripcion-digital/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 17
        }
      }, "Suscr\xEDbete")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 4,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2,
        className: "Footer-TextFollow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 17
        }
      }, "S\xEDganos en")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 8,
        sm: 5,
        md: 4,
        lg: 3,
        xl: 3,
        className: "Footer-Social",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 15
        }
      }, __jsx(_core_SocialMedia_default_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        location: "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "Footer-Line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }
      }), this.defineMenu(), __jsx("div", {
        className: "Footer-Info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-Contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/servicio-al-cliente/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 15
        }
      }, __jsx("img", {
        className: "Footer-ContactLogo",
        src: "https://cloudfront-us-east-1.images.arcpublishing.com/sandbox.elespectador/DOZEI6JMMBG75AQKY644QJYOYQ.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "Footer-ContactInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Footer-ContactTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/servicio-al-cliente/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 19
        }
      }, "Cont\xE1ctenos")), __jsx("div", {
        className: "Footer-ContactText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "Footer-ContactCode",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 17
        }
      }, "Servicio al cliente: L\xCDNEA NACIONAL: 01 8000 510903 EN BOGOT\xC1: 4055540, ", __jsx("a", {
        href: "mailto:servicioalcliente@elespectador.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 91
        }
      }, "servicioalcliente@elespectador.com.")))), __jsx("div", {
        className: "Footer-Contact_line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "Footer-Members",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "Footer-MembersTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 15
        }
      }, "Miembros de"), __jsx("a", {
        href: "https://www.iabcolombia.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/iab.png",
        alt: "IAB Colombia",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 17
        }
      })), __jsx("a", {
        href: "https://ami.org.co/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/ami.png",
        alt: "Asociaci\xF3n Colombiana de Medios de Informaci\xF3n",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 16
        }
      }))), __jsx("div", {
        className: "Footer-Contact_line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "Footer-Sic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "https://www.sic.gov.co/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/sicLogo.png",
        alt: "Superintendencia de industria y comercio",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 15
        }
      })))), __jsx("div", {
        className: "Footer-TycLinks",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 13
        }
      }, "El uso de este sitio web implica la aceptaci\xF3n de los ", __jsx("a", {
        href: "https://www.elespectador.com/terminos#terminos-y-condiciones",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 67
        }
      }, " T\xE9rminos y Condiciones "), " y ", __jsx("a", {
        href: "https://www.elespectador.com/terminos#politica-de-tratamiento-de-datos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 169
        }
      }, " Pol\xEDticas de privacidad"), " de COMUNICAN S.A. Todos los Derechos Reservados D.R.A. Prohibida su reproducci\xF3n total o parcial, as\xED como su traducci\xF3n a cualquier idioma sin la autorizaci\xF3n escrita de su titular. Reproduction in whole or in part, or translation without written permission is  prohibited. All rights reserved 2020"))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/react-icomoon/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icomoon/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.iconList=exports["default"]=void 0;function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var style={display:"inline-block",stroke:"currentColor",fill:"currentColor"},IcoMoon=function(a){var b=a.iconSet,c=a.icon,d=a.size,e=a.disableFill,f=a.removeInlineStyle,g=_objectWithoutProperties(a,["iconSet","icon","size","disableFill","removeInlineStyle"]);if(!b||!c)return console.warn("The \"iconSet\" and \"icon\" props are required."),null;var h=b.icons.find(function(a){return a.properties.name===c});if(!h)return console.warn("\"".concat(c,"\" icon not found.")),null;d&&(style.width=d,style.height=d),g.style=_objectSpread(_objectSpread({},f?{}:style),g.style||{});var i=h.icon.width,j=void 0===i?"1024":i;g.viewBox="0 0 ".concat(j," 1024");var k=h.icon.paths.map(function(a,b){return(0,_react.createElement)("path",_objectSpread({d:a,key:c+b},e?{}:h.icon.attrs[b]))});return(0,_react.createElement)("svg",g,k)},_default=IcoMoon;exports["default"]=_default;var iconList=function(a){return a&&Array.isArray(a.icons)?a.icons.map(function(a){return a.properties.name}):null};exports.iconList=iconList;

/***/ }),

/***/ "./properties/index.json":
/*!*******************************!*\
  !*** ./properties/index.json ***!
  \*******************************/
/*! exports provided: siteName, siteLogo, siteDomainURL, twitterURL, facebookURL, instagramURL, youtubeURL, suscribeLink, exclusiveContentLink, sportsLiveLink, loginLink, sites, Red_de_portales, Servicios, NewsLetter, Secciones, Contenidos_Patrocinados, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"siteName\":\"El Espectador\",\"siteLogo\":\"https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png\",\"siteDomainURL\":\"https://www.elespectador.com\",\"twitterURL\":\"https://twitter.com/elespectador\",\"facebookURL\":\"https://www.facebook.com/elespectadorcom\",\"instagramURL\":\"https://www.instagram.com/elespectador/\",\"youtubeURL\":\"https://www.youtube.com/user/Elespectadorcom?sub_confirmation=1\",\"suscribeLink\":\"https://www.elespectador.com/suscripcion-digital/\",\"exclusiveContentLink\":\"https://www.elespectador.com/contenido-exclusivo/\",\"sportsLiveLink\":\"https://www.elespectador.com/deportes/partidos-de-futbol-hoy-en-vivo/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=Boton-Parrilla-Header\",\"loginLink\":\"https://www.elespectador.com/login/\",\"sites\":[\"el-espectador\"],\"Red_de_portales\":{\"circulodeexperiencias.com\":\"https://www.facebook.com/CirculoDeExperienciasElEspectador/\",\"foros.elespectador.com\":\"http://foros.elespectador.com/\",\"bibo.elespectador.com\":\"http://bibo.elespectador.com/\",\"caracolnext.com\":\"https://www.caracolnext.com/\",\"caracoltv.com\":\"https://www.caracoltv.com/\",\"noticiascaracol.com\":\"https://www.noticiascaracol.com\",\"golcaracol.com\":\"https://www.golcaracol.com\",\"caracolplay.com\":\"https://www.caracolplay.com\",\"caracoltvcorporativo.com\":\"https://www.caracoltvcorporativo.com/\",\"bluradio.com\":\"https://www.bluradio.com/\",\"lakalle.com\":\"https://www.lakalle.com\",\"hjck.com\":\"https://hjck.com/\",\"shock.co\":\"https://www.shock.co/\",\"Volk\":\"https://volkgames.com/\"},\"Servicios\":{\"Paute con nosotros\":\"https://www.elespectador.com/paute-con-nosotros/\",\"Suscripciones impresas\":\"http://suscripciones.elespectador.com/\",\"Círculo de experiencias\":\"https://www.facebook.com/CirculoDeExperienciasElEspectador/\",\"Foros El Espectador\":\"http://foros.elespectador.com/\",\"Edictos y avisos judiciales\":\"http://judiciales.elespectador.com/\"},\"NewsLetter\":{\"user\":\"043bd90b2533e322d34ce78476703751\",\"password\":\"8bdd08542fbe197f348d38c1ba986923\",\"server\":\"https://personalizados.elespectador.com/service-nw-pc\"},\"Secciones\":{\"Opinión\":\"https://www.elespectador.com/opinion/\",\"Salud\":\"https://www.elespectador.com/noticias/salud/\",\"Judicial\":\"https://www.elespectador.com/noticias/judicial/\",\"Educación\":\"https://www.elespectador.com/noticias/educacion/\",\"Política\":\"https://www.elespectador.com/noticias/politica/\",\"Actualidad\":\"https://www.elespectador.com/noticias/actualidad/\",\"Investigación\":\"https://www.elespectador.com/noticias/investigacion/\",\"Alto Turmequé\":\"https://www.elespectador.com/noticias/alto-turmeque/\",\"Economía\":\"https://www.elespectador.com/noticias/economia/\",\"Blogs\":\"https://blogs.elespectador.com/\",\"Bogotá\":\"https://www.elespectador.com/noticias/bogota/\",\"Mundo Destinos\":\"https://www.elespectador.com/noticias/mundo-destinos/\",\"Nacional\":\"https://www.elespectador.com/noticias/nacional/\",\"Autos\":\"https://www.elespectador.com/noticias/autos/\",\"El Mundo\":\"https://www.elespectador.com/noticias/el-mundo/\",\"Deportes\":\"https://www.elespectador.com/deportes/\",\"Tecnología\":\"https://www.elespectador.com/noticias/tecnologia/\",\"Entretenimiento\":\"https://www.elespectador.com/entretenimiento/\",\"Cultura\":\"https://www.elespectador.com/noticias/cultura/\",\"Horóscopo\":\"https://www.elespectador.com/entretenimiento/horoscopo/\",\"Ciencia\":\"https://www.elespectador.com/noticias/ciencia/\",\"Colombia 2020\":\"https://www.elespectador.com/colombia2020/\",\"Medio Ambiente\":\"https://www.elespectador.com/noticias/medio-ambiente/\",\"Cromos\":\"https://www.elespectador.com/cromos/\"},\"Contenidos_Patrocinados\":{\"Especiales Miltimedia\":\"/contenidos-patrocinados/especiales-multimedia\",\"Formatos Premium\":\"https://www.elespectador.com/opinion/\",\"Videos\":\"https://www.elespectador.com/noticias/judicial/\"}}");

/***/ }),

/***/ "./resources/Icons/selection.json":
/*!****************************************!*\
  !*** ./resources/Icons/selection.json ***!
  \****************************************/
/*! exports provided: IcoMoonType, icons, height, metadata, preferences, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"IcoMoonType\":\"selection\",\"icons\":[{\"icon\":{\"paths\":[\"M480 701.269v0c-18.643-6.589-32-24.369-32-45.269 0-26.51 21.49-48 48-48s48 21.49 48 48c0 20.9-13.357 38.679-32 45.269v83.019c0 8.42-7.163 15.712-16 15.712-8.578 0-16-7.035-16-15.712v-83.019zM256 448v0 0c-53.045 0.15-96 42.866-96 96.303v319.393c0 53.187 43.059 96.303 96.281 96.303h479.438c53.175 0 96.281-42.772 96.281-96.303v-319.393c0-53.093-42.907-96.151-96-96.303v-112.025c0-132.535-107.721-239.976-240-239.976-132.548 0-240 107.415-240 239.976v112.025zM352 448v-111.973c0-79.731 64.471-144.027 144-144.027 79.367 0 144 64.483 144 144.027v111.973h-288z\"],\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"lock\"],\"grid\":32},\"attrs\":[{}],\"properties\":{\"order\":1,\"id\":0,\"name\":\"lock\",\"prevSize\":32,\"code\":59648},\"setIdx\":0,\"setId\":6,\"iconIdx\":0},{\"icon\":{\"paths\":[\"M851.328 946.784l-83.968-23.040-0.192-232.256 80.32 22.592 115.808-432.288-586.624-157.184-38.656 144.192h-66.176l59.616-222.464 710.176 190.272-190.304 710.176zM737.248 1024h-737.248v-735.264h737.248v735.264zM673.312 352.672h-609.376v447.52h609.376v-447.52zM251.168 671.776l73.056-118.144 73.056 73.632 100.448-151.264 105.056 260.288h-465.792l59.36-118.72 54.816 54.208zM207.488 546.752c-26.496 0-47.968-21.44-47.968-47.936s21.472-47.936 47.968-47.936 47.936 21.44 47.936 47.936-21.44 47.936-47.936 47.936z\"],\"width\":1040,\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"pictures\",\"images\",\"photos\",\"polaroid\"],\"grid\":32},\"attrs\":[],\"properties\":{\"id\":1,\"order\":20,\"prevSize\":32,\"code\":59655,\"name\":\"pictures\"},\"setIdx\":0,\"setId\":6,\"iconIdx\":1},{\"icon\":{\"paths\":[\"M225.835 414.165l256 256c16.683 16.683 43.691 16.683 60.331 0l256-256c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z\"],\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"chevron-down\"],\"grid\":24},\"attrs\":[{}],\"properties\":{\"order\":1,\"id\":0,\"prevSize\":24,\"code\":59649,\"name\":\"chevron-down\"},\"setIdx\":1,\"setId\":5,\"iconIdx\":0},{\"icon\":{\"paths\":[\"M798.165 609.835l-256-256c-16.683-16.683-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z\"],\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"chevron-up\"],\"grid\":24},\"attrs\":[{}],\"properties\":{\"order\":16,\"id\":1,\"prevSize\":24,\"code\":59650,\"name\":\"chevron-up\"},\"setIdx\":1,\"setId\":5,\"iconIdx\":1},{\"icon\":{\"paths\":[\"M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"chevron-left\"],\"grid\":24},\"attrs\":[],\"properties\":{\"id\":2,\"order\":21,\"prevSize\":24,\"name\":\"chevron-left\",\"code\":59657},\"setIdx\":1,\"setId\":5,\"iconIdx\":2},{\"icon\":{\"paths\":[\"M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"chevron-right\"],\"grid\":24},\"attrs\":[],\"properties\":{\"id\":3,\"order\":22,\"prevSize\":24,\"name\":\"chevron-right\",\"code\":59658},\"setIdx\":1,\"setId\":5,\"iconIdx\":3},{\"icon\":{\"paths\":[\"M512 439.603l-362.035-362.035-72.397 72.397 362.035 362.035-362.035 362.035 72.397 72.397 362.035-362.035 362.035 362.035 72.397-72.397-362.035-362.035 362.035-362.035-72.397-72.397-362.035 362.035z\"],\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"close\"],\"grid\":20},\"attrs\":[{}],\"properties\":{\"order\":1,\"id\":0,\"prevSize\":20,\"code\":59652,\"name\":\"close\"},\"setIdx\":2,\"setId\":4,\"iconIdx\":0},{\"icon\":{\"paths\":[\"M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"minus\",\"subtract\",\"minimize\",\"line\"],\"defaultCode\":59915,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"minus, subtract\",\"name\":\"minus\",\"id\":0,\"order\":2,\"prevSize\":32,\"code\":59915},\"setIdx\":3,\"setId\":3,\"iconIdx\":0},{\"icon\":{\"paths\":[\"M864 128l-480 480-224-224-160 160 384 384 640-640z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"checkmark\",\"tick\",\"correct\",\"accept\",\"ok\"],\"defaultCode\":59920,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"checkmark, tick\",\"name\":\"checkmark\",\"id\":1,\"order\":23,\"prevSize\":32,\"code\":59920},\"setIdx\":3,\"setId\":3,\"iconIdx\":1},{\"icon\":{\"paths\":[\"M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z\",\"M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"link\",\"chain\",\"url\",\"uri\",\"anchor\"],\"defaultCode\":59851,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"link, chain\",\"name\":\"link\",\"id\":2,\"order\":2,\"prevSize\":32,\"code\":59851},\"setIdx\":3,\"setId\":3,\"iconIdx\":2},{\"icon\":{\"paths\":[\"M877.254 621.254l-320 320c-24.992 24.994-65.514 24.994-90.508 0l-320-320c-24.994-24.994-24.994-65.516 0-90.51 24.994-24.996 65.516-24.996 90.51 0l210.744 210.746v-613.49c0-35.346 28.654-64 64-64s64 28.654 64 64v613.49l210.746-210.746c12.496-12.496 28.876-18.744 45.254-18.744s32.758 6.248 45.254 18.746c24.994 24.994 24.994 65.514 0 90.508z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"arrow-down\",\"down\",\"download\",\"bottom\"],\"defaultCode\":59966,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"arrow-down2, down2\",\"name\":\"arrow-down2\",\"id\":3,\"order\":24,\"prevSize\":32,\"code\":59966},\"setIdx\":3,\"setId\":3,\"iconIdx\":3},{\"icon\":{\"paths\":[\"M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z\"],\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"arrow-right\",\"right\",\"next\"],\"grid\":16},\"attrs\":[{}],\"properties\":{\"order\":1,\"id\":4,\"prevSize\":32,\"name\":\"arrow-right\",\"code\":59659},\"setIdx\":3,\"setId\":3,\"iconIdx\":4},{\"icon\":{\"paths\":[\"M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z\"],\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"search\",\"magnifier\",\"magnifying-glass\",\"inspect\",\"find\"],\"grid\":16},\"attrs\":[{}],\"properties\":{\"order\":1,\"id\":5,\"prevSize\":32,\"code\":59653,\"name\":\"search\"},\"setIdx\":3,\"setId\":3,\"iconIdx\":5},{\"icon\":{\"paths\":[\"M325.8 457.4v111.8h184.8c-7.4 48-55.8 140.6-184.8 140.6-111.2 0-202-92.2-202-205.8s90.8-205.8 202-205.8c63.4 0 105.6 27 129.8 50.2l88.4-85.2c-56.8-53-130.4-85.2-218.2-85.2-180.2 0.2-325.8 145.8-325.8 326s145.6 325.8 325.8 325.8c188 0 312.8-132.2 312.8-318.4 0-21.4-2.4-37.8-5.2-54h-307.6z\",\"M1024 448h-96v-96h-96v96h-96v96h96v96h96v-96h96z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"google-plus\",\"brand\",\"social\"],\"defaultCode\":60043,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"google-plus, brand5\",\"name\":\"google-plus\",\"order\":12,\"id\":6,\"prevSize\":32,\"code\":60043},\"setIdx\":3,\"setId\":3,\"iconIdx\":6},{\"icon\":{\"paths\":[\"M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"facebook\",\"brand\",\"social\"],\"defaultCode\":60048,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"facebook, brand10\",\"name\":\"facebook\",\"order\":8,\"id\":7,\"prevSize\":32,\"code\":60048},\"setIdx\":3,\"setId\":3,\"iconIdx\":7},{\"icon\":{\"paths\":[\"M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z\",\"M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z\",\"M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"instagram\",\"brand\",\"social\"],\"defaultCode\":60050,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"instagram, brand12\",\"name\":\"instagram\",\"order\":11,\"id\":8,\"prevSize\":32,\"code\":60050},\"setIdx\":3,\"setId\":3,\"iconIdx\":8},{\"icon\":{\"paths\":[\"M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"twitter\",\"brand\",\"tweet\",\"social\"],\"defaultCode\":60054,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"twitter, brand16\",\"name\":\"twitter\",\"order\":9,\"id\":9,\"prevSize\":32,\"code\":60054},\"setIdx\":3,\"setId\":3,\"iconIdx\":9},{\"icon\":{\"paths\":[\"M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"youtube\",\"brand\",\"social\"],\"defaultCode\":60061,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"youtube, brand21\",\"name\":\"youtube\",\"order\":10,\"id\":10,\"prevSize\":32,\"code\":60061},\"setIdx\":3,\"setId\":3,\"iconIdx\":10},{\"icon\":{\"paths\":[\"M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z\",\"M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z\"],\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"cancel-circle\",\"close\",\"remove\",\"delete\"],\"grid\":16},\"attrs\":[{}],\"properties\":{\"code\":59917,\"ligatures\":\"cancel-circle, close\",\"name\":\"cancel-circle\",\"order\":13,\"id\":11,\"prevSize\":32},\"setIdx\":3,\"setId\":3,\"iconIdx\":11},{\"icon\":{\"paths\":[\"M128 128h320v768h-320zM576 128h320v768h-320z\"],\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"pause\",\"player\"],\"grid\":16},\"attrs\":[{}],\"properties\":{\"order\":26,\"id\":12,\"prevSize\":32,\"code\":59660,\"name\":\"pause\"},\"setIdx\":3,\"setId\":3,\"iconIdx\":12},{\"icon\":{\"paths\":[\"M512 92.774l429.102 855.226h-858.206l429.104-855.226zM512 0c-22.070 0-44.14 14.882-60.884 44.648l-437.074 871.112c-33.486 59.532-5 108.24 63.304 108.24h869.308c68.3 0 96.792-48.708 63.3-108.24h0.002l-437.074-871.112c-16.742-29.766-38.812-44.648-60.882-44.648v0z\",\"M576 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z\",\"M512 704c-35.346 0-64-28.654-64-64v-192c0-35.346 28.654-64 64-64s64 28.654 64 64v192c0 35.346-28.654 64-64 64z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"warning\",\"sign\"],\"defaultCode\":59911,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"warning, sign\",\"name\":\"warning\",\"order\":16,\"id\":13,\"prevSize\":32,\"code\":59911},\"setIdx\":3,\"setId\":3,\"iconIdx\":13},{\"icon\":{\"paths\":[\"M896 704v-512c0-35.2-28.8-64-64-64h-640c-35.2 0-64 28.8-64 64v512h-128v192h1024v-192h-128zM640 832h-256v-64h256v64zM832 704h-640v-511.886c0.034-0.040 0.076-0.082 0.114-0.114h639.77c0.040 0.034 0.082 0.076 0.116 0.116v511.884z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"laptop\",\"computer\",\"pc\"],\"defaultCode\":59735,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"laptop, computer\",\"name\":\"laptop\",\"order\":2,\"id\":14,\"prevSize\":32,\"code\":59735},\"setIdx\":3,\"setId\":3,\"iconIdx\":14},{\"icon\":{\"paths\":[\"M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"mobile\",\"cell-phone\",\"handheld\"],\"defaultCode\":59736,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"mobile, cell-phone\",\"name\":\"mobile\",\"order\":3,\"id\":15,\"prevSize\":32,\"code\":59736},\"setIdx\":3,\"setId\":3,\"iconIdx\":15},{\"icon\":{\"paths\":[\"M800 0h-640c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h640c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM480 992c-17.672 0-32-14.326-32-32s14.328-32 32-32 32 14.326 32 32-14.328 32-32 32zM768 896h-576v-768h576v768z\"],\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"tablet\",\"mobile\"],\"defaultCode\":59738,\"grid\":16},\"attrs\":[],\"properties\":{\"ligatures\":\"tablet, mobile3\",\"name\":\"tablet\",\"order\":4,\"id\":16,\"prevSize\":32,\"code\":59738},\"setIdx\":3,\"setId\":3,\"iconIdx\":16},{\"icon\":{\"paths\":[\"M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z\"],\"tags\":[\"eye\",\"views\",\"vision\",\"visit\"],\"defaultCode\":59854,\"grid\":16,\"attrs\":[]},\"attrs\":[],\"properties\":{\"ligatures\":\"eye, views\",\"name\":\"eye\",\"order\":2,\"id\":207,\"prevSize\":32,\"code\":59854},\"setIdx\":5,\"setId\":1,\"iconIdx\":206},{\"icon\":{\"paths\":[\"M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z\"],\"width\":951,\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"search\"],\"grid\":14},\"attrs\":[{}],\"properties\":{\"order\":1,\"id\":0,\"prevSize\":28,\"code\":59654,\"name\":\"search1\"},\"setIdx\":4,\"setId\":2,\"iconIdx\":0},{\"icon\":{\"paths\":[\"M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z\"],\"width\":878,\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"bars\",\"navicon\",\"reorder\"],\"grid\":14},\"attrs\":[{}],\"properties\":{\"order\":18,\"id\":1,\"prevSize\":28,\"code\":59651,\"name\":\"bars\"},\"setIdx\":4,\"setId\":2,\"iconIdx\":1},{\"icon\":{\"paths\":[\"M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z\"],\"width\":808.5942857142857,\"attrs\":[],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"play\"],\"defaultCode\":61515,\"grid\":14},\"attrs\":[],\"properties\":{\"name\":\"play\",\"id\":2,\"order\":13,\"prevSize\":28,\"code\":61515},\"setIdx\":4,\"setId\":2,\"iconIdx\":2},{\"icon\":{\"paths\":[\"M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857s-196.571 438.857-438.857 438.857-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857zM658.286 543.429c11.429-6.286 18.286-18.286 18.286-31.429s-6.857-25.143-18.286-31.429l-310.857-182.857c-10.857-6.857-25.143-6.857-36.571-0.571-11.429 6.857-18.286 18.857-18.286 32v365.714c0 13.143 6.857 25.143 18.286 32 5.714 2.857 12 4.571 18.286 4.571s12.571-1.714 18.286-5.143z\"],\"width\":878,\"attrs\":[{}],\"isMulticolor\":false,\"isMulticolor2\":false,\"tags\":[\"play-circle\"],\"grid\":14},\"attrs\":[{}],\"properties\":{\"order\":1,\"id\":3,\"prevSize\":28,\"code\":59656,\"name\":\"play-circle\"},\"setIdx\":4,\"setId\":2,\"iconIdx\":3}],\"height\":1024,\"metadata\":{\"name\":\"icomoon\"},\"preferences\":{\"showGlyphs\":true,\"showQuickUse\":true,\"showQuickUse2\":true,\"showSVGs\":true,\"fontPref\":{\"prefix\":\"icon-\",\"metadata\":{\"fontFamily\":\"icomoon\",\"majorVersion\":1,\"minorVersion\":0},\"metrics\":{\"emSize\":1024,\"baseline\":6.25,\"whitespace\":50},\"embed\":false,\"showSelector\":false,\"showMetrics\":false},\"imagePref\":{\"prefix\":\"icon-\",\"png\":true,\"useClassSelector\":true,\"color\":0,\"bgColor\":16777215,\"classSelector\":\".icon\",\"name\":\"icomoon\"},\"historySize\":50,\"showCodes\":true,\"gridSize\":16}}");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3JlL0ljb24vZGVmYXVsdC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29yZS9Mb2dvL2RlZmF1bHQuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvcmUvU2l0ZUxpbmtzL1NpdGVMaW5rcy5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29yZS9Tb2NpYWxNZWRpYS9kZWZhdWx0LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvZm9vdGVyL2RlZmF1bHQuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb21vb24vZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJpY29uU2V0IiwicmVxdWlyZSIsIkljb24iLCJwcm9wcyIsIkxvZ28iLCJsb2dvcyIsImZvb3RlciIsIm1vYmlsZUZvb3RlciIsImhlYWRlciIsInR5cGUiLCJsb2dvVHlwZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInNpdGVMaW5rcyIsImxpbmtzRGF0YSIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwibGluayIsIm1hcCIsImwiLCJsaSIsIlNvY2lhbE1lZGlhIiwic2l0ZVByb3BlcnRpZXMiLCJleGNsdXNpdmVDb250ZW50TGluayIsImxvY2F0aW9uIiwiZmFjZWJvb2tVUkwiLCJ0d2l0dGVyVVJMIiwieW91dHViZVVSTCIsImluc3RhZ3JhbVVSTCIsIkNvbXBvbmVudCIsIkZvb3RlciIsImRldmljZSIsInNlY3Rpb25zIiwiY2xhc3NMaSIsInJlc3VsdCIsImZvb3RlclNlY3Rpb24iLCJkaXYiLCJzZXRTdGF0ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1vYmlsZUNvZGUiLCJCdXR0b24iLCJwcmludFNlY3Rpb25zIiwic2VydmljaW9zIiwicmVkUG9ydGFsZXMiLCJkZXNrdG9wQ29kZSIsImlzTW9iaWxlIiwibW9iaWxlTWVudSIsImRlc2t0b3BNZW51IiwiZ2xvYmFsQ29udGVudCIsInN1YnR5cGUiLCJzdGF0ZSIsInVzZXJDdXN0b21GaWVsZHMiLCJ1c2VyV2FudHNBZHMiLCJmbGFnRmV0Y2giLCJ0cE9iamVjdCIsInVuZGVmaW5lZCIsInVzZXJTdWJzIiwibG9nZ2VkSW4iLCJpc1N1YnNjcmlwdG9yIiwic2l0ZVByb3AiLCJSZWRfZGVfcG9ydGFsZXMiLCJTZXJ2aWNpb3MiLCJzdXNjcmliZUxpbmsiLCJTZWNjaW9uZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsImhhbmRsZVRQIiwiZGVmaW5lTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLGlGQUFELENBQXZCOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBTUMsS0FBTjs7QUFBQSxTQUFrQixNQUFDLG9EQUFEO0FBQVMsV0FBTyxFQUFFSDtBQUFsQixLQUErQkcsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFsQjtBQUFBLENBQWI7O0tBQU1ELEk7QUFFU0EsbUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBOztBQUNBO0FBRUE7Ozs7Ozs7QUFPQSxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBRCxLQUFLLEVBQUk7QUFDcEIsTUFBTUUsS0FBSyxHQUFHO0FBQ1pDLFVBQU0sRUFBRSxpQkFESTtBQUVaQyxnQkFBWSxFQUFFLGlCQUZGO0FBR1pDLFVBQU0sRUFBRTtBQUhJLEdBQWQ7QUFNQSxNQUFNQyxJQUFJLEdBQUdOLEtBQUssQ0FBQ08sUUFBTixJQUFrQixRQUEvQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLHNCQUFlRCxJQUFmLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxPQUFHLFlBQUtKLEtBQUssQ0FBQ0ksSUFBRCxDQUFWLENBREw7QUFFRSxPQUFHLEVBQUMsZUFGTjtBQUdFLFNBQUssTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQVNELENBakJE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cUQsWUFBWSxLQUFLLG1CQUFtQixFQUFFLDBDQUEwQyxrQkFBa0IsNEJBQTRCLHlCQUF5Qix5REFBeUQseUJBQXlCLFFBQVEsMEIiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEljb01vb24gZnJvbSAncmVhY3QtaWNvbW9vbic7XHJcbmNvbnN0IGljb25TZXQgPSByZXF1aXJlKCcuLi8uLi8uLi9yZXNvdXJjZXMvSWNvbnMvc2VsZWN0aW9uLmpzb24nKTtcclxuXHJcbmNvbnN0IEljb24gPSAoeyAuLi5wcm9wcyB9KSA9PiA8SWNvTW9vbiBpY29uU2V0PXtpY29uU2V0fSB7Li4ucHJvcHN9IC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbi8qQm9vc3RyYXAgQ29tcG9uZW50Ki9cclxuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XHJcblxyXG4vKlxyXG4gIERlc2NyaXB0aW9uOiAgU2V0IHRoZSBsb2dvIGltYWdlIGRlcGVuZGluZyBvZiB0aGUgZGV2aWNlIHR5cGVcclxuICBBdXRob3I6ICAgICAgIE1hcmlhIEZlcm5hbmRhIEdhcmPDrWEgTVxyXG4gIERhdGU6ICAgICAgICAgMTUvMDEvMjAyMFxyXG4gIHByb3BzOiAgICAgICAgbG9nb1R5cGU6IHR5cGUgb2YgdGhlIGRldmljZSAobW9iaWxlLCBoZWFkZXIsIG1vYmlsZUZvb3RlcilcclxuKi9cclxuXHJcbmNvbnN0IExvZ28gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgbG9nb3MgPSB7XHJcbiAgICBmb290ZXI6ICcvZm9vdGVyTG9nby5zdmcnLFxyXG4gICAgbW9iaWxlRm9vdGVyOiAnL21vYmlsZUxvZ28uc3ZnJyxcclxuICAgIGhlYWRlcjogJy9IZWFkZXJMb2dvLnBuZycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZSA9IHByb3BzLmxvZ29UeXBlIHx8ICdoZWFkZXInO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YExvZ28gTG9nb18ke3R5cGV9YH0+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17YCR7bG9nb3NbdHlwZV19YH1cclxuICAgICAgICBhbHQ9J0VsIEVzcGVjdGFkb3InXHJcbiAgICAgICAgZmx1aWRcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Mb2dvLnByb3BUeXBlcyA9IHtcclxuICBsb2dvVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vKlxyXG5EZXNjcmlwdGlvbjogIEdldCB0aGUgc2l0ZSBsaW5rcyBmcm9tIGFuIE9iamVjdFxyXG5BdXRob3I6ICAgICAgIE1hcmlhIEZlcm5hbmRhIEdhcmPDrWEgTVxyXG5EYXRlOiAgICAgICAgIDE4LzAyLzIwMjBcclxucHJvcHM6ICAgICAgICBsaW5rc0RhdGEgLS0+IE9iamVjdCB3aXRoIHRoZSBsaW5rc1xyXG4qL1xyXG5jb25zdCBzaXRlTGlua3MgPSBwcm9wcyA9PiB7XHJcbiAgLy9PYmplY3Qgd2l0aCBsaW5rc1xyXG4gIGNvbnN0IHsgbGlua3NEYXRhIH0gPSBwcm9wcztcclxuICAvL0NvbnZlcnQgdGhlIG9iamVjdCBrZXlzIGludG8gYW4gYXJyYXlcclxuICBjb25zdCBuYW1lID0gT2JqZWN0LmtleXMobGlua3NEYXRhKTtcclxuICAvL21hcCB0aGUgYXJyYXkgdG8gZ2V0IHRoZSBsaW5rcyBjb2RlIHRvIHJldHVybiBpdFxyXG4gIGNvbnN0IGxpbmsgPSBuYW1lLm1hcChsID0+IHtcclxuICAgIGNvbnN0IGxpID0gKFxyXG4gICAgICA8bGkga2V5PXtsfT5cclxuICAgICAgICA8YSBocmVmPXtsaW5rc0RhdGFbbF19IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAge2x9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICAgIHJldHVybiBsaTtcclxuICB9KTtcclxuICByZXR1cm4gbGluaztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpdGVMaW5rczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpdGVQcm9wZXJ0aWVzIGZyb20gJy4uLy4uLy4uL3Byb3BlcnRpZXMvaW5kZXguanNvbic7XHJcblxyXG4vKlJlc291cmNlcyovXHJcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vZGVmYXVsdCc7XHJcblxyXG4vKkltYWdlcyovXHJcbi8vaW1wb3J0IHR2SWNvbiBmcm9tICd+L3Jlc291cmNlcy9pbWFnZXMvdHZJY29uLnN2Zyc7XHJcblxyXG4vKlxyXG5EZXNjcmlwdGlvbjogIHJldHVybiBhbiBpY29uIHNldCB3aXRoIHRoZSBzb2NpYWwgbWVkaWEgYnV0dG9uc1xyXG5BdXRob3I6ICAgICAgIE1hcmlhIEZlcm5hbmRhIEdhcmPDrWEgTVxyXG5EYXRlOiAgICAgICAgIDE1LzAxLzIwMjBcclxucHJvcHM6ICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24gb2YgdGhlIGNvbXBvbmVudCBpbiB0aGUgcGFnZSAoZm9vdGVyIG9yIGhlYWRlcilcclxuKi9cclxuXHJcbmNsYXNzIFNvY2lhbE1lZGlhIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy9HZXQgc2l0ZSBwcm9wZXJ0aWVzXHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPSdTb2NpYWxOZXR3b3Jrcyc+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtzaXRlUHJvcGVydGllcy5leGNsdXNpdmVDb250ZW50TGlua31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbiBTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1Mb2NrSWNvbmB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj0nbG9jaydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1TdmdIZWlnaHRgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17c2l0ZVByb3BlcnRpZXMuZmFjZWJvb2tVUkx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb24gU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259RmJJY29uYH1cclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBpY29uPSdmYWNlYm9vaydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1TdmdIZWlnaHRgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17c2l0ZVByb3BlcnRpZXMudHdpdHRlclVSTH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbiBTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1Ud0ljb25gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIGljb249J3R3aXR0ZXInXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259U3ZnSGVpZ2h0YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3NpdGVQcm9wZXJ0aWVzLnlvdXR1YmVVUkx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb24gU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259WXRJY29uYH1cclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBpY29uPSd5b3V0dWJlJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb25fJHt0aGlzLnByb3BzLmxvY2F0aW9ufVN2Z0hlaWdodGB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtzaXRlUHJvcGVydGllcy5pbnN0YWdyYW1VUkx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb24gU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259SWdJY29uYH1cclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBpY29uPSdpbnN0YWdyYW0nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259U3ZnSGVpZ2h0YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTWVkaWE7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbi8qQm9vc3RyYXAgQ29tcG9uZW50Ki9cclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgQ29sLFxyXG4gIFJvdyxcclxuICBBY2NvcmRpb24sXHJcbiAgQ2FyZCxcclxuICBCdXR0b24sXHJcbiAgSW1hZ2UsXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vY29yZS9JY29uL2RlZmF1bHQuanN4JztcclxuLypSZWFjdCBDb21wb25lbnRzKi9cclxuaW1wb3J0IFNpdGVMaW5rcyBmcm9tICcuLi8uLi9jb3JlL1NpdGVMaW5rcy9TaXRlTGlua3MuanN4JztcclxuaW1wb3J0IHNpdGVQcm9wZXJ0aWVzIGZyb20gJy4uLy4uLy4uL3Byb3BlcnRpZXMvaW5kZXguanNvbic7XHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vLi4vY29yZS9Tb2NpYWxNZWRpYS9kZWZhdWx0LmpzeCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2NvcmUvTG9nby9kZWZhdWx0LmpzeCc7XHJcbi8qSW1hZ2VzKi9cclxuLypcclxuRGVzY3JpcHRpb246ICBTaG93IGZvb3RlciB3aXRoIGFsbCBpdHMgZmVhdHVyZXNcclxuQXV0aG9yOiAgICAgICBNYXJpYSBGZXJuYW5kYSBHYXJjw61hIE1cclxuRGF0ZTogICAgICAgICAxNS8wMS8yMDIwXHJcbnByb3BzOiAgICAgICAgc2l0ZVByb3BlcnRpZXMgLS0+IFByb3BlcnRpZXMgb2YgdGhlIHNpdGVcclxuKi9cclxuXHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAvL3NhdmUgdGhlIHN0YXRlIG9mIHRoZSB3aW5kb3cgd2lkdGhcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHdpZHRoOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5pbm5lcldpZHRoIDogNzAwLFxyXG4gICAgICB1c2VyQ3VzdG9tRmllbGRzOiBudWxsLFxyXG4gICAgICB1c2VyV2FudHNBZHM6IGZhbHNlLFxyXG4gICAgICBmbGFnRmV0Y2g6IGZhbHNlLFxyXG4gICAgICB0cE9iamVjdDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3dbJ3RwJ10gOiB1bmRlZmluZWQsXHJcbiAgICAgIHVzZXJTdWJzOiBudWxsLFxyXG4gICAgICBsb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgIGlzU3Vic2NyaXB0b3I6IHRydWUsXHJcbiAgICAgIGlzTW9iaWxlOiBmYWxzZSxcclxuICAgICAgLy8gc2VjdGlvbnNOYW1lOiBbXSxcclxuICAgIH07XHJcbiAgICAvL0dldCBzaXRlIHByb3BlcnRpZXNcclxuICAgIGNvbnN0ICBzaXRlUHJvcCAgPSBzaXRlUHJvcGVydGllcztcclxuICAgIC8vR2V0IHRoZSBncm91cCBvZiBsaW5rcyBvZiAncmVkUG9ydGFsZXMnXHJcbiAgICB0aGlzLnJlZFBvcnRhbGVzID0gc2l0ZVByb3AuUmVkX2RlX3BvcnRhbGVzO1xyXG4gICAgLy9HZXQgdGhlIGdyb3VwIG9mIGxpbmtzIG9mICdzZXJ2aWNpb3MnXHJcbiAgICB0aGlzLnNlcnZpY2lvcyA9IHNpdGVQcm9wLlNlcnZpY2lvcztcclxuICAgIC8vTGlua3MgZm9yIHN1c2NyaWJlIGFuZCBsb2dpblxyXG4gICAgdGhpcy5zdXNjcmliZUxpbmsgPSBzaXRlUHJvcC5zdXNjcmliZUxpbms7XHJcbiAgIC8vIHRoaXMubG9naW5MaW5rID0gc2l0ZVByb3BlcnRpZXMubG9naW5MaW5rO1xyXG4gICB0aGlzLnNlY3Rpb25zID0gc2l0ZVByb3AuU2VjY2lvbmVzO1xyXG4gIH1cclxuXHJcbiBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmhhbmRsZVRQKTtcclxuICAgIC8vIHRoaXMuZmV0Y2hTZWN0aW9uR3JvdXAoKTtcclxuICAgLy8gdGhpcy5mZXRjaEZvb3Rlckl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9HZXQgdGhlIGpzb24gc2VjdGlvbnMgb2J0YWluZWQgZnJvbSB0aGUgQVBJIGFuZCByZXR1cm4gdGhlbSB0byByZW5kZXJcclxuICBwcmludFNlY3Rpb25zID0gKGRldmljZSwgc2VjdGlvbnMpID0+IHtcclxuICAgIC8vU2V0ICAgICBsZSBvZiB0aGUgbWVudSBkZXBlbmRzIG9mIHRoZSBkZXZpY2UgdHlwZVxyXG4gICAgY29uc3QgY2xhc3NMaSA9XHJcbiAgICAgIGRldmljZSA9PT0gJ2Rlc2t0b3AnXHJcbiAgICAgICAgPyAnRm9vdGVyLVNlY3Rpb25zRGVza3RvcE1lbnVJdGVtcydcclxuICAgICAgICA6ICdGb290ZXItQm9keU1vYmlsZU1lbnVJdGVtcyc7XHJcblxyXG4gICAgLy9NYXAgdG8gaGVyIHRoZSBuYW1lcyBmcm9tICdhcnJOYW1lU2VjdGlvbicgYW4gdGhlIGNvZGUgb2YgdGhlIGxpbmtzXHJcbiAgICAvL2NvbnN0IGZvb3RlclNlY3Rpb24gPSBzZWN0aW9ucy52YWx1ZXMoKTtcclxuICAgIGNvbnN0IG5hbWUgPSBPYmplY3Qua2V5cyhzZWN0aW9ucyk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuYW1lLm1hcChmb290ZXJTZWN0aW9uID0+IHtcclxuICAgICAgY29uc3QgZGl2ID0gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTGl9IGtleT17Zm9vdGVyU2VjdGlvbi5uYW1lfT5cclxuICAgICAgICAgIDxhIGhyZWY9e3NlY3Rpb25zW2Zvb3RlclNlY3Rpb25dfT57Zm9vdGVyU2VjdGlvbn08L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICAvL3NldCB0aGUgc3RhdGUgb2YgdGhlIHdpbmRvdyB3aWR0aFxyXG4gIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vY29kZSBvZiB0aGUgbW9iaWxlIGZvb3RlciBtZW51XHJcbiAgbW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZUNvZGUgPSAoXHJcbiAgICAgIDxBY2NvcmRpb24gY2xhc3NOYW1lPSdGb290ZXItTW9iaWxlTWVudSc+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdGb290ZXItQ2FyZE1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgPENhcmQuSGVhZGVyIGNsYXNzTmFtZT0nRm9vdGVyLUhlYWRlck1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICA8YT5TZWNjaW9uZXM8L2E+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgYXM9e0J1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdsaW5rJ1xyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PScwJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUJ1dHRvbk1vYmlsZU1lbnUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbiBpY29uPSdjaGV2cm9uLWRvd24nIC8+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlXHJcbiAgICAgICAgICAgIGV2ZW50S2V5PScwJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db2xsYXBzZU1vYmlsZU1lbnUnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lclNlY2Npb25lcyc+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJpbnRTZWN0aW9ucygnbW9iaWxlJywgdGhpcy5zZWN0aW9ucyl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1MaW5lJz48L2Rpdj5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J0Zvb3Rlci1DYXJkTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICA8Q2FyZC5IZWFkZXIgY2xhc3NOYW1lPSdGb290ZXItSGVhZGVyTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgIDxhPlNlcnZpY2lvcyA8L2E+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgYXM9e0J1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdsaW5rJ1xyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PScyJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUJ1dHRvbk1vYmlsZU1lbnUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbiBpY29uPSdjaGV2cm9uLWRvd24nIC8+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlXHJcbiAgICAgICAgICAgIGV2ZW50S2V5PScyJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db2xsYXBzZU1vYmlsZU1lbnUnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lclJlZGVzU2VydmljaW9zJz5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vbG9naW4vXCI+SW5pY2lhciBTZXNpw7NuPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vc3VzY3JpcGNpb24tZGlnaXRhbC9cIj5TdXNjcsOtYmV0ZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8U2l0ZUxpbmtzIGxpbmtzRGF0YT17dGhpcy5zZXJ2aWNpb3N9IC8+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1MaW5lJz48L2Rpdj5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J0Zvb3Rlci1DYXJkTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICA8Q2FyZC5IZWFkZXIgY2xhc3NOYW1lPSdGb290ZXItSGVhZGVyTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgIDxhPlJlZCBkZSBwb3J0YWxlczwvYT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGVcclxuICAgICAgICAgICAgICBhcz17QnV0dG9ufVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2xpbmsnXHJcbiAgICAgICAgICAgICAgZXZlbnRLZXk9JzEnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQnV0dG9uTW9iaWxlTWVudSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJY29uIGljb249J2NoZXZyb24tZG93bicgLz5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2VcclxuICAgICAgICAgICAgZXZlbnRLZXk9JzEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUNvbGxhcHNlTW9iaWxlTWVudSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Q29udGFpbmVyUmVkZXNTZXJ2aWNpb3MnPlxyXG4gICAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMucmVkUG9ydGFsZXN9IC8+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1MaW5lJz48L2Rpdj5cclxuICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG1vYmlsZUNvZGU7XHJcbiAgfTtcclxuXHJcbiAgLy9jb2RlIG9mIHRoZSBkZXNrdG9wIGZvb3RlciBtZW51XHJcbiAgZGVza3RvcE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZXNrdG9wQ29kZSA9IChcclxuICAgICAgPGRpdiAgY2xhc3NOYW1lPSdGb290ZXItRGVza3RvcE1lbnUnPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBsZz17NH0gbWQ9ezEyfSBzbT17MTJ9IGNsYXNzTmFtZT0nRm9vdGVyLUNvbHVtbkRlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1UaXRsZXNEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgICAgPGE+U2VjY2lvbmVzPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nRm9vdGVyLVNlY3Rpb25zRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICB7dGhpcy5wcmludFNlY3Rpb25zKCdkZXNrdG9wJywgdGhpcy5zZWN0aW9ucyl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXs0fSBzbT17NH0gY2xhc3NOYW1lPSdGb290ZXItRGl2aXNpb25EZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItVGl0bGVzRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICAgIDxhPlNlcnZpY2lvczwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7Lyo8TG9naW5WYWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn1cclxuICAgICAgICAgICAgICAgIGlzU3Vic2NyaXB0b3I9e3RoaXMuc3RhdGUuaXNTdWJzY3JpcHRvcn1cclxuICAgICAgICAgICAgICAgIGxvZ2luTGluaz17dGhpcy5sb2dpbkxpbmt9XHJcbiAgICAgICAgICAgICAgICBzdXNjcmliZUxpbms9e3RoaXMuc3VzY3JpYmVMaW5rfVxyXG4gICAgICAgICAgICAgIC8+Ki99XHJcbiAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMuc2VydmljaW9zfSAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sICAgICBjbGFzc05hbWU9J0Zvb3Rlci1EaXZpc2lvbkRlc2t0b3BNZW51X3JlZGVzJ1xyXG4gICAgICAgICAgICBsZz17NX1cclxuICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVRpdGxlc0Rlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgICA8YT5SZWQgZGUgcG9ydGFsZXM8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItU2VjdGlvbkxpbmtzRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICAgIDxTaXRlTGlua3MgbGlua3NEYXRhPXt0aGlzLnJlZFBvcnRhbGVzfSAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZXNrdG9wQ29kZTtcclxuICB9O1xyXG5cclxuICAvL0RlcGVuZHMgb2YgdGhlIHdpbmRvdyB3aWR0aCwgcmVuZGVyIGEgbWVudSB0eXBlXHJcbiAgZGVmaW5lTWVudSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vYmlsZU1lbnUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlc2t0b3BNZW51KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9HZXQgc3VidHlwZSBmcm9tIGNvbnRleHRcclxuICBnZXRTdWJ0eXBlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZ2xvYmFsQ29udGVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5nbG9iYWxDb250ZW50LnN1YnR5cGUgPT09ICdjb2x1bW4nID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9jb250cm9sIHRoZSB3aW5kb3cgd2lkdGhcclxuICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLnN0YXRlLndpZHRoIDwgNTc2O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXInPlxyXG4gICAgICAgIHsvKnRoaXMuZ2V0U3VidHlwZSgpICE9PSB0cnVlICYmIChcclxuICAgICAgICAgIDxQaWFub1N1c2NyaWJlXHJcbiAgICAgICAgICAgIHBpYW5vQ2xhc3M9J3BpYW5vU3Vic2NyaWJlRm9vdGVyJ1xyXG4gICAgICAgICAgICBwaWFub1N1YkNsYXNzPSdQaWFub0NvbnRhaW5lcl9mb290ZXInXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkqL31cclxuICAgICAgICB7Ly9hbGxvd0Fkc0luQm9keSAmJiA8QWRzIHNsb3ROYW1lPSdvdXRfb2ZfcGFnZScgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgey8vYWxsb3dBZHNJbkJvZHkgJiYgPEFkcyBzbG90TmFtZT0nb25lX3hfb25lJyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7Ly9hbGxvd0Fkc0luQm9keSAmJiA8U3RpY2t5QWQgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWluZXInPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J0Zvb3Rlci1IZWFkZXInPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs0fSBtZD17NX0gbGc9ezZ9IHhsPXs2fSBjbGFzc05hbWU9J0Zvb3Rlci1Mb2dvJz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29UeXBlPSdmb290ZXInXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29UeXBlPSdtb2JpbGVGb290ZXInXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgIHhzPXs2fSBzbT17MX0gbWQ9ezF9IGxnPXsxfSB4bD17MX0gY2xhc3NOYW1lPSdGb290ZXItQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vc3VzY3JpcGNpb24tZGlnaXRhbC9cIj5TdXNjcsOtYmV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgICAgIHhzPXs0fVxyXG4gICAgICAgICAgICAgICAgc209ezJ9XHJcbiAgICAgICAgICAgICAgICBtZD17Mn1cclxuICAgICAgICAgICAgICAgIGxnPXsyfVxyXG4gICAgICAgICAgICAgICAgeGw9ezJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1UZXh0Rm9sbG93J1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+U8OtZ2Fub3MgZW48L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBzbT17NX0gbWQ9ezR9IGxnPXszfSB4bD17M30gY2xhc3NOYW1lPSdGb290ZXItU29jaWFsJz5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWwgbG9jYXRpb249J2Zvb3RlcicvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1MaW5lJz48L2Rpdj5cclxuICAgICAgICAgIHt0aGlzLmRlZmluZU1lbnUoKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItSW5mbyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdCc+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS9zZXJ2aWNpby1hbC1jbGllbnRlLyc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RMb2dvJ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vY2xvdWRmcm9udC11cy1lYXN0LTEuaW1hZ2VzLmFyY3B1Ymxpc2hpbmcuY29tL3NhbmRib3guZWxlc3BlY3RhZG9yL0RPWkVJNkpNTUJHNzVBUUtZNjQ0UUpZT1lRLnBuZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdEluZm8nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0VGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3NlcnZpY2lvLWFsLWNsaWVudGUvJz5Db250w6FjdGVub3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdFRleHQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0Q29kZSc+XHJcbiAgICAgICAgICAgICAgICAgIFNlcnZpY2lvIGFsIGNsaWVudGU6IEzDjU5FQSBOQUNJT05BTDogMDEgODAwMCA1MTA5MDMgRU4gQk9HT1TDgTogNDA1NTU0MCwgPGEgaHJlZj1cIm1haWx0bzpzZXJ2aWNpb2FsY2xpZW50ZUBlbGVzcGVjdGFkb3IuY29tXCI+c2VydmljaW9hbGNsaWVudGVAZWxlc3BlY3RhZG9yLmNvbS48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RfbGluZScgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLU1lbWJlcnNUaXRsZSc+TWllbWJyb3MgZGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cuaWFiY29sb21iaWEuY29tLydcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgc3JjPScvaWFiLnBuZydcclxuICAgICAgICAgICAgICAgICAgIGFsdD0nSUFCIENvbG9tYmlhJ1xyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVyc0lpbWFnZXMnXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vYW1pLm9yZy5jby8nXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgc3JjPScvYW1pLnBuZydcclxuICAgICAgICAgICAgICAgICAgIGFsdD0nQXNvY2lhY2nDs24gQ29sb21iaWFuYSBkZSBNZWRpb3MgZGUgSW5mb3JtYWNpw7NuJ1xyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVyc0lpbWFnZXMnXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RfbGluZScgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1TaWMnPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5zaWMuZ292LmNvLydcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgIHNyYz0nL3NpY0xvZ28ucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgYWx0PSdTdXBlcmludGVuZGVuY2lhIGRlIGluZHVzdHJpYSB5IGNvbWVyY2lvJ1xyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVyc0lpbWFnZXMnXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVR5Y0xpbmtzJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgRWwgdXNvIGRlIGVzdGUgc2l0aW8gd2ViIGltcGxpY2EgbGEgYWNlcHRhY2nDs24gZGUgbG9zIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3Rlcm1pbm9zI3Rlcm1pbm9zLXktY29uZGljaW9uZXNcIj4gVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgPC9hPiB5IDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3Rlcm1pbm9zI3BvbGl0aWNhLWRlLXRyYXRhbWllbnRvLWRlLWRhdG9zXCI+IFBvbMOtdGljYXMgZGUgcHJpdmFjaWRhZDwvYT4gZGUgQ09NVU5JQ0FOIFMuQS4gVG9kb3MgbG9zIERlcmVjaG9zIFJlc2VydmFkb3MgRC5SLkEuIFByb2hpYmlkYSBzdSByZXByb2R1Y2Npw7NuIHRvdGFsIG8gcGFyY2lhbCwgYXPDrSBjb21vIHN1IHRyYWR1Y2Npw7NuIGEgY3VhbHF1aWVyIGlkaW9tYSBzaW4gbGEgYXV0b3JpemFjacOzbiBlc2NyaXRhIGRlIHN1IHRpdHVsYXIuIFJlcHJvZHVjdGlvbiBpbiB3aG9sZSBvciBpbiBwYXJ0LCBvciB0cmFuc2xhdGlvbiB3aXRob3V0IHdyaXR0ZW4gcGVybWlzc2lvbiBpcyAgcHJvaGliaXRlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZCAyMDIwXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJcInVzZSBzdHJpY3RcIjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmljb25MaXN0PWV4cG9ydHNbXCJkZWZhdWx0XCJdPXZvaWQgMDtmdW5jdGlvbiBvd25LZXlzKGEsYil7dmFyIGM9T2JqZWN0LmtleXMoYSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIGQ9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhhKTtiJiYoZD1kLmZpbHRlcihmdW5jdGlvbihiKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLGIpLmVudW1lcmFibGV9KSksYy5wdXNoLmFwcGx5KGMsZCl9cmV0dXJuIGN9ZnVuY3Rpb24gX29iamVjdFNwcmVhZChhKXtmb3IodmFyIGIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYj1udWxsPT1hcmd1bWVudHNbY10/e306YXJndW1lbnRzW2NdLGMlMj9vd25LZXlzKE9iamVjdChiKSwhMCkuZm9yRWFjaChmdW5jdGlvbihjKXtfZGVmaW5lUHJvcGVydHkoYSxjLGJbY10pfSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiKSk6b3duS2V5cyhPYmplY3QoYikpLmZvckVhY2goZnVuY3Rpb24oYyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYyxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGIsYykpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGEsYixjKXtyZXR1cm4gYiBpbiBhP09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse3ZhbHVlOmMsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTphW2JdPWMsYX1mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoYSxiKXtpZihudWxsPT1hKXJldHVybnt9O3ZhciBjLGQsZT1fb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShhLGIpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoYSk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrKyljPWZbZF0sISgwPD1iLmluZGV4T2YoYykpJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoYSxjKSYmKGVbY109YVtjXSl9cmV0dXJuIGV9ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoYSxiKXtpZihudWxsPT1hKXJldHVybnt9O3ZhciBjLGQsZT17fSxmPU9iamVjdC5rZXlzKGEpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKyspYz1mW2RdLDA8PWIuaW5kZXhPZihjKXx8KGVbY109YVtjXSk7cmV0dXJuIGV9dmFyIHN0eWxlPXtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIsc3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcImN1cnJlbnRDb2xvclwifSxJY29Nb29uPWZ1bmN0aW9uKGEpe3ZhciBiPWEuaWNvblNldCxjPWEuaWNvbixkPWEuc2l6ZSxlPWEuZGlzYWJsZUZpbGwsZj1hLnJlbW92ZUlubGluZVN0eWxlLGc9X29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGEsW1wiaWNvblNldFwiLFwiaWNvblwiLFwic2l6ZVwiLFwiZGlzYWJsZUZpbGxcIixcInJlbW92ZUlubGluZVN0eWxlXCJdKTtpZighYnx8IWMpcmV0dXJuIGNvbnNvbGUud2FybihcIlRoZSBcXFwiaWNvblNldFxcXCIgYW5kIFxcXCJpY29uXFxcIiBwcm9wcyBhcmUgcmVxdWlyZWQuXCIpLG51bGw7dmFyIGg9Yi5pY29ucy5maW5kKGZ1bmN0aW9uKGEpe3JldHVybiBhLnByb3BlcnRpZXMubmFtZT09PWN9KTtpZighaClyZXR1cm4gY29uc29sZS53YXJuKFwiXFxcIlwiLmNvbmNhdChjLFwiXFxcIiBpY29uIG5vdCBmb3VuZC5cIikpLG51bGw7ZCYmKHN0eWxlLndpZHRoPWQsc3R5bGUuaGVpZ2h0PWQpLGcuc3R5bGU9X29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LGY/e306c3R5bGUpLGcuc3R5bGV8fHt9KTt2YXIgaT1oLmljb24ud2lkdGgsaj12b2lkIDA9PT1pP1wiMTAyNFwiOmk7Zy52aWV3Qm94PVwiMCAwIFwiLmNvbmNhdChqLFwiIDEwMjRcIik7dmFyIGs9aC5pY29uLnBhdGhzLm1hcChmdW5jdGlvbihhLGIpe3JldHVybigwLF9yZWFjdC5jcmVhdGVFbGVtZW50KShcInBhdGhcIixfb2JqZWN0U3ByZWFkKHtkOmEsa2V5OmMrYn0sZT97fTpoLmljb24uYXR0cnNbYl0pKX0pO3JldHVybigwLF9yZWFjdC5jcmVhdGVFbGVtZW50KShcInN2Z1wiLGcsayl9LF9kZWZhdWx0PUljb01vb247ZXhwb3J0c1tcImRlZmF1bHRcIl09X2RlZmF1bHQ7dmFyIGljb25MaXN0PWZ1bmN0aW9uKGEpe3JldHVybiBhJiZBcnJheS5pc0FycmF5KGEuaWNvbnMpP2EuaWNvbnMubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnByb3BlcnRpZXMubmFtZX0pOm51bGx9O2V4cG9ydHMuaWNvbkxpc3Q9aWNvbkxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==