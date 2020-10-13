webpackHotUpdate_N_E("pages/impresos",{

/***/ "./Layout/default.jsx":
/*!****************************!*\
  !*** ./Layout/default.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_global_footer_default_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/footer/default.jsx */ "./components/global/footer/default.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\Layout\\default.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import Header from '../components/global/header/default.jsx'


var Header = dynamic(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/global/header/default.jsx */ "./components/global/header/default.jsx"));
}, {
  ssr: false
});
_c2 = Header;

var container = function container(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, props.title ? props.title : 'Paute con nosotros'), __jsx("meta", {
    name: "description",
    content: props.description ? props.description : 'Descripción por defecto de paute con nosotros',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "preconnect",
    href: "https://use.typekit.net/fri7zxf.css",
    crossOrigin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("link", {
    as: "style",
    href: "https://use.typekit.net/fri7zxf.css",
    crossOrigin: true,
    rel: "preload",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://use.typekit.net/fri7zxf.css",
    crossOrigin: true,
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "preconnect",
    href: "https://use.typekit.net/fri7zxf.css",
    crossOrigin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), __jsx("link", {
    as: "style",
    href: "https://use.typekit.net/fri7zxf.css",
    crossOrigin: true,
    rel: "preload",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://use.typekit.net/fri7zxf.css",
    crossOrigin: true,
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), props.children, __jsx(_components_global_footer_default_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (container);

var _c, _c2;

$RefreshReg$(_c, "Header$dynamic");
$RefreshReg$(_c2, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/global/header/default.jsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0L2RlZmF1bHQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImR5bmFtaWMiLCJzc3IiLCJjb250YWluZXIiLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sTUFDcEIsY0FBTTtBQUNKLFNBQU8sc0tBQVA7QUFDRCxDQUhtQixFQUlwQjtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUpvQixDQUF0QjtNQUFNRixNOztBQU9OLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLEtBQUs7QUFBQSxTQUVuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDQyxLQUFwQixHQUE0QixvQkFEakMsQ0FESixFQUlJO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFRCxLQUFLLENBQUNFLFdBQU4sR0FBb0JGLEtBQUssQ0FBQ0UsV0FBMUIsR0FBd0MsK0NBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQ0YsT0FBRyxFQUFDLFlBREY7QUFFRixRQUFJLEVBQUMscUNBRkg7QUFHRixlQUFXLE1BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBV0E7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLFFBQUksRUFBQyxxQ0FGUDtBQUdFLGVBQVcsTUFIYjtBQUlFLE9BQUcsRUFBQyxTQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYQSxFQWlCQTtBQUNFLFFBQUksRUFBQyxxQ0FEUDtBQUVFLGVBQVcsTUFGYjtBQUdFLE9BQUcsRUFBQyxZQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkEsRUFzQk07QUFDSixPQUFHLEVBQUMsWUFEQTtBQUVKLFFBQUksRUFBQyxxQ0FGRDtBQUdKLGVBQVcsTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJOLEVBMkJBO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxRQUFJLEVBQUMscUNBRlA7QUFHRSxlQUFXLE1BSGI7QUFJRSxPQUFHLEVBQUMsU0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JBLEVBaUNBO0FBQ0UsUUFBSSxFQUFDLHFDQURQO0FBRUUsZUFBVyxNQUZiO0FBR0UsT0FBRyxFQUFDLFlBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDQSxDQURKLEVBd0NJLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENKLEVBeUNNRixLQUFLLENBQUNHLFFBekNaLEVBMENJLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFDSixDQUZtQjtBQUFBLENBQXZCOztBQWtEZUosd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wcmVzb3MuNDk1MzJmMjE4MDMxYzJjZmVkODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9nbG9iYWwvZm9vdGVyL2RlZmF1bHQuanN4J1xyXG4vL2ltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9nbG9iYWwvaGVhZGVyL2RlZmF1bHQuanN4J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBIZWFkZXIgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvZ2xvYmFsL2hlYWRlci9kZWZhdWx0LmpzeCcpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IHByb3BzID0+IChcclxuICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlID8gcHJvcHMudGl0bGUgOiAnUGF1dGUgY29uIG5vc290cm9zJ31cclxuICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gPyBwcm9wcy5kZXNjcmlwdGlvbiA6ICdEZXNjcmlwY2nDs24gcG9yIGRlZmVjdG8gZGUgcGF1dGUgY29uIG5vc290cm9zJ30vPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD0ncHJlY29ubmVjdCdcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdXNlLnR5cGVraXQubmV0L2ZyaTd6eGYuY3NzJ1xyXG4gICAgICAgICAgY3Jvc3NPcmlnaW5cclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBhcz0nc3R5bGUnXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL3VzZS50eXBla2l0Lm5ldC9mcmk3enhmLmNzcydcclxuICAgICAgICAgIGNyb3NzT3JpZ2luXHJcbiAgICAgICAgICByZWw9J3ByZWxvYWQnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvZnJpN3p4Zi5jc3MnXHJcbiAgICAgICAgICBjcm9zc09yaWdpblxyXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD0ncHJlY29ubmVjdCdcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdXNlLnR5cGVraXQubmV0L2ZyaTd6eGYuY3NzJ1xyXG4gICAgICAgICAgY3Jvc3NPcmlnaW5cclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBhcz0nc3R5bGUnXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL3VzZS50eXBla2l0Lm5ldC9mcmk3enhmLmNzcydcclxuICAgICAgICAgIGNyb3NzT3JpZ2luXHJcbiAgICAgICAgICByZWw9J3ByZWxvYWQnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvZnJpN3p4Zi5jc3MnXHJcbiAgICAgICAgICBjcm9zc09yaWdpblxyXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==