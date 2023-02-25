"use strict";
(() => {
var exports = {};
exports.id = 213;
exports.ids = [213];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8433:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _mongoose = _interopRequireDefault(__webpack_require__(1185));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose.default.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
module.exports = _mongoose.default.models.User || _mongoose.default.model('User', userSchema);

/***/ }),

/***/ 1171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function connect() {
  if (connection.isConnected) {
    return;
  }

  const db = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
  connection.isConnected = db.connections[0].readySate;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);

/***/ }),

/***/ 2016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1171);
/* harmony import */ var _lib_model_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8433);
/* harmony import */ var _lib_model_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_model_schema__WEBPACK_IMPORTED_MODULE_1__);


(0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
async function handler(req, res) {
  const {
    email,
    password
  } = req.body;
  const user = await _lib_model_schema__WEBPACK_IMPORTED_MODULE_1___default().findOne({
    email,
    password
  });

  if (!user) {
    return res.json({
      status: 'Not able to find the user'
    });
  } else {
    res.redirect('/Home');
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2016));
module.exports = __webpack_exports__;

})();