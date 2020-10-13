(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./components/global/header/default.jsx":
/*!**********************************************!*\
  !*** ./components/global/header/default.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\global\\header\\default.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header() {
  return (
    /* <div className="Header">{this.defineMenu()}</div>*/
    __jsx("div", {
      className: "Header-desktop",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "Header-LogoMobile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: "https://www.elespectador.com",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: "Header-Image",
      src: "/headerLogo.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }))), __jsx("div", {
      className: "Header-nav",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      collapseOnSelect: true,
      expand: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
      "aria-controls": "responsive-navbar-nav",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 3
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
      id: "responsive-navbar-nav",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 3
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      className: "ml-auto",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 3
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
      href: "/digital",
      title: "Digital",
      id: "collasible-nav-dropdown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "/digital",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, "Home"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "/digital/formatos-estandar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, "Formatos Est\xE1ndar"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "/digital/formatos-premium",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, "Formatos Premium"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "/digital/video",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, "Video")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "/impresos",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, "Impresos"))))))
  );
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvaGVhZGVyL2RlZmF1bHQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFPQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBSWpCO0FBQ0Q7QUFDQztBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNNO0FBQUcsVUFBSSxFQUFDLDhCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQThCLFNBQUcsRUFBQyxpQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRE4sQ0FERixFQU1NO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNOLE1BQUMsc0RBQUQ7QUFBUSxzQkFBZ0IsTUFBeEI7QUFBeUIsWUFBTSxFQUFDLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRixNQUFDLHNEQUFELENBQVEsTUFBUjtBQUFlLHVCQUFjLHVCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkUsRUFHRixNQUFDLHNEQUFELENBQVEsUUFBUjtBQUFpQixRQUFFLEVBQUMsdUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFQSxNQUFDLG1EQUFEO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJLE1BQUMsMkRBQUQ7QUFBYSxVQUFJLEVBQUMsVUFBbEI7QUFBNkIsV0FBSyxFQUFDLFNBQW5DO0FBQTZDLFFBQUUsRUFBQyx5QkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLFVBQUksRUFBQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsRUFFRSxNQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixVQUFJLEVBQUMsNEJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkYsRUFHRSxNQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixVQUFJLEVBQUMsMkJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEYsRUFJRSxNQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixVQUFJLEVBQUMsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixDQUZKLEVBUUksTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxVQUFJLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKLENBRkEsQ0FIRSxDQURNLENBTk47QUFGQTtBQTZCSCxDQWpDRDs7S0FBTUEsTTtBQWtDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBOYXYsXHJcbiAgTmF2RHJvcGRvd24sXHJcbiAgTmF2YmFyLFxyXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiBcclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAvKiA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiPnt0aGlzLmRlZmluZU1lbnUoKX08L2Rpdj4qL1xyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXItZGVza3RvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlci1Mb2dvTW9iaWxlXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJIZWFkZXItSW1hZ2VcIiBzcmM9XCIvaGVhZGVyTG9nby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlci1uYXZcIj5cclxuICAgIDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiPlxyXG4gIFxyXG4gIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxyXG4gIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIj5cclxuXHJcbiAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgXHJcbiAgICAgIDxOYXZEcm9wZG93biBocmVmPVwiL2RpZ2l0YWxcIiB0aXRsZT1cIkRpZ2l0YWxcIiBpZD1cImNvbGxhc2libGUtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvZGlnaXRhbFwiPkhvbWU8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9kaWdpdGFsL2Zvcm1hdG9zLWVzdGFuZGFyXCI+Rm9ybWF0b3MgRXN0w6FuZGFyPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvZGlnaXRhbC9mb3JtYXRvcy1wcmVtaXVtXCI+Rm9ybWF0b3MgUHJlbWl1bTwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL2RpZ2l0YWwvdmlkZW9cIj5WaWRlbzwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvaW1wcmVzb3NcIj5JbXByZXNvczwvTmF2Lkxpbms+XHJcbiAgICA8L05hdj5cclxuICA8L05hdmJhci5Db2xsYXBzZT5cclxuPC9OYXZiYXI+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=