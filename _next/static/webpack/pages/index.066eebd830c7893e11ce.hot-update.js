webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Index/indexForm.jsx":
/*!****************************************!*\
  !*** ./components/Index/indexForm.jsx ***!
  \****************************************/
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
/* harmony import */ var _core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/Button/default.jsx */ "./components/core/Button/default.jsx");
/* harmony import */ var _properties_index_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../properties/index.json */ "./properties/index.json");
var _properties_index_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../properties/index.json */ "./properties/index.json", 1);







var _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\components\\Index\\indexForm.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var IndexForm = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexForm, _React$Component);

  var _super = _createSuper(IndexForm);

  function IndexForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexForm);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.changeMessage();

      var urlIP = 'https://api.ipify.org?format=jsonp?callback=?';
      fetch(urlIP, {
        method: 'GET'
      }).then(function (res) {
        return res.text();
      }).then(function (ip) {
        var form_data = Object.assign({}, _this.state.form_data);
        form_data['ip_cliente'] = ip;

        _this.setState({
          form_data: form_data
        });

        _this.authentication();
      })["catch"](_this.setState({
        error: true
      }));
    });

    _this.state = {
      show: false,
      form_data: {
        name: "",
        phone: "",
        email: "",
        comments: "",
        ip_cliente: "",
        destination: 2
      }
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.sendData = _this.sendData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.changeMessage = _this.changeMessage.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  } //function that updates the status with the form data


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var form_data = Object.assign({}, this.state.form_data);
      var name = event.target.name;
      form_data[name] = event.target.value;
      this.setState({
        form_data: form_data
      });
    }
  }, {
    key: "sendData",
    value: function sendData(token) {
      var url = "".concat(_properties_index_json__WEBPACK_IMPORTED_MODULE_11__.NewsLetter.server, "/save_email");
      fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state.form_data),
        headers: {
          "Content-Type": "application/json",
          "access-token": token
        }
      }).then(function (res) {
        return res.json();
      })["catch"](this.setState({
        error: true
      }));
    }
  }, {
    key: "authentication",
    value: function authentication() {
      var _this2 = this;

      var url = "".concat(_properties_index_json__WEBPACK_IMPORTED_MODULE_11__.NewsLetter.server, "/auth");
      var formData = new URLSearchParams();
      formData.append("user", _properties_index_json__WEBPACK_IMPORTED_MODULE_11__.NewsLetter.user);
      formData.append("password", _properties_index_json__WEBPACK_IMPORTED_MODULE_11__.NewsLetter.password);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString(),
        json: true
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (Object.keys(data).includes("token")) {
          _this2.sendData(data.token);
        }
      })["catch"]();
    } //function that sends the email entered to a service to insert into the database.

  }, {
    key: "changeMessage",
    value: function changeMessage() {
      var actualState = this.state.show;
      this.setState({
        show: !actualState
      });
    }
  }, {
    key: "render",
    value: function render() {
      // the rest is the same...
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "AdvertisingForm-formColumn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Index-formInput",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 19
        }
      }, "Nombre*"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        className: "Index-formInputText",
        type: "text",
        name: "name",
        id: "name",
        required: true,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Index-formInput",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 19
        }
      }, "Compa\xF1ia"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        className: "Index-formInputText",
        type: "text",
        name: "company",
        id: "company",
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Index-formInput",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 19
        }
      }, "Tel\xE9fono*"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        className: "Index-formInputText",
        type: "number",
        name: "phone",
        id: "phone",
        required: true,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 19
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Index-formInput",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 19
        }
      }, "Email*"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        className: "Index-formInputText",
        type: "email",
        name: "email",
        id: "email",
        required: true,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 19
        }
      })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Index-formInput",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 17
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 19
        }
      }, "Mensaje"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        as: "textarea",
        rows: "3",
        name: "comments",
        id: "comments",
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 19
        }
      })))), __jsx("div", {
        className: this.state.show ? 'Index-showMessage' : 'Index-hideMessage',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 14
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 19
        }
      }, "Formulario enviado"), __jsx(_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        theme: "Button_form",
        click: this.changeMessage,
        content: "Regresar al formulario",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 19
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 15
        }
      }, __jsx(_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "submit",
        theme: "Button-form",
        content: "ENVIAR",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "Text Index-formButtonSection",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 17
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 19
        }
      }, __jsx("a", {
        href: "/pauta-digital",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }
      }, "Pol\xEDticas de Pauta Digital*")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 19
        }
      }, __jsx("a", {
        href: "/pauta-impresa",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }
      }, "Pol\xEDticas de Pauta Impresa*"))))))));
    }
  }]);

  return IndexForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmRleC9pbmRleEZvcm0uanN4Il0sIm5hbWVzIjpbIkluZGV4Rm9ybSIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlTWVzc2FnZSIsInVybElQIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwidGV4dCIsImlwIiwiZm9ybV9kYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhdGUiLCJzZXRTdGF0ZSIsImF1dGhlbnRpY2F0aW9uIiwiZXJyb3IiLCJzaG93IiwibmFtZSIsInBob25lIiwiZW1haWwiLCJjb21tZW50cyIsImlwX2NsaWVudGUiLCJkZXN0aW5hdGlvbiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsInNlbmREYXRhIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRva2VuIiwidXJsIiwic2l0ZVByb3BlcnRpZXMiLCJOZXdzTGV0dGVyIiwic2VydmVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsImZvcm1EYXRhIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwidXNlciIsInBhc3N3b3JkIiwidG9TdHJpbmciLCJkYXRhIiwia2V5cyIsImluY2x1ZGVzIiwiYWN0dWFsU3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsdU5BeUVKLFVBQUNDLENBQUQsRUFBTztBQUNwQkEsT0FBQyxDQUFDQyxjQUFGOztBQUNBLFlBQUtDLGFBQUw7O0FBQ0EsVUFBTUMsS0FBSyxHQUFHLCtDQUFkO0FBQ0FDLFdBQUssQ0FBQ0QsS0FBRCxFQUFR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O0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsQ0FKRixDQURGLENBUkYsQ0E5RkYsQ0FGRixDQURGLENBREY7QUF5SEQ7Ozs7RUEzTnFCaUQsNENBQUssQ0FBQ0MsUzs7QUE4TmZ0RCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNjZlZWJkODMwYzc4OTNlMTFjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbCwgUm93LCBGb3JtIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vY29yZS9JY29uL2RlZmF1bHQuanN4XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvcmUvQnV0dG9uL2RlZmF1bHQuanN4XCI7XHJcbmltcG9ydCBzaXRlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vcHJvcGVydGllcy9pbmRleC5qc29uXCI7XHJcblxyXG5jbGFzcyBJbmRleEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgZm9ybV9kYXRhOiB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBwaG9uZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBjb21tZW50czogXCJcIixcclxuICAgICAgICBpcF9jbGllbnRlOiBcIlwiLFxyXG4gICAgICAgIGRlc3RpbmF0aW9uOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZW5kRGF0YSA9IHRoaXMuc2VuZERhdGEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2hhbmdlTWVzc2FnZSA9IHRoaXMuY2hhbmdlTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy9mdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHN0YXR1cyB3aXRoIHRoZSBmb3JtIGRhdGFcclxuXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgY29uc3QgZm9ybV9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5mb3JtX2RhdGEpO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuXHJcbiAgICBmb3JtX2RhdGFbbmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1fZGF0YSB9KTtcclxuICBcclxuICB9XHJcblxyXG4gIHNlbmREYXRhKHRva2VuKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtzaXRlUHJvcGVydGllcy5OZXdzTGV0dGVyLnNlcnZlcn0vc2F2ZV9lbWFpbGA7XHJcblxyXG4gICAgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZm9ybV9kYXRhKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiYWNjZXNzLXRva2VuXCI6IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KSk7XHJcbiAgfVxyXG5cclxuICBhdXRoZW50aWNhdGlvbigpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3NpdGVQcm9wZXJ0aWVzLk5ld3NMZXR0ZXIuc2VydmVyfS9hdXRoYDtcclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJcIiwgc2l0ZVByb3BlcnRpZXMuTmV3c0xldHRlci51c2VyKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInBhc3N3b3JkXCIsIHNpdGVQcm9wZXJ0aWVzLk5ld3NMZXR0ZXIucGFzc3dvcmQpO1xyXG5cclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogZm9ybURhdGEudG9TdHJpbmcoKSxcclxuICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKFwidG9rZW5cIikpIHtcclxuICAgICAgICAgIHRoaXMuc2VuZERhdGEoZGF0YS50b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goLyp0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUgfSkqLyk7XHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9uIHRoYXQgc2VuZHMgdGhlIGVtYWlsIGVudGVyZWQgdG8gYSBzZXJ2aWNlIHRvIGluc2VydCBpbnRvIHRoZSBkYXRhYmFzZS5cclxuICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jaGFuZ2VNZXNzYWdlKCk7XHJcbiAgICBjb25zdCB1cmxJUCA9ICdodHRwczovL2FwaS5pcGlmeS5vcmc/Zm9ybWF0PWpzb25wP2NhbGxiYWNrPT8nO1xyXG4gICAgZmV0Y2godXJsSVAsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAudGhlbihpcCA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybV9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5mb3JtX2RhdGEpO1xyXG4gICAgICAgIGZvcm1fZGF0YVsnaXBfY2xpZW50ZSddID0gaXA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1fZGF0YSB9KTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCh0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNoYW5nZU1lc3NhZ2UoKSB7XHJcbiAgICBjb25zdCBhY3R1YWxTdGF0ZSA9IHRoaXMuc3RhdGUuc2hvdztcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiAhYWN0dWFsU3RhdGUgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyB0aGUgcmVzdCBpcyB0aGUgc2FtZS4uLlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBZHZlcnRpc2luZ0Zvcm0tZm9ybUNvbHVtblwiPjwvZGl2PlxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXs2fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW5kZXgtZm9ybUlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCA+IFxyXG4gICAgICAgICAgICAgICAgICBOb21icmUqXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJJbmRleC1mb3JtSW5wdXRUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmRleC1mb3JtSW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsID4gXHJcbiAgICAgICAgICAgICAgICAgIENvbXBhw7FpYVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSW5kZXgtZm9ybUlucHV0VGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbXBhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmRleC1mb3JtSW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPiBcclxuICAgICAgICAgICAgICAgICAgVGVsw6lmb25vKlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSW5kZXgtZm9ybUlucHV0VGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZGV4LWZvcm1JbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgPiBcclxuICAgICAgICAgICAgICAgICAgRW1haWwqXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJJbmRleC1mb3JtSW5wdXRUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmRleC1mb3JtSW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsID5cclxuICAgICAgICAgICAgICAgICAgTWVuc2FqZVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIHs8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICA/ICdJbmRleC1zaG93TWVzc2FnZSdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJ0luZGV4LWhpZGVNZXNzYWdlJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkZvcm11bGFyaW8gZW52aWFkbzwvcD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPSdCdXR0b25fZm9ybSdcclxuICAgICAgICAgICAgICAgICAgICBjbGljaz17dGhpcy5jaGFuZ2VNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1JlZ3Jlc2FyIGFsIGZvcm11bGFyaW8nXHJcbiAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIHRoZW1lPVwiQnV0dG9uLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwiRU5WSUFSXCJcclxuICAgICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXs4fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dCBJbmRleC1mb3JtQnV0dG9uU2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGF1dGEtZGlnaXRhbFwiPlBvbMOtdGljYXMgZGUgUGF1dGEgRGlnaXRhbCo8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGF1dGEtaW1wcmVzYVwiPlBvbMOtdGljYXMgZGUgUGF1dGEgSW1wcmVzYSo8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=