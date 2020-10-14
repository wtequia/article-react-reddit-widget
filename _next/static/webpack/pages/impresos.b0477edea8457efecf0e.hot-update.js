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
      }); //  this.setState({ description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial" });

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
      }); //  this.setState({ description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial" });

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
        image: "/images/impresos/pagina_irregular.png"
      });
      this.showModal();
    }
  }, {
    key: "thirdModal",
    value: function thirdModal() {
      this.setState({
        title: "Páginas 3a, 5a, 7a, 9a"
      }); //  this.setState({ description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial" });

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
      }); //  this.setState({ description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial" });

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
        image: "/images/impresos/1_2paginaimpar.png"
      });
      this.showModal();
    }
  }, {
    key: "fifthModal",
    value: function fifthModal() {
      this.setState({
        title: "1/2 Pág. 3a, 5a, 7a, 9a"
      }); //  this.setState({ description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial" });

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
        image: "/images/impresos/1_2pagina.png"
      });
      this.showModal();
    }
  }, {
    key: "sixthModal",
    value: function sixthModal() {
      this.setState({
        title: "Contraportada"
      }); //  this.setState({ description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial" });

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
      }); //   this.setState({ description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial" });

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
      }); //  this.setState({ description: "Ofrecemos el formato de video outstream insertado en el corazón del contenido editorial" });

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
        key: this.props.tableNumber,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmludC9UYWJsZVNjcm9sbC5qc3giXSwibmFtZXMiOlsiVGFibGVTY3JvbGwiLCJwcm9wcyIsImRpcmVjdGlvbiIsInRhYmxlUmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwic2hvdyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaW1lbnNpb25zIiwiY29sb3JQcmljZSIsIkJXUHJpY2UiLCJpbWFnZSIsInNob3dNb2RhbCIsImJpbmQiLCJoYW5kbGVDbG9zZSIsImZpcnN0TW9kYWwiLCJzZWNvbmRNb2RhbCIsInRoaXJkTW9kYWwiLCJmb3VydGhNb2RhbCIsImZpZnRoTW9kYWwiLCJzaXh0aE1vZGFsIiwic2V2ZW50aE1vZGFsIiwiZWlnaHRoTW9kYWwiLCJzZXRTdGF0ZSIsInRhYmxhIiwidGFibGVOdW1iZXIiLCJyb3dzIiwicm93Qm9keSIsImtleSIsInJvdyIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJwdXNoIiwiZ2V0VGFibGUiLCJoYW5kbGVOYXYiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FFakI7O0FBRmlCLG9OQThCUCxVQUFDQyxTQUFELEVBQWU7QUFDekIsVUFBSUEsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3hCLGNBQUtDLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFyRCxHQUEyRCxJQUEzRDtBQUNELE9BRkQsTUFFTztBQUNMLGNBQUtGLFFBQUwsR0FBaUIsTUFBS0EsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxVQUF0QixJQUFvQyxFQUFy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QU1FO0FBQUssaUJBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsS0FBS0osS0FBTCxDQUFXSyxVQURaLENBTkYsbUJBVUU7QUFBSyxpQkFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxLQUFLTCxLQUFMLENBQVdNLE9BRGIsQ0FWRixDQUpGLENBVEYsQ0FERixDQVJWLENBdEJGLENBREY7QUFzRUQ7Ozs7RUFoUXVCMEIsK0M7O0FBbVFYeEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wcmVzb3MuYjA0NzdlZGVhODQ1N2VmZWNmMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbCwgUm93LCBDb250YWluZXIsIE1vZGFsLCBUYWJsZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vY29yZS9JY29uL2RlZmF1bHQuanN4J1xyXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xyXG5cclxuXHJcbmNsYXNzIFRhYmxlU2Nyb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy8gUmVhY3QgUmVmIGlzIGNyZWF0ZWQgaGVyZVxyXG4gICAgdGhpcy50YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgdGl0bGU6IG51bGwsXHJcbiAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgIGRpbWVuc2lvbnM6IG51bGwsXHJcbiAgICBjb2xvclByaWNlOiBudWxsLFxyXG4gICAgQldQcmljZTogbnVsbCxcclxuICAgIGltYWdlOiBudWxsLFxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93TW9kYWwgPSB0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmlyc3RNb2RhbCA9IHRoaXMuZmlyc3RNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZWNvbmRNb2RhbCA9IHRoaXMuc2Vjb25kTW9kYWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudGhpcmRNb2RhbCA9IHRoaXMudGhpcmRNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mb3VydGhNb2RhbCA9IHRoaXMuZm91cnRoTW9kYWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmlmdGhNb2RhbCA9IHRoaXMuZmlmdGhNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zaXh0aE1vZGFsID0gdGhpcy5zaXh0aE1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldmVudGhNb2RhbCA9IHRoaXMuc2V2ZW50aE1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmVpZ2h0aE1vZGFsID0gdGhpcy5laWdodGhNb2RhbC5iaW5kKHRoaXMpO1xyXG4gIFxyXG5cclxuICB9XHJcblxyXG5cclxuICAvKiBUaGlzIGZ1bmMgaGFuZGxlcyB0aGUgc2Nyb2xsaW5nIGJ5IGluY3JlbWVudGluZyBvciBkZWNyZW1lbnRpbmdcclxuICAgdGhlIHNjcm9sbExlZnQgcHJvcGVydHkgKi9cclxuICBoYW5kbGVOYXYgPSAoZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgdGhpcy50YWJsZVJlZiA/ICh0aGlzLnRhYmxlUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPSA1MCkgOiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YWJsZVJlZiA/ICh0aGlzLnRhYmxlUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSA1MCkgOiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBzaG93TW9kYWwoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1xyXG4gIH1cclxuICBoYW5kbGVDbG9zZSgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlyc3RNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBcIkRvYmxlIHDDoWdpbmFcIiB9KTtcclxuICAvLyAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBcIk9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIG91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zOiBcIjEwIGNvbCB4IDM3IGNtc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yUHJpY2U6IFwiJDQyJzMwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBCV1ByaWNlOiBcIiQzNScwMDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IFwiL2ltYWdlcy9pbXByZXNvcy9kb2JsZV9wYWdpbmEucG5nXCIgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuICBzZWNvbmRNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBcIkF2aXNvIElycmVndWxhclwiIH0pO1xyXG4gIC8vICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IFwiT2ZyZWNlbW9zIGVsIGZvcm1hdG8gZGUgdmlkZW8gb3V0c3RyZWFtIGluc2VydGFkbyBlbiBlbCBjb3JhesOzbiBkZWwgY29udGVuaWRvIGVkaXRvcmlhbFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpbWVuc2lvbnM6IFwiMTAgY29sIHggMzcgY21zXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29sb3JQcmljZTogXCIkMjAnNjAwLjAwMFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IEJXUHJpY2U6IFwiJDE2JzAwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogXCIvaW1hZ2VzL2ltcHJlc29zL3BhZ2luYV9pcnJlZ3VsYXIucG5nXCIgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuICB0aGlyZE1vZGFsKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IFwiUMOhZ2luYXMgM2EsIDVhLCA3YSwgOWFcIiB9KTtcclxuICAvLyAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBcIk9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIG91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zOiBcIjUgY29sIHggMzcgY21zXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29sb3JQcmljZTogXCIkMjknNjAwLjAwMFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IEJXUHJpY2U6IFwiJDI0JzUwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogXCIvaW1hZ2VzL2ltcHJlc29zL3BhZ2luYXNfYS5wbmdcIiB9KTtcclxuICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG4gIGZvdXJ0aE1vZGFsKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IFwiMS8yIFDDoWdpbmEgaW1wYXJcIiB9KTtcclxuICAvLyAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBcIk9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIG91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zOiBcIlZlcnRpY2FsIDIuNSBjb2wgeCAzNyBjbSwgSG9yaXpvbnRhbCA1IGNvbCB4IDE4LjUgY21cIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvclByaWNlOiBcIiQxMiczMDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgQldQcmljZTogXCIkOSc5MDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IFwiL2ltYWdlcy9pbXByZXNvcy8xXzJwYWdpbmFpbXBhci5wbmdcIiB9KTtcclxuICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG4gIGZpZnRoTW9kYWwoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogXCIxLzIgUMOhZy4gM2EsIDVhLCA3YSwgOWFcIiB9KTtcclxuICAvLyAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBcIk9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIG91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zOiBcIlZlcnRpY2FsIDIuNSBjb2wgeCAzNyBjbSwgSG9yaXpvbnRhbCA1IGNvbCB4IDE4LjUgY21cIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvclByaWNlOiBcIiQxNyc1MDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgQldQcmljZTogXCIkMTMnNDAwLjAwMFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBcIi9pbWFnZXMvaW1wcmVzb3MvMV8ycGFnaW5hLnBuZ1wiIH0pO1xyXG4gICAgdGhpcy5zaG93TW9kYWwoKTtcclxuICB9XHJcbiAgc2l4dGhNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBcIkNvbnRyYXBvcnRhZGFcIiB9KTtcclxuICAvLyAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBcIk9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIG91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXrDs24gZGVsIGNvbnRlbmlkbyBlZGl0b3JpYWxcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zOiBcIjUgY29sIHggMzcgY21zXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29sb3JQcmljZTogXCIkMzUnMDAwLjAwMFwiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IEJXUHJpY2U6IFwiJDI0JzUwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogXCIvaW1hZ2VzL2ltcHJlc29zL2NvbnRyYXBvcnRhZGEucG5nXCIgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuICBzZXZlbnRoTW9kYWwoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogXCJQw6FnaW5hIGltcGFyXCIgfSk7XHJcbiAvLyAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogXCJPZnJlY2Vtb3MgZWwgZm9ybWF0byBkZSB2aWRlbyBvdXRzdHJlYW0gaW5zZXJ0YWRvIGVuIGVsIGNvcmF6w7NuIGRlbCBjb250ZW5pZG8gZWRpdG9yaWFsXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9uczogXCI1IGNvbCB4IDM3IGNtc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yUHJpY2U6IFwiJDIzJzMwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBCV1ByaWNlOiBcIiQxOSc2MDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IFwiL2ltYWdlcy9pbXByZXNvcy9wYWdpbmFfaW1wYXIucG5nXCIgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gIH1cclxuICBlaWdodGhNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBcIlDDoWdpbmEgY29ycmllbnRlXCIgfSk7XHJcbiAgLy8gIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogXCJPZnJlY2Vtb3MgZWwgZm9ybWF0byBkZSB2aWRlbyBvdXRzdHJlYW0gaW5zZXJ0YWRvIGVuIGVsIGNvcmF6w7NuIGRlbCBjb250ZW5pZG8gZWRpdG9yaWFsXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9uczogXCI1IGNvbCB4IDM3IGNtc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yUHJpY2U6IFwiJDIwJzYwMC4wMDBcIiB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBCV1ByaWNlOiBcIiQxNicwMDAuMDAwXCIgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IFwiL2ltYWdlcy9pbXByZXNvcy9wYWdpbmFfY29ycmllbnRlLnBuZ1wiIH0pO1xyXG4gICAgdGhpcy5zaG93TW9kYWwoKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgZ2V0VGFibGUoKXtcclxuICAgIGxldCB0YWJsYSA9IG51bGxcclxuICAgXHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudGFibGVOdW1iZXIpIHtcclxuICAgICAgICBjYXNlIFwib25lXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlZpc3RhXCIsIFwiUHJvZHVjdG9cIiwgXCJEaW1lbnNpb25lc1wiLCBcIlRpcG8gZGUgQXJjaGl2b1wiLCBcIlBlc28gZGUgQXJjaGl2b1wiLCBcIlByZWNpbyBhIENvbG9yXCIsIFwiUHJlY2lvIGEgQiZOXCJdLFxyXG4gICAgICAgICAgICBbPEljb24gIG9uQ2xpY2s9e3RoaXMuZmlyc3RNb2RhbH0gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+LCBcIkRvYmxlIFDDoWdpbmFcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDQyJzMwMC4wMDBcIixcIiQzNScwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbPEljb24gIG9uQ2xpY2s9e3RoaXMuc2Vjb25kTW9kYWx9IGNsYXNzTmFtZT0nUHJpbnQtdGFibGVJY29uJyBpY29uPVwiZXllXCIvPiwgXCJBdmlzbyBJcnJlZ3VsYXJcIixcIjEwIGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDIwJzYwMC4wMDBcIixcIiQxNicwMDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbPEljb24gIG9uQ2xpY2s9e3RoaXMudGhpcmRNb2RhbH0gY2xhc3NOYW1lPSdQcmludC10YWJsZUljb24nIGljb249XCJleWVcIi8+LCBcIlDDoWdpbmFzIDNhLDVhLDdhLDlhXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDI5JzkwMC4wMDBcIixcIiQyNCc1MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbPEljb24gIG9uQ2xpY2s9e3RoaXMuZm91cnRoTW9kYWx9IGNsYXNzTmFtZT0nUHJpbnQtdGFibGVJY29uJyBpY29uPVwiZXllXCIvPiwgXCIxLzIgUMOhZ2luYSBJbXBhclwiLFwiVmVydGljYWwgMi41IENvbCB4IDM3IGNtIEhvcml6b250YWwgNSBjb2wgeCAxOC41IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDEyJzMwMC4wMDBcIixcIiQ5JzkwMC4wMDBcIl0sXHJcbiAgICAgICAgICAgIFs8SWNvbiAgb25DbGljaz17dGhpcy5maWZ0aE1vZGFsfSBjbGFzc05hbWU9J1ByaW50LXRhYmxlSWNvbicgaWNvbj1cImV5ZVwiLz4sIFwiMS8yIFDDoWdpbmEgM2EsNWEsN2EsOWFcIixcIlZlcnRpY2FsIDIuNSBjb2wgeCAzNyBjbSBIb3Jpem9udGFsIDUgY29sIHggMTguNSBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQxNyc1MDAuMDAwXCIsXCIkMTQnNDAwLjAwMFwiXSxcclxuICAgICAgICAgICAgWzxJY29uICBvbkNsaWNrPXt0aGlzLnNpeHRoTW9kYWx9IGNsYXNzTmFtZT0nUHJpbnQtdGFibGVJY29uJyBpY29uPVwiZXllXCIvPiwgXCJDb250cmFwb3J0YWRhXCIsXCI1IGNvbCB4IDM3IGNtXCIsIFwiUE5HLCBKUEcgQUksIFBTRFwiLFwiMyBNQlwiLFwiJDM1JzAwMC4wMDBcIixcIiQyNCc1MDAuMDAwXCJdLFxyXG4gICAgICAgICAgICBbPEljb24gIG9uQ2xpY2s9e3RoaXMuc2V2ZW50aE1vZGFsfSBjbGFzc05hbWU9J1ByaW50LXRhYmxlSWNvbicgaWNvbj1cImV5ZVwiLz4sIFwiUMOhZ2luYSBJbXBhclwiLFwiNSBjb2wgeCAzNyBjbVwiLCBcIlBORywgSlBHIEFJLCBQU0RcIixcIjMgTUJcIixcIiQyMyczMDAuMDAwXCIsXCIkMTknNjAwLjAwMFwiXSxcclxuICAgICAgICAgICAgWzxJY29uICBvbkNsaWNrPXt0aGlzLmVpZ2h0aE1vZGFsfSBjbGFzc05hbWU9J1ByaW50LXRhYmxlSWNvbicgaWNvbj1cImV5ZVwiLz4sIFwiUMOhZ2luYSBDb3JyaWVudGVcIixcIjUgY29sIHggMzcgY21cIiwgXCJQTkcsIEpQRyBBSSwgUFNEXCIsXCIzIE1CXCIsXCIkMjAnNjAwLjAwMFwiLFwiJDE2JzAwMC4wMDBcIl1dO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidHdvXCI6XHJcbiAgICAgICAgICAgIHRhYmxhID0gW1tcIlRhbWHDsW9cIiwgXCJDb2xvclwiLCBcIkJsYW5jbyB5IE5lZ3JvXCJdLFtcIlByaW1lcmEgUMOhZ2luYVwiLFwiJDQ4NS41MDBcIixcIjM0NS4wMDBcIl0sW1wiVGVyY2VyYSwgUXVpbnRhIHkgU8OpcHRpbWEgUMOhZ2luYVwiLFwiJDI4NC41MDBcIixcIiQyNDQuMDAwXCJdLFtcIkNvbnRyYXBvcnRhZGFcIixcIiQyNTAuMDAwXCIsXCIkMjAwLjAwMFwiXSxbXCJDb3JyaWVudGVcIixcIiQxOTUuMDAwXCIsXCIkMTU4LjAwMFwiXSxbXCJCb2dvdMOhXCIsXCIkMTQ1LjAwMFwiLFwiMTEwLjAwMFwiXSxbXCJJbXBhclwiLFwiJDIzNi4wMDBcIixcIiQxOTAuMDAwXCJdXTsgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgIFwidGhyZWVcIjpcclxuICAgICAgICAgICAgdGFibGEgPSBbW1wiQ2FudGlkYWRcIiwgXCJDYXJ0YVwiLCBcIkhhc3RhIGRlIDE2IHDDoWdcIiwgXCJNw6FzIGRlIDE2IHDDoWdcIl0sW1wiMTAuMDAwIGEgNDAuMDAwXCIsXCIkMjM1XCIsXCIzMTNcIixcIiQzODFcIl0sW1wiU3VzY3JpcHRvcmVzIG5hY2lvbmFsXCIsXCIkMTk1XCIsXCIkMjg1XCIsXCIzMTNcIl0sW1wiVG90YWwgY2lyY3VsYWNpw7NuIGRlIGx1bmVzIGEgZG9taW5nb1wiLFwiJDE3OFwiLFwiJDIxMFwiLFwiMjM3XCJdLFtcIlRvdGFsIGNpcmN1bGFjacOzbiBkb21pbmdvXCIsXCIkMTY3XCIsXCIkMjAwXCIsXCIyMTZcIl0sW1wiTWFudWFsaWRhZFwiLFwiJDEwOFwiLFwiMTA4XCIsXCIxMDhcIl1dOyAgIFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGFibGE9W107XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByb3dzID0gW107XHJcbiAgICBjb25zdCByb3dCb2R5ID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFibGEpIHtcclxuICAgICAgICBsZXQgcm93ID0gbnVsbDtcclxuICAgICAgICBpZiAoa2V5ID09IDApe1xyXG4gICAgICAgICAgICByb3cgPSAoXHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgICBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICB7dGFibGFba2V5XS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e3ZhbHVlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICByb3cgPSAoPHRyICBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgIHt0YWJsYVtrZXldLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gMCA/XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8dGQgIGtleT17aW5kZXh9Pnt2YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDogIDx0ZCBrZXk9e2luZGV4fT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm93Qm9keS5wdXNoKHJvdylcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgfVxyXG4gICAgICByb3dzLnB1c2goXHJcbiAgICAgICAgPHRib2R5IGtleT17dGhpcy5wcm9wcy50YWJsZU51bWJlcn0+XHJcbiAgICAgICAgICAgIHtyb3dCb2R5fVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gcm93cztcclxuICB9XHJcbiAgLypJbiB0aGUgcmVuZGVyLCB3ZSBhY2Nlc3MgbmF2LWl0ZW1zIHZpYSBpdHMgcmVmIGF0dHJpYnV0ZSBhbmQgY29udHJvbHNcclxuICBpdCB3aXRoIHRoZSAnUHJldicgYW5kICdOZXh0JyBidXR0b25zIHVzaW5nIHRoZSBmdW5jIGRlZmluZWQgYWJvdmUgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3RoaXMucHJvcHMudGFibGVOdW1iZXIgPT09ICdvbmUnID8gJ1ByaW50LXRhYmxlTmF2SXRlbXMgUHJpbnQtdGFibGVOYXZJdGVtc19maXJzdCc6ICdQcmludC10YWJsZU5hdkl0ZW1zJ30gcmVmPXt0aGlzLnRhYmxlUmVmfT5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCAgaG92ZXI+XHJcbiAge3RoaXMuZ2V0VGFibGUoKX1cclxuICA8L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ29uZScgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfZmlyc3QnIDogdGhpcy5wcm9wcy50YWJsZU51bWJlciA9PT0gJ3R3bycgPyAnUHJpbnQtdGFibGVDb250YWluZXIgUHJpbnQtdGFibGVDb250YWluZXJfc2Vjb25kJyA6ICdQcmludC10YWJsZUNvbnRhaW5lciBQcmludC10YWJsZUNvbnRhaW5lcl90aGlyZCcgICB9PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmF2KCdsZWZ0Jyl9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1sZWZ0XCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8c3BhbiBjbGFzc05hbWU9J1ByaW50LXNjcm9sbFRleHQnPlxyXG4gICAgICAgIHNjcm9sbFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgXHJcbiAgICAgICAgICAgIDxhICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5hdigncmlnaHQnKX0+XHJcbiAgICAgICAgICA8SWNvbiAgY2xhc3NOYW1lPSdQcmludC1zY3JvbGxJY29uJyBpY29uPVwiY2hldnJvbi1yaWdodFwiLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nTmV3c2xldHRlci1zZWNvbmRQb3BVcCdcclxuICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fVxyXG4gICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbFRpdGxlXCIgY2xvc2VCdXR0b24+XHJcbiAgICB7dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxEZXNjcmlwdGlvblwiICBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtbW9kYWxUZXh0IFByaW50LW1vZGFsVGV4dF9tb2RhbFN1YnRpdGxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVGFibG9pZGVcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJQcmludC1tb2RhbEltYWdlXCIgIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxEZXNjcmlwdGlvblRpdGxlXCIgIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEaW1lbnNpb25lczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxJbmZvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpbWVuc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJlY2lvIGEgY29sb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1tb2RhbFRleHQgUHJpbnQtbW9kYWxUZXh0X21vZGFsSW5mb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2xvclByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpbyBhIEImTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LW1vZGFsVGV4dCBQcmludC1tb2RhbFRleHRfbW9kYWxJbmZvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5CV1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIFxyXG5cclxuICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVTY3JvbGw7Il0sInNvdXJjZVJvb3QiOiIifQ==