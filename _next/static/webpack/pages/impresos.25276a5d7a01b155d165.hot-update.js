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
      title: null,
      description: null,
      dimensions: null,
      colorPrice: null,
      BWPrice: null,
      image: null
    };
    _this.showModal = _this.showModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleClose = _this.handleClose.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.firstModal = _this.firstModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.secondModal = _this.secondModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.thirdModal = _this.thirdModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.fourthModal = _this.fourthModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.fifthModal = _this.fifthModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.sixthModal = _this.sixthModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.seventhModal = _this.seventhModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.eighthModal = _this.eighthModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
    key: "firstModal",
    value: function firstModal() {
      this.setState({
        title: "Doble página"
      });
      this.setState({
        description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial"
      });
      this.setState({
        dimensions: "10 col x 37 cms"
      });
      this.setState({
        colorPrice: "$42'300.000"
      });
      this.setState({
        BWPrice: "$35'000.000"
      });
      this.setState({
        image: "/images/impresos/doble_pagina.png"
      });
      this.showModal();
    }
  }, {
    key: "secondModal",
    value: function secondModal() {
      this.setState({
        title: "Aviso Irregular"
      });
      this.setState({
        description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial"
      });
      this.setState({
        dimensions: "10 col x 37 cms"
      });
      this.setState({
        colorPrice: "$20'600.000"
      });
      this.setState({
        BWPrice: "$16'000.000"
      });
      this.setState({
        image: "/images/impresos/aviso_irregular.png"
      });
      this.showModal();
    }
  }, {
    key: "thirdModal",
    value: function thirdModal() {
      this.setState({
        title: "Páginas 3a, 5a, 7a, 9a"
      });
      this.setState({
        description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial"
      });
      this.setState({
        dimensions: "5 col x 37 cms"
      });
      this.setState({
        colorPrice: "$29'600.000"
      });
      this.setState({
        BWPrice: "$24'500.000"
      });
      this.setState({
        image: "/images/impresos/paginas_a.png"
      });
      this.showModal();
    }
  }, {
    key: "fourthModal",
    value: function fourthModal() {
      this.setState({
        title: "1/2 Página impar"
      });
      this.setState({
        description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial"
      });
      this.setState({
        dimensions: "Vertical 2.5 col x 37 cm, Horizontal 5 col x 18.5 cm"
      });
      this.setState({
        colorPrice: "$12'300.000"
      });
      this.setState({
        BWPrice: "$9'900.000"
      });
      this.setState({
        image: "/images/impresos/media_pagina_impar.png"
      });
      this.showModal();
    }
  }, {
    key: "fifthModal",
    value: function fifthModal() {
      this.setState({
        title: "1/2 Pág. 3a, 5a, 7a, 9a"
      });
      this.setState({
        description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial"
      });
      this.setState({
        dimensions: "Vertical 2.5 col x 37 cm, Horizontal 5 col x 18.5 cm"
      });
      this.setState({
        colorPrice: "$17'500.000"
      });
      this.setState({
        BWPrice: "$13'400.000"
      });
      this.setState({
        image: "/images/impresos/paginas_a_impar.png"
      });
      this.showModal();
    }
  }, {
    key: "sixthModal",
    value: function sixthModal() {
      this.setState({
        title: "Contraportada"
      });
      this.setState({
        description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial"
      });
      this.setState({
        dimensions: "5 col x 37 cms"
      });
      this.setState({
        colorPrice: "$35'000.000"
      });
      this.setState({
        BWPrice: "$24'500.000"
      });
      this.setState({
        image: "/images/impresos/contraportada.png"
      });
      this.showModal();
    }
  }, {
    key: "seventhModal",
    value: function seventhModal() {
      this.setState({
        title: "Página impar"
      });
      this.setState({
        description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial"
      });
      this.setState({
        dimensions: "5 col x 37 cms"
      });
      this.setState({
        colorPrice: "$23'300.000"
      });
      this.setState({
        BWPrice: "$19'600.000"
      });
      this.setState({
        image: "/images/impresos/pagina_impar.png"
      });
      this.showModal();
    }
  }, {
    key: "eighthModal",
    value: function eighthModal() {
      this.setState({
        title: "Página corriente"
      });
      this.setState({
        description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial"
      });
      this.setState({
        dimensions: "5 col x 37 cms"
      });
      this.setState({
        colorPrice: "$20'600.000"
      });
      this.setState({
        BWPrice: "$16'000.000"
      });
      this.setState({
        image: "/images/impresos/pagina_corriente.png"
      });
      this.showModal();
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var _this2 = this;

      var tabla = null;

      switch (this.props.tableNumber) {
        case "one":
          tabla = [["Vista", "Producto", "Dimensiones", "Tipo de Archivo", "Peso de Archivo", "Precio a Color", "Precio a B&N"], [__jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: this.firstModal,
            className: "Print-tableIcon",
            icon: "eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 14
            }
          }), "Doble Página", "10 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$42'300.000", "$35'000.000"], [__jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: this.secondModal,
            className: "Print-tableIcon",
            icon: "eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 14
            }
          }), "Aviso Irregular", "10 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$20'600.000", "$16'000.000"], [__jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: this.thirdModal,
            className: "Print-tableIcon",
            icon: "eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 14
            }
          }), "Páginas 3a,5a,7a,9a", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$29'900.000", "$24'500.000"], [__jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: this.fourthModal,
            className: "Print-tableIcon",
            icon: "eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 14
            }
          }), "1/2 Página Impar", "Vertical 2.5 Col x 37 cm Horizontal 5 col x 18.5 cm", "PNG, JPG AI, PSD", "3 MB", "$12'300.000", "$9'900.000"], [__jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: this.fifthModal,
            className: "Print-tableIcon",
            icon: "eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 14
            }
          }), "1/2 Página 3a,5a,7a,9a", "Vertical 2.5 col x 37 cm Horizontal 5 col x 18.5 cm", "PNG, JPG AI, PSD", "3 MB", "$17'500.000", "$14'400.000"], [__jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: this.sixthModal,
            className: "Print-tableIcon",
            icon: "eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 14
            }
          }), "Contraportada", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$35'000.000", "$24'500.000"], [__jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: this.seventhModal,
            className: "Print-tableIcon",
            icon: "eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 14
            }
          }), "Página Impar", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$23'300.000", "$19'600.000"], [__jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: this.eighthModal,
            className: "Print-tableIcon",
            icon: "eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 14
            }
          }), "Página Corriente", "5 col x 37 cm", "PNG, JPG AI, PSD", "3 MB", "$20'600.000", "$16'000.000"]];
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
            key: key,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }
          }, __jsx("tr", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 13
            }
          }, tabla[key].map(function (value, index) {
            return __jsx("th", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 19
              }
            }, value);
          })));
          rows.push(row);
        } else {
          row = __jsx("tr", {
            key: key,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 18
            }
          }, tabla[key].map(function (value, index) {
            return index === 0 ? __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 15
              }
            }, value) : __jsx("td", {
              key: index,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 175,
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
          lineNumber: 184,
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
          lineNumber: 194,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableNavItems Print-tableNavItems_first' : 'Print-tableNavItems',
        ref: this.tableRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        hover: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 9
        }
      }, this.getTable())), __jsx("div", {
        className: this.props.tableNumber === 'one' ? 'Print-tableContainer Print-tableContainer_first' : this.props.tableNumber === 'two' ? 'Print-tableContainer Print-tableContainer_second' : 'Print-tableContainer Print-tableContainer_third',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 9
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this3.handleNav('left');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }
      })), __jsx("span", {
        className: "Print-scrollText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 8
        }
      }, "scroll"), __jsx("a", {
        onClick: function onClick() {
          return _this3.handleNav('right');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Print-scrollIcon",
        icon: "chevron-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        className: "Newsletter-secondPopUp",
        show: this.state.show,
        onHide: this.handleClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
        className: "Print-modalText Print-modalText_modalTitle",
        closeButton: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 19
        }
      }, this.state.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 23
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Print-modalText Print-modalText_modalDescription",
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "Print-modalText Print-modalText_modalSubtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 25
        }
      }, "Tabloide"), this.state.description)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 23
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 25
        }
      }, __jsx("img", {
        className: "Print-modalImage",
        src: this.state.image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Print-modalText Print-modalText_modalDescriptionTitle",
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 25
        }
      }, "Dimensiones:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 27
        }
      }, this.state.dimensions), "Precio a color:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 27
        }
      }, this.state.colorPrice), "Precio a B&N:", __jsx("div", {
        className: "Print-modalText Print-modalText_modalInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 27
        }
      }, this.state.BWPrice)))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaW1lbnNpb25zIiwiY29sb3JQcmljZSIsIkJXUHJpY2UiLCJpbWFnZSIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsImZpcnN0TW9kYWwiLCJzZWNvbmRNb2RhbCIsInRoaXJkTW9kYWwiLCJmb3VydGhNb2RhbCIsImZpZnRoTW9kYWwiLCJzaXh0aE1vZGFsIiwic2V2ZW50aE1vZGFsIiwiZWlnaHRoTW9kYWwiLCJzZXRTdGF0ZSIsInRhYmxhIiwidGFibGVOdW1iZXIiLCJyb3dzIiwicm93Qm9keSIsImtleSIsInJvdyIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJwdXNoIiwiZ2V0VGFibGUiLCJoYW5kbGVOYXYiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FFakI7O0FBRmlCLG9OQThCUCxVQUFDQyxTQUFELEVBQWU7QUFDekIsVUFBSUEsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3hCLGNBQUtDLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFyRCxHQUEyRCxJQUEzRDtBQUNELE9BRkQsTUFFTztBQUNMLGNBQUtGLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFy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QyxXQUFHLEVBQUUsS0FBS0gsS0FBTCxDQUFXTyxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRFksQ0FERixFQUlFLE1BQUMsbURBQUQ7QUFBSyxpQkFBUyxFQUFDLHVEQUFmO0FBQXdFLFVBQUUsRUFBRSxDQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVFO0FBQUssaUJBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsS0FBS1AsS0FBTCxDQUFXSSxVQURaLENBRkYscUJBTUU7QUFBSyxpQkFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxLQUFLSixLQUFMLENBQVdLLFVBRFosQ0FORixtQkFVRTtBQUFLLGlCQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLEtBQUtMLEtBQUwsQ0FBV00sT0FEYixDQVZGLENBSkYsQ0FURixDQURGLENBUlYsQ0F0QkYsQ0FERjtBQXNFRDs7OztFQWhRdUIwQiwrQzs7QUFtUVh4QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXByZXNvcy4yNTI3NmE1ZDdhMDFiMTU1ZDE2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29sLCBSb3csIENvbnRhaW5lciwgTW9kYWwsIFRhYmxlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb3JlL0ljb24vZGVmYXVsdC5qc3gnXHJcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XHJcblxyXG5cclxuY2xhc3MgVGFibGVTY3JvbGwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvLyBSZWFjdCBSZWYgaXMgY3JlYXRlZCBoZXJlXHJcbiAgICB0aGlzLnRhYmxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICB0aXRsZTogbnVsbCxcclxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgZGltZW5zaW9uczogbnVsbCxcclxuICAgIGNvbG9yUHJpY2U6IG51bGwsXHJcbiAgICBCV1ByaWNlOiBudWxsLFxyXG4gICAgaW1hZ2U6IG51bGwsXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsb3NlID0gdGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5maXJzdE1vZGFsID0gdGhpcy5maXJzdE1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlY29uZE1vZGFsID0gdGhpcy5zZWNvbmRNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy50aGlyZE1vZGFsID0gdGhpcy50aGlyZE1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZvdXJ0aE1vZGFsID0gdGhpcy5mb3VydGhNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5maWZ0aE1vZGFsID0gdGhpcy5maWZ0aE1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNpeHRoTW9kYWwgPSB0aGlzLnNpeHRoTW9kYWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V2ZW50aE1vZGFsID0gdGhpcy5zZXZlbnRoTW9kYWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZWlnaHRoTW9kYWwgPSB0aGlzLmVpZ2h0aE1vZGFsLmJpbmQodGhpcyk7XHJcbiAgXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qIFRoaXMgZnVuYyBoYW5kbGVzIHRoZSBzY3JvbGxpbmcgYnkgaW5jcmVtZW50aW5nIG9yIGRlY3JlbWVudGluZ1xyXG4gICB0aGUgc2Nyb2xsTGVmdCBwcm9wZXJ0eSAqL1xyXG4gIGhhbmRsZU5hdiA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09IDUwKSA6IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlUmVmID8gKHRoaXMudGFibGVSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9IDUwKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsb3NlKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBmaXJzdE1vZGFsKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IFwiRG9ibGUgcMOhZ2luYVwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBcIk9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIG91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zOiBcIjEwIGNvbCB4IDM3IGNtc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yUHJpY2U6IFwiJDQyJzMwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBCV1ByaWNlOiBcIiQzNScwMDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IFwiL2ltYWdlcy9pbXByZXNvcy9kb2JsZV9wYWdpbmEucG5nXCIgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuICBzZWNvbmRNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBcIkF2aXNvIElycmVndWxhclwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBcIk9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIG91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zOiBcIjEwIGNvbCB4IDM3IGNtc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yUHJpY2U6IFwiJDIwJzYwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBCV1ByaWNlOiBcIiQxNicwMDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IFwiL2ltYWdlcy9pbXByZXNvcy9hdmlzb19pcnJlZ3VsYXIucG5nXCIgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuICB0aGlyZE1vZGFsKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IFwiUMOhZ2luYXMgM2EsIDVhLCA3YSwgOWFcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogXCJPZnJlY2Vtb3MgZWwgZm9ybWF0byBkZSB2aWRlbyBvdXRzdHJlYW0gaW5zZXJ0YWRvIGVuIGVsIGNvcmF6w7NuIGRlbCBjb250ZW5pZG8gZWRpdG9yaWFsXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9uczogXCI1IGNvbCB4IDM3IGNtc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yUHJpY2U6IFwiJDI5JzYwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBCV1ByaWNlOiBcIiQyNCc1MDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IFwiL2ltYWdlcy9pbXByZXNvcy9wYWdpbmFzX2EucG5nXCIgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuICBmb3VydGhNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBcIjEvMiBQw6FnaW5hIGltcGFyXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IFwiT2ZyZWNlbW9zIGVsIGZvcm1hdG8gZGUgdmlkZW8gb3V0c3RyZWFtIGluc2VydGFkbyBlbiBlbCBjb3JhesOzbiBkZWwgY29udGVuaWRvIGVkaXRvcmlhbFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpbWVuc2lvbnM6IFwiVmVydGljYWwgMi41IGNvbCB4IDM3IGNtLCBIb3Jpem9udGFsIDUgY29sIHggMTguNSBjbVwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yUHJpY2U6IFwiJDEyJzMwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBCV1ByaWNlOiBcIiQ5JzkwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogXCIvaW1hZ2VzL2ltcHJlc29zL21lZGlhX3BhZ2luYV9pbXBhci5wbmdcIiB9KTtcclxuICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG4gIGZpZnRoTW9kYWwoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogXCIxLzIgUMOhZy4gM2EsIDVhLCA3YSwgOWFcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogXCJPZnJlY2Vtb3MgZWwgZm9ybWF0byBkZSB2aWRlbyBvdXRzdHJlYW0gaW5zZXJ0YWRvIGVuIGVsIGNvcmF6w7NuIGRlbCBjb250ZW5pZG8gZWRpdG9yaWFsXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9uczogXCJWZXJ0aWNhbCAyLjUgY29sIHggMzcgY20sIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29sb3JQcmljZTogXCIkMTcnNTAwLjAwMFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IEJXUHJpY2U6IFwiJDEzJzQwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogXCIvaW1hZ2VzL2ltcHJlc29zL3BhZ2luYXNfYV9pbXBhci5wbmdcIiB9KTtcclxuICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG4gIHNpeHRoTW9kYWwoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogXCJDb250cmFwb3J0YWRhXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IFwiT2ZyZWNlbW9zIGVsIGZvcm1hdG8gZGUgdmlkZW8gb3V0c3RyZWFtIGluc2VydGFkbyBlbiBlbCBjb3JhesOzbiBkZWwgY29udGVuaWRvIGVkaXRvcmlhbFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpbWVuc2lvbnM6IFwiNSBjb2wgeCAzNyBjbXNcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvclByaWNlOiBcIiQzNScwMDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgQldQcmljZTogXCIkMjQnNTAwLjAwMFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBcIi9pbWFnZXMvaW1wcmVzb3MvY29udHJhcG9ydGFkYS5wbmdcIiB9KTtcclxuICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG4gIHNldmVudGhNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBcIlDDoWdpbmEgaW1wYXJcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogXCJPZnJlY2Vtb3MgZWwgZm9ybWF0byBkZSB2aWRlbyBvdXRzdHJlYW0gaW5zZXJ0YWRvIGVuIGVsIGNvcmF6w7NuIGRlbCBjb250ZW5pZG8gZWRpdG9yaWFsXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9uczogXCI1IGNvbCB4IDM3IGNtc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yUHJpY2U6IFwiJDIzJzMwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBCV1ByaWNlOiBcIiQxOSc2MDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IFwiL2ltYWdlcy9pbXByZXNvcy9wYWdpbmFfaW1wYXIucG5nXCIgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuICBlaWdodGhNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBcIlDDoWdpbmEgY29ycmllbnRlXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IFwiT2ZyZWNlbW9zIGVsIGZvcm1hdG8gZGUgdmlkZW8gb3V0c3RyZWFtIGluc2VydGFkbyBlbiBlbCBjb3JhesOzbiBkZWwgY29udGVuaWRvIGVkaXRvcmlhbFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpbWVuc2lvbnM6IFwiNSBjb2wgeCAzNyBjbXNcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvclByaWNlOiBcIiQyMCc2MDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgQldQcmljZTogXCIkMTYnMDAwLjAwMFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBcIi9pbWFnZXMvaW1wcmVzb3MvcGFnaW5hX2NvcnJpZW50ZS5wbmdcIiB9KTtcclxuICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGdldFRhYmxlKCl7XHJcbiAgICBsZXQgdGFibGEgPSBudWxsXHJcbiAgIFxyXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnRhYmxlTnVtYmVyKSB7XHJcbiAgICAgICAgY2FzZSBcIm9uZVwiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJWaXN0YVwiLCBcIlByb2R1Y3RvXCIsIFwiRGltZW5zaW9uZXNcIiwgXCJUaXBvIGRlIEFyY2hpdm9cIiwgXCJQZXNvIGRlIEFyY2hpdm9cIiwgXCJQcmVjaW8gYSBDb2xvclwiLCBcIlByZWNpbyBhIEImTlwiXSxcclxuICAgICAgICAgICAgWzxJY29uICBvbkNsaWNrPXt0aGlzLmZpcnN0TW9kYWx9IGNsYXNzTmFtZT0nUHJpbnQtdGFibGVJY29uJyBpY29uPVwiZXllXCIvPiwgXCJEb2JsZSBQw6FnaW5hXCIsXCIxMCBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQ0MiczMDAuMDAwXCIsXCIkMzUnMDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgWzxJY29uICBvbkNsaWNrPXt0aGlzLnNlY29uZE1vZGFsfSBjbGFzc05hbWU9J1ByaW50LXRhYmxlSWNvbicgaWNvbj1cImV5ZVwiLz4sIFwiQXZpc28gSXJyZWd1bGFyXCIsXCIxMCBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMCc2MDAuMDAwXCIsXCIkMTYnMDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgWzxJY29uICBvbkNsaWNrPXt0aGlzLnRoaXJkTW9kYWx9IGNsYXNzTmFtZT0nUHJpbnQtdGFibGVJY29uJyBpY29uPVwiZXllXCIvPiwgXCJQw6FnaW5hcyAzYSw1YSw3YSw5YVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyOSc5MDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgWzxJY29uICBvbkNsaWNrPXt0aGlzLmZvdXJ0aE1vZGFsfSBjbGFzc05hbWU9J1ByaW50LXRhYmxlSWNvbicgaWNvbj1cImV5ZVwiLz4sIFwiMS8yIFDDoWdpbmEgSW1wYXJcIixcIlZlcnRpY2FsIDIuNSBDb2wgeCAzNyBjbSBIb3Jpem9udGFsIDUgY29sIHggMTguNSBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQxMiczMDAuMDAwXCIsXCIkOSc5MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbPEljb24gIG9uQ2xpY2s9e3RoaXMuZmlmdGhNb2RhbH0gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+LCBcIjEvMiBQw6FnaW5hIDNhLDVhLDdhLDlhXCIsXCJWZXJ0aWNhbCAyLjUgY29sIHggMzcgY20gSG9yaXpvbnRhbCA1IGNvbCB4IDE4LjUgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMTcnNTAwLjAwMFwiLFwiJDE0JzQwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFs8SWNvbiAgb25DbGljaz17dGhpcy5zaXh0aE1vZGFsfSBjbGFzc05hbWU9J1ByaW50LXRhYmxlSWNvbicgaWNvbj1cImV5ZVwiLz4sIFwiQ29udHJhcG9ydGFkYVwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQzNScwMDAuMDAwXCIsXCIkMjQnNTAwLjAwMFwiXSxcclxuICAgICAgICAgICAgWzxJY29uICBvbkNsaWNrPXt0aGlzLnNldmVudGhNb2RhbH0gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+LCBcIlDDoWdpbmEgSW1wYXJcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjMnMzAwLjAwMFwiLFwiJDE5JzYwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFs8SWNvbiAgb25DbGljaz17dGhpcy5laWdodGhNb2RhbH0gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+LCBcIlDDoWdpbmEgQ29ycmllbnRlXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInR3b1wiOlxyXG4gICAgICAgICAgICB0YWJsYSA9IFtbXCJUYW1hw7FvXCIsIFwiQ29sb3JcIiwgXCJCbGFuY28geSBOZWdyb1wiXSxbXCJQcmltZXJhIFDDoWdpbmFcIixcIiQ0ODUuNTAwXCIsXCIzNDUuMDAwXCJdLFtcIlRlcmNlcmEsIFF1aW50YSB5IFPDqXB0aW1hIFDDoWdpbmFcIixcIiQyODQuNTAwXCIsXCIkMjQ0LjAwMFwiXSxbXCJDb250cmFwb3J0YWRhXCIsXCIkMjUwLjAwMFwiLFwiJDIwMC4wMDBcIl0sW1wiQ29ycmllbnRlXCIsXCIkMTk1LjAwMFwiLFwiJDE1OC4wMDBcIl0sW1wiQm9nb3TDoVwiLFwiJDE0NS4wMDBcIixcIjExMC4wMDBcIl0sW1wiSW1wYXJcIixcIiQyMzYuMDAwXCIsXCIkMTkwLjAwMFwiXV07ICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICBcInRocmVlXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIkNhbnRpZGFkXCIsIFwiQ2FydGFcIiwgXCJIYXN0YSBkZSAxNiBww6FnXCIsIFwiTcOhcyBkZSAxNiBww6FnXCJdLFtcIjEwLjAwMCBhIDQwLjAwMFwiLFwiJDIzNVwiLFwiMzEzXCIsXCIkMzgxXCJdLFtcIlN1c2NyaXB0b3JlcyBuYWNpb25hbFwiLFwiJDE5NVwiLFwiJDI4NVwiLFwiMzEzXCJdLFtcIlRvdGFsIGNpcmN1bGFjacOzbiBkZSBsdW5lcyBhIGRvbWluZ29cIixcIiQxNzhcIixcIiQyMTBcIixcIjIzN1wiXSxbXCJUb3RhbCBjaXJjdWxhY2nDs24gZG9taW5nb1wiLFwiJDE2N1wiLFwiJDIwMFwiLFwiMjE2XCJdLFtcIk1hbnVhbGlkYWRcIixcIiQxMDhcIixcIjEwOFwiLFwiMTA4XCJdXTsgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRhYmxhPVtdO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3Qgcm93cyA9IFtdO1xyXG4gICAgY29uc3Qgcm93Qm9keSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRhYmxhKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IG51bGw7XHJcbiAgICAgICAgaWYgKGtleSA9PSAwKXtcclxuICAgICAgICAgICAgcm93ID0gKFxyXG4gICAgICAgICAgICAgICAgPHRoZWFkICAga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICA8dHIgPlxyXG4gICAgICAgICAgICAgICAge3RhYmxhW2tleV0ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgcm93ID0gKDx0ciAga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICB7dGFibGFba2V5XS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IDAgP1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHRkICBrZXk9e2luZGV4fT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA6ICA8dGQga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvd0JvZHkucHVzaChyb3cpXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgIH1cclxuICAgICAgcm93cy5wdXNoKFxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3Jvd0JvZHl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICApXHJcbiAgICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxuICAvKkluIHRoZSByZW5kZXIsIHdlIGFjY2VzcyBuYXYtaXRlbXMgdmlhIGl0cyByZWYgYXR0cmlidXRlIGFuZCBjb250cm9sc1xyXG4gIGl0IHdpdGggdGhlICdQcmV2JyBhbmQgJ05leHQnIGJ1dHRvbnMgdXNpbmcgdGhlIGZ1bmMgZGVmaW5lZCBhYm92ZSAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVOYXZJdGVtcyBQcmludC10YWJsZU5hdkl0ZW1zX2ZpcnN0JzogJ1ByaW50LXRhYmxlTmF2SXRlbXMnfSByZWY9e3RoaXMudGFibGVSZWZ9PlxyXG4gICAgICAgIDxUYWJsZSBzdHJpcGVkICBob3Zlcj5cclxuICB7dGhpcy5nZXRUYWJsZSgpfVxyXG4gIDwvVGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAnb25lJyA/ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl9maXJzdCcgOiB0aGlzLnByb3BzLnRhYmxlTnVtYmVyID09PSAndHdvJyA/ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl9zZWNvbmQnIDogJ1ByaW50LXRhYmxlQ29udGFpbmVyIFByaW50LXRhYmxlQ29udGFpbmVyX3RoaXJkJyAgIH0+XHJcbiAgICBcclxuICAgICAgICAgICAgPGRpdiAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOYXYoJ2xlZnQnKX0+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J1ByaW50LXNjcm9sbEljb24nIGljb249XCJjaGV2cm9uLWxlZnRcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nUHJpbnQtc2Nyb2xsVGV4dCc+XHJcbiAgICAgICAgc2Nyb2xsXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICBcclxuICAgICAgICAgICAgPGEgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdyaWdodCcpfT5cclxuICAgICAgICAgIDxJY29uICBjbGFzc05hbWU9J1ByaW50LXNjcm9sbEljb24nIGljb249XCJjaGV2cm9uLXJpZ2h0XCIvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdOZXdzbGV0dGVyLXNlY29uZFBvcFVwJ1xyXG4gICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3d9XHJcbiAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsVGl0bGVcIiBjbG9zZUJ1dHRvbj5cclxuICAgIHt0aGlzLnN0YXRlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbERlc2NyaXB0aW9uXCIgIG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsU3VidGl0bGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUYWJsb2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17OH0+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlByaW50LW1vZGFsSW1hZ2VcIiAgc3JjPXt0aGlzLnN0YXRlLmltYWdlfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbERlc2NyaXB0aW9uVGl0bGVcIiAgbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpbWVuc2lvbmVzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbEluZm9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGltZW5zaW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW8gYSBjb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxJbmZvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbG9yUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJlY2lvIGEgQiZOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbEluZm9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLkJXUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgXHJcblxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNjcm9sbDsiXSwic291cmNlUm9vdCI6IiJ9