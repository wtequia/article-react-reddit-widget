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
    key: "prueba",
    value: function prueba(nombre) {
      alert("hola", nombre);
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
          lineNumber: 47,
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
              lineNumber: 77,
              columnNumber: 17
            }
          }, __jsx("tr", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }
          }, tabla[key].map(function (value, index) {
            return __jsx("th", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80,
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
              lineNumber: 87,
              columnNumber: 18
            }
          }, tabla[key].map(function (value, index) {
            return index === 0 ? __jsx("td", {
              onClick: _this2.prueba("wilmer"),
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 15
              }
            }, value) : __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93,
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
          lineNumber: 102,
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
          lineNumber: 112,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableNavItems Print-tableNavItems_first' : 'Print-tableNavItems',
        ref: this.tableRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        hover: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }
      }, this.getTable())), __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableContainer Print-tableContainer_first' : this.props.tableNumber === 'two' ? 'Print-tableContainer Print-tableContainer_second' : 'Print-tableContainer Print-tableContainer_third',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this3.handleNav('left');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      })), "scroll", __jsx("a", {
        onClick: function onClick() {
          return _this3.handleNav('right');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        className: "Newsletter-secondPopUp",
        show: this.state.show,
        onHide: this.handleClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 19
        }
      }, "hola"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsInBydWViYSIsInNldFN0YXRlIiwibm9tYnJlIiwiYWxlcnQiLCJ0YWJsYSIsImljb25vIiwidGFibGVOdW1iZXIiLCJyb3dzIiwicm93Qm9keSIsImtleSIsInJvdyIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJwdXNoIiwiZ2V0VGFibGUiLCJoYW5kbGVOYXYiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUVqQjs7QUFGaUIsb05Bc0JQLFVBQUNDLFNBQUQsRUFBZTtBQUN6QixVQUFJQSxTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDeEIsY0FBS0MsUUFBTCxHQUFpQixNQUFLQSxRQUFMLENBQWNDLE9BQWQsQ0FBc0JDLFVBQXRCLElBQW9DLEVBQXJELEdBQTJELElBQTNEO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBS0YsUUFBTCxHQUFpQixNQUFLQSxRQUFMLENBQWNDLE9BQWQsQ0FBc0JDLFVBQXRCLElBQW9DLEVBQXJELEdBQTJELElBQTNEO0FBQ0Q7QUFDRixLQTVCa0I7O0FBR2pCLFVBQUtGLFFBQUwsZ0JBQWdCRyw0Q0FBSyxDQUFDQyxTQUFOLEVBQWhCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ2JDLFVBQUksRUFBRSxLQURPLENBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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VixFQVFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUlYsQ0FyQkYsQ0FERjtBQXVDRDs7OztFQWxKdUJrQiwrQzs7QUFxSlg5QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXByZXNvcy4zZTU1NWJlNzIxOTM1YjJlOTBmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29sLCBSb3csIENvbnRhaW5lciwgTW9kYWwsIFRhYmxlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb3JlL0ljb24vZGVmYXVsdC5qc3gnXHJcbmNsYXNzIFRhYmxlU2Nyb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy8gUmVhY3QgUmVmIGlzIGNyZWF0ZWQgaGVyZVxyXG4gICAgdGhpcy50YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAvLyB0aXRsZTogbnVsbCxcclxuICAgLy8gZGVzY3JpcHRpb246IG51bGwsXHJcbiAgIC8vIGRpbWVuc2lvbnM6IG51bGwsXHJcbiAgIC8vIGNvbG9yUHJpY2U6IG51bGwsXHJcbiAgIC8vIEJXUHJpY2U6IG51bGwsXHJcbiAgIC8vIGltYWdlOiBudWxsLFxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucHJ1ZWJhID0gdGhpcy5wcnVlYmEuYmluZCh0aGlzKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyogVGhpcyBmdW5jIGhhbmRsZXMgdGhlIHNjcm9sbGluZyBieSBpbmNyZW1lbnRpbmcgb3IgZGVjcmVtZW50aW5nXHJcbiAgIHRoZSBzY3JvbGxMZWZ0IHByb3BlcnR5ICovXHJcbiAgaGFuZGxlTmF2ID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgIHRoaXMudGFibGVSZWYgPyAodGhpcy50YWJsZVJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0gNTApIDogbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGFibGVSZWYgPyAodGhpcy50YWJsZVJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0gNTApIDogbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgc2hvd01vZGFsKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcclxuICB9XHJcbiAgaGFuZGxlQ2xvc2UoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIHBydWViYShub21icmUpe1xyXG4gICBhbGVydChcImhvbGFcIiwgbm9tYnJlKVxyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGUoKXtcclxuICAgIGxldCB0YWJsYSA9IG51bGxcclxuICAgIGxldCBpY29ubyA9IDxJY29uIGNsYXNzTmFtZT0nUHJpbnQtdGFibGVJY29uJyBpY29uPVwiZXllXCIvPlxyXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnRhYmxlTnVtYmVyKSB7XHJcbiAgICAgICAgY2FzZSBcIm9uZVwiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJWaXN0YVwiLCBcIlByb2R1Y3RvXCIsIFwiRGltZW5zaW9uZXNcIiwgXCJUaXBvIGRlIEFyY2hpdm9cIiwgXCJQZXNvIGRlIEFyY2hpdm9cIiwgXCJQcmVjaW8gYSBDb2xvclwiLCBcIlByZWNpbyBhIEImTlwiXSxbaWNvbm8sIFwiRG9ibGUgcMOhZ2luYVwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkNDInMzAwLjAwMFwiLFwiJDM1LjAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJEb2JsZSBQw6FnaW5hXCIsXCIxMCBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQ0MiczMDAuMDAwXCIsXCIkMzUnMDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIkF2aXNvIElycmVndWxhclwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjAnNjAwLjAwMFwiLFwiJDE2JzAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hcyAzYSw1YSw3YSw5YVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyOSc5MDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIjEvMiBQw6FnaW5hIEltcGFyXCIsXCJWZXJ0aWNhbCAyLjUgQ29sIHggMzcgY20gSG9yaXpvbnRhbCA1IGNvbCB4IDE4LjUgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMTInMzAwLjAwMFwiLFwiJDknOTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIjEvMiBQw6FnaW5hIDNhLDVhLDdhLDlhXCIsXCJWZXJ0aWNhbCAyLjUgY29sIHggMzcgY20gSG9yaXpvbnRhbCA1IGNvbCB4IDE4LjUgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMTcnNTAwLjAwMFwiLFwiJDE0JzQwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJDb250cmFwb3J0YWRhXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDM1JzAwMC4wMDBcIixcIiQyNCc1MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYSBJbXBhclwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMyczMDAuMDAwXCIsXCIkMTknNjAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmEgQ29ycmllbnRlXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInR3b1wiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJUYW1hw7FvXCIsIFwiQ29sb3JcIiwgXCJCbGFuY28geSBOZWdyb1wiXSxbXCJQcmltZXJhIFDDoWdpbmFcIixcIiQ0ODUuNTAwXCIsXCIzNDUuMDAwXCJdLFtcIlRlcmNlcmEsIFF1aW50YSB5IFPDqXB0aW1hIFDDoWdpbmFcIixcIiQyODQuNTAwXCIsXCIkMjQ0LjAwMFwiXSxbXCJDb250cmFwb3J0YWRhXCIsXCIkMjUwLjAwMFwiLFwiJDIwMC4wMDBcIl0sW1wiQ29ycmllbnRlXCIsXCIkMTk1LjAwMFwiLFwiJDE1OC4wMDBcIl0sW1wiQm9nb3TDoVwiLFwiJDE0NS4wMDBcIixcIjExMC4wMDBcIl0sW1wiSW1wYXJcIixcIiQyMzYuMDAwXCIsXCIkMTkwLjAwMFwiXV07ICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICBcInRocmVlXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIkNhbnRpZGFkXCIsIFwiQ2FydGFcIiwgXCJIYXN0YSBkZSAxNiBww6FnXCIsIFwiTcOhcyBkZSAxNiBww6FnXCJdLFtcIjEwLjAwMCBhIDQwLjAwMFwiLFwiJDIzNVwiLFwiMzEzXCIsXCIkMzgxXCJdLFtcIlN1c2NyaXB0b3JlcyBuYWNpb25hbFwiLFwiJDE5NVwiLFwiJDI4NVwiLFwiMzEzXCJdLFtcIlRvdGFsIGNpcmN1bGFjacOzbiBkZSBsdW5lcyBhIGRvbWluZ29cIixcIiQxNzhcIixcIiQyMTBcIixcIjIzN1wiXSxbXCJUb3RhbCBjaXJjdWxhY2nDs24gZG9taW5nb1wiLFwiJDE2N1wiLFwiJDIwMFwiLFwiMjE2XCJdLFtcIk1hbnVhbGlkYWRcIixcIiQxMDhcIixcIjEwOFwiLFwiMTA4XCJdXTsgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRhYmxhPVtdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG4gICAgY29uc3Qgcm93Qm9keSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRhYmxhKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IG51bGw7XHJcbiAgICAgICAgaWYgKGtleSA9PSAwKXtcclxuICAgICAgICAgICAgcm93ID0gKFxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICB7dGFibGFba2V5XS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICByb3cgPSAoPHRyPlxyXG4gICAgICAgICAgICB7dGFibGFba2V5XS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IDAgP1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHRkICBvbkNsaWNrPXt0aGlzLnBydWViYShcIndpbG1lclwiKX0ga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgOiAgPHRkIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3dCb2R5LnB1c2gocm93KVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICB9XHJcbiAgICAgIHJvd3MucHVzaChcclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dCb2R5fVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gcm93cztcclxuICB9XHJcbiAgLypJbiB0aGUgcmVuZGVyLCB3ZSBhY2Nlc3MgbmF2LWl0ZW1zIHZpYSBpdHMgcmVmIGF0dHJpYnV0ZSBhbmQgY29udHJvbHNcclxuICBpdCB3aXRoIHRoZSAnUHJldicgYW5kICdOZXh0JyBidXR0b25zIHVzaW5nIHRoZSBmdW5jIGRlZmluZWQgYWJvdmUgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3RoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICdvbmUnID8gJ1ByaW50LXRhYmxlTmF2SXRlbXMgUHJpbnQtdGFibGVOYXZJdGVtc19maXJzdCc6ICdQcmludC10YWJsZU5hdkl0ZW1zJ30gcmVmPXt0aGlzLnRhYmxlUmVmfT5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCAgaG92ZXI+XHJcbiAge3RoaXMuZ2V0VGFibGUoKX1cclxuICA8L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfZmlyc3QnIDogdGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ3R3bycgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfc2Vjb25kJyA6ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl90aGlyZCcgICB9PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdsZWZ0Jyl9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1sZWZ0XCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICBzY3JvbGxcclxuICAgXHJcbiAgICAgICAgICAgIDxhICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5hdigncmlnaHQnKX0+XHJcbiAgICAgICAgICA8SWNvbiAgY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1yaWdodFwiLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nTmV3c2xldHRlci1zZWNvbmRQb3BVcCdcclxuICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fVxyXG4gICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgaG9sYVxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgaG9vb2xhYWFcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIFxyXG5cclxuICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVTY3JvbGw7Il0sInNvdXJjZVJvb3QiOiIifQ==