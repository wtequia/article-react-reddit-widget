(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

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

/***/ "./properties/index.json":
/*!*******************************!*\
  !*** ./properties/index.json ***!
  \*******************************/
/*! exports provided: siteName, siteLogo, siteDomainURL, twitterURL, facebookURL, instagramURL, youtubeURL, suscribeLink, exclusiveContentLink, sportsLiveLink, loginLink, sites, Red_de_portales, Servicios, NewsLetter, Secciones, Digital, Contenidos_Patrocinados, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"siteName\":\"El Espectador\",\"siteLogo\":\"https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png\",\"siteDomainURL\":\"https://www.elespectador.com\",\"twitterURL\":\"https://twitter.com/elespectador\",\"facebookURL\":\"https://www.facebook.com/elespectadorcom\",\"instagramURL\":\"https://www.instagram.com/elespectador/\",\"youtubeURL\":\"https://www.youtube.com/user/Elespectadorcom?sub_confirmation=1\",\"suscribeLink\":\"https://www.elespectador.com/suscripcion-digital/\",\"exclusiveContentLink\":\"https://www.elespectador.com/contenido-exclusivo/\",\"sportsLiveLink\":\"https://www.elespectador.com/deportes/partidos-de-futbol-hoy-en-vivo/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=Boton-Parrilla-Header\",\"loginLink\":\"https://www.elespectador.com/login/\",\"sites\":[\"el-espectador\"],\"Red_de_portales\":{\"circulodeexperiencias.com\":\"https://www.facebook.com/CirculoDeExperienciasElEspectador/\",\"foros.elespectador.com\":\"http://foros.elespectador.com/\",\"bibo.elespectador.com\":\"http://bibo.elespectador.com/\",\"caracolnext.com\":\"https://www.caracolnext.com/\",\"caracoltv.com\":\"https://www.caracoltv.com/\",\"noticiascaracol.com\":\"https://www.noticiascaracol.com\",\"golcaracol.com\":\"https://www.golcaracol.com\",\"caracolplay.com\":\"https://www.caracolplay.com\",\"caracoltvcorporativo.com\":\"https://www.caracoltvcorporativo.com/\",\"bluradio.com\":\"https://www.bluradio.com/\",\"lakalle.com\":\"https://www.lakalle.com\",\"hjck.com\":\"https://hjck.com/\",\"shock.co\":\"https://www.shock.co/\",\"Volk\":\"https://volkgames.com/\"},\"Servicios\":{\"Paute con nosotros\":\"https://www.elespectador.com/paute-con-nosotros/\",\"Suscripciones impresas\":\"http://suscripciones.elespectador.com/\",\"Círculo de experiencias\":\"https://www.facebook.com/CirculoDeExperienciasElEspectador/\",\"Foros El Espectador\":\"http://foros.elespectador.com/\",\"Edictos y avisos judiciales\":\"http://judiciales.elespectador.com/\"},\"NewsLetter\":{\"user\":\"043bd90b2533e322d34ce78476703751\",\"password\":\"8bdd08542fbe197f348d38c1ba986923\",\"server\":\"https://personalizados.elespectador.com/service-nw-pc\"},\"Secciones\":{\"Opinión\":\"https://www.elespectador.com/opinion/\",\"Salud\":\"https://www.elespectador.com/noticias/salud/\",\"Judicial\":\"https://www.elespectador.com/noticias/judicial/\",\"Educación\":\"https://www.elespectador.com/noticias/educacion/\",\"Política\":\"https://www.elespectador.com/noticias/politica/\",\"Actualidad\":\"https://www.elespectador.com/noticias/actualidad/\",\"Investigación\":\"https://www.elespectador.com/noticias/investigacion/\",\"Alto Turmequé\":\"https://www.elespectador.com/nptocias/alto-turmeque&\",\"Economía\":\"https://www.elespectador.com/noticias/economia\",\"Blogs\":\"https://blogs.elespectador.com/\",\"Bogotá\":\"https://www.elespectador.com/noticias/bogota/\",\"Mundo Destinos\":\"https://www.elespectador.com/noticias/mundo-destinos/\",\"Nacional\":\"https://www.elespectador.com/noticias/nacional/\",\"Autos\":\"https://www.elespectador.com/noticias/autos/\",\"El Mundo\":\"https://www.elespectador.com/noticias/el-mundo/\",\"Deportes\":\"https://www.elespectador.com/deportes/\",\"Tecnología\":\"https://www.elespectador.com/noticias/tecnologia/\",\"Entretenimiento\":\"https://www.elespectador.com/entretenimiento/\",\"Cultura\":\"https://www.elespectador.com/noticias/cultura\",\"Horóscopo\":\"https://www.elespectador.com/entretenimiento/horoscopo/\",\"Ciencia\":\"https://www.elespectador.com/noticias/ciencia/\",\"Colombia 2020\":\"https://www.elespectador.com/colombia2020/\",\"Medio Ambiente\":\"https://www.elespectador.com/noticias/medio-ambiente\",\"Cromos\":\"https://www.elespectador.com/cromos/\"},\"Digital\":{\"Formatos Estándar\":\"/digital/formatos-estandar/\",\"Formatos Premium\":\"/digital/formatos-premium\",\"Video\":\"/digital/video\"},\"Contenidos_Patrocinados\":{\"Especiales Miltimedia\":\"/contenidos-patrocinados/especiales-multimedia\",\"Formatos Premium\":\"https://www.elespectador.com/opinion/\",\"Videos\":\"https://www.elespectador.com/noticias/judicial/\"}}");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3JlL0xvZ28vZGVmYXVsdC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29yZS9TaXRlTGlua3MvU2l0ZUxpbmtzLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3JlL1NvY2lhbE1lZGlhL2RlZmF1bHQuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dsb2JhbC9mb290ZXIvZGVmYXVsdC5qc3giXSwibmFtZXMiOlsiTG9nbyIsInByb3BzIiwibG9nb3MiLCJmb290ZXIiLCJtb2JpbGVGb290ZXIiLCJoZWFkZXIiLCJ0eXBlIiwibG9nb1R5cGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJzaXRlTGlua3MiLCJsaW5rc0RhdGEiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsImxpbmsiLCJtYXAiLCJsIiwibGkiLCJTb2NpYWxNZWRpYSIsInNpdGVQcm9wZXJ0aWVzIiwiZXhjbHVzaXZlQ29udGVudExpbmsiLCJsb2NhdGlvbiIsImZhY2Vib29rVVJMIiwidHdpdHRlclVSTCIsInlvdXR1YmVVUkwiLCJpbnN0YWdyYW1VUkwiLCJDb21wb25lbnQiLCJGb290ZXIiLCJkZXZpY2UiLCJzZWN0aW9ucyIsImNsYXNzTGkiLCJyZXN1bHQiLCJmb290ZXJTZWN0aW9uIiwiZGl2Iiwic2V0U3RhdGUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtb2JpbGVDb2RlIiwiQnV0dG9uIiwicHJpbnRTZWN0aW9ucyIsInNlcnZpY2lvcyIsInJlZFBvcnRhbGVzIiwiZGVza3RvcENvZGUiLCJpc01vYmlsZSIsIm1vYmlsZU1lbnUiLCJkZXNrdG9wTWVudSIsImdsb2JhbENvbnRlbnQiLCJzdWJ0eXBlIiwic3RhdGUiLCJ1c2VyQ3VzdG9tRmllbGRzIiwidXNlcldhbnRzQWRzIiwiZmxhZ0ZldGNoIiwidHBPYmplY3QiLCJ1bmRlZmluZWQiLCJ1c2VyU3VicyIsImxvZ2dlZEluIiwiaXNTdWJzY3JpcHRvciIsInNpdGVQcm9wIiwiUmVkX2RlX3BvcnRhbGVzIiwiU2VydmljaW9zIiwic3VzY3JpYmVMaW5rIiwiU2VjY2lvbmVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJoYW5kbGVUUCIsImRlZmluZU1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBO0FBRUE7Ozs7Ozs7QUFPQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxLQUFLLEVBQUk7QUFDcEIsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFVBQU0sRUFBRSxpQkFESTtBQUVaQyxnQkFBWSxFQUFFLGlCQUZGO0FBR1pDLFVBQU0sRUFBRTtBQUhJLEdBQWQ7QUFNQSxNQUFNQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sUUFBTixJQUFrQixRQUEvQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLHNCQUFlRCxJQUFmLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxPQUFHLFlBQUtKLEtBQUssQ0FBQ0ksSUFBRCxDQUFWLENBREw7QUFFRSxPQUFHLEVBQUMsZUFGTjtBQUdFLFNBQUssTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQVNELENBakJEOztLQUFNTixJO0FBbUJOQSxJQUFJLENBQUNRLFNBQUwsR0FBaUI7QUFDZkQsVUFBUSxFQUFFRSxpREFBUyxDQUFDQztBQURMLENBQWpCO0FBSWVWLG1FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUVBOzs7Ozs7O0FBTUEsSUFBTVcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQVYsS0FBSyxFQUFJO0FBQ3pCO0FBRHlCLE1BRWpC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QTtBQUFBO0FBQUEsUUFMQSxDQURGLENBOUNGLENBbkNGLEVBK0ZFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRUFDc0Q7QUFBRyxZQUFJLEVBQUMsOERBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FEdEQsU0FDNEo7QUFBRyxZQUFJLEVBQUMsd0VBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FENUosNlRBREYsQ0EvRkYsQ0FiRixDQURGO0FBcUhEOzs7O0VBOVVrQnhDLCtDOztBQWtWTkMscUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbi8qQm9vc3RyYXAgQ29tcG9uZW50Ki9cclxuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XHJcblxyXG4vKlxyXG4gIERlc2NyaXB0aW9uOiAgU2V0IHRoZSBsb2dvIGltYWdlIGRlcGVuZGluZyBvZiB0aGUgZGV2aWNlIHR5cGVcclxuICBBdXRob3I6ICAgICAgIE1hcmlhIEZlcm5hbmRhIEdhcmPDrWEgTVxyXG4gIERhdGU6ICAgICAgICAgMTUvMDEvMjAyMFxyXG4gIHByb3BzOiAgICAgICAgbG9nb1R5cGU6IHR5cGUgb2YgdGhlIGRldmljZSAobW9iaWxlLCBoZWFkZXIsIG1vYmlsZUZvb3RlcilcclxuKi9cclxuXHJcbmNvbnN0IExvZ28gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgbG9nb3MgPSB7XHJcbiAgICBmb290ZXI6ICcvZm9vdGVyTG9nby5zdmcnLFxyXG4gICAgbW9iaWxlRm9vdGVyOiAnL21vYmlsZUxvZ28uc3ZnJyxcclxuICAgIGhlYWRlcjogJy9IZWFkZXJMb2dvLnBuZycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZSA9IHByb3BzLmxvZ29UeXBlIHx8ICdoZWFkZXInO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YExvZ28gTG9nb18ke3R5cGV9YH0+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17YCR7bG9nb3NbdHlwZV19YH1cclxuICAgICAgICBhbHQ9J0VsIEVzcGVjdGFkb3InXHJcbiAgICAgICAgZmx1aWRcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Mb2dvLnByb3BUeXBlcyA9IHtcclxuICBsb2dvVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vKlxyXG5EZXNjcmlwdGlvbjogIEdldCB0aGUgc2l0ZSBsaW5rcyBmcm9tIGFuIE9iamVjdFxyXG5BdXRob3I6ICAgICAgIE1hcmlhIEZlcm5hbmRhIEdhcmPDrWEgTVxyXG5EYXRlOiAgICAgICAgIDE4LzAyLzIwMjBcclxucHJvcHM6ICAgICAgICBsaW5rc0RhdGEgLS0+IE9iamVjdCB3aXRoIHRoZSBsaW5rc1xyXG4qL1xyXG5jb25zdCBzaXRlTGlua3MgPSBwcm9wcyA9PiB7XHJcbiAgLy9PYmplY3Qgd2l0aCBsaW5rc1xyXG4gIGNvbnN0IHsgbGlua3NEYXRhIH0gPSBwcm9wcztcclxuICAvL0NvbnZlcnQgdGhlIG9iamVjdCBrZXlzIGludG8gYW4gYXJyYXlcclxuICBjb25zdCBuYW1lID0gT2JqZWN0LmtleXMobGlua3NEYXRhKTtcclxuICAvL21hcCB0aGUgYXJyYXkgdG8gZ2V0IHRoZSBsaW5rcyBjb2RlIHRvIHJldHVybiBpdFxyXG4gIGNvbnN0IGxpbmsgPSBuYW1lLm1hcChsID0+IHtcclxuICAgIGNvbnN0IGxpID0gKFxyXG4gICAgICA8bGkga2V5PXtsfT5cclxuICAgICAgICA8YSBocmVmPXtsaW5rc0RhdGFbbF19IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAge2x9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICAgIHJldHVybiBsaTtcclxuICB9KTtcclxuICByZXR1cm4gbGluaztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpdGVMaW5rczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNpdGVQcm9wZXJ0aWVzIGZyb20gJy4uLy4uLy4uL3Byb3BlcnRpZXMvaW5kZXguanNvbic7XHJcblxyXG4vKlJlc291cmNlcyovXHJcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vZGVmYXVsdCc7XHJcblxyXG4vKkltYWdlcyovXHJcbi8vaW1wb3J0IHR2SWNvbiBmcm9tICd+L3Jlc291cmNlcy9pbWFnZXMvdHZJY29uLnN2Zyc7XHJcblxyXG4vKlxyXG5EZXNjcmlwdGlvbjogIHJldHVybiBhbiBpY29uIHNldCB3aXRoIHRoZSBzb2NpYWwgbWVkaWEgYnV0dG9uc1xyXG5BdXRob3I6ICAgICAgIE1hcmlhIEZlcm5hbmRhIEdhcmPDrWEgTVxyXG5EYXRlOiAgICAgICAgIDE1LzAxLzIwMjBcclxucHJvcHM6ICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24gb2YgdGhlIGNvbXBvbmVudCBpbiB0aGUgcGFnZSAoZm9vdGVyIG9yIGhlYWRlcilcclxuKi9cclxuXHJcbmNsYXNzIFNvY2lhbE1lZGlhIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy9HZXQgc2l0ZSBwcm9wZXJ0aWVzXHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPSdTb2NpYWxOZXR3b3Jrcyc+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtzaXRlUHJvcGVydGllcy5leGNsdXNpdmVDb250ZW50TGlua31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbiBTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1Mb2NrSWNvbmB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj0nbG9jaydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1TdmdIZWlnaHRgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17c2l0ZVByb3BlcnRpZXMuZmFjZWJvb2tVUkx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb24gU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259RmJJY29uYH1cclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBpY29uPSdmYWNlYm9vaydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1TdmdIZWlnaHRgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17c2l0ZVByb3BlcnRpZXMudHdpdHRlclVSTH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbiBTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1Ud0ljb25gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIGljb249J3R3aXR0ZXInXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259U3ZnSGVpZ2h0YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3NpdGVQcm9wZXJ0aWVzLnlvdXR1YmVVUkx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb24gU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259WXRJY29uYH1cclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBpY29uPSd5b3V0dWJlJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb25fJHt0aGlzLnByb3BzLmxvY2F0aW9ufVN2Z0hlaWdodGB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtzaXRlUHJvcGVydGllcy5pbnN0YWdyYW1VUkx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb24gU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259SWdJY29uYH1cclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBpY29uPSdpbnN0YWdyYW0nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259U3ZnSGVpZ2h0YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTWVkaWE7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbi8qQm9vc3RyYXAgQ29tcG9uZW50Ki9cclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgQ29sLFxyXG4gIFJvdyxcclxuICBBY2NvcmRpb24sXHJcbiAgQ2FyZCxcclxuICBCdXR0b24sXHJcbiAgSW1hZ2UsXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vY29yZS9JY29uL2RlZmF1bHQuanN4JztcclxuLypSZWFjdCBDb21wb25lbnRzKi9cclxuaW1wb3J0IFNpdGVMaW5rcyBmcm9tICcuLi8uLi9jb3JlL1NpdGVMaW5rcy9TaXRlTGlua3MuanN4JztcclxuaW1wb3J0IHNpdGVQcm9wZXJ0aWVzIGZyb20gJy4uLy4uLy4uL3Byb3BlcnRpZXMvaW5kZXguanNvbic7XHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vLi4vY29yZS9Tb2NpYWxNZWRpYS9kZWZhdWx0LmpzeCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2NvcmUvTG9nby9kZWZhdWx0LmpzeCc7XHJcbi8qSW1hZ2VzKi9cclxuLypcclxuRGVzY3JpcHRpb246ICBTaG93IGZvb3RlciB3aXRoIGFsbCBpdHMgZmVhdHVyZXNcclxuQXV0aG9yOiAgICAgICBNYXJpYSBGZXJuYW5kYSBHYXJjw61hIE1cclxuRGF0ZTogICAgICAgICAxNS8wMS8yMDIwXHJcbnByb3BzOiAgICAgICAgc2l0ZVByb3BlcnRpZXMgLS0+IFByb3BlcnRpZXMgb2YgdGhlIHNpdGVcclxuKi9cclxuXHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAvL3NhdmUgdGhlIHN0YXRlIG9mIHRoZSB3aW5kb3cgd2lkdGhcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHdpZHRoOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5pbm5lcldpZHRoIDogNzAwLFxyXG4gICAgICB1c2VyQ3VzdG9tRmllbGRzOiBudWxsLFxyXG4gICAgICB1c2VyV2FudHNBZHM6IGZhbHNlLFxyXG4gICAgICBmbGFnRmV0Y2g6IGZhbHNlLFxyXG4gICAgICB0cE9iamVjdDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3dbJ3RwJ10gOiB1bmRlZmluZWQsXHJcbiAgICAgIHVzZXJTdWJzOiBudWxsLFxyXG4gICAgICBsb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgIGlzU3Vic2NyaXB0b3I6IHRydWUsXHJcbiAgICAgIGlzTW9iaWxlOiBmYWxzZSxcclxuICAgICAgLy8gc2VjdGlvbnNOYW1lOiBbXSxcclxuICAgIH07XHJcbiAgICAvL0dldCBzaXRlIHByb3BlcnRpZXNcclxuICAgIGNvbnN0ICBzaXRlUHJvcCAgPSBzaXRlUHJvcGVydGllcztcclxuICAgIC8vR2V0IHRoZSBncm91cCBvZiBsaW5rcyBvZiAncmVkUG9ydGFsZXMnXHJcbiAgICB0aGlzLnJlZFBvcnRhbGVzID0gc2l0ZVByb3AuUmVkX2RlX3BvcnRhbGVzO1xyXG4gICAgLy9HZXQgdGhlIGdyb3VwIG9mIGxpbmtzIG9mICdzZXJ2aWNpb3MnXHJcbiAgICB0aGlzLnNlcnZpY2lvcyA9IHNpdGVQcm9wLlNlcnZpY2lvcztcclxuICAgIC8vTGlua3MgZm9yIHN1c2NyaWJlIGFuZCBsb2dpblxyXG4gICAgdGhpcy5zdXNjcmliZUxpbmsgPSBzaXRlUHJvcC5zdXNjcmliZUxpbms7XHJcbiAgIC8vIHRoaXMubG9naW5MaW5rID0gc2l0ZVByb3BlcnRpZXMubG9naW5MaW5rO1xyXG4gICB0aGlzLnNlY3Rpb25zID0gc2l0ZVByb3AuU2VjY2lvbmVzO1xyXG4gIH1cclxuXHJcbiBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmhhbmRsZVRQKTtcclxuICAgIC8vIHRoaXMuZmV0Y2hTZWN0aW9uR3JvdXAoKTtcclxuICAgLy8gdGhpcy5mZXRjaEZvb3Rlckl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9HZXQgdGhlIGpzb24gc2VjdGlvbnMgb2J0YWluZWQgZnJvbSB0aGUgQVBJIGFuZCByZXR1cm4gdGhlbSB0byByZW5kZXJcclxuICBwcmludFNlY3Rpb25zID0gKGRldmljZSwgc2VjdGlvbnMpID0+IHtcclxuICAgIC8vU2V0ICAgICBsZSBvZiB0aGUgbWVudSBkZXBlbmRzIG9mIHRoZSBkZXZpY2UgdHlwZVxyXG4gICAgY29uc3QgY2xhc3NMaSA9XHJcbiAgICAgIGRldmljZSA9PT0gJ2Rlc2t0b3AnXHJcbiAgICAgICAgPyAnRm9vdGVyLVNlY3Rpb25zRGVza3RvcE1lbnVJdGVtcydcclxuICAgICAgICA6ICdGb290ZXItQm9keU1vYmlsZU1lbnVJdGVtcyc7XHJcblxyXG4gICAgLy9NYXAgdG8gaGVyIHRoZSBuYW1lcyBmcm9tICdhcnJOYW1lU2VjdGlvbicgYW4gdGhlIGNvZGUgb2YgdGhlIGxpbmtzXHJcbiAgICAvL2NvbnN0IGZvb3RlclNlY3Rpb24gPSBzZWN0aW9ucy52YWx1ZXMoKTtcclxuICAgIGNvbnN0IG5hbWUgPSBPYmplY3Qua2V5cyhzZWN0aW9ucyk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuYW1lLm1hcChmb290ZXJTZWN0aW9uID0+IHtcclxuICAgICAgY29uc3QgZGl2ID0gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTGl9IGtleT17Zm9vdGVyU2VjdGlvbi5uYW1lfT5cclxuICAgICAgICAgIDxhIGhyZWY9e3NlY3Rpb25zW2Zvb3RlclNlY3Rpb25dfT57Zm9vdGVyU2VjdGlvbn08L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICAvL3NldCB0aGUgc3RhdGUgb2YgdGhlIHdpbmRvdyB3aWR0aFxyXG4gIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vY29kZSBvZiB0aGUgbW9iaWxlIGZvb3RlciBtZW51XHJcbiAgbW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZUNvZGUgPSAoXHJcbiAgICAgIDxBY2NvcmRpb24gY2xhc3NOYW1lPSdGb290ZXItTW9iaWxlTWVudSc+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdGb290ZXItQ2FyZE1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgPENhcmQuSGVhZGVyIGNsYXNzTmFtZT0nRm9vdGVyLUhlYWRlck1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICA8YT5TZWNjaW9uZXM8L2E+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgYXM9e0J1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdsaW5rJ1xyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PScwJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUJ1dHRvbk1vYmlsZU1lbnUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbiBpY29uPSdjaGV2cm9uLWRvd24nIC8+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlXHJcbiAgICAgICAgICAgIGV2ZW50S2V5PScwJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db2xsYXBzZU1vYmlsZU1lbnUnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lclNlY2Npb25lcyc+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJpbnRTZWN0aW9ucygnbW9iaWxlJywgdGhpcy5zZWN0aW9ucyl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1MaW5lJz48L2Rpdj5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J0Zvb3Rlci1DYXJkTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICA8Q2FyZC5IZWFkZXIgY2xhc3NOYW1lPSdGb290ZXItSGVhZGVyTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgIDxhPlNlcnZpY2lvcyA8L2E+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgYXM9e0J1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdsaW5rJ1xyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PScyJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUJ1dHRvbk1vYmlsZU1lbnUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbiBpY29uPSdjaGV2cm9uLWRvd24nIC8+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlXHJcbiAgICAgICAgICAgIGV2ZW50S2V5PScyJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db2xsYXBzZU1vYmlsZU1lbnUnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lclJlZGVzU2VydmljaW9zJz5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vbG9naW4vXCI+SW5pY2lhciBTZXNpw7NuPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vc3VzY3JpcGNpb24tZGlnaXRhbC9cIj5TdXNjcsOtYmV0ZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8U2l0ZUxpbmtzIGxpbmtzRGF0YT17dGhpcy5zZXJ2aWNpb3N9IC8+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1MaW5lJz48L2Rpdj5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J0Zvb3Rlci1DYXJkTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICA8Q2FyZC5IZWFkZXIgY2xhc3NOYW1lPSdGb290ZXItSGVhZGVyTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgIDxhPlJlZCBkZSBwb3J0YWxlczwvYT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGVcclxuICAgICAgICAgICAgICBhcz17QnV0dG9ufVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2xpbmsnXHJcbiAgICAgICAgICAgICAgZXZlbnRLZXk9JzEnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQnV0dG9uTW9iaWxlTWVudSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJY29uIGljb249J2NoZXZyb24tZG93bicgLz5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2VcclxuICAgICAgICAgICAgZXZlbnRLZXk9JzEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUNvbGxhcHNlTW9iaWxlTWVudSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Q29udGFpbmVyUmVkZXNTZXJ2aWNpb3MnPlxyXG4gICAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMucmVkUG9ydGFsZXN9IC8+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1MaW5lJz48L2Rpdj5cclxuICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG1vYmlsZUNvZGU7XHJcbiAgfTtcclxuXHJcbiAgLy9jb2RlIG9mIHRoZSBkZXNrdG9wIGZvb3RlciBtZW51XHJcbiAgZGVza3RvcE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZXNrdG9wQ29kZSA9IChcclxuICAgICAgPGRpdiAgY2xhc3NOYW1lPSdGb290ZXItRGVza3RvcE1lbnUnPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBsZz17NH0gbWQ9ezEyfSBzbT17MTJ9IGNsYXNzTmFtZT0nRm9vdGVyLUNvbHVtbkRlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1UaXRsZXNEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgICAgPGE+U2VjY2lvbmVzPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nRm9vdGVyLVNlY3Rpb25zRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICB7dGhpcy5wcmludFNlY3Rpb25zKCdkZXNrdG9wJywgdGhpcy5zZWN0aW9ucyl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXs0fSBzbT17NH0gY2xhc3NOYW1lPSdGb290ZXItRGl2aXNpb25EZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItVGl0bGVzRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICAgIDxhPlNlcnZpY2lvczwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7Lyo8TG9naW5WYWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn1cclxuICAgICAgICAgICAgICAgIGlzU3Vic2NyaXB0b3I9e3RoaXMuc3RhdGUuaXNTdWJzY3JpcHRvcn1cclxuICAgICAgICAgICAgICAgIGxvZ2luTGluaz17dGhpcy5sb2dpbkxpbmt9XHJcbiAgICAgICAgICAgICAgICBzdXNjcmliZUxpbms9e3RoaXMuc3VzY3JpYmVMaW5rfVxyXG4gICAgICAgICAgICAgIC8+Ki99XHJcbiAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMuc2VydmljaW9zfSAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sICAgICBjbGFzc05hbWU9J0Zvb3Rlci1EaXZpc2lvbkRlc2t0b3BNZW51X3JlZGVzJ1xyXG4gICAgICAgICAgICBsZz17NX1cclxuICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgIHNtPXs4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVRpdGxlc0Rlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgICA8YT5SZWQgZGUgcG9ydGFsZXM8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItU2VjdGlvbkxpbmtzRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICAgIDxTaXRlTGlua3MgbGlua3NEYXRhPXt0aGlzLnJlZFBvcnRhbGVzfSAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIHJldHVybiBkZXNrdG9wQ29kZTtcclxuICB9O1xyXG5cclxuICAvL0RlcGVuZHMgb2YgdGhlIHdpbmRvdyB3aWR0aCwgcmVuZGVyIGEgbWVudSB0eXBlXHJcbiAgZGVmaW5lTWVudSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vYmlsZU1lbnUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlc2t0b3BNZW51KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9HZXQgc3VidHlwZSBmcm9tIGNvbnRleHRcclxuICBnZXRTdWJ0eXBlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZ2xvYmFsQ29udGVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5nbG9iYWxDb250ZW50LnN1YnR5cGUgPT09ICdjb2x1bW4nID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9jb250cm9sIHRoZSB3aW5kb3cgd2lkdGhcclxuICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLnN0YXRlLndpZHRoIDwgNTc2O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXInPlxyXG4gICAgICAgIHsvKnRoaXMuZ2V0U3VidHlwZSgpICE9PSB0cnVlICYmIChcclxuICAgICAgICAgIDxQaWFub1N1c2NyaWJlXHJcbiAgICAgICAgICAgIHBpYW5vQ2xhc3M9J3BpYW5vU3Vic2NyaWJlRm9vdGVyJ1xyXG4gICAgICAgICAgICBwaWFub1N1YkNsYXNzPSdQaWFub0NvbnRhaW5lcl9mb290ZXInXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkqL31cclxuICAgICAgICB7Ly9hbGxvd0Fkc0luQm9keSAmJiA8QWRzIHNsb3ROYW1lPSdvdXRfb2ZfcGFnZScgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgey8vYWxsb3dBZHNJbkJvZHkgJiYgPEFkcyBzbG90TmFtZT0nb25lX3hfb25lJyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7Ly9hbGxvd0Fkc0luQm9keSAmJiA8U3RpY2t5QWQgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWluZXInPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J0Zvb3Rlci1IZWFkZXInPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs0fSBtZD17NX0gbGc9ezZ9IHhsPXs2fSBjbGFzc05hbWU9J0Zvb3Rlci1Mb2dvJz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29UeXBlPSdmb290ZXInXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29UeXBlPSdtb2JpbGVGb290ZXInXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgIHhzPXs2fSBzbT17MX0gbWQ9ezF9IGxnPXsxfSB4bD17MX0gY2xhc3NOYW1lPSdGb290ZXItQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vc3VzY3JpcGNpb24tZGlnaXRhbC9cIj5TdXNjcsOtYmV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgICAgIHhzPXs0fVxyXG4gICAgICAgICAgICAgICAgc209ezJ9XHJcbiAgICAgICAgICAgICAgICBtZD17Mn1cclxuICAgICAgICAgICAgICAgIGxnPXsyfVxyXG4gICAgICAgICAgICAgICAgeGw9ezJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1UZXh0Rm9sbG93J1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+U8OtZ2Fub3MgZW48L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBzbT17NX0gbWQ9ezR9IGxnPXszfSB4bD17M30gY2xhc3NOYW1lPSdGb290ZXItU29jaWFsJz5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWwgbG9jYXRpb249J2Zvb3RlcicvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1MaW5lJz48L2Rpdj5cclxuICAgICAgICAgIHt0aGlzLmRlZmluZU1lbnUoKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItSW5mbyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdCc+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS9zZXJ2aWNpby1hbC1jbGllbnRlLyc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RMb2dvJ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vY2xvdWRmcm9udC11cy1lYXN0LTEuaW1hZ2VzLmFyY3B1Ymxpc2hpbmcuY29tL3NhbmRib3guZWxlc3BlY3RhZG9yL0RPWkVJNkpNTUJHNzVBUUtZNjQ0UUpZT1lRLnBuZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdEluZm8nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0VGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3NlcnZpY2lvLWFsLWNsaWVudGUvJz5Db250w6FjdGVub3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdFRleHQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0Q29kZSc+XHJcbiAgICAgICAgICAgICAgICAgIFNlcnZpY2lvIGFsIGNsaWVudGU6IEzDjU5FQSBOQUNJT05BTDogMDEgODAwMCA1MTA5MDMgRU4gQk9HT1TDgTogNDA1NTU0MCwgPGEgaHJlZj1cIm1haWx0bzpzZXJ2aWNpb2FsY2xpZW50ZUBlbGVzcGVjdGFkb3IuY29tXCI+c2VydmljaW9hbGNsaWVudGVAZWxlc3BlY3RhZG9yLmNvbS48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RfbGluZScgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLU1lbWJlcnNUaXRsZSc+TWllbWJyb3MgZGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cuaWFiY29sb21iaWEuY29tLydcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgc3JjPScvaWFiLnBuZydcclxuICAgICAgICAgICAgICAgICAgIGFsdD0nSUFCIENvbG9tYmlhJ1xyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVyc0lpbWFnZXMnXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vYW1pLm9yZy5jby8nXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgc3JjPScvYW1pLnBuZydcclxuICAgICAgICAgICAgICAgICAgIGFsdD0nQXNvY2lhY2nDs24gQ29sb21iaWFuYSBkZSBNZWRpb3MgZGUgSW5mb3JtYWNpw7NuJ1xyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVyc0lpbWFnZXMnXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RfbGluZScgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1TaWMnPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5zaWMuZ292LmNvLydcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgIHNyYz0nL3NpY0xvZ28ucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgYWx0PSdTdXBlcmludGVuZGVuY2lhIGRlIGluZHVzdHJpYSB5IGNvbWVyY2lvJ1xyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVyc0lpbWFnZXMnXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVR5Y0xpbmtzJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgRWwgdXNvIGRlIGVzdGUgc2l0aW8gd2ViIGltcGxpY2EgbGEgYWNlcHRhY2nDs24gZGUgbG9zIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3Rlcm1pbm9zI3Rlcm1pbm9zLXktY29uZGljaW9uZXNcIj4gVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgPC9hPiB5IDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3Rlcm1pbm9zI3BvbGl0aWNhLWRlLXRyYXRhbWllbnRvLWRlLWRhdG9zXCI+IFBvbMOtdGljYXMgZGUgcHJpdmFjaWRhZDwvYT4gZGUgQ09NVU5JQ0FOIFMuQS4gVG9kb3MgbG9zIERlcmVjaG9zIFJlc2VydmFkb3MgRC5SLkEuIFByb2hpYmlkYSBzdSByZXByb2R1Y2Npw7NuIHRvdGFsIG8gcGFyY2lhbCwgYXPDrSBjb21vIHN1IHRyYWR1Y2Npw7NuIGEgY3VhbHF1aWVyIGlkaW9tYSBzaW4gbGEgYXV0b3JpemFjacOzbiBlc2NyaXRhIGRlIHN1IHRpdHVsYXIuIFJlcHJvZHVjdGlvbiBpbiB3aG9sZSBvciBpbiBwYXJ0LCBvciB0cmFuc2xhdGlvbiB3aXRob3V0IHdyaXR0ZW4gcGVybWlzc2lvbiBpcyAgcHJvaGliaXRlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZCAyMDIwXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=