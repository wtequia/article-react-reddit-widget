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

      console.log("sections", sections);
      var name = Object.keys(sections);
      var result = name.map(function (footerSection) {
        var div = __jsx("li", {
          className: classLi,
          key: footerSection.name,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 9
          }
        }, __jsx("a", {
          href: sections[footerSection],
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
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
      console.log("entro a mobile menu");

      var mobileCode = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"], {
        className: "Footer-MobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
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
          lineNumber: 105,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerSecciones",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }
      }, _this.printSections('mobile', _this.sections))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
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
          lineNumber: 129,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "2",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerRedesServicios",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 15
        }
      }, __jsx("li", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/login/",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 19
        }
      }, "Iniciar Sesi\xF3n")), __jsx("li", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/suscripcion-digital/",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 19
        }
      }, "Suscr\xEDbete")), __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.servicios,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "Footer-CardMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        className: "Footer-HeaderMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
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
          lineNumber: 159,
          columnNumber: 13
        }
      }, __jsx(_core_Icon_default_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: "chevron-down",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "1",
        className: "Footer-CollapseMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        className: "Footer-BodyMobileMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "Footer-BodyMobileMenuContainerRedesServicios",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.redPortales,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: "Footer-Line",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 9
        }
      }));

      return mobileCode;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "desktopMenu", function () {
      console.log("entro a desktop menu");

      var desktopCode = __jsx("div", {
        className: "Footer-DesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
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
          lineNumber: 191,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 15
        }
      }, "Secciones")), __jsx("ul", {
        className: "Footer-SectionsDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
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
          lineNumber: 199,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 15
        }
      }, "Servicios")), __jsx("ul", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.servicios,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
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
          lineNumber: 213,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-TitlesDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 15
        }
      }, "Red de portales")), __jsx("ul", {
        className: "Footer-SectionLinksDesktopMenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }
      }, __jsx(_core_SiteLinks_SiteLinks_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        linksData: _this.redPortales,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
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
          lineNumber: 251,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "Footer-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "Footer-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
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
          lineNumber: 267,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 17
        }
      }, __jsx(_core_Logo_default_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        logoType: "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 17
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 17
        }
      }, __jsx(_core_Logo_default_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        logoType: "mobileFooter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
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
          lineNumber: 279,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        href: "https://www.elespectador.com/suscripcion-digital/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
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
          lineNumber: 282,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
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
          lineNumber: 292,
          columnNumber: 15
        }
      }, __jsx(_core_SocialMedia_default_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        location: "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "Footer-Line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 11
        }
      }), this.defineMenu(), __jsx("div", {
        className: "Footer-Info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "Footer-Contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/servicio-al-cliente/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 15
        }
      }, __jsx("img", {
        className: "Footer-ContactLogo",
        src: "https://cloudfront-us-east-1.images.arcpublishing.com/sandbox.elespectador/DOZEI6JMMBG75AQKY644QJYOYQ.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "Footer-ContactInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Footer-ContactTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://www.elespectador.com/servicio-al-cliente/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 19
        }
      }, "Cont\xE1ctenos")), __jsx("div", {
        className: "Footer-ContactText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "Footer-ContactCode",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 17
        }
      }, "Servicio al cliente: L\xCDNEA NACIONAL: 01 8000 510903 EN BOGOT\xC1: 4055540, ", __jsx("a", {
        href: "mailto:servicioalcliente@elespectador.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 91
        }
      }, "servicioalcliente@elespectador.com.")))), __jsx("div", {
        className: "Footer-Contact_line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "Footer-Members",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "Footer-MembersTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 15
        }
      }, "Miembros de"), __jsx("a", {
        href: "https://www.iabcolombia.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/iab.png",
        alt: "IAB Colombia",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 17
        }
      })), __jsx("a", {
        href: "https://ami.org.co/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/ami.png",
        alt: "Asociaci\xF3n Colombiana de Medios de Informaci\xF3n",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 16
        }
      }))), __jsx("div", {
        className: "Footer-Contact_line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "Footer-Sic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "https://www.sic.gov.co/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "/sicLogo.png",
        alt: "Superintendencia de industria y comercio",
        className: "Footer-MembersIimages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 15
        }
      })))), __jsx("div", {
        className: "Footer-TycLinks",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 13
        }
      }, "El uso de este sitio web implica la aceptaci\xF3n de los ", __jsx("a", {
        href: "https://www.elespectador.com/terminos#terminos-y-condiciones",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 67
        }
      }, " T\xE9rminos y Condiciones "), " y ", __jsx("a", {
        href: "https://www.elespectador.com/terminos#politica-de-tratamiento-de-datos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvZm9vdGVyL2RlZmF1bHQuanN4Il0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwiZGV2aWNlIiwic2VjdGlvbnMiLCJjbGFzc0xpIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwicmVzdWx0IiwibWFwIiwiZm9vdGVyU2VjdGlvbiIsImRpdiIsInNldFN0YXRlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibW9iaWxlQ29kZSIsIkJ1dHRvbiIsInByaW50U2VjdGlvbnMiLCJzZXJ2aWNpb3MiLCJyZWRQb3J0YWxlcyIsImRlc2t0b3BDb2RlIiwiaXNNb2JpbGUiLCJtb2JpbGVNZW51IiwiZGVza3RvcE1lbnUiLCJnbG9iYWxDb250ZW50Iiwic3VidHlwZSIsInN0YXRlIiwidXNlckN1c3RvbUZpZWxkcyIsInVzZXJXYW50c0FkcyIsImZsYWdGZXRjaCIsInRwT2JqZWN0IiwidW5kZWZpbmVkIiwidXNlclN1YnMiLCJsb2dnZWRJbiIsImlzU3Vic2NyaXB0b3IiLCJzaXRlUHJvcCIsInNpdGVQcm9wZXJ0aWVzIiwiUmVkX2RlX3BvcnRhbGVzIiwiU2VydmljaW9zIiwic3VzY3JpYmVMaW5rIiwiU2VjY2lvbmVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJoYW5kbGVUUCIsImRlZmluZU1lbnUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTs7QUFDQTtBQVNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7OztJQVFNQSxNOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCO0FBQ0EsOEJBQU1BLEtBQU47O0FBRmlCLHdOQXVDSCxVQUFDQyxNQUFELEVBQVNDLFFBQVQs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QUFBLFFBN0NGLEVBOENFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyx5QkFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBR0UsV0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLQSxNQUFDLHFEQUFEO0FBQ0ssV0FBRyxFQUFDLGNBRFQ7QUFFSyxXQUFHLEVBQUMsMENBRlQ7QUFHSyxpQkFBUyxFQUFDLHVCQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMQSxDQURGLENBOUNGLENBbkNGLEVBK0ZFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRUFDc0Q7QUFBRyxZQUFJLEVBQUMsOERBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FEdEQsU0FDNEo7QUFBRyxZQUFJLEVBQUMsd0VBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FENUosNlRBREYsQ0EvRkYsQ0FiRixDQURGO0FBcUhEOzs7O0VBalZrQkMsK0M7O0FBcVZOaEQscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMy44ODc5MDU2YjVlNTViYzNlM2Q1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuLypCb29zdHJhcCBDb21wb25lbnQqL1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBDb2wsXHJcbiAgUm93LFxyXG4gIEFjY29yZGlvbixcclxuICBDYXJkLFxyXG4gIEJ1dHRvbixcclxuICBJbWFnZSxcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9jb3JlL0ljb24vZGVmYXVsdC5qc3gnO1xyXG4vKlJlYWN0IENvbXBvbmVudHMqL1xyXG5pbXBvcnQgU2l0ZUxpbmtzIGZyb20gJy4uLy4uL2NvcmUvU2l0ZUxpbmtzL1NpdGVMaW5rcy5qc3gnO1xyXG5pbXBvcnQgc2l0ZVByb3BlcnRpZXMgZnJvbSAnLi4vLi4vLi4vcHJvcGVydGllcy9pbmRleC5qc29uJztcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi8uLi9jb3JlL1NvY2lhbE1lZGlhL2RlZmF1bHQuanN4JztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vY29yZS9Mb2dvL2RlZmF1bHQuanN4JztcclxuLypJbWFnZXMqL1xyXG4vKlxyXG5EZXNjcmlwdGlvbjogIFNob3cgZm9vdGVyIHdpdGggYWxsIGl0cyBmZWF0dXJlc1xyXG5BdXRob3I6ICAgICAgIE1hcmlhIEZlcm5hbmRhIEdhcmPDrWEgTVxyXG5EYXRlOiAgICAgICAgIDE1LzAxLzIwMjBcclxucHJvcHM6ICAgICAgICBzaXRlUHJvcGVydGllcyAtLT4gUHJvcGVydGllcyBvZiB0aGUgc2l0ZVxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIC8vc2F2ZSB0aGUgc3RhdGUgb2YgdGhlIHdpbmRvdyB3aWR0aFxyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgd2lkdGg6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmlubmVyV2lkdGggOiA3MDAsXHJcbiAgICAgIHVzZXJDdXN0b21GaWVsZHM6IG51bGwsXHJcbiAgICAgIHVzZXJXYW50c0FkczogZmFsc2UsXHJcbiAgICAgIGZsYWdGZXRjaDogZmFsc2UsXHJcbiAgICAgIHRwT2JqZWN0OiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvd1sndHAnXSA6IHVuZGVmaW5lZCxcclxuICAgICAgdXNlclN1YnM6IG51bGwsXHJcbiAgICAgIGxvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgaXNTdWJzY3JpcHRvcjogdHJ1ZSxcclxuICAgICAgaXNNb2JpbGU6IGZhbHNlLFxyXG4gICAgICAvLyBzZWN0aW9uc05hbWU6IFtdLFxyXG4gICAgfTtcclxuICAgIC8vR2V0IHNpdGUgcHJvcGVydGllc1xyXG4gICAgY29uc3QgIHNpdGVQcm9wICA9IHNpdGVQcm9wZXJ0aWVzO1xyXG4gICAgLy9HZXQgdGhlIGdyb3VwIG9mIGxpbmtzIG9mICdyZWRQb3J0YWxlcydcclxuICAgIHRoaXMucmVkUG9ydGFsZXMgPSBzaXRlUHJvcC5SZWRfZGVfcG9ydGFsZXM7XHJcbiAgICAvL0dldCB0aGUgZ3JvdXAgb2YgbGlua3Mgb2YgJ3NlcnZpY2lvcydcclxuICAgIHRoaXMuc2VydmljaW9zID0gc2l0ZVByb3AuU2VydmljaW9zO1xyXG4gICAgLy9MaW5rcyBmb3Igc3VzY3JpYmUgYW5kIGxvZ2luXHJcbiAgICB0aGlzLnN1c2NyaWJlTGluayA9IHNpdGVQcm9wLnN1c2NyaWJlTGluaztcclxuICAgLy8gdGhpcy5sb2dpbkxpbmsgPSBzaXRlUHJvcGVydGllcy5sb2dpbkxpbms7XHJcbiAgIHRoaXMuc2VjdGlvbnMgPSBzaXRlUHJvcC5TZWNjaW9uZXM7XHJcbiAgfVxyXG5cclxuIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuaGFuZGxlVFApO1xyXG4gICAgLy8gdGhpcy5mZXRjaFNlY3Rpb25Hcm91cCgpO1xyXG4gICAvLyB0aGlzLmZldGNoRm9vdGVySXRlbXMoKTtcclxuICB9XHJcblxyXG5cclxuICAvL0dldCB0aGUganNvbiBzZWN0aW9ucyBvYnRhaW5lZCBmcm9tIHRoZSBBUEkgYW5kIHJldHVybiB0aGVtIHRvIHJlbmRlclxyXG4gIHByaW50U2VjdGlvbnMgPSAoZGV2aWNlLCBzZWN0aW9ucykgPT4ge1xyXG4gICAgLy9TZXQgICAgIGxlIG9mIHRoZSBtZW51IGRlcGVuZHMgb2YgdGhlIGRldmljZSB0eXBlXHJcbiAgICBjb25zdCBjbGFzc0xpID1cclxuICAgICAgZGV2aWNlID09PSAnZGVza3RvcCdcclxuICAgICAgICA/ICdGb290ZXItU2VjdGlvbnNEZXNrdG9wTWVudUl0ZW1zJ1xyXG4gICAgICAgIDogJ0Zvb3Rlci1Cb2R5TW9iaWxlTWVudUl0ZW1zJztcclxuXHJcbiAgICAvL01hcCB0byBoZXIgdGhlIG5hbWVzIGZyb20gJ2Fyck5hbWVTZWN0aW9uJyBhbiB0aGUgY29kZSBvZiB0aGUgbGlua3NcclxuICAgIC8vY29uc3QgZm9vdGVyU2VjdGlvbiA9IHNlY3Rpb25zLnZhbHVlcygpO1xyXG4gICAgY29uc29sZS5sb2coXCJzZWN0aW9uc1wiLCBzZWN0aW9ucyk7XHJcbiAgICBjb25zdCBuYW1lID0gT2JqZWN0LmtleXMoc2VjdGlvbnMpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmFtZS5tYXAoZm9vdGVyU2VjdGlvbiA9PiB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc0xpfSBrZXk9e2Zvb3RlclNlY3Rpb24ubmFtZX0+XHJcbiAgICAgICAgICA8YSBocmVmPXtzZWN0aW9uc1tmb290ZXJTZWN0aW9uXX0+e2Zvb3RlclNlY3Rpb259PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgLy9zZXQgdGhlIHN0YXRlIG9mIHRoZSB3aW5kb3cgd2lkdGhcclxuICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcclxuICB9O1xyXG5cclxuICAvL2NvZGUgb2YgdGhlIG1vYmlsZSBmb290ZXIgbWVudVxyXG4gIG1vYmlsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImVudHJvIGEgbW9iaWxlIG1lbnVcIik7XHJcbiAgICBjb25zdCBtb2JpbGVDb2RlID0gKFxyXG4gICAgICA8QWNjb3JkaW9uIGNsYXNzTmFtZT0nRm9vdGVyLU1vYmlsZU1lbnUnPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nRm9vdGVyLUNhcmRNb2JpbGVNZW51Jz5cclxuICAgICAgICAgIDxDYXJkLkhlYWRlciBjbGFzc05hbWU9J0Zvb3Rlci1IZWFkZXJNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgPGE+U2VjY2lvbmVzPC9hPlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZVxyXG4gICAgICAgICAgICAgIGFzPXtCdXR0b259XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nbGluaydcclxuICAgICAgICAgICAgICBldmVudEtleT0nMCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1CdXR0b25Nb2JpbGVNZW51J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEljb24gaWNvbj0nY2hldnJvbi1kb3duJyAvPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZVxyXG4gICAgICAgICAgICBldmVudEtleT0nMCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQ29sbGFwc2VNb2JpbGVNZW51J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnVDb250YWluZXJTZWNjaW9uZXMnPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByaW50U2VjdGlvbnMoJ21vYmlsZScsIHRoaXMuc2VjdGlvbnMpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTGluZSc+PC9kaXY+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdGb290ZXItQ2FyZE1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgPENhcmQuSGVhZGVyIGNsYXNzTmFtZT0nRm9vdGVyLUhlYWRlck1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICA8YT5TZXJ2aWNpb3MgPC9hPlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZVxyXG4gICAgICAgICAgICAgIGFzPXtCdXR0b259XHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nbGluaydcclxuICAgICAgICAgICAgICBldmVudEtleT0nMidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1CdXR0b25Nb2JpbGVNZW51J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEljb24gaWNvbj0nY2hldnJvbi1kb3duJyAvPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZVxyXG4gICAgICAgICAgICBldmVudEtleT0nMidcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQ29sbGFwc2VNb2JpbGVNZW51J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0nRm9vdGVyLUJvZHlNb2JpbGVNZW51Jz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnVDb250YWluZXJSZWRlc1NlcnZpY2lvcyc+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL2xvZ2luL1wiPkluaWNpYXIgU2VzacOzbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3N1c2NyaXBjaW9uLWRpZ2l0YWwvXCI+U3VzY3LDrWJldGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMuc2VydmljaW9zfSAvPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTGluZSc+PC9kaXY+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdGb290ZXItQ2FyZE1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgPENhcmQuSGVhZGVyIGNsYXNzTmFtZT0nRm9vdGVyLUhlYWRlck1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICA8YT5SZWQgZGUgcG9ydGFsZXM8L2E+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgYXM9e0J1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PSdsaW5rJ1xyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PScxJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUJ1dHRvbk1vYmlsZU1lbnUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbiBpY29uPSdjaGV2cm9uLWRvd24nIC8+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlXHJcbiAgICAgICAgICAgIGV2ZW50S2V5PScxJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1Db2xsYXBzZU1vYmlsZU1lbnUnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdGb290ZXItQm9keU1vYmlsZU1lbnUnPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lclJlZGVzU2VydmljaW9zJz5cclxuICAgICAgICAgICAgICAgIDxTaXRlTGlua3MgbGlua3NEYXRhPXt0aGlzLnJlZFBvcnRhbGVzfSAvPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTGluZSc+PC9kaXY+XHJcbiAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgKTtcclxuICAgIHJldHVybiBtb2JpbGVDb2RlO1xyXG4gIH07XHJcblxyXG4gIC8vY29kZSBvZiB0aGUgZGVza3RvcCBmb290ZXIgbWVudVxyXG4gIGRlc2t0b3BNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJlbnRybyBhIGRlc2t0b3AgbWVudVwiKTtcclxuICAgIGNvbnN0IGRlc2t0b3BDb2RlID0gKFxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9J0Zvb3Rlci1EZXNrdG9wTWVudSc+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIGxnPXs0fSBtZD17MTJ9IHNtPXsxMn0gY2xhc3NOYW1lPSdGb290ZXItQ29sdW1uRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVRpdGxlc0Rlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgICA8YT5TZWNjaW9uZXM8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdGb290ZXItU2VjdGlvbnNEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgIHt0aGlzLnByaW50U2VjdGlvbnMoJ2Rlc2t0b3AnLCB0aGlzLnNlY3Rpb25zKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBsZz17M30gbWQ9ezR9IHNtPXs0fSBjbGFzc05hbWU9J0Zvb3Rlci1EaXZpc2lvbkRlc2t0b3BNZW51Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1UaXRsZXNEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgICAgPGE+U2VydmljaW9zPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHsvKjxMb2dpblZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgIGxvZ2dlZEluPXt0aGlzLnN0YXRlLmxvZ2dlZElufVxyXG4gICAgICAgICAgICAgICAgaXNTdWJzY3JpcHRvcj17dGhpcy5zdGF0ZS5pc1N1YnNjcmlwdG9yfVxyXG4gICAgICAgICAgICAgICAgbG9naW5MaW5rPXt0aGlzLmxvZ2luTGlua31cclxuICAgICAgICAgICAgICAgIHN1c2NyaWJlTGluaz17dGhpcy5zdXNjcmliZUxpbmt9XHJcbiAgICAgICAgICAgICAgLz4qL31cclxuICAgICAgICAgICAgICA8U2l0ZUxpbmtzIGxpbmtzRGF0YT17dGhpcy5zZXJ2aWNpb3N9IC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgICAgIGNsYXNzTmFtZT0nRm9vdGVyLURpdmlzaW9uRGVza3RvcE1lbnVfcmVkZXMnXHJcbiAgICAgICAgICAgIGxnPXs1fVxyXG4gICAgICAgICAgICBtZD17OH1cclxuICAgICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItVGl0bGVzRGVza3RvcE1lbnUnPlxyXG4gICAgICAgICAgICAgIDxhPlJlZCBkZSBwb3J0YWxlczwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J0Zvb3Rlci1TZWN0aW9uTGlua3NEZXNrdG9wTWVudSc+XHJcbiAgICAgICAgICAgICAgPFNpdGVMaW5rcyBsaW5rc0RhdGE9e3RoaXMucmVkUG9ydGFsZXN9IC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRlc2t0b3BDb2RlO1xyXG4gIH07XHJcblxyXG4gIC8vRGVwZW5kcyBvZiB0aGUgd2luZG93IHdpZHRoLCByZW5kZXIgYSBtZW51IHR5cGVcclxuICBkZWZpbmVNZW51ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9iaWxlTWVudSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVza3RvcE1lbnUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0dldCBzdWJ0eXBlIGZyb20gY29udGV4dFxyXG4gIGdldFN1YnR5cGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5nbG9iYWxDb250ZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmdsb2JhbENvbnRlbnQuc3VidHlwZSA9PT0gJ2NvbHVtbicgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NvbnRyb2wgdGhlIHdpbmRvdyB3aWR0aFxyXG4gICAgdGhpcy5pc01vYmlsZSA9IHRoaXMuc3RhdGUud2lkdGggPCA1NzY7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlcic+XHJcbiAgICAgICAgey8qdGhpcy5nZXRTdWJ0eXBlKCkgIT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgPFBpYW5vU3VzY3JpYmVcclxuICAgICAgICAgICAgcGlhbm9DbGFzcz0ncGlhbm9TdWJzY3JpYmVGb290ZXInXHJcbiAgICAgICAgICAgIHBpYW5vU3ViQ2xhc3M9J1BpYW5vQ29udGFpbmVyX2Zvb3RlcidcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSovfVxyXG4gICAgICAgIHsvL2FsbG93QWRzSW5Cb2R5ICYmIDxBZHMgc2xvdE5hbWU9J291dF9vZl9wYWdlJyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7Ly9hbGxvd0Fkc0luQm9keSAmJiA8QWRzIHNsb3ROYW1lPSdvbmVfeF9vbmUnIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsvL2FsbG93QWRzSW5Cb2R5ICYmIDxTdGlja3lBZCAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nRm9vdGVyLUhlYWRlcic+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezR9IG1kPXs1fSBsZz17Nn0geGw9ezZ9IGNsYXNzTmFtZT0nRm9vdGVyLUxvZ28nPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb1R5cGU9J2Zvb3RlcidcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb1R5cGU9J21vYmlsZUZvb3RlcidcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCAgeHM9ezZ9IHNtPXsxfSBtZD17MX0gbGc9ezF9IHhsPXsxfSBjbGFzc05hbWU9J0Zvb3Rlci1CdXR0b24nPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZWxlc3BlY3RhZG9yLmNvbS9zdXNjcmlwY2lvbi1kaWdpdGFsL1wiPlN1c2Nyw61iZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgeHM9ezR9XHJcbiAgICAgICAgICAgICAgICBzbT17Mn1cclxuICAgICAgICAgICAgICAgIG1kPXsyfVxyXG4gICAgICAgICAgICAgICAgbGc9ezJ9XHJcbiAgICAgICAgICAgICAgICB4bD17Mn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLVRleHRGb2xsb3cnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5Tw61nYW5vcyBlbjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezh9IHNtPXs1fSBtZD17NH0gbGc9ezN9IHhsPXszfSBjbGFzc05hbWU9J0Zvb3Rlci1Tb2NpYWwnPlxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbCBsb2NhdGlvbj0nZm9vdGVyJy8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUxpbmUnPjwvZGl2PlxyXG4gICAgICAgICAge3RoaXMuZGVmaW5lTWVudSgpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1JbmZvJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0Jz5cclxuICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5lbGVzcGVjdGFkb3IuY29tL3NlcnZpY2lvLWFsLWNsaWVudGUvJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdExvZ28nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9jbG91ZGZyb250LXVzLWVhc3QtMS5pbWFnZXMuYXJjcHVibGlzaGluZy5jb20vc2FuZGJveC5lbGVzcGVjdGFkb3IvRE9aRUk2Sk1NQkc3NUFRS1k2NDRRSllPWVEucG5nJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0SW5mbyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RUaXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vc2VydmljaW8tYWwtY2xpZW50ZS8nPkNvbnTDoWN0ZW5vczwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0Zvb3Rlci1Db250YWN0VGV4dCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nRm9vdGVyLUNvbnRhY3RDb2RlJz5cclxuICAgICAgICAgICAgICAgICAgU2VydmljaW8gYWwgY2xpZW50ZTogTMONTkVBIE5BQ0lPTkFMOiAwMSA4MDAwIDUxMDkwMyBFTiBCT0dPVMOBOiA0MDU1NTQwLCA8YSBocmVmPVwibWFpbHRvOnNlcnZpY2lvYWxjbGllbnRlQGVsZXNwZWN0YWRvci5jb21cIj5zZXJ2aWNpb2FsY2xpZW50ZUBlbGVzcGVjdGFkb3IuY29tLjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdF9saW5lJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLU1lbWJlcnMnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItTWVtYmVyc1RpdGxlJz5NaWVtYnJvcyBkZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5pYWJjb2xvbWJpYS5jb20vJ1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICBzcmM9Jy9pYWIucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgYWx0PSdJQUIgQ29sb21iaWEnXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzSWltYWdlcydcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9hbWkub3JnLmNvLydcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICBzcmM9Jy9hbWkucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgYWx0PSdBc29jaWFjacOzbiBDb2xvbWJpYW5hIGRlIE1lZGlvcyBkZSBJbmZvcm1hY2nDs24nXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzSWltYWdlcydcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItQ29udGFjdF9saW5lJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRm9vdGVyLVNpYyc+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LnNpYy5nb3YuY28vJ1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgc3JjPScvc2ljTG9nby5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICBhbHQ9J1N1cGVyaW50ZW5kZW5jaWEgZGUgaW5kdXN0cmlhIHkgY29tZXJjaW8nXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J0Zvb3Rlci1NZW1iZXJzSWltYWdlcydcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdGb290ZXItVHljTGlua3MnPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBFbCB1c28gZGUgZXN0ZSBzaXRpbyB3ZWIgaW1wbGljYSBsYSBhY2VwdGFjacOzbiBkZSBsb3MgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vdGVybWlub3MjdGVybWlub3MteS1jb25kaWNpb25lc1wiPiBUw6lybWlub3MgeSBDb25kaWNpb25lcyA8L2E+IHkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVsZXNwZWN0YWRvci5jb20vdGVybWlub3MjcG9saXRpY2EtZGUtdHJhdGFtaWVudG8tZGUtZGF0b3NcIj4gUG9sw610aWNhcyBkZSBwcml2YWNpZGFkPC9hPiBkZSBDT01VTklDQU4gUy5BLiBUb2RvcyBsb3MgRGVyZWNob3MgUmVzZXJ2YWRvcyBELlIuQS4gUHJvaGliaWRhIHN1IHJlcHJvZHVjY2nDs24gdG90YWwgbyBwYXJjaWFsLCBhc8OtIGNvbW8gc3UgdHJhZHVjY2nDs24gYSBjdWFscXVpZXIgaWRpb21hIHNpbiBsYSBhdXRvcml6YWNpw7NuIGVzY3JpdGEgZGUgc3UgdGl0dWxhci4gUmVwcm9kdWN0aW9uIGluIHdob2xlIG9yIGluIHBhcnQsIG9yIHRyYW5zbGF0aW9uIHdpdGhvdXQgd3JpdHRlbiBwZXJtaXNzaW9uIGlzICBwcm9oaWJpdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkIDIwMjBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==