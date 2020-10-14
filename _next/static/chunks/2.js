(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./components/Index/getImages.jsx":
/*!****************************************!*\
  !*** ./components/Index/getImages.jsx ***!
  \****************************************/
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
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\Index\\getImages.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var getImage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(getImage, _Component);

  var _super = _createSuper(getImage);

  function getImage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, getImage);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "mobileMenu", function () {
      var mobileButtons = __jsx("div", {
        className: "Index-imageMediaKitMobile",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_9___default.a, {
        height: 400,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/images/mediakitdigital_movil.png",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      })));

      return mobileButtons;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "desktopMenu", function () {
      var desktopButtons = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 2,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_9___default.a, {
        height: 400,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }, __jsx("img", {
        className: "Index-imageMediaKit1",
        src: "/images/cel_home.png",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 4,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_9___default.a, {
        height: 400,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, __jsx("img", {
        className: "Index-imageMediaKit2",
        src: "/images/tablet_home.png",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 6,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_9___default.a, {
        height: 400,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, __jsx("img", {
        className: "Index-imageMediaKit3",
        src: "/images/computador_home.png",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      })))));

      return desktopButtons;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "defineMenu", function () {
      if (_this.isMobile) {
        return _this.mobileMenu();
      } else {
        return _this.desktopMenu();
      }
    });

    _this.state = {
      width: true ? window.innerWidth : undefined
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(getImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
       true && window.addEventListener("resize", this.handleWindowSizeChange);
    } //set the state of the window width

  }, {
    key: "render",
    value: function render() {
      this.isMobile = this.state.width < 830;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 12
        }
      }, this.defineMenu());
    }
  }]);

  return getImage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (getImage);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmRleC9nZXRJbWFnZXMuanN4Il0sIm5hbWVzIjpbImdldEltYWdlIiwicHJvcHMiLCJzZXRTdGF0ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1vYmlsZUJ1dHRvbnMiLCJkZXNrdG9wQnV0dG9ucyIsImlzTW9iaWxlIiwibW9iaWxlTWVudSIsImRlc2t0b3BNZW51Iiwic3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsImRlZmluZU1lbnUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGlPQWFNLFlBQU07QUFDN0IsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLGFBQUssRUFBRUMsTUFBTSxDQUFDQztBQUFoQixPQUFkO0FBQ0QsS0Fma0I7O0FBQUEscU5BaUJOLFlBQU07QUFDakIsVUFBTUMsYUFBYSxHQUNqQjtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscURBQUQ7QUFBVSxjQUFNLEVBQUUsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssV0FBRyxFQUFDLG1DQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLENBREY7O0FBT0EsYUFBT0EsYUFBUDtBQUNELEtBMUJrQjs7QUFBQSxzTkE2QkwsWUFBTTtBQUNsQixVQUFNQyxjQUFjLEdBQ2xCLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsbURBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQyxxREFBRDtBQUFVLGNBQU0sRUFBRSxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQ0UsV0FBRyxFQUFDLHNCQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQSxDQURBLENBREYsRUFVRSxNQUFDLG1EQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMscURBQUQ7QUFBVSxjQUFNLEVBQUUsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNGO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUNJLFdBQUcsRUFBQyx5QkFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREUsQ0FEQSxDQVZGLEVBa0JFLE1BQUMsbURBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQyxxREFBRDtBQUFVLGNBQU0sRUFBRSxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0Y7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQ0ksV0FBRyxFQUFDLDZCQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERSxDQURBLENBbEJGLENBREYsQ0FERjs7QUE4QkEsYUFBT0EsY0FBUDtBQUNELEtBN0RrQjs7QUFBQSxxTkFnRU4sWUFBTTtBQUNqQixVQUFJLE1BQUtDLFFBQVQsRUFBbUI7QUFDakIsZUFBTyxNQUFLQyxVQUFMLEVBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLE1BQUtDLFdBQUwsRUFBUDtBQUNEO0FBQ0YsS0F0RWtCOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWFIsV0FBSyxFQUFFLE9BQWdDQyxNQUFNLENBQUNDLFVBQXZDLEdBQW9ELFNBQUc7QUFEbkQsS0FBYjtBQUZpQjtBQUtsQjs7Ozt3Q0FFbUI7QUFDbEIsZUFDRUQsTUFBTSxDQUFDUSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxzQkFBdkMsQ0FERjtBQUVELEssQ0FFRDs7Ozs2QkE0RFM7QUFDUCxXQUFLTCxRQUFMLEdBQWdCLEtBQUtHLEtBQUwsQ0FBV1IsS0FBWCxHQUFtQixHQUFuQztBQUVBLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFNLEtBQUtXLFVBQUwsRUFBTixDQUFQO0FBQ0Q7Ozs7RUE3RW9CQywrQzs7QUFnRlJmLHVFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xyXG5cclxuY2xhc3MgZ2V0SW1hZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB3aWR0aDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lcldpZHRoIDogODMwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgLy9zZXQgdGhlIHN0YXRlIG9mIHRoZSB3aW5kb3cgd2lkdGhcclxuICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcclxuICB9O1xyXG5cclxuICBtb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlQnV0dG9ucyA9IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J0luZGV4LWltYWdlTWVkaWFLaXRNb2JpbGUnPlxyXG4gICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezQwMH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbWVkaWFraXRkaWdpdGFsX21vdmlsLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIHJldHVybiBtb2JpbGVCdXR0b25zO1xyXG4gIH07XHJcblxyXG4gIC8vY29kZSBvZiB0aGUgZGVza3RvcCBmb290ZXIgbWVudVxyXG4gIGRlc2t0b3BNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVza3RvcEJ1dHRvbnMgPSAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9ezJ9PlxyXG4gICAgICAgICAgPExhenlMb2FkIGhlaWdodD17NDAwfT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdJbmRleC1pbWFnZU1lZGlhS2l0MSdcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9jZWxfaG9tZS5wbmdcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L0xhenlMb2FkPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG4gICAgICAgICAgPExhenlMb2FkIGhlaWdodD17NDAwfSA+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9J0luZGV4LWltYWdlTWVkaWFLaXQyJ1xyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3RhYmxldF9ob21lLnBuZ1wiXHJcbiAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXs2fT5cclxuICAgICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezQwMH0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9J0luZGV4LWltYWdlTWVkaWFLaXQzJ1xyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2NvbXB1dGFkb3JfaG9tZS5wbmdcIlxyXG4gICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlc2t0b3BCdXR0b25zO1xyXG4gIH07XHJcblxyXG4gIC8vRGVwZW5kcyBvZiB0aGUgd2luZG93IHdpZHRoLCByZW5kZXIgYSBtZW51IHR5cGVcclxuICBkZWZpbmVNZW51ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9iaWxlTWVudSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVza3RvcE1lbnUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5zdGF0ZS53aWR0aCA8IDgzMDtcclxuXHJcbiAgICByZXR1cm4gPGRpdj57dGhpcy5kZWZpbmVNZW51KCl9PC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0SW1hZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=