webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/styles/Header.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./resources/styles/Header.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Header-desktop {\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: justify;\n       justify-content: space-between;\n  margin: 30px 30px 5px;\n}\n.Header-Image {\n  height: 30px;\n}\n.Header-Image_mobile {\n  text-align: center;\n  margin: 20px;\n  display: -moz-box;\n  display: flex;\n}\n.Header-Icon {\n  color: red;\n}\n.Header-burguer {\n  z-index: 1;\n}\n.Header-burgerIcon {\n  height: 33px;\n}\n.Header-burgerIcon_enabled {\n  color: red;\n}\n.Header-burgerIcon_disabled {\n  color: black;\n}\n.Header-Accordion {\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n  opacity: 0.95;\n  font-weight: bold;\n}\n.Header-Accordion_disabled {\n  display: none;\n}\n.Header-AccordionItem {\n  -moz-box-pack: justify;\n       justify-content: space-between;\n  display: -moz-box;\n  display: flex;\n}\n.Header-buttonSection {\n  display: -moz-box;\n  display: flex;\n}\n.Header-LogoMobile {\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n.Header p {\n  margin-bottom: 10px;\n}\n.Header-BodyMobileMenuContainer {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n}\n.Header-BodyMobileMenuContainer li {\n  padding: 10px;\n}\n.Header-BodyMobileMenuContainer a {\n  color: #000;\n}\n.Header-BodyMobileMenuContainer a:hover {\n  text-decoration: none;\n  color: red;\n}\n.Header-text {\n  padding-bottom: 12px;\n}\n.Header-text:not(:disabled):not(.disabled):active, .Header-text:focus, .Header-text:hover {\n  color: #000;\n  background-color: #fff;\n  border: 0;\n  border-bottom: 3px solid red;\n}\n.Header a {\n  color: black;\n  text-decoration: none;\n}", "",{"version":3,"sources":["C:/Users/wtequia/Desktop/paute/resources/styles/Header.scss"],"names":[],"mappings":"AACI;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,qBAAA;AAAN;AAEI;EACG,YAAA;AAAP;AAEI;EACE,kBAAA;EACA,YAAA;EACA,iBAAA;EAAA,aAAA;AAAN;AAEI;EACI,UAAA;AAAR;AAEK;EACA,UAAA;AAAL;AAEK;EACC,YAAA;AAAN;AACM;EACG,UAAA;AACT;AAAI;EACE,YAAA;AAEN;AAAC;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,iBAAA;AAEH;AAAC;EACE,aAAA;AAEH;AACA;EACG,sBAAA;OAAA,8BAAA;EACA,iBAAA;EAAA,aAAA;AACH;AAGI;EACG,iBAAA;EAAA,aAAA;AADP;AAGK;EACD,kBAAA;EACA,QAAA;EACA,OAAA;AADJ;AAGK;EACG,mBAAA;AADR;AAGM;EACG,gBAAA;EACA,UAAA;EACA,gBAAA;AADT;AAES;EACE,aAAA;AAAX;AAES;EACE,WAAA;AAAX;AAES;EACE,qBAAA;EACA,UAAA;AAAX;AAGO;EACE,oBAAA;AADT;AAES;EAGE,WAAA;EACA,sBAAA;EACA,SAAA;EACA,4BAAA;AAFX;AAOM;EACG,YAAA;EACA,qBAAA;AALT","file":"Header.scss","sourcesContent":[".Header{\r\n    &-desktop{\r\n      display: flex;\r\n      justify-content: space-between;\r\n      margin: 30px 30px 5px;\r\n    }\r\n    &-Image {\r\n       height: 30px;\r\n    }\r\n    &-Image_mobile {\r\n      text-align: center;\r\n      margin: 20px;\r\n      display: flex;\r\n   }\r\n    &-Icon {\r\n        color: red;\r\n     }\r\n     &-burguer {\r\n     z-index: 1;\r\n    }\r\n     &-burgerIcon {\r\n      height: 33px;\r\n      &_enabled {\r\n         color: red;}\r\n    &_disabled {\r\n      color: black;}\r\n }\r\n &-Accordion { \r\n   position: absolute;\r\n   width: 100%;\r\n   z-index: 3;\r\n   opacity: 0.95;\r\n   font-weight: bold;\r\n\r\n &_disabled {\r\n   display: none;}\r\n}\r\n\r\n&-AccordionItem{\r\n   justify-content: space-between;\r\n   display: flex;\r\n\r\n\r\n}\r\n    &-buttonSection {\r\n       display: flex;\r\n     }\r\n     &-LogoMobile {\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    }\r\n     p {\r\n        margin-bottom: 10px;\r\n      }\r\n      &-BodyMobileMenuContainer {\r\n         list-style: none;\r\n         padding: 0;\r\n         margin-bottom: 0;\r\n         li {\r\n           padding: 10px;\r\n         }\r\n         a {\r\n           color: #000;\r\n         }\r\n         a:hover {\r\n           text-decoration: none;\r\n           color: red;\r\n         }\r\n       }\r\n       &-text {\r\n         padding-bottom: 12px;\r\n         &:not(:disabled):not(.disabled):active,\r\n         &:focus,\r\n         &:hover {\r\n           color: #000;\r\n           background-color: #fff;\r\n           border: 0;\r\n           border-bottom: 3px solid red;\r\n         }\r\n       \r\n  \r\n      }\r\n      a {\r\n         color: black;\r\n         text-decoration: none;\r\n        \r\n      }\r\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVzb3VyY2VzL3N0eWxlcy9IZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG9CQUFvQixzQkFBc0Isa0JBQWtCLDJCQUEyQix3Q0FBd0MsMEJBQTBCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLHdCQUF3Qix1QkFBdUIsaUJBQWlCLHNCQUFzQixrQkFBa0IsR0FBRyxnQkFBZ0IsZUFBZSxHQUFHLG1CQUFtQixlQUFlLEdBQUcsc0JBQXNCLGlCQUFpQixHQUFHLDhCQUE4QixlQUFlLEdBQUcsK0JBQStCLGlCQUFpQixHQUFHLHFCQUFxQix1QkFBdUIsZ0JBQWdCLGVBQWUsa0JBQWtCLHNCQUFzQixHQUFHLDhCQUE4QixrQkFBa0IsR0FBRyx5QkFBeUIsMkJBQTJCLHdDQUF3QyxzQkFBc0Isa0JBQWtCLEdBQUcseUJBQXlCLHNCQUFzQixrQkFBa0IsR0FBRyxzQkFBc0IsdUJBQXVCLGFBQWEsWUFBWSxHQUFHLGFBQWEsd0JBQXdCLEdBQUcsbUNBQW1DLHFCQUFxQixlQUFlLHFCQUFxQixHQUFHLHNDQUFzQyxrQkFBa0IsR0FBRyxxQ0FBcUMsZ0JBQWdCLEdBQUcsMkNBQTJDLDBCQUEwQixlQUFlLEdBQUcsZ0JBQWdCLHlCQUF5QixHQUFHLDZGQUE2RixnQkFBZ0IsMkJBQTJCLGNBQWMsaUNBQWlDLEdBQUcsYUFBYSxpQkFBaUIsMEJBQTBCLEdBQUcsT0FBTyxrSEFBa0gsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxzREFBc0Qsa0JBQWtCLHdCQUF3Qix5Q0FBeUMsZ0NBQWdDLFNBQVMsaUJBQWlCLHdCQUF3QixTQUFTLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLHdCQUF3QixRQUFRLGdCQUFnQix1QkFBdUIsVUFBVSxvQkFBb0Isb0JBQW9CLFNBQVMsdUJBQXVCLHVCQUF1QixxQkFBcUIseUJBQXlCLG9CQUFvQix3QkFBd0IsTUFBTSxrQkFBa0IsMkJBQTJCLG1CQUFtQixrQkFBa0IscUJBQXFCLHlCQUF5QixxQkFBcUIsc0JBQXNCLEtBQUssd0JBQXdCLHNDQUFzQyxxQkFBcUIsYUFBYSx5QkFBeUIseUJBQXlCLFVBQVUsdUJBQXVCLDJCQUEyQixpQkFBaUIsZ0JBQWdCLFNBQVMsWUFBWSxnQ0FBZ0MsV0FBVyxxQ0FBcUMsOEJBQThCLHdCQUF3Qiw4QkFBOEIsaUJBQWlCLDZCQUE2QixjQUFjLGdCQUFnQiwyQkFBMkIsY0FBYyxzQkFBc0IscUNBQXFDLDBCQUEwQixjQUFjLFlBQVksbUJBQW1CLGtDQUFrQywrRkFBK0YsMkJBQTJCLHNDQUFzQyx5QkFBeUIsNENBQTRDLGNBQWMsNEJBQTRCLGFBQWEsMEJBQTBCLG1DQUFtQyx1QkFBdUIsS0FBSyxHQUFHO0FBQ3ZvSTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYThiMzA0YjM1ZTNlMGY0ZjBiMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5IZWFkZXItZGVza3RvcCB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDMwcHggMzBweCA1cHg7XFxufVxcbi5IZWFkZXItSW1hZ2Uge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uSGVhZGVyLUltYWdlX21vYmlsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5IZWFkZXItSWNvbiB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uSGVhZGVyLWJ1cmd1ZXIge1xcbiAgei1pbmRleDogMTtcXG59XFxuLkhlYWRlci1idXJnZXJJY29uIHtcXG4gIGhlaWdodDogMzNweDtcXG59XFxuLkhlYWRlci1idXJnZXJJY29uX2VuYWJsZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLkhlYWRlci1idXJnZXJJY29uX2Rpc2FibGVkIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLkhlYWRlci1BY2NvcmRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAzO1xcbiAgb3BhY2l0eTogMC45NTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uSGVhZGVyLUFjY29yZGlvbl9kaXNhYmxlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uSGVhZGVyLUFjY29yZGlvbkl0ZW0ge1xcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uSGVhZGVyLWJ1dHRvblNlY3Rpb24ge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uSGVhZGVyLUxvZ29Nb2JpbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uSGVhZGVyIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLkhlYWRlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lciB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5IZWFkZXItQm9keU1vYmlsZU1lbnVDb250YWluZXIgbGkge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLkhlYWRlci1Cb2R5TW9iaWxlTWVudUNvbnRhaW5lciBhIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4uSGVhZGVyLUJvZHlNb2JpbGVNZW51Q29udGFpbmVyIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLkhlYWRlci10ZXh0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG4uSGVhZGVyLXRleHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuSGVhZGVyLXRleHQ6Zm9jdXMsIC5IZWFkZXItdGV4dDpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmVkO1xcbn1cXG4uSGVhZGVyIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy93dGVxdWlhL0Rlc2t0b3AvcGF1dGUvcmVzb3VyY2VzL3N0eWxlcy9IZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDSTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsOEJBQUE7RUFDQSxxQkFBQTtBQUFOO0FBRUk7RUFDRyxZQUFBO0FBQVA7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQUEsYUFBQTtBQUFOO0FBRUk7RUFDSSxVQUFBO0FBQVI7QUFFSztFQUNBLFVBQUE7QUFBTDtBQUVLO0VBQ0MsWUFBQTtBQUFOO0FBQ007RUFDRyxVQUFBO0FBQ1Q7QUFBSTtFQUNFLFlBQUE7QUFFTjtBQUFDO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUVIO0FBQUM7RUFDRSxhQUFBO0FBRUg7QUFDQTtFQUNHLHNCQUFBO09BQUEsOEJBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7QUFDSDtBQUdJO0VBQ0csaUJBQUE7RUFBQSxhQUFBO0FBRFA7QUFHSztFQUNELGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUFESjtBQUdLO0VBQ0csbUJBQUE7QUFEUjtBQUdNO0VBQ0csZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFEVDtBQUVTO0VBQ0UsYUFBQTtBQUFYO0FBRVM7RUFDRSxXQUFBO0FBQVg7QUFFUztFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQUFYO0FBR087RUFDRSxvQkFBQTtBQURUO0FBRVM7RUFHRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUFGWDtBQU9NO0VBQ0csWUFBQTtFQUNBLHFCQUFBO0FBTFRcIixcImZpbGVcIjpcIkhlYWRlci5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5IZWFkZXJ7XFxyXFxuICAgICYtZGVza3RvcHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICBtYXJnaW46IDMwcHggMzBweCA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJi1JbWFnZSB7XFxyXFxuICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAmLUltYWdlX21vYmlsZSB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIH1cXHJcXG4gICAgJi1JY29uIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgICB9XFxyXFxuICAgICAmLWJ1cmd1ZXIge1xcclxcbiAgICAgei1pbmRleDogMTtcXHJcXG4gICAgfVxcclxcbiAgICAgJi1idXJnZXJJY29uIHtcXHJcXG4gICAgICBoZWlnaHQ6IDMzcHg7XFxyXFxuICAgICAgJl9lbmFibGVkIHtcXHJcXG4gICAgICAgICBjb2xvcjogcmVkO31cXHJcXG4gICAgJl9kaXNhYmxlZCB7XFxyXFxuICAgICAgY29sb3I6IGJsYWNrO31cXHJcXG4gfVxcclxcbiAmLUFjY29yZGlvbiB7IFxcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICB6LWluZGV4OiAzO1xcclxcbiAgIG9wYWNpdHk6IDAuOTU7XFxyXFxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICZfZGlzYWJsZWQge1xcclxcbiAgIGRpc3BsYXk6IG5vbmU7fVxcclxcbn1cXHJcXG5cXHJcXG4mLUFjY29yZGlvbkl0ZW17XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcbiAgICAmLWJ1dHRvblNlY3Rpb24ge1xcclxcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgfVxcclxcbiAgICAgJi1Mb2dvTW9iaWxlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAgcCB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmLUJvZHlNb2JpbGVNZW51Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBhOmhvdmVyIHtcXHJcXG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICB9XFxyXFxuICAgICAgICYtdGV4dCB7XFxyXFxuICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxuICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXFxyXFxuICAgICAgICAgJjpmb2N1cyxcXHJcXG4gICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICBcXHJcXG4gIFxcclxcbiAgICAgIH1cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgfVxcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9