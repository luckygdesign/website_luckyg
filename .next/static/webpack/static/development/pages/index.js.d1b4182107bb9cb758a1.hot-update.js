webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/contactform.tsx":
/*!************************************!*\
  !*** ./components/contactform.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/Users/lukasgrossmann/Data/luckyg/GIT/website_luckyg/components/contactform.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


class Contactform extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "state", {
      status: 'default',
      statusMessage: '',
      data: {
        name: '',
        email: '',
        message: '',
        confirm: false
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "submit", e => {
      e.preventDefault();

      if (!this.state.data.confirm) {
        this.setState({
          statusMessage: 'bitte bestätigen Sie die Datenschutzerklärung',
          status: 'form-pending'
        });
        return;
      }

      this.setState({
        statusMessage: 'Email wird gesendet, bitte warten',
        status: 'form-sending'
      });
      let {
        data: {
          name,
          email,
          message
        }
      } = this.state;
      fetch('https://us-central1-handle-fcb54.cloudfunctions.net/addMessage', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
          name: name,
          email: email,
          message: message,
          project: 'luckyg'
        })
      }).then(res => {
        if (!res.ok) {
          throw Error(res.toString());
        }

        return res;
      }).then(res => {
        this.setState({
          statusMessage: 'Email wurde erfolgreich gesendet',
          status: 'form-success'
        });
      }).catch(err => {
        this.setState({
          statusMessage: 'Email konnte nicht versendet werden',
          status: 'form-failed'
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleChange", ({
      target: {
        name,
        value
      }
    }) => {
      this.setState(state => ({
        data: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.data, {
          [name]: value
        })
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toggleDatenschutz", ({
      target: {
        checked
      }
    }) => {
      this.setState(state => ({
        data: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state.data, {
          confirm: checked
        })
      }));
    });
  }

  render() {
    let {
      data
    } = this.state;
    return __jsx("form", {
      id: "ContactForm",
      action: "https://us-central1-handle-fcb54.cloudfunctions.net/addMessage",
      onSubmit: this.submit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Name"), __jsx("input", {
      type: "text",
      name: "name",
      required: true,
      placeholder: "Vorname Nachname",
      value: data.name,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), __jsx("div", {
      className: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Email"), __jsx("input", {
      type: "email",
      name: "email",
      required: true,
      placeholder: "ich@example.de",
      value: data.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    })), __jsx("div", {
      className: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Message"), __jsx("textarea", {
      name: "message",
      required: true,
      placeholder: "Hallo...",
      rows: 7,
      value: data.message,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })), __jsx("div", {
      className: "small dsgvo-confirm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("input", {
      type: "checkbox",
      name: "confirm",
      required: true,
      placeholder: "i",
      onChange: this.toggleDatenschutz,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), __jsx("label", {
      lang: "de",
      htmlFor: "confirm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Ich habe die ", __jsx("a", {
      href: "/datenschutz",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Datenschutzerkl\xE4rung"), " zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden. Hinweis: Sie k\xF6nnen Ihre Einwilligung jederzeit f\xFCr die Zukunft per E-Mail an ", __jsx("a", {
      href: "lukas@luckyg.de",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "lukas@luckyg.de"), " widerrufen.")), __jsx("div", {
      className: "big contact-buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("button", {
      className: "button",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "Absenden")), __jsx("div", {
      className: "big formstatus ".concat(this.state.status),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, this.state.statusMessage)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contactform);

/***/ })

})
//# sourceMappingURL=index.js.d1b4182107bb9cb758a1.hot-update.js.map