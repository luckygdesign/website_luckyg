webpackHotUpdate("static/development/pages/impressum.js",{

/***/ "./pages/impressum.tsx":
/*!*****************************!*\
  !*** ./pages/impressum.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/text */ "./components/text/index.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
var _jsxFileName = "/Users/lukasgrossmann/Data/luckyg/GIT/website_luckyg/pages/impressum.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = () => {
  const {
    0: lang,
    1: setLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('de');
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "App impressum",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("section", {
    id: "eyecatcher",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), __jsx("section", {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "language-switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("button", {
    id: "#en",
    onClick: () => setLang('en'),
    className: lang === "en" ? 'active' : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "English"), __jsx("button", {
    id: "de",
    onClick: () => setLang('de'),
    className: lang === "de" ? 'active' : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Deutsch")), lang === "de" ? __jsx(_components_text__WEBPACK_IMPORTED_MODULE_1__["ImpressumDe"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }) : __jsx(_components_text__WEBPACK_IMPORTED_MODULE_1__["ImpressumEn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=impressum.js.366e2a510cef4d8eeeab.hot-update.js.map