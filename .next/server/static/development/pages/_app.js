module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_store_createStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store/createStore */ "./src/store/createStore.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "../static/favicon.ico"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps({
                  ctx: ctx
                });

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_src_store_createStore__WEBPACK_IMPORTED_MODULE_6__["initStore"], {
  serializeState: function serializeState(state) {
    return state.toJS();
  },
  deserializeState: function deserializeState(state) {
    return Object(immutable__WEBPACK_IMPORTED_MODULE_8__["fromJS"])(state);
  }
})(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()({
  async: true
})(MyApp)));

/***/ }),

/***/ "./src/actions/auth.js":
/*!*****************************!*\
  !*** ./src/actions/auth.js ***!
  \*****************************/
/*! exports provided: registerRequest, loginRequest, resetCountnotifiRequest, setCountnotifi, resetCountNotifi, logoutRequest, setClient, getCurrentUserRequest, setCurrentUser, unsetClient, establishCurrentUser, updateAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRequest", function() { return registerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCountnotifiRequest", function() { return resetCountnotifiRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountnotifi", function() { return setCountnotifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCountNotifi", function() { return resetCountNotifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequest", function() { return logoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClient", function() { return setClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUserRequest", function() { return getCurrentUserRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetClient", function() { return unsetClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "establishCurrentUser", function() { return establishCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAvatar", function() { return updateAvatar; });
/* harmony import */ var _constants_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/auth */ "./src/constants/auth.js");
 // there's literally no reason these are in a different
// format from the other component actions other than
// that I just lost track

var registerRequest = function registerRequest(data, resolve, reject) {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["REGISTER_REQUESTING"],
    data: data,
    resolve: resolve,
    reject: reject
  };
};
var loginRequest = function loginRequest(_ref, resolve, reject) {
  var username = _ref.username,
      password = _ref.password;
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUESTING"],
    username: username,
    password: password,
    resolve: resolve,
    reject: reject
  };
};
function resetCountnotifiRequest() {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["RESET_COUNT_NOTIFI_REQUEST"]
  };
}
function setCountnotifi() {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["SET_COUNT_NOTIFI"]
  };
}
function resetCountNotifi() {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["RESET_COUNT_NOTIFI"]
  };
}
var logoutRequest = function logoutRequest() {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_REQUEST"]
  };
};
function setClient(token) {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["CLIENT_SET"],
    token: token
  };
}
function getCurrentUserRequest() {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["GET_CURRENT_USER_REQUEST"]
  };
}
function setCurrentUser(user) {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"],
    user: user
  };
}
function unsetClient() {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["CLIENT_UNSET"]
  };
}
var establishCurrentUser = function establishCurrentUser() {
  return function (dispatch) {
    return new Promise(function (resolve) {
      var tokenFromCookie = Cookies.getJSON("myToken");

      if (tokenFromCookie) {
        dispatch(setClient(tokenFromCookie));
        resolve(tokenFromCookie);
      } else {
        resolve({});
      }
    });
  };
};
function updateAvatar(data) {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__["UPDATE_AVATAR"],
    data: data
  };
}

/***/ }),

/***/ "./src/components/Layout/components/InputSearch.js":
/*!*********************************************************!*\
  !*** ./src/components/Layout/components/InputSearch.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputSearch; });
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search;

var InputSearch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputSearch, _React$Component);

  function InputSearch() {
    _classCallCheck(this, InputSearch);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputSearch).apply(this, arguments));
  }

  _createClass(InputSearch, [{
    key: "render",
    value: function render() {
      var _ref;

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Search, {
        placeholder: "T\xECm ki\u1EBFm trong \u0111\xE2y",
        onSearch: function onSearch(value) {
          return console.log(value);
        },
        className: "input-search-custom",
        style: (_ref = {
          background: "#f1f3f4"
        }, _defineProperty(_ref, "background", "#f1f3f4"), _defineProperty(_ref, "border", "1px solid transparent"), _defineProperty(_ref, "WebkitBorderRadius", "8px"), _defineProperty(_ref, "borderRadius", "8px"), _defineProperty(_ref, "maxWidth", "663px"), _defineProperty(_ref, "position", "relative"), _defineProperty(_ref, "WebkitTransition", "background 100ms ease-in,width 100ms ease-out"), _defineProperty(_ref, "transition", " background 100ms ease-in,width 100ms ease-out"), _ref)
      });
    }
  }]);

  return InputSearch;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style */ "antd/lib/popover/style");
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/badge/style */ "antd/lib/badge/style");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/badge */ "antd/lib/badge");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/avatar/style */ "antd/lib/avatar/style");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./src/components/Layout/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions/auth */ "./src/actions/auth.js");
/* harmony import */ var _components_InputSearch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/InputSearch */ "./src/components/Layout/components/InputSearch.js");













function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a.Header,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a.Sider,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a.Footer;
var dataMenu = [{
  path: "/",
  menuName: "Trang chủ",
  icon: "home"
}, {
  path: "/employee",
  menuName: "Nhân viên",
  icon: "team"
}, {
  path: "/detection",
  menuName: "Nhận diện khuôn mặt",
  icon: "eye"
}, {
  path: "/tracking",
  menuName: "Giám sát",
  icon: "deployment-unit"
}, // {
//   path: "/train",
//   menuName: "Đào tạo ",
//   icon: "deployment-unit"
// },
{
  path: "/account",
  menuName: "Thông tin cá nhân",
  icon: "profile"
}, {
  path: "/sercurity",
  menuName: "Bảo mật",
  icon: "lock"
}];
var text = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9___default.a, {
  size: 64,
  style: {
    marginRight: "10px",
    cursor: "pointer"
  },
  src: "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p160x160/60593297_1017753475089748_7729311351624957952_n.jpg?_nc_cat=105&_nc_oc=AQkfihUvAE4yJAaZSxsM8R7HVIErbPHPzWaf5mQMiBJsgK1dxAxsNNjMjd03S7IWfhs&_nc_ht=scontent.fhan5-6.fna&oh=7b732a62514bb8bb918d97fa730bc41e&oe=5D5C2D06"
}), "Tr\u1ECBnh \u0110\u1EE9c B\u1EA3o Linh");

var MenuAccount =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MenuAccount, _React$PureComponent);

  function MenuAccount() {
    _classCallCheck(this, MenuAccount);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuAccount).apply(this, arguments));
  }

  _createClass(MenuAccount, [{
    key: "render",
    value: function render() {
      var _this$props$logoutReq = this.props.logoutRequest,
          logoutRequest = _this$props$logoutReq === void 0 ? function () {} : _this$props$logoutReq;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "info-circle"
      }), " Th\xF4ng tin c\xE1 nh\xE2n"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "unlock"
      }), " Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        onClick: logoutRequest,
        key: "3"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "logout"
      }), " \u0110\u0103ng xu\xE2t"));
    }
  }]);

  return MenuAccount;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.PureComponent);

MenuAccount = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(null, {
  logoutRequest: _actions_auth__WEBPACK_IMPORTED_MODULE_17__["logoutRequest"]
})(MenuAccount);

var LayoutWeb =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayoutWeb, _React$Component);

  function LayoutWeb() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LayoutWeb);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LayoutWeb)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      collapsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    _defineProperty(_assertThisInitialized(_this), "redirectPage", function (url) {
      next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push(url);
    });

    return _this;
  }

  _createClass(LayoutWeb, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getCurrentUserRequest();
    }
  }, {
    key: "render",
    value: function render() {
      var auth = this.props.auth;
      if (auth.isAuthenticated) return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "layout-web"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Sider, {
        trigger: null,
        collapsible: true,
        collapsed: this.state.collapsed
      }, !this.state.collapsed ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
        className: "logo" // style={{ width: "50px" }}
        // src="https://miro.medium.com/max/1400/1*3Q2EzYMZVBEKbY0gkd5oeg.jpeg"
        ,
        src: "https://giaohangtietkiem.vn/wp-content/themes/giaohangtk/images/logo.png"
      }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          width: "50px"
        },
        className: "logo"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
        theme: "dark",
        mode: "inline",
        defaultSelectedKeys: ["0"]
      }, dataMenu.map(function (menu, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
          type: menu.icon
        }), " ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, " ", menu.menuName, " "), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
          href: menu.path
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", null)));
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Header, {
        style: {
          background: "#fff",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "22px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "trigger",
        type: this.state.collapsed ? "menu-unfold" : "menu-fold",
        onClick: this.toggle
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_InputSearch__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_3___default.a, {
        offset: 15,
        count: 5
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          fontSize: "24px",
          marginRight: "5px"
        },
        type: "bell"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
        placement: "bottomRight",
        title: text,
        content: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(MenuAccount, null),
        trigger: "click"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        style: {
          marginLeft: "10px",
          cursor: "pointer"
        },
        src: "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p160x160/60593297_1017753475089748_7729311351624957952_n.jpg?_nc_cat=105&_nc_oc=AQkfihUvAE4yJAaZSxsM8R7HVIErbPHPzWaf5mQMiBJsgK1dxAxsNNjMjd03S7IWfhs&_nc_ht=scontent.fhan5-6.fna&oh=7b732a62514bb8bb918d97fa730bc41e&oe=5D5C2D06"
      })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Content, {
        style: {
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280
        }
      }, this.props.children))));
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: {
          background: "white"
        },
        className: "layout"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Header, {
        className: "header-customs"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
        className: "logo",
        src: "https://giaohangtietkiem.vn/wp-content/themes/giaohangtk/images/logo.png"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Content, {
        style: {
          padding: "0 50px"
        }
      }, this.props.children));
    }
  }]);

  return LayoutWeb;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.getIn(["auth"])
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, {
  getCurrentUserRequest: _actions_auth__WEBPACK_IMPORTED_MODULE_17__["getCurrentUserRequest"]
})(LayoutWeb));

/***/ }),

/***/ "./src/components/Layout/index.less":
/*!******************************************!*\
  !*** ./src/components/Layout/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/constants/auth.js":
/*!*******************************!*\
  !*** ./src/constants/auth.js ***!
  \*******************************/
/*! exports provided: ADD_LINK, ADD_LINK_REQUEST, ADD_LINK_SUCCESS, ADD_LINK_FAILURE, GET_TOP_LINK, GET_TOP_LINK_REQUEST, GET_TOP_LINK_SUCCESS, GET_TOP_LINK_FAILURE, CLIENT_SET, CLIENT_UNSET, LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_EXISTING, LOGOUT, UPDATE_AVATAR, REGISTER_REQUESTING, REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_EXISTING, LOAD_TAGS, COMPLETE_LOAD_TAGS, LOGOUT_REQUEST, SET_CURRENT_USER, GET_CURRENT_USER_REQUEST, RESET_COUNT_NOTIFI_REQUEST, RESET_COUNT_NOTIFI, SET_COUNT_NOTIFI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LINK", function() { return ADD_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LINK_REQUEST", function() { return ADD_LINK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LINK_SUCCESS", function() { return ADD_LINK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LINK_FAILURE", function() { return ADD_LINK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TOP_LINK", function() { return GET_TOP_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TOP_LINK_REQUEST", function() { return GET_TOP_LINK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TOP_LINK_SUCCESS", function() { return GET_TOP_LINK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TOP_LINK_FAILURE", function() { return GET_TOP_LINK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_SET", function() { return CLIENT_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_UNSET", function() { return CLIENT_UNSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUESTING", function() { return LOGIN_REQUESTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_EXISTING", function() { return LOGIN_EXISTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AVATAR", function() { return UPDATE_AVATAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUESTING", function() { return REGISTER_REQUESTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_ERROR", function() { return REGISTER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_EXISTING", function() { return REGISTER_EXISTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_TAGS", function() { return LOAD_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLETE_LOAD_TAGS", function() { return COMPLETE_LOAD_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_USER_REQUEST", function() { return GET_CURRENT_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_COUNT_NOTIFI_REQUEST", function() { return RESET_COUNT_NOTIFI_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_COUNT_NOTIFI", function() { return RESET_COUNT_NOTIFI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT_NOTIFI", function() { return SET_COUNT_NOTIFI; });
//generate short link
var ADD_LINK = "ADD_LINK";
var ADD_LINK_REQUEST = "ADD_LINK_REQUEST";
var ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS";
var ADD_LINK_FAILURE = "ADD_LINK_FAILURE"; //get top 10 link access

var GET_TOP_LINK = "GET_TOP_LINK";
var GET_TOP_LINK_REQUEST = "GET_TOP_LINK_REQUEST";
var GET_TOP_LINK_SUCCESS = "GET_TOP_LINK_SUCCESS";
var GET_TOP_LINK_FAILURE = "GET_TOP_LINK_FAILURE"; //auth

var CLIENT_SET = "CLIENT_SET";
var CLIENT_UNSET = "CLIENT_UNSET";
var LOGIN_REQUESTING = "LOGIN_REQUESTING";
var LOGIN_SUCCESS = "LOGIN_SUCCESS";
var LOGIN_ERROR = "LOGIN_ERROR";
var LOGIN_EXISTING = "LOGIN_EXISTING";
var LOGOUT = "LOGOUT";
var UPDATE_AVATAR = "UPDATE_AVATAR";
var REGISTER_REQUESTING = "REGISTER_REQUESTING";
var REGISTER_SUCCESS = "REGISTER_SUCCESS";
var REGISTER_ERROR = "REGISTER_ERROR";
var REGISTER_EXISTING = "REGISTER_EXISTING"; //experiences

var LOAD_TAGS = "LOAD_TAGS";
var COMPLETE_LOAD_TAGS = "COMPLETE_LOAD_TAGS";
var LOGOUT_REQUEST = "LOGOUT_REQUEST";
var SET_CURRENT_USER = "SET_CURRENT_USER";
var GET_CURRENT_USER_REQUEST = "GET_CURRENT_USER_REQUEST";
var RESET_COUNT_NOTIFI_REQUEST = "RESET_COUNT_NOTIFI_REQUEST";
var RESET_COUNT_NOTIFI = "RESET_COUNT_NOTIFI";
var SET_COUNT_NOTIFI = "SET_COUNT_NOTIFI";

/***/ }),

/***/ "./src/constants/initialState.js":
/*!***************************************!*\
  !*** ./src/constants/initialState.js ***!
  \***************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  auth: {
    user: null,
    isAuthenticated: false
  }
});

/***/ }),

/***/ "./src/constants/resource.js":
/*!***********************************!*\
  !*** ./src/constants/resource.js ***!
  \***********************************/
/*! exports provided: GET_RESOURCE_REQUEST, GET_RESOURCE_SUCCESS, GET_RESOURCE_FAILURE, CREATE_RESOURCE_REQUEST, CREATE_RESOURCE_SUCCESS, CREATE_RESOURCE_FAILURE, SET_FACEAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESOURCE_REQUEST", function() { return GET_RESOURCE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESOURCE_SUCCESS", function() { return GET_RESOURCE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESOURCE_FAILURE", function() { return GET_RESOURCE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_RESOURCE_REQUEST", function() { return CREATE_RESOURCE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_RESOURCE_SUCCESS", function() { return CREATE_RESOURCE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_RESOURCE_FAILURE", function() { return CREATE_RESOURCE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FACEAPI", function() { return SET_FACEAPI; });
var GET_RESOURCE_REQUEST = "GET_RESOURCE_REQUEST";
var GET_RESOURCE_SUCCESS = "GET_RESOURCE_SUCCESS";
var GET_RESOURCE_FAILURE = "GET_RESOURCE_FAILURE";
var CREATE_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";
var CREATE_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
var CREATE_RESOURCE_FAILURE = "CREATE_RESOURCE_FAILURE";
var SET_FACEAPI = "SET_FACEAPI";

/***/ }),

/***/ "./src/dataProvider/config.js":
/*!************************************!*\
  !*** ./src/dataProvider/config.js ***!
  \************************************/
/*! exports provided: apiBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiBase", function() { return apiBase; });
// export const apiBase = "https://api.12go.vn";
var apiBase = "https://localhost:1347";

/***/ }),

/***/ "./src/dataProvider/index.js":
/*!***********************************!*\
  !*** ./src/dataProvider/index.js ***!
  \***********************************/
/*! exports provided: get, post, puts, deletes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "puts", function() { return puts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletes", function() { return deletes; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/dataProvider/config.js");
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localStorage */ "localStorage");
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localStorage__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var headers = {
  "Access-Control-Allow-Origin": "*"
};
 // headers.append("GET", "POST", "OPTIONS");

function preSendData(data) {
  for (var prop in data) {
    var dataElement = data[prop];

    if (dataElement == null || dataElement === undefined || dataElement === "null" || dataElement === "" || dataElement === "undefined") {
      delete data[prop];
    }
  }

  return data;
}

var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  // baseURL: apiBase,
  headers: headers
});

function requestInterFace() {}

var get = function get(endpoint) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var getlocalStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (getlocalStorage && localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")) {
    config = _objectSpread({}, config, {
      headers: {
        Authorization: "Bearer " + localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")
      }
    });
  }

  return request.get(endpoint, config);
};
var post = function post(endpoint, data) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    headers: null
  };

  if (localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token") && !config.headers) {
    config = _objectSpread({}, config, {
      headers: {
        Authorization: "Bearer " + localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")
      }
    });
  }

  data = preSendData(data);
  var formData = new FormData();

  if (data && data.hasFile) {
    config = _objectSpread({}, config, {
      header: _objectSpread({}, config.headers, {
        "Content-Type": "multipart/form-data"
      })
    });
    delete data["hasFile"];

    for (var prop in data) {
      if (Array.isArray(data[prop])) {
        data[prop].forEach(function (dt) {
          formData.append(prop, dt);
        });
      } else {
        formData.append(prop, data[prop]);
      }

      delete data[prop];
    }

    data = formData;
  }

  return request.post(endpoint, data, config);
};
var puts = function puts(endpoint, data) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    headers: {}
  };

  if (localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")) {
    config = _objectSpread({}, config, {
      headers: {
        Authorization: "Bearer " + localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")
      }
    });
  }

  return request.put(endpoint, data, config);
};
var deletes = function deletes(endpoint, data) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    headers: {}
  };

  if (localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")) {
    config = _objectSpread({}, config, {
      headers: {
        Authorization: "Bearer " + localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")
      }
    });
  }

  return request.delete(endpoint, config);
};

/***/ }),

/***/ "./src/reducers/auth.js":
/*!******************************!*\
  !*** ./src/reducers/auth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/auth */ "./src/constants/auth.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localStorage */ "localStorage");
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localStorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_initialState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/initialState */ "./src/constants/initialState.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var authInitialState = _constants_initialState__WEBPACK_IMPORTED_MODULE_3__["initialState"].get('auth');

function initialUser() {
  try {
    return localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token") ? jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")) : {};
  } catch (error) {
    return null;
  }
}

var data = initialUser();

var initialSate = _objectSpread({}, authInitialState, {
  user: data,
  token: localStorage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem("token")
});

function getUserFromToken(token) {
  try {
    var user = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
    return {
      user: user,
      token: token
    };
  } catch (error) {
    return {
      user: null,
      token: null,
      userDetail: {
        countNotification: 0
      }
    };
  }
}

var reducer = function clientReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialSate;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_auth__WEBPACK_IMPORTED_MODULE_0__["CLIENT_SET"]:
      return getUserFromToken(action.token);

    case _constants_auth__WEBPACK_IMPORTED_MODULE_0__["CLIENT_UNSET"]:
      return {
        user: null,
        token: null
      };

    case _constants_auth__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"]:
      return {
        user: action.user,
        isAuthenticated: action.user ? true : false
      };

    case _constants_auth__WEBPACK_IMPORTED_MODULE_0__["RESET_COUNT_NOTIFI"]:
      return _objectSpread({}, state, {
        userDetail: _objectSpread({}, state.userDetail, {
          countNotification: 0
        })
      });

    case _constants_auth__WEBPACK_IMPORTED_MODULE_0__["SET_COUNT_NOTIFI"]:
      var copyState = _objectSpread({}, state);

      return _objectSpread({}, state, {
        userDetail: _objectSpread({}, state.userDetail, {
          countNotification: copyState.userDetail ? copyState.userDetail.countNotification + 1 : 0
        })
      });

    case _constants_auth__WEBPACK_IMPORTED_MODULE_0__["UPDATE_AVATAR"]:
      return _objectSpread({}, state, {
        user: _objectSpread({}, state.user, {
          avatar: action.data
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/reducers/auth.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource */ "./src/reducers/resource.js");



var rootReducer = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  resource: _resource__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/resource.js":
/*!**********************************!*\
  !*** ./src/reducers/resource.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _constants_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/resource */ "./src/constants/resource.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // reducer with initial state

var initialState = {
  startGetResouce: false
};
function reducer() {
  var _objectSpread2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _constants_resource__WEBPACK_IMPORTED_MODULE_0__["GET_RESOURCE_REQUEST"]:
      return _objectSpread({}, state, {
        startGetResouce: true
      });

    case _constants_resource__WEBPACK_IMPORTED_MODULE_0__["GET_RESOURCE_SUCCESS"]:
      return _objectSpread({}, state, (_objectSpread2 = {}, _defineProperty(_objectSpread2, payload.name, payload.data), _defineProperty(_objectSpread2, "startGetResouce", false), _objectSpread2));

    case _constants_resource__WEBPACK_IMPORTED_MODULE_0__["GET_RESOURCE_FAILURE"]:
      return _objectSpread({}, state, {
        successGetTopTourist: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/sagas/auth.js":
/*!***************************!*\
  !*** ./src/sagas/auth.js ***!
  \***************************/
/*! exports provided: registerSaga, loginSaga, logoutSaga, getMeSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSaga", function() { return registerSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSaga", function() { return loginSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSaga", function() { return logoutSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeSaga", function() { return getMeSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth */ "./src/actions/auth.js");
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! localStorage */ "localStorage");
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(localStorage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/auth */ "./src/constants/auth.js");
/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dataProvider */ "./src/dataProvider/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logoutFlow),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getMeFlow),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(registerFlow),
    _marked5 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginFlow),
    _marked6 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(registerSaga),
    _marked7 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginSaga),
    _marked8 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logoutSaga),
    _marked9 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getMeSaga),
    _marked10 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(auth);


 // We'll use this function to redirect to different routes based on cases
// import { browserHistory } from 'react-router'
// Helper for api errors

;

 // Our login constants






 // So that we can modify our Client piece of state
// const loginUrl = `${process.env.REACT_APP_API_URL}/api/Clients/login`

var history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])();

function loginApi(username, password) {
  console.log('loginApi: ', username, password);
  return Object(_dataProvider__WEBPACK_IMPORTED_MODULE_7__["post"])("/api/auth/login", {
    username: username,
    password: password
  });
}

function logoutApi() {
  return Object(_dataProvider__WEBPACK_IMPORTED_MODULE_7__["post"])("/api/logout-sso");
}

function getMeApi() {
  return Object(_dataProvider__WEBPACK_IMPORTED_MODULE_7__["get"])("/api/auth/me");
}

function logout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"])(null));

        case 2:
          // remove our token
          // localStorage.removeItem("token");
          // redirect to the /login screen
          window.location.href = '/login';

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function logoutFlow() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logoutFlow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logoutApi);

        case 3:
          data = _context2.sent;

          if (!(data.data.code == 0)) {
            _context2.next = 9;
            break;
          }

          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logout);

        case 7:
          _context2.next = 9;
          break;

        case 9:
          _context2.next = 13;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 11]]);
}

function getMeFlow() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getMeFlow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log('getMeFlow: ');
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getMeApi);

        case 4:
          data = _context3.sent;
          console.log('data: ', data);

          if (!(data.data.code == 0)) {
            _context3.next = 11;
            break;
          }

          _context3.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"])(data.data.data));

        case 9:
          _context3.next = 13;
          break;

        case 11:
          history.push("/login");
          window.location.href = '/login';

        case 13:
          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](1);
          // window.location.href = '/login';
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/login");

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 15]]);
}

function registerFlow(action) {
  var resolve, reject, data, _data$data$data, returnTo, url;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function registerFlow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          resolve = action.resolve, reject = action.reject;
          _context4.prev = 1;
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(registerApi, action.data);

        case 4:
          data = _context4.sent;

          if (!(data.data.code == 0)) {
            _context4.next = 14;
            break;
          }

          _data$data$data = data.data.data, returnTo = _data$data$data.returnTo, url = _data$data$data.url;
          console.log('dataCb: ', data.data.data); // inform Redux to set our client token, this is non blocking so...
          // yield put(setClient(token));

          alert('oc cho'); // .. also inform redux that our login was successful

          _context4.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_auth__WEBPACK_IMPORTED_MODULE_6__["REGISTER_SUCCESS"]
          });

        case 11:
          // if (returnTo) {
          //   const dataCb = yield call(getUrlCallback, url);
          //   console.log('dataCb: ', dataCb);
          //   if (dataCb.data.code == 0);
          //   // window.location.href = dataCb.data.data
          // } else {
          //   alert('oc cho')
          // }
          // set a stringified version of our token to localstorage on our domain
          localStorage__WEBPACK_IMPORTED_MODULE_5___default.a.setItem("token", token); // redirect them to WIDGETS!
          // resolve(token);
          // history.push("/");

          _context4.next = 15;
          break;

        case 14:
          console.log("loi cmmmm");

        case 15:
          _context4.next = 22;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_auth__WEBPACK_IMPORTED_MODULE_6__["REGISTER_ERROR"],
            error: _context4.t0
          });

        case 21:
          // throw new SubmissionError({ _error: "Some error message" });
          // const formError = new SubmissionError({
          //   login: "User with this login is not found", // specific field error
          //   _error: {
          //     email: "Login failed, please check your credentials and try again"
          //   } // global form error
          // });
          if (typeof reject === "function") {
            reject(_context4.t0);
          }

        case 22:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 17]]);
}

function loginFlow(actions) {
  var username, password, resolve, reject, res, _res$data$data, data, returnTo, _data$url, url;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginFlow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          username = actions.username, password = actions.password, resolve = actions.resolve, reject = actions.reject;
          _context5.prev = 1;
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loginApi, username, password);

        case 4:
          res = _context5.sent;
          console.log('data: ', res.data.data);

          if (!res.data) {
            _context5.next = 14;
            break;
          }

          _res$data$data = res.data.data, data = _res$data$data === void 0 ? {} : _res$data$data;
          returnTo = data.returnTo, _data$url = data.url, url = _data$url === void 0 ? '/' : _data$url; // .. also inform redux that our login was successful

          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_auth__WEBPACK_IMPORTED_MODULE_6__["LOGIN_SUCCESS"]
          });

        case 11:
          window.location.href = url;
          _context5.next = 15;
          break;

        case 14:
          reject(res);

        case 15:
          _context5.next = 23;
          break;

        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](1);
          console.log('error: ', _context5.t0); // error? send it to redux

          _context5.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_auth__WEBPACK_IMPORTED_MODULE_6__["LOGIN_ERROR"],
            error: _context5.t0
          });

        case 22:
          if (typeof reject === "function") {
            console.log('reject: ', reject);
            reject(_context5.t0);
          }

        case 23:
          _context5.prev = 23;
          _context5.next = 26;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["cancelled"])();

        case 26:
          if (!_context5.sent) {
            _context5.next = 28;
            break;
          }

          history.push("/login");

        case 28:
          return _context5.finish(23);

        case 29:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[1, 17, 23, 29]]);
}

function registerSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function registerSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_constants_auth__WEBPACK_IMPORTED_MODULE_6__["REGISTER_REQUESTING"], registerFlow);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
function loginSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_constants_auth__WEBPACK_IMPORTED_MODULE_6__["LOGIN_REQUESTING"], loginFlow);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
function logoutSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logoutSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_constants_auth__WEBPACK_IMPORTED_MODULE_6__["LOGOUT_REQUEST"], logoutFlow);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
function getMeSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getMeSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          console.log('getMeSaga: ');
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_constants_auth__WEBPACK_IMPORTED_MODULE_6__["GET_CURRENT_USER_REQUEST"], getMeFlow);

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function auth() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function auth$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([loginSaga(), registerSaga(), logoutSaga(), getMeSaga()]);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/sagas/auth.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource */ "./src/sagas/resource.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_auth__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_resource__WEBPACK_IMPORTED_MODULE_3__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./src/sagas/resource.js":
/*!*******************************!*\
  !*** ./src/sagas/resource.js ***!
  \*******************************/
/*! exports provided: getResourceSaga, createResourceSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceSaga", function() { return getResourceSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResourceSaga", function() { return createResourceSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/resource */ "./src/constants/resource.js");
/* harmony import */ var _dataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataProvider */ "./src/dataProvider/index.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getResourceSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(createResourceSaga),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getResource),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(createResource),
    _marked5 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resource);




; // So that we can modify our Client piece of state

function getResourceSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getResourceSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_constants_resource__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCE_REQUEST"], getResource);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function createResourceSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function createResourceSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_constants_resource__WEBPACK_IMPORTED_MODULE_2__["CREATE_RESOURCE_REQUEST"], createResource);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function getResource(action) {
  var resolve, reject, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getResource$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          resolve = action.resolve, reject = action.reject;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getResourceAPI, action.path);

        case 4:
          response = _context3.sent;

          if (!(response && response.data && response.data.code === 0)) {
            _context3.next = 15;
            break;
          }

          if (!(typeof resolve === "function")) {
            _context3.next = 11;
            break;
          }

          console.log("TCL: function*getResource -> resolve");
          resolve(response.data.data);
          _context3.next = 13;
          break;

        case 11:
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_resource__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCE_SUCCESS"],
            payload: {
              name: action.name,
              data: response.data.data
            }
          });

        case 13:
          _context3.next = 21;
          break;

        case 15:
          if (!(typeof action.reject === "function")) {
            _context3.next = 19;
            break;
          }

          reject(response.data.errors);
          _context3.next = 21;
          break;

        case 19:
          _context3.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_resource__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCE_FAILURE"]
          });

        case 21:
          _context3.next = 29;
          break;

        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](1);
          console.log("TCL: }catch -> error", _context3.t0);
          _context3.next = 28;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_resource__WEBPACK_IMPORTED_MODULE_2__["GET_RESOURCE_FAILURE"]
          });

        case 28:
          if (typeof action.reject === "function") {
            reject(_context3.t0);
          }

        case 29:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 23]]);
}

function createResource(action) {
  var meta, name, resolve, reject, response, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function createResource$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          meta = action.meta, name = action.name, resolve = action.resolve, reject = action.reject;
          _context4.prev = 1;
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(createResourceAPI, meta);

        case 4:
          response = _context4.sent;

          if (!(response && response.data && response.data.code == 0)) {
            _context4.next = 12;
            break;
          }

          data = response.data.data;
          resolve(data);
          _context4.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_resource__WEBPACK_IMPORTED_MODULE_2__["CREATE_RESOURCE_SUCCESS"],
            payload: {
              name: name,
              data: data
            }
          });

        case 10:
          _context4.next = 16;
          break;

        case 12:
          console.log("error ==fail.,", response.data.errors);
          reject(response.data.errors);
          _context4.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_resource__WEBPACK_IMPORTED_MODULE_2__["CREATE_RESOURCE_FAILURE"]
          });

        case 16:
          _context4.next = 24;
          break;

        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](1);
          console.log("error ==create.,", meta, name);
          reject(_context4.t0);
          _context4.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants_resource__WEBPACK_IMPORTED_MODULE_2__["CREATE_RESOURCE_FAILURE"]
          });

        case 24:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 18]]);
}

function getResourceAPI(path) {
  console.log("urlApi", path);
  return Object(_dataProvider__WEBPACK_IMPORTED_MODULE_3__["get"])(path);
}

function createResourceAPI(_ref) {
  var path = _ref.path,
      data = _ref.data;
  return Object(_dataProvider__WEBPACK_IMPORTED_MODULE_3__["post"])(path, data);
}

function resource() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resource$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([getResourceSaga(), createResourceSaga()]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

/* harmony default export */ __webpack_exports__["default"] = (resource);

/***/ }),

/***/ "./src/store/createStore.js":
/*!**********************************!*\
  !*** ./src/store/createStore.js ***!
  \**********************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
/* harmony import */ var _constants_initialState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/initialState */ "./src/constants/initialState.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./src/sagas/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var window_or_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! window-or-global */ "window-or-global");
/* harmony import */ var window_or_global__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(window_or_global__WEBPACK_IMPORTED_MODULE_7__);







 // import {
//   composeWithDevTools,
//   devToolsEnhancer
// } from "redux-devtools-extension";

var stateLogger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])({
  stateTransformer: function stateTransformer(state) {
    return state.toJS();
  }
});
var initStore = function initStore() {
  var preloadState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_initialState__WEBPACK_IMPORTED_MODULE_4__["initialState"];
  var enhancers = []; // Dev tools are helpful

  if (true) {
    var devToolsExtension = window_or_global__WEBPACK_IMPORTED_MODULE_7___default.a.devToolsExtension;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()(); // Add all middlewares into an array
  // const middleware = [sagaMiddleware,stateLogger];

  var middleware = [sagaMiddleware]; // Add the Redux dev tools and middleware code together

  var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)].concat(enhancers));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadState, // applyMiddleware(sagaMiddleware, stateLogger)
  composedEnhancers);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/avatar/style":
/*!****************************************!*\
  !*** external "antd/lib/avatar/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/style");

/***/ }),

/***/ "antd/lib/badge":
/*!*********************************!*\
  !*** external "antd/lib/badge" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge");

/***/ }),

/***/ "antd/lib/badge/style":
/*!***************************************!*\
  !*** external "antd/lib/badge/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge/style");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style":
/*!**************************************!*\
  !*** external "antd/lib/icon/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style":
/*!***************************************!*\
  !*** external "antd/lib/input/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/layout/style":
/*!****************************************!*\
  !*** external "antd/lib/layout/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style":
/*!**************************************!*\
  !*** external "antd/lib/menu/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/popover/style":
/*!*****************************************!*\
  !*** external "antd/lib/popover/style" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover/style");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "localStorage":
/*!*******************************!*\
  !*** external "localStorage" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localStorage");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-immutable":
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "window-or-global":
/*!***********************************!*\
  !*** external "window-or-global" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("window-or-global");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map