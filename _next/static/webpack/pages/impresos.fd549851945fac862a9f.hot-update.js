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
    //  className: `Slides ${theme} ${props.center}`,
    className: "Slides ".concat(theme),
    ref: props.reference,
    asNavFor: props.asNavFor,
    variableWidth: props.variableWidth ? true : false,
    adaptiveHeight: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    //  centerMode: true,
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
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3JlL0Nhcm91c2VsL2RlZmF1bHQuanN4Il0sIm5hbWVzIjpbIkNvbnRyb2xsZWRDYXJvdXNlbCIsInByb3BzIiwidGhlbWUiLCJjaGlsZHJlbiIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNldHRpbmdzIiwiZm9jdXNPblNlbGVjdCIsImFycm93cyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic2Nyb2xsIiwiY2xhc3NOYW1lIiwicmVmIiwicmVmZXJlbmNlIiwiYXNOYXZGb3IiLCJ2YXJpYWJsZVdpZHRoIiwiYWRhcHRpdmVIZWlnaHQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxLQUFLLEVBQUk7QUFDbEMsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNDLEtBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixLQUFLLENBQUNFLFFBQXZCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUNHLFFBQU4sR0FBaUIsSUFBakIsR0FBd0IsS0FBekM7QUFDQSxNQUFNQyxhQUFhLEdBQUdKLEtBQUssQ0FBQ0ksYUFBTixHQUFzQkosS0FBSyxDQUFDSSxhQUE1QixHQUE0QyxJQUFsRTtBQUVBLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxpQkFBYSxFQUFFTixLQUFLLENBQUNNLGFBQU4sR0FBc0IsSUFBdEIsR0FBNkIsS0FEN0I7QUFFZkMsVUFBTSxFQUFFUCxLQUFLLENBQUNPLE1BQU4sR0FBZSxJQUFmLEdBQXNCLEtBRmY7QUFHZkMsYUFBUyxFQUFFLE1BQUMsOERBQUQ7QUFBTyxVQUFJLEVBQUMsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEk7QUFJZkMsYUFBUyxFQUFFLE1BQUMsOERBQUQ7QUFBTyxVQUFJLEVBQUMsY0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkk7QUFLZkMsUUFBSSxFQUFFVixLQUFLLENBQUNVLElBQU4sR0FBYSxJQUFiLEdBQW9CLEtBTFg7QUFNZkMsWUFBUSxFQUFFWCxLQUFLLENBQUNXLFFBQU4sR0FBaUIsSUFBakIsR0FBd0IsS0FObkI7QUFPZkMsU0FBSyxFQUFFWixLQUFLLENBQUNZLEtBQU4sR0FBY1osS0FBSyxDQUFDWSxLQUFwQixHQUE0QixHQVBwQjtBQVFmQyxnQkFBWSxFQUFFYixLQUFLLENBQUNjLElBQU4sR0FBYWQsS0FBSyxDQUFDYyxJQUFuQixHQUEwQixDQVJ6QjtBQVNmQyxrQkFBYyxFQUFFZixLQUFLLENBQUNnQixNQUFOLEdBQWVoQixLQUFLLENBQUNnQixNQUFyQixHQUE4QixDQVQvQjtBQVVqQjtBQUNFQyxhQUFTLG1CQUFZaEIsS0FBWixDQVhNO0FBWWZpQixPQUFHLEVBQUVsQixLQUFLLENBQUNtQixTQVpJO0FBYWZDLFlBQVEsRUFBRXBCLEtBQUssQ0FBQ29CLFFBYkQ7QUFjZkMsaUJBQWEsRUFBRXJCLEtBQUssQ0FBQ3FCLGFBQU4sR0FBc0IsSUFBdEIsR0FBNkIsS0FkN0I7QUFlZkMsa0JBQWMsRUFBRSxJQWZEO0FBZ0JmbkIsWUFBUSxFQUFFQSxRQWhCSztBQWlCZkMsaUJBQWEsRUFBRUEsYUFqQkE7QUFrQmpCO0FBRUVtQixjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLEdBRGQ7QUFFRW5CLGNBQVEsRUFBRTtBQUNSUSxvQkFBWSxFQUFFLENBRE47QUFFUkUsc0JBQWMsRUFBRSxDQUZSO0FBR1JPLHNCQUFjLEVBQUUsSUFIUjtBQUlSWixZQUFJLEVBQUU7QUFKRTtBQUZaLEtBRFU7QUFwQkcsR0FBakI7QUFpQ0EsU0FBTyxNQUFDLGtEQUFELHlGQUFZTCxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBdUJILFFBQXZCLENBQVA7QUFDRCxDQXhDRDs7S0FBTUgsa0I7QUEwQ1NBLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcHJlc29zLmZkNTQ5ODUxOTQ1ZmFjODYyYTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9jb3JlL0ljb24vZGVmYXVsdC5qc3gnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuXHJcbmNvbnN0IENvbnRyb2xsZWRDYXJvdXNlbCA9IHByb3BzID0+IHtcclxuICBjb25zdCB0aGVtZSA9IHByb3BzLnRoZW1lO1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XHJcbiAgY29uc3QgYXV0b3BsYXkgPSBwcm9wcy5hdXRvcGxheSA/IHRydWUgOiBmYWxzZTtcclxuICBjb25zdCBhdXRvcGxheVNwZWVkID0gcHJvcHMuYXV0b3BsYXlTcGVlZCA/IHByb3BzLmF1dG9wbGF5U3BlZWQgOiA1MDAwO1xyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGZvY3VzT25TZWxlY3Q6IHByb3BzLmZvY3VzT25TZWxlY3QgPyB0cnVlIDogZmFsc2UsXHJcbiAgICBhcnJvd3M6IHByb3BzLmFycm93cyA/IHRydWUgOiBmYWxzZSxcclxuICAgIG5leHRBcnJvdzogPEljb24gIGljb249J2NoZXZyb24tcmlnaHQnLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxJY29uICBpY29uPSdjaGV2cm9uLWxlZnQnLz4sXHJcbiAgICBkb3RzOiBwcm9wcy5kb3RzID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHByb3BzLmluZmluaXRlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IHByb3BzLnNwZWVkID8gcHJvcHMuc3BlZWQgOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IHByb3BzLnNob3cgPyBwcm9wcy5zaG93IDogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiBwcm9wcy5zY3JvbGwgPyBwcm9wcy5zY3JvbGwgOiAxLFxyXG4gIC8vICBjbGFzc05hbWU6IGBTbGlkZXMgJHt0aGVtZX0gJHtwcm9wcy5jZW50ZXJ9YCxcclxuICAgIGNsYXNzTmFtZTogYFNsaWRlcyAke3RoZW1lfWAsXHJcbiAgICByZWY6IHByb3BzLnJlZmVyZW5jZSxcclxuICAgIGFzTmF2Rm9yOiBwcm9wcy5hc05hdkZvcixcclxuICAgIHZhcmlhYmxlV2lkdGg6IHByb3BzLnZhcmlhYmxlV2lkdGggPyB0cnVlIDogZmFsc2UsXHJcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiBhdXRvcGxheSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IGF1dG9wbGF5U3BlZWQsXHJcbiAgLy8gIGNlbnRlck1vZGU6IHRydWUsXHJcbiBcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiA8U2xpZGVyIHsuLi5zZXR0aW5nc30+e2NoaWxkcmVufTwvU2xpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZWRDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9