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
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_10__);







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
      show: false,
      title: null // description: null,
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
    value: function prueba() {
      this.setState({
        title: "prueba"
      });
      this.showModal();
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
          lineNumber: 53,
          columnNumber: 17
        }
      });

      switch (this.props.tableNumber) {
        case "one":
          tabla = [["Vista", "Producto", "Dimensiones", "Tipo de Archivo", "Peso de Archivo", "Precio a Color", "Precio a B&N"], [icono, "Doble Página", "10 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$42'300.000", "$35'000.000"], [icono, "Aviso Irregular", "10 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$20'600.000", "$16'000.000"], [icono, "Páginas 3a,5a,7a,9a", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$29'900.000", "$24'500.000"], [icono, "1/2 Página Impar", "Vertical 2.5 Col x 37 cm Horizontal 5 col x 18.5 cm", "PNG, JPG AI, PSD", "3 MB", "$12'300.000", "$9'900.000"], [icono, "1/2 Página 3a,5a,7a,9a", "Vertical 2.5 col x 37 cm Horizontal 5 col x 18.5 cm", "PNG, JPG AI, PSD", "3 MB", "$17'500.000", "$14'400.000"], [icono, "Contraportada", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$35'000.000", "$24'500.000"], [icono, "Página Impar", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$23'300.000", "$19'600.000"], [icono, "Página Corriente", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$20'600.000", "$16'000.000"]];
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
              lineNumber: 83,
              columnNumber: 17
            }
          }, __jsx("tr", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 13
            }
          }, tabla[key].map(function (value, index) {
            return __jsx("th", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86,
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
              lineNumber: 93,
              columnNumber: 18
            }
          }, tabla[key].map(function (value, index) {
            return index === 0 ? __jsx("td", {
              onClick: _this2.prueba,
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 15
              }
            }, value) : __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99,
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
          lineNumber: 108,
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
          lineNumber: 118,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableNavItems Print-tableNavItems_first' : 'Print-tableNavItems',
        ref: this.tableRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        hover: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 9
        }
      }, this.getTable())), __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableContainer Print-tableContainer_first' : this.props.tableNumber === 'two' ? 'Print-tableContainer Print-tableContainer_second' : 'Print-tableContainer Print-tableContainer_third',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this3.handleNav('left');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      })), "scroll", __jsx("a", {
        onClick: function onClick() {
          return _this3.handleNav('right');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        className: "Newsletter-secondPopUp",
        show: this.state.show,
        onHide: this.handleClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
        className: "Print-modalText Print-modalText_modalTitle",
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 19
        }
      }, "Doble p\xE1gina"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 23
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Print-modalText Print-modalText_modalDescription",
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "Print-modalText Print-modalText_modalSubtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 25
        }
      }, "Tabloide"), "Ofrecemos el formato de video Outstream insertado en el coraz\xF3n del contenido editorial")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 23
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 25
        }
      }, __jsx("img", {
        className: "Print-modalImage",
        src: "/images/impresos/doble_pagina.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Print-modalText Print-modalText_modalDescriptionTitle",
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 25
        }
      }, "Dimensiones:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 27
        }
      }, "10 col x 37 cm"), "Precio a color:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 27
        }
      }, "$42'300.000"), "Precio a B&N:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 27
        }
      }, "$35'000.000")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInRpdGxlIiwic2hvd01vZGFsIiwiYmluZCIsImhhbmRsZUNsb3NlIiwicHJ1ZWJhIiwic2V0U3RhdGUiLCJ0YWJsYSIsImljb25vIiwidGFibGVOdW1iZXIiLCJyb3dzIiwicm93Qm9keSIsImtleSIsInJvdyIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJwdXNoIiwiZ2V0VGFibGUiLCJoYW5kbGVOYXYiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FFakI7O0FBRmlCLG9OQXdCUCxVQUFDQyxTQUFELEVBQWU7QUFDekIsVUFBSUEsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3hCLGNBQUtDLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFyRCxHQUEyRCxJQUEzRDtBQUNELE9BRkQsTUFFTztBQUNMLGNBQUtGLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFyRCxHQUEyRCxJQUEzRDtBQUNEO0FBQ0YsS0E5QmtCOztBQUdqQixVQUFLRixRQUFMLGdCQUFnQkcsNENBQUssQ0FBQ0MsU0FBTixFQUFoQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNiQyxVQUFJLEVBQUUsS0FETztBQUViQyxXQUFLLEVBQUUsSUFGTSxDQUdkO0FB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L2ltcHJlc29zLjk2ZTE2ZDdkNWM4NTU1MzU3ZDVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb2wsIFJvdywgQ29udGFpbmVyLCBNb2RhbCwgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvcmUvSWNvbi9kZWZhdWx0LmpzeCdcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcclxuXHJcblxyXG5jbGFzcyBUYWJsZVNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIFJlYWN0IFJlZiBpcyBjcmVhdGVkIGhlcmVcclxuICAgIHRoaXMudGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAvLyBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgLy8gZGltZW5zaW9uczogbnVsbCxcclxuICAgLy8gY29sb3JQcmljZTogbnVsbCxcclxuICAgLy8gQldQcmljZTogbnVsbCxcclxuICAgLy8gaW1hZ2U6IG51bGwsXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsb3NlID0gdGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wcnVlYmEgPSB0aGlzLnBydWViYS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qIFRoaXMgZnVuYyBoYW5kbGVzIHRoZSBzY3JvbGxpbmcgYnkgaW5jcmVtZW50aW5nIG9yIGRlY3JlbWVudGluZ1xyXG4gICB0aGUgc2Nyb2xsTGVmdCBwcm9wZXJ0eSAqL1xyXG4gIGhhbmRsZU5hdiA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09IDUwKSA6IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9IDUwKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsb3NlKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBwcnVlYmEoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogXCJwcnVlYmFcIiB9KTtcclxuICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUYWJsZSgpe1xyXG4gICAgbGV0IHRhYmxhID0gbnVsbFxyXG4gICAgbGV0IGljb25vID0gPEljb24gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+XHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudGFibGVOdW1iZXIpIHtcclxuICAgICAgICBjYXNlIFwib25lXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlZpc3RhXCIsIFwiUHJvZHVjdG9cIiwgXCJEaW1lbnNpb25lc1wiLCBcIlRpcG8gZGUgQXJjaGl2b1wiLCBcIlBlc28gZGUgQXJjaGl2b1wiLCBcIlByZWNpbyBhIENvbG9yXCIsIFwiUHJlY2lvIGEgQiZOXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiRG9ibGUgUMOhZ2luYVwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkNDInMzAwLjAwMFwiLFwiJDM1JzAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJBdmlzbyBJcnJlZ3VsYXJcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYXMgM2EsNWEsN2EsOWFcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjknOTAwLjAwMFwiLFwiJDI0JzUwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSBJbXBhclwiLFwiVmVydGljYWwgMi41IENvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDEyJzMwMC4wMDBcIixcIiQ5JzkwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSAzYSw1YSw3YSw5YVwiLFwiVmVydGljYWwgMi41IGNvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDE3JzUwMC4wMDBcIixcIiQxNCc0MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiQ29udHJhcG9ydGFkYVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQzNScwMDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmEgSW1wYXJcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjMnMzAwLjAwMFwiLFwiJDE5JzYwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hIENvcnJpZW50ZVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMCc2MDAuMDAwXCIsXCIkMTYnMDAwLjAwMFwiXV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0d29cIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiVGFtYcOxb1wiLCBcIkNvbG9yXCIsIFwiQmxhbmNvIHkgTmVncm9cIl0sW1wiUHJpbWVyYSBQw6FnaW5hXCIsXCIkNDg1LjUwMFwiLFwiMzQ1LjAwMFwiXSxbXCJUZXJjZXJhLCBRdWludGEgeSBTw6lwdGltYSBQw6FnaW5hXCIsXCIkMjg0LjUwMFwiLFwiJDI0NC4wMDBcIl0sW1wiQ29udHJhcG9ydGFkYVwiLFwiJDI1MC4wMDBcIixcIiQyMDAuMDAwXCJdLFtcIkNvcnJpZW50ZVwiLFwiJDE5NS4wMDBcIixcIiQxNTguMDAwXCJdLFtcIkJvZ290w6FcIixcIiQxNDUuMDAwXCIsXCIxMTAuMDAwXCJdLFtcIkltcGFyXCIsXCIkMjM2LjAwMFwiLFwiJDE5MC4wMDBcIl1dOyAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAgXCJ0aHJlZVwiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJDYW50aWRhZFwiLCBcIkNhcnRhXCIsIFwiSGFzdGEgZGUgMTYgcMOhZ1wiLCBcIk3DoXMgZGUgMTYgcMOhZ1wiXSxbXCIxMC4wMDAgYSA0MC4wMDBcIixcIiQyMzVcIixcIjMxM1wiLFwiJDM4MVwiXSxbXCJTdXNjcmlwdG9yZXMgbmFjaW9uYWxcIixcIiQxOTVcIixcIiQyODVcIixcIjMxM1wiXSxbXCJUb3RhbCBjaXJjdWxhY2nDs24gZGUgbHVuZXMgYSBkb21pbmdvXCIsXCIkMTc4XCIsXCIkMjEwXCIsXCIyMzdcIl0sW1wiVG90YWwgY2lyY3VsYWNpw7NuIGRvbWluZ29cIixcIiQxNjdcIixcIiQyMDBcIixcIjIxNlwiXSxbXCJNYW51YWxpZGFkXCIsXCIkMTA4XCIsXCIxMDhcIixcIjEwOFwiXV07ICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0YWJsYT1bXTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgIGNvbnN0IHJvd0JvZHkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YWJsYSkge1xyXG4gICAgICAgIGxldCByb3cgPSBudWxsO1xyXG4gICAgICAgIGlmIChrZXkgPT0gMCl7XHJcbiAgICAgICAgICAgIHJvdyA9IChcclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgcm93ID0gKDx0cj5cclxuICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIGluZGV4ID09PSAwID9cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDx0ZCAgb25DbGljaz17dGhpcy5wcnVlYmF9IGtleT17aW5kZXh9Pnt2YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDogIDx0ZCBrZXk9e2luZGV4fT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm93Qm9keS5wdXNoKHJvdylcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgfVxyXG4gICAgICByb3dzLnB1c2goXHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7cm93Qm9keX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgIClcclxuICAgICAgcmV0dXJuIHJvd3M7XHJcbiAgfVxyXG4gIC8qSW4gdGhlIHJlbmRlciwgd2UgYWNjZXNzIG5hdi1pdGVtcyB2aWEgaXRzIHJlZiBhdHRyaWJ1dGUgYW5kIGNvbnRyb2xzXHJcbiAgaXQgd2l0aCB0aGUgJ1ByZXYnIGFuZCAnTmV4dCcgYnV0dG9ucyB1c2luZyB0aGUgZnVuYyBkZWZpbmVkIGFib3ZlICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IHt0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAnb25lJyA/ICdQcmludC10YWJsZU5hdkl0ZW1zIFByaW50LXRhYmxlTmF2SXRlbXNfZmlyc3QnOiAnUHJpbnQtdGFibGVOYXZJdGVtcyd9IHJlZj17dGhpcy50YWJsZVJlZn0+XHJcbiAgICAgICAgPFRhYmxlIHN0cmlwZWQgIGhvdmVyPlxyXG4gIHt0aGlzLmdldFRhYmxlKCl9XHJcbiAgPC9UYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3RoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICdvbmUnID8gJ1ByaW50LXRhYmxlQ29udGFpbmVyIFByaW50LXRhYmxlQ29udGFpbmVyX2ZpcnN0JyA6IHRoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICd0d28nID8gJ1ByaW50LXRhYmxlQ29udGFpbmVyIFByaW50LXRhYmxlQ29udGFpbmVyX3NlY29uZCcgOiAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfdGhpcmQnICAgfT5cclxuICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5hdignbGVmdCcpfT5cclxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nUHJpbnQtc2Nyb2xsSWNvbicgaWNvbj1cImNoZXZyb24tbGVmdFwiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgc2Nyb2xsXHJcbiAgIFxyXG4gICAgICAgICAgICA8YSAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOYXYoJ3JpZ2h0Jyl9PlxyXG4gICAgICAgICAgPEljb24gIGNsYXNzTmFtZT0nUHJpbnQtc2Nyb2xsSWNvbicgaWNvbj1cImNoZXZyb24tcmlnaHRcIi8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J05ld3NsZXR0ZXItc2Vjb25kUG9wVXAnXHJcbiAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd31cclxuICAgICAgICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxUaXRsZVwiIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgRG9ibGUgcMOhZ2luYVxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbERlc2NyaXB0aW9uXCIgIG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsU3VidGl0bGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUYWJsb2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIE91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJQcmludC1tb2RhbEltYWdlXCIgIHNyYz1cIi9pbWFnZXMvaW1wcmVzb3MvZG9ibGVfcGFnaW5hLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsRGVzY3JpcHRpb25UaXRsZVwiICBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGltZW5zaW9uZXM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsSW5mb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBjb2wgeCAzNyBjbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpbyBhIGNvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbEluZm9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkNDInMzAwLjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpbyBhIEImTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxJbmZvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJDM1JzAwMC4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICBcclxuXHJcbiAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlU2Nyb2xsOyJdLCJzb3VyY2VSb290IjoiIn0=