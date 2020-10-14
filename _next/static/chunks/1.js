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

/***/ "./properties/index.json":
/*!*******************************!*\
  !*** ./properties/index.json ***!
  \*******************************/
/*! exports provided: siteName, siteLogo, siteDomainURL, twitterURL, facebookURL, instagramURL, youtubeURL, suscribeLink, exclusiveContentLink, sportsLiveLink, loginLink, sites, Red_de_portales, Servicios, NewsLetter, Secciones, Digital, Contenidos_Patrocinados, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"siteName\":\"El Espectador\",\"siteLogo\":\"https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png\",\"siteDomainURL\":\"https://www.elespectador.com\",\"twitterURL\":\"https://twitter.com/elespectador\",\"facebookURL\":\"https://www.facebook.com/elespectadorcom\",\"instagramURL\":\"https://www.instagram.com/elespectador/\",\"youtubeURL\":\"https://www.youtube.com/user/Elespectadorcom?sub_confirmation=1\",\"suscribeLink\":\"https://www.elespectador.com/suscripcion-digital/\",\"exclusiveContentLink\":\"https://www.elespectador.com/contenido-exclusivo/\",\"sportsLiveLink\":\"https://www.elespectador.com/deportes/partidos-de-futbol-hoy-en-vivo/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=Boton-Parrilla-Header\",\"loginLink\":\"https://www.elespectador.com/login/\",\"sites\":[\"el-espectador\"],\"Red_de_portales\":{\"circulodeexperiencias.com\":\"https://www.facebook.com/CirculoDeExperienciasElEspectador/\",\"foros.elespectador.com\":\"http://foros.elespectador.com/\",\"bibo.elespectador.com\":\"http://bibo.elespectador.com/\",\"caracolnext.com\":\"https://www.caracolnext.com/\",\"caracoltv.com\":\"https://www.caracoltv.com/\",\"noticiascaracol.com\":\"https://www.noticiascaracol.com\",\"golcaracol.com\":\"https://www.golcaracol.com\",\"caracolplay.com\":\"https://www.caracolplay.com\",\"caracoltvcorporativo.com\":\"https://www.caracoltvcorporativo.com/\",\"bluradio.com\":\"https://www.bluradio.com/\",\"lakalle.com\":\"https://www.lakalle.com\",\"hjck.com\":\"https://hjck.com/\",\"shock.co\":\"https://www.shock.co/\",\"Volk\":\"https://volkgames.com/\"},\"Servicios\":{\"Paute con nosotros\":\"https://www.elespectador.com/paute-con-nosotros/\",\"Suscripciones impresas\":\"http://suscripciones.elespectador.com/\",\"Círculo de experiencias\":\"https://www.facebook.com/CirculoDeExperienciasElEspectador/\",\"Foros El Espectador\":\"http://foros.elespectador.com/\",\"Edictos y avisos judiciales\":\"http://judiciales.elespectador.com/\"},\"NewsLetter\":{\"user\":\"043bd90b2533e322d34ce78476703751\",\"password\":\"8bdd08542fbe197f348d38c1ba986923\",\"server\":\"https://personalizados.elespectador.com/service-nw-pc\"},\"Secciones\":{\"Opinión\":\"https://www.elespectador.com/opinion/\",\"Salud\":\"https://www.elespectador.com/noticias/salud/\",\"Judicial\":\"https://www.elespectador.com/noticias/judicial/\",\"Educación\":\"https://www.elespectador.com/noticias/educacion/\",\"Política\":\"https://www.elespectador.com/noticias/politica/\",\"Actualidad\":\"https://www.elespectador.com/noticias/actualidad/\",\"Investigación\":\"https://www.elespectador.com/noticias/investigacion/\",\"Alto Turmequé\":\"https://www.elespectador.com/nptocias/alto-turmeque&\",\"Economía\":\"https://www.elespectador.com/noticias/economia\",\"Blogs\":\"https://blogs.elespectador.com/\",\"Bogotá\":\"https://www.elespectador.com/noticias/bogota/\",\"Mundo Destinos\":\"https://www.elespectador.com/noticias/mundo-destinos/\",\"Nacional\":\"https://www.elespectador.com/noticias/nacional/\",\"Autos\":\"https://www.elespectador.com/noticias/autos/\",\"El Mundo\":\"https://www.elespectador.com/noticias/el-mundo/\",\"Deportes\":\"https://www.elespectador.com/deportes/\",\"Tecnología\":\"https://www.elespectador.com/noticias/tecnologia/\",\"Entretenimiento\":\"https://www.elespectador.com/entretenimiento/\",\"Cultura\":\"https://www.elespectador.com/noticias/cultura\",\"Horóscopo\":\"https://www.elespectador.com/entretenimiento/horoscopo/\",\"Ciencia\":\"https://www.elespectador.com/noticias/ciencia/\",\"Colombia 2020\":\"https://www.elespectador.com/colombia2020/\",\"Medio Ambiente\":\"https://www.elespectador.com/noticias/medio-ambiente\",\"Cromos\":\"https://www.elespectador.com/cromos/\"},\"Digital\":{\"Formatos Estándar\":\"/digital/formatos-estandar/\",\"Formatos Premium\":\"/digital/formatos-premium\",\"Video\":\"/digital/video\"},\"Contenidos_Patrocinados\":{\"Especiales Miltimedia\":\"/contenidos-patrocinados/especiales-multimedia\",\"Formatos Premium\":\"https://www.elespectador.com/opinion/\",\"Videos\":\"https://www.elespectador.com/noticias/judicial/\"}}");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3JlL0xvZ28vZGVmYXVsdC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29yZS9TaXRlTGlua3MvU2l0ZUxpbmtzLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3JlL1NvY2lhbE1lZGlhL2RlZmF1bHQuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dsb2JhbC9mb290ZXIvZGVmYXVsdC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkxvZ28iLCJwcm9wcyIsImxvZ29zIiwiZm9vdGVyIiwibW9iaWxlRm9vdGVyIiwiaGVhZGVyIiwidHlwZSIsImxvZ29UeXBlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwic2l0ZUxpbmtzIiwibGlua3NEYXRhIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJsaW5rIiwibWFwIiwibCIsImxpIiwiU29jaWFsTWVkaWEiLCJzaXRlUHJvcGVydGllcyIsImV4Y2x1c2l2ZUNvbnRlbnRMaW5rIiwibG9jYXRpb24iLCJmYWNlYm9va1VSTCIsInR3aXR0ZXJVUkwiLCJ5b3V0dWJlVVJMIiwiaW5zdGFncmFtVVJMIiwiQ29tcG9uZW50IiwiRm9vdGVyIiwiZGV2aWNlIiwic2VjdGlvbnMiLCJjbGFzc0xpIiwicmVzdWx0IiwiZm9vdGVyU2VjdGlvbiIsImRpdiIsInNldFN0YXRlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibW9iaWxlQ29kZSIsIkJ1dHRvbiIsInByaW50U2VjdGlvbnMiLCJzZXJ2aWNpb3MiLCJyZWRQb3J0YWxlcyIsImRlc2t0b3BDb2RlIiwiaXNNb2JpbGUiLCJtb2JpbGVNZW51IiwiZGVza3RvcE1lbnUiLCJnbG9iYWxDb250ZW50Iiwic3VidHlwZSIsInN0YXRlIiwidXNlckN1c3RvbUZpZWxkcyIsInVzZXJXYW50c0FkcyIsImZsYWdGZXRjaCIsInRwT2JqZWN0IiwidW5kZWZpbmVkIiwidXNlclN1YnMiLCJsb2dnZWRJbiIsImlzU3Vic2NyaXB0b3IiLCJzaXRlUHJvcCIsIlJlZF9kZV9wb3J0YWxlcyIsIlNlcnZpY2lvcyIsInN1c2NyaWJlTGluayIsIlNlY2Npb25lcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwiaGFuZGxlVFAiLCJkZWZpbmVNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuLypCb29zdHJhcCBDb21wb25lbnQqL1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcclxuXHJcbi8qXHJcbiAgRGVzY3JpcHRpb246ICBTZXQgdGhlIGxvZ28gaW1hZ2UgZGVwZW5kaW5nIG9mIHRoZSBkZXZpY2UgdHlwZVxyXG4gIEF1dGhvcjogICAgICAgTWFyaWEgRmVybmFuZGEgR2FyY8OtYSBNXHJcbiAgRGF0ZTogICAgICAgICAxNS8wMS8yMDIwXHJcbiAgcHJvcHM6ICAgICAgICBsb2dvVHlwZTogdHlwZSBvZiB0aGUgZGV2aWNlIChtb2JpbGUsIGhlYWRlciwgbW9iaWxlRm9vdGVyKVxyXG4qL1xyXG5cclxuY29uc3QgTG9nbyA9IHByb3BzID0+IHtcclxuICBjb25zdCBsb2dvcyA9IHtcclxuICAgIGZvb3RlcjogJy9mb290ZXJMb2dvLnN2ZycsXHJcbiAgICBtb2JpbGVGb290ZXI6ICcvbW9iaWxlTG9nby5zdmcnLFxyXG4gICAgaGVhZGVyOiAnL0hlYWRlckxvZ28ucG5nJyxcclxuICB9O1xyXG5cclxuICBjb25zdCB0eXBlID0gcHJvcHMubG9nb1R5cGUgfHwgJ2hlYWRlcic7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgTG9nbyBMb2dvXyR7dHlwZX1gfT5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtgJHtsb2dvc1t0eXBlXX1gfVxyXG4gICAgICAgIGFsdD0nRWwgRXNwZWN0YWRvcidcclxuICAgICAgICBmbHVpZFxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkxvZ28ucHJvcFR5cGVzID0ge1xyXG4gIGxvZ29UeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qXHJcbkRlc2NyaXB0aW9uOiAgR2V0IHRoZSBzaXRlIGxpbmtzIGZyb20gYW4gT2JqZWN0XHJcbkF1dGhvcjogICAgICAgTWFyaWEgRmVybmFuZGEgR2FyY8OtYSBNXHJcbkRhdGU6ICAgICAgICAgMTgvMDIvMjAyMFxyXG5wcm9wczogICAgICAgIGxpbmtzRGF0YSAtLT4gT2JqZWN0IHdpdGggdGhlIGxpbmtzXHJcbiovXHJcbmNvbnN0IHNpdGVMaW5rcyA9IHByb3BzID0+IHtcclxuICAvL09iamVjdCB3aXRoIGxpbmtzXHJcbiAgY29uc3QgeyBsaW5rc0RhdGEgfSA9IHByb3BzO1xyXG4gIC8vQ29udmVydCB0aGUgb2JqZWN0IGtleXMgaW50byBhbiBhcnJheVxyXG4gIGNvbnN0IG5hbWUgPSBPYmplY3Qua2V5cyhsaW5rc0RhdGEpO1xyXG4gIC8vbWFwIHRoZSBhcnJheSB0byBnZXQgdGhlIGxpbmtzIGNvZGUgdG8gcmV0dXJuIGl0XHJcbiAgY29uc3QgbGluayA9IG5hbWUubWFwKGwgPT4ge1xyXG4gICAgY29uc3QgbGkgPSAoXHJcbiAgICAgIDxsaSBrZXk9e2x9PlxyXG4gICAgICAgIDxhIGhyZWY9e2xpbmtzRGF0YVtsXX0gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+XHJcbiAgICAgICAgICB7bH1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGxpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBsaW5rO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2l0ZUxpbmtzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2l0ZVByb3BlcnRpZXMgZnJvbSAnLi4vLi4vLi4vcHJvcGVydGllcy9pbmRleC5qc29uJztcclxuXHJcbi8qUmVzb3VyY2VzKi9cclxuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbi9kZWZhdWx0JztcclxuXHJcbi8qSW1hZ2VzKi9cclxuLy9pbXBvcnQgdHZJY29uIGZyb20gJ34vcmVzb3VyY2VzL2ltYWdlcy90dkljb24uc3ZnJztcclxuXHJcbi8qXHJcbkRlc2NyaXB0aW9uOiAgcmV0dXJuIGFuIGljb24gc2V0IHdpdGggdGhlIHNvY2lhbCBtZWRpYSBidXR0b25zXHJcbkF1dGhvcjogICAgICAgTWFyaWEgRmVybmFuZGEgR2FyY8OtYSBNXHJcbkRhdGU6ICAgICAgICAgMTUvMDEvMjAyMFxyXG5wcm9wczogICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbiBvZiB0aGUgY29tcG9uZW50IGluIHRoZSBwYWdlIChmb290ZXIgb3IgaGVhZGVyKVxyXG4qL1xyXG5cclxuY2xhc3MgU29jaWFsTWVkaWEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvL0dldCBzaXRlIHByb3BlcnRpZXNcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J1NvY2lhbE5ldHdvcmtzJz5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3NpdGVQcm9wZXJ0aWVzLmV4Y2x1c2l2ZUNvbnRlbnRMaW5rfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BTb2NpYWxOZXR3b3Jrcy1JY29uIFNvY2lhbE5ldHdvcmtzLUljb25fJHt0aGlzLnByb3BzLmxvY2F0aW9ufUxvY2tJY29uYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBpY29uPSdsb2NrJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb25fJHt0aGlzLnByb3BzLmxvY2F0aW9ufVN2Z0hlaWdodGB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtzaXRlUHJvcGVydGllcy5mYWNlYm9va1VSTH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbiBTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1GYkljb25gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIGljb249J2ZhY2Vib29rJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YFNvY2lhbE5ldHdvcmtzLUljb25fJHt0aGlzLnByb3BzLmxvY2F0aW9ufVN2Z0hlaWdodGB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtzaXRlUHJvcGVydGllcy50d2l0dGVyVVJMfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BTb2NpYWxOZXR3b3Jrcy1JY29uIFNvY2lhbE5ldHdvcmtzLUljb25fJHt0aGlzLnByb3BzLmxvY2F0aW9ufVR3SWNvbmB9XHJcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj0ndHdpdHRlcidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1TdmdIZWlnaHRgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17c2l0ZVByb3BlcnRpZXMueW91dHViZVVSTH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbiBTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1ZdEljb25gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIGljb249J3lvdXR1YmUnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbl8ke3RoaXMucHJvcHMubG9jYXRpb259U3ZnSGVpZ2h0YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3NpdGVQcm9wZXJ0aWVzLmluc3RhZ3JhbVVSTH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgU29jaWFsTmV0d29ya3MtSWNvbiBTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1JZ0ljb25gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIGljb249J2luc3RhZ3JhbSdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BTb2NpYWxOZXR3b3Jrcy1JY29uXyR7dGhpcy5wcm9wcy5sb2NhdGlvbn1TdmdIZWlnaHRgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxNZWRpYTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuLypCb29zdHJhcCBDb21wb25lbnQqL1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBDb2wsXHJcbiAgUm93LFxyXG4gIEFjY29yZGlvbixcclxuICBDYXJkLFxyXG4gIEJ1dHRvbixcclxuICBJbWFnZSxcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9jb3JlL0ljb24vZGVmYXVsdC5qc3gnO1xyXG4vKlJlYWN0IENvbXBvbmVudHMqL1xyXG5pbXBvcnQgU2l0ZUxpbmtzIGZyb20gJy4uLy4uL2NvcmUvU2l0ZUxpbmtzL1NpdGVMaW5rcy5qc3gnO1xyXG5pbXBvcnQgc2l0ZVByb3BlcnRpZXMgZnJvbSAnLi4vLi4vLi4vcHJvcGVydGllcy9pbmRleC5qc29uJztcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi8uLi9jb3JlL1NvY2lhbE1lZGlhL2RlZmF1bHQuanN4JztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vY29yZS9Mb2dvL2RlZmF1bHQuanN4JztcclxuLypJbWFnZXMqL1xyXG4vKlxyXG5EZXNjcmlwdGlvbjogIFNob3cgZm9vdGVyIHdpdGggYWxsIGl0cyBmZWF0dXJlc1xyXG5BdXRob3I6ICAgICAgIE1hcmlhIEZlcm5hbmRhIEdhcmPDrWEgTVxyXG5EYXRlOiAgICAgICAgIDE1LzAxLzIwMjBcclxucHJvcHM6ICAgICAgICBzaXRlUHJvcGVydGllcyAtLT4gUHJvcGVydGllcyBvZiB0aGUgc2l0ZVxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIC8vc2F2ZSB0aGUgc3RhdGUgb2YgdGhlIHdpbmRvdyB3aWR0aFxyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgd2lkdGg6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmlubmVyV2lkdGggOiA3MDAsXHJcbiAgICAgIHVzZXJDdXN0b21GaWVsZHM6IG51bGwsXHJcbiAgICAgIHVzZXJXYW50c0FkczogZmFsc2UsXHJcbiAgICAgIGZsYWdGZXRjaDogZmFsc2UsXHJcbiAgICAgIHRwT2JqZWN0OiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvd1sndHAnXSA6IHVuZGVmaW5lZCxcclxuICAgICAgdXNlclN1YnM6IG51bGwsXHJcbiAgICAgIGxvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgaXNTdWJzY3JpcHRvcjogdHJ1ZSxcclxuICAgICAgaXNNb2JpbGU6IGZhbHNlLFxyXG4gICAgICAvLyBzZWN0aW9uc05hbWU6IFtdLFxyXG4gICAgfTtcclxuICAgIC8vR2V0IHNpdGUgcHJvcGVydGllc1xyXG4gICAgY29uc3QgIHNpdGVQcm9wICA9IHNpdGVQcm9wZXJ0aWVzO1xyXG4gICAgLy9HZXQgdGhlIGdyb3VwIG9mIGxpbmtzIG9mICdyZWRQb3J0YWxlcydcclxuICAgIHRoaXMucmVkUG9ydGFsZXMgPSBzaXRlUHJvcC5SZWRfZGVfcG9ydGFsZXM7XHJcbiAgICAvL0dldCB0aGUgZ3JvdXAgb2YgbGlua3Mgb2YgJ3NlcnZpY2lvcydcclxuICAgIHRoaXMuc2VydmljaW9zID0gc2l0ZVByb3AuU2VydmljaW9zO1xyXG4gICAgLy9MaW5rcyBmb3Igc3VzY3JpYmUgYW5kIGxvZ2luXHJcbiAgICB0aGlzLnN1c2NyaWJlTGluayA9IHNpdGVQcm9wLnN1c2NyaWJlTGluaztcclxuICAgLy8gdGhpcy5sb2dpbkxpbmsgPSBzaXRlUHJvcGVydGllcy5sb2dpbkxpbms7XHJcbiAgIHRoaXMuc2VjdGlvbnMgPSBzaXRlUHJvcC5TZWNjaW9uZXM7XHJcbiAgfVxyXG5cclxuIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuaGFuZGxlVFApO1xyXG4gICAgLy8gdGhpcy5mZXRjaFNlY3Rpb25Hcm91cCgpO1xyXG4gICAvLyB0aGlzLmZldGNoRm9vdGVySXRlbXMoKTtcclxuICB9XHJcblxyXG5cclxuICAvL0dldCB0aGUganNvbiBzZWN0aW9ucyBvYnRhaW5lZCBmcm9tIHRoZSBBUEkgYW5kIHJldHVybiB0aGVtIHRvIHJlbmRlclxyXG4gIHByaW50U2VjdGlvbnMgPSAoZGV2aWNlLCBzZWN0aW9ucykgPT4ge1xyXG4gICAgLy9TZXQgICAgIGxlIG9mIHRoZSBtZW51IGRlcGVuZHMgb2YgdGhlIGRldmljZSB0eXBlXHJcbiAgICBjb25zdCBjbGFzc0xpID1cclxuICAgICAgZGV2aWNlID09PSAnZGVza3RvcCdcclxuICAgICAgICA/ICdGb290ZXItU2VjdGlvbnNEZXNrdG9wTWVudUl0ZW1zJ1xyXG4gICAgICAgIDogJ0Zvb3Rlci1Cb2R5TW9iaWxlTWVudUl0ZW1zJztcclxuXHJcbiAgICAvL01hcCB0byBoZXIgdGhlIG5hbWVzIGZyb20gJ2Fyck5hbWVTZWN0aW9uJyBhbiB0aGUgY29kZSBvZiB0aGUgbGlua3NcclxuICAgIC8vY29uc3QgZm9vdGVyU2VjdGlvbiA9IHNlY3Rpb25zLnZhbHVlcygpO1xyXG4gICAgY29uc3QgbmFtZSA9IE9iamVjdC5rZXlzKHNlY3Rpb25zKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5hbWUubWFwKGZvb3RlclNlY3Rpb24gPT4ge1xyXG4gICAgICBjb25zdCBkaXYgPSAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NMaX0ga2V5PXtmb290ZXJTZWN0aW9uLm5hbWV9PlxyXG4gICAgICAgICAgPGEgaHJlZj17c2VjdGlvbnNbZm9vdGVyU2VjdGlvbl19Pntmb290ZXJTZWN0aW9ufTwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIC8vc2V0IHRoZSBzdGF0ZSBvZiB0aGUgd2luZG93IHdpZHRoXHJcbiAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfSk7XHJcbiAgfTtcclxuXHJcbiAgLy9jb2RlIG9mIHRoZSBtb2JpbGUgZm9vdGVyIG1lbnVcclxuICBtb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlQ29kZSA9IChcclxuICAgICAgPEFjY29yZGlvbiBjbGFzc05hbWU9J0Zvb3Rlci1Nb2JpbGVNZW51Jz5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J0Zvb3Rlci1DYXJkTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICA8Q2FyZC5IZWFkZXIgY2xhc3NOYW1lPSdGb290ZXItSGVhZGVyTW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgIDxhPlNlY2Npb25lczwvYT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGVcclxuICAgICAgICAgICAgICBhcz17QnV0dG9ufVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2xpbmsnXHJcbiAgICAgICAgICAgICAgZXZlbnRLZXk9JzAnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQnV0dG9uTW9iaWxlTWVudSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJY29uIGljb249J2NoZXZyb24tZG93bicgLz5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2VcclxuICAgICAgICAgICAgZXZlbnRLZXk9JzAnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUNvbGxhcHNlTW9iaWxlTWVudSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Q29udGFpbmVyU2VjY2lvbmVzJz5cclxuICAgICAgICAgICAgICB7dGhpcy5wcmludFNlY3Rpb25zKCdtb2JpbGUnLCB0aGlzLnNlY3Rpb25zKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUxpbmUnPjwvZGl2PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nRm9vdGVyLUNhcmRNb2JpbGVNZW51Jz5cclxuICAgICAgICAgIDxDYXJkLkhlYWRlciBjbGFzc05hbWU9J0Zvb3Rlci1IZWFkZXJNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgPGE+U2VydmljaW9zIDwvYT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGVcclxuICAgICAgICAgICAgICBhcz17QnV0dG9ufVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2xpbmsnXHJcbiAgICAgICAgICAgICAgZXZlbnRLZXk9JzInXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQnV0dG9uTW9iaWxlTWVudSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJY29uIGljb249J2NoZXZyb24tZG93bicgLz5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2VcclxuICAgICAgICAgICAgZXZlbnRLZXk9JzInXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUNvbGxhcHNlTW9iaWxlTWVudSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudSc+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Q29udGFpbmVyUmVkZXNTZXJ2aWNpb3MnPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS9sb2dpbi9cIj5JbmljaWFyIFNlc2nDs248L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS9zdXNjcmlwY2lvbi1kaWdpdGFsL1wiPlN1c2Nyw61iZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxTaXRlTGlua3MgbGlua3NEYXRhPXt0aGlzLnNlcnZpY2lvc30gLz5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUxpbmUnPjwvZGl2PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nRm9vdGVyLUNhcmRNb2JpbGVNZW51Jz5cclxuICAgICAgICAgIDxDYXJkLkhlYWRlciBjbGFzc05hbWU9J0Zvb3Rlci1IZWFkZXJNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgPGE+UmVkIGRlIHBvcnRhbGVzPC9hPlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZVxyXG4gICAgICAgICAgICAgIGFzPXtCdXR0b259XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nbGluaydcclxuICAgICAgICAgICAgICBldmVudEtleT0nMSdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1CdXR0b25Nb2JpbGVNZW51J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEljb24gaWNvbj0nY2hldnJvbi1kb3duJyAvPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZVxyXG4gICAgICAgICAgICBldmVudEtleT0nMSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQ29sbGFwc2VNb2JpbGVNZW51J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnVDb250YWluZXJSZWRlc1NlcnZpY2lvcyc+XHJcbiAgICAgICAgICAgICAgICA8U2l0ZUxpbmtzIGxpbmtzRGF0YT17dGhpcy5yZWRQb3J0YWxlc30gLz5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUxpbmUnPjwvZGl2PlxyXG4gICAgICA8L0FjY29yZGlvbj5cclxuICAgICk7XHJcbiAgICByZXR1cm4gbW9iaWxlQ29kZTtcclxuICB9O1xyXG5cclxuICAvL2NvZGUgb2YgdGhlIGRlc2t0b3AgZm9vdGVyIG1lbnVcclxuICBkZXNrdG9wTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRlc2t0b3BDb2RlID0gKFxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9J0Zvb3Rlci1EZXNrdG9wTWVudSc+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIGxnPXs0fSBtZD17MTJ9IHNtPXsxMn0gY2xhc3NOYW1lPSdGb290ZXItQ29sdW1uRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVRpdGxlc0Rlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgICA8YT5TZWNjaW9uZXM8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItU2VjdGlvbnNEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgIHt0aGlzLnByaW50U2VjdGlvbnMoJ2Rlc2t0b3AnLCB0aGlzLnNlY3Rpb25zKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBsZz17M30gbWQ9ezR9IHNtPXs0fSBjbGFzc05hbWU9J0Zvb3Rlci1EaXZpc2lvbkRlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1UaXRsZXNEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgICAgPGE+U2VydmljaW9zPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHsvKjxMb2dpblZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIGxvZ2dlZEluPXt0aGlzLnN0YXRlLmxvZ2dlZElufVxyXG4gICAgICAgICAgICAgICAgaXNTdWJzY3JpcHRvcj17dGhpcy5zdGF0ZS5pc1N1YnNjcmlwdG9yfVxyXG4gICAgICAgICAgICAgICAgbG9naW5MaW5rPXt0aGlzLmxvZ2luTGlua31cclxuICAgICAgICAgICAgICAgIHN1c2NyaWJlTGluaz17dGhpcy5zdXNjcmliZUxpbmt9XHJcbiAgICAgICAgICAgICAgLz4qL31cclxuICAgICAgICAgICAgICA8U2l0ZUxpbmtzIGxpbmtzRGF0YT17dGhpcy5zZXJ2aWNpb3N9IC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgICAgIGNsYXNzTmFtZT0nRm9vdGVyLURpdmlzaW9uRGVza3RvcE1lbnVfcmVkZXMnXHJcbiAgICAgICAgICAgIGxnPXs1fVxyXG4gICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItVGl0bGVzRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICAgIDxhPlJlZCBkZSBwb3J0YWxlczwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1TZWN0aW9uTGlua3NEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMucmVkUG9ydGFsZXN9IC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlc2t0b3BDb2RlO1xyXG4gIH07XHJcblxyXG4gIC8vRGVwZW5kcyBvZiB0aGUgd2luZG93IHdpZHRoLCByZW5kZXIgYSBtZW51IHR5cGVcclxuICBkZWZpbmVNZW51ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9iaWxlTWVudSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVza3RvcE1lbnUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0dldCBzdWJ0eXBlIGZyb20gY29udGV4dFxyXG4gIGdldFN1YnR5cGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5nbG9iYWxDb250ZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmdsb2JhbENvbnRlbnQuc3VidHlwZSA9PT0gJ2NvbHVtbicgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NvbnRyb2wgdGhlIHdpbmRvdyB3aWR0aFxyXG4gICAgdGhpcy5pc01vYmlsZSA9IHRoaXMuc3RhdGUud2lkdGggPCA1NzY7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlcic+XHJcbiAgICAgICAgey8qdGhpcy5nZXRTdWJ0eXBlKCkgIT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgPFBpYW5vU3VzY3JpYmVcclxuICAgICAgICAgICAgcGlhbm9DbGFzcz0ncGlhbm9TdWJzY3JpYmVGb290ZXInXHJcbiAgICAgICAgICAgIHBpYW5vU3ViQ2xhc3M9J1BpYW5vQ29udGFpbmVyX2Zvb3RlcidcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSovfVxyXG4gICAgICAgIHsvL2FsbG93QWRzSW5Cb2R5ICYmIDxBZHMgc2xvdE5hbWU9J291dF9vZl9wYWdlJyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7Ly9hbGxvd0Fkc0luQm9keSAmJiA8QWRzIHNsb3ROYW1lPSdvbmVfeF9vbmUnIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsvL2FsbG93QWRzSW5Cb2R5ICYmIDxTdGlja3lBZCAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nRm9vdGVyLUhlYWRlcic+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezR9IG1kPXs1fSBsZz17Nn0geGw9ezZ9IGNsYXNzTmFtZT0nRm9vdGVyLUxvZ28nPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb1R5cGU9J2Zvb3RlcidcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb1R5cGU9J21vYmlsZUZvb3RlcidcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCAgeHM9ezZ9IHNtPXsxfSBtZD17MX0gbGc9ezF9IHhsPXsxfSBjbGFzc05hbWU9J0Zvb3Rlci1CdXR0b24nPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS9zdXNjcmlwY2lvbi1kaWdpdGFsL1wiPlN1c2Nyw61iZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgeHM9ezR9XHJcbiAgICAgICAgICAgICAgICBzbT17Mn1cclxuICAgICAgICAgICAgICAgIG1kPXsyfVxyXG4gICAgICAgICAgICAgICAgbGc9ezJ9XHJcbiAgICAgICAgICAgICAgICB4bD17Mn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLVRleHRGb2xsb3cnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5Tw61nYW5vcyBlbjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezh9IHNtPXs1fSBtZD17NH0gbGc9ezN9IHhsPXszfSBjbGFzc05hbWU9J0Zvb3Rlci1Tb2NpYWwnPlxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbCBsb2NhdGlvbj0nZm9vdGVyJy8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUxpbmUnPjwvZGl2PlxyXG4gICAgICAgICAge3RoaXMuZGVmaW5lTWVudSgpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1JbmZvJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0Jz5cclxuICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3NlcnZpY2lvLWFsLWNsaWVudGUvJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdExvZ28nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9jbG91ZGZyb250LXVzLWVhc3QtMS5pbWFnZXMuYXJjcHVibGlzaGluZy5jb20vc2FuZGJveC5lbGVzcGVjdGFkb3IvRE9aRUk2Sk1NQkc3NUFRS1k2NDRRSllPWVEucG5nJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0SW5mbyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RUaXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vc2VydmljaW8tYWwtY2xpZW50ZS8nPkNvbnTDoWN0ZW5vczwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0VGV4dCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RDb2RlJz5cclxuICAgICAgICAgICAgICAgICAgU2VydmljaW8gYWwgY2xpZW50ZTogTMONTkVBIE5BQ0lPTkFMOiAwMSA4MDAwIDUxMDkwMyBFTiBCT0dPVMOBOiA0MDU1NTQwLCA8YSBocmVmPVwibWFpbHRvOnNlcnZpY2lvYWxjbGllbnRlQGVsZXNwZWN0YWRvci5jb21cIj5zZXJ2aWNpb2FsY2xpZW50ZUBlbGVzcGVjdGFkb3IuY29tLjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdF9saW5lJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLU1lbWJlcnMnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVyc1RpdGxlJz5NaWVtYnJvcyBkZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5pYWJjb2xvbWJpYS5jb20vJ1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICBzcmM9Jy9pYWIucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgYWx0PSdJQUIgQ29sb21iaWEnXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzSWltYWdlcydcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9hbWkub3JnLmNvLydcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICBzcmM9Jy9hbWkucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgYWx0PSdBc29jaWFjacOzbiBDb2xvbWJpYW5hIGRlIE1lZGlvcyBkZSBJbmZvcm1hY2nDs24nXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzSWltYWdlcydcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdF9saW5lJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVNpYyc+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LnNpYy5nb3YuY28vJ1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgc3JjPScvc2ljTG9nby5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICBhbHQ9J1N1cGVyaW50ZW5kZW5jaWEgZGUgaW5kdXN0cmlhIHkgY29tZXJjaW8nXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzSWltYWdlcydcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItVHljTGlua3MnPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBFbCB1c28gZGUgZXN0ZSBzaXRpbyB3ZWIgaW1wbGljYSBsYSBhY2VwdGFjacOzbiBkZSBsb3MgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vdGVybWlub3MjdGVybWlub3MteS1jb25kaWNpb25lc1wiPiBUw6lybWlub3MgeSBDb25kaWNpb25lcyA8L2E+IHkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vdGVybWlub3MjcG9saXRpY2EtZGUtdHJhdGFtaWVudG8tZGUtZGF0b3NcIj4gUG9sw610aWNhcyBkZSBwcml2YWNpZGFkPC9hPiBkZSBDT01VTklDQU4gUy5BLiBUb2RvcyBsb3MgRGVyZWNob3MgUmVzZXJ2YWRvcyBELlIuQS4gUHJvaGliaWRhIHN1IHJlcHJvZHVjY2nDs24gdG90YWwgbyBwYXJjaWFsLCBhc8OtIGNvbW8gc3UgdHJhZHVjY2nDs24gYSBjdWFscXVpZXIgaWRpb21hIHNpbiBsYSBhdXRvcml6YWNpw7NuIGVzY3JpdGEgZGUgc3UgdGl0dWxhci4gUmVwcm9kdWN0aW9uIGluIHdob2xlIG9yIGluIHBhcnQsIG9yIHRyYW5zbGF0aW9uIHdpdGhvdXQgd3JpdHRlbiBwZXJtaXNzaW9uIGlzICBwcm9oaWJpdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkIDIwMjBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4uLy4uL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSJdLCJzb3VyY2VSb290IjoiIn0=