webpackHotUpdate_N_E("pages/impresos",{

/***/ "./components/core/Carousel/default.jsx":
/*!**********************************************!*\
  !*** ./components/core/Carousel/default.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Icon/default.jsx */ "./components/core/Icon/default.jsx");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\core\\Carousel\\default.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ControlledCarousel = function ControlledCarousel(props) {
  var theme = props.theme;
  var children = props.children;
  var autoplay = props.autoplay ? true : false;
  var autoplaySpeed = props.autoplaySpeed ? props.autoplaySpeed : 5000;
  var settings = {
    focusOnSelect: props.focusOnSelect ? true : false,
    arrows: props.arrows ? true : false,
    nextArrow: __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: "chevron-right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: "chevron-left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 16
      }
    }),
    dots: props.dots ? true : false,
    infinite: props.infinite ? true : false,
    speed: props.speed ? props.speed : 500,
    slidesToShow: props.show ? props.show : 1,
    slidesToScroll: props.scroll ? props.scroll : 1,
    className: "Slides ".concat(theme, " ").concat(props.center),
    ref: props.reference,
    asNavFor: props.asNavFor,
    variableWidth: props.variableWidth ? true : false,
    adaptiveHeight: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    centerMode: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: false
      }
    }]
  };
  return __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 10
    }
  }), children);
};

_c = ControlledCarousel;
/* harmony default export */ __webpack_exports__["default"] = (ControlledCarousel);

var _c;

$RefreshReg$(_c, "ControlledCarousel");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3JlL0Nhcm91c2VsL2RlZmF1bHQuanN4Il0sIm5hbWVzIjpbIkNvbnRyb2xsZWRDYXJvdXNlbCIsInByb3BzIiwidGhlbWUiLCJjaGlsZHJlbiIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNldHRpbmdzIiwiZm9jdXNPblNlbGVjdCIsImFycm93cyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic2Nyb2xsIiwiY2xhc3NOYW1lIiwiY2VudGVyIiwicmVmIiwicmVmZXJlbmNlIiwiYXNOYXZGb3IiLCJ2YXJpYWJsZVdpZHRoIiwiYWRhcHRpdmVIZWlnaHQiLCJjZW50ZXJNb2RlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBQ2xDLE1BQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFwQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsS0FBSyxDQUFDRSxRQUF2QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0gsS0FBSyxDQUFDRyxRQUFOLEdBQWlCLElBQWpCLEdBQXdCLEtBQXpDO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSixLQUFLLENBQUNJLGFBQU4sR0FBc0JKLEtBQUssQ0FBQ0ksYUFBNUIsR0FBNEMsSUFBbEU7QUFFQSxNQUFNQyxRQUFRLEdBQUc7QUFDZkMsaUJBQWEsRUFBRU4sS0FBSyxDQUFDTSxhQUFOLEdBQXNCLElBQXRCLEdBQTZCLEtBRDdCO0FBRWZDLFVBQU0sRUFBRVAsS0FBSyxDQUFDTyxNQUFOLEdBQWUsSUFBZixHQUFzQixLQUZmO0FBR2ZDLGFBQVMsRUFBRSxNQUFDLDhEQUFEO0FBQU8sVUFBSSxFQUFDLGVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhJO0FBSWZDLGFBQVMsRUFBRSxNQUFDLDhEQUFEO0FBQU8sVUFBSSxFQUFDLGNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpJO0FBS2ZDLFFBQUksRUFBRVYsS0FBSyxDQUFDVSxJQUFOLEdBQWEsSUFBYixHQUFvQixLQUxYO0FBTWZDLFlBQVEsRUFBRVgsS0FBSyxDQUFDVyxRQUFOLEdBQWlCLElBQWpCLEdBQXdCLEtBTm5CO0FBT2ZDLFNBQUssRUFBRVosS0FBSyxDQUFDWSxLQUFOLEdBQWNaLEtBQUssQ0FBQ1ksS0FBcEIsR0FBNEIsR0FQcEI7QUFRZkMsZ0JBQVksRUFBRWIsS0FBSyxDQUFDYyxJQUFOLEdBQWFkLEtBQUssQ0FBQ2MsSUFBbkIsR0FBMEIsQ0FSekI7QUFTZkMsa0JBQWMsRUFBRWYsS0FBSyxDQUFDZ0IsTUFBTixHQUFlaEIsS0FBSyxDQUFDZ0IsTUFBckIsR0FBOEIsQ0FUL0I7QUFVZkMsYUFBUyxtQkFBWWhCLEtBQVosY0FBcUJELEtBQUssQ0FBQ2tCLE1BQTNCLENBVk07QUFXZkMsT0FBRyxFQUFFbkIsS0FBSyxDQUFDb0IsU0FYSTtBQVlmQyxZQUFRLEVBQUVyQixLQUFLLENBQUNxQixRQVpEO0FBYWZDLGlCQUFhLEVBQUV0QixLQUFLLENBQUNzQixhQUFOLEdBQXNCLElBQXRCLEdBQTZCLEtBYjdCO0FBY2ZDLGtCQUFjLEVBQUUsSUFkRDtBQWVmcEIsWUFBUSxFQUFFQSxRQWZLO0FBZ0JmQyxpQkFBYSxFQUFFQSxhQWhCQTtBQWlCZm9CLGNBQVUsRUFBRSxJQWpCRztBQW1CZkMsY0FBVSxFQUFFLENBQ1Y7QUFDRUMsZ0JBQVUsRUFBRSxHQURkO0FBRUVyQixjQUFRLEVBQUU7QUFDUlEsb0JBQVksRUFBRSxDQUROO0FBRVJFLHNCQUFjLEVBQUUsQ0FGUjtBQUdSUSxzQkFBYyxFQUFFLElBSFI7QUFJUmIsWUFBSSxFQUFFO0FBSkU7QUFGWixLQURVO0FBbkJHLEdBQWpCO0FBZ0NBLFNBQU8sTUFBQyxrREFBRCx5RkFBWUwsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXVCSCxRQUF2QixDQUFQO0FBQ0QsQ0F2Q0Q7O0tBQU1ILGtCO0FBeUNTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXByZXNvcy5kNjEzN2JmZDE4MTdlNjM5ODAxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vY29yZS9JY29uL2RlZmF1bHQuanN4JztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcblxyXG5jb25zdCBDb250cm9sbGVkQ2Fyb3VzZWwgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgdGhlbWUgPSBwcm9wcy50aGVtZTtcclxuICBjb25zdCBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xyXG4gIGNvbnN0IGF1dG9wbGF5ID0gcHJvcHMuYXV0b3BsYXkgPyB0cnVlIDogZmFsc2U7XHJcbiAgY29uc3QgYXV0b3BsYXlTcGVlZCA9IHByb3BzLmF1dG9wbGF5U3BlZWQgPyBwcm9wcy5hdXRvcGxheVNwZWVkIDogNTAwMDtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBmb2N1c09uU2VsZWN0OiBwcm9wcy5mb2N1c09uU2VsZWN0ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiBwcm9wcy5hcnJvd3MgPyB0cnVlIDogZmFsc2UsXHJcbiAgICBuZXh0QXJyb3c6IDxJY29uICBpY29uPSdjaGV2cm9uLXJpZ2h0Jy8+LFxyXG4gICAgcHJldkFycm93OiA8SWNvbiAgaWNvbj0nY2hldnJvbi1sZWZ0Jy8+LFxyXG4gICAgZG90czogcHJvcHMuZG90cyA/IHRydWUgOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiBwcm9wcy5pbmZpbml0ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgIHNwZWVkOiBwcm9wcy5zcGVlZCA/IHByb3BzLnNwZWVkIDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiBwcm9wcy5zaG93ID8gcHJvcHMuc2hvdyA6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogcHJvcHMuc2Nyb2xsID8gcHJvcHMuc2Nyb2xsIDogMSxcclxuICAgIGNsYXNzTmFtZTogYFNsaWRlcyAke3RoZW1lfSAke3Byb3BzLmNlbnRlcn1gLCAgXHJcbiAgICByZWY6IHByb3BzLnJlZmVyZW5jZSxcclxuICAgIGFzTmF2Rm9yOiBwcm9wcy5hc05hdkZvcixcclxuICAgIHZhcmlhYmxlV2lkdGg6IHByb3BzLnZhcmlhYmxlV2lkdGggPyB0cnVlIDogZmFsc2UsXHJcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiBhdXRvcGxheSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IGF1dG9wbGF5U3BlZWQsXHJcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gPFNsaWRlciB7Li4uc2V0dGluZ3N9PntjaGlsZHJlbn08L1NsaWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVkQ2Fyb3VzZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==