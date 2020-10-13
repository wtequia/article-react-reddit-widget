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
        onClick: this.showModal,
        className: "Print-tableIcon",
        icon: "eye",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
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
        className: "Print-modalText Print-modalText_modalTitle",
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }
      }, "Doble p\xE1gina"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 23
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Print-modalText Print-modalText_modalDescription",
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "Print-modalText Print-modalText_modalSubtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }
      }, "Tabloide"), "Ofrecemos el formato de video Outstream insertado en el coraz\xF3n del contenido editorial")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 23
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 25
        }
      }, __jsx("img", {
        className: "Print-modalImage",
        src: "/images/impresos/doble_pagina.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Print-modalText Print-modalText_modalDescriptionTitle",
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 25
        }
      }, "Dimensiones:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 27
        }
      }, "10 col x 37 cm"), "Precio a color:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 27
        }
      }, "$42'300.000"), "Precio a B&N:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsInNldFN0YXRlIiwidGFibGEiLCJpY29ubyIsInRhYmxlTnVtYmVyIiwicm93cyIsInJvd0JvZHkiLCJrZXkiLCJyb3ciLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwicHVzaCIsImdldFRhYmxlIiwiaGFuZGxlTmF2IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOLEVBRGlCLENBRWpCOztBQUZpQixvTkFzQlAsVUFBQ0MsU0FBRCxFQUFlO0FBQ3pCLFVBQUlBLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN4QixjQUFLQyxRQUFMLEdBQWlCLE1BQUtBLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQkMsVUFBdEIsSUFBb0MsRUFBckQsR0FBMkQsSUFBM0Q7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLRixRQUFMLEdBQWlCLE1BQUtBLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQkMsVUFBdEIsSUFBb0MsRUFBckQsR0FBMkQsSUFBM0Q7QUFDRDtBQUNGLEtBNUJrQjs7QUFHakIsVUFBS0YsUUFBTCxnQkFBZ0JHLDRDQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDYkMsVUFBSSxFQUFFLEtBRE8sQ0FFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUGMsS0FBYjtBQVNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsbURBQUQ7QUFBSyxpQkFBUyxFQUFDLGtEQUFmO0FBQW1FLFVBQUUsRUFBRSxDQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBSyxpQkFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsK0ZBREYsQ0FERixFQVNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsbURBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1o7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQW1DLFdBQUcsRUFBQyxtQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURZLENBREYsRUFJRSxNQUFDLG1EQUFEO0FBQUssaUJBQVMsRUFBQyx1REFBZjtBQUF3RSxVQUFFLEVBQUUsQ0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFRTtBQUFLLGlCQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixxQkFNRTtBQUFLLGlCQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORixtQkFVRTtBQUFLLGlCQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWRixDQUpGLENBVEYsQ0FERixDQVJWLENBckJGLENBREY7QUFxRUQ7Ozs7RUE1S3VCZSwrQzs7QUErS1gzQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXByZXNvcy40NGRiNmY1NzA4N2IxNTNmZDc3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29sLCBSb3csIENvbnRhaW5lciwgTW9kYWwsIFRhYmxlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb3JlL0ljb24vZGVmYXVsdC5qc3gnXHJcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XHJcblxyXG5cclxuY2xhc3MgVGFibGVTY3JvbGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvLyBSZWFjdCBSZWYgaXMgY3JlYXRlZCBoZXJlXHJcbiAgICB0aGlzLnRhYmxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgIC8vIHRpdGxlOiBudWxsLFxyXG4gICAvLyBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgLy8gZGltZW5zaW9uczogbnVsbCxcclxuICAgLy8gY29sb3JQcmljZTogbnVsbCxcclxuICAgLy8gQldQcmljZTogbnVsbCxcclxuICAgLy8gaW1hZ2U6IG51bGwsXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsb3NlID0gdGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyogVGhpcyBmdW5jIGhhbmRsZXMgdGhlIHNjcm9sbGluZyBieSBpbmNyZW1lbnRpbmcgb3IgZGVjcmVtZW50aW5nXHJcbiAgIHRoZSBzY3JvbGxMZWZ0IHByb3BlcnR5ICovXHJcbiAgaGFuZGxlTmF2ID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgIHRoaXMudGFibGVSZWYgPyAodGhpcy50YWJsZVJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0gNTApIDogbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGFibGVSZWYgPyAodGhpcy50YWJsZVJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0gNTApIDogbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgc2hvd01vZGFsKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcclxuICB9XHJcbiAgaGFuZGxlQ2xvc2UoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGdldFRhYmxlKCl7XHJcbiAgICBsZXQgdGFibGEgPSBudWxsXHJcbiAgICBsZXQgaWNvbm8gPSA8SWNvbiBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbH0gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+XHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudGFibGVOdW1iZXIpIHtcclxuICAgICAgICBjYXNlIFwib25lXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlZpc3RhXCIsIFwiUHJvZHVjdG9cIiwgXCJEaW1lbnNpb25lc1wiLCBcIlRpcG8gZGUgQXJjaGl2b1wiLCBcIlBlc28gZGUgQXJjaGl2b1wiLCBcIlByZWNpbyBhIENvbG9yXCIsIFwiUHJlY2lvIGEgQiZOXCJdLFtpY29ubywgXCJEb2JsZSBww6FnaW5hXCIsXCIxMCBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQ0MiczMDAuMDAwXCIsXCIkMzUuMDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIkRvYmxlIFDDoWdpbmFcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDQyJzMwMC4wMDBcIixcIiQzNScwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiQXZpc28gSXJyZWd1bGFyXCIsXCIxMCBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMCc2MDAuMDAwXCIsXCIkMTYnMDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmFzIDNhLDVhLDdhLDlhXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDI5JzkwMC4wMDBcIixcIiQyNCc1MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiMS8yIFDDoWdpbmEgSW1wYXJcIixcIlZlcnRpY2FsIDIuNSBDb2wgeCAzNyBjbSBIb3Jpem9udGFsIDUgY29sIHggMTguNSBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQxMiczMDAuMDAwXCIsXCIkOSc5MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiMS8yIFDDoWdpbmEgM2EsNWEsN2EsOWFcIixcIlZlcnRpY2FsIDIuNSBjb2wgeCAzNyBjbSBIb3Jpem9udGFsIDUgY29sIHggMTguNSBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQxNyc1MDAuMDAwXCIsXCIkMTQnNDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIkNvbnRyYXBvcnRhZGFcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMzUnMDAwLjAwMFwiLFwiJDI0JzUwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hIEltcGFyXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIzJzMwMC4wMDBcIixcIiQxOSc2MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYSBDb3JyaWVudGVcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjAnNjAwLjAwMFwiLFwiJDE2JzAwMC4wMDBcIl1dO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidHdvXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlRhbWHDsW9cIiwgXCJDb2xvclwiLCBcIkJsYW5jbyB5IE5lZ3JvXCJdLFtcIlByaW1lcmEgUMOhZ2luYVwiLFwiJDQ4NS41MDBcIixcIjM0NS4wMDBcIl0sW1wiVGVyY2VyYSwgUXVpbnRhIHkgU8OpcHRpbWEgUMOhZ2luYVwiLFwiJDI4NC41MDBcIixcIiQyNDQuMDAwXCJdLFtcIkNvbnRyYXBvcnRhZGFcIixcIiQyNTAuMDAwXCIsXCIkMjAwLjAwMFwiXSxbXCJDb3JyaWVudGVcIixcIiQxOTUuMDAwXCIsXCIkMTU4LjAwMFwiXSxbXCJCb2dvdMOhXCIsXCIkMTQ1LjAwMFwiLFwiMTEwLjAwMFwiXSxbXCJJbXBhclwiLFwiJDIzNi4wMDBcIixcIiQxOTAuMDAwXCJdXTsgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgIFwidGhyZWVcIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiQ2FudGlkYWRcIiwgXCJDYXJ0YVwiLCBcIkhhc3RhIGRlIDE2IHDDoWdcIiwgXCJNw6FzIGRlIDE2IHDDoWdcIl0sW1wiMTAuMDAwIGEgNDAuMDAwXCIsXCIkMjM1XCIsXCIzMTNcIixcIiQzODFcIl0sW1wiU3VzY3JpcHRvcmVzIG5hY2lvbmFsXCIsXCIkMTk1XCIsXCIkMjg1XCIsXCIzMTNcIl0sW1wiVG90YWwgY2lyY3VsYWNpw7NuIGRlIGx1bmVzIGEgZG9taW5nb1wiLFwiJDE3OFwiLFwiJDIxMFwiLFwiMjM3XCJdLFtcIlRvdGFsIGNpcmN1bGFjacOzbiBkb21pbmdvXCIsXCIkMTY3XCIsXCIkMjAwXCIsXCIyMTZcIl0sW1wiTWFudWFsaWRhZFwiLFwiJDEwOFwiLFwiMTA4XCIsXCIxMDhcIl1dOyAgIFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGFibGE9W107XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByb3dzID0gW107XHJcbiAgICBjb25zdCByb3dCb2R5ID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFibGEpIHtcclxuICAgICAgICBsZXQgcm93ID0gbnVsbDtcclxuICAgICAgICBpZiAoa2V5ID09IDApe1xyXG4gICAgICAgICAgICByb3cgPSAoXHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIHt0YWJsYVtrZXldLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fT57dmFsdWV9PC90aD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICByb3dzLnB1c2gocm93KTtcclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgIHJvdyA9ICg8dHI+XHJcbiAgICAgICAgICAgIHt0YWJsYVtrZXldLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gMCA/XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8dGQgIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDogIDx0ZCBrZXk9e2luZGV4fT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm93Qm9keS5wdXNoKHJvdylcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgfVxyXG4gICAgICByb3dzLnB1c2goXHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7cm93Qm9keX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgIClcclxuICAgICAgcmV0dXJuIHJvd3M7XHJcbiAgfVxyXG4gIC8qSW4gdGhlIHJlbmRlciwgd2UgYWNjZXNzIG5hdi1pdGVtcyB2aWEgaXRzIHJlZiBhdHRyaWJ1dGUgYW5kIGNvbnRyb2xzXHJcbiAgaXQgd2l0aCB0aGUgJ1ByZXYnIGFuZCAnTmV4dCcgYnV0dG9ucyB1c2luZyB0aGUgZnVuYyBkZWZpbmVkIGFib3ZlICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IHt0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAnb25lJyA/ICdQcmludC10YWJsZU5hdkl0ZW1zIFByaW50LXRhYmxlTmF2SXRlbXNfZmlyc3QnOiAnUHJpbnQtdGFibGVOYXZJdGVtcyd9IHJlZj17dGhpcy50YWJsZVJlZn0+XHJcbiAgICAgICAgPFRhYmxlIHN0cmlwZWQgIGhvdmVyPlxyXG4gIHt0aGlzLmdldFRhYmxlKCl9XHJcbiAgPC9UYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3RoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICdvbmUnID8gJ1ByaW50LXRhYmxlQ29udGFpbmVyIFByaW50LXRhYmxlQ29udGFpbmVyX2ZpcnN0JyA6IHRoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICd0d28nID8gJ1ByaW50LXRhYmxlQ29udGFpbmVyIFByaW50LXRhYmxlQ29udGFpbmVyX3NlY29uZCcgOiAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfdGhpcmQnICAgfT5cclxuICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5hdignbGVmdCcpfT5cclxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nUHJpbnQtc2Nyb2xsSWNvbicgaWNvbj1cImNoZXZyb24tbGVmdFwiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgc2Nyb2xsXHJcbiAgIFxyXG4gICAgICAgICAgICA8YSAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOYXYoJ3JpZ2h0Jyl9PlxyXG4gICAgICAgICAgPEljb24gIGNsYXNzTmFtZT0nUHJpbnQtc2Nyb2xsSWNvbicgaWNvbj1cImNoZXZyb24tcmlnaHRcIi8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J05ld3NsZXR0ZXItc2Vjb25kUG9wVXAnXHJcbiAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd31cclxuICAgICAgICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxUaXRsZVwiIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgRG9ibGUgcMOhZ2luYVxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbERlc2NyaXB0aW9uXCIgIG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsU3VidGl0bGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUYWJsb2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIE91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJQcmludC1tb2RhbEltYWdlXCIgIHNyYz1cIi9pbWFnZXMvaW1wcmVzb3MvZG9ibGVfcGFnaW5hLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsRGVzY3JpcHRpb25UaXRsZVwiICBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGltZW5zaW9uZXM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsSW5mb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBjb2wgeCAzNyBjbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpbyBhIGNvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbEluZm9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkNDInMzAwLjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpbyBhIEImTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxJbmZvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJDM1JzAwMC4wMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICBcclxuXHJcbiAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlU2Nyb2xsOyJdLCJzb3VyY2VSb290IjoiIn0=