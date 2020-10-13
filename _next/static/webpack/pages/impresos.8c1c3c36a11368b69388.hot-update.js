webpackHotUpdate_N_E("pages/impresos",{

/***/ "./components/global/header/default.jsx":
/*!**********************************************!*\
  !*** ./components/global/header/default.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Icon/default.jsx */ "./components/core/Icon/default.jsx");
/* harmony import */ var _core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/Button/default.jsx */ "./components/core/Button/default.jsx");
/* harmony import */ var _core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/SiteLinks/SiteLinks.jsx */ "./components/core/SiteLinks/SiteLinks.jsx");
/* harmony import */ var _properties_index_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../properties/index.json */ "./properties/index.json");
var _properties_index_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../properties/index.json */ "./properties/index.json", 1);
/* harmony import */ var _core_SocialMedia_default_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/SocialMedia/default.jsx */ "./components/core/SocialMedia/default.jsx");








var _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\global\\header\\default.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "mobileMenu", function () {
      var mobileButtons = __jsx("div", {
        className: "Header-mobile",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "Header-Image_mobile",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "Header-LogoMobile",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, __jsx("img", {
        className: "Header-Image",
        src: "/headerLogo.png",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }))), __jsx("div", {
        className: "Header-burguer",
        onClick: function onClick() {
          _this.props.sticky ? _this.setState({
            burgerHover: !_this.state.burgerHover
          }) : _this.setState({
            burgerHover: !_this.state.burgerHover
          });
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icon: "bars",
        className: _this.state.burgerHover ? "Header-burgerIcon Header-burgerIcon_enabled" : "Header-burgerIcon Header-burgerIcon_disabled",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }))), __jsx("div", {
        className: _this.state.burgerHover ? "Header-Accordion" : "Header-Accordion_disabled",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Accordion"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Header,
        eventKey: "0",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Header-AccordionItem",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, " ", __jsx("a", {
        href: "/digital",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }
      }, "Digital"), __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "Header-Icon",
        style: {
          height: "25px"
        },
        icon: "chevron-right",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 19
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Accordion"].Collapse, {
        eventKey: "0",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "Header-BodyMobileMenuContainer",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 19
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        linksData: _this.digital,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }
      }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Header,
        eventKey: "1",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/impresos",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }
      }, "Impresos"))))));

      return mobileButtons;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "desktopMenu", function () {
      var desktopButtons = __jsx("div", {
        className: "Header-desktop",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 7
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 9
        }
      }, __jsx("img", {
        className: "Header-Image",
        src: "/headerLogo.png",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "Header-buttonSection",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 9
        }
      }, __jsx(_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: "Button_loginMenu",
        theme: "Button-Header Button-Header_Dropdown",
        content: __jsx("span", {
          className: "Header-text",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }
        }, __jsx("a", {
          href: "/digital/",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 17
          }
        }, "Digital"), __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "Header-Icon",
          onClick: function onClick() {
            return _this.handleIcon1();
          },
          style: {
            height: "25px"
          },
          icon: _this.state.menu1 ? "chevron-up" : "chevron-down",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 17
          }
        })),
        menu: true,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }
      }, __jsx(_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        link: "/digital/formatos-estandar",
        content: "Formatos Est\xE1ndar",
        theme: _this.state.menu1 ? "Button-Header Button-Header_section" : "Button-Header Button-Header_hide",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }
      }, __jsx(_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        link: "/digital/formatos-premium",
        content: "Formatos Premium",
        theme: _this.state.menu1 ? "Button-Header Button-Header_section" : "Button-Header Button-Header_hide",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 15
        }
      })), __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }
      }, __jsx(_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        link: "/digital/video",
        theme: _this.state.menu1 ? "Button-Header Button-Header_section" : "Button-Header Button-Header_hide",
        content: "Video",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 15
        }
      }))), __jsx(_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
        theme: "Button-Header",
        content: __jsx("span", {
          className: "Header-text",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }
        }, __jsx("a", {
          href: "/impresos",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }
        }, "Impresos")),
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }
      })));

      return desktopButtons;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "defineMenu", function () {
      if (_this.isMobile) {
        return _this.mobileMenu();
      } else {
        return _this.desktopMenu();
      }
    });

    _this.state = {
      width: true ? window.innerWidth : undefined,
      tpObject: true ? window["tp"] : undefined,
      userName: "",
      userSubs: null,
      menu1: false,
      menu2: false,
      burgerHover: false
    };
    var siteProp = _properties_index_json__WEBPACK_IMPORTED_MODULE_13__; //Get the group of links of 'redPortales'

    _this.redPortales = siteProp.Red_de_portales; //Get the group of links of 'servicios'

    _this.servicios = siteProp.Servicios; //Links for suscribe and login

    _this.digital = siteProp.Digital; // this.loginLink = siteProperties.loginLink;

    _this.sponsored = siteProp.Contenidos_Patrocinados;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
       true && window.addEventListener("resize", this.handleWindowSizeChange);
       true && window.addEventListener("load", this.handleTP); // this.fetchSectionGroup();
      // this.fetchFooterItems();
    } //set the state of the window width

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("load", this.handleTP);
    }
  }, {
    key: "handleIcon1",
    value: function handleIcon1() {
      if (this.state.menu1) {
        this.setState({
          menu1: false
        });
      } else {
        this.setState({
          menu1: true
        });
      }
    }
  }, {
    key: "handleIcon2",
    value: function handleIcon2() {
      if (this.state.menu2) {
        this.setState({
          menu2: false
        });
      } else {
        this.setState({
          menu2: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.isMobile = this.state.width < 830;
      return (
        /*<div className="Header">{this.defineMenu()}</div>;*/
        __jsx("div", {
          className: "Header-desktop",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 5
          }
        }, __jsx("a", {
          href: "https://www.elespectador.com",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 5
          }
        }, __jsx("img", {
          className: "Header-Image",
          src: "/headerLogo.png",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 7
          }
        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"], {
          bg: "light",
          expand: "lg",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 1
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"].Brand, {
          href: "#home",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 3
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"].Toggle, {
          "aria-controls": "basic-navbar-nav",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 3
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"].Collapse, {
          id: "basic-navbar-nav",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 3
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
          className: "mr-auto",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 5
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NavDropdown"], {
          title: "Top menu (toggle-able)",
          key: "top",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 5
          }
        }, __jsx(Dropdown, {
          as: NavItem,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 3
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NavDropdown"].Item, {
          as: Link,
          to: "/hi",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 7
          }
        }, "Hi"), __jsx(Dropdown.Menu, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          show: true
        }, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 7
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NavDropdown"].Item, {
          as: Link,
          to: "/hello",
          key: "1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 11
          }
        }, "Hello"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NavDropdown"].Item, {
          as: Link,
          to: "/world",
          key: "2",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 11
          }
        }, "Hello")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"].Link, {
          href: "/impresos/",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 7
          }
        }, "Impresos")))))
      );
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvaGVhZGVyL2RlZmF1bHQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwic2V0U3RhdGUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtb2JpbGVCdXR0b25zIiwic3RpY2t5IiwiYnVyZ2VySG92ZXIiLCJzdGF0ZSIsIkNhcmQiLCJoZWlnaHQiLCJkaWdpdGFsIiwiZGVza3RvcEJ1dHRvbnMiLCJoYW5kbGVJY29uMSIsIm1lbnUxIiwiaXNNb2JpbGUiLCJtb2JpbGVNZW51IiwiZGVza3RvcE1lbnUiLCJ0cE9iamVjdCIsInVuZGVmaW5lZCIsInVzZXJOYW1lIiwidXNlclN1YnMiLCJtZW51MiIsInNpdGVQcm9wIiwic2l0ZVByb3BlcnRpZXMiLCJyZWRQb3J0YWxlcyIsIlJlZF9kZV9wb3J0YWxlcyIsInNlcnZpY2lvcyIsIlNlcnZpY2lvcyIsIkRpZ2l0YWwiLCJzcG9uc29yZWQiLCJDb250ZW5pZG9zX1BhdHJvY2luYWRvcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwiaGFuZGxlVFAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTmF2SXRlbSIsIkxpbmsiLCJzaG93IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGlPQWdDTSxZQUFNO0FBQzdCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyxhQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7QUFBaEIsT0FBZDtBQUNELEtBbENrQjs7QUFBQSxxTkF1RE4sWUFBTTtBQUNqQixVQUFNQyxhQUFhLEdBQ2pCO0FBQUssaUJBQVMsRUFB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QVZGLENBREYsQ0FIRixDQUxJO0FBRkE7QUE0QkQ7Ozs7RUFqVGtCRSwrQzs7QUFvVE54QyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXByZXNvcy44YzFjM2MzNmExMTM2OGI2OTM4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb2wsXHJcbiAgUm93LFxyXG4gIEFjY29yZGlvbixcclxuICBDYXJkLFxyXG4gIEltYWdlLFxyXG4gIE5hdixcclxuICBOYXZEcm9wZG93bixcclxuICBOYXZiYXIsXHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vY29yZS9JY29uL2RlZmF1bHQuanN4XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvcmUvQnV0dG9uL2RlZmF1bHQuanN4XCI7XHJcbmltcG9ydCBTaXRlTGlua3MgZnJvbSBcIi4uLy4uL2NvcmUvU2l0ZUxpbmtzL1NpdGVMaW5rcy5qc3hcIjtcclxuaW1wb3J0IHNpdGVQcm9wZXJ0aWVzIGZyb20gXCIuLi8uLi8uLi9wcm9wZXJ0aWVzL2luZGV4Lmpzb25cIjtcclxuaW1wb3J0IFNvY2lhbCBmcm9tIFwiLi4vLi4vY29yZS9Tb2NpYWxNZWRpYS9kZWZhdWx0LmpzeFwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgd2lkdGg6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDgzMCxcclxuICAgICAgdHBPYmplY3Q6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbXCJ0cFwiXSA6IHVuZGVmaW5lZCxcclxuICAgICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICAgIHVzZXJTdWJzOiBudWxsLFxyXG4gICAgICBtZW51MTogZmFsc2UsXHJcbiAgICAgIG1lbnUyOiBmYWxzZSxcclxuICAgICAgYnVyZ2VySG92ZXI6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNpdGVQcm9wID0gc2l0ZVByb3BlcnRpZXM7XHJcbiAgICAvL0dldCB0aGUgZ3JvdXAgb2YgbGlua3Mgb2YgJ3JlZFBvcnRhbGVzJ1xyXG4gICAgdGhpcy5yZWRQb3J0YWxlcyA9IHNpdGVQcm9wLlJlZF9kZV9wb3J0YWxlcztcclxuICAgIC8vR2V0IHRoZSBncm91cCBvZiBsaW5rcyBvZiAnc2VydmljaW9zJ1xyXG4gICAgdGhpcy5zZXJ2aWNpb3MgPSBzaXRlUHJvcC5TZXJ2aWNpb3M7XHJcbiAgICAvL0xpbmtzIGZvciBzdXNjcmliZSBhbmQgbG9naW5cclxuICAgIHRoaXMuZGlnaXRhbCA9IHNpdGVQcm9wLkRpZ2l0YWw7XHJcbiAgICAvLyB0aGlzLmxvZ2luTGluayA9IHNpdGVQcm9wZXJ0aWVzLmxvZ2luTGluaztcclxuICAgIHRoaXMuc3BvbnNvcmVkID0gc2l0ZVByb3AuQ29udGVuaWRvc19QYXRyb2NpbmFkb3M7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuaGFuZGxlVFApO1xyXG4gICAgLy8gdGhpcy5mZXRjaFNlY3Rpb25Hcm91cCgpO1xyXG4gICAgLy8gdGhpcy5mZXRjaEZvb3Rlckl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvL3NldCB0aGUgc3RhdGUgb2YgdGhlIHdpbmRvdyB3aWR0aFxyXG4gIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuaGFuZGxlVFApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSWNvbjEoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tZW51MSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVudTE6IGZhbHNlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnUxOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVJY29uMigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1lbnUyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51MjogZmFsc2UgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVudTI6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlQnV0dG9ucyA9IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXItbW9iaWxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXItSW1hZ2VfbW9iaWxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlci1Mb2dvTW9iaWxlXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJIZWFkZXItSW1hZ2VcIiBzcmM9XCIvaGVhZGVyTG9nby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJIZWFkZXItYnVyZ3VlclwifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGlja3lcclxuICAgICAgICAgICAgICAgID8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVyZ2VySG92ZXI6ICF0aGlzLnN0YXRlLmJ1cmdlckhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHsgYnVyZ2VySG92ZXI6ICF0aGlzLnN0YXRlLmJ1cmdlckhvdmVyIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIGljb249XCJiYXJzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5idXJnZXJIb3ZlclxyXG4gICAgICAgICAgICAgICAgICA/IFwiSGVhZGVyLWJ1cmdlckljb24gSGVhZGVyLWJ1cmdlckljb25fZW5hYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJIZWFkZXItYnVyZ2VySWNvbiBIZWFkZXItYnVyZ2VySWNvbl9kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5idXJnZXJIb3ZlclxyXG4gICAgICAgICAgICAgID8gXCJIZWFkZXItQWNjb3JkaW9uXCJcclxuICAgICAgICAgICAgICA6IFwiSGVhZGVyLUFjY29yZGlvbl9kaXNhYmxlZFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFjY29yZGlvbj5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0NhcmQuSGVhZGVyfSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyLUFjY29yZGlvbkl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RpZ2l0YWxcIj5EaWdpdGFsPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkhlYWRlci1JY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNoZXZyb24tcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiSGVhZGVyLUJvZHlNb2JpbGVNZW51Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMuZGlnaXRhbH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2ltcHJlc29zXCI+SW1wcmVzb3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICB7Lyo8Q2FyZD5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXItQWNjb3JkaW9uSXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbnRlbmlkb3MtcGF0cm9jaW5hZG9zXCI+Q29udGVuaWRvcyBQYXRyb2NpbmFkb3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSGVhZGVyLUljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2hldnJvbi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIkhlYWRlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaXRlTGlua3MgbGlua3NEYXRhPXt0aGlzLnNwb25zb3JlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L0NhcmQ+Ki99XHJcbiAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG1vYmlsZUJ1dHRvbnM7XHJcbiAgfTtcclxuXHJcbiAgLy9jb2RlIG9mIHRoZSBkZXNrdG9wIGZvb3RlciBtZW51XHJcbiAgZGVza3RvcE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZXNrdG9wQnV0dG9ucyA9IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXItZGVza3RvcFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkhlYWRlci1JbWFnZVwiIHNyYz1cIi9oZWFkZXJMb2dvLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlci1idXR0b25TZWN0aW9uXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPVwiQnV0dG9uX2xvZ2luTWVudVwiXHJcbiAgICAgICAgICAgIHRoZW1lPVwiQnV0dG9uLUhlYWRlciBCdXR0b24tSGVhZGVyX0Ryb3Bkb3duXCJcclxuICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiSGVhZGVyLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGlnaXRhbC9cIj5EaWdpdGFsPC9hPlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSGVhZGVyLUljb25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUljb24xKCl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5zdGF0ZS5tZW51MSA/IFwiY2hldnJvbi11cFwiIDogXCJjaGV2cm9uLWRvd25cIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lbnVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsaW5rPVwiL2RpZ2l0YWwvZm9ybWF0b3MtZXN0YW5kYXJcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkZvcm1hdG9zIEVzdMOhbmRhclwiXHJcbiAgICAgICAgICAgICAgICB0aGVtZT17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVudTFcclxuICAgICAgICAgICAgICAgICAgICA/IFwiQnV0dG9uLUhlYWRlciBCdXR0b24tSGVhZGVyX3NlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJCdXR0b24tSGVhZGVyIEJ1dHRvbi1IZWFkZXJfaGlkZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGluaz1cIi9kaWdpdGFsL2Zvcm1hdG9zLXByZW1pdW1cIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkZvcm1hdG9zIFByZW1pdW1cIlxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1lbnUxXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIkJ1dHRvbi1IZWFkZXIgQnV0dG9uLUhlYWRlcl9zZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiQnV0dG9uLUhlYWRlciBCdXR0b24tSGVhZGVyX2hpZGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGxpbms9XCIvZGlnaXRhbC92aWRlb1wiXHJcbiAgICAgICAgICAgICAgICB0aGVtZT17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVudTFcclxuICAgICAgICAgICAgICAgICAgICA/IFwiQnV0dG9uLUhlYWRlciBCdXR0b24tSGVhZGVyX3NlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJCdXR0b24tSGVhZGVyIEJ1dHRvbi1IZWFkZXJfaGlkZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiVmlkZW9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHRoZW1lPVwiQnV0dG9uLUhlYWRlclwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkhlYWRlci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2ltcHJlc29zXCI+SW1wcmVzb3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT1cIkJ1dHRvbl9sb2dpbk1lbnVcIlxyXG4gICAgICAgICAgICB0aGVtZT1cIkJ1dHRvbi1IZWFkZXIgQnV0dG9uLUhlYWRlcl9Ecm9wZG93blwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkhlYWRlci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbnRlbmlkb3MtcGF0cm9jaW5hZG9zL1wiPkNvbnRlbmlkb3MgcGF0cm9jaWFkb3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJIZWFkZXItSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlSWNvbjIoKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXt0aGlzLnN0YXRlLm1lbnUyID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVudVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGxpbms9XCIvY29udGVuaWRvcy1wYXRyb2NpbmFkb3MvZXNwZWNpYWxlcy1tdWx0aW1lZGlhL1wiXHJcbiAgICAgICAgICAgICAgICB0aGVtZT17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVudTJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiQnV0dG9uLUhlYWRlciBCdXR0b24tSGVhZGVyX3NlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJCdXR0b24tSGVhZGVyIEJ1dHRvbi1IZWFkZXJfaGlkZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiRXNwZWNpYWxlcyBtdWx0aW1lZGlhXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0aGVtZT17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVudTJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiQnV0dG9uLUhlYWRlciBCdXR0b24tSGVhZGVyX3NlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJCdXR0b24tSGVhZGVyIEJ1dHRvbi1IZWFkZXJfaGlkZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiRm9ybWF0b3MgUHJlbWl1bVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1lbnUyXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIkJ1dHRvbi1IZWFkZXIgQnV0dG9uLUhlYWRlcl9zZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiQnV0dG9uLUhlYWRlciBCdXR0b24tSGVhZGVyX2hpZGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlZpZGVvXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICByZXR1cm4gZGVza3RvcEJ1dHRvbnM7XHJcbiAgfTtcclxuXHJcbiAgLy9EZXBlbmRzIG9mIHRoZSB3aW5kb3cgd2lkdGgsIHJlbmRlciBhIG1lbnUgdHlwZVxyXG4gIGRlZmluZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2JpbGVNZW51KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZXNrdG9wTWVudSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLnN0YXRlLndpZHRoIDwgODMwO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAvKjxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyXCI+e3RoaXMuZGVmaW5lTWVudSgpfTwvZGl2PjsqL1xyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXItZGVza3RvcFwiPlxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb21cIj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJIZWFkZXItSW1hZ2VcIiBzcmM9XCIvaGVhZGVyTG9nby5wbmdcIj48L2ltZz5cclxuICAgIDwvYT5cclxuXHJcbjxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCI+XHJcbiAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj48L05hdmJhci5CcmFuZD5cclxuICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiVG9wIG1lbnUgKHRvZ2dsZS1hYmxlKVwiIGtleT1cInRvcFwiID5cclxuICA8RHJvcGRvd24gYXM9e05hdkl0ZW19PlxyXG4gICAgICA8TmF2RHJvcGRvd24uSXRlbSBhcz17TGlua30gdG89XCIvaGlcIiA+SGk8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgIDxEcm9wZG93bi5NZW51IHsuLi4oeyBzaG93OiB0cnVlIH0pfT5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGFzPXtMaW5rfSB0bz1cIi9oZWxsb1wiIGtleT1cIjFcIj5IZWxsbzwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGFzPXtMaW5rfSB0bz1cIi93b3JsZFwiIGtleT1cIjJcIj5IZWxsbzwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gIDwvRHJvcGRvd24+XHJcbjwvTmF2RHJvcGRvd24+XHJcbiAgICAgIDxOYXYuTGluayBocmVmPVwiL2ltcHJlc29zL1wiPkltcHJlc29zPC9OYXYuTGluaz5cclxuICAgIDwvTmF2PlxyXG4gXHJcbiAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbjwvTmF2YmFyPlxyXG48L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==