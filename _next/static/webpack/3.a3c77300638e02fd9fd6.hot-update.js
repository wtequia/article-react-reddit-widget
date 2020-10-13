webpackHotUpdate_N_E(3,{

/***/ "./components/global/footer/default.jsx":
/*!**********************************************!*\
  !*** ./components/global/footer/default.jsx ***!
  \**********************************************/
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
/* harmony import */ var _core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Icon/default.jsx */ "./components/core/Icon/default.jsx");
/* harmony import */ var _core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/SiteLinks/SiteLinks.jsx */ "./components/core/SiteLinks/SiteLinks.jsx");
/* harmony import */ var _properties_index_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../properties/index.json */ "./properties/index.json");
var _properties_index_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../properties/index.json */ "./properties/index.json", 1);
/* harmony import */ var _core_SocialMedia_default_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/SocialMedia/default.jsx */ "./components/core/SocialMedia/default.jsx");
/* harmony import */ var _core_Logo_default_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/Logo/default.jsx */ "./components/core/Logo/default.jsx");







var _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\global\\footer\\default.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/*Boostrap Component*/



/*React Components*/





/*Images*/

/*
Description:  Show footer with all its features
Author:       Maria Fernanda García M
Date:         15/01/2020
props:        siteProperties --> Properties of the site
*/

var Footer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    //save the state of the window width
    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "printSections", function (device, sections) {
      //Set     le of the menu depends of the device type
      var classLi = device === 'desktop' ? 'Footer-SectionsDesktopMenuItems' : 'Footer-BodyMobileMenuItems'; //Map to her the names from 'arrNameSection' an the code of the links
      //const footerSection = sections.values();

      var name = Object.keys(sections);
      var result = name.map(function (footerSection) {
        var div = __jsx("li", {
          className: classLi,
          key: footerSection.name,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 9
          }
        }, __jsx("a", {
          href: sections[footerSection],
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        }, footerSection));

        return div;
      });
      return result;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "mobileMenu", function () {
      var mobileCode = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"], {
        className: "Footer-MobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }, "Secciones"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        variant: "link",
        eventKey: "0",
        className: "Footer-ButtonMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerSecciones",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }
      }, _this.printSections('mobile', _this.sections))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }
      }, "Servicios "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        variant: "link",
        eventKey: "2",
        className: "Footer-ButtonMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "2",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerRedesServicios",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 15
        }
      }, __jsx("li", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/login/",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 19
        }
      }, "Iniciar Sesi\xF3n")), __jsx("li", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/suscripcion-digital/",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 19
        }
      }, "Suscr\xEDbete")), __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.servicios,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, "Red de portales"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        variant: "link",
        eventKey: "1",
        className: "Footer-ButtonMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "1",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerRedesServicios",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 15
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.redPortales,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }
      }));

      return mobileCode;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "desktopMenu", function () {
      var desktopCode = __jsx("div", {
        className: "Footer-DesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: 4,
        md: 12,
        sm: 12,
        className: "Footer-ColumnDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 15
        }
      }, "Secciones")), __jsx("ul", {
        className: "Footer-SectionsDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }
      }, _this.printSections('desktop', _this.sections))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: 3,
        md: 4,
        sm: 4,
        className: "Footer-DivisionDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }
      }, "Servicios")), __jsx("ul", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.servicios,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "Footer-DivisionDesktopMenu_redes",
        lg: 5,
        md: 8,
        sm: 8,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 15
        }
      }, "Red de portales")), __jsx("ul", {
        className: "Footer-SectionLinksDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.redPortales,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 15
        }
      })))));

      return desktopCode;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "defineMenu", function () {
      if (_this.isMobile) {
        return _this.mobileMenu();
      } else {
        return _this.desktopMenu();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getSubtype", function () {
      if (_this.props.globalContent) {
        return _this.props.globalContent.subtype === 'column' ? true : false;
      }
    });

    _this.state = {
      width: true ? window.innerWidth : undefined,
      userCustomFields: null,
      userWantsAds: false,
      flagFetch: false,
      tpObject: true ? window['tp'] : undefined,
      userSubs: null,
      loggedIn: false,
      isSubscriptor: true,
      isMobile: false // sectionsName: [],

    }; //Get site properties

    var siteProp = _properties_index_json__WEBPACK_IMPORTED_MODULE_11__; //Get the group of links of 'redPortales'

    _this.redPortales = siteProp.Red_de_portales; //Get the group of links of 'servicios'

    _this.servicios = siteProp.Servicios; //Links for suscribe and login

    _this.suscribeLink = siteProp.suscribeLink; // this.loginLink = siteProperties.loginLink;

    _this.sections = siteProp.Secciones;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
       true && window.addEventListener('resize', this.handleWindowSizeChange);
       true && window.addEventListener('load', this.handleTP); // this.fetchSectionGroup();
      // this.fetchFooterItems();
    } //Get the json sections obtained from the API and return them to render

  }, {
    key: "render",
    value: function render() {
      //control the window width
      this.isMobile = this.state.width < 576;
      return __jsx("div", {
        className: "Footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "Footer-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "Footer-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 6,
        sm: 4,
        md: 5,
        lg: 6,
        xl: 6,
        className: "Footer-Logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 17
        }
      }, __jsx(_core_Logo_default_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        logoType: "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 17
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 17
        }
      }, __jsx(_core_Logo_default_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        logoType: "mobileFooter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 17
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 6,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        className: "Footer-Button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        href: "https://www.elespectador.com/suscripcion-digital/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 17
        }
      }, "Suscr\xEDbete")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 4,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2,
        className: "Footer-TextFollow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 17
        }
      }, "S\xEDganos en")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: 8,
        sm: 5,
        md: 4,
        lg: 3,
        xl: 3,
        className: "Footer-Social",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 15
        }
      }, __jsx(_core_SocialMedia_default_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        location: "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "Footer-Line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }
      }), this.defineMenu(), __jsx("div", {
        className: "Footer-Info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-Contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/servicio-al-cliente/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 15
        }
      }, __jsx("img", {
        className: "Footer-ContactLogo",
        src: "https://cloudfront-us-east-1.images.arcpublishing.com/sandbox.elespectador/DOZEI6JMMBG75AQKY644QJYOYQ.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "Footer-ContactInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Footer-ContactTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/servicio-al-cliente/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 19
        }
      }, "Cont\xE1ctenos")), __jsx("div", {
        className: "Footer-ContactText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "Footer-ContactCode",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 17
        }
      }, "Servicio al cliente: L\xCDNEA NACIONAL: 01 8000 510903 EN BOGOT\xC1: 4055540, ", __jsx("a", {
        href: "mailto:servicioalcliente@elespectador.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 91
        }
      }, "servicioalcliente@elespectador.com.")))), __jsx("div", {
        className: "Footer-Contact_line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "Footer-Members",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "Footer-MembersTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 15
        }
      }, "Miembros de"), __jsx("a", {
        href: "https://www.iabcolombia.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/iab.png",
        alt: "IAB Colombia",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 17
        }
      })), __jsx("a", {
        href: "https://ami.org.co/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/ami.png",
        alt: "Asociaci\xF3n Colombiana de Medios de Informaci\xF3n",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 16
        }
      }))), __jsx("div", {
        className: "Footer-Contact_line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "Footer-Sic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "https://www.sic.gov.co/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/sicLogo.png",
        alt: "Superintendencia de industria y comercio",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 15
        }
      })))), __jsx("div", {
        className: "Footer-TycLinks",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 13
        }
      }, "El uso de este sitio web implica la aceptaci\xF3n de los ", __jsx("a", {
        href: "https://www.elespectador.com/terminos#terminos-y-condiciones",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 67
        }
      }, " T\xE9rminos y Condiciones "), " y ", __jsx("a", {
        href: "https://www.elespectador.com/terminos#politica-de-tratamiento-de-datos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 169
        }
      }, " Pol\xEDticas de privacidad"), " de COMUNICAN S.A. Todos los Derechos Reservados D.R.A. Prohibida su reproducci\xF3n total o parcial, as\xED como su traducci\xF3n a cualquier idioma sin la autorizaci\xF3n escrita de su titular. Reproduction in whole or in part, or translation without written permission is  prohibited. All rights reserved 2020"))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvZm9vdGVyL2RlZmF1bHQuanN4Il0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwiZGV2aWNlIiwic2VjdGlvbnMiLCJjbGFzc0xpIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJyZXN1bHQiLCJtYXAiLCJmb290ZXJTZWN0aW9uIiwiZGl2Iiwic2V0U3RhdGUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtb2JpbGVDb2RlIiwiQnV0dG9uIiwicHJpbnRTZWN0aW9ucyIsInNlcnZpY2lvcyIsInJlZFBvcnRhbGVzIiwiZGVza3RvcENvZGUiLCJpc01vYmlsZSIsIm1vYmlsZU1lbnUiLCJkZXNrdG9wTWVudSIsImdsb2JhbENvbnRlbnQiLCJzdWJ0eXBlIiwic3RhdGUiLCJ1c2VyQ3VzdG9tRmllbGRzIiwidXNlcldhbnRzQWRzIiwiZmxhZ0ZldGNoIiwidHBPYmplY3QiLCJ1bmRlZmluZWQiLCJ1c2VyU3VicyIsImxvZ2dlZEluIiwiaXNTdWJzY3JpcHRvciIsInNpdGVQcm9wIiwic2l0ZVByb3BlcnRpZXMiLCJSZWRfZGVfcG9ydGFsZXMiLCJTZXJ2aWNpb3MiLCJzdXNjcmliZUxpbmsiLCJTZWNjaW9uZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsImhhbmRsZVRQIiwiZGVmaW5lTWVudSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBOztBQUNBO0FBU0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7Ozs7O0lBUU1BLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakI7QUFDQSw4QkFBTUEsS0FBTjs7QUFGaUIsd05BdUNILFVBQUNDLE1BQUQsRUFBU0MsUUFBVCxFQUFzQjtBQUNwQztBQUNB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cUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtBLE1BQUMscURBQUQ7QUFDSyxXQUFHLEVBQUMsY0FEVDtBQUVLLFdBQUcsRUFBQywwQ0FGVDtBQUdLLGlCQUFTLEVBQUMsdUJBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxBLENBREYsQ0E5Q0YsQ0FuQ0YsRUErRkU7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQUNzRDtBQUFHLFlBQUksRUFBQyw4REFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUR0RCxTQUM0SjtBQUFHLFlBQUksRUFBQyx3RUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUQ1Siw2VEFERixDQS9GRixDQWJGLENBREY7QUFxSEQ7Ozs7RUE5VWtCQywrQzs7QUFrVk45QyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8zLmEzYzc3MzAwNjM4ZTAyZmQ5ZmQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG4vKkJvb3N0cmFwIENvbXBvbmVudCovXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIENvbCxcclxuICBSb3csXHJcbiAgQWNjb3JkaW9uLFxyXG4gIENhcmQsXHJcbiAgQnV0dG9uLFxyXG4gIEltYWdlLFxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2NvcmUvSWNvbi9kZWZhdWx0LmpzeCc7XHJcbi8qUmVhY3QgQ29tcG9uZW50cyovXHJcbmltcG9ydCBTaXRlTGlua3MgZnJvbSAnLi4vLi4vY29yZS9TaXRlTGlua3MvU2l0ZUxpbmtzLmpzeCc7XHJcbmltcG9ydCBzaXRlUHJvcGVydGllcyBmcm9tICcuLi8uLi8uLi9wcm9wZXJ0aWVzL2luZGV4Lmpzb24nO1xyXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uLy4uL2NvcmUvU29jaWFsTWVkaWEvZGVmYXVsdC5qc3gnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9jb3JlL0xvZ28vZGVmYXVsdC5qc3gnO1xyXG4vKkltYWdlcyovXHJcbi8qXHJcbkRlc2NyaXB0aW9uOiAgU2hvdyBmb290ZXIgd2l0aCBhbGwgaXRzIGZlYXR1cmVzXHJcbkF1dGhvcjogICAgICAgTWFyaWEgRmVybmFuZGEgR2FyY8OtYSBNXHJcbkRhdGU6ICAgICAgICAgMTUvMDEvMjAyMFxyXG5wcm9wczogICAgICAgIHNpdGVQcm9wZXJ0aWVzIC0tPiBQcm9wZXJ0aWVzIG9mIHRoZSBzaXRlXHJcbiovXHJcblxyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgLy9zYXZlIHRoZSBzdGF0ZSBvZiB0aGUgd2luZG93IHdpZHRoXHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB3aWR0aDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDcwMCxcclxuICAgICAgdXNlckN1c3RvbUZpZWxkczogbnVsbCxcclxuICAgICAgdXNlcldhbnRzQWRzOiBmYWxzZSxcclxuICAgICAgZmxhZ0ZldGNoOiBmYWxzZSxcclxuICAgICAgdHBPYmplY3Q6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93Wyd0cCddIDogdW5kZWZpbmVkLFxyXG4gICAgICB1c2VyU3ViczogbnVsbCxcclxuICAgICAgbG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICBpc1N1YnNjcmlwdG9yOiB0cnVlLFxyXG4gICAgICBpc01vYmlsZTogZmFsc2UsXHJcbiAgICAgIC8vIHNlY3Rpb25zTmFtZTogW10sXHJcbiAgICB9O1xyXG4gICAgLy9HZXQgc2l0ZSBwcm9wZXJ0aWVzXHJcbiAgICBjb25zdCAgc2l0ZVByb3AgID0gc2l0ZVByb3BlcnRpZXM7XHJcbiAgICAvL0dldCB0aGUgZ3JvdXAgb2YgbGlua3Mgb2YgJ3JlZFBvcnRhbGVzJ1xyXG4gICAgdGhpcy5yZWRQb3J0YWxlcyA9IHNpdGVQcm9wLlJlZF9kZV9wb3J0YWxlcztcclxuICAgIC8vR2V0IHRoZSBncm91cCBvZiBsaW5rcyBvZiAnc2VydmljaW9zJ1xyXG4gICAgdGhpcy5zZXJ2aWNpb3MgPSBzaXRlUHJvcC5TZXJ2aWNpb3M7XHJcbiAgICAvL0xpbmtzIGZvciBzdXNjcmliZSBhbmQgbG9naW5cclxuICAgIHRoaXMuc3VzY3JpYmVMaW5rID0gc2l0ZVByb3Auc3VzY3JpYmVMaW5rO1xyXG4gICAvLyB0aGlzLmxvZ2luTGluayA9IHNpdGVQcm9wZXJ0aWVzLmxvZ2luTGluaztcclxuICAgdGhpcy5zZWN0aW9ucyA9IHNpdGVQcm9wLlNlY2Npb25lcztcclxuICB9XHJcblxyXG4gXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5oYW5kbGVUUCk7XHJcbiAgICAvLyB0aGlzLmZldGNoU2VjdGlvbkdyb3VwKCk7XHJcbiAgIC8vIHRoaXMuZmV0Y2hGb290ZXJJdGVtcygpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vR2V0IHRoZSBqc29uIHNlY3Rpb25zIG9idGFpbmVkIGZyb20gdGhlIEFQSSBhbmQgcmV0dXJuIHRoZW0gdG8gcmVuZGVyXHJcbiAgcHJpbnRTZWN0aW9ucyA9IChkZXZpY2UsIHNlY3Rpb25zKSA9PiB7XHJcbiAgICAvL1NldCAgICAgbGUgb2YgdGhlIG1lbnUgZGVwZW5kcyBvZiB0aGUgZGV2aWNlIHR5cGVcclxuICAgIGNvbnN0IGNsYXNzTGkgPVxyXG4gICAgICBkZXZpY2UgPT09ICdkZXNrdG9wJ1xyXG4gICAgICAgID8gJ0Zvb3Rlci1TZWN0aW9uc0Rlc2t0b3BNZW51SXRlbXMnXHJcbiAgICAgICAgOiAnRm9vdGVyLUJvZHlNb2JpbGVNZW51SXRlbXMnO1xyXG5cclxuICAgIC8vTWFwIHRvIGhlciB0aGUgbmFtZXMgZnJvbSAnYXJyTmFtZVNlY3Rpb24nIGFuIHRoZSBjb2RlIG9mIHRoZSBsaW5rc1xyXG4gICAgLy9jb25zdCBmb290ZXJTZWN0aW9uID0gc2VjdGlvbnMudmFsdWVzKCk7XHJcbiAgICBjb25zdCBuYW1lID0gT2JqZWN0LmtleXMoc2VjdGlvbnMpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmFtZS5tYXAoZm9vdGVyU2VjdGlvbiA9PiB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc0xpfSBrZXk9e2Zvb3RlclNlY3Rpb24ubmFtZX0+XHJcbiAgICAgICAgICA8YSBocmVmPXtzZWN0aW9uc1tmb290ZXJTZWN0aW9uXX0+e2Zvb3RlclNlY3Rpb259PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgLy9zZXQgdGhlIHN0YXRlIG9mIHRoZSB3aW5kb3cgd2lkdGhcclxuICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcclxuICB9O1xyXG5cclxuICAvL2NvZGUgb2YgdGhlIG1vYmlsZSBmb290ZXIgbWVudVxyXG4gIG1vYmlsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2JpbGVDb2RlID0gKFxyXG4gICAgICA8QWNjb3JkaW9uIGNsYXNzTmFtZT0nRm9vdGVyLU1vYmlsZU1lbnUnPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nRm9vdGVyLUNhcmRNb2JpbGVNZW51Jz5cclxuICAgICAgICAgIDxDYXJkLkhlYWRlciBjbGFzc05hbWU9J0Zvb3Rlci1IZWFkZXJNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgPGE+U2VjY2lvbmVzPC9hPlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZVxyXG4gICAgICAgICAgICAgIGFzPXtCdXR0b259XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nbGluaydcclxuICAgICAgICAgICAgICBldmVudEtleT0nMCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1CdXR0b25Nb2JpbGVNZW51J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEljb24gaWNvbj0nY2hldnJvbi1kb3duJyAvPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZVxyXG4gICAgICAgICAgICBldmVudEtleT0nMCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQ29sbGFwc2VNb2JpbGVNZW51J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnVDb250YWluZXJTZWNjaW9uZXMnPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByaW50U2VjdGlvbnMoJ21vYmlsZScsIHRoaXMuc2VjdGlvbnMpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTGluZSc+PC9kaXY+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdGb290ZXItQ2FyZE1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgPENhcmQuSGVhZGVyIGNsYXNzTmFtZT0nRm9vdGVyLUhlYWRlck1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICA8YT5TZXJ2aWNpb3MgPC9hPlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZVxyXG4gICAgICAgICAgICAgIGFzPXtCdXR0b259XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nbGluaydcclxuICAgICAgICAgICAgICBldmVudEtleT0nMidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1CdXR0b25Nb2JpbGVNZW51J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEljb24gaWNvbj0nY2hldnJvbi1kb3duJyAvPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZVxyXG4gICAgICAgICAgICBldmVudEtleT0nMidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQ29sbGFwc2VNb2JpbGVNZW51J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnVDb250YWluZXJSZWRlc1NlcnZpY2lvcyc+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL2xvZ2luL1wiPkluaWNpYXIgU2VzacOzbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3N1c2NyaXBjaW9uLWRpZ2l0YWwvXCI+U3VzY3LDrWJldGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMuc2VydmljaW9zfSAvPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTGluZSc+PC9kaXY+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdGb290ZXItQ2FyZE1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgPENhcmQuSGVhZGVyIGNsYXNzTmFtZT0nRm9vdGVyLUhlYWRlck1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICA8YT5SZWQgZGUgcG9ydGFsZXM8L2E+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgYXM9e0J1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdsaW5rJ1xyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PScxJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUJ1dHRvbk1vYmlsZU1lbnUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbiBpY29uPSdjaGV2cm9uLWRvd24nIC8+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlXHJcbiAgICAgICAgICAgIGV2ZW50S2V5PScxJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db2xsYXBzZU1vYmlsZU1lbnUnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lclJlZGVzU2VydmljaW9zJz5cclxuICAgICAgICAgICAgICAgIDxTaXRlTGlua3MgbGlua3NEYXRhPXt0aGlzLnJlZFBvcnRhbGVzfSAvPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTGluZSc+PC9kaXY+XHJcbiAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgKTtcclxuICAgIHJldHVybiBtb2JpbGVDb2RlO1xyXG4gIH07XHJcblxyXG4gIC8vY29kZSBvZiB0aGUgZGVza3RvcCBmb290ZXIgbWVudVxyXG4gIGRlc2t0b3BNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVza3RvcENvZGUgPSAoXHJcbiAgICAgIDxkaXYgIGNsYXNzTmFtZT0nRm9vdGVyLURlc2t0b3BNZW51Jz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbGc9ezR9IG1kPXsxMn0gc209ezEyfSBjbGFzc05hbWU9J0Zvb3Rlci1Db2x1bW5EZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItVGl0bGVzRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICAgIDxhPlNlY2Npb25lczwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1TZWN0aW9uc0Rlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAge3RoaXMucHJpbnRTZWN0aW9ucygnZGVza3RvcCcsIHRoaXMuc2VjdGlvbnMpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPXszfSBtZD17NH0gc209ezR9IGNsYXNzTmFtZT0nRm9vdGVyLURpdmlzaW9uRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVRpdGxlc0Rlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgICA8YT5TZXJ2aWNpb3M8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgey8qPExvZ2luVmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgbG9nZ2VkSW49e3RoaXMuc3RhdGUubG9nZ2VkSW59XHJcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmlwdG9yPXt0aGlzLnN0YXRlLmlzU3Vic2NyaXB0b3J9XHJcbiAgICAgICAgICAgICAgICBsb2dpbkxpbms9e3RoaXMubG9naW5MaW5rfVxyXG4gICAgICAgICAgICAgICAgc3VzY3JpYmVMaW5rPXt0aGlzLnN1c2NyaWJlTGlua31cclxuICAgICAgICAgICAgICAvPiovfVxyXG4gICAgICAgICAgICAgIDxTaXRlTGlua3MgbGlua3NEYXRhPXt0aGlzLnNlcnZpY2lvc30gLz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCAgICAgY2xhc3NOYW1lPSdGb290ZXItRGl2aXNpb25EZXNrdG9wTWVudV9yZWRlcydcclxuICAgICAgICAgICAgbGc9ezV9XHJcbiAgICAgICAgICAgIG1kPXs4fVxyXG4gICAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1UaXRsZXNEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgICAgPGE+UmVkIGRlIHBvcnRhbGVzPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nRm9vdGVyLVNlY3Rpb25MaW5rc0Rlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgICA8U2l0ZUxpbmtzIGxpbmtzRGF0YT17dGhpcy5yZWRQb3J0YWxlc30gLz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICByZXR1cm4gZGVza3RvcENvZGU7XHJcbiAgfTtcclxuXHJcbiAgLy9EZXBlbmRzIG9mIHRoZSB3aW5kb3cgd2lkdGgsIHJlbmRlciBhIG1lbnUgdHlwZVxyXG4gIGRlZmluZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2JpbGVNZW51KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZXNrdG9wTWVudSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vR2V0IHN1YnR5cGUgZnJvbSBjb250ZXh0XHJcbiAgZ2V0U3VidHlwZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnByb3BzLmdsb2JhbENvbnRlbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ2xvYmFsQ29udGVudC5zdWJ0eXBlID09PSAnY29sdW1uJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vY29udHJvbCB0aGUgd2luZG93IHdpZHRoXHJcbiAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5zdGF0ZS53aWR0aCA8IDU3NjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyJz5cclxuICAgICAgICB7Lyp0aGlzLmdldFN1YnR5cGUoKSAhPT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICA8UGlhbm9TdXNjcmliZVxyXG4gICAgICAgICAgICBwaWFub0NsYXNzPSdwaWFub1N1YnNjcmliZUZvb3RlcidcclxuICAgICAgICAgICAgcGlhbm9TdWJDbGFzcz0nUGlhbm9Db250YWluZXJfZm9vdGVyJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKi99XHJcbiAgICAgICAgey8vYWxsb3dBZHNJbkJvZHkgJiYgPEFkcyBzbG90TmFtZT0nb3V0X29mX3BhZ2UnIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsvL2FsbG93QWRzSW5Cb2R5ICYmIDxBZHMgc2xvdE5hbWU9J29uZV94X29uZScgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgey8vYWxsb3dBZHNJbkJvZHkgJiYgPFN0aWNreUFkIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFpbmVyJz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSdGb290ZXItSGVhZGVyJz5cclxuICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBzbT17NH0gbWQ9ezV9IGxnPXs2fSB4bD17Nn0gY2xhc3NOYW1lPSdGb290ZXItTG9nbyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ29cclxuICAgICAgICAgICAgICAgICAgICBsb2dvVHlwZT0nZm9vdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ29cclxuICAgICAgICAgICAgICAgICAgICBsb2dvVHlwZT0nbW9iaWxlRm9vdGVyJ1xyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sICB4cz17Nn0gc209ezF9IG1kPXsxfSBsZz17MX0geGw9ezF9IGNsYXNzTmFtZT0nRm9vdGVyLUJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3N1c2NyaXBjaW9uLWRpZ2l0YWwvXCI+U3VzY3LDrWJldGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgICAgICB4cz17NH1cclxuICAgICAgICAgICAgICAgIHNtPXsyfVxyXG4gICAgICAgICAgICAgICAgbWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICBsZz17Mn1cclxuICAgICAgICAgICAgICAgIHhsPXsyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItVGV4dEZvbGxvdydcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlPDrWdhbm9zIGVuPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz17OH0gc209ezV9IG1kPXs0fSBsZz17M30geGw9ezN9IGNsYXNzTmFtZT0nRm9vdGVyLVNvY2lhbCc+XHJcbiAgICAgICAgICAgICAgICA8U29jaWFsIGxvY2F0aW9uPSdmb290ZXInLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTGluZSc+PC9kaXY+XHJcbiAgICAgICAgICB7dGhpcy5kZWZpbmVNZW51KCl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUluZm8nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3QnPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vc2VydmljaW8tYWwtY2xpZW50ZS8nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0TG9nbydcclxuICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL2Nsb3VkZnJvbnQtdXMtZWFzdC0xLmltYWdlcy5hcmNwdWJsaXNoaW5nLmNvbS9zYW5kYm94LmVsZXNwZWN0YWRvci9ET1pFSTZKTU1CRzc1QVFLWTY0NFFKWU9ZUS5wbmcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RJbmZvJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdFRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS9zZXJ2aWNpby1hbC1jbGllbnRlLyc+Q29udMOhY3Rlbm9zPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RUZXh0Jz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdENvZGUnPlxyXG4gICAgICAgICAgICAgICAgICBTZXJ2aWNpbyBhbCBjbGllbnRlOiBMw41ORUEgTkFDSU9OQUw6IDAxIDgwMDAgNTEwOTAzIEVOIEJPR09Uw4E6IDQwNTU1NDAsIDxhIGhyZWY9XCJtYWlsdG86c2VydmljaW9hbGNsaWVudGVAZWxlc3BlY3RhZG9yLmNvbVwiPnNlcnZpY2lvYWxjbGllbnRlQGVsZXNwZWN0YWRvci5jb20uPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0X2xpbmUnIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVycyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzVGl0bGUnPk1pZW1icm9zIGRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LmlhYmNvbG9tYmlhLmNvbS8nXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgIHNyYz0nL2lhYi5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICBhbHQ9J0lBQiBDb2xvbWJpYSdcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLU1lbWJlcnNJaW1hZ2VzJ1xyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2FtaS5vcmcuY28vJ1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgIHNyYz0nL2FtaS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICBhbHQ9J0Fzb2NpYWNpw7NuIENvbG9tYmlhbmEgZGUgTWVkaW9zIGRlIEluZm9ybWFjacOzbidcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLU1lbWJlcnNJaW1hZ2VzJ1xyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0X2xpbmUnIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItU2ljJz5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cuc2ljLmdvdi5jby8nXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICBzcmM9Jy9zaWNMb2dvLnBuZydcclxuICAgICAgICAgICAgICAgICAgIGFsdD0nU3VwZXJpbnRlbmRlbmNpYSBkZSBpbmR1c3RyaWEgeSBjb21lcmNpbydcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLU1lbWJlcnNJaW1hZ2VzJ1xyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1UeWNMaW5rcyc+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEVsIHVzbyBkZSBlc3RlIHNpdGlvIHdlYiBpbXBsaWNhIGxhIGFjZXB0YWNpw7NuIGRlIGxvcyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS90ZXJtaW5vcyN0ZXJtaW5vcy15LWNvbmRpY2lvbmVzXCI+IFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzIDwvYT4geSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS90ZXJtaW5vcyNwb2xpdGljYS1kZS10cmF0YW1pZW50by1kZS1kYXRvc1wiPiBQb2zDrXRpY2FzIGRlIHByaXZhY2lkYWQ8L2E+IGRlIENPTVVOSUNBTiBTLkEuIFRvZG9zIGxvcyBEZXJlY2hvcyBSZXNlcnZhZG9zIEQuUi5BLiBQcm9oaWJpZGEgc3UgcmVwcm9kdWNjacOzbiB0b3RhbCBvIHBhcmNpYWwsIGFzw60gY29tbyBzdSB0cmFkdWNjacOzbiBhIGN1YWxxdWllciBpZGlvbWEgc2luIGxhIGF1dG9yaXphY2nDs24gZXNjcml0YSBkZSBzdSB0aXR1bGFyLiBSZXByb2R1Y3Rpb24gaW4gd2hvbGUgb3IgaW4gcGFydCwgb3IgdHJhbnNsYXRpb24gd2l0aG91dCB3cml0dGVuIHBlcm1pc3Npb24gaXMgIHByb2hpYml0ZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQgMjAyMFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9