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
      console.log("nombre", nombre);
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var _this2 = this;

      var tabla = null;

      var icono = __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this.showModal(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsInBydWViYSIsInNldFN0YXRlIiwibm9tYnJlIiwiY29uc29sZSIsImxvZyIsInRhYmxhIiwiaWNvbm8iLCJ0YWJsZU51bWJlciIsInJvd3MiLCJyb3dCb2R5Iiwia2V5Iiwicm93IiwibWFwIiwidmFsdWUiLCJpbmRleCIsInB1c2giLCJnZXRUYWJsZSIsImhhbmRsZU5hdiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOLEVBRGlCLENBRWpCOztBQUZpQixvTkFzQlAsVUFBQ0MsU0FBRCxFQUFlO0FBQ3pCLFVBQUlBLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN4QixjQUFLQyxRQUFMLEdBQWlCLE1BQUtBLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQkMsVUFBdEIsSUFBb0MsRUFBckQsR0FBMkQsSUFBM0Q7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLRixRQUFMLEdBQWlCLE1BQUtBLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQkMsVUFBdEIsSUFBb0MsRUFBckQsR0FBMkQsSUFBM0Q7QUFDRDtBQUNGLEtBNUJrQjs7QUFHakIsVUFBS0YsUUFBTCxnQkFBZ0JHLDRDQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDYkMsVUFBSSxFQUFFLEtBRE8sQ0FFZDtBQUNBO0FBQ0E7QUFD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LEVBUVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSVixDQXJCRixDQURGO0FBdUNEOzs7O0VBbEp1Qm1CLCtDOztBQXFKWC9CLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcHJlc29zLmMzMTA0MjZkYWFlZjU3MTg1YmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb2wsIFJvdywgQ29udGFpbmVyLCBNb2RhbCwgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvcmUvSWNvbi9kZWZhdWx0LmpzeCdcclxuY2xhc3MgVGFibGVTY3JvbGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvLyBSZWFjdCBSZWYgaXMgY3JlYXRlZCBoZXJlXHJcbiAgICB0aGlzLnRhYmxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgIC8vIHRpdGxlOiBudWxsLFxyXG4gICAvLyBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgLy8gZGltZW5zaW9uczogbnVsbCxcclxuICAgLy8gY29sb3JQcmljZTogbnVsbCxcclxuICAgLy8gQldQcmljZTogbnVsbCxcclxuICAgLy8gaW1hZ2U6IG51bGwsXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsb3NlID0gdGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wcnVlYmEgPSB0aGlzLnBydWViYS5iaW5kKHRoaXMpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvKiBUaGlzIGZ1bmMgaGFuZGxlcyB0aGUgc2Nyb2xsaW5nIGJ5IGluY3JlbWVudGluZyBvciBkZWNyZW1lbnRpbmdcclxuICAgdGhlIHNjcm9sbExlZnQgcHJvcGVydHkgKi9cclxuICBoYW5kbGVOYXYgPSAoZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgdGhpcy50YWJsZVJlZiA/ICh0aGlzLnRhYmxlUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPSA1MCkgOiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YWJsZVJlZiA/ICh0aGlzLnRhYmxlUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSA1MCkgOiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBzaG93TW9kYWwoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1xyXG4gIH1cclxuICBoYW5kbGVDbG9zZSgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJ1ZWJhKG5vbWJyZSl7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5vbWJyZVwiLCBub21icmUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGUoKXtcclxuICAgIGxldCB0YWJsYSA9IG51bGxcclxuICAgIGxldCBpY29ubyA9IDxJY29uICBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbCgpfSBjbGFzc05hbWU9J1ByaW50LXRhYmxlSWNvbicgaWNvbj1cImV5ZVwiLz5cclxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy50YWJsZU51bWJlcikge1xyXG4gICAgICAgIGNhc2UgXCJvbmVcIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiVmlzdGFcIiwgXCJQcm9kdWN0b1wiLCBcIkRpbWVuc2lvbmVzXCIsIFwiVGlwbyBkZSBBcmNoaXZvXCIsIFwiUGVzbyBkZSBBcmNoaXZvXCIsIFwiUHJlY2lvIGEgQ29sb3JcIiwgXCJQcmVjaW8gYSBCJk5cIl0sW2ljb25vLCBcIkRvYmxlIHDDoWdpbmFcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDQyJzMwMC4wMDBcIixcIiQzNS4wMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiRG9ibGUgUMOhZ2luYVwiLFwiMTAgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkNDInMzAwLjAwMFwiLFwiJDM1JzAwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJBdmlzbyBJcnJlZ3VsYXJcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiUMOhZ2luYXMgM2EsNWEsN2EsOWFcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjknOTAwLjAwMFwiLFwiJDI0JzUwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSBJbXBhclwiLFwiVmVydGljYWwgMi41IENvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDEyJzMwMC4wMDBcIixcIiQ5JzkwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCIxLzIgUMOhZ2luYSAzYSw1YSw3YSw5YVwiLFwiVmVydGljYWwgMi41IGNvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDE3JzUwMC4wMDBcIixcIiQxNCc0MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbaWNvbm8sIFwiQ29udHJhcG9ydGFkYVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQzNScwMDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgW2ljb25vLCBcIlDDoWdpbmEgSW1wYXJcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjMnMzAwLjAwMFwiLFwiJDE5JzYwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFtpY29ubywgXCJQw6FnaW5hIENvcnJpZW50ZVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMCc2MDAuMDAwXCIsXCIkMTYnMDAwLjAwMFwiXV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0d29cIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiVGFtYcOxb1wiLCBcIkNvbG9yXCIsIFwiQmxhbmNvIHkgTmVncm9cIl0sW1wiUHJpbWVyYSBQw6FnaW5hXCIsXCIkNDg1LjUwMFwiLFwiMzQ1LjAwMFwiXSxbXCJUZXJjZXJhLCBRdWludGEgeSBTw6lwdGltYSBQw6FnaW5hXCIsXCIkMjg0LjUwMFwiLFwiJDI0NC4wMDBcIl0sW1wiQ29udHJhcG9ydGFkYVwiLFwiJDI1MC4wMDBcIixcIiQyMDAuMDAwXCJdLFtcIkNvcnJpZW50ZVwiLFwiJDE5NS4wMDBcIixcIiQxNTguMDAwXCJdLFtcIkJvZ290w6FcIixcIiQxNDUuMDAwXCIsXCIxMTAuMDAwXCJdLFtcIkltcGFyXCIsXCIkMjM2LjAwMFwiLFwiJDE5MC4wMDBcIl1dOyAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAgXCJ0aHJlZVwiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJDYW50aWRhZFwiLCBcIkNhcnRhXCIsIFwiSGFzdGEgZGUgMTYgcMOhZ1wiLCBcIk3DoXMgZGUgMTYgcMOhZ1wiXSxbXCIxMC4wMDAgYSA0MC4wMDBcIixcIiQyMzVcIixcIjMxM1wiLFwiJDM4MVwiXSxbXCJTdXNjcmlwdG9yZXMgbmFjaW9uYWxcIixcIiQxOTVcIixcIiQyODVcIixcIjMxM1wiXSxbXCJUb3RhbCBjaXJjdWxhY2nDs24gZGUgbHVuZXMgYSBkb21pbmdvXCIsXCIkMTc4XCIsXCIkMjEwXCIsXCIyMzdcIl0sW1wiVG90YWwgY2lyY3VsYWNpw7NuIGRvbWluZ29cIixcIiQxNjdcIixcIiQyMDBcIixcIjIxNlwiXSxbXCJNYW51YWxpZGFkXCIsXCIkMTA4XCIsXCIxMDhcIixcIjEwOFwiXV07ICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0YWJsYT1bXTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgIGNvbnN0IHJvd0JvZHkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YWJsYSkge1xyXG4gICAgICAgIGxldCByb3cgPSBudWxsO1xyXG4gICAgICAgIGlmIChrZXkgPT0gMCl7XHJcbiAgICAgICAgICAgIHJvdyA9IChcclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgcm93ID0gKDx0cj5cclxuICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIGluZGV4ID09PSAwID9cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDx0ZCAga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgOiAgPHRkIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3dCb2R5LnB1c2gocm93KVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICB9XHJcbiAgICAgIHJvd3MucHVzaChcclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dCb2R5fVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gcm93cztcclxuICB9XHJcbiAgLypJbiB0aGUgcmVuZGVyLCB3ZSBhY2Nlc3MgbmF2LWl0ZW1zIHZpYSBpdHMgcmVmIGF0dHJpYnV0ZSBhbmQgY29udHJvbHNcclxuICBpdCB3aXRoIHRoZSAnUHJldicgYW5kICdOZXh0JyBidXR0b25zIHVzaW5nIHRoZSBmdW5jIGRlZmluZWQgYWJvdmUgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3RoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICdvbmUnID8gJ1ByaW50LXRhYmxlTmF2SXRlbXMgUHJpbnQtdGFibGVOYXZJdGVtc19maXJzdCc6ICdQcmludC10YWJsZU5hdkl0ZW1zJ30gcmVmPXt0aGlzLnRhYmxlUmVmfT5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCAgaG92ZXI+XHJcbiAge3RoaXMuZ2V0VGFibGUoKX1cclxuICA8L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfZmlyc3QnIDogdGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ3R3bycgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfc2Vjb25kJyA6ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl90aGlyZCcgICB9PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdsZWZ0Jyl9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1sZWZ0XCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICBzY3JvbGxcclxuICAgXHJcbiAgICAgICAgICAgIDxhICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5hdigncmlnaHQnKX0+XHJcbiAgICAgICAgICA8SWNvbiAgY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1yaWdodFwiLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nTmV3c2xldHRlci1zZWNvbmRQb3BVcCdcclxuICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fVxyXG4gICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgaG9sYVxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgaG9vb2xhYWFcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIFxyXG5cclxuICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVTY3JvbGw7Il0sInNvdXJjZVJvb3QiOiIifQ==