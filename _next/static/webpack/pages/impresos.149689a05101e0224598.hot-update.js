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
    key: "handlePrueba",
    value: function handlePrueba(indice) {
      console.log("el indice es", indice);
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
          lineNumber: 52,
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
              lineNumber: 82,
              columnNumber: 17
            }
          }, __jsx("tr", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }
          }, tabla[key].map(function (value, index) {
            return __jsx("th", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85,
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
              lineNumber: 92,
              columnNumber: 18
            }
          }, tabla[key].map(function (value, index) {
            return index === 0 ? __jsx("td", {
              onClick: _this2.prueba(index),
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 15
              }
            }, value) : __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98,
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
          lineNumber: 107,
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
          lineNumber: 117,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableNavItems Print-tableNavItems_first' : 'Print-tableNavItems',
        ref: this.tableRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        hover: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }
      }, this.getTable())), __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableContainer Print-tableContainer_first' : this.props.tableNumber === 'two' ? 'Print-tableContainer Print-tableContainer_second' : 'Print-tableContainer Print-tableContainer_third',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this3.handleNav('left');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      })), "scroll", __jsx("a", {
        onClick: function onClick() {
          return _this3.handleNav('right');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        className: "Newsletter-secondPopUp",
        show: this.state.show,
        onHide: this.handleClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
        className: "Print-modalText Print-modalText_modalTitle",
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 19
        }
      }, "Doble p\xE1gina"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 23
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Print-modalText Print-modalText_modalDescription",
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "Print-modalText Print-modalText_modalSubtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 25
        }
      }, "Tabloide"), "Ofrecemos el formato de video Outstream insertado en el coraz\xF3n del contenido editorial")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 23
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }
      }, __jsx("img", {
        className: "Print-modalImage",
        src: "/images/impresos/doble_pagina.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Print-modalText Print-modalText_modalDescriptionTitle",
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }
      }, "Dimensiones:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 27
        }
      }, "10 col x 37 cm"), "Precio a color:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 27
        }
      }, "$42'300.000"), "Precio a B&N:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsInBydWViYSIsInNldFN0YXRlIiwiaW5kaWNlIiwiY29uc29sZSIsImxvZyIsInRhYmxhIiwiaWNvbm8iLCJ0YWJsZU51bWJlciIsInJvd3MiLCJyb3dCb2R5Iiwia2V5Iiwicm93IiwibWFwIiwidmFsdWUiLCJpbmRleCIsInB1c2giLCJnZXRUYWJsZSIsImhhbmRsZU5hdiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUVqQjs7QUFGaUIsb05Bd0JQLFVBQUNDLFNBQUQsRUFBZTtBQUN6QixVQUFJQSxTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDeEIsY0FBS0MsUUFBTCxHQUFpQixNQUFLQSxRQUFMLENBQWNDLE9BQWQsQ0FBc0JDLFVBQXRCLElBQW9DLEVBQXJELEdBQTJELElBQTNEO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBS0YsUUFBTCxHQUFpQixNQUFLQSxRQUFMLENBQWNDLE9BQWQsQ0FBc0JDLFVBQXRCLElBQW9DLEVBQXJELEdBQTJELElBQTNEO0FBQ0Q7QUFDRixLQTlCa0I7O0FBR2pCLFVBQUtGLFFBQUwsZ0JBQWdCRyw0Q0FBSyxDQUFDQyxTQUFOLEVBQWhCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ2JDLFVBQUksRUFBRSxLQURPLENBRWQ7QUFDQTtB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Y2svcGFnZXMvaW1wcmVzb3MuMTQ5Njg5YTA1MTAxZTAyMjQ1OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbCwgUm93LCBDb250YWluZXIsIE1vZGFsLCBUYWJsZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vY29yZS9JY29uL2RlZmF1bHQuanN4J1xyXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xyXG5cclxuXHJcbmNsYXNzIFRhYmxlU2Nyb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy8gUmVhY3QgUmVmIGlzIGNyZWF0ZWQgaGVyZVxyXG4gICAgdGhpcy50YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAvLyB0aXRsZTogbnVsbCxcclxuICAgLy8gZGVzY3JpcHRpb246IG51bGwsXHJcbiAgIC8vIGRpbWVuc2lvbnM6IG51bGwsXHJcbiAgIC8vIGNvbG9yUHJpY2U6IG51bGwsXHJcbiAgIC8vIEJXUHJpY2U6IG51bGwsXHJcbiAgIC8vIGltYWdlOiBudWxsLFxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucHJ1ZWJhID0gdGhpcy5wcnVlYmEuYmluZCh0aGlzKTtcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICAvKiBUaGlzIGZ1bmMgaGFuZGxlcyB0aGUgc2Nyb2xsaW5nIGJ5IGluY3JlbWVudGluZyBvciBkZWNyZW1lbnRpbmdcclxuICAgdGhlIHNjcm9sbExlZnQgcHJvcGVydHkgKi9cclxuICBoYW5kbGVOYXYgPSAoZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgdGhpcy50YWJsZVJlZiA/ICh0aGlzLnRhYmxlUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPSA1MCkgOiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YWJsZVJlZiA/ICh0aGlzLnRhYmxlUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSA1MCkgOiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBzaG93TW9kYWwoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1xyXG4gIH1cclxuICBoYW5kbGVDbG9zZSgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJ1ZWJhKGluZGljZSl7XHJcbiAgICBjb25zb2xlLmxvZyhcImVsIGluZGljZSBlc1wiLCBpbmRpY2UpXHJcbiAgfVxyXG5cclxuICBnZXRUYWJsZSgpe1xyXG4gICAgbGV0IHRhYmxhID0gbnVsbFxyXG4gICAgbGV0IGljb25vID0gPEljb24gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+XHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudGFibGVOdW1iZXIpIHtcclxuICAgICAgICBjYXNlIFwib25lXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlZpc3RhXCIsIFwiUHJvZHVjdG9cIiwgXCJEaW1lbnNpb25lc1wiLCBcIlRpcG8gZGUgQXJjaGl2b1wiLCBcIlBlc28gZGUgQXJjaGl2b1wiLCBcIlByZWNpbyBhIENvbG9yXCIsIFwiUHJlY2lvIGEgQiZOXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiRG9ibGUgUMOhZ2luYVwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkNDInMzAwLjAwMFwiLFwiJDM1JzAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJBdmlzbyBJcnJlZ3VsYXJcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYXMgM2EsNWEsN2EsOWFcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjknOTAwLjAwMFwiLFwiJDI0JzUwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSBJbXBhclwiLFwiVmVydGljYWwgMi41IENvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDEyJzMwMC4wMDBcIixcIiQ5JzkwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSAzYSw1YSw3YSw5YVwiLFwiVmVydGljYWwgMi41IGNvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDE3JzUwMC4wMDBcIixcIiQxNCc0MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiQ29udHJhcG9ydGFkYVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQzNScwMDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmEgSW1wYXJcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjMnMzAwLjAwMFwiLFwiJDE5JzYwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hIENvcnJpZW50ZVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMCc2MDAuMDAwXCIsXCIkMTYnMDAwLjAwMFwiXV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0d29cIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiVGFtYcOxb1wiLCBcIkNvbG9yXCIsIFwiQmxhbmNvIHkgTmVncm9cIl0sW1wiUHJpbWVyYSBQw6FnaW5hXCIsXCIkNDg1LjUwMFwiLFwiMzQ1LjAwMFwiXSxbXCJUZXJjZXJhLCBRdWludGEgeSBTw6lwdGltYSBQw6FnaW5hXCIsXCIkMjg0LjUwMFwiLFwiJDI0NC4wMDBcIl0sW1wiQ29udHJhcG9ydGFkYVwiLFwiJDI1MC4wMDBcIixcIiQyMDAuMDAwXCJdLFtcIkNvcnJpZW50ZVwiLFwiJDE5NS4wMDBcIixcIiQxNTguMDAwXCJdLFtcIkJvZ290w6FcIixcIiQxNDUuMDAwXCIsXCIxMTAuMDAwXCJdLFtcIkltcGFyXCIsXCIkMjM2LjAwMFwiLFwiJDE5MC4wMDBcIl1dOyAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAgXCJ0aHJlZVwiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJDYW50aWRhZFwiLCBcIkNhcnRhXCIsIFwiSGFzdGEgZGUgMTYgcMOhZ1wiLCBcIk3DoXMgZGUgMTYgcMOhZ1wiXSxbXCIxMC4wMDAgYSA0MC4wMDBcIixcIiQyMzVcIixcIjMxM1wiLFwiJDM4MVwiXSxbXCJTdXNjcmlwdG9yZXMgbmFjaW9uYWxcIixcIiQxOTVcIixcIiQyODVcIixcIjMxM1wiXSxbXCJUb3RhbCBjaXJjdWxhY2nDs24gZGUgbHVuZXMgYSBkb21pbmdvXCIsXCIkMTc4XCIsXCIkMjEwXCIsXCIyMzdcIl0sW1wiVG90YWwgY2lyY3VsYWNpw7NuIGRvbWluZ29cIixcIiQxNjdcIixcIiQyMDBcIixcIjIxNlwiXSxbXCJNYW51YWxpZGFkXCIsXCIkMTA4XCIsXCIxMDhcIixcIjEwOFwiXV07ICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0YWJsYT1bXTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgIGNvbnN0IHJvd0JvZHkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YWJsYSkge1xyXG4gICAgICAgIGxldCByb3cgPSBudWxsO1xyXG4gICAgICAgIGlmIChrZXkgPT0gMCl7XHJcbiAgICAgICAgICAgIHJvdyA9IChcclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgcm93ID0gKDx0cj5cclxuICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIGluZGV4ID09PSAwID9cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDx0ZCAgb25DbGljaz17dGhpcy5wcnVlYmEoaW5kZXgpfSBrZXk9e2luZGV4fT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA6ICA8dGQga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvd0JvZHkucHVzaChyb3cpXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgIH1cclxuICAgICAgcm93cy5wdXNoKFxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3Jvd0JvZHl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICApXHJcbiAgICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuICAvKkluIHRoZSByZW5kZXIsIHdlIGFjY2VzcyBuYXYtaXRlbXMgdmlhIGl0cyByZWYgYXR0cmlidXRlIGFuZCBjb250cm9sc1xyXG4gIGl0IHdpdGggdGhlICdQcmV2JyBhbmQgJ05leHQnIGJ1dHRvbnMgdXNpbmcgdGhlIGZ1bmMgZGVmaW5lZCBhYm92ZSAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVOYXZJdGVtcyBQcmludC10YWJsZU5hdkl0ZW1zX2ZpcnN0JzogJ1ByaW50LXRhYmxlTmF2SXRlbXMnfSByZWY9e3RoaXMudGFibGVSZWZ9PlxyXG4gICAgICAgIDxUYWJsZSBzdHJpcGVkICBob3Zlcj5cclxuICB7dGhpcy5nZXRUYWJsZSgpfVxyXG4gIDwvVGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAnb25lJyA/ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl9maXJzdCcgOiB0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAndHdvJyA/ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl9zZWNvbmQnIDogJ1ByaW50LXRhYmxlQ29udGFpbmVyIFByaW50LXRhYmxlQ29udGFpbmVyX3RoaXJkJyAgIH0+XHJcbiAgICBcclxuICAgICAgICAgICAgPGRpdiAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOYXYoJ2xlZnQnKX0+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J1ByaW50LXNjcm9sbEljb24nIGljb249XCJjaGV2cm9uLWxlZnRcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIHNjcm9sbFxyXG4gICBcclxuICAgICAgICAgICAgPGEgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdyaWdodCcpfT5cclxuICAgICAgICAgIDxJY29uICBjbGFzc05hbWU9J1ByaW50LXNjcm9sbEljb24nIGljb249XCJjaGV2cm9uLXJpZ2h0XCIvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdOZXdzbGV0dGVyLXNlY29uZFBvcFVwJ1xyXG4gICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3d9XHJcbiAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsVGl0bGVcIiBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgIERvYmxlIHDDoWdpbmFcclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxEZXNjcmlwdGlvblwiICBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbFN1YnRpdGxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVGFibG9pZGVcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBPZnJlY2Vtb3MgZWwgZm9ybWF0byBkZSB2aWRlbyBPdXRzdHJlYW0gaW5zZXJ0YWRvIGVuIGVsIGNvcmF6w7NuIGRlbCBjb250ZW5pZG8gZWRpdG9yaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fT4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxJbWFnZVwiICBzcmM9XCIvaW1hZ2VzL2ltcHJlc29zL2RvYmxlX3BhZ2luYS5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbERlc2NyaXB0aW9uVGl0bGVcIiAgbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpbWVuc2lvbmVzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbEluZm9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgY29sIHggMzcgY21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW8gYSBjb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxJbmZvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJDQyJzMwMC4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW8gYSBCJk46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsSW5mb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQzNScwMDAuMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgXHJcblxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNjcm9sbDsiXSwic291cmNlUm9vdCI6IiJ9