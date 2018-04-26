/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 143);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ 331)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 4 */
/*!**************************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 32);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 5 */
/*!*********************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 324);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ 328);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 32);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 6 */
/*!********************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/extends.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ 53);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 7 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 9 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_core.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 100);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 11 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 12 */
/*!************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/createClass.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 97);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 13 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ 59)('wks');
var uid = __webpack_require__(/*! ./_uid */ 39);
var Symbol = __webpack_require__(/*! ./_global */ 14).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 14 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 15 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 28),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 158),
    objectToString = __webpack_require__(/*! ./_objectToString */ 159);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 16 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 23);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 92);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 54);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 17 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 27)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 19 */
/*!**************************************!*\
  !*** ../node_modules/lodash/keys.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 104),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ 176),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 26);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 20 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_getNative.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 222),
    getValue = __webpack_require__(/*! ./_getValue */ 225);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 21 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 14);
var core = __webpack_require__(/*! ./_core */ 9);
var ctx = __webpack_require__(/*! ./_ctx */ 91);
var hide = __webpack_require__(/*! ./_hide */ 22);
var has = __webpack_require__(/*! ./_has */ 18);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 22 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 16);
var createDesc = __webpack_require__(/*! ./_property-desc */ 37);
module.exports = __webpack_require__(/*! ./_descriptors */ 17) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 23 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 24);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 25 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-iobject.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 95);
var defined = __webpack_require__(/*! ./_defined */ 56);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 26 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 30),
    isLength = __webpack_require__(/*! ./isLength */ 63);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 27 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 28 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 10);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 29 */
/*!************************************!*\
  !*** ../node_modules/lodash/eq.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 30 */
/*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 15),
    isObject = __webpack_require__(/*! ./isObject */ 7);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 31 */
/*!******************************************!*\
  !*** ../node_modules/lodash/identity.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 32 */
/*!*******************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 181);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 191);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 33 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iterators.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 34 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_copyObject.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 113),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 81);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 35 */
/*!****************************************!*\
  !*** ../node_modules/lodash/_toKey.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 41);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 36 */
/*!************************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 37 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 38 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 94);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 60);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 39 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_uid.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 40 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-pie.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 41 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isSymbol.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 15),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 42 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_isIndex.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 43 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 10),
    stubFalse = __webpack_require__(/*! ./stubFalse */ 174);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 66)(module)))

/***/ }),
/* 44 */
/*!****************************************!*\
  !*** ../node_modules/lodash/_Stack.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 45),
    stackClear = __webpack_require__(/*! ./_stackClear */ 217),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ 218),
    stackGet = __webpack_require__(/*! ./_stackGet */ 219),
    stackHas = __webpack_require__(/*! ./_stackHas */ 220),
    stackSet = __webpack_require__(/*! ./_stackSet */ 221);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 45 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_ListCache.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 212),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 213),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 214),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 215),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 216);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 46 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_assocIndexOf.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 29);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 47 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeCreate.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 20);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 48 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getMapData.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ 234);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 49 */
/*!****************************************!*\
  !*** ../node_modules/lodash/keysIn.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 104),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ 240),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 26);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 50 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/_getTag.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ 245),
    Map = __webpack_require__(/*! ./_Map */ 79),
    Promise = __webpack_require__(/*! ./_Promise */ 246),
    Set = __webpack_require__(/*! ./_Set */ 247),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ 248),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 15),
    toSource = __webpack_require__(/*! ./_toSource */ 112);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 51 */
/*!******************************************!*\
  !*** ../node_modules/warning/browser.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 52 */
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 53 */
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/assign.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 148), __esModule: true };

/***/ }),
/* 54 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 24);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 55 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 56 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_defined.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 57 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-integer.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 58 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared-key.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 59)('keys');
var uid = __webpack_require__(/*! ./_uid */ 39);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 59 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 14);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 60 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 61 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gops.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 62 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/toInteger.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ 162);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 63 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isLength.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 64 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseEach.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 170),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ 178);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 65 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArguments.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ 173),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 66 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 67 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ 175),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 68),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 69);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 68 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 69 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 100);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 66)(module)))

/***/ }),
/* 70 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 71 */
/*!**************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/utils.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = undefined;

var _baseUtils = __webpack_require__(/*! photography-client-lib/dist/src/utils/baseUtils */ 180);

var _baseUtils2 = _interopRequireDefault(_baseUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = exports.utils = new _baseUtils2.default();

/***/ }),
/* 72 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ 183)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 106)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 73 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_library.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 74 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-create.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 23);
var dPs = __webpack_require__(/*! ./_object-dps */ 185);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 60);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 58)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 93)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 186).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 75 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 16).f;
var has = __webpack_require__(/*! ./_has */ 18);
var TAG = __webpack_require__(/*! ./_wks */ 13)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 76 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 188);
var global = __webpack_require__(/*! ./_global */ 14);
var hide = __webpack_require__(/*! ./_hide */ 22);
var Iterators = __webpack_require__(/*! ./_iterators */ 33);
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 13)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 77 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-ext.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 13);


/***/ }),
/* 78 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-define.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 14);
var core = __webpack_require__(/*! ./_core */ 9);
var LIBRARY = __webpack_require__(/*! ./_library */ 73);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 77);
var defineProperty = __webpack_require__(/*! ./_object-dp */ 16).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 79 */
/*!**************************************!*\
  !*** ../node_modules/lodash/_Map.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 20),
    root = __webpack_require__(/*! ./_root */ 10);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 80 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_MapCache.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 226),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 233),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 235),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 236),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 237);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 81 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseAssignValue.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ 114);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 82 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getSymbols.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 117),
    stubArray = __webpack_require__(/*! ./stubArray */ 118);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 83 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getPrototype.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 105);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 84 */
/*!***************************************************!*\
  !*** ../node_modules/lodash/_cloneArrayBuffer.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 123);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 85 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIteratee.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ 261),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ 274),
    identity = __webpack_require__(/*! ./identity */ 31),
    isArray = __webpack_require__(/*! ./isArray */ 3),
    property = __webpack_require__(/*! ./property */ 283);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 86 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIsEqual.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ 263),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 87 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseGet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 88),
    toKey = __webpack_require__(/*! ./_toKey */ 35);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 88 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_castPath.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 3),
    isKey = __webpack_require__(/*! ./_isKey */ 89),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ 276),
    toString = __webpack_require__(/*! ./toString */ 129);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 89 */
/*!****************************************!*\
  !*** ../node_modules/lodash/_isKey.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 3),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 41);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 90 */
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 91 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 150);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 92 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 17) && !__webpack_require__(/*! ./_fails */ 27)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 93)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 93 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 24);
var document = __webpack_require__(/*! ./_global */ 14).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 94 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 18);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 25);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 152)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 58)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 95 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iobject.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 55);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 96 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-object.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 56);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 97 */
/*!***********************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 155), __esModule: true };

/***/ }),
/* 98 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/isUndefined.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 99 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isString.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 15),
    isArray = __webpack_require__(/*! ./isArray */ 3),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 100 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 157)))

/***/ }),
/* 101 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_isIterateeCall.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 29),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 26),
    isIndex = __webpack_require__(/*! ./_isIndex */ 42),
    isObject = __webpack_require__(/*! ./isObject */ 7);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 102 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_arrayEach.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 103 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseFor.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 171);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 104 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ 172),
    isArguments = __webpack_require__(/*! ./isArguments */ 65),
    isArray = __webpack_require__(/*! ./isArray */ 3),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 43),
    isIndex = __webpack_require__(/*! ./_isIndex */ 42),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 67);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 105 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_overArg.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 106 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-define.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 73);
var $export = __webpack_require__(/*! ./_export */ 21);
var redefine = __webpack_require__(/*! ./_redefine */ 107);
var hide = __webpack_require__(/*! ./_hide */ 22);
var Iterators = __webpack_require__(/*! ./_iterators */ 33);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 184);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 75);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 187);
var ITERATOR = __webpack_require__(/*! ./_wks */ 13)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 107 */
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_redefine.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 22);


/***/ }),
/* 108 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 94);
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 60).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 109 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopd.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ 40);
var createDesc = __webpack_require__(/*! ./_property-desc */ 37);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 25);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 54);
var has = __webpack_require__(/*! ./_has */ 18);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 92);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 17) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 110 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_classof.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ 55);
var TAG = __webpack_require__(/*! ./_wks */ 13)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 111 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseClone.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 44),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ 102),
    assignValue = __webpack_require__(/*! ./_assignValue */ 113),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ 238),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ 239),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ 115),
    copyArray = __webpack_require__(/*! ./_copyArray */ 116),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ 242),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ 243),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 121),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ 244),
    getTag = __webpack_require__(/*! ./_getTag */ 50),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ 249),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ 250),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ 125),
    isArray = __webpack_require__(/*! ./isArray */ 3),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 43),
    isMap = __webpack_require__(/*! ./isMap */ 255),
    isObject = __webpack_require__(/*! ./isObject */ 7),
    isSet = __webpack_require__(/*! ./isSet */ 257),
    keys = __webpack_require__(/*! ./keys */ 19);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 112 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_toSource.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 113 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_assignValue.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 81),
    eq = __webpack_require__(/*! ./eq */ 29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 114 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_defineProperty.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 20);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 115 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_cloneBuffer.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 10);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 66)(module)))

/***/ }),
/* 116 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_copyArray.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 117 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_arrayFilter.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 118 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubArray.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 119 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getSymbolsIn.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 120),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ 83),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 82),
    stubArray = __webpack_require__(/*! ./stubArray */ 118);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 120 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_arrayPush.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 121 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getAllKeys.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 122),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 82),
    keys = __webpack_require__(/*! ./keys */ 19);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 122 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_baseGetAllKeys.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 120),
    isArray = __webpack_require__(/*! ./isArray */ 3);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 123 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_Uint8Array.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 10);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 124 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_cloneTypedArray.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ 84);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 125 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_initCloneObject.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ 254),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ 83),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 70);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 126 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_equalArrays.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 264),
    arraySome = __webpack_require__(/*! ./_arraySome */ 267),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 268);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 127 */
/*!*****************************************************!*\
  !*** ../node_modules/lodash/_isStrictComparable.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 7);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 128 */
/*!**********************************************************!*\
  !*** ../node_modules/lodash/_matchesStrictComparable.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 129 */
/*!******************************************!*\
  !*** ../node_modules/lodash/toString.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 279);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 130 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_arrayMap.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 131 */
/*!***************************************!*\
  !*** ../node_modules/lodash/merge.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ 288),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ 293);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 132 */
/*!***************************************************!*\
  !*** ../node_modules/lodash/_assignMergeValue.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 81),
    eq = __webpack_require__(/*! ./eq */ 29);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 133 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_safeGet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

module.exports = safeGet;


/***/ }),
/* 134 */
/*!*************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/item.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = undefined;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _isObject = __webpack_require__(/*! lodash/isObject */ 7);

var _isObject2 = _interopRequireDefault(_isObject);

var _isNumber = __webpack_require__(/*! lodash/isNumber */ 304);

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ 30);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _merge = __webpack_require__(/*! lodash/merge */ 131);

var _merge2 = _interopRequireDefault(_merge);

var _utils = __webpack_require__(/*! ./utils */ 71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = exports.Item = function () {

  /* @ngInject */
  function Item(config) {
    (0, _classCallCheck3.default)(this, Item);

    this.style = {};
    this.visibility = {};

    //Item core can be initialized with:
    // {dto: ItemDto(..)}
    // or {wixVideo: ... }
    // or {wixImage: ...}

    //in addition - support of {sharpParam: {quality}}

    config = config || {};

    if (config.dto && config.dto.dto) {
      config.dto = config.dto.dto; //defence patch due to mis-use of item-core
      if (_utils.utils.isDev()) {
        console.warn('Item core is created with already existing item core');
      }
    }
    if (!config.dto) {
      config.dto = {};
    }
    var metadata = _utils.utils.parseStringObject(config.dto.metadata || config.dto.metaData || '');
    this.fixMetadataVerticalVideoRatio(metadata);

    this._dto = (0, _merge2.default)({}, config.dto, metadata);
    this.dto = config.dto;

    this.cubeType = config.cubeType || 'fill';
    this.cubeImages = config.cubeImages;
    this._cubeRatio = config.cubeRatio;
    this.smartCrop = config.smartCrop;
    this.cropOnlyFill = config.cropOnlyFill;
    this.imageMargin = config.imageMargin;
    this.galleryMargin = config.galleryMargin;
    this.floatingImages = config.floatingImages;
    this.idx = config.idx;
    this.smartCrop = config.smartCrop;
    this.createdBy = config.createdBy;
    this.container = config.container;
    this._groupOffset = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    this._group = {};
    this.calcPinOffset = function () {
      return 0;
    };

    this.resize(1);
  }

  (0, _createClass3.default)(Item, [{
    key: 'fixMetadataVerticalVideoRatio',
    value: function fixMetadataVerticalVideoRatio(metadata) {
      if (metadata.qualities && metadata.qualities[0]) {
        //fix incorrect width height for vertical videos
        var qualities = metadata.qualities;
        var _qualities = qualities[qualities.length - 1],
            height = _qualities.height,
            width = _qualities.width;

        metadata.height = height;
        metadata.width = width;
      }
    }
  }, {
    key: 'resize',
    value: function resize(scaleOrDimensions) {

      if (_utils.utils.shouldLog('spacing')) {
        console.log('SPACING - Item  resize ', scaleOrDimensions);
      }

      var scale = 1;
      if (scaleOrDimensions === false) {
        return;
      } else if ((0, _isNumber2.default)(scaleOrDimensions)) {
        scale = scaleOrDimensions;
      } else if ((0, _isObject2.default)(scaleOrDimensions)) {
        if (scaleOrDimensions.width) {
          scale = scaleOrDimensions.width / this.width;
        } else if (scaleOrDimensions.height) {
          scale = scaleOrDimensions.height / this.height;
        }
      }

      this.width *= scale;
      this.height *= scale;

      if (_utils.utils.shouldLog('spacing')) {
        console.log('SPACING - Item  W: ' + this.width);
        console.log('SPACING - Item  H: ' + this.height);
      }

      this.resized = true;

      return this;
    }
  }, {
    key: 'pinToCorner',
    value: function pinToCorner(cornerName) {
      var _this = this;

      var pinOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


      var isTop = cornerName.indexOf('top') >= 0;
      var isLeft = cornerName.indexOf('left') >= 0;

      this.style.top = isTop ? pinOffset : 'auto';
      this.style.bottom = isTop ? 'auto' : pinOffset;
      this.style.left = isLeft ? pinOffset : 'auto';
      this.style.right = isLeft ? 'auto' : pinOffset;

      this.pin = cornerName;
      this.isPinnedTop = isTop;
      this.isPinnedLeft = isLeft;
      this.pinOffset = pinOffset;
      this.calcPinOffset = function (groupSize) {
        if (pinOffset <= 0) {
          return 0;
        } else {
          //this is used only for 3h/3v group types - to calc the offset of the middle item
          var m = _this.imageMargin;
          return (groupSize - 6 * m) * _this.pinOffset + 2 * m;
        }
      };
    }
  }, {
    key: 'pinToMiddle',
    value: function pinToMiddle() {

      this.style.top = this.style.bottom = this.style.left = this.style.right = 'auto';

      this.pin = 'middle';
      this.isPinnedMiddle = true;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(position) {
      this.style.position = position;
    }
  }, {
    key: 'getPosition',
    value: function getPosition(pos) {
      return parseInt(pos, 10) >= 0 ? pos : 'auto';
    }
  }, {
    key: 'top',
    get: function get() {
      return this.getPosition(this.style.top);
    }
  }, {
    key: 'left',
    get: function get() {
      return this.getPosition(this.style.left);
    }
  }, {
    key: 'right',
    get: function get() {
      return this.getPosition(this.style.right);
    }
  }, {
    key: 'bottom',
    get: function get() {
      return this.getPosition(this.style.bottom);
    }
  }, {
    key: 'group',
    set: function set(group) {
      (0, _merge2.default)(this._group, group);
    },
    get: function get() {
      return this._group;
    }
  }, {
    key: 'offset',
    set: function set(offset) {
      (0, _merge2.default)(this._groupOffset, offset);
    },
    get: function get() {
      var offset = {
        top: this._groupOffset.top + (this.isPinnedTop ? this.calcPinOffset(this._group.height) : this._group.height - this.outerHeight) || 0,
        left: this._groupOffset.left + (this.isPinnedLeft ? this.calcPinOffset(this._group.width) : this._group.width - this.outerWidth) || 0,
        right: (this._groupOffset.right - (this.isPinnedLeft ? this._group.width - this.outerWidth : this.calcPinOffset(this._group.width)) || 0) - this.imageMargin * 2,
        bottom: (this._groupOffset.bottom - (this.isPinnedTop ? this._group.height - this.outerHeight : this.calcPinOffset(this._group.height)) || 0) - this.imageMargin * 2
      };
      return offset;
    }
  }, {
    key: 'transform',
    get: function get() {
      if (this.floatingImages > 0) {

        var m = this.imageMargin;
        var g = this.galleryMargin;

        var spaceLeft = this.offset.left > 0 ? m : g;
        var spaceRight = this.container.galleryWidth - this.offset.right > 2 * m ? m : g;
        var spaceUp = this.offset.top > 0 ? m : g;
        var spaceDown = this.container.galleryHeight - this.offset.bottom > 2 * m ? m : g;

        var horizontalShift = _utils.utils.hashToInt(this.hash + this.offset.right + 'x', -1 * spaceLeft, spaceRight) * this.floatingImages;
        var verticalShift = _utils.utils.hashToInt(this.hash + this.offset.top + 'y', -1 * spaceUp, spaceDown) * this.floatingImages;

        return {
          transform: 'translate3d(' + horizontalShift + 'px, ' + verticalShift + 'px, 0)'
        };
      } else {
        return {};
      }
    }
  }, {
    key: 'id',
    get: function get() {
      return this._dto.id || this._dto.photoId || this._dto.itemId;
    },
    set: function set(id) {
      this._dto.itemId = id;
    }
  }, {
    key: 'hash',
    get: function get() {
      return this._dto.hash || this._dto.mediaUrl || this._dto.id;
    }
  }, {
    key: 'maxWidth',
    get: function get() {
      return this._dto.width || this._dto.w;
    },
    set: function set(w) {
      this._dto.width = w;
    }
  }, {
    key: 'outerWidth',
    get: function get() {
      return this.width + 2 * this.margins;
    }
  }, {
    key: 'orgWidth',
    get: function get() {
      return this.style.width || this._dto.width || this._dto.w || 1; //make sure the width / height is not undefined (crashes the gallery)
    }
  }, {
    key: 'width',
    get: function get() {
      if (this.cubeImages && this.ratio >= this.cubeRatio) {
        return this.style.cubedWidth || this.orgHeight * this.cubeRatio;
      } else {
        return this.orgWidth;
      }
    },
    set: function set(w) {
      this.style.cubedWidth = this.style.width = Math.max(1, w);
    }
  }, {
    key: 'outerHeight',
    get: function get() {
      return this.height + 2 * this.margins;
    }
  }, {
    key: 'orgHeight',
    get: function get() {
      return this.style.height || this._dto.height || this._dto.h || 1; //make sure the width / height is not undefined (creashes the gallery)
    }
  }, {
    key: 'height',
    get: function get() {
      if (this.cubeImages && this.ratio < this.cubeRatio) {
        return this.style.cubedHeight || this.orgWidth / this.cubeRatio;
      } else {
        return this.orgHeight;
      }
    },
    set: function set(h) {
      this.style.cubedHeight = this.style.height = Math.max(1, h);
    }
  }, {
    key: 'maxHeight',
    get: function get() {
      return this._dto.height || this._dto.h;
    },
    set: function set(h) {
      h = this._dto.height;
    }
  }, {
    key: 'margins',
    get: function get() {
      return this.imageMargin || 0;
    },
    set: function set(m) {
      this.imageMargin = m;
    }
  }, {
    key: 'cubeRatio',
    get: function get() {
      var ratio = void 0;
      if ((0, _isFunction2.default)(this._cubeRatio)) {
        ratio = this._cubeRatio();
      } else if (this.cropOnlyFill && this.cubeType === 'fit') {
        ratio = this.ratio;
      } else {
        ratio = this._cubeRatio;
      }

      if (this.smartCrop === true) {
        if (this.isPortrait) {
          return Math.min(ratio, 1 / ratio);
        } else {
          return Math.max(ratio, 1 / ratio);
        }
      } else {
        return ratio;
      }
    },
    set: function set(ratio) {
      this._cubeRatio = ratio;
      this.style.cubedHeight = this.style.cubedWidth = 0;
    }
  }, {
    key: 'orientation',
    get: function get() {
      return this.ratio < 0.999 ? 'portrait' : 'landscape'; //make sure that almost square images get the same treatment
    }
  }, {
    key: 'isPortrait',
    get: function get() {
      return this.orientation === 'portrait';
    }
  }, {
    key: 'isLandscape',
    get: function get() {
      return this.orientation === 'landscape';
    }
  }, {
    key: 'ratio',
    get: function get() {
      if (!this.orgRatio) {
        this.orgRatio = this.orgWidth / this.orgHeight;
      }
      return this.orgRatio;
    },
    set: function set(r) {
      this.orgRatio = r;
    }
  }, {
    key: 'scheme',
    get: function get() {
      return {
        id: this.id,
        idx: this.idx,
        type: this.type,
        style: this.style,
        width: this.width,
        maxWidth: this.maxWidth,
        outerWidth: this.outerWidth,
        height: this.height,
        maxHeight: this.maxHeight,
        outerHeight: this.outerHeight,
        margins: this.margins,
        ratio: this.ratio,
        cropRatio: this.cubeRatio,
        isCropped: this.cubeImages,
        cropType: this.cubeType,
        group: this.group,
        offset: this.offset,
        transform: this.transform,
        orientation: this.orientation,
        visibility: this.visibility
      };
    }
  }]);
  return Item;
}();

/***/ }),
/* 135 */
/*!**************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/group.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = undefined;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ 305);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _last = __webpack_require__(/*! lodash/last */ 136);

var _last2 = _interopRequireDefault(_last);

var _remove = __webpack_require__(/*! lodash/remove */ 306);

var _remove2 = _interopRequireDefault(_remove);

var _includes = __webpack_require__(/*! lodash/includes */ 311);

var _includes2 = _interopRequireDefault(_includes);

var _filter = __webpack_require__(/*! lodash/filter */ 318);

var _filter2 = _interopRequireDefault(_filter);

var _utils = __webpack_require__(/*! ./utils */ 71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = exports.Group = function () {
  function Group(config) {
    (0, _classCallCheck3.default)(this, Group);

    this.idx = config.idx;
    this.stripIdx = config.stripIdx;
    this.inStripIdx = config.inStripIdx;
    this.items = config.items;
    this.cubeImages = config.cubeImages;
    this.cubeType = config.cubeType;
    this.top = config.top;
    this.isVertical = config.isVertical;
    this.minItemSize = config.minItemSize;
    this.gallerySize = config.gallerySize;
    this.collageAmount = config.collageAmount;
    this.collageDensity = config.collageDensity;
    this.groupTypes = config.groupTypes;
    this.rotatingGroupTypes = config.rotatingGroupTypes;
    this.chooseBestGroup = config.chooseBestGroup;
    this.layoutsVersion = config.layoutsVersion;
    this.bottomInfoHeight = config.bottomInfoHeight;
    this.imageMargin = config.imageMargin;

    this.visible = true;
    this.rendered = true;
    this.required = true;

    //prepare the group
    var forcedGroupSize = this.items.length;

    //todo - check if minItem size is really working
    while (!this.isWithinMinItemSize && forcedGroupSize > 0) {
      this.placeItems(forcedGroupSize);
      this.resize();
      forcedGroupSize--;
    }
  }

  (0, _createClass3.default)(Group, [{
    key: 'resize',
    value: function resize() {
      if (this.isVertical) {
        this.resizeToWidth(this.gallerySize);
      } else {
        this.resizeToHeight(this.gallerySize);
      }
    }
  }, {
    key: 'safeGetItem',
    value: function safeGetItem(idx) {
      if (this.items[idx]) {
        return this.items[idx];
      } else {
        var item = (0, _cloneDeep2.default)((0, _last2.default)(this.items));
        item.id += 'dummy';
        item.idx = this.idx * (idx + 1) + 1;
        item.type = 'dummy';
        return item;
      }
    }
  }, {
    key: 'fixItemsRatio',
    value: function fixItemsRatio(ratio) {

      for (var item, i = 0; item = this.items[i]; i++) {
        item.cubeRatio = ratio;
        item.resize(1);
      }
    }
  }, {
    key: 'round',
    value: function round() {

      //round all sizes to full pixels

      if (this.isLastGroup) {
        this.width = this.stripWidth - this.left;
      } else {
        this.width = Math.round(this.width);
      }
      this.height = Math.round(this.height);

      for (var item, i = 0; item = this.items[i]; i++) {
        item.width = Math.round(item.width);
        item.height = Math.round(item.height);
        item.group = {
          width: this.width,
          height: this.height
        };
      }

      // return;

      var m = this.imageMargin * 2;

      if (_utils.utils.shouldLog('spacing')) {
        console.log('SPACING - before rounding group #' + this.idx, this.realItems.map(function (i) {
          return '[' + i.width + '/' + i.height + ']';
        }).join(', '));
      }

      switch (this.type) {
        default:
        case '1':
          this.safeGetItem(0).width = this.width - m;
          this.safeGetItem(0).height = this.height - m;
          break;
        case '2v':
          this.safeGetItem(0).width = this.safeGetItem(1).width = this.width - m;
          this.safeGetItem(0).height = this.height - this.safeGetItem(1).height - 2 * m;
          break;
        case '2h':
          this.safeGetItem(0).height = this.safeGetItem(1).height = this.height - m;
          this.safeGetItem(0).width = this.width - this.safeGetItem(1).width - 2 * m;
          break;
        case '3t':
          this.safeGetItem(0).width = this.width - m;
          this.safeGetItem(0).height = this.height - this.safeGetItem(1).height - 2 * m;
          this.safeGetItem(1).width = this.width - this.safeGetItem(2).width - 2 * m;
          this.safeGetItem(2).height = this.safeGetItem(1).height;
          break;
        case '3b':
          this.safeGetItem(0).width = this.width - this.safeGetItem(1).width - 2 * m;
          this.safeGetItem(1).height = this.safeGetItem(0).height;
          this.safeGetItem(2).height = this.height - this.safeGetItem(1).height - 2 * m;
          this.safeGetItem(2).width = this.width - m;
          break;
        case '3l':
          this.safeGetItem(1).height = this.height - this.safeGetItem(2).height - 2 * m;
          this.safeGetItem(2).width = this.safeGetItem(1).width;
          this.safeGetItem(0).width = this.width - this.safeGetItem(1).width - 2 * m;
          this.safeGetItem(0).height = this.height - m;
          break;
        case '3r':
          this.safeGetItem(0).height = this.height - this.safeGetItem(1).height - 2 * m;
          this.safeGetItem(1).width = this.safeGetItem(0).width;
          this.safeGetItem(2).width = this.width - this.safeGetItem(1).width - 2 * m;
          this.safeGetItem(2).height = this.height - m;
          break;
        case '3v':
          this.safeGetItem(0).width = this.width - m;
          this.safeGetItem(1).width = this.width - m;
          this.safeGetItem(2).width = this.width - m;
          this.safeGetItem(2).height = this.height - this.safeGetItem(0).height - this.safeGetItem(1).height - 3 * m;
          break;
        case '3h':
          this.safeGetItem(0).height = this.height - m;
          this.safeGetItem(1).height = this.height - m;
          this.safeGetItem(2).height = this.height - m;
          this.safeGetItem(2).width = this.width - this.safeGetItem(0).width - this.safeGetItem(1).width - 3 * m;
          break;
      }

      if (_utils.utils.shouldLog('spacing')) {
        console.log('SPACING - after rounding group #' + this.idx, this.realItems.map(function (i) {
          return '[' + i.width + '/' + i.height + ']';
        }).join(', '));
      }
    }
  }, {
    key: 'getGroupType',
    value: function getGroupType(forcedGroupSize) {

      //---------| Override with specifically defined rotating group types (ignores everything else)
      if (this.rotatingGroupTypes) {
        var groupTypesArr = this.rotatingGroupTypes.split(',');
        return groupTypesArr[(this.idx - 1) % groupTypesArr.length];
      } else {
        //isVertical - is the gallery vertical (pinterest style) or horizontal (flickr style)

        //map the group to l=landscape and p=portrait
        //create a string to state the images group's type
        this.ratios = this.items.map(function (item) {
          return item.orientation.slice(0, 1);
        }).join('');

        //---------| Find the best groupType for each ratios case
        //optional types:
        //  1   => single photo
        //  2v  => 2 photos one above the other
        //  2h  => 2 photos one alongside the other
        //  3b  => 3 photos - one large at the bottom and two small on top, one alongside the other
        //  3t  => 3 photos - one large on top and two small at the bottom, one alongside the other
        //  3l  => 3 photos - one large on the left and two small on the right, one above the other
        //  3r  => 3 photos - one large on the right and two small on the left, one above the other

        //define optional ratios for each type:
        //  1   => all
        //  2v  => lll,llp,ppp     (horizontal only)
        //  2h  => ppp,ppl,lll     (vertical only)
        //  3b  => lll,lpl,pll,ppl (horizontal only)
        //  3t  => lll,lpl,llp,lpp (horizontal only)
        //  3l  => ppp,plp,ppl,pll (vertical only)
        //  3r  => ppp,plp,lpp,llp (vertical only)

        var isV = this.isVertical;
        var optionalTypes = void 0; //optional groupTypes (separated by ,). 1 is always optional

        if (this.chooseBestGroup) {
          switch (this.ratios) {
            case 'lll':
              optionalTypes = isV ? '1,2h' : '1,2v,3t,3b,3v';
              break;
            case 'llp':
              optionalTypes = isV ? '1,3r' : '1,2v,3t,3v';
              break;
            case 'lpl':
              optionalTypes = isV ? '1,2h' : '1,2v,3t,3b,3v';
              break;
            case 'pll':
              optionalTypes = isV ? '1,2h,3l' : '1,2v,3b,3v';
              break;

            case 'lpp':
              optionalTypes = isV ? '1,2h,3r,3h' : '1,2v,3t';
              break;
            case 'plp':
              optionalTypes = isV ? '1,2h,3l,3r,3h' : '1,2v';
              break;
            case 'ppl':
              optionalTypes = isV ? '1,2h,3l,3h' : '1,3b';
              break;
            default:
            case 'ppp':
              optionalTypes = isV ? '1,2h,3l,3r,3h' : '1,2h';
              break;
          }
        } else if (this.items.length === 3 || forcedGroupSize === 3) {
          optionalTypes = isV ? '1,2h,3l,3r,3h' : '1,2v,3t,3b,3v';
        }

        if (this.items.length === 2 || forcedGroupSize === 2) {
          optionalTypes = isV ? '1,2h' : '1,2v';
        }
        if (this.items.length === 1 || forcedGroupSize === 1) {
          optionalTypes = '1';
        }

        var groupTypes = optionalTypes.length > 0 ? optionalTypes.split(',') : [];

        //---------| Override with specifically defined group types
        if (this.groupTypes) {

          // let groupTypesArr = union(['1'], this.groupTypes.split(','));
          var _groupTypesArr = this.groupTypes.split(',');

          if (_groupTypesArr.length > 1) {
            (0, _remove2.default)(groupTypes, function (gt) {
              return _groupTypesArr.indexOf(gt) < 0;
            });

            if (groupTypes.length === 0) {
              //there is no match between required group types and the optional ones - use
              groupTypes = ['1'];
            }
          } else {
            groupTypes = _groupTypesArr;
          }
        }

        //---------| Calc collage density
        if (this.layoutsVersion > 1 && this.collageDensity) {
          //th new calculation of the collage amount

          var collageDensity = this.collageDensity;

          //use the collage amount to determine the optional groupsize
          var maxGroupType = parseInt((0, _last2.default)(groupTypes));
          var optionalGroupSizes = void 0;
          if (maxGroupType === 3) {
            optionalGroupSizes = [[1], [1, 2], [1, 2, 3], [2, 3], [3]];
          } else if (maxGroupType === 2) {
            optionalGroupSizes = [[1], [1, 2], [2]];
          } else {
            optionalGroupSizes = [[1]];
          }
          var targetGroupsizes = optionalGroupSizes[Math.floor(collageDensity * (optionalGroupSizes.length - 1))];
          // seed += ((collageDensity * 1.5) - 0.75) * numOfOptions;

          (0, _remove2.default)(groupTypes, function (groupType) {
            return targetGroupsizes.indexOf(parseInt(groupType)) < 0;
          });

          if (groupTypes.length === 0) {
            groupTypes = ['1'];
          }
        }

        //---------| Calculate a random seed for the collage group type
        var numOfOptions = groupTypes.length;
        var seed = void 0;
        if (this.isVertical) {
          //vertical galleries random is not relevant (previous group is in another column)
          seed = _utils.utils.hashToInt(this.items[0].hash) % numOfOptions;
          //console.log('Seed is: ' + seed + '. Found using hash: ' + this.items[0].hash);
        } else {
          seed = (this.inStripIdx + this.stripIdx) % numOfOptions;
        }

        if (this.layoutsVersion === 1 && this.collageAmount) {
          //backwards compatibility
          seed += (this.collageAmount - 0.5) * numOfOptions;
        }
        seed = Math.min(Math.max(0, seed), numOfOptions - 1);
        seed = Math.round(seed);

        //---------| Final group type to render according to:
        // - the number of options
        // - the collageAmount (if 0 - always renders 1 image, if 1 always renders the max amount)
        // - random seed (determined by the hash)
        return groupTypes[seed] || '1';
      }
    }
  }, {
    key: 'placeItems',
    value: function placeItems(forcedGroupSize) {

      this.type = this.getGroupType(forcedGroupSize);

      //---------| Render the images by the groupType
      var items = [];
      var item = void 0;
      var w = 0;
      var h = 0;

      switch (this.type) {
        default:
        case '1':

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            items.push(item);
            w = item.width;
            h = item.height;
          }

          break;

        case '2v':

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            items.push(item);
            w = item.width;
            h = item.height;
          }

          item = this.safeGetItem(1);
          if (item) {
            item.pinToCorner('bottom-left');
            item.resize(w / item.width);
            h += item.height;
            items.push(item);
          }

          break;

        case '2h':

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            item.innerOffset = [0, 0];
            items.push(item);
            w = item.width;
            h = item.height;
          }

          item = this.safeGetItem(1);
          if (item) {
            item.pinToCorner('top-right');
            item.innerOffset = [0, 0];
            item.resize(h / item.height);
            w += item.width;
            items.push(item);
          }

          break;

        case '3b':

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            items.push(item);
            w = item.width;
            h = item.height;
          }

          item = this.safeGetItem(1);
          if (item) {
            item.pinToCorner('top-right');
            item.resize(h / item.height);
            w += item.width;
            items.push(item);
          }

          item = this.safeGetItem(2);
          if (item) {
            item.pinToCorner('bottom-left');
            item.resize(w / item.width);
            h += item.height;
            items.push(item);
          }

          break;

        case '3t':

          item = this.safeGetItem(1);
          if (item) {
            item.pinToCorner('bottom-left');
            items.push(item);
            w = item.width;
            h = item.height;
          }

          item = this.safeGetItem(2);
          if (item) {
            item.pinToCorner('bottom-right');
            item.resize(h / item.height);
            w += item.width;
            items.push(item);
          }

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            item.resize(w / item.width);
            h += item.height;
            items = [item].concat(items);
          }

          break;

        case '3r':

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            items.push(item);
            w = item.width;
            h = item.height;
          }

          item = this.safeGetItem(1);
          if (item) {
            item.pinToCorner('bottom-left');
            item.resize(w / item.width);
            h += item.height;
            items.push(item);
          }

          item = this.safeGetItem(2);
          if (item) {
            item.pinToCorner('top-right');
            item.resize(h / item.height);
            w += item.width;
            items.push(item);
          }

          break;

        case '3l':

          item = this.safeGetItem(1);
          if (item) {
            item.pinToCorner('top-right');
            items.push(item);
            w = item.width;
            h = item.height;
          }

          item = this.safeGetItem(2);
          if (item) {
            item.pinToCorner('bottom-right');
            item.resize(w / item.width);
            h += item.height;
            items.push(item);
          }

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            item.resize(h / item.height);
            w += item.width;
            items = [item].concat(items);
          }

          break;

        case '3v':

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            item.setPosition('relative');
            items.push(item);
            w = item.width;
            h = item.height;
          }

          item = this.safeGetItem(1);
          if (item) {
            item.setPosition('relative');
            item.resize(w / item.width);
            h += item.height;
            item.pinToCorner('top', items[0].height / h);
            items.push(item);
          }

          item = this.safeGetItem(2);
          if (item) {
            item.pinToCorner('bottom-left');
            item.setPosition('relative');
            item.resize(w / item.width);
            h += item.height;
            items.push(item);
          }

          break;

        case '3h':

          item = this.safeGetItem(0);
          if (item) {
            item.pinToCorner('top-left');
            item.setPosition('relative');
            items.push(item);
            w = item.width;
            h = item.height;
          }

          item = this.safeGetItem(1);
          if (item) {
            item.setPosition('relative');
            item.resize(h / item.height);
            w += item.width;
            item.pinToCorner('left', items[0].width / w);
            items.push(item);
          }

          item = this.safeGetItem(2);
          if (item) {
            item.pinToCorner('top-right');
            item.setPosition('relative');
            item.resize(h / item.height);
            w += item.width;
            items.push(item);
          }

          break;
      }

      this.width = w;
      this.height = h;
      this.items = items;
      this.placed = true;
    }
  }, {
    key: 'resizeToHeight',
    value: function resizeToHeight(height) {

      this.height = height;
      this.width = this.getWidthByHeight(height);

      if (_utils.utils.shouldLog('spacing')) {
        console.log('SPACING - Group #' + this.idx + ' resizeToHeight H: ' + height);
        console.log('SPACING - Group #' + this.idx + ' resizeToHeight W: ' + this.width);
      }

      var items = (0, _includes2.default)(['3b', '3r'], this.type) ? this.items.slice().reverse() : this.items;
      for (var item, i = 0; item = items[i]; i++) {
        item.group = {
          top: this.top,
          left: this.left,
          width: this.width,
          height: this.height
        };
        item.offset = {
          bottom: item.offset.top + this.height,
          right: item.offset.left + this.width
        };
        item.resize(this.getItemDimensions(items, i));
      }
    }
  }, {
    key: 'resizeToWidth',
    value: function resizeToWidth(width) {

      this.width = width;
      this.height = this.getHeightByWidth(width);

      if (_utils.utils.shouldLog('spacing')) {
        console.log('SPACING - Group #' + this.idx + ' resizeToWidth W: ' + width);
        console.log('SPACING - Group #' + this.idx + ' resizeToWidth H: ' + this.height);
      }

      var items = (0, _includes2.default)(['3b', '3r'], this.type) ? this.items.slice().reverse() : this.items;
      for (var item, i = 0; item = items[i]; i++) {
        item.group = {
          top: this.top,
          left: this.left,
          width: this.width,
          height: this.height
        };
        item.offset = {
          bottom: item.offset.top + this.height,
          right: item.offset.left + this.width
        };

        item.resize(this.getItemDimensions(items, i));
      }
    }
  }, {
    key: 'getItemDimensions',
    value: function getItemDimensions(items, idx) {
      var m = this.imageMargin * 2;
      switch (this.type) {
        default:
        case '1':
        case '2v':
        case '3v':
          {
            var w = this.width - m;
            return w > 0 && {
              width: w
            };
          }
        case '2h':
        case '3h':
          {
            var h = this.height - m;
            return h > 0 && {
              height: h
            };
          }
        case '3t':
        case '3b':
          if (idx === 0) {
            var _w = this.width - m;
            return _w > 0 && {
              width: _w
            };
          } else {
            var _h = this.height - items[0].height - 2 * m;
            return _h > 0 && {
              height: _h
            };
          }
        case '3r':
        case '3l':
          if (idx === 0) {
            var _h2 = this.height - m;
            return _h2 > 0 && {
              height: _h2
            };
          } else {
            var _w2 = this.width - items[0].width - 2 * m;
            return _w2 > 0 && {
              width: _w2
            };
          }
      }
    }
  }, {
    key: 'getHeightByWidth',
    value: function getHeightByWidth(W) {
      var Rg = 1;
      var Rm = 1;
      var M = this.imageMargin * 2;
      var R = this.items.map(function (item) {
        return item.width / item.height;
      });
      switch (this.type) {
        // ---------------------------------
        // GENERAL FORMULA:
        // ---------------------------------
        // Rg = Group ratio [layout specific calculation]
        // M = margin space between items ( = margin around item * 2)
        // Rm = Margin ratio [layout specific calculation]
        // ---------------------------------
        // | H = W * R + M * Rm |
        // ---------------------------------
        //    const H = W * Rg + M * (Vi - Hi * Rg);

        default:
        case '1':
          Rg = 1 / R[0];
          Rm = 1 - Rg;
          break;
        case '2h':
          Rg = 1 / (R[0] + R[1]);
          Rm = 1 - 2 * Rg;
          break;
        case '2v':
          Rg = 1 / R[0] + 1 / R[1];
          Rm = 2 - Rg;
          break;
        case '3h':
          Rg = 1 / (R[0] + R[1] + R[2]);
          Rm = 1 - 3 * Rg;
          break;
        case '3v':
          Rg = 1 / R[0] + 1 / R[1] + 1 / R[2];
          Rm = 3 - Rg;
          break;
        case '3t':
          Rg = 1 / (R[2] + R[1]) + 1 / R[0];
          Rm = 2 - 2 / (R[2] + R[1]) + 1 / R[0];
          break;
        case '3b':
          Rg = 1 / (R[0] + R[1]) + 1 / R[2];
          Rm = 2 - 2 / (R[0] + R[1]) + 1 / R[2];
          break;
        case '3l':
          Rg = (R[1] + R[2]) / (R[0] * R[1] + R[1] * R[2] + R[0] * R[2]);
          Rm = 2 - Rg * (2 + R[0]);
          break;
        case '3r':
          Rg = (R[0] + R[1]) / (R[0] * R[1] + R[1] * R[2] + R[0] * R[2]);
          Rm = 2 - Rg * (2 + R[2]);
          break;
      }
      var H = W * Rg + M * Rm;

      if (_utils.utils.shouldLog('spacing')) {
        console.log('SPACING - getHeightByWidth, W: ' + W + ', H:' + H, this.type, Rg, Rm);
      }

      return H;
    }
  }, {
    key: 'getWidthByHeight',
    value: function getWidthByHeight(H) {
      var Rg = 1;
      var Rm = 1;
      var M = this.imageMargin * 2;
      var R = this.items.map(function (item) {
        return item.width / item.height;
      });
      switch (this.type) {
        // ---------------------------------
        // GENERAL FORMULA:
        // ---------------------------------
        // Rh = Group ratio [layout specific calculation]
        // M = margin space between items ( = margin around item * 2)
        // Rm = Margin ratio [layout specific calculation]
        // ---------------------------------
        // | W = H * Rg + M * Rm |
        // ---------------------------------
        default:
        case '1':
          Rg = R[0];
          Rm = 1 - Rg;
          break;
        case '2h':
          Rg = R[0] + R[1];
          Rm = 2 - Rg;
          break;
        case '2v':
          Rg = 1 / (1 / R[0] + 1 / R[1]);
          Rm = 1 - 2 * Rg;
          break;
        case '3h':
          Rg = R[0] + R[1] + R[2];
          Rm = 3 - Rg;
          break;
        case '3v':
          Rg = 1 / (1 / R[0] + 1 / R[1] + 1 / R[2]);
          Rm = 1 - 3 * Rg;
          break;
        case '3t':
          Rg = 1 / (1 / (R[2] + R[1]) + 1 / R[0]);
          Rm = (2 / (R[2] + R[1]) + 1 / R[0] - 2) * Rg;
          break;
        case '3b':
          Rg = 1 / (1 / (R[0] + R[1]) + 1 / R[2]);
          Rm = (2 / (R[0] + R[1]) + 1 / R[2] - 2) * Rg;
          break;
        case '3l':
          Rg = (R[0] * R[1] + R[1] * R[2] + R[0] * R[2]) / (R[1] + R[2]);
          Rm = 2 + R[0] - 2 * Rg;
          break;
        case '3r':
          Rg = (R[0] * R[1] + R[1] * R[2] + R[0] * R[2]) / (R[0] + R[1]);
          Rm = 2 + R[2] - 2 * Rg;
          break;
      }
      var W = H * Rg + M * Rm;

      if (_utils.utils.shouldLog('spacing')) {
        console.log('SPACING - getWidthByHeight, H: ' + H + ', W:' + W, this.type, Rg, Rm);
      }

      return W;
    }
  }, {
    key: 'setTop',
    value: function setTop(top) {
      this.top = top || 0;
      for (var item, i = 0; item = this.items[i]; i++) {
        item.offset = {
          top: top,
          bottom: top + this.height
        };
      }
    }
  }, {
    key: 'setLeft',
    value: function setLeft(left) {
      this.left = left || 0;
      this.right = left + this.width;
      for (var item, i = 0; item = this.items[i]; i++) {
        item.offset = {
          left: left,
          right: left + this.width
        };
      }
    }
  }, {
    key: 'id',
    get: function get() {
      return 'g' + this.idx + '_' + (this.items[0] || {}).id;
    }
  }, {
    key: 'ratio',
    get: function get() {
      var w = this.width;
      var h = this.height;
      return w / h;
    }
  }, {
    key: 'totalHeight',
    get: function get() {
      return this.height + (this.bottomInfoHeight || 0);
    }
  }, {
    key: 'bottom',
    get: function get() {
      return this.top + this.height;
    }
  }, {
    key: 'items',
    set: function set(items) {
      this._items = items;
    },
    get: function get() {
      return this._items;
    }
  }, {
    key: 'realItems',
    get: function get() {
      return (0, _filter2.default)(this._items, function (item) {
        return item.type !== 'dummy';
      });
    }
  }, {
    key: 'isWithinMinItemSize',
    get: function get() {
      var _this = this;

      if (this.items.length === 0 || !this.placed) {
        return false;
      }
      if (this.items.length === 1) {
        return true;
      } else {
        return this.items.reduce(function (i, item) {
          var isInSize = Math.min(item.width, item.height) >= _this.minItemSize;
          return i && isInSize;
        }, true);
      }
    }
  }, {
    key: 'scheme',
    get: function get() {
      return {
        id: this.id,
        idx: this.idx,
        type: this.type,
        width: this.width,
        height: this.height,
        totalHeight: this.totalHeight,
        ratio: this.ratio,
        top: this.top,
        left: this.left,
        right: this.right,
        bottom: this.bottom,
        visible: this.visible,
        rendered: this.rendered,
        required: this.required
      };
    }
  }]);
  return Group;
}();

/*
 <img onLoad={() => this.setItemLoaded()} className={'image' + (this.state.loaded ? '' : '-preload')}
 src={this.props.resized_url}/>
 */

/***/ }),
/* 136 */
/*!**************************************!*\
  !*** ../node_modules/lodash/last.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 137 */
/*!*************************************************!*\
  !*** ../node_modules/fbjs/lib/emptyFunction.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 138 */
/*!*********************************************!*\
  !*** ../node_modules/fbjs/lib/invariant.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 139 */
/*!*******************************************!*\
  !*** ../node_modules/fbjs/lib/warning.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 137);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 140 */
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 141 */
/*!*********************************************!*\
  !*** ../node_modules/shallowequal/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),
/* 142 */
/*!**************************************************!*\
  !*** ../node_modules/component-indexof/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 143 */
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ 11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(/*! ./components/App */ 144);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),
/* 144 */
/*!*********************************!*\
  !*** ./components/App/index.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(/*! ./App */ 145);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 145 */
/*!*******************************!*\
  !*** ./components/App/App.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _proGalleryLayouter = __webpack_require__(/*! pro-gallery-layouter */ 146);

var _SideBar = __webpack_require__(/*! ../SideBar */ 320);

var _SideBar2 = _interopRequireDefault(_SideBar);

var _Gallery = __webpack_require__(/*! ../Gallery */ 338);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _images = __webpack_require__(/*! ../../constants/images */ 341);

var _images2 = _interopRequireDefault(_images);

__webpack_require__(/*! ./App.scss */ 342);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.toggleSidebar = _this.toggleSidebar.bind(_this);
    _this.resize = _this.resize.bind(_this);
    _this.handleStylesChange = _this.handleStylesChange.bind(_this);

    _this.defaultStateStyles = {
      sampleSize: 100,
      gotStyleParams: false,
      galleryType: -1,
      selectedLayout: 0,
      isVertical: false,
      gallerySize: 320,
      minItemSize: 120,
      groupSize: 3,
      chooseBestGroup: true,
      groupTypes: '1,2h,2v,3t,3b,3l,3r',
      cubeImages: false,
      cubeType: 'fill',
      smartCrop: false,
      fullscreen: true,
      allowSocial: true,
      allowDownload: false,
      allowTitle: true,
      allowDescription: false,
      allowMultishare: false,
      loveButton: true,
      loveCounter: true,
      videoLoop: true,
      videoSpeed: 1,
      videoPlay: 'hover',
      gallerySliderImageRatio: 0,
      galleryImageRatio: 2,
      sharpParams: {
        quality: 90,
        usm: {} // do not apply usm - {usm_r: 0.66, usm_a: 1.00, usm_t: 0.01},
      },
      collageAmount: 0.8,
      collageDensity: 0.8,
      borderRadius: 0,
      boxShadow: 0,
      imageMargin: 5,
      galleryMargin: 0,
      floatingImages: 0,
      viewMode: 'preview',
      galleryHorizontalAlign: 'center',
      galleryTextAlign: 'center',
      galleryVerticalAlign: 'center',
      enableInfiniteScroll: 1,
      itemClick: 'expand',
      cubeRatio: 1, //determine the ratio of the images when using grid (use 1 for squares grid)
      fixedColumns: 0, //determine the number of columns regardless of the screen size (use 0 to ignore)
      oneRow: false, //render the gallery as a single row with horizontal scroll
      showArrows: false,
      isSlideshow: false,
      hasThumbnails: false,
      galleryThumbnailsAlignment: 'bottom',
      thumbnailSpacings: 0,
      gridStyle: 0,
      useCustomButton: false,
      titlePlacement: 'SHOW_ON_HOVER'
    };

    _this.state = {
      sampleSize: 100,
      styles: Object.assign({}, _this.defaultStateStyles, _this.getUrlStyles),
      sidebarWidth: 500,
      container: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    console.log('Initial State is', _this.state);

    window.addEventListener('resize', _this.resize);
    return _this;
  }

  _createClass(App, [{
    key: 'getUrlStyles',
    value: function getUrlStyles() {
      var search = location.search.substring(1);
      return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }
  }, {
    key: 'setUrlStyles',
    value: function setUrlStyles(styles) {

      var str = "?";
      for (var key in styles) {
        if (str != "") {
          str += "&";
        }
        str += key + "=" + encodeURIComponent(styles[key]);
      }

      history.pushState(styles, "Pro Gallery Playground");
    }
  }, {
    key: 'toggleSidebar',
    value: function toggleSidebar() {
      this.setState({
        sidebarWidth: !this.state.sidebarWidth * 500 //toggles between 500 and 0
      }, function () {
        window.dispatchEvent(new Event('resize')); //trigger resize event (remove when renderer accepts props)
      });
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.setState({
        container: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    }
  }, {
    key: 'handleStylesChange',
    value: function handleStylesChange(newStyles) {
      var styles = Object.assign({}, newStyles, { at: Date.now() });
      this.setState({ styles: styles });
      this.setUrlStyles(styles);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          styles = _state.styles,
          container = _state.container,
          sidebarWidth = _state.sidebarWidth,
          sampleSize = _state.sampleSize;

      var layout = new _proGalleryLayouter.Layouter({
        items: _images2.default.slice(0, sampleSize),
        container: _extends({}, container, {
          width: container.width - sidebarWidth
        }),
        styleParams: this.state.styles
      });
      return _react2.default.createElement(
        'div',
        { ref: function ref(_ref) {
            _this2.root = _ref;
          } },
        sidebarWidth ? _react2.default.createElement(_SideBar2.default, {
          container: {
            width: sidebarWidth,
            height: container.height
          },
          styles: styles,
          handleStylesChange: this.handleStylesChange
        }) : null,
        _react2.default.createElement('i', { className: 'toggle-settings glyphicon glyphicon-menu-right ' + (sidebarWidth ? '' : ' closed '), onClick: this.toggleSidebar }),
        _react2.default.createElement(
          'div',
          {
            className: 'playground-gallery', style: {
              width: container.width - sidebarWidth + 'px'
            }
          },
          _react2.default.createElement(_Gallery2.default, { layout: layout })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 146 */
/*!**************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/index.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layouter = __webpack_require__(/*! ./layouter */ 147);

var _layouter2 = _interopRequireDefault(_layouter);

var _item = __webpack_require__(/*! ./item */ 134);

var _group = __webpack_require__(/*! ./group */ 135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Layouter: _layouter2.default,
  Group: _group.Group,
  Item: _item.Item
};

/***/ }),
/* 147 */
/*!*****************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/layouter.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 53);

var _assign2 = _interopRequireDefault(_assign);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ 98);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isArray = __webpack_require__(/*! lodash/isArray */ 3);

var _isArray2 = _interopRequireDefault(_isArray);

var _isString = __webpack_require__(/*! lodash/isString */ 99);

var _isString2 = _interopRequireDefault(_isString);

var _fill = __webpack_require__(/*! lodash/fill */ 160);

var _fill2 = _interopRequireDefault(_fill);

var _sum = __webpack_require__(/*! lodash/sum */ 166);

var _sum2 = _interopRequireDefault(_sum);

var _each = __webpack_require__(/*! lodash/each */ 168);

var _each2 = _interopRequireDefault(_each);

var _utils = __webpack_require__(/*! ./utils */ 71);

var _item = __webpack_require__(/*! ./item.js */ 134);

var _group = __webpack_require__(/*! ./group.js */ 135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Strip = function Strip(lastIdx) {
  (0, _classCallCheck3.default)(this, Strip);

  this.ratio = 0;
  this.groups = [];
  this.height = 0;
  this.idx = (lastIdx || 0) + 1;
};

var Layouter = function () {
  function Layouter(layoutParams) {
    (0, _classCallCheck3.default)(this, Layouter);


    this.ready = false;
    this.pointer = 0;
    this.layoutItems = [];

    this.findNeighborItem = this.findNeighborItem.bind(this);

    this.updateParams(layoutParams);
    this.createLayout();
  }

  (0, _createClass3.default)(Layouter, [{
    key: 'insertIfDefined',
    value: function insertIfDefined(obj, field, value) {
      if (!(0, _isUndefined2.default)(value)) {
        obj[field] = value;
      }
    }
  }, {
    key: 'convertStyleParams',
    value: function convertStyleParams(styleParams) {

      //default styleParams
      var convertedStyleParams = (0, _assign2.default)({
        cubeImages: false,
        cubeType: 'fill',
        cubeRatio: 1,
        smartCrop: false,
        imageMargin: 10,
        galleryMargin: 0,
        floatingImages: 0,
        chooseBestGroup: true,
        groupSize: 3,
        groupTypes: '1,2h,2v,3h,3v,3t,3b,3l,3r',
        rotatingGroupTypes: '',
        isVertical: true,
        minItemSize: 120,
        oneRow: false,
        gallerySize: 500,
        collageDensity: 50
      }, styleParams);

      this.insertIfDefined(convertedStyleParams, 'cubeImages', convertedStyleParams.cropItems);
      this.insertIfDefined(convertedStyleParams, 'cubeType', convertedStyleParams.cropType);
      this.insertIfDefined(convertedStyleParams, 'cubeRatio', convertedStyleParams.cropRatio);
      this.insertIfDefined(convertedStyleParams, 'smartCrop', convertedStyleParams.smartCrop);
      this.insertIfDefined(convertedStyleParams, 'imageMargin', convertedStyleParams.itemSpacing);
      this.insertIfDefined(convertedStyleParams, 'galleryMargin', convertedStyleParams.layoutSpacing);
      this.insertIfDefined(convertedStyleParams, 'floatingImages', convertedStyleParams.randomSpacings);
      this.insertIfDefined(convertedStyleParams, 'chooseBestGroup', convertedStyleParams.smartGrouping);
      this.insertIfDefined(convertedStyleParams, 'groupSize', convertedStyleParams.itemsPerGroup);
      this.insertIfDefined(convertedStyleParams, 'groupTypes', (0, _isArray2.default)(convertedStyleParams.allowedGroupTypes) ? convertedStyleParams.allowedGroupTypes.join(',') : undefined);
      this.insertIfDefined(convertedStyleParams, 'rotatingGroupTypes', (0, _isArray2.default)(convertedStyleParams.rotatingGroupTypes) ? convertedStyleParams.rotatingGroupTypes.join(',') : undefined);
      this.insertIfDefined(convertedStyleParams, 'isVertical', convertedStyleParams.isColumnsLayout);
      this.insertIfDefined(convertedStyleParams, 'minItemSize', convertedStyleParams.minItemSize);
      this.insertIfDefined(convertedStyleParams, 'oneRow', convertedStyleParams.isVerticalScroll);
      this.insertIfDefined(convertedStyleParams, 'gallerySize', convertedStyleParams.rowSize || convertedStyleParams.columnSize);
      this.insertIfDefined(convertedStyleParams, 'collageDensity', convertedStyleParams.collageDensity);

      return convertedStyleParams;
    }
  }, {
    key: 'convertContainer',
    value: function convertContainer(container, styleParams) {

      var convertedContainer = (0, _assign2.default)({
        galleryWidth: 1000,
        galleryHeight: 1000,
        bounds: {}
      }, container);

      if (container.width >= 0) {
        convertedContainer.galleryWidth = container.width + ((styleParams.imageMargin || 0) - (styleParams.galleryMargin || 0)) * 2;
      }
      if (container.height >= 0) {
        convertedContainer.galleryHeight = container.height + ((styleParams.imageMargin || 0) - (styleParams.galleryMargin || 0));
      }

      return convertedContainer;
    }
  }, {
    key: 'updateParams',
    value: function updateParams(layoutParams) {

      this.srcItems = layoutParams.items;
      this.styleParams = this.convertStyleParams(layoutParams.styleParams);
      this.container = this.convertContainer(layoutParams.container, this.styleParams);
      this.showAllItems = layoutParams.showAllItems;
    }
  }, {
    key: 'verifyGalleryState',
    value: function verifyGalleryState() {
      if (!this.container.galleryWidth) {
        this.ready = false;
        this.reason = 'galleryWidth is undefined or 0';
        return false;
      }

      if (!this.styleParams.gallerySize) {
        this.ready = false;
        this.reason = 'gallerySize is undefined or 0';
        return false;
      }

      return true;
    }
  }, {
    key: 'createLayout',
    value: function createLayout(layoutParams) {

      if (!(0, _isUndefined2.default)(layoutParams)) {
        this.updateParams(layoutParams);
      }

      if (!this.verifyGalleryState()) {
        return false;
      }

      this.pointer = 0;
      this.firstGroup = false;
      this.layoutItems = [];

      var gallerySize = Math.floor(this.styleParams.gallerySize) + Math.ceil(2 * (this.styleParams.imageMargin - this.styleParams.galleryMargin));
      var galleryWidth = Math.floor(this.container.galleryWidth);
      var maxGroupSize = this.maxGroupSize;

      var groupIdx = 1;
      var inStripIdx = 1;
      var item = {};

      var groupItems = [];
      var group = void 0;
      var bounds = this.container.bounds || {};

      var strip = new Strip();

      var numOfCols = 1;
      var columns = [];
      var columnsH = [];
      var columnsW = [];
      var cubeRatios = [];

      var galleryHeight = 0;

      var safetyCounter = 1000000;

      if (this.styleParams.isVertical) {
        if (this.styleParams.fixedColumns > 0) {
          numOfCols = _utils.utils.isMobile() ? 1 : this.styleParams.fixedColumns;
        } else {
          numOfCols = Math.ceil(galleryWidth / gallerySize) || 1;
        }
        gallerySize = Math.floor(galleryWidth / numOfCols);
        columnsW = (0, _fill2.default)(Array(numOfCols), gallerySize);
        columnsW[columnsW.length - 1] += galleryWidth - (0, _sum2.default)(columnsW); //the last group compensates for half pixels in other groups
        cubeRatios = (0, _fill2.default)(Array(numOfCols), this.styleParams.cubeRatio);
        cubeRatios[columnsW.length - 1] = this.styleParams.cubeRatio * (columnsW[columnsW.length - 1] / gallerySize); //fix the last group's cube ratio
      } else {
        numOfCols = 1;
        // gallerySize = Math.min(this.styleParams.gallerySize, galleryWidth);
      }

      while (this.srcItems[this.pointer]) {

        if ((0, _isArray2.default)(this.srcItems[this.pointer])) {
          console.error({ msg: 'no dto', pointer: this.pointer, allItems: this.srcItems });
        }

        //console.log('Creating item #' + this.pointer + ' / ' + this.srcItems.length, this.srcItems[this.pointer]);
        item = new _item.Item({
          idx: this.pointer,
          scrollTop: galleryHeight,
          dto: this.srcItems[this.pointer],
          cubeImages: this.styleParams.cubeImages,
          cubeType: this.styleParams.cubeType,
          cubeRatio: this.styleParams.cubeRatio,
          smartCrop: this.styleParams.smartCrop,
          cropOnlyFill: this.styleParams.cropOnlyFill,
          imageMargin: this.styleParams.imageMargin,
          galleryMargin: this.styleParams.galleryMargin,
          floatingImages: this.styleParams.floatingImages,
          container: this.container,
          createdBy: 'galleryStructure'
        });

        this.layoutItems[this.pointer] = item;

        //push the image to a group - until its full
        groupItems.push(item);
        if ( //conditions to wait for the next item
        !this.isLastImages //last images in gallery - do not group
        && groupItems.length < maxGroupSize //if the group is too small
        ) {
            //wait for more images
            this.pointer++;
            continue;
          }

        group = new _group.Group({
          idx: groupIdx,
          stripIdx: strip.idx,
          inStripIdx: inStripIdx,
          top: galleryHeight,
          items: groupItems,
          chooseBestGroup: this.styleParams.chooseBestGroup,
          groupTypes: this.styleParams.groupTypes,
          rotatingGroupTypes: this.styleParams.rotatingGroupTypes,
          cubeImages: this.styleParams.cubeImages,
          cubeType: this.styleParams.cubeType,
          isVertical: this.styleParams.isVertical,
          minItemSize: this.styleParams.minItemSize,
          gallerySize: gallerySize,
          collageAmount: this.styleParams.collageAmount,
          collageDensity: this.styleParams.collageDensity,
          layoutsVersion: this.styleParams.layoutsVersion,
          bottomInfoHeight: this.styleParams.bottomInfoHeight,
          container: this.container,
          imageMargin: this.styleParams.imageMargin
        });

        groupIdx++;
        inStripIdx++;

        //prepare the images in the group
        //group = this.wrapGroup(groupImages);
        if (group.realItems.length < maxGroupSize) {
          //console.warn(group.items.length, '<' ,maxGroupSize, 'waiting for more');
          //move the cursor back if the resulted group is smaller than 3
          if (safetyCounter > 0) {
            safetyCounter--;
            this.pointer += group.items.length - groupItems.length;
          } else {
            console.error('safetyCounter Reached!', this);
          }
        }

        groupItems = [];

        //resize and fit the group in the strip / column
        if (!this.styleParams.isVertical) {

          //---------------------| STRIPS GALLERY |----------------------//

          //open a new strip if needed
          var isStripSmallEnough = void 0;
          if (this.styleParams.oneRow) {
            isStripSmallEnough = false; //onerow layout is one long strip
          } else {
            var withNewGroup = galleryWidth / (strip.ratio + group.ratio) - gallerySize; //start a new strip BEFORE adding the current group
            var withoutNewGroup = galleryWidth / strip.ratio - gallerySize; //start a new strip AFTER adding the current group
            if (isNaN(withNewGroup) || isNaN(withoutNewGroup)) {
              isStripSmallEnough = false;
            } else if (withoutNewGroup < 0) {
              //the strip is already too small
              isStripSmallEnough = true;
            } else if (withNewGroup < 0) {
              //adding the new group makes is small enough
              // check if adding the new group makes the strip TOO small
              //so - without the new group, the strip is larger than the required size - but adding the new group might make it too small
              isStripSmallEnough = Math.abs(withoutNewGroup) < Math.abs(withNewGroup);
            } else {
              isStripSmallEnough = false;
            }

            /*
                      if (isStripSmallEnough && this.isLastImage) {
                        //if it is the last image - prefer adding it to the last strip rather putting it on a new strip
                        isStripSmallEnough = ((Math.abs(withoutNewGroup) * 1) < Math.abs(withNewGroup));
                      }
            */
          }

          var shouldStartNewStrip = !strip.groups || //first image - restart a new strip
          strip.groups.length > 0 && //strip must have at least one group
          isStripSmallEnough;

          if (shouldStartNewStrip) {
            //close the current strip
            if (strip.groups) {
              strip.groups[strip.groups.length - 1].isLastGroup = true;
              strip.groups[strip.groups.length - 1].stripWidth = galleryWidth;
              this.resizeStrip(strip.groups, galleryWidth / strip.ratio);
              galleryHeight += galleryWidth / strip.ratio;
              columns[0] = (columns[0] || []).concat(strip.groups);
            }

            //open a new strip
            strip = new Strip(strip.idx);

            //reset the group (this group will be rebuilt)
            inStripIdx = 1;
            this.pointer -= group.items.length - 1;
            groupIdx--;
            continue;
          }

          //add the group to the (current/new) strip
          group.setTop(galleryHeight);
          group.stripIdx = strip.idx;
          strip.ratio += group.ratio;
          strip.height = Math.min(gallerySize, galleryWidth / strip.ratio);
          strip.groups.push(group);

          if (this.isLastImage && strip.groups) {
            if (this.styleParams.oneRow) {
              strip.height = this.container.galleryHeight + (this.styleParams.imageMargin - this.styleParams.galleryMargin);
            } else if (gallerySize * 2 < galleryWidth / strip.ratio) {
              //stretching the strip to the full width will make it too high - so make it as high as the gallerySize and not stretch
              strip.height = gallerySize;
            } else {
              strip.height = galleryWidth / strip.ratio;
            }

            strip.groups[strip.groups.length - 1].isLastGroup = true;
            strip.groups[strip.groups.length - 1].stripWidth = strip.height * strip.ratio;

            this.resizeStrip(strip.groups, strip.height);
            galleryHeight += strip.height;
            columns[0] = (columns[0] || []).concat(strip.groups);
          }
        } else {

          //---------------------| COLUMNS GALLERY |----------------------//

          //find the shortest column
          var minCol = 0;
          if (this.styleParams.cubeImages) {
            minCol = this.pointer % numOfCols;
            // galleryHeight = Math.max(galleryHeight, columnsH[minCol]);
          } else {
            var minColH = -1;
            for (var i = 0; i < numOfCols; i++) {
              var colH = columnsH[i];
              if (typeof colH === 'undefined') {
                colH = 0;
              }
              if (colH < minColH || minColH < 0) {
                minColH = colH;
                minCol = i;
              }
            }
          }

          columns[minCol] = columns[minCol] || [];
          columnsH[minCol] = columnsH[minCol] || 0;

          //resize the group and images
          group.fixItemsRatio(cubeRatios[minCol]); //fix last column's items ratio (caused by stretching it to fill the screen)
          this.resizeGroup(group, columnsW[minCol]);

          //update the group's position
          group.setTop(columnsH[minCol]);
          group.setLeft(minCol * gallerySize);

          //add the image to the column
          columns[minCol].push(group);

          //add the image height to the column
          columnsH[minCol] += group.totalHeight;

          if (galleryHeight < columnsH[minCol]) {
            galleryHeight = columnsH[minCol];
          }
        }

        //set the group visibility

        if (!this.gotScrollEvent && this.pointer < 10) {
          //until the first scroll event, make sure the first 10 groups are displayed
          group.visible = group.rendered = group.required = true;
        } else {
          group = this.calcVisibilitiesForGroup(group, bounds);
        }

        if (!this.firstGroup) {
          this.firstGroup = group;
        }

        //advance the this.pointer
        this.pointer++;
      }

      //results
      this.lastGroup = group;
      this.strips = strip.idx || 0;
      this.columns = columns;
      this.colWidth = Math.floor(galleryWidth / numOfCols);
      this.height = galleryHeight - (this.styleParams.oneRow ? 0 : (this.styleParams.imageMargin - this.styleParams.galleryMargin) * 2);

      this.calcVisibilities(bounds);

      this.ready = true;
    }
  }, {
    key: 'lastVisibleItemIdx',
    value: function lastVisibleItemIdx() {
      for (var item, i = this.layoutItems.length - 1; item = this.layoutItems[i]; i--) {
        var isVisible = item.offset.top < this.container.galleryHeight - 100; //the item must be visible and about the show more button
        if (isVisible) {
          return i;
        }
      }
      return this.layoutItems.length - 1;
    }
  }, {
    key: 'findNeighborItem',
    value: function findNeighborItem(itemIdx, dir) {
      var _this = this;

      var currentItem = this.layoutItems[itemIdx];

      var neighborItem = void 0;

      var findClosestItem = function findClosestItem(currentItemX, currentItemY, condition) {

        var minDistance = null;
        var minDistanceItem = {};

        var itemY = void 0;
        var itemX = void 0;
        var distance = void 0;

        // each(slice(this.layoutItems, itemIdx - 50, itemIdx + 50), (item) => {
        (0, _each2.default)(_this.layoutItems, function (item) {
          itemY = item.offset.top + item.height / 2;
          itemX = item.offset.left + item.width / 2;
          distance = Math.sqrt(Math.pow(itemY - currentItemY, 2) + Math.pow(itemX - currentItemX, 2));
          if ((minDistance === null || distance > 0 && distance < minDistance) && condition(currentItemX, currentItemY, itemX, itemY)) {
            minDistance = distance;
            minDistanceItem = item;
          }
        });
        return minDistanceItem;
      };

      switch (dir) {
        case 'up':
          neighborItem = findClosestItem(currentItem.offset.left + currentItem.width / 2, currentItem.offset.top, function (curX, curY, itmX, itmY) {
            return itmY < curY;
          });
          break;

        case 'left':
          neighborItem = findClosestItem(currentItem.offset.left, currentItem.offset.top + currentItem.height / 2, function (curX, curY, itmX, itmY) {
            return itmX < curX;
          });
          break;

        case 'down':
          neighborItem = findClosestItem(currentItem.offset.left + currentItem.width / 2, currentItem.offset.bottom, function (curX, curY, itmX, itmY) {
            return itmY > curY;
          });
          break;

        default:
        case 'right':
          neighborItem = findClosestItem(currentItem.offset.right, currentItem.offset.top + currentItem.height / 2, function (curX, curY, itmX, itmY) {
            return itmX > curX;
          });
          break;

      }

      if (neighborItem.idx >= 0) {
        if (_utils.utils.isDev()) {
          console.log('found neighborItem #' + neighborItem.idx, neighborItem);
        }
        return neighborItem.idx;
      } else {
        console.warn('Could not find offset for itemIdx', itemIdx, dir);
        return itemIdx; //stay on the same item
      }
    }
  }, {
    key: 'calcVisibilities',
    value: function calcVisibilities(bounds) {
      if (_utils.utils.shouldLog('visibilities')) {
        console.log('Calculating Visibilities for groups', bounds, this.columns);
      }
      for (var column, c = 0; column = this.columns[c]; c++) {
        for (var group, g = 0; group = column[g]; g++) {
          column[g] = this.calcVisibilitiesForGroup(group, bounds);
          if (_utils.utils.shouldLog('visibilities')) {
            console.log('Calculating Visibilities - group #' + column[g].idx + ' is ' + (column[g].visible ? 'VISIBLE' : column[g].rendered ? 'RENDERED' : 'HIDDEN'), column[g], bounds);
          }
        }
      }
    }
  }, {
    key: 'calcVisibilitiesForGroup',
    value: function calcVisibilitiesForGroup(group, bounds) {
      if (this.showAllItems === true) {
        group.onscreen = group.visible = group.rendered = group.required = true;
      } else if (this.styleParams.oneRow) {
        group.onscreen = group.right >= bounds.onscreenTop && group.left <= bounds.onscreenBottom;
        group.visible = group.right >= bounds.visibleTop && group.left <= bounds.visibleBottom;
        group.rendered = group.right >= bounds.renderedTop && group.left <= bounds.renderedBottom;
        group.required = group.right >= bounds.requiredTop && group.left <= bounds.requiredBottom;
      } else {
        group.onscreen = group.bottom >= bounds.onscreenTop && group.top <= bounds.onscreenBottom;
        group.visible = group.bottom >= bounds.visibleTop && group.top <= bounds.visibleBottom;
        group.rendered = group.bottom >= bounds.renderedTop && group.top <= bounds.renderedBottom;
        group.required = group.bottom >= bounds.requiredTop && group.top <= bounds.requiredBottom;
      }
      for (var i = 0; i < group.items.length; i++) {
        group.items[i].visibility = {
          onscreen: group.onscreen,
          visible: group.visible,
          rendered: group.rendered,
          required: group.required
        };
      }
      return group;
    }
  }, {
    key: 'resizeStrip',
    value: function resizeStrip(groups, height) {
      var left = 0;
      var remainder = 0;
      for (var group, g = 0; group = groups[g]; g++) {
        group.setLeft(left);
        // group.left = (left);
        group.width += remainder; //add the remainder from the last group round
        group.resizeToHeight(height);
        remainder = group.width;
        group.round();
        remainder -= group.width;
        left += group.width;
      }
    }
  }, {
    key: 'resizeGroup',
    value: function resizeGroup(group, width) {
      group.resizeToWidth(width);
      group.round();
    }
  }, {
    key: 'isLastImage',
    get: function get() {
      return !this.srcItems[this.pointer + 1];
    }
  }, {
    key: 'isLastImages',
    get: function get() {
      if (this.styleParams.layoutsVersion > 1) {
        //layouts version 2+
        return !this.srcItems[this.pointer + 1];
      } else {
        //Backwards compatibility
        return !this.srcItems[this.pointer + 3];
      }
    }
  }, {
    key: 'imagesLeft',
    get: function get() {
      return this.srcItems.length - this.pointer - 1;
    }
  }, {
    key: 'maxGroupSize',
    get: function get() {
      var _maxGroupSize = 1;
      try {
        var groupTypes = (0, _isString2.default)(this.styleParams.groupTypes) ? this.styleParams.groupTypes.split(',') : this.styleParams.groupTypes;
        _maxGroupSize = groupTypes.reduce(function (curSize, groupType) {
          return Math.max(curSize, parseInt(groupType));
        }, 1);
        _maxGroupSize = Math.min(_maxGroupSize, this.styleParams.groupSize);
      } catch (e) {
        console.error('couldn\'t calculate max group size - returing 3 (?)', e);
        _maxGroupSize = 3;
      }
      return _maxGroupSize;
    }
  }, {
    key: 'items',
    get: function get() {
      return this.layoutItems;
    }
  }]);
  return Layouter;
}();

exports.default = Layouter;

/***/ }),
/* 148 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/assign.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ 149);
module.exports = __webpack_require__(/*! ../../modules/_core */ 9).Object.assign;


/***/ }),
/* 149 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ 21);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 151) });


/***/ }),
/* 150 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 151 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-assign.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ 38);
var gOPS = __webpack_require__(/*! ./_object-gops */ 61);
var pIE = __webpack_require__(/*! ./_object-pie */ 40);
var toObject = __webpack_require__(/*! ./_to-object */ 96);
var IObject = __webpack_require__(/*! ./_iobject */ 95);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ 27)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 152 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_array-includes.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 25);
var toLength = __webpack_require__(/*! ./_to-length */ 153);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 154);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 153 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-length.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 57);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 154 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 57);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 155 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/define-property.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ 156);
var $Object = __webpack_require__(/*! ../../modules/_core */ 9).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 156 */
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 21);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 17), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 16).f });


/***/ }),
/* 157 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 158 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 28);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 159 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 160 */
/*!**************************************!*\
  !*** ../node_modules/lodash/fill.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseFill = __webpack_require__(/*! ./_baseFill */ 161),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 101);

/**
 * Fills elements of `array` with `value` from `start` up to, but not
 * including, `end`.
 *
 * **Note:** This method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Array
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.fill(array, 'a');
 * console.log(array);
 * // => ['a', 'a', 'a']
 *
 * _.fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * _.fill([4, 6, 8, 10], '*', 1, 3);
 * // => [4, '*', '*', 10]
 */
function fill(array, value, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
    start = 0;
    end = length;
  }
  return baseFill(array, value, start, end);
}

module.exports = fill;


/***/ }),
/* 161 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseFill.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./toInteger */ 62),
    toLength = __webpack_require__(/*! ./toLength */ 164);

/**
 * The base implementation of `_.fill` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 */
function baseFill(array, value, start, end) {
  var length = array.length;

  start = toInteger(start);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : toInteger(end);
  if (end < 0) {
    end += length;
  }
  end = start > end ? 0 : toLength(end);
  while (start < end) {
    array[start++] = value;
  }
  return array;
}

module.exports = baseFill;


/***/ }),
/* 162 */
/*!******************************************!*\
  !*** ../node_modules/lodash/toFinite.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ 163);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 163 */
/*!******************************************!*\
  !*** ../node_modules/lodash/toNumber.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 7),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 41);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 164 */
/*!******************************************!*\
  !*** ../node_modules/lodash/toLength.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(/*! ./_baseClamp */ 165),
    toInteger = __webpack_require__(/*! ./toInteger */ 62);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toLength(3.2);
 * // => 3
 *
 * _.toLength(Number.MIN_VALUE);
 * // => 0
 *
 * _.toLength(Infinity);
 * // => 4294967295
 *
 * _.toLength('3.2');
 * // => 3
 */
function toLength(value) {
  return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
}

module.exports = toLength;


/***/ }),
/* 165 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseClamp.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),
/* 166 */
/*!*************************************!*\
  !*** ../node_modules/lodash/sum.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseSum = __webpack_require__(/*! ./_baseSum */ 167),
    identity = __webpack_require__(/*! ./identity */ 31);

/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
function sum(array) {
  return (array && array.length)
    ? baseSum(array, identity)
    : 0;
}

module.exports = sum;


/***/ }),
/* 167 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseSum.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

module.exports = baseSum;


/***/ }),
/* 168 */
/*!**************************************!*\
  !*** ../node_modules/lodash/each.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./forEach */ 169);


/***/ }),
/* 169 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/forEach.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ 102),
    baseEach = __webpack_require__(/*! ./_baseEach */ 64),
    castFunction = __webpack_require__(/*! ./_castFunction */ 179),
    isArray = __webpack_require__(/*! ./isArray */ 3);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 170 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseForOwn.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ 103),
    keys = __webpack_require__(/*! ./keys */ 19);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 171 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_createBaseFor.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 172 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 173 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 15),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 174 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 175 */
/*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 15),
    isLength = __webpack_require__(/*! ./isLength */ 63),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 176 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseKeys.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ 70),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 177);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 177 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_nativeKeys.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 105);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 178 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_createBaseEach.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 26);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 179 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_castFunction.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 31);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 180 */
/*!**************************************************************************!*\
  !*** ../node_modules/photography-client-lib/dist/src/utils/baseUtils.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseUtils = undefined;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 32);

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 201);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WixSdkWrapper = __webpack_require__(/*! ../sdk/WixSdkWrapper */ 209);

var _WixSdkWrapper2 = _interopRequireDefault(_WixSdkWrapper);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ 98);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ 30);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _clone = __webpack_require__(/*! lodash/clone */ 211);

var _clone2 = _interopRequireDefault(_clone);

var _keys = __webpack_require__(/*! lodash/keys */ 19);

var _keys2 = _interopRequireDefault(_keys);

var _reduce = __webpack_require__(/*! lodash/reduce */ 259);

var _reduce2 = _interopRequireDefault(_reduce);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ 287);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isArray = __webpack_require__(/*! lodash/isArray */ 3);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = __webpack_require__(/*! lodash/isObject */ 7);

var _isObject2 = _interopRequireDefault(_isObject);

var _toString2 = __webpack_require__(/*! lodash/toString */ 129);

var _toString3 = _interopRequireDefault(_toString2);

var _merge = __webpack_require__(/*! lodash/merge */ 131);

var _merge2 = _interopRequireDefault(_merge);

var _queryString = __webpack_require__(/*! query-string */ 301);

var qs = _interopRequireWildcard(_queryString);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseUtils = function () {
  /* @ngInject */
  function BaseUtils() {
    (0, _classCallCheck3.default)(this, BaseUtils);

    this._cache = {};
    this._hash2int = {};
    this._params = {};
  }

  (0, _createClass3.default)(BaseUtils, [{
    key: 'isUndefined',
    value: function isUndefined(something) {
      return typeof something === 'undefined';
    }
  }, {
    key: 'getOrPutFromCache',
    value: function getOrPutFromCache(fld, func) {
      if (this._cache[fld] !== undefined) {
        return this._cache[fld];
      }
      this._cache[fld] = func();
      return this._cache[fld];
    }
  }, {
    key: 'isDemo',
    value: function isDemo() {
      return this.parseGetParam('demo') === '1';
    }
  }, {
    key: 'isInWix',
    value: function isInWix() {
      return this.isTest() || this.getOrPutFromCache('isInWix', function () {
        try {
          return top !== self && document.location.host === 'progallery.wix.com' && document.location.search.indexOf('instance=') >= 0;
        } catch (e) {
          return false;
        }
      });
    }
  }, {
    key: 'isSemiNative',
    value: function isSemiNative() {
      try {
        return window.semiNative;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'hashToInt',
    value: function hashToInt(str, min, max) {
      var int = 0;

      if (this.isUndefined(str) || str.length === 0) {
        return int;
      }

      if (!this._hash2int[str]) {
        for (var i = 0; i < str.length; i++) {
          int += str.charCodeAt(i);
        }
        this._hash2int[str] = int;
      }

      if (this.isUndefined(min) || this.isUndefined(max)) {
        return this._hash2int[str];
      } else {
        return this._hash2int[str] % (max - min + 1) + min;
      }
    }
  }, {
    key: 'parseGetParam',
    value: function parseGetParam(val, url) {

      try {
        if (!this.isUndefined(this._params[val])) {
          return this._params[val];
        }

        var result = '',
            tmp = [];

        var _location = location;

        if (url) {
          _location = {
            search: '?' + (url.split('?')[1] || ''),
            pathname: (url.split('?')[0] || '').split('/')[1] || ''
          };
        }

        _location.search
        //.replace ( "?", "" )
        // this is better, there might be a question mark inside
        .substr(1).split('&').forEach(function (item) {
          tmp = item.split('=');
          if (tmp[0] === val) {
            result = decodeURIComponent(tmp[1]);
          }
        });

        if (!result) {

          //if the param was not found in the search, try decoding the path
          var query = decodeURIComponent(_location.pathname).split('?')[1];
          if (!query) {
            return '';
          }

          query.split('&').forEach(function (item) {
            tmp = item.split('=');
            if (tmp[0] === val) {
              result = decodeURIComponent(tmp[1]);
            }
          });
        }

        this._params[val] = result;

        return result;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'parsePathParam',
    value: function parsePathParam(val) {
      var path = location.pathname;
      var pathArr = path.split('/');
      for (var i = 0; i < pathArr.length; i++) {
        var param = pathArr[i];
        if (param.indexOf(val) >= 0) {
          return param;
        }
      }
      return '';
    }
  }, {
    key: 'parseHashParam',
    value: function parseHashParam(val) {
      var result = '';
      var tmp = [];
      var hashPart = location.href.split('#')[1] || '';

      if (!hashPart) {
        return '';
      }

      hashPart
      //.replace ( "?", "" )
      // this is better, there might be a question mark inside
      .substr(1).split('&').forEach(function (item) {
        tmp = item.split('=');
        if (tmp[0] === val) {
          result = decodeURIComponent(tmp[1]);
        }
      });
      return result;
    }
  }, {
    key: 'stripSlashes',
    value: function stripSlashes(str) {
      var newStr = '';
      if (typeof str === 'string') {
        newStr = str.replace(/\\\//g, '/').replace(/\\'/g, '\'').replace(/\\"/g, '"').replace(/\\0/g, '\0').replace(/\\\\/g, '\\');
      }
      return newStr;
    }
  }, {
    key: 'parseStringObject',
    value: function parseStringObject(sObj) {
      if (typeof sObj !== 'string') {
        return sObj;
      }

      var stripedObj = this.stripSlashes(sObj);
      if (typeof sObj === 'string' && /^[\],:{}\s]*$/.test(stripedObj.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        //this is a json
        try {
          return JSON.parse(stripedObj);
        } catch (e) {
          // console.error('Parse object error: Catched ', e);
        }
      }
      return stripedObj;
    }
  }, {
    key: 'isWixMobile',
    value: function isWixMobile() {
      var _this = this;

      var _isWixMobile = function _isWixMobile() {
        var deviceType = _this.parseGetParam('deviceType');
        if (deviceType) {
          return String(deviceType).indexOf('mobile') >= 0;
        } else {
          return undefined;
        }
      };

      if (!this.isSite()) {
        return _isWixMobile();
      } else {
        return this.getOrPutFromCache('isWixMobile', _isWixMobile);
      }
    }
  }, {
    key: 'isUserAgentMobile',
    value: function isUserAgentMobile() {

      try {
        var _isUserAgentMobile = function _isUserAgentMobile() {
          var check = false;
          (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|pixel|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
              check = true;
            }
          })(navigator.userAgent || navigator.vendor || window.opera);
          return check;
        };

        if (!this.isSite()) {
          return _isUserAgentMobile();
        } else {
          return this.getOrPutFromCache('isUserAgentMobile', _isUserAgentMobile);
        }
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'isMobile',
    value: function isMobile() {
      var _this2 = this;

      var _isMobile = function _isMobile() {
        var isWixMobile = _this2.isWixMobile();
        var isUserAgentMobile = _this2.isUserAgentMobile();

        return _this2.isUndefined(isWixMobile) ? isUserAgentMobile : isWixMobile;
      };

      if (this.isTest()) {
        return false;
      } else if (!this.isSite()) {
        return _isMobile();
      } else {
        return this.getOrPutFromCache('isMobile', _isMobile);
      }
    }
  }, {
    key: 'isTest',
    value: function isTest() {
      try {
        return window.isTest;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'isDev',
    value: function isDev() {

      var isDev = this.isLocal();

      if (!this.isUndefined(this._cache.isDev)) {
        return this._cache.isDev;
      }

      isDev = isDev || this.shouldDebug('ph_local');
      isDev = isDev || this.parseGetParam('debug') === 'true';
      isDev = isDev || (this.safeLocalStorage() || {}).forceDevMode === 'true';
      this._cache.isDev = isDev;
      return isDev;
    }
  }, {
    key: 'isVerbose',
    value: function isVerbose() {
      return !this.isTest() && (this.safeLocalStorage() || {}).forceDevMode === 'true';
    }
  }, {
    key: 'isLocal',
    value: function isLocal() {
      var ipRegex = /([0-9]{1,3}\.){3}[0-9]{1,3}:[0-9]{1,5}/; //matches 111.222.333.444:9999

      if (!this.isUndefined(this._cache.isLocal)) {
        return this._cache.isLocal;
      }
      var host = window.location.hostname;
      var isLocal = host === 'local.wix.com' || host === '0.0.0.0' || host.indexOf('localhost') >= 0 || ipRegex.exec(host) !== null;
      this._cache.isLocal = isLocal;
      return isLocal;
    }
  }, {
    key: 'isStoreGallery',
    value: function isStoreGallery() {
      var _this3 = this;

      return this.getOrPutFromCache('isStoreGallery', function () {
        if (_this3.isSemiNative()) {
          return false;
        }

        try {
          return window.location.search.toLowerCase().indexOf('isstore') > -1;
        } catch (e) {
          if (_this3.isDev()) {
            console.error('cant find window', e);
          }
          return false;
        }
      });
    }
  }, {
    key: 'isDemoMode',
    value: function isDemoMode() {
      return _WixSdkWrapper2.default && _WixSdkWrapper2.default.Utils && _WixSdkWrapper2.default.Utils.getInstanceValue && _WixSdkWrapper2.default.Utils.getInstanceValue('demoMode');
    }
  }, {
    key: 'updateViewMode',
    value: function updateViewMode() {
      //NOTICE: this method must be called after each EDIT_MODE_CHANGED event to clear the cache
      try {
        if (window && window.Wix && window.Wix.Utils && window.Wix.Utils.getViewMode) {
          this._cache.viewMode = window.Wix.Utils.getViewMode();
          return this._cache.viewMode;
        }
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'getViewModeFromCache',
    value: function getViewModeFromCache() {
      return this.getOrPutFromCache('viewMode', function () {
        try {
          return window && window.Wix && window.Wix.Utils && window.Wix.Utils.getViewMode();
        } catch (e) {
          return false;
        }
      });
    }
  }, {
    key: 'isEditor',
    value: function isEditor() {
      if (!this.isInWix()) {
        return false;
      }
      return this.getViewModeFromCache() === 'editor';
    }
  }, {
    key: 'isPreview',
    value: function isPreview() {
      if (!this.isInWix()) {
        return false;
      }
      return this.getViewModeFromCache() === 'preview';
    }
  }, {
    key: 'isSite',
    value: function isSite() {
      return !this.isEditor() && !this.isPreview();
    }
  }, {
    key: 'getUUID',
    value: function getUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }, {
    key: 'generateUUID',
    value: function generateUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.floor(Math.random() * 16) || 0;
        return c === 'x' ? r.toString(16) : c;
      });
    }
  }, {
    key: 'isInSettings',
    value: function isInSettings() {
      return this.parseGetParam('expandsettingsmode') === '1';
    }
  }, {
    key: 'isExternalUrl',
    value: function isExternalUrl(url) {
      return (/(^https?)|(^data)|(^blob)/.test(url)
      );
    }
  }, {
    key: 'isMobileViewer',
    value: function isMobileViewer() {
      if (this.isSite() && !this.isUndefined(this._cache.isMobileViewer)) {
        return this._cache.isMobileViewer;
      }

      var isWixMobile = this.isWixMobile();
      var isUserAgentMobile = this.isUserAgentMobile();

      this._cache.isMobileViewer = isWixMobile && !isUserAgentMobile;
      return this._cache.isMobileViewer;
    }
  }, {
    key: 'isiOS',
    value: function isiOS() {
      return this.getOrPutFromCache('isiOS', function () {
        try {
          return (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
          );
        } catch (e) {
          return false;
        }
      });
    }
  }, {
    key: 'isiPhone',
    value: function isiPhone() {
      return this.getOrPutFromCache('isiPhone', function () {
        try {
          return (/iPhone/.test(navigator.userAgent) && !window.MSStream
          );
        } catch (e) {
          return false;
        }
      });
    }
  }, {
    key: 'isTouch',
    value: function isTouch() {
      var _this4 = this;

      return this.getOrPutFromCache('isTouch', function () {
        try {
          return _this4.isMobile() || 'ontouchstart' in document.documentElement;
        } catch (e) {
          return false;
        }
      });
    }
  }, {
    key: 'browserIs',
    value: function browserIs(browserName) {

      var browsers = {
        chrome: false,
        chromeIos: false,
        explorer: false,
        firefox: false,
        safari: false,
        opera: false
      };

      try {
        if (this.isUndefined(this._cache.browsers)) {

          browsers.chrome = navigator.userAgent.indexOf('Chrome') > -1;
          browsers.chromeIos = navigator.userAgent.indexOf('CriOS') > -1;
          browsers.explorer = navigator.userAgent.indexOf('MSIE') > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./); // support for edge
          browsers.firefox = navigator.userAgent.indexOf('Firefox') > -1;
          browsers.safari = navigator.userAgent.indexOf('Safari') > -1;
          browsers.opera = navigator.userAgent.toLowerCase().indexOf('op') > -1;

          if (browsers.chrome && browsers.safari) {
            browsers.safari = false;
          }

          if (browsers.chrome && browsers.opera) {
            browsers.chrome = false;
          }

          this._cache.browsers = browsers;
        }

        return this._cache.browsers[browserName];
      } catch (e) {
        this._cache.browsers = browsers;
        return false;
      }
    }
  }, {
    key: 'isPlayground',
    value: function isPlayground() {
      if (this.isInWix()) {
        return false;
      }

      try {
        var isPlayground = false;
        try {
          isPlayground = top.location.href.indexOf('playground.html') > 0;
        } catch (e) {
          isPlayground = false;
        }

        return isPlayground;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'isInAlbumsBuilder',
    value: function isInAlbumsBuilder() {
      if (!this.isInWix()) {
        return false;
      }
      try {
        return window && window.debugApp && window.debugApp.indexOf('ph_source_albums') > -1;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'isWixDomain',
    value: function isWixDomain() {
      try {
        return window.location.href.indexOf('wix.com') >= 0;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'isLandscape',
    value: function isLandscape() {
      if (this.isSemiNative()) {
        return false;
      }
      if (!this.isUndefined(this._cache.isLandscape)) {
        return this._cache.isLandscape;
      }
      if (!this.isMobile()) {
        this._cache.isLandscape = false;
      }
      try {
        if (!this.isUndefined(window.orientation)) {
          this._cache.isLandscape = window.orientation === 90 || window.orientation === -90;
        } else {
          var mql = window.matchMedia('(orientation: landscape)');
          if (mql && mql.matches === true) {
            this._cache.isLandscape = true;
          } else {
            this._cache.isLandscape = false;
          }
        }
      } catch (e) {
        this._cache.isLandscape = false;
      }
      return this._cache.isLandscape;
    }
  }, {
    key: 'isOnBoarding',
    value: function isOnBoarding() {
      try {
        var params = qs.parse(window.location.search);
        return params.viewMode && params.viewMode.toLowerCase() === 'onboarding';
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'isAccessibilityEnabled',
    value: function isAccessibilityEnabled() {
      var _this5 = this;

      if (typeof this._cache.isAccessibilityEnabled !== 'undefined') {
        return this._cache.isAccessibilityEnabled;
      }

      if (!this.isSite()) {
        return false;
      }

      var isDevAccessibility = this.shouldDebug('accessibility');

      if (_WixSdkWrapper2.default && typeof _WixSdkWrapper2.default.isVisualFocusEnabled === 'function') {
        try {
          _WixSdkWrapper2.default.isVisualFocusEnabled(function (isIt) {
            _this5._cache.isAccessibilityEnabled = isIt || isDevAccessibility;
          });
        } catch (e) {
          //
        }
      }

      // return false;
      return isDevAccessibility;
    }
  }, {
    key: 'isDebugBuild',
    value: function isDebugBuild() {
      try {
        return "development" === 'development';
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'getDeviceType',
    value: function getDeviceType() {
      return this.isWixMobile() ? 'mobile' : 'desktop';
    }
  }, {
    key: 'safeLocalStorage',
    value: function safeLocalStorage() {
      try {
        return localStorage;
      } catch (e) {
        return window;
      }
    }
  }, {
    key: 'shouldDebug',
    value: function shouldDebug(str) {
      try {
        return !!this.safeLocalStorage()[str] || (window.debugApp || '').indexOf(str) >= 0 || (this.parseGetParam('debugApp') || '').indexOf(str) >= 0;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'shouldLog',
    value: function shouldLog(str) {
      return this.shouldDebug('ph_log_' + str);
    }
  }, {
    key: 'getDateCreatedTicksFromStr',
    value: function getDateCreatedTicksFromStr(dateCreatedStr) {
      var isDateCreatedValid = isNaN(Date.parse(dateCreatedStr)) === false;
      if (isDateCreatedValid) {
        return Date.parse(dateCreatedStr);
      }
      return -8640000000000000;
    }
  }, {
    key: 'deviceHasMemoryIssues',
    value: function deviceHasMemoryIssues() {
      return this.isiOS();
    }
  }, {
    key: 'getUrlPrefix',
    value: function getUrlPrefix(forceProduction) {
      try {
        return window.location.protocol + '//' + (!forceProduction && this.isLocal() ? 'local.wix.com:3001' : 'progallery.wix.com') + '/';
      } catch (e) {
        return 'http://progallery.wix.com/';
      }
    }
  }, {
    key: 'getFullscreenSectionId',
    value: function getFullscreenSectionId() {
      var isStore = this.isStoreGallery();
      return isStore ? 'fullscreen_store_page' : 'fullscreen_page';
    }
  }, {
    key: 'getApiUrlPrefix',
    value: function getApiUrlPrefix() {
      return this.getUrlPrefix(true) + 'api/v1/';
    }
  }, {
    key: 'generateUrl',
    value: function generateUrl(endpointFile, params) {
      params = params || {};
      var isStore = this.isStoreGallery();
      var url = this.getUrlPrefix() + endpointFile;

      if (isStore) {
        params.isStore = true;
      }

      var paramsStr = qs.stringify(params);

      return paramsStr ? url + '?' + paramsStr : url;
    }
  }, {
    key: 'getManageMediaUrl',
    value: function getManageMediaUrl() {
      return this.generateUrl('photos.html');
    }
  }, {
    key: 'getExpandSettingsUrl',
    value: function getExpandSettingsUrl(params) {
      return this.generateUrl('settings-expand.html', params);
    }
  }, {
    key: 'getSettingsWatermarkDisableUrl',
    value: function getSettingsWatermarkDisableUrl() {
      return this.generateUrl('settings-watermark-disable.html');
    }
  }, {
    key: 'getSettingsAddonsUrl',
    value: function getSettingsAddonsUrl() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.generateUrl('settings-addons.html', params);
    }
  }, {
    key: 'getProviderModalUrl',
    value: function getProviderModalUrl() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.generateUrl('provider-modal.html', params);
    }
  }, {
    key: 'getTabIndex',
    value: function getTabIndex(elementName) {
      var elementsArr = ['currentGalleryItem', 'loadMoreButton', 'slideshowNext', 'slideshowPrev', 'currentThumbnail', 'slideshowLove', 'slideshowShare', 'cartIcon', 'cartClose', 'cartFrame', 'fullscreenClose', 'fullscreenNext', 'fullscreenPrev', 'fullscreenInfo',
      // 'fullscreenTitle',
      // 'fullscreenDesc',
      'fullscreenLink', 'fullscreenProvider', 'fullscreenCartButton', 'fullscreenCheckout', 'fullscreenExpand', 'fullscreenVideoPlay', 'fullscreenVideoBar', 'fullscreenVideoMute', 'fullscreenVideoVolume', 'fullscreenCartIcon', 'fullscreenDownload', 'fullscreenLove', 'fullscreenShare'];

      var elementIdx = elementsArr.indexOf(elementName) + 1;
      return elementIdx || -1; //no tabIndex (tab will not focus on this item)
    }
  }, {
    key: 'safeSessionStorage',
    value: function safeSessionStorage() {
      try {
        return sessionStorage;
      } catch (e) {
        return window || {};
      }
    }
  }, {
    key: 'getLocalStorage',
    value: function getLocalStorage() {
      if (this.isDev()) {
        return this.safeSessionStorage();
      } else {
        var _localStorage = this.safeLocalStorage();
        return _localStorage || this.safeSessionStorage();
      }
    }
  }, {
    key: 'setStateAndLog',
    value: function setStateAndLog(that, caller, state, callback) {
      var _this6 = this;

      if (this.isVerbose()) {
        console.log('State Change Called (' + caller + ')', state);
        var oldState = (0, _clone2.default)(that.state);
        that.setState(state, function () {
          var newState = (0, _clone2.default)(that.state);
          var change = _this6.printableObjectsDiff(oldState, newState, 'state');
          if ((0, _keys2.default)(change).length > 0) {
            console.log('State Change Completed (' + caller + ')', change);
          }
          if ((0, _isFunction2.default)(callback)) {
            callback.bind(that)();
          }
        });
      } else {
        that.setState(state, function () {
          if ((0, _isFunction2.default)(callback)) {
            callback.bind(that)();
          }
        });
      }
    }
  }, {
    key: 'printableObjectsDiff',
    value: function printableObjectsDiff(obj1, obj2) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';


      var _toString = function _toString(v) {
        if (v === '') {
          v = '\'\'';
        } else if ((0, _isUndefined2.default)(v)) {
          v = 'undefined';
        }
        return (0, _toString3.default)(v);
      };

      var getInnerDiff = function getInnerDiff(obj1, obj2, prefix) {
        var innerDiff = (0, _reduce2.default)(obj1, function (res, v, k) {
          if (!(0, _isEqual2.default)(v, obj2[k])) {
            if ((0, _isArray2.default)(obj2[k])) {
              if (v.length !== obj2[k].length) {
                res[k + '.length'] = '[' + v.length + '] => [' + obj2[k].length + ']';
              }
              res = (0, _merge2.default)(res, getInnerDiff(v, obj2[k], (prefix ? prefix + '.' : '') + k));
            } else if ((0, _isObject2.default)(obj2[k])) {
              res = (0, _merge2.default)(res, getInnerDiff(v, obj2[k], (prefix ? prefix + '.' : '') + k));
            } else {
              res[(prefix ? prefix + '.' : '') + k] = _toString(v) + ' => ' + _toString(obj2[k]);
            }
          }
          return res;
        }, {});
        return innerDiff;
      };

      return getInnerDiff(obj1, obj2, prefix);
    }
  }, {
    key: 'getUrlParam',
    value: function getUrlParam(name) {
      try {
        (window.location.search.replace('?', '').split('&').filter(function (queryParam) {
          return queryParam.indexOf('=') !== -1;
        }).map(function (queryParam) {
          var _queryParam$split = queryParam.split('='),
              _queryParam$split2 = (0, _slicedToArray3.default)(_queryParam$split, 2),
              key = _queryParam$split2[0],
              value = _queryParam$split2[1];

          return { key: key, value: value };
        }).filter(function (pair) {
          return pair.key === name;
        }).shift() || { value: '' }).value;
      } catch (e) {
        return '';
      }
    }
  }, {
    key: 'isMacOs',
    value: function isMacOs() {
      try {
        window.source === 'mac-os' || this.getUrlParam('macos') === 'true';
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'setExternalId',
    value: function setExternalId() {
      try {
        var uuid = this.getUUID();
        this._setExternalId(uuid);
        setTimeout(this._setExternalId.bind(this), 4000, uuid); //try setting external id again. There is a bug that it is not set sometimes.
      } catch (e) {
        console.error('Utils setExternalId - fail');
        return false;
      }
    }
  }, {
    key: '_setExternalId',
    value: function _setExternalId(id) {
      var _this7 = this;

      _WixSdkWrapper2.default.Settings.setExternalId(id, function (success) {
        _this7.isDev() && console.log('Utils setExternalId - success', id, success);
      }, function (error) {
        console.error('Utils setExternalId - fail', id, error);
      });
    }
  }, {
    key: 'isWebpSupported',
    value: function isWebpSupported() {
      if (this.isTest()) {
        return false;
      }
      try {
        var canvas = (typeof document === 'undefined' ? 'undefined' : (0, _typeof3.default)(document)) === 'object' ? document.createElement('canvas') : {};
        canvas.width = canvas.height = 1;
        return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
      } catch (e) {
        return false;
      }
    }
  }]);
  return BaseUtils;
}();

exports.default = BaseUtils;
var baseUtils = exports.baseUtils = new BaseUtils(); // for inner use

/***/ }),
/* 181 */
/*!****************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 182), __esModule: true };

/***/ }),
/* 182 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/fn/symbol/iterator.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 72);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 76);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 77).f('iterator');


/***/ }),
/* 183 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_string-at.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 57);
var defined = __webpack_require__(/*! ./_defined */ 56);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 184 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-create.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 74);
var descriptor = __webpack_require__(/*! ./_property-desc */ 37);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 75);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 22)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 13)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 185 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dps.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 16);
var anObject = __webpack_require__(/*! ./_an-object */ 23);
var getKeys = __webpack_require__(/*! ./_object-keys */ 38);

module.exports = __webpack_require__(/*! ./_descriptors */ 17) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 186 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_html.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ 14).document;
module.exports = document && document.documentElement;


/***/ }),
/* 187 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gpo.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 18);
var toObject = __webpack_require__(/*! ./_to-object */ 96);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 58)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 188 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 189);
var step = __webpack_require__(/*! ./_iter-step */ 190);
var Iterators = __webpack_require__(/*! ./_iterators */ 33);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 25);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 106)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 189 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 190 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-step.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 191 */
/*!*******************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/symbol.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 192), __esModule: true };

/***/ }),
/* 192 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/fn/symbol/index.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ 193);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 198);
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 199);
__webpack_require__(/*! ../../modules/es7.symbol.observable */ 200);
module.exports = __webpack_require__(/*! ../../modules/_core */ 9).Symbol;


/***/ }),
/* 193 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.symbol.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ 14);
var has = __webpack_require__(/*! ./_has */ 18);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 17);
var $export = __webpack_require__(/*! ./_export */ 21);
var redefine = __webpack_require__(/*! ./_redefine */ 107);
var META = __webpack_require__(/*! ./_meta */ 194).KEY;
var $fails = __webpack_require__(/*! ./_fails */ 27);
var shared = __webpack_require__(/*! ./_shared */ 59);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 75);
var uid = __webpack_require__(/*! ./_uid */ 39);
var wks = __webpack_require__(/*! ./_wks */ 13);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 77);
var wksDefine = __webpack_require__(/*! ./_wks-define */ 78);
var enumKeys = __webpack_require__(/*! ./_enum-keys */ 195);
var isArray = __webpack_require__(/*! ./_is-array */ 196);
var anObject = __webpack_require__(/*! ./_an-object */ 23);
var isObject = __webpack_require__(/*! ./_is-object */ 24);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 25);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 54);
var createDesc = __webpack_require__(/*! ./_property-desc */ 37);
var _create = __webpack_require__(/*! ./_object-create */ 74);
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 197);
var $GOPD = __webpack_require__(/*! ./_object-gopd */ 109);
var $DP = __webpack_require__(/*! ./_object-dp */ 16);
var $keys = __webpack_require__(/*! ./_object-keys */ 38);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ 108).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 40).f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ 61).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 73)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 194 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_meta.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ 39)('meta');
var isObject = __webpack_require__(/*! ./_is-object */ 24);
var has = __webpack_require__(/*! ./_has */ 18);
var setDesc = __webpack_require__(/*! ./_object-dp */ 16).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ 27)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 195 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-keys.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ 38);
var gOPS = __webpack_require__(/*! ./_object-gops */ 61);
var pIE = __webpack_require__(/*! ./_object-pie */ 40);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 196 */
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-array.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 55);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 197 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ 25);
var gOPN = __webpack_require__(/*! ./_object-gopn */ 108).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 198 */
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 199 */
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 78)('asyncIterator');


/***/ }),
/* 200 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 78)('observable');


/***/ }),
/* 201 */
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ 202);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ 205);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 202 */
/*!************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/is-iterable.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 203), __esModule: true };

/***/ }),
/* 203 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/fn/is-iterable.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 76);
__webpack_require__(/*! ../modules/es6.string.iterator */ 72);
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 204);


/***/ }),
/* 204 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/core.is-iterable.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ 110);
var ITERATOR = __webpack_require__(/*! ./_wks */ 13)('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ 33);
module.exports = __webpack_require__(/*! ./_core */ 9).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 205 */
/*!*************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 206), __esModule: true };

/***/ }),
/* 206 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/fn/get-iterator.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 76);
__webpack_require__(/*! ../modules/es6.string.iterator */ 72);
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 207);


/***/ }),
/* 207 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 23);
var get = __webpack_require__(/*! ./core.get-iterator-method */ 208);
module.exports = __webpack_require__(/*! ./_core */ 9).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 208 */
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ 110);
var ITERATOR = __webpack_require__(/*! ./_wks */ 13)('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ 33);
module.exports = __webpack_require__(/*! ./_core */ 9).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 209 */
/*!****************************************************************************!*\
  !*** ../node_modules/photography-client-lib/dist/src/sdk/WixSdkWrapper.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 53);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Wix = __webpack_require__(/*! ./Wix.mock */ 210);

var _Wix2 = _interopRequireDefault(_Wix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WixSdkWrapper = function () {
  function WixSdkWrapper() {
    (0, _classCallCheck3.default)(this, WixSdkWrapper);

    this.init();
  }

  (0, _createClass3.default)(WixSdkWrapper, [{
    key: 'wixSdkIsAvailable',
    value: function wixSdkIsAvailable() {
      try {
        return typeof window !== 'undefined' && typeof window.Wix !== 'undefined' && typeof window.Wix.Utils.getCompId === 'function'; //getCompId function is only available is the TPA version of the sdk
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'init',
    value: function init() {
      try {
        if (this.wixSdkIsAvailable()) {
          //Wix Sdk is on the window
          (0, _assign2.default)(this, window.Wix);
          this.isMock = false;
        } else {
          (0, _assign2.default)(this, _Wix2.default);
          this.isMock = true;
        }
      } catch (e) {
        (0, _assign2.default)(this, _Wix2.default);
        this.isMock = true;
      }
    }
  }]);
  return WixSdkWrapper;
}();

exports.default = new WixSdkWrapper();

/***/ }),
/* 210 */
/*!***********************************************************************!*\
  !*** ../node_modules/photography-client-lib/dist/src/sdk/Wix.mock.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var modelCache = {};

var _document = typeof document !== 'undefined' ? document : {
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {}
};

var WixMock = {
  closeWindow: function closeWindow() {},
  addEventListener: function addEventListener(event, callback) {
    _document.addEventListener(event, callback);
  },
  removeEventListener: function removeEventListener(event, callback) {
    _document.removeEventListener(event, callback);
  },

  stylesMock: { fonts: { testKey: { cssFontFamily: '1111' } }, numbers: {}, colors: {}, booleans: {} },
  colorMock: { colors: { testColorKey: 'color-1' } },
  getBoundingRectAndOffsets: function getBoundingRectAndOffsets(callback) {
    callback({
      offsets: {
        x: 0,
        y: 0
      }
    });
  },
  getCurrentPageId: function getCurrentPageId(callback) {
    callback('mock-page-id');
  },

  Utils: {
    navigateToSection: function navigateToSection() {},
    getOrigCompId: function getOrigCompId() {},
    getCompId: function getCompId() {
      return 'mock-comp-id';
    },
    getViewMode: function getViewMode() {},
    getDemoMode: function getDemoMode() {},
    getInstance: function getInstance() {
      return 'instance';
    },
    getInstanceValue: function getInstanceValue() {
      return '';
    },
    getInstanceId: function getInstanceId() {
      return 'instance-id';
    },
    getBusinessId: function getBusinessId() {
      return 'business-id';
    },
    isOverEditor: function isOverEditor() {
      return false;
    },
    getSectionUrl: function getSectionUrl(sectionIdentifier, callback) {
      setTimeout(function () {
        callback('https://mock_section_url');
      }, 0);
    },

    Media: {
      getResizedImageUrl: function getResizedImageUrl(relativeUrl, width, height) {
        return '/images/test-' + relativeUrl + '-' + width + '-' + height + '.jpg';
      }
    }
  },
  setHeight: function setHeight() {},

  UI: {
    create: function create() {
      return {};
    },
    initialize: function initialize() {},
    onChange: function onChange(key, func) {
      _document.addEventListener(key, function () {
        func(modelCache[key]);
      });
    },
    get: function get(key) {
      return modelCache[key];
    },
    set: function set(key, val) {
      modelCache[key] = val;
    },

    modelCache: modelCache
  },
  Styles: {
    getColorByreference: function getColorByreference() {
      return { value: '#123456' };
    },
    getSiteColors: function getSiteColors() {
      var arr = [];
      for (var i = 0; i < 31; i++) {
        arr[i] = i;
      }
      return arr;
    },
    getStyleParams: function getStyleParams(callbackFunc) {
      if (callbackFunc) {
        return callbackFunc(WixMock.stylesMock);
      } else {
        return WixMock.stylesMock;
      }
    },
    getStyleParamsByStyleId: function getStyleParamsByStyleId(styleId, callbackFunc) {
      if (callbackFunc) {
        return callbackFunc(WixMock.stylesMock);
      } else {
        return WixMock.stylesMock;
      }
    },
    restoreParam: function restoreParam() {
      WixMock.stylesMock = { fonts: { testKey: { cssFontFamily: '1111' } }, numbers: {}, colors: {}, booleans: {} };
    },
    setFontParam: function setFontParam(key, value, callback) {
      WixMock.stylesMock.fonts[key] = { cssFontFamily: value.value.cssFontFamily };
      if (callback) {
        callback();
      }
    },
    setColorParam: function setColorParam(key, value, callback) {
      WixMock.colorMock.colors[key] = value;
      if (callback) {
        callback();
      }
    },
    getSiteTextPresets: function getSiteTextPresets() {
      return {
        Title: {
          editorKey: 'font_0',
          fontFamily: 'fontFamilyTitle',
          lineHeight: '1.4em',
          size: '40px',
          style: 'normal',
          value: 'value',
          weight: 'normal'
        }
      };
    },
    getEditorFonts: function getEditorFonts() {
      return [{
        language: 'hebrew',
        fonts: [{
          cssFontFamily: 'fontFamilyTitle0',
          fontFamily: 'fontFamilyTitle0',
          genericFamily: 'cursive0',
          permissions: 'all0',
          provider: 'google0',
          spriteIndex: 132
        }]
      }, {
        language: 'latin',
        fonts: [{
          cssFontFamily: 'fontFamilyTitle',
          fontFamily: 'fontFamilyTitle',
          genericFamily: 'cursive',
          permissions: 'all',
          provider: 'google',
          spriteIndex: 154
        }]
      }, {
        language: 'arabic',
        fonts: [{
          cssFontFamily: 'fontFamilyTitleArabic',
          fontFamily: 'fontFamilyTitleArabic',
          genericFamily: 'cursiveArabic',
          permissions: 'allArabic',
          provider: 'googleArabic',
          spriteIndex: 160
        }]
      }];
    },
    getStyleId: function getStyleId(callback) {
      callback('mock-style-id');
    }
  },
  Settings: {
    openModal: function openModal(url, width, height, name, callback) {
      callback();
    },
    triggerSettingsUpdatedEvent: function triggerSettingsUpdatedEvent() {},
    getSiteInfo: function getSiteInfo(callback) {
      return callback({ baseUrl: 'www.test.boost.co.il' });
    },
    getDashboardAppUrl: function getDashboardAppUrl(func) {
      func.call();
    },
    refreshApp: function refreshApp() {
      return '';
    },
    setExternalId: function setExternalId() {},
    addComponent: function addComponent() {}
  },
  Events: {
    PUBLIC_DATA_CHANGED: 'PUBLIC_DATA_CHANGED',
    SETTINGS_UPDATED: 'SETTINGS_UPDATED',
    EDIT_MODE_CHANGE: 'EDIT_MODE_CHANGE',
    STYLE_PARAMS_CHANGE: 'STYLE_PARAMS_CHANGE',
    THEME_CHANGE: 'THEME_CHANGE',
    PAGE_NAVIGATION_IN: 'PAGE_NAVIGATION_IN',
    PAGE_NAVIGATION_OUT: 'PAGE_NAVIGATION_OUT'
  },
  Theme: {
    BARE: 'bare'
  },
  scrollTo: function scrollTo() {},
  scrollBy: function scrollBy() {},
  getSiteInfo: function getSiteInfo() {},

  Data: {
    Public: {
      get: function get(key, jsonObj, callback) {
        callback({ pg: 1 });
      }
    }
  },
  Features: {
    isSupported: function isSupported() {
      //isSupported: function (feature, callback){
      //callback(true);
    },

    Types: {
      ADD_COMPONENT: 'ADD_COMPONENT'
    }
  },
  PubSub: {
    subscribe: function subscribe() {},
    publish: function publish() {}
  },
  getSitePages: function getSitePages() {},
  replaceSectionState: function replaceSectionState() {},

  Performance: {
    applicationLoaded: function applicationLoaded() {}
  }
};

exports.default = WixMock;

/***/ }),
/* 211 */
/*!***************************************!*\
  !*** ../node_modules/lodash/clone.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ 111);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 212 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_listCacheClear.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 213 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_listCacheDelete.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 46);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 214 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheGet.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 46);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 215 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheHas.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 46);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 216 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheSet.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 46);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 217 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_stackClear.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 45);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 218 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_stackDelete.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 219 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackGet.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 220 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackHas.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 221 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackSet.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 45),
    Map = __webpack_require__(/*! ./_Map */ 79),
    MapCache = __webpack_require__(/*! ./_MapCache */ 80);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 222 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIsNative.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 30),
    isMasked = __webpack_require__(/*! ./_isMasked */ 223),
    isObject = __webpack_require__(/*! ./isObject */ 7),
    toSource = __webpack_require__(/*! ./_toSource */ 112);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 223 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_isMasked.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ 224);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 224 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_coreJsData.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 10);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 225 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_getValue.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 226 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_mapCacheClear.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ 227),
    ListCache = __webpack_require__(/*! ./_ListCache */ 45),
    Map = __webpack_require__(/*! ./_Map */ 79);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 227 */
/*!***************************************!*\
  !*** ../node_modules/lodash/_Hash.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ 228),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ 229),
    hashGet = __webpack_require__(/*! ./_hashGet */ 230),
    hashHas = __webpack_require__(/*! ./_hashHas */ 231),
    hashSet = __webpack_require__(/*! ./_hashSet */ 232);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 228 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_hashClear.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 47);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 229 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_hashDelete.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 230 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashGet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 47);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 231 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashHas.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 47);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 232 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashSet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 47);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 233 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_mapCacheDelete.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 48);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 234 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_isKeyable.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 235 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheGet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 48);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 236 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheHas.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 48);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 237 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheSet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 48);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 238 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseAssign.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 34),
    keys = __webpack_require__(/*! ./keys */ 19);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 239 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseAssignIn.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 34),
    keysIn = __webpack_require__(/*! ./keysIn */ 49);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 240 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseKeysIn.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 7),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 70),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ 241);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 241 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeKeysIn.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 242 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_copySymbols.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 34),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 82);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 243 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_copySymbolsIn.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 34),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ 119);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 244 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getAllKeysIn.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 122),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ 119),
    keysIn = __webpack_require__(/*! ./keysIn */ 49);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 245 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_DataView.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 20),
    root = __webpack_require__(/*! ./_root */ 10);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 246 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_Promise.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 20),
    root = __webpack_require__(/*! ./_root */ 10);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 247 */
/*!**************************************!*\
  !*** ../node_modules/lodash/_Set.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 20),
    root = __webpack_require__(/*! ./_root */ 10);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 248 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_WeakMap.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 20),
    root = __webpack_require__(/*! ./_root */ 10);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 249 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_initCloneArray.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 250 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_initCloneByTag.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ 84),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ 251),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ 252),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ 253),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ 124);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 251 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_cloneDataView.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ 84);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 252 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_cloneRegExp.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 253 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_cloneSymbol.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 28);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 254 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseCreate.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 7);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 255 */
/*!***************************************!*\
  !*** ../node_modules/lodash/isMap.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ 256),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 68),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 69);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 256 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseIsMap.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ 50),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 257 */
/*!***************************************!*\
  !*** ../node_modules/lodash/isSet.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ 258),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 68),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 69);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 258 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseIsSet.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ 50),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 259 */
/*!****************************************!*\
  !*** ../node_modules/lodash/reduce.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ 260),
    baseEach = __webpack_require__(/*! ./_baseEach */ 64),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 85),
    baseReduce = __webpack_require__(/*! ./_baseReduce */ 286),
    isArray = __webpack_require__(/*! ./isArray */ 3);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 260 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_arrayReduce.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 261 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseMatches.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ 262),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ 273),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 128);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 262 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIsMatch.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 44),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 86);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 263 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsEqualDeep.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 44),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ 126),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ 269),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ 272),
    getTag = __webpack_require__(/*! ./_getTag */ 50),
    isArray = __webpack_require__(/*! ./isArray */ 3),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 43),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 67);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 264 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_SetCache.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 80),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ 265),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ 266);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 265 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setCacheAdd.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 266 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setCacheHas.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 267 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_arraySome.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 268 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_cacheHas.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 269 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_equalByTag.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 28),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 123),
    eq = __webpack_require__(/*! ./eq */ 29),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ 126),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ 270),
    setToArray = __webpack_require__(/*! ./_setToArray */ 271);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 270 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_mapToArray.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 271 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_setToArray.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 272 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_equalObjects.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 121);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 273 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getMatchData.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 127),
    keys = __webpack_require__(/*! ./keys */ 19);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 274 */
/*!******************************************************!*\
  !*** ../node_modules/lodash/_baseMatchesProperty.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 86),
    get = __webpack_require__(/*! ./get */ 275),
    hasIn = __webpack_require__(/*! ./hasIn */ 280),
    isKey = __webpack_require__(/*! ./_isKey */ 89),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 127),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 128),
    toKey = __webpack_require__(/*! ./_toKey */ 35);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 275 */
/*!*************************************!*\
  !*** ../node_modules/lodash/get.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 87);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 276 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_stringToPath.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 277);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 277 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_memoizeCapped.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ 278);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 278 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/memoize.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 80);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 279 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseToString.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 28),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 130),
    isArray = __webpack_require__(/*! ./isArray */ 3),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 41);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 280 */
/*!***************************************!*\
  !*** ../node_modules/lodash/hasIn.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ 281),
    hasPath = __webpack_require__(/*! ./_hasPath */ 282);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 281 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseHasIn.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 282 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_hasPath.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 88),
    isArguments = __webpack_require__(/*! ./isArguments */ 65),
    isArray = __webpack_require__(/*! ./isArray */ 3),
    isIndex = __webpack_require__(/*! ./_isIndex */ 42),
    isLength = __webpack_require__(/*! ./isLength */ 63),
    toKey = __webpack_require__(/*! ./_toKey */ 35);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 283 */
/*!******************************************!*\
  !*** ../node_modules/lodash/property.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ 284),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ 285),
    isKey = __webpack_require__(/*! ./_isKey */ 89),
    toKey = __webpack_require__(/*! ./_toKey */ 35);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 284 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseProperty.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 285 */
/*!***************************************************!*\
  !*** ../node_modules/lodash/_basePropertyDeep.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 87);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 286 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseReduce.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 287 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/isEqual.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 86);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 288 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseMerge.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 44),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ 132),
    baseFor = __webpack_require__(/*! ./_baseFor */ 103),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ 289),
    isObject = __webpack_require__(/*! ./isObject */ 7),
    keysIn = __webpack_require__(/*! ./keysIn */ 49),
    safeGet = __webpack_require__(/*! ./_safeGet */ 133);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 289 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_baseMergeDeep.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ 132),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ 115),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ 124),
    copyArray = __webpack_require__(/*! ./_copyArray */ 116),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ 125),
    isArguments = __webpack_require__(/*! ./isArguments */ 65),
    isArray = __webpack_require__(/*! ./isArray */ 3),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ 290),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 43),
    isFunction = __webpack_require__(/*! ./isFunction */ 30),
    isObject = __webpack_require__(/*! ./isObject */ 7),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ 291),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 67),
    safeGet = __webpack_require__(/*! ./_safeGet */ 133),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ 292);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 290 */
/*!***************************************************!*\
  !*** ../node_modules/lodash/isArrayLikeObject.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 26),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 291 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/isPlainObject.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 15),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ 83),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 292 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/toPlainObject.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 34),
    keysIn = __webpack_require__(/*! ./keysIn */ 49);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 293 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_createAssigner.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ 294),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 101);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 294 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseRest.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 31),
    overRest = __webpack_require__(/*! ./_overRest */ 295),
    setToString = __webpack_require__(/*! ./_setToString */ 297);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 295 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_overRest.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ 296);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 296 */
/*!****************************************!*\
  !*** ../node_modules/lodash/_apply.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 297 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setToString.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ 298),
    shortOut = __webpack_require__(/*! ./_shortOut */ 300);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 298 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseSetToString.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ 299),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ 114),
    identity = __webpack_require__(/*! ./identity */ 31);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 299 */
/*!******************************************!*\
  !*** ../node_modules/lodash/constant.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 300 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_shortOut.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 301 */
/*!*********************************************!*\
  !*** ../node_modules/query-string/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ 302);
var objectAssign = __webpack_require__(/*! object-assign */ 90);
var decodeComponent = __webpack_require__(/*! decode-uri-component */ 303);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),
/* 302 */
/*!**************************************************!*\
  !*** ../node_modules/strict-uri-encode/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 303 */
/*!*****************************************************!*\
  !*** ../node_modules/decode-uri-component/index.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),
/* 304 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isNumber.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 15),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),
/* 305 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/cloneDeep.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ 111);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 306 */
/*!****************************************!*\
  !*** ../node_modules/lodash/remove.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 85),
    basePullAt = __webpack_require__(/*! ./_basePullAt */ 307);

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = baseIteratee(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

module.exports = remove;


/***/ }),
/* 307 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_basePullAt.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(/*! ./_baseUnset */ 308),
    isIndex = __webpack_require__(/*! ./_isIndex */ 42);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

module.exports = basePullAt;


/***/ }),
/* 308 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnset.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 88),
    last = __webpack_require__(/*! ./last */ 136),
    parent = __webpack_require__(/*! ./_parent */ 309),
    toKey = __webpack_require__(/*! ./_toKey */ 35);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 309 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/_parent.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 87),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ 310);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 310 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseSlice.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 311 */
/*!******************************************!*\
  !*** ../node_modules/lodash/includes.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ 312),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 26),
    isString = __webpack_require__(/*! ./isString */ 99),
    toInteger = __webpack_require__(/*! ./toInteger */ 62),
    values = __webpack_require__(/*! ./values */ 316);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),
/* 312 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIndexOf.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ 313),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ 314),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ 315);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 313 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_baseFindIndex.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 314 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseIsNaN.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 315 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_strictIndexOf.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 316 */
/*!****************************************!*\
  !*** ../node_modules/lodash/values.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ 317),
    keys = __webpack_require__(/*! ./keys */ 19);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 317 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseValues.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ 130);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 318 */
/*!****************************************!*\
  !*** ../node_modules/lodash/filter.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 117),
    baseFilter = __webpack_require__(/*! ./_baseFilter */ 319),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 85),
    isArray = __webpack_require__(/*! ./isArray */ 3);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),
/* 319 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseFilter.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ 64);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),
/* 320 */
/*!*************************************!*\
  !*** ./components/SideBar/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SideBar = __webpack_require__(/*! ./SideBar */ 321);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SideBar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 321 */
/*!***************************************!*\
  !*** ./components/SideBar/SideBar.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./SideBar.scss */ 322);

var _rcSlider = __webpack_require__(/*! rc-slider */ 323);

var _rcSlider2 = _interopRequireDefault(_rcSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar() {
    _classCallCheck(this, SideBar);

    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this));

    _this.handleStyleChange = _this.handleStyleChange.bind(_this);

    return _this;
  }

  _createClass(SideBar, [{
    key: 'createSlider',
    value: function createSlider(name, value, max) {
      var _this2 = this;

      if (typeof value === 'undefined') {
        value = this.props.styles[name];
      }
      if (typeof max === 'undefined') {
        max = 100;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'slider-container' },
          _react2.default.createElement(_rcSlider2.default, { value: value, onChange: function onChange(val) {
              return _this2.handleStyleChange({ target: {
                  name: name,
                  value: val
                } });
            },
            max: max })
        ),
        _react2.default.createElement('input', { type: 'number', name: name, value: value, className: 'form-control slider-helper' })
      );
    }
  }, {
    key: 'mapStyles',
    value: function mapStyles(field, value) {
      var styles = this.props.styles;
      switch (field) {
        case 'groupTypes':
          var typesArr = styles[field].split(',');
          var typePos = typesArr.indexOf(value);
          if (typePos >= 0) {
            typesArr.splice(typePos, 1);
          } else {
            typesArr.push(value);
          }
          value = typesArr.join(',');
          break;
        case 'collageDensity':
        case 'floatingImages':
          value /= 100;
      }
      return value;
    }
  }, {
    key: 'handleStyleChange',
    value: function handleStyleChange(e) {
      var field = e.target.name;
      var value = e.target.value;

      console.log('Styles changed!!!', field, value);

      var styles = this.props.styles;
      styles[field] = this.mapStyles(field, value);

      this.props.handleStylesChange(styles);
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.props.styles;


      return _react2.default.createElement(
        'div',
        {
          className: 'playground-settings-container', style: {
            width: this.props.container.width,
            height: this.props.container.height
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'playground-settings' },
          _react2.default.createElement(
            'a',
            { className: 'page-header', href: 'playground.html?' },
            _react2.default.createElement(
              'h1',
              null,
              'Layouter Playground'
            )
          ),
          _react2.default.createElement(
            'form',
            { onChange: this.handleStyleChange },
            _react2.default.createElement('input', { name: 'galleryType', type: 'hidden', className: 'form-control', value: '-1' }),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Layout Settings'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'is the gallery built with columns or with rows'
                },
                'Gallery Type'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'isVertical', value: false, checked: !styles.isVertical }),
                  'Rows'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'isVertical', value: true, checked: styles.isVertical }),
                  'Columns'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The target size of the gallery row / column'
                },
                'Row / Column Size (Max Item Size)'
              ),
              this.createSlider('gallerySize', styles.gallerySize, 1000)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The minimum allowed size of each thumbnail (should be smaller than the max size)'
                },
                'Min Item Size'
              ),
              this.createSlider('minItemSize', styles.minItemSize, 1000)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The fixed number of columns in vertical galleries. Notice: 1) this parameter overrides thumbnail size. 2) use 0 (zero) to ignore this parameter. 3) If this param is active the number of columns in mobile will be 1 (one)'
                },
                'Number of Columns'
              ),
              this.createSlider('fixedColumns', styles.fixedColumns, 10)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'Scroll gallery vertically or horizontally'
                },
                'Scroll Direction'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'oneRow', value: false, checked: !styles.oneRow }),
                  'Vertical Scroll'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'oneRow', value: true, checked: styles.oneRow }),
                  'Horizontal Scroll'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Thumbnails location' },
                'Thumbnails Location'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'galleryThumbnailsAlignment', value: 'none', checked: styles.galleryThumbnailsAlignment == 'none' }),
                  'None'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'galleryThumbnailsAlignment', value: 'bottom', checked: styles.galleryThumbnailsAlignment == 'bottom' }),
                  'Bottom'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'galleryThumbnailsAlignment', value: 'left', checked: styles.galleryThumbnailsAlignment == 'left' }),
                  'Left'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'galleryThumbnailsAlignment', value: 'top', checked: styles.galleryThumbnailsAlignment == 'top' }),
                  'Top'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'galleryThumbnailsAlignment', value: 'right', checked: styles.galleryThumbnailsAlignment == 'none' }),
                  'Right'
                )
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Collage Settings'
              )
            ),
            _react2.default.createElement('input', { name: 'groupSize', type: 'hidden', className: 'form-control', value: styles.groupSize }),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The grouping that will be used to create collages'
                },
                'Allowed Group Types'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'table',
                { className: 'playground-layouts' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement('th', null),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Rows Layouts'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Columns Layouts'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      { className: 'left' },
                      '1 Item'
                    ),
                    _react2.default.createElement(
                      'td',
                      { colSpan: '2', className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '1', checked: styles.groupTypes.indexOf('1') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      { className: 'left' },
                      '2 Items'
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '2v', checked: styles.groupTypes.indexOf('2v') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '2h', checked: styles.groupTypes.indexOf('2h') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      { className: 'left' },
                      '3 Items'
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3t', checked: styles.groupTypes.indexOf('3t') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', { colSpan: '2' })
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3b', checked: styles.groupTypes.indexOf('3b') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', { colSpan: '2' })
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3v', checked: styles.groupTypes.indexOf('3v') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3l', checked: styles.groupTypes.indexOf('3l') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', { rowSpan: '2' }),
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3r', checked: styles.groupTypes.indexOf('3r') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', { rowSpan: '2' })
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3h', checked: styles.groupTypes.indexOf('3h') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'Choose the best group layouts according to the images proportions'
                },
                'Collage Grouping'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'chooseBestGroup', value: '0' }),
                  'Use all group types'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'chooseBestGroup', value: styles.chooseBestGroup, checked: styles.chooseBestGroup }),
                  'Choose best group types for items'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The amount of collaged images that will be created in the gallery'
                },
                'Collage Density'
              ),
              this.createSlider('collageDensity', styles.collageDensity * 100)
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Crop Settings'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Crop images to a fixed ratio' },
                'Crop Images'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'cubeImages', value: false, checked: !styles.cubeImages }),
                  'Do Not Crop'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'cubeImages', value: true,
                    checked: !styles.cubeImages }),
                  'Crop'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The width/height ratio of the crop (e.g. 1, 0.25, 16/9)'
                },
                'Cropped Ratio (beta)'
              ),
              _react2.default.createElement('input', { name: 'cubeRatio', type: 'text', className: 'form-control', value: styles.cubeRatio })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'Match the crop ratio to the image orientation (crop portraits vertically and landscapes horizontally)'
                },
                'Smart Crop'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'smartCrop', value: false, checked: !styles.smartCrop }),
                  'Dumb Crop'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'smartCrop', value: true, checked: styles.smartCrop }),
                  'Smart Crop'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'In crop galleries the image can fill the entire space or fit into it'
                },
                'Crop Fill Method'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'cubeType', value: 'fill', checked: styles.cubeType == 'fill' }),
                  'Fill'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'cubeType', value: 'fit',
                    checked: styles.cubeType == 'fit' }),
                  'Fit'
                )
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Design Settings'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'The margins between images' },
                'Image Spacing'
              ),
              this.createSlider('imageMargin', styles.imageMargin, 500)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'The space around the gallery between images' },
                'Gallery Margin'
              ),
              this.createSlider('galleryMargin', styles.galleryMargin, 500)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Add random change to image position' },
                'Floating Images'
              ),
              this.createSlider('floatingImages', styles.floatingImages * 100)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'The radius of the items\' corners' },
                'Corner Radius'
              ),
              this.createSlider('borderRadius')
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'add shadows to items' },
                'Item Shadow'
              ),
              this.createSlider('boxShadow')
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Debug Settings'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The number of images that will be rendered - the more items rendered the slower the gallery will move'
                },
                'Number of Items'
              ),
              _react2.default.createElement('input', { name: 'sampleSize', type: 'number', className: 'form-control', value: styles.sampleSize })
            ),
            _react2.default.createElement(
              'div',
              { className: 'submit-box' },
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'btn btn-success btn-block' },
                'Render Gallery'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'span',
                {
                  className: 'help-block'
                },
                'Notice: you can share any specific layout of the gallery by copying and sending the url'
              )
            )
          )
        )
      );
    }
  }]);

  return SideBar;
}(_react2.default.Component);

exports.default = SideBar;

/***/ }),
/* 322 */
/*!*****************************************!*\
  !*** ./components/SideBar/SideBar.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rcSliderTooltipZoomDownIn":"components-SideBar-SideBar__rcSliderTooltipZoomDownIn__1sMWw","rcSliderTooltipZoomDownOut":"components-SideBar-SideBar__rcSliderTooltipZoomDownOut__2RUVQ"};

/***/ }),
/* 323 */
/*!**********************************************************!*\
  !*** ../node_modules/rc-slider/es/index.js + 42 modules ***!
  \**********************************************************/
/*! exports provided: default, Range, Handle, createSliderWithTooltip */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./components/SideBar/SideBar.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(6);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external "React"
var external__React_ = __webpack_require__(0);
var external__React__default = /*#__PURE__*/__webpack_require__.n(external__React_);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/warning/browser.js
var browser = __webpack_require__(51);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ../node_modules/rc-slider/es/common/Track.js

/* eslint-disable react/prop-types */


var Track_Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = extends_default()({}, style, positonStyle);
  return included ? external__React__default.a.createElement('div', { className: className, style: elStyle }) : null;
};

/* harmony default export */ var common_Track = (Track_Track);
// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(36);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/add-dom-event-listener/lib/index.js
var lib = __webpack_require__(333);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external "ReactDOM"
var external__ReactDOM_ = __webpack_require__(11);
var external__ReactDOM__default = /*#__PURE__*/__webpack_require__.n(external__ReactDOM_);

// CONCATENATED MODULE: ../node_modules/rc-util/es/Dom/addEventListener.js



function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = external__ReactDOM__default.a.unstable_batchedUpdates ? function run(e) {
    external__ReactDOM__default.a.unstable_batchedUpdates(cb, e);
  } : cb;
  return lib_default()(target, eventType, callback);
}
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(52);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../node_modules/rc-slider/es/common/Steps.js





var Steps_calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  browser_default()(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps_Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = Steps_calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? extends_default()({ bottom: offset }, dotStyle) : extends_default()({ left: offset }, dotStyle);
    if (isActived) {
      style = extends_default()({}, style, activeDotStyle);
    }

    var pointClassName = classnames_default()((_classNames = {}, _classNames[prefixCls + '-dot'] = true, _classNames[prefixCls + '-dot-active'] = isActived, _classNames));

    return external__React__default.a.createElement('span', { className: pointClassName, style: style, key: point });
  });

  return external__React__default.a.createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

/* harmony default export */ var common_Steps = (Steps_Steps);
// CONCATENATED MODULE: ../node_modules/rc-slider/es/common/Marks.js




var Marks_Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !external__React__default.a.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames_default()((_classNames = {}, _classNames[className + '-text'] = true, _classNames[className + '-text-active'] = isActive, _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? extends_default()({}, style, markPoint.style) : style;
    return external__React__default.a.createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return external__React__default.a.createElement(
    'div',
    { className: className },
    elements
  );
};

/* harmony default export */ var common_Marks = (Marks_Marks);
// CONCATENATED MODULE: ../node_modules/rc-slider/es/Handle.js








var Handle_Handle = function (_React$Component) {
  inherits_default()(Handle, _React$Component);

  function Handle() {
    classCallCheck_default()(this, Handle);

    return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
  }

  Handle.prototype.focus = function focus() {
    this.handle.focus();
  };

  Handle.prototype.blur = function blur() {
    this.handle.blur();
  };

  Handle.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        vertical = _props.vertical,
        offset = _props.offset,
        style = _props.style,
        disabled = _props.disabled,
        min = _props.min,
        max = _props.max,
        value = _props.value,
        tabIndex = _props.tabIndex,
        restProps = objectWithoutProperties_default()(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);

    var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    var elStyle = extends_default()({}, style, postionStyle);
    var ariaProps = {};
    if (value !== undefined) {
      ariaProps = extends_default()({}, ariaProps, {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      });
    }
    return external__React__default.a.createElement('div', extends_default()({
      ref: function ref(node) {
        return _this2.handle = node;
      },
      role: 'slider',
      tabIndex: tabIndex || 0
    }, ariaProps, restProps, {
      className: className,
      style: elStyle
    }));
  };

  return Handle;
}(external__React__default.a.Component);

/* harmony default export */ var es_Handle = (Handle_Handle);


Handle_Handle.propTypes = {
  className: prop_types_default.a.string,
  vertical: prop_types_default.a.bool,
  offset: prop_types_default.a.number,
  style: prop_types_default.a.object,
  disabled: prop_types_default.a.bool,
  min: prop_types_default.a.number,
  max: prop_types_default.a.number,
  value: prop_types_default.a.number,
  tabIndex: prop_types_default.a.number
};
// CONCATENATED MODULE: ../node_modules/rc-util/es/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

/* harmony default export */ var es_KeyCode = (KeyCode);
// CONCATENATED MODULE: ../node_modules/rc-slider/es/utils.js



function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === Object(external__ReactDOM_["findDOMNode"])(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, diffs))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function getKeyboardValueMutator(e) {
  switch (e.keyCode) {
    case es_KeyCode.UP:
    case es_KeyCode.RIGHT:
      return function (value, props) {
        return value + props.step;
      };

    case es_KeyCode.DOWN:
    case es_KeyCode.LEFT:
      return function (value, props) {
        return value - props.step;
      };

    case es_KeyCode.END:
      return function (value, props) {
        return props.max;
      };
    case es_KeyCode.HOME:
      return function (value, props) {
        return props.min;
      };
    case es_KeyCode.PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case es_KeyCode.PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
}
// CONCATENATED MODULE: ../node_modules/rc-slider/es/common/createSlider.js















function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits_default()(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      classCallCheck_default()(this, ComponentEnhancer);

      var _this = possibleConstructorReturn_default()(this, _Component.call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = getMousePosition(isVertical, e);
        if (!isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        if (isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = getTouchPosition(isVertical, e);
        if (!isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd(e);
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (true) {
        var step = props.step,
            max = props.max,
            min = props.min;

        browser_default()(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }

    ComponentEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_Component.prototype.componentWillUnmount) _Component.prototype.componentWillUnmount.call(this);
      this.removeDocumentEvents();
    };

    ComponentEnhancer.prototype.componentDidMount = function componentDidMount() {
      // Snapshot testing cannot handle refs, so be sure to null-check this.
      this.document = this.sliderRef && this.sliderRef.ownerDocument;
    };

    ComponentEnhancer.prototype.addDocumentTouchEvents = function addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = addEventListenerWrap(this.document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = addEventListenerWrap(this.document, 'touchend', this.onEnd);
    };

    ComponentEnhancer.prototype.addDocumentMouseEvents = function addDocumentMouseEvents() {
      this.onMouseMoveListener = addEventListenerWrap(this.document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = addEventListenerWrap(this.document, 'mouseup', this.onEnd);
    };

    ComponentEnhancer.prototype.removeDocumentEvents = function removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    };

    ComponentEnhancer.prototype.focus = function focus() {
      if (!this.props.disabled) {
        this.handlesRefs[0].focus();
      }
    };

    ComponentEnhancer.prototype.blur = function blur() {
      if (!this.props.disabled) {
        this.handlesRefs[0].blur();
      }
    };

    ComponentEnhancer.prototype.getSliderStart = function getSliderStart() {
      var slider = this.sliderRef;
      var rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    };

    ComponentEnhancer.prototype.getSliderLength = function getSliderLength() {
      var slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      var coords = slider.getBoundingClientRect();
      return this.props.vertical ? coords.height : coords.width;
    };

    ComponentEnhancer.prototype.calcValue = function calcValue(offset) {
      var _props = this.props,
          vertical = _props.vertical,
          min = _props.min,
          max = _props.max;

      var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    };

    ComponentEnhancer.prototype.calcValueByPos = function calcValueByPos(position) {
      var pixelOffset = position - this.getSliderStart();
      var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    };

    ComponentEnhancer.prototype.calcOffset = function calcOffset(value) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max;

      var ratio = (value - min) / (max - min);
      return ratio * 100;
    };

    ComponentEnhancer.prototype.saveHandle = function saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    };

    ComponentEnhancer.prototype.render = function render() {
      var _classNames;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          className = _props3.className,
          marks = _props3.marks,
          dots = _props3.dots,
          step = _props3.step,
          included = _props3.included,
          disabled = _props3.disabled,
          vertical = _props3.vertical,
          min = _props3.min,
          max = _props3.max,
          children = _props3.children,
          maximumTrackStyle = _props3.maximumTrackStyle,
          style = _props3.style,
          railStyle = _props3.railStyle,
          dotStyle = _props3.dotStyle,
          activeDotStyle = _props3.activeDotStyle;

      var _Component$prototype$ = _Component.prototype.render.call(this),
          tracks = _Component$prototype$.tracks,
          handles = _Component$prototype$.handles;

      var sliderClassName = classnames_default()(prefixCls, (_classNames = {}, _classNames[prefixCls + '-with-marks'] = Object.keys(marks).length, _classNames[prefixCls + '-disabled'] = disabled, _classNames[prefixCls + '-vertical'] = vertical, _classNames[className] = className, _classNames));
      return external__React__default.a.createElement(
        'div',
        {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        },
        external__React__default.a.createElement('div', {
          className: prefixCls + '-rail',
          style: extends_default()({}, maximumTrackStyle, railStyle)
        }),
        tracks,
        external__React__default.a.createElement(common_Steps, {
          prefixCls: prefixCls,
          vertical: vertical,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }),
        handles,
        external__React__default.a.createElement(common_Marks, {
          className: prefixCls + '-mark',
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        children
      );
    };

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = extends_default()({}, Component.propTypes, {
    min: prop_types_default.a.number,
    max: prop_types_default.a.number,
    step: prop_types_default.a.number,
    marks: prop_types_default.a.object,
    included: prop_types_default.a.bool,
    className: prop_types_default.a.string,
    prefixCls: prop_types_default.a.string,
    disabled: prop_types_default.a.bool,
    children: prop_types_default.a.any,
    onBeforeChange: prop_types_default.a.func,
    onChange: prop_types_default.a.func,
    onAfterChange: prop_types_default.a.func,
    handle: prop_types_default.a.func,
    dots: prop_types_default.a.bool,
    vertical: prop_types_default.a.bool,
    style: prop_types_default.a.object,
    minimumTrackStyle: prop_types_default.a.object, // just for compatibility, will be deperecate
    maximumTrackStyle: prop_types_default.a.object, // just for compatibility, will be deperecate
    handleStyle: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.arrayOf(prop_types_default.a.object)]),
    trackStyle: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.arrayOf(prop_types_default.a.object)]),
    railStyle: prop_types_default.a.object,
    dotStyle: prop_types_default.a.object,
    activeDotStyle: prop_types_default.a.object,
    autoFocus: prop_types_default.a.bool,
    onFocus: prop_types_default.a.func,
    onBlur: prop_types_default.a.func
  }), _class.defaultProps = extends_default()({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = objectWithoutProperties_default()(_ref, ['index']);

      delete restProps.dragging;
      return external__React__default.a.createElement(es_Handle, extends_default()({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
// CONCATENATED MODULE: ../node_modules/rc-slider/es/Slider.js




/* eslint-disable react/prop-types */







var Slider_Slider = function (_React$Component) {
  inherits_default()(Slider, _React$Component);

  function Slider(props) {
    classCallCheck_default()(this, Slider);

    var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (true) {
      browser_default()(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecate, please use trackStyle instead.');
      browser_default()(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecate, please use railStyle instead.');
    }
    return _this;
  }

  Slider.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        disabled = _props.disabled;

    if (autoFocus && !disabled) {
      this.focus();
    }
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

    var prevValue = this.state.value;
    var value = nextProps.value !== undefined ? nextProps.value : prevValue;
    var nextValue = this.trimAlignValue(value, nextProps);
    if (nextValue === prevValue) return;

    this.setState({ value: nextValue });
    if (isValueOutOfRange(value, nextProps)) {
      this.props.onChange(nextValue);
    }
  };

  Slider.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    }

    var changedValue = state.value;
    props.onChange(changedValue);
  };

  Slider.prototype.onStart = function onStart(position) {
    this.setState({ dragging: true });
    var props = this.props;
    var prevValue = this.getValue();
    props.onBeforeChange(prevValue);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    if (value === prevValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onMove = function onMove(e, position) {
    pauseEvent(e);
    var oldValue = this.state.value;

    var value = this.calcValueByPos(position);
    if (value === oldValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onKeyboard = function onKeyboard(e) {
    var valueMutator = getKeyboardValueMutator(e);

    if (valueMutator) {
      pauseEvent(e);
      var state = this.state;
      var oldValue = state.value;
      var mutatedValue = valueMutator(oldValue, this.props);
      var value = this.trimAlignValue(mutatedValue);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  };

  Slider.prototype.getValue = function getValue() {
    return this.state.value;
  };

  Slider.prototype.getLowerBound = function getLowerBound() {
    return this.props.min;
  };

  Slider.prototype.getUpperBound = function getUpperBound() {
    return this.state.value;
  };

  Slider.prototype.trimAlignValue = function trimAlignValue(v) {
    var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedProps = extends_default()({}, this.props, nextProps);
    var val = ensureValueInRange(v, mergedProps);
    return ensureValuePrecision(val, mergedProps);
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        vertical = _props2.vertical,
        included = _props2.included,
        disabled = _props2.disabled,
        minimumTrackStyle = _props2.minimumTrackStyle,
        trackStyle = _props2.trackStyle,
        handleStyle = _props2.handleStyle,
        tabIndex = _props2.tabIndex,
        min = _props2.min,
        max = _props2.max,
        handleGenerator = _props2.handle;
    var _state = this.state,
        value = _state.value,
        dragging = _state.dragging;

    var offset = this.calcOffset(value);
    var handle = handleGenerator({
      className: prefixCls + '-handle',
      vertical: vertical,
      offset: offset,
      value: value,
      dragging: dragging,
      disabled: disabled,
      min: min,
      max: max,
      index: 0,
      tabIndex: tabIndex,
      style: handleStyle[0] || handleStyle,
      ref: function ref(h) {
        return _this2.saveHandle(0, h);
      }
    });

    var _trackStyle = trackStyle[0] || trackStyle;
    var track = external__React__default.a.createElement(common_Track, {
      className: prefixCls + '-track',
      vertical: vertical,
      included: included,
      offset: 0,
      length: offset,
      style: extends_default()({}, minimumTrackStyle, _trackStyle)
    });

    return { tracks: track, handles: handle };
  };

  return Slider;
}(external__React__default.a.Component);

Slider_Slider.propTypes = {
  defaultValue: prop_types_default.a.number,
  value: prop_types_default.a.number,
  disabled: prop_types_default.a.bool,
  autoFocus: prop_types_default.a.bool,
  tabIndex: prop_types_default.a.number
};


/* harmony default export */ var es_Slider = (createSlider(Slider_Slider));
// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(141);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// CONCATENATED MODULE: ../node_modules/rc-slider/es/Range.js




/* eslint-disable react/prop-types */









var Range_Range = function (_React$Component) {
  inherits_default()(Range, _React$Component);

  function Range(props) {
    classCallCheck_default()(this, Range);

    var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

    _this.onEnd = function () {
      _this.setState({ handle: null });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var count = props.count,
        min = props.min,
        max = props.max;

    var initialValue = Array.apply(null, Array(count + 1)).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _this.trimAlignValue(v, i);
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;

    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }

  Range.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;
    if (this.props.min === nextProps.min && this.props.max === nextProps.max && shallowequal_default()(this.props.value, nextProps.value)) {
      return;
    }

    var bounds = this.state.bounds;

    var value = nextProps.value || bounds;
    var nextBounds = value.map(function (v, i) {
      return _this2.trimAlignValue(v, i, nextProps);
    });
    if (nextBounds.length === bounds.length && nextBounds.every(function (v, i) {
      return v === bounds[i];
    })) return;

    this.setState({ bounds: nextBounds });
    if (bounds.some(function (v) {
      return isValueOutOfRange(v, nextProps);
    })) {
      this.props.onChange(nextBounds);
    }
  };

  Range.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    } else if (state.handle !== undefined) {
      this.setState({ handle: state.handle });
    }

    var data = extends_default()({}, this.state, state);
    var changedValue = data.bounds;
    props.onChange(changedValue);
  };

  Range.prototype.onStart = function onStart(position) {
    var props = this.props;
    var state = this.state;
    var bounds = this.getValue();
    props.onBeforeChange(bounds);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    var closestBound = this.getClosestBound(value);
    var boundNeedMoving = this.getBoundNeedMoving(value, closestBound);

    this.setState({
      handle: boundNeedMoving,
      recent: boundNeedMoving
    });

    var prevValue = bounds[boundNeedMoving];
    if (value === prevValue) return;

    var nextBounds = [].concat(state.bounds);
    nextBounds[boundNeedMoving] = value;
    this.onChange({ bounds: nextBounds });
  };

  Range.prototype.onMove = function onMove(e, position) {
    pauseEvent(e);
    var props = this.props;
    var state = this.state;

    var value = this.calcValueByPos(position);
    var oldValue = state.bounds[state.handle];
    if (value === oldValue) return;

    var nextBounds = [].concat(state.bounds);
    nextBounds[state.handle] = value;
    var nextHandle = state.handle;
    if (props.pushable !== false) {
      this.pushSurroundingHandles(nextBounds, nextHandle);
    } else if (props.allowCross) {
      nextBounds.sort(function (a, b) {
        return a - b;
      });
      nextHandle = nextBounds.indexOf(value);
    }
    this.onChange({
      handle: nextHandle,
      bounds: nextBounds
    });
  };

  Range.prototype.onKeyboard = function onKeyboard() {
    browser_default()(true, 'Keyboard support is not yet supported for ranges.');
  };

  Range.prototype.getValue = function getValue() {
    return this.state.bounds;
  };

  Range.prototype.getClosestBound = function getClosestBound(value) {
    var bounds = this.state.bounds;

    var closestBound = 0;
    for (var i = 1; i < bounds.length - 1; ++i) {
      if (value > bounds[i]) {
        closestBound = i;
      }
    }
    if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
      closestBound = closestBound + 1;
    }
    return closestBound;
  };

  Range.prototype.getBoundNeedMoving = function getBoundNeedMoving(value, closestBound) {
    var _state = this.state,
        bounds = _state.bounds,
        recent = _state.recent;

    var boundNeedMoving = closestBound;
    var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

    if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
      boundNeedMoving = recent;
    }

    if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
      boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
    }
    return boundNeedMoving;
  };

  Range.prototype.getLowerBound = function getLowerBound() {
    return this.state.bounds[0];
  };

  Range.prototype.getUpperBound = function getUpperBound() {
    var bounds = this.state.bounds;

    return bounds[bounds.length - 1];
  };

  /**
   * Returns an array of possible slider points, taking into account both
   * `marks` and `step`. The result is cached.
   */


  Range.prototype.getPoints = function getPoints() {
    var _props = this.props,
        marks = _props.marks,
        step = _props.step,
        min = _props.min,
        max = _props.max;

    var cache = this._getPointsCache;
    if (!cache || cache.marks !== marks || cache.step !== step) {
      var pointsObject = extends_default()({}, marks);
      if (step !== null) {
        for (var point = min; point <= max; point += step) {
          pointsObject[point] = point;
        }
      }
      var points = Object.keys(pointsObject).map(parseFloat);
      points.sort(function (a, b) {
        return a - b;
      });
      this._getPointsCache = { marks: marks, step: step, points: points };
    }
    return this._getPointsCache.points;
  };

  Range.prototype.pushSurroundingHandles = function pushSurroundingHandles(bounds, handle) {
    var value = bounds[handle];
    var threshold = this.props.pushable;

    threshold = Number(threshold);

    var direction = 0;
    if (bounds[handle + 1] - value < threshold) {
      direction = +1; // push to right
    }
    if (value - bounds[handle - 1] < threshold) {
      direction = -1; // push to left
    }

    if (direction === 0) {
      return;
    }

    var nextHandle = handle + direction;
    var diffToNext = direction * (bounds[nextHandle] - value);
    if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
      // revert to original value if pushing is impossible
      bounds[handle] = bounds[nextHandle] - direction * threshold;
    }
  };

  Range.prototype.pushHandle = function pushHandle(bounds, handle, direction, amount) {
    var originalValue = bounds[handle];
    var currentValue = bounds[handle];
    while (direction * (currentValue - originalValue) < amount) {
      if (!this.pushHandleOnePoint(bounds, handle, direction)) {
        // can't push handle enough to create the needed `amount` gap, so we
        // revert its position to the original value
        bounds[handle] = originalValue;
        return false;
      }
      currentValue = bounds[handle];
    }
    // the handle was pushed enough to create the needed `amount` gap
    return true;
  };

  Range.prototype.pushHandleOnePoint = function pushHandleOnePoint(bounds, handle, direction) {
    var points = this.getPoints();
    var pointIndex = points.indexOf(bounds[handle]);
    var nextPointIndex = pointIndex + direction;
    if (nextPointIndex >= points.length || nextPointIndex < 0) {
      // reached the minimum or maximum available point, can't push anymore
      return false;
    }
    var nextHandle = handle + direction;
    var nextValue = points[nextPointIndex];
    var threshold = this.props.pushable;

    var diffToNext = direction * (bounds[nextHandle] - nextValue);
    if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
      // couldn't push next handle, so we won't push this one either
      return false;
    }
    // push the handle
    bounds[handle] = nextValue;
    return true;
  };

  Range.prototype.trimAlignValue = function trimAlignValue(v, handle) {
    var nextProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var mergedProps = extends_default()({}, this.props, nextProps);
    var valInRange = ensureValueInRange(v, mergedProps);
    var valNotConflict = this.ensureValueNotConflict(handle, valInRange, mergedProps);
    return ensureValuePrecision(valNotConflict, mergedProps);
  };

  Range.prototype.ensureValueNotConflict = function ensureValueNotConflict(handle, val, _ref) {
    var allowCross = _ref.allowCross,
        thershold = _ref.pushable;

    var state = this.state || {};
    var bounds = state.bounds;

    handle = handle === undefined ? state.handle : handle;
    thershold = Number(thershold);
    /* eslint-disable eqeqeq */
    if (!allowCross && handle != null && bounds !== undefined) {
      if (handle > 0 && val <= bounds[handle - 1] + thershold) {
        return bounds[handle - 1] + thershold;
      }
      if (handle < bounds.length - 1 && val >= bounds[handle + 1] - thershold) {
        return bounds[handle + 1] - thershold;
      }
    }
    /* eslint-enable eqeqeq */
    return val;
  };

  Range.prototype.render = function render() {
    var _this3 = this;

    var _state2 = this.state,
        handle = _state2.handle,
        bounds = _state2.bounds;
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        vertical = _props2.vertical,
        included = _props2.included,
        disabled = _props2.disabled,
        min = _props2.min,
        max = _props2.max,
        handleGenerator = _props2.handle,
        trackStyle = _props2.trackStyle,
        handleStyle = _props2.handleStyle,
        tabIndex = _props2.tabIndex;


    var offsets = bounds.map(function (v) {
      return _this3.calcOffset(v);
    });

    var handleClassName = prefixCls + '-handle';
    var handles = bounds.map(function (v, i) {
      var _classNames;

      return handleGenerator({
        className: classnames_default()((_classNames = {}, _classNames[handleClassName] = true, _classNames[handleClassName + '-' + (i + 1)] = true, _classNames)),
        vertical: vertical,
        offset: offsets[i],
        value: v,
        dragging: handle === i,
        index: i,
        tabIndex: tabIndex[i] || 0,
        min: min,
        max: max,
        disabled: disabled,
        style: handleStyle[i],
        ref: function ref(h) {
          return _this3.saveHandle(i, h);
        }
      });
    });

    var tracks = bounds.slice(0, -1).map(function (_, index) {
      var _classNames2;

      var i = index + 1;
      var trackClassName = classnames_default()((_classNames2 = {}, _classNames2[prefixCls + '-track'] = true, _classNames2[prefixCls + '-track-' + i] = true, _classNames2));
      return external__React__default.a.createElement(common_Track, {
        className: trackClassName,
        vertical: vertical,
        included: included,
        offset: offsets[i - 1],
        length: offsets[i] - offsets[i - 1],
        style: trackStyle[index],
        key: i
      });
    });

    return { tracks: tracks, handles: handles };
  };

  return Range;
}(external__React__default.a.Component);

Range_Range.displayName = 'Range';
Range_Range.propTypes = {
  defaultValue: prop_types_default.a.arrayOf(prop_types_default.a.number),
  value: prop_types_default.a.arrayOf(prop_types_default.a.number),
  count: prop_types_default.a.number,
  pushable: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.number]),
  allowCross: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  tabIndex: prop_types_default.a.arrayOf(prop_types_default.a.number)
};
Range_Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  tabIndex: []
};


/* harmony default export */ var es_Range = (createSlider(Range_Range));
// CONCATENATED MODULE: ../node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}
// CONCATENATED MODULE: ../node_modules/dom-align/es/propertyUtils.js
var vendorPrefix = void 0;

var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
  }
  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr = void 0;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix(' + arr.join(',') + ')');
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
    }
  } else {
    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
  }
}
// CONCATENATED MODULE: ../node_modules/dom-align/es/utils.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = void 0;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}

function utils_setTransform(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = { x: originalXY.x, y: originalXY.y };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    utils_setTransform(elem, offset, option);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = void 0;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = '' + prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val = void 0;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },

  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = void 0;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },

  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length; i++) {
      utils.mix(ret, args[i]);
    }
    return ret;
  },

  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

/* harmony default export */ var es_utils = (utils);
// CONCATENATED MODULE: ../node_modules/dom-align/es/getOffsetParent.js


/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  if (es_utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = es_utils.getDocument(element);
  var body = doc.body;
  var parent = void 0;
  var positionStyle = es_utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = es_utils.css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

/* harmony default export */ var es_getOffsetParent = (getOffsetParent);
// CONCATENATED MODULE: ../node_modules/dom-align/es/isAncestorFixed.js


function isAncestorFixed(element) {
  if (es_utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = es_utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    var positionStyle = es_utils.css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}
// CONCATENATED MODULE: ../node_modules/dom-align/es/getVisibleRectForElement.js




/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = es_getOffsetParent(element);
  var doc = es_utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && es_utils.css(el, 'overflow') !== 'visible') {
      var pos = es_utils.offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = es_getOffsetParent(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!es_utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = es_utils.css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = es_utils.getWindowScrollLeft(win);
  var scrollY = es_utils.getWindowScrollTop(win);
  var viewportWidth = es_utils.viewportWidth(win);
  var viewportHeight = es_utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }

  if (isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

/* harmony default export */ var es_getVisibleRectForElement = (getVisibleRectForElement);
// CONCATENATED MODULE: ../node_modules/dom-align/es/adjustForViewport.js


function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = es_utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return es_utils.mix(pos, size);
}

/* harmony default export */ var es_adjustForViewport = (adjustForViewport);
// CONCATENATED MODULE: ../node_modules/dom-align/es/getRegion.js


function getRegion(node) {
  var offset = void 0;
  var w = void 0;
  var h = void 0;
  if (!es_utils.isWindow(node) && node.nodeType !== 9) {
    offset = es_utils.offset(node);
    w = es_utils.outerWidth(node);
    h = es_utils.outerHeight(node);
  } else {
    var win = es_utils.getWindow(node);
    offset = {
      left: es_utils.getWindowScrollLeft(win),
      top: es_utils.getWindowScrollTop(win)
    };
    w = es_utils.viewportWidth(win);
    h = es_utils.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/* harmony default export */ var es_getRegion = (getRegion);
// CONCATENATED MODULE: ../node_modules/dom-align/es/getAlignOffset.js
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;

  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

/* harmony default export */ var es_getAlignOffset = (getAlignOffset);
// CONCATENATED MODULE: ../node_modules/dom-align/es/getElFuturePos.js


function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = es_getAlignOffset(refNodeRegion, points[1]);
  var p2 = es_getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
  };
}

/* harmony default export */ var es_getElFuturePos = (getElFuturePos);
// CONCATENATED MODULE: ../node_modules/dom-align/es/index.js
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */








// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function isOutOfVisibleRect(target) {
  var visibleRect = es_getVisibleRectForElement(target);
  var targetRegion = es_getRegion(target);

  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function flip(points, reg, map) {
  var ret = [];
  es_utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = void 0;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

function domAlign(el, refNode, align) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var target = align.target || refNode;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = es_getVisibleRectForElement(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = es_getRegion(source);
  // 参照节点所占的区域, left/top/width/height
  var refNodeRegion = es_getRegion(target);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, refNodeRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = es_getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = es_utils.merge(elRegion, elFuturePos);

  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTargetNotOutOfVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = es_getElFuturePos(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = es_getElFuturePos(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = es_getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset);
      es_utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = es_adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    es_utils.css(source, 'width', es_utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    es_utils.css(source, 'height', es_utils.height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  es_utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}

domAlign.__getOffsetParent = es_getOffsetParent;

domAlign.__getVisibleRectForElement = es_getVisibleRectForElement;

/* harmony default export */ var es = (domAlign);
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/
// CONCATENATED MODULE: ../node_modules/rc-align/es/isWindow.js
function isWindow_isWindow(obj) {
  /* eslint no-eq-null: 0 */
  /* eslint eqeqeq: 0 */
  return obj != null && obj == obj.window;
}
// CONCATENATED MODULE: ../node_modules/rc-align/es/Align.js











function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;

  return bufferFn;
}

var Align_Align = function (_Component) {
  inherits_default()(Align, _Component);

  function Align() {
    var _temp, _this, _ret;

    classCallCheck_default()(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
      var props = _this.props;
      if (!props.disabled) {
        var source = external__ReactDOM__default.a.findDOMNode(_this);
        props.onAlign(source, es(source, props.target(), props.align));
      }
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  Align.prototype.componentDidMount = function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    this.forceAlign();
    if (!props.disabled && props.monitorWindowResize) {
      this.startMonitorWindowResize();
    }
  };

  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;

    if (!props.disabled) {
      if (prevProps.disabled || !shallowequal_default()(prevProps.align, props.align)) {
        reAlign = true;
      } else {
        var lastTarget = prevProps.target();
        var currentTarget = props.target();
        if (isWindow_isWindow(lastTarget) && isWindow_isWindow(currentTarget)) {
          reAlign = false;
        } else if (lastTarget !== currentTarget) {
          reAlign = true;
        }
      }
    }

    if (reAlign) {
      this.forceAlign();
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  };

  Align.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stopMonitorWindowResize();
  };

  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
      this.resizeHandler = addEventListenerWrap(window, 'resize', this.bufferMonitor);
    }
  };

  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.bufferMonitor.clear();
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  };

  Align.prototype.render = function render() {
    var _props = this.props,
        childrenProps = _props.childrenProps,
        children = _props.children;

    var child = external__React__default.a.Children.only(children);
    if (childrenProps) {
      var newProps = {};
      for (var prop in childrenProps) {
        if (childrenProps.hasOwnProperty(prop)) {
          newProps[prop] = this.props[childrenProps[prop]];
        }
      }
      return external__React__default.a.cloneElement(child, newProps);
    }
    return child;
  };

  return Align;
}(external__React_["Component"]);

Align_Align.propTypes = {
  childrenProps: prop_types_default.a.object,
  align: prop_types_default.a.object.isRequired,
  target: prop_types_default.a.func,
  onAlign: prop_types_default.a.func,
  monitorBufferTime: prop_types_default.a.number,
  monitorWindowResize: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  children: prop_types_default.a.any
};
Align_Align.defaultProps = {
  target: function target() {
    return window;
  },
  onAlign: function onAlign() {},
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};


/* harmony default export */ var es_Align = (Align_Align);
// CONCATENATED MODULE: ../node_modules/rc-align/es/index.js
// export this package's api

/* harmony default export */ var rc_align_es = (es_Align);
// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(336);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ../node_modules/rc-animate/es/ChildrenUtils.js


function toArrayChildren(children) {
  var ret = [];
  external__React__default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}
// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(32);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ../node_modules/css-animation/es/Event.js
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ var Event = (TransitionEvents);
// EXTERNAL MODULE: ../node_modules/component-classes/index.js
var component_classes = __webpack_require__(337);
var component_classes_default = /*#__PURE__*/__webpack_require__.n(component_classes);

// CONCATENATED MODULE: ../node_modules/css-animation/es/index.js




var isCssAnimationSupported = Event.endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var es_cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : typeof_default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = component_classes_default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

es_cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

es_cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

es_cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ var css_animation_es = (es_cssAnimation);
// CONCATENATED MODULE: ../node_modules/rc-animate/es/util.js
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ var es_util = (util);
// CONCATENATED MODULE: ../node_modules/rc-animate/es/AnimateChild.js











var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild_AnimateChild = function (_React$Component) {
  inherits_default()(AnimateChild, _React$Component);

  function AnimateChild() {
    classCallCheck_default()(this, AnimateChild);

    return possibleConstructorReturn_default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  createClass_default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (es_util.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (es_util.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (es_util.isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = external__ReactDOM__default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : typeof_default()(transitionName)) === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = css_animation_es(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(external__React__default.a.Component);

AnimateChild_AnimateChild.propTypes = {
  children: prop_types_default.a.any
};
/* harmony default export */ var es_AnimateChild = (AnimateChild_AnimateChild);
// CONCATENATED MODULE: ../node_modules/rc-animate/es/Animate.js










var defaultKey = 'rc_animate_' + Date.now();


function getChildrenFromProps(props) {
  var children = props.children;
  if (external__React__default.a.isValidElement(children)) {
    if (!children.key) {
      return external__React__default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function Animate_noop() {}

var Animate_Animate = function (_React$Component) {
  inherits_default()(Animate, _React$Component);

  // eslint-disable-line

  function Animate(props) {
    classCallCheck_default()(this, Animate);

    var _this = possibleConstructorReturn_default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    Animate__initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: toArrayChildren(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  createClass_default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = external__React__default.a.cloneElement(nextChild || currentChild, defineProperty_default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = mergeChildren(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && findChildInChildrenByKey(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && findChildInChildrenByKey(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return findShownChildInChildrenByKey(currentChildren, key, showProp);
      }
      return findChildInChildrenByKey(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return external__React__default.a.createElement(
            es_AnimateChild,
            {
              key: child.key,
              ref: function ref(node) {
                return _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = extends_default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return external__React__default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(external__React__default.a.Component);

Animate_Animate.isAnimate = true;
Animate_Animate.propTypes = {
  component: prop_types_default.a.any,
  componentProps: prop_types_default.a.object,
  animation: prop_types_default.a.object,
  transitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  transitionEnter: prop_types_default.a.bool,
  transitionAppear: prop_types_default.a.bool,
  exclusive: prop_types_default.a.bool,
  transitionLeave: prop_types_default.a.bool,
  onEnd: prop_types_default.a.func,
  onEnter: prop_types_default.a.func,
  onLeave: prop_types_default.a.func,
  onAppear: prop_types_default.a.func,
  showProp: prop_types_default.a.string
};
Animate_Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: Animate_noop,
  onEnter: Animate_noop,
  onLeave: Animate_noop,
  onAppear: Animate_noop
};

var Animate__initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else {
      if (type === 'appear') {
        if (es_util.allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (es_util.allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (es_util.allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!isSameChildren(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ var es_Animate = (Animate_Animate);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/LazyRenderBox.js







var LazyRenderBox_LazyRenderBox = function (_Component) {
  inherits_default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    classCallCheck_default()(this, LazyRenderBox);

    return possibleConstructorReturn_default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = objectWithoutProperties_default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || external__React__default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return external__React__default.a.createElement('div', props);
    }

    return external__React__default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(external__React_["Component"]);

LazyRenderBox_LazyRenderBox.propTypes = {
  children: prop_types_default.a.any,
  className: prop_types_default.a.string,
  visible: prop_types_default.a.bool,
  hiddenClassName: prop_types_default.a.string
};


/* harmony default export */ var es_LazyRenderBox = (LazyRenderBox_LazyRenderBox);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/PopupInner.js







var PopupInner_PopupInner = function (_Component) {
  inherits_default()(PopupInner, _Component);

  function PopupInner() {
    classCallCheck_default()(this, PopupInner);

    return possibleConstructorReturn_default()(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return external__React__default.a.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style
      },
      external__React__default.a.createElement(
        es_LazyRenderBox,
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(external__React_["Component"]);

PopupInner_PopupInner.propTypes = {
  hiddenClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  onMouseEnter: prop_types_default.a.func,
  onMouseLeave: prop_types_default.a.func,
  children: prop_types_default.a.any
};


/* harmony default export */ var es_PopupInner = (PopupInner_PopupInner);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/utils.js

function isPointsEq(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return extends_default()({}, baseAlign, align);
}

function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/Popup.js













var Popup_Popup = function (_Component) {
  inherits_default()(Popup, _Component);

  function Popup(props) {
    classCallCheck_default()(this, Popup);

    var _this = possibleConstructorReturn_default()(this, _Component.call(this, props));

    Popup__initialiseProps.call(_this);

    _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
    _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
  };

  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return external__ReactDOM__default.a.findDOMNode(this.popupInstance);
  };

  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var savePopupRef = this.savePopupRef,
        props = this.props;
    var align = props.align,
        style = props.style,
        visible = props.visible,
        prefixCls = props.prefixCls,
        destroyPopupOnHide = props.destroyPopupOnHide;

    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';
    if (!visible) {
      this.currentAlignClassName = null;
    }
    var newStyle = extends_default()({}, style, this.getZIndexStyle());
    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return external__React__default.a.createElement(
        es_Animate,
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? external__React__default.a.createElement(
          rc_align_es,
          {
            target: this.getTarget,
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          external__React__default.a.createElement(
            es_PopupInner,
            extends_default()({
              visible: true
            }, popupInnerProps),
            props.children
          )
        ) : null
      );
    }
    return external__React__default.a.createElement(
      es_Animate,
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      external__React__default.a.createElement(
        rc_align_es,
        {
          target: this.getTarget,
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        external__React__default.a.createElement(
          es_PopupInner,
          extends_default()({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          props.children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = external__React__default.a.createElement(es_LazyRenderBox, {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = external__React__default.a.createElement(
          es_Animate,
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return external__React__default.a.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(external__React_["Component"]);

Popup_Popup.propTypes = {
  visible: prop_types_default.a.bool,
  style: prop_types_default.a.object,
  getClassNameFromAlign: prop_types_default.a.func,
  onAlign: prop_types_default.a.func,
  getRootDomNode: prop_types_default.a.func,
  onMouseEnter: prop_types_default.a.func,
  align: prop_types_default.a.any,
  destroyPopupOnHide: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  onMouseLeave: prop_types_default.a.func
};

var Popup__initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this2.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this2.currentAlignClassName !== currentAlignClassName) {
      _this2.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this2.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.getTarget = function () {
    return _this2.props.getRootDomNode();
  };
};

/* harmony default export */ var es_Popup = (Popup_Popup);
// CONCATENATED MODULE: ../node_modules/rc-util/es/ContainerRender.js








var ContainerRender_ContainerRender = function (_React$Component) {
  inherits_default()(ContainerRender, _React$Component);

  function ContainerRender() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, ContainerRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
      if (_this.container) {
        external__ReactDOM__default.a.unmountComponentAtNode(_this.container);
        _this.container.parentNode.removeChild(_this.container);
        _this.container = null;
      }
    }, _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }
        external__ReactDOM__default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(ContainerRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(external__React__default.a.Component);

ContainerRender_ContainerRender.propTypes = {
  autoMount: prop_types_default.a.bool,
  autoDestroy: prop_types_default.a.bool,
  visible: prop_types_default.a.bool,
  forceRender: prop_types_default.a.bool,
  parent: prop_types_default.a.any,
  getComponent: prop_types_default.a.func.isRequired,
  getContainer: prop_types_default.a.func.isRequired,
  children: prop_types_default.a.func.isRequired
};
ContainerRender_ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};
/* harmony default export */ var es_ContainerRender = (ContainerRender_ContainerRender);
// CONCATENATED MODULE: ../node_modules/rc-util/es/Portal.js








var Portal_Portal = function (_React$Component) {
  inherits_default()(Portal, _React$Component);

  function Portal() {
    classCallCheck_default()(this, Portal);

    return possibleConstructorReturn_default()(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  createClass_default()(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this._container) {
        return external__ReactDOM__default.a.createPortal(this.props.children, this._container);
      }
      return null;
    }
  }]);

  return Portal;
}(external__React__default.a.Component);

Portal_Portal.propTypes = {
  getContainer: prop_types_default.a.func.isRequired,
  children: prop_types_default.a.node.isRequired,
  didUpdate: prop_types_default.a.func
};
/* harmony default export */ var es_Portal = (Portal_Portal);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/index.js














function es_noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!external__ReactDOM_["createPortal"];

var es_Trigger = function (_React$Component) {
  inherits_default()(Trigger, _React$Component);

  function Trigger(props) {
    classCallCheck_default()(this, Trigger);

    var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

    es__initialiseProps.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };
    return _this;
  }

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible) {
    this.clearDelayTimer();
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this4 = this;

    var popupVisible = this.state.popupVisible;

    var props = this.props;
    var children = props.children;
    var child = external__React__default.a.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var trigger = external__React__default.a.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return external__React__default.a.createElement(
        es_ContainerRender,
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: props.forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this4.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || props.forceRender) {
      portal = external__React__default.a.createElement(
        es_Portal,
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(external__React__default.a.Component);

es_Trigger.propTypes = {
  children: prop_types_default.a.any,
  action: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.arrayOf(prop_types_default.a.string)]),
  showAction: prop_types_default.a.any,
  hideAction: prop_types_default.a.any,
  getPopupClassNameFromAlign: prop_types_default.a.any,
  onPopupVisibleChange: prop_types_default.a.func,
  afterPopupVisibleChange: prop_types_default.a.func,
  popup: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  popupStyle: prop_types_default.a.object,
  prefixCls: prop_types_default.a.string,
  popupClassName: prop_types_default.a.string,
  popupPlacement: prop_types_default.a.string,
  builtinPlacements: prop_types_default.a.object,
  popupTransitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  popupAnimation: prop_types_default.a.any,
  mouseEnterDelay: prop_types_default.a.number,
  mouseLeaveDelay: prop_types_default.a.number,
  zIndex: prop_types_default.a.number,
  focusDelay: prop_types_default.a.number,
  blurDelay: prop_types_default.a.number,
  getPopupContainer: prop_types_default.a.func,
  getDocument: prop_types_default.a.func,
  forceRender: prop_types_default.a.bool,
  destroyPopupOnHide: prop_types_default.a.bool,
  mask: prop_types_default.a.bool,
  maskClosable: prop_types_default.a.bool,
  onPopupAlign: prop_types_default.a.func,
  popupAlign: prop_types_default.a.object,
  popupVisible: prop_types_default.a.bool,
  defaultPopupVisible: prop_types_default.a.bool,
  maskTransitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  maskAnimation: prop_types_default.a.string
};
es_Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: es_noop,
  afterPopupVisibleChange: es_noop,
  onPopupAlign: es_noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var es__initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onMouseEnter = function (e) {
    _this5.fireEvents('onMouseEnter', e);
    _this5.delaySetPopupVisible(true, _this5.props.mouseEnterDelay);
  };

  this.onMouseLeave = function (e) {
    _this5.fireEvents('onMouseLeave', e);
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this5.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && contains(_this5._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this5.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this5.clearDelayTimer();
    if (_this5.isFocusToShow()) {
      _this5.focusTime = Date.now();
      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this5.fireEvents('onMouseDown', e);
    _this5.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this5.fireEvents('onTouchStart', e);
    _this5.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this5.fireEvents('onBlur', e);
    _this5.clearDelayTimer();
    if (_this5.isBlurToHide()) {
      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this5.fireEvents('onContextMenu', e);
    _this5.setPopupVisible(true);
  };

  this.onContextMenuClose = function () {
    if (_this5.isContextMenuToShow()) {
      _this5.close();
    }
  };

  this.onClick = function (event) {
    _this5.fireEvents('onClick', event);
    // focus will trigger click
    if (_this5.focusTime) {
      var preTime = void 0;
      if (_this5.preClickTime && _this5.preTouchTime) {
        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
      } else if (_this5.preClickTime) {
        preTime = _this5.preClickTime;
      } else if (_this5.preTouchTime) {
        preTime = _this5.preTouchTime;
      }
      if (Math.abs(preTime - _this5.focusTime) < 20) {
        return;
      }
      _this5.focusTime = 0;
    }
    _this5.preClickTime = 0;
    _this5.preTouchTime = 0;
    event.preventDefault();
    var nextVisible = !_this5.state.popupVisible;
    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
      _this5.setPopupVisible(!_this5.state.popupVisible);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this5.props.mask && !_this5.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = Object(external__ReactDOM_["findDOMNode"])(_this5);
    var popupNode = _this5.getPopupDomNode();
    if (!contains(root, target) && !contains(popupNode, target)) {
      _this5.close();
    }
  };

  this.getRootDomNode = function () {
    return Object(external__ReactDOM_["findDOMNode"])(_this5);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var props = _this5.props;
    var popupPlacement = props.popupPlacement,
        builtinPlacements = props.builtinPlacements,
        prefixCls = props.prefixCls;

    if (popupPlacement && builtinPlacements) {
      className.push(getPopupClassNameFromAlign(builtinPlacements, prefixCls, align));
    }
    if (props.getPopupClassNameFromAlign) {
      className.push(props.getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var props = _this5.props,
        state = _this5.state;

    var mouseProps = {};
    if (_this5.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
    }
    if (_this5.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
    }
    return external__React__default.a.createElement(
      es_Popup,
      extends_default()({
        prefixCls: props.prefixCls,
        destroyPopupOnHide: props.destroyPopupOnHide,
        visible: state.popupVisible,
        className: props.popupClassName,
        action: props.action,
        align: _this5.getPopupAlign(),
        onAlign: props.onPopupAlign,
        animation: props.popupAnimation,
        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
      }, mouseProps, {
        getRootDomNode: _this5.getRootDomNode,
        style: props.popupStyle,
        mask: props.mask,
        zIndex: props.zIndex,
        transitionName: props.popupTransitionName,
        maskAnimation: props.maskAnimation,
        maskTransitionName: props.maskTransitionName,
        ref: _this5.savePopup
      }),
      typeof props.popup === 'function' ? props.popup() : props.popup
    );
  };

  this.getContainer = function () {
    var props = _this5.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(external__ReactDOM_["findDOMNode"])(_this5)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.handlePortalUpdate = function () {
    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this5._component = node;
  };
};

/* harmony default export */ var rc_trigger_es = (es_Trigger);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var placements_targetOffset = [0, 0];

var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: placements_targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: placements_targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: placements_targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: placements_targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: placements_targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: placements_targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: placements_targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: placements_targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: placements_targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: placements_targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: placements_targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: placements_targetOffset
  }
};

/* harmony default export */ var es_placements = (placements);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/Content.js






var Content_Content = function (_React$Component) {
  inherits_default()(Content, _React$Component);

  function Content() {
    classCallCheck_default()(this, Content);

    return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
  }

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    var trigger = this.props.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  };

  Content.prototype.render = function render() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls,
        id = _props.id;

    return external__React__default.a.createElement(
      'div',
      { className: prefixCls + '-inner', id: id },
      typeof overlay === 'function' ? overlay() : overlay
    );
  };

  return Content;
}(external__React__default.a.Component);

Content_Content.propTypes = {
  prefixCls: prop_types_default.a.string,
  overlay: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  id: prop_types_default.a.string,
  trigger: prop_types_default.a.any
};
/* harmony default export */ var es_Content = (Content_Content);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/Tooltip.js











var Tooltip_Tooltip = function (_Component) {
  inherits_default()(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    classCallCheck_default()(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [external__React__default.a.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), external__React__default.a.createElement(es_Content, {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = objectWithoutProperties_default()(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = extends_default()({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return external__React__default.a.createElement(
      rc_trigger_es,
      extends_default()({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: placements,
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(external__React_["Component"]);

Tooltip_Tooltip.propTypes = {
  trigger: prop_types_default.a.any,
  children: prop_types_default.a.any,
  defaultVisible: prop_types_default.a.bool,
  visible: prop_types_default.a.bool,
  placement: prop_types_default.a.string,
  transitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  animation: prop_types_default.a.any,
  onVisibleChange: prop_types_default.a.func,
  afterVisibleChange: prop_types_default.a.func,
  overlay: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  overlayStyle: prop_types_default.a.object,
  overlayClassName: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  mouseEnterDelay: prop_types_default.a.number,
  mouseLeaveDelay: prop_types_default.a.number,
  getTooltipContainer: prop_types_default.a.func,
  destroyTooltipOnHide: prop_types_default.a.bool,
  align: prop_types_default.a.object,
  arrowContent: prop_types_default.a.any,
  id: prop_types_default.a.string
};
Tooltip_Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};


/* harmony default export */ var es_Tooltip = (Tooltip_Tooltip);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/index.js


/* harmony default export */ var rc_tooltip_es = (es_Tooltip);
// CONCATENATED MODULE: ../node_modules/rc-slider/es/createSliderWithTooltip.js










function createSliderWithTooltip(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    inherits_default()(ComponentWrapper, _React$Component);

    function ComponentWrapper(props) {
      classCallCheck_default()(this, ComponentWrapper);

      var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          var _extends2;

          return {
            visibles: extends_default()({}, prevState.visibles, (_extends2 = {}, _extends2[index] = visible, _extends2))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = objectWithoutProperties_default()(_ref, ['value', 'dragging', 'index', 'disabled']);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === undefined ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === undefined ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === undefined ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === undefined ? visible || false : _tipProps$visible,
            restTooltipProps = objectWithoutProperties_default()(tipProps, ['prefixCls', 'overlay', 'placement', 'visible']);

        return external__React__default.a.createElement(
          rc_tooltip_es,
          extends_default()({}, restTooltipProps, {
            prefixCls: prefixCls,
            overlay: overlay,
            placement: placement,
            visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
            key: index
          }),
          external__React__default.a.createElement(es_Handle, extends_default()({}, restProps, {
            style: extends_default()({}, handleStyle[0]),
            value: value,
            onMouseEnter: function onMouseEnter() {
              return _this.handleTooltipVisibleChange(index, true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this.handleTooltipVisibleChange(index, false);
            }
          }))
        );
      };

      _this.state = { visibles: {} };
      return _this;
    }

    ComponentWrapper.prototype.render = function render() {
      return external__React__default.a.createElement(Component, extends_default()({}, this.props, { handle: this.handleWithTooltip }));
    };

    return ComponentWrapper;
  }(external__React__default.a.Component), _class.propTypes = {
    tipFormatter: prop_types_default.a.func,
    handleStyle: prop_types_default.a.arrayOf(prop_types_default.a.object),
    tipProps: prop_types_default.a.object
  }, _class.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },

    handleStyle: [{}],
    tipProps: {}
  }, _temp;
}
// CONCATENATED MODULE: ../node_modules/rc-slider/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Range", function() { return es_Range; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Handle", function() { return es_Handle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createSliderWithTooltip", function() { return createSliderWithTooltip; });





es_Slider.Range = es_Range;
es_Slider.Handle = es_Handle;
es_Slider.createSliderWithTooltip = createSliderWithTooltip;
/* harmony default export */ var rc_slider_es = __webpack_exports__["default"] = (es_Slider);


/***/ }),
/* 324 */
/*!************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 325), __esModule: true };

/***/ }),
/* 325 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 326);
module.exports = __webpack_require__(/*! ../../modules/_core */ 9).Object.setPrototypeOf;


/***/ }),
/* 326 */
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ 21);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 327).set });


/***/ }),
/* 327 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-proto.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ 24);
var anObject = __webpack_require__(/*! ./_an-object */ 23);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ 91)(Function.call, __webpack_require__(/*! ./_object-gopd */ 109).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 328 */
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/create.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 329), __esModule: true };

/***/ }),
/* 329 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/create.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ 330);
var $Object = __webpack_require__(/*! ../../modules/_core */ 9).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 330 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.create.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 21);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 74) });


/***/ }),
/* 331 */
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 137);
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 138);
var warning = __webpack_require__(/*! fbjs/lib/warning */ 139);
var assign = __webpack_require__(/*! object-assign */ 90);

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 140);
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ 332);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 332 */
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 138);
  var warning = __webpack_require__(/*! fbjs/lib/warning */ 139);
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 140);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 333 */
/*!***********************************************************!*\
  !*** ../node_modules/add-dom-event-listener/lib/index.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__(/*! ./EventObject */ 334);

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),
/* 334 */
/*!*****************************************************************!*\
  !*** ../node_modules/add-dom-event-listener/lib/EventObject.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(/*! ./EventBaseObject */ 335);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(/*! object-assign */ 90);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),
/* 335 */
/*!*********************************************************************!*\
  !*** ../node_modules/add-dom-event-listener/lib/EventBaseObject.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ }),
/* 336 */
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 97);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 337 */
/*!**************************************************!*\
  !*** ../node_modules/component-classes/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(/*! indexof */ 142);
} catch (err) {
  var index = __webpack_require__(/*! component-indexof */ 142);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),
/* 338 */
/*!*************************************!*\
  !*** ./components/Gallery/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Gallery = __webpack_require__(/*! ./Gallery */ 339);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Gallery).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 339 */
/*!***************************************!*\
  !*** ./components/Gallery/Gallery.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Gallery = __webpack_require__(/*! ./Gallery.scss */ 340);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = 'https://static.wixstatic.com/media/';
var getImgSize = function getImgSize(item, dimension) {
  var scale = window.devicePixelRatio;
  return Math.min(scale * item.style.height, item.dto.metadata[dimension]);
};

var getSrc = function getSrc(item) {
  var w = getImgSize(item, 'height');
  var h = getImgSize(item, 'width');
  return '' + PREFIX + item.dto.url + '/v1/fit/w_' + w + ',h_' + h + ',al_c,q_80/file.jpg';
};
var getStyle = function getStyle(item) {
  return _extends({}, item.offset, {
    width: item.style.width,
    height: item.style.height
  });
};

var Gallery = function Gallery(_ref) {
  var layout = _ref.layout;
  return _react2.default.createElement(
    'div',
    { className: _Gallery2.default.root },
    layout.items.map(function (item) {
      return _react2.default.createElement('img', { className: _Gallery2.default.item, src: getSrc(item), style: getStyle(item), alt: item.idx });
    })
  );
};

Gallery.propTypes = {
  layout: _propTypes2.default.object
};

exports.default = Gallery;

/***/ }),
/* 340 */
/*!*****************************************!*\
  !*** ./components/Gallery/Gallery.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"components-Gallery-Gallery__root__1JS6n","item":"components-Gallery-Gallery__item__3qSoF"};

/***/ }),
/* 341 */
/*!*****************************!*\
  !*** ./constants/images.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  metadata: {
    height: 1000,
    lastModified: 1445860855,
    name: '8b72558253b2502b401bb46e5599f22a',
    size: 1100727,
    width: 1920
  },
  orderIndex: 0,
  photoId: '8b72558253b2502b401bb46e5599f22a',
  url: '8bb438_1b73a6b067b24175bd087e86613bd00c.jpg'
}, {
  metadata: {
    height: 5600,
    lastModified: 1445857830,
    name: '2d3b675ea857dc41158bad3b28300824',
    size: 8128464,
    width: 3737
  },
  orderIndex: 1,
  photoId: '2d3b675ea857dc41158bad3b28300824',
  url: '8bb438_78ff5e32500d48cdaa22a3f446d68216.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857821,
    name: '860df034014674abd7a2e73abe0b851b',
    size: 5655675,
    width: 5600
  },
  orderIndex: 2,
  photoId: '860df034014674abd7a2e73abe0b851b',
  url: '8bb438_ff062a651e174cf5926fe5c088be1099.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857814,
    name: 'a898a24fe0d2c60a348eac9e38cae265',
    size: 11697590,
    width: 5600
  },
  orderIndex: 3,
  photoId: 'a898a24fe0d2c60a348eac9e38cae265',
  url: '8bb438_5ec836c505f445dfab711a56e67fc502.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857800,
    name: '5dd5a6e757c702b2856a3a2f4bb00154',
    size: 6528300,
    width: 5600
  },
  orderIndex: 4,
  photoId: '5dd5a6e757c702b2856a3a2f4bb00154',
  url: '8bb438_2798f080526a4d3f8cb89d93e305a0b8.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857785,
    name: 'e8b32772f67865aedb3b12115eaf19a4',
    size: 4931341,
    width: 5600
  },
  orderIndex: 5,
  photoId: 'e8b32772f67865aedb3b12115eaf19a4',
  url: '8bb438_9a335dcb8c884086b8ffdf1ea44ca7e9.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857778,
    name: '90e376fcd4b801bed0f22cb5bd7d0045',
    size: 11051393,
    width: 5600
  },
  orderIndex: 6,
  photoId: '90e376fcd4b801bed0f22cb5bd7d0045',
  url: '8bb438_6e9b65f5c9e343c6bc3344b2def0df11.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857763,
    name: '0db65a80624a2e0b8c71e553b6f4b3f6',
    size: 9294683,
    width: 5600
  },
  orderIndex: 7,
  photoId: '0db65a80624a2e0b8c71e553b6f4b3f6',
  url: '8bb438_f4f7fa31c5364557af0da7c4fd543cc9.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857751,
    name: '1f02dcba84a9b73b40d25e59280a9580',
    size: 9048422,
    width: 5600
  },
  orderIndex: 8,
  photoId: '1f02dcba84a9b73b40d25e59280a9580',
  url: '8bb438_0e26eb36903c40558d3e9a3dc088b791.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857742,
    name: '70cf2b13f9bde8f8c33768260f25050a',
    size: 6486671,
    width: 5600
  },
  orderIndex: 9,
  photoId: '70cf2b13f9bde8f8c33768260f25050a',
  url: '8bb438_1d81fe98c5cc433a9651fc24e7ce2617.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857734,
    name: '8e0bf32b6fade59dcfd7757ead8a0478',
    size: 9556027,
    width: 5600
  },
  orderIndex: 10,
  photoId: '8e0bf32b6fade59dcfd7757ead8a0478',
  url: '8bb438_2ecb6a1a9d5b4e148bd83a1ea3920860.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857722,
    name: '027af4a640930155cd68f72b3236842d',
    size: 6526471,
    width: 5600
  },
  orderIndex: 11,
  photoId: '027af4a640930155cd68f72b3236842d',
  url: '8bb438_7927e7c1e0ac4420b603ddfa02cba6c9.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857703,
    name: '5fb9385c24ba5972991a2da94fe5b550',
    size: 11226275,
    width: 5600
  },
  orderIndex: 12,
  photoId: '5fb9385c24ba5972991a2da94fe5b550',
  url: '8bb438_37f441d6939f4c1eb8e335b231afb7b9.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857691,
    name: '34fb0d724c5d3921d22b997a8c1705ef',
    size: 7257722,
    width: 5600
  },
  orderIndex: 13,
  photoId: '34fb0d724c5d3921d22b997a8c1705ef',
  url: '8bb438_f8233d1de49442169c3bd47e3dce2780.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857683,
    name: '984bf3ca8432e2da6e65601d7cec1104',
    size: 8525833,
    width: 5600
  },
  orderIndex: 14,
  photoId: '984bf3ca8432e2da6e65601d7cec1104',
  url: '8bb438_a60117ec179b4390bbc50af20f34f144.jpg'
}, {
  metadata: {
    height: 5600,
    lastModified: 1445857674,
    name: '0a1f3af15dc764fd08e5c83a9febb30e',
    size: 12994265,
    width: 3737
  },
  orderIndex: 16,
  photoId: '0a1f3af15dc764fd08e5c83a9febb30e',
  url: '8bb438_a59d1b89bd074b75b62a8838034f72f6.jpg'
}, {
  metadata: {
    height: 5600,
    lastModified: 1445857660,
    name: 'ab9e2fa37f6355328860bdf52d1f2088',
    size: 9074907,
    width: 3737
  },
  orderIndex: 17,
  photoId: 'ab9e2fa37f6355328860bdf52d1f2088',
  url: '8bb438_6bf791d3442746a7996b1b343549c845.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857651,
    name: '8f3f93f90a846f70fc897755f70525a7',
    size: 6893842,
    width: 5600
  },
  orderIndex: 18,
  photoId: '8f3f93f90a846f70fc897755f70525a7',
  url: '8bb438_6ea01262e7a94b2490ab1c6d8b889122.jpg'
}, {
  metadata: {
    height: 3737,
    lastModified: 1445857640,
    name: 'd1168a52496bc3a7b5e0025212a76e2c',
    size: 10155312,
    width: 5600
  },
  orderIndex: 19,
  photoId: 'd1168a52496bc3a7b5e0025212a76e2c',
  url: '8bb438_760699a583514efca897ee37d95e9c76.jpg'
}, {
  metadata: {
    height: 3056,
    lastModified: 1445858468,
    name: '46247b1df460eb0e8272053a9a079ab1',
    size: 9930627,
    width: 4400
  },
  orderIndex: 20,
  photoId: '46247b1df460eb0e8272053a9a079ab1',
  url: '8bb438_e725684e4a1841859668483efd0f9509.jpg'
}, {
  metadata: {
    height: 2829,
    lastModified: 1445858458,
    name: 'ea8ec1609e052b7f196935318316299d',
    size: 9812260,
    width: 4200
  },
  orderIndex: 21,
  photoId: 'ea8ec1609e052b7f196935318316299d',
  url: '8bb438_149b418b9bfb47e0adafc569ca55c5e9.jpg'
}, {
  metadata: {
    height: 4200,
    lastModified: 1445858438,
    name: '098281dfb9701c0068f786bc8aab0390',
    size: 8707214,
    width: 2799
  },
  orderIndex: 22,
  photoId: '098281dfb9701c0068f786bc8aab0390',
  url: '8bb438_0d738ee5a4a04f54891e08488fd7c7bc.jpg'
}, {
  metadata: {
    height: 3228,
    lastModified: 1445858429,
    name: '1ea8c429c3fbbc7b507b45b756c8499f',
    size: 9487361,
    width: 4500
  },
  orderIndex: 23,
  photoId: '1ea8c429c3fbbc7b507b45b756c8499f',
  url: '8bb438_1ab1a6e5d0bf4edeb847d15d821a76d8.jpg'
}, {
  metadata: {
    height: 3840,
    lastModified: 1445858419,
    name: 'a466b258c6b5e2096fa546c86aae8fa2',
    size: 15444132,
    width: 5494
  },
  orderIndex: 24,
  photoId: 'a466b258c6b5e2096fa546c86aae8fa2',
  url: '8bb438_eeef61d83253480ab7bbdb07692b4c90.jpg'
}, {
  metadata: {
    height: 2800,
    lastModified: 1445858401,
    name: 'a081f588eff30a9f8b6fcd0f4889eac3',
    size: 8885483,
    width: 4200
  },
  orderIndex: 25,
  photoId: 'a081f588eff30a9f8b6fcd0f4889eac3',
  url: '8bb438_2ff4f1995c0e40d49158d5225eeb465e.jpg'
}, {
  metadata: {
    height: 2800,
    lastModified: 1445858391,
    name: '9c0c752ebc1b7b27dc3b02b98f2a4181',
    size: 7486333,
    width: 4200
  },
  orderIndex: 26,
  photoId: '9c0c752ebc1b7b27dc3b02b98f2a4181',
  url: '8bb438_e78b371c75ce42de8719dccfc97298a4.jpg'
}, {
  metadata: {
    height: 3000,
    lastModified: 1445858374,
    name: '5c64c68f0efda76c3cfbf83f569a8e2e',
    size: 10375299,
    width: 4500
  },
  orderIndex: 27,
  photoId: '5c64c68f0efda76c3cfbf83f569a8e2e',
  url: '8bb438_a2049532d1b7487ba542f55efbc55c7c.jpg'
}, {
  metadata: {
    height: 3282,
    lastModified: 1445858362,
    name: '87dc373b35ff17641e86a23b58635f89',
    size: 10610316,
    width: 5000
  },
  orderIndex: 28,
  photoId: '87dc373b35ff17641e86a23b58635f89',
  url: '8bb438_e8735e0102554d6ead385a48e2b9e69a.jpg'
}, {
  metadata: {
    height: 2966,
    lastModified: 1445858349,
    name: 'd432d617a9f508cf404d64d8c489e1f1',
    size: 6443941,
    width: 4400
  },
  orderIndex: 29,
  photoId: 'd432d617a9f508cf404d64d8c489e1f1',
  url: '8bb438_ea26cc9ae0ce440bbc4cfaaa8864c5e6.jpg'
}, {
  metadata: {
    height: 3066,
    lastModified: 1445858340,
    name: '7a5e2e30ec277ada8e1715ed520e6b38',
    size: 8182325,
    width: 4600
  },
  orderIndex: 30,
  photoId: '7a5e2e30ec277ada8e1715ed520e6b38',
  url: '8bb438_4fe0d8e3dee641559dffc604be287e32.jpg'
}, {
  metadata: {
    height: 3467,
    lastModified: 1445858331,
    name: 'c6b5cd1f1316311ec3560d6fb7d50958',
    size: 8925756,
    width: 5200
  },
  orderIndex: 31,
  photoId: 'c6b5cd1f1316311ec3560d6fb7d50958',
  url: '8bb438_17a7e143ea0148959ef6c5663158ade0.jpg'
}, {
  metadata: {
    height: 2800,
    lastModified: 1445861402,
    name: 'd63281682aa9881794bd301d06f37dba',
    size: 5345028,
    width: 4200
  },
  orderIndex: 32,
  photoId: 'd63281682aa9881794bd301d06f37dba',
  url: '8bb438_c79f9e778d474b18a9f980595caf57f3.jpg'
}, {
  metadata: {
    height: 4200,
    lastModified: 1445861394,
    name: '0bd4f007cef66bf47fbb936fb3ea2336',
    size: 8207276,
    width: 2800
  },
  orderIndex: 33,
  photoId: '0bd4f007cef66bf47fbb936fb3ea2336',
  url: '8bb438_026dd01a64a646958298f535f037c627.jpg'
}, {
  metadata: {
    height: 1280,
    lastModified: 1445859025,
    name: '759c83479429d725f03367897235a8b5',
    size: 2039710,
    width: 1920
  },
  orderIndex: 34,
  photoId: '759c83479429d725f03367897235a8b5',
  url: '8bb438_4af301c080294224b6b5e15cd38a035f.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860434,
    name: '0ee95e519c2e1274c30f56e3c098ec86',
    size: 2051821,
    width: 5600
  },
  orderIndex: 35,
  photoId: '0ee95e519c2e1274c30f56e3c098ec86',
  url: '8bb438_a132b18dea524d48a68a37f0075fcc1e.jpg'
}, {
  metadata: {
    height: 5600,
    lastModified: 1445860430,
    name: '262e38d72080e92600c9df018a4f4f1e',
    size: 2445274,
    width: 3727
  },
  orderIndex: 36,
  photoId: '262e38d72080e92600c9df018a4f4f1e',
  url: '8bb438_4fa0352201a1431395c3c4d4b21e3481.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860420,
    name: '3dff88af7694728e13d6ca4ff03fc6cf',
    size: 3904313,
    width: 5600
  },
  orderIndex: 37,
  photoId: '3dff88af7694728e13d6ca4ff03fc6cf',
  url: '8bb438_d6bfaf940d05421cb6bc7a8c867fb4b5.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860407,
    name: '83d9e931839e66e00faf1df41cbc7349',
    size: 2816020,
    width: 5600
  },
  orderIndex: 38,
  photoId: '83d9e931839e66e00faf1df41cbc7349',
  url: '8bb438_71edafe6d54d457484285e61a1f75d17.jpg'
}, {
  metadata: {
    height: 3728,
    lastModified: 1445860396,
    name: '678c48f759062c8e8146a70043ad7823',
    size: 2626295,
    width: 5600
  },
  orderIndex: 39,
  photoId: '678c48f759062c8e8146a70043ad7823',
  url: '8bb438_ced2a19af5cf448e91413099f4c422fa.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860392,
    name: 'f6db1b532552aa00e9549b5c97e6770a',
    size: 3807639,
    width: 5600
  },
  orderIndex: 40,
  photoId: 'f6db1b532552aa00e9549b5c97e6770a',
  url: '8bb438_cabd67053eae45e7ab273832504717ff.jpg'
}, {
  metadata: {
    height: 5600,
    lastModified: 1445860384,
    name: '69102794801438efee46af8202c76b81',
    size: 2671950,
    width: 3727
  },
  orderIndex: 41,
  photoId: '69102794801438efee46af8202c76b81',
  url: '8bb438_66a1bb26f7f64497be343d886fe2197a.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860380,
    name: '61d3f0c021fd47d92a4e7395ab107e48',
    size: 3471762,
    width: 5600
  },
  orderIndex: 42,
  photoId: '61d3f0c021fd47d92a4e7395ab107e48',
  url: '8bb438_cdbf2bdff4864d2094370a3051812409.jpg'
}, {
  metadata: {
    height: 3728,
    lastModified: 1445860375,
    name: '22883fe4ca22b25b5b19c8640d21d524',
    size: 4229177,
    width: 5600
  },
  orderIndex: 43,
  photoId: '22883fe4ca22b25b5b19c8640d21d524',
  url: '8bb438_2a22b3e85bb1434e81f6fbd4878fb4ae.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860369,
    name: 'cf6787a4653057bd8af8cb05888dc9b1',
    size: 2936592,
    width: 5600
  },
  orderIndex: 44,
  photoId: 'cf6787a4653057bd8af8cb05888dc9b1',
  url: '8bb438_f7612090677241d1a5b8fee6752954e9.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860365,
    name: 'fdda4e9e700d4208640b78d5c035d88a',
    size: 3756606,
    width: 5600
  },
  orderIndex: 45,
  photoId: 'fdda4e9e700d4208640b78d5c035d88a',
  url: '8bb438_d849ef374eb64dd287e53d27797a764f.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860360,
    name: '74f7bad48d543460fb949cc406fb70e7',
    size: 2877705,
    width: 5600
  },
  orderIndex: 46,
  photoId: '74f7bad48d543460fb949cc406fb70e7',
  url: '8bb438_8583414cdf6544a191e2b8f678ce7b63.jpg'
}, {
  metadata: {
    height: 3728,
    lastModified: 1445860354,
    name: 'a005c2daaa8b7c8cf1c53f589e64a860',
    size: 3953647,
    width: 5600
  },
  orderIndex: 47,
  photoId: 'a005c2daaa8b7c8cf1c53f589e64a860',
  url: '8bb438_c64d6dc2b5e74058bba77f616146a4cf.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860346,
    name: 'b091d8ac038d07476546bef2475a7b03',
    size: 2913404,
    width: 5600
  },
  orderIndex: 48,
  photoId: 'b091d8ac038d07476546bef2475a7b03',
  url: '8bb438_e353d9a6ec324041a17a28d10e21819d.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860335,
    name: '2b5c5f752b1c931b2351bee50aa939f0',
    size: 3010614,
    width: 5600
  },
  orderIndex: 49,
  photoId: '2b5c5f752b1c931b2351bee50aa939f0',
  url: '8bb438_402a161778db429e8ef3423788b9a7b6.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860450,
    name: '7968928dd556638214cf26be7ea2a592',
    size: 2704408,
    width: 5600
  },
  orderIndex: 50,
  photoId: '7968928dd556638214cf26be7ea2a592',
  url: '8bb438_525271503ee64479925f13cfa2f312c8.jpg'
}, {
  metadata: {
    height: 3727,
    lastModified: 1445860437,
    name: 'eb2349c8379074578a5ac7ca97aec2e4',
    size: 2049626,
    width: 5600
  },
  orderIndex: 51,
  photoId: 'eb2349c8379074578a5ac7ca97aec2e4',
  url: '8bb438_2e22ca8b422e44c5a6fb723392a747b5.jpg'
}, {
  metadata: {
    height: 4930,
    lastModified: 1445852211,
    name: '4f431d8f88a3e5d3842df5a906fd536f',
    size: 1603869,
    width: 3287
  },
  orderIndex: 52,
  photoId: '4f431d8f88a3e5d3842df5a906fd536f',
  url: '8bb438_4afd60c9c97d44c8bcd61f1b6080d7e5.jpg'
}, {
  metadata: {
    height: 4645,
    lastModified: 1445852211,
    name: '3337a427b2e877ab39bf116fcb3f01ea',
    size: 2057775,
    width: 3484
  },
  orderIndex: 53,
  photoId: '3337a427b2e877ab39bf116fcb3f01ea',
  url: '8bb438_a74f09cd4425418296d417ce91f589cd.jpg'
}, {
  metadata: {
    height: 5580,
    lastModified: 1445852211,
    name: '7474d69be9754f2f5012a08ab9e5c283',
    size: 1862011,
    width: 3720
  },
  orderIndex: 54,
  photoId: '7474d69be9754f2f5012a08ab9e5c283',
  url: '8bb438_5a7139bf3b91452ea725151ffb285335.jpg'
}, {
  metadata: {
    height: 5258,
    lastModified: 1445852211,
    name: 'befba01503f77c9dc77df88419290c01',
    size: 2157963,
    width: 3946
  },
  orderIndex: 55,
  photoId: 'befba01503f77c9dc77df88419290c01',
  url: '8bb438_fe7a4cc39e624bd09cb48510d6d46056.jpg'
}, {
  metadata: {
    height: 4645,
    lastModified: 1445852211,
    name: '2f493d2be5d47bd89b016ba46a0f66f4',
    size: 1679662,
    width: 3484
  },
  orderIndex: 56,
  photoId: '2f493d2be5d47bd89b016ba46a0f66f4',
  url: '8bb438_8bc1731cedd84dc7846ebd434e305c8a.jpg'
}, {
  metadata: {
    height: 5260,
    lastModified: 1445852211,
    name: '2d6bee6fe2a726f213599508722bcb27',
    size: 2462629,
    width: 3945
  },
  orderIndex: 57,
  photoId: '2d6bee6fe2a726f213599508722bcb27',
  url: '8bb438_4eb7f81b49a64578bf5775417c4c2c9a.jpg'
}, {
  metadata: {
    height: 3710,
    lastModified: 1445852211,
    name: '9e6bb2d0c554dcd559a32ab89c9092f0',
    size: 1423161,
    width: 3180
  },
  orderIndex: 58,
  photoId: '9e6bb2d0c554dcd559a32ab89c9092f0',
  url: '8bb438_cbe02f139b8e479387eb7f5f9e8424c9.jpg'
}, {
  metadata: {
    height: 4645,
    lastModified: 1445852211,
    name: '315e6213ce778d43f5580b2caf347556',
    size: 1683368,
    width: 3484
  },
  orderIndex: 59,
  photoId: '315e6213ce778d43f5580b2caf347556',
  url: '8bb438_af22f17274944bea9026107bf670bf7f.jpg'
}, {
  metadata: {
    height: 4722,
    lastModified: 1445852211,
    name: '338f76721bc5a127ebf0b01306abf35e',
    size: 1904181,
    width: 3542
  },
  orderIndex: 60,
  photoId: '338f76721bc5a127ebf0b01306abf35e',
  url: '8bb438_a8a7ff22738445faa74cf7f68866f4d8.jpg'
}, {
  metadata: {
    height: 5310,
    lastModified: 1445852211,
    name: 'd4c8670400a3bf9d7c8cba7e5f133454',
    size: 2095199,
    width: 3540
  },
  orderIndex: 61,
  photoId: 'd4c8670400a3bf9d7c8cba7e5f133454',
  url: '8bb438_c87dd238be8d4a15a57eecbefda4495b.jpg'
}, {
  metadata: {
    height: 5580,
    lastModified: 1445852211,
    name: '5e106a5d4a0b7709f8938194d4778ff4',
    size: 1521731,
    width: 3720
  },
  orderIndex: 62,
  photoId: '5e106a5d4a0b7709f8938194d4778ff4',
  url: '8bb438_ae4f2ce0cfab47859d294f36b2d87cd7.jpg'
}, {
  metadata: {
    height: 5580,
    lastModified: 1445852211,
    name: 'e8f7b815b395981a5285c2bd8b90b1a6',
    size: 1213695,
    width: 3720
  },
  orderIndex: 63,
  photoId: 'e8f7b815b395981a5285c2bd8b90b1a6',
  url: '8bb438_144de0d90d5d4476829c870a38ad8151.jpg'
}, {
  metadata: {
    height: 4930,
    lastModified: 1445852211,
    name: 'ab9df5eb2b706bd06a6e8bab622beba4',
    size: 1376745,
    width: 3286
  },
  orderIndex: 64,
  photoId: 'ab9df5eb2b706bd06a6e8bab622beba4',
  url: '8bb438_105a7f98d458406eadb5b99069e05e66.jpg'
}, {
  metadata: {
    height: 5577,
    lastModified: 1445852211,
    name: '4eb593cdb6d13eb99c7a18d2de79b181',
    size: 2762647,
    width: 3718
  },
  orderIndex: 65,
  photoId: '4eb593cdb6d13eb99c7a18d2de79b181',
  url: '8bb438_d675baa15a344a72b357197c11478240.jpg'
}, {
  metadata: {
    height: 4645,
    lastModified: 1445852211,
    name: '175fa38b92269154b6673618477160de',
    size: 2117640,
    width: 3483
  },
  orderIndex: 66,
  photoId: '175fa38b92269154b6673618477160de',
  url: '8bb438_4b9b9acb8d6c45deadbeeb0029b4bf5e.jpg'
}, {
  metadata: {
    height: 2561,
    lastModified: 1445852211,
    name: '5b65c635c3ca09f2badf2aeb6d84ed99',
    size: 1499154,
    width: 1922
  },
  orderIndex: 67,
  photoId: '5b65c635c3ca09f2badf2aeb6d84ed99',
  url: '8bb438_b9926ba84cc548df9011d6227d3e20b1.jpg'
}, {
  metadata: {
    height: 5577,
    lastModified: 1445861516,
    name: '00a063e26be177d3c6a4a2b41cc15be6',
    size: 2746325,
    width: 3718
  },
  orderIndex: 68,
  photoId: '00a063e26be177d3c6a4a2b41cc15be6',
  url: '8bb438_ff1da0eb6547419fbac324f3a7e6a16c.jpg'
}, {
  metadata: {
    height: 4930,
    lastModified: 1445861511,
    name: 'ad45c7343a2ecf89982122c4097a054d',
    size: 1375916,
    width: 3286
  },
  orderIndex: 69,
  photoId: 'ad45c7343a2ecf89982122c4097a054d',
  url: '8bb438_263b45a6faeb49e887b71d10a728516d.jpg'
}, {
  metadata: {
    height: 1000,
    lastModified: 1445852211,
    name: '066c5c3fafab90ecbef3f32736dac3c8',
    size: 561146,
    width: 1920
  },
  orderIndex: 70,
  photoId: '066c5c3fafab90ecbef3f32736dac3c8',
  url: '8bb438_51948835adb84e0dbcca54ce99b48999.jpg'
}, {
  metadata: {
    height: 1000,
    lastModified: 1445860813,
    name: '7dc09ef29834aea2ae4d1948d60426c1',
    size: 404456,
    width: 1920
  },
  orderIndex: 71,
  photoId: '7dc09ef29834aea2ae4d1948d60426c1',
  url: '8bb438_ff7d47098495432baa3b80bb14930909.jpg'
}, {
  metadata: {
    height: 5472,
    lastModified: 1445852219,
    name: '53e606d52c7ac88ab77dce9595eb57c5',
    size: 1108341,
    width: 2947
  },
  orderIndex: 72,
  photoId: '53e606d52c7ac88ab77dce9595eb57c5',
  url: '8bb438_ebbc9ec6c20049f490a06f729e4c79cb.jpg'
}, {
  metadata: {
    height: 2912,
    lastModified: 1445852219,
    name: '37d29273821f8404ed4832dd0872f8f3',
    size: 775953,
    width: 3648
  },
  orderIndex: 73,
  photoId: '37d29273821f8404ed4832dd0872f8f3',
  url: '8bb438_5aba95641dcd4711863dd7e6954082bd.jpg'
}, {
  metadata: {
    height: 2213,
    lastModified: 1445852219,
    name: 'fc1b98985d634845d9eb5eef2878f327',
    size: 334330,
    width: 3192
  },
  orderIndex: 74,
  photoId: 'fc1b98985d634845d9eb5eef2878f327',
  url: '8bb438_47f19e10a9924d56b4a7f51e292cb509.jpg'
}, {
  metadata: {
    height: 5472,
    lastModified: 1445852219,
    name: '47f5e94bc11c22a66fcbd44aff73241c',
    size: 4217344,
    width: 3648
  },
  orderIndex: 75,
  photoId: '47f5e94bc11c22a66fcbd44aff73241c',
  url: '8bb438_36726a2d14ec44ee9edc5693bade1092.jpg'
}, {
  metadata: {
    height: 5472,
    lastModified: 1445852219,
    name: '5862a30656b6e61705dfbe5505faf867',
    size: 4609929,
    width: 3648
  },
  orderIndex: 76,
  photoId: '5862a30656b6e61705dfbe5505faf867',
  url: '8bb438_be12adcc05bb45eab12f52f03aebb9f8.jpg'
}, {
  metadata: {
    height: 3648,
    lastModified: 1445852219,
    name: 'bc261174203a17b59d870ccf26a01597',
    size: 5736096,
    width: 5472
  },
  orderIndex: 77,
  photoId: 'bc261174203a17b59d870ccf26a01597',
  url: '8bb438_94ba2f2573aa431aaef5be76d1cd887d.jpg'
}, {
  metadata: {
    height: 5472,
    lastModified: 1445852219,
    name: '279757098541cffc5689b7bbe39a88b2',
    size: 5959189,
    width: 3648
  },
  orderIndex: 78,
  photoId: '279757098541cffc5689b7bbe39a88b2',
  url: '8bb438_730e9548a4ae4fe4b717e28c53e89410.jpg'
}, {
  metadata: {
    height: 3648,
    lastModified: 1445852219,
    name: 'ea3c344c388002acfe4f67fac5c8c400',
    size: 3871502,
    width: 5472
  },
  orderIndex: 79,
  photoId: 'ea3c344c388002acfe4f67fac5c8c400',
  url: '8bb438_b73a93e4b07c4dbc9e78614a20b33750.jpg'
}, {
  metadata: {
    height: 5472,
    lastModified: 1445852219,
    name: '3152ccf507b8ff1662385fa6a67311f8',
    size: 2410359,
    width: 3648
  },
  orderIndex: 80,
  photoId: '3152ccf507b8ff1662385fa6a67311f8',
  url: '8bb438_5e257ac6c0634c439066b944ec38fbd7.jpg'
}, {
  metadata: {
    height: 5472,
    lastModified: 1445852219,
    name: '4faa8030d46fdf8fbb787c1b66f395e3',
    size: 2259034,
    width: 3648
  },
  orderIndex: 81,
  photoId: '4faa8030d46fdf8fbb787c1b66f395e3',
  url: '8bb438_32189edd0d0c44428d3a1305dd7be397.jpg'
}, {
  metadata: {
    height: 5472,
    lastModified: 1445852219,
    name: '2a37fa063861660e7850eb82d62914ee',
    size: 6866865,
    width: 3648
  },
  orderIndex: 82,
  photoId: '2a37fa063861660e7850eb82d62914ee',
  url: '8bb438_13b27c8ed9084ae6a7526be845547661.jpg'
}, {
  metadata: {
    height: 3648,
    lastModified: 1445852219,
    name: '2103f7d2c4be85e4467d2f9cba4aeded',
    size: 5509488,
    width: 5472
  },
  orderIndex: 83,
  photoId: '2103f7d2c4be85e4467d2f9cba4aeded',
  url: '8bb438_e1c242b87eb74abab740e5af5104a520.jpg'
}, {
  metadata: {
    height: 3648,
    lastModified: 1445852219,
    name: 'd15b37f375ea80bda4f2c37b64fdf7e8',
    size: 3202506,
    width: 5472
  },
  orderIndex: 84,
  photoId: 'd15b37f375ea80bda4f2c37b64fdf7e8',
  url: '8bb438_aab736569612405a8381d4965c769f51.jpg'
}, {
  metadata: {
    height: 5472,
    lastModified: 1445852219,
    name: 'cedc4449d88b491aca7d452fcdf0b3da',
    size: 4278078,
    width: 3648
  },
  orderIndex: 85,
  photoId: 'cedc4449d88b491aca7d452fcdf0b3da',
  url: '8bb438_f1f608a67abc4590821f83b4120f6131.jpg'
}, {
  metadata: {
    height: 3648,
    lastModified: 1445852219,
    name: 'd375541f5888e55ac32a5142ed85c3bc',
    size: 5327873,
    width: 5472
  },
  orderIndex: 86,
  photoId: 'd375541f5888e55ac32a5142ed85c3bc',
  url: '8bb438_730583b0bebf475086ff40e07898e3e0.jpg'
}, {
  metadata: {
    height: 3526,
    lastModified: 1445852219,
    name: 'b12907da5fbb55a31a760e49fb0bb4e6',
    size: 3941332,
    width: 5177
  },
  orderIndex: 87,
  photoId: 'b12907da5fbb55a31a760e49fb0bb4e6',
  url: '8bb438_83e03311e53a47ce9ba8bda910fdad88.jpg'
}, {
  metadata: {
    height: 3648,
    lastModified: 1445852219,
    name: '1cfbc70e8a351916a2dd29c63e5a2100',
    size: 7240707,
    width: 5472
  },
  orderIndex: 88,
  photoId: '1cfbc70e8a351916a2dd29c63e5a2100',
  url: '8bb438_ac9e77e718404844adeec4677879e617.jpg'
}, {
  metadata: {
    height: 2126,
    lastModified: 1445861579,
    name: '0d134f293b71f7c0a9638c5f1a8435e5',
    size: 285522,
    width: 1695
  },
  orderIndex: 89,
  photoId: '0d134f293b71f7c0a9638c5f1a8435e5',
  url: '8bb438_5b9f0c9151f24ba8a8ebdba378e260b7.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: '8a719c372d21ebb4b9d2a8373734bf52',
    size: 829742,
    width: 1621
  },
  orderIndex: 90,
  photoId: '8a719c372d21ebb4b9d2a8373734bf52',
  url: '8bb438_209feb1fb8944a18b6b619e105746cd0.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: 'd201d3aea92d4fb08635d281a3909180',
    size: 920207,
    width: 1621
  },
  orderIndex: 91,
  photoId: 'd201d3aea92d4fb08635d281a3909180',
  url: '8bb438_9a392473159c472c835ed9c657464bea.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: '4f8cf05deeb154bda3b878e68656e4c5',
    size: 848528,
    width: 1621
  },
  orderIndex: 92,
  photoId: '4f8cf05deeb154bda3b878e68656e4c5',
  url: '8bb438_9f28a805bac543feb934a831a6636e03.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: 'ab64fd1362015d405181f8b82d14e029',
    size: 258698,
    width: 1621
  },
  orderIndex: 93,
  photoId: 'ab64fd1362015d405181f8b82d14e029',
  url: '8bb438_8c0a8aa18b9c456a94d67cd58c104135.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: '9d652929eb67d0ae370494dcb2709871',
    size: 719331,
    width: 1621
  },
  orderIndex: 94,
  photoId: '9d652929eb67d0ae370494dcb2709871',
  url: '8bb438_18a34be7a3834da88a55e30c4dae3e96.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: '7e411b039d55fc0d86266697a51172d8',
    size: 873130,
    width: 1621
  },
  orderIndex: 95,
  photoId: '7e411b039d55fc0d86266697a51172d8',
  url: '8bb438_eed704a5a8d74b40aeb5a11914eb4dc5.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: '75318326db54174bea73594c3c25873a',
    size: 490692,
    width: 1621
  },
  orderIndex: 96,
  photoId: '75318326db54174bea73594c3c25873a',
  url: '8bb438_0795e40ac4db438a8a723ea98dbeda10.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: '90ee6549ab33042ab1206b0a925b10bd',
    size: 516058,
    width: 1621
  },
  orderIndex: 97,
  photoId: '90ee6549ab33042ab1206b0a925b10bd',
  url: '8bb438_4413d1782f904f9a89a47837c03bf276.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: 'd052fe7e6db2fd246708f8e56ddc3684',
    size: 566152,
    width: 1621
  },
  orderIndex: 98,
  photoId: 'd052fe7e6db2fd246708f8e56ddc3684',
  url: '8bb438_4a6550d4df364f9890180f52243fb396.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: '8310d26374ed948918b9914ea076e411',
    size: 545677,
    width: 1621
  },
  orderIndex: 99,
  photoId: '8310d26374ed948918b9914ea076e411',
  url: '8bb438_b5957febd0ed45d3be9a0e91669c65b4.jpg'
}, {
  metadata: {
    height: 1081,
    lastModified: 1445852215,
    name: 'ed9a2febb12a8dc9c4e193efa170612c',
    size: 908947,
    width: 1621
  },
  orderIndex: 100,
  photoId: 'ed9a2febb12a8dc9c4e193efa170612c',
  url: '8bb438_4ce63dbf08904e42af4d6e5846e6e0c1.jpg'
}];

/***/ }),
/* 342 */
/*!*********************************!*\
  !*** ./components/App/App.scss ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map