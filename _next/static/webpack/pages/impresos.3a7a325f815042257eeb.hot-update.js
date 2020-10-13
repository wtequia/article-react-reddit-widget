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
    value: function prueba(texto) {
      this.setState({
        title: texto
      });
      this.showModal();
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var _this2 = this;

      var tabla = null;

      var icono = __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this.prueba("hola"),
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
      }, this.state.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInRpdGxlIiwic2hvd01vZGFsIiwiYmluZCIsImhhbmRsZUNsb3NlIiwicHJ1ZWJhIiwic2V0U3RhdGUiLCJ0ZXh0byIsInRhYmxhIiwiaWNvbm8iLCJ0YWJsZU51bWJlciIsInJvd3MiLCJyb3dCb2R5Iiwia2V5Iiwicm93IiwibWFwIiwidmFsdWUiLCJpbmRleCIsInB1c2giLCJnZXRUYWJsZSIsImhhbmRsZU5hdiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUVqQjs7QUFGaUIsb05Bd0JQLFVBQUNDLFNBQUQsRUFBZTtBQUN6QixVQUFJQSxTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDeEIsY0FBS0MsUUFBTCxHQUFpQixNQUFLQSxRQUFMLENBQWNDLE9BQWQsQ0FBc0JDLFVBQXRCLElBQW9DLEVBQXJELEdBQTJELElBQTNEO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBS0YsUUFBTCxHQUFpQixNQUFLQSxRQUFMLENBQWNDLE9BQWQsQ0FBc0JDLFVBQXRCLElBQW9DLEVBQXJELEdBQTJELElBQTNEO0FBQ0Q7QUFDRixLQTlCa0I7O0FBR2pCLFVBQUtGLFFBQUwsZ0JBQWdCRyw0Q0FBSyxDQUFDQyxTQUFOLEVBQWhCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ2JDLFVBQUksRUFBRSxLQURPO0FBRWJDLFdBQUssRUFBRSxJQUZN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Qm9CLCtDOztBQXNMWDlCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcHJlc29zLjNhN2EzMjVmODE1MDQyMjU3ZWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb2wsIFJvdywgQ29udGFpbmVyLCBNb2RhbCwgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvcmUvSWNvbi9kZWZhdWx0LmpzeCdcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcclxuXHJcblxyXG5jbGFzcyBUYWJsZVNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIFJlYWN0IFJlZiBpcyBjcmVhdGVkIGhlcmVcclxuICAgIHRoaXMudGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAvLyBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgLy8gZGltZW5zaW9uczogbnVsbCxcclxuICAgLy8gY29sb3JQcmljZTogbnVsbCxcclxuICAgLy8gQldQcmljZTogbnVsbCxcclxuICAgLy8gaW1hZ2U6IG51bGwsXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsb3NlID0gdGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wcnVlYmEgPSB0aGlzLnBydWViYS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qIFRoaXMgZnVuYyBoYW5kbGVzIHRoZSBzY3JvbGxpbmcgYnkgaW5jcmVtZW50aW5nIG9yIGRlY3JlbWVudGluZ1xyXG4gICB0aGUgc2Nyb2xsTGVmdCBwcm9wZXJ0eSAqL1xyXG4gIGhhbmRsZU5hdiA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09IDUwKSA6IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9IDUwKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsb3NlKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBwcnVlYmEodGV4dG8pe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiB0ZXh0byB9KTtcclxuICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUYWJsZSgpe1xyXG4gICAgbGV0IHRhYmxhID0gbnVsbFxyXG4gICAgbGV0IGljb25vID0gPEljb24gIG9uQ2xpY2s9e3RoaXMucHJ1ZWJhKFwiaG9sYVwiKX0gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+XHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudGFibGVOdW1iZXIpIHtcclxuICAgICAgICBjYXNlIFwib25lXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlZpc3RhXCIsIFwiUHJvZHVjdG9cIiwgXCJEaW1lbnNpb25lc1wiLCBcIlRpcG8gZGUgQXJjaGl2b1wiLCBcIlBlc28gZGUgQXJjaGl2b1wiLCBcIlByZWNpbyBhIENvbG9yXCIsIFwiUHJlY2lvIGEgQiZOXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiRG9ibGUgUMOhZ2luYVwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkNDInMzAwLjAwMFwiLFwiJDM1JzAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJBdmlzbyBJcnJlZ3VsYXJcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYXMgM2EsNWEsN2EsOWFcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjknOTAwLjAwMFwiLFwiJDI0JzUwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSBJbXBhclwiLFwiVmVydGljYWwgMi41IENvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDEyJzMwMC4wMDBcIixcIiQ5JzkwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSAzYSw1YSw3YSw5YVwiLFwiVmVydGljYWwgMi41IGNvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDE3JzUwMC4wMDBcIixcIiQxNCc0MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiQ29udHJhcG9ydGFkYVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQzNScwMDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmEgSW1wYXJcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjMnMzAwLjAwMFwiLFwiJDE5JzYwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hIENvcnJpZW50ZVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMCc2MDAuMDAwXCIsXCIkMTYnMDAwLjAwMFwiXV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0d29cIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiVGFtYcOxb1wiLCBcIkNvbG9yXCIsIFwiQmxhbmNvIHkgTmVncm9cIl0sW1wiUHJpbWVyYSBQw6FnaW5hXCIsXCIkNDg1LjUwMFwiLFwiMzQ1LjAwMFwiXSxbXCJUZXJjZXJhLCBRdWludGEgeSBTw6lwdGltYSBQw6FnaW5hXCIsXCIkMjg0LjUwMFwiLFwiJDI0NC4wMDBcIl0sW1wiQ29udHJhcG9ydGFkYVwiLFwiJDI1MC4wMDBcIixcIiQyMDAuMDAwXCJdLFtcIkNvcnJpZW50ZVwiLFwiJDE5NS4wMDBcIixcIiQxNTguMDAwXCJdLFtcIkJvZ290w6FcIixcIiQxNDUuMDAwXCIsXCIxMTAuMDAwXCJdLFtcIkltcGFyXCIsXCIkMjM2LjAwMFwiLFwiJDE5MC4wMDBcIl1dOyAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAgXCJ0aHJlZVwiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJDYW50aWRhZFwiLCBcIkNhcnRhXCIsIFwiSGFzdGEgZGUgMTYgcMOhZ1wiLCBcIk3DoXMgZGUgMTYgcMOhZ1wiXSxbXCIxMC4wMDAgYSA0MC4wMDBcIixcIiQyMzVcIixcIjMxM1wiLFwiJDM4MVwiXSxbXCJTdXNjcmlwdG9yZXMgbmFjaW9uYWxcIixcIiQxOTVcIixcIiQyODVcIixcIjMxM1wiXSxbXCJUb3RhbCBjaXJjdWxhY2nDs24gZGUgbHVuZXMgYSBkb21pbmdvXCIsXCIkMTc4XCIsXCIkMjEwXCIsXCIyMzdcIl0sW1wiVG90YWwgY2lyY3VsYWNpw7NuIGRvbWluZ29cIixcIiQxNjdcIixcIiQyMDBcIixcIjIxNlwiXSxbXCJNYW51YWxpZGFkXCIsXCIkMTA4XCIsXCIxMDhcIixcIjEwOFwiXV07ICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0YWJsYT1bXTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgIGNvbnN0IHJvd0JvZHkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YWJsYSkge1xyXG4gICAgICAgIGxldCByb3cgPSBudWxsO1xyXG4gICAgICAgIGlmIChrZXkgPT0gMCl7XHJcbiAgICAgICAgICAgIHJvdyA9IChcclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgcm93ID0gKDx0cj5cclxuICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIGluZGV4ID09PSAwID9cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDx0ZCAga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgOiAgPHRkIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3dCb2R5LnB1c2gocm93KVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICB9XHJcbiAgICAgIHJvd3MucHVzaChcclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dCb2R5fVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gcm93cztcclxuICB9XHJcbiAgLypJbiB0aGUgcmVuZGVyLCB3ZSBhY2Nlc3MgbmF2LWl0ZW1zIHZpYSBpdHMgcmVmIGF0dHJpYnV0ZSBhbmQgY29udHJvbHNcclxuICBpdCB3aXRoIHRoZSAnUHJldicgYW5kICdOZXh0JyBidXR0b25zIHVzaW5nIHRoZSBmdW5jIGRlZmluZWQgYWJvdmUgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3RoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICdvbmUnID8gJ1ByaW50LXRhYmxlTmF2SXRlbXMgUHJpbnQtdGFibGVOYXZJdGVtc19maXJzdCc6ICdQcmludC10YWJsZU5hdkl0ZW1zJ30gcmVmPXt0aGlzLnRhYmxlUmVmfT5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCAgaG92ZXI+XHJcbiAge3RoaXMuZ2V0VGFibGUoKX1cclxuICA8L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfZmlyc3QnIDogdGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ3R3bycgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfc2Vjb25kJyA6ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl90aGlyZCcgICB9PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdsZWZ0Jyl9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1sZWZ0XCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICBzY3JvbGxcclxuICAgXHJcbiAgICAgICAgICAgIDxhICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5hdigncmlnaHQnKX0+XHJcbiAgICAgICAgICA8SWNvbiAgY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1yaWdodFwiLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nTmV3c2xldHRlci1zZWNvbmRQb3BVcCdcclxuICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fVxyXG4gICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbFRpdGxlXCIgY2xvc2VCdXR0b24+XHJcbiAgICB7dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxEZXNjcmlwdGlvblwiICBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbFN1YnRpdGxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVGFibG9pZGVcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBPZnJlY2Vtb3MgZWwgZm9ybWF0byBkZSB2aWRlbyBPdXRzdHJlYW0gaW5zZXJ0YWRvIGVuIGVsIGNvcmF6w7NuIGRlbCBjb250ZW5pZG8gZWRpdG9yaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fT4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxJbWFnZVwiICBzcmM9XCIvaW1hZ2VzL2ltcHJlc29zL2RvYmxlX3BhZ2luYS5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbERlc2NyaXB0aW9uVGl0bGVcIiAgbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpbWVuc2lvbmVzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbEluZm9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgY29sIHggMzcgY21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW8gYSBjb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxJbmZvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJDQyJzMwMC4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW8gYSBCJk46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsSW5mb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQzNScwMDAuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgXHJcblxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNjcm9sbDsiXSwic291cmNlUm9vdCI6IiJ9