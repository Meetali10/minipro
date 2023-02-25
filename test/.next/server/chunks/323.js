exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 9323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2235);
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4488);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_login_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9945);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6367);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Home__WEBPACK_IMPORTED_MODULE_5__]);
_Home__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function Login() {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const inputChangeHandler = e => {
    const value = e.target.value;
    setEmail(e.target.value);

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(value)) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().body),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("title", {
      children: "Login"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: [(_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().formcontainer), (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().logcontainer)].join(" "),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),
          action: "/api/loginmdb",
          method: "post",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().diffh1),
            children: "Login"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().span),
            children: "and start the fun!"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().input),
            type: "email",
            name: "email",
            id: "email",
            placeholder: "Email",
            value: email,
            onChange: inputChangeHandler
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().input),
            type: "password",
            name: "password",
            placeholder: "Password"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
            type: "submit",
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/Home",
              children: "Log In"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().p),
            children: ["Dont have an account?", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/Signup",
              children: "Sign up"
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().overlaycontainer),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().overlay),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: [(_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().overlaypanel), (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().overlayright)].join(" "),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
              className: (_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().h1),
              children: " Login Form"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              style: {
                height: '150px',
                width: '150px',
                marginLeft: '19%'
              }
            })]
          })
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2235:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "login_body___Vlie",
	"h1": "login_h1__jV_Mg",
	"diffh1": "login_diffh1__wmbOc",
	"p": "login_p__Wp834",
	"span": "login_span__PBVXT",
	"a": "login_a__QJZ32",
	"button": "login_button__VF_3Q",
	"form": "login_form__bMXal",
	"input": "login_input__lsj3C",
	"container": "login_container__y2rQ9",
	"formcontainer": "login_formcontainer__G8xQj",
	"logcontainer": "login_logcontainer__EOxMh",
	"overlaycontainer": "login_overlaycontainer__sNv6M",
	"overlay": "login_overlay__jUlK5",
	"overlaypanel": "login_overlaypanel__5l2Zx",
	"overlayright": "login_overlayright__RLXOG",
	"socialcontainer": "login_socialcontainer__VV6wq"
};


/***/ }),

/***/ 9945:
/***/ (() => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/login.273d2633.png","height":128,"width":128,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYUlEQVR42j2MMQ5AQBRE9yT0Sokj0dBS0wo2IpxBxMa5BFd47N/IVm/yJjNKKXIMIwuag9QKJkILSRFaEFPSOZHQKmpObl5WqWxBw8VjxfYLhwrtJ+408KeDoGBHM9NjyD5yn0WZaPLlJwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 10:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(113)


/***/ })

};
;