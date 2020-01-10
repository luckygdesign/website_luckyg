webpackHotUpdate("static/development/pages/impressum.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/lukasgrossmann/Data/luckyg/GIT/website_luckyg/components/footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  return __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer-company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("span", {
    className: "company-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "LUCKYG.DESIGN"), __jsx("span", {
    className: "company-owner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Inhaber: Lukas Gro\xDFmann"), __jsx("span", {
    className: "company-addres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Schanzstra\xDFe 35, 75446 Wiernsheim, GERMANY")), __jsx("div", {
    className: "footer-legal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/datenschutz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Datenschutzerkl\xE4rung")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/impressum",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Impressum")), __jsx("span", {
    className: "legal-credits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Layout&Design: Lukas Gro\xDFmann"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

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
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.tsx");
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
      className: this.props.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  }

}

/***/ })

})
//# sourceMappingURL=impressum.js.5554cc2ca2288af7f95d.hot-update.js.map