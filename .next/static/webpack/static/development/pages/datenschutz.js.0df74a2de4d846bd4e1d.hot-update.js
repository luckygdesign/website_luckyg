webpackHotUpdate("static/development/pages/datenschutz.js",{

/***/ "./pages/datenschutz.tsx":
/*!*******************************!*\
  !*** ./pages/datenschutz.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/text */ "./components/text/index.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
var _jsxFileName = "/Users/lukasgrossmann/Data/luckyg/GIT/website_luckyg/pages/datenschutz.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = () => {
  const {
    0: lang,
    1: setLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('de');
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "App datenschutz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("section", {
    id: "eyecatcher",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("section", {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "language-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("button", {
    id: "#en",
    onClick: () => setLang('en'),
    className: lang === "en" ? 'active' : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "English"), __jsx("button", {
    id: "de",
    onClick: () => setLang('de'),
    className: lang === "de" ? 'active' : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Deutsch")), lang === "de" ? __jsx(_components_text__WEBPACK_IMPORTED_MODULE_1__["DatenschutzDe"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }) : __jsx(_components_text__WEBPACK_IMPORTED_MODULE_1__["DatenschutzEn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=datenschutz.js.0df74a2de4d846bd4e1d.hot-update.js.map