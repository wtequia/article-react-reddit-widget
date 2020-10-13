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
    _this.prueba = _this.prueba.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
          lineNumber: 44,
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
              lineNumber: 74,
              columnNumber: 17
            }
          }, __jsx("tr", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }
          }, tabla[key].map(function (value, index) {
            return __jsx("th", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77,
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
              lineNumber: 84,
              columnNumber: 18
            }
          }, tabla[key].map(function (value, index) {
            return index === 0 ? __jsx("td", {
              onClick: _this2.prueba("wilmer"),
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 15
              }
            }, value) : __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90,
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
          lineNumber: 99,
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
          lineNumber: 109,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableNavItems Print-tableNavItems_first' : 'Print-tableNavItems',
        ref: this.tableRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        hover: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }
      }, this.getTable())), __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableContainer Print-tableContainer_first' : this.props.tableNumber === 'two' ? 'Print-tableContainer Print-tableContainer_second' : 'Print-tableContainer Print-tableContainer_third',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this3.handleNav('left');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      })), "scroll", __jsx("a", {
        onClick: function onClick() {
          return _this3.handleNav('right');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        className: "Newsletter-secondPopUp",
        show: this.state.show,
        onHide: this.handleClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 19
        }
      }, "hola"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsInBydWViYSIsInNldFN0YXRlIiwidGFibGEiLCJpY29ubyIsInRhYmxlTnVtYmVyIiwicm93cyIsInJvd0JvZHkiLCJrZXkiLCJyb3ciLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwicHVzaCIsImdldFRhYmxlIiwiaGFuZGxlTmF2IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ01BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FFakI7O0FBRmlCLG9OQXNCUCxVQUFDQyxTQUFELEVBQWU7QUFDekIsVUFBSUEsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3hCLGNBQUtDLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFyRCxHQUEyRCxJQUEzRDtBQUNELE9BRkQsTUFFTztBQUNMLGNBQUtGLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFyRCxHQUEyRCxJQUEzRDtBQUNEO0FBQ0YsS0E1QmtCOztBQUdqQixVQUFLRixRQUFMLGdCQUFnQkcsNENBQUssQ0FBQ0MsU0FBTixFQUFoQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNiQyxVQUFJLEVBQUUsS0FETyxDQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQYyxLQUFiO0FBU0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYseUdBQWpCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQix5R0FBbkI7QUFDQSxVQUFLRSxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRixJQUFaLHlHQUFkO0FBZmlCO0FBaUJsQjtBQUdEOzs7Ozs7Z0NBU1c7QUFDVCxXQUFLRyxRQUFMLENBQWM7QUFBRUwsWUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNEOzs7a0NBQ1k7QUFDWCxXQUFLSyxRQUFMLENBQWM7QUFBRUwsWUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNEOzs7K0JBR1M7QUFBQTs7QUFDUixVQUFJTSxLQUFLLEdBQUcsSUFBWjs7QUFDQSxVQUFJQyxLQUFLLEdBQUcsTUFBQyw4REFBRDtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFlBQUksRUFBQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVo7O0FBQ0EsY0FBUSxLQUFLZixLQUFMLENBQVdnQixXQUFuQjtBQUNJLGFBQUssS0FBTDtBQUNJRixlQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLGFBQXRCLEVBQXFDLGlCQUFyQyxFQUF3RCxpQkFBeEQsRUFBMkUsZ0JBQTNFLEVBQTZGLGNBQTdGLENBQUQsRUFBOEcsQ0FBQ0MsS0FBRCxFQUFRLGNBQVIsRUFBdUIsZ0JBQXZCLEVBQXlDLGtCQUF6QyxFQUE0RCxNQUE1RCxFQUFtRSxhQUFuRSxFQUFpRixhQUFqRixDQUE5RyxFQUNSLENBQUNBLEtBQUQsRUFBUSxjQUFSLEVBQXVCLGdCQUF2QixFQUF5QyxrQkFBekMsRUFBNEQsTUFBNUQsRUFBbUUsYUFBbkUsRUFBaUYsYUFBakYsQ0FEUSxFQUVSLENBQUNBLEtBQUQsRUFBUSxpQkFBUixFQUEwQixnQkFBMUIsRUFBNEMsa0JBQTVDLEVBQStELE1BQS9ELEVBQXNFLGFBQXRFLEVBQW9GLGFBQXBGLENBRlEsRUFHUixDQUFDQSxLQUFELEVBQVEscUJBQVIsRUFBOEIsZUFBOUIsRUFBK0Msa0JBQS9DLEVBQWtFLE1BQWxFLEVBQXlFLGFBQXpFLEVBQXVGLGFBQXZGLENBSFEsRUFJUixDQUFDQSxLQUFELEVBQVEsa0JBQVIsRUFBMkIscURBQTNCLEVBQWtGLGtCQUFsRixFQUFxRyxNQUFyRyxFQUE0RyxhQUE1RyxFQUEwSCxZQUExSCxDQUpRLEVBS1IsQ0FBQ0EsS0FBRCxFQUFRLHdCQUFSLEVBQWlDLHFEQUFqQyxFQUF3RixrQkFBeEYsRUFBMkcsTUFBM0csRUFBa0gsYUFBbEgsRUFBZ0ksYUFBaEksQ0FMUSxFQU1SLENBQUNBLEtBQUQsRUFBUSxlQUFSLEVBQXdCLGVBQXhCLEVBQXlDLGtCQUF6QyxFQUE0RCxNQUE1RCxFQUFtRSxhQUFuRSxFQUFpRixhQUFqRixDQU5RLEVBT1IsQ0FBQ0EsS0FBRCxFQUFRLGNBQVIsRUFBdUIsZUFBdkIsRUFBd0Msa0JBQXhDLEVBQTJELE1BQTNELEVBQWtFLGFBQWxFLEVBQWdGLGFBQWhGLENBUFEsRUFRUixDQUFDQSxLQUFELEVBQVEsa0JBQVIsRUFBMkIsZUFBM0IsRUFBNEMsa0JBQTVDLEVBQStELE1BQS9ELEVBQXNFLGFBQXRFLEVBQW9GLGFBQXBGLENBUlEsQ0FBUjtBQVNBOztBQUNKLGFBQUssS0FBTDtBQUNJRCxlQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLGdCQUFwQixDQUFELEVBQXVDLENBQUMsZ0JBQUQsRUFBa0IsVUFBbEIsRUFBNkIsU0FBN0IsQ0FBdkMsRUFBK0UsQ0FBQyxrQ0FBRCxFQUFvQyxVQUFwQyxFQUErQyxVQUEvQyxDQUEvRSxFQUEwSSxDQUFDLGVBQUQsRUFBaUIsVUFBakIsRUFBNEIsVUFBNUIsQ0FBMUksRUFBa0wsQ0FBQyxXQUFELEVBQWEsVUFBYixFQUF3QixVQUF4QixDQUFsTCxFQUFzTixDQUFDLFFBQUQsRUFBVSxVQUFWLEVBQXFCLFNBQXJCLENBQXROLEVBQXNQLENBQUMsT0FBRCxFQUFTLFVBQVQsRUFBb0IsVUFBcEIsQ0FBdFAsQ0FBUjtBQUNBOztBQUNKLGFBQU0sT0FBTjtBQUNJQSxlQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLGlCQUF0QixFQUF5QyxlQUF6QyxDQUFELEVBQTJELENBQUMsaUJBQUQsRUFBbUIsTUFBbkIsRUFBMEIsS0FBMUIsRUFBZ0MsTUFBaEMsQ0FBM0QsRUFBbUcsQ0FBQyx1QkFBRCxFQUF5QixNQUF6QixFQUFnQyxNQUFoQyxFQUF1QyxLQUF2QyxDQUFuRyxFQUFpSixDQUFDLHNDQUFELEVBQXdDLE1BQXhDLEVBQStDLE1BQS9DLEVBQXNELEtBQXRELENBQWpKLEVBQThNLENBQUMsMkJBQUQsRUFBNkIsTUFBN0IsRUFBb0MsTUFBcEMsRUFBMkMsS0FBM0MsQ0FBOU0sRUFBZ1EsQ0FBQyxZQUFELEVBQWMsTUFBZCxFQUFxQixLQUFyQixFQUEyQixLQUEzQixDQUFoUSxDQUFSO0FBQ0Y7O0FBQ0Y7QUFDSUEsZUFBSyxHQUFDLEVBQU47QUFuQlI7O0FBc0JBLFVBQU1HLElBQUksR0FBRyxFQUFiO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLEVBQWhCOztBQUVBLFdBQUssSUFBTUMsR0FBWCxJQUFrQkwsS0FBbEIsRUFBeUI7QUFDckIsWUFBSU0sR0FBRyxHQUFHLElBQVY7O0FBQ0EsWUFBSUQsR0FBRyxJQUFJLENBQVgsRUFBYTtBQUNUQyxhQUFHLEdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDS04sS0FBSyxDQUFDSyxHQUFELENBQUwsQ0FBV0UsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLG1CQUNkO0FBQUksaUJBQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlCRCxLQUFqQixDQURjO0FBQUEsV0FBZixDQURMLENBREksQ0FESjtBQVNBTCxjQUFJLENBQUNPLElBQUwsQ0FBVUosR0FBVjtBQUNILFNBWEQsTUFXTztBQUNMQSxhQUFHLEdBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNKTixLQUFLLENBQUNLLEdBQUQsQ0FBTCxDQUFXRSxHQUFYLENBQWUsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsbUJBQ1pBLEtBQUssS0FBSyxDQUFWLEdBRUY7QUFBSyxxQkFBTyxFQUFFLE1BQUksQ0FBQ1gsTUFBTCxDQUFZLFFBQVosQ0FBZDtBQUFxQyxpQkFBRyxFQUFFVyxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWtERCxLQUFsRCxDQUZFLEdBSUM7QUFBSSxpQkFBRyxFQUFFQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaUJELEtBQWpCLENBTFc7QUFBQSxXQUFmLENBREksQ0FBUDtBQVVGSixpQkFBTyxDQUFDTSxJQUFSLENBQWFKLEdBQWI7QUFDQztBQUVGOztBQUNESCxVQUFJLENBQUNPLElBQUwsQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tOLE9BREwsQ0FERjtBQUtBLGFBQU9ELElBQVA7QUFDSDtBQUNEOzs7Ozs2QkFFUztBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRjtBQUFLLGlCQUFTLEVBQUcsS0FBS2pCLEtBQUwsQ0FBV2dCLFdBQVgsS0FBMkIsS0FBM0IsR0FBbUMsK0NBQW5DLEdBQW9GLHFCQUFyRztBQUE0SCxXQUFHLEVBQUUsS0FBS2QsUUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMscURBQUQ7QUFBTyxlQUFPLE1BQWQ7QUFBZ0IsYUFBSyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0wsS0FBS3VCLFFBQUwsRUFESyxDQURBLENBREUsRUFNRjtBQUFNLGlCQUFTLEVBQUUsS0FBS3pCLEtBQUwsQ0FBV2dCLFdBQVgsS0FBMkIsS0FBM0IsR0FBbUMsaURBQW5DLEdBQXVGLEtBQUtoQixLQUFMLENBQVdnQixXQUFYLEtBQTJCLEtBQTNCLEdBQW1DLGtEQUFuQyxHQUF3RixpREFBaE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJO0FBQU0sZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDVSxTQUFMLENBQWUsTUFBZixDQUFOO0FBQUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0YsTUFBQyw4REFBRDtBQUFNLGlCQUFTLEVBQUMsa0JBQWhCO0FBQW1DLFlBQUksRUFBQyxjQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREUsQ0FGSixZQVFJO0FBQUksZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDQSxTQUFMLENBQWUsT0FBZixDQUFOO0FBQUEsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0YsTUFBQyw4REFBRDtBQUFPLGlCQUFTLEVBQUMsa0JBQWpCO0FBQW9DLFlBQUksRUFBQyxlQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREUsQ0FSSixDQU5FLENBREosRUFxQkUsTUFBQyxxREFBRDtBQUNVLGlCQUFTLEVBQUMsd0JBRHBCO0FBRVUsWUFBSSxFQUFFLEtBQUtuQixLQUFMLENBQVdDLElBRjNCO0FBR1UsY0FBTSxFQUFFLEtBQUtHLFdBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLVSxNQUFDLHFEQUFELENBQU8sTUFBUDtBQUFjLG1CQUFXLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTFYsRUFRVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJWLENBckJGLENBREY7QUF1Q0Q7Ozs7RUEvSXVCZ0IsK0M7O0FBa0pYNUIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wcmVzb3MuY2VmMjBhNTk4MDUxNDg4MmQ1MjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbCwgUm93LCBDb250YWluZXIsIE1vZGFsLCBUYWJsZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vY29yZS9JY29uL2RlZmF1bHQuanN4J1xyXG5jbGFzcyBUYWJsZVNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIFJlYWN0IFJlZiBpcyBjcmVhdGVkIGhlcmVcclxuICAgIHRoaXMudGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgLy8gdGl0bGU6IG51bGwsXHJcbiAgIC8vIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAvLyBkaW1lbnNpb25zOiBudWxsLFxyXG4gICAvLyBjb2xvclByaWNlOiBudWxsLFxyXG4gICAvLyBCV1ByaWNlOiBudWxsLFxyXG4gICAvLyBpbWFnZTogbnVsbCxcclxuICAgIH1cclxuICAgIHRoaXMuc2hvd01vZGFsID0gdGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xvc2UgPSB0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnBydWViYSA9IHRoaXMucHJ1ZWJhLmJpbmQodGhpcyk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qIFRoaXMgZnVuYyBoYW5kbGVzIHRoZSBzY3JvbGxpbmcgYnkgaW5jcmVtZW50aW5nIG9yIGRlY3JlbWVudGluZ1xyXG4gICB0aGUgc2Nyb2xsTGVmdCBwcm9wZXJ0eSAqL1xyXG4gIGhhbmRsZU5hdiA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09IDUwKSA6IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9IDUwKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsb3NlKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0VGFibGUoKXtcclxuICAgIGxldCB0YWJsYSA9IG51bGxcclxuICAgIGxldCBpY29ubyA9IDxJY29uIGNsYXNzTmFtZT0nUHJpbnQtdGFibGVJY29uJyBpY29uPVwiZXllXCIvPlxyXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnRhYmxlTnVtYmVyKSB7XHJcbiAgICAgICAgY2FzZSBcIm9uZVwiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJWaXN0YVwiLCBcIlByb2R1Y3RvXCIsIFwiRGltZW5zaW9uZXNcIiwgXCJUaXBvIGRlIEFyY2hpdm9cIiwgXCJQZXNvIGRlIEFyY2hpdm9cIiwgXCJQcmVjaW8gYSBDb2xvclwiLCBcIlByZWNpbyBhIEImTlwiXSxbaWNvbm8sIFwiRG9ibGUgcMOhZ2luYVwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkNDInMzAwLjAwMFwiLFwiJDM1LjAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJEb2JsZSBQw6FnaW5hXCIsXCIxMCBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQ0MiczMDAuMDAwXCIsXCIkMzUnMDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIkF2aXNvIElycmVndWxhclwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjAnNjAwLjAwMFwiLFwiJDE2JzAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hcyAzYSw1YSw3YSw5YVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyOSc5MDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIjEvMiBQw6FnaW5hIEltcGFyXCIsXCJWZXJ0aWNhbCAyLjUgQ29sIHggMzcgY20gSG9yaXpvbnRhbCA1IGNvbCB4IDE4LjUgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMTInMzAwLjAwMFwiLFwiJDknOTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIjEvMiBQw6FnaW5hIDNhLDVhLDdhLDlhXCIsXCJWZXJ0aWNhbCAyLjUgY29sIHggMzcgY20gSG9yaXpvbnRhbCA1IGNvbCB4IDE4LjUgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMTcnNTAwLjAwMFwiLFwiJDE0JzQwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJDb250cmFwb3J0YWRhXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDM1JzAwMC4wMDBcIixcIiQyNCc1MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYSBJbXBhclwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMyczMDAuMDAwXCIsXCIkMTknNjAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmEgQ29ycmllbnRlXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInR3b1wiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJUYW1hw7FvXCIsIFwiQ29sb3JcIiwgXCJCbGFuY28geSBOZWdyb1wiXSxbXCJQcmltZXJhIFDDoWdpbmFcIixcIiQ0ODUuNTAwXCIsXCIzNDUuMDAwXCJdLFtcIlRlcmNlcmEsIFF1aW50YSB5IFPDqXB0aW1hIFDDoWdpbmFcIixcIiQyODQuNTAwXCIsXCIkMjQ0LjAwMFwiXSxbXCJDb250cmFwb3J0YWRhXCIsXCIkMjUwLjAwMFwiLFwiJDIwMC4wMDBcIl0sW1wiQ29ycmllbnRlXCIsXCIkMTk1LjAwMFwiLFwiJDE1OC4wMDBcIl0sW1wiQm9nb3TDoVwiLFwiJDE0NS4wMDBcIixcIjExMC4wMDBcIl0sW1wiSW1wYXJcIixcIiQyMzYuMDAwXCIsXCIkMTkwLjAwMFwiXV07ICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICBcInRocmVlXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIkNhbnRpZGFkXCIsIFwiQ2FydGFcIiwgXCJIYXN0YSBkZSAxNiBww6FnXCIsIFwiTcOhcyBkZSAxNiBww6FnXCJdLFtcIjEwLjAwMCBhIDQwLjAwMFwiLFwiJDIzNVwiLFwiMzEzXCIsXCIkMzgxXCJdLFtcIlN1c2NyaXB0b3JlcyBuYWNpb25hbFwiLFwiJDE5NVwiLFwiJDI4NVwiLFwiMzEzXCJdLFtcIlRvdGFsIGNpcmN1bGFjacOzbiBkZSBsdW5lcyBhIGRvbWluZ29cIixcIiQxNzhcIixcIiQyMTBcIixcIjIzN1wiXSxbXCJUb3RhbCBjaXJjdWxhY2nDs24gZG9taW5nb1wiLFwiJDE2N1wiLFwiJDIwMFwiLFwiMjE2XCJdLFtcIk1hbnVhbGlkYWRcIixcIiQxMDhcIixcIjEwOFwiLFwiMTA4XCJdXTsgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRhYmxhPVtdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG4gICAgY29uc3Qgcm93Qm9keSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRhYmxhKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IG51bGw7XHJcbiAgICAgICAgaWYgKGtleSA9PSAwKXtcclxuICAgICAgICAgICAgcm93ID0gKFxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICB7dGFibGFba2V5XS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICByb3cgPSAoPHRyPlxyXG4gICAgICAgICAgICB7dGFibGFba2V5XS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IDAgP1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHRkICBvbkNsaWNrPXt0aGlzLnBydWViYShcIndpbG1lclwiKX0ga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgOiAgPHRkIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3dCb2R5LnB1c2gocm93KVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICB9XHJcbiAgICAgIHJvd3MucHVzaChcclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dCb2R5fVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gcm93cztcclxuICB9XHJcbiAgLypJbiB0aGUgcmVuZGVyLCB3ZSBhY2Nlc3MgbmF2LWl0ZW1zIHZpYSBpdHMgcmVmIGF0dHJpYnV0ZSBhbmQgY29udHJvbHNcclxuICBpdCB3aXRoIHRoZSAnUHJldicgYW5kICdOZXh0JyBidXR0b25zIHVzaW5nIHRoZSBmdW5jIGRlZmluZWQgYWJvdmUgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3RoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICdvbmUnID8gJ1ByaW50LXRhYmxlTmF2SXRlbXMgUHJpbnQtdGFibGVOYXZJdGVtc19maXJzdCc6ICdQcmludC10YWJsZU5hdkl0ZW1zJ30gcmVmPXt0aGlzLnRhYmxlUmVmfT5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCAgaG92ZXI+XHJcbiAge3RoaXMuZ2V0VGFibGUoKX1cclxuICA8L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfZmlyc3QnIDogdGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ3R3bycgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfc2Vjb25kJyA6ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl90aGlyZCcgICB9PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdsZWZ0Jyl9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1sZWZ0XCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICBzY3JvbGxcclxuICAgXHJcbiAgICAgICAgICAgIDxhICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5hdigncmlnaHQnKX0+XHJcbiAgICAgICAgICA8SWNvbiAgY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1yaWdodFwiLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nTmV3c2xldHRlci1zZWNvbmRQb3BVcCdcclxuICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fVxyXG4gICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgaG9sYVxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgaG9vb2xhYWFcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIFxyXG5cclxuICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVTY3JvbGw7Il0sInNvdXJjZVJvb3QiOiIifQ==