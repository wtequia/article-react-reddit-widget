webpackHotUpdate_N_E("pages/impresos",{

/***/ "./components/print/TableScroll.jsx":
/*!******************************************!*\
  !*** ./components/print/TableScroll.jsx ***!
  \******************************************/
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
/* harmony import */ var _core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Icon/default.jsx */ "./components/core/Icon/default.jsx");







var _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\print\\TableScroll.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var TableScroll = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TableScroll, _Component);

  var _super = _createSuper(TableScroll);

  function TableScroll(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TableScroll);

    _this = _super.call(this, props); // React Ref is created here

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleNav", function (direction) {
      if (direction === 'left') {
        _this.tableRef ? _this.tableRef.current.scrollLeft -= 50 : null;
      } else {
        _this.tableRef ? _this.tableRef.current.scrollLeft += 50 : null;
      }
    });

    _this.tableRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      show: false // title: null,
      // description: null,
      // dimensions: null,
      // colorPrice: null,
      // BWPrice: null,
      // image: null,

    };
    _this.showModal = _this.showModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleClose = _this.handleClose.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }
  /* This func handles the scrolling by incrementing or decrementing
   the scrollLeft property */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TableScroll, [{
    key: "showModal",
    value: function showModal() {
      this.setState({
        show: true
      }); //  this.setState({ title: title });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        show: false
      });
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var _this2 = this;

      var tabla = null;

      var icono = __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-tableIcon",
        icon: "eye",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      });

      switch (this.props.tableNumber) {
        case "one":
          tabla = [["Vista", "Producto", "Dimensiones", "Tipo de Archivo", "Peso de Archivo", "Precio a Color", "Precio a B&N"], [icono, "Doble página", "10 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$42'300.000", "$35.000.000"], [icono, "Doble Página", "10 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$42'300.000", "$35'000.000"], [icono, "Aviso Irregular", "10 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$20'600.000", "$16'000.000"], [icono, "Páginas 3a,5a,7a,9a", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$29'900.000", "$24'500.000"], [icono, "1/2 Página Impar", "Vertical 2.5 Col x 37 cm Horizontal 5 col x 18.5 cm", "PNG, JPG AI, PSD", "3 MB", "$12'300.000", "$9'900.000"], [icono, "1/2 Página 3a,5a,7a,9a", "Vertical 2.5 col x 37 cm Horizontal 5 col x 18.5 cm", "PNG, JPG AI, PSD", "3 MB", "$17'500.000", "$14'400.000"], [icono, "Contraportada", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$35'000.000", "$24'500.000"], [icono, "Página Impar", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$23'300.000", "$19'600.000"], [icono, "Página Corriente", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$20'600.000", "$16'000.000"]];
          break;

        case "two":
          tabla = [["Tamaño", "Color", "Blanco y Negro"], ["Primera Página", "$485.500", "345.000"], ["Tercera, Quinta y Séptima Página", "$284.500", "$244.000"], ["Contraportada", "$250.000", "$200.000"], ["Corriente", "$195.000", "$158.000"], ["Bogotá", "$145.000", "110.000"], ["Impar", "$236.000", "$190.000"]];
          break;

        case "three":
          tabla = [["Cantidad", "Carta", "Hasta de 16 pág", "Más de 16 pág"], ["10.000 a 40.000", "$235", "313", "$381"], ["Suscriptores nacional", "$195", "$285", "313"], ["Total circulación de lunes a domingo", "$178", "$210", "237"], ["Total circulación domingo", "$167", "$200", "216"], ["Manualidad", "$108", "108", "108"]];
          break;

        default:
          tabla = [];
      }

      var rows = [];
      var rowBody = [];

      for (var key in tabla) {
        var row = null;
        console.log("key", key);

        if (key == 0) {
          console.log("entro a key =", key);
          row = __jsx("thead", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }
          }, __jsx("tr", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }
          }, tabla[key].map(function (value, index) {
            return __jsx("th", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }
            }, value);
          })));
          rows.push(row);
        } else {
          row = __jsx("tr", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 18
            }
          }, tabla[key].map(function (value, index) {
            return index === 0 ? __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 15
              }
            }, value) : __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 18
              }
            }, value);
          }));
          rowBody.push(row);
        }
      }

      rows.push(__jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }, rowBody));
      return rows;
    }
    /*In the render, we access nav-items via its ref attribute and controls
    it with the 'Prev' and 'Next' buttons using the func defined above */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableNavItems Print-tableNavItems_first' : 'Print-tableNavItems',
        ref: this.tableRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        hover: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }
      }, this.getTable())), __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableContainer Print-tableContainer_first' : this.props.tableNumber === 'two' ? 'Print-tableContainer Print-tableContainer_second' : 'Print-tableContainer Print-tableContainer_third',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this3.handleNav('left');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }
      })), "scroll", __jsx("a", {
        onClick: function onClick() {
          return _this3.handleNav('right');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        className: "Newsletter-secondPopUp",
        show: this.state.show,
        onHide: this.handleClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }
      }, "hola"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 19
        }
      }, "hooolaaa")));
    }
  }]);

  return TableScroll;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TableScroll);

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsInNldFN0YXRlIiwidGFibGEiLCJpY29ubyIsInRhYmxlTnVtYmVyIiwicm93cyIsInJvd0JvZHkiLCJrZXkiLCJyb3ciLCJjb25zb2xlIiwibG9nIiwibWFwIiwidmFsdWUiLCJpbmRleCIsInB1c2giLCJnZXRUYWJsZSIsImhhbmRsZU5hdiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOLEVBRGlCLENBRWpCOztBQUZpQixvTkFxQlAsVUFBQ0MsU0FBRCxFQUFlO0FBQ3pCLFVBQUlBLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN4QixjQUFLQyxRQUFMLEdBQWlCLE1BQUtBLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQkMsVUFBdEIsSUFBb0MsRUFBckQsR0FBMkQsSUFBM0Q7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLRixRQUFMLEdBQWlCLE1BQUtBLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQkMsVUFBdEIsSUFBb0MsRUFBckQsR0FBMkQsSUFBM0Q7QUFDRDtBQUNGLEtBM0JrQjs7QUFHakIsVUFBS0YsUUFBTCxnQkFBZ0JHLDRDQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDYkMsVUFBSSxFQUFFLEtBRE8sQ0FFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUGMs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dUJpQiwrQzs7QUFvSlg3QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXByZXNvcy5hNDczNDhlMWM1ZWYzMTgxMDBmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29sLCBSb3csIENvbnRhaW5lciwgTW9kYWwsIFRhYmxlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb3JlL0ljb24vZGVmYXVsdC5qc3gnXHJcbmNsYXNzIFRhYmxlU2Nyb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy8gUmVhY3QgUmVmIGlzIGNyZWF0ZWQgaGVyZVxyXG4gICAgdGhpcy50YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAvLyB0aXRsZTogbnVsbCxcclxuICAgLy8gZGVzY3JpcHRpb246IG51bGwsXHJcbiAgIC8vIGRpbWVuc2lvbnM6IG51bGwsXHJcbiAgIC8vIGNvbG9yUHJpY2U6IG51bGwsXHJcbiAgIC8vIEJXUHJpY2U6IG51bGwsXHJcbiAgIC8vIGltYWdlOiBudWxsLFxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyogVGhpcyBmdW5jIGhhbmRsZXMgdGhlIHNjcm9sbGluZyBieSBpbmNyZW1lbnRpbmcgb3IgZGVjcmVtZW50aW5nXHJcbiAgIHRoZSBzY3JvbGxMZWZ0IHByb3BlcnR5ICovXHJcbiAgaGFuZGxlTmF2ID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgIHRoaXMudGFibGVSZWYgPyAodGhpcy50YWJsZVJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0gNTApIDogbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGFibGVSZWYgPyAodGhpcy50YWJsZVJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0gNTApIDogbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgc2hvd01vZGFsKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcclxuICAvLyAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiB0aXRsZSB9KTtcclxuICB9XHJcbiAgaGFuZGxlQ2xvc2UoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGdldFRhYmxlKCl7XHJcbiAgICBsZXQgdGFibGEgPSBudWxsXHJcbiAgICBsZXQgaWNvbm8gPSA8SWNvbiBjbGFzc05hbWU9J1ByaW50LXRhYmxlSWNvbicgaWNvbj1cImV5ZVwiLz5cclxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy50YWJsZU51bWJlcikge1xyXG4gICAgICAgIGNhc2UgXCJvbmVcIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiVmlzdGFcIiwgXCJQcm9kdWN0b1wiLCBcIkRpbWVuc2lvbmVzXCIsIFwiVGlwbyBkZSBBcmNoaXZvXCIsIFwiUGVzbyBkZSBBcmNoaXZvXCIsIFwiUHJlY2lvIGEgQ29sb3JcIiwgXCJQcmVjaW8gYSBCJk5cIl0sW2ljb25vLCBcIkRvYmxlIHDDoWdpbmFcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDQyJzMwMC4wMDBcIixcIiQzNS4wMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiRG9ibGUgUMOhZ2luYVwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkNDInMzAwLjAwMFwiLFwiJDM1JzAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJBdmlzbyBJcnJlZ3VsYXJcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYXMgM2EsNWEsN2EsOWFcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjknOTAwLjAwMFwiLFwiJDI0JzUwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSBJbXBhclwiLFwiVmVydGljYWwgMi41IENvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDEyJzMwMC4wMDBcIixcIiQ5JzkwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSAzYSw1YSw3YSw5YVwiLFwiVmVydGljYWwgMi41IGNvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDE3JzUwMC4wMDBcIixcIiQxNCc0MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiQ29udHJhcG9ydGFkYVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQzNScwMDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmEgSW1wYXJcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjMnMzAwLjAwMFwiLFwiJDE5JzYwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hIENvcnJpZW50ZVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMCc2MDAuMDAwXCIsXCIkMTYnMDAwLjAwMFwiXV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0d29cIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiVGFtYcOxb1wiLCBcIkNvbG9yXCIsIFwiQmxhbmNvIHkgTmVncm9cIl0sW1wiUHJpbWVyYSBQw6FnaW5hXCIsXCIkNDg1LjUwMFwiLFwiMzQ1LjAwMFwiXSxbXCJUZXJjZXJhLCBRdWludGEgeSBTw6lwdGltYSBQw6FnaW5hXCIsXCIkMjg0LjUwMFwiLFwiJDI0NC4wMDBcIl0sW1wiQ29udHJhcG9ydGFkYVwiLFwiJDI1MC4wMDBcIixcIiQyMDAuMDAwXCJdLFtcIkNvcnJpZW50ZVwiLFwiJDE5NS4wMDBcIixcIiQxNTguMDAwXCJdLFtcIkJvZ290w6FcIixcIiQxNDUuMDAwXCIsXCIxMTAuMDAwXCJdLFtcIkltcGFyXCIsXCIkMjM2LjAwMFwiLFwiJDE5MC4wMDBcIl1dOyAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAgXCJ0aHJlZVwiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJDYW50aWRhZFwiLCBcIkNhcnRhXCIsIFwiSGFzdGEgZGUgMTYgcMOhZ1wiLCBcIk3DoXMgZGUgMTYgcMOhZ1wiXSxbXCIxMC4wMDAgYSA0MC4wMDBcIixcIiQyMzVcIixcIjMxM1wiLFwiJDM4MVwiXSxbXCJTdXNjcmlwdG9yZXMgbmFjaW9uYWxcIixcIiQxOTVcIixcIiQyODVcIixcIjMxM1wiXSxbXCJUb3RhbCBjaXJjdWxhY2nDs24gZGUgbHVuZXMgYSBkb21pbmdvXCIsXCIkMTc4XCIsXCIkMjEwXCIsXCIyMzdcIl0sW1wiVG90YWwgY2lyY3VsYWNpw7NuIGRvbWluZ29cIixcIiQxNjdcIixcIiQyMDBcIixcIjIxNlwiXSxbXCJNYW51YWxpZGFkXCIsXCIkMTA4XCIsXCIxMDhcIixcIjEwOFwiXV07ICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0YWJsYT1bXTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgIGNvbnN0IHJvd0JvZHkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YWJsYSkge1xyXG4gICAgICAgIGxldCByb3cgPSBudWxsO1xyXG4gICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImtleVwiLCBrZXkpO1xyXG4gICAgICAgIGlmIChrZXkgPT0gMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50cm8gYSBrZXkgPVwiLCBrZXkpO1xyXG4gICAgICAgICAgICByb3cgPSAoXHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIHt0YWJsYVtrZXldLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fT57dmFsdWV9PC90aD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICByb3dzLnB1c2gocm93KTtcclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgIHJvdyA9ICg8dHI+XHJcbiAgICAgICAgICAgIHt0YWJsYVtrZXldLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gMCA/XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8dGQgICBrZXk9e2luZGV4fT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA6ICA8dGQga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvd0JvZHkucHVzaChyb3cpXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgIH1cclxuICAgICAgcm93cy5wdXNoKFxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3Jvd0JvZHl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICApXHJcbiAgICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuICAvKkluIHRoZSByZW5kZXIsIHdlIGFjY2VzcyBuYXYtaXRlbXMgdmlhIGl0cyByZWYgYXR0cmlidXRlIGFuZCBjb250cm9sc1xyXG4gIGl0IHdpdGggdGhlICdQcmV2JyBhbmQgJ05leHQnIGJ1dHRvbnMgdXNpbmcgdGhlIGZ1bmMgZGVmaW5lZCBhYm92ZSAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVOYXZJdGVtcyBQcmludC10YWJsZU5hdkl0ZW1zX2ZpcnN0JzogJ1ByaW50LXRhYmxlTmF2SXRlbXMnfSByZWY9e3RoaXMudGFibGVSZWZ9PlxyXG4gICAgICAgIDxUYWJsZSBzdHJpcGVkICBob3Zlcj5cclxuICB7dGhpcy5nZXRUYWJsZSgpfVxyXG4gIDwvVGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAnb25lJyA/ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl9maXJzdCcgOiB0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAndHdvJyA/ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl9zZWNvbmQnIDogJ1ByaW50LXRhYmxlQ29udGFpbmVyIFByaW50LXRhYmxlQ29udGFpbmVyX3RoaXJkJyAgIH0+XHJcbiAgICBcclxuICAgICAgICAgICAgPGRpdiAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOYXYoJ2xlZnQnKX0+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J1ByaW50LXNjcm9sbEljb24nIGljb249XCJjaGV2cm9uLWxlZnRcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIHNjcm9sbFxyXG4gICBcclxuICAgICAgICAgICAgPGEgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdyaWdodCcpfT5cclxuICAgICAgICAgIDxJY29uICBjbGFzc05hbWU9J1ByaW50LXNjcm9sbEljb24nIGljb249XCJjaGV2cm9uLXJpZ2h0XCIvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdOZXdzbGV0dGVyLXNlY29uZFBvcFVwJ1xyXG4gICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3d9XHJcbiAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICBob2xhXHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICBob29vbGFhYVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgXHJcblxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNjcm9sbDsiXSwic291cmNlUm9vdCI6IiJ9