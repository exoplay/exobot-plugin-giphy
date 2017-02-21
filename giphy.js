require("source-map-support").install();require("regenerator-runtime/runtime");
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@exoplay/exobot");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exoplay_exobot__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exoplay_exobot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__exoplay_exobot__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Giphy; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0, descriptor; i < props.length; i++) { descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class, _class2, _temp;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg), value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['keys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = !0;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = void 0;
  }

  if (desc.initializer === void 0) {
    Object['defineProperty'](target, property, desc);
    desc = null;
  }

  return desc;
}



const ENDPOINT = 'http://api.giphy.com/v1/gifs/search';
/* harmony export (immutable) */ __webpack_exports__["ENDPOINT"] = ENDPOINT;


let Giphy = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exoplay_exobot__["permissionGroup"])('gif'), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exoplay_exobot__["help"])('/gif <search> to search giphy for a gif'), _dec3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exoplay_exobot__["respond"])(/^(?:gif|giphy)(?:\sme)?\s+(.*)/i), (_class = (_temp = _class2 = function (_Plugin) {
  _inherits(Giphy, _Plugin);

  function Giphy() {
    _classCallCheck(this, Giphy);

    return _possibleConstructorReturn(this, (Giphy.__proto__ || Object.getPrototypeOf(Giphy)).apply(this, arguments));
  }

  _createClass(Giphy, [{
    key: 'giphy',
    value: (() => {
      var _ref = _asyncToGenerator(function* ([, search]) {
        try {
          const { body } = yield this.bot.http.get(ENDPOINT).query({ q: search, api_key: this.options.apiKey }),
                { data } = body;

          if (data.length) {
            return data[parseInt(Math.random() * data.length)].images.original.url;
          }
        } catch (e) {
          this.bot.log.notice('Error returned from Giphy request.');
          this.bot.log.debug(e);
        }
      });

      return function giphy() {
        return _ref.apply(this, arguments);
      };
    })()
  }]);

  return Giphy;
}(__WEBPACK_IMPORTED_MODULE_0__exoplay_exobot__["Plugin"]), _class2.type = 'giphy', _class2.propTypes = {
  apiKey: __WEBPACK_IMPORTED_MODULE_0__exoplay_exobot__["PropTypes"].string.isRequired
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'giphy', [_dec, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'giphy'), _class.prototype)), _class));


/***/ })
/******/ ])));
//# sourceMappingURL=giphy.js.map