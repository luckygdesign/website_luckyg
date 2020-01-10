webpackHotUpdate("static/development/pages/impressum.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/analytics */ "./components/utils/analytics.tsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lukasgrossmann/Data/luckyg/GIT/website_luckyg/components/layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_1__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_1__["logPageView"])();
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.children);
  }

}

/***/ })

})
//# sourceMappingURL=impressum.js.cf049a82e76941bf107c.hot-update.js.map