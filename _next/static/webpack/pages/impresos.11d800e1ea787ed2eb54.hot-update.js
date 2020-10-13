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
      });
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
          lineNumber: 42,
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

        if (key == 0) {
          row = __jsx("thead", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }
          }, __jsx("tr", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }
          }, tabla[key].map(function (value, index) {
            return __jsx("th", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75,
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
              lineNumber: 82,
              columnNumber: 18
            }
          }, tabla[key].map(function (value, index) {
            return index === 0 ? __jsx("td", {
              onClick: _this2.showModal,
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 15
              }
            }, value) : __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88,
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
          lineNumber: 97,
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
          lineNumber: 107,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableNavItems Print-tableNavItems_first' : 'Print-tableNavItems',
        ref: this.tableRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        hover: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }, this.getTable())), __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableContainer Print-tableContainer_first' : this.props.tableNumber === 'two' ? 'Print-tableContainer Print-tableContainer_second' : 'Print-tableContainer Print-tableContainer_third',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this3.handleNav('left');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }
      })), "scroll", __jsx("a", {
        onClick: function onClick() {
          return _this3.handleNav('right');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        className: "Newsletter-secondPopUp",
        show: this.state.show,
        onHide: this.handleClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 19
        }
      }, "hola"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsInNldFN0YXRlIiwidGFibGEiLCJpY29ubyIsInRhYmxlTnVtYmVyIiwicm93cyIsInJvd0JvZHkiLCJrZXkiLCJyb3ciLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwicHVzaCIsImdldFRhYmxlIiwiaGFuZGxlTmF2IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ01BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FFakI7O0FBRmlCLG9OQXFCUCxVQUFDQyxTQUFELEVBQWU7QUFDekIsVUFBSUEsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3hCLGNBQUtDLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFyRCxHQUEyRCxJQUEzRDtBQUNELE9BRkQsTUFFTztBQUNMLGNBQUtGLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFyRCxHQUEyRCxJQUEzRDtBQUNEO0FBQ0YsS0EzQmtCOztBQUdqQixVQUFLRixRQUFMLGdCQUFnQkcsNENBQUssQ0FBQ0MsU0FBTixFQUFoQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNiQyxVQUFJLEVBQUUsS0FETyxDQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQYyxLQUFiO0FBU0EsVUFBS0Ms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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbCwgUm93LCBDb250YWluZXIsIE1vZGFsLCBUYWJsZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vY29yZS9JY29uL2RlZmF1bHQuanN4J1xyXG5jbGFzcyBUYWJsZVNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIFJlYWN0IFJlZiBpcyBjcmVhdGVkIGhlcmVcclxuICAgIHRoaXMudGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgLy8gdGl0bGU6IG51bGwsXHJcbiAgIC8vIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAvLyBkaW1lbnNpb25zOiBudWxsLFxyXG4gICAvLyBjb2xvclByaWNlOiBudWxsLFxyXG4gICAvLyBCV1ByaWNlOiBudWxsLFxyXG4gICAvLyBpbWFnZTogbnVsbCxcclxuICAgIH1cclxuICAgIHRoaXMuc2hvd01vZGFsID0gdGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xvc2UgPSB0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qIFRoaXMgZnVuYyBoYW5kbGVzIHRoZSBzY3JvbGxpbmcgYnkgaW5jcmVtZW50aW5nIG9yIGRlY3JlbWVudGluZ1xyXG4gICB0aGUgc2Nyb2xsTGVmdCBwcm9wZXJ0eSAqL1xyXG4gIGhhbmRsZU5hdiA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09IDUwKSA6IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9IDUwKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsb3NlKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRUYWJsZSgpe1xyXG4gICAgbGV0IHRhYmxhID0gbnVsbFxyXG4gICAgbGV0IGljb25vID0gPEljb24gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+XHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudGFibGVOdW1iZXIpIHtcclxuICAgICAgICBjYXNlIFwib25lXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlZpc3RhXCIsIFwiUHJvZHVjdG9cIiwgXCJEaW1lbnNpb25lc1wiLCBcIlRpcG8gZGUgQXJjaGl2b1wiLCBcIlBlc28gZGUgQXJjaGl2b1wiLCBcIlByZWNpbyBhIENvbG9yXCIsIFwiUHJlY2lvIGEgQiZOXCJdLFtpY29ubywgXCJEb2JsZSBww6FnaW5hXCIsXCIxMCBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQ0MiczMDAuMDAwXCIsXCIkMzUuMDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIkRvYmxlIFDDoWdpbmFcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDQyJzMwMC4wMDBcIixcIiQzNScwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiQXZpc28gSXJyZWd1bGFyXCIsXCIxMCBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMCc2MDAuMDAwXCIsXCIkMTYnMDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmFzIDNhLDVhLDdhLDlhXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDI5JzkwMC4wMDBcIixcIiQyNCc1MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiMS8yIFDDoWdpbmEgSW1wYXJcIixcIlZlcnRpY2FsIDIuNSBDb2wgeCAzNyBjbSBIb3Jpem9udGFsIDUgY29sIHggMTguNSBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQxMiczMDAuMDAwXCIsXCIkOSc5MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiMS8yIFDDoWdpbmEgM2EsNWEsN2EsOWFcIixcIlZlcnRpY2FsIDIuNSBjb2wgeCAzNyBjbSBIb3Jpem9udGFsIDUgY29sIHggMTguNSBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQxNyc1MDAuMDAwXCIsXCIkMTQnNDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIkNvbnRyYXBvcnRhZGFcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMzUnMDAwLjAwMFwiLFwiJDI0JzUwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hIEltcGFyXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIzJzMwMC4wMDBcIixcIiQxOSc2MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYSBDb3JyaWVudGVcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjAnNjAwLjAwMFwiLFwiJDE2JzAwMC4wMDBcIl1dO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidHdvXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlRhbWHDsW9cIiwgXCJDb2xvclwiLCBcIkJsYW5jbyB5IE5lZ3JvXCJdLFtcIlByaW1lcmEgUMOhZ2luYVwiLFwiJDQ4NS41MDBcIixcIjM0NS4wMDBcIl0sW1wiVGVyY2VyYSwgUXVpbnRhIHkgU8OpcHRpbWEgUMOhZ2luYVwiLFwiJDI4NC41MDBcIixcIiQyNDQuMDAwXCJdLFtcIkNvbnRyYXBvcnRhZGFcIixcIiQyNTAuMDAwXCIsXCIkMjAwLjAwMFwiXSxbXCJDb3JyaWVudGVcIixcIiQxOTUuMDAwXCIsXCIkMTU4LjAwMFwiXSxbXCJCb2dvdMOhXCIsXCIkMTQ1LjAwMFwiLFwiMTEwLjAwMFwiXSxbXCJJbXBhclwiLFwiJDIzNi4wMDBcIixcIiQxOTAuMDAwXCJdXTsgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgIFwidGhyZWVcIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiQ2FudGlkYWRcIiwgXCJDYXJ0YVwiLCBcIkhhc3RhIGRlIDE2IHDDoWdcIiwgXCJNw6FzIGRlIDE2IHDDoWdcIl0sW1wiMTAuMDAwIGEgNDAuMDAwXCIsXCIkMjM1XCIsXCIzMTNcIixcIiQzODFcIl0sW1wiU3VzY3JpcHRvcmVzIG5hY2lvbmFsXCIsXCIkMTk1XCIsXCIkMjg1XCIsXCIzMTNcIl0sW1wiVG90YWwgY2lyY3VsYWNpw7NuIGRlIGx1bmVzIGEgZG9taW5nb1wiLFwiJDE3OFwiLFwiJDIxMFwiLFwiMjM3XCJdLFtcIlRvdGFsIGNpcmN1bGFjacOzbiBkb21pbmdvXCIsXCIkMTY3XCIsXCIkMjAwXCIsXCIyMTZcIl0sW1wiTWFudWFsaWRhZFwiLFwiJDEwOFwiLFwiMTA4XCIsXCIxMDhcIl1dOyAgIFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGFibGE9W107XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByb3dzID0gW107XHJcbiAgICBjb25zdCByb3dCb2R5ID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFibGEpIHtcclxuICAgICAgICBsZXQgcm93ID0gbnVsbDtcclxuICAgICAgICBpZiAoa2V5ID09IDApe1xyXG4gICAgICAgICAgICByb3cgPSAoXHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIHt0YWJsYVtrZXldLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fT57dmFsdWV9PC90aD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICByb3dzLnB1c2gocm93KTtcclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgIHJvdyA9ICg8dHI+XHJcbiAgICAgICAgICAgIHt0YWJsYVtrZXldLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gMCA/XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8dGQgIG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsfSBrZXk9e2luZGV4fT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA6ICA8dGQga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvd0JvZHkucHVzaChyb3cpXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgIH1cclxuICAgICAgcm93cy5wdXNoKFxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3Jvd0JvZHl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICApXHJcbiAgICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuICAvKkluIHRoZSByZW5kZXIsIHdlIGFjY2VzcyBuYXYtaXRlbXMgdmlhIGl0cyByZWYgYXR0cmlidXRlIGFuZCBjb250cm9sc1xyXG4gIGl0IHdpdGggdGhlICdQcmV2JyBhbmQgJ05leHQnIGJ1dHRvbnMgdXNpbmcgdGhlIGZ1bmMgZGVmaW5lZCBhYm92ZSAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVOYXZJdGVtcyBQcmludC10YWJsZU5hdkl0ZW1zX2ZpcnN0JzogJ1ByaW50LXRhYmxlTmF2SXRlbXMnfSByZWY9e3RoaXMudGFibGVSZWZ9PlxyXG4gICAgICAgIDxUYWJsZSBzdHJpcGVkICBob3Zlcj5cclxuICB7dGhpcy5nZXRUYWJsZSgpfVxyXG4gIDwvVGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAnb25lJyA/ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl9maXJzdCcgOiB0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAndHdvJyA/ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl9zZWNvbmQnIDogJ1ByaW50LXRhYmxlQ29udGFpbmVyIFByaW50LXRhYmxlQ29udGFpbmVyX3RoaXJkJyAgIH0+XHJcbiAgICBcclxuICAgICAgICAgICAgPGRpdiAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOYXYoJ2xlZnQnKX0+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J1ByaW50LXNjcm9sbEljb24nIGljb249XCJjaGV2cm9uLWxlZnRcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIHNjcm9sbFxyXG4gICBcclxuICAgICAgICAgICAgPGEgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdyaWdodCcpfT5cclxuICAgICAgICAgIDxJY29uICBjbGFzc05hbWU9J1ByaW50LXNjcm9sbEljb24nIGljb249XCJjaGV2cm9uLXJpZ2h0XCIvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdOZXdzbGV0dGVyLXNlY29uZFBvcFVwJ1xyXG4gICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3d9XHJcbiAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICBob2xhXHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICBob29vbGFhYVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgXHJcblxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNjcm9sbDsiXSwic291cmNlUm9vdCI6IiJ9