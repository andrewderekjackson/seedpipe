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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);
var isBuffer = __webpack_require__(13);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(15);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(16);
var buildURL = __webpack_require__(18);
var parseHeaders = __webpack_require__(19);
var isURLSameOrigin = __webpack_require__(20);
var createError = __webpack_require__(6);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(21);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (!window.XMLHttpRequest &&
        process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(22);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(17);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(10);
var job_1 = __webpack_require__(11);
var axios_1 = __webpack_require__(2);
var MainViewModel = /** @class */ (function () {
    function MainViewModel() {
        var _this = this;
        this.jobs = ko.observableArray();
        this.history = ko.observableArray();
        // refresh now...
        this.updateStatus();
        // .. and every 5 seconds
        setInterval(function () { return _this.updateStatus(); }, 5000);
    }
    MainViewModel.prototype.updateStatus = function () {
        var _this = this;
        axios_1.default.get('/api/status')
            .then(function (resonse) {
            _this.jobs.removeAll();
            _this.history.removeAll();
            resonse.data.jobs.map(function (v) {
                if (v.status == "completed") {
                    _this.history.push(new job_1.Job(v));
                }
                else {
                    _this.jobs.push(new job_1.Job(v));
                }
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MainViewModel.prototype.refresh = function () {
        axios_1.default.get('/api/refresh')
            .then(function (resonse) {
            console.log(resonse.data);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return MainViewModel;
}());
exports.MainViewModel = MainViewModel;
;
var vm = new MainViewModel();
// window.vm = vm;
ko.applyBindings(vm);
//# sourceMappingURL=index.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function(){
var DEBUG=true;
(function(undefined){
    // (0, eval)('this') is a robust way of getting a reference to the global object
    // For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
    var window = this || (0, eval)('this'),
        document = window['document'],
        navigator = window['navigator'],
        jQueryInstance = window["jQuery"],
        JSON = window["JSON"];
(function(factory) {
    // Support three module loading scenarios
    if (true) {
        // [1] AMD anonymous module
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof module === 'object') {
        // [2] CommonJS/Node.js
        factory(module['exports'] || exports);  // module.exports is for Node.js
    } else {
        // [3] No module loader (plain <script> tag) - put directly in global namespace
        factory(window['ko'] = {});
    }
}(function(koExports, amdRequire){
// Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
// In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
var ko = typeof koExports !== 'undefined' ? koExports : {};
// Google Closure Compiler helpers (used only to make the minified file smaller)
ko.exportSymbol = function(koPath, object) {
    var tokens = koPath.split(".");

    // In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
    // At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
    var target = ko;

    for (var i = 0; i < tokens.length - 1; i++)
        target = target[tokens[i]];
    target[tokens[tokens.length - 1]] = object;
};
ko.exportProperty = function(owner, publicName, object) {
    owner[publicName] = object;
};
ko.version = "3.4.2";

ko.exportSymbol('version', ko.version);
// For any options that may affect various areas of Knockout and aren't directly associated with data binding.
ko.options = {
    'deferUpdates': false,
    'useOnlyNativeEvents': false
};

//ko.exportSymbol('options', ko.options);   // 'options' isn't minified
ko.utils = (function () {
    function objectForEach(obj, action) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                action(prop, obj[prop]);
            }
        }
    }

    function extend(target, source) {
        if (source) {
            for(var prop in source) {
                if(source.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    }

    function setPrototypeOf(obj, proto) {
        obj.__proto__ = proto;
        return obj;
    }

    var canSetPrototype = ({ __proto__: [] } instanceof Array);
    var canUseSymbols = !DEBUG && typeof Symbol === 'function';

    // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
    var knownEvents = {}, knownEventTypesByEventName = {};
    var keyEventTypeName = (navigator && /Firefox\/2/i.test(navigator.userAgent)) ? 'KeyboardEvent' : 'UIEvents';
    knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
    knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
    objectForEach(knownEvents, function(eventType, knownEventsForType) {
        if (knownEventsForType.length) {
            for (var i = 0, j = knownEventsForType.length; i < j; i++)
                knownEventTypesByEventName[knownEventsForType[i]] = eventType;
        }
    });
    var eventsThatMustBeRegisteredUsingAttachEvent = { 'propertychange': true }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406

    // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
    // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
    // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
    // If there is a future need to detect specific versions of IE10+, we will amend this.
    var ieVersion = document && (function() {
        var version = 3, div = document.createElement('div'), iElems = div.getElementsByTagName('i');

        // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
        while (
            div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->',
            iElems[0]
        ) {}
        return version > 4 ? version : undefined;
    }());
    var isIe6 = ieVersion === 6,
        isIe7 = ieVersion === 7;

    function isClickOnCheckableElement(element, eventType) {
        if ((ko.utils.tagNameLower(element) !== "input") || !element.type) return false;
        if (eventType.toLowerCase() != "click") return false;
        var inputType = element.type;
        return (inputType == "checkbox") || (inputType == "radio");
    }

    // For details on the pattern for changing node classes
    // see: https://github.com/knockout/knockout/issues/1597
    var cssClassNameRegex = /\S+/g;

    function toggleDomNodeCssClass(node, classNames, shouldHaveClass) {
        var addOrRemoveFn;
        if (classNames) {
            if (typeof node.classList === 'object') {
                addOrRemoveFn = node.classList[shouldHaveClass ? 'add' : 'remove'];
                ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                    addOrRemoveFn.call(node.classList, className);
                });
            } else if (typeof node.className['baseVal'] === 'string') {
                // SVG tag .classNames is an SVGAnimatedString instance
                toggleObjectClassPropertyString(node.className, 'baseVal', classNames, shouldHaveClass);
            } else {
                // node.className ought to be a string.
                toggleObjectClassPropertyString(node, 'className', classNames, shouldHaveClass);
            }
        }
    }

    function toggleObjectClassPropertyString(obj, prop, classNames, shouldHaveClass) {
        // obj/prop is either a node/'className' or a SVGAnimatedString/'baseVal'.
        var currentClassNames = obj[prop].match(cssClassNameRegex) || [];
        ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
            ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
        });
        obj[prop] = currentClassNames.join(" ");
    }

    return {
        fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],

        arrayForEach: function (array, action) {
            for (var i = 0, j = array.length; i < j; i++)
                action(array[i], i);
        },

        arrayIndexOf: function (array, item) {
            if (typeof Array.prototype.indexOf == "function")
                return Array.prototype.indexOf.call(array, item);
            for (var i = 0, j = array.length; i < j; i++)
                if (array[i] === item)
                    return i;
            return -1;
        },

        arrayFirst: function (array, predicate, predicateOwner) {
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate.call(predicateOwner, array[i], i))
                    return array[i];
            return null;
        },

        arrayRemoveItem: function (array, itemToRemove) {
            var index = ko.utils.arrayIndexOf(array, itemToRemove);
            if (index > 0) {
                array.splice(index, 1);
            }
            else if (index === 0) {
                array.shift();
            }
        },

        arrayGetDistinctValues: function (array) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++) {
                if (ko.utils.arrayIndexOf(result, array[i]) < 0)
                    result.push(array[i]);
            }
            return result;
        },

        arrayMap: function (array, mapping) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                result.push(mapping(array[i], i));
            return result;
        },

        arrayFilter: function (array, predicate) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate(array[i], i))
                    result.push(array[i]);
            return result;
        },

        arrayPushAll: function (array, valuesToPush) {
            if (valuesToPush instanceof Array)
                array.push.apply(array, valuesToPush);
            else
                for (var i = 0, j = valuesToPush.length; i < j; i++)
                    array.push(valuesToPush[i]);
            return array;
        },

        addOrRemoveItem: function(array, value, included) {
            var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);
            if (existingEntryIndex < 0) {
                if (included)
                    array.push(value);
            } else {
                if (!included)
                    array.splice(existingEntryIndex, 1);
            }
        },

        canSetPrototype: canSetPrototype,

        extend: extend,

        setPrototypeOf: setPrototypeOf,

        setPrototypeOfOrExtend: canSetPrototype ? setPrototypeOf : extend,

        objectForEach: objectForEach,

        objectMap: function(source, mapping) {
            if (!source)
                return source;
            var target = {};
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    target[prop] = mapping(source[prop], prop, source);
                }
            }
            return target;
        },

        emptyDomNode: function (domNode) {
            while (domNode.firstChild) {
                ko.removeNode(domNode.firstChild);
            }
        },

        moveCleanedNodesToContainerElement: function(nodes) {
            // Ensure it's a real array, as we're about to reparent the nodes and
            // we don't want the underlying collection to change while we're doing that.
            var nodesArray = ko.utils.makeArray(nodes);
            var templateDocument = (nodesArray[0] && nodesArray[0].ownerDocument) || document;

            var container = templateDocument.createElement('div');
            for (var i = 0, j = nodesArray.length; i < j; i++) {
                container.appendChild(ko.cleanNode(nodesArray[i]));
            }
            return container;
        },

        cloneNodes: function (nodesArray, shouldCleanNodes) {
            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                var clonedNode = nodesArray[i].cloneNode(true);
                newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
            }
            return newNodesArray;
        },

        setDomNodeChildren: function (domNode, childNodes) {
            ko.utils.emptyDomNode(domNode);
            if (childNodes) {
                for (var i = 0, j = childNodes.length; i < j; i++)
                    domNode.appendChild(childNodes[i]);
            }
        },

        replaceDomNodes: function (nodeToReplaceOrNodeArray, newNodesArray) {
            var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
            if (nodesToReplaceArray.length > 0) {
                var insertionPoint = nodesToReplaceArray[0];
                var parent = insertionPoint.parentNode;
                for (var i = 0, j = newNodesArray.length; i < j; i++)
                    parent.insertBefore(newNodesArray[i], insertionPoint);
                for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
                    ko.removeNode(nodesToReplaceArray[i]);
                }
            }
        },

        fixUpContinuousNodeArray: function(continuousNodeArray, parentNode) {
            // Before acting on a set of nodes that were previously outputted by a template function, we have to reconcile
            // them against what is in the DOM right now. It may be that some of the nodes have already been removed, or that
            // new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
            // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
            // So, this function translates the old "map" output array into its best guess of the set of current DOM nodes.
            //
            // Rules:
            //   [A] Any leading nodes that have been removed should be ignored
            //       These most likely correspond to memoization nodes that were already removed during binding
            //       See https://github.com/knockout/knockout/pull/440
            //   [B] Any trailing nodes that have been remove should be ignored
            //       This prevents the code here from adding unrelated nodes to the array while processing rule [C]
            //       See https://github.com/knockout/knockout/pull/1903
            //   [C] We want to output a continuous series of nodes. So, ignore any nodes that have already been removed,
            //       and include any nodes that have been inserted among the previous collection

            if (continuousNodeArray.length) {
                // The parent node can be a virtual element; so get the real parent node
                parentNode = (parentNode.nodeType === 8 && parentNode.parentNode) || parentNode;

                // Rule [A]
                while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode)
                    continuousNodeArray.splice(0, 1);

                // Rule [B]
                while (continuousNodeArray.length > 1 && continuousNodeArray[continuousNodeArray.length - 1].parentNode !== parentNode)
                    continuousNodeArray.length--;

                // Rule [C]
                if (continuousNodeArray.length > 1) {
                    var current = continuousNodeArray[0], last = continuousNodeArray[continuousNodeArray.length - 1];
                    // Replace with the actual new continuous node set
                    continuousNodeArray.length = 0;
                    while (current !== last) {
                        continuousNodeArray.push(current);
                        current = current.nextSibling;
                    }
                    continuousNodeArray.push(last);
                }
            }
            return continuousNodeArray;
        },

        setOptionNodeSelectionState: function (optionNode, isSelected) {
            // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
            if (ieVersion < 7)
                optionNode.setAttribute("selected", isSelected);
            else
                optionNode.selected = isSelected;
        },

        stringTrim: function (string) {
            return string === null || string === undefined ? '' :
                string.trim ?
                    string.trim() :
                    string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
        },

        stringStartsWith: function (string, startsWith) {
            string = string || "";
            if (startsWith.length > string.length)
                return false;
            return string.substring(0, startsWith.length) === startsWith;
        },

        domNodeIsContainedBy: function (node, containedByNode) {
            if (node === containedByNode)
                return true;
            if (node.nodeType === 11)
                return false; // Fixes issue #1162 - can't use node.contains for document fragments on IE8
            if (containedByNode.contains)
                return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
            if (containedByNode.compareDocumentPosition)
                return (containedByNode.compareDocumentPosition(node) & 16) == 16;
            while (node && node != containedByNode) {
                node = node.parentNode;
            }
            return !!node;
        },

        domNodeIsAttachedToDocument: function (node) {
            return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
        },

        anyDomNodeIsAttachedToDocument: function(nodes) {
            return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
        },

        tagNameLower: function(element) {
            // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
            // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
            // we don't need to do the .toLowerCase() as it will always be lower case anyway.
            return element && element.tagName && element.tagName.toLowerCase();
        },

        catchFunctionErrors: function (delegate) {
            return ko['onError'] ? function () {
                try {
                    return delegate.apply(this, arguments);
                } catch (e) {
                    ko['onError'] && ko['onError'](e);
                    throw e;
                }
            } : delegate;
        },

        setTimeout: function (handler, timeout) {
            return setTimeout(ko.utils.catchFunctionErrors(handler), timeout);
        },

        deferError: function (error) {
            setTimeout(function () {
                ko['onError'] && ko['onError'](error);
                throw error;
            }, 0);
        },

        registerEventHandler: function (element, eventType, handler) {
            var wrappedHandler = ko.utils.catchFunctionErrors(handler);

            var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
            if (!ko.options['useOnlyNativeEvents'] && !mustUseAttachEvent && jQueryInstance) {
                jQueryInstance(element)['bind'](eventType, wrappedHandler);
            } else if (!mustUseAttachEvent && typeof element.addEventListener == "function")
                element.addEventListener(eventType, wrappedHandler, false);
            else if (typeof element.attachEvent != "undefined") {
                var attachEventHandler = function (event) { wrappedHandler.call(element, event); },
                    attachEventName = "on" + eventType;
                element.attachEvent(attachEventName, attachEventHandler);

                // IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
                // so to avoid leaks, we have to remove them manually. See bug #856
                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    element.detachEvent(attachEventName, attachEventHandler);
                });
            } else
                throw new Error("Browser doesn't support addEventListener or attachEvent");
        },

        triggerEvent: function (element, eventType) {
            if (!(element && element.nodeType))
                throw new Error("element must be a DOM node when calling triggerEvent");

            // For click events on checkboxes and radio buttons, jQuery toggles the element checked state *after* the
            // event handler runs instead of *before*. (This was fixed in 1.9 for checkboxes but not for radio buttons.)
            // IE doesn't change the checked state when you trigger the click event using "fireEvent".
            // In both cases, we'll use the click method instead.
            var useClickWorkaround = isClickOnCheckableElement(element, eventType);

            if (!ko.options['useOnlyNativeEvents'] && jQueryInstance && !useClickWorkaround) {
                jQueryInstance(element)['trigger'](eventType);
            } else if (typeof document.createEvent == "function") {
                if (typeof element.dispatchEvent == "function") {
                    var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                    var event = document.createEvent(eventCategory);
                    event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                    element.dispatchEvent(event);
                }
                else
                    throw new Error("The supplied element doesn't support dispatchEvent");
            } else if (useClickWorkaround && element.click) {
                element.click();
            } else if (typeof element.fireEvent != "undefined") {
                element.fireEvent("on" + eventType);
            } else {
                throw new Error("Browser doesn't support triggering events");
            }
        },

        unwrapObservable: function (value) {
            return ko.isObservable(value) ? value() : value;
        },

        peekObservable: function (value) {
            return ko.isObservable(value) ? value.peek() : value;
        },

        toggleDomNodeCssClass: toggleDomNodeCssClass,

        setTextContent: function(element, textContent) {
            var value = ko.utils.unwrapObservable(textContent);
            if ((value === null) || (value === undefined))
                value = "";

            // We need there to be exactly one child: a text node.
            // If there are no children, more than one, or if it's not a text node,
            // we'll clear everything and create a single text node.
            var innerTextNode = ko.virtualElements.firstChild(element);
            if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                ko.virtualElements.setDomNodeChildren(element, [element.ownerDocument.createTextNode(value)]);
            } else {
                innerTextNode.data = value;
            }

            ko.utils.forceRefresh(element);
        },

        setElementName: function(element, name) {
            element.name = name;

            // Workaround IE 6/7 issue
            // - https://github.com/SteveSanderson/knockout/issues/197
            // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
            if (ieVersion <= 7) {
                try {
                    element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                }
                catch(e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
            }
        },

        forceRefresh: function(node) {
            // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
            if (ieVersion >= 9) {
                // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
                var elem = node.nodeType == 1 ? node : node.parentNode;
                if (elem.style)
                    elem.style.zoom = elem.style.zoom;
            }
        },

        ensureSelectElementIsRenderedCorrectly: function(selectElement) {
            // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
            // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
            // Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
            if (ieVersion) {
                var originalWidth = selectElement.style.width;
                selectElement.style.width = 0;
                selectElement.style.width = originalWidth;
            }
        },

        range: function (min, max) {
            min = ko.utils.unwrapObservable(min);
            max = ko.utils.unwrapObservable(max);
            var result = [];
            for (var i = min; i <= max; i++)
                result.push(i);
            return result;
        },

        makeArray: function(arrayLikeObject) {
            var result = [];
            for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
                result.push(arrayLikeObject[i]);
            };
            return result;
        },

        createSymbolOrString: function(identifier) {
            return canUseSymbols ? Symbol(identifier) : identifier;
        },

        isIe6 : isIe6,
        isIe7 : isIe7,
        ieVersion : ieVersion,

        getFormFields: function(form, fieldName) {
            var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
            var isMatchingField = (typeof fieldName == 'string')
                ? function(field) { return field.name === fieldName }
                : function(field) { return fieldName.test(field.name) }; // Treat fieldName as regex or object containing predicate
            var matches = [];
            for (var i = fields.length - 1; i >= 0; i--) {
                if (isMatchingField(fields[i]))
                    matches.push(fields[i]);
            };
            return matches;
        },

        parseJson: function (jsonString) {
            if (typeof jsonString == "string") {
                jsonString = ko.utils.stringTrim(jsonString);
                if (jsonString) {
                    if (JSON && JSON.parse) // Use native parsing where available
                        return JSON.parse(jsonString);
                    return (new Function("return " + jsonString))(); // Fallback on less safe parsing for older browsers
                }
            }
            return null;
        },

        stringifyJson: function (data, replacer, space) {   // replacer and space are optional
            if (!JSON || !JSON.stringify)
                throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
        },

        postJson: function (urlOrForm, data, options) {
            options = options || {};
            var params = options['params'] || {};
            var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
            var url = urlOrForm;

            // If we were given a form, use its 'action' URL and pick out any requested field values
            if((typeof urlOrForm == 'object') && (ko.utils.tagNameLower(urlOrForm) === "form")) {
                var originalForm = urlOrForm;
                url = originalForm.action;
                for (var i = includeFields.length - 1; i >= 0; i--) {
                    var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                    for (var j = fields.length - 1; j >= 0; j--)
                        params[fields[j].name] = fields[j].value;
                }
            }

            data = ko.utils.unwrapObservable(data);
            var form = document.createElement("form");
            form.style.display = "none";
            form.action = url;
            form.method = "post";
            for (var key in data) {
                // Since 'data' this is a model object, we include all properties including those inherited from its prototype
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                form.appendChild(input);
            }
            objectForEach(params, function(key, value) {
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = value;
                form.appendChild(input);
            });
            document.body.appendChild(form);
            options['submitter'] ? options['submitter'](form) : form.submit();
            setTimeout(function () { form.parentNode.removeChild(form); }, 0);
        }
    }
}());

ko.exportSymbol('utils', ko.utils);
ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
ko.exportSymbol('utils.extend', ko.utils.extend);
ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
ko.exportSymbol('utils.postJson', ko.utils.postJson);
ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
ko.exportSymbol('utils.range', ko.utils.range);
ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
ko.exportSymbol('utils.setTextContent', ko.utils.setTextContent);
ko.exportSymbol('unwrap', ko.utils.unwrapObservable); // Convenient shorthand, because this is used so commonly

if (!Function.prototype['bind']) {
    // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
    // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
    Function.prototype['bind'] = function (object) {
        var originalFunction = this;
        if (arguments.length === 1) {
            return function () {
                return originalFunction.apply(object, arguments);
            };
        } else {
            var partialArgs = Array.prototype.slice.call(arguments, 1);
            return function () {
                var args = partialArgs.slice(0);
                args.push.apply(args, arguments);
                return originalFunction.apply(object, args);
            };
        }
    };
}

ko.utils.domData = new (function () {
    var uniqueId = 0;
    var dataStoreKeyExpandoPropertyName = "__ko__" + (new Date).getTime();
    var dataStore = {};

    function getAll(node, createIfNotFound) {
        var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
        var hasExistingDataStore = dataStoreKey && (dataStoreKey !== "null") && dataStore[dataStoreKey];
        if (!hasExistingDataStore) {
            if (!createIfNotFound)
                return undefined;
            dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
            dataStore[dataStoreKey] = {};
        }
        return dataStore[dataStoreKey];
    }

    return {
        get: function (node, key) {
            var allDataForNode = getAll(node, false);
            return allDataForNode === undefined ? undefined : allDataForNode[key];
        },
        set: function (node, key, value) {
            if (value === undefined) {
                // Make sure we don't actually create a new domData key if we are actually deleting a value
                if (getAll(node, false) === undefined)
                    return;
            }
            var allDataForNode = getAll(node, true);
            allDataForNode[key] = value;
        },
        clear: function (node) {
            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
            if (dataStoreKey) {
                delete dataStore[dataStoreKey];
                node[dataStoreKeyExpandoPropertyName] = null;
                return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
            }
            return false;
        },

        nextKey: function () {
            return (uniqueId++) + dataStoreKeyExpandoPropertyName;
        }
    };
})();

ko.exportSymbol('utils.domData', ko.utils.domData);
ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

ko.utils.domNodeDisposal = new (function () {
    var domDataKey = ko.utils.domData.nextKey();
    var cleanableNodeTypes = { 1: true, 8: true, 9: true };       // Element, Comment, Document
    var cleanableNodeTypesWithDescendants = { 1: true, 9: true }; // Element, Document

    function getDisposeCallbacksCollection(node, createIfNotFound) {
        var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
        if ((allDisposeCallbacks === undefined) && createIfNotFound) {
            allDisposeCallbacks = [];
            ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
        }
        return allDisposeCallbacks;
    }
    function destroyCallbacksCollection(node) {
        ko.utils.domData.set(node, domDataKey, undefined);
    }

    function cleanSingleNode(node) {
        // Run all the dispose callbacks
        var callbacks = getDisposeCallbacksCollection(node, false);
        if (callbacks) {
            callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
            for (var i = 0; i < callbacks.length; i++)
                callbacks[i](node);
        }

        // Erase the DOM data
        ko.utils.domData.clear(node);

        // Perform cleanup needed by external libraries (currently only jQuery, but can be extended)
        ko.utils.domNodeDisposal["cleanExternalData"](node);

        // Clear any immediate-child comment nodes, as these wouldn't have been found by
        // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
        if (cleanableNodeTypesWithDescendants[node.nodeType])
            cleanImmediateCommentTypeChildren(node);
    }

    function cleanImmediateCommentTypeChildren(nodeWithChildren) {
        var child, nextChild = nodeWithChildren.firstChild;
        while (child = nextChild) {
            nextChild = child.nextSibling;
            if (child.nodeType === 8)
                cleanSingleNode(child);
        }
    }

    return {
        addDisposeCallback : function(node, callback) {
            if (typeof callback != "function")
                throw new Error("Callback must be a function");
            getDisposeCallbacksCollection(node, true).push(callback);
        },

        removeDisposeCallback : function(node, callback) {
            var callbacksCollection = getDisposeCallbacksCollection(node, false);
            if (callbacksCollection) {
                ko.utils.arrayRemoveItem(callbacksCollection, callback);
                if (callbacksCollection.length == 0)
                    destroyCallbacksCollection(node);
            }
        },

        cleanNode : function(node) {
            // First clean this node, where applicable
            if (cleanableNodeTypes[node.nodeType]) {
                cleanSingleNode(node);

                // ... then its descendants, where applicable
                if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                    // Clone the descendants list in case it changes during iteration
                    var descendants = [];
                    ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                    for (var i = 0, j = descendants.length; i < j; i++)
                        cleanSingleNode(descendants[i]);
                }
            }
            return node;
        },

        removeNode : function(node) {
            ko.cleanNode(node);
            if (node.parentNode)
                node.parentNode.removeChild(node);
        },

        "cleanExternalData" : function (node) {
            // Special support for jQuery here because it's so commonly used.
            // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
            // so notify it to tear down any resources associated with the node & descendants here.
            if (jQueryInstance && (typeof jQueryInstance['cleanData'] == "function"))
                jQueryInstance['cleanData']([node]);
        }
    };
})();
ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience
ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience
ko.exportSymbol('cleanNode', ko.cleanNode);
ko.exportSymbol('removeNode', ko.removeNode);
ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
(function () {
    var none = [0, "", ""],
        table = [1, "<table>", "</table>"],
        tbody = [2, "<table><tbody>", "</tbody></table>"],
        tr = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        select = [1, "<select multiple='multiple'>", "</select>"],
        lookup = {
            'thead': table,
            'tbody': table,
            'tfoot': table,
            'tr': tbody,
            'td': tr,
            'th': tr,
            'option': select,
            'optgroup': select
        },

        // This is needed for old IE if you're *not* using either jQuery or innerShiv. Doesn't affect other cases.
        mayRequireCreateElementHack = ko.utils.ieVersion <= 8;

    function getWrap(tags) {
        var m = tags.match(/^<([a-z]+)[ >]/);
        return (m && lookup[m[1]]) || none;
    }

    function simpleHtmlParse(html, documentContext) {
        documentContext || (documentContext = document);
        var windowContext = documentContext['parentWindow'] || documentContext['defaultView'] || window;

        // Based on jQuery's "clean" function, but only accounting for table-related elements.
        // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly

        // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
        // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
        // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
        // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.

        // Trim whitespace, otherwise indexOf won't work as expected
        var tags = ko.utils.stringTrim(html).toLowerCase(), div = documentContext.createElement("div"),
            wrap = getWrap(tags),
            depth = wrap[0];

        // Go to html and back, then peel off extra wrappers
        // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
        var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
        if (typeof windowContext['innerShiv'] == "function") {
            // Note that innerShiv is deprecated in favour of html5shiv. We should consider adding
            // support for html5shiv (except if no explicit support is needed, e.g., if html5shiv
            // somehow shims the native APIs so it just works anyway)
            div.appendChild(windowContext['innerShiv'](markup));
        } else {
            if (mayRequireCreateElementHack) {
                // The document.createElement('my-element') trick to enable custom elements in IE6-8
                // only works if we assign innerHTML on an element associated with that document.
                documentContext.appendChild(div);
            }

            div.innerHTML = markup;

            if (mayRequireCreateElementHack) {
                div.parentNode.removeChild(div);
            }
        }

        // Move to the right depth
        while (depth--)
            div = div.lastChild;

        return ko.utils.makeArray(div.lastChild.childNodes);
    }

    function jQueryHtmlParse(html, documentContext) {
        // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
        if (jQueryInstance['parseHTML']) {
            return jQueryInstance['parseHTML'](html, documentContext) || []; // Ensure we always return an array and never null
        } else {
            // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
            var elems = jQueryInstance['clean']([html], documentContext);

            // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
            // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
            // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
            if (elems && elems[0]) {
                // Find the top-most parent element that's a direct child of a document fragment
                var elem = elems[0];
                while (elem.parentNode && elem.parentNode.nodeType !== 11 /* i.e., DocumentFragment */)
                    elem = elem.parentNode;
                // ... then detach it
                if (elem.parentNode)
                    elem.parentNode.removeChild(elem);
            }

            return elems;
        }
    }

    ko.utils.parseHtmlFragment = function(html, documentContext) {
        return jQueryInstance ?
            jQueryHtmlParse(html, documentContext) :   // As below, benefit from jQuery's optimisations where possible
            simpleHtmlParse(html, documentContext);  // ... otherwise, this simple logic will do in most common cases.
    };

    ko.utils.setHtml = function(node, html) {
        ko.utils.emptyDomNode(node);

        // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
        html = ko.utils.unwrapObservable(html);

        if ((html !== null) && (html !== undefined)) {
            if (typeof html != 'string')
                html = html.toString();

            // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
            // for example <tr> elements which are not normally allowed to exist on their own.
            // If you've referenced jQuery we'll use that rather than duplicating its code.
            if (jQueryInstance) {
                jQueryInstance(node)['html'](html);
            } else {
                // ... otherwise, use KO's own parsing logic.
                var parsedNodes = ko.utils.parseHtmlFragment(html, node.ownerDocument);
                for (var i = 0; i < parsedNodes.length; i++)
                    node.appendChild(parsedNodes[i]);
            }
        }
    };
})();

ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

ko.memoization = (function () {
    var memos = {};

    function randomMax8HexChars() {
        return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
    }
    function generateRandomId() {
        return randomMax8HexChars() + randomMax8HexChars();
    }
    function findMemoNodes(rootNode, appendToArray) {
        if (!rootNode)
            return;
        if (rootNode.nodeType == 8) {
            var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
            if (memoId != null)
                appendToArray.push({ domNode: rootNode, memoId: memoId });
        } else if (rootNode.nodeType == 1) {
            for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++)
                findMemoNodes(childNodes[i], appendToArray);
        }
    }

    return {
        memoize: function (callback) {
            if (typeof callback != "function")
                throw new Error("You can only pass a function to ko.memoization.memoize()");
            var memoId = generateRandomId();
            memos[memoId] = callback;
            return "<!--[ko_memo:" + memoId + "]-->";
        },

        unmemoize: function (memoId, callbackParams) {
            var callback = memos[memoId];
            if (callback === undefined)
                throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
            try {
                callback.apply(null, callbackParams || []);
                return true;
            }
            finally { delete memos[memoId]; }
        },

        unmemoizeDomNodeAndDescendants: function (domNode, extraCallbackParamsArray) {
            var memos = [];
            findMemoNodes(domNode, memos);
            for (var i = 0, j = memos.length; i < j; i++) {
                var node = memos[i].domNode;
                var combinedParams = [node];
                if (extraCallbackParamsArray)
                    ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again
                if (node.parentNode)
                    node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
            }
        },

        parseMemoText: function (memoText) {
            var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
            return match ? match[1] : null;
        }
    };
})();

ko.exportSymbol('memoization', ko.memoization);
ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
ko.tasks = (function () {
    var scheduler,
        taskQueue = [],
        taskQueueLength = 0,
        nextHandle = 1,
        nextIndexToProcess = 0;

    if (window['MutationObserver']) {
        // Chrome 27+, Firefox 14+, IE 11+, Opera 15+, Safari 6.1+
        // From https://github.com/petkaantonov/bluebird * Copyright (c) 2014 Petka Antonov * License: MIT
        scheduler = (function (callback) {
            var div = document.createElement("div");
            new MutationObserver(callback).observe(div, {attributes: true});
            return function () { div.classList.toggle("foo"); };
        })(scheduledProcess);
    } else if (document && "onreadystatechange" in document.createElement("script")) {
        // IE 6-10
        // From https://github.com/YuzuJS/setImmediate * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola * License: MIT
        scheduler = function (callback) {
            var script = document.createElement("script");
            script.onreadystatechange = function () {
                script.onreadystatechange = null;
                document.documentElement.removeChild(script);
                script = null;
                callback();
            };
            document.documentElement.appendChild(script);
        };
    } else {
        scheduler = function (callback) {
            setTimeout(callback, 0);
        };
    }

    function processTasks() {
        if (taskQueueLength) {
            // Each mark represents the end of a logical group of tasks and the number of these groups is
            // limited to prevent unchecked recursion.
            var mark = taskQueueLength, countMarks = 0;

            // nextIndexToProcess keeps track of where we are in the queue; processTasks can be called recursively without issue
            for (var task; nextIndexToProcess < taskQueueLength; ) {
                if (task = taskQueue[nextIndexToProcess++]) {
                    if (nextIndexToProcess > mark) {
                        if (++countMarks >= 5000) {
                            nextIndexToProcess = taskQueueLength;   // skip all tasks remaining in the queue since any of them could be causing the recursion
                            ko.utils.deferError(Error("'Too much recursion' after processing " + countMarks + " task groups."));
                            break;
                        }
                        mark = taskQueueLength;
                    }
                    try {
                        task();
                    } catch (ex) {
                        ko.utils.deferError(ex);
                    }
                }
            }
        }
    }

    function scheduledProcess() {
        processTasks();

        // Reset the queue
        nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
    }

    function scheduleTaskProcessing() {
        ko.tasks['scheduler'](scheduledProcess);
    }

    var tasks = {
        'scheduler': scheduler,     // Allow overriding the scheduler

        schedule: function (func) {
            if (!taskQueueLength) {
                scheduleTaskProcessing();
            }

            taskQueue[taskQueueLength++] = func;
            return nextHandle++;
        },

        cancel: function (handle) {
            var index = handle - (nextHandle - taskQueueLength);
            if (index >= nextIndexToProcess && index < taskQueueLength) {
                taskQueue[index] = null;
            }
        },

        // For testing only: reset the queue and return the previous queue length
        'resetForTesting': function () {
            var length = taskQueueLength - nextIndexToProcess;
            nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
            return length;
        },

        runEarly: processTasks
    };

    return tasks;
})();

ko.exportSymbol('tasks', ko.tasks);
ko.exportSymbol('tasks.schedule', ko.tasks.schedule);
//ko.exportSymbol('tasks.cancel', ko.tasks.cancel);  "cancel" isn't minified
ko.exportSymbol('tasks.runEarly', ko.tasks.runEarly);
ko.extenders = {
    'throttle': function(target, timeout) {
        // Throttling means two things:

        // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
        //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
        target['throttleEvaluation'] = timeout;

        // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
        //     so the target cannot change value synchronously or faster than a certain rate
        var writeTimeoutInstance = null;
        return ko.dependentObservable({
            'read': target,
            'write': function(value) {
                clearTimeout(writeTimeoutInstance);
                writeTimeoutInstance = ko.utils.setTimeout(function() {
                    target(value);
                }, timeout);
            }
        });
    },

    'rateLimit': function(target, options) {
        var timeout, method, limitFunction;

        if (typeof options == 'number') {
            timeout = options;
        } else {
            timeout = options['timeout'];
            method = options['method'];
        }

        // rateLimit supersedes deferred updates
        target._deferUpdates = false;

        limitFunction = method == 'notifyWhenChangesStop' ?  debounce : throttle;
        target.limit(function(callback) {
            return limitFunction(callback, timeout);
        });
    },

    'deferred': function(target, options) {
        if (options !== true) {
            throw new Error('The \'deferred\' extender only accepts the value \'true\', because it is not supported to turn deferral off once enabled.')
        }

        if (!target._deferUpdates) {
            target._deferUpdates = true;
            target.limit(function (callback) {
                var handle,
                    ignoreUpdates = false;
                return function () {
                    if (!ignoreUpdates) {
                        ko.tasks.cancel(handle);
                        handle = ko.tasks.schedule(callback);

                        try {
                            ignoreUpdates = true;
                            target['notifySubscribers'](undefined, 'dirty');
                        } finally {
                            ignoreUpdates = false;
                        }
                    }
                };
            });
        }
    },

    'notify': function(target, notifyWhen) {
        target["equalityComparer"] = notifyWhen == "always" ?
            null :  // null equalityComparer means to always notify
            valuesArePrimitiveAndEqual;
    }
};

var primitiveTypes = { 'undefined':1, 'boolean':1, 'number':1, 'string':1 };
function valuesArePrimitiveAndEqual(a, b) {
    var oldValueIsPrimitive = (a === null) || (typeof(a) in primitiveTypes);
    return oldValueIsPrimitive ? (a === b) : false;
}

function throttle(callback, timeout) {
    var timeoutInstance;
    return function () {
        if (!timeoutInstance) {
            timeoutInstance = ko.utils.setTimeout(function () {
                timeoutInstance = undefined;
                callback();
            }, timeout);
        }
    };
}

function debounce(callback, timeout) {
    var timeoutInstance;
    return function () {
        clearTimeout(timeoutInstance);
        timeoutInstance = ko.utils.setTimeout(callback, timeout);
    };
}

function applyExtenders(requestedExtenders) {
    var target = this;
    if (requestedExtenders) {
        ko.utils.objectForEach(requestedExtenders, function(key, value) {
            var extenderHandler = ko.extenders[key];
            if (typeof extenderHandler == 'function') {
                target = extenderHandler(target, value) || target;
            }
        });
    }
    return target;
}

ko.exportSymbol('extenders', ko.extenders);

ko.subscription = function (target, callback, disposeCallback) {
    this._target = target;
    this.callback = callback;
    this.disposeCallback = disposeCallback;
    this.isDisposed = false;
    ko.exportProperty(this, 'dispose', this.dispose);
};
ko.subscription.prototype.dispose = function () {
    this.isDisposed = true;
    this.disposeCallback();
};

ko.subscribable = function () {
    ko.utils.setPrototypeOfOrExtend(this, ko_subscribable_fn);
    ko_subscribable_fn.init(this);
}

var defaultEvent = "change";

// Moved out of "limit" to avoid the extra closure
function limitNotifySubscribers(value, event) {
    if (!event || event === defaultEvent) {
        this._limitChange(value);
    } else if (event === 'beforeChange') {
        this._limitBeforeChange(value);
    } else {
        this._origNotifySubscribers(value, event);
    }
}

var ko_subscribable_fn = {
    init: function(instance) {
        instance._subscriptions = { "change": [] };
        instance._versionNumber = 1;
    },

    subscribe: function (callback, callbackTarget, event) {
        var self = this;

        event = event || defaultEvent;
        var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;

        var subscription = new ko.subscription(self, boundCallback, function () {
            ko.utils.arrayRemoveItem(self._subscriptions[event], subscription);
            if (self.afterSubscriptionRemove)
                self.afterSubscriptionRemove(event);
        });

        if (self.beforeSubscriptionAdd)
            self.beforeSubscriptionAdd(event);

        if (!self._subscriptions[event])
            self._subscriptions[event] = [];
        self._subscriptions[event].push(subscription);

        return subscription;
    },

    "notifySubscribers": function (valueToNotify, event) {
        event = event || defaultEvent;
        if (event === defaultEvent) {
            this.updateVersion();
        }
        if (this.hasSubscriptionsForEvent(event)) {
            var subs = event === defaultEvent && this._changeSubscriptions || this._subscriptions[event].slice(0);
            try {
                ko.dependencyDetection.begin(); // Begin suppressing dependency detection (by setting the top frame to undefined)
                for (var i = 0, subscription; subscription = subs[i]; ++i) {
                    // In case a subscription was disposed during the arrayForEach cycle, check
                    // for isDisposed on each subscription before invoking its callback
                    if (!subscription.isDisposed)
                        subscription.callback(valueToNotify);
                }
            } finally {
                ko.dependencyDetection.end(); // End suppressing dependency detection
            }
        }
    },

    getVersion: function () {
        return this._versionNumber;
    },

    hasChanged: function (versionToCheck) {
        return this.getVersion() !== versionToCheck;
    },

    updateVersion: function () {
        ++this._versionNumber;
    },

    limit: function(limitFunction) {
        var self = this, selfIsObservable = ko.isObservable(self),
            ignoreBeforeChange, notifyNextChange, previousValue, pendingValue, beforeChange = 'beforeChange';

        if (!self._origNotifySubscribers) {
            self._origNotifySubscribers = self["notifySubscribers"];
            self["notifySubscribers"] = limitNotifySubscribers;
        }

        var finish = limitFunction(function() {
            self._notificationIsPending = false;

            // If an observable provided a reference to itself, access it to get the latest value.
            // This allows computed observables to delay calculating their value until needed.
            if (selfIsObservable && pendingValue === self) {
                pendingValue = self._evalIfChanged ? self._evalIfChanged() : self();
            }
            var shouldNotify = notifyNextChange || self.isDifferent(previousValue, pendingValue);

            notifyNextChange = ignoreBeforeChange = false;

            if (shouldNotify) {
                self._origNotifySubscribers(previousValue = pendingValue);
            }
        });

        self._limitChange = function(value) {
            self._changeSubscriptions = self._subscriptions[defaultEvent].slice(0);
            self._notificationIsPending = ignoreBeforeChange = true;
            pendingValue = value;
            finish();
        };
        self._limitBeforeChange = function(value) {
            if (!ignoreBeforeChange) {
                previousValue = value;
                self._origNotifySubscribers(value, beforeChange);
            }
        };
        self._notifyNextChangeIfValueIsDifferent = function() {
            if (self.isDifferent(previousValue, self.peek(true /*evaluate*/))) {
                notifyNextChange = true;
            }
        };
    },

    hasSubscriptionsForEvent: function(event) {
        return this._subscriptions[event] && this._subscriptions[event].length;
    },

    getSubscriptionsCount: function (event) {
        if (event) {
            return this._subscriptions[event] && this._subscriptions[event].length || 0;
        } else {
            var total = 0;
            ko.utils.objectForEach(this._subscriptions, function(eventName, subscriptions) {
                if (eventName !== 'dirty')
                    total += subscriptions.length;
            });
            return total;
        }
    },

    isDifferent: function(oldValue, newValue) {
        return !this['equalityComparer'] || !this['equalityComparer'](oldValue, newValue);
    },

    extend: applyExtenders
};

ko.exportProperty(ko_subscribable_fn, 'subscribe', ko_subscribable_fn.subscribe);
ko.exportProperty(ko_subscribable_fn, 'extend', ko_subscribable_fn.extend);
ko.exportProperty(ko_subscribable_fn, 'getSubscriptionsCount', ko_subscribable_fn.getSubscriptionsCount);

// For browsers that support proto assignment, we overwrite the prototype of each
// observable instance. Since observables are functions, we need Function.prototype
// to still be in the prototype chain.
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(ko_subscribable_fn, Function.prototype);
}

ko.subscribable['fn'] = ko_subscribable_fn;


ko.isSubscribable = function (instance) {
    return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
};

ko.exportSymbol('subscribable', ko.subscribable);
ko.exportSymbol('isSubscribable', ko.isSubscribable);

ko.computedContext = ko.dependencyDetection = (function () {
    var outerFrames = [],
        currentFrame,
        lastId = 0;

    // Return a unique ID that can be assigned to an observable for dependency tracking.
    // Theoretically, you could eventually overflow the number storage size, resulting
    // in duplicate IDs. But in JavaScript, the largest exact integral value is 2^53
    // or 9,007,199,254,740,992. If you created 1,000,000 IDs per second, it would
    // take over 285 years to reach that number.
    // Reference http://blog.vjeux.com/2010/javascript/javascript-max_int-number-limits.html
    function getId() {
        return ++lastId;
    }

    function begin(options) {
        outerFrames.push(currentFrame);
        currentFrame = options;
    }

    function end() {
        currentFrame = outerFrames.pop();
    }

    return {
        begin: begin,

        end: end,

        registerDependency: function (subscribable) {
            if (currentFrame) {
                if (!ko.isSubscribable(subscribable))
                    throw new Error("Only subscribable things can act as dependencies");
                currentFrame.callback.call(currentFrame.callbackTarget, subscribable, subscribable._id || (subscribable._id = getId()));
            }
        },

        ignore: function (callback, callbackTarget, callbackArgs) {
            try {
                begin();
                return callback.apply(callbackTarget, callbackArgs || []);
            } finally {
                end();
            }
        },

        getDependenciesCount: function () {
            if (currentFrame)
                return currentFrame.computed.getDependenciesCount();
        },

        isInitial: function() {
            if (currentFrame)
                return currentFrame.isInitial;
        }
    };
})();

ko.exportSymbol('computedContext', ko.computedContext);
ko.exportSymbol('computedContext.getDependenciesCount', ko.computedContext.getDependenciesCount);
ko.exportSymbol('computedContext.isInitial', ko.computedContext.isInitial);

ko.exportSymbol('ignoreDependencies', ko.ignoreDependencies = ko.dependencyDetection.ignore);
var observableLatestValue = ko.utils.createSymbolOrString('_latestValue');

ko.observable = function (initialValue) {
    function observable() {
        if (arguments.length > 0) {
            // Write

            // Ignore writes if the value hasn't changed
            if (observable.isDifferent(observable[observableLatestValue], arguments[0])) {
                observable.valueWillMutate();
                observable[observableLatestValue] = arguments[0];
                observable.valueHasMutated();
            }
            return this; // Permits chained assignments
        }
        else {
            // Read
            ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation
            return observable[observableLatestValue];
        }
    }

    observable[observableLatestValue] = initialValue;

    // Inherit from 'subscribable'
    if (!ko.utils.canSetPrototype) {
        // 'subscribable' won't be on the prototype chain unless we put it there directly
        ko.utils.extend(observable, ko.subscribable['fn']);
    }
    ko.subscribable['fn'].init(observable);

    // Inherit from 'observable'
    ko.utils.setPrototypeOfOrExtend(observable, observableFn);

    if (ko.options['deferUpdates']) {
        ko.extenders['deferred'](observable, true);
    }

    return observable;
}

// Define prototype for observables
var observableFn = {
    'equalityComparer': valuesArePrimitiveAndEqual,
    peek: function() { return this[observableLatestValue]; },
    valueHasMutated: function () { this['notifySubscribers'](this[observableLatestValue]); },
    valueWillMutate: function () { this['notifySubscribers'](this[observableLatestValue], 'beforeChange'); }
};

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.observable constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(observableFn, ko.subscribable['fn']);
}

var protoProperty = ko.observable.protoProperty = '__ko_proto__';
observableFn[protoProperty] = ko.observable;

ko.hasPrototype = function(instance, prototype) {
    if ((instance === null) || (instance === undefined) || (instance[protoProperty] === undefined)) return false;
    if (instance[protoProperty] === prototype) return true;
    return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
};

ko.isObservable = function (instance) {
    return ko.hasPrototype(instance, ko.observable);
}
ko.isWriteableObservable = function (instance) {
    // Observable
    if ((typeof instance == 'function') && instance[protoProperty] === ko.observable)
        return true;
    // Writeable dependent observable
    if ((typeof instance == 'function') && (instance[protoProperty] === ko.dependentObservable) && (instance.hasWriteFunction))
        return true;
    // Anything else
    return false;
}

ko.exportSymbol('observable', ko.observable);
ko.exportSymbol('isObservable', ko.isObservable);
ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
ko.exportSymbol('isWritableObservable', ko.isWriteableObservable);
ko.exportSymbol('observable.fn', observableFn);
ko.exportProperty(observableFn, 'peek', observableFn.peek);
ko.exportProperty(observableFn, 'valueHasMutated', observableFn.valueHasMutated);
ko.exportProperty(observableFn, 'valueWillMutate', observableFn.valueWillMutate);
ko.observableArray = function (initialValues) {
    initialValues = initialValues || [];

    if (typeof initialValues != 'object' || !('length' in initialValues))
        throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");

    var result = ko.observable(initialValues);
    ko.utils.setPrototypeOfOrExtend(result, ko.observableArray['fn']);
    return result.extend({'trackArrayChanges':true});
};

ko.observableArray['fn'] = {
    'remove': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var removedValues = [];
        var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        for (var i = 0; i < underlyingArray.length; i++) {
            var value = underlyingArray[i];
            if (predicate(value)) {
                if (removedValues.length === 0) {
                    this.valueWillMutate();
                }
                removedValues.push(value);
                underlyingArray.splice(i, 1);
                i--;
            }
        }
        if (removedValues.length) {
            this.valueHasMutated();
        }
        return removedValues;
    },

    'removeAll': function (arrayOfValues) {
        // If you passed zero args, we remove everything
        if (arrayOfValues === undefined) {
            var underlyingArray = this.peek();
            var allValues = underlyingArray.slice(0);
            this.valueWillMutate();
            underlyingArray.splice(0, underlyingArray.length);
            this.valueHasMutated();
            return allValues;
        }
        // If you passed an arg, we interpret it as an array of entries to remove
        if (!arrayOfValues)
            return [];
        return this['remove'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'destroy': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        this.valueWillMutate();
        for (var i = underlyingArray.length - 1; i >= 0; i--) {
            var value = underlyingArray[i];
            if (predicate(value))
                underlyingArray[i]["_destroy"] = true;
        }
        this.valueHasMutated();
    },

    'destroyAll': function (arrayOfValues) {
        // If you passed zero args, we destroy everything
        if (arrayOfValues === undefined)
            return this['destroy'](function() { return true });

        // If you passed an arg, we interpret it as an array of entries to destroy
        if (!arrayOfValues)
            return [];
        return this['destroy'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'indexOf': function (item) {
        var underlyingArray = this();
        return ko.utils.arrayIndexOf(underlyingArray, item);
    },

    'replace': function(oldItem, newItem) {
        var index = this['indexOf'](oldItem);
        if (index >= 0) {
            this.valueWillMutate();
            this.peek()[index] = newItem;
            this.valueHasMutated();
        }
    }
};

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.observableArray constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(ko.observableArray['fn'], ko.observable['fn']);
}

// Populate ko.observableArray.fn with read/write functions from native arrays
// Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
// because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
        // (for consistency with mutating regular observables)
        var underlyingArray = this.peek();
        this.valueWillMutate();
        this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
        var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
        this.valueHasMutated();
        // The native sort and reverse methods return a reference to the array, but it makes more sense to return the observable array instead.
        return methodCallResult === underlyingArray ? this : methodCallResult;
    };
});

// Populate ko.observableArray.fn with read-only functions from native arrays
ko.utils.arrayForEach(["slice"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        var underlyingArray = this();
        return underlyingArray[methodName].apply(underlyingArray, arguments);
    };
});

ko.exportSymbol('observableArray', ko.observableArray);
var arrayChangeEventName = 'arrayChange';
ko.extenders['trackArrayChanges'] = function(target, options) {
    // Use the provided options--each call to trackArrayChanges overwrites the previously set options
    target.compareArrayOptions = {};
    if (options && typeof options == "object") {
        ko.utils.extend(target.compareArrayOptions, options);
    }
    target.compareArrayOptions['sparse'] = true;

    // Only modify the target observable once
    if (target.cacheDiffForKnownOperation) {
        return;
    }
    var trackingChanges = false,
        cachedDiff = null,
        arrayChangeSubscription,
        pendingNotifications = 0,
        underlyingNotifySubscribersFunction,
        underlyingBeforeSubscriptionAddFunction = target.beforeSubscriptionAdd,
        underlyingAfterSubscriptionRemoveFunction = target.afterSubscriptionRemove;

    // Watch "subscribe" calls, and for array change events, ensure change tracking is enabled
    target.beforeSubscriptionAdd = function (event) {
        if (underlyingBeforeSubscriptionAddFunction)
            underlyingBeforeSubscriptionAddFunction.call(target, event);
        if (event === arrayChangeEventName) {
            trackChanges();
        }
    };
    // Watch "dispose" calls, and for array change events, ensure change tracking is disabled when all are disposed
    target.afterSubscriptionRemove = function (event) {
        if (underlyingAfterSubscriptionRemoveFunction)
            underlyingAfterSubscriptionRemoveFunction.call(target, event);
        if (event === arrayChangeEventName && !target.hasSubscriptionsForEvent(arrayChangeEventName)) {
            if (underlyingNotifySubscribersFunction) {
                target['notifySubscribers'] = underlyingNotifySubscribersFunction;
                underlyingNotifySubscribersFunction = undefined;
            }
            arrayChangeSubscription.dispose();
            trackingChanges = false;
        }
    };

    function trackChanges() {
        // Calling 'trackChanges' multiple times is the same as calling it once
        if (trackingChanges) {
            return;
        }

        trackingChanges = true;

        // Intercept "notifySubscribers" to track how many times it was called.
        underlyingNotifySubscribersFunction = target['notifySubscribers'];
        target['notifySubscribers'] = function(valueToNotify, event) {
            if (!event || event === defaultEvent) {
                ++pendingNotifications;
            }
            return underlyingNotifySubscribersFunction.apply(this, arguments);
        };

        // Each time the array changes value, capture a clone so that on the next
        // change it's possible to produce a diff
        var previousContents = [].concat(target.peek() || []);
        cachedDiff = null;
        arrayChangeSubscription = target.subscribe(function(currentContents) {
            // Make a copy of the current contents and ensure it's an array
            currentContents = [].concat(currentContents || []);

            // Compute the diff and issue notifications, but only if someone is listening
            if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                var changes = getChanges(previousContents, currentContents);
            }

            // Eliminate references to the old, removed items, so they can be GCed
            previousContents = currentContents;
            cachedDiff = null;
            pendingNotifications = 0;

            if (changes && changes.length) {
                target['notifySubscribers'](changes, arrayChangeEventName);
            }
        });
    }

    function getChanges(previousContents, currentContents) {
        // We try to re-use cached diffs.
        // The scenarios where pendingNotifications > 1 are when using rate-limiting or the Deferred Updates
        // plugin, which without this check would not be compatible with arrayChange notifications. Normally,
        // notifications are issued immediately so we wouldn't be queueing up more than one.
        if (!cachedDiff || pendingNotifications > 1) {
            cachedDiff = ko.utils.compareArrays(previousContents, currentContents, target.compareArrayOptions);
        }

        return cachedDiff;
    }

    target.cacheDiffForKnownOperation = function(rawArray, operationName, args) {
        // Only run if we're currently tracking changes for this observable array
        // and there aren't any pending deferred notifications.
        if (!trackingChanges || pendingNotifications) {
            return;
        }
        var diff = [],
            arrayLength = rawArray.length,
            argsLength = args.length,
            offset = 0;

        function pushDiff(status, value, index) {
            return diff[diff.length] = { 'status': status, 'value': value, 'index': index };
        }
        switch (operationName) {
            case 'push':
                offset = arrayLength;
            case 'unshift':
                for (var index = 0; index < argsLength; index++) {
                    pushDiff('added', args[index], offset + index);
                }
                break;

            case 'pop':
                offset = arrayLength - 1;
            case 'shift':
                if (arrayLength) {
                    pushDiff('deleted', rawArray[offset], offset);
                }
                break;

            case 'splice':
                // Negative start index means 'from end of array'. After that we clamp to [0...arrayLength].
                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
                    endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
                    endAddIndex = startIndex + argsLength - 2,
                    endIndex = Math.max(endDeleteIndex, endAddIndex),
                    additions = [], deletions = [];
                for (var index = startIndex, argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
                    if (index < endDeleteIndex)
                        deletions.push(pushDiff('deleted', rawArray[index], index));
                    if (index < endAddIndex)
                        additions.push(pushDiff('added', args[argsIndex], index));
                }
                ko.utils.findMovesInArrayComparison(deletions, additions);
                break;

            default:
                return;
        }
        cachedDiff = diff;
    };
};
var computedState = ko.utils.createSymbolOrString('_state');

ko.computed = ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
    if (typeof evaluatorFunctionOrOptions === "object") {
        // Single-parameter syntax - everything is on this "options" param
        options = evaluatorFunctionOrOptions;
    } else {
        // Multi-parameter syntax - construct the options according to the params passed
        options = options || {};
        if (evaluatorFunctionOrOptions) {
            options["read"] = evaluatorFunctionOrOptions;
        }
    }
    if (typeof options["read"] != "function")
        throw Error("Pass a function that returns the value of the ko.computed");

    var writeFunction = options["write"];
    var state = {
        latestValue: undefined,
        isStale: true,
        isDirty: true,
        isBeingEvaluated: false,
        suppressDisposalUntilDisposeWhenReturnsFalse: false,
        isDisposed: false,
        pure: false,
        isSleeping: false,
        readFunction: options["read"],
        evaluatorFunctionTarget: evaluatorFunctionTarget || options["owner"],
        disposeWhenNodeIsRemoved: options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
        disposeWhen: options["disposeWhen"] || options.disposeWhen,
        domNodeDisposalCallback: null,
        dependencyTracking: {},
        dependenciesCount: 0,
        evaluationTimeoutInstance: null
    };

    function computedObservable() {
        if (arguments.length > 0) {
            if (typeof writeFunction === "function") {
                // Writing a value
                writeFunction.apply(state.evaluatorFunctionTarget, arguments);
            } else {
                throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            }
            return this; // Permits chained assignments
        } else {
            // Reading the value
            ko.dependencyDetection.registerDependency(computedObservable);
            if (state.isDirty || (state.isSleeping && computedObservable.haveDependenciesChanged())) {
                computedObservable.evaluateImmediate();
            }
            return state.latestValue;
        }
    }

    computedObservable[computedState] = state;
    computedObservable.hasWriteFunction = typeof writeFunction === "function";

    // Inherit from 'subscribable'
    if (!ko.utils.canSetPrototype) {
        // 'subscribable' won't be on the prototype chain unless we put it there directly
        ko.utils.extend(computedObservable, ko.subscribable['fn']);
    }
    ko.subscribable['fn'].init(computedObservable);

    // Inherit from 'computed'
    ko.utils.setPrototypeOfOrExtend(computedObservable, computedFn);

    if (options['pure']) {
        state.pure = true;
        state.isSleeping = true;     // Starts off sleeping; will awake on the first subscription
        ko.utils.extend(computedObservable, pureComputedOverrides);
    } else if (options['deferEvaluation']) {
        ko.utils.extend(computedObservable, deferEvaluationOverrides);
    }

    if (ko.options['deferUpdates']) {
        ko.extenders['deferred'](computedObservable, true);
    }

    if (DEBUG) {
        // #1731 - Aid debugging by exposing the computed's options
        computedObservable["_options"] = options;
    }

    if (state.disposeWhenNodeIsRemoved) {
        // Since this computed is associated with a DOM node, and we don't want to dispose the computed
        // until the DOM node is *removed* from the document (as opposed to never having been in the document),
        // we'll prevent disposal until "disposeWhen" first returns false.
        state.suppressDisposalUntilDisposeWhenReturnsFalse = true;

        // disposeWhenNodeIsRemoved: true can be used to opt into the "only dispose after first false result"
        // behaviour even if there's no specific node to watch. In that case, clear the option so we don't try
        // to watch for a non-node's disposal. This technique is intended for KO's internal use only and shouldn't
        // be documented or used by application code, as it's likely to change in a future version of KO.
        if (!state.disposeWhenNodeIsRemoved.nodeType) {
            state.disposeWhenNodeIsRemoved = null;
        }
    }

    // Evaluate, unless sleeping or deferEvaluation is true
    if (!state.isSleeping && !options['deferEvaluation']) {
        computedObservable.evaluateImmediate();
    }

    // Attach a DOM node disposal callback so that the computed will be proactively disposed as soon as the node is
    // removed using ko.removeNode. But skip if isActive is false (there will never be any dependencies to dispose).
    if (state.disposeWhenNodeIsRemoved && computedObservable.isActive()) {
        ko.utils.domNodeDisposal.addDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback = function () {
            computedObservable.dispose();
        });
    }

    return computedObservable;
};

// Utility function that disposes a given dependencyTracking entry
function computedDisposeDependencyCallback(id, entryToDispose) {
    if (entryToDispose !== null && entryToDispose.dispose) {
        entryToDispose.dispose();
    }
}

// This function gets called each time a dependency is detected while evaluating a computed.
// It's factored out as a shared function to avoid creating unnecessary function instances during evaluation.
function computedBeginDependencyDetectionCallback(subscribable, id) {
    var computedObservable = this.computedObservable,
        state = computedObservable[computedState];
    if (!state.isDisposed) {
        if (this.disposalCount && this.disposalCandidates[id]) {
            // Don't want to dispose this subscription, as it's still being used
            computedObservable.addDependencyTracking(id, subscribable, this.disposalCandidates[id]);
            this.disposalCandidates[id] = null; // No need to actually delete the property - disposalCandidates is a transient object anyway
            --this.disposalCount;
        } else if (!state.dependencyTracking[id]) {
            // Brand new subscription - add it
            computedObservable.addDependencyTracking(id, subscribable, state.isSleeping ? { _target: subscribable } : computedObservable.subscribeToDependency(subscribable));
        }
        // If the observable we've accessed has a pending notification, ensure we get notified of the actual final value (bypass equality checks)
        if (subscribable._notificationIsPending) {
            subscribable._notifyNextChangeIfValueIsDifferent();
        }
    }
}

var computedFn = {
    "equalityComparer": valuesArePrimitiveAndEqual,
    getDependenciesCount: function () {
        return this[computedState].dependenciesCount;
    },
    addDependencyTracking: function (id, target, trackingObj) {
        if (this[computedState].pure && target === this) {
            throw Error("A 'pure' computed must not be called recursively");
        }

        this[computedState].dependencyTracking[id] = trackingObj;
        trackingObj._order = this[computedState].dependenciesCount++;
        trackingObj._version = target.getVersion();
    },
    haveDependenciesChanged: function () {
        var id, dependency, dependencyTracking = this[computedState].dependencyTracking;
        for (id in dependencyTracking) {
            if (dependencyTracking.hasOwnProperty(id)) {
                dependency = dependencyTracking[id];
                if ((this._evalDelayed && dependency._target._notificationIsPending) || dependency._target.hasChanged(dependency._version)) {
                    return true;
                }
            }
        }
    },
    markDirty: function () {
        // Process "dirty" events if we can handle delayed notifications
        if (this._evalDelayed && !this[computedState].isBeingEvaluated) {
            this._evalDelayed(false /*isChange*/);
        }
    },
    isActive: function () {
        var state = this[computedState];
        return state.isDirty || state.dependenciesCount > 0;
    },
    respondToChange: function () {
        // Ignore "change" events if we've already scheduled a delayed notification
        if (!this._notificationIsPending) {
            this.evaluatePossiblyAsync();
        } else if (this[computedState].isDirty) {
            this[computedState].isStale = true;
        }
    },
    subscribeToDependency: function (target) {
        if (target._deferUpdates && !this[computedState].disposeWhenNodeIsRemoved) {
            var dirtySub = target.subscribe(this.markDirty, this, 'dirty'),
                changeSub = target.subscribe(this.respondToChange, this);
            return {
                _target: target,
                dispose: function () {
                    dirtySub.dispose();
                    changeSub.dispose();
                }
            };
        } else {
            return target.subscribe(this.evaluatePossiblyAsync, this);
        }
    },
    evaluatePossiblyAsync: function () {
        var computedObservable = this,
            throttleEvaluationTimeout = computedObservable['throttleEvaluation'];
        if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
            clearTimeout(this[computedState].evaluationTimeoutInstance);
            this[computedState].evaluationTimeoutInstance = ko.utils.setTimeout(function () {
                computedObservable.evaluateImmediate(true /*notifyChange*/);
            }, throttleEvaluationTimeout);
        } else if (computedObservable._evalDelayed) {
            computedObservable._evalDelayed(true /*isChange*/);
        } else {
            computedObservable.evaluateImmediate(true /*notifyChange*/);
        }
    },
    evaluateImmediate: function (notifyChange) {
        var computedObservable = this,
            state = computedObservable[computedState],
            disposeWhen = state.disposeWhen,
            changed = false;

        if (state.isBeingEvaluated) {
            // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
            // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
            // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
            // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
            return;
        }

        // Do not evaluate (and possibly capture new dependencies) if disposed
        if (state.isDisposed) {
            return;
        }

        if (state.disposeWhenNodeIsRemoved && !ko.utils.domNodeIsAttachedToDocument(state.disposeWhenNodeIsRemoved) || disposeWhen && disposeWhen()) {
            // See comment above about suppressDisposalUntilDisposeWhenReturnsFalse
            if (!state.suppressDisposalUntilDisposeWhenReturnsFalse) {
                computedObservable.dispose();
                return;
            }
        } else {
            // It just did return false, so we can stop suppressing now
            state.suppressDisposalUntilDisposeWhenReturnsFalse = false;
        }

        state.isBeingEvaluated = true;
        try {
            changed = this.evaluateImmediate_CallReadWithDependencyDetection(notifyChange);
        } finally {
            state.isBeingEvaluated = false;
        }

        if (!state.dependenciesCount) {
            computedObservable.dispose();
        }

        return changed;
    },
    evaluateImmediate_CallReadWithDependencyDetection: function (notifyChange) {
        // This function is really just part of the evaluateImmediate logic. You would never call it from anywhere else.
        // Factoring it out into a separate function means it can be independent of the try/catch block in evaluateImmediate,
        // which contributes to saving about 40% off the CPU overhead of computed evaluation (on V8 at least).

        var computedObservable = this,
            state = computedObservable[computedState],
            changed = false;

        // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
        // Then, during evaluation, we cross off any that are in fact still being used.
        var isInitial = state.pure ? undefined : !state.dependenciesCount,   // If we're evaluating when there are no previous dependencies, it must be the first time
            dependencyDetectionContext = {
                computedObservable: computedObservable,
                disposalCandidates: state.dependencyTracking,
                disposalCount: state.dependenciesCount
            };

        ko.dependencyDetection.begin({
            callbackTarget: dependencyDetectionContext,
            callback: computedBeginDependencyDetectionCallback,
            computed: computedObservable,
            isInitial: isInitial
        });

        state.dependencyTracking = {};
        state.dependenciesCount = 0;

        var newValue = this.evaluateImmediate_CallReadThenEndDependencyDetection(state, dependencyDetectionContext);

        if (computedObservable.isDifferent(state.latestValue, newValue)) {
            if (!state.isSleeping) {
                computedObservable["notifySubscribers"](state.latestValue, "beforeChange");
            }

            state.latestValue = newValue;
            if (DEBUG) computedObservable._latestValue = newValue;

            if (state.isSleeping) {
                computedObservable.updateVersion();
            } else if (notifyChange) {
                computedObservable["notifySubscribers"](state.latestValue);
            }

            changed = true;
        }

        if (isInitial) {
            computedObservable["notifySubscribers"](state.latestValue, "awake");
        }

        return changed;
    },
    evaluateImmediate_CallReadThenEndDependencyDetection: function (state, dependencyDetectionContext) {
        // This function is really part of the evaluateImmediate_CallReadWithDependencyDetection logic.
        // You'd never call it from anywhere else. Factoring it out means that evaluateImmediate_CallReadWithDependencyDetection
        // can be independent of try/finally blocks, which contributes to saving about 40% off the CPU
        // overhead of computed evaluation (on V8 at least).

        try {
            var readFunction = state.readFunction;
            return state.evaluatorFunctionTarget ? readFunction.call(state.evaluatorFunctionTarget) : readFunction();
        } finally {
            ko.dependencyDetection.end();

            // For each subscription no longer being used, remove it from the active subscriptions list and dispose it
            if (dependencyDetectionContext.disposalCount && !state.isSleeping) {
                ko.utils.objectForEach(dependencyDetectionContext.disposalCandidates, computedDisposeDependencyCallback);
            }

            state.isStale = state.isDirty = false;
        }
    },
    peek: function (evaluate) {
        // By default, peek won't re-evaluate, except while the computed is sleeping or to get the initial value when "deferEvaluation" is set.
        // Pass in true to evaluate if needed.
        var state = this[computedState];
        if ((state.isDirty && (evaluate || !state.dependenciesCount)) || (state.isSleeping && this.haveDependenciesChanged())) {
            this.evaluateImmediate();
        }
        return state.latestValue;
    },
    limit: function (limitFunction) {
        // Override the limit function with one that delays evaluation as well
        ko.subscribable['fn'].limit.call(this, limitFunction);
        this._evalIfChanged = function () {
            if (this[computedState].isStale) {
                this.evaluateImmediate();
            } else {
                this[computedState].isDirty = false;
            }
            return this[computedState].latestValue;
        };
        this._evalDelayed = function (isChange) {
            this._limitBeforeChange(this[computedState].latestValue);

            // Mark as dirty
            this[computedState].isDirty = true;
            if (isChange) {
                this[computedState].isStale = true;
            }

            // Pass the observable to the "limit" code, which will evaluate it when
            // it's time to do the notification.
            this._limitChange(this);
        };
    },
    dispose: function () {
        var state = this[computedState];
        if (!state.isSleeping && state.dependencyTracking) {
            ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                if (dependency.dispose)
                    dependency.dispose();
            });
        }
        if (state.disposeWhenNodeIsRemoved && state.domNodeDisposalCallback) {
            ko.utils.domNodeDisposal.removeDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback);
        }
        state.dependencyTracking = null;
        state.dependenciesCount = 0;
        state.isDisposed = true;
        state.isStale = false;
        state.isDirty = false;
        state.isSleeping = false;
        state.disposeWhenNodeIsRemoved = null;
    }
};

var pureComputedOverrides = {
    beforeSubscriptionAdd: function (event) {
        // If asleep, wake up the computed by subscribing to any dependencies.
        var computedObservable = this,
            state = computedObservable[computedState];
        if (!state.isDisposed && state.isSleeping && event == 'change') {
            state.isSleeping = false;
            if (state.isStale || computedObservable.haveDependenciesChanged()) {
                state.dependencyTracking = null;
                state.dependenciesCount = 0;
                if (computedObservable.evaluateImmediate()) {
                    computedObservable.updateVersion();
                }
            } else {
                // First put the dependencies in order
                var dependeciesOrder = [];
                ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                    dependeciesOrder[dependency._order] = id;
                });
                // Next, subscribe to each one
                ko.utils.arrayForEach(dependeciesOrder, function (id, order) {
                    var dependency = state.dependencyTracking[id],
                        subscription = computedObservable.subscribeToDependency(dependency._target);
                    subscription._order = order;
                    subscription._version = dependency._version;
                    state.dependencyTracking[id] = subscription;
                });
            }
            if (!state.isDisposed) {     // test since evaluating could trigger disposal
                computedObservable["notifySubscribers"](state.latestValue, "awake");
            }
        }
    },
    afterSubscriptionRemove: function (event) {
        var state = this[computedState];
        if (!state.isDisposed && event == 'change' && !this.hasSubscriptionsForEvent('change')) {
            ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                if (dependency.dispose) {
                    state.dependencyTracking[id] = {
                        _target: dependency._target,
                        _order: dependency._order,
                        _version: dependency._version
                    };
                    dependency.dispose();
                }
            });
            state.isSleeping = true;
            this["notifySubscribers"](undefined, "asleep");
        }
    },
    getVersion: function () {
        // Because a pure computed is not automatically updated while it is sleeping, we can't
        // simply return the version number. Instead, we check if any of the dependencies have
        // changed and conditionally re-evaluate the computed observable.
        var state = this[computedState];
        if (state.isSleeping && (state.isStale || this.haveDependenciesChanged())) {
            this.evaluateImmediate();
        }
        return ko.subscribable['fn'].getVersion.call(this);
    }
};

var deferEvaluationOverrides = {
    beforeSubscriptionAdd: function (event) {
        // This will force a computed with deferEvaluation to evaluate when the first subscription is registered.
        if (event == 'change' || event == 'beforeChange') {
            this.peek();
        }
    }
};

// Note that for browsers that don't support proto assignment, the
// inheritance chain is created manually in the ko.computed constructor
if (ko.utils.canSetPrototype) {
    ko.utils.setPrototypeOf(computedFn, ko.subscribable['fn']);
}

// Set the proto chain values for ko.hasPrototype
var protoProp = ko.observable.protoProperty; // == "__ko_proto__"
ko.computed[protoProp] = ko.observable;
computedFn[protoProp] = ko.computed;

ko.isComputed = function (instance) {
    return ko.hasPrototype(instance, ko.computed);
};

ko.isPureComputed = function (instance) {
    return ko.hasPrototype(instance, ko.computed)
        && instance[computedState] && instance[computedState].pure;
};

ko.exportSymbol('computed', ko.computed);
ko.exportSymbol('dependentObservable', ko.computed);    // export ko.dependentObservable for backwards compatibility (1.x)
ko.exportSymbol('isComputed', ko.isComputed);
ko.exportSymbol('isPureComputed', ko.isPureComputed);
ko.exportSymbol('computed.fn', computedFn);
ko.exportProperty(computedFn, 'peek', computedFn.peek);
ko.exportProperty(computedFn, 'dispose', computedFn.dispose);
ko.exportProperty(computedFn, 'isActive', computedFn.isActive);
ko.exportProperty(computedFn, 'getDependenciesCount', computedFn.getDependenciesCount);

ko.pureComputed = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget) {
    if (typeof evaluatorFunctionOrOptions === 'function') {
        return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget, {'pure':true});
    } else {
        evaluatorFunctionOrOptions = ko.utils.extend({}, evaluatorFunctionOrOptions);   // make a copy of the parameter object
        evaluatorFunctionOrOptions['pure'] = true;
        return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget);
    }
}
ko.exportSymbol('pureComputed', ko.pureComputed);

(function() {
    var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

    ko.toJS = function(rootObject) {
        if (arguments.length == 0)
            throw new Error("When calling ko.toJS, pass the object you want to convert.");

        // We just unwrap everything at every level in the object graph
        return mapJsObjectGraph(rootObject, function(valueToMap) {
            // Loop because an observable's value might in turn be another observable wrapper
            for (var i = 0; ko.isObservable(valueToMap) && (i < maxNestedObservableDepth); i++)
                valueToMap = valueToMap();
            return valueToMap;
        });
    };

    ko.toJSON = function(rootObject, replacer, space) {     // replacer and space are optional
        var plainJavaScriptObject = ko.toJS(rootObject);
        return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
    };

    function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
        visitedObjects = visitedObjects || new objectLookup();

        rootObject = mapInputCallback(rootObject);
        var canHaveProperties = (typeof rootObject == "object") && (rootObject !== null) && (rootObject !== undefined) && (!(rootObject instanceof RegExp)) && (!(rootObject instanceof Date)) && (!(rootObject instanceof String)) && (!(rootObject instanceof Number)) && (!(rootObject instanceof Boolean));
        if (!canHaveProperties)
            return rootObject;

        var outputProperties = rootObject instanceof Array ? [] : {};
        visitedObjects.save(rootObject, outputProperties);

        visitPropertiesOrArrayEntries(rootObject, function(indexer) {
            var propertyValue = mapInputCallback(rootObject[indexer]);

            switch (typeof propertyValue) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    outputProperties[indexer] = propertyValue;
                    break;
                case "object":
                case "undefined":
                    var previouslyMappedValue = visitedObjects.get(propertyValue);
                    outputProperties[indexer] = (previouslyMappedValue !== undefined)
                        ? previouslyMappedValue
                        : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                    break;
            }
        });

        return outputProperties;
    }

    function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
        if (rootObject instanceof Array) {
            for (var i = 0; i < rootObject.length; i++)
                visitorCallback(i);

            // For arrays, also respect toJSON property for custom mappings (fixes #278)
            if (typeof rootObject['toJSON'] == 'function')
                visitorCallback('toJSON');
        } else {
            for (var propertyName in rootObject) {
                visitorCallback(propertyName);
            }
        }
    };

    function objectLookup() {
        this.keys = [];
        this.values = [];
    };

    objectLookup.prototype = {
        constructor: objectLookup,
        save: function(key, value) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            if (existingIndex >= 0)
                this.values[existingIndex] = value;
            else {
                this.keys.push(key);
                this.values.push(value);
            }
        },
        get: function(key) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            return (existingIndex >= 0) ? this.values[existingIndex] : undefined;
        }
    };
})();

ko.exportSymbol('toJS', ko.toJS);
ko.exportSymbol('toJSON', ko.toJSON);
(function () {
    var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';

    // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
    // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
    // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
    ko.selectExtensions = {
        readValue : function(element) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    if (element[hasDomDataExpandoProperty] === true)
                        return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                    return ko.utils.ieVersion <= 7
                        ? (element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text)
                        : element.value;
                case 'select':
                    return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                default:
                    return element.value;
            }
        },

        writeValue: function(element, value, allowUnset) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    switch(typeof value) {
                        case "string":
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                            if (hasDomDataExpandoProperty in element) { // IE <= 8 throws errors if you delete non-existent properties from a DOM node
                                delete element[hasDomDataExpandoProperty];
                            }
                            element.value = value;
                            break;
                        default:
                            // Store arbitrary object using DomData
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                            element[hasDomDataExpandoProperty] = true;

                            // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
                            element.value = typeof value === "number" ? value : "";
                            break;
                    }
                    break;
                case 'select':
                    if (value === "" || value === null)       // A blank string or null value will select the caption
                        value = undefined;
                    var selection = -1;
                    for (var i = 0, n = element.options.length, optionValue; i < n; ++i) {
                        optionValue = ko.selectExtensions.readValue(element.options[i]);
                        // Include special check to handle selecting a caption with a blank string value
                        if (optionValue == value || (optionValue == "" && value === undefined)) {
                            selection = i;
                            break;
                        }
                    }
                    if (allowUnset || selection >= 0 || (value === undefined && element.size > 1)) {
                        element.selectedIndex = selection;
                    }
                    break;
                default:
                    if ((value === null) || (value === undefined))
                        value = "";
                    element.value = value;
                    break;
            }
        }
    };
})();

ko.exportSymbol('selectExtensions', ko.selectExtensions);
ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
ko.expressionRewriting = (function () {
    var javaScriptReservedWords = ["true", "false", "null", "undefined"];

    // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
    // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
    // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
    var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

    function getWriteableValue(expression) {
        if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0)
            return false;
        var match = expression.match(javaScriptAssignmentTarget);
        return match === null ? false : match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
    }

    // The following regular expressions will be used to split an object-literal string into tokens

        // These two match strings, either with double quotes or single quotes
    var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
        stringSingle = "'(?:[^'\\\\]|\\\\.)*'",
        // Matches a regular expression (text enclosed by slashes), but will also match sets of divisions
        // as a regular expression (this is handled by the parsing loop below).
        stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',
        // These characters have special meaning to the parser and must not appear in the middle of a
        // token, except as part of a string.
        specials = ',"\'{}()/:[\\]',
        // Match text (at least two characters) that does not contain any of the above special characters,
        // although some of the special characters are allowed to start it (all but the colon and comma).
        // The text can contain spaces, but leading or trailing spaces are skipped.
        everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',
        // Match any non-space character not matched already. This will match colons and commas, since they're
        // not matched by "everyThingElse", but will also match any other single character that wasn't already
        // matched (for example: in "a: 1, b: 2", each of the non-space characters will be matched by oneNotSpace).
        oneNotSpace = '[^\\s]',

        // Create the actual regular expression by or-ing the above strings. The order is important.
        bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),

        // Match end of previous token to determine whether a slash is a division or regex.
        divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
        keywordRegexLookBehind = {'in':1,'return':1,'typeof':1};

    function parseObjectLiteral(objectLiteralString) {
        // Trim leading and trailing spaces from the string
        var str = ko.utils.stringTrim(objectLiteralString);

        // Trim braces '{' surrounding the whole object literal
        if (str.charCodeAt(0) === 123) str = str.slice(1, -1);

        // Split into tokens
        var result = [], toks = str.match(bindingToken), key, values = [], depth = 0;

        if (toks) {
            // Append a comma so that we don't need a separate code block to deal with the last item
            toks.push(',');

            for (var i = 0, tok; tok = toks[i]; ++i) {
                var c = tok.charCodeAt(0);
                // A comma signals the end of a key/value pair if depth is zero
                if (c === 44) { // ","
                    if (depth <= 0) {
                        result.push((key && values.length) ? {key: key, value: values.join('')} : {'unknown': key || values.join('')});
                        key = depth = 0;
                        values = [];
                        continue;
                    }
                // Simply skip the colon that separates the name and value
                } else if (c === 58) { // ":"
                    if (!depth && !key && values.length === 1) {
                        key = values.pop();
                        continue;
                    }
                // A set of slashes is initially matched as a regular expression, but could be division
                } else if (c === 47 && i && tok.length > 1) {  // "/"
                    // Look at the end of the previous token to determine if the slash is actually division
                    var match = toks[i-1].match(divisionLookBehind);
                    if (match && !keywordRegexLookBehind[match[0]]) {
                        // The slash is actually a division punctuator; re-parse the remainder of the string (not including the slash)
                        str = str.substr(str.indexOf(tok) + 1);
                        toks = str.match(bindingToken);
                        toks.push(',');
                        i = -1;
                        // Continue with just the slash
                        tok = '/';
                    }
                // Increment depth for parentheses, braces, and brackets so that interior commas are ignored
                } else if (c === 40 || c === 123 || c === 91) { // '(', '{', '['
                    ++depth;
                } else if (c === 41 || c === 125 || c === 93) { // ')', '}', ']'
                    --depth;
                // The key will be the first token; if it's a string, trim the quotes
                } else if (!key && !values.length && (c === 34 || c === 39)) { // '"', "'"
                    tok = tok.slice(1, -1);
                }
                values.push(tok);
            }
        }
        return result;
    }

    // Two-way bindings include a write function that allow the handler to update the value even if it's not an observable.
    var twoWayBindings = {};

    function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
        bindingOptions = bindingOptions || {};

        function processKeyValue(key, val) {
            var writableVal;
            function callPreprocessHook(obj) {
                return (obj && obj['preprocess']) ? (val = obj['preprocess'](val, key, processKeyValue)) : true;
            }
            if (!bindingParams) {
                if (!callPreprocessHook(ko['getBindingHandler'](key)))
                    return;

                if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
                    // For two-way bindings, provide a write method in case the value
                    // isn't a writable observable.
                    propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
                }
            }
            // Values are wrapped in a function so that each value can be accessed independently
            if (makeValueAccessors) {
                val = 'function(){return ' + val + ' }';
            }
            resultStrings.push("'" + key + "':" + val);
        }

        var resultStrings = [],
            propertyAccessorResultStrings = [],
            makeValueAccessors = bindingOptions['valueAccessors'],
            bindingParams = bindingOptions['bindingParams'],
            keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ?
                parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;

        ko.utils.arrayForEach(keyValueArray, function(keyValue) {
            processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
        });

        if (propertyAccessorResultStrings.length)
            processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + " }");

        return resultStrings.join(",");
    }

    return {
        bindingRewriteValidators: [],

        twoWayBindings: twoWayBindings,

        parseObjectLiteral: parseObjectLiteral,

        preProcessBindings: preProcessBindings,

        keyValueArrayContainsKey: function(keyValueArray, key) {
            for (var i = 0; i < keyValueArray.length; i++)
                if (keyValueArray[i]['key'] == key)
                    return true;
            return false;
        },

        // Internal, private KO utility for updating model properties from within bindings
        // property:            If the property being updated is (or might be) an observable, pass it here
        //                      If it turns out to be a writable observable, it will be written to directly
        // allBindings:         An object with a get method to retrieve bindings in the current execution context.
        //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
        // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
        // value:               The value to be written
        // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
        //                      it is !== existing value on that writable observable
        writeValueToProperty: function(property, allBindings, key, value, checkIfDifferent) {
            if (!property || !ko.isObservable(property)) {
                var propWriters = allBindings.get('_ko_property_writers');
                if (propWriters && propWriters[key])
                    propWriters[key](value);
            } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
                property(value);
            }
        }
    };
})();

ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);

// Making bindings explicitly declare themselves as "two way" isn't ideal in the long term (it would be better if
// all bindings could use an official 'property writer' API without needing to declare that they might). However,
// since this is not, and has never been, a public API (_ko_property_writers was never documented), it's acceptable
// as an internal implementation detail in the short term.
// For those developers who rely on _ko_property_writers in their custom bindings, we expose _twoWayBindings as an
// undocumented feature that makes it relatively easy to upgrade to KO 3.0. However, this is still not an official
// public API, and we reserve the right to remove it at any time if we create a real public property writers API.
ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings);

// For backward compatibility, define the following aliases. (Previously, these function names were misleading because
// they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);
(function() {
    // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
    // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
    // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
    // of that virtual hierarchy
    //
    // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
    // without having to scatter special cases all over the binding and templating code.

    // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
    // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
    // So, use node.text where available, and node.nodeValue elsewhere
    var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";

    var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
    var endCommentRegex =   commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
    var htmlTagsWithOptionallyClosingChildren = { 'ul': true, 'ol': true };

    function isStartComment(node) {
        return (node.nodeType == 8) && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
    }

    function isEndComment(node) {
        return (node.nodeType == 8) && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
    }

    function getVirtualChildren(startComment, allowUnbalanced) {
        var currentNode = startComment;
        var depth = 1;
        var children = [];
        while (currentNode = currentNode.nextSibling) {
            if (isEndComment(currentNode)) {
                depth--;
                if (depth === 0)
                    return children;
            }

            children.push(currentNode);

            if (isStartComment(currentNode))
                depth++;
        }
        if (!allowUnbalanced)
            throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
        return null;
    }

    function getMatchingEndComment(startComment, allowUnbalanced) {
        var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
        if (allVirtualChildren) {
            if (allVirtualChildren.length > 0)
                return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
            return startComment.nextSibling;
        } else
            return null; // Must have no matching end comment, and allowUnbalanced is true
    }

    function getUnbalancedChildTags(node) {
        // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
        //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
        var childNode = node.firstChild, captureRemaining = null;
        if (childNode) {
            do {
                if (captureRemaining)                   // We already hit an unbalanced node and are now just scooping up all subsequent nodes
                    captureRemaining.push(childNode);
                else if (isStartComment(childNode)) {
                    var matchingEndComment = getMatchingEndComment(childNode, /* allowUnbalanced: */ true);
                    if (matchingEndComment)             // It's a balanced tag, so skip immediately to the end of this virtual set
                        childNode = matchingEndComment;
                    else
                        captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
                } else if (isEndComment(childNode)) {
                    captureRemaining = [childNode];     // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
                }
            } while (childNode = childNode.nextSibling);
        }
        return captureRemaining;
    }

    ko.virtualElements = {
        allowedBindings: {},

        childNodes: function(node) {
            return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
        },

        emptyNode: function(node) {
            if (!isStartComment(node))
                ko.utils.emptyDomNode(node);
            else {
                var virtualChildren = ko.virtualElements.childNodes(node);
                for (var i = 0, j = virtualChildren.length; i < j; i++)
                    ko.removeNode(virtualChildren[i]);
            }
        },

        setDomNodeChildren: function(node, childNodes) {
            if (!isStartComment(node))
                ko.utils.setDomNodeChildren(node, childNodes);
            else {
                ko.virtualElements.emptyNode(node);
                var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children
                for (var i = 0, j = childNodes.length; i < j; i++)
                    endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
            }
        },

        prepend: function(containerNode, nodeToPrepend) {
            if (!isStartComment(containerNode)) {
                if (containerNode.firstChild)
                    containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);
                else
                    containerNode.appendChild(nodeToPrepend);
            } else {
                // Start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
            }
        },

        insertAfter: function(containerNode, nodeToInsert, insertAfterNode) {
            if (!insertAfterNode) {
                ko.virtualElements.prepend(containerNode, nodeToInsert);
            } else if (!isStartComment(containerNode)) {
                // Insert after insertion point
                if (insertAfterNode.nextSibling)
                    containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                else
                    containerNode.appendChild(nodeToInsert);
            } else {
                // Children of start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
            }
        },

        firstChild: function(node) {
            if (!isStartComment(node))
                return node.firstChild;
            if (!node.nextSibling || isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        nextSibling: function(node) {
            if (isStartComment(node))
                node = getMatchingEndComment(node);
            if (node.nextSibling && isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        hasBindingValue: isStartComment,

        virtualNodeBindingValue: function(node) {
            var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
            return regexMatch ? regexMatch[1] : null;
        },

        normaliseVirtualElementDomStructure: function(elementVerified) {
            // Workaround for https://github.com/SteveSanderson/knockout/issues/155
            // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
            // that are direct descendants of <ul> into the preceding <li>)
            if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])
                return;

            // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
            // must be intended to appear *after* that child, so move them there.
            var childNode = elementVerified.firstChild;
            if (childNode) {
                do {
                    if (childNode.nodeType === 1) {
                        var unbalancedTags = getUnbalancedChildTags(childNode);
                        if (unbalancedTags) {
                            // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
                            var nodeToInsertBefore = childNode.nextSibling;
                            for (var i = 0; i < unbalancedTags.length; i++) {
                                if (nodeToInsertBefore)
                                    elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);
                                else
                                    elementVerified.appendChild(unbalancedTags[i]);
                            }
                        }
                    }
                } while (childNode = childNode.nextSibling);
            }
        }
    };
})();
ko.exportSymbol('virtualElements', ko.virtualElements);
ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
//ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
//ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
(function() {
    var defaultBindingAttributeName = "data-bind";

    ko.bindingProvider = function() {
        this.bindingCache = {};
    };

    ko.utils.extend(ko.bindingProvider.prototype, {
        'nodeHasBindings': function(node) {
            switch (node.nodeType) {
                case 1: // Element
                    return node.getAttribute(defaultBindingAttributeName) != null
                        || ko.components['getComponentNameForNode'](node);
                case 8: // Comment node
                    return ko.virtualElements.hasBindingValue(node);
                default: return false;
            }
        },

        'getBindings': function(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext),
                parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
            return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */ false);
        },

        'getBindingAccessors': function(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext),
                parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, { 'valueAccessors': true }) : null;
            return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */ true);
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'getBindingsString': function(node, bindingContext) {
            switch (node.nodeType) {
                case 1: return node.getAttribute(defaultBindingAttributeName);   // Element
                case 8: return ko.virtualElements.virtualNodeBindingValue(node); // Comment node
                default: return null;
            }
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'parseBindingsString': function(bindingsString, bindingContext, node, options) {
            try {
                var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
                return bindingFunction(bindingContext, node);
            } catch (ex) {
                ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
                throw ex;
            }
        }
    });

    ko.bindingProvider['instance'] = new ko.bindingProvider();

    function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
        var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
        return cache[cacheKey]
            || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
    }

    function createBindingsStringEvaluator(bindingsString, options) {
        // Build the source for a function that evaluates "expression"
        // For each scope variable, add an extra level of "with" nesting
        // Example result: with(sc1) { with(sc0) { return (expression) } }
        var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
            functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
        return new Function("$context", "$element", functionBody);
    }
})();

ko.exportSymbol('bindingProvider', ko.bindingProvider);
(function () {
    ko.bindingHandlers = {};

    // The following element types will not be recursed into during binding.
    var bindingDoesNotRecurseIntoElementTypes = {
        // Don't want bindings that operate on text nodes to mutate <script> and <textarea> contents,
        // because it's unexpected and a potential XSS issue.
        // Also bindings should not operate on <template> elements since this breaks in Internet Explorer
        // and because such elements' contents are always intended to be bound in a different context
        // from where they appear in the document.
        'script': true,
        'textarea': true,
        'template': true
    };

    // Use an overridable method for retrieving binding handlers so that a plugins may support dynamically created handlers
    ko['getBindingHandler'] = function(bindingKey) {
        return ko.bindingHandlers[bindingKey];
    };

    // The ko.bindingContext constructor is only called directly to create the root context. For child
    // contexts, use bindingContext.createChildContext or bindingContext.extend.
    ko.bindingContext = function(dataItemOrAccessor, parentContext, dataItemAlias, extendCallback, options) {

        // The binding context object includes static properties for the current, parent, and root view models.
        // If a view model is actually stored in an observable, the corresponding binding context object, and
        // any child contexts, must be updated when the view model is changed.
        function updateContext() {
            // Most of the time, the context will directly get a view model object, but if a function is given,
            // we call the function to retrieve the view model. If the function accesses any observables or returns
            // an observable, the dependency is tracked, and those observables can later cause the binding
            // context to be updated.
            var dataItemOrObservable = isFunc ? dataItemOrAccessor() : dataItemOrAccessor,
                dataItem = ko.utils.unwrapObservable(dataItemOrObservable);

            if (parentContext) {
                // When a "parent" context is given, register a dependency on the parent context. Thus whenever the
                // parent context is updated, this context will also be updated.
                if (parentContext._subscribable)
                    parentContext._subscribable();

                // Copy $root and any custom properties from the parent context
                ko.utils.extend(self, parentContext);

                // Because the above copy overwrites our own properties, we need to reset them.
                self._subscribable = subscribable;
            } else {
                self['$parents'] = [];
                self['$root'] = dataItem;

                // Export 'ko' in the binding context so it will be available in bindings and templates
                // even if 'ko' isn't exported as a global, such as when using an AMD loader.
                // See https://github.com/SteveSanderson/knockout/issues/490
                self['ko'] = ko;
            }
            self['$rawData'] = dataItemOrObservable;
            self['$data'] = dataItem;
            if (dataItemAlias)
                self[dataItemAlias] = dataItem;

            // The extendCallback function is provided when creating a child context or extending a context.
            // It handles the specific actions needed to finish setting up the binding context. Actions in this
            // function could also add dependencies to this binding context.
            if (extendCallback)
                extendCallback(self, parentContext, dataItem);

            return self['$data'];
        }
        function disposeWhen() {
            return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
        }

        var self = this,
            isFunc = typeof(dataItemOrAccessor) == "function" && !ko.isObservable(dataItemOrAccessor),
            nodes,
            subscribable;

        if (options && options['exportDependencies']) {
            // The "exportDependencies" option means that the calling code will track any dependencies and re-create
            // the binding context when they change.
            updateContext();
        } else {
            subscribable = ko.dependentObservable(updateContext, null, { disposeWhen: disposeWhen, disposeWhenNodeIsRemoved: true });

            // At this point, the binding context has been initialized, and the "subscribable" computed observable is
            // subscribed to any observables that were accessed in the process. If there is nothing to track, the
            // computed will be inactive, and we can safely throw it away. If it's active, the computed is stored in
            // the context object.
            if (subscribable.isActive()) {
                self._subscribable = subscribable;

                // Always notify because even if the model ($data) hasn't changed, other context properties might have changed
                subscribable['equalityComparer'] = null;

                // We need to be able to dispose of this computed observable when it's no longer needed. This would be
                // easy if we had a single node to watch, but binding contexts can be used by many different nodes, and
                // we cannot assume that those nodes have any relation to each other. So instead we track any node that
                // the context is attached to, and dispose the computed when all of those nodes have been cleaned.

                // Add properties to *subscribable* instead of *self* because any properties added to *self* may be overwritten on updates
                nodes = [];
                subscribable._addNode = function(node) {
                    nodes.push(node);
                    ko.utils.domNodeDisposal.addDisposeCallback(node, function(node) {
                        ko.utils.arrayRemoveItem(nodes, node);
                        if (!nodes.length) {
                            subscribable.dispose();
                            self._subscribable = subscribable = undefined;
                        }
                    });
                };
            }
        }
    }

    // Extend the binding context hierarchy with a new view model object. If the parent context is watching
    // any observables, the new child context will automatically get a dependency on the parent context.
    // But this does not mean that the $data value of the child context will also get updated. If the child
    // view model also depends on the parent view model, you must provide a function that returns the correct
    // view model on each update.
    ko.bindingContext.prototype['createChildContext'] = function (dataItemOrAccessor, dataItemAlias, extendCallback, options) {
        return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function(self, parentContext) {
            // Extend the context hierarchy by setting the appropriate pointers
            self['$parentContext'] = parentContext;
            self['$parent'] = parentContext['$data'];
            self['$parents'] = (parentContext['$parents'] || []).slice(0);
            self['$parents'].unshift(self['$parent']);
            if (extendCallback)
                extendCallback(self);
        }, options);
    };

    // Extend the binding context with new custom properties. This doesn't change the context hierarchy.
    // Similarly to "child" contexts, provide a function here to make sure that the correct values are set
    // when an observable view model is updated.
    ko.bindingContext.prototype['extend'] = function(properties) {
        // If the parent context references an observable view model, "_subscribable" will always be the
        // latest view model object. If not, "_subscribable" isn't set, and we can use the static "$data" value.
        return new ko.bindingContext(this._subscribable || this['$data'], this, null, function(self, parentContext) {
            // This "child" context doesn't directly track a parent observable view model,
            // so we need to manually set the $rawData value to match the parent.
            self['$rawData'] = parentContext['$rawData'];
            ko.utils.extend(self, typeof(properties) == "function" ? properties() : properties);
        });
    };

    ko.bindingContext.prototype.createStaticChildContext = function (dataItemOrAccessor, dataItemAlias) {
        return this['createChildContext'](dataItemOrAccessor, dataItemAlias, null, { "exportDependencies": true });
    };

    // Returns the valueAccesor function for a binding value
    function makeValueAccessor(value) {
        return function() {
            return value;
        };
    }

    // Returns the value of a valueAccessor function
    function evaluateValueAccessor(valueAccessor) {
        return valueAccessor();
    }

    // Given a function that returns bindings, create and return a new object that contains
    // binding value-accessors functions. Each accessor function calls the original function
    // so that it always gets the latest value and all dependencies are captured. This is used
    // by ko.applyBindingsToNode and getBindingsAndMakeAccessors.
    function makeAccessorsFromFunction(callback) {
        return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function(value, key) {
            return function() {
                return callback()[key];
            };
        });
    }

    // Given a bindings function or object, create and return a new object that contains
    // binding value-accessors functions. This is used by ko.applyBindingsToNode.
    function makeBindingAccessors(bindings, context, node) {
        if (typeof bindings === 'function') {
            return makeAccessorsFromFunction(bindings.bind(null, context, node));
        } else {
            return ko.utils.objectMap(bindings, makeValueAccessor);
        }
    }

    // This function is used if the binding provider doesn't include a getBindingAccessors function.
    // It must be called with 'this' set to the provider instance.
    function getBindingsAndMakeAccessors(node, context) {
        return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
    }

    function validateThatBindingIsAllowedForVirtualElements(bindingName) {
        var validator = ko.virtualElements.allowedBindings[bindingName];
        if (!validator)
            throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements")
    }

    function applyBindingsToDescendantsInternal (bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
        var currentChild,
            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
            provider = ko.bindingProvider['instance'],
            preprocessNode = provider['preprocessNode'];

        // Preprocessing allows a binding provider to mutate a node before bindings are applied to it. For example it's
        // possible to insert new siblings after it, and/or replace the node with a different one. This can be used to
        // implement custom binding syntaxes, such as {{ value }} for string interpolation, or custom element types that
        // trigger insertion of <template> contents at that point in the document.
        if (preprocessNode) {
            while (currentChild = nextInQueue) {
                nextInQueue = ko.virtualElements.nextSibling(currentChild);
                preprocessNode.call(provider, currentChild);
            }
            // Reset nextInQueue for the next loop
            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
        }

        while (currentChild = nextInQueue) {
            // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
            nextInQueue = ko.virtualElements.nextSibling(currentChild);
            applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
        }
    }

    function applyBindingsToNodeAndDescendantsInternal (bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
        var shouldBindDescendants = true;

        // Perf optimisation: Apply bindings only if...
        // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
        //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
        // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
        var isElement = (nodeVerified.nodeType === 1);
        if (isElement) // Workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);

        var shouldApplyBindings = (isElement && bindingContextMayDifferFromDomParentElement)             // Case (1)
                               || ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);       // Case (2)
        if (shouldApplyBindings)
            shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];

        if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
            // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
            //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
            //    hence bindingContextsMayDifferFromDomParentElement is false
            //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
            //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
            //    hence bindingContextsMayDifferFromDomParentElement is true
            applyBindingsToDescendantsInternal(bindingContext, nodeVerified, /* bindingContextsMayDifferFromDomParentElement: */ !isElement);
        }
    }

    var boundElementDomDataKey = ko.utils.domData.nextKey();


    function topologicalSortBindings(bindings) {
        // Depth-first sort
        var result = [],                // The list of key/handler pairs that we will return
            bindingsConsidered = {},    // A temporary record of which bindings are already in 'result'
            cyclicDependencyStack = []; // Keeps track of a depth-search so that, if there's a cycle, we know which bindings caused it
        ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
            if (!bindingsConsidered[bindingKey]) {
                var binding = ko['getBindingHandler'](bindingKey);
                if (binding) {
                    // First add dependencies (if any) of the current binding
                    if (binding['after']) {
                        cyclicDependencyStack.push(bindingKey);
                        ko.utils.arrayForEach(binding['after'], function(bindingDependencyKey) {
                            if (bindings[bindingDependencyKey]) {
                                if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
                                    throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
                                } else {
                                    pushBinding(bindingDependencyKey);
                                }
                            }
                        });
                        cyclicDependencyStack.length--;
                    }
                    // Next add the current binding
                    result.push({ key: bindingKey, handler: binding });
                }
                bindingsConsidered[bindingKey] = true;
            }
        });

        return result;
    }

    function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
        // Prevent multiple applyBindings calls for the same node, except when a binding value is specified
        var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
        if (!sourceBindings) {
            if (alreadyBound) {
                throw Error("You cannot apply bindings multiple times to the same element.");
            }
            ko.utils.domData.set(node, boundElementDomDataKey, true);
        }

        // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
        // we can easily recover it just by scanning up the node's ancestors in the DOM
        // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
        if (!alreadyBound && bindingContextMayDifferFromDomParentElement)
            ko.storedBindingContextForNode(node, bindingContext);

        // Use bindings if given, otherwise fall back on asking the bindings provider to give us some bindings
        var bindings;
        if (sourceBindings && typeof sourceBindings !== 'function') {
            bindings = sourceBindings;
        } else {
            var provider = ko.bindingProvider['instance'],
                getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;

            // Get the binding from the provider within a computed observable so that we can update the bindings whenever
            // the binding context is updated or if the binding provider accesses observables.
            var bindingsUpdater = ko.dependentObservable(
                function() {
                    bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext);
                    // Register a dependency on the binding context to support observable view models.
                    if (bindings && bindingContext._subscribable)
                        bindingContext._subscribable();
                    return bindings;
                },
                null, { disposeWhenNodeIsRemoved: node }
            );

            if (!bindings || !bindingsUpdater.isActive())
                bindingsUpdater = null;
        }

        var bindingHandlerThatControlsDescendantBindings;
        if (bindings) {
            // Return the value accessor for a given binding. When bindings are static (won't be updated because of a binding
            // context update), just return the value accessor from the binding. Otherwise, return a function that always gets
            // the latest binding value and registers a dependency on the binding updater.
            var getValueAccessor = bindingsUpdater
                ? function(bindingKey) {
                    return function() {
                        return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
                    };
                } : function(bindingKey) {
                    return bindings[bindingKey];
                };

            // Use of allBindings as a function is maintained for backwards compatibility, but its use is deprecated
            function allBindings() {
                return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
            }
            // The following is the 3.x allBindings API
            allBindings['get'] = function(key) {
                return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
            };
            allBindings['has'] = function(key) {
                return key in bindings;
            };

            // First put the bindings into the right order
            var orderedBindings = topologicalSortBindings(bindings);

            // Go through the sorted bindings, calling init and update for each
            ko.utils.arrayForEach(orderedBindings, function(bindingKeyAndHandler) {
                // Note that topologicalSortBindings has already filtered out any nonexistent binding handlers,
                // so bindingKeyAndHandler.handler will always be nonnull.
                var handlerInitFn = bindingKeyAndHandler.handler["init"],
                    handlerUpdateFn = bindingKeyAndHandler.handler["update"],
                    bindingKey = bindingKeyAndHandler.key;

                if (node.nodeType === 8) {
                    validateThatBindingIsAllowedForVirtualElements(bindingKey);
                }

                try {
                    // Run init, ignoring any dependencies
                    if (typeof handlerInitFn == "function") {
                        ko.dependencyDetection.ignore(function() {
                            var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);

                            // If this binding handler claims to control descendant bindings, make a note of this
                            if (initResult && initResult['controlsDescendantBindings']) {
                                if (bindingHandlerThatControlsDescendantBindings !== undefined)
                                    throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                bindingHandlerThatControlsDescendantBindings = bindingKey;
                            }
                        });
                    }

                    // Run update in its own computed wrapper
                    if (typeof handlerUpdateFn == "function") {
                        ko.dependentObservable(
                            function() {
                                handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                            },
                            null,
                            { disposeWhenNodeIsRemoved: node }
                        );
                    }
                } catch (ex) {
                    ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
                    throw ex;
                }
            });
        }

        return {
            'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined
        };
    };

    var storedBindingContextDomDataKey = ko.utils.domData.nextKey();
    ko.storedBindingContextForNode = function (node, bindingContext) {
        if (arguments.length == 2) {
            ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
            if (bindingContext._subscribable)
                bindingContext._subscribable._addNode(node);
        } else {
            return ko.utils.domData.get(node, storedBindingContextDomDataKey);
        }
    }

    function getBindingContext(viewModelOrBindingContext) {
        return viewModelOrBindingContext && (viewModelOrBindingContext instanceof ko.bindingContext)
            ? viewModelOrBindingContext
            : new ko.bindingContext(viewModelOrBindingContext);
    }

    ko.applyBindingAccessorsToNode = function (node, bindings, viewModelOrBindingContext) {
        if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(node);
        return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
    };

    ko.applyBindingsToNode = function (node, bindings, viewModelOrBindingContext) {
        var context = getBindingContext(viewModelOrBindingContext);
        return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
    };

    ko.applyBindingsToDescendants = function(viewModelOrBindingContext, rootNode) {
        if (rootNode.nodeType === 1 || rootNode.nodeType === 8)
            applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
    };

    ko.applyBindings = function (viewModelOrBindingContext, rootNode) {
        // If jQuery is loaded after Knockout, we won't initially have access to it. So save it here.
        if (!jQueryInstance && window['jQuery']) {
            jQueryInstance = window['jQuery'];
        }

        if (rootNode && (rootNode.nodeType !== 1) && (rootNode.nodeType !== 8))
            throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
        rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

        applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
    };

    // Retrieving binding context from arbitrary nodes
    ko.contextFor = function(node) {
        // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
        switch (node.nodeType) {
            case 1:
            case 8:
                var context = ko.storedBindingContextForNode(node);
                if (context) return context;
                if (node.parentNode) return ko.contextFor(node.parentNode);
                break;
        }
        return undefined;
    };
    ko.dataFor = function(node) {
        var context = ko.contextFor(node);
        return context ? context['$data'] : undefined;
    };

    ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
    ko.exportSymbol('applyBindings', ko.applyBindings);
    ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
    ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
    ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
    ko.exportSymbol('contextFor', ko.contextFor);
    ko.exportSymbol('dataFor', ko.dataFor);
})();
(function(undefined) {
    var loadingSubscribablesCache = {}, // Tracks component loads that are currently in flight
        loadedDefinitionsCache = {};    // Tracks component loads that have already completed

    ko.components = {
        get: function(componentName, callback) {
            var cachedDefinition = getObjectOwnProperty(loadedDefinitionsCache, componentName);
            if (cachedDefinition) {
                // It's already loaded and cached. Reuse the same definition object.
                // Note that for API consistency, even cache hits complete asynchronously by default.
                // You can bypass this by putting synchronous:true on your component config.
                if (cachedDefinition.isSynchronousComponent) {
                    ko.dependencyDetection.ignore(function() { // See comment in loaderRegistryBehaviors.js for reasoning
                        callback(cachedDefinition.definition);
                    });
                } else {
                    ko.tasks.schedule(function() { callback(cachedDefinition.definition); });
                }
            } else {
                // Join the loading process that is already underway, or start a new one.
                loadComponentAndNotify(componentName, callback);
            }
        },

        clearCachedDefinition: function(componentName) {
            delete loadedDefinitionsCache[componentName];
        },

        _getFirstResultFromLoaders: getFirstResultFromLoaders
    };

    function getObjectOwnProperty(obj, propName) {
        return obj.hasOwnProperty(propName) ? obj[propName] : undefined;
    }

    function loadComponentAndNotify(componentName, callback) {
        var subscribable = getObjectOwnProperty(loadingSubscribablesCache, componentName),
            completedAsync;
        if (!subscribable) {
            // It's not started loading yet. Start loading, and when it's done, move it to loadedDefinitionsCache.
            subscribable = loadingSubscribablesCache[componentName] = new ko.subscribable();
            subscribable.subscribe(callback);

            beginLoadingComponent(componentName, function(definition, config) {
                var isSynchronousComponent = !!(config && config['synchronous']);
                loadedDefinitionsCache[componentName] = { definition: definition, isSynchronousComponent: isSynchronousComponent };
                delete loadingSubscribablesCache[componentName];

                // For API consistency, all loads complete asynchronously. However we want to avoid
                // adding an extra task schedule if it's unnecessary (i.e., the completion is already
                // async).
                //
                // You can bypass the 'always asynchronous' feature by putting the synchronous:true
                // flag on your component configuration when you register it.
                if (completedAsync || isSynchronousComponent) {
                    // Note that notifySubscribers ignores any dependencies read within the callback.
                    // See comment in loaderRegistryBehaviors.js for reasoning
                    subscribable['notifySubscribers'](definition);
                } else {
                    ko.tasks.schedule(function() {
                        subscribable['notifySubscribers'](definition);
                    });
                }
            });
            completedAsync = true;
        } else {
            subscribable.subscribe(callback);
        }
    }

    function beginLoadingComponent(componentName, callback) {
        getFirstResultFromLoaders('getConfig', [componentName], function(config) {
            if (config) {
                // We have a config, so now load its definition
                getFirstResultFromLoaders('loadComponent', [componentName, config], function(definition) {
                    callback(definition, config);
                });
            } else {
                // The component has no config - it's unknown to all the loaders.
                // Note that this is not an error (e.g., a module loading error) - that would abort the
                // process and this callback would not run. For this callback to run, all loaders must
                // have confirmed they don't know about this component.
                callback(null, null);
            }
        });
    }

    function getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders) {
        // On the first call in the stack, start with the full set of loaders
        if (!candidateLoaders) {
            candidateLoaders = ko.components['loaders'].slice(0); // Use a copy, because we'll be mutating this array
        }

        // Try the next candidate
        var currentCandidateLoader = candidateLoaders.shift();
        if (currentCandidateLoader) {
            var methodInstance = currentCandidateLoader[methodName];
            if (methodInstance) {
                var wasAborted = false,
                    synchronousReturnValue = methodInstance.apply(currentCandidateLoader, argsExceptCallback.concat(function(result) {
                        if (wasAborted) {
                            callback(null);
                        } else if (result !== null) {
                            // This candidate returned a value. Use it.
                            callback(result);
                        } else {
                            // Try the next candidate
                            getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                        }
                    }));

                // Currently, loaders may not return anything synchronously. This leaves open the possibility
                // that we'll extend the API to support synchronous return values in the future. It won't be
                // a breaking change, because currently no loader is allowed to return anything except undefined.
                if (synchronousReturnValue !== undefined) {
                    wasAborted = true;

                    // Method to suppress exceptions will remain undocumented. This is only to keep
                    // KO's specs running tidily, since we can observe the loading got aborted without
                    // having exceptions cluttering up the console too.
                    if (!currentCandidateLoader['suppressLoaderExceptions']) {
                        throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');
                    }
                }
            } else {
                // This candidate doesn't have the relevant handler. Synchronously move on to the next one.
                getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
            }
        } else {
            // No candidates returned a value
            callback(null);
        }
    }

    // Reference the loaders via string name so it's possible for developers
    // to replace the whole array by assigning to ko.components.loaders
    ko.components['loaders'] = [];

    ko.exportSymbol('components', ko.components);
    ko.exportSymbol('components.get', ko.components.get);
    ko.exportSymbol('components.clearCachedDefinition', ko.components.clearCachedDefinition);
})();
(function(undefined) {

    // The default loader is responsible for two things:
    // 1. Maintaining the default in-memory registry of component configuration objects
    //    (i.e., the thing you're writing to when you call ko.components.register(someName, ...))
    // 2. Answering requests for components by fetching configuration objects
    //    from that default in-memory registry and resolving them into standard
    //    component definition objects (of the form { createViewModel: ..., template: ... })
    // Custom loaders may override either of these facilities, i.e.,
    // 1. To supply configuration objects from some other source (e.g., conventions)
    // 2. Or, to resolve configuration objects by loading viewmodels/templates via arbitrary logic.

    var defaultConfigRegistry = {};

    ko.components.register = function(componentName, config) {
        if (!config) {
            throw new Error('Invalid configuration for ' + componentName);
        }

        if (ko.components.isRegistered(componentName)) {
            throw new Error('Component ' + componentName + ' is already registered');
        }

        defaultConfigRegistry[componentName] = config;
    };

    ko.components.isRegistered = function(componentName) {
        return defaultConfigRegistry.hasOwnProperty(componentName);
    };

    ko.components.unregister = function(componentName) {
        delete defaultConfigRegistry[componentName];
        ko.components.clearCachedDefinition(componentName);
    };

    ko.components.defaultLoader = {
        'getConfig': function(componentName, callback) {
            var result = defaultConfigRegistry.hasOwnProperty(componentName)
                ? defaultConfigRegistry[componentName]
                : null;
            callback(result);
        },

        'loadComponent': function(componentName, config, callback) {
            var errorCallback = makeErrorCallback(componentName);
            possiblyGetConfigFromAmd(errorCallback, config, function(loadedConfig) {
                resolveConfig(componentName, errorCallback, loadedConfig, callback);
            });
        },

        'loadTemplate': function(componentName, templateConfig, callback) {
            resolveTemplate(makeErrorCallback(componentName), templateConfig, callback);
        },

        'loadViewModel': function(componentName, viewModelConfig, callback) {
            resolveViewModel(makeErrorCallback(componentName), viewModelConfig, callback);
        }
    };

    var createViewModelKey = 'createViewModel';

    // Takes a config object of the form { template: ..., viewModel: ... }, and asynchronously convert it
    // into the standard component definition format:
    //    { template: <ArrayOfDomNodes>, createViewModel: function(params, componentInfo) { ... } }.
    // Since both template and viewModel may need to be resolved asynchronously, both tasks are performed
    // in parallel, and the results joined when both are ready. We don't depend on any promises infrastructure,
    // so this is implemented manually below.
    function resolveConfig(componentName, errorCallback, config, callback) {
        var result = {},
            makeCallBackWhenZero = 2,
            tryIssueCallback = function() {
                if (--makeCallBackWhenZero === 0) {
                    callback(result);
                }
            },
            templateConfig = config['template'],
            viewModelConfig = config['viewModel'];

        if (templateConfig) {
            possiblyGetConfigFromAmd(errorCallback, templateConfig, function(loadedConfig) {
                ko.components._getFirstResultFromLoaders('loadTemplate', [componentName, loadedConfig], function(resolvedTemplate) {
                    result['template'] = resolvedTemplate;
                    tryIssueCallback();
                });
            });
        } else {
            tryIssueCallback();
        }

        if (viewModelConfig) {
            possiblyGetConfigFromAmd(errorCallback, viewModelConfig, function(loadedConfig) {
                ko.components._getFirstResultFromLoaders('loadViewModel', [componentName, loadedConfig], function(resolvedViewModel) {
                    result[createViewModelKey] = resolvedViewModel;
                    tryIssueCallback();
                });
            });
        } else {
            tryIssueCallback();
        }
    }

    function resolveTemplate(errorCallback, templateConfig, callback) {
        if (typeof templateConfig === 'string') {
            // Markup - parse it
            callback(ko.utils.parseHtmlFragment(templateConfig));
        } else if (templateConfig instanceof Array) {
            // Assume already an array of DOM nodes - pass through unchanged
            callback(templateConfig);
        } else if (isDocumentFragment(templateConfig)) {
            // Document fragment - use its child nodes
            callback(ko.utils.makeArray(templateConfig.childNodes));
        } else if (templateConfig['element']) {
            var element = templateConfig['element'];
            if (isDomElement(element)) {
                // Element instance - copy its child nodes
                callback(cloneNodesFromTemplateSourceElement(element));
            } else if (typeof element === 'string') {
                // Element ID - find it, then copy its child nodes
                var elemInstance = document.getElementById(element);
                if (elemInstance) {
                    callback(cloneNodesFromTemplateSourceElement(elemInstance));
                } else {
                    errorCallback('Cannot find element with ID ' + element);
                }
            } else {
                errorCallback('Unknown element type: ' + element);
            }
        } else {
            errorCallback('Unknown template value: ' + templateConfig);
        }
    }

    function resolveViewModel(errorCallback, viewModelConfig, callback) {
        if (typeof viewModelConfig === 'function') {
            // Constructor - convert to standard factory function format
            // By design, this does *not* supply componentInfo to the constructor, as the intent is that
            // componentInfo contains non-viewmodel data (e.g., the component's element) that should only
            // be used in factory functions, not viewmodel constructors.
            callback(function (params /*, componentInfo */) {
                return new viewModelConfig(params);
            });
        } else if (typeof viewModelConfig[createViewModelKey] === 'function') {
            // Already a factory function - use it as-is
            callback(viewModelConfig[createViewModelKey]);
        } else if ('instance' in viewModelConfig) {
            // Fixed object instance - promote to createViewModel format for API consistency
            var fixedInstance = viewModelConfig['instance'];
            callback(function (params, componentInfo) {
                return fixedInstance;
            });
        } else if ('viewModel' in viewModelConfig) {
            // Resolved AMD module whose value is of the form { viewModel: ... }
            resolveViewModel(errorCallback, viewModelConfig['viewModel'], callback);
        } else {
            errorCallback('Unknown viewModel value: ' + viewModelConfig);
        }
    }

    function cloneNodesFromTemplateSourceElement(elemInstance) {
        switch (ko.utils.tagNameLower(elemInstance)) {
            case 'script':
                return ko.utils.parseHtmlFragment(elemInstance.text);
            case 'textarea':
                return ko.utils.parseHtmlFragment(elemInstance.value);
            case 'template':
                // For browsers with proper <template> element support (i.e., where the .content property
                // gives a document fragment), use that document fragment.
                if (isDocumentFragment(elemInstance.content)) {
                    return ko.utils.cloneNodes(elemInstance.content.childNodes);
                }
        }

        // Regular elements such as <div>, and <template> elements on old browsers that don't really
        // understand <template> and just treat it as a regular container
        return ko.utils.cloneNodes(elemInstance.childNodes);
    }

    function isDomElement(obj) {
        if (window['HTMLElement']) {
            return obj instanceof HTMLElement;
        } else {
            return obj && obj.tagName && obj.nodeType === 1;
        }
    }

    function isDocumentFragment(obj) {
        if (window['DocumentFragment']) {
            return obj instanceof DocumentFragment;
        } else {
            return obj && obj.nodeType === 11;
        }
    }

    function possiblyGetConfigFromAmd(errorCallback, config, callback) {
        if (typeof config['require'] === 'string') {
            // The config is the value of an AMD module
            if (amdRequire || window['require']) {
                (amdRequire || window['require'])([config['require']], callback);
            } else {
                errorCallback('Uses require, but no AMD loader is present');
            }
        } else {
            callback(config);
        }
    }

    function makeErrorCallback(componentName) {
        return function (message) {
            throw new Error('Component \'' + componentName + '\': ' + message);
        };
    }

    ko.exportSymbol('components.register', ko.components.register);
    ko.exportSymbol('components.isRegistered', ko.components.isRegistered);
    ko.exportSymbol('components.unregister', ko.components.unregister);

    // Expose the default loader so that developers can directly ask it for configuration
    // or to resolve configuration
    ko.exportSymbol('components.defaultLoader', ko.components.defaultLoader);

    // By default, the default loader is the only registered component loader
    ko.components['loaders'].push(ko.components.defaultLoader);

    // Privately expose the underlying config registry for use in old-IE shim
    ko.components._allRegisteredComponents = defaultConfigRegistry;
})();
(function (undefined) {
    // Overridable API for determining which component name applies to a given node. By overriding this,
    // you can for example map specific tagNames to components that are not preregistered.
    ko.components['getComponentNameForNode'] = function(node) {
        var tagNameLower = ko.utils.tagNameLower(node);
        if (ko.components.isRegistered(tagNameLower)) {
            // Try to determine that this node can be considered a *custom* element; see https://github.com/knockout/knockout/issues/1603
            if (tagNameLower.indexOf('-') != -1 || ('' + node) == "[object HTMLUnknownElement]" || (ko.utils.ieVersion <= 8 && node.tagName === tagNameLower)) {
                return tagNameLower;
            }
        }
    };

    ko.components.addBindingsForCustomElement = function(allBindings, node, bindingContext, valueAccessors) {
        // Determine if it's really a custom element matching a component
        if (node.nodeType === 1) {
            var componentName = ko.components['getComponentNameForNode'](node);
            if (componentName) {
                // It does represent a component, so add a component binding for it
                allBindings = allBindings || {};

                if (allBindings['component']) {
                    // Avoid silently overwriting some other 'component' binding that may already be on the element
                    throw new Error('Cannot use the "component" binding on a custom element matching a component');
                }

                var componentBindingValue = { 'name': componentName, 'params': getComponentParamsFromCustomElement(node, bindingContext) };

                allBindings['component'] = valueAccessors
                    ? function() { return componentBindingValue; }
                    : componentBindingValue;
            }
        }

        return allBindings;
    }

    var nativeBindingProviderInstance = new ko.bindingProvider();

    function getComponentParamsFromCustomElement(elem, bindingContext) {
        var paramsAttribute = elem.getAttribute('params');

        if (paramsAttribute) {
            var params = nativeBindingProviderInstance['parseBindingsString'](paramsAttribute, bindingContext, elem, { 'valueAccessors': true, 'bindingParams': true }),
                rawParamComputedValues = ko.utils.objectMap(params, function(paramValue, paramName) {
                    return ko.computed(paramValue, null, { disposeWhenNodeIsRemoved: elem });
                }),
                result = ko.utils.objectMap(rawParamComputedValues, function(paramValueComputed, paramName) {
                    var paramValue = paramValueComputed.peek();
                    // Does the evaluation of the parameter value unwrap any observables?
                    if (!paramValueComputed.isActive()) {
                        // No it doesn't, so there's no need for any computed wrapper. Just pass through the supplied value directly.
                        // Example: "someVal: firstName, age: 123" (whether or not firstName is an observable/computed)
                        return paramValue;
                    } else {
                        // Yes it does. Supply a computed property that unwraps both the outer (binding expression)
                        // level of observability, and any inner (resulting model value) level of observability.
                        // This means the component doesn't have to worry about multiple unwrapping. If the value is a
                        // writable observable, the computed will also be writable and pass the value on to the observable.
                        return ko.computed({
                            'read': function() {
                                return ko.utils.unwrapObservable(paramValueComputed());
                            },
                            'write': ko.isWriteableObservable(paramValue) && function(value) {
                                paramValueComputed()(value);
                            },
                            disposeWhenNodeIsRemoved: elem
                        });
                    }
                });

            // Give access to the raw computeds, as long as that wouldn't overwrite any custom param also called '$raw'
            // This is in case the developer wants to react to outer (binding) observability separately from inner
            // (model value) observability, or in case the model value observable has subobservables.
            if (!result.hasOwnProperty('$raw')) {
                result['$raw'] = rawParamComputedValues;
            }

            return result;
        } else {
            // For consistency, absence of a "params" attribute is treated the same as the presence of
            // any empty one. Otherwise component viewmodels need special code to check whether or not
            // 'params' or 'params.$raw' is null/undefined before reading subproperties, which is annoying.
            return { '$raw': {} };
        }
    }

    // --------------------------------------------------------------------------------
    // Compatibility code for older (pre-HTML5) IE browsers

    if (ko.utils.ieVersion < 9) {
        // Whenever you preregister a component, enable it as a custom element in the current document
        ko.components['register'] = (function(originalFunction) {
            return function(componentName) {
                document.createElement(componentName); // Allows IE<9 to parse markup containing the custom element
                return originalFunction.apply(this, arguments);
            }
        })(ko.components['register']);

        // Whenever you create a document fragment, enable all preregistered component names as custom elements
        // This is needed to make innerShiv/jQuery HTML parsing correctly handle the custom elements
        document.createDocumentFragment = (function(originalFunction) {
            return function() {
                var newDocFrag = originalFunction(),
                    allComponents = ko.components._allRegisteredComponents;
                for (var componentName in allComponents) {
                    if (allComponents.hasOwnProperty(componentName)) {
                        newDocFrag.createElement(componentName);
                    }
                }
                return newDocFrag;
            };
        })(document.createDocumentFragment);
    }
})();(function(undefined) {

    var componentLoadingOperationUniqueId = 0;

    ko.bindingHandlers['component'] = {
        'init': function(element, valueAccessor, ignored1, ignored2, bindingContext) {
            var currentViewModel,
                currentLoadingOperationId,
                disposeAssociatedComponentViewModel = function () {
                    var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
                    if (typeof currentViewModelDispose === 'function') {
                        currentViewModelDispose.call(currentViewModel);
                    }
                    currentViewModel = null;
                    // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                    currentLoadingOperationId = null;
                },
                originalChildNodes = ko.utils.makeArray(ko.virtualElements.childNodes(element));

            ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);

            ko.computed(function () {
                var value = ko.utils.unwrapObservable(valueAccessor()),
                    componentName, componentParams;

                if (typeof value === 'string') {
                    componentName = value;
                } else {
                    componentName = ko.utils.unwrapObservable(value['name']);
                    componentParams = ko.utils.unwrapObservable(value['params']);
                }

                if (!componentName) {
                    throw new Error('No component name specified');
                }

                var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
                ko.components.get(componentName, function(componentDefinition) {
                    // If this is not the current load operation for this element, ignore it.
                    if (currentLoadingOperationId !== loadingOperationId) {
                        return;
                    }

                    // Clean up previous state
                    disposeAssociatedComponentViewModel();

                    // Instantiate and bind new component. Implicitly this cleans any old DOM nodes.
                    if (!componentDefinition) {
                        throw new Error('Unknown component \'' + componentName + '\'');
                    }
                    cloneTemplateIntoElement(componentName, componentDefinition, element);
                    var componentViewModel = createViewModel(componentDefinition, element, originalChildNodes, componentParams),
                        childBindingContext = bindingContext['createChildContext'](componentViewModel, /* dataItemAlias */ undefined, function(ctx) {
                            ctx['$component'] = componentViewModel;
                            ctx['$componentTemplateNodes'] = originalChildNodes;
                        });
                    currentViewModel = componentViewModel;
                    ko.applyBindingsToDescendants(childBindingContext, element);
                });
            }, null, { disposeWhenNodeIsRemoved: element });

            return { 'controlsDescendantBindings': true };
        }
    };

    ko.virtualElements.allowedBindings['component'] = true;

    function cloneTemplateIntoElement(componentName, componentDefinition, element) {
        var template = componentDefinition['template'];
        if (!template) {
            throw new Error('Component \'' + componentName + '\' has no template');
        }

        var clonedNodesArray = ko.utils.cloneNodes(template);
        ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
    }

    function createViewModel(componentDefinition, element, originalChildNodes, componentParams) {
        var componentViewModelFactory = componentDefinition['createViewModel'];
        return componentViewModelFactory
            ? componentViewModelFactory.call(componentDefinition, componentParams, { 'element': element, 'templateNodes': originalChildNodes })
            : componentParams; // Template-only component
    }

})();
var attrHtmlToJavascriptMap = { 'class': 'className', 'for': 'htmlFor' };
ko.bindingHandlers['attr'] = {
    'update': function(element, valueAccessor, allBindings) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || {};
        ko.utils.objectForEach(value, function(attrName, attrValue) {
            attrValue = ko.utils.unwrapObservable(attrValue);

            // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
            // when someProp is a "no value"-like value (strictly null, false, or undefined)
            // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
            var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
            if (toRemove)
                element.removeAttribute(attrName);

            // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
            // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
            // but instead of figuring out the mode, we'll just set the attribute through the Javascript
            // property for IE <= 8.
            if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                attrName = attrHtmlToJavascriptMap[attrName];
                if (toRemove)
                    element.removeAttribute(attrName);
                else
                    element[attrName] = attrValue;
            } else if (!toRemove) {
                element.setAttribute(attrName, attrValue.toString());
            }

            // Treat "name" specially - although you can think of it as an attribute, it also needs
            // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
            // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
            // entirely, and there's no strong reason to allow for such casing in HTML.
            if (attrName === "name") {
                ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
            }
        });
    }
};
(function() {

ko.bindingHandlers['checked'] = {
    'after': ['value', 'attr'],
    'init': function (element, valueAccessor, allBindings) {
        var checkedValue = ko.pureComputed(function() {
            // Treat "value" like "checkedValue" when it is included with "checked" binding
            if (allBindings['has']('checkedValue')) {
                return ko.utils.unwrapObservable(allBindings.get('checkedValue'));
            } else if (allBindings['has']('value')) {
                return ko.utils.unwrapObservable(allBindings.get('value'));
            }

            return element.value;
        });

        function updateModel() {
            // This updates the model value from the view value.
            // It runs in response to DOM events (click) and changes in checkedValue.
            var isChecked = element.checked,
                elemValue = useCheckedValue ? checkedValue() : isChecked;

            // When we're first setting up this computed, don't change any model state.
            if (ko.computedContext.isInitial()) {
                return;
            }

            // We can ignore unchecked radio buttons, because some other radio
            // button will be getting checked, and that one can take care of updating state.
            if (isRadio && !isChecked) {
                return;
            }

            var modelValue = ko.dependencyDetection.ignore(valueAccessor);
            if (valueIsArray) {
                var writableValue = rawValueIsNonArrayObservable ? modelValue.peek() : modelValue;
                if (oldElemValue !== elemValue) {
                    // When we're responding to the checkedValue changing, and the element is
                    // currently checked, replace the old elem value with the new elem value
                    // in the model array.
                    if (isChecked) {
                        ko.utils.addOrRemoveItem(writableValue, elemValue, true);
                        ko.utils.addOrRemoveItem(writableValue, oldElemValue, false);
                    }

                    oldElemValue = elemValue;
                } else {
                    // When we're responding to the user having checked/unchecked a checkbox,
                    // add/remove the element value to the model array.
                    ko.utils.addOrRemoveItem(writableValue, elemValue, isChecked);
                }
                if (rawValueIsNonArrayObservable && ko.isWriteableObservable(modelValue)) {
                    modelValue(writableValue);
                }
            } else {
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
            }
        };

        function updateView() {
            // This updates the view value from the model value.
            // It runs in response to changes in the bound (checked) value.
            var modelValue = ko.utils.unwrapObservable(valueAccessor());

            if (valueIsArray) {
                // When a checkbox is bound to an array, being checked represents its value being present in that array
                element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
            } else if (isCheckbox) {
                // When a checkbox is bound to any other value (not an array), being checked represents the value being trueish
                element.checked = modelValue;
            } else {
                // For radio buttons, being checked means that the radio button's value corresponds to the model value
                element.checked = (checkedValue() === modelValue);
            }
        };

        var isCheckbox = element.type == "checkbox",
            isRadio = element.type == "radio";

        // Only bind to check boxes and radio buttons
        if (!isCheckbox && !isRadio) {
            return;
        }

        var rawValue = valueAccessor(),
            valueIsArray = isCheckbox && (ko.utils.unwrapObservable(rawValue) instanceof Array),
            rawValueIsNonArrayObservable = !(valueIsArray && rawValue.push && rawValue.splice),
            oldElemValue = valueIsArray ? checkedValue() : undefined,
            useCheckedValue = isRadio || valueIsArray;

        // IE 6 won't allow radio buttons to be selected unless they have a name
        if (isRadio && !element.name)
            ko.bindingHandlers['uniqueName']['init'](element, function() { return true });

        // Set up two computeds to update the binding:

        // The first responds to changes in the checkedValue value and to element clicks
        ko.computed(updateModel, null, { disposeWhenNodeIsRemoved: element });
        ko.utils.registerEventHandler(element, "click", updateModel);

        // The second responds to changes in the model value (the one associated with the checked binding)
        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });

        rawValue = undefined;
    }
};
ko.expressionRewriting.twoWayBindings['checked'] = true;

ko.bindingHandlers['checkedValue'] = {
    'update': function (element, valueAccessor) {
        element.value = ko.utils.unwrapObservable(valueAccessor());
    }
};

})();var classesWrittenByBindingKey = '__ko__cssValue';
ko.bindingHandlers['css'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (value !== null && typeof value == "object") {
            ko.utils.objectForEach(value, function(className, shouldHaveClass) {
                shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
                ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
            });
        } else {
            value = ko.utils.stringTrim(String(value || '')); // Make sure we don't try to store or set a non-string value
            ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
            element[classesWrittenByBindingKey] = value;
            ko.utils.toggleDomNodeCssClass(element, value, true);
        }
    }
};
ko.bindingHandlers['enable'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (value && element.disabled)
            element.removeAttribute("disabled");
        else if ((!value) && (!element.disabled))
            element.disabled = true;
    }
};

ko.bindingHandlers['disable'] = {
    'update': function (element, valueAccessor) {
        ko.bindingHandlers['enable']['update'](element, function() { return !ko.utils.unwrapObservable(valueAccessor()) });
    }
};
// For certain common events (currently just 'click'), allow a simplified data-binding syntax
// e.g. click:handler instead of the usual full-length event:{click:handler}
function makeEventHandlerShortcut(eventName) {
    ko.bindingHandlers[eventName] = {
        'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var newValueAccessor = function () {
                var result = {};
                result[eventName] = valueAccessor();
                return result;
            };
            return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
        }
    }
}

ko.bindingHandlers['event'] = {
    'init' : function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var eventsToHandle = valueAccessor() || {};
        ko.utils.objectForEach(eventsToHandle, function(eventName) {
            if (typeof eventName == "string") {
                ko.utils.registerEventHandler(element, eventName, function (event) {
                    var handlerReturnValue;
                    var handlerFunction = valueAccessor()[eventName];
                    if (!handlerFunction)
                        return;

                    try {
                        // Take all the event args, and prefix with the viewmodel
                        var argsForHandler = ko.utils.makeArray(arguments);
                        viewModel = bindingContext['$data'];
                        argsForHandler.unshift(viewModel);
                        handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                    } finally {
                        if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                            if (event.preventDefault)
                                event.preventDefault();
                            else
                                event.returnValue = false;
                        }
                    }

                    var bubble = allBindings.get(eventName + 'Bubble') !== false;
                    if (!bubble) {
                        event.cancelBubble = true;
                        if (event.stopPropagation)
                            event.stopPropagation();
                    }
                });
            }
        });
    }
};
// "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
// "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
ko.bindingHandlers['foreach'] = {
    makeTemplateValueAccessor: function(valueAccessor) {
        return function() {
            var modelValue = valueAccessor(),
                unwrappedValue = ko.utils.peekObservable(modelValue);    // Unwrap without setting a dependency here

            // If unwrappedValue is the array, pass in the wrapped value on its own
            // The value will be unwrapped and tracked within the template binding
            // (See https://github.com/SteveSanderson/knockout/issues/523)
            if ((!unwrappedValue) || typeof unwrappedValue.length == "number")
                return { 'foreach': modelValue, 'templateEngine': ko.nativeTemplateEngine.instance };

            // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
            ko.utils.unwrapObservable(modelValue);
            return {
                'foreach': unwrappedValue['data'],
                'as': unwrappedValue['as'],
                'includeDestroyed': unwrappedValue['includeDestroyed'],
                'afterAdd': unwrappedValue['afterAdd'],
                'beforeRemove': unwrappedValue['beforeRemove'],
                'afterRender': unwrappedValue['afterRender'],
                'beforeMove': unwrappedValue['beforeMove'],
                'afterMove': unwrappedValue['afterMove'],
                'templateEngine': ko.nativeTemplateEngine.instance
            };
        };
    },
    'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
    },
    'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
    }
};
ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings
ko.virtualElements.allowedBindings['foreach'] = true;
var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
var hasfocusLastValue = '__ko_hasfocusLastValue';
ko.bindingHandlers['hasfocus'] = {
    'init': function(element, valueAccessor, allBindings) {
        var handleElementFocusChange = function(isFocused) {
            // Where possible, ignore which event was raised and determine focus state using activeElement,
            // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
            // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
            // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
            // from calling 'blur()' on the element when it loses focus.
            // Discussion at https://github.com/SteveSanderson/knockout/pull/352
            element[hasfocusUpdatingProperty] = true;
            var ownerDoc = element.ownerDocument;
            if ("activeElement" in ownerDoc) {
                var active;
                try {
                    active = ownerDoc.activeElement;
                } catch(e) {
                    // IE9 throws if you access activeElement during page load (see issue #703)
                    active = ownerDoc.body;
                }
                isFocused = (active === element);
            }
            var modelValue = valueAccessor();
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true);

            //cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function
            element[hasfocusLastValue] = isFocused;
            element[hasfocusUpdatingProperty] = false;
        };
        var handleElementFocusIn = handleElementFocusChange.bind(null, true);
        var handleElementFocusOut = handleElementFocusChange.bind(null, false);

        ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
        ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE
        ko.utils.registerEventHandler(element, "blur",  handleElementFocusOut);
        ko.utils.registerEventHandler(element, "focusout",  handleElementFocusOut); // For IE
    },
    'update': function(element, valueAccessor) {
        var value = !!ko.utils.unwrapObservable(valueAccessor());

        if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
            value ? element.focus() : element.blur();

            // In IE, the blur method doesn't always cause the element to lose focus (for example, if the window is not in focus).
            // Setting focus to the body element does seem to be reliable in IE, but should only be used if we know that the current
            // element was focused already.
            if (!value && element[hasfocusLastValue]) {
                element.ownerDocument.body.focus();
            }

            // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
            ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]);
        }
    }
};
ko.expressionRewriting.twoWayBindings['hasfocus'] = true;

ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus']; // Make "hasFocus" an alias
ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
ko.bindingHandlers['html'] = {
    'init': function() {
        // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor) {
        // setHtml will unwrap the value if needed
        ko.utils.setHtml(element, valueAccessor());
    }
};
// Makes a binding like with or if
function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
    ko.bindingHandlers[bindingKey] = {
        'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var didDisplayOnLastUpdate,
                savedNodes;
            ko.computed(function() {
                var rawValue = valueAccessor(),
                    dataValue = ko.utils.unwrapObservable(rawValue),
                    shouldDisplay = !isNot !== !dataValue, // equivalent to isNot ? !dataValue : !!dataValue
                    isFirstRender = !savedNodes,
                    needsRefresh = isFirstRender || isWith || (shouldDisplay !== didDisplayOnLastUpdate);

                if (needsRefresh) {
                    // Save a copy of the inner nodes on the initial update, but only if we have dependencies.
                    if (isFirstRender && ko.computedContext.getDependenciesCount()) {
                        savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
                    }

                    if (shouldDisplay) {
                        if (!isFirstRender) {
                            ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(savedNodes));
                        }
                        ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, rawValue) : bindingContext, element);
                    } else {
                        ko.virtualElements.emptyNode(element);
                    }

                    didDisplayOnLastUpdate = shouldDisplay;
                }
            }, null, { disposeWhenNodeIsRemoved: element });
            return { 'controlsDescendantBindings': true };
        }
    };
    ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings
    ko.virtualElements.allowedBindings[bindingKey] = true;
}

// Construct the actual binding handlers
makeWithIfBinding('if');
makeWithIfBinding('ifnot', false /* isWith */, true /* isNot */);
makeWithIfBinding('with', true /* isWith */, false /* isNot */,
    function(bindingContext, dataValue) {
        return bindingContext.createStaticChildContext(dataValue);
    }
);
var captionPlaceholder = {};
ko.bindingHandlers['options'] = {
    'init': function(element) {
        if (ko.utils.tagNameLower(element) !== "select")
            throw new Error("options binding applies only to SELECT elements");

        // Remove all existing <option>s.
        while (element.length > 0) {
            element.remove(0);
        }

        // Ensures that the binding processor doesn't try to bind the options
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor, allBindings) {
        function selectedOptions() {
            return ko.utils.arrayFilter(element.options, function (node) { return node.selected; });
        }

        var selectWasPreviouslyEmpty = element.length == 0,
            multiple = element.multiple,
            previousScrollTop = (!selectWasPreviouslyEmpty && multiple) ? element.scrollTop : null,
            unwrappedArray = ko.utils.unwrapObservable(valueAccessor()),
            valueAllowUnset = allBindings.get('valueAllowUnset') && allBindings['has']('value'),
            includeDestroyed = allBindings.get('optionsIncludeDestroyed'),
            arrayToDomNodeChildrenOptions = {},
            captionValue,
            filteredArray,
            previousSelectedValues = [];

        if (!valueAllowUnset) {
            if (multiple) {
                previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
            } else if (element.selectedIndex >= 0) {
                previousSelectedValues.push(ko.selectExtensions.readValue(element.options[element.selectedIndex]));
            }
        }

        if (unwrappedArray) {
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // If caption is included, add it to the array
            if (allBindings['has']('optionsCaption')) {
                captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption'));
                // If caption value is null or undefined, don't show a caption
                if (captionValue !== null && captionValue !== undefined) {
                    filteredArray.unshift(captionPlaceholder);
                }
            }
        } else {
            // If a falsy value is provided (e.g. null), we'll simply empty the select element
        }

        function applyToObject(object, predicate, defaultValue) {
            var predicateType = typeof predicate;
            if (predicateType == "function")    // Given a function; run it against the data value
                return predicate(object);
            else if (predicateType == "string") // Given a string; treat it as a property name on the data value
                return object[predicate];
            else                                // Given no optionsText arg; use the data value itself
                return defaultValue;
        }

        // The following functions can run at two different times:
        // The first is when the whole array is being updated directly from this binding handler.
        // The second is when an observable value for a specific array entry is updated.
        // oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.
        var itemUpdate = false;
        function optionForArrayItem(arrayEntry, index, oldOptions) {
            if (oldOptions.length) {
                previousSelectedValues = !valueAllowUnset && oldOptions[0].selected ? [ ko.selectExtensions.readValue(oldOptions[0]) ] : [];
                itemUpdate = true;
            }
            var option = element.ownerDocument.createElement("option");
            if (arrayEntry === captionPlaceholder) {
                ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
                ko.selectExtensions.writeValue(option, undefined);
            } else {
                // Apply a value to the option element
                var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
                ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));

                // Apply some text to the option element
                var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
                ko.utils.setTextContent(option, optionText);
            }
            return [option];
        }

        // By using a beforeRemove callback, we delay the removal until after new items are added. This fixes a selection
        // problem in IE<=8 and Firefox. See https://github.com/knockout/knockout/issues/1208
        arrayToDomNodeChildrenOptions['beforeRemove'] =
            function (option) {
                element.removeChild(option);
            };

        function setSelectionCallback(arrayEntry, newOptions) {
            if (itemUpdate && valueAllowUnset) {
                // The model value is authoritative, so make sure its value is the one selected
                // There is no need to use dependencyDetection.ignore since setDomNodeChildrenFromArrayMapping does so already.
                ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
            } else if (previousSelectedValues.length) {
                // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
                // That's why we first added them without selection. Now it's time to set the selection.
                var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
                ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);

                // If this option was changed from being selected during a single-item update, notify the change
                if (itemUpdate && !isSelected) {
                    ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                }
            }
        }

        var callback = setSelectionCallback;
        if (allBindings['has']('optionsAfterRender') && typeof allBindings.get('optionsAfterRender') == "function") {
            callback = function(arrayEntry, newOptions) {
                setSelectionCallback(arrayEntry, newOptions);
                ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
            }
        }

        ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, arrayToDomNodeChildrenOptions, callback);

        ko.dependencyDetection.ignore(function () {
            if (valueAllowUnset) {
                // The model value is authoritative, so make sure its value is the one selected
                ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
            } else {
                // Determine if the selection has changed as a result of updating the options list
                var selectionChanged;
                if (multiple) {
                    // For a multiple-select box, compare the new selection count to the previous one
                    // But if nothing was selected before, the selection can't have changed
                    selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
                } else {
                    // For a single-select box, compare the current value to the previous value
                    // But if nothing was selected before or nothing is selected now, just look for a change in selection
                    selectionChanged = (previousSelectedValues.length && element.selectedIndex >= 0)
                        ? (ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0])
                        : (previousSelectedValues.length || element.selectedIndex >= 0);
                }

                // Ensure consistency between model value and selected option.
                // If the dropdown was changed so that selection is no longer the same,
                // notify the value or selectedOptions binding.
                if (selectionChanged) {
                    ko.utils.triggerEvent(element, "change");
                }
            }
        });

        // Workaround for IE bug
        ko.utils.ensureSelectElementIsRenderedCorrectly(element);

        if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20)
            element.scrollTop = previousScrollTop;
    }
};
ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
ko.bindingHandlers['selectedOptions'] = {
    'after': ['options', 'foreach'],
    'init': function (element, valueAccessor, allBindings) {
        ko.utils.registerEventHandler(element, "change", function () {
            var value = valueAccessor(), valueToWrite = [];
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                if (node.selected)
                    valueToWrite.push(ko.selectExtensions.readValue(node));
            });
            ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
        });
    },
    'update': function (element, valueAccessor) {
        if (ko.utils.tagNameLower(element) != "select")
            throw new Error("values binding applies only to SELECT elements");

        var newValue = ko.utils.unwrapObservable(valueAccessor()),
            previousScrollTop = element.scrollTop;

        if (newValue && typeof newValue.length == "number") {
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                if (node.selected != isSelected) {      // This check prevents flashing of the select element in IE
                    ko.utils.setOptionNodeSelectionState(node, isSelected);
                }
            });
        }

        element.scrollTop = previousScrollTop;
    }
};
ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
ko.bindingHandlers['style'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor() || {});
        ko.utils.objectForEach(value, function(styleName, styleValue) {
            styleValue = ko.utils.unwrapObservable(styleValue);

            if (styleValue === null || styleValue === undefined || styleValue === false) {
                // Empty string removes the value, whereas null/undefined have no effect
                styleValue = "";
            }

            element.style[styleName] = styleValue;
        });
    }
};
ko.bindingHandlers['submit'] = {
    'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        if (typeof valueAccessor() != "function")
            throw new Error("The value for a submit binding must be a function");
        ko.utils.registerEventHandler(element, "submit", function (event) {
            var handlerReturnValue;
            var value = valueAccessor();
            try { handlerReturnValue = value.call(bindingContext['$data'], element); }
            finally {
                if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                    if (event.preventDefault)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                }
            }
        });
    }
};
ko.bindingHandlers['text'] = {
    'init': function() {
        // Prevent binding on the dynamically-injected text node (as developers are unlikely to expect that, and it has security implications).
        // It should also make things faster, as we no longer have to consider whether the text node might be bindable.
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor) {
        ko.utils.setTextContent(element, valueAccessor());
    }
};
ko.virtualElements.allowedBindings['text'] = true;
(function () {

if (window && window.navigator) {
    var parseVersion = function (matches) {
        if (matches) {
            return parseFloat(matches[1]);
        }
    };

    // Detect various browser versions because some old versions don't fully support the 'input' event
    var operaVersion = window.opera && window.opera.version && parseInt(window.opera.version()),
        userAgent = window.navigator.userAgent,
        safariVersion = parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
        firefoxVersion = parseVersion(userAgent.match(/Firefox\/([^ ]*)/));
}

// IE 8 and 9 have bugs that prevent the normal events from firing when the value changes.
// But it does fire the 'selectionchange' event on many of those, presumably because the
// cursor is moving and that counts as the selection changing. The 'selectionchange' event is
// fired at the document level only and doesn't directly indicate which element changed. We
// set up just one event handler for the document and use 'activeElement' to determine which
// element was changed.
if (ko.utils.ieVersion < 10) {
    var selectionChangeRegisteredName = ko.utils.domData.nextKey(),
        selectionChangeHandlerName = ko.utils.domData.nextKey();
    var selectionChangeHandler = function(event) {
        var target = this.activeElement,
            handler = target && ko.utils.domData.get(target, selectionChangeHandlerName);
        if (handler) {
            handler(event);
        }
    };
    var registerForSelectionChangeEvent = function (element, handler) {
        var ownerDoc = element.ownerDocument;
        if (!ko.utils.domData.get(ownerDoc, selectionChangeRegisteredName)) {
            ko.utils.domData.set(ownerDoc, selectionChangeRegisteredName, true);
            ko.utils.registerEventHandler(ownerDoc, 'selectionchange', selectionChangeHandler);
        }
        ko.utils.domData.set(element, selectionChangeHandlerName, handler);
    };
}

ko.bindingHandlers['textInput'] = {
    'init': function (element, valueAccessor, allBindings) {

        var previousElementValue = element.value,
            timeoutHandle,
            elementValueBeforeEvent;

        var updateModel = function (event) {
            clearTimeout(timeoutHandle);
            elementValueBeforeEvent = timeoutHandle = undefined;

            var elementValue = element.value;
            if (previousElementValue !== elementValue) {
                // Provide a way for tests to know exactly which event was processed
                if (DEBUG && event) element['_ko_textInputProcessedEvent'] = event.type;
                previousElementValue = elementValue;
                ko.expressionRewriting.writeValueToProperty(valueAccessor(), allBindings, 'textInput', elementValue);
            }
        };

        var deferUpdateModel = function (event) {
            if (!timeoutHandle) {
                // The elementValueBeforeEvent variable is set *only* during the brief gap between an
                // event firing and the updateModel function running. This allows us to ignore model
                // updates that are from the previous state of the element, usually due to techniques
                // such as rateLimit. Such updates, if not ignored, can cause keystrokes to be lost.
                elementValueBeforeEvent = element.value;
                var handler = DEBUG ? updateModel.bind(element, {type: event.type}) : updateModel;
                timeoutHandle = ko.utils.setTimeout(handler, 4);
            }
        };

        // IE9 will mess up the DOM if you handle events synchronously which results in DOM changes (such as other bindings);
        // so we'll make sure all updates are asynchronous
        var ieUpdateModel = ko.utils.ieVersion == 9 ? deferUpdateModel : updateModel;

        var updateView = function () {
            var modelValue = ko.utils.unwrapObservable(valueAccessor());

            if (modelValue === null || modelValue === undefined) {
                modelValue = '';
            }

            if (elementValueBeforeEvent !== undefined && modelValue === elementValueBeforeEvent) {
                ko.utils.setTimeout(updateView, 4);
                return;
            }

            // Update the element only if the element and model are different. On some browsers, updating the value
            // will move the cursor to the end of the input, which would be bad while the user is typing.
            if (element.value !== modelValue) {
                previousElementValue = modelValue;  // Make sure we ignore events (propertychange) that result from updating the value
                element.value = modelValue;
            }
        };

        var onEvent = function (event, handler) {
            ko.utils.registerEventHandler(element, event, handler);
        };

        if (DEBUG && ko.bindingHandlers['textInput']['_forceUpdateOn']) {
            // Provide a way for tests to specify exactly which events are bound
            ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'], function(eventName) {
                if (eventName.slice(0,5) == 'after') {
                    onEvent(eventName.slice(5), deferUpdateModel);
                } else {
                    onEvent(eventName, updateModel);
                }
            });
        } else {
            if (ko.utils.ieVersion < 10) {
                // Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
                // any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
                // but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
                // when using autocomplete, we'll use 'propertychange' for it also.
                onEvent('propertychange', function(event) {
                    if (event.propertyName === 'value') {
                        ieUpdateModel(event);
                    }
                });

                if (ko.utils.ieVersion == 8) {
                    // IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
                    // JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
                    // events too.
                    onEvent('keyup', updateModel);      // A single keystoke
                    onEvent('keydown', updateModel);    // The first character when a key is held down
                }
                if (ko.utils.ieVersion >= 8) {
                    // Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
                    // the backspace, delete, or ctrl-x keys, clicking the 'x' to clear the input, dragging text
                    // out of the field, and cutting or deleting text using the context menu. 'selectionchange'
                    // can detect all of those except dragging text out of the field, for which we use 'dragend'.
                    // These are also needed in IE8 because of the bug described above.
                    registerForSelectionChangeEvent(element, ieUpdateModel);  // 'selectionchange' covers cut, paste, drop, delete, etc.
                    onEvent('dragend', deferUpdateModel);
                }
            } else {
                // All other supported browsers support the 'input' event, which fires whenever the content of the element is changed
                // through the user interface.
                onEvent('input', updateModel);

                if (safariVersion < 5 && ko.utils.tagNameLower(element) === "textarea") {
                    // Safari <5 doesn't fire the 'input' event for <textarea> elements (it does fire 'textInput'
                    // but only when typing). So we'll just catch as much as we can with keydown, cut, and paste.
                    onEvent('keydown', deferUpdateModel);
                    onEvent('paste', deferUpdateModel);
                    onEvent('cut', deferUpdateModel);
                } else if (operaVersion < 11) {
                    // Opera 10 doesn't always fire the 'input' event for cut, paste, undo & drop operations.
                    // We can try to catch some of those using 'keydown'.
                    onEvent('keydown', deferUpdateModel);
                } else if (firefoxVersion < 4.0) {
                    // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
                    onEvent('DOMAutoComplete', updateModel);

                    // Firefox <=3.5 doesn't fire the 'input' event when text is dropped into the input.
                    onEvent('dragdrop', updateModel);       // <3.5
                    onEvent('drop', updateModel);           // 3.5
                }
            }
        }

        // Bind to the change event so that we can catch programmatic updates of the value that fire this event.
        onEvent('change', updateModel);

        ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });
    }
};
ko.expressionRewriting.twoWayBindings['textInput'] = true;

// textinput is an alias for textInput
ko.bindingHandlers['textinput'] = {
    // preprocess is the only way to set up a full alias
    'preprocess': function (value, name, addBinding) {
        addBinding('textInput', value);
    }
};

})();ko.bindingHandlers['uniqueName'] = {
    'init': function (element, valueAccessor) {
        if (valueAccessor()) {
            var name = "ko_unique_" + (++ko.bindingHandlers['uniqueName'].currentIndex);
            ko.utils.setElementName(element, name);
        }
    }
};
ko.bindingHandlers['uniqueName'].currentIndex = 0;
ko.bindingHandlers['value'] = {
    'after': ['options', 'foreach'],
    'init': function (element, valueAccessor, allBindings) {
        // If the value binding is placed on a radio/checkbox, then just pass through to checkedValue and quit
        if (element.tagName.toLowerCase() == "input" && (element.type == "checkbox" || element.type == "radio")) {
            ko.applyBindingAccessorsToNode(element, { 'checkedValue': valueAccessor });
            return;
        }

        // Always catch "change" event; possibly other events too if asked
        var eventsToCatch = ["change"];
        var requestedEventsToCatch = allBindings.get("valueUpdate");
        var propertyChangedFired = false;
        var elementValueBeforeEvent = null;

        if (requestedEventsToCatch) {
            if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
                requestedEventsToCatch = [requestedEventsToCatch];
            ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
            eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
        }

        var valueUpdateHandler = function() {
            elementValueBeforeEvent = null;
            propertyChangedFired = false;
            var modelValue = valueAccessor();
            var elementValue = ko.selectExtensions.readValue(element);
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
        }

        // Workaround for https://github.com/SteveSanderson/knockout/issues/122
        // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
        var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text"
                                       && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
        if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
            ko.utils.registerEventHandler(element, "propertychange", function () { propertyChangedFired = true });
            ko.utils.registerEventHandler(element, "focus", function () { propertyChangedFired = false });
            ko.utils.registerEventHandler(element, "blur", function() {
                if (propertyChangedFired) {
                    valueUpdateHandler();
                }
            });
        }

        ko.utils.arrayForEach(eventsToCatch, function(eventName) {
            // The syntax "after<eventname>" means "run the handler asynchronously after the event"
            // This is useful, for example, to catch "keydown" events after the browser has updated the control
            // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
            var handler = valueUpdateHandler;
            if (ko.utils.stringStartsWith(eventName, "after")) {
                handler = function() {
                    // The elementValueBeforeEvent variable is non-null *only* during the brief gap between
                    // a keyX event firing and the valueUpdateHandler running, which is scheduled to happen
                    // at the earliest asynchronous opportunity. We store this temporary information so that
                    // if, between keyX and valueUpdateHandler, the underlying model value changes separately,
                    // we can overwrite that model value change with the value the user just typed. Otherwise,
                    // techniques like rateLimit can trigger model changes at critical moments that will
                    // override the user's inputs, causing keystrokes to be lost.
                    elementValueBeforeEvent = ko.selectExtensions.readValue(element);
                    ko.utils.setTimeout(valueUpdateHandler, 0);
                };
                eventName = eventName.substring("after".length);
            }
            ko.utils.registerEventHandler(element, eventName, handler);
        });

        var updateFromModel = function () {
            var newValue = ko.utils.unwrapObservable(valueAccessor());
            var elementValue = ko.selectExtensions.readValue(element);

            if (elementValueBeforeEvent !== null && newValue === elementValueBeforeEvent) {
                ko.utils.setTimeout(updateFromModel, 0);
                return;
            }

            var valueHasChanged = (newValue !== elementValue);

            if (valueHasChanged) {
                if (ko.utils.tagNameLower(element) === "select") {
                    var allowUnset = allBindings.get('valueAllowUnset');
                    var applyValueAction = function () {
                        ko.selectExtensions.writeValue(element, newValue, allowUnset);
                    };
                    applyValueAction();

                    if (!allowUnset && newValue !== ko.selectExtensions.readValue(element)) {
                        // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
                        // because you're not allowed to have a model value that disagrees with a visible UI selection.
                        ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                    } else {
                        // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
                        // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
                        // to apply the value as well.
                        ko.utils.setTimeout(applyValueAction, 0);
                    }
                } else {
                    ko.selectExtensions.writeValue(element, newValue);
                }
            }
        };

        ko.computed(updateFromModel, null, { disposeWhenNodeIsRemoved: element });
    },
    'update': function() {} // Keep for backwards compatibility with code that may have wrapped value binding
};
ko.expressionRewriting.twoWayBindings['value'] = true;
ko.bindingHandlers['visible'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var isCurrentlyVisible = !(element.style.display == "none");
        if (value && !isCurrentlyVisible)
            element.style.display = "";
        else if ((!value) && isCurrentlyVisible)
            element.style.display = "none";
    }
};
// 'click' is just a shorthand for the usual full-length event:{click:handler}
makeEventHandlerShortcut('click');
// If you want to make a custom template engine,
//
// [1] Inherit from this class (like ko.nativeTemplateEngine does)
// [2] Override 'renderTemplateSource', supplying a function with this signature:
//
//        function (templateSource, bindingContext, options) {
//            // - templateSource.text() is the text of the template you should render
//            // - bindingContext.$data is the data you should pass into the template
//            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
//            //     and bindingContext.$root available in the template too
//            // - options gives you access to any other properties set on "data-bind: { template: options }"
//            // - templateDocument is the document object of the template
//            //
//            // Return value: an array of DOM nodes
//        }
//
// [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
//
//        function (script) {
//            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
//            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
//        }
//
//     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
//     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
//     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

ko.templateEngine = function () { };

ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
    throw new Error("Override renderTemplateSource");
};

ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
    throw new Error("Override createJavaScriptEvaluatorBlock");
};

ko.templateEngine.prototype['makeTemplateSource'] = function(template, templateDocument) {
    // Named template
    if (typeof template == "string") {
        templateDocument = templateDocument || document;
        var elem = templateDocument.getElementById(template);
        if (!elem)
            throw new Error("Cannot find template with ID " + template);
        return new ko.templateSources.domElement(elem);
    } else if ((template.nodeType == 1) || (template.nodeType == 8)) {
        // Anonymous template
        return new ko.templateSources.anonymousTemplate(template);
    } else
        throw new Error("Unknown template type: " + template);
};

ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    return this['renderTemplateSource'](templateSource, bindingContext, options, templateDocument);
};

ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
    // Skip rewriting if requested
    if (this['allowTemplateRewriting'] === false)
        return true;
    return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
};

ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    var rewritten = rewriterCallback(templateSource['text']());
    templateSource['text'](rewritten);
    templateSource['data']("isRewritten", true);
};

ko.exportSymbol('templateEngine', ko.templateEngine);

ko.templateRewriting = (function () {
    var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
    var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

    function validateDataBindValuesForRewriting(keyValueArray) {
        var allValidators = ko.expressionRewriting.bindingRewriteValidators;
        for (var i = 0; i < keyValueArray.length; i++) {
            var key = keyValueArray[i]['key'];
            if (allValidators.hasOwnProperty(key)) {
                var validator = allValidators[key];

                if (typeof validator === "function") {
                    var possibleErrorMessage = validator(keyValueArray[i]['value']);
                    if (possibleErrorMessage)
                        throw new Error(possibleErrorMessage);
                } else if (!validator) {
                    throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                }
            }
        }
    }

    function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
        var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
        validateDataBindValuesForRewriting(dataBindKeyValueArray);
        var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, {'valueAccessors':true});

        // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
        // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
        // extra indirection.
        var applyBindingsToNextSiblingScript =
            "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
        return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
    }

    return {
        ensureTemplateIsRewritten: function (template, templateEngine, templateDocument) {
            if (!templateEngine['isTemplateRewritten'](template, templateDocument))
                templateEngine['rewriteTemplate'](template, function (htmlString) {
                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                }, templateDocument);
        },

        memoizeBindingAttributeSyntax: function (htmlString, templateEngine) {
            return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[4], /* tagToRetain: */ arguments[1], /* nodeName: */ arguments[2], templateEngine);
            }).replace(memoizeVirtualContainerBindingSyntaxRegex, function() {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[1], /* tagToRetain: */ "<!-- ko -->", /* nodeName: */ "#comment", templateEngine);
            });
        },

        applyMemoizedBindingsToNextSibling: function (bindings, nodeName) {
            return ko.memoization.memoize(function (domNode, bindingContext) {
                var nodeToBind = domNode.nextSibling;
                if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                    ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
                }
            });
        }
    }
})();


// Exported only because it has to be referenced by string lookup from within rewritten template
ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
(function() {
    // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
    // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
    //
    // Two are provided by default:
    //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
    //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
    //                                           without reading/writing the actual element text content, since it will be overwritten
    //                                           with the rendered template output.
    // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
    // Template sources need to have the following functions:
    //   text() 			- returns the template text from your storage location
    //   text(value)		- writes the supplied template text to your storage location
    //   data(key)			- reads values stored using data(key, value) - see below
    //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
    //
    // Optionally, template sources can also have the following functions:
    //   nodes()            - returns a DOM element containing the nodes of this template, where available
    //   nodes(value)       - writes the given DOM element to your storage location
    // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
    // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
    //
    // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
    // using and overriding "makeTemplateSource" to return an instance of your custom template source.

    ko.templateSources = {};

    // ---- ko.templateSources.domElement -----

    // template types
    var templateScript = 1,
        templateTextArea = 2,
        templateTemplate = 3,
        templateElement = 4;

    ko.templateSources.domElement = function(element) {
        this.domElement = element;

        if (element) {
            var tagNameLower = ko.utils.tagNameLower(element);
            this.templateType =
                tagNameLower === "script" ? templateScript :
                tagNameLower === "textarea" ? templateTextArea :
                    // For browsers with proper <template> element support, where the .content property gives a document fragment
                tagNameLower == "template" && element.content && element.content.nodeType === 11 ? templateTemplate :
                templateElement;
        }
    }

    ko.templateSources.domElement.prototype['text'] = function(/* valueToWrite */) {
        var elemContentsProperty = this.templateType === templateScript ? "text"
                                 : this.templateType === templateTextArea ? "value"
                                 : "innerHTML";

        if (arguments.length == 0) {
            return this.domElement[elemContentsProperty];
        } else {
            var valueToWrite = arguments[0];
            if (elemContentsProperty === "innerHTML")
                ko.utils.setHtml(this.domElement, valueToWrite);
            else
                this.domElement[elemContentsProperty] = valueToWrite;
        }
    };

    var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";
    ko.templateSources.domElement.prototype['data'] = function(key /*, valueToWrite */) {
        if (arguments.length === 1) {
            return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
        } else {
            ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
        }
    };

    var templatesDomDataKey = ko.utils.domData.nextKey();
    function getTemplateDomData(element) {
        return ko.utils.domData.get(element, templatesDomDataKey) || {};
    }
    function setTemplateDomData(element, data) {
        ko.utils.domData.set(element, templatesDomDataKey, data);
    }

    ko.templateSources.domElement.prototype['nodes'] = function(/* valueToWrite */) {
        var element = this.domElement;
        if (arguments.length == 0) {
            var templateData = getTemplateDomData(element),
                containerData = templateData.containerData;
            return containerData || (
                this.templateType === templateTemplate ? element.content :
                this.templateType === templateElement ? element :
                undefined);
        } else {
            var valueToWrite = arguments[0];
            setTemplateDomData(element, {containerData: valueToWrite});
        }
    };

    // ---- ko.templateSources.anonymousTemplate -----
    // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
    // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
    // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.

    ko.templateSources.anonymousTemplate = function(element) {
        this.domElement = element;
    }
    ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
    ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
    ko.templateSources.anonymousTemplate.prototype['text'] = function(/* valueToWrite */) {
        if (arguments.length == 0) {
            var templateData = getTemplateDomData(this.domElement);
            if (templateData.textData === undefined && templateData.containerData)
                templateData.textData = templateData.containerData.innerHTML;
            return templateData.textData;
        } else {
            var valueToWrite = arguments[0];
            setTemplateDomData(this.domElement, {textData: valueToWrite});
        }
    };

    ko.exportSymbol('templateSources', ko.templateSources);
    ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
    ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
})();
(function () {
    var _templateEngine;
    ko.setTemplateEngine = function (templateEngine) {
        if ((templateEngine != undefined) && !(templateEngine instanceof ko.templateEngine))
            throw new Error("templateEngine must inherit from ko.templateEngine");
        _templateEngine = templateEngine;
    }

    function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
        var node, nextInQueue = firstNode, firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
        while (nextInQueue && ((node = nextInQueue) !== firstOutOfRangeNode)) {
            nextInQueue = ko.virtualElements.nextSibling(node);
            action(node, nextInQueue);
        }
    }

    function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
        // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
        // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
        // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
        // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
        // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)

        if (continuousNodeArray.length) {
            var firstNode = continuousNodeArray[0],
                lastNode = continuousNodeArray[continuousNodeArray.length - 1],
                parentNode = firstNode.parentNode,
                provider = ko.bindingProvider['instance'],
                preprocessNode = provider['preprocessNode'];

            if (preprocessNode) {
                invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node, nextNodeInRange) {
                    var nodePreviousSibling = node.previousSibling;
                    var newNodes = preprocessNode.call(provider, node);
                    if (newNodes) {
                        if (node === firstNode)
                            firstNode = newNodes[0] || nextNodeInRange;
                        if (node === lastNode)
                            lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
                    }
                });

                // Because preprocessNode can change the nodes, including the first and last nodes, update continuousNodeArray to match.
                // We need the full set, including inner nodes, because the unmemoize step might remove the first node (and so the real
                // first node needs to be in the array).
                continuousNodeArray.length = 0;
                if (!firstNode) { // preprocessNode might have removed all the nodes, in which case there's nothing left to do
                    return;
                }
                if (firstNode === lastNode) {
                    continuousNodeArray.push(firstNode);
                } else {
                    continuousNodeArray.push(firstNode, lastNode);
                    ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                }
            }

            // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
            // whereas a regular applyBindings won't introduce new memoized nodes
            invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                if (node.nodeType === 1 || node.nodeType === 8)
                    ko.applyBindings(bindingContext, node);
            });
            invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                if (node.nodeType === 1 || node.nodeType === 8)
                    ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
            });

            // Make sure any changes done by applyBindings or unmemoize are reflected in the array
            ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
        }
    }

    function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
        return nodeOrNodeArray.nodeType ? nodeOrNodeArray
                                        : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0]
                                        : null;
    }

    function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
        options = options || {};
        var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
        var templateDocument = (firstTargetNode || template || {}).ownerDocument;
        var templateEngineToUse = (options['templateEngine'] || _templateEngine);
        ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
        var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);

        // Loosely check result is an array of DOM nodes
        if ((typeof renderedNodesArray.length != "number") || (renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number"))
            throw new Error("Template engine must return an array of DOM nodes");

        var haveAddedNodesToParent = false;
        switch (renderMode) {
            case "replaceChildren":
                ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "replaceNode":
                ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "ignoreTargetNode": break;
            default:
                throw new Error("Unknown renderMode: " + renderMode);
        }

        if (haveAddedNodesToParent) {
            activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
            if (options['afterRender'])
                ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
        }

        return renderedNodesArray;
    }

    function resolveTemplateName(template, data, context) {
        // The template can be specified as:
        if (ko.isObservable(template)) {
            // 1. An observable, with string value
            return template();
        } else if (typeof template === 'function') {
            // 2. A function of (data, context) returning a string
            return template(data, context);
        } else {
            // 3. A string
            return template;
        }
    }

    ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
        options = options || {};
        if ((options['templateEngine'] || _templateEngine) == undefined)
            throw new Error("Set a template engine before calling renderTemplate");
        renderMode = renderMode || "replaceChildren";

        if (targetNodeOrNodeArray) {
            var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

            var whenToDispose = function () { return (!firstTargetNode) || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode); }; // Passive disposal (on next evaluation)
            var activelyDisposeWhenNodeIsRemoved = (firstTargetNode && renderMode == "replaceNode") ? firstTargetNode.parentNode : firstTargetNode;

            return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
                function () {
                    // Ensure we've got a proper binding context to work with
                    var bindingContext = (dataOrBindingContext && (dataOrBindingContext instanceof ko.bindingContext))
                        ? dataOrBindingContext
                        : new ko.bindingContext(dataOrBindingContext, null, null, null, { "exportDependencies": true });

                    var templateName = resolveTemplateName(template, bindingContext['$data'], bindingContext),
                        renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);

                    if (renderMode == "replaceNode") {
                        targetNodeOrNodeArray = renderedNodesArray;
                        firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                    }
                },
                null,
                { disposeWhen: whenToDispose, disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved }
            );
        } else {
            // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
            return ko.memoization.memoize(function (domNode) {
                ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
            });
        }
    };

    ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
        // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
        // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
        var arrayItemContext;

        // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
        var executeTemplateForArrayItem = function (arrayValue, index) {
            // Support selecting template as a function of the data being rendered
            arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function(context) {
                context['$index'] = index;
            });

            var templateName = resolveTemplateName(template, arrayValue, arrayItemContext);
            return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
        }

        // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
        var activateBindingsCallback = function(arrayValue, addedNodesArray, index) {
            activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
            if (options['afterRender'])
                options['afterRender'](addedNodesArray, arrayValue);

            // release the "cache" variable, so that it can be collected by
            // the GC when its value isn't used from within the bindings anymore.
            arrayItemContext = null;
        };

        return ko.dependentObservable(function () {
            var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
            // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
            ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);

        }, null, { disposeWhenNodeIsRemoved: targetNode });
    };

    var templateComputedDomDataKey = ko.utils.domData.nextKey();
    function disposeOldComputedAndStoreNewOne(element, newComputed) {
        var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
        if (oldComputed && (typeof(oldComputed.dispose) == 'function'))
            oldComputed.dispose();
        ko.utils.domData.set(element, templateComputedDomDataKey, (newComputed && newComputed.isActive()) ? newComputed : undefined);
    }

    ko.bindingHandlers['template'] = {
        'init': function(element, valueAccessor) {
            // Support anonymous templates
            var bindingValue = ko.utils.unwrapObservable(valueAccessor());
            if (typeof bindingValue == "string" || bindingValue['name']) {
                // It's a named template - clear the element
                ko.virtualElements.emptyNode(element);
            } else if ('nodes' in bindingValue) {
                // We've been given an array of DOM nodes. Save them as the template source.
                // There is no known use case for the node array being an observable array (if the output
                // varies, put that behavior *into* your template - that's what templates are for), and
                // the implementation would be a mess, so assert that it's not observable.
                var nodes = bindingValue['nodes'] || [];
                if (ko.isObservable(nodes)) {
                    throw new Error('The "nodes" option must be a plain, non-observable array.');
                }
                var container = ko.utils.moveCleanedNodesToContainerElement(nodes); // This also removes the nodes from their current parent
                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
            } else {
                // It's an anonymous template - store the element contents, then clear the element
                var templateNodes = ko.virtualElements.childNodes(element),
                    container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent
                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
            }
            return { 'controlsDescendantBindings': true };
        },
        'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor(),
                options = ko.utils.unwrapObservable(value),
                shouldDisplay = true,
                templateComputed = null,
                templateName;

            if (typeof options == "string") {
                templateName = value;
                options = {};
            } else {
                templateName = options['name'];

                // Support "if"/"ifnot" conditions
                if ('if' in options)
                    shouldDisplay = ko.utils.unwrapObservable(options['if']);
                if (shouldDisplay && 'ifnot' in options)
                    shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);
            }

            if ('foreach' in options) {
                // Render once for each data point (treating data set as empty if shouldDisplay==false)
                var dataArray = (shouldDisplay && options['foreach']) || [];
                templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
            } else if (!shouldDisplay) {
                ko.virtualElements.emptyNode(element);
            } else {
                // Render once for this single data point (or use the viewModel if no data was provided)
                var innerBindingContext = ('data' in options) ?
                    bindingContext.createStaticChildContext(options['data'], options['as']) :  // Given an explitit 'data' value, we create a child binding context for it
                    bindingContext;                                                        // Given no explicit 'data' value, we retain the same binding context
                templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
            }

            // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
            disposeOldComputedAndStoreNewOne(element, templateComputed);
        }
    };

    // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
    ko.expressionRewriting.bindingRewriteValidators['template'] = function(bindingValue) {
        var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);

        if ((parsedBindingValue.length == 1) && parsedBindingValue[0]['unknown'])
            return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

        if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name"))
            return null; // Named templates can be rewritten, so return "no error"
        return "This template engine does not support anonymous templates nested within its templates";
    };

    ko.virtualElements.allowedBindings['template'] = true;
})();

ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
ko.exportSymbol('renderTemplate', ko.renderTemplate);
// Go through the items that have been added and deleted and try to find matches between them.
ko.utils.findMovesInArrayComparison = function (left, right, limitFailedCompares) {
    if (left.length && right.length) {
        var failedCompares, l, r, leftItem, rightItem;
        for (failedCompares = l = 0; (!limitFailedCompares || failedCompares < limitFailedCompares) && (leftItem = left[l]); ++l) {
            for (r = 0; rightItem = right[r]; ++r) {
                if (leftItem['value'] === rightItem['value']) {
                    leftItem['moved'] = rightItem['index'];
                    rightItem['moved'] = leftItem['index'];
                    right.splice(r, 1);         // This item is marked as moved; so remove it from right list
                    failedCompares = r = 0;     // Reset failed compares count because we're checking for consecutive failures
                    break;
                }
            }
            failedCompares += r;
        }
    }
};

ko.utils.compareArrays = (function () {
    var statusNotInOld = 'added', statusNotInNew = 'deleted';

    // Simple calculation based on Levenshtein distance.
    function compareArrays(oldArray, newArray, options) {
        // For backward compatibility, if the third arg is actually a bool, interpret
        // it as the old parameter 'dontLimitMoves'. Newer code should use { dontLimitMoves: true }.
        options = (typeof options === 'boolean') ? { 'dontLimitMoves': options } : (options || {});
        oldArray = oldArray || [];
        newArray = newArray || [];

        if (oldArray.length < newArray.length)
            return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);
        else
            return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
    }

    function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
        var myMin = Math.min,
            myMax = Math.max,
            editDistanceMatrix = [],
            smlIndex, smlIndexMax = smlArray.length,
            bigIndex, bigIndexMax = bigArray.length,
            compareRange = (bigIndexMax - smlIndexMax) || 1,
            maxDistance = smlIndexMax + bigIndexMax + 1,
            thisRow, lastRow,
            bigIndexMaxForRow, bigIndexMinForRow;

        for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
            lastRow = thisRow;
            editDistanceMatrix.push(thisRow = []);
            bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
            bigIndexMinForRow = myMax(0, smlIndex - 1);
            for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                if (!bigIndex)
                    thisRow[bigIndex] = smlIndex + 1;
                else if (!smlIndex)  // Top row - transform empty array into new array via additions
                    thisRow[bigIndex] = bigIndex + 1;
                else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1])
                    thisRow[bigIndex] = lastRow[bigIndex - 1];                  // copy value (no edit)
                else {
                    var northDistance = lastRow[bigIndex] || maxDistance;       // not in big (deletion)
                    var westDistance = thisRow[bigIndex - 1] || maxDistance;    // not in small (addition)
                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                }
            }
        }

        var editScript = [], meMinusOne, notInSml = [], notInBig = [];
        for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
            meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
            if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex-1]) {
                notInSml.push(editScript[editScript.length] = {     // added
                    'status': statusNotInSml,
                    'value': bigArray[--bigIndex],
                    'index': bigIndex });
            } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                notInBig.push(editScript[editScript.length] = {     // deleted
                    'status': statusNotInBig,
                    'value': smlArray[--smlIndex],
                    'index': smlIndex });
            } else {
                --bigIndex;
                --smlIndex;
                if (!options['sparse']) {
                    editScript.push({
                        'status': "retained",
                        'value': bigArray[bigIndex] });
                }
            }
        }

        // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
        // smlIndexMax keeps the time complexity of this algorithm linear.
        ko.utils.findMovesInArrayComparison(notInBig, notInSml, !options['dontLimitMoves'] && smlIndexMax * 10);

        return editScript.reverse();
    }

    return compareArrays;
})();

ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);
(function () {
    // Objective:
    // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
    //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
    // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
    //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
    //   previously mapped - retain those nodes, and just insert/delete other ones

    // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
    // You can use this, for example, to activate bindings on those nodes.

    function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
        // Map this array value inside a dependentObservable so we re-map when any dependency changes
        var mappedNodes = [];
        var dependentObservable = ko.dependentObservable(function() {
            var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || [];

            // On subsequent evaluations, just replace the previously-inserted DOM nodes
            if (mappedNodes.length > 0) {
                ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
                if (callbackAfterAddingNodes)
                    ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
            }

            // Replace the contents of the mappedNodes array, thereby updating the record
            // of which nodes would be deleted if valueToMap was itself later removed
            mappedNodes.length = 0;
            ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
        }, null, { disposeWhenNodeIsRemoved: containerNode, disposeWhen: function() { return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes); } });
        return { mappedNodes : mappedNodes, dependentObservable : (dependentObservable.isActive() ? dependentObservable : undefined) };
    }

    var lastMappingResultDomDataKey = ko.utils.domData.nextKey(),
        deletedItemDummyValue = ko.utils.domData.nextKey();

    ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
        // Compare the provided array against the previous one
        array = array || [];
        options = options || {};
        var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
        var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
        var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) { return x.arrayEntry; });
        var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);

        // Build the new mapping result
        var newMappingResult = [];
        var lastMappingResultIndex = 0;
        var newMappingResultIndex = 0;

        var nodesToDelete = [];
        var itemsToProcess = [];
        var itemsForBeforeRemoveCallbacks = [];
        var itemsForMoveCallbacks = [];
        var itemsForAfterAddCallbacks = [];
        var mapData;

        function itemMovedOrRetained(editScriptIndex, oldPosition) {
            mapData = lastMappingResult[oldPosition];
            if (newMappingResultIndex !== oldPosition)
                itemsForMoveCallbacks[editScriptIndex] = mapData;
            // Since updating the index might change the nodes, do so before calling fixUpContinuousNodeArray
            mapData.indexObservable(newMappingResultIndex++);
            ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
            newMappingResult.push(mapData);
            itemsToProcess.push(mapData);
        }

        function callCallback(callback, items) {
            if (callback) {
                for (var i = 0, n = items.length; i < n; i++) {
                    if (items[i]) {
                        ko.utils.arrayForEach(items[i].mappedNodes, function(node) {
                            callback(node, i, items[i].arrayEntry);
                        });
                    }
                }
            }
        }

        for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
            movedIndex = editScriptItem['moved'];
            switch (editScriptItem['status']) {
                case "deleted":
                    if (movedIndex === undefined) {
                        mapData = lastMappingResult[lastMappingResultIndex];

                        // Stop tracking changes to the mapping for these nodes
                        if (mapData.dependentObservable) {
                            mapData.dependentObservable.dispose();
                            mapData.dependentObservable = undefined;
                        }

                        // Queue these nodes for later removal
                        if (ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode).length) {
                            if (options['beforeRemove']) {
                                newMappingResult.push(mapData);
                                itemsToProcess.push(mapData);
                                if (mapData.arrayEntry === deletedItemDummyValue) {
                                    mapData = null;
                                } else {
                                    itemsForBeforeRemoveCallbacks[i] = mapData;
                                }
                            }
                            if (mapData) {
                                nodesToDelete.push.apply(nodesToDelete, mapData.mappedNodes);
                            }
                        }
                    }
                    lastMappingResultIndex++;
                    break;

                case "retained":
                    itemMovedOrRetained(i, lastMappingResultIndex++);
                    break;

                case "added":
                    if (movedIndex !== undefined) {
                        itemMovedOrRetained(i, movedIndex);
                    } else {
                        mapData = { arrayEntry: editScriptItem['value'], indexObservable: ko.observable(newMappingResultIndex++) };
                        newMappingResult.push(mapData);
                        itemsToProcess.push(mapData);
                        if (!isFirstExecution)
                            itemsForAfterAddCallbacks[i] = mapData;
                    }
                    break;
            }
        }

        // Store a copy of the array items we just considered so we can difference it next time
        ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);

        // Call beforeMove first before any changes have been made to the DOM
        callCallback(options['beforeMove'], itemsForMoveCallbacks);

        // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
        ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);

        // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
        for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
            // Get nodes for newly added items
            if (!mapData.mappedNodes)
                ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));

            // Put nodes in the right place if they aren't there already
            for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                if (node !== nextNode)
                    ko.virtualElements.insertAfter(domNode, node, lastNode);
            }

            // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
            if (!mapData.initialized && callbackAfterAddingNodes) {
                callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                mapData.initialized = true;
            }
        }

        // If there's a beforeRemove callback, call it after reordering.
        // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
        // some sort of animation, which is why we first reorder the nodes that will be removed. If the
        // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
        // Perhaps we'll make that change in the future if this scenario becomes more common.
        callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);

        // Replace the stored values of deleted items with a dummy value. This provides two benefits: it marks this item
        // as already "removed" so we won't call beforeRemove for it again, and it ensures that the item won't match up
        // with an actual item in the array and appear as "retained" or "moved".
        for (i = 0; i < itemsForBeforeRemoveCallbacks.length; ++i) {
            if (itemsForBeforeRemoveCallbacks[i]) {
                itemsForBeforeRemoveCallbacks[i].arrayEntry = deletedItemDummyValue;
            }
        }

        // Finally call afterMove and afterAdd callbacks
        callCallback(options['afterMove'], itemsForMoveCallbacks);
        callCallback(options['afterAdd'], itemsForAfterAddCallbacks);
    }
})();

ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
ko.nativeTemplateEngine = function () {
    this['allowTemplateRewriting'] = false;
}

ko.nativeTemplateEngine.prototype = new ko.templateEngine();
ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
    var useNodesIfAvailable = !(ko.utils.ieVersion < 9), // IE<9 cloneNode doesn't work properly
        templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
        templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

    if (templateNodes) {
        return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
    } else {
        var templateText = templateSource['text']();
        return ko.utils.parseHtmlFragment(templateText, templateDocument);
    }
};

ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
ko.setTemplateEngine(ko.nativeTemplateEngine.instance);

ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
(function() {
    ko.jqueryTmplTemplateEngine = function () {
        // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
        // doesn't expose a version number, so we have to infer it.
        // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
        // which KO internally refers to as version "2", so older versions are no longer detected.
        var jQueryTmplVersion = this.jQueryTmplVersion = (function() {
            if (!jQueryInstance || !(jQueryInstance['tmpl']))
                return 0;
            // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
            try {
                if (jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                    // Since 1.0.0pre, custom tags should append markup to an array called "__"
                    return 2; // Final version of jquery.tmpl
                }
            } catch(ex) { /* Apparently not the version we were looking for */ }

            return 1; // Any older version that we don't support
        })();

        function ensureHasReferencedJQueryTemplates() {
            if (jQueryTmplVersion < 2)
                throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
        }

        function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
            return jQueryInstance['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
        }

        this['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
            templateDocument = templateDocument || document;
            options = options || {};
            ensureHasReferencedJQueryTemplates();

            // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
            var precompiled = templateSource['data']('precompiled');
            if (!precompiled) {
                var templateText = templateSource['text']() || "";
                // Wrap in "with($whatever.koBindingContext) { ... }"
                templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";

                precompiled = jQueryInstance['template'](null, templateText);
                templateSource['data']('precompiled', precompiled);
            }

            var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
            var jQueryTemplateOptions = jQueryInstance['extend']({ 'koBindingContext': bindingContext }, options['templateOptions']);

            var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
            resultNodes['appendTo'](templateDocument.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

            jQueryInstance['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
            return resultNodes;
        };

        this['createJavaScriptEvaluatorBlock'] = function(script) {
            return "{{ko_code ((function() { return " + script + " })()) }}";
        };

        this['addTemplate'] = function(templateName, templateMarkup) {
            document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
        };

        if (jQueryTmplVersion > 0) {
            jQueryInstance['tmpl']['tag']['ko_code'] = {
                open: "__.push($1 || '');"
            };
            jQueryInstance['tmpl']['tag']['ko_with'] = {
                open: "with($1) {",
                close: "} "
            };
        }
    };

    ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
    ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;

    // Use this one by default *only if jquery.tmpl is referenced*
    var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
    if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0)
        ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);

    ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
})();
}));
}());
})();


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(2);
var humanize = __webpack_require__(30);
var Job = /** @class */ (function () {
    function Job(job) {
        var _this = this;
        this.id = ko.observable(job.id);
        this.name = ko.observable(job.name);
        this.status = ko.observable(job.status);
        this.log = ko.observable(job.log);
        this.category = ko.observable(job.category);
        this.size = ko.observable(job.size);
        this.transferred = ko.observable(job.transferred);
        this.percent = ko.computed({
            owner: this,
            read: function () {
                return _this.transferred() / _this.size() * 100;
            }
        });
        this.transferredText = ko.computed({
            owner: this,
            read: function () {
                return humanize.filesize(_this.transferred()) + " / " + humanize.filesize(_this.size());
            }
        });
        console.log("Constructing job");
    }
    Job.prototype.canPause = function () {
        return this.status() === "downloading" || this.status() === "queued";
    };
    Job.prototype.pause = function () {
        console.log("Pausing job" + this.name());
        axios_1.default.get('/api/pause/' + this.id())
            .then(function (response) {
            console.log(response.data);
        });
    };
    Job.prototype.canResume = function () {
        return this.status() === "paused";
    };
    Job.prototype.resume = function () {
        console.log("Resumeing job" + this.name());
        axios_1.default.get('/api/resume/' + this.id())
            .then(function (response) {
            console.log(response.data);
        });
    };
    Job.prototype.canRetry = function () {
        return this.status() === "failed";
    };
    Job.prototype.retry = function () {
        console.log("Retrying job" + this.name());
        axios_1.default.get('/api/retry/' + this.id())
            .then(function (response) {
            console.log(response.data);
        });
    };
    return Job;
}());
exports.Job = Job;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(14);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(8);
axios.CancelToken = __webpack_require__(28);
axios.isCancel = __webpack_require__(7);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(29);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(23);
var dispatchRequest = __webpack_require__(24);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(6);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(25);
var isCancel = __webpack_require__(7);
var defaults = __webpack_require__(1);
var isAbsoluteURL = __webpack_require__(26);
var combineURLs = __webpack_require__(27);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(8);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `humanize` variable.
  var previousHumanize = root.humanize;

  var humanize = {};

  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = humanize;
    }
    exports.humanize = humanize;
  } else {
    if (typeof define === 'function' && define.amd) {
      define('humanize', function() {
        return humanize;
      });
    }
    root.humanize = humanize;
  }

  humanize.noConflict = function() {
    root.humanize = previousHumanize;
    return this;
  };

  humanize.pad = function(str, count, padChar, type) {
    str += '';
    if (!padChar) {
      padChar = ' ';
    } else if (padChar.length > 1) {
      padChar = padChar.charAt(0);
    }
    type = (type === undefined) ? 'left' : 'right';

    if (type === 'right') {
      while (str.length < count) {
        str = str + padChar;
      }
    } else {
      // default to left
      while (str.length < count) {
        str = padChar + str;
      }
    }

    return str;
  };

  // gets current unix time
  humanize.time = function() {
    return new Date().getTime() / 1000;
  };

  /**
   * PHP-inspired date
   */

                        /*  jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec */
  var dayTableCommon = [ 0,   0,  31,  59,  90, 120, 151, 181, 212, 243, 273, 304, 334 ];
  var dayTableLeap   = [ 0,   0,  31,  60,  91, 121, 152, 182, 213, 244, 274, 305, 335 ];
  // var mtable_common[13] = {  0,  31,  28,  31,  30,  31,  30,  31,  31,  30,  31,  30,  31 };
  // static int ml_table_leap[13]   = {  0,  31,  29,  31,  30,  31,  30,  31,  31,  30,  31,  30,  31 };


  humanize.date = function(format, timestamp) {
    var jsdate = ((timestamp === undefined) ? new Date() : // Not provided
                  (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
                  new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
                 );

    var formatChr = /\\?([a-z])/gi;
    var formatChrCb = function (t, s) {
      return f[t] ? f[t]() : s;
    };

    var shortDayTxt = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthTxt = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var f = {
      /* Day */
      // Day of month w/leading 0; 01..31
      d: function () { return humanize.pad(f.j(), 2, '0'); },

      // Shorthand day name; Mon..Sun
      D: function () { return f.l().slice(0, 3); },

      // Day of month; 1..31
      j: function () { return jsdate.getDate(); },

      // Full day name; Monday..Sunday
      l: function () { return shortDayTxt[f.w()]; },

      // ISO-8601 day of week; 1[Mon]..7[Sun]
      N: function () { return f.w() || 7; },

      // Ordinal suffix for day of month; st, nd, rd, th
      S: function () {
        var j = f.j();
        return j > 4 && j < 21 ? 'th' : {1: 'st', 2: 'nd', 3: 'rd'}[j % 10] || 'th';
      },

      // Day of week; 0[Sun]..6[Sat]
      w: function () { return jsdate.getDay(); },

      // Day of year; 0..365
      z: function () {
        return (f.L() ? dayTableLeap[f.n()] : dayTableCommon[f.n()]) + f.j() - 1;
      },

      /* Week */
      // ISO-8601 week number
      W: function () {
        // days between midweek of this week and jan 4
        // (f.z() - f.N() + 1 + 3.5) - 3
        var midWeekDaysFromJan4 = f.z() - f.N() + 1.5;
        // 1 + number of weeks + rounded week
        return humanize.pad(1 + Math.floor(Math.abs(midWeekDaysFromJan4) / 7) + (midWeekDaysFromJan4 % 7 > 3.5 ? 1 : 0), 2, '0');
      },

      /* Month */
      // Full month name; January..December
      F: function () { return monthTxt[jsdate.getMonth()]; },

      // Month w/leading 0; 01..12
      m: function () { return humanize.pad(f.n(), 2, '0'); },

      // Shorthand month name; Jan..Dec
      M: function () { return f.F().slice(0, 3); },

      // Month; 1..12
      n: function () { return jsdate.getMonth() + 1; },

      // Days in month; 28..31
      t: function () { return (new Date(f.Y(), f.n(), 0)).getDate(); },

      /* Year */
      // Is leap year?; 0 or 1
      L: function () { return new Date(f.Y(), 1, 29).getMonth() === 1 ? 1 : 0; },

      // ISO-8601 year
      o: function () {
        var n = f.n();
        var W = f.W();
        return f.Y() + (n === 12 && W < 9 ? -1 : n === 1 && W > 9);
      },

      // Full year; e.g. 1980..2010
      Y: function () { return jsdate.getFullYear(); },

      // Last two digits of year; 00..99
      y: function () { return (String(f.Y())).slice(-2); },

      /* Time */
      // am or pm
      a: function () { return jsdate.getHours() > 11 ? 'pm' : 'am'; },

      // AM or PM
      A: function () { return f.a().toUpperCase(); },

      // Swatch Internet time; 000..999
      B: function () {
        var unixTime = jsdate.getTime() / 1000;
        var secondsPassedToday = unixTime % 86400 + 3600; // since it's based off of UTC+1
        if (secondsPassedToday < 0) { secondsPassedToday += 86400; }
        var beats = ((secondsPassedToday) / 86.4) % 1000;
        if (unixTime < 0) {
          return Math.ceil(beats);
        }
        return Math.floor(beats);
      },

      // 12-Hours; 1..12
      g: function () { return f.G() % 12 || 12; },

      // 24-Hours; 0..23
      G: function () { return jsdate.getHours(); },

      // 12-Hours w/leading 0; 01..12
      h: function () { return humanize.pad(f.g(), 2, '0'); },

      // 24-Hours w/leading 0; 00..23
      H: function () { return humanize.pad(f.G(), 2, '0'); },

      // Minutes w/leading 0; 00..59
      i: function () { return humanize.pad(jsdate.getMinutes(), 2, '0'); },

      // Seconds w/leading 0; 00..59
      s: function () { return humanize.pad(jsdate.getSeconds(), 2, '0'); },

      // Microseconds; 000000-999000
      u: function () { return humanize.pad(jsdate.getMilliseconds() * 1000, 6, '0'); },

      // Whether or not the date is in daylight savings time
      /*
      I: function () {
        // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
        // If they are not equal, then DST is observed.
        var Y = f.Y();
        return 0 + ((new Date(Y, 0) - Date.UTC(Y, 0)) !== (new Date(Y, 6) - Date.UTC(Y, 6)));
      },
      */

      // Difference to GMT in hour format; e.g. +0200
      O: function () {
        var tzo = jsdate.getTimezoneOffset();
        var tzoNum = Math.abs(tzo);
        return (tzo > 0 ? '-' : '+') + humanize.pad(Math.floor(tzoNum / 60) * 100 + tzoNum % 60, 4, '0');
      },

      // Difference to GMT w/colon; e.g. +02:00
      P: function () {
        var O = f.O();
        return (O.substr(0, 3) + ':' + O.substr(3, 2));
      },

      // Timezone offset in seconds (-43200..50400)
      Z: function () { return -jsdate.getTimezoneOffset() * 60; },

      // Full Date/Time, ISO-8601 date
      c: function () { return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb); },

      // RFC 2822
      r: function () { return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb); },

      // Seconds since UNIX epoch
      U: function () { return jsdate.getTime() / 1000 || 0; }
    };    

    return format.replace(formatChr, formatChrCb);
  };


  /**
   * format number by adding thousands separaters and significant digits while rounding
   */
  humanize.numberFormat = function(number, decimals, decPoint, thousandsSep) {
    decimals = isNaN(decimals) ? 2 : Math.abs(decimals);
    decPoint = (decPoint === undefined) ? '.' : decPoint;
    thousandsSep = (thousandsSep === undefined) ? ',' : thousandsSep;

    var sign = number < 0 ? '-' : '';
    number = Math.abs(+number || 0);

    var intPart = parseInt(number.toFixed(decimals), 10) + '';
    var j = intPart.length > 3 ? intPart.length % 3 : 0;

    return sign + (j ? intPart.substr(0, j) + thousandsSep : '') + intPart.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep) + (decimals ? decPoint + Math.abs(number - intPart).toFixed(decimals).slice(2) : '');
  };


  /**
   * For dates that are the current day or within one day, return 'today', 'tomorrow' or 'yesterday', as appropriate.
   * Otherwise, format the date using the passed in format string.
   *
   * Examples (when 'today' is 17 Feb 2007):
   * 16 Feb 2007 becomes yesterday.
   * 17 Feb 2007 becomes today.
   * 18 Feb 2007 becomes tomorrow.
   * Any other day is formatted according to given argument or the DATE_FORMAT setting if no argument is given.
   */
  humanize.naturalDay = function(timestamp, format) {
    timestamp = (timestamp === undefined) ? humanize.time() : timestamp;
    format = (format === undefined) ? 'Y-m-d' : format;

    var oneDay = 86400;
    var d = new Date();
    var today = (new Date(d.getFullYear(), d.getMonth(), d.getDate())).getTime() / 1000;

    if (timestamp < today && timestamp >= today - oneDay) {
      return 'yesterday';
    } else if (timestamp >= today && timestamp < today + oneDay) {
      return 'today';
    } else if (timestamp >= today + oneDay && timestamp < today + 2 * oneDay) {
      return 'tomorrow';
    }

    return humanize.date(format, timestamp);
  };

  /**
   * returns a string representing how many seconds, minutes or hours ago it was or will be in the future
   * Will always return a relative time, most granular of seconds to least granular of years. See unit tests for more details
   */
  humanize.relativeTime = function(timestamp) {
    timestamp = (timestamp === undefined) ? humanize.time() : timestamp;

    var currTime = humanize.time();
    var timeDiff = currTime - timestamp;

    // within 2 seconds
    if (timeDiff < 2 && timeDiff > -2) {
      return (timeDiff >= 0 ? 'just ' : '') + 'now';
    }

    // within a minute
    if (timeDiff < 60 && timeDiff > -60) {
      return (timeDiff >= 0 ? Math.floor(timeDiff) + ' seconds ago' : 'in ' + Math.floor(-timeDiff) + ' seconds');
    }

    // within 2 minutes
    if (timeDiff < 120 && timeDiff > -120) {
      return (timeDiff >= 0 ? 'about a minute ago' : 'in about a minute');
    }

    // within an hour
    if (timeDiff < 3600 && timeDiff > -3600) {
      return (timeDiff >= 0 ? Math.floor(timeDiff / 60) + ' minutes ago' : 'in ' + Math.floor(-timeDiff / 60) + ' minutes');
    }

    // within 2 hours
    if (timeDiff < 7200 && timeDiff > -7200) {
      return (timeDiff >= 0 ? 'about an hour ago' : 'in about an hour');
    }

    // within 24 hours
    if (timeDiff < 86400 && timeDiff > -86400) {
      return (timeDiff >= 0 ? Math.floor(timeDiff / 3600) + ' hours ago' : 'in ' + Math.floor(-timeDiff / 3600) + ' hours');
    }

    // within 2 days
    var days2 = 2 * 86400;
    if (timeDiff < days2 && timeDiff > -days2) {
      return (timeDiff >= 0 ? '1 day ago' : 'in 1 day');
    }

    // within 29 days
    var days29 = 29 * 86400;
    if (timeDiff < days29 && timeDiff > -days29) {
      return (timeDiff >= 0 ? Math.floor(timeDiff / 86400) + ' days ago' : 'in ' + Math.floor(-timeDiff / 86400) + ' days');
    }

    // within 60 days
    var days60 = 60 * 86400;
    if (timeDiff < days60 && timeDiff > -days60) {
      return (timeDiff >= 0 ? 'about a month ago' : 'in about a month');
    }

    var currTimeYears = parseInt(humanize.date('Y', currTime), 10);
    var timestampYears = parseInt(humanize.date('Y', timestamp), 10);
    var currTimeMonths = currTimeYears * 12 + parseInt(humanize.date('n', currTime), 10);
    var timestampMonths = timestampYears * 12 + parseInt(humanize.date('n', timestamp), 10);

    // within a year
    var monthDiff = currTimeMonths - timestampMonths;
    if (monthDiff < 12 && monthDiff > -12) {
      return (monthDiff >= 0 ? monthDiff + ' months ago' : 'in ' + (-monthDiff) + ' months');
    }

    var yearDiff = currTimeYears - timestampYears;
    if (yearDiff < 2 && yearDiff > -2) {
      return (yearDiff >= 0 ? 'a year ago' : 'in a year');
    }

    return (yearDiff >= 0 ? yearDiff + ' years ago' : 'in ' + (-yearDiff) + ' years');
  };

  /**
   * Converts an integer to its ordinal as a string.
   *
   * 1 becomes 1st
   * 2 becomes 2nd
   * 3 becomes 3rd etc
   */
  humanize.ordinal = function(number) {
    number = parseInt(number, 10);
    number = isNaN(number) ? 0 : number;
    var sign = number < 0 ? '-' : '';
    number = Math.abs(number);
    var tens = number % 100;

    return sign + number + (tens > 4 && tens < 21 ? 'th' : {1: 'st', 2: 'nd', 3: 'rd'}[number % 10] || 'th');
  };

  /**
   * Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).
   *
   * For example:
   * If value is 123456789, the output would be 117.7 MB.
   */
  humanize.filesize = function(filesize, kilo, decimals, decPoint, thousandsSep, suffixSep) {
    kilo = (kilo === undefined) ? 1024 : kilo;
    if (filesize <= 0) { return '0 bytes'; }
    if (filesize < kilo && decimals === undefined) { decimals = 0; }
    if (suffixSep === undefined) { suffixSep = ' '; }
    return humanize.intword(filesize, ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'], kilo, decimals, decPoint, thousandsSep, suffixSep);
  };

  /**
   * Formats the value like a 'human-readable' number (i.e. '13 K', '4.1 M', '102', etc).
   *
   * For example:
   * If value is 123456789, the output would be 117.7 M.
   */
  humanize.intword = function(number, units, kilo, decimals, decPoint, thousandsSep, suffixSep) {
    var humanized, unit;

    units = units || ['', 'K', 'M', 'B', 'T'],
    unit = units.length - 1,
    kilo = kilo || 1000,
    decimals = isNaN(decimals) ? 2 : Math.abs(decimals),
    decPoint = decPoint || '.',
    thousandsSep = thousandsSep || ',',
    suffixSep = suffixSep || '';

    for (var i=0; i < units.length; i++) {
      if (number < Math.pow(kilo, i+1)) {
        unit = i;
        break;
      }
    }
    humanized = number / Math.pow(kilo, unit);

    var suffix = units[unit] ? suffixSep + units[unit] : '';
    return humanize.numberFormat(humanized, decimals, decPoint, thousandsSep) + suffix;
  };

  /**
   * Replaces line breaks in plain text with appropriate HTML
   * A single newline becomes an HTML line break (<br />) and a new line followed by a blank line becomes a paragraph break (</p>).
   * 
   * For example:
   * If value is Joel\nis a\n\nslug, the output will be <p>Joel<br />is a</p><p>slug</p>
   */
  humanize.linebreaks = function(str) {
    // remove beginning and ending newlines
    str = str.replace(/^([\n|\r]*)/, '');
    str = str.replace(/([\n|\r]*)$/, '');

    // normalize all to \n
    str = str.replace(/(\r\n|\n|\r)/g, "\n");

    // any consecutive new lines more than 2 gets turned into p tags
    str = str.replace(/(\n{2,})/g, '</p><p>');

    // any that are singletons get turned into br
    str = str.replace(/\n/g, '<br />');
    return '<p>' + str + '</p>';
  };

  /**
   * Converts all newlines in a piece of plain text to HTML line breaks (<br />).
   */
  humanize.nl2br = function(str) {
    return str.replace(/(\r\n|\n|\r)/g, '<br />');
  };

  /**
   * Truncates a string if it is longer than the specified number of characters.
   * Truncated strings will end with a translatable ellipsis sequence ('…').
   */
  humanize.truncatechars = function(string, length) {
    if (string.length <= length) { return string; }
    return string.substr(0, length) + '…';
  };

  /**
   * Truncates a string after a certain number of words.
   * Newlines within the string will be removed.
   */
  humanize.truncatewords = function(string, numWords) {
    var words = string.split(' ');
    if (words.length < numWords) { return string; }
    return words.slice(0, numWords).join(' ') + '…';
  };

}).call(this);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzE5YTQwNTY4ZmJmM2JmOTY4ZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pvYi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHVtYW5pemUvaHVtYW5pemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6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QSx5Qzs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7OytDQ3ZMdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQyxFQUFFO0FBQzVELGtDQUFrQyx3REFBd0QsRUFBRTtBQUM1RixrQ0FBa0Msd0VBQXdFO0FBQzFHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHlCQUF5QjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJJQUEySSxtQ0FBbUM7QUFDOUssdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMklBQTJJLG1DQUFtQztBQUM5SztBQUNBLGdEQUFnRCxRQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxjQUFjOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9CO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGtCQUFrQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyw0QkFBNEI7QUFDNUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkZBQTJGLHdCQUF3QjtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUVBQW1FO0FBQ3BGO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RCwwQkFBMEI7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUMsb0RBQW9ELGNBQWM7QUFDbEUsa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixHQUFHOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMxOWE0MDU2OGZiZjNiZjk2OGZmIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmICFpc0FycmF5KG9iaikpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmICghd2luZG93LlhNTEh0dHBSZXF1ZXN0ICYmXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIga28gPSByZXF1aXJlKFwia25vY2tvdXRcIik7XG52YXIgam9iXzEgPSByZXF1aXJlKFwiLi9qb2JcIik7XG52YXIgYXhpb3NfMSA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbnZhciBNYWluVmlld01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1haW5WaWV3TW9kZWwoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuam9icyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgLy8gcmVmcmVzaCBub3cuLi5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgLy8gLi4gYW5kIGV2ZXJ5IDUgc2Vjb25kc1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVTdGF0dXMoKTsgfSwgNTAwMCk7XG4gICAgfVxuICAgIE1haW5WaWV3TW9kZWwucHJvdG90eXBlLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgYXhpb3NfMS5kZWZhdWx0LmdldCgnL2FwaS9zdGF0dXMnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc29uc2UpIHtcbiAgICAgICAgICAgIF90aGlzLmpvYnMucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICBfdGhpcy5oaXN0b3J5LnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgcmVzb25zZS5kYXRhLmpvYnMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYuc3RhdHVzID09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGlzdG9yeS5wdXNoKG5ldyBqb2JfMS5Kb2IodikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuam9icy5wdXNoKG5ldyBqb2JfMS5Kb2IodikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1haW5WaWV3TW9kZWwucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF4aW9zXzEuZGVmYXVsdC5nZXQoJy9hcGkvcmVmcmVzaCcpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFpblZpZXdNb2RlbDtcbn0oKSk7XG5leHBvcnRzLk1haW5WaWV3TW9kZWwgPSBNYWluVmlld01vZGVsO1xuO1xudmFyIHZtID0gbmV3IE1haW5WaWV3TW9kZWwoKTtcbi8vIHdpbmRvdy52bSA9IHZtO1xua28uYXBwbHlCaW5kaW5ncyh2bSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIEtub2Nrb3V0IEphdmFTY3JpcHQgbGlicmFyeSB2My40LjJcbiAqIChjKSBUaGUgS25vY2tvdXQuanMgdGVhbSAtIGh0dHA6Ly9rbm9ja291dGpzLmNvbS9cbiAqIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKi9cblxuKGZ1bmN0aW9uKCl7XG52YXIgREVCVUc9dHJ1ZTtcbihmdW5jdGlvbih1bmRlZmluZWQpe1xuICAgIC8vICgwLCBldmFsKSgndGhpcycpIGlzIGEgcm9idXN0IHdheSBvZiBnZXR0aW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG4gICAgLy8gRm9yIGRldGFpbHMsIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0MTE5OTg4L3JldHVybi10aGlzLTAtZXZhbHRoaXMvMTQxMjAwMjMjMTQxMjAwMjNcbiAgICB2YXIgd2luZG93ID0gdGhpcyB8fCAoMCwgZXZhbCkoJ3RoaXMnKSxcbiAgICAgICAgZG9jdW1lbnQgPSB3aW5kb3dbJ2RvY3VtZW50J10sXG4gICAgICAgIG5hdmlnYXRvciA9IHdpbmRvd1snbmF2aWdhdG9yJ10sXG4gICAgICAgIGpRdWVyeUluc3RhbmNlID0gd2luZG93W1wialF1ZXJ5XCJdLFxuICAgICAgICBKU09OID0gd2luZG93W1wiSlNPTlwiXTtcbihmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgLy8gU3VwcG9ydCB0aHJlZSBtb2R1bGUgbG9hZGluZyBzY2VuYXJpb3NcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICAgIC8vIFsxXSBBTUQgYW5vbnltb3VzIG1vZHVsZVxuICAgICAgICBkZWZpbmUoWydleHBvcnRzJywgJ3JlcXVpcmUnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gWzJdIENvbW1vbkpTL05vZGUuanNcbiAgICAgICAgZmFjdG9yeShtb2R1bGVbJ2V4cG9ydHMnXSB8fCBleHBvcnRzKTsgIC8vIG1vZHVsZS5leHBvcnRzIGlzIGZvciBOb2RlLmpzXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gWzNdIE5vIG1vZHVsZSBsb2FkZXIgKHBsYWluIDxzY3JpcHQ+IHRhZykgLSBwdXQgZGlyZWN0bHkgaW4gZ2xvYmFsIG5hbWVzcGFjZVxuICAgICAgICBmYWN0b3J5KHdpbmRvd1sna28nXSA9IHt9KTtcbiAgICB9XG59KGZ1bmN0aW9uKGtvRXhwb3J0cywgYW1kUmVxdWlyZSl7XG4vLyBJbnRlcm5hbGx5LCBhbGwgS08gb2JqZWN0cyBhcmUgYXR0YWNoZWQgdG8ga29FeHBvcnRzIChldmVuIHRoZSBub24tZXhwb3J0ZWQgb25lcyB3aG9zZSBuYW1lcyB3aWxsIGJlIG1pbmlmaWVkIGJ5IHRoZSBjbG9zdXJlIGNvbXBpbGVyKS5cbi8vIEluIHRoZSBmdXR1cmUsIHRoZSBmb2xsb3dpbmcgXCJrb1wiIHZhcmlhYmxlIG1heSBiZSBtYWRlIGRpc3RpbmN0IGZyb20gXCJrb0V4cG9ydHNcIiBzbyB0aGF0IHByaXZhdGUgb2JqZWN0cyBhcmUgbm90IGV4dGVybmFsbHkgcmVhY2hhYmxlLlxudmFyIGtvID0gdHlwZW9mIGtvRXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBrb0V4cG9ydHMgOiB7fTtcbi8vIEdvb2dsZSBDbG9zdXJlIENvbXBpbGVyIGhlbHBlcnMgKHVzZWQgb25seSB0byBtYWtlIHRoZSBtaW5pZmllZCBmaWxlIHNtYWxsZXIpXG5rby5leHBvcnRTeW1ib2wgPSBmdW5jdGlvbihrb1BhdGgsIG9iamVjdCkge1xuICAgIHZhciB0b2tlbnMgPSBrb1BhdGguc3BsaXQoXCIuXCIpO1xuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSwgXCJrb1wiIG1heSBiZWNvbWUgZGlzdGluY3QgZnJvbSBcImtvRXhwb3J0c1wiIChzbyB0aGF0IG5vbi1leHBvcnRlZCBvYmplY3RzIGFyZSBub3QgcmVhY2hhYmxlKVxuICAgIC8vIEF0IHRoYXQgcG9pbnQsIFwidGFyZ2V0XCIgd291bGQgYmUgc2V0IHRvOiAodHlwZW9mIGtvRXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiA/IGtvRXhwb3J0cyA6IGtvKVxuICAgIHZhciB0YXJnZXQgPSBrbztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKylcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W3Rva2Vuc1tpXV07XG4gICAgdGFyZ2V0W3Rva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1dID0gb2JqZWN0O1xufTtcbmtvLmV4cG9ydFByb3BlcnR5ID0gZnVuY3Rpb24ob3duZXIsIHB1YmxpY05hbWUsIG9iamVjdCkge1xuICAgIG93bmVyW3B1YmxpY05hbWVdID0gb2JqZWN0O1xufTtcbmtvLnZlcnNpb24gPSBcIjMuNC4yXCI7XG5cbmtvLmV4cG9ydFN5bWJvbCgndmVyc2lvbicsIGtvLnZlcnNpb24pO1xuLy8gRm9yIGFueSBvcHRpb25zIHRoYXQgbWF5IGFmZmVjdCB2YXJpb3VzIGFyZWFzIG9mIEtub2Nrb3V0IGFuZCBhcmVuJ3QgZGlyZWN0bHkgYXNzb2NpYXRlZCB3aXRoIGRhdGEgYmluZGluZy5cbmtvLm9wdGlvbnMgPSB7XG4gICAgJ2RlZmVyVXBkYXRlcyc6IGZhbHNlLFxuICAgICd1c2VPbmx5TmF0aXZlRXZlbnRzJzogZmFsc2Vcbn07XG5cbi8va28uZXhwb3J0U3ltYm9sKCdvcHRpb25zJywga28ub3B0aW9ucyk7ICAgLy8gJ29wdGlvbnMnIGlzbid0IG1pbmlmaWVkXG5rby51dGlscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gb2JqZWN0Rm9yRWFjaChvYmosIGFjdGlvbikge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbihwcm9wLCBvYmpbcHJvcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGZvcih2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZihzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKG9iaiwgcHJvdG8pIHtcbiAgICAgICAgb2JqLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHZhciBjYW5TZXRQcm90b3R5cGUgPSAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgdmFyIGNhblVzZVN5bWJvbHMgPSAhREVCVUcgJiYgdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJztcblxuICAgIC8vIFJlcHJlc2VudCB0aGUga25vd24gZXZlbnQgdHlwZXMgaW4gYSBjb21wYWN0IHdheSwgdGhlbiBhdCBydW50aW1lIHRyYW5zZm9ybSBpdCBpbnRvIGEgaGFzaCB3aXRoIGV2ZW50IG5hbWUgYXMga2V5IChmb3IgZmFzdCBsb29rdXApXG4gICAgdmFyIGtub3duRXZlbnRzID0ge30sIGtub3duRXZlbnRUeXBlc0J5RXZlbnROYW1lID0ge307XG4gICAgdmFyIGtleUV2ZW50VHlwZU5hbWUgPSAobmF2aWdhdG9yICYmIC9GaXJlZm94XFwvMi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpID8gJ0tleWJvYXJkRXZlbnQnIDogJ1VJRXZlbnRzJztcbiAgICBrbm93bkV2ZW50c1trZXlFdmVudFR5cGVOYW1lXSA9IFsna2V5dXAnLCAna2V5ZG93bicsICdrZXlwcmVzcyddO1xuICAgIGtub3duRXZlbnRzWydNb3VzZUV2ZW50cyddID0gWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2V1cCcsICdtb3VzZW1vdmUnLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZSddO1xuICAgIG9iamVjdEZvckVhY2goa25vd25FdmVudHMsIGZ1bmN0aW9uKGV2ZW50VHlwZSwga25vd25FdmVudHNGb3JUeXBlKSB7XG4gICAgICAgIGlmIChrbm93bkV2ZW50c0ZvclR5cGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGtub3duRXZlbnRzRm9yVHlwZS5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAga25vd25FdmVudFR5cGVzQnlFdmVudE5hbWVba25vd25FdmVudHNGb3JUeXBlW2ldXSA9IGV2ZW50VHlwZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBldmVudHNUaGF0TXVzdEJlUmVnaXN0ZXJlZFVzaW5nQXR0YWNoRXZlbnQgPSB7ICdwcm9wZXJ0eWNoYW5nZSc6IHRydWUgfTsgLy8gV29ya2Fyb3VuZCBmb3IgYW4gSUU5IGlzc3VlIC0gaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy80MDZcblxuICAgIC8vIERldGVjdCBJRSB2ZXJzaW9ucyBmb3IgYnVnIHdvcmthcm91bmRzICh1c2VzIElFIGNvbmRpdGlvbmFscywgbm90IFVBIHN0cmluZywgZm9yIHJvYnVzdG5lc3MpXG4gICAgLy8gTm90ZSB0aGF0LCBzaW5jZSBJRSAxMCBkb2VzIG5vdCBzdXBwb3J0IGNvbmRpdGlvbmFsIGNvbW1lbnRzLCB0aGUgZm9sbG93aW5nIGxvZ2ljIG9ubHkgZGV0ZWN0cyBJRSA8IDEwLlxuICAgIC8vIEN1cnJlbnRseSB0aGlzIGlzIGJ5IGRlc2lnbiwgc2luY2UgSUUgMTArIGJlaGF2ZXMgY29ycmVjdGx5IHdoZW4gdHJlYXRlZCBhcyBhIHN0YW5kYXJkIGJyb3dzZXIuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBmdXR1cmUgbmVlZCB0byBkZXRlY3Qgc3BlY2lmaWMgdmVyc2lvbnMgb2YgSUUxMCssIHdlIHdpbGwgYW1lbmQgdGhpcy5cbiAgICB2YXIgaWVWZXJzaW9uID0gZG9jdW1lbnQgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IDMsIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBpRWxlbXMgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2knKTtcblxuICAgICAgICAvLyBLZWVwIGNvbnN0cnVjdGluZyBjb25kaXRpb25hbCBIVE1MIGJsb2NrcyB1bnRpbCB3ZSBoaXQgb25lIHRoYXQgcmVzb2x2ZXMgdG8gYW4gZW1wdHkgZnJhZ21lbnRcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9ICc8IS0tW2lmIGd0IElFICcgKyAoKyt2ZXJzaW9uKSArICddPjxpPjwvaT48IVtlbmRpZl0tLT4nLFxuICAgICAgICAgICAgaUVsZW1zWzBdXG4gICAgICAgICkge31cbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPiA0ID8gdmVyc2lvbiA6IHVuZGVmaW5lZDtcbiAgICB9KCkpO1xuICAgIHZhciBpc0llNiA9IGllVmVyc2lvbiA9PT0gNixcbiAgICAgICAgaXNJZTcgPSBpZVZlcnNpb24gPT09IDc7XG5cbiAgICBmdW5jdGlvbiBpc0NsaWNrT25DaGVja2FibGVFbGVtZW50KGVsZW1lbnQsIGV2ZW50VHlwZSkge1xuICAgICAgICBpZiAoKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSAhPT0gXCJpbnB1dFwiKSB8fCAhZWxlbWVudC50eXBlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChldmVudFR5cGUudG9Mb3dlckNhc2UoKSAhPSBcImNsaWNrXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGlucHV0VHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgICAgICAgcmV0dXJuIChpbnB1dFR5cGUgPT0gXCJjaGVja2JveFwiKSB8fCAoaW5wdXRUeXBlID09IFwicmFkaW9cIik7XG4gICAgfVxuXG4gICAgLy8gRm9yIGRldGFpbHMgb24gdGhlIHBhdHRlcm4gZm9yIGNoYW5naW5nIG5vZGUgY2xhc3Nlc1xuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2tub2Nrb3V0L2tub2Nrb3V0L2lzc3Vlcy8xNTk3XG4gICAgdmFyIGNzc0NsYXNzTmFtZVJlZ2V4ID0gL1xcUysvZztcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZURvbU5vZGVDc3NDbGFzcyhub2RlLCBjbGFzc05hbWVzLCBzaG91bGRIYXZlQ2xhc3MpIHtcbiAgICAgICAgdmFyIGFkZE9yUmVtb3ZlRm47XG4gICAgICAgIGlmIChjbGFzc05hbWVzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUuY2xhc3NMaXN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGFkZE9yUmVtb3ZlRm4gPSBub2RlLmNsYXNzTGlzdFtzaG91bGRIYXZlQ2xhc3MgPyAnYWRkJyA6ICdyZW1vdmUnXTtcbiAgICAgICAgICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goY2xhc3NOYW1lcy5tYXRjaChjc3NDbGFzc05hbWVSZWdleCksIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRPclJlbW92ZUZuLmNhbGwobm9kZS5jbGFzc0xpc3QsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLmNsYXNzTmFtZVsnYmFzZVZhbCddID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIC8vIFNWRyB0YWcgLmNsYXNzTmFtZXMgaXMgYW4gU1ZHQW5pbWF0ZWRTdHJpbmcgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICB0b2dnbGVPYmplY3RDbGFzc1Byb3BlcnR5U3RyaW5nKG5vZGUuY2xhc3NOYW1lLCAnYmFzZVZhbCcsIGNsYXNzTmFtZXMsIHNob3VsZEhhdmVDbGFzcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vZGUuY2xhc3NOYW1lIG91Z2h0IHRvIGJlIGEgc3RyaW5nLlxuICAgICAgICAgICAgICAgIHRvZ2dsZU9iamVjdENsYXNzUHJvcGVydHlTdHJpbmcobm9kZSwgJ2NsYXNzTmFtZScsIGNsYXNzTmFtZXMsIHNob3VsZEhhdmVDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVPYmplY3RDbGFzc1Byb3BlcnR5U3RyaW5nKG9iaiwgcHJvcCwgY2xhc3NOYW1lcywgc2hvdWxkSGF2ZUNsYXNzKSB7XG4gICAgICAgIC8vIG9iai9wcm9wIGlzIGVpdGhlciBhIG5vZGUvJ2NsYXNzTmFtZScgb3IgYSBTVkdBbmltYXRlZFN0cmluZy8nYmFzZVZhbCcuXG4gICAgICAgIHZhciBjdXJyZW50Q2xhc3NOYW1lcyA9IG9ialtwcm9wXS5tYXRjaChjc3NDbGFzc05hbWVSZWdleCkgfHwgW107XG4gICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChjbGFzc05hbWVzLm1hdGNoKGNzc0NsYXNzTmFtZVJlZ2V4KSwgZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBrby51dGlscy5hZGRPclJlbW92ZUl0ZW0oY3VycmVudENsYXNzTmFtZXMsIGNsYXNzTmFtZSwgc2hvdWxkSGF2ZUNsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9ialtwcm9wXSA9IGN1cnJlbnRDbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0OiBbJ2F1dGhlbnRpY2l0eV90b2tlbicsIC9eX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4oXy4qKT8kL10sXG5cbiAgICAgICAgYXJyYXlGb3JFYWNoOiBmdW5jdGlvbiAoYXJyYXksIGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgYWN0aW9uKGFycmF5W2ldLCBpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhcnJheUluZGV4T2Y6IGZ1bmN0aW9uIChhcnJheSwgaXRlbSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIGl0ZW0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID09PSBpdGVtKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICBhcnJheUZpcnN0OiBmdW5jdGlvbiAoYXJyYXksIHByZWRpY2F0ZSwgcHJlZGljYXRlT3duZXIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChwcmVkaWNhdGVPd25lciwgYXJyYXlbaV0sIGkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbaV07XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBhcnJheVJlbW92ZUl0ZW06IGZ1bmN0aW9uIChhcnJheSwgaXRlbVRvUmVtb3ZlKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBrby51dGlscy5hcnJheUluZGV4T2YoYXJyYXksIGl0ZW1Ub1JlbW92ZSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhcnJheUdldERpc3RpbmN0VmFsdWVzOiBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXkgfHwgW107XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChrby51dGlscy5hcnJheUluZGV4T2YocmVzdWx0LCBhcnJheVtpXSkgPCAwKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5TWFwOiBmdW5jdGlvbiAoYXJyYXksIG1hcHBpbmcpIHtcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXkgfHwgW107XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtYXBwaW5nKGFycmF5W2ldLCBpKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5RmlsdGVyOiBmdW5jdGlvbiAoYXJyYXksIHByZWRpY2F0ZSkge1xuICAgICAgICAgICAgYXJyYXkgPSBhcnJheSB8fCBbXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaV0sIGkpKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhcnJheVtpXSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5UHVzaEFsbDogZnVuY3Rpb24gKGFycmF5LCB2YWx1ZXNUb1B1c2gpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXNUb1B1c2ggaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoLmFwcGx5KGFycmF5LCB2YWx1ZXNUb1B1c2gpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdmFsdWVzVG9QdXNoLmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZXNUb1B1c2hbaV0pO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZE9yUmVtb3ZlSXRlbTogZnVuY3Rpb24oYXJyYXksIHZhbHVlLCBpbmNsdWRlZCkge1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nRW50cnlJbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihrby51dGlscy5wZWVrT2JzZXJ2YWJsZShhcnJheSksIHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0VudHJ5SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVkKVxuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlZClcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGV4aXN0aW5nRW50cnlJbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuU2V0UHJvdG90eXBlOiBjYW5TZXRQcm90b3R5cGUsXG5cbiAgICAgICAgZXh0ZW5kOiBleHRlbmQsXG5cbiAgICAgICAgc2V0UHJvdG90eXBlT2Y6IHNldFByb3RvdHlwZU9mLFxuXG4gICAgICAgIHNldFByb3RvdHlwZU9mT3JFeHRlbmQ6IGNhblNldFByb3RvdHlwZSA/IHNldFByb3RvdHlwZU9mIDogZXh0ZW5kLFxuXG4gICAgICAgIG9iamVjdEZvckVhY2g6IG9iamVjdEZvckVhY2gsXG5cbiAgICAgICAgb2JqZWN0TWFwOiBmdW5jdGlvbihzb3VyY2UsIG1hcHBpbmcpIHtcbiAgICAgICAgICAgIGlmICghc291cmNlKVxuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gbWFwcGluZyhzb3VyY2VbcHJvcF0sIHByb3AsIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfSxcblxuICAgICAgICBlbXB0eURvbU5vZGU6IGZ1bmN0aW9uIChkb21Ob2RlKSB7XG4gICAgICAgICAgICB3aGlsZSAoZG9tTm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAga28ucmVtb3ZlTm9kZShkb21Ob2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdmVDbGVhbmVkTm9kZXNUb0NvbnRhaW5lckVsZW1lbnQ6IGZ1bmN0aW9uKG5vZGVzKSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgaXQncyBhIHJlYWwgYXJyYXksIGFzIHdlJ3JlIGFib3V0IHRvIHJlcGFyZW50IHRoZSBub2RlcyBhbmRcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlIHVuZGVybHlpbmcgY29sbGVjdGlvbiB0byBjaGFuZ2Ugd2hpbGUgd2UncmUgZG9pbmcgdGhhdC5cbiAgICAgICAgICAgIHZhciBub2Rlc0FycmF5ID0ga28udXRpbHMubWFrZUFycmF5KG5vZGVzKTtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZURvY3VtZW50ID0gKG5vZGVzQXJyYXlbMF0gJiYgbm9kZXNBcnJheVswXS5vd25lckRvY3VtZW50KSB8fCBkb2N1bWVudDtcblxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRlbXBsYXRlRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG5vZGVzQXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtvLmNsZWFuTm9kZShub2Rlc0FycmF5W2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsb25lTm9kZXM6IGZ1bmN0aW9uIChub2Rlc0FycmF5LCBzaG91bGRDbGVhbk5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG5vZGVzQXJyYXkubGVuZ3RoLCBuZXdOb2Rlc0FycmF5ID0gW107IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVkTm9kZSA9IG5vZGVzQXJyYXlbaV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIG5ld05vZGVzQXJyYXkucHVzaChzaG91bGRDbGVhbk5vZGVzID8ga28uY2xlYW5Ob2RlKGNsb25lZE5vZGUpIDogY2xvbmVkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3Tm9kZXNBcnJheTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXREb21Ob2RlQ2hpbGRyZW46IGZ1bmN0aW9uIChkb21Ob2RlLCBjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBrby51dGlscy5lbXB0eURvbU5vZGUoZG9tTm9kZSk7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGRvbU5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVwbGFjZURvbU5vZGVzOiBmdW5jdGlvbiAobm9kZVRvUmVwbGFjZU9yTm9kZUFycmF5LCBuZXdOb2Rlc0FycmF5KSB7XG4gICAgICAgICAgICB2YXIgbm9kZXNUb1JlcGxhY2VBcnJheSA9IG5vZGVUb1JlcGxhY2VPck5vZGVBcnJheS5ub2RlVHlwZSA/IFtub2RlVG9SZXBsYWNlT3JOb2RlQXJyYXldIDogbm9kZVRvUmVwbGFjZU9yTm9kZUFycmF5O1xuICAgICAgICAgICAgaWYgKG5vZGVzVG9SZXBsYWNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnNlcnRpb25Qb2ludCA9IG5vZGVzVG9SZXBsYWNlQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGluc2VydGlvblBvaW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBuZXdOb2Rlc0FycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdOb2Rlc0FycmF5W2ldLCBpbnNlcnRpb25Qb2ludCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBub2Rlc1RvUmVwbGFjZUFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBrby5yZW1vdmVOb2RlKG5vZGVzVG9SZXBsYWNlQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBmaXhVcENvbnRpbnVvdXNOb2RlQXJyYXk6IGZ1bmN0aW9uKGNvbnRpbnVvdXNOb2RlQXJyYXksIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEJlZm9yZSBhY3Rpbmcgb24gYSBzZXQgb2Ygbm9kZXMgdGhhdCB3ZXJlIHByZXZpb3VzbHkgb3V0cHV0dGVkIGJ5IGEgdGVtcGxhdGUgZnVuY3Rpb24sIHdlIGhhdmUgdG8gcmVjb25jaWxlXG4gICAgICAgICAgICAvLyB0aGVtIGFnYWluc3Qgd2hhdCBpcyBpbiB0aGUgRE9NIHJpZ2h0IG5vdy4gSXQgbWF5IGJlIHRoYXQgc29tZSBvZiB0aGUgbm9kZXMgaGF2ZSBhbHJlYWR5IGJlZW4gcmVtb3ZlZCwgb3IgdGhhdFxuICAgICAgICAgICAgLy8gbmV3IG5vZGVzIG1pZ2h0IGhhdmUgYmVlbiBpbnNlcnRlZCBpbiB0aGUgbWlkZGxlLCBmb3IgZXhhbXBsZSBieSBhIGJpbmRpbmcuIEFsc28sIHRoZXJlIG1heSBwcmV2aW91c2x5IGhhdmUgYmVlblxuICAgICAgICAgICAgLy8gbGVhZGluZyBjb21tZW50IG5vZGVzIChjcmVhdGVkIGJ5IHJld3JpdHRlbiBzdHJpbmctYmFzZWQgdGVtcGxhdGVzKSB0aGF0IGhhdmUgc2luY2UgYmVlbiByZW1vdmVkIGR1cmluZyBiaW5kaW5nLlxuICAgICAgICAgICAgLy8gU28sIHRoaXMgZnVuY3Rpb24gdHJhbnNsYXRlcyB0aGUgb2xkIFwibWFwXCIgb3V0cHV0IGFycmF5IGludG8gaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIHNldCBvZiBjdXJyZW50IERPTSBub2Rlcy5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBSdWxlczpcbiAgICAgICAgICAgIC8vICAgW0FdIEFueSBsZWFkaW5nIG5vZGVzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICAgICAgICAgIC8vICAgICAgIFRoZXNlIG1vc3QgbGlrZWx5IGNvcnJlc3BvbmQgdG8gbWVtb2l6YXRpb24gbm9kZXMgdGhhdCB3ZXJlIGFscmVhZHkgcmVtb3ZlZCBkdXJpbmcgYmluZGluZ1xuICAgICAgICAgICAgLy8gICAgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rbm9ja291dC9rbm9ja291dC9wdWxsLzQ0MFxuICAgICAgICAgICAgLy8gICBbQl0gQW55IHRyYWlsaW5nIG5vZGVzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZSBzaG91bGQgYmUgaWdub3JlZFxuICAgICAgICAgICAgLy8gICAgICAgVGhpcyBwcmV2ZW50cyB0aGUgY29kZSBoZXJlIGZyb20gYWRkaW5nIHVucmVsYXRlZCBub2RlcyB0byB0aGUgYXJyYXkgd2hpbGUgcHJvY2Vzc2luZyBydWxlIFtDXVxuICAgICAgICAgICAgLy8gICAgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rbm9ja291dC9rbm9ja291dC9wdWxsLzE5MDNcbiAgICAgICAgICAgIC8vICAgW0NdIFdlIHdhbnQgdG8gb3V0cHV0IGEgY29udGludW91cyBzZXJpZXMgb2Ygbm9kZXMuIFNvLCBpZ25vcmUgYW55IG5vZGVzIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICAgIC8vICAgICAgIGFuZCBpbmNsdWRlIGFueSBub2RlcyB0aGF0IGhhdmUgYmVlbiBpbnNlcnRlZCBhbW9uZyB0aGUgcHJldmlvdXMgY29sbGVjdGlvblxuXG4gICAgICAgICAgICBpZiAoY29udGludW91c05vZGVBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgcGFyZW50IG5vZGUgY2FuIGJlIGEgdmlydHVhbCBlbGVtZW50OyBzbyBnZXQgdGhlIHJlYWwgcGFyZW50IG5vZGVcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gKHBhcmVudE5vZGUubm9kZVR5cGUgPT09IDggJiYgcGFyZW50Tm9kZS5wYXJlbnROb2RlKSB8fCBwYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgLy8gUnVsZSBbQV1cbiAgICAgICAgICAgICAgICB3aGlsZSAoY29udGludW91c05vZGVBcnJheS5sZW5ndGggJiYgY29udGludW91c05vZGVBcnJheVswXS5wYXJlbnROb2RlICE9PSBwYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51b3VzTm9kZUFycmF5LnNwbGljZSgwLCAxKTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1bGUgW0JdXG4gICAgICAgICAgICAgICAgd2hpbGUgKGNvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoID4gMSAmJiBjb250aW51b3VzTm9kZUFycmF5W2NvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gcGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludW91c05vZGVBcnJheS5sZW5ndGgtLTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1bGUgW0NdXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IGNvbnRpbnVvdXNOb2RlQXJyYXlbMF0sIGxhc3QgPSBjb250aW51b3VzTm9kZUFycmF5W2NvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2Ugd2l0aCB0aGUgYWN0dWFsIG5ldyBjb250aW51b3VzIG5vZGUgc2V0XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVvdXNOb2RlQXJyYXkucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVvdXNOb2RlQXJyYXkucHVzaChsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGludW91c05vZGVBcnJheTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRPcHRpb25Ob2RlU2VsZWN0aW9uU3RhdGU6IGZ1bmN0aW9uIChvcHRpb25Ob2RlLCBpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAvLyBJRTYgc29tZXRpbWVzIHRocm93cyBcInVua25vd24gZXJyb3JcIiBpZiB5b3UgdHJ5IHRvIHdyaXRlIHRvIC5zZWxlY3RlZCBkaXJlY3RseSwgd2hlcmVhcyBGaXJlZm94IHN0cnVnZ2xlcyB3aXRoIHNldEF0dHJpYnV0ZS4gUGljayBvbmUgYmFzZWQgb24gYnJvd3Nlci5cbiAgICAgICAgICAgIGlmIChpZVZlcnNpb24gPCA3KVxuICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5zZWxlY3RlZCA9IGlzU2VsZWN0ZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RyaW5nVHJpbTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcnIDpcbiAgICAgICAgICAgICAgICBzdHJpbmcudHJpbSA/XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZy50cmltKCkgOlxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcudG9TdHJpbmcoKS5yZXBsYWNlKC9eW1xcc1xceGEwXSt8W1xcc1xceGEwXSskL2csICcnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzdHJpbmdTdGFydHNXaXRoOiBmdW5jdGlvbiAoc3RyaW5nLCBzdGFydHNXaXRoKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChzdGFydHNXaXRoLmxlbmd0aCA+IHN0cmluZy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc3RhcnRzV2l0aC5sZW5ndGgpID09PSBzdGFydHNXaXRoO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRvbU5vZGVJc0NvbnRhaW5lZEJ5OiBmdW5jdGlvbiAobm9kZSwgY29udGFpbmVkQnlOb2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gY29udGFpbmVkQnlOb2RlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDExKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gRml4ZXMgaXNzdWUgIzExNjIgLSBjYW4ndCB1c2Ugbm9kZS5jb250YWlucyBmb3IgZG9jdW1lbnQgZnJhZ21lbnRzIG9uIElFOFxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lZEJ5Tm9kZS5jb250YWlucylcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVkQnlOb2RlLmNvbnRhaW5zKG5vZGUubm9kZVR5cGUgPT09IDMgPyBub2RlLnBhcmVudE5vZGUgOiBub2RlKTtcbiAgICAgICAgICAgIGlmIChjb250YWluZWRCeU5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjb250YWluZWRCeU5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiAxNikgPT0gMTY7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9IGNvbnRhaW5lZEJ5Tm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gISFub2RlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudDogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBrby51dGlscy5kb21Ob2RlSXNDb250YWluZWRCeShub2RlLCBub2RlLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhbnlEb21Ob2RlSXNBdHRhY2hlZFRvRG9jdW1lbnQ6IGZ1bmN0aW9uKG5vZGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gISFrby51dGlscy5hcnJheUZpcnN0KG5vZGVzLCBrby51dGlscy5kb21Ob2RlSXNBdHRhY2hlZFRvRG9jdW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRhZ05hbWVMb3dlcjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gRm9yIEhUTUwgZWxlbWVudHMsIHRhZ05hbWUgd2lsbCBhbHdheXMgYmUgdXBwZXIgY2FzZTsgZm9yIFhIVE1MIGVsZW1lbnRzLCBpdCdsbCBiZSBsb3dlciBjYXNlLlxuICAgICAgICAgICAgLy8gUG9zc2libGUgZnV0dXJlIG9wdGltaXphdGlvbjogSWYgd2Uga25vdyBpdCdzIGFuIGVsZW1lbnQgZnJvbSBhbiBYSFRNTCBkb2N1bWVudCAobm90IEhUTUwpLFxuICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBkbyB0aGUgLnRvTG93ZXJDYXNlKCkgYXMgaXQgd2lsbCBhbHdheXMgYmUgbG93ZXIgY2FzZSBhbnl3YXkuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LnRhZ05hbWUgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2F0Y2hGdW5jdGlvbkVycm9yczogZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4ga29bJ29uRXJyb3InXSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGtvWydvbkVycm9yJ10gJiYga29bJ29uRXJyb3InXShlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IDogZGVsZWdhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGtvLnV0aWxzLmNhdGNoRnVuY3Rpb25FcnJvcnMoaGFuZGxlciksIHRpbWVvdXQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmVyRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAga29bJ29uRXJyb3InXSAmJiBrb1snb25FcnJvciddKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBrby51dGlscy5jYXRjaEZ1bmN0aW9uRXJyb3JzKGhhbmRsZXIpO1xuXG4gICAgICAgICAgICB2YXIgbXVzdFVzZUF0dGFjaEV2ZW50ID0gaWVWZXJzaW9uICYmIGV2ZW50c1RoYXRNdXN0QmVSZWdpc3RlcmVkVXNpbmdBdHRhY2hFdmVudFtldmVudFR5cGVdO1xuICAgICAgICAgICAgaWYgKCFrby5vcHRpb25zWyd1c2VPbmx5TmF0aXZlRXZlbnRzJ10gJiYgIW11c3RVc2VBdHRhY2hFdmVudCAmJiBqUXVlcnlJbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlKGVsZW1lbnQpWydiaW5kJ10oZXZlbnRUeXBlLCB3cmFwcGVkSGFuZGxlcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFtdXN0VXNlQXR0YWNoRXZlbnQgJiYgdHlwZW9mIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgd3JhcHBlZEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmF0dGFjaEV2ZW50ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0YWNoRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7IHdyYXBwZWRIYW5kbGVyLmNhbGwoZWxlbWVudCwgZXZlbnQpOyB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudE5hbWUgPSBcIm9uXCIgKyBldmVudFR5cGU7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChhdHRhY2hFdmVudE5hbWUsIGF0dGFjaEV2ZW50SGFuZGxlcik7XG5cbiAgICAgICAgICAgICAgICAvLyBJRSBkb2VzIG5vdCBkaXNwb3NlIGF0dGFjaEV2ZW50IGhhbmRsZXJzIGF1dG9tYXRpY2FsbHkgKHVubGlrZSB3aXRoIGFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICAgICAgLy8gc28gdG8gYXZvaWQgbGVha3MsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZW0gbWFudWFsbHkuIFNlZSBidWcgIzg1NlxuICAgICAgICAgICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soZWxlbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoYXR0YWNoRXZlbnROYW1lLCBhdHRhY2hFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYWRkRXZlbnRMaXN0ZW5lciBvciBhdHRhY2hFdmVudFwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0cmlnZ2VyRXZlbnQ6IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudFR5cGUpIHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudCBtdXN0IGJlIGEgRE9NIG5vZGUgd2hlbiBjYWxsaW5nIHRyaWdnZXJFdmVudFwiKTtcblxuICAgICAgICAgICAgLy8gRm9yIGNsaWNrIGV2ZW50cyBvbiBjaGVja2JveGVzIGFuZCByYWRpbyBidXR0b25zLCBqUXVlcnkgdG9nZ2xlcyB0aGUgZWxlbWVudCBjaGVja2VkIHN0YXRlICphZnRlciogdGhlXG4gICAgICAgICAgICAvLyBldmVudCBoYW5kbGVyIHJ1bnMgaW5zdGVhZCBvZiAqYmVmb3JlKi4gKFRoaXMgd2FzIGZpeGVkIGluIDEuOSBmb3IgY2hlY2tib3hlcyBidXQgbm90IGZvciByYWRpbyBidXR0b25zLilcbiAgICAgICAgICAgIC8vIElFIGRvZXNuJ3QgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIHdoZW4geW91IHRyaWdnZXIgdGhlIGNsaWNrIGV2ZW50IHVzaW5nIFwiZmlyZUV2ZW50XCIuXG4gICAgICAgICAgICAvLyBJbiBib3RoIGNhc2VzLCB3ZSdsbCB1c2UgdGhlIGNsaWNrIG1ldGhvZCBpbnN0ZWFkLlxuICAgICAgICAgICAgdmFyIHVzZUNsaWNrV29ya2Fyb3VuZCA9IGlzQ2xpY2tPbkNoZWNrYWJsZUVsZW1lbnQoZWxlbWVudCwgZXZlbnRUeXBlKTtcblxuICAgICAgICAgICAgaWYgKCFrby5vcHRpb25zWyd1c2VPbmx5TmF0aXZlRXZlbnRzJ10gJiYgalF1ZXJ5SW5zdGFuY2UgJiYgIXVzZUNsaWNrV29ya2Fyb3VuZCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlKGVsZW1lbnQpWyd0cmlnZ2VyJ10oZXZlbnRUeXBlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LmNyZWF0ZUV2ZW50ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5kaXNwYXRjaEV2ZW50ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRDYXRlZ29yeSA9IGtub3duRXZlbnRUeXBlc0J5RXZlbnROYW1lW2V2ZW50VHlwZV0gfHwgXCJIVE1MRXZlbnRzXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KGV2ZW50Q2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5pbml0RXZlbnQoZXZlbnRUeXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3VwcGxpZWQgZWxlbWVudCBkb2Vzbid0IHN1cHBvcnQgZGlzcGF0Y2hFdmVudFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlQ2xpY2tXb3JrYXJvdW5kICYmIGVsZW1lbnQuY2xpY2spIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmZpcmVFdmVudCAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5maXJlRXZlbnQoXCJvblwiICsgZXZlbnRUeXBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdHJpZ2dlcmluZyBldmVudHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW53cmFwT2JzZXJ2YWJsZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ga28uaXNPYnNlcnZhYmxlKHZhbHVlKSA/IHZhbHVlKCkgOiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBwZWVrT2JzZXJ2YWJsZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ga28uaXNPYnNlcnZhYmxlKHZhbHVlKSA/IHZhbHVlLnBlZWsoKSA6IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZURvbU5vZGVDc3NDbGFzczogdG9nZ2xlRG9tTm9kZUNzc0NsYXNzLFxuXG4gICAgICAgIHNldFRleHRDb250ZW50OiBmdW5jdGlvbihlbGVtZW50LCB0ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBpZiAoKHZhbHVlID09PSBudWxsKSB8fCAodmFsdWUgPT09IHVuZGVmaW5lZCkpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRoZXJlIHRvIGJlIGV4YWN0bHkgb25lIGNoaWxkOiBhIHRleHQgbm9kZS5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBjaGlsZHJlbiwgbW9yZSB0aGFuIG9uZSwgb3IgaWYgaXQncyBub3QgYSB0ZXh0IG5vZGUsXG4gICAgICAgICAgICAvLyB3ZSdsbCBjbGVhciBldmVyeXRoaW5nIGFuZCBjcmVhdGUgYSBzaW5nbGUgdGV4dCBub2RlLlxuICAgICAgICAgICAgdmFyIGlubmVyVGV4dE5vZGUgPSBrby52aXJ0dWFsRWxlbWVudHMuZmlyc3RDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghaW5uZXJUZXh0Tm9kZSB8fCBpbm5lclRleHROb2RlLm5vZGVUeXBlICE9IDMgfHwga28udmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nKGlubmVyVGV4dE5vZGUpKSB7XG4gICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlbihlbGVtZW50LCBbZWxlbWVudC5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbm5lclRleHROb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga28udXRpbHMuZm9yY2VSZWZyZXNoKGVsZW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEVsZW1lbnROYW1lOiBmdW5jdGlvbihlbGVtZW50LCBuYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lO1xuXG4gICAgICAgICAgICAvLyBXb3JrYXJvdW5kIElFIDYvNyBpc3N1ZVxuICAgICAgICAgICAgLy8gLSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzE5N1xuICAgICAgICAgICAgLy8gLSBodHRwOi8vd3d3Lm1hdHRzNDExLmNvbS9wb3N0L3NldHRpbmdfdGhlX25hbWVfYXR0cmlidXRlX2luX2llX2RvbS9cbiAgICAgICAgICAgIGlmIChpZVZlcnNpb24gPD0gNykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubWVyZ2VBdHRyaWJ1dGVzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCI8aW5wdXQgbmFtZT0nXCIgKyBlbGVtZW50Lm5hbWUgKyBcIicvPlwiKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlKSB7fSAvLyBGb3IgSUU5IHdpdGggZG9jIG1vZGUgXCJJRTkgU3RhbmRhcmRzXCIgYW5kIGJyb3dzZXIgbW9kZSBcIklFOSBDb21wYXRpYmlsaXR5IFZpZXdcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZvcmNlUmVmcmVzaDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgYW4gSUU5IHJlbmRlcmluZyBidWcgLSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzIwOVxuICAgICAgICAgICAgaWYgKGllVmVyc2lvbiA+PSA5KSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHRleHQgbm9kZXMgYW5kIGNvbW1lbnQgbm9kZXMgKG1vc3QgbGlrZWx5IHZpcnR1YWwgZWxlbWVudHMpLCB3ZSB3aWxsIGhhdmUgdG8gcmVmcmVzaCB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBub2RlLm5vZGVUeXBlID09IDEgPyBub2RlIDogbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLnN0eWxlKVxuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLnpvb20gPSBlbGVtLnN0eWxlLnpvb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW5zdXJlU2VsZWN0RWxlbWVudElzUmVuZGVyZWRDb3JyZWN0bHk6IGZ1bmN0aW9uKHNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIElFOSByZW5kZXJpbmcgYnVnIC0gaXQgZG9lc24ndCByZWxpYWJseSBkaXNwbGF5IGFsbCB0aGUgdGV4dCBpbiBkeW5hbWljYWxseS1hZGRlZCBzZWxlY3QgYm94ZXMgdW5sZXNzIHlvdSBmb3JjZSBpdCB0byByZS1yZW5kZXIgYnkgdXBkYXRpbmcgdGhlIHdpZHRoLlxuICAgICAgICAgICAgLy8gKFNlZSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzMxMiwgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81OTA4NDk0L3NlbGVjdC1vbmx5LXNob3dzLWZpcnN0LWNoYXItb2Ytc2VsZWN0ZWQtb3B0aW9uKVxuICAgICAgICAgICAgLy8gQWxzbyBmaXhlcyBJRTcgYW5kIElFOCBidWcgdGhhdCBjYXVzZXMgc2VsZWN0cyB0byBiZSB6ZXJvIHdpZHRoIGlmIGVuY2xvc2VkIGJ5ICdpZicgb3IgJ3dpdGgnLiAoU2VlIGlzc3VlICM4MzkpXG4gICAgICAgICAgICBpZiAoaWVWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBzZWxlY3RFbGVtZW50LnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQuc3R5bGUud2lkdGggPSBvcmlnaW5hbFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJhbmdlOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgICAgIG1pbiA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWluKTtcbiAgICAgICAgICAgIG1heCA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWF4KTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBtaW47IGkgPD0gbWF4OyBpKyspXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ha2VBcnJheTogZnVuY3Rpb24oYXJyYXlMaWtlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5TGlrZU9iamVjdC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhcnJheUxpa2VPYmplY3RbaV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlU3ltYm9sT3JTdHJpbmc6IGZ1bmN0aW9uKGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5Vc2VTeW1ib2xzID8gU3ltYm9sKGlkZW50aWZpZXIpIDogaWRlbnRpZmllcjtcbiAgICAgICAgfSxcblxuICAgICAgICBpc0llNiA6IGlzSWU2LFxuICAgICAgICBpc0llNyA6IGlzSWU3LFxuICAgICAgICBpZVZlcnNpb24gOiBpZVZlcnNpb24sXG5cbiAgICAgICAgZ2V0Rm9ybUZpZWxkczogZnVuY3Rpb24oZm9ybSwgZmllbGROYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRzID0ga28udXRpbHMubWFrZUFycmF5KGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGtvLnV0aWxzLm1ha2VBcnJheShmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIikpKTtcbiAgICAgICAgICAgIHZhciBpc01hdGNoaW5nRmllbGQgPSAodHlwZW9mIGZpZWxkTmFtZSA9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uKGZpZWxkKSB7IHJldHVybiBmaWVsZC5uYW1lID09PSBmaWVsZE5hbWUgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24oZmllbGQpIHsgcmV0dXJuIGZpZWxkTmFtZS50ZXN0KGZpZWxkLm5hbWUpIH07IC8vIFRyZWF0IGZpZWxkTmFtZSBhcyByZWdleCBvciBvYmplY3QgY29udGFpbmluZyBwcmVkaWNhdGVcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZmllbGRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2hpbmdGaWVsZChmaWVsZHNbaV0pKVxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goZmllbGRzW2ldKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZUpzb246IGZ1bmN0aW9uIChqc29uU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzb25TdHJpbmcgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGpzb25TdHJpbmcgPSBrby51dGlscy5zdHJpbmdUcmltKGpzb25TdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChqc29uU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChKU09OICYmIEpTT04ucGFyc2UpIC8vIFVzZSBuYXRpdmUgcGFyc2luZyB3aGVyZSBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBGdW5jdGlvbihcInJldHVybiBcIiArIGpzb25TdHJpbmcpKSgpOyAvLyBGYWxsYmFjayBvbiBsZXNzIHNhZmUgcGFyc2luZyBmb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBzdHJpbmdpZnlKc29uOiBmdW5jdGlvbiAoZGF0YSwgcmVwbGFjZXIsIHNwYWNlKSB7ICAgLy8gcmVwbGFjZXIgYW5kIHNwYWNlIGFyZSBvcHRpb25hbFxuICAgICAgICAgICAgaWYgKCFKU09OIHx8ICFKU09OLnN0cmluZ2lmeSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBKU09OLnN0cmluZ2lmeSgpLiBTb21lIGJyb3dzZXJzIChlLmcuLCBJRSA8IDgpIGRvbid0IHN1cHBvcnQgaXQgbmF0aXZlbHksIGJ1dCB5b3UgY2FuIG92ZXJjb21lIHRoaXMgYnkgYWRkaW5nIGEgc2NyaXB0IHJlZmVyZW5jZSB0byBqc29uMi5qcywgZG93bmxvYWRhYmxlIGZyb20gaHR0cDovL3d3dy5qc29uLm9yZy9qc29uMi5qc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGRhdGEpLCByZXBsYWNlciwgc3BhY2UpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBvc3RKc29uOiBmdW5jdGlvbiAodXJsT3JGb3JtLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBvcHRpb25zWydwYXJhbXMnXSB8fCB7fTtcbiAgICAgICAgICAgIHZhciBpbmNsdWRlRmllbGRzID0gb3B0aW9uc1snaW5jbHVkZUZpZWxkcyddIHx8IHRoaXMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3Q7XG4gICAgICAgICAgICB2YXIgdXJsID0gdXJsT3JGb3JtO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIGdpdmVuIGEgZm9ybSwgdXNlIGl0cyAnYWN0aW9uJyBVUkwgYW5kIHBpY2sgb3V0IGFueSByZXF1ZXN0ZWQgZmllbGQgdmFsdWVzXG4gICAgICAgICAgICBpZigodHlwZW9mIHVybE9yRm9ybSA9PSAnb2JqZWN0JykgJiYgKGtvLnV0aWxzLnRhZ05hbWVMb3dlcih1cmxPckZvcm0pID09PSBcImZvcm1cIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxGb3JtID0gdXJsT3JGb3JtO1xuICAgICAgICAgICAgICAgIHVybCA9IG9yaWdpbmFsRm9ybS5hY3Rpb247XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluY2x1ZGVGaWVsZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkcyA9IGtvLnV0aWxzLmdldEZvcm1GaWVsZHMob3JpZ2luYWxGb3JtLCBpbmNsdWRlRmllbGRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGZpZWxkcy5sZW5ndGggLSAxOyBqID49IDA7IGotLSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1tmaWVsZHNbal0ubmFtZV0gPSBmaWVsZHNbal0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShkYXRhKTtcbiAgICAgICAgICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gdXJsO1xuICAgICAgICAgICAgZm9ybS5tZXRob2QgPSBcInBvc3RcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gU2luY2UgJ2RhdGEnIHRoaXMgaXMgYSBtb2RlbCBvYmplY3QsIHdlIGluY2x1ZGUgYWxsIHByb3BlcnRpZXMgaW5jbHVkaW5nIHRob3NlIGluaGVyaXRlZCBmcm9tIGl0cyBwcm90b3R5cGVcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgaW5wdXQubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGtvLnV0aWxzLnN0cmluZ2lmeUpzb24oa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShkYXRhW2tleV0pKTtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iamVjdEZvckVhY2gocGFyYW1zLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgIGlucHV0Lm5hbWUgPSBrZXk7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgICAgIG9wdGlvbnNbJ3N1Ym1pdHRlciddID8gb3B0aW9uc1snc3VibWl0dGVyJ10oZm9ybSkgOiBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmb3JtKTsgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG59KCkpO1xuXG5rby5leHBvcnRTeW1ib2woJ3V0aWxzJywga28udXRpbHMpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheUZvckVhY2gnLCBrby51dGlscy5hcnJheUZvckVhY2gpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheUZpcnN0Jywga28udXRpbHMuYXJyYXlGaXJzdCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5RmlsdGVyJywga28udXRpbHMuYXJyYXlGaWx0ZXIpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzJywga28udXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlcyk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5SW5kZXhPZicsIGtvLnV0aWxzLmFycmF5SW5kZXhPZik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5TWFwJywga28udXRpbHMuYXJyYXlNYXApO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheVB1c2hBbGwnLCBrby51dGlscy5hcnJheVB1c2hBbGwpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheVJlbW92ZUl0ZW0nLCBrby51dGlscy5hcnJheVJlbW92ZUl0ZW0pO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5leHRlbmQnLCBrby51dGlscy5leHRlbmQpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5maWVsZHNJbmNsdWRlZFdpdGhKc29uUG9zdCcsIGtvLnV0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0KTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZ2V0Rm9ybUZpZWxkcycsIGtvLnV0aWxzLmdldEZvcm1GaWVsZHMpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5wZWVrT2JzZXJ2YWJsZScsIGtvLnV0aWxzLnBlZWtPYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMucG9zdEpzb24nLCBrby51dGlscy5wb3N0SnNvbik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnBhcnNlSnNvbicsIGtvLnV0aWxzLnBhcnNlSnNvbik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyJywga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5zdHJpbmdpZnlKc29uJywga28udXRpbHMuc3RyaW5naWZ5SnNvbik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnJhbmdlJywga28udXRpbHMucmFuZ2UpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3MnLCBrby51dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3MpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy50cmlnZ2VyRXZlbnQnLCBrby51dGlscy50cmlnZ2VyRXZlbnQpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy51bndyYXBPYnNlcnZhYmxlJywga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLm9iamVjdEZvckVhY2gnLCBrby51dGlscy5vYmplY3RGb3JFYWNoKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuYWRkT3JSZW1vdmVJdGVtJywga28udXRpbHMuYWRkT3JSZW1vdmVJdGVtKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuc2V0VGV4dENvbnRlbnQnLCBrby51dGlscy5zZXRUZXh0Q29udGVudCk7XG5rby5leHBvcnRTeW1ib2woJ3Vud3JhcCcsIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUpOyAvLyBDb252ZW5pZW50IHNob3J0aGFuZCwgYmVjYXVzZSB0aGlzIGlzIHVzZWQgc28gY29tbW9ubHlcblxuaWYgKCFGdW5jdGlvbi5wcm90b3R5cGVbJ2JpbmQnXSkge1xuICAgIC8vIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGlzIGEgc3RhbmRhcmQgcGFydCBvZiBFQ01BU2NyaXB0IDV0aCBFZGl0aW9uIChEZWNlbWJlciAyMDA5LCBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvcHVibGljYXRpb25zL2ZpbGVzL0VDTUEtU1QvRUNNQS0yNjIucGRmKVxuICAgIC8vIEluIGNhc2UgdGhlIGJyb3dzZXIgZG9lc24ndCBpbXBsZW1lbnQgaXQgbmF0aXZlbHksIHByb3ZpZGUgYSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uLiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBvbmUgaW4gcHJvdG90eXBlLmpzXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlWydiaW5kJ10gPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEZ1bmN0aW9uID0gdGhpcztcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb24uYXBwbHkob2JqZWN0LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXJ0aWFsQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gcGFydGlhbEFyZ3Muc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb24uYXBwbHkob2JqZWN0LCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5rby51dGlscy5kb21EYXRhID0gbmV3IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVuaXF1ZUlkID0gMDtcbiAgICB2YXIgZGF0YVN0b3JlS2V5RXhwYW5kb1Byb3BlcnR5TmFtZSA9IFwiX19rb19fXCIgKyAobmV3IERhdGUpLmdldFRpbWUoKTtcbiAgICB2YXIgZGF0YVN0b3JlID0ge307XG5cbiAgICBmdW5jdGlvbiBnZXRBbGwobm9kZSwgY3JlYXRlSWZOb3RGb3VuZCkge1xuICAgICAgICB2YXIgZGF0YVN0b3JlS2V5ID0gbm9kZVtkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lXTtcbiAgICAgICAgdmFyIGhhc0V4aXN0aW5nRGF0YVN0b3JlID0gZGF0YVN0b3JlS2V5ICYmIChkYXRhU3RvcmVLZXkgIT09IFwibnVsbFwiKSAmJiBkYXRhU3RvcmVbZGF0YVN0b3JlS2V5XTtcbiAgICAgICAgaWYgKCFoYXNFeGlzdGluZ0RhdGFTdG9yZSkge1xuICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBkYXRhU3RvcmVLZXkgPSBub2RlW2RhdGFTdG9yZUtleUV4cGFuZG9Qcm9wZXJ0eU5hbWVdID0gXCJrb1wiICsgdW5pcXVlSWQrKztcbiAgICAgICAgICAgIGRhdGFTdG9yZVtkYXRhU3RvcmVLZXldID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFTdG9yZVtkYXRhU3RvcmVLZXldO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKG5vZGUsIGtleSkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGFGb3JOb2RlID0gZ2V0QWxsKG5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBhbGxEYXRhRm9yTm9kZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogYWxsRGF0YUZvck5vZGVba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobm9kZSwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgYWN0dWFsbHkgY3JlYXRlIGEgbmV3IGRvbURhdGEga2V5IGlmIHdlIGFyZSBhY3R1YWxseSBkZWxldGluZyBhIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGdldEFsbChub2RlLCBmYWxzZSkgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGFGb3JOb2RlID0gZ2V0QWxsKG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgYWxsRGF0YUZvck5vZGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRhU3RvcmVLZXkgPSBub2RlW2RhdGFTdG9yZUtleUV4cGFuZG9Qcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgaWYgKGRhdGFTdG9yZUtleSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhU3RvcmVbZGF0YVN0b3JlS2V5XTtcbiAgICAgICAgICAgICAgICBub2RlW2RhdGFTdG9yZUtleUV4cGFuZG9Qcm9wZXJ0eU5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gRXhwb3NpbmcgXCJkaWQgY2xlYW5cIiBmbGFnIHB1cmVseSBzbyBzcGVjcyBjYW4gaW5mZXIgd2hldGhlciB0aGluZ3MgaGF2ZSBiZWVuIGNsZWFuZWQgdXAgYXMgaW50ZW5kZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBuZXh0S2V5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHVuaXF1ZUlkKyspICsgZGF0YVN0b3JlS2V5RXhwYW5kb1Byb3BlcnR5TmFtZTtcbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmRvbURhdGEnLCBrby51dGlscy5kb21EYXRhKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZG9tRGF0YS5jbGVhcicsIGtvLnV0aWxzLmRvbURhdGEuY2xlYXIpOyAvLyBFeHBvcnRpbmcgb25seSBzbyBzcGVjcyBjYW4gY2xlYXIgdXAgYWZ0ZXIgdGhlbXNlbHZlcyBmdWxseVxuXG5rby51dGlscy5kb21Ob2RlRGlzcG9zYWwgPSBuZXcgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZG9tRGF0YUtleSA9IGtvLnV0aWxzLmRvbURhdGEubmV4dEtleSgpO1xuICAgIHZhciBjbGVhbmFibGVOb2RlVHlwZXMgPSB7IDE6IHRydWUsIDg6IHRydWUsIDk6IHRydWUgfTsgICAgICAgLy8gRWxlbWVudCwgQ29tbWVudCwgRG9jdW1lbnRcbiAgICB2YXIgY2xlYW5hYmxlTm9kZVR5cGVzV2l0aERlc2NlbmRhbnRzID0geyAxOiB0cnVlLCA5OiB0cnVlIH07IC8vIEVsZW1lbnQsIERvY3VtZW50XG5cbiAgICBmdW5jdGlvbiBnZXREaXNwb3NlQ2FsbGJhY2tzQ29sbGVjdGlvbihub2RlLCBjcmVhdGVJZk5vdEZvdW5kKSB7XG4gICAgICAgIHZhciBhbGxEaXNwb3NlQ2FsbGJhY2tzID0ga28udXRpbHMuZG9tRGF0YS5nZXQobm9kZSwgZG9tRGF0YUtleSk7XG4gICAgICAgIGlmICgoYWxsRGlzcG9zZUNhbGxiYWNrcyA9PT0gdW5kZWZpbmVkKSAmJiBjcmVhdGVJZk5vdEZvdW5kKSB7XG4gICAgICAgICAgICBhbGxEaXNwb3NlQ2FsbGJhY2tzID0gW107XG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChub2RlLCBkb21EYXRhS2V5LCBhbGxEaXNwb3NlQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsRGlzcG9zZUNhbGxiYWNrcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVzdHJveUNhbGxiYWNrc0NvbGxlY3Rpb24obm9kZSkge1xuICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChub2RlLCBkb21EYXRhS2V5LCB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFuU2luZ2xlTm9kZShub2RlKSB7XG4gICAgICAgIC8vIFJ1biBhbGwgdGhlIGRpc3Bvc2UgY2FsbGJhY2tzXG4gICAgICAgIHZhciBjYWxsYmFja3MgPSBnZXREaXNwb3NlQ2FsbGJhY2tzQ29sbGVjdGlvbihub2RlLCBmYWxzZSk7XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTsgLy8gQ2xvbmUsIGFzIHRoZSBhcnJheSBtYXkgYmUgbW9kaWZpZWQgZHVyaW5nIGl0ZXJhdGlvbiAodHlwaWNhbGx5LCBjYWxsYmFja3Mgd2lsbCByZW1vdmUgdGhlbXNlbHZlcylcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXShub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVyYXNlIHRoZSBET00gZGF0YVxuICAgICAgICBrby51dGlscy5kb21EYXRhLmNsZWFyKG5vZGUpO1xuXG4gICAgICAgIC8vIFBlcmZvcm0gY2xlYW51cCBuZWVkZWQgYnkgZXh0ZXJuYWwgbGlicmFyaWVzIChjdXJyZW50bHkgb25seSBqUXVlcnksIGJ1dCBjYW4gYmUgZXh0ZW5kZWQpXG4gICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbFtcImNsZWFuRXh0ZXJuYWxEYXRhXCJdKG5vZGUpO1xuXG4gICAgICAgIC8vIENsZWFyIGFueSBpbW1lZGlhdGUtY2hpbGQgY29tbWVudCBub2RlcywgYXMgdGhlc2Ugd291bGRuJ3QgaGF2ZSBiZWVuIGZvdW5kIGJ5XG4gICAgICAgIC8vIG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIGluIGNsZWFuTm9kZSgpIChjb21tZW50IG5vZGVzIGFyZW4ndCBlbGVtZW50cylcbiAgICAgICAgaWYgKGNsZWFuYWJsZU5vZGVUeXBlc1dpdGhEZXNjZW5kYW50c1tub2RlLm5vZGVUeXBlXSlcbiAgICAgICAgICAgIGNsZWFuSW1tZWRpYXRlQ29tbWVudFR5cGVDaGlsZHJlbihub2RlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbkltbWVkaWF0ZUNvbW1lbnRUeXBlQ2hpbGRyZW4obm9kZVdpdGhDaGlsZHJlbikge1xuICAgICAgICB2YXIgY2hpbGQsIG5leHRDaGlsZCA9IG5vZGVXaXRoQ2hpbGRyZW4uZmlyc3RDaGlsZDtcbiAgICAgICAgd2hpbGUgKGNoaWxkID0gbmV4dENoaWxkKSB7XG4gICAgICAgICAgICBuZXh0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gOClcbiAgICAgICAgICAgICAgICBjbGVhblNpbmdsZU5vZGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkRGlzcG9zZUNhbGxiYWNrIDogZnVuY3Rpb24obm9kZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIHRydWUpLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZURpc3Bvc2VDYWxsYmFjayA6IGZ1bmN0aW9uKG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzQ29sbGVjdGlvbiA9IGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3NDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlSZW1vdmVJdGVtKGNhbGxiYWNrc0NvbGxlY3Rpb24sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzQ29sbGVjdGlvbi5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveUNhbGxiYWNrc0NvbGxlY3Rpb24obm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xlYW5Ob2RlIDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgLy8gRmlyc3QgY2xlYW4gdGhpcyBub2RlLCB3aGVyZSBhcHBsaWNhYmxlXG4gICAgICAgICAgICBpZiAoY2xlYW5hYmxlTm9kZVR5cGVzW25vZGUubm9kZVR5cGVdKSB7XG4gICAgICAgICAgICAgICAgY2xlYW5TaW5nbGVOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gLi4uIHRoZW4gaXRzIGRlc2NlbmRhbnRzLCB3aGVyZSBhcHBsaWNhYmxlXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFuYWJsZU5vZGVUeXBlc1dpdGhEZXNjZW5kYW50c1tub2RlLm5vZGVUeXBlXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgZGVzY2VuZGFudHMgbGlzdCBpbiBjYXNlIGl0IGNoYW5nZXMgZHVyaW5nIGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzY2VuZGFudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlQdXNoQWxsKGRlc2NlbmRhbnRzLCBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gZGVzY2VuZGFudHMubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5TaW5nbGVOb2RlKGRlc2NlbmRhbnRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVOb2RlIDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAga28uY2xlYW5Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJjbGVhbkV4dGVybmFsRGF0YVwiIDogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgc3VwcG9ydCBmb3IgalF1ZXJ5IGhlcmUgYmVjYXVzZSBpdCdzIHNvIGNvbW1vbmx5IHVzZWQuXG4gICAgICAgICAgICAvLyBNYW55IGpRdWVyeSBwbHVnaW5zIChpbmNsdWRpbmcganF1ZXJ5LnRtcGwpIHN0b3JlIGRhdGEgdXNpbmcgalF1ZXJ5J3MgZXF1aXZhbGVudCBvZiBkb21EYXRhXG4gICAgICAgICAgICAvLyBzbyBub3RpZnkgaXQgdG8gdGVhciBkb3duIGFueSByZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBub2RlICYgZGVzY2VuZGFudHMgaGVyZS5cbiAgICAgICAgICAgIGlmIChqUXVlcnlJbnN0YW5jZSAmJiAodHlwZW9mIGpRdWVyeUluc3RhbmNlWydjbGVhbkRhdGEnXSA9PSBcImZ1bmN0aW9uXCIpKVxuICAgICAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlWydjbGVhbkRhdGEnXShbbm9kZV0pO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5rby5jbGVhbk5vZGUgPSBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuY2xlYW5Ob2RlOyAvLyBTaG9ydGhhbmQgbmFtZSBmb3IgY29udmVuaWVuY2VcbmtvLnJlbW92ZU5vZGUgPSBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwucmVtb3ZlTm9kZTsgLy8gU2hvcnRoYW5kIG5hbWUgZm9yIGNvbnZlbmllbmNlXG5rby5leHBvcnRTeW1ib2woJ2NsZWFuTm9kZScsIGtvLmNsZWFuTm9kZSk7XG5rby5leHBvcnRTeW1ib2woJ3JlbW92ZU5vZGUnLCBrby5yZW1vdmVOb2RlKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZG9tTm9kZURpc3Bvc2FsJywga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjaycsIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2spO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5kb21Ob2RlRGlzcG9zYWwucmVtb3ZlRGlzcG9zZUNhbGxiYWNrJywga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFjayk7XG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBub25lID0gWzAsIFwiXCIsIFwiXCJdLFxuICAgICAgICB0YWJsZSA9IFsxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiXSxcbiAgICAgICAgdGJvZHkgPSBbMiwgXCI8dGFibGU+PHRib2R5PlwiLCBcIjwvdGJvZHk+PC90YWJsZT5cIl0sXG4gICAgICAgIHRyID0gWzMsIFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsIFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLFxuICAgICAgICBzZWxlY3QgPSBbMSwgXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsIFwiPC9zZWxlY3Q+XCJdLFxuICAgICAgICBsb29rdXAgPSB7XG4gICAgICAgICAgICAndGhlYWQnOiB0YWJsZSxcbiAgICAgICAgICAgICd0Ym9keSc6IHRhYmxlLFxuICAgICAgICAgICAgJ3Rmb290JzogdGFibGUsXG4gICAgICAgICAgICAndHInOiB0Ym9keSxcbiAgICAgICAgICAgICd0ZCc6IHRyLFxuICAgICAgICAgICAgJ3RoJzogdHIsXG4gICAgICAgICAgICAnb3B0aW9uJzogc2VsZWN0LFxuICAgICAgICAgICAgJ29wdGdyb3VwJzogc2VsZWN0XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWVkZWQgZm9yIG9sZCBJRSBpZiB5b3UncmUgKm5vdCogdXNpbmcgZWl0aGVyIGpRdWVyeSBvciBpbm5lclNoaXYuIERvZXNuJ3QgYWZmZWN0IG90aGVyIGNhc2VzLlxuICAgICAgICBtYXlSZXF1aXJlQ3JlYXRlRWxlbWVudEhhY2sgPSBrby51dGlscy5pZVZlcnNpb24gPD0gODtcblxuICAgIGZ1bmN0aW9uIGdldFdyYXAodGFncykge1xuICAgICAgICB2YXIgbSA9IHRhZ3MubWF0Y2goL148KFthLXpdKylbID5dLyk7XG4gICAgICAgIHJldHVybiAobSAmJiBsb29rdXBbbVsxXV0pIHx8IG5vbmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2ltcGxlSHRtbFBhcnNlKGh0bWwsIGRvY3VtZW50Q29udGV4dCkge1xuICAgICAgICBkb2N1bWVudENvbnRleHQgfHwgKGRvY3VtZW50Q29udGV4dCA9IGRvY3VtZW50KTtcbiAgICAgICAgdmFyIHdpbmRvd0NvbnRleHQgPSBkb2N1bWVudENvbnRleHRbJ3BhcmVudFdpbmRvdyddIHx8IGRvY3VtZW50Q29udGV4dFsnZGVmYXVsdFZpZXcnXSB8fCB3aW5kb3c7XG5cbiAgICAgICAgLy8gQmFzZWQgb24galF1ZXJ5J3MgXCJjbGVhblwiIGZ1bmN0aW9uLCBidXQgb25seSBhY2NvdW50aW5nIGZvciB0YWJsZS1yZWxhdGVkIGVsZW1lbnRzLlxuICAgICAgICAvLyBJZiB5b3UgaGF2ZSByZWZlcmVuY2VkIGpRdWVyeSwgdGhpcyB3b24ndCBiZSB1c2VkIGFueXdheSAtIEtPIHdpbGwgdXNlIGpRdWVyeSdzIFwiY2xlYW5cIiBmdW5jdGlvbiBkaXJlY3RseVxuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGVyZSdzIHN0aWxsIGFuIGlzc3VlIGluIElFIDwgOSB3aGVyZWJ5IGl0IHdpbGwgZGlzY2FyZCBjb21tZW50IG5vZGVzIHRoYXQgYXJlIHRoZSBmaXJzdCBjaGlsZCBvZlxuICAgICAgICAvLyBhIGRlc2NlbmRhbnQgbm9kZS4gRm9yIGV4YW1wbGU6IFwiPGRpdj48IS0tIG15Y29tbWVudCAtLT5hYmM8L2Rpdj5cIiB3aWxsIGdldCBwYXJzZWQgYXMgXCI8ZGl2PmFiYzwvZGl2PlwiXG4gICAgICAgIC8vIFRoaXMgd29uJ3QgYWZmZWN0IGFueW9uZSB3aG8gaGFzIHJlZmVyZW5jZWQgalF1ZXJ5LCBhbmQgdGhlcmUncyBhbHdheXMgdGhlIHdvcmthcm91bmQgb2YgaW5zZXJ0aW5nIGEgZHVtbXkgbm9kZVxuICAgICAgICAvLyAocG9zc2libHkgYSB0ZXh0IG5vZGUpIGluIGZyb250IG9mIHRoZSBjb21tZW50LiBTbywgS08gZG9lcyBub3QgYXR0ZW1wdCB0byB3b3JrYXJvdW5kIHRoaXMgSUUgaXNzdWUgYXV0b21hdGljYWxseSBhdCBwcmVzZW50LlxuXG4gICAgICAgIC8vIFRyaW0gd2hpdGVzcGFjZSwgb3RoZXJ3aXNlIGluZGV4T2Ygd29uJ3Qgd29yayBhcyBleHBlY3RlZFxuICAgICAgICB2YXIgdGFncyA9IGtvLnV0aWxzLnN0cmluZ1RyaW0oaHRtbCkudG9Mb3dlckNhc2UoKSwgZGl2ID0gZG9jdW1lbnRDb250ZXh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICB3cmFwID0gZ2V0V3JhcCh0YWdzKSxcbiAgICAgICAgICAgIGRlcHRoID0gd3JhcFswXTtcblxuICAgICAgICAvLyBHbyB0byBodG1sIGFuZCBiYWNrLCB0aGVuIHBlZWwgb2ZmIGV4dHJhIHdyYXBwZXJzXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBhbHdheXMgcHJlZml4IHdpdGggc29tZSBkdW1teSB0ZXh0LCBiZWNhdXNlIG90aGVyd2lzZSwgSUU8OSB3aWxsIHN0cmlwIG91dCBsZWFkaW5nIGNvbW1lbnQgbm9kZXMgaW4gZGVzY2VuZGFudHMuIFRvdGFsIG1hZG5lc3MuXG4gICAgICAgIHZhciBtYXJrdXAgPSBcImlnbm9yZWQ8ZGl2PlwiICsgd3JhcFsxXSArIGh0bWwgKyB3cmFwWzJdICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dDb250ZXh0Wydpbm5lclNoaXYnXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBpbm5lclNoaXYgaXMgZGVwcmVjYXRlZCBpbiBmYXZvdXIgb2YgaHRtbDVzaGl2LiBXZSBzaG91bGQgY29uc2lkZXIgYWRkaW5nXG4gICAgICAgICAgICAvLyBzdXBwb3J0IGZvciBodG1sNXNoaXYgKGV4Y2VwdCBpZiBubyBleHBsaWNpdCBzdXBwb3J0IGlzIG5lZWRlZCwgZS5nLiwgaWYgaHRtbDVzaGl2XG4gICAgICAgICAgICAvLyBzb21laG93IHNoaW1zIHRoZSBuYXRpdmUgQVBJcyBzbyBpdCBqdXN0IHdvcmtzIGFueXdheSlcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh3aW5kb3dDb250ZXh0Wydpbm5lclNoaXYnXShtYXJrdXApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChtYXlSZXF1aXJlQ3JlYXRlRWxlbWVudEhhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbXktZWxlbWVudCcpIHRyaWNrIHRvIGVuYWJsZSBjdXN0b20gZWxlbWVudHMgaW4gSUU2LThcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHdvcmtzIGlmIHdlIGFzc2lnbiBpbm5lckhUTUwgb24gYW4gZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhhdCBkb2N1bWVudC5cbiAgICAgICAgICAgICAgICBkb2N1bWVudENvbnRleHQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cDtcblxuICAgICAgICAgICAgaWYgKG1heVJlcXVpcmVDcmVhdGVFbGVtZW50SGFjaykge1xuICAgICAgICAgICAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNb3ZlIHRvIHRoZSByaWdodCBkZXB0aFxuICAgICAgICB3aGlsZSAoZGVwdGgtLSlcbiAgICAgICAgICAgIGRpdiA9IGRpdi5sYXN0Q2hpbGQ7XG5cbiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLm1ha2VBcnJheShkaXYubGFzdENoaWxkLmNoaWxkTm9kZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGpRdWVyeUh0bWxQYXJzZShodG1sLCBkb2N1bWVudENvbnRleHQpIHtcbiAgICAgICAgLy8galF1ZXJ5J3MgXCJwYXJzZUhUTUxcIiBmdW5jdGlvbiB3YXMgaW50cm9kdWNlZCBpbiBqUXVlcnkgMS44LjAgYW5kIGlzIGEgZG9jdW1lbnRlZCBwdWJsaWMgQVBJLlxuICAgICAgICBpZiAoalF1ZXJ5SW5zdGFuY2VbJ3BhcnNlSFRNTCddKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5SW5zdGFuY2VbJ3BhcnNlSFRNTCddKGh0bWwsIGRvY3VtZW50Q29udGV4dCkgfHwgW107IC8vIEVuc3VyZSB3ZSBhbHdheXMgcmV0dXJuIGFuIGFycmF5IGFuZCBuZXZlciBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3IgalF1ZXJ5IDwgMS44LjAsIHdlIGZhbGwgYmFjayBvbiB0aGUgdW5kb2N1bWVudGVkIGludGVybmFsIFwiY2xlYW5cIiBmdW5jdGlvbi5cbiAgICAgICAgICAgIHZhciBlbGVtcyA9IGpRdWVyeUluc3RhbmNlWydjbGVhbiddKFtodG1sXSwgZG9jdW1lbnRDb250ZXh0KTtcblxuICAgICAgICAgICAgLy8gQXMgb2YgalF1ZXJ5IDEuNy4xLCBqUXVlcnkgcGFyc2VzIHRoZSBIVE1MIGJ5IGFwcGVuZGluZyBpdCB0byBzb21lIGR1bW15IHBhcmVudCBub2RlcyBoZWxkIGluIGFuIGluLW1lbW9yeSBkb2N1bWVudCBmcmFnbWVudC5cbiAgICAgICAgICAgIC8vIFVuZm9ydHVuYXRlbHksIGl0IG5ldmVyIGNsZWFycyB0aGUgZHVtbXkgcGFyZW50IG5vZGVzIGZyb20gdGhlIGRvY3VtZW50IGZyYWdtZW50LCBzbyBpdCBsZWFrcyBtZW1vcnkgb3ZlciB0aW1lLlxuICAgICAgICAgICAgLy8gRml4IHRoaXMgYnkgZmluZGluZyB0aGUgdG9wLW1vc3QgZHVtbXkgcGFyZW50IGVsZW1lbnQsIGFuZCBkZXRhY2hpbmcgaXQgZnJvbSBpdHMgb3duZXIgZnJhZ21lbnQuXG4gICAgICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXNbMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSB0b3AtbW9zdCBwYXJlbnQgZWxlbWVudCB0aGF0J3MgYSBkaXJlY3QgY2hpbGQgb2YgYSBkb2N1bWVudCBmcmFnbWVudFxuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZWxlbXNbMF07XG4gICAgICAgICAgICAgICAgd2hpbGUgKGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnBhcmVudE5vZGUubm9kZVR5cGUgIT09IDExIC8qIGkuZS4sIERvY3VtZW50RnJhZ21lbnQgKi8pXG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgLy8gLi4uIHRoZW4gZGV0YWNoIGl0XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0ucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrby51dGlscy5wYXJzZUh0bWxGcmFnbWVudCA9IGZ1bmN0aW9uKGh0bWwsIGRvY3VtZW50Q29udGV4dCkge1xuICAgICAgICByZXR1cm4galF1ZXJ5SW5zdGFuY2UgP1xuICAgICAgICAgICAgalF1ZXJ5SHRtbFBhcnNlKGh0bWwsIGRvY3VtZW50Q29udGV4dCkgOiAgIC8vIEFzIGJlbG93LCBiZW5lZml0IGZyb20galF1ZXJ5J3Mgb3B0aW1pc2F0aW9ucyB3aGVyZSBwb3NzaWJsZVxuICAgICAgICAgICAgc2ltcGxlSHRtbFBhcnNlKGh0bWwsIGRvY3VtZW50Q29udGV4dCk7ICAvLyAuLi4gb3RoZXJ3aXNlLCB0aGlzIHNpbXBsZSBsb2dpYyB3aWxsIGRvIGluIG1vc3QgY29tbW9uIGNhc2VzLlxuICAgIH07XG5cbiAgICBrby51dGlscy5zZXRIdG1sID0gZnVuY3Rpb24obm9kZSwgaHRtbCkge1xuICAgICAgICBrby51dGlscy5lbXB0eURvbU5vZGUobm9kZSk7XG5cbiAgICAgICAgLy8gVGhlcmUncyBubyBsZWdpdGltYXRlIHJlYXNvbiB0byBkaXNwbGF5IGEgc3RyaW5naWZpZWQgb2JzZXJ2YWJsZSB3aXRob3V0IHVud3JhcHBpbmcgaXQsIHNvIHdlJ2xsIHVud3JhcCBpdFxuICAgICAgICBodG1sID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShodG1sKTtcblxuICAgICAgICBpZiAoKGh0bWwgIT09IG51bGwpICYmIChodG1sICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGh0bWwgIT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgLy8galF1ZXJ5IGNvbnRhaW5zIGEgbG90IG9mIHNvcGhpc3RpY2F0ZWQgY29kZSB0byBwYXJzZSBhcmJpdHJhcnkgSFRNTCBmcmFnbWVudHMsXG4gICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSA8dHI+IGVsZW1lbnRzIHdoaWNoIGFyZSBub3Qgbm9ybWFsbHkgYWxsb3dlZCB0byBleGlzdCBvbiB0aGVpciBvd24uXG4gICAgICAgICAgICAvLyBJZiB5b3UndmUgcmVmZXJlbmNlZCBqUXVlcnkgd2UnbGwgdXNlIHRoYXQgcmF0aGVyIHRoYW4gZHVwbGljYXRpbmcgaXRzIGNvZGUuXG4gICAgICAgICAgICBpZiAoalF1ZXJ5SW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnlJbnN0YW5jZShub2RlKVsnaHRtbCddKGh0bWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAuLi4gb3RoZXJ3aXNlLCB1c2UgS08ncyBvd24gcGFyc2luZyBsb2dpYy5cbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkTm9kZXMgPSBrby51dGlscy5wYXJzZUh0bWxGcmFnbWVudChodG1sLCBub2RlLm93bmVyRG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQocGFyc2VkTm9kZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMucGFyc2VIdG1sRnJhZ21lbnQnLCBrby51dGlscy5wYXJzZUh0bWxGcmFnbWVudCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnNldEh0bWwnLCBrby51dGlscy5zZXRIdG1sKTtcblxua28ubWVtb2l6YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZW1vcyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gcmFuZG9tTWF4OEhleENoYXJzKCkge1xuICAgICAgICByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMDAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZCgpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbU1heDhIZXhDaGFycygpICsgcmFuZG9tTWF4OEhleENoYXJzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbmRNZW1vTm9kZXMocm9vdE5vZGUsIGFwcGVuZFRvQXJyYXkpIHtcbiAgICAgICAgaWYgKCFyb290Tm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHJvb3ROb2RlLm5vZGVUeXBlID09IDgpIHtcbiAgICAgICAgICAgIHZhciBtZW1vSWQgPSBrby5tZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0KHJvb3ROb2RlLm5vZGVWYWx1ZSk7XG4gICAgICAgICAgICBpZiAobWVtb0lkICE9IG51bGwpXG4gICAgICAgICAgICAgICAgYXBwZW5kVG9BcnJheS5wdXNoKHsgZG9tTm9kZTogcm9vdE5vZGUsIG1lbW9JZDogbWVtb0lkIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJvb3ROb2RlLm5vZGVUeXBlID09IDEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBjaGlsZE5vZGVzID0gcm9vdE5vZGUuY2hpbGROb2RlcywgaiA9IGNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgIGZpbmRNZW1vTm9kZXMoY2hpbGROb2Rlc1tpXSwgYXBwZW5kVG9BcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtZW1vaXplOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW4gb25seSBwYXNzIGEgZnVuY3Rpb24gdG8ga28ubWVtb2l6YXRpb24ubWVtb2l6ZSgpXCIpO1xuICAgICAgICAgICAgdmFyIG1lbW9JZCA9IGdlbmVyYXRlUmFuZG9tSWQoKTtcbiAgICAgICAgICAgIG1lbW9zW21lbW9JZF0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIHJldHVybiBcIjwhLS1ba29fbWVtbzpcIiArIG1lbW9JZCArIFwiXS0tPlwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVubWVtb2l6ZTogZnVuY3Rpb24gKG1lbW9JZCwgY2FsbGJhY2tQYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IG1lbW9zW21lbW9JZF07XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFueSBtZW1vIHdpdGggSUQgXCIgKyBtZW1vSWQgKyBcIi4gUGVyaGFwcyBpdCdzIGFscmVhZHkgYmVlbiB1bm1lbW9pemVkLlwiKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgY2FsbGJhY2tQYXJhbXMgfHwgW10pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGRlbGV0ZSBtZW1vc1ttZW1vSWRdOyB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzOiBmdW5jdGlvbiAoZG9tTm9kZSwgZXh0cmFDYWxsYmFja1BhcmFtc0FycmF5KSB7XG4gICAgICAgICAgICB2YXIgbWVtb3MgPSBbXTtcbiAgICAgICAgICAgIGZpbmRNZW1vTm9kZXMoZG9tTm9kZSwgbWVtb3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBtZW1vcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IG1lbW9zW2ldLmRvbU5vZGU7XG4gICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkUGFyYW1zID0gW25vZGVdO1xuICAgICAgICAgICAgICAgIGlmIChleHRyYUNhbGxiYWNrUGFyYW1zQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UHVzaEFsbChjb21iaW5lZFBhcmFtcywgZXh0cmFDYWxsYmFja1BhcmFtc0FycmF5KTtcbiAgICAgICAgICAgICAgICBrby5tZW1vaXphdGlvbi51bm1lbW9pemUobWVtb3NbaV0ubWVtb0lkLCBjb21iaW5lZFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPSBcIlwiOyAvLyBOZXV0ZXIgdGhpcyBub2RlIHNvIHdlIGRvbid0IHRyeSB0byB1bm1lbW9pemUgaXQgYWdhaW5cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7IC8vIElmIHBvc3NpYmxlLCBlcmFzZSBpdCB0b3RhbGx5IChub3QgYWx3YXlzIHBvc3NpYmxlIC0gc29tZW9uZSBlbHNlIG1pZ2h0IGp1c3QgaG9sZCBhIHJlZmVyZW5jZSB0byBpdCB0aGVuIGNhbGwgdW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzIGFnYWluKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlTWVtb1RleHQ6IGZ1bmN0aW9uIChtZW1vVGV4dCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gbWVtb1RleHQubWF0Y2goL15cXFtrb19tZW1vXFw6KC4qPylcXF0kLyk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCdtZW1vaXphdGlvbicsIGtvLm1lbW9pemF0aW9uKTtcbmtvLmV4cG9ydFN5bWJvbCgnbWVtb2l6YXRpb24ubWVtb2l6ZScsIGtvLm1lbW9pemF0aW9uLm1lbW9pemUpO1xua28uZXhwb3J0U3ltYm9sKCdtZW1vaXphdGlvbi51bm1lbW9pemUnLCBrby5tZW1vaXphdGlvbi51bm1lbW9pemUpO1xua28uZXhwb3J0U3ltYm9sKCdtZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0Jywga28ubWVtb2l6YXRpb24ucGFyc2VNZW1vVGV4dCk7XG5rby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50cycsIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50cyk7XG5rby50YXNrcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjaGVkdWxlcixcbiAgICAgICAgdGFza1F1ZXVlID0gW10sXG4gICAgICAgIHRhc2tRdWV1ZUxlbmd0aCA9IDAsXG4gICAgICAgIG5leHRIYW5kbGUgPSAxLFxuICAgICAgICBuZXh0SW5kZXhUb1Byb2Nlc3MgPSAwO1xuXG4gICAgaWYgKHdpbmRvd1snTXV0YXRpb25PYnNlcnZlciddKSB7XG4gICAgICAgIC8vIENocm9tZSAyNyssIEZpcmVmb3ggMTQrLCBJRSAxMSssIE9wZXJhIDE1KywgU2FmYXJpIDYuMStcbiAgICAgICAgLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3YgKiBMaWNlbnNlOiBNSVRcbiAgICAgICAgc2NoZWR1bGVyID0gKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykub2JzZXJ2ZShkaXYsIHthdHRyaWJ1dGVzOiB0cnVlfSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImZvb1wiKTsgfTtcbiAgICAgICAgfSkoc2NoZWR1bGVkUHJvY2Vzcyk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudCAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gSUUgNi0xMFxuICAgICAgICAvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9ZdXp1SlMvc2V0SW1tZWRpYXRlICogQ29weXJpZ2h0IChjKSAyMDEyIEJhcm5lc2FuZG5vYmxlLmNvbSwgbGxjLCBEb25hdm9uIFdlc3QsIGFuZCBEb21lbmljIERlbmljb2xhICogTGljZW5zZTogTUlUXG4gICAgICAgIHNjaGVkdWxlciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzY2hlZHVsZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NUYXNrcygpIHtcbiAgICAgICAgaWYgKHRhc2tRdWV1ZUxlbmd0aCkge1xuICAgICAgICAgICAgLy8gRWFjaCBtYXJrIHJlcHJlc2VudHMgdGhlIGVuZCBvZiBhIGxvZ2ljYWwgZ3JvdXAgb2YgdGFza3MgYW5kIHRoZSBudW1iZXIgb2YgdGhlc2UgZ3JvdXBzIGlzXG4gICAgICAgICAgICAvLyBsaW1pdGVkIHRvIHByZXZlbnQgdW5jaGVja2VkIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIHZhciBtYXJrID0gdGFza1F1ZXVlTGVuZ3RoLCBjb3VudE1hcmtzID0gMDtcblxuICAgICAgICAgICAgLy8gbmV4dEluZGV4VG9Qcm9jZXNzIGtlZXBzIHRyYWNrIG9mIHdoZXJlIHdlIGFyZSBpbiB0aGUgcXVldWU7IHByb2Nlc3NUYXNrcyBjYW4gYmUgY2FsbGVkIHJlY3Vyc2l2ZWx5IHdpdGhvdXQgaXNzdWVcbiAgICAgICAgICAgIGZvciAodmFyIHRhc2s7IG5leHRJbmRleFRvUHJvY2VzcyA8IHRhc2tRdWV1ZUxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sgPSB0YXNrUXVldWVbbmV4dEluZGV4VG9Qcm9jZXNzKytdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SW5kZXhUb1Byb2Nlc3MgPiBtYXJrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKytjb3VudE1hcmtzID49IDUwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXhUb1Byb2Nlc3MgPSB0YXNrUXVldWVMZW5ndGg7ICAgLy8gc2tpcCBhbGwgdGFza3MgcmVtYWluaW5nIGluIHRoZSBxdWV1ZSBzaW5jZSBhbnkgb2YgdGhlbSBjb3VsZCBiZSBjYXVzaW5nIHRoZSByZWN1cnNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5kZWZlckVycm9yKEVycm9yKFwiJ1RvbyBtdWNoIHJlY3Vyc2lvbicgYWZ0ZXIgcHJvY2Vzc2luZyBcIiArIGNvdW50TWFya3MgKyBcIiB0YXNrIGdyb3Vwcy5cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyayA9IHRhc2tRdWV1ZUxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzaygpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuZGVmZXJFcnJvcihleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZWRQcm9jZXNzKCkge1xuICAgICAgICBwcm9jZXNzVGFza3MoKTtcblxuICAgICAgICAvLyBSZXNldCB0aGUgcXVldWVcbiAgICAgICAgbmV4dEluZGV4VG9Qcm9jZXNzID0gdGFza1F1ZXVlTGVuZ3RoID0gdGFza1F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrUHJvY2Vzc2luZygpIHtcbiAgICAgICAga28udGFza3NbJ3NjaGVkdWxlciddKHNjaGVkdWxlZFByb2Nlc3MpO1xuICAgIH1cblxuICAgIHZhciB0YXNrcyA9IHtcbiAgICAgICAgJ3NjaGVkdWxlcic6IHNjaGVkdWxlciwgICAgIC8vIEFsbG93IG92ZXJyaWRpbmcgdGhlIHNjaGVkdWxlclxuXG4gICAgICAgIHNjaGVkdWxlOiBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICAgICAgaWYgKCF0YXNrUXVldWVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZVRhc2tQcm9jZXNzaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2tRdWV1ZVt0YXNrUXVldWVMZW5ndGgrK10gPSBmdW5jO1xuICAgICAgICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICAgICAgfSxcblxuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZSAtIChuZXh0SGFuZGxlIC0gdGFza1F1ZXVlTGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBuZXh0SW5kZXhUb1Byb2Nlc3MgJiYgaW5kZXggPCB0YXNrUXVldWVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0YXNrUXVldWVbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBGb3IgdGVzdGluZyBvbmx5OiByZXNldCB0aGUgcXVldWUgYW5kIHJldHVybiB0aGUgcHJldmlvdXMgcXVldWUgbGVuZ3RoXG4gICAgICAgICdyZXNldEZvclRlc3RpbmcnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGFza1F1ZXVlTGVuZ3RoIC0gbmV4dEluZGV4VG9Qcm9jZXNzO1xuICAgICAgICAgICAgbmV4dEluZGV4VG9Qcm9jZXNzID0gdGFza1F1ZXVlTGVuZ3RoID0gdGFza1F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJ1bkVhcmx5OiBwcm9jZXNzVGFza3NcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRhc2tzO1xufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCd0YXNrcycsIGtvLnRhc2tzKTtcbmtvLmV4cG9ydFN5bWJvbCgndGFza3Muc2NoZWR1bGUnLCBrby50YXNrcy5zY2hlZHVsZSk7XG4vL2tvLmV4cG9ydFN5bWJvbCgndGFza3MuY2FuY2VsJywga28udGFza3MuY2FuY2VsKTsgIFwiY2FuY2VsXCIgaXNuJ3QgbWluaWZpZWRcbmtvLmV4cG9ydFN5bWJvbCgndGFza3MucnVuRWFybHknLCBrby50YXNrcy5ydW5FYXJseSk7XG5rby5leHRlbmRlcnMgPSB7XG4gICAgJ3Rocm90dGxlJzogZnVuY3Rpb24odGFyZ2V0LCB0aW1lb3V0KSB7XG4gICAgICAgIC8vIFRocm90dGxpbmcgbWVhbnMgdHdvIHRoaW5nczpcblxuICAgICAgICAvLyAoMSkgRm9yIGRlcGVuZGVudCBvYnNlcnZhYmxlcywgd2UgdGhyb3R0bGUgKmV2YWx1YXRpb25zKiBzbyB0aGF0LCBubyBtYXR0ZXIgaG93IGZhc3QgaXRzIGRlcGVuZGVuY2llc1xuICAgICAgICAvLyAgICAgbm90aWZ5IHVwZGF0ZXMsIHRoZSB0YXJnZXQgZG9lc24ndCByZS1ldmFsdWF0ZSAoYW5kIGhlbmNlIGRvZXNuJ3Qgbm90aWZ5KSBmYXN0ZXIgdGhhbiBhIGNlcnRhaW4gcmF0ZVxuICAgICAgICB0YXJnZXRbJ3Rocm90dGxlRXZhbHVhdGlvbiddID0gdGltZW91dDtcblxuICAgICAgICAvLyAoMikgRm9yIHdyaXRhYmxlIHRhcmdldHMgKG9ic2VydmFibGVzLCBvciB3cml0YWJsZSBkZXBlbmRlbnQgb2JzZXJ2YWJsZXMpLCB3ZSB0aHJvdHRsZSAqd3JpdGVzKlxuICAgICAgICAvLyAgICAgc28gdGhlIHRhcmdldCBjYW5ub3QgY2hhbmdlIHZhbHVlIHN5bmNocm9ub3VzbHkgb3IgZmFzdGVyIHRoYW4gYSBjZXJ0YWluIHJhdGVcbiAgICAgICAgdmFyIHdyaXRlVGltZW91dEluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGtvLmRlcGVuZGVudE9ic2VydmFibGUoe1xuICAgICAgICAgICAgJ3JlYWQnOiB0YXJnZXQsXG4gICAgICAgICAgICAnd3JpdGUnOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh3cml0ZVRpbWVvdXRJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgd3JpdGVUaW1lb3V0SW5zdGFuY2UgPSBrby51dGlscy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgJ3JhdGVMaW1pdCc6IGZ1bmN0aW9uKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgdGltZW91dCwgbWV0aG9kLCBsaW1pdEZ1bmN0aW9uO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGltZW91dCA9IG9wdGlvbnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gb3B0aW9uc1sndGltZW91dCddO1xuICAgICAgICAgICAgbWV0aG9kID0gb3B0aW9uc1snbWV0aG9kJ107XG4gICAgICAgIH1cblxuICAgICAgICAvLyByYXRlTGltaXQgc3VwZXJzZWRlcyBkZWZlcnJlZCB1cGRhdGVzXG4gICAgICAgIHRhcmdldC5fZGVmZXJVcGRhdGVzID0gZmFsc2U7XG5cbiAgICAgICAgbGltaXRGdW5jdGlvbiA9IG1ldGhvZCA9PSAnbm90aWZ5V2hlbkNoYW5nZXNTdG9wJyA/ICBkZWJvdW5jZSA6IHRocm90dGxlO1xuICAgICAgICB0YXJnZXQubGltaXQoZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBsaW1pdEZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgICdkZWZlcnJlZCc6IGZ1bmN0aW9uKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgXFwnZGVmZXJyZWRcXCcgZXh0ZW5kZXIgb25seSBhY2NlcHRzIHRoZSB2YWx1ZSBcXCd0cnVlXFwnLCBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gdHVybiBkZWZlcnJhbCBvZmYgb25jZSBlbmFibGVkLicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRhcmdldC5fZGVmZXJVcGRhdGVzKSB7XG4gICAgICAgICAgICB0YXJnZXQuX2RlZmVyVXBkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB0YXJnZXQubGltaXQoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlVXBkYXRlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlVXBkYXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAga28udGFza3MuY2FuY2VsKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSBrby50YXNrcy5zY2hlZHVsZShjYWxsYmFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlVXBkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Wydub3RpZnlTdWJzY3JpYmVycyddKHVuZGVmaW5lZCwgJ2RpcnR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZVVwZGF0ZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAnbm90aWZ5JzogZnVuY3Rpb24odGFyZ2V0LCBub3RpZnlXaGVuKSB7XG4gICAgICAgIHRhcmdldFtcImVxdWFsaXR5Q29tcGFyZXJcIl0gPSBub3RpZnlXaGVuID09IFwiYWx3YXlzXCIgP1xuICAgICAgICAgICAgbnVsbCA6ICAvLyBudWxsIGVxdWFsaXR5Q29tcGFyZXIgbWVhbnMgdG8gYWx3YXlzIG5vdGlmeVxuICAgICAgICAgICAgdmFsdWVzQXJlUHJpbWl0aXZlQW5kRXF1YWw7XG4gICAgfVxufTtcblxudmFyIHByaW1pdGl2ZVR5cGVzID0geyAndW5kZWZpbmVkJzoxLCAnYm9vbGVhbic6MSwgJ251bWJlcic6MSwgJ3N0cmluZyc6MSB9O1xuZnVuY3Rpb24gdmFsdWVzQXJlUHJpbWl0aXZlQW5kRXF1YWwoYSwgYikge1xuICAgIHZhciBvbGRWYWx1ZUlzUHJpbWl0aXZlID0gKGEgPT09IG51bGwpIHx8ICh0eXBlb2YoYSkgaW4gcHJpbWl0aXZlVHlwZXMpO1xuICAgIHJldHVybiBvbGRWYWx1ZUlzUHJpbWl0aXZlID8gKGEgPT09IGIpIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCB0aW1lb3V0KSB7XG4gICAgdmFyIHRpbWVvdXRJbnN0YW5jZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRpbWVvdXRJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGltZW91dEluc3RhbmNlID0ga28udXRpbHMuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGNhbGxiYWNrLCB0aW1lb3V0KSB7XG4gICAgdmFyIHRpbWVvdXRJbnN0YW5jZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEluc3RhbmNlKTtcbiAgICAgICAgdGltZW91dEluc3RhbmNlID0ga28udXRpbHMuc2V0VGltZW91dChjYWxsYmFjaywgdGltZW91dCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYXBwbHlFeHRlbmRlcnMocmVxdWVzdGVkRXh0ZW5kZXJzKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHJlcXVlc3RlZEV4dGVuZGVycykge1xuICAgICAgICBrby51dGlscy5vYmplY3RGb3JFYWNoKHJlcXVlc3RlZEV4dGVuZGVycywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGV4dGVuZGVySGFuZGxlciA9IGtvLmV4dGVuZGVyc1trZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBleHRlbmRlckhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGV4dGVuZGVySGFuZGxlcih0YXJnZXQsIHZhbHVlKSB8fCB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5rby5leHBvcnRTeW1ib2woJ2V4dGVuZGVycycsIGtvLmV4dGVuZGVycyk7XG5cbmtvLnN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICh0YXJnZXQsIGNhbGxiYWNrLCBkaXNwb3NlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuZGlzcG9zZUNhbGxiYWNrID0gZGlzcG9zZUNhbGxiYWNrO1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIGtvLmV4cG9ydFByb3BlcnR5KHRoaXMsICdkaXNwb3NlJywgdGhpcy5kaXNwb3NlKTtcbn07XG5rby5zdWJzY3JpcHRpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmRpc3Bvc2VDYWxsYmFjaygpO1xufTtcblxua28uc3Vic2NyaWJhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGtvLnV0aWxzLnNldFByb3RvdHlwZU9mT3JFeHRlbmQodGhpcywga29fc3Vic2NyaWJhYmxlX2ZuKTtcbiAgICBrb19zdWJzY3JpYmFibGVfZm4uaW5pdCh0aGlzKTtcbn1cblxudmFyIGRlZmF1bHRFdmVudCA9IFwiY2hhbmdlXCI7XG5cbi8vIE1vdmVkIG91dCBvZiBcImxpbWl0XCIgdG8gYXZvaWQgdGhlIGV4dHJhIGNsb3N1cmVcbmZ1bmN0aW9uIGxpbWl0Tm90aWZ5U3Vic2NyaWJlcnModmFsdWUsIGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCB8fCBldmVudCA9PT0gZGVmYXVsdEV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2xpbWl0Q2hhbmdlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSAnYmVmb3JlQ2hhbmdlJykge1xuICAgICAgICB0aGlzLl9saW1pdEJlZm9yZUNoYW5nZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb3JpZ05vdGlmeVN1YnNjcmliZXJzKHZhbHVlLCBldmVudCk7XG4gICAgfVxufVxuXG52YXIga29fc3Vic2NyaWJhYmxlX2ZuID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLl9zdWJzY3JpcHRpb25zID0geyBcImNoYW5nZVwiOiBbXSB9O1xuICAgICAgICBpbnN0YW5jZS5fdmVyc2lvbk51bWJlciA9IDE7XG4gICAgfSxcblxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGNhbGxiYWNrLCBjYWxsYmFja1RhcmdldCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgZGVmYXVsdEV2ZW50O1xuICAgICAgICB2YXIgYm91bmRDYWxsYmFjayA9IGNhbGxiYWNrVGFyZ2V0ID8gY2FsbGJhY2suYmluZChjYWxsYmFja1RhcmdldCkgOiBjYWxsYmFjaztcblxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IGtvLnN1YnNjcmlwdGlvbihzZWxmLCBib3VuZENhbGxiYWNrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBrby51dGlscy5hcnJheVJlbW92ZUl0ZW0oc2VsZi5fc3Vic2NyaXB0aW9uc1tldmVudF0sIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoc2VsZi5hZnRlclN1YnNjcmlwdGlvblJlbW92ZSlcbiAgICAgICAgICAgICAgICBzZWxmLmFmdGVyU3Vic2NyaXB0aW9uUmVtb3ZlKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGYuYmVmb3JlU3Vic2NyaXB0aW9uQWRkKVxuICAgICAgICAgICAgc2VsZi5iZWZvcmVTdWJzY3JpcHRpb25BZGQoZXZlbnQpO1xuXG4gICAgICAgIGlmICghc2VsZi5fc3Vic2NyaXB0aW9uc1tldmVudF0pXG4gICAgICAgICAgICBzZWxmLl9zdWJzY3JpcHRpb25zW2V2ZW50XSA9IFtdO1xuICAgICAgICBzZWxmLl9zdWJzY3JpcHRpb25zW2V2ZW50XS5wdXNoKHN1YnNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9LFxuXG4gICAgXCJub3RpZnlTdWJzY3JpYmVyc1wiOiBmdW5jdGlvbiAodmFsdWVUb05vdGlmeSwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCBkZWZhdWx0RXZlbnQ7XG4gICAgICAgIGlmIChldmVudCA9PT0gZGVmYXVsdEV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnNpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNTdWJzY3JpcHRpb25zRm9yRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgICB2YXIgc3VicyA9IGV2ZW50ID09PSBkZWZhdWx0RXZlbnQgJiYgdGhpcy5fY2hhbmdlU3Vic2NyaXB0aW9ucyB8fCB0aGlzLl9zdWJzY3JpcHRpb25zW2V2ZW50XS5zbGljZSgwKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5iZWdpbigpOyAvLyBCZWdpbiBzdXBwcmVzc2luZyBkZXBlbmRlbmN5IGRldGVjdGlvbiAoYnkgc2V0dGluZyB0aGUgdG9wIGZyYW1lIHRvIHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgc3Vic2NyaXB0aW9uOyBzdWJzY3JpcHRpb24gPSBzdWJzW2ldOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBhIHN1YnNjcmlwdGlvbiB3YXMgZGlzcG9zZWQgZHVyaW5nIHRoZSBhcnJheUZvckVhY2ggY3ljbGUsIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBpc0Rpc3Bvc2VkIG9uIGVhY2ggc3Vic2NyaXB0aW9uIGJlZm9yZSBpbnZva2luZyBpdHMgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24uaXNEaXNwb3NlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayh2YWx1ZVRvTm90aWZ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uZW5kKCk7IC8vIEVuZCBzdXBwcmVzc2luZyBkZXBlbmRlbmN5IGRldGVjdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldFZlcnNpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb25OdW1iZXI7XG4gICAgfSxcblxuICAgIGhhc0NoYW5nZWQ6IGZ1bmN0aW9uICh2ZXJzaW9uVG9DaGVjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWZXJzaW9uKCkgIT09IHZlcnNpb25Ub0NoZWNrO1xuICAgIH0sXG5cbiAgICB1cGRhdGVWZXJzaW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICsrdGhpcy5fdmVyc2lvbk51bWJlcjtcbiAgICB9LFxuXG4gICAgbGltaXQ6IGZ1bmN0aW9uKGxpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzZWxmSXNPYnNlcnZhYmxlID0ga28uaXNPYnNlcnZhYmxlKHNlbGYpLFxuICAgICAgICAgICAgaWdub3JlQmVmb3JlQ2hhbmdlLCBub3RpZnlOZXh0Q2hhbmdlLCBwcmV2aW91c1ZhbHVlLCBwZW5kaW5nVmFsdWUsIGJlZm9yZUNoYW5nZSA9ICdiZWZvcmVDaGFuZ2UnO1xuXG4gICAgICAgIGlmICghc2VsZi5fb3JpZ05vdGlmeVN1YnNjcmliZXJzKSB7XG4gICAgICAgICAgICBzZWxmLl9vcmlnTm90aWZ5U3Vic2NyaWJlcnMgPSBzZWxmW1wibm90aWZ5U3Vic2NyaWJlcnNcIl07XG4gICAgICAgICAgICBzZWxmW1wibm90aWZ5U3Vic2NyaWJlcnNcIl0gPSBsaW1pdE5vdGlmeVN1YnNjcmliZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbmlzaCA9IGxpbWl0RnVuY3Rpb24oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLl9ub3RpZmljYXRpb25Jc1BlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gSWYgYW4gb2JzZXJ2YWJsZSBwcm92aWRlZCBhIHJlZmVyZW5jZSB0byBpdHNlbGYsIGFjY2VzcyBpdCB0byBnZXQgdGhlIGxhdGVzdCB2YWx1ZS5cbiAgICAgICAgICAgIC8vIFRoaXMgYWxsb3dzIGNvbXB1dGVkIG9ic2VydmFibGVzIHRvIGRlbGF5IGNhbGN1bGF0aW5nIHRoZWlyIHZhbHVlIHVudGlsIG5lZWRlZC5cbiAgICAgICAgICAgIGlmIChzZWxmSXNPYnNlcnZhYmxlICYmIHBlbmRpbmdWYWx1ZSA9PT0gc2VsZikge1xuICAgICAgICAgICAgICAgIHBlbmRpbmdWYWx1ZSA9IHNlbGYuX2V2YWxJZkNoYW5nZWQgPyBzZWxmLl9ldmFsSWZDaGFuZ2VkKCkgOiBzZWxmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2hvdWxkTm90aWZ5ID0gbm90aWZ5TmV4dENoYW5nZSB8fCBzZWxmLmlzRGlmZmVyZW50KHByZXZpb3VzVmFsdWUsIHBlbmRpbmdWYWx1ZSk7XG5cbiAgICAgICAgICAgIG5vdGlmeU5leHRDaGFuZ2UgPSBpZ25vcmVCZWZvcmVDaGFuZ2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX29yaWdOb3RpZnlTdWJzY3JpYmVycyhwcmV2aW91c1ZhbHVlID0gcGVuZGluZ1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi5fbGltaXRDaGFuZ2UgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgc2VsZi5fY2hhbmdlU3Vic2NyaXB0aW9ucyA9IHNlbGYuX3N1YnNjcmlwdGlvbnNbZGVmYXVsdEV2ZW50XS5zbGljZSgwKTtcbiAgICAgICAgICAgIHNlbGYuX25vdGlmaWNhdGlvbklzUGVuZGluZyA9IGlnbm9yZUJlZm9yZUNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICBwZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmLl9saW1pdEJlZm9yZUNoYW5nZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIWlnbm9yZUJlZm9yZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLl9vcmlnTm90aWZ5U3Vic2NyaWJlcnModmFsdWUsIGJlZm9yZUNoYW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNlbGYuX25vdGlmeU5leHRDaGFuZ2VJZlZhbHVlSXNEaWZmZXJlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzRGlmZmVyZW50KHByZXZpb3VzVmFsdWUsIHNlbGYucGVlayh0cnVlIC8qZXZhbHVhdGUqLykpKSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5TmV4dENoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGhhc1N1YnNjcmlwdGlvbnNGb3JFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmlwdGlvbnNbZXZlbnRdICYmIHRoaXMuX3N1YnNjcmlwdGlvbnNbZXZlbnRdLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgZ2V0U3Vic2NyaXB0aW9uc0NvdW50OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaXB0aW9uc1tldmVudF0gJiYgdGhpcy5fc3Vic2NyaXB0aW9uc1tldmVudF0ubGVuZ3RoIHx8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSAwO1xuICAgICAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaCh0aGlzLl9zdWJzY3JpcHRpb25zLCBmdW5jdGlvbihldmVudE5hbWUsIHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lICE9PSAnZGlydHknKVxuICAgICAgICAgICAgICAgICAgICB0b3RhbCArPSBzdWJzY3JpcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGlzRGlmZmVyZW50OiBmdW5jdGlvbihvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzWydlcXVhbGl0eUNvbXBhcmVyJ10gfHwgIXRoaXNbJ2VxdWFsaXR5Q29tcGFyZXInXShvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH0sXG5cbiAgICBleHRlbmQ6IGFwcGx5RXh0ZW5kZXJzXG59O1xuXG5rby5leHBvcnRQcm9wZXJ0eShrb19zdWJzY3JpYmFibGVfZm4sICdzdWJzY3JpYmUnLCBrb19zdWJzY3JpYmFibGVfZm4uc3Vic2NyaWJlKTtcbmtvLmV4cG9ydFByb3BlcnR5KGtvX3N1YnNjcmliYWJsZV9mbiwgJ2V4dGVuZCcsIGtvX3N1YnNjcmliYWJsZV9mbi5leHRlbmQpO1xua28uZXhwb3J0UHJvcGVydHkoa29fc3Vic2NyaWJhYmxlX2ZuLCAnZ2V0U3Vic2NyaXB0aW9uc0NvdW50Jywga29fc3Vic2NyaWJhYmxlX2ZuLmdldFN1YnNjcmlwdGlvbnNDb3VudCk7XG5cbi8vIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgcHJvdG8gYXNzaWdubWVudCwgd2Ugb3ZlcndyaXRlIHRoZSBwcm90b3R5cGUgb2YgZWFjaFxuLy8gb2JzZXJ2YWJsZSBpbnN0YW5jZS4gU2luY2Ugb2JzZXJ2YWJsZXMgYXJlIGZ1bmN0aW9ucywgd2UgbmVlZCBGdW5jdGlvbi5wcm90b3R5cGVcbi8vIHRvIHN0aWxsIGJlIGluIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5pZiAoa28udXRpbHMuY2FuU2V0UHJvdG90eXBlKSB7XG4gICAga28udXRpbHMuc2V0UHJvdG90eXBlT2Yoa29fc3Vic2NyaWJhYmxlX2ZuLCBGdW5jdGlvbi5wcm90b3R5cGUpO1xufVxuXG5rby5zdWJzY3JpYmFibGVbJ2ZuJ10gPSBrb19zdWJzY3JpYmFibGVfZm47XG5cblxua28uaXNTdWJzY3JpYmFibGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgIT0gbnVsbCAmJiB0eXBlb2YgaW5zdGFuY2Uuc3Vic2NyaWJlID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgaW5zdGFuY2VbXCJub3RpZnlTdWJzY3JpYmVyc1wiXSA9PSBcImZ1bmN0aW9uXCI7XG59O1xuXG5rby5leHBvcnRTeW1ib2woJ3N1YnNjcmliYWJsZScsIGtvLnN1YnNjcmliYWJsZSk7XG5rby5leHBvcnRTeW1ib2woJ2lzU3Vic2NyaWJhYmxlJywga28uaXNTdWJzY3JpYmFibGUpO1xuXG5rby5jb21wdXRlZENvbnRleHQgPSBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3V0ZXJGcmFtZXMgPSBbXSxcbiAgICAgICAgY3VycmVudEZyYW1lLFxuICAgICAgICBsYXN0SWQgPSAwO1xuXG4gICAgLy8gUmV0dXJuIGEgdW5pcXVlIElEIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIGFuIG9ic2VydmFibGUgZm9yIGRlcGVuZGVuY3kgdHJhY2tpbmcuXG4gICAgLy8gVGhlb3JldGljYWxseSwgeW91IGNvdWxkIGV2ZW50dWFsbHkgb3ZlcmZsb3cgdGhlIG51bWJlciBzdG9yYWdlIHNpemUsIHJlc3VsdGluZ1xuICAgIC8vIGluIGR1cGxpY2F0ZSBJRHMuIEJ1dCBpbiBKYXZhU2NyaXB0LCB0aGUgbGFyZ2VzdCBleGFjdCBpbnRlZ3JhbCB2YWx1ZSBpcyAyXjUzXG4gICAgLy8gb3IgOSwwMDcsMTk5LDI1NCw3NDAsOTkyLiBJZiB5b3UgY3JlYXRlZCAxLDAwMCwwMDAgSURzIHBlciBzZWNvbmQsIGl0IHdvdWxkXG4gICAgLy8gdGFrZSBvdmVyIDI4NSB5ZWFycyB0byByZWFjaCB0aGF0IG51bWJlci5cbiAgICAvLyBSZWZlcmVuY2UgaHR0cDovL2Jsb2cudmpldXguY29tLzIwMTAvamF2YXNjcmlwdC9qYXZhc2NyaXB0LW1heF9pbnQtbnVtYmVyLWxpbWl0cy5odG1sXG4gICAgZnVuY3Rpb24gZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiArK2xhc3RJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZWdpbihvcHRpb25zKSB7XG4gICAgICAgIG91dGVyRnJhbWVzLnB1c2goY3VycmVudEZyYW1lKTtcbiAgICAgICAgY3VycmVudEZyYW1lID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICAgIGN1cnJlbnRGcmFtZSA9IG91dGVyRnJhbWVzLnBvcCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJlZ2luOiBiZWdpbixcblxuICAgICAgICBlbmQ6IGVuZCxcblxuICAgICAgICByZWdpc3RlckRlcGVuZGVuY3k6IGZ1bmN0aW9uIChzdWJzY3JpYmFibGUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RnJhbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWtvLmlzU3Vic2NyaWJhYmxlKHN1YnNjcmliYWJsZSkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llc1wiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWUuY2FsbGJhY2suY2FsbChjdXJyZW50RnJhbWUuY2FsbGJhY2tUYXJnZXQsIHN1YnNjcmliYWJsZSwgc3Vic2NyaWJhYmxlLl9pZCB8fCAoc3Vic2NyaWJhYmxlLl9pZCA9IGdldElkKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpZ25vcmU6IGZ1bmN0aW9uIChjYWxsYmFjaywgY2FsbGJhY2tUYXJnZXQsIGNhbGxiYWNrQXJncykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBiZWdpbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShjYWxsYmFja1RhcmdldCwgY2FsbGJhY2tBcmdzIHx8IFtdKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RGVwZW5kZW5jaWVzQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RnJhbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRGcmFtZS5jb21wdXRlZC5nZXREZXBlbmRlbmNpZXNDb3VudCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzSW5pdGlhbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEZyYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50RnJhbWUuaXNJbml0aWFsO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgnY29tcHV0ZWRDb250ZXh0Jywga28uY29tcHV0ZWRDb250ZXh0KTtcbmtvLmV4cG9ydFN5bWJvbCgnY29tcHV0ZWRDb250ZXh0LmdldERlcGVuZGVuY2llc0NvdW50Jywga28uY29tcHV0ZWRDb250ZXh0LmdldERlcGVuZGVuY2llc0NvdW50KTtcbmtvLmV4cG9ydFN5bWJvbCgnY29tcHV0ZWRDb250ZXh0LmlzSW5pdGlhbCcsIGtvLmNvbXB1dGVkQ29udGV4dC5pc0luaXRpYWwpO1xuXG5rby5leHBvcnRTeW1ib2woJ2lnbm9yZURlcGVuZGVuY2llcycsIGtvLmlnbm9yZURlcGVuZGVuY2llcyA9IGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKTtcbnZhciBvYnNlcnZhYmxlTGF0ZXN0VmFsdWUgPSBrby51dGlscy5jcmVhdGVTeW1ib2xPclN0cmluZygnX2xhdGVzdFZhbHVlJyk7XG5cbmtvLm9ic2VydmFibGUgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlKSB7XG4gICAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBXcml0ZVxuXG4gICAgICAgICAgICAvLyBJZ25vcmUgd3JpdGVzIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKG9ic2VydmFibGUuaXNEaWZmZXJlbnQob2JzZXJ2YWJsZVtvYnNlcnZhYmxlTGF0ZXN0VmFsdWVdLCBhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS52YWx1ZVdpbGxNdXRhdGUoKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlW29ic2VydmFibGVMYXRlc3RWYWx1ZV0gPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS52YWx1ZUhhc011dGF0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzOyAvLyBQZXJtaXRzIGNoYWluZWQgYXNzaWdubWVudHNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlYWRcbiAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24ucmVnaXN0ZXJEZXBlbmRlbmN5KG9ic2VydmFibGUpOyAvLyBUaGUgY2FsbGVyIG9ubHkgbmVlZHMgdG8gYmUgbm90aWZpZWQgb2YgY2hhbmdlcyBpZiB0aGV5IGRpZCBhIFwicmVhZFwiIG9wZXJhdGlvblxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVbb2JzZXJ2YWJsZUxhdGVzdFZhbHVlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9ic2VydmFibGVbb2JzZXJ2YWJsZUxhdGVzdFZhbHVlXSA9IGluaXRpYWxWYWx1ZTtcblxuICAgIC8vIEluaGVyaXQgZnJvbSAnc3Vic2NyaWJhYmxlJ1xuICAgIGlmICgha28udXRpbHMuY2FuU2V0UHJvdG90eXBlKSB7XG4gICAgICAgIC8vICdzdWJzY3JpYmFibGUnIHdvbid0IGJlIG9uIHRoZSBwcm90b3R5cGUgY2hhaW4gdW5sZXNzIHdlIHB1dCBpdCB0aGVyZSBkaXJlY3RseVxuICAgICAgICBrby51dGlscy5leHRlbmQob2JzZXJ2YWJsZSwga28uc3Vic2NyaWJhYmxlWydmbiddKTtcbiAgICB9XG4gICAga28uc3Vic2NyaWJhYmxlWydmbiddLmluaXQob2JzZXJ2YWJsZSk7XG5cbiAgICAvLyBJbmhlcml0IGZyb20gJ29ic2VydmFibGUnXG4gICAga28udXRpbHMuc2V0UHJvdG90eXBlT2ZPckV4dGVuZChvYnNlcnZhYmxlLCBvYnNlcnZhYmxlRm4pO1xuXG4gICAgaWYgKGtvLm9wdGlvbnNbJ2RlZmVyVXBkYXRlcyddKSB7XG4gICAgICAgIGtvLmV4dGVuZGVyc1snZGVmZXJyZWQnXShvYnNlcnZhYmxlLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbn1cblxuLy8gRGVmaW5lIHByb3RvdHlwZSBmb3Igb2JzZXJ2YWJsZXNcbnZhciBvYnNlcnZhYmxlRm4gPSB7XG4gICAgJ2VxdWFsaXR5Q29tcGFyZXInOiB2YWx1ZXNBcmVQcmltaXRpdmVBbmRFcXVhbCxcbiAgICBwZWVrOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbb2JzZXJ2YWJsZUxhdGVzdFZhbHVlXTsgfSxcbiAgICB2YWx1ZUhhc011dGF0ZWQ6IGZ1bmN0aW9uICgpIHsgdGhpc1snbm90aWZ5U3Vic2NyaWJlcnMnXSh0aGlzW29ic2VydmFibGVMYXRlc3RWYWx1ZV0pOyB9LFxuICAgIHZhbHVlV2lsbE11dGF0ZTogZnVuY3Rpb24gKCkgeyB0aGlzWydub3RpZnlTdWJzY3JpYmVycyddKHRoaXNbb2JzZXJ2YWJsZUxhdGVzdFZhbHVlXSwgJ2JlZm9yZUNoYW5nZScpOyB9XG59O1xuXG4vLyBOb3RlIHRoYXQgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBwcm90byBhc3NpZ25tZW50LCB0aGVcbi8vIGluaGVyaXRhbmNlIGNoYWluIGlzIGNyZWF0ZWQgbWFudWFsbHkgaW4gdGhlIGtvLm9ic2VydmFibGUgY29uc3RydWN0b3JcbmlmIChrby51dGlscy5jYW5TZXRQcm90b3R5cGUpIHtcbiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZihvYnNlcnZhYmxlRm4sIGtvLnN1YnNjcmliYWJsZVsnZm4nXSk7XG59XG5cbnZhciBwcm90b1Byb3BlcnR5ID0ga28ub2JzZXJ2YWJsZS5wcm90b1Byb3BlcnR5ID0gJ19fa29fcHJvdG9fXyc7XG5vYnNlcnZhYmxlRm5bcHJvdG9Qcm9wZXJ0eV0gPSBrby5vYnNlcnZhYmxlO1xuXG5rby5oYXNQcm90b3R5cGUgPSBmdW5jdGlvbihpbnN0YW5jZSwgcHJvdG90eXBlKSB7XG4gICAgaWYgKChpbnN0YW5jZSA9PT0gbnVsbCkgfHwgKGluc3RhbmNlID09PSB1bmRlZmluZWQpIHx8IChpbnN0YW5jZVtwcm90b1Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChpbnN0YW5jZVtwcm90b1Byb3BlcnR5XSA9PT0gcHJvdG90eXBlKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4ga28uaGFzUHJvdG90eXBlKGluc3RhbmNlW3Byb3RvUHJvcGVydHldLCBwcm90b3R5cGUpOyAvLyBXYWxrIHRoZSBwcm90b3R5cGUgY2hhaW5cbn07XG5cbmtvLmlzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBrby5oYXNQcm90b3R5cGUoaW5zdGFuY2UsIGtvLm9ic2VydmFibGUpO1xufVxua28uaXNXcml0ZWFibGVPYnNlcnZhYmxlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgLy8gT2JzZXJ2YWJsZVxuICAgIGlmICgodHlwZW9mIGluc3RhbmNlID09ICdmdW5jdGlvbicpICYmIGluc3RhbmNlW3Byb3RvUHJvcGVydHldID09PSBrby5vYnNlcnZhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBXcml0ZWFibGUgZGVwZW5kZW50IG9ic2VydmFibGVcbiAgICBpZiAoKHR5cGVvZiBpbnN0YW5jZSA9PSAnZnVuY3Rpb24nKSAmJiAoaW5zdGFuY2VbcHJvdG9Qcm9wZXJ0eV0gPT09IGtvLmRlcGVuZGVudE9ic2VydmFibGUpICYmIChpbnN0YW5jZS5oYXNXcml0ZUZ1bmN0aW9uKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gQW55dGhpbmcgZWxzZVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxua28uZXhwb3J0U3ltYm9sKCdvYnNlcnZhYmxlJywga28ub2JzZXJ2YWJsZSk7XG5rby5leHBvcnRTeW1ib2woJ2lzT2JzZXJ2YWJsZScsIGtvLmlzT2JzZXJ2YWJsZSk7XG5rby5leHBvcnRTeW1ib2woJ2lzV3JpdGVhYmxlT2JzZXJ2YWJsZScsIGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZSk7XG5rby5leHBvcnRTeW1ib2woJ2lzV3JpdGFibGVPYnNlcnZhYmxlJywga28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgnb2JzZXJ2YWJsZS5mbicsIG9ic2VydmFibGVGbik7XG5rby5leHBvcnRQcm9wZXJ0eShvYnNlcnZhYmxlRm4sICdwZWVrJywgb2JzZXJ2YWJsZUZuLnBlZWspO1xua28uZXhwb3J0UHJvcGVydHkob2JzZXJ2YWJsZUZuLCAndmFsdWVIYXNNdXRhdGVkJywgb2JzZXJ2YWJsZUZuLnZhbHVlSGFzTXV0YXRlZCk7XG5rby5leHBvcnRQcm9wZXJ0eShvYnNlcnZhYmxlRm4sICd2YWx1ZVdpbGxNdXRhdGUnLCBvYnNlcnZhYmxlRm4udmFsdWVXaWxsTXV0YXRlKTtcbmtvLm9ic2VydmFibGVBcnJheSA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzKSB7XG4gICAgaW5pdGlhbFZhbHVlcyA9IGluaXRpYWxWYWx1ZXMgfHwgW107XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxWYWx1ZXMgIT0gJ29iamVjdCcgfHwgISgnbGVuZ3RoJyBpbiBpbml0aWFsVmFsdWVzKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGFyZ3VtZW50IHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBhbiBvYnNlcnZhYmxlIGFycmF5IG11c3QgYmUgYW4gYXJyYXksIG9yIG51bGwsIG9yIHVuZGVmaW5lZC5cIik7XG5cbiAgICB2YXIgcmVzdWx0ID0ga28ub2JzZXJ2YWJsZShpbml0aWFsVmFsdWVzKTtcbiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZk9yRXh0ZW5kKHJlc3VsdCwga28ub2JzZXJ2YWJsZUFycmF5WydmbiddKTtcbiAgICByZXR1cm4gcmVzdWx0LmV4dGVuZCh7J3RyYWNrQXJyYXlDaGFuZ2VzJzp0cnVlfSk7XG59O1xuXG5rby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ10gPSB7XG4gICAgJ3JlbW92ZSc6IGZ1bmN0aW9uICh2YWx1ZU9yUHJlZGljYXRlKSB7XG4gICAgICAgIHZhciB1bmRlcmx5aW5nQXJyYXkgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgdmFyIHJlbW92ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdmFyIHByZWRpY2F0ZSA9IHR5cGVvZiB2YWx1ZU9yUHJlZGljYXRlID09IFwiZnVuY3Rpb25cIiAmJiAha28uaXNPYnNlcnZhYmxlKHZhbHVlT3JQcmVkaWNhdGUpID8gdmFsdWVPclByZWRpY2F0ZSA6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgPT09IHZhbHVlT3JQcmVkaWNhdGU7IH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5kZXJseWluZ0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB1bmRlcmx5aW5nQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlV2lsbE11dGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW1vdmVkVmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHVuZGVybHlpbmdBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUhhc011dGF0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3ZlZFZhbHVlcztcbiAgICB9LFxuXG4gICAgJ3JlbW92ZUFsbCc6IGZ1bmN0aW9uIChhcnJheU9mVmFsdWVzKSB7XG4gICAgICAgIC8vIElmIHlvdSBwYXNzZWQgemVybyBhcmdzLCB3ZSByZW1vdmUgZXZlcnl0aGluZ1xuICAgICAgICBpZiAoYXJyYXlPZlZhbHVlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgdW5kZXJseWluZ0FycmF5ID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgYWxsVmFsdWVzID0gdW5kZXJseWluZ0FycmF5LnNsaWNlKDApO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVdpbGxNdXRhdGUoKTtcbiAgICAgICAgICAgIHVuZGVybHlpbmdBcnJheS5zcGxpY2UoMCwgdW5kZXJseWluZ0FycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlSGFzTXV0YXRlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGFsbFZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB5b3UgcGFzc2VkIGFuIGFyZywgd2UgaW50ZXJwcmV0IGl0IGFzIGFuIGFycmF5IG9mIGVudHJpZXMgdG8gcmVtb3ZlXG4gICAgICAgIGlmICghYXJyYXlPZlZhbHVlcylcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXNbJ3JlbW92ZSddKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheU9mVmFsdWVzLCB2YWx1ZSkgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgICdkZXN0cm95JzogZnVuY3Rpb24gKHZhbHVlT3JQcmVkaWNhdGUpIHtcbiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpO1xuICAgICAgICB2YXIgcHJlZGljYXRlID0gdHlwZW9mIHZhbHVlT3JQcmVkaWNhdGUgPT0gXCJmdW5jdGlvblwiICYmICFrby5pc09ic2VydmFibGUodmFsdWVPclByZWRpY2F0ZSkgPyB2YWx1ZU9yUHJlZGljYXRlIDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gdmFsdWVPclByZWRpY2F0ZTsgfTtcbiAgICAgICAgdGhpcy52YWx1ZVdpbGxNdXRhdGUoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHVuZGVybHlpbmdBcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdW5kZXJseWluZ0FycmF5W2ldO1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgdW5kZXJseWluZ0FycmF5W2ldW1wiX2Rlc3Ryb3lcIl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWVIYXNNdXRhdGVkKCk7XG4gICAgfSxcblxuICAgICdkZXN0cm95QWxsJzogZnVuY3Rpb24gKGFycmF5T2ZWYWx1ZXMpIHtcbiAgICAgICAgLy8gSWYgeW91IHBhc3NlZCB6ZXJvIGFyZ3MsIHdlIGRlc3Ryb3kgZXZlcnl0aGluZ1xuICAgICAgICBpZiAoYXJyYXlPZlZhbHVlcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbJ2Rlc3Ryb3knXShmdW5jdGlvbigpIHsgcmV0dXJuIHRydWUgfSk7XG5cbiAgICAgICAgLy8gSWYgeW91IHBhc3NlZCBhbiBhcmcsIHdlIGludGVycHJldCBpdCBhcyBhbiBhcnJheSBvZiBlbnRyaWVzIHRvIGRlc3Ryb3lcbiAgICAgICAgaWYgKCFhcnJheU9mVmFsdWVzKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICByZXR1cm4gdGhpc1snZGVzdHJveSddKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheU9mVmFsdWVzLCB2YWx1ZSkgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgICdpbmRleE9mJzogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMoKTtcbiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZih1bmRlcmx5aW5nQXJyYXksIGl0ZW0pO1xuICAgIH0sXG5cbiAgICAncmVwbGFjZSc6IGZ1bmN0aW9uKG9sZEl0ZW0sIG5ld0l0ZW0pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpc1snaW5kZXhPZiddKG9sZEl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVdpbGxNdXRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucGVlaygpW2luZGV4XSA9IG5ld0l0ZW07XG4gICAgICAgICAgICB0aGlzLnZhbHVlSGFzTXV0YXRlZCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gTm90ZSB0aGF0IGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgcHJvdG8gYXNzaWdubWVudCwgdGhlXG4vLyBpbmhlcml0YW5jZSBjaGFpbiBpcyBjcmVhdGVkIG1hbnVhbGx5IGluIHRoZSBrby5vYnNlcnZhYmxlQXJyYXkgY29uc3RydWN0b3JcbmlmIChrby51dGlscy5jYW5TZXRQcm90b3R5cGUpIHtcbiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZihrby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ10sIGtvLm9ic2VydmFibGVbJ2ZuJ10pO1xufVxuXG4vLyBQb3B1bGF0ZSBrby5vYnNlcnZhYmxlQXJyYXkuZm4gd2l0aCByZWFkL3dyaXRlIGZ1bmN0aW9ucyBmcm9tIG5hdGl2ZSBhcnJheXNcbi8vIEltcG9ydGFudDogRG8gbm90IGFkZCBhbnkgYWRkaXRpb25hbCBmdW5jdGlvbnMgaGVyZSB0aGF0IG1heSByZWFzb25hYmx5IGJlIHVzZWQgdG8gKnJlYWQqIGRhdGEgZnJvbSB0aGUgYXJyYXlcbi8vIGJlY2F1c2Ugd2UnbGwgZXZhbCB0aGVtIHdpdGhvdXQgY2F1c2luZyBzdWJzY3JpcHRpb25zLCBzbyBrby5jb21wdXRlZCBvdXRwdXQgY291bGQgZW5kIHVwIGdldHRpbmcgc3RhbGVcbmtvLnV0aWxzLmFycmF5Rm9yRWFjaChbXCJwb3BcIiwgXCJwdXNoXCIsIFwicmV2ZXJzZVwiLCBcInNoaWZ0XCIsIFwic29ydFwiLCBcInNwbGljZVwiLCBcInVuc2hpZnRcIl0sIGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAga28ub2JzZXJ2YWJsZUFycmF5WydmbiddW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBVc2UgXCJwZWVrXCIgdG8gYXZvaWQgY3JlYXRpbmcgYSBzdWJzY3JpcHRpb24gaW4gYW55IGNvbXB1dGVkIHRoYXQgd2UncmUgZXhlY3V0aW5nIGluIHRoZSBjb250ZXh0IG9mXG4gICAgICAgIC8vIChmb3IgY29uc2lzdGVuY3kgd2l0aCBtdXRhdGluZyByZWd1bGFyIG9ic2VydmFibGVzKVxuICAgICAgICB2YXIgdW5kZXJseWluZ0FycmF5ID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIHRoaXMudmFsdWVXaWxsTXV0YXRlKCk7XG4gICAgICAgIHRoaXMuY2FjaGVEaWZmRm9yS25vd25PcGVyYXRpb24odW5kZXJseWluZ0FycmF5LCBtZXRob2ROYW1lLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgbWV0aG9kQ2FsbFJlc3VsdCA9IHVuZGVybHlpbmdBcnJheVttZXRob2ROYW1lXS5hcHBseSh1bmRlcmx5aW5nQXJyYXksIGFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFsdWVIYXNNdXRhdGVkKCk7XG4gICAgICAgIC8vIFRoZSBuYXRpdmUgc29ydCBhbmQgcmV2ZXJzZSBtZXRob2RzIHJldHVybiBhIHJlZmVyZW5jZSB0byB0aGUgYXJyYXksIGJ1dCBpdCBtYWtlcyBtb3JlIHNlbnNlIHRvIHJldHVybiB0aGUgb2JzZXJ2YWJsZSBhcnJheSBpbnN0ZWFkLlxuICAgICAgICByZXR1cm4gbWV0aG9kQ2FsbFJlc3VsdCA9PT0gdW5kZXJseWluZ0FycmF5ID8gdGhpcyA6IG1ldGhvZENhbGxSZXN1bHQ7XG4gICAgfTtcbn0pO1xuXG4vLyBQb3B1bGF0ZSBrby5vYnNlcnZhYmxlQXJyYXkuZm4gd2l0aCByZWFkLW9ubHkgZnVuY3Rpb25zIGZyb20gbmF0aXZlIGFycmF5c1xua28udXRpbHMuYXJyYXlGb3JFYWNoKFtcInNsaWNlXCJdLCBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgIGtvLm9ic2VydmFibGVBcnJheVsnZm4nXVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMoKTtcbiAgICAgICAgcmV0dXJuIHVuZGVybHlpbmdBcnJheVttZXRob2ROYW1lXS5hcHBseSh1bmRlcmx5aW5nQXJyYXksIGFyZ3VtZW50cyk7XG4gICAgfTtcbn0pO1xuXG5rby5leHBvcnRTeW1ib2woJ29ic2VydmFibGVBcnJheScsIGtvLm9ic2VydmFibGVBcnJheSk7XG52YXIgYXJyYXlDaGFuZ2VFdmVudE5hbWUgPSAnYXJyYXlDaGFuZ2UnO1xua28uZXh0ZW5kZXJzWyd0cmFja0FycmF5Q2hhbmdlcyddID0gZnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgLy8gVXNlIHRoZSBwcm92aWRlZCBvcHRpb25zLS1lYWNoIGNhbGwgdG8gdHJhY2tBcnJheUNoYW5nZXMgb3ZlcndyaXRlcyB0aGUgcHJldmlvdXNseSBzZXQgb3B0aW9uc1xuICAgIHRhcmdldC5jb21wYXJlQXJyYXlPcHRpb25zID0ge307XG4gICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT0gXCJvYmplY3RcIikge1xuICAgICAgICBrby51dGlscy5leHRlbmQodGFyZ2V0LmNvbXBhcmVBcnJheU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB0YXJnZXQuY29tcGFyZUFycmF5T3B0aW9uc1snc3BhcnNlJ10gPSB0cnVlO1xuXG4gICAgLy8gT25seSBtb2RpZnkgdGhlIHRhcmdldCBvYnNlcnZhYmxlIG9uY2VcbiAgICBpZiAodGFyZ2V0LmNhY2hlRGlmZkZvcktub3duT3BlcmF0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRyYWNraW5nQ2hhbmdlcyA9IGZhbHNlLFxuICAgICAgICBjYWNoZWREaWZmID0gbnVsbCxcbiAgICAgICAgYXJyYXlDaGFuZ2VTdWJzY3JpcHRpb24sXG4gICAgICAgIHBlbmRpbmdOb3RpZmljYXRpb25zID0gMCxcbiAgICAgICAgdW5kZXJseWluZ05vdGlmeVN1YnNjcmliZXJzRnVuY3Rpb24sXG4gICAgICAgIHVuZGVybHlpbmdCZWZvcmVTdWJzY3JpcHRpb25BZGRGdW5jdGlvbiA9IHRhcmdldC5iZWZvcmVTdWJzY3JpcHRpb25BZGQsXG4gICAgICAgIHVuZGVybHlpbmdBZnRlclN1YnNjcmlwdGlvblJlbW92ZUZ1bmN0aW9uID0gdGFyZ2V0LmFmdGVyU3Vic2NyaXB0aW9uUmVtb3ZlO1xuXG4gICAgLy8gV2F0Y2ggXCJzdWJzY3JpYmVcIiBjYWxscywgYW5kIGZvciBhcnJheSBjaGFuZ2UgZXZlbnRzLCBlbnN1cmUgY2hhbmdlIHRyYWNraW5nIGlzIGVuYWJsZWRcbiAgICB0YXJnZXQuYmVmb3JlU3Vic2NyaXB0aW9uQWRkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh1bmRlcmx5aW5nQmVmb3JlU3Vic2NyaXB0aW9uQWRkRnVuY3Rpb24pXG4gICAgICAgICAgICB1bmRlcmx5aW5nQmVmb3JlU3Vic2NyaXB0aW9uQWRkRnVuY3Rpb24uY2FsbCh0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgaWYgKGV2ZW50ID09PSBhcnJheUNoYW5nZUV2ZW50TmFtZSkge1xuICAgICAgICAgICAgdHJhY2tDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFdhdGNoIFwiZGlzcG9zZVwiIGNhbGxzLCBhbmQgZm9yIGFycmF5IGNoYW5nZSBldmVudHMsIGVuc3VyZSBjaGFuZ2UgdHJhY2tpbmcgaXMgZGlzYWJsZWQgd2hlbiBhbGwgYXJlIGRpc3Bvc2VkXG4gICAgdGFyZ2V0LmFmdGVyU3Vic2NyaXB0aW9uUmVtb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh1bmRlcmx5aW5nQWZ0ZXJTdWJzY3JpcHRpb25SZW1vdmVGdW5jdGlvbilcbiAgICAgICAgICAgIHVuZGVybHlpbmdBZnRlclN1YnNjcmlwdGlvblJlbW92ZUZ1bmN0aW9uLmNhbGwodGFyZ2V0LCBldmVudCk7XG4gICAgICAgIGlmIChldmVudCA9PT0gYXJyYXlDaGFuZ2VFdmVudE5hbWUgJiYgIXRhcmdldC5oYXNTdWJzY3JpcHRpb25zRm9yRXZlbnQoYXJyYXlDaGFuZ2VFdmVudE5hbWUpKSB7XG4gICAgICAgICAgICBpZiAodW5kZXJseWluZ05vdGlmeVN1YnNjcmliZXJzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbJ25vdGlmeVN1YnNjcmliZXJzJ10gPSB1bmRlcmx5aW5nTm90aWZ5U3Vic2NyaWJlcnNGdW5jdGlvbjtcbiAgICAgICAgICAgICAgICB1bmRlcmx5aW5nTm90aWZ5U3Vic2NyaWJlcnNGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFycmF5Q2hhbmdlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRyYWNraW5nQ2hhbmdlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHRyYWNrQ2hhbmdlcygpIHtcbiAgICAgICAgLy8gQ2FsbGluZyAndHJhY2tDaGFuZ2VzJyBtdWx0aXBsZSB0aW1lcyBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGl0IG9uY2VcbiAgICAgICAgaWYgKHRyYWNraW5nQ2hhbmdlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhY2tpbmdDaGFuZ2VzID0gdHJ1ZTtcblxuICAgICAgICAvLyBJbnRlcmNlcHQgXCJub3RpZnlTdWJzY3JpYmVyc1wiIHRvIHRyYWNrIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBjYWxsZWQuXG4gICAgICAgIHVuZGVybHlpbmdOb3RpZnlTdWJzY3JpYmVyc0Z1bmN0aW9uID0gdGFyZ2V0Wydub3RpZnlTdWJzY3JpYmVycyddO1xuICAgICAgICB0YXJnZXRbJ25vdGlmeVN1YnNjcmliZXJzJ10gPSBmdW5jdGlvbih2YWx1ZVRvTm90aWZ5LCBldmVudCkge1xuICAgICAgICAgICAgaWYgKCFldmVudCB8fCBldmVudCA9PT0gZGVmYXVsdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgKytwZW5kaW5nTm90aWZpY2F0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlcmx5aW5nTm90aWZ5U3Vic2NyaWJlcnNGdW5jdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEVhY2ggdGltZSB0aGUgYXJyYXkgY2hhbmdlcyB2YWx1ZSwgY2FwdHVyZSBhIGNsb25lIHNvIHRoYXQgb24gdGhlIG5leHRcbiAgICAgICAgLy8gY2hhbmdlIGl0J3MgcG9zc2libGUgdG8gcHJvZHVjZSBhIGRpZmZcbiAgICAgICAgdmFyIHByZXZpb3VzQ29udGVudHMgPSBbXS5jb25jYXQodGFyZ2V0LnBlZWsoKSB8fCBbXSk7XG4gICAgICAgIGNhY2hlZERpZmYgPSBudWxsO1xuICAgICAgICBhcnJheUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRhcmdldC5zdWJzY3JpYmUoZnVuY3Rpb24oY3VycmVudENvbnRlbnRzKSB7XG4gICAgICAgICAgICAvLyBNYWtlIGEgY29weSBvZiB0aGUgY3VycmVudCBjb250ZW50cyBhbmQgZW5zdXJlIGl0J3MgYW4gYXJyYXlcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZW50cyA9IFtdLmNvbmNhdChjdXJyZW50Q29udGVudHMgfHwgW10pO1xuXG4gICAgICAgICAgICAvLyBDb21wdXRlIHRoZSBkaWZmIGFuZCBpc3N1ZSBub3RpZmljYXRpb25zLCBidXQgb25seSBpZiBzb21lb25lIGlzIGxpc3RlbmluZ1xuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNTdWJzY3JpcHRpb25zRm9yRXZlbnQoYXJyYXlDaGFuZ2VFdmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZXMgPSBnZXRDaGFuZ2VzKHByZXZpb3VzQ29udGVudHMsIGN1cnJlbnRDb250ZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVsaW1pbmF0ZSByZWZlcmVuY2VzIHRvIHRoZSBvbGQsIHJlbW92ZWQgaXRlbXMsIHNvIHRoZXkgY2FuIGJlIEdDZWRcbiAgICAgICAgICAgIHByZXZpb3VzQ29udGVudHMgPSBjdXJyZW50Q29udGVudHM7XG4gICAgICAgICAgICBjYWNoZWREaWZmID0gbnVsbDtcbiAgICAgICAgICAgIHBlbmRpbmdOb3RpZmljYXRpb25zID0gMDtcblxuICAgICAgICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbJ25vdGlmeVN1YnNjcmliZXJzJ10oY2hhbmdlcywgYXJyYXlDaGFuZ2VFdmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDaGFuZ2VzKHByZXZpb3VzQ29udGVudHMsIGN1cnJlbnRDb250ZW50cykge1xuICAgICAgICAvLyBXZSB0cnkgdG8gcmUtdXNlIGNhY2hlZCBkaWZmcy5cbiAgICAgICAgLy8gVGhlIHNjZW5hcmlvcyB3aGVyZSBwZW5kaW5nTm90aWZpY2F0aW9ucyA+IDEgYXJlIHdoZW4gdXNpbmcgcmF0ZS1saW1pdGluZyBvciB0aGUgRGVmZXJyZWQgVXBkYXRlc1xuICAgICAgICAvLyBwbHVnaW4sIHdoaWNoIHdpdGhvdXQgdGhpcyBjaGVjayB3b3VsZCBub3QgYmUgY29tcGF0aWJsZSB3aXRoIGFycmF5Q2hhbmdlIG5vdGlmaWNhdGlvbnMuIE5vcm1hbGx5LFxuICAgICAgICAvLyBub3RpZmljYXRpb25zIGFyZSBpc3N1ZWQgaW1tZWRpYXRlbHkgc28gd2Ugd291bGRuJ3QgYmUgcXVldWVpbmcgdXAgbW9yZSB0aGFuIG9uZS5cbiAgICAgICAgaWYgKCFjYWNoZWREaWZmIHx8IHBlbmRpbmdOb3RpZmljYXRpb25zID4gMSkge1xuICAgICAgICAgICAgY2FjaGVkRGlmZiA9IGtvLnV0aWxzLmNvbXBhcmVBcnJheXMocHJldmlvdXNDb250ZW50cywgY3VycmVudENvbnRlbnRzLCB0YXJnZXQuY29tcGFyZUFycmF5T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FjaGVkRGlmZjtcbiAgICB9XG5cbiAgICB0YXJnZXQuY2FjaGVEaWZmRm9yS25vd25PcGVyYXRpb24gPSBmdW5jdGlvbihyYXdBcnJheSwgb3BlcmF0aW9uTmFtZSwgYXJncykge1xuICAgICAgICAvLyBPbmx5IHJ1biBpZiB3ZSdyZSBjdXJyZW50bHkgdHJhY2tpbmcgY2hhbmdlcyBmb3IgdGhpcyBvYnNlcnZhYmxlIGFycmF5XG4gICAgICAgIC8vIGFuZCB0aGVyZSBhcmVuJ3QgYW55IHBlbmRpbmcgZGVmZXJyZWQgbm90aWZpY2F0aW9ucy5cbiAgICAgICAgaWYgKCF0cmFja2luZ0NoYW5nZXMgfHwgcGVuZGluZ05vdGlmaWNhdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlmZiA9IFtdLFxuICAgICAgICAgICAgYXJyYXlMZW5ndGggPSByYXdBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGgsXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHB1c2hEaWZmKHN0YXR1cywgdmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZGlmZltkaWZmLmxlbmd0aF0gPSB7ICdzdGF0dXMnOiBzdGF0dXMsICd2YWx1ZSc6IHZhbHVlLCAnaW5kZXgnOiBpbmRleCB9O1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAob3BlcmF0aW9uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gYXJyYXlMZW5ndGg7XG4gICAgICAgICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJnc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoRGlmZignYWRkZWQnLCBhcmdzW2luZGV4XSwgb2Zmc2V0ICsgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncG9wJzpcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBhcnJheUxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjYXNlICdzaGlmdCc6XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hEaWZmKCdkZWxldGVkJywgcmF3QXJyYXlbb2Zmc2V0XSwgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgICAgICAgICAgLy8gTmVnYXRpdmUgc3RhcnQgaW5kZXggbWVhbnMgJ2Zyb20gZW5kIG9mIGFycmF5Jy4gQWZ0ZXIgdGhhdCB3ZSBjbGFtcCB0byBbMC4uLmFycmF5TGVuZ3RoXS5cbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc3BsaWNlXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBhcmdzWzBdIDwgMCA/IGFycmF5TGVuZ3RoICsgYXJnc1swXSA6IGFyZ3NbMF0pLCBhcnJheUxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgIGVuZERlbGV0ZUluZGV4ID0gYXJnc0xlbmd0aCA9PT0gMSA/IGFycmF5TGVuZ3RoIDogTWF0aC5taW4oc3RhcnRJbmRleCArIChhcmdzWzFdIHx8IDApLCBhcnJheUxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgIGVuZEFkZEluZGV4ID0gc3RhcnRJbmRleCArIGFyZ3NMZW5ndGggLSAyLFxuICAgICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IE1hdGgubWF4KGVuZERlbGV0ZUluZGV4LCBlbmRBZGRJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9ucyA9IFtdLCBkZWxldGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IHN0YXJ0SW5kZXgsIGFyZ3NJbmRleCA9IDI7IGluZGV4IDwgZW5kSW5kZXg7ICsraW5kZXgsICsrYXJnc0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGVuZERlbGV0ZUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRpb25zLnB1c2gocHVzaERpZmYoJ2RlbGV0ZWQnLCByYXdBcnJheVtpbmRleF0sIGluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGVuZEFkZEluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25zLnB1c2gocHVzaERpZmYoJ2FkZGVkJywgYXJnc1thcmdzSW5kZXhdLCBpbmRleCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrby51dGlscy5maW5kTW92ZXNJbkFycmF5Q29tcGFyaXNvbihkZWxldGlvbnMsIGFkZGl0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhY2hlZERpZmYgPSBkaWZmO1xuICAgIH07XG59O1xudmFyIGNvbXB1dGVkU3RhdGUgPSBrby51dGlscy5jcmVhdGVTeW1ib2xPclN0cmluZygnX3N0YXRlJyk7XG5cbmtvLmNvbXB1dGVkID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucywgZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIC8vIFNpbmdsZS1wYXJhbWV0ZXIgc3ludGF4IC0gZXZlcnl0aGluZyBpcyBvbiB0aGlzIFwib3B0aW9uc1wiIHBhcmFtXG4gICAgICAgIG9wdGlvbnMgPSBldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNdWx0aS1wYXJhbWV0ZXIgc3ludGF4IC0gY29uc3RydWN0IHRoZSBvcHRpb25zIGFjY29yZGluZyB0byB0aGUgcGFyYW1zIHBhc3NlZFxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgaWYgKGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zW1wicmVhZFwiXSA9IGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tcInJlYWRcIl0gIT0gXCJmdW5jdGlvblwiKVxuICAgICAgICB0aHJvdyBFcnJvcihcIlBhc3MgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBrby5jb21wdXRlZFwiKTtcblxuICAgIHZhciB3cml0ZUZ1bmN0aW9uID0gb3B0aW9uc1tcIndyaXRlXCJdO1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgbGF0ZXN0VmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNTdGFsZTogdHJ1ZSxcbiAgICAgICAgaXNEaXJ0eTogdHJ1ZSxcbiAgICAgICAgaXNCZWluZ0V2YWx1YXRlZDogZmFsc2UsXG4gICAgICAgIHN1cHByZXNzRGlzcG9zYWxVbnRpbERpc3Bvc2VXaGVuUmV0dXJuc0ZhbHNlOiBmYWxzZSxcbiAgICAgICAgaXNEaXNwb3NlZDogZmFsc2UsXG4gICAgICAgIHB1cmU6IGZhbHNlLFxuICAgICAgICBpc1NsZWVwaW5nOiBmYWxzZSxcbiAgICAgICAgcmVhZEZ1bmN0aW9uOiBvcHRpb25zW1wicmVhZFwiXSxcbiAgICAgICAgZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQ6IGV2YWx1YXRvckZ1bmN0aW9uVGFyZ2V0IHx8IG9wdGlvbnNbXCJvd25lclwiXSxcbiAgICAgICAgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBvcHRpb25zW1wiZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkXCJdIHx8IG9wdGlvbnMuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkIHx8IG51bGwsXG4gICAgICAgIGRpc3Bvc2VXaGVuOiBvcHRpb25zW1wiZGlzcG9zZVdoZW5cIl0gfHwgb3B0aW9ucy5kaXNwb3NlV2hlbixcbiAgICAgICAgZG9tTm9kZURpc3Bvc2FsQ2FsbGJhY2s6IG51bGwsXG4gICAgICAgIGRlcGVuZGVuY3lUcmFja2luZzoge30sXG4gICAgICAgIGRlcGVuZGVuY2llc0NvdW50OiAwLFxuICAgICAgICBldmFsdWF0aW9uVGltZW91dEluc3RhbmNlOiBudWxsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVkT2JzZXJ2YWJsZSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyaXRlRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdyaXRpbmcgYSB2YWx1ZVxuICAgICAgICAgICAgICAgIHdyaXRlRnVuY3Rpb24uYXBwbHkoc3RhdGUuZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB3cml0ZSBhIHZhbHVlIHRvIGEga28uY29tcHV0ZWQgdW5sZXNzIHlvdSBzcGVjaWZ5IGEgJ3dyaXRlJyBvcHRpb24uIElmIHlvdSB3aXNoIHRvIHJlYWQgdGhlIGN1cnJlbnQgdmFsdWUsIGRvbid0IHBhc3MgYW55IHBhcmFtZXRlcnMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7IC8vIFBlcm1pdHMgY2hhaW5lZCBhc3NpZ25tZW50c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVhZGluZyB0aGUgdmFsdWVcbiAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24ucmVnaXN0ZXJEZXBlbmRlbmN5KGNvbXB1dGVkT2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaXNEaXJ0eSB8fCAoc3RhdGUuaXNTbGVlcGluZyAmJiBjb21wdXRlZE9ic2VydmFibGUuaGF2ZURlcGVuZGVuY2llc0NoYW5nZWQoKSkpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGUuZXZhbHVhdGVJbW1lZGlhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5sYXRlc3RWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkT2JzZXJ2YWJsZVtjb21wdXRlZFN0YXRlXSA9IHN0YXRlO1xuICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5oYXNXcml0ZUZ1bmN0aW9uID0gdHlwZW9mIHdyaXRlRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIjtcblxuICAgIC8vIEluaGVyaXQgZnJvbSAnc3Vic2NyaWJhYmxlJ1xuICAgIGlmICgha28udXRpbHMuY2FuU2V0UHJvdG90eXBlKSB7XG4gICAgICAgIC8vICdzdWJzY3JpYmFibGUnIHdvbid0IGJlIG9uIHRoZSBwcm90b3R5cGUgY2hhaW4gdW5sZXNzIHdlIHB1dCBpdCB0aGVyZSBkaXJlY3RseVxuICAgICAgICBrby51dGlscy5leHRlbmQoY29tcHV0ZWRPYnNlcnZhYmxlLCBrby5zdWJzY3JpYmFibGVbJ2ZuJ10pO1xuICAgIH1cbiAgICBrby5zdWJzY3JpYmFibGVbJ2ZuJ10uaW5pdChjb21wdXRlZE9ic2VydmFibGUpO1xuXG4gICAgLy8gSW5oZXJpdCBmcm9tICdjb21wdXRlZCdcbiAgICBrby51dGlscy5zZXRQcm90b3R5cGVPZk9yRXh0ZW5kKGNvbXB1dGVkT2JzZXJ2YWJsZSwgY29tcHV0ZWRGbik7XG5cbiAgICBpZiAob3B0aW9uc1sncHVyZSddKSB7XG4gICAgICAgIHN0YXRlLnB1cmUgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5pc1NsZWVwaW5nID0gdHJ1ZTsgICAgIC8vIFN0YXJ0cyBvZmYgc2xlZXBpbmc7IHdpbGwgYXdha2Ugb24gdGhlIGZpcnN0IHN1YnNjcmlwdGlvblxuICAgICAgICBrby51dGlscy5leHRlbmQoY29tcHV0ZWRPYnNlcnZhYmxlLCBwdXJlQ29tcHV0ZWRPdmVycmlkZXMpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uc1snZGVmZXJFdmFsdWF0aW9uJ10pIHtcbiAgICAgICAga28udXRpbHMuZXh0ZW5kKGNvbXB1dGVkT2JzZXJ2YWJsZSwgZGVmZXJFdmFsdWF0aW9uT3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoa28ub3B0aW9uc1snZGVmZXJVcGRhdGVzJ10pIHtcbiAgICAgICAga28uZXh0ZW5kZXJzWydkZWZlcnJlZCddKGNvbXB1dGVkT2JzZXJ2YWJsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKERFQlVHKSB7XG4gICAgICAgIC8vICMxNzMxIC0gQWlkIGRlYnVnZ2luZyBieSBleHBvc2luZyB0aGUgY29tcHV0ZWQncyBvcHRpb25zXG4gICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZVtcIl9vcHRpb25zXCJdID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkKSB7XG4gICAgICAgIC8vIFNpbmNlIHRoaXMgY29tcHV0ZWQgaXMgYXNzb2NpYXRlZCB3aXRoIGEgRE9NIG5vZGUsIGFuZCB3ZSBkb24ndCB3YW50IHRvIGRpc3Bvc2UgdGhlIGNvbXB1dGVkXG4gICAgICAgIC8vIHVudGlsIHRoZSBET00gbm9kZSBpcyAqcmVtb3ZlZCogZnJvbSB0aGUgZG9jdW1lbnQgKGFzIG9wcG9zZWQgdG8gbmV2ZXIgaGF2aW5nIGJlZW4gaW4gdGhlIGRvY3VtZW50KSxcbiAgICAgICAgLy8gd2UnbGwgcHJldmVudCBkaXNwb3NhbCB1bnRpbCBcImRpc3Bvc2VXaGVuXCIgZmlyc3QgcmV0dXJucyBmYWxzZS5cbiAgICAgICAgc3RhdGUuc3VwcHJlc3NEaXNwb3NhbFVudGlsRGlzcG9zZVdoZW5SZXR1cm5zRmFsc2UgPSB0cnVlO1xuXG4gICAgICAgIC8vIGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogdHJ1ZSBjYW4gYmUgdXNlZCB0byBvcHQgaW50byB0aGUgXCJvbmx5IGRpc3Bvc2UgYWZ0ZXIgZmlyc3QgZmFsc2UgcmVzdWx0XCJcbiAgICAgICAgLy8gYmVoYXZpb3VyIGV2ZW4gaWYgdGhlcmUncyBubyBzcGVjaWZpYyBub2RlIHRvIHdhdGNoLiBJbiB0aGF0IGNhc2UsIGNsZWFyIHRoZSBvcHRpb24gc28gd2UgZG9uJ3QgdHJ5XG4gICAgICAgIC8vIHRvIHdhdGNoIGZvciBhIG5vbi1ub2RlJ3MgZGlzcG9zYWwuIFRoaXMgdGVjaG5pcXVlIGlzIGludGVuZGVkIGZvciBLTydzIGludGVybmFsIHVzZSBvbmx5IGFuZCBzaG91bGRuJ3RcbiAgICAgICAgLy8gYmUgZG9jdW1lbnRlZCBvciB1c2VkIGJ5IGFwcGxpY2F0aW9uIGNvZGUsIGFzIGl0J3MgbGlrZWx5IHRvIGNoYW5nZSBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIEtPLlxuICAgICAgICBpZiAoIXN0YXRlLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV2YWx1YXRlLCB1bmxlc3Mgc2xlZXBpbmcgb3IgZGVmZXJFdmFsdWF0aW9uIGlzIHRydWVcbiAgICBpZiAoIXN0YXRlLmlzU2xlZXBpbmcgJiYgIW9wdGlvbnNbJ2RlZmVyRXZhbHVhdGlvbiddKSB7XG4gICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5ldmFsdWF0ZUltbWVkaWF0ZSgpO1xuICAgIH1cblxuICAgIC8vIEF0dGFjaCBhIERPTSBub2RlIGRpc3Bvc2FsIGNhbGxiYWNrIHNvIHRoYXQgdGhlIGNvbXB1dGVkIHdpbGwgYmUgcHJvYWN0aXZlbHkgZGlzcG9zZWQgYXMgc29vbiBhcyB0aGUgbm9kZSBpc1xuICAgIC8vIHJlbW92ZWQgdXNpbmcga28ucmVtb3ZlTm9kZS4gQnV0IHNraXAgaWYgaXNBY3RpdmUgaXMgZmFsc2UgKHRoZXJlIHdpbGwgbmV2ZXIgYmUgYW55IGRlcGVuZGVuY2llcyB0byBkaXNwb3NlKS5cbiAgICBpZiAoc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkICYmIGNvbXB1dGVkT2JzZXJ2YWJsZS5pc0FjdGl2ZSgpKSB7XG4gICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkLCBzdGF0ZS5kb21Ob2RlRGlzcG9zYWxDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5kaXNwb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wdXRlZE9ic2VydmFibGU7XG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uIHRoYXQgZGlzcG9zZXMgYSBnaXZlbiBkZXBlbmRlbmN5VHJhY2tpbmcgZW50cnlcbmZ1bmN0aW9uIGNvbXB1dGVkRGlzcG9zZURlcGVuZGVuY3lDYWxsYmFjayhpZCwgZW50cnlUb0Rpc3Bvc2UpIHtcbiAgICBpZiAoZW50cnlUb0Rpc3Bvc2UgIT09IG51bGwgJiYgZW50cnlUb0Rpc3Bvc2UuZGlzcG9zZSkge1xuICAgICAgICBlbnRyeVRvRGlzcG9zZS5kaXNwb3NlKCk7XG4gICAgfVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGVhY2ggdGltZSBhIGRlcGVuZGVuY3kgaXMgZGV0ZWN0ZWQgd2hpbGUgZXZhbHVhdGluZyBhIGNvbXB1dGVkLlxuLy8gSXQncyBmYWN0b3JlZCBvdXQgYXMgYSBzaGFyZWQgZnVuY3Rpb24gdG8gYXZvaWQgY3JlYXRpbmcgdW5uZWNlc3NhcnkgZnVuY3Rpb24gaW5zdGFuY2VzIGR1cmluZyBldmFsdWF0aW9uLlxuZnVuY3Rpb24gY29tcHV0ZWRCZWdpbkRlcGVuZGVuY3lEZXRlY3Rpb25DYWxsYmFjayhzdWJzY3JpYmFibGUsIGlkKSB7XG4gICAgdmFyIGNvbXB1dGVkT2JzZXJ2YWJsZSA9IHRoaXMuY29tcHV0ZWRPYnNlcnZhYmxlLFxuICAgICAgICBzdGF0ZSA9IGNvbXB1dGVkT2JzZXJ2YWJsZVtjb21wdXRlZFN0YXRlXTtcbiAgICBpZiAoIXN0YXRlLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcG9zYWxDb3VudCAmJiB0aGlzLmRpc3Bvc2FsQ2FuZGlkYXRlc1tpZF0pIHtcbiAgICAgICAgICAgIC8vIERvbid0IHdhbnQgdG8gZGlzcG9zZSB0aGlzIHN1YnNjcmlwdGlvbiwgYXMgaXQncyBzdGlsbCBiZWluZyB1c2VkXG4gICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGUuYWRkRGVwZW5kZW5jeVRyYWNraW5nKGlkLCBzdWJzY3JpYmFibGUsIHRoaXMuZGlzcG9zYWxDYW5kaWRhdGVzW2lkXSk7XG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2FsQ2FuZGlkYXRlc1tpZF0gPSBudWxsOyAvLyBObyBuZWVkIHRvIGFjdHVhbGx5IGRlbGV0ZSB0aGUgcHJvcGVydHkgLSBkaXNwb3NhbENhbmRpZGF0ZXMgaXMgYSB0cmFuc2llbnQgb2JqZWN0IGFueXdheVxuICAgICAgICAgICAgLS10aGlzLmRpc3Bvc2FsQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLmRlcGVuZGVuY3lUcmFja2luZ1tpZF0pIHtcbiAgICAgICAgICAgIC8vIEJyYW5kIG5ldyBzdWJzY3JpcHRpb24gLSBhZGQgaXRcbiAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5hZGREZXBlbmRlbmN5VHJhY2tpbmcoaWQsIHN1YnNjcmliYWJsZSwgc3RhdGUuaXNTbGVlcGluZyA/IHsgX3RhcmdldDogc3Vic2NyaWJhYmxlIH0gOiBjb21wdXRlZE9ic2VydmFibGUuc3Vic2NyaWJlVG9EZXBlbmRlbmN5KHN1YnNjcmliYWJsZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBvYnNlcnZhYmxlIHdlJ3ZlIGFjY2Vzc2VkIGhhcyBhIHBlbmRpbmcgbm90aWZpY2F0aW9uLCBlbnN1cmUgd2UgZ2V0IG5vdGlmaWVkIG9mIHRoZSBhY3R1YWwgZmluYWwgdmFsdWUgKGJ5cGFzcyBlcXVhbGl0eSBjaGVja3MpXG4gICAgICAgIGlmIChzdWJzY3JpYmFibGUuX25vdGlmaWNhdGlvbklzUGVuZGluZykge1xuICAgICAgICAgICAgc3Vic2NyaWJhYmxlLl9ub3RpZnlOZXh0Q2hhbmdlSWZWYWx1ZUlzRGlmZmVyZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBjb21wdXRlZEZuID0ge1xuICAgIFwiZXF1YWxpdHlDb21wYXJlclwiOiB2YWx1ZXNBcmVQcmltaXRpdmVBbmRFcXVhbCxcbiAgICBnZXREZXBlbmRlbmNpZXNDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tjb21wdXRlZFN0YXRlXS5kZXBlbmRlbmNpZXNDb3VudDtcbiAgICB9LFxuICAgIGFkZERlcGVuZGVuY3lUcmFja2luZzogZnVuY3Rpb24gKGlkLCB0YXJnZXQsIHRyYWNraW5nT2JqKSB7XG4gICAgICAgIGlmICh0aGlzW2NvbXB1dGVkU3RhdGVdLnB1cmUgJiYgdGFyZ2V0ID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkEgJ3B1cmUnIGNvbXB1dGVkIG11c3Qgbm90IGJlIGNhbGxlZCByZWN1cnNpdmVseVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbY29tcHV0ZWRTdGF0ZV0uZGVwZW5kZW5jeVRyYWNraW5nW2lkXSA9IHRyYWNraW5nT2JqO1xuICAgICAgICB0cmFja2luZ09iai5fb3JkZXIgPSB0aGlzW2NvbXB1dGVkU3RhdGVdLmRlcGVuZGVuY2llc0NvdW50Kys7XG4gICAgICAgIHRyYWNraW5nT2JqLl92ZXJzaW9uID0gdGFyZ2V0LmdldFZlcnNpb24oKTtcbiAgICB9LFxuICAgIGhhdmVEZXBlbmRlbmNpZXNDaGFuZ2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCwgZGVwZW5kZW5jeSwgZGVwZW5kZW5jeVRyYWNraW5nID0gdGhpc1tjb21wdXRlZFN0YXRlXS5kZXBlbmRlbmN5VHJhY2tpbmc7XG4gICAgICAgIGZvciAoaWQgaW4gZGVwZW5kZW5jeVRyYWNraW5nKSB7XG4gICAgICAgICAgICBpZiAoZGVwZW5kZW5jeVRyYWNraW5nLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgICAgIGRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5VHJhY2tpbmdbaWRdO1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5fZXZhbERlbGF5ZWQgJiYgZGVwZW5kZW5jeS5fdGFyZ2V0Ll9ub3RpZmljYXRpb25Jc1BlbmRpbmcpIHx8IGRlcGVuZGVuY3kuX3RhcmdldC5oYXNDaGFuZ2VkKGRlcGVuZGVuY3kuX3ZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWFya0RpcnR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFByb2Nlc3MgXCJkaXJ0eVwiIGV2ZW50cyBpZiB3ZSBjYW4gaGFuZGxlIGRlbGF5ZWQgbm90aWZpY2F0aW9uc1xuICAgICAgICBpZiAodGhpcy5fZXZhbERlbGF5ZWQgJiYgIXRoaXNbY29tcHV0ZWRTdGF0ZV0uaXNCZWluZ0V2YWx1YXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fZXZhbERlbGF5ZWQoZmFsc2UgLyppc0NoYW5nZSovKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpc1tjb21wdXRlZFN0YXRlXTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmlzRGlydHkgfHwgc3RhdGUuZGVwZW5kZW5jaWVzQ291bnQgPiAwO1xuICAgIH0sXG4gICAgcmVzcG9uZFRvQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElnbm9yZSBcImNoYW5nZVwiIGV2ZW50cyBpZiB3ZSd2ZSBhbHJlYWR5IHNjaGVkdWxlZCBhIGRlbGF5ZWQgbm90aWZpY2F0aW9uXG4gICAgICAgIGlmICghdGhpcy5fbm90aWZpY2F0aW9uSXNQZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmV2YWx1YXRlUG9zc2libHlBc3luYygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXNbY29tcHV0ZWRTdGF0ZV0uaXNEaXJ0eSkge1xuICAgICAgICAgICAgdGhpc1tjb21wdXRlZFN0YXRlXS5pc1N0YWxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc3Vic2NyaWJlVG9EZXBlbmRlbmN5OiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQuX2RlZmVyVXBkYXRlcyAmJiAhdGhpc1tjb21wdXRlZFN0YXRlXS5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQpIHtcbiAgICAgICAgICAgIHZhciBkaXJ0eVN1YiA9IHRhcmdldC5zdWJzY3JpYmUodGhpcy5tYXJrRGlydHksIHRoaXMsICdkaXJ0eScpLFxuICAgICAgICAgICAgICAgIGNoYW5nZVN1YiA9IHRhcmdldC5zdWJzY3JpYmUodGhpcy5yZXNwb25kVG9DaGFuZ2UsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkaXJ0eVN1Yi5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVN1Yi5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuc3Vic2NyaWJlKHRoaXMuZXZhbHVhdGVQb3NzaWJseUFzeW5jLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZhbHVhdGVQb3NzaWJseUFzeW5jOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb21wdXRlZE9ic2VydmFibGUgPSB0aGlzLFxuICAgICAgICAgICAgdGhyb3R0bGVFdmFsdWF0aW9uVGltZW91dCA9IGNvbXB1dGVkT2JzZXJ2YWJsZVsndGhyb3R0bGVFdmFsdWF0aW9uJ107XG4gICAgICAgIGlmICh0aHJvdHRsZUV2YWx1YXRpb25UaW1lb3V0ICYmIHRocm90dGxlRXZhbHVhdGlvblRpbWVvdXQgPj0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXNbY29tcHV0ZWRTdGF0ZV0uZXZhbHVhdGlvblRpbWVvdXRJbnN0YW5jZSk7XG4gICAgICAgICAgICB0aGlzW2NvbXB1dGVkU3RhdGVdLmV2YWx1YXRpb25UaW1lb3V0SW5zdGFuY2UgPSBrby51dGlscy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGUuZXZhbHVhdGVJbW1lZGlhdGUodHJ1ZSAvKm5vdGlmeUNoYW5nZSovKTtcbiAgICAgICAgICAgIH0sIHRocm90dGxlRXZhbHVhdGlvblRpbWVvdXQpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXB1dGVkT2JzZXJ2YWJsZS5fZXZhbERlbGF5ZWQpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5fZXZhbERlbGF5ZWQodHJ1ZSAvKmlzQ2hhbmdlKi8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlLmV2YWx1YXRlSW1tZWRpYXRlKHRydWUgLypub3RpZnlDaGFuZ2UqLyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2YWx1YXRlSW1tZWRpYXRlOiBmdW5jdGlvbiAobm90aWZ5Q2hhbmdlKSB7XG4gICAgICAgIHZhciBjb21wdXRlZE9ic2VydmFibGUgPSB0aGlzLFxuICAgICAgICAgICAgc3RhdGUgPSBjb21wdXRlZE9ic2VydmFibGVbY29tcHV0ZWRTdGF0ZV0sXG4gICAgICAgICAgICBkaXNwb3NlV2hlbiA9IHN0YXRlLmRpc3Bvc2VXaGVuLFxuICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZS5pc0JlaW5nRXZhbHVhdGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZXZhbHVhdGlvbiBvZiBhIGtvLmNvbXB1dGVkIGNhdXNlcyBzaWRlIGVmZmVjdHMsIGl0J3MgcG9zc2libGUgdGhhdCBpdCB3aWxsIHRyaWdnZXIgaXRzIG93biByZS1ldmFsdWF0aW9uLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBub3QgZGVzaXJhYmxlIChpdCdzIGhhcmQgZm9yIGEgZGV2ZWxvcGVyIHRvIHJlYWxpc2UgYSBjaGFpbiBvZiBkZXBlbmRlbmNpZXMgbWlnaHQgY2F1c2UgdGhpcywgYW5kIHRoZXkgYWxtb3N0XG4gICAgICAgICAgICAvLyBjZXJ0YWlubHkgZGlkbid0IGludGVuZCBpbmZpbml0ZSByZS1ldmFsdWF0aW9ucykuIFNvLCBmb3IgcHJlZGljdGFiaWxpdHksIHdlIHNpbXBseSBwcmV2ZW50IGtvLmNvbXB1dGVkcyBmcm9tIGNhdXNpbmdcbiAgICAgICAgICAgIC8vIHRoZWlyIG93biByZS1ldmFsdWF0aW9uLiBGdXJ0aGVyIGRpc2N1c3Npb24gYXQgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L3B1bGwvMzg3XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEbyBub3QgZXZhbHVhdGUgKGFuZCBwb3NzaWJseSBjYXB0dXJlIG5ldyBkZXBlbmRlbmNpZXMpIGlmIGRpc3Bvc2VkXG4gICAgICAgIGlmIChzdGF0ZS5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkICYmICFrby51dGlscy5kb21Ob2RlSXNBdHRhY2hlZFRvRG9jdW1lbnQoc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkKSB8fCBkaXNwb3NlV2hlbiAmJiBkaXNwb3NlV2hlbigpKSB7XG4gICAgICAgICAgICAvLyBTZWUgY29tbWVudCBhYm92ZSBhYm91dCBzdXBwcmVzc0Rpc3Bvc2FsVW50aWxEaXNwb3NlV2hlblJldHVybnNGYWxzZVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zdXBwcmVzc0Rpc3Bvc2FsVW50aWxEaXNwb3NlV2hlblJldHVybnNGYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXQganVzdCBkaWQgcmV0dXJuIGZhbHNlLCBzbyB3ZSBjYW4gc3RvcCBzdXBwcmVzc2luZyBub3dcbiAgICAgICAgICAgIHN0YXRlLnN1cHByZXNzRGlzcG9zYWxVbnRpbERpc3Bvc2VXaGVuUmV0dXJuc0ZhbHNlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5pc0JlaW5nRXZhbHVhdGVkID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0aGlzLmV2YWx1YXRlSW1tZWRpYXRlX0NhbGxSZWFkV2l0aERlcGVuZGVuY3lEZXRlY3Rpb24obm90aWZ5Q2hhbmdlKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHN0YXRlLmlzQmVpbmdFdmFsdWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUuZGVwZW5kZW5jaWVzQ291bnQpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkT2JzZXJ2YWJsZS5kaXNwb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9LFxuICAgIGV2YWx1YXRlSW1tZWRpYXRlX0NhbGxSZWFkV2l0aERlcGVuZGVuY3lEZXRlY3Rpb246IGZ1bmN0aW9uIChub3RpZnlDaGFuZ2UpIHtcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZWFsbHkganVzdCBwYXJ0IG9mIHRoZSBldmFsdWF0ZUltbWVkaWF0ZSBsb2dpYy4gWW91IHdvdWxkIG5ldmVyIGNhbGwgaXQgZnJvbSBhbnl3aGVyZSBlbHNlLlxuICAgICAgICAvLyBGYWN0b3JpbmcgaXQgb3V0IGludG8gYSBzZXBhcmF0ZSBmdW5jdGlvbiBtZWFucyBpdCBjYW4gYmUgaW5kZXBlbmRlbnQgb2YgdGhlIHRyeS9jYXRjaCBibG9jayBpbiBldmFsdWF0ZUltbWVkaWF0ZSxcbiAgICAgICAgLy8gd2hpY2ggY29udHJpYnV0ZXMgdG8gc2F2aW5nIGFib3V0IDQwJSBvZmYgdGhlIENQVSBvdmVyaGVhZCBvZiBjb21wdXRlZCBldmFsdWF0aW9uIChvbiBWOCBhdCBsZWFzdCkuXG5cbiAgICAgICAgdmFyIGNvbXB1dGVkT2JzZXJ2YWJsZSA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IGNvbXB1dGVkT2JzZXJ2YWJsZVtjb21wdXRlZFN0YXRlXSxcbiAgICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBJbml0aWFsbHksIHdlIGFzc3VtZSB0aGF0IG5vbmUgb2YgdGhlIHN1YnNjcmlwdGlvbnMgYXJlIHN0aWxsIGJlaW5nIHVzZWQgKGkuZS4sIGFsbCBhcmUgY2FuZGlkYXRlcyBmb3IgZGlzcG9zYWwpLlxuICAgICAgICAvLyBUaGVuLCBkdXJpbmcgZXZhbHVhdGlvbiwgd2UgY3Jvc3Mgb2ZmIGFueSB0aGF0IGFyZSBpbiBmYWN0IHN0aWxsIGJlaW5nIHVzZWQuXG4gICAgICAgIHZhciBpc0luaXRpYWwgPSBzdGF0ZS5wdXJlID8gdW5kZWZpbmVkIDogIXN0YXRlLmRlcGVuZGVuY2llc0NvdW50LCAgIC8vIElmIHdlJ3JlIGV2YWx1YXRpbmcgd2hlbiB0aGVyZSBhcmUgbm8gcHJldmlvdXMgZGVwZW5kZW5jaWVzLCBpdCBtdXN0IGJlIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICBkZXBlbmRlbmN5RGV0ZWN0aW9uQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGU6IGNvbXB1dGVkT2JzZXJ2YWJsZSxcbiAgICAgICAgICAgICAgICBkaXNwb3NhbENhbmRpZGF0ZXM6IHN0YXRlLmRlcGVuZGVuY3lUcmFja2luZyxcbiAgICAgICAgICAgICAgICBkaXNwb3NhbENvdW50OiBzdGF0ZS5kZXBlbmRlbmNpZXNDb3VudFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmJlZ2luKHtcbiAgICAgICAgICAgIGNhbGxiYWNrVGFyZ2V0OiBkZXBlbmRlbmN5RGV0ZWN0aW9uQ29udGV4dCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjb21wdXRlZEJlZ2luRGVwZW5kZW5jeURldGVjdGlvbkNhbGxiYWNrLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IGNvbXB1dGVkT2JzZXJ2YWJsZSxcbiAgICAgICAgICAgIGlzSW5pdGlhbDogaXNJbml0aWFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YXRlLmRlcGVuZGVuY3lUcmFja2luZyA9IHt9O1xuICAgICAgICBzdGF0ZS5kZXBlbmRlbmNpZXNDb3VudCA9IDA7XG5cbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5ldmFsdWF0ZUltbWVkaWF0ZV9DYWxsUmVhZFRoZW5FbmREZXBlbmRlbmN5RGV0ZWN0aW9uKHN0YXRlLCBkZXBlbmRlbmN5RGV0ZWN0aW9uQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbXB1dGVkT2JzZXJ2YWJsZS5pc0RpZmZlcmVudChzdGF0ZS5sYXRlc3RWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXRlLmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGVbXCJub3RpZnlTdWJzY3JpYmVyc1wiXShzdGF0ZS5sYXRlc3RWYWx1ZSwgXCJiZWZvcmVDaGFuZ2VcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLmxhdGVzdFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAoREVCVUcpIGNvbXB1dGVkT2JzZXJ2YWJsZS5fbGF0ZXN0VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlLmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGUudXBkYXRlVmVyc2lvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub3RpZnlDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGVbXCJub3RpZnlTdWJzY3JpYmVyc1wiXShzdGF0ZS5sYXRlc3RWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbCkge1xuICAgICAgICAgICAgY29tcHV0ZWRPYnNlcnZhYmxlW1wibm90aWZ5U3Vic2NyaWJlcnNcIl0oc3RhdGUubGF0ZXN0VmFsdWUsIFwiYXdha2VcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9LFxuICAgIGV2YWx1YXRlSW1tZWRpYXRlX0NhbGxSZWFkVGhlbkVuZERlcGVuZGVuY3lEZXRlY3Rpb246IGZ1bmN0aW9uIChzdGF0ZSwgZGVwZW5kZW5jeURldGVjdGlvbkNvbnRleHQpIHtcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZWFsbHkgcGFydCBvZiB0aGUgZXZhbHVhdGVJbW1lZGlhdGVfQ2FsbFJlYWRXaXRoRGVwZW5kZW5jeURldGVjdGlvbiBsb2dpYy5cbiAgICAgICAgLy8gWW91J2QgbmV2ZXIgY2FsbCBpdCBmcm9tIGFueXdoZXJlIGVsc2UuIEZhY3RvcmluZyBpdCBvdXQgbWVhbnMgdGhhdCBldmFsdWF0ZUltbWVkaWF0ZV9DYWxsUmVhZFdpdGhEZXBlbmRlbmN5RGV0ZWN0aW9uXG4gICAgICAgIC8vIGNhbiBiZSBpbmRlcGVuZGVudCBvZiB0cnkvZmluYWxseSBibG9ja3MsIHdoaWNoIGNvbnRyaWJ1dGVzIHRvIHNhdmluZyBhYm91dCA0MCUgb2ZmIHRoZSBDUFVcbiAgICAgICAgLy8gb3ZlcmhlYWQgb2YgY29tcHV0ZWQgZXZhbHVhdGlvbiAob24gVjggYXQgbGVhc3QpLlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVhZEZ1bmN0aW9uID0gc3RhdGUucmVhZEZ1bmN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmV2YWx1YXRvckZ1bmN0aW9uVGFyZ2V0ID8gcmVhZEZ1bmN0aW9uLmNhbGwoc3RhdGUuZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQpIDogcmVhZEZ1bmN0aW9uKCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmVuZCgpO1xuXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBzdWJzY3JpcHRpb24gbm8gbG9uZ2VyIGJlaW5nIHVzZWQsIHJlbW92ZSBpdCBmcm9tIHRoZSBhY3RpdmUgc3Vic2NyaXB0aW9ucyBsaXN0IGFuZCBkaXNwb3NlIGl0XG4gICAgICAgICAgICBpZiAoZGVwZW5kZW5jeURldGVjdGlvbkNvbnRleHQuZGlzcG9zYWxDb3VudCAmJiAhc3RhdGUuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2goZGVwZW5kZW5jeURldGVjdGlvbkNvbnRleHQuZGlzcG9zYWxDYW5kaWRhdGVzLCBjb21wdXRlZERpc3Bvc2VEZXBlbmRlbmN5Q2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5pc1N0YWxlID0gc3RhdGUuaXNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwZWVrOiBmdW5jdGlvbiAoZXZhbHVhdGUpIHtcbiAgICAgICAgLy8gQnkgZGVmYXVsdCwgcGVlayB3b24ndCByZS1ldmFsdWF0ZSwgZXhjZXB0IHdoaWxlIHRoZSBjb21wdXRlZCBpcyBzbGVlcGluZyBvciB0byBnZXQgdGhlIGluaXRpYWwgdmFsdWUgd2hlbiBcImRlZmVyRXZhbHVhdGlvblwiIGlzIHNldC5cbiAgICAgICAgLy8gUGFzcyBpbiB0cnVlIHRvIGV2YWx1YXRlIGlmIG5lZWRlZC5cbiAgICAgICAgdmFyIHN0YXRlID0gdGhpc1tjb21wdXRlZFN0YXRlXTtcbiAgICAgICAgaWYgKChzdGF0ZS5pc0RpcnR5ICYmIChldmFsdWF0ZSB8fCAhc3RhdGUuZGVwZW5kZW5jaWVzQ291bnQpKSB8fCAoc3RhdGUuaXNTbGVlcGluZyAmJiB0aGlzLmhhdmVEZXBlbmRlbmNpZXNDaGFuZ2VkKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmV2YWx1YXRlSW1tZWRpYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlLmxhdGVzdFZhbHVlO1xuICAgIH0sXG4gICAgbGltaXQ6IGZ1bmN0aW9uIChsaW1pdEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIHRoZSBsaW1pdCBmdW5jdGlvbiB3aXRoIG9uZSB0aGF0IGRlbGF5cyBldmFsdWF0aW9uIGFzIHdlbGxcbiAgICAgICAga28uc3Vic2NyaWJhYmxlWydmbiddLmxpbWl0LmNhbGwodGhpcywgbGltaXRGdW5jdGlvbik7XG4gICAgICAgIHRoaXMuX2V2YWxJZkNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tjb21wdXRlZFN0YXRlXS5pc1N0YWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZUltbWVkaWF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzW2NvbXB1dGVkU3RhdGVdLmlzRGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzW2NvbXB1dGVkU3RhdGVdLmxhdGVzdFZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmFsRGVsYXllZCA9IGZ1bmN0aW9uIChpc0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5fbGltaXRCZWZvcmVDaGFuZ2UodGhpc1tjb21wdXRlZFN0YXRlXS5sYXRlc3RWYWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgYXMgZGlydHlcbiAgICAgICAgICAgIHRoaXNbY29tcHV0ZWRTdGF0ZV0uaXNEaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2NvbXB1dGVkU3RhdGVdLmlzU3RhbGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQYXNzIHRoZSBvYnNlcnZhYmxlIHRvIHRoZSBcImxpbWl0XCIgY29kZSwgd2hpY2ggd2lsbCBldmFsdWF0ZSBpdCB3aGVuXG4gICAgICAgICAgICAvLyBpdCdzIHRpbWUgdG8gZG8gdGhlIG5vdGlmaWNhdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX2xpbWl0Q2hhbmdlKHRoaXMpO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW2NvbXB1dGVkU3RhdGVdO1xuICAgICAgICBpZiAoIXN0YXRlLmlzU2xlZXBpbmcgJiYgc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nKSB7XG4gICAgICAgICAgICBrby51dGlscy5vYmplY3RGb3JFYWNoKHN0YXRlLmRlcGVuZGVuY3lUcmFja2luZywgZnVuY3Rpb24gKGlkLCBkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY3kuZGlzcG9zZSlcbiAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkICYmIHN0YXRlLmRvbU5vZGVEaXNwb3NhbENhbGxiYWNrKSB7XG4gICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwucmVtb3ZlRGlzcG9zZUNhbGxiYWNrKHN0YXRlLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCwgc3RhdGUuZG9tTm9kZURpc3Bvc2FsQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmRlcGVuZGVuY3lUcmFja2luZyA9IG51bGw7XG4gICAgICAgIHN0YXRlLmRlcGVuZGVuY2llc0NvdW50ID0gMDtcbiAgICAgICAgc3RhdGUuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHN0YXRlLmlzU3RhbGUgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuaXNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5pc1NsZWVwaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCA9IG51bGw7XG4gICAgfVxufTtcblxudmFyIHB1cmVDb21wdXRlZE92ZXJyaWRlcyA9IHtcbiAgICBiZWZvcmVTdWJzY3JpcHRpb25BZGQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBJZiBhc2xlZXAsIHdha2UgdXAgdGhlIGNvbXB1dGVkIGJ5IHN1YnNjcmliaW5nIHRvIGFueSBkZXBlbmRlbmNpZXMuXG4gICAgICAgIHZhciBjb21wdXRlZE9ic2VydmFibGUgPSB0aGlzLFxuICAgICAgICAgICAgc3RhdGUgPSBjb21wdXRlZE9ic2VydmFibGVbY29tcHV0ZWRTdGF0ZV07XG4gICAgICAgIGlmICghc3RhdGUuaXNEaXNwb3NlZCAmJiBzdGF0ZS5pc1NsZWVwaW5nICYmIGV2ZW50ID09ICdjaGFuZ2UnKSB7XG4gICAgICAgICAgICBzdGF0ZS5pc1NsZWVwaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaXNTdGFsZSB8fCBjb21wdXRlZE9ic2VydmFibGUuaGF2ZURlcGVuZGVuY2llc0NoYW5nZWQoKSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmRlcGVuZGVuY3lUcmFja2luZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3RhdGUuZGVwZW5kZW5jaWVzQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChjb21wdXRlZE9ic2VydmFibGUuZXZhbHVhdGVJbW1lZGlhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGUudXBkYXRlVmVyc2lvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyc3QgcHV0IHRoZSBkZXBlbmRlbmNpZXMgaW4gb3JkZXJcbiAgICAgICAgICAgICAgICB2YXIgZGVwZW5kZWNpZXNPcmRlciA9IFtdO1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2goc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nLCBmdW5jdGlvbiAoaWQsIGRlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVwZW5kZWNpZXNPcmRlcltkZXBlbmRlbmN5Ll9vcmRlcl0gPSBpZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBOZXh0LCBzdWJzY3JpYmUgdG8gZWFjaCBvbmVcbiAgICAgICAgICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goZGVwZW5kZWNpZXNPcmRlciwgZnVuY3Rpb24gKGlkLCBvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVwZW5kZW5jeSA9IHN0YXRlLmRlcGVuZGVuY3lUcmFja2luZ1tpZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBjb21wdXRlZE9ic2VydmFibGUuc3Vic2NyaWJlVG9EZXBlbmRlbmN5KGRlcGVuZGVuY3kuX3RhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fb3JkZXIgPSBvcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl92ZXJzaW9uID0gZGVwZW5kZW5jeS5fdmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nW2lkXSA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuaXNEaXNwb3NlZCkgeyAgICAgLy8gdGVzdCBzaW5jZSBldmFsdWF0aW5nIGNvdWxkIHRyaWdnZXIgZGlzcG9zYWxcbiAgICAgICAgICAgICAgICBjb21wdXRlZE9ic2VydmFibGVbXCJub3RpZnlTdWJzY3JpYmVyc1wiXShzdGF0ZS5sYXRlc3RWYWx1ZSwgXCJhd2FrZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJTdWJzY3JpcHRpb25SZW1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW2NvbXB1dGVkU3RhdGVdO1xuICAgICAgICBpZiAoIXN0YXRlLmlzRGlzcG9zZWQgJiYgZXZlbnQgPT0gJ2NoYW5nZScgJiYgIXRoaXMuaGFzU3Vic2NyaXB0aW9uc0ZvckV2ZW50KCdjaGFuZ2UnKSkge1xuICAgICAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaChzdGF0ZS5kZXBlbmRlbmN5VHJhY2tpbmcsIGZ1bmN0aW9uIChpZCwgZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5LmRpc3Bvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVwZW5kZW5jeVRyYWNraW5nW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90YXJnZXQ6IGRlcGVuZGVuY3kuX3RhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9vcmRlcjogZGVwZW5kZW5jeS5fb3JkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdmVyc2lvbjogZGVwZW5kZW5jeS5fdmVyc2lvblxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YXRlLmlzU2xlZXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpc1tcIm5vdGlmeVN1YnNjcmliZXJzXCJdKHVuZGVmaW5lZCwgXCJhc2xlZXBcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFZlcnNpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQmVjYXVzZSBhIHB1cmUgY29tcHV0ZWQgaXMgbm90IGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB3aGlsZSBpdCBpcyBzbGVlcGluZywgd2UgY2FuJ3RcbiAgICAgICAgLy8gc2ltcGx5IHJldHVybiB0aGUgdmVyc2lvbiBudW1iZXIuIEluc3RlYWQsIHdlIGNoZWNrIGlmIGFueSBvZiB0aGUgZGVwZW5kZW5jaWVzIGhhdmVcbiAgICAgICAgLy8gY2hhbmdlZCBhbmQgY29uZGl0aW9uYWxseSByZS1ldmFsdWF0ZSB0aGUgY29tcHV0ZWQgb2JzZXJ2YWJsZS5cbiAgICAgICAgdmFyIHN0YXRlID0gdGhpc1tjb21wdXRlZFN0YXRlXTtcbiAgICAgICAgaWYgKHN0YXRlLmlzU2xlZXBpbmcgJiYgKHN0YXRlLmlzU3RhbGUgfHwgdGhpcy5oYXZlRGVwZW5kZW5jaWVzQ2hhbmdlZCgpKSkge1xuICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZUltbWVkaWF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrby5zdWJzY3JpYmFibGVbJ2ZuJ10uZ2V0VmVyc2lvbi5jYWxsKHRoaXMpO1xuICAgIH1cbn07XG5cbnZhciBkZWZlckV2YWx1YXRpb25PdmVycmlkZXMgPSB7XG4gICAgYmVmb3JlU3Vic2NyaXB0aW9uQWRkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGZvcmNlIGEgY29tcHV0ZWQgd2l0aCBkZWZlckV2YWx1YXRpb24gdG8gZXZhbHVhdGUgd2hlbiB0aGUgZmlyc3Qgc3Vic2NyaXB0aW9uIGlzIHJlZ2lzdGVyZWQuXG4gICAgICAgIGlmIChldmVudCA9PSAnY2hhbmdlJyB8fCBldmVudCA9PSAnYmVmb3JlQ2hhbmdlJykge1xuICAgICAgICAgICAgdGhpcy5wZWVrKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBOb3RlIHRoYXQgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBwcm90byBhc3NpZ25tZW50LCB0aGVcbi8vIGluaGVyaXRhbmNlIGNoYWluIGlzIGNyZWF0ZWQgbWFudWFsbHkgaW4gdGhlIGtvLmNvbXB1dGVkIGNvbnN0cnVjdG9yXG5pZiAoa28udXRpbHMuY2FuU2V0UHJvdG90eXBlKSB7XG4gICAga28udXRpbHMuc2V0UHJvdG90eXBlT2YoY29tcHV0ZWRGbiwga28uc3Vic2NyaWJhYmxlWydmbiddKTtcbn1cblxuLy8gU2V0IHRoZSBwcm90byBjaGFpbiB2YWx1ZXMgZm9yIGtvLmhhc1Byb3RvdHlwZVxudmFyIHByb3RvUHJvcCA9IGtvLm9ic2VydmFibGUucHJvdG9Qcm9wZXJ0eTsgLy8gPT0gXCJfX2tvX3Byb3RvX19cIlxua28uY29tcHV0ZWRbcHJvdG9Qcm9wXSA9IGtvLm9ic2VydmFibGU7XG5jb21wdXRlZEZuW3Byb3RvUHJvcF0gPSBrby5jb21wdXRlZDtcblxua28uaXNDb21wdXRlZCA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBrby5oYXNQcm90b3R5cGUoaW5zdGFuY2UsIGtvLmNvbXB1dGVkKTtcbn07XG5cbmtvLmlzUHVyZUNvbXB1dGVkID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGtvLmhhc1Byb3RvdHlwZShpbnN0YW5jZSwga28uY29tcHV0ZWQpXG4gICAgICAgICYmIGluc3RhbmNlW2NvbXB1dGVkU3RhdGVdICYmIGluc3RhbmNlW2NvbXB1dGVkU3RhdGVdLnB1cmU7XG59O1xuXG5rby5leHBvcnRTeW1ib2woJ2NvbXB1dGVkJywga28uY29tcHV0ZWQpO1xua28uZXhwb3J0U3ltYm9sKCdkZXBlbmRlbnRPYnNlcnZhYmxlJywga28uY29tcHV0ZWQpOyAgICAvLyBleHBvcnQga28uZGVwZW5kZW50T2JzZXJ2YWJsZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKDEueClcbmtvLmV4cG9ydFN5bWJvbCgnaXNDb21wdXRlZCcsIGtvLmlzQ29tcHV0ZWQpO1xua28uZXhwb3J0U3ltYm9sKCdpc1B1cmVDb21wdXRlZCcsIGtvLmlzUHVyZUNvbXB1dGVkKTtcbmtvLmV4cG9ydFN5bWJvbCgnY29tcHV0ZWQuZm4nLCBjb21wdXRlZEZuKTtcbmtvLmV4cG9ydFByb3BlcnR5KGNvbXB1dGVkRm4sICdwZWVrJywgY29tcHV0ZWRGbi5wZWVrKTtcbmtvLmV4cG9ydFByb3BlcnR5KGNvbXB1dGVkRm4sICdkaXNwb3NlJywgY29tcHV0ZWRGbi5kaXNwb3NlKTtcbmtvLmV4cG9ydFByb3BlcnR5KGNvbXB1dGVkRm4sICdpc0FjdGl2ZScsIGNvbXB1dGVkRm4uaXNBY3RpdmUpO1xua28uZXhwb3J0UHJvcGVydHkoY29tcHV0ZWRGbiwgJ2dldERlcGVuZGVuY2llc0NvdW50JywgY29tcHV0ZWRGbi5nZXREZXBlbmRlbmNpZXNDb3VudCk7XG5cbmtvLnB1cmVDb21wdXRlZCA9IGZ1bmN0aW9uIChldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucywgZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBrby5jb21wdXRlZChldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucywgZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQsIHsncHVyZSc6dHJ1ZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV2YWx1YXRvckZ1bmN0aW9uT3JPcHRpb25zID0ga28udXRpbHMuZXh0ZW5kKHt9LCBldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucyk7ICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIHBhcmFtZXRlciBvYmplY3RcbiAgICAgICAgZXZhbHVhdG9yRnVuY3Rpb25Pck9wdGlvbnNbJ3B1cmUnXSA9IHRydWU7XG4gICAgICAgIHJldHVybiBrby5jb21wdXRlZChldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucywgZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQpO1xuICAgIH1cbn1cbmtvLmV4cG9ydFN5bWJvbCgncHVyZUNvbXB1dGVkJywga28ucHVyZUNvbXB1dGVkKTtcblxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBtYXhOZXN0ZWRPYnNlcnZhYmxlRGVwdGggPSAxMDsgLy8gRXNjYXBlIHRoZSAodW5saWtlbHkpIHBhdGhhbG9naWNhbCBjYXNlIHdoZXJlIGFuIG9ic2VydmFibGUncyBjdXJyZW50IHZhbHVlIGlzIGl0c2VsZiAob3Igc2ltaWxhciByZWZlcmVuY2UgY3ljbGUpXG5cbiAgICBrby50b0pTID0gZnVuY3Rpb24ocm9vdE9iamVjdCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLnRvSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKTtcblxuICAgICAgICAvLyBXZSBqdXN0IHVud3JhcCBldmVyeXRoaW5nIGF0IGV2ZXJ5IGxldmVsIGluIHRoZSBvYmplY3QgZ3JhcGhcbiAgICAgICAgcmV0dXJuIG1hcEpzT2JqZWN0R3JhcGgocm9vdE9iamVjdCwgZnVuY3Rpb24odmFsdWVUb01hcCkge1xuICAgICAgICAgICAgLy8gTG9vcCBiZWNhdXNlIGFuIG9ic2VydmFibGUncyB2YWx1ZSBtaWdodCBpbiB0dXJuIGJlIGFub3RoZXIgb2JzZXJ2YWJsZSB3cmFwcGVyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsga28uaXNPYnNlcnZhYmxlKHZhbHVlVG9NYXApICYmIChpIDwgbWF4TmVzdGVkT2JzZXJ2YWJsZURlcHRoKTsgaSsrKVxuICAgICAgICAgICAgICAgIHZhbHVlVG9NYXAgPSB2YWx1ZVRvTWFwKCk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb01hcDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGtvLnRvSlNPTiA9IGZ1bmN0aW9uKHJvb3RPYmplY3QsIHJlcGxhY2VyLCBzcGFjZSkgeyAgICAgLy8gcmVwbGFjZXIgYW5kIHNwYWNlIGFyZSBvcHRpb25hbFxuICAgICAgICB2YXIgcGxhaW5KYXZhU2NyaXB0T2JqZWN0ID0ga28udG9KUyhyb290T2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLnN0cmluZ2lmeUpzb24ocGxhaW5KYXZhU2NyaXB0T2JqZWN0LCByZXBsYWNlciwgc3BhY2UpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYXBKc09iamVjdEdyYXBoKHJvb3RPYmplY3QsIG1hcElucHV0Q2FsbGJhY2ssIHZpc2l0ZWRPYmplY3RzKSB7XG4gICAgICAgIHZpc2l0ZWRPYmplY3RzID0gdmlzaXRlZE9iamVjdHMgfHwgbmV3IG9iamVjdExvb2t1cCgpO1xuXG4gICAgICAgIHJvb3RPYmplY3QgPSBtYXBJbnB1dENhbGxiYWNrKHJvb3RPYmplY3QpO1xuICAgICAgICB2YXIgY2FuSGF2ZVByb3BlcnRpZXMgPSAodHlwZW9mIHJvb3RPYmplY3QgPT0gXCJvYmplY3RcIikgJiYgKHJvb3RPYmplY3QgIT09IG51bGwpICYmIChyb290T2JqZWN0ICE9PSB1bmRlZmluZWQpICYmICghKHJvb3RPYmplY3QgaW5zdGFuY2VvZiBSZWdFeHApKSAmJiAoIShyb290T2JqZWN0IGluc3RhbmNlb2YgRGF0ZSkpICYmICghKHJvb3RPYmplY3QgaW5zdGFuY2VvZiBTdHJpbmcpKSAmJiAoIShyb290T2JqZWN0IGluc3RhbmNlb2YgTnVtYmVyKSkgJiYgKCEocm9vdE9iamVjdCBpbnN0YW5jZW9mIEJvb2xlYW4pKTtcbiAgICAgICAgaWYgKCFjYW5IYXZlUHJvcGVydGllcylcbiAgICAgICAgICAgIHJldHVybiByb290T2JqZWN0O1xuXG4gICAgICAgIHZhciBvdXRwdXRQcm9wZXJ0aWVzID0gcm9vdE9iamVjdCBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fTtcbiAgICAgICAgdmlzaXRlZE9iamVjdHMuc2F2ZShyb290T2JqZWN0LCBvdXRwdXRQcm9wZXJ0aWVzKTtcblxuICAgICAgICB2aXNpdFByb3BlcnRpZXNPckFycmF5RW50cmllcyhyb290T2JqZWN0LCBmdW5jdGlvbihpbmRleGVyKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IG1hcElucHV0Q2FsbGJhY2socm9vdE9iamVjdFtpbmRleGVyXSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFByb3BlcnRpZXNbaW5kZXhlcl0gPSBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNseU1hcHBlZFZhbHVlID0gdmlzaXRlZE9iamVjdHMuZ2V0KHByb3BlcnR5VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRQcm9wZXJ0aWVzW2luZGV4ZXJdID0gKHByZXZpb3VzbHlNYXBwZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcmV2aW91c2x5TWFwcGVkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbWFwSnNPYmplY3RHcmFwaChwcm9wZXJ0eVZhbHVlLCBtYXBJbnB1dENhbGxiYWNrLCB2aXNpdGVkT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0UHJvcGVydGllcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2aXNpdFByb3BlcnRpZXNPckFycmF5RW50cmllcyhyb290T2JqZWN0LCB2aXNpdG9yQ2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHJvb3RPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb290T2JqZWN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHZpc2l0b3JDYWxsYmFjayhpKTtcblxuICAgICAgICAgICAgLy8gRm9yIGFycmF5cywgYWxzbyByZXNwZWN0IHRvSlNPTiBwcm9wZXJ0eSBmb3IgY3VzdG9tIG1hcHBpbmdzIChmaXhlcyAjMjc4KVxuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290T2JqZWN0Wyd0b0pTT04nXSA9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHZpc2l0b3JDYWxsYmFjaygndG9KU09OJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcm9vdE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHZpc2l0b3JDYWxsYmFjayhwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9iamVjdExvb2t1cCgpIHtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgfTtcblxuICAgIG9iamVjdExvb2t1cC5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBvYmplY3RMb29rdXAsXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ0luZGV4ID0ga28udXRpbHMuYXJyYXlJbmRleE9mKHRoaXMua2V5cywga2V5KTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0luZGV4ID49IDApXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbZXhpc3RpbmdJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZih0aGlzLmtleXMsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nSW5kZXggPj0gMCkgPyB0aGlzLnZhbHVlc1tleGlzdGluZ0luZGV4XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3RvSlMnLCBrby50b0pTKTtcbmtvLmV4cG9ydFN5bWJvbCgndG9KU09OJywga28udG9KU09OKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc0RvbURhdGFFeHBhbmRvUHJvcGVydHkgPSAnX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX18nO1xuXG4gICAgLy8gTm9ybWFsbHksIFNFTEVDVCBlbGVtZW50cyBhbmQgdGhlaXIgT1BUSU9OcyBjYW4gb25seSB0YWtlIHZhbHVlIG9mIHR5cGUgJ3N0cmluZycgKGJlY2F1c2UgdGhlIHZhbHVlc1xuICAgIC8vIGFyZSBzdG9yZWQgb24gRE9NIGF0dHJpYnV0ZXMpLiBrby5zZWxlY3RFeHRlbnNpb25zIHByb3ZpZGVzIGEgd2F5IGZvciBTRUxFQ1RzL09QVElPTnMgdG8gaGF2ZSB2YWx1ZXNcbiAgICAvLyB0aGF0IGFyZSBhcmJpdHJhcnkgb2JqZWN0cy4gVGhpcyBpcyB2ZXJ5IGNvbnZlbmllbnQgd2hlbiBpbXBsZW1lbnRpbmcgdGhpbmdzIGxpa2UgY2FzY2FkaW5nIGRyb3Bkb3ducy5cbiAgICBrby5zZWxlY3RFeHRlbnNpb25zID0ge1xuICAgICAgICByZWFkVmFsdWUgOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ29wdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50W2hhc0RvbURhdGFFeHBhbmRvUHJvcGVydHldID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmRvbURhdGEuZ2V0KGVsZW1lbnQsIGtvLmJpbmRpbmdIYW5kbGVycy5vcHRpb25zLm9wdGlvblZhbHVlRG9tRGF0YUtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy5pZVZlcnNpb24gPD0gN1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAoZWxlbWVudC5nZXRBdHRyaWJ1dGVOb2RlKCd2YWx1ZScpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlTm9kZSgndmFsdWUnKS5zcGVjaWZpZWQgPyBlbGVtZW50LnZhbHVlIDogZWxlbWVudC50ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnNlbGVjdGVkSW5kZXggPj0gMCA/IGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQub3B0aW9uc1tlbGVtZW50LnNlbGVjdGVkSW5kZXhdKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3cml0ZVZhbHVlOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZSwgYWxsb3dVbnNldCkge1xuICAgICAgICAgICAgc3dpdGNoIChrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdvcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQoZWxlbWVudCwga28uYmluZGluZ0hhbmRsZXJzLm9wdGlvbnMub3B0aW9uVmFsdWVEb21EYXRhS2V5LCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNEb21EYXRhRXhwYW5kb1Byb3BlcnR5IGluIGVsZW1lbnQpIHsgLy8gSUUgPD0gOCB0aHJvd3MgZXJyb3JzIGlmIHlvdSBkZWxldGUgbm9uLWV4aXN0ZW50IHByb3BlcnRpZXMgZnJvbSBhIERPTSBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50W2hhc0RvbURhdGFFeHBhbmRvUHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIGFyYml0cmFyeSBvYmplY3QgdXNpbmcgRG9tRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KGVsZW1lbnQsIGtvLmJpbmRpbmdIYW5kbGVycy5vcHRpb25zLm9wdGlvblZhbHVlRG9tRGF0YUtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbaGFzRG9tRGF0YUV4cGFuZG9Qcm9wZXJ0eV0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCB0cmVhdG1lbnQgb2YgbnVtYmVycyBpcyBqdXN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LiBLTyAxLjIuMSB3cm90ZSBudW1lcmljYWwgdmFsdWVzIHRvIGVsZW1lbnQudmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IHZhbHVlIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgdmFsdWUgPT09IG51bGwpICAgICAgIC8vIEEgYmxhbmsgc3RyaW5nIG9yIG51bGwgdmFsdWUgd2lsbCBzZWxlY3QgdGhlIGNhcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gZWxlbWVudC5vcHRpb25zLmxlbmd0aCwgb3B0aW9uVmFsdWU7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0ga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUoZWxlbWVudC5vcHRpb25zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluY2x1ZGUgc3BlY2lhbCBjaGVjayB0byBoYW5kbGUgc2VsZWN0aW5nIGEgY2FwdGlvbiB3aXRoIGEgYmxhbmsgc3RyaW5nIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uVmFsdWUgPT0gdmFsdWUgfHwgKG9wdGlvblZhbHVlID09IFwiXCIgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd1Vuc2V0IHx8IHNlbGVjdGlvbiA+PSAwIHx8ICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGVsZW1lbnQuc2l6ZSA+IDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh2YWx1ZSA9PT0gbnVsbCkgfHwgKHZhbHVlID09PSB1bmRlZmluZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgnc2VsZWN0RXh0ZW5zaW9ucycsIGtvLnNlbGVjdEV4dGVuc2lvbnMpO1xua28uZXhwb3J0U3ltYm9sKCdzZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZScsIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKTtcbmtvLmV4cG9ydFN5bWJvbCgnc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlJywga28uc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlKTtcbmtvLmV4cHJlc3Npb25SZXdyaXRpbmcgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBqYXZhU2NyaXB0UmVzZXJ2ZWRXb3JkcyA9IFtcInRydWVcIiwgXCJmYWxzZVwiLCBcIm51bGxcIiwgXCJ1bmRlZmluZWRcIl07XG5cbiAgICAvLyBNYXRjaGVzIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0by0tZWl0aGVyIGFuIGlzb2xhdGVkIGlkZW50aWZpZXIgb3Igc29tZXRoaW5nIGVuZGluZyB3aXRoIGEgcHJvcGVydHkgYWNjZXNzb3JcbiAgICAvLyBUaGlzIGlzIGRlc2lnbmVkIHRvIGJlIHNpbXBsZSBhbmQgYXZvaWQgZmFsc2UgbmVnYXRpdmVzLCBidXQgY291bGQgcHJvZHVjZSBmYWxzZSBwb3NpdGl2ZXMgKGUuZy4sIGErYi5jKS5cbiAgICAvLyBUaGlzIGFsc28gd2lsbCBub3QgcHJvcGVybHkgaGFuZGxlIG5lc3RlZCBicmFja2V0cyAoZS5nLiwgb2JqMVtvYmoyWydwcm9wJ11dOyBzZWUgIzkxMSkuXG4gICAgdmFyIGphdmFTY3JpcHRBc3NpZ25tZW50VGFyZ2V0ID0gL14oPzpbJF9hLXpdWyRcXHddKnwoLispKFxcLlxccypbJF9hLXpdWyRcXHddKnxcXFsuK1xcXSkpJC9pO1xuXG4gICAgZnVuY3Rpb24gZ2V0V3JpdGVhYmxlVmFsdWUoZXhwcmVzc2lvbikge1xuICAgICAgICBpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKGphdmFTY3JpcHRSZXNlcnZlZFdvcmRzLCBleHByZXNzaW9uKSA+PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgbWF0Y2ggPSBleHByZXNzaW9uLm1hdGNoKGphdmFTY3JpcHRBc3NpZ25tZW50VGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoID09PSBudWxsID8gZmFsc2UgOiBtYXRjaFsxXSA/ICgnT2JqZWN0KCcgKyBtYXRjaFsxXSArICcpJyArIG1hdGNoWzJdKSA6IGV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyByZWd1bGFyIGV4cHJlc3Npb25zIHdpbGwgYmUgdXNlZCB0byBzcGxpdCBhbiBvYmplY3QtbGl0ZXJhbCBzdHJpbmcgaW50byB0b2tlbnNcblxuICAgICAgICAvLyBUaGVzZSB0d28gbWF0Y2ggc3RyaW5ncywgZWl0aGVyIHdpdGggZG91YmxlIHF1b3RlcyBvciBzaW5nbGUgcXVvdGVzXG4gICAgdmFyIHN0cmluZ0RvdWJsZSA9ICdcIig/OlteXCJcXFxcXFxcXF18XFxcXFxcXFwuKSpcIicsXG4gICAgICAgIHN0cmluZ1NpbmdsZSA9IFwiJyg/OlteJ1xcXFxcXFxcXXxcXFxcXFxcXC4pKidcIixcbiAgICAgICAgLy8gTWF0Y2hlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiAodGV4dCBlbmNsb3NlZCBieSBzbGFzaGVzKSwgYnV0IHdpbGwgYWxzbyBtYXRjaCBzZXRzIG9mIGRpdmlzaW9uc1xuICAgICAgICAvLyBhcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiAodGhpcyBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJzaW5nIGxvb3AgYmVsb3cpLlxuICAgICAgICBzdHJpbmdSZWdleHAgPSAnLyg/OlteL1xcXFxcXFxcXXxcXFxcXFxcXC4pKi9cXHcqJyxcbiAgICAgICAgLy8gVGhlc2UgY2hhcmFjdGVycyBoYXZlIHNwZWNpYWwgbWVhbmluZyB0byB0aGUgcGFyc2VyIGFuZCBtdXN0IG5vdCBhcHBlYXIgaW4gdGhlIG1pZGRsZSBvZiBhXG4gICAgICAgIC8vIHRva2VuLCBleGNlcHQgYXMgcGFydCBvZiBhIHN0cmluZy5cbiAgICAgICAgc3BlY2lhbHMgPSAnLFwiXFwne30oKS86W1xcXFxdJyxcbiAgICAgICAgLy8gTWF0Y2ggdGV4dCAoYXQgbGVhc3QgdHdvIGNoYXJhY3RlcnMpIHRoYXQgZG9lcyBub3QgY29udGFpbiBhbnkgb2YgdGhlIGFib3ZlIHNwZWNpYWwgY2hhcmFjdGVycyxcbiAgICAgICAgLy8gYWx0aG91Z2ggc29tZSBvZiB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkIHRvIHN0YXJ0IGl0IChhbGwgYnV0IHRoZSBjb2xvbiBhbmQgY29tbWEpLlxuICAgICAgICAvLyBUaGUgdGV4dCBjYW4gY29udGFpbiBzcGFjZXMsIGJ1dCBsZWFkaW5nIG9yIHRyYWlsaW5nIHNwYWNlcyBhcmUgc2tpcHBlZC5cbiAgICAgICAgZXZlcnlUaGluZ0Vsc2UgPSAnW15cXFxcczosL11bXicgKyBzcGVjaWFscyArICddKlteXFxcXHMnICsgc3BlY2lhbHMgKyAnXScsXG4gICAgICAgIC8vIE1hdGNoIGFueSBub24tc3BhY2UgY2hhcmFjdGVyIG5vdCBtYXRjaGVkIGFscmVhZHkuIFRoaXMgd2lsbCBtYXRjaCBjb2xvbnMgYW5kIGNvbW1hcywgc2luY2UgdGhleSdyZVxuICAgICAgICAvLyBub3QgbWF0Y2hlZCBieSBcImV2ZXJ5VGhpbmdFbHNlXCIsIGJ1dCB3aWxsIGFsc28gbWF0Y2ggYW55IG90aGVyIHNpbmdsZSBjaGFyYWN0ZXIgdGhhdCB3YXNuJ3QgYWxyZWFkeVxuICAgICAgICAvLyBtYXRjaGVkIChmb3IgZXhhbXBsZTogaW4gXCJhOiAxLCBiOiAyXCIsIGVhY2ggb2YgdGhlIG5vbi1zcGFjZSBjaGFyYWN0ZXJzIHdpbGwgYmUgbWF0Y2hlZCBieSBvbmVOb3RTcGFjZSkuXG4gICAgICAgIG9uZU5vdFNwYWNlID0gJ1teXFxcXHNdJyxcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGFjdHVhbCByZWd1bGFyIGV4cHJlc3Npb24gYnkgb3ItaW5nIHRoZSBhYm92ZSBzdHJpbmdzLiBUaGUgb3JkZXIgaXMgaW1wb3J0YW50LlxuICAgICAgICBiaW5kaW5nVG9rZW4gPSBSZWdFeHAoc3RyaW5nRG91YmxlICsgJ3wnICsgc3RyaW5nU2luZ2xlICsgJ3wnICsgc3RyaW5nUmVnZXhwICsgJ3wnICsgZXZlcnlUaGluZ0Vsc2UgKyAnfCcgKyBvbmVOb3RTcGFjZSwgJ2cnKSxcblxuICAgICAgICAvLyBNYXRjaCBlbmQgb2YgcHJldmlvdXMgdG9rZW4gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSBzbGFzaCBpcyBhIGRpdmlzaW9uIG9yIHJlZ2V4LlxuICAgICAgICBkaXZpc2lvbkxvb2tCZWhpbmQgPSAvW1xcXSlcIidBLVphLXowLTlfJF0rJC8sXG4gICAgICAgIGtleXdvcmRSZWdleExvb2tCZWhpbmQgPSB7J2luJzoxLCdyZXR1cm4nOjEsJ3R5cGVvZic6MX07XG5cbiAgICBmdW5jdGlvbiBwYXJzZU9iamVjdExpdGVyYWwob2JqZWN0TGl0ZXJhbFN0cmluZykge1xuICAgICAgICAvLyBUcmltIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlcyBmcm9tIHRoZSBzdHJpbmdcbiAgICAgICAgdmFyIHN0ciA9IGtvLnV0aWxzLnN0cmluZ1RyaW0ob2JqZWN0TGl0ZXJhbFN0cmluZyk7XG5cbiAgICAgICAgLy8gVHJpbSBicmFjZXMgJ3snIHN1cnJvdW5kaW5nIHRoZSB3aG9sZSBvYmplY3QgbGl0ZXJhbFxuICAgICAgICBpZiAoc3RyLmNoYXJDb2RlQXQoMCkgPT09IDEyMykgc3RyID0gc3RyLnNsaWNlKDEsIC0xKTtcblxuICAgICAgICAvLyBTcGxpdCBpbnRvIHRva2Vuc1xuICAgICAgICB2YXIgcmVzdWx0ID0gW10sIHRva3MgPSBzdHIubWF0Y2goYmluZGluZ1Rva2VuKSwga2V5LCB2YWx1ZXMgPSBbXSwgZGVwdGggPSAwO1xuXG4gICAgICAgIGlmICh0b2tzKSB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgYSBjb21tYSBzbyB0aGF0IHdlIGRvbid0IG5lZWQgYSBzZXBhcmF0ZSBjb2RlIGJsb2NrIHRvIGRlYWwgd2l0aCB0aGUgbGFzdCBpdGVtXG4gICAgICAgICAgICB0b2tzLnB1c2goJywnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHRvazsgdG9rID0gdG9rc1tpXTsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB0b2suY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICAvLyBBIGNvbW1hIHNpZ25hbHMgdGhlIGVuZCBvZiBhIGtleS92YWx1ZSBwYWlyIGlmIGRlcHRoIGlzIHplcm9cbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gNDQpIHsgLy8gXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKChrZXkgJiYgdmFsdWVzLmxlbmd0aCkgPyB7a2V5OiBrZXksIHZhbHVlOiB2YWx1ZXMuam9pbignJyl9IDogeyd1bmtub3duJzoga2V5IHx8IHZhbHVlcy5qb2luKCcnKX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gZGVwdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNpbXBseSBza2lwIHRoZSBjb2xvbiB0aGF0IHNlcGFyYXRlcyB0aGUgbmFtZSBhbmQgdmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09IDU4KSB7IC8vIFwiOlwiXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVwdGggJiYgIWtleSAmJiB2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgc2V0IG9mIHNsYXNoZXMgaXMgaW5pdGlhbGx5IG1hdGNoZWQgYXMgYSByZWd1bGFyIGV4cHJlc3Npb24sIGJ1dCBjb3VsZCBiZSBkaXZpc2lvblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gNDcgJiYgaSAmJiB0b2subGVuZ3RoID4gMSkgeyAgLy8gXCIvXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vayBhdCB0aGUgZW5kIG9mIHRoZSBwcmV2aW91cyB0b2tlbiB0byBkZXRlcm1pbmUgaWYgdGhlIHNsYXNoIGlzIGFjdHVhbGx5IGRpdmlzaW9uXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHRva3NbaS0xXS5tYXRjaChkaXZpc2lvbkxvb2tCZWhpbmQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgIWtleXdvcmRSZWdleExvb2tCZWhpbmRbbWF0Y2hbMF1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgc2xhc2ggaXMgYWN0dWFsbHkgYSBkaXZpc2lvbiBwdW5jdHVhdG9yOyByZS1wYXJzZSB0aGUgcmVtYWluZGVyIG9mIHRoZSBzdHJpbmcgKG5vdCBpbmNsdWRpbmcgdGhlIHNsYXNoKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cihzdHIuaW5kZXhPZih0b2spICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tzID0gc3RyLm1hdGNoKGJpbmRpbmdUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tzLnB1c2goJywnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGgganVzdCB0aGUgc2xhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvayA9ICcvJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudCBkZXB0aCBmb3IgcGFyZW50aGVzZXMsIGJyYWNlcywgYW5kIGJyYWNrZXRzIHNvIHRoYXQgaW50ZXJpb3IgY29tbWFzIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSA0MCB8fCBjID09PSAxMjMgfHwgYyA9PT0gOTEpIHsgLy8gJygnLCAneycsICdbJ1xuICAgICAgICAgICAgICAgICAgICArK2RlcHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gNDEgfHwgYyA9PT0gMTI1IHx8IGMgPT09IDkzKSB7IC8vICcpJywgJ30nLCAnXSdcbiAgICAgICAgICAgICAgICAgICAgLS1kZXB0aDtcbiAgICAgICAgICAgICAgICAvLyBUaGUga2V5IHdpbGwgYmUgdGhlIGZpcnN0IHRva2VuOyBpZiBpdCdzIGEgc3RyaW5nLCB0cmltIHRoZSBxdW90ZXNcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFrZXkgJiYgIXZhbHVlcy5sZW5ndGggJiYgKGMgPT09IDM0IHx8IGMgPT09IDM5KSkgeyAvLyAnXCInLCBcIidcIlxuICAgICAgICAgICAgICAgICAgICB0b2sgPSB0b2suc2xpY2UoMSwgLTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0b2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gVHdvLXdheSBiaW5kaW5ncyBpbmNsdWRlIGEgd3JpdGUgZnVuY3Rpb24gdGhhdCBhbGxvdyB0aGUgaGFuZGxlciB0byB1cGRhdGUgdGhlIHZhbHVlIGV2ZW4gaWYgaXQncyBub3QgYW4gb2JzZXJ2YWJsZS5cbiAgICB2YXIgdHdvV2F5QmluZGluZ3MgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHByZVByb2Nlc3NCaW5kaW5ncyhiaW5kaW5nc1N0cmluZ09yS2V5VmFsdWVBcnJheSwgYmluZGluZ09wdGlvbnMpIHtcbiAgICAgICAgYmluZGluZ09wdGlvbnMgPSBiaW5kaW5nT3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzS2V5VmFsdWUoa2V5LCB2YWwpIHtcbiAgICAgICAgICAgIHZhciB3cml0YWJsZVZhbDtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGxQcmVwcm9jZXNzSG9vayhvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKG9iaiAmJiBvYmpbJ3ByZXByb2Nlc3MnXSkgPyAodmFsID0gb2JqWydwcmVwcm9jZXNzJ10odmFsLCBrZXksIHByb2Nlc3NLZXlWYWx1ZSkpIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmluZGluZ1BhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmICghY2FsbFByZXByb2Nlc3NIb29rKGtvWydnZXRCaW5kaW5nSGFuZGxlciddKGtleSkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBpZiAodHdvV2F5QmluZGluZ3Nba2V5XSAmJiAod3JpdGFibGVWYWwgPSBnZXRXcml0ZWFibGVWYWx1ZSh2YWwpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdHdvLXdheSBiaW5kaW5ncywgcHJvdmlkZSBhIHdyaXRlIG1ldGhvZCBpbiBjYXNlIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBpc24ndCBhIHdyaXRhYmxlIG9ic2VydmFibGUuXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5QWNjZXNzb3JSZXN1bHRTdHJpbmdzLnB1c2goXCInXCIgKyBrZXkgKyBcIic6ZnVuY3Rpb24oX3ope1wiICsgd3JpdGFibGVWYWwgKyBcIj1fen1cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSB3cmFwcGVkIGluIGEgZnVuY3Rpb24gc28gdGhhdCBlYWNoIHZhbHVlIGNhbiBiZSBhY2Nlc3NlZCBpbmRlcGVuZGVudGx5XG4gICAgICAgICAgICBpZiAobWFrZVZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gJ2Z1bmN0aW9uKCl7cmV0dXJuICcgKyB2YWwgKyAnIH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0U3RyaW5ncy5wdXNoKFwiJ1wiICsga2V5ICsgXCInOlwiICsgdmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHRTdHJpbmdzID0gW10sXG4gICAgICAgICAgICBwcm9wZXJ0eUFjY2Vzc29yUmVzdWx0U3RyaW5ncyA9IFtdLFxuICAgICAgICAgICAgbWFrZVZhbHVlQWNjZXNzb3JzID0gYmluZGluZ09wdGlvbnNbJ3ZhbHVlQWNjZXNzb3JzJ10sXG4gICAgICAgICAgICBiaW5kaW5nUGFyYW1zID0gYmluZGluZ09wdGlvbnNbJ2JpbmRpbmdQYXJhbXMnXSxcbiAgICAgICAgICAgIGtleVZhbHVlQXJyYXkgPSB0eXBlb2YgYmluZGluZ3NTdHJpbmdPcktleVZhbHVlQXJyYXkgPT09IFwic3RyaW5nXCIgP1xuICAgICAgICAgICAgICAgIHBhcnNlT2JqZWN0TGl0ZXJhbChiaW5kaW5nc1N0cmluZ09yS2V5VmFsdWVBcnJheSkgOiBiaW5kaW5nc1N0cmluZ09yS2V5VmFsdWVBcnJheTtcblxuICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goa2V5VmFsdWVBcnJheSwgZnVuY3Rpb24oa2V5VmFsdWUpIHtcbiAgICAgICAgICAgIHByb2Nlc3NLZXlWYWx1ZShrZXlWYWx1ZS5rZXkgfHwga2V5VmFsdWVbJ3Vua25vd24nXSwga2V5VmFsdWUudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3MubGVuZ3RoKVxuICAgICAgICAgICAgcHJvY2Vzc0tleVZhbHVlKCdfa29fcHJvcGVydHlfd3JpdGVycycsIFwie1wiICsgcHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3Muam9pbihcIixcIikgKyBcIiB9XCIpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRTdHJpbmdzLmpvaW4oXCIsXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yczogW10sXG5cbiAgICAgICAgdHdvV2F5QmluZGluZ3M6IHR3b1dheUJpbmRpbmdzLFxuXG4gICAgICAgIHBhcnNlT2JqZWN0TGl0ZXJhbDogcGFyc2VPYmplY3RMaXRlcmFsLFxuXG4gICAgICAgIHByZVByb2Nlc3NCaW5kaW5nczogcHJlUHJvY2Vzc0JpbmRpbmdzLFxuXG4gICAgICAgIGtleVZhbHVlQXJyYXlDb250YWluc0tleTogZnVuY3Rpb24oa2V5VmFsdWVBcnJheSwga2V5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleVZhbHVlQXJyYXkubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaWYgKGtleVZhbHVlQXJyYXlbaV1bJ2tleSddID09IGtleSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gSW50ZXJuYWwsIHByaXZhdGUgS08gdXRpbGl0eSBmb3IgdXBkYXRpbmcgbW9kZWwgcHJvcGVydGllcyBmcm9tIHdpdGhpbiBiaW5kaW5nc1xuICAgICAgICAvLyBwcm9wZXJ0eTogICAgICAgICAgICBJZiB0aGUgcHJvcGVydHkgYmVpbmcgdXBkYXRlZCBpcyAob3IgbWlnaHQgYmUpIGFuIG9ic2VydmFibGUsIHBhc3MgaXQgaGVyZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICBJZiBpdCB0dXJucyBvdXQgdG8gYmUgYSB3cml0YWJsZSBvYnNlcnZhYmxlLCBpdCB3aWxsIGJlIHdyaXR0ZW4gdG8gZGlyZWN0bHlcbiAgICAgICAgLy8gYWxsQmluZGluZ3M6ICAgICAgICAgQW4gb2JqZWN0IHdpdGggYSBnZXQgbWV0aG9kIHRvIHJldHJpZXZlIGJpbmRpbmdzIGluIHRoZSBjdXJyZW50IGV4ZWN1dGlvbiBjb250ZXh0LlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICBUaGlzIHdpbGwgYmUgc2VhcmNoZWQgZm9yIGEgJ19rb19wcm9wZXJ0eV93cml0ZXJzJyBwcm9wZXJ0eSBpbiBjYXNlIHlvdSdyZSB3cml0aW5nIHRvIGEgbm9uLW9ic2VydmFibGVcbiAgICAgICAgLy8ga2V5OiAgICAgICAgICAgICAgICAgVGhlIGtleSBpZGVudGlmeWluZyB0aGUgcHJvcGVydHkgdG8gYmUgd3JpdHRlbi4gRXhhbXBsZTogZm9yIHsgaGFzRm9jdXM6IG15VmFsdWUgfSwgd3JpdGUgdG8gJ215VmFsdWUnIGJ5IHNwZWNpZnlpbmcgdGhlIGtleSAnaGFzRm9jdXMnXG4gICAgICAgIC8vIHZhbHVlOiAgICAgICAgICAgICAgIFRoZSB2YWx1ZSB0byBiZSB3cml0dGVuXG4gICAgICAgIC8vIGNoZWNrSWZEaWZmZXJlbnQ6ICAgIElmIHRydWUsIGFuZCBpZiB0aGUgcHJvcGVydHkgYmVpbmcgd3JpdHRlbiBpcyBhIHdyaXRhYmxlIG9ic2VydmFibGUsIHRoZSB2YWx1ZSB3aWxsIG9ubHkgYmUgd3JpdHRlbiBpZlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICBpdCBpcyAhPT0gZXhpc3RpbmcgdmFsdWUgb24gdGhhdCB3cml0YWJsZSBvYnNlcnZhYmxlXG4gICAgICAgIHdyaXRlVmFsdWVUb1Byb3BlcnR5OiBmdW5jdGlvbihwcm9wZXJ0eSwgYWxsQmluZGluZ3MsIGtleSwgdmFsdWUsIGNoZWNrSWZEaWZmZXJlbnQpIHtcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkgfHwgIWtvLmlzT2JzZXJ2YWJsZShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcFdyaXRlcnMgPSBhbGxCaW5kaW5ncy5nZXQoJ19rb19wcm9wZXJ0eV93cml0ZXJzJyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BXcml0ZXJzICYmIHByb3BXcml0ZXJzW2tleV0pXG4gICAgICAgICAgICAgICAgICAgIHByb3BXcml0ZXJzW2tleV0odmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUocHJvcGVydHkpICYmICghY2hlY2tJZkRpZmZlcmVudCB8fCBwcm9wZXJ0eS5wZWVrKCkgIT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ2V4cHJlc3Npb25SZXdyaXRpbmcnLCBrby5leHByZXNzaW9uUmV3cml0aW5nKTtcbmtvLmV4cG9ydFN5bWJvbCgnZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnMnLCBrby5leHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9ycyk7XG5rby5leHBvcnRTeW1ib2woJ2V4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsJywga28uZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWwpO1xua28uZXhwb3J0U3ltYm9sKCdleHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5ncycsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzKTtcblxuLy8gTWFraW5nIGJpbmRpbmdzIGV4cGxpY2l0bHkgZGVjbGFyZSB0aGVtc2VsdmVzIGFzIFwidHdvIHdheVwiIGlzbid0IGlkZWFsIGluIHRoZSBsb25nIHRlcm0gKGl0IHdvdWxkIGJlIGJldHRlciBpZlxuLy8gYWxsIGJpbmRpbmdzIGNvdWxkIHVzZSBhbiBvZmZpY2lhbCAncHJvcGVydHkgd3JpdGVyJyBBUEkgd2l0aG91dCBuZWVkaW5nIHRvIGRlY2xhcmUgdGhhdCB0aGV5IG1pZ2h0KS4gSG93ZXZlcixcbi8vIHNpbmNlIHRoaXMgaXMgbm90LCBhbmQgaGFzIG5ldmVyIGJlZW4sIGEgcHVibGljIEFQSSAoX2tvX3Byb3BlcnR5X3dyaXRlcnMgd2FzIG5ldmVyIGRvY3VtZW50ZWQpLCBpdCdzIGFjY2VwdGFibGVcbi8vIGFzIGFuIGludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCBpbiB0aGUgc2hvcnQgdGVybS5cbi8vIEZvciB0aG9zZSBkZXZlbG9wZXJzIHdobyByZWx5IG9uIF9rb19wcm9wZXJ0eV93cml0ZXJzIGluIHRoZWlyIGN1c3RvbSBiaW5kaW5ncywgd2UgZXhwb3NlIF90d29XYXlCaW5kaW5ncyBhcyBhblxuLy8gdW5kb2N1bWVudGVkIGZlYXR1cmUgdGhhdCBtYWtlcyBpdCByZWxhdGl2ZWx5IGVhc3kgdG8gdXBncmFkZSB0byBLTyAzLjAuIEhvd2V2ZXIsIHRoaXMgaXMgc3RpbGwgbm90IGFuIG9mZmljaWFsXG4vLyBwdWJsaWMgQVBJLCBhbmQgd2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gcmVtb3ZlIGl0IGF0IGFueSB0aW1lIGlmIHdlIGNyZWF0ZSBhIHJlYWwgcHVibGljIHByb3BlcnR5IHdyaXRlcnMgQVBJLlxua28uZXhwb3J0U3ltYm9sKCdleHByZXNzaW9uUmV3cml0aW5nLl90d29XYXlCaW5kaW5ncycsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcudHdvV2F5QmluZGluZ3MpO1xuXG4vLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZGVmaW5lIHRoZSBmb2xsb3dpbmcgYWxpYXNlcy4gKFByZXZpb3VzbHksIHRoZXNlIGZ1bmN0aW9uIG5hbWVzIHdlcmUgbWlzbGVhZGluZyBiZWNhdXNlXG4vLyB0aGV5IHJlZmVycmVkIHRvIEpTT04gc3BlY2lmaWNhbGx5LCBldmVuIHRob3VnaCB0aGV5IGFjdHVhbGx5IHdvcmsgd2l0aCBhcmJpdHJhcnkgSmF2YVNjcmlwdCBvYmplY3QgbGl0ZXJhbCBleHByZXNzaW9ucy4pXG5rby5leHBvcnRTeW1ib2woJ2pzb25FeHByZXNzaW9uUmV3cml0aW5nJywga28uZXhwcmVzc2lvblJld3JpdGluZyk7XG5rby5leHBvcnRTeW1ib2woJ2pzb25FeHByZXNzaW9uUmV3cml0aW5nLmluc2VydFByb3BlcnR5QWNjZXNzb3JzSW50b0pzb24nLCBrby5leHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5ncyk7XG4oZnVuY3Rpb24oKSB7XG4gICAgLy8gXCJWaXJ0dWFsIGVsZW1lbnRzXCIgaXMgYW4gYWJzdHJhY3Rpb24gb24gdG9wIG9mIHRoZSB1c3VhbCBET00gQVBJIHdoaWNoIHVuZGVyc3RhbmRzIHRoZSBub3Rpb24gdGhhdCBjb21tZW50IG5vZGVzXG4gICAgLy8gbWF5IGJlIHVzZWQgdG8gcmVwcmVzZW50IGhpZXJhcmNoeSAoaW4gYWRkaXRpb24gdG8gdGhlIERPTSdzIG5hdHVyYWwgaGllcmFyY2h5KS5cbiAgICAvLyBJZiB5b3UgY2FsbCB0aGUgRE9NLW1hbmlwdWxhdGluZyBmdW5jdGlvbnMgb24ga28udmlydHVhbEVsZW1lbnRzLCB5b3Ugd2lsbCBiZSBhYmxlIHRvIHJlYWQgYW5kIHdyaXRlIHRoZSBzdGF0ZVxuICAgIC8vIG9mIHRoYXQgdmlydHVhbCBoaWVyYXJjaHlcbiAgICAvL1xuICAgIC8vIFRoZSBwb2ludCBvZiBhbGwgdGhpcyBpcyB0byBzdXBwb3J0IGNvbnRhaW5lcmxlc3MgdGVtcGxhdGVzIChlLmcuLCA8IS0tIGtvIGZvcmVhY2g6c29tZUNvbGxlY3Rpb24gLS0+YmxhaDwhLS0gL2tvIC0tPilcbiAgICAvLyB3aXRob3V0IGhhdmluZyB0byBzY2F0dGVyIHNwZWNpYWwgY2FzZXMgYWxsIG92ZXIgdGhlIGJpbmRpbmcgYW5kIHRlbXBsYXRpbmcgY29kZS5cblxuICAgIC8vIElFIDkgY2Fubm90IHJlbGlhYmx5IHJlYWQgdGhlIFwibm9kZVZhbHVlXCIgcHJvcGVydHkgb2YgYSBjb21tZW50IG5vZGUgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzE4NilcbiAgICAvLyBidXQgaXQgZG9lcyBnaXZlIHRoZW0gYSBub25zdGFuZGFyZCBhbHRlcm5hdGl2ZSBwcm9wZXJ0eSBjYWxsZWQgXCJ0ZXh0XCIgdGhhdCBpdCBjYW4gcmVhZCByZWxpYWJseS4gT3RoZXIgYnJvd3NlcnMgZG9uJ3QgaGF2ZSB0aGF0IHByb3BlcnR5LlxuICAgIC8vIFNvLCB1c2Ugbm9kZS50ZXh0IHdoZXJlIGF2YWlsYWJsZSwgYW5kIG5vZGUubm9kZVZhbHVlIGVsc2V3aGVyZVxuICAgIHZhciBjb21tZW50Tm9kZXNIYXZlVGV4dFByb3BlcnR5ID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcInRlc3RcIikudGV4dCA9PT0gXCI8IS0tdGVzdC0tPlwiO1xuXG4gICAgdmFyIHN0YXJ0Q29tbWVudFJlZ2V4ID0gY29tbWVudE5vZGVzSGF2ZVRleHRQcm9wZXJ0eSA/IC9ePCEtLVxccyprbyg/OlxccysoW1xcc1xcU10rKSk/XFxzKi0tPiQvIDogL15cXHMqa28oPzpcXHMrKFtcXHNcXFNdKykpP1xccyokLztcbiAgICB2YXIgZW5kQ29tbWVudFJlZ2V4ID0gICBjb21tZW50Tm9kZXNIYXZlVGV4dFByb3BlcnR5ID8gL148IS0tXFxzKlxcL2tvXFxzKi0tPiQvIDogL15cXHMqXFwva29cXHMqJC87XG4gICAgdmFyIGh0bWxUYWdzV2l0aE9wdGlvbmFsbHlDbG9zaW5nQ2hpbGRyZW4gPSB7ICd1bCc6IHRydWUsICdvbCc6IHRydWUgfTtcblxuICAgIGZ1bmN0aW9uIGlzU3RhcnRDb21tZW50KG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIChub2RlLm5vZGVUeXBlID09IDgpICYmIHN0YXJ0Q29tbWVudFJlZ2V4LnRlc3QoY29tbWVudE5vZGVzSGF2ZVRleHRQcm9wZXJ0eSA/IG5vZGUudGV4dCA6IG5vZGUubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0VuZENvbW1lbnQobm9kZSkge1xuICAgICAgICByZXR1cm4gKG5vZGUubm9kZVR5cGUgPT0gOCkgJiYgZW5kQ29tbWVudFJlZ2V4LnRlc3QoY29tbWVudE5vZGVzSGF2ZVRleHRQcm9wZXJ0eSA/IG5vZGUudGV4dCA6IG5vZGUubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsQ2hpbGRyZW4oc3RhcnRDb21tZW50LCBhbGxvd1VuYmFsYW5jZWQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gc3RhcnRDb21tZW50O1xuICAgICAgICB2YXIgZGVwdGggPSAxO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGlmIChpc0VuZENvbW1lbnQoY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgZGVwdGgtLTtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChpc1N0YXJ0Q29tbWVudChjdXJyZW50Tm9kZSkpXG4gICAgICAgICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbG93VW5iYWxhbmNlZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiICsgc3RhcnRDb21tZW50Lm5vZGVWYWx1ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1hdGNoaW5nRW5kQ29tbWVudChzdGFydENvbW1lbnQsIGFsbG93VW5iYWxhbmNlZCkge1xuICAgICAgICB2YXIgYWxsVmlydHVhbENoaWxkcmVuID0gZ2V0VmlydHVhbENoaWxkcmVuKHN0YXJ0Q29tbWVudCwgYWxsb3dVbmJhbGFuY2VkKTtcbiAgICAgICAgaWYgKGFsbFZpcnR1YWxDaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGFsbFZpcnR1YWxDaGlsZHJlbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxWaXJ0dWFsQ2hpbGRyZW5bYWxsVmlydHVhbENoaWxkcmVuLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0Q29tbWVudC5uZXh0U2libGluZztcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gTXVzdCBoYXZlIG5vIG1hdGNoaW5nIGVuZCBjb21tZW50LCBhbmQgYWxsb3dVbmJhbGFuY2VkIGlzIHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRVbmJhbGFuY2VkQ2hpbGRUYWdzKG5vZGUpIHtcbiAgICAgICAgLy8gZS5nLiwgZnJvbSA8ZGl2Pk9LPC9kaXY+PCEtLSBrbyBibGFoIC0tPjxzcGFuPkFub3RoZXI8L3NwYW4+LCByZXR1cm5zOiA8IS0tIGtvIGJsYWggLS0+PHNwYW4+QW5vdGhlcjwvc3Bhbj5cbiAgICAgICAgLy8gICAgICAgZnJvbSA8ZGl2Pk9LPC9kaXY+PCEtLSAva28gLS0+PCEtLSAva28gLS0+LCAgICAgICAgICAgICByZXR1cm5zOiA8IS0tIC9rbyAtLT48IS0tIC9rbyAtLT5cbiAgICAgICAgdmFyIGNoaWxkTm9kZSA9IG5vZGUuZmlyc3RDaGlsZCwgY2FwdHVyZVJlbWFpbmluZyA9IG51bGw7XG4gICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZVJlbWFpbmluZykgICAgICAgICAgICAgICAgICAgLy8gV2UgYWxyZWFkeSBoaXQgYW4gdW5iYWxhbmNlZCBub2RlIGFuZCBhcmUgbm93IGp1c3Qgc2Nvb3BpbmcgdXAgYWxsIHN1YnNlcXVlbnQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZVJlbWFpbmluZy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdGFydENvbW1lbnQoY2hpbGROb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hpbmdFbmRDb21tZW50ID0gZ2V0TWF0Y2hpbmdFbmRDb21tZW50KGNoaWxkTm9kZSwgLyogYWxsb3dVbmJhbGFuY2VkOiAqLyB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nRW5kQ29tbWVudCkgICAgICAgICAgICAgLy8gSXQncyBhIGJhbGFuY2VkIHRhZywgc28gc2tpcCBpbW1lZGlhdGVseSB0byB0aGUgZW5kIG9mIHRoaXMgdmlydHVhbCBzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IG1hdGNoaW5nRW5kQ29tbWVudDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZVJlbWFpbmluZyA9IFtjaGlsZE5vZGVdOyAvLyBJdCdzIHVuYmFsYW5jZWQsIHNvIHN0YXJ0IGNhcHR1cmluZyBmcm9tIHRoaXMgcG9pbnRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzRW5kQ29tbWVudChjaGlsZE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVSZW1haW5pbmcgPSBbY2hpbGROb2RlXTsgICAgIC8vIEl0J3MgdW5iYWxhbmNlZCAoaWYgaXQgd2Fzbid0LCB3ZSdkIGhhdmUgc2tpcHBlZCBvdmVyIGl0IGFscmVhZHkpLCBzbyBzdGFydCBjYXB0dXJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChjaGlsZE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXB0dXJlUmVtYWluaW5nO1xuICAgIH1cblxuICAgIGtvLnZpcnR1YWxFbGVtZW50cyA9IHtcbiAgICAgICAgYWxsb3dlZEJpbmRpbmdzOiB7fSxcblxuICAgICAgICBjaGlsZE5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNTdGFydENvbW1lbnQobm9kZSkgPyBnZXRWaXJ0dWFsQ2hpbGRyZW4obm9kZSkgOiBub2RlLmNoaWxkTm9kZXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW1wdHlOb2RlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBpZiAoIWlzU3RhcnRDb21tZW50KG5vZGUpKVxuICAgICAgICAgICAgICAgIGtvLnV0aWxzLmVtcHR5RG9tTm9kZShub2RlKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2aXJ0dWFsQ2hpbGRyZW4gPSBrby52aXJ0dWFsRWxlbWVudHMuY2hpbGROb2Rlcyhub2RlKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHZpcnR1YWxDaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGtvLnJlbW92ZU5vZGUodmlydHVhbENoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzZXREb21Ob2RlQ2hpbGRyZW46IGZ1bmN0aW9uKG5vZGUsIGNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGlmICghaXNTdGFydENvbW1lbnQobm9kZSkpXG4gICAgICAgICAgICAgICAga28udXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuKG5vZGUsIGNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICB2YXIgZW5kQ29tbWVudE5vZGUgPSBub2RlLm5leHRTaWJsaW5nOyAvLyBNdXN0IGJlIHRoZSBuZXh0IHNpYmxpbmcsIGFzIHdlIGp1c3QgZW1wdGllZCB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgICAgICBlbmRDb21tZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjaGlsZE5vZGVzW2ldLCBlbmRDb21tZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJlcGVuZDogZnVuY3Rpb24oY29udGFpbmVyTm9kZSwgbm9kZVRvUHJlcGVuZCkge1xuICAgICAgICAgICAgaWYgKCFpc1N0YXJ0Q29tbWVudChjb250YWluZXJOb2RlKSkge1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJOb2RlLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUuaW5zZXJ0QmVmb3JlKG5vZGVUb1ByZXBlbmQsIGNvbnRhaW5lck5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLmFwcGVuZENoaWxkKG5vZGVUb1ByZXBlbmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTdGFydCBjb21tZW50cyBtdXN0IGFsd2F5cyBoYXZlIGEgcGFyZW50IGFuZCBhdCBsZWFzdCBvbmUgZm9sbG93aW5nIHNpYmxpbmcgKHRoZSBlbmQgY29tbWVudClcbiAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGVUb1ByZXBlbmQsIGNvbnRhaW5lck5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGluc2VydEFmdGVyOiBmdW5jdGlvbihjb250YWluZXJOb2RlLCBub2RlVG9JbnNlcnQsIGluc2VydEFmdGVyTm9kZSkge1xuICAgICAgICAgICAgaWYgKCFpbnNlcnRBZnRlck5vZGUpIHtcbiAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMucHJlcGVuZChjb250YWluZXJOb2RlLCBub2RlVG9JbnNlcnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNTdGFydENvbW1lbnQoY29udGFpbmVyTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYWZ0ZXIgaW5zZXJ0aW9uIHBvaW50XG4gICAgICAgICAgICAgICAgaWYgKGluc2VydEFmdGVyTm9kZS5uZXh0U2libGluZylcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvSW5zZXJ0LCBpbnNlcnRBZnRlck5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTm9kZS5hcHBlbmRDaGlsZChub2RlVG9JbnNlcnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDaGlsZHJlbiBvZiBzdGFydCBjb21tZW50cyBtdXN0IGFsd2F5cyBoYXZlIGEgcGFyZW50IGFuZCBhdCBsZWFzdCBvbmUgZm9sbG93aW5nIHNpYmxpbmcgKHRoZSBlbmQgY29tbWVudClcbiAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGVUb0luc2VydCwgaW5zZXJ0QWZ0ZXJOb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBmaXJzdENoaWxkOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBpZiAoIWlzU3RhcnRDb21tZW50KG5vZGUpKVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoIW5vZGUubmV4dFNpYmxpbmcgfHwgaXNFbmRDb21tZW50KG5vZGUubmV4dFNpYmxpbmcpKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmV4dFNpYmxpbmc6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChpc1N0YXJ0Q29tbWVudChub2RlKSlcbiAgICAgICAgICAgICAgICBub2RlID0gZ2V0TWF0Y2hpbmdFbmRDb21tZW50KG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dFNpYmxpbmcgJiYgaXNFbmRDb21tZW50KG5vZGUubmV4dFNpYmxpbmcpKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzQmluZGluZ1ZhbHVlOiBpc1N0YXJ0Q29tbWVudCxcblxuICAgICAgICB2aXJ0dWFsTm9kZUJpbmRpbmdWYWx1ZTogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgdmFyIHJlZ2V4TWF0Y2ggPSAoY29tbWVudE5vZGVzSGF2ZVRleHRQcm9wZXJ0eSA/IG5vZGUudGV4dCA6IG5vZGUubm9kZVZhbHVlKS5tYXRjaChzdGFydENvbW1lbnRSZWdleCk7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXhNYXRjaCA/IHJlZ2V4TWF0Y2hbMV0gOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIG5vcm1hbGlzZVZpcnR1YWxFbGVtZW50RG9tU3RydWN0dXJlOiBmdW5jdGlvbihlbGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMTU1XG4gICAgICAgICAgICAvLyAoSUUgPD0gOCBvciBJRSA5IHF1aXJrcyBtb2RlIHBhcnNlcyB5b3VyIEhUTUwgd2VpcmRseSwgdHJlYXRpbmcgY2xvc2luZyA8L2xpPiB0YWdzIGFzIGlmIHRoZXkgZG9uJ3QgZXhpc3QsIHRoZXJlYnkgbW92aW5nIGNvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgIC8vIHRoYXQgYXJlIGRpcmVjdCBkZXNjZW5kYW50cyBvZiA8dWw+IGludG8gdGhlIHByZWNlZGluZyA8bGk+KVxuICAgICAgICAgICAgaWYgKCFodG1sVGFnc1dpdGhPcHRpb25hbGx5Q2xvc2luZ0NoaWxkcmVuW2tvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50VmVyaWZpZWQpXSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIFNjYW4gaW1tZWRpYXRlIGNoaWxkcmVuIHRvIHNlZSBpZiB0aGV5IGNvbnRhaW4gdW5iYWxhbmNlZCBjb21tZW50IHRhZ3MuIElmIHRoZXkgZG8sIHRob3NlIGNvbW1lbnQgdGFnc1xuICAgICAgICAgICAgLy8gbXVzdCBiZSBpbnRlbmRlZCB0byBhcHBlYXIgKmFmdGVyKiB0aGF0IGNoaWxkLCBzbyBtb3ZlIHRoZW0gdGhlcmUuXG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gZWxlbWVudFZlcmlmaWVkLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdW5iYWxhbmNlZFRhZ3MgPSBnZXRVbmJhbGFuY2VkQ2hpbGRUYWdzKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5iYWxhbmNlZFRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXggdXAgdGhlIERPTSBieSBtb3ZpbmcgdGhlIHVuYmFsYW5jZWQgdGFncyB0byB3aGVyZSB0aGV5IG1vc3QgbGlrZWx5IHdlcmUgaW50ZW5kZWQgdG8gYmUgcGxhY2VkIC0gKmFmdGVyKiB0aGUgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZVRvSW5zZXJ0QmVmb3JlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5iYWxhbmNlZFRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVUb0luc2VydEJlZm9yZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRWZXJpZmllZC5pbnNlcnRCZWZvcmUodW5iYWxhbmNlZFRhZ3NbaV0sIG5vZGVUb0luc2VydEJlZm9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRWZXJpZmllZC5hcHBlbmRDaGlsZCh1bmJhbGFuY2VkVGFnc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xua28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMnLCBrby52aXJ0dWFsRWxlbWVudHMpO1xua28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzJywga28udmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5ncyk7XG5rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUnLCBrby52aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlKTtcbi8va28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMuZmlyc3RDaGlsZCcsIGtvLnZpcnR1YWxFbGVtZW50cy5maXJzdENoaWxkKTsgICAgIC8vIGZpcnN0Q2hpbGQgaXMgbm90IG1pbmlmaWVkXG5rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5pbnNlcnRBZnRlcicsIGtvLnZpcnR1YWxFbGVtZW50cy5pbnNlcnRBZnRlcik7XG4vL2tvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nJywga28udmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nKTsgICAvLyBuZXh0U2libGluZyBpcyBub3QgbWluaWZpZWRcbmtvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLnByZXBlbmQnLCBrby52aXJ0dWFsRWxlbWVudHMucHJlcGVuZCk7XG5rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW4nLCBrby52aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuKTtcbihmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmYXVsdEJpbmRpbmdBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLWJpbmRcIjtcblxuICAgIGtvLmJpbmRpbmdQcm92aWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJpbmRpbmdDYWNoZSA9IHt9O1xuICAgIH07XG5cbiAgICBrby51dGlscy5leHRlbmQoa28uYmluZGluZ1Byb3ZpZGVyLnByb3RvdHlwZSwge1xuICAgICAgICAnbm9kZUhhc0JpbmRpbmdzJzogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShkZWZhdWx0QmluZGluZ0F0dHJpYnV0ZU5hbWUpICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IGtvLmNvbXBvbmVudHNbJ2dldENvbXBvbmVudE5hbWVGb3JOb2RlJ10obm9kZSk7XG4gICAgICAgICAgICAgICAgY2FzZSA4OiAvLyBDb21tZW50IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnZpcnR1YWxFbGVtZW50cy5oYXNCaW5kaW5nVmFsdWUobm9kZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICdnZXRCaW5kaW5ncyc6IGZ1bmN0aW9uKG5vZGUsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgYmluZGluZ3NTdHJpbmcgPSB0aGlzWydnZXRCaW5kaW5nc1N0cmluZyddKG5vZGUsIGJpbmRpbmdDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBwYXJzZWRCaW5kaW5ncyA9IGJpbmRpbmdzU3RyaW5nID8gdGhpc1sncGFyc2VCaW5kaW5nc1N0cmluZyddKGJpbmRpbmdzU3RyaW5nLCBiaW5kaW5nQ29udGV4dCwgbm9kZSkgOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGtvLmNvbXBvbmVudHMuYWRkQmluZGluZ3NGb3JDdXN0b21FbGVtZW50KHBhcnNlZEJpbmRpbmdzLCBub2RlLCBiaW5kaW5nQ29udGV4dCwgLyogdmFsdWVBY2Nlc3NvcnMgKi8gZmFsc2UpO1xuICAgICAgICB9LFxuXG4gICAgICAgICdnZXRCaW5kaW5nQWNjZXNzb3JzJzogZnVuY3Rpb24obm9kZSwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBiaW5kaW5nc1N0cmluZyA9IHRoaXNbJ2dldEJpbmRpbmdzU3RyaW5nJ10obm9kZSwgYmluZGluZ0NvbnRleHQpLFxuICAgICAgICAgICAgICAgIHBhcnNlZEJpbmRpbmdzID0gYmluZGluZ3NTdHJpbmcgPyB0aGlzWydwYXJzZUJpbmRpbmdzU3RyaW5nJ10oYmluZGluZ3NTdHJpbmcsIGJpbmRpbmdDb250ZXh0LCBub2RlLCB7ICd2YWx1ZUFjY2Vzc29ycyc6IHRydWUgfSkgOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGtvLmNvbXBvbmVudHMuYWRkQmluZGluZ3NGb3JDdXN0b21FbGVtZW50KHBhcnNlZEJpbmRpbmdzLCBub2RlLCBiaW5kaW5nQ29udGV4dCwgLyogdmFsdWVBY2Nlc3NvcnMgKi8gdHJ1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgaW50ZXJuYWxseSBieSB0aGlzIGRlZmF1bHQgcHJvdmlkZXIuXG4gICAgICAgIC8vIEl0J3Mgbm90IHBhcnQgb2YgdGhlIGludGVyZmFjZSBkZWZpbml0aW9uIGZvciBhIGdlbmVyYWwgYmluZGluZyBwcm92aWRlci5cbiAgICAgICAgJ2dldEJpbmRpbmdzU3RyaW5nJzogZnVuY3Rpb24obm9kZSwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKGRlZmF1bHRCaW5kaW5nQXR0cmlidXRlTmFtZSk7ICAgLy8gRWxlbWVudFxuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIGtvLnZpcnR1YWxFbGVtZW50cy52aXJ0dWFsTm9kZUJpbmRpbmdWYWx1ZShub2RlKTsgLy8gQ29tbWVudCBub2RlXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgaW50ZXJuYWxseSBieSB0aGlzIGRlZmF1bHQgcHJvdmlkZXIuXG4gICAgICAgIC8vIEl0J3Mgbm90IHBhcnQgb2YgdGhlIGludGVyZmFjZSBkZWZpbml0aW9uIGZvciBhIGdlbmVyYWwgYmluZGluZyBwcm92aWRlci5cbiAgICAgICAgJ3BhcnNlQmluZGluZ3NTdHJpbmcnOiBmdW5jdGlvbihiaW5kaW5nc1N0cmluZywgYmluZGluZ0NvbnRleHQsIG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmRpbmdGdW5jdGlvbiA9IGNyZWF0ZUJpbmRpbmdzU3RyaW5nRXZhbHVhdG9yVmlhQ2FjaGUoYmluZGluZ3NTdHJpbmcsIHRoaXMuYmluZGluZ0NhY2hlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZ0Z1bmN0aW9uKGJpbmRpbmdDb250ZXh0LCBub2RlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgZXgubWVzc2FnZSA9IFwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbkJpbmRpbmdzIHZhbHVlOiBcIiArIGJpbmRpbmdzU3RyaW5nICsgXCJcXG5NZXNzYWdlOiBcIiArIGV4Lm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGtvLmJpbmRpbmdQcm92aWRlclsnaW5zdGFuY2UnXSA9IG5ldyBrby5iaW5kaW5nUHJvdmlkZXIoKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmdzU3RyaW5nRXZhbHVhdG9yVmlhQ2FjaGUoYmluZGluZ3NTdHJpbmcsIGNhY2hlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBjYWNoZUtleSA9IGJpbmRpbmdzU3RyaW5nICsgKG9wdGlvbnMgJiYgb3B0aW9uc1sndmFsdWVBY2Nlc3NvcnMnXSB8fCAnJyk7XG4gICAgICAgIHJldHVybiBjYWNoZVtjYWNoZUtleV1cbiAgICAgICAgICAgIHx8IChjYWNoZVtjYWNoZUtleV0gPSBjcmVhdGVCaW5kaW5nc1N0cmluZ0V2YWx1YXRvcihiaW5kaW5nc1N0cmluZywgb3B0aW9ucykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmdzU3RyaW5nRXZhbHVhdG9yKGJpbmRpbmdzU3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBzb3VyY2UgZm9yIGEgZnVuY3Rpb24gdGhhdCBldmFsdWF0ZXMgXCJleHByZXNzaW9uXCJcbiAgICAgICAgLy8gRm9yIGVhY2ggc2NvcGUgdmFyaWFibGUsIGFkZCBhbiBleHRyYSBsZXZlbCBvZiBcIndpdGhcIiBuZXN0aW5nXG4gICAgICAgIC8vIEV4YW1wbGUgcmVzdWx0OiB3aXRoKHNjMSkgeyB3aXRoKHNjMCkgeyByZXR1cm4gKGV4cHJlc3Npb24pIH0gfVxuICAgICAgICB2YXIgcmV3cml0dGVuQmluZGluZ3MgPSBrby5leHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5ncyhiaW5kaW5nc1N0cmluZywgb3B0aW9ucyksXG4gICAgICAgICAgICBmdW5jdGlvbkJvZHkgPSBcIndpdGgoJGNvbnRleHQpe3dpdGgoJGRhdGF8fHt9KXtyZXR1cm57XCIgKyByZXdyaXR0ZW5CaW5kaW5ncyArIFwifX19XCI7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCIkY29udGV4dFwiLCBcIiRlbGVtZW50XCIsIGZ1bmN0aW9uQm9keSk7XG4gICAgfVxufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCdiaW5kaW5nUHJvdmlkZXInLCBrby5iaW5kaW5nUHJvdmlkZXIpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICBrby5iaW5kaW5nSGFuZGxlcnMgPSB7fTtcblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgZWxlbWVudCB0eXBlcyB3aWxsIG5vdCBiZSByZWN1cnNlZCBpbnRvIGR1cmluZyBiaW5kaW5nLlxuICAgIHZhciBiaW5kaW5nRG9lc05vdFJlY3Vyc2VJbnRvRWxlbWVudFR5cGVzID0ge1xuICAgICAgICAvLyBEb24ndCB3YW50IGJpbmRpbmdzIHRoYXQgb3BlcmF0ZSBvbiB0ZXh0IG5vZGVzIHRvIG11dGF0ZSA8c2NyaXB0PiBhbmQgPHRleHRhcmVhPiBjb250ZW50cyxcbiAgICAgICAgLy8gYmVjYXVzZSBpdCdzIHVuZXhwZWN0ZWQgYW5kIGEgcG90ZW50aWFsIFhTUyBpc3N1ZS5cbiAgICAgICAgLy8gQWxzbyBiaW5kaW5ncyBzaG91bGQgbm90IG9wZXJhdGUgb24gPHRlbXBsYXRlPiBlbGVtZW50cyBzaW5jZSB0aGlzIGJyZWFrcyBpbiBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAgICAvLyBhbmQgYmVjYXVzZSBzdWNoIGVsZW1lbnRzJyBjb250ZW50cyBhcmUgYWx3YXlzIGludGVuZGVkIHRvIGJlIGJvdW5kIGluIGEgZGlmZmVyZW50IGNvbnRleHRcbiAgICAgICAgLy8gZnJvbSB3aGVyZSB0aGV5IGFwcGVhciBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICAgICdzY3JpcHQnOiB0cnVlLFxuICAgICAgICAndGV4dGFyZWEnOiB0cnVlLFxuICAgICAgICAndGVtcGxhdGUnOiB0cnVlXG4gICAgfTtcblxuICAgIC8vIFVzZSBhbiBvdmVycmlkYWJsZSBtZXRob2QgZm9yIHJldHJpZXZpbmcgYmluZGluZyBoYW5kbGVycyBzbyB0aGF0IGEgcGx1Z2lucyBtYXkgc3VwcG9ydCBkeW5hbWljYWxseSBjcmVhdGVkIGhhbmRsZXJzXG4gICAga29bJ2dldEJpbmRpbmdIYW5kbGVyJ10gPSBmdW5jdGlvbihiaW5kaW5nS2V5KSB7XG4gICAgICAgIHJldHVybiBrby5iaW5kaW5nSGFuZGxlcnNbYmluZGluZ0tleV07XG4gICAgfTtcblxuICAgIC8vIFRoZSBrby5iaW5kaW5nQ29udGV4dCBjb25zdHJ1Y3RvciBpcyBvbmx5IGNhbGxlZCBkaXJlY3RseSB0byBjcmVhdGUgdGhlIHJvb3QgY29udGV4dC4gRm9yIGNoaWxkXG4gICAgLy8gY29udGV4dHMsIHVzZSBiaW5kaW5nQ29udGV4dC5jcmVhdGVDaGlsZENvbnRleHQgb3IgYmluZGluZ0NvbnRleHQuZXh0ZW5kLlxuICAgIGtvLmJpbmRpbmdDb250ZXh0ID0gZnVuY3Rpb24oZGF0YUl0ZW1PckFjY2Vzc29yLCBwYXJlbnRDb250ZXh0LCBkYXRhSXRlbUFsaWFzLCBleHRlbmRDYWxsYmFjaywgb3B0aW9ucykge1xuXG4gICAgICAgIC8vIFRoZSBiaW5kaW5nIGNvbnRleHQgb2JqZWN0IGluY2x1ZGVzIHN0YXRpYyBwcm9wZXJ0aWVzIGZvciB0aGUgY3VycmVudCwgcGFyZW50LCBhbmQgcm9vdCB2aWV3IG1vZGVscy5cbiAgICAgICAgLy8gSWYgYSB2aWV3IG1vZGVsIGlzIGFjdHVhbGx5IHN0b3JlZCBpbiBhbiBvYnNlcnZhYmxlLCB0aGUgY29ycmVzcG9uZGluZyBiaW5kaW5nIGNvbnRleHQgb2JqZWN0LCBhbmRcbiAgICAgICAgLy8gYW55IGNoaWxkIGNvbnRleHRzLCBtdXN0IGJlIHVwZGF0ZWQgd2hlbiB0aGUgdmlldyBtb2RlbCBpcyBjaGFuZ2VkLlxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb250ZXh0KCkge1xuICAgICAgICAgICAgLy8gTW9zdCBvZiB0aGUgdGltZSwgdGhlIGNvbnRleHQgd2lsbCBkaXJlY3RseSBnZXQgYSB2aWV3IG1vZGVsIG9iamVjdCwgYnV0IGlmIGEgZnVuY3Rpb24gaXMgZ2l2ZW4sXG4gICAgICAgICAgICAvLyB3ZSBjYWxsIHRoZSBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgdmlldyBtb2RlbC4gSWYgdGhlIGZ1bmN0aW9uIGFjY2Vzc2VzIGFueSBvYnNlcnZhYmxlcyBvciByZXR1cm5zXG4gICAgICAgICAgICAvLyBhbiBvYnNlcnZhYmxlLCB0aGUgZGVwZW5kZW5jeSBpcyB0cmFja2VkLCBhbmQgdGhvc2Ugb2JzZXJ2YWJsZXMgY2FuIGxhdGVyIGNhdXNlIHRoZSBiaW5kaW5nXG4gICAgICAgICAgICAvLyBjb250ZXh0IHRvIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICB2YXIgZGF0YUl0ZW1Pck9ic2VydmFibGUgPSBpc0Z1bmMgPyBkYXRhSXRlbU9yQWNjZXNzb3IoKSA6IGRhdGFJdGVtT3JBY2Nlc3NvcixcbiAgICAgICAgICAgICAgICBkYXRhSXRlbSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoZGF0YUl0ZW1Pck9ic2VydmFibGUpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50Q29udGV4dCkge1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gYSBcInBhcmVudFwiIGNvbnRleHQgaXMgZ2l2ZW4sIHJlZ2lzdGVyIGEgZGVwZW5kZW5jeSBvbiB0aGUgcGFyZW50IGNvbnRleHQuIFRodXMgd2hlbmV2ZXIgdGhlXG4gICAgICAgICAgICAgICAgLy8gcGFyZW50IGNvbnRleHQgaXMgdXBkYXRlZCwgdGhpcyBjb250ZXh0IHdpbGwgYWxzbyBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb250ZXh0Ll9zdWJzY3JpYmFibGUpXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbnRleHQuX3N1YnNjcmliYWJsZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29weSAkcm9vdCBhbmQgYW55IGN1c3RvbSBwcm9wZXJ0aWVzIGZyb20gdGhlIHBhcmVudCBjb250ZXh0XG4gICAgICAgICAgICAgICAga28udXRpbHMuZXh0ZW5kKHNlbGYsIHBhcmVudENvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgYWJvdmUgY29weSBvdmVyd3JpdGVzIG91ciBvd24gcHJvcGVydGllcywgd2UgbmVlZCB0byByZXNldCB0aGVtLlxuICAgICAgICAgICAgICAgIHNlbGYuX3N1YnNjcmliYWJsZSA9IHN1YnNjcmliYWJsZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZlsnJHBhcmVudHMnXSA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbGZbJyRyb290J10gPSBkYXRhSXRlbTtcblxuICAgICAgICAgICAgICAgIC8vIEV4cG9ydCAna28nIGluIHRoZSBiaW5kaW5nIGNvbnRleHQgc28gaXQgd2lsbCBiZSBhdmFpbGFibGUgaW4gYmluZGluZ3MgYW5kIHRlbXBsYXRlc1xuICAgICAgICAgICAgICAgIC8vIGV2ZW4gaWYgJ2tvJyBpc24ndCBleHBvcnRlZCBhcyBhIGdsb2JhbCwgc3VjaCBhcyB3aGVuIHVzaW5nIGFuIEFNRCBsb2FkZXIuXG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvNDkwXG4gICAgICAgICAgICAgICAgc2VsZlsna28nXSA9IGtvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZlsnJHJhd0RhdGEnXSA9IGRhdGFJdGVtT3JPYnNlcnZhYmxlO1xuICAgICAgICAgICAgc2VsZlsnJGRhdGEnXSA9IGRhdGFJdGVtO1xuICAgICAgICAgICAgaWYgKGRhdGFJdGVtQWxpYXMpXG4gICAgICAgICAgICAgICAgc2VsZltkYXRhSXRlbUFsaWFzXSA9IGRhdGFJdGVtO1xuXG4gICAgICAgICAgICAvLyBUaGUgZXh0ZW5kQ2FsbGJhY2sgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBhIGNoaWxkIGNvbnRleHQgb3IgZXh0ZW5kaW5nIGEgY29udGV4dC5cbiAgICAgICAgICAgIC8vIEl0IGhhbmRsZXMgdGhlIHNwZWNpZmljIGFjdGlvbnMgbmVlZGVkIHRvIGZpbmlzaCBzZXR0aW5nIHVwIHRoZSBiaW5kaW5nIGNvbnRleHQuIEFjdGlvbnMgaW4gdGhpc1xuICAgICAgICAgICAgLy8gZnVuY3Rpb24gY291bGQgYWxzbyBhZGQgZGVwZW5kZW5jaWVzIHRvIHRoaXMgYmluZGluZyBjb250ZXh0LlxuICAgICAgICAgICAgaWYgKGV4dGVuZENhbGxiYWNrKVxuICAgICAgICAgICAgICAgIGV4dGVuZENhbGxiYWNrKHNlbGYsIHBhcmVudENvbnRleHQsIGRhdGFJdGVtKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGZbJyRkYXRhJ107XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGlzcG9zZVdoZW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZXMgJiYgIWtvLnV0aWxzLmFueURvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudChub2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBpc0Z1bmMgPSB0eXBlb2YoZGF0YUl0ZW1PckFjY2Vzc29yKSA9PSBcImZ1bmN0aW9uXCIgJiYgIWtvLmlzT2JzZXJ2YWJsZShkYXRhSXRlbU9yQWNjZXNzb3IpLFxuICAgICAgICAgICAgbm9kZXMsXG4gICAgICAgICAgICBzdWJzY3JpYmFibGU7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9uc1snZXhwb3J0RGVwZW5kZW5jaWVzJ10pIHtcbiAgICAgICAgICAgIC8vIFRoZSBcImV4cG9ydERlcGVuZGVuY2llc1wiIG9wdGlvbiBtZWFucyB0aGF0IHRoZSBjYWxsaW5nIGNvZGUgd2lsbCB0cmFjayBhbnkgZGVwZW5kZW5jaWVzIGFuZCByZS1jcmVhdGVcbiAgICAgICAgICAgIC8vIHRoZSBiaW5kaW5nIGNvbnRleHQgd2hlbiB0aGV5IGNoYW5nZS5cbiAgICAgICAgICAgIHVwZGF0ZUNvbnRleHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliYWJsZSA9IGtvLmRlcGVuZGVudE9ic2VydmFibGUodXBkYXRlQ29udGV4dCwgbnVsbCwgeyBkaXNwb3NlV2hlbjogZGlzcG9zZVdoZW4sIGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIGJpbmRpbmcgY29udGV4dCBoYXMgYmVlbiBpbml0aWFsaXplZCwgYW5kIHRoZSBcInN1YnNjcmliYWJsZVwiIGNvbXB1dGVkIG9ic2VydmFibGUgaXNcbiAgICAgICAgICAgIC8vIHN1YnNjcmliZWQgdG8gYW55IG9ic2VydmFibGVzIHRoYXQgd2VyZSBhY2Nlc3NlZCBpbiB0aGUgcHJvY2Vzcy4gSWYgdGhlcmUgaXMgbm90aGluZyB0byB0cmFjaywgdGhlXG4gICAgICAgICAgICAvLyBjb21wdXRlZCB3aWxsIGJlIGluYWN0aXZlLCBhbmQgd2UgY2FuIHNhZmVseSB0aHJvdyBpdCBhd2F5LiBJZiBpdCdzIGFjdGl2ZSwgdGhlIGNvbXB1dGVkIGlzIHN0b3JlZCBpblxuICAgICAgICAgICAgLy8gdGhlIGNvbnRleHQgb2JqZWN0LlxuICAgICAgICAgICAgaWYgKHN1YnNjcmliYWJsZS5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fc3Vic2NyaWJhYmxlID0gc3Vic2NyaWJhYmxlO1xuXG4gICAgICAgICAgICAgICAgLy8gQWx3YXlzIG5vdGlmeSBiZWNhdXNlIGV2ZW4gaWYgdGhlIG1vZGVsICgkZGF0YSkgaGFzbid0IGNoYW5nZWQsIG90aGVyIGNvbnRleHQgcHJvcGVydGllcyBtaWdodCBoYXZlIGNoYW5nZWRcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmFibGVbJ2VxdWFsaXR5Q29tcGFyZXInXSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGJlIGFibGUgdG8gZGlzcG9zZSBvZiB0aGlzIGNvbXB1dGVkIG9ic2VydmFibGUgd2hlbiBpdCdzIG5vIGxvbmdlciBuZWVkZWQuIFRoaXMgd291bGQgYmVcbiAgICAgICAgICAgICAgICAvLyBlYXN5IGlmIHdlIGhhZCBhIHNpbmdsZSBub2RlIHRvIHdhdGNoLCBidXQgYmluZGluZyBjb250ZXh0cyBjYW4gYmUgdXNlZCBieSBtYW55IGRpZmZlcmVudCBub2RlcywgYW5kXG4gICAgICAgICAgICAgICAgLy8gd2UgY2Fubm90IGFzc3VtZSB0aGF0IHRob3NlIG5vZGVzIGhhdmUgYW55IHJlbGF0aW9uIHRvIGVhY2ggb3RoZXIuIFNvIGluc3RlYWQgd2UgdHJhY2sgYW55IG5vZGUgdGhhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjb250ZXh0IGlzIGF0dGFjaGVkIHRvLCBhbmQgZGlzcG9zZSB0aGUgY29tcHV0ZWQgd2hlbiBhbGwgb2YgdGhvc2Ugbm9kZXMgaGF2ZSBiZWVuIGNsZWFuZWQuXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgcHJvcGVydGllcyB0byAqc3Vic2NyaWJhYmxlKiBpbnN0ZWFkIG9mICpzZWxmKiBiZWNhdXNlIGFueSBwcm9wZXJ0aWVzIGFkZGVkIHRvICpzZWxmKiBtYXkgYmUgb3ZlcndyaXR0ZW4gb24gdXBkYXRlc1xuICAgICAgICAgICAgICAgIG5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJhYmxlLl9hZGROb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKG5vZGUsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UmVtb3ZlSXRlbShub2Rlcywgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliYWJsZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fc3Vic2NyaWJhYmxlID0gc3Vic2NyaWJhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXh0ZW5kIHRoZSBiaW5kaW5nIGNvbnRleHQgaGllcmFyY2h5IHdpdGggYSBuZXcgdmlldyBtb2RlbCBvYmplY3QuIElmIHRoZSBwYXJlbnQgY29udGV4dCBpcyB3YXRjaGluZ1xuICAgIC8vIGFueSBvYnNlcnZhYmxlcywgdGhlIG5ldyBjaGlsZCBjb250ZXh0IHdpbGwgYXV0b21hdGljYWxseSBnZXQgYSBkZXBlbmRlbmN5IG9uIHRoZSBwYXJlbnQgY29udGV4dC5cbiAgICAvLyBCdXQgdGhpcyBkb2VzIG5vdCBtZWFuIHRoYXQgdGhlICRkYXRhIHZhbHVlIG9mIHRoZSBjaGlsZCBjb250ZXh0IHdpbGwgYWxzbyBnZXQgdXBkYXRlZC4gSWYgdGhlIGNoaWxkXG4gICAgLy8gdmlldyBtb2RlbCBhbHNvIGRlcGVuZHMgb24gdGhlIHBhcmVudCB2aWV3IG1vZGVsLCB5b3UgbXVzdCBwcm92aWRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjb3JyZWN0XG4gICAgLy8gdmlldyBtb2RlbCBvbiBlYWNoIHVwZGF0ZS5cbiAgICBrby5iaW5kaW5nQ29udGV4dC5wcm90b3R5cGVbJ2NyZWF0ZUNoaWxkQ29udGV4dCddID0gZnVuY3Rpb24gKGRhdGFJdGVtT3JBY2Nlc3NvciwgZGF0YUl0ZW1BbGlhcywgZXh0ZW5kQ2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBrby5iaW5kaW5nQ29udGV4dChkYXRhSXRlbU9yQWNjZXNzb3IsIHRoaXMsIGRhdGFJdGVtQWxpYXMsIGZ1bmN0aW9uKHNlbGYsIHBhcmVudENvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIEV4dGVuZCB0aGUgY29udGV4dCBoaWVyYXJjaHkgYnkgc2V0dGluZyB0aGUgYXBwcm9wcmlhdGUgcG9pbnRlcnNcbiAgICAgICAgICAgIHNlbGZbJyRwYXJlbnRDb250ZXh0J10gPSBwYXJlbnRDb250ZXh0O1xuICAgICAgICAgICAgc2VsZlsnJHBhcmVudCddID0gcGFyZW50Q29udGV4dFsnJGRhdGEnXTtcbiAgICAgICAgICAgIHNlbGZbJyRwYXJlbnRzJ10gPSAocGFyZW50Q29udGV4dFsnJHBhcmVudHMnXSB8fCBbXSkuc2xpY2UoMCk7XG4gICAgICAgICAgICBzZWxmWyckcGFyZW50cyddLnVuc2hpZnQoc2VsZlsnJHBhcmVudCddKTtcbiAgICAgICAgICAgIGlmIChleHRlbmRDYWxsYmFjaylcbiAgICAgICAgICAgICAgICBleHRlbmRDYWxsYmFjayhzZWxmKTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8vIEV4dGVuZCB0aGUgYmluZGluZyBjb250ZXh0IHdpdGggbmV3IGN1c3RvbSBwcm9wZXJ0aWVzLiBUaGlzIGRvZXNuJ3QgY2hhbmdlIHRoZSBjb250ZXh0IGhpZXJhcmNoeS5cbiAgICAvLyBTaW1pbGFybHkgdG8gXCJjaGlsZFwiIGNvbnRleHRzLCBwcm92aWRlIGEgZnVuY3Rpb24gaGVyZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgY29ycmVjdCB2YWx1ZXMgYXJlIHNldFxuICAgIC8vIHdoZW4gYW4gb2JzZXJ2YWJsZSB2aWV3IG1vZGVsIGlzIHVwZGF0ZWQuXG4gICAga28uYmluZGluZ0NvbnRleHQucHJvdG90eXBlWydleHRlbmQnXSA9IGZ1bmN0aW9uKHByb3BlcnRpZXMpIHtcbiAgICAgICAgLy8gSWYgdGhlIHBhcmVudCBjb250ZXh0IHJlZmVyZW5jZXMgYW4gb2JzZXJ2YWJsZSB2aWV3IG1vZGVsLCBcIl9zdWJzY3JpYmFibGVcIiB3aWxsIGFsd2F5cyBiZSB0aGVcbiAgICAgICAgLy8gbGF0ZXN0IHZpZXcgbW9kZWwgb2JqZWN0LiBJZiBub3QsIFwiX3N1YnNjcmliYWJsZVwiIGlzbid0IHNldCwgYW5kIHdlIGNhbiB1c2UgdGhlIHN0YXRpYyBcIiRkYXRhXCIgdmFsdWUuXG4gICAgICAgIHJldHVybiBuZXcga28uYmluZGluZ0NvbnRleHQodGhpcy5fc3Vic2NyaWJhYmxlIHx8IHRoaXNbJyRkYXRhJ10sIHRoaXMsIG51bGwsIGZ1bmN0aW9uKHNlbGYsIHBhcmVudENvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgXCJjaGlsZFwiIGNvbnRleHQgZG9lc24ndCBkaXJlY3RseSB0cmFjayBhIHBhcmVudCBvYnNlcnZhYmxlIHZpZXcgbW9kZWwsXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgJHJhd0RhdGEgdmFsdWUgdG8gbWF0Y2ggdGhlIHBhcmVudC5cbiAgICAgICAgICAgIHNlbGZbJyRyYXdEYXRhJ10gPSBwYXJlbnRDb250ZXh0WyckcmF3RGF0YSddO1xuICAgICAgICAgICAga28udXRpbHMuZXh0ZW5kKHNlbGYsIHR5cGVvZihwcm9wZXJ0aWVzKSA9PSBcImZ1bmN0aW9uXCIgPyBwcm9wZXJ0aWVzKCkgOiBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGtvLmJpbmRpbmdDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVTdGF0aWNDaGlsZENvbnRleHQgPSBmdW5jdGlvbiAoZGF0YUl0ZW1PckFjY2Vzc29yLCBkYXRhSXRlbUFsaWFzKSB7XG4gICAgICAgIHJldHVybiB0aGlzWydjcmVhdGVDaGlsZENvbnRleHQnXShkYXRhSXRlbU9yQWNjZXNzb3IsIGRhdGFJdGVtQWxpYXMsIG51bGwsIHsgXCJleHBvcnREZXBlbmRlbmNpZXNcIjogdHJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0aGUgdmFsdWVBY2Nlc29yIGZ1bmN0aW9uIGZvciBhIGJpbmRpbmcgdmFsdWVcbiAgICBmdW5jdGlvbiBtYWtlVmFsdWVBY2Nlc3Nvcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgdmFsdWUgb2YgYSB2YWx1ZUFjY2Vzc29yIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gZXZhbHVhdGVWYWx1ZUFjY2Vzc29yKHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlQWNjZXNzb3IoKTtcbiAgICB9XG5cbiAgICAvLyBHaXZlbiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBiaW5kaW5ncywgY3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgb2JqZWN0IHRoYXQgY29udGFpbnNcbiAgICAvLyBiaW5kaW5nIHZhbHVlLWFjY2Vzc29ycyBmdW5jdGlvbnMuIEVhY2ggYWNjZXNzb3IgZnVuY3Rpb24gY2FsbHMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uXG4gICAgLy8gc28gdGhhdCBpdCBhbHdheXMgZ2V0cyB0aGUgbGF0ZXN0IHZhbHVlIGFuZCBhbGwgZGVwZW5kZW5jaWVzIGFyZSBjYXB0dXJlZC4gVGhpcyBpcyB1c2VkXG4gICAgLy8gYnkga28uYXBwbHlCaW5kaW5nc1RvTm9kZSBhbmQgZ2V0QmluZGluZ3NBbmRNYWtlQWNjZXNzb3JzLlxuICAgIGZ1bmN0aW9uIG1ha2VBY2Nlc3NvcnNGcm9tRnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLm9iamVjdE1hcChrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShjYWxsYmFjayksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKVtrZXldO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gR2l2ZW4gYSBiaW5kaW5ncyBmdW5jdGlvbiBvciBvYmplY3QsIGNyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IG9iamVjdCB0aGF0IGNvbnRhaW5zXG4gICAgLy8gYmluZGluZyB2YWx1ZS1hY2Nlc3NvcnMgZnVuY3Rpb25zLiBUaGlzIGlzIHVzZWQgYnkga28uYXBwbHlCaW5kaW5nc1RvTm9kZS5cbiAgICBmdW5jdGlvbiBtYWtlQmluZGluZ0FjY2Vzc29ycyhiaW5kaW5ncywgY29udGV4dCwgbm9kZSkge1xuICAgICAgICBpZiAodHlwZW9mIGJpbmRpbmdzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUFjY2Vzc29yc0Zyb21GdW5jdGlvbihiaW5kaW5ncy5iaW5kKG51bGwsIGNvbnRleHQsIG5vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBrby51dGlscy5vYmplY3RNYXAoYmluZGluZ3MsIG1ha2VWYWx1ZUFjY2Vzc29yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBpZiB0aGUgYmluZGluZyBwcm92aWRlciBkb2Vzbid0IGluY2x1ZGUgYSBnZXRCaW5kaW5nQWNjZXNzb3JzIGZ1bmN0aW9uLlxuICAgIC8vIEl0IG11c3QgYmUgY2FsbGVkIHdpdGggJ3RoaXMnIHNldCB0byB0aGUgcHJvdmlkZXIgaW5zdGFuY2UuXG4gICAgZnVuY3Rpb24gZ2V0QmluZGluZ3NBbmRNYWtlQWNjZXNzb3JzKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VBY2Nlc3NvcnNGcm9tRnVuY3Rpb24odGhpc1snZ2V0QmluZGluZ3MnXS5iaW5kKHRoaXMsIG5vZGUsIGNvbnRleHQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVRoYXRCaW5kaW5nSXNBbGxvd2VkRm9yVmlydHVhbEVsZW1lbnRzKGJpbmRpbmdOYW1lKSB7XG4gICAgICAgIHZhciB2YWxpZGF0b3IgPSBrby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzW2JpbmRpbmdOYW1lXTtcbiAgICAgICAgaWYgKCF2YWxpZGF0b3IpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYmluZGluZyAnXCIgKyBiaW5kaW5nTmFtZSArIFwiJyBjYW5ub3QgYmUgdXNlZCB3aXRoIHZpcnR1YWwgZWxlbWVudHNcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c0ludGVybmFsIChiaW5kaW5nQ29udGV4dCwgZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50Q2hpbGQsXG4gICAgICAgICAgICBuZXh0SW5RdWV1ZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5maXJzdENoaWxkKGVsZW1lbnRPclZpcnR1YWxFbGVtZW50KSxcbiAgICAgICAgICAgIHByb3ZpZGVyID0ga28uYmluZGluZ1Byb3ZpZGVyWydpbnN0YW5jZSddLFxuICAgICAgICAgICAgcHJlcHJvY2Vzc05vZGUgPSBwcm92aWRlclsncHJlcHJvY2Vzc05vZGUnXTtcblxuICAgICAgICAvLyBQcmVwcm9jZXNzaW5nIGFsbG93cyBhIGJpbmRpbmcgcHJvdmlkZXIgdG8gbXV0YXRlIGEgbm9kZSBiZWZvcmUgYmluZGluZ3MgYXJlIGFwcGxpZWQgdG8gaXQuIEZvciBleGFtcGxlIGl0J3NcbiAgICAgICAgLy8gcG9zc2libGUgdG8gaW5zZXJ0IG5ldyBzaWJsaW5ncyBhZnRlciBpdCwgYW5kL29yIHJlcGxhY2UgdGhlIG5vZGUgd2l0aCBhIGRpZmZlcmVudCBvbmUuIFRoaXMgY2FuIGJlIHVzZWQgdG9cbiAgICAgICAgLy8gaW1wbGVtZW50IGN1c3RvbSBiaW5kaW5nIHN5bnRheGVzLCBzdWNoIGFzIHt7IHZhbHVlIH19IGZvciBzdHJpbmcgaW50ZXJwb2xhdGlvbiwgb3IgY3VzdG9tIGVsZW1lbnQgdHlwZXMgdGhhdFxuICAgICAgICAvLyB0cmlnZ2VyIGluc2VydGlvbiBvZiA8dGVtcGxhdGU+IGNvbnRlbnRzIGF0IHRoYXQgcG9pbnQgaW4gdGhlIGRvY3VtZW50LlxuICAgICAgICBpZiAocHJlcHJvY2Vzc05vZGUpIHtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Q2hpbGQgPSBuZXh0SW5RdWV1ZSkge1xuICAgICAgICAgICAgICAgIG5leHRJblF1ZXVlID0ga28udmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nKGN1cnJlbnRDaGlsZCk7XG4gICAgICAgICAgICAgICAgcHJlcHJvY2Vzc05vZGUuY2FsbChwcm92aWRlciwgY3VycmVudENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc2V0IG5leHRJblF1ZXVlIGZvciB0aGUgbmV4dCBsb29wXG4gICAgICAgICAgICBuZXh0SW5RdWV1ZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5maXJzdENoaWxkKGVsZW1lbnRPclZpcnR1YWxFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50Q2hpbGQgPSBuZXh0SW5RdWV1ZSkge1xuICAgICAgICAgICAgLy8gS2VlcCBhIHJlY29yZCBvZiB0aGUgbmV4dCBjaGlsZCAqYmVmb3JlKiBhcHBseWluZyBiaW5kaW5ncywgaW4gY2FzZSB0aGUgYmluZGluZyByZW1vdmVzIHRoZSBjdXJyZW50IGNoaWxkIGZyb20gaXRzIHBvc2l0aW9uXG4gICAgICAgICAgICBuZXh0SW5RdWV1ZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5uZXh0U2libGluZyhjdXJyZW50Q2hpbGQpO1xuICAgICAgICAgICAgYXBwbHlCaW5kaW5nc1RvTm9kZUFuZERlc2NlbmRhbnRzSW50ZXJuYWwoYmluZGluZ0NvbnRleHQsIGN1cnJlbnRDaGlsZCwgYmluZGluZ0NvbnRleHRzTWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlCaW5kaW5nc1RvTm9kZUFuZERlc2NlbmRhbnRzSW50ZXJuYWwgKGJpbmRpbmdDb250ZXh0LCBub2RlVmVyaWZpZWQsIGJpbmRpbmdDb250ZXh0TWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNob3VsZEJpbmREZXNjZW5kYW50cyA9IHRydWU7XG5cbiAgICAgICAgLy8gUGVyZiBvcHRpbWlzYXRpb246IEFwcGx5IGJpbmRpbmdzIG9ubHkgaWYuLi5cbiAgICAgICAgLy8gKDEpIFdlIG5lZWQgdG8gc3RvcmUgdGhlIGJpbmRpbmcgY29udGV4dCBvbiB0aGlzIG5vZGUgKGJlY2F1c2UgaXQgbWF5IGRpZmZlciBmcm9tIHRoZSBET00gcGFyZW50IG5vZGUncyBiaW5kaW5nIGNvbnRleHQpXG4gICAgICAgIC8vICAgICBOb3RlIHRoYXQgd2UgY2FuJ3Qgc3RvcmUgYmluZGluZyBjb250ZXh0cyBvbiBub24tZWxlbWVudHMgKGUuZy4sIHRleHQgbm9kZXMpLCBhcyBJRSBkb2Vzbid0IGFsbG93IGV4cGFuZG8gcHJvcGVydGllcyBmb3IgdGhvc2VcbiAgICAgICAgLy8gKDIpIEl0IG1pZ2h0IGhhdmUgYmluZGluZ3MgKGUuZy4sIGl0IGhhcyBhIGRhdGEtYmluZCBhdHRyaWJ1dGUsIG9yIGl0J3MgYSBtYXJrZXIgZm9yIGEgY29udGFpbmVybGVzcyB0ZW1wbGF0ZSlcbiAgICAgICAgdmFyIGlzRWxlbWVudCA9IChub2RlVmVyaWZpZWQubm9kZVR5cGUgPT09IDEpO1xuICAgICAgICBpZiAoaXNFbGVtZW50KSAvLyBXb3JrYXJvdW5kIElFIDw9IDggSFRNTCBwYXJzaW5nIHdlaXJkbmVzc1xuICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLm5vcm1hbGlzZVZpcnR1YWxFbGVtZW50RG9tU3RydWN0dXJlKG5vZGVWZXJpZmllZCk7XG5cbiAgICAgICAgdmFyIHNob3VsZEFwcGx5QmluZGluZ3MgPSAoaXNFbGVtZW50ICYmIGJpbmRpbmdDb250ZXh0TWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpICAgICAgICAgICAgIC8vIENhc2UgKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwga28uYmluZGluZ1Byb3ZpZGVyWydpbnN0YW5jZSddWydub2RlSGFzQmluZGluZ3MnXShub2RlVmVyaWZpZWQpOyAgICAgICAvLyBDYXNlICgyKVxuICAgICAgICBpZiAoc2hvdWxkQXBwbHlCaW5kaW5ncylcbiAgICAgICAgICAgIHNob3VsZEJpbmREZXNjZW5kYW50cyA9IGFwcGx5QmluZGluZ3NUb05vZGVJbnRlcm5hbChub2RlVmVyaWZpZWQsIG51bGwsIGJpbmRpbmdDb250ZXh0LCBiaW5kaW5nQ29udGV4dE1heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50KVsnc2hvdWxkQmluZERlc2NlbmRhbnRzJ107XG5cbiAgICAgICAgaWYgKHNob3VsZEJpbmREZXNjZW5kYW50cyAmJiAhYmluZGluZ0RvZXNOb3RSZWN1cnNlSW50b0VsZW1lbnRUeXBlc1trby51dGlscy50YWdOYW1lTG93ZXIobm9kZVZlcmlmaWVkKV0pIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIHJlY3Vyc2luZyBhdXRvbWF0aWNhbGx5IGludG8gKHJlYWwgb3IgdmlydHVhbCkgY2hpbGQgbm9kZXMgd2l0aG91dCBjaGFuZ2luZyBiaW5kaW5nIGNvbnRleHRzLiBTbyxcbiAgICAgICAgICAgIC8vICAqIEZvciBjaGlsZHJlbiBvZiBhICpyZWFsKiBlbGVtZW50LCB0aGUgYmluZGluZyBjb250ZXh0IGlzIGNlcnRhaW5seSB0aGUgc2FtZSBhcyBvbiB0aGVpciBET00gLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAvLyAgICBoZW5jZSBiaW5kaW5nQ29udGV4dHNNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCBpcyBmYWxzZVxuICAgICAgICAgICAgLy8gICogRm9yIGNoaWxkcmVuIG9mIGEgKnZpcnR1YWwqIGVsZW1lbnQsIHdlIGNhbid0IGJlIHN1cmUuIEV2YWx1YXRpbmcgLnBhcmVudE5vZGUgb24gdGhvc2UgY2hpbGRyZW4gbWF5XG4gICAgICAgICAgICAvLyAgICBza2lwIG92ZXIgYW55IG51bWJlciBvZiBpbnRlcm1lZGlhdGUgdmlydHVhbCBlbGVtZW50cywgYW55IG9mIHdoaWNoIG1pZ2h0IGRlZmluZSBhIGN1c3RvbSBiaW5kaW5nIGNvbnRleHQsXG4gICAgICAgICAgICAvLyAgICBoZW5jZSBiaW5kaW5nQ29udGV4dHNNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCBpcyB0cnVlXG4gICAgICAgICAgICBhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c0ludGVybmFsKGJpbmRpbmdDb250ZXh0LCBub2RlVmVyaWZpZWQsIC8qIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50OiAqLyAhaXNFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBib3VuZEVsZW1lbnREb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7XG5cblxuICAgIGZ1bmN0aW9uIHRvcG9sb2dpY2FsU29ydEJpbmRpbmdzKGJpbmRpbmdzKSB7XG4gICAgICAgIC8vIERlcHRoLWZpcnN0IHNvcnRcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLCAgICAgICAgICAgICAgICAvLyBUaGUgbGlzdCBvZiBrZXkvaGFuZGxlciBwYWlycyB0aGF0IHdlIHdpbGwgcmV0dXJuXG4gICAgICAgICAgICBiaW5kaW5nc0NvbnNpZGVyZWQgPSB7fSwgICAgLy8gQSB0ZW1wb3JhcnkgcmVjb3JkIG9mIHdoaWNoIGJpbmRpbmdzIGFyZSBhbHJlYWR5IGluICdyZXN1bHQnXG4gICAgICAgICAgICBjeWNsaWNEZXBlbmRlbmN5U3RhY2sgPSBbXTsgLy8gS2VlcHMgdHJhY2sgb2YgYSBkZXB0aC1zZWFyY2ggc28gdGhhdCwgaWYgdGhlcmUncyBhIGN5Y2xlLCB3ZSBrbm93IHdoaWNoIGJpbmRpbmdzIGNhdXNlZCBpdFxuICAgICAgICBrby51dGlscy5vYmplY3RGb3JFYWNoKGJpbmRpbmdzLCBmdW5jdGlvbiBwdXNoQmluZGluZyhiaW5kaW5nS2V5KSB7XG4gICAgICAgICAgICBpZiAoIWJpbmRpbmdzQ29uc2lkZXJlZFtiaW5kaW5nS2V5XSkge1xuICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nID0ga29bJ2dldEJpbmRpbmdIYW5kbGVyJ10oYmluZGluZ0tleSk7XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3QgYWRkIGRlcGVuZGVuY2llcyAoaWYgYW55KSBvZiB0aGUgY3VycmVudCBiaW5kaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nWydhZnRlciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjeWNsaWNEZXBlbmRlbmN5U3RhY2sucHVzaChiaW5kaW5nS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChiaW5kaW5nWydhZnRlciddLCBmdW5jdGlvbihiaW5kaW5nRGVwZW5kZW5jeUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nc1tiaW5kaW5nRGVwZW5kZW5jeUtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtvLnV0aWxzLmFycmF5SW5kZXhPZihjeWNsaWNEZXBlbmRlbmN5U3RhY2ssIGJpbmRpbmdEZXBlbmRlbmN5S2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ2Fubm90IGNvbWJpbmUgdGhlIGZvbGxvd2luZyBiaW5kaW5ncywgYmVjYXVzZSB0aGV5IGhhdmUgYSBjeWNsaWMgZGVwZW5kZW5jeTogXCIgKyBjeWNsaWNEZXBlbmRlbmN5U3RhY2suam9pbihcIiwgXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hCaW5kaW5nKGJpbmRpbmdEZXBlbmRlbmN5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3ljbGljRGVwZW5kZW5jeVN0YWNrLmxlbmd0aC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIE5leHQgYWRkIHRoZSBjdXJyZW50IGJpbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXk6IGJpbmRpbmdLZXksIGhhbmRsZXI6IGJpbmRpbmcgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJpbmRpbmdzQ29uc2lkZXJlZFtiaW5kaW5nS2V5XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlCaW5kaW5nc1RvTm9kZUludGVybmFsKG5vZGUsIHNvdXJjZUJpbmRpbmdzLCBiaW5kaW5nQ29udGV4dCwgYmluZGluZ0NvbnRleHRNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCkge1xuICAgICAgICAvLyBQcmV2ZW50IG11bHRpcGxlIGFwcGx5QmluZGluZ3MgY2FsbHMgZm9yIHRoZSBzYW1lIG5vZGUsIGV4Y2VwdCB3aGVuIGEgYmluZGluZyB2YWx1ZSBpcyBzcGVjaWZpZWRcbiAgICAgICAgdmFyIGFscmVhZHlCb3VuZCA9IGtvLnV0aWxzLmRvbURhdGEuZ2V0KG5vZGUsIGJvdW5kRWxlbWVudERvbURhdGFLZXkpO1xuICAgICAgICBpZiAoIXNvdXJjZUJpbmRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoYWxyZWFkeUJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJZb3UgY2Fubm90IGFwcGx5IGJpbmRpbmdzIG11bHRpcGxlIHRpbWVzIHRvIHRoZSBzYW1lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQobm9kZSwgYm91bmRFbGVtZW50RG9tRGF0YUtleSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPcHRpbWl6YXRpb246IERvbid0IHN0b3JlIHRoZSBiaW5kaW5nIGNvbnRleHQgb24gdGhpcyBub2RlIGlmIGl0J3MgZGVmaW5pdGVseSB0aGUgc2FtZSBhcyBvbiBub2RlLnBhcmVudE5vZGUsIGJlY2F1c2VcbiAgICAgICAgLy8gd2UgY2FuIGVhc2lseSByZWNvdmVyIGl0IGp1c3QgYnkgc2Nhbm5pbmcgdXAgdGhlIG5vZGUncyBhbmNlc3RvcnMgaW4gdGhlIERPTVxuICAgICAgICAvLyAobm90ZTogaGVyZSwgcGFyZW50IG5vZGUgbWVhbnMgXCJyZWFsIERPTSBwYXJlbnRcIiBub3QgXCJ2aXJ0dWFsIHBhcmVudFwiLCBhcyB0aGVyZSdzIG5vIE8oMSkgd2F5IHRvIGZpbmQgdGhlIHZpcnR1YWwgcGFyZW50KVxuICAgICAgICBpZiAoIWFscmVhZHlCb3VuZCAmJiBiaW5kaW5nQ29udGV4dE1heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50KVxuICAgICAgICAgICAga28uc3RvcmVkQmluZGluZ0NvbnRleHRGb3JOb2RlKG5vZGUsIGJpbmRpbmdDb250ZXh0KTtcblxuICAgICAgICAvLyBVc2UgYmluZGluZ3MgaWYgZ2l2ZW4sIG90aGVyd2lzZSBmYWxsIGJhY2sgb24gYXNraW5nIHRoZSBiaW5kaW5ncyBwcm92aWRlciB0byBnaXZlIHVzIHNvbWUgYmluZGluZ3NcbiAgICAgICAgdmFyIGJpbmRpbmdzO1xuICAgICAgICBpZiAoc291cmNlQmluZGluZ3MgJiYgdHlwZW9mIHNvdXJjZUJpbmRpbmdzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBiaW5kaW5ncyA9IHNvdXJjZUJpbmRpbmdzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0ga28uYmluZGluZ1Byb3ZpZGVyWydpbnN0YW5jZSddLFxuICAgICAgICAgICAgICAgIGdldEJpbmRpbmdzID0gcHJvdmlkZXJbJ2dldEJpbmRpbmdBY2Nlc3NvcnMnXSB8fCBnZXRCaW5kaW5nc0FuZE1ha2VBY2Nlc3NvcnM7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgYmluZGluZyBmcm9tIHRoZSBwcm92aWRlciB3aXRoaW4gYSBjb21wdXRlZCBvYnNlcnZhYmxlIHNvIHRoYXQgd2UgY2FuIHVwZGF0ZSB0aGUgYmluZGluZ3Mgd2hlbmV2ZXJcbiAgICAgICAgICAgIC8vIHRoZSBiaW5kaW5nIGNvbnRleHQgaXMgdXBkYXRlZCBvciBpZiB0aGUgYmluZGluZyBwcm92aWRlciBhY2Nlc3NlcyBvYnNlcnZhYmxlcy5cbiAgICAgICAgICAgIHZhciBiaW5kaW5nc1VwZGF0ZXIgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5ncyA9IHNvdXJjZUJpbmRpbmdzID8gc291cmNlQmluZGluZ3MoYmluZGluZ0NvbnRleHQsIG5vZGUpIDogZ2V0QmluZGluZ3MuY2FsbChwcm92aWRlciwgbm9kZSwgYmluZGluZ0NvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBhIGRlcGVuZGVuY3kgb24gdGhlIGJpbmRpbmcgY29udGV4dCB0byBzdXBwb3J0IG9ic2VydmFibGUgdmlldyBtb2RlbHMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5ncyAmJiBiaW5kaW5nQ29udGV4dC5fc3Vic2NyaWJhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZ0NvbnRleHQuX3N1YnNjcmliYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZ3M7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogbm9kZSB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIWJpbmRpbmdzIHx8ICFiaW5kaW5nc1VwZGF0ZXIuaXNBY3RpdmUoKSlcbiAgICAgICAgICAgICAgICBiaW5kaW5nc1VwZGF0ZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJpbmRpbmdIYW5kbGVyVGhhdENvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzO1xuICAgICAgICBpZiAoYmluZGluZ3MpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgdmFsdWUgYWNjZXNzb3IgZm9yIGEgZ2l2ZW4gYmluZGluZy4gV2hlbiBiaW5kaW5ncyBhcmUgc3RhdGljICh3b24ndCBiZSB1cGRhdGVkIGJlY2F1c2Ugb2YgYSBiaW5kaW5nXG4gICAgICAgICAgICAvLyBjb250ZXh0IHVwZGF0ZSksIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZSBhY2Nlc3NvciBmcm9tIHRoZSBiaW5kaW5nLiBPdGhlcndpc2UsIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIGdldHNcbiAgICAgICAgICAgIC8vIHRoZSBsYXRlc3QgYmluZGluZyB2YWx1ZSBhbmQgcmVnaXN0ZXJzIGEgZGVwZW5kZW5jeSBvbiB0aGUgYmluZGluZyB1cGRhdGVyLlxuICAgICAgICAgICAgdmFyIGdldFZhbHVlQWNjZXNzb3IgPSBiaW5kaW5nc1VwZGF0ZXJcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uKGJpbmRpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2YWx1YXRlVmFsdWVBY2Nlc3NvcihiaW5kaW5nc1VwZGF0ZXIoKVtiaW5kaW5nS2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGJpbmRpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdzW2JpbmRpbmdLZXldO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFVzZSBvZiBhbGxCaW5kaW5ncyBhcyBhIGZ1bmN0aW9uIGlzIG1haW50YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBidXQgaXRzIHVzZSBpcyBkZXByZWNhdGVkXG4gICAgICAgICAgICBmdW5jdGlvbiBhbGxCaW5kaW5ncygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga28udXRpbHMub2JqZWN0TWFwKGJpbmRpbmdzVXBkYXRlciA/IGJpbmRpbmdzVXBkYXRlcigpIDogYmluZGluZ3MsIGV2YWx1YXRlVmFsdWVBY2Nlc3Nvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGlzIHRoZSAzLnggYWxsQmluZGluZ3MgQVBJXG4gICAgICAgICAgICBhbGxCaW5kaW5nc1snZ2V0J10gPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZ3Nba2V5XSAmJiBldmFsdWF0ZVZhbHVlQWNjZXNzb3IoZ2V0VmFsdWVBY2Nlc3NvcihrZXkpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhbGxCaW5kaW5nc1snaGFzJ10gPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5IGluIGJpbmRpbmdzO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRmlyc3QgcHV0IHRoZSBiaW5kaW5ncyBpbnRvIHRoZSByaWdodCBvcmRlclxuICAgICAgICAgICAgdmFyIG9yZGVyZWRCaW5kaW5ncyA9IHRvcG9sb2dpY2FsU29ydEJpbmRpbmdzKGJpbmRpbmdzKTtcblxuICAgICAgICAgICAgLy8gR28gdGhyb3VnaCB0aGUgc29ydGVkIGJpbmRpbmdzLCBjYWxsaW5nIGluaXQgYW5kIHVwZGF0ZSBmb3IgZWFjaFxuICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKG9yZGVyZWRCaW5kaW5ncywgZnVuY3Rpb24oYmluZGluZ0tleUFuZEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgdG9wb2xvZ2ljYWxTb3J0QmluZGluZ3MgaGFzIGFscmVhZHkgZmlsdGVyZWQgb3V0IGFueSBub25leGlzdGVudCBiaW5kaW5nIGhhbmRsZXJzLFxuICAgICAgICAgICAgICAgIC8vIHNvIGJpbmRpbmdLZXlBbmRIYW5kbGVyLmhhbmRsZXIgd2lsbCBhbHdheXMgYmUgbm9ubnVsbC5cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckluaXRGbiA9IGJpbmRpbmdLZXlBbmRIYW5kbGVyLmhhbmRsZXJbXCJpbml0XCJdLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyVXBkYXRlRm4gPSBiaW5kaW5nS2V5QW5kSGFuZGxlci5oYW5kbGVyW1widXBkYXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nS2V5ID0gYmluZGluZ0tleUFuZEhhbmRsZXIua2V5O1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVUaGF0QmluZGluZ0lzQWxsb3dlZEZvclZpcnR1YWxFbGVtZW50cyhiaW5kaW5nS2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gaW5pdCwgaWdub3JpbmcgYW55IGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXJJbml0Rm4gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5pdFJlc3VsdCA9IGhhbmRsZXJJbml0Rm4obm9kZSwgZ2V0VmFsdWVBY2Nlc3NvcihiaW5kaW5nS2V5KSwgYWxsQmluZGluZ3MsIGJpbmRpbmdDb250ZXh0WyckZGF0YSddLCBiaW5kaW5nQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGJpbmRpbmcgaGFuZGxlciBjbGFpbXMgdG8gY29udHJvbCBkZXNjZW5kYW50IGJpbmRpbmdzLCBtYWtlIGEgbm90ZSBvZiB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRSZXN1bHQgJiYgaW5pdFJlc3VsdFsnY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmluZGluZ0hhbmRsZXJUaGF0Q29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11bHRpcGxlIGJpbmRpbmdzIChcIiArIGJpbmRpbmdIYW5kbGVyVGhhdENvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzICsgXCIgYW5kIFwiICsgYmluZGluZ0tleSArIFwiKSBhcmUgdHJ5aW5nIHRvIGNvbnRyb2wgZGVzY2VuZGFudCBiaW5kaW5ncyBvZiB0aGUgc2FtZSBlbGVtZW50LiBZb3UgY2Fubm90IHVzZSB0aGVzZSBiaW5kaW5ncyB0b2dldGhlciBvbiB0aGUgc2FtZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZ0hhbmRsZXJUaGF0Q29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MgPSBiaW5kaW5nS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHVwZGF0ZSBpbiBpdHMgb3duIGNvbXB1dGVkIHdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyVXBkYXRlRm4gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrby5kZXBlbmRlbnRPYnNlcnZhYmxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyVXBkYXRlRm4obm9kZSwgZ2V0VmFsdWVBY2Nlc3NvcihiaW5kaW5nS2V5KSwgYWxsQmluZGluZ3MsIGJpbmRpbmdDb250ZXh0WyckZGF0YSddLCBiaW5kaW5nQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBub2RlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBleC5tZXNzYWdlID0gXCJVbmFibGUgdG8gcHJvY2VzcyBiaW5kaW5nIFxcXCJcIiArIGJpbmRpbmdLZXkgKyBcIjogXCIgKyBiaW5kaW5nc1tiaW5kaW5nS2V5XSArIFwiXFxcIlxcbk1lc3NhZ2U6IFwiICsgZXgubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3Nob3VsZEJpbmREZXNjZW5kYW50cyc6IGJpbmRpbmdIYW5kbGVyVGhhdENvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzID09PSB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIHN0b3JlZEJpbmRpbmdDb250ZXh0RG9tRGF0YUtleSA9IGtvLnV0aWxzLmRvbURhdGEubmV4dEtleSgpO1xuICAgIGtvLnN0b3JlZEJpbmRpbmdDb250ZXh0Rm9yTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChub2RlLCBzdG9yZWRCaW5kaW5nQ29udGV4dERvbURhdGFLZXksIGJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChiaW5kaW5nQ29udGV4dC5fc3Vic2NyaWJhYmxlKVxuICAgICAgICAgICAgICAgIGJpbmRpbmdDb250ZXh0Ll9zdWJzY3JpYmFibGUuX2FkZE5vZGUobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ga28udXRpbHMuZG9tRGF0YS5nZXQobm9kZSwgc3RvcmVkQmluZGluZ0NvbnRleHREb21EYXRhS2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJpbmRpbmdDb250ZXh0KHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQgJiYgKHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQgaW5zdGFuY2VvZiBrby5iaW5kaW5nQ29udGV4dClcbiAgICAgICAgICAgID8gdmlld01vZGVsT3JCaW5kaW5nQ29udGV4dFxuICAgICAgICAgICAgOiBuZXcga28uYmluZGluZ0NvbnRleHQodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCk7XG4gICAgfVxuXG4gICAga28uYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlID0gZnVuY3Rpb24gKG5vZGUsIGJpbmRpbmdzLCB2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSAvLyBJZiBpdCdzIGFuIGVsZW1lbnQsIHdvcmthcm91bmQgSUUgPD0gOCBIVE1MIHBhcnNpbmcgd2VpcmRuZXNzXG4gICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMubm9ybWFsaXNlVmlydHVhbEVsZW1lbnREb21TdHJ1Y3R1cmUobm9kZSk7XG4gICAgICAgIHJldHVybiBhcHBseUJpbmRpbmdzVG9Ob2RlSW50ZXJuYWwobm9kZSwgYmluZGluZ3MsIGdldEJpbmRpbmdDb250ZXh0KHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAga28uYXBwbHlCaW5kaW5nc1RvTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBiaW5kaW5ncywgdmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IGdldEJpbmRpbmdDb250ZXh0KHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQpO1xuICAgICAgICByZXR1cm4ga28uYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlKG5vZGUsIG1ha2VCaW5kaW5nQWNjZXNzb3JzKGJpbmRpbmdzLCBjb250ZXh0LCBub2RlKSwgY29udGV4dCk7XG4gICAgfTtcblxuICAgIGtvLmFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzID0gZnVuY3Rpb24odmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCwgcm9vdE5vZGUpIHtcbiAgICAgICAgaWYgKHJvb3ROb2RlLm5vZGVUeXBlID09PSAxIHx8IHJvb3ROb2RlLm5vZGVUeXBlID09PSA4KVxuICAgICAgICAgICAgYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHNJbnRlcm5hbChnZXRCaW5kaW5nQ29udGV4dCh2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0KSwgcm9vdE5vZGUsIHRydWUpO1xuICAgIH07XG5cbiAgICBrby5hcHBseUJpbmRpbmdzID0gZnVuY3Rpb24gKHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQsIHJvb3ROb2RlKSB7XG4gICAgICAgIC8vIElmIGpRdWVyeSBpcyBsb2FkZWQgYWZ0ZXIgS25vY2tvdXQsIHdlIHdvbid0IGluaXRpYWxseSBoYXZlIGFjY2VzcyB0byBpdC4gU28gc2F2ZSBpdCBoZXJlLlxuICAgICAgICBpZiAoIWpRdWVyeUluc3RhbmNlICYmIHdpbmRvd1snalF1ZXJ5J10pIHtcbiAgICAgICAgICAgIGpRdWVyeUluc3RhbmNlID0gd2luZG93WydqUXVlcnknXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290Tm9kZSAmJiAocm9vdE5vZGUubm9kZVR5cGUgIT09IDEpICYmIChyb290Tm9kZS5ub2RlVHlwZSAhPT0gOCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKTtcbiAgICAgICAgcm9vdE5vZGUgPSByb290Tm9kZSB8fCB3aW5kb3cuZG9jdW1lbnQuYm9keTsgLy8gTWFrZSBcInJvb3ROb2RlXCIgcGFyYW1ldGVyIG9wdGlvbmFsXG5cbiAgICAgICAgYXBwbHlCaW5kaW5nc1RvTm9kZUFuZERlc2NlbmRhbnRzSW50ZXJuYWwoZ2V0QmluZGluZ0NvbnRleHQodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCksIHJvb3ROb2RlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgLy8gUmV0cmlldmluZyBiaW5kaW5nIGNvbnRleHQgZnJvbSBhcmJpdHJhcnkgbm9kZXNcbiAgICBrby5jb250ZXh0Rm9yID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAvLyBXZSBjYW4gb25seSBkbyBzb21ldGhpbmcgbWVhbmluZ2Z1bCBmb3IgZWxlbWVudHMgYW5kIGNvbW1lbnQgbm9kZXMgKGluIHBhcnRpY3VsYXIsIG5vdCB0ZXh0IG5vZGVzLCBhcyBJRSBjYW4ndCBzdG9yZSBkb21kYXRhIGZvciB0aGVtKVxuICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IGtvLnN0b3JlZEJpbmRpbmdDb250ZXh0Rm9yTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dCkgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSkgcmV0dXJuIGtvLmNvbnRleHRGb3Iobm9kZS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAga28uZGF0YUZvciA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBrby5jb250ZXh0Rm9yKG5vZGUpO1xuICAgICAgICByZXR1cm4gY29udGV4dCA/IGNvbnRleHRbJyRkYXRhJ10gOiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIGtvLmV4cG9ydFN5bWJvbCgnYmluZGluZ0hhbmRsZXJzJywga28uYmluZGluZ0hhbmRsZXJzKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2FwcGx5QmluZGluZ3MnLCBrby5hcHBseUJpbmRpbmdzKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2FwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzJywga28uYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHMpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlJywga28uYXBwbHlCaW5kaW5nQWNjZXNzb3JzVG9Ob2RlKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2FwcGx5QmluZGluZ3NUb05vZGUnLCBrby5hcHBseUJpbmRpbmdzVG9Ob2RlKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2NvbnRleHRGb3InLCBrby5jb250ZXh0Rm9yKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2RhdGFGb3InLCBrby5kYXRhRm9yKTtcbn0pKCk7XG4oZnVuY3Rpb24odW5kZWZpbmVkKSB7XG4gICAgdmFyIGxvYWRpbmdTdWJzY3JpYmFibGVzQ2FjaGUgPSB7fSwgLy8gVHJhY2tzIGNvbXBvbmVudCBsb2FkcyB0aGF0IGFyZSBjdXJyZW50bHkgaW4gZmxpZ2h0XG4gICAgICAgIGxvYWRlZERlZmluaXRpb25zQ2FjaGUgPSB7fTsgICAgLy8gVHJhY2tzIGNvbXBvbmVudCBsb2FkcyB0aGF0IGhhdmUgYWxyZWFkeSBjb21wbGV0ZWRcblxuICAgIGtvLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oY29tcG9uZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjYWNoZWREZWZpbml0aW9uID0gZ2V0T2JqZWN0T3duUHJvcGVydHkobG9hZGVkRGVmaW5pdGlvbnNDYWNoZSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoY2FjaGVkRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIEl0J3MgYWxyZWFkeSBsb2FkZWQgYW5kIGNhY2hlZC4gUmV1c2UgdGhlIHNhbWUgZGVmaW5pdGlvbiBvYmplY3QuXG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGZvciBBUEkgY29uc2lzdGVuY3ksIGV2ZW4gY2FjaGUgaGl0cyBjb21wbGV0ZSBhc3luY2hyb25vdXNseSBieSBkZWZhdWx0LlxuICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gYnlwYXNzIHRoaXMgYnkgcHV0dGluZyBzeW5jaHJvbm91czp0cnVlIG9uIHlvdXIgY29tcG9uZW50IGNvbmZpZy5cbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVkRGVmaW5pdGlvbi5pc1N5bmNocm9ub3VzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGZ1bmN0aW9uKCkgeyAvLyBTZWUgY29tbWVudCBpbiBsb2FkZXJSZWdpc3RyeUJlaGF2aW9ycy5qcyBmb3IgcmVhc29uaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjYWNoZWREZWZpbml0aW9uLmRlZmluaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrby50YXNrcy5zY2hlZHVsZShmdW5jdGlvbigpIHsgY2FsbGJhY2soY2FjaGVkRGVmaW5pdGlvbi5kZWZpbml0aW9uKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBKb2luIHRoZSBsb2FkaW5nIHByb2Nlc3MgdGhhdCBpcyBhbHJlYWR5IHVuZGVyd2F5LCBvciBzdGFydCBhIG5ldyBvbmUuXG4gICAgICAgICAgICAgICAgbG9hZENvbXBvbmVudEFuZE5vdGlmeShjb21wb25lbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xlYXJDYWNoZWREZWZpbml0aW9uOiBmdW5jdGlvbihjb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9hZGVkRGVmaW5pdGlvbnNDYWNoZVtjb21wb25lbnROYW1lXTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZ2V0Rmlyc3RSZXN1bHRGcm9tTG9hZGVyczogZ2V0Rmlyc3RSZXN1bHRGcm9tTG9hZGVyc1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRPYmplY3RPd25Qcm9wZXJ0eShvYmosIHByb3BOYW1lKSB7XG4gICAgICAgIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkocHJvcE5hbWUpID8gb2JqW3Byb3BOYW1lXSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQ29tcG9uZW50QW5kTm90aWZ5KGNvbXBvbmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdWJzY3JpYmFibGUgPSBnZXRPYmplY3RPd25Qcm9wZXJ0eShsb2FkaW5nU3Vic2NyaWJhYmxlc0NhY2hlLCBjb21wb25lbnROYW1lKSxcbiAgICAgICAgICAgIGNvbXBsZXRlZEFzeW5jO1xuICAgICAgICBpZiAoIXN1YnNjcmliYWJsZSkge1xuICAgICAgICAgICAgLy8gSXQncyBub3Qgc3RhcnRlZCBsb2FkaW5nIHlldC4gU3RhcnQgbG9hZGluZywgYW5kIHdoZW4gaXQncyBkb25lLCBtb3ZlIGl0IHRvIGxvYWRlZERlZmluaXRpb25zQ2FjaGUuXG4gICAgICAgICAgICBzdWJzY3JpYmFibGUgPSBsb2FkaW5nU3Vic2NyaWJhYmxlc0NhY2hlW2NvbXBvbmVudE5hbWVdID0gbmV3IGtvLnN1YnNjcmliYWJsZSgpO1xuICAgICAgICAgICAgc3Vic2NyaWJhYmxlLnN1YnNjcmliZShjYWxsYmFjayk7XG5cbiAgICAgICAgICAgIGJlZ2luTG9hZGluZ0NvbXBvbmVudChjb21wb25lbnROYW1lLCBmdW5jdGlvbihkZWZpbml0aW9uLCBjb25maWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNTeW5jaHJvbm91c0NvbXBvbmVudCA9ICEhKGNvbmZpZyAmJiBjb25maWdbJ3N5bmNocm9ub3VzJ10pO1xuICAgICAgICAgICAgICAgIGxvYWRlZERlZmluaXRpb25zQ2FjaGVbY29tcG9uZW50TmFtZV0gPSB7IGRlZmluaXRpb246IGRlZmluaXRpb24sIGlzU3luY2hyb25vdXNDb21wb25lbnQ6IGlzU3luY2hyb25vdXNDb21wb25lbnQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbG9hZGluZ1N1YnNjcmliYWJsZXNDYWNoZVtjb21wb25lbnROYW1lXTtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBBUEkgY29uc2lzdGVuY3ksIGFsbCBsb2FkcyBjb21wbGV0ZSBhc3luY2hyb25vdXNseS4gSG93ZXZlciB3ZSB3YW50IHRvIGF2b2lkXG4gICAgICAgICAgICAgICAgLy8gYWRkaW5nIGFuIGV4dHJhIHRhc2sgc2NoZWR1bGUgaWYgaXQncyB1bm5lY2Vzc2FyeSAoaS5lLiwgdGhlIGNvbXBsZXRpb24gaXMgYWxyZWFkeVxuICAgICAgICAgICAgICAgIC8vIGFzeW5jKS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gYnlwYXNzIHRoZSAnYWx3YXlzIGFzeW5jaHJvbm91cycgZmVhdHVyZSBieSBwdXR0aW5nIHRoZSBzeW5jaHJvbm91czp0cnVlXG4gICAgICAgICAgICAgICAgLy8gZmxhZyBvbiB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uIHdoZW4geW91IHJlZ2lzdGVyIGl0LlxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWRBc3luYyB8fCBpc1N5bmNocm9ub3VzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBub3RpZnlTdWJzY3JpYmVycyBpZ25vcmVzIGFueSBkZXBlbmRlbmNpZXMgcmVhZCB3aXRoaW4gdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgICAgICAvLyBTZWUgY29tbWVudCBpbiBsb2FkZXJSZWdpc3RyeUJlaGF2aW9ycy5qcyBmb3IgcmVhc29uaW5nXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliYWJsZVsnbm90aWZ5U3Vic2NyaWJlcnMnXShkZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrby50YXNrcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliYWJsZVsnbm90aWZ5U3Vic2NyaWJlcnMnXShkZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb21wbGV0ZWRBc3luYyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpYmFibGUuc3Vic2NyaWJlKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJlZ2luTG9hZGluZ0NvbXBvbmVudChjb21wb25lbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBnZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzKCdnZXRDb25maWcnLCBbY29tcG9uZW50TmFtZV0sIGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBjb25maWcsIHNvIG5vdyBsb2FkIGl0cyBkZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgZ2V0Rmlyc3RSZXN1bHRGcm9tTG9hZGVycygnbG9hZENvbXBvbmVudCcsIFtjb21wb25lbnROYW1lLCBjb25maWddLCBmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRlZmluaXRpb24sIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBjb21wb25lbnQgaGFzIG5vIGNvbmZpZyAtIGl0J3MgdW5rbm93biB0byBhbGwgdGhlIGxvYWRlcnMuXG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgbm90IGFuIGVycm9yIChlLmcuLCBhIG1vZHVsZSBsb2FkaW5nIGVycm9yKSAtIHRoYXQgd291bGQgYWJvcnQgdGhlXG4gICAgICAgICAgICAgICAgLy8gcHJvY2VzcyBhbmQgdGhpcyBjYWxsYmFjayB3b3VsZCBub3QgcnVuLiBGb3IgdGhpcyBjYWxsYmFjayB0byBydW4sIGFsbCBsb2FkZXJzIG11c3RcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGNvbmZpcm1lZCB0aGV5IGRvbid0IGtub3cgYWJvdXQgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEZpcnN0UmVzdWx0RnJvbUxvYWRlcnMobWV0aG9kTmFtZSwgYXJnc0V4Y2VwdENhbGxiYWNrLCBjYWxsYmFjaywgY2FuZGlkYXRlTG9hZGVycykge1xuICAgICAgICAvLyBPbiB0aGUgZmlyc3QgY2FsbCBpbiB0aGUgc3RhY2ssIHN0YXJ0IHdpdGggdGhlIGZ1bGwgc2V0IG9mIGxvYWRlcnNcbiAgICAgICAgaWYgKCFjYW5kaWRhdGVMb2FkZXJzKSB7XG4gICAgICAgICAgICBjYW5kaWRhdGVMb2FkZXJzID0ga28uY29tcG9uZW50c1snbG9hZGVycyddLnNsaWNlKDApOyAvLyBVc2UgYSBjb3B5LCBiZWNhdXNlIHdlJ2xsIGJlIG11dGF0aW5nIHRoaXMgYXJyYXlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyeSB0aGUgbmV4dCBjYW5kaWRhdGVcbiAgICAgICAgdmFyIGN1cnJlbnRDYW5kaWRhdGVMb2FkZXIgPSBjYW5kaWRhdGVMb2FkZXJzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChjdXJyZW50Q2FuZGlkYXRlTG9hZGVyKSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kSW5zdGFuY2UgPSBjdXJyZW50Q2FuZGlkYXRlTG9hZGVyW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgaWYgKG1ldGhvZEluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdhc0Fib3J0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25vdXNSZXR1cm5WYWx1ZSA9IG1ldGhvZEluc3RhbmNlLmFwcGx5KGN1cnJlbnRDYW5kaWRhdGVMb2FkZXIsIGFyZ3NFeGNlcHRDYWxsYmFjay5jb25jYXQoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2FzQWJvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNhbmRpZGF0ZSByZXR1cm5lZCBhIHZhbHVlLiBVc2UgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRoZSBuZXh0IGNhbmRpZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZpcnN0UmVzdWx0RnJvbUxvYWRlcnMobWV0aG9kTmFtZSwgYXJnc0V4Y2VwdENhbGxiYWNrLCBjYWxsYmFjaywgY2FuZGlkYXRlTG9hZGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSwgbG9hZGVycyBtYXkgbm90IHJldHVybiBhbnl0aGluZyBzeW5jaHJvbm91c2x5LiBUaGlzIGxlYXZlcyBvcGVuIHRoZSBwb3NzaWJpbGl0eVxuICAgICAgICAgICAgICAgIC8vIHRoYXQgd2UnbGwgZXh0ZW5kIHRoZSBBUEkgdG8gc3VwcG9ydCBzeW5jaHJvbm91cyByZXR1cm4gdmFsdWVzIGluIHRoZSBmdXR1cmUuIEl0IHdvbid0IGJlXG4gICAgICAgICAgICAgICAgLy8gYSBicmVha2luZyBjaGFuZ2UsIGJlY2F1c2UgY3VycmVudGx5IG5vIGxvYWRlciBpcyBhbGxvd2VkIHRvIHJldHVybiBhbnl0aGluZyBleGNlcHQgdW5kZWZpbmVkLlxuICAgICAgICAgICAgICAgIGlmIChzeW5jaHJvbm91c1JldHVyblZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FzQWJvcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWV0aG9kIHRvIHN1cHByZXNzIGV4Y2VwdGlvbnMgd2lsbCByZW1haW4gdW5kb2N1bWVudGVkLiBUaGlzIGlzIG9ubHkgdG8ga2VlcFxuICAgICAgICAgICAgICAgICAgICAvLyBLTydzIHNwZWNzIHJ1bm5pbmcgdGlkaWx5LCBzaW5jZSB3ZSBjYW4gb2JzZXJ2ZSB0aGUgbG9hZGluZyBnb3QgYWJvcnRlZCB3aXRob3V0XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhdmluZyBleGNlcHRpb25zIGNsdXR0ZXJpbmcgdXAgdGhlIGNvbnNvbGUgdG9vLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRDYW5kaWRhdGVMb2FkZXJbJ3N1cHByZXNzTG9hZGVyRXhjZXB0aW9ucyddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBsb2FkZXJzIG11c3Qgc3VwcGx5IHZhbHVlcyBieSBpbnZva2luZyB0aGUgY2FsbGJhY2ssIG5vdCBieSByZXR1cm5pbmcgdmFsdWVzIHN5bmNocm9ub3VzbHkuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FuZGlkYXRlIGRvZXNuJ3QgaGF2ZSB0aGUgcmVsZXZhbnQgaGFuZGxlci4gU3luY2hyb25vdXNseSBtb3ZlIG9uIHRvIHRoZSBuZXh0IG9uZS5cbiAgICAgICAgICAgICAgICBnZXRGaXJzdFJlc3VsdEZyb21Mb2FkZXJzKG1ldGhvZE5hbWUsIGFyZ3NFeGNlcHRDYWxsYmFjaywgY2FsbGJhY2ssIGNhbmRpZGF0ZUxvYWRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gY2FuZGlkYXRlcyByZXR1cm5lZCBhIHZhbHVlXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlZmVyZW5jZSB0aGUgbG9hZGVycyB2aWEgc3RyaW5nIG5hbWUgc28gaXQncyBwb3NzaWJsZSBmb3IgZGV2ZWxvcGVyc1xuICAgIC8vIHRvIHJlcGxhY2UgdGhlIHdob2xlIGFycmF5IGJ5IGFzc2lnbmluZyB0byBrby5jb21wb25lbnRzLmxvYWRlcnNcbiAgICBrby5jb21wb25lbnRzWydsb2FkZXJzJ10gPSBbXTtcblxuICAgIGtvLmV4cG9ydFN5bWJvbCgnY29tcG9uZW50cycsIGtvLmNvbXBvbmVudHMpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnY29tcG9uZW50cy5nZXQnLCBrby5jb21wb25lbnRzLmdldCk7XG4gICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLmNsZWFyQ2FjaGVkRGVmaW5pdGlvbicsIGtvLmNvbXBvbmVudHMuY2xlYXJDYWNoZWREZWZpbml0aW9uKTtcbn0pKCk7XG4oZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5cbiAgICAvLyBUaGUgZGVmYXVsdCBsb2FkZXIgaXMgcmVzcG9uc2libGUgZm9yIHR3byB0aGluZ3M6XG4gICAgLy8gMS4gTWFpbnRhaW5pbmcgdGhlIGRlZmF1bHQgaW4tbWVtb3J5IHJlZ2lzdHJ5IG9mIGNvbXBvbmVudCBjb25maWd1cmF0aW9uIG9iamVjdHNcbiAgICAvLyAgICAoaS5lLiwgdGhlIHRoaW5nIHlvdSdyZSB3cml0aW5nIHRvIHdoZW4geW91IGNhbGwga28uY29tcG9uZW50cy5yZWdpc3Rlcihzb21lTmFtZSwgLi4uKSlcbiAgICAvLyAyLiBBbnN3ZXJpbmcgcmVxdWVzdHMgZm9yIGNvbXBvbmVudHMgYnkgZmV0Y2hpbmcgY29uZmlndXJhdGlvbiBvYmplY3RzXG4gICAgLy8gICAgZnJvbSB0aGF0IGRlZmF1bHQgaW4tbWVtb3J5IHJlZ2lzdHJ5IGFuZCByZXNvbHZpbmcgdGhlbSBpbnRvIHN0YW5kYXJkXG4gICAgLy8gICAgY29tcG9uZW50IGRlZmluaXRpb24gb2JqZWN0cyAob2YgdGhlIGZvcm0geyBjcmVhdGVWaWV3TW9kZWw6IC4uLiwgdGVtcGxhdGU6IC4uLiB9KVxuICAgIC8vIEN1c3RvbSBsb2FkZXJzIG1heSBvdmVycmlkZSBlaXRoZXIgb2YgdGhlc2UgZmFjaWxpdGllcywgaS5lLixcbiAgICAvLyAxLiBUbyBzdXBwbHkgY29uZmlndXJhdGlvbiBvYmplY3RzIGZyb20gc29tZSBvdGhlciBzb3VyY2UgKGUuZy4sIGNvbnZlbnRpb25zKVxuICAgIC8vIDIuIE9yLCB0byByZXNvbHZlIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyBieSBsb2FkaW5nIHZpZXdtb2RlbHMvdGVtcGxhdGVzIHZpYSBhcmJpdHJhcnkgbG9naWMuXG5cbiAgICB2YXIgZGVmYXVsdENvbmZpZ1JlZ2lzdHJ5ID0ge307XG5cbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyID0gZnVuY3Rpb24oY29tcG9uZW50TmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29uZmlndXJhdGlvbiBmb3IgJyArIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtvLmNvbXBvbmVudHMuaXNSZWdpc3RlcmVkKGNvbXBvbmVudE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCAnICsgY29tcG9uZW50TmFtZSArICcgaXMgYWxyZWFkeSByZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0Q29uZmlnUmVnaXN0cnlbY29tcG9uZW50TmFtZV0gPSBjb25maWc7XG4gICAgfTtcblxuICAgIGtvLmNvbXBvbmVudHMuaXNSZWdpc3RlcmVkID0gZnVuY3Rpb24oY29tcG9uZW50TmFtZSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbmZpZ1JlZ2lzdHJ5Lmhhc093blByb3BlcnR5KGNvbXBvbmVudE5hbWUpO1xuICAgIH07XG5cbiAgICBrby5jb21wb25lbnRzLnVucmVnaXN0ZXIgPSBmdW5jdGlvbihjb21wb25lbnROYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBkZWZhdWx0Q29uZmlnUmVnaXN0cnlbY29tcG9uZW50TmFtZV07XG4gICAgICAgIGtvLmNvbXBvbmVudHMuY2xlYXJDYWNoZWREZWZpbml0aW9uKGNvbXBvbmVudE5hbWUpO1xuICAgIH07XG5cbiAgICBrby5jb21wb25lbnRzLmRlZmF1bHRMb2FkZXIgPSB7XG4gICAgICAgICdnZXRDb25maWcnOiBmdW5jdGlvbihjb21wb25lbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGRlZmF1bHRDb25maWdSZWdpc3RyeS5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnROYW1lKVxuICAgICAgICAgICAgICAgID8gZGVmYXVsdENvbmZpZ1JlZ2lzdHJ5W2NvbXBvbmVudE5hbWVdXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgfSxcblxuICAgICAgICAnbG9hZENvbXBvbmVudCc6IGZ1bmN0aW9uKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBlcnJvckNhbGxiYWNrID0gbWFrZUVycm9yQ2FsbGJhY2soY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBwb3NzaWJseUdldENvbmZpZ0Zyb21BbWQoZXJyb3JDYWxsYmFjaywgY29uZmlnLCBmdW5jdGlvbihsb2FkZWRDb25maWcpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlQ29uZmlnKGNvbXBvbmVudE5hbWUsIGVycm9yQ2FsbGJhY2ssIGxvYWRlZENvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2xvYWRUZW1wbGF0ZSc6IGZ1bmN0aW9uKGNvbXBvbmVudE5hbWUsIHRlbXBsYXRlQ29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmVzb2x2ZVRlbXBsYXRlKG1ha2VFcnJvckNhbGxiYWNrKGNvbXBvbmVudE5hbWUpLCB0ZW1wbGF0ZUNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgICdsb2FkVmlld01vZGVsJzogZnVuY3Rpb24oY29tcG9uZW50TmFtZSwgdmlld01vZGVsQ29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmVzb2x2ZVZpZXdNb2RlbChtYWtlRXJyb3JDYWxsYmFjayhjb21wb25lbnROYW1lKSwgdmlld01vZGVsQ29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZVZpZXdNb2RlbEtleSA9ICdjcmVhdGVWaWV3TW9kZWwnO1xuXG4gICAgLy8gVGFrZXMgYSBjb25maWcgb2JqZWN0IG9mIHRoZSBmb3JtIHsgdGVtcGxhdGU6IC4uLiwgdmlld01vZGVsOiAuLi4gfSwgYW5kIGFzeW5jaHJvbm91c2x5IGNvbnZlcnQgaXRcbiAgICAvLyBpbnRvIHRoZSBzdGFuZGFyZCBjb21wb25lbnQgZGVmaW5pdGlvbiBmb3JtYXQ6XG4gICAgLy8gICAgeyB0ZW1wbGF0ZTogPEFycmF5T2ZEb21Ob2Rlcz4sIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7IC4uLiB9IH0uXG4gICAgLy8gU2luY2UgYm90aCB0ZW1wbGF0ZSBhbmQgdmlld01vZGVsIG1heSBuZWVkIHRvIGJlIHJlc29sdmVkIGFzeW5jaHJvbm91c2x5LCBib3RoIHRhc2tzIGFyZSBwZXJmb3JtZWRcbiAgICAvLyBpbiBwYXJhbGxlbCwgYW5kIHRoZSByZXN1bHRzIGpvaW5lZCB3aGVuIGJvdGggYXJlIHJlYWR5LiBXZSBkb24ndCBkZXBlbmQgb24gYW55IHByb21pc2VzIGluZnJhc3RydWN0dXJlLFxuICAgIC8vIHNvIHRoaXMgaXMgaW1wbGVtZW50ZWQgbWFudWFsbHkgYmVsb3cuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUNvbmZpZyhjb21wb25lbnROYW1lLCBlcnJvckNhbGxiYWNrLCBjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fSxcbiAgICAgICAgICAgIG1ha2VDYWxsQmFja1doZW5aZXJvID0gMixcbiAgICAgICAgICAgIHRyeUlzc3VlQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1tYWtlQ2FsbEJhY2tXaGVuWmVybyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZUNvbmZpZyA9IGNvbmZpZ1sndGVtcGxhdGUnXSxcbiAgICAgICAgICAgIHZpZXdNb2RlbENvbmZpZyA9IGNvbmZpZ1sndmlld01vZGVsJ107XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlQ29uZmlnKSB7XG4gICAgICAgICAgICBwb3NzaWJseUdldENvbmZpZ0Zyb21BbWQoZXJyb3JDYWxsYmFjaywgdGVtcGxhdGVDb25maWcsIGZ1bmN0aW9uKGxvYWRlZENvbmZpZykge1xuICAgICAgICAgICAgICAgIGtvLmNvbXBvbmVudHMuX2dldEZpcnN0UmVzdWx0RnJvbUxvYWRlcnMoJ2xvYWRUZW1wbGF0ZScsIFtjb21wb25lbnROYW1lLCBsb2FkZWRDb25maWddLCBmdW5jdGlvbihyZXNvbHZlZFRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsndGVtcGxhdGUnXSA9IHJlc29sdmVkVGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeUlzc3VlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5SXNzdWVDYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXdNb2RlbENvbmZpZykge1xuICAgICAgICAgICAgcG9zc2libHlHZXRDb25maWdGcm9tQW1kKGVycm9yQ2FsbGJhY2ssIHZpZXdNb2RlbENvbmZpZywgZnVuY3Rpb24obG9hZGVkQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAga28uY29tcG9uZW50cy5fZ2V0Rmlyc3RSZXN1bHRGcm9tTG9hZGVycygnbG9hZFZpZXdNb2RlbCcsIFtjb21wb25lbnROYW1lLCBsb2FkZWRDb25maWddLCBmdW5jdGlvbihyZXNvbHZlZFZpZXdNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbY3JlYXRlVmlld01vZGVsS2V5XSA9IHJlc29sdmVkVmlld01vZGVsO1xuICAgICAgICAgICAgICAgICAgICB0cnlJc3N1ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeUlzc3VlQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVUZW1wbGF0ZShlcnJvckNhbGxiYWNrLCB0ZW1wbGF0ZUNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZUNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIE1hcmt1cCAtIHBhcnNlIGl0XG4gICAgICAgICAgICBjYWxsYmFjayhrby51dGlscy5wYXJzZUh0bWxGcmFnbWVudCh0ZW1wbGF0ZUNvbmZpZykpO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXBsYXRlQ29uZmlnIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIC8vIEFzc3VtZSBhbHJlYWR5IGFuIGFycmF5IG9mIERPTSBub2RlcyAtIHBhc3MgdGhyb3VnaCB1bmNoYW5nZWRcbiAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBsYXRlQ29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RvY3VtZW50RnJhZ21lbnQodGVtcGxhdGVDb25maWcpKSB7XG4gICAgICAgICAgICAvLyBEb2N1bWVudCBmcmFnbWVudCAtIHVzZSBpdHMgY2hpbGQgbm9kZXNcbiAgICAgICAgICAgIGNhbGxiYWNrKGtvLnV0aWxzLm1ha2VBcnJheSh0ZW1wbGF0ZUNvbmZpZy5jaGlsZE5vZGVzKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGVtcGxhdGVDb25maWdbJ2VsZW1lbnQnXSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0ZW1wbGF0ZUNvbmZpZ1snZWxlbWVudCddO1xuICAgICAgICAgICAgaWYgKGlzRG9tRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIC8vIEVsZW1lbnQgaW5zdGFuY2UgLSBjb3B5IGl0cyBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNsb25lTm9kZXNGcm9tVGVtcGxhdGVTb3VyY2VFbGVtZW50KGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gRWxlbWVudCBJRCAtIGZpbmQgaXQsIHRoZW4gY29weSBpdHMgY2hpbGQgbm9kZXNcbiAgICAgICAgICAgICAgICB2YXIgZWxlbUluc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1JbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjbG9uZU5vZGVzRnJvbVRlbXBsYXRlU291cmNlRWxlbWVudChlbGVtSW5zdGFuY2UpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKCdDYW5ub3QgZmluZCBlbGVtZW50IHdpdGggSUQgJyArIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjaygnVW5rbm93biBlbGVtZW50IHR5cGU6ICcgKyBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soJ1Vua25vd24gdGVtcGxhdGUgdmFsdWU6ICcgKyB0ZW1wbGF0ZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlVmlld01vZGVsKGVycm9yQ2FsbGJhY2ssIHZpZXdNb2RlbENvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2aWV3TW9kZWxDb25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdG9yIC0gY29udmVydCB0byBzdGFuZGFyZCBmYWN0b3J5IGZ1bmN0aW9uIGZvcm1hdFxuICAgICAgICAgICAgLy8gQnkgZGVzaWduLCB0aGlzIGRvZXMgKm5vdCogc3VwcGx5IGNvbXBvbmVudEluZm8gdG8gdGhlIGNvbnN0cnVjdG9yLCBhcyB0aGUgaW50ZW50IGlzIHRoYXRcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudEluZm8gY29udGFpbnMgbm9uLXZpZXdtb2RlbCBkYXRhIChlLmcuLCB0aGUgY29tcG9uZW50J3MgZWxlbWVudCkgdGhhdCBzaG91bGQgb25seVxuICAgICAgICAgICAgLy8gYmUgdXNlZCBpbiBmYWN0b3J5IGZ1bmN0aW9ucywgbm90IHZpZXdtb2RlbCBjb25zdHJ1Y3RvcnMuXG4gICAgICAgICAgICBjYWxsYmFjayhmdW5jdGlvbiAocGFyYW1zIC8qLCBjb21wb25lbnRJbmZvICovKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB2aWV3TW9kZWxDb25maWcocGFyYW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2aWV3TW9kZWxDb25maWdbY3JlYXRlVmlld01vZGVsS2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gQWxyZWFkeSBhIGZhY3RvcnkgZnVuY3Rpb24gLSB1c2UgaXQgYXMtaXNcbiAgICAgICAgICAgIGNhbGxiYWNrKHZpZXdNb2RlbENvbmZpZ1tjcmVhdGVWaWV3TW9kZWxLZXldKTtcbiAgICAgICAgfSBlbHNlIGlmICgnaW5zdGFuY2UnIGluIHZpZXdNb2RlbENvbmZpZykge1xuICAgICAgICAgICAgLy8gRml4ZWQgb2JqZWN0IGluc3RhbmNlIC0gcHJvbW90ZSB0byBjcmVhdGVWaWV3TW9kZWwgZm9ybWF0IGZvciBBUEkgY29uc2lzdGVuY3lcbiAgICAgICAgICAgIHZhciBmaXhlZEluc3RhbmNlID0gdmlld01vZGVsQ29uZmlnWydpbnN0YW5jZSddO1xuICAgICAgICAgICAgY2FsbGJhY2soZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZEluc3RhbmNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3ZpZXdNb2RlbCcgaW4gdmlld01vZGVsQ29uZmlnKSB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCBBTUQgbW9kdWxlIHdob3NlIHZhbHVlIGlzIG9mIHRoZSBmb3JtIHsgdmlld01vZGVsOiAuLi4gfVxuICAgICAgICAgICAgcmVzb2x2ZVZpZXdNb2RlbChlcnJvckNhbGxiYWNrLCB2aWV3TW9kZWxDb25maWdbJ3ZpZXdNb2RlbCddLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrKCdVbmtub3duIHZpZXdNb2RlbCB2YWx1ZTogJyArIHZpZXdNb2RlbENvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9uZU5vZGVzRnJvbVRlbXBsYXRlU291cmNlRWxlbWVudChlbGVtSW5zdGFuY2UpIHtcbiAgICAgICAgc3dpdGNoIChrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbUluc3RhbmNlKSkge1xuICAgICAgICAgICAgY2FzZSAnc2NyaXB0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4ga28udXRpbHMucGFyc2VIdG1sRnJhZ21lbnQoZWxlbUluc3RhbmNlLnRleHQpO1xuICAgICAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy5wYXJzZUh0bWxGcmFnbWVudChlbGVtSW5zdGFuY2UudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAndGVtcGxhdGUnOlxuICAgICAgICAgICAgICAgIC8vIEZvciBicm93c2VycyB3aXRoIHByb3BlciA8dGVtcGxhdGU+IGVsZW1lbnQgc3VwcG9ydCAoaS5lLiwgd2hlcmUgdGhlIC5jb250ZW50IHByb3BlcnR5XG4gICAgICAgICAgICAgICAgLy8gZ2l2ZXMgYSBkb2N1bWVudCBmcmFnbWVudCksIHVzZSB0aGF0IGRvY3VtZW50IGZyYWdtZW50LlxuICAgICAgICAgICAgICAgIGlmIChpc0RvY3VtZW50RnJhZ21lbnQoZWxlbUluc3RhbmNlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy5jbG9uZU5vZGVzKGVsZW1JbnN0YW5jZS5jb250ZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZ3VsYXIgZWxlbWVudHMgc3VjaCBhcyA8ZGl2PiwgYW5kIDx0ZW1wbGF0ZT4gZWxlbWVudHMgb24gb2xkIGJyb3dzZXJzIHRoYXQgZG9uJ3QgcmVhbGx5XG4gICAgICAgIC8vIHVuZGVyc3RhbmQgPHRlbXBsYXRlPiBhbmQganVzdCB0cmVhdCBpdCBhcyBhIHJlZ3VsYXIgY29udGFpbmVyXG4gICAgICAgIHJldHVybiBrby51dGlscy5jbG9uZU5vZGVzKGVsZW1JbnN0YW5jZS5jaGlsZE5vZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RvbUVsZW1lbnQob2JqKSB7XG4gICAgICAgIGlmICh3aW5kb3dbJ0hUTUxFbGVtZW50J10pIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgb2JqLnRhZ05hbWUgJiYgb2JqLm5vZGVUeXBlID09PSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEb2N1bWVudEZyYWdtZW50KG9iaikge1xuICAgICAgICBpZiAod2luZG93WydEb2N1bWVudEZyYWdtZW50J10pIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDExO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zc2libHlHZXRDb25maWdGcm9tQW1kKGVycm9yQ2FsbGJhY2ssIGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbJ3JlcXVpcmUnXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjb25maWcgaXMgdGhlIHZhbHVlIG9mIGFuIEFNRCBtb2R1bGVcbiAgICAgICAgICAgIGlmIChhbWRSZXF1aXJlIHx8IHdpbmRvd1sncmVxdWlyZSddKSB7XG4gICAgICAgICAgICAgICAgKGFtZFJlcXVpcmUgfHwgd2luZG93WydyZXF1aXJlJ10pKFtjb25maWdbJ3JlcXVpcmUnXV0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjaygnVXNlcyByZXF1aXJlLCBidXQgbm8gQU1EIGxvYWRlciBpcyBwcmVzZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUVycm9yQ2FsbGJhY2soY29tcG9uZW50TmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IFxcJycgKyBjb21wb25lbnROYW1lICsgJ1xcJzogJyArIG1lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGtvLmV4cG9ydFN5bWJvbCgnY29tcG9uZW50cy5yZWdpc3RlcicsIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnY29tcG9uZW50cy5pc1JlZ2lzdGVyZWQnLCBrby5jb21wb25lbnRzLmlzUmVnaXN0ZXJlZCk7XG4gICAga28uZXhwb3J0U3ltYm9sKCdjb21wb25lbnRzLnVucmVnaXN0ZXInLCBrby5jb21wb25lbnRzLnVucmVnaXN0ZXIpO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBkZWZhdWx0IGxvYWRlciBzbyB0aGF0IGRldmVsb3BlcnMgY2FuIGRpcmVjdGx5IGFzayBpdCBmb3IgY29uZmlndXJhdGlvblxuICAgIC8vIG9yIHRvIHJlc29sdmUgY29uZmlndXJhdGlvblxuICAgIGtvLmV4cG9ydFN5bWJvbCgnY29tcG9uZW50cy5kZWZhdWx0TG9hZGVyJywga28uY29tcG9uZW50cy5kZWZhdWx0TG9hZGVyKTtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIHRoZSBkZWZhdWx0IGxvYWRlciBpcyB0aGUgb25seSByZWdpc3RlcmVkIGNvbXBvbmVudCBsb2FkZXJcbiAgICBrby5jb21wb25lbnRzWydsb2FkZXJzJ10ucHVzaChrby5jb21wb25lbnRzLmRlZmF1bHRMb2FkZXIpO1xuXG4gICAgLy8gUHJpdmF0ZWx5IGV4cG9zZSB0aGUgdW5kZXJseWluZyBjb25maWcgcmVnaXN0cnkgZm9yIHVzZSBpbiBvbGQtSUUgc2hpbVxuICAgIGtvLmNvbXBvbmVudHMuX2FsbFJlZ2lzdGVyZWRDb21wb25lbnRzID0gZGVmYXVsdENvbmZpZ1JlZ2lzdHJ5O1xufSkoKTtcbihmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG4gICAgLy8gT3ZlcnJpZGFibGUgQVBJIGZvciBkZXRlcm1pbmluZyB3aGljaCBjb21wb25lbnQgbmFtZSBhcHBsaWVzIHRvIGEgZ2l2ZW4gbm9kZS4gQnkgb3ZlcnJpZGluZyB0aGlzLFxuICAgIC8vIHlvdSBjYW4gZm9yIGV4YW1wbGUgbWFwIHNwZWNpZmljIHRhZ05hbWVzIHRvIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IHByZXJlZ2lzdGVyZWQuXG4gICAga28uY29tcG9uZW50c1snZ2V0Q29tcG9uZW50TmFtZUZvck5vZGUnXSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIHRhZ05hbWVMb3dlciA9IGtvLnV0aWxzLnRhZ05hbWVMb3dlcihub2RlKTtcbiAgICAgICAgaWYgKGtvLmNvbXBvbmVudHMuaXNSZWdpc3RlcmVkKHRhZ05hbWVMb3dlcikpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgdGhhdCB0aGlzIG5vZGUgY2FuIGJlIGNvbnNpZGVyZWQgYSAqY3VzdG9tKiBlbGVtZW50OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2tub2Nrb3V0L2tub2Nrb3V0L2lzc3Vlcy8xNjAzXG4gICAgICAgICAgICBpZiAodGFnTmFtZUxvd2VyLmluZGV4T2YoJy0nKSAhPSAtMSB8fCAoJycgKyBub2RlKSA9PSBcIltvYmplY3QgSFRNTFVua25vd25FbGVtZW50XVwiIHx8IChrby51dGlscy5pZVZlcnNpb24gPD0gOCAmJiBub2RlLnRhZ05hbWUgPT09IHRhZ05hbWVMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFnTmFtZUxvd2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGtvLmNvbXBvbmVudHMuYWRkQmluZGluZ3NGb3JDdXN0b21FbGVtZW50ID0gZnVuY3Rpb24oYWxsQmluZGluZ3MsIG5vZGUsIGJpbmRpbmdDb250ZXh0LCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgaXQncyByZWFsbHkgYSBjdXN0b20gZWxlbWVudCBtYXRjaGluZyBhIGNvbXBvbmVudFxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBrby5jb21wb25lbnRzWydnZXRDb21wb25lbnROYW1lRm9yTm9kZSddKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBJdCBkb2VzIHJlcHJlc2VudCBhIGNvbXBvbmVudCwgc28gYWRkIGEgY29tcG9uZW50IGJpbmRpbmcgZm9yIGl0XG4gICAgICAgICAgICAgICAgYWxsQmluZGluZ3MgPSBhbGxCaW5kaW5ncyB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChhbGxCaW5kaW5nc1snY29tcG9uZW50J10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXZvaWQgc2lsZW50bHkgb3ZlcndyaXRpbmcgc29tZSBvdGhlciAnY29tcG9uZW50JyBiaW5kaW5nIHRoYXQgbWF5IGFscmVhZHkgYmUgb24gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIHRoZSBcImNvbXBvbmVudFwiIGJpbmRpbmcgb24gYSBjdXN0b20gZWxlbWVudCBtYXRjaGluZyBhIGNvbXBvbmVudCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnRCaW5kaW5nVmFsdWUgPSB7ICduYW1lJzogY29tcG9uZW50TmFtZSwgJ3BhcmFtcyc6IGdldENvbXBvbmVudFBhcmFtc0Zyb21DdXN0b21FbGVtZW50KG5vZGUsIGJpbmRpbmdDb250ZXh0KSB9O1xuXG4gICAgICAgICAgICAgICAgYWxsQmluZGluZ3NbJ2NvbXBvbmVudCddID0gdmFsdWVBY2Nlc3NvcnNcbiAgICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudEJpbmRpbmdWYWx1ZTsgfVxuICAgICAgICAgICAgICAgICAgICA6IGNvbXBvbmVudEJpbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbGxCaW5kaW5ncztcbiAgICB9XG5cbiAgICB2YXIgbmF0aXZlQmluZGluZ1Byb3ZpZGVySW5zdGFuY2UgPSBuZXcga28uYmluZGluZ1Byb3ZpZGVyKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRDb21wb25lbnRQYXJhbXNGcm9tQ3VzdG9tRWxlbWVudChlbGVtLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICB2YXIgcGFyYW1zQXR0cmlidXRlID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3BhcmFtcycpO1xuXG4gICAgICAgIGlmIChwYXJhbXNBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBuYXRpdmVCaW5kaW5nUHJvdmlkZXJJbnN0YW5jZVsncGFyc2VCaW5kaW5nc1N0cmluZyddKHBhcmFtc0F0dHJpYnV0ZSwgYmluZGluZ0NvbnRleHQsIGVsZW0sIHsgJ3ZhbHVlQWNjZXNzb3JzJzogdHJ1ZSwgJ2JpbmRpbmdQYXJhbXMnOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgIHJhd1BhcmFtQ29tcHV0ZWRWYWx1ZXMgPSBrby51dGlscy5vYmplY3RNYXAocGFyYW1zLCBmdW5jdGlvbihwYXJhbVZhbHVlLCBwYXJhbU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLmNvbXB1dGVkKHBhcmFtVmFsdWUsIG51bGwsIHsgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtIH0pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtvLnV0aWxzLm9iamVjdE1hcChyYXdQYXJhbUNvbXB1dGVkVmFsdWVzLCBmdW5jdGlvbihwYXJhbVZhbHVlQ29tcHV0ZWQsIHBhcmFtTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1WYWx1ZSA9IHBhcmFtVmFsdWVDb21wdXRlZC5wZWVrKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvZXMgdGhlIGV2YWx1YXRpb24gb2YgdGhlIHBhcmFtZXRlciB2YWx1ZSB1bndyYXAgYW55IG9ic2VydmFibGVzP1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmFtVmFsdWVDb21wdXRlZC5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBpdCBkb2Vzbid0LCBzbyB0aGVyZSdzIG5vIG5lZWQgZm9yIGFueSBjb21wdXRlZCB3cmFwcGVyLiBKdXN0IHBhc3MgdGhyb3VnaCB0aGUgc3VwcGxpZWQgdmFsdWUgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGFtcGxlOiBcInNvbWVWYWw6IGZpcnN0TmFtZSwgYWdlOiAxMjNcIiAod2hldGhlciBvciBub3QgZmlyc3ROYW1lIGlzIGFuIG9ic2VydmFibGUvY29tcHV0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFllcyBpdCBkb2VzLiBTdXBwbHkgYSBjb21wdXRlZCBwcm9wZXJ0eSB0aGF0IHVud3JhcHMgYm90aCB0aGUgb3V0ZXIgKGJpbmRpbmcgZXhwcmVzc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsIG9mIG9ic2VydmFiaWxpdHksIGFuZCBhbnkgaW5uZXIgKHJlc3VsdGluZyBtb2RlbCB2YWx1ZSkgbGV2ZWwgb2Ygb2JzZXJ2YWJpbGl0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgbWVhbnMgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgbXVsdGlwbGUgdW53cmFwcGluZy4gSWYgdGhlIHZhbHVlIGlzIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdyaXRhYmxlIG9ic2VydmFibGUsIHRoZSBjb21wdXRlZCB3aWxsIGFsc28gYmUgd3JpdGFibGUgYW5kIHBhc3MgdGhlIHZhbHVlIG9uIHRvIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLmNvbXB1dGVkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVhZCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShwYXJhbVZhbHVlQ29tcHV0ZWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd3JpdGUnOiBrby5pc1dyaXRlYWJsZU9ic2VydmFibGUocGFyYW1WYWx1ZSkgJiYgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1WYWx1ZUNvbXB1dGVkKCkodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBHaXZlIGFjY2VzcyB0byB0aGUgcmF3IGNvbXB1dGVkcywgYXMgbG9uZyBhcyB0aGF0IHdvdWxkbid0IG92ZXJ3cml0ZSBhbnkgY3VzdG9tIHBhcmFtIGFsc28gY2FsbGVkICckcmF3J1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBpbiBjYXNlIHRoZSBkZXZlbG9wZXIgd2FudHMgdG8gcmVhY3QgdG8gb3V0ZXIgKGJpbmRpbmcpIG9ic2VydmFiaWxpdHkgc2VwYXJhdGVseSBmcm9tIGlubmVyXG4gICAgICAgICAgICAvLyAobW9kZWwgdmFsdWUpIG9ic2VydmFiaWxpdHksIG9yIGluIGNhc2UgdGhlIG1vZGVsIHZhbHVlIG9ic2VydmFibGUgaGFzIHN1Ym9ic2VydmFibGVzLlxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoJyRyYXcnKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFsnJHJhdyddID0gcmF3UGFyYW1Db21wdXRlZFZhbHVlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZvciBjb25zaXN0ZW5jeSwgYWJzZW5jZSBvZiBhIFwicGFyYW1zXCIgYXR0cmlidXRlIGlzIHRyZWF0ZWQgdGhlIHNhbWUgYXMgdGhlIHByZXNlbmNlIG9mXG4gICAgICAgICAgICAvLyBhbnkgZW1wdHkgb25lLiBPdGhlcndpc2UgY29tcG9uZW50IHZpZXdtb2RlbHMgbmVlZCBzcGVjaWFsIGNvZGUgdG8gY2hlY2sgd2hldGhlciBvciBub3RcbiAgICAgICAgICAgIC8vICdwYXJhbXMnIG9yICdwYXJhbXMuJHJhdycgaXMgbnVsbC91bmRlZmluZWQgYmVmb3JlIHJlYWRpbmcgc3VicHJvcGVydGllcywgd2hpY2ggaXMgYW5ub3lpbmcuXG4gICAgICAgICAgICByZXR1cm4geyAnJHJhdyc6IHt9IH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENvbXBhdGliaWxpdHkgY29kZSBmb3Igb2xkZXIgKHByZS1IVE1MNSkgSUUgYnJvd3NlcnNcblxuICAgIGlmIChrby51dGlscy5pZVZlcnNpb24gPCA5KSB7XG4gICAgICAgIC8vIFdoZW5ldmVyIHlvdSBwcmVyZWdpc3RlciBhIGNvbXBvbmVudCwgZW5hYmxlIGl0IGFzIGEgY3VzdG9tIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAgICAgICAga28uY29tcG9uZW50c1sncmVnaXN0ZXInXSA9IChmdW5jdGlvbihvcmlnaW5hbEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50TmFtZSk7IC8vIEFsbG93cyBJRTw5IHRvIHBhcnNlIG1hcmt1cCBjb250YWluaW5nIHRoZSBjdXN0b20gZWxlbWVudFxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKGtvLmNvbXBvbmVudHNbJ3JlZ2lzdGVyJ10pO1xuXG4gICAgICAgIC8vIFdoZW5ldmVyIHlvdSBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCwgZW5hYmxlIGFsbCBwcmVyZWdpc3RlcmVkIGNvbXBvbmVudCBuYW1lcyBhcyBjdXN0b20gZWxlbWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gbWFrZSBpbm5lclNoaXYvalF1ZXJ5IEhUTUwgcGFyc2luZyBjb3JyZWN0bHkgaGFuZGxlIHRoZSBjdXN0b20gZWxlbWVudHNcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9IChmdW5jdGlvbihvcmlnaW5hbEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0RvY0ZyYWcgPSBvcmlnaW5hbEZ1bmN0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIGFsbENvbXBvbmVudHMgPSBrby5jb21wb25lbnRzLl9hbGxSZWdpc3RlcmVkQ29tcG9uZW50cztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb21wb25lbnROYW1lIGluIGFsbENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbENvbXBvbmVudHMuaGFzT3duUHJvcGVydHkoY29tcG9uZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RvY0ZyYWcuY3JlYXRlRWxlbWVudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3RG9jRnJhZztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQpO1xuICAgIH1cbn0pKCk7KGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4gICAgdmFyIGNvbXBvbmVudExvYWRpbmdPcGVyYXRpb25VbmlxdWVJZCA9IDA7XG5cbiAgICBrby5iaW5kaW5nSGFuZGxlcnNbJ2NvbXBvbmVudCddID0ge1xuICAgICAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGlnbm9yZWQxLCBpZ25vcmVkMiwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50Vmlld01vZGVsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMb2FkaW5nT3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgZGlzcG9zZUFzc29jaWF0ZWRDb21wb25lbnRWaWV3TW9kZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Vmlld01vZGVsRGlzcG9zZSA9IGN1cnJlbnRWaWV3TW9kZWwgJiYgY3VycmVudFZpZXdNb2RlbFsnZGlzcG9zZSddO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRWaWV3TW9kZWxEaXNwb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsRGlzcG9zZS5jYWxsKGN1cnJlbnRWaWV3TW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyBBbnkgaW4tZmxpZ2h0IGxvYWRpbmcgb3BlcmF0aW9uIGlzIG5vIGxvbmdlciByZWxldmFudCwgc28gbWFrZSBzdXJlIHdlIGlnbm9yZSBpdHMgY29tcGxldGlvblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TG9hZGluZ09wZXJhdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ2hpbGROb2RlcyA9IGtvLnV0aWxzLm1ha2VBcnJheShrby52aXJ0dWFsRWxlbWVudHMuY2hpbGROb2RlcyhlbGVtZW50KSk7XG5cbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soZWxlbWVudCwgZGlzcG9zZUFzc29jaWF0ZWRDb21wb25lbnRWaWV3TW9kZWwpO1xuXG4gICAgICAgICAgICBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLCBjb21wb25lbnRQYXJhbXM7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVbJ25hbWUnXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFBhcmFtcyA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVbJ3BhcmFtcyddKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgbmFtZSBzcGVjaWZpZWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbG9hZGluZ09wZXJhdGlvbklkID0gY3VycmVudExvYWRpbmdPcGVyYXRpb25JZCA9ICsrY29tcG9uZW50TG9hZGluZ09wZXJhdGlvblVuaXF1ZUlkO1xuICAgICAgICAgICAgICAgIGtvLmNvbXBvbmVudHMuZ2V0KGNvbXBvbmVudE5hbWUsIGZ1bmN0aW9uKGNvbXBvbmVudERlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIGN1cnJlbnQgbG9hZCBvcGVyYXRpb24gZm9yIHRoaXMgZWxlbWVudCwgaWdub3JlIGl0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudExvYWRpbmdPcGVyYXRpb25JZCAhPT0gbG9hZGluZ09wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCBwcmV2aW91cyBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICBkaXNwb3NlQXNzb2NpYXRlZENvbXBvbmVudFZpZXdNb2RlbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEluc3RhbnRpYXRlIGFuZCBiaW5kIG5ldyBjb21wb25lbnQuIEltcGxpY2l0bHkgdGhpcyBjbGVhbnMgYW55IG9sZCBET00gbm9kZXMuXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNvbXBvbmVudCBcXCcnICsgY29tcG9uZW50TmFtZSArICdcXCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbG9uZVRlbXBsYXRlSW50b0VsZW1lbnQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50RGVmaW5pdGlvbiwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnRWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWwoY29tcG9uZW50RGVmaW5pdGlvbiwgZWxlbWVudCwgb3JpZ2luYWxDaGlsZE5vZGVzLCBjb21wb25lbnRQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRCaW5kaW5nQ29udGV4dCA9IGJpbmRpbmdDb250ZXh0WydjcmVhdGVDaGlsZENvbnRleHQnXShjb21wb25lbnRWaWV3TW9kZWwsIC8qIGRhdGFJdGVtQWxpYXMgKi8gdW5kZWZpbmVkLCBmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHhbJyRjb21wb25lbnQnXSA9IGNvbXBvbmVudFZpZXdNb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHhbJyRjb21wb25lbnRUZW1wbGF0ZU5vZGVzJ10gPSBvcmlnaW5hbENoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbCA9IGNvbXBvbmVudFZpZXdNb2RlbDtcbiAgICAgICAgICAgICAgICAgICAga28uYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHMoY2hpbGRCaW5kaW5nQ29udGV4dCwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogZWxlbWVudCB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbJ2NvbXBvbmVudCddID0gdHJ1ZTtcblxuICAgIGZ1bmN0aW9uIGNsb25lVGVtcGxhdGVJbnRvRWxlbWVudChjb21wb25lbnROYW1lLCBjb21wb25lbnREZWZpbml0aW9uLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGNvbXBvbmVudERlZmluaXRpb25bJ3RlbXBsYXRlJ107XG4gICAgICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IFxcJycgKyBjb21wb25lbnROYW1lICsgJ1xcJyBoYXMgbm8gdGVtcGxhdGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbG9uZWROb2Rlc0FycmF5ID0ga28udXRpbHMuY2xvbmVOb2Rlcyh0ZW1wbGF0ZSk7XG4gICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW4oZWxlbWVudCwgY2xvbmVkTm9kZXNBcnJheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVmlld01vZGVsKGNvbXBvbmVudERlZmluaXRpb24sIGVsZW1lbnQsIG9yaWdpbmFsQ2hpbGROb2RlcywgY29tcG9uZW50UGFyYW1zKSB7XG4gICAgICAgIHZhciBjb21wb25lbnRWaWV3TW9kZWxGYWN0b3J5ID0gY29tcG9uZW50RGVmaW5pdGlvblsnY3JlYXRlVmlld01vZGVsJ107XG4gICAgICAgIHJldHVybiBjb21wb25lbnRWaWV3TW9kZWxGYWN0b3J5XG4gICAgICAgICAgICA/IGNvbXBvbmVudFZpZXdNb2RlbEZhY3RvcnkuY2FsbChjb21wb25lbnREZWZpbml0aW9uLCBjb21wb25lbnRQYXJhbXMsIHsgJ2VsZW1lbnQnOiBlbGVtZW50LCAndGVtcGxhdGVOb2Rlcyc6IG9yaWdpbmFsQ2hpbGROb2RlcyB9KVxuICAgICAgICAgICAgOiBjb21wb25lbnRQYXJhbXM7IC8vIFRlbXBsYXRlLW9ubHkgY29tcG9uZW50XG4gICAgfVxuXG59KSgpO1xudmFyIGF0dHJIdG1sVG9KYXZhc2NyaXB0TWFwID0geyAnY2xhc3MnOiAnY2xhc3NOYW1lJywgJ2Zvcic6ICdodG1sRm9yJyB9O1xua28uYmluZGluZ0hhbmRsZXJzWydhdHRyJ10gPSB7XG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKSB8fCB7fTtcbiAgICAgICAga28udXRpbHMub2JqZWN0Rm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24oYXR0ck5hbWUsIGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgYXR0clZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhdHRyVmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBUbyBjb3ZlciBjYXNlcyBsaWtlIFwiYXR0cjogeyBjaGVja2VkOnNvbWVQcm9wIH1cIiwgd2Ugd2FudCB0byByZW1vdmUgdGhlIGF0dHJpYnV0ZSBlbnRpcmVseVxuICAgICAgICAgICAgLy8gd2hlbiBzb21lUHJvcCBpcyBhIFwibm8gdmFsdWVcIi1saWtlIHZhbHVlIChzdHJpY3RseSBudWxsLCBmYWxzZSwgb3IgdW5kZWZpbmVkKVxuICAgICAgICAgICAgLy8gKGJlY2F1c2UgdGhlIGFic2VuY2Ugb2YgdGhlIFwiY2hlY2tlZFwiIGF0dHIgaXMgaG93IHRvIG1hcmsgYW4gZWxlbWVudCBhcyBub3QgY2hlY2tlZCwgZXRjLilcbiAgICAgICAgICAgIHZhciB0b1JlbW92ZSA9IChhdHRyVmFsdWUgPT09IGZhbHNlKSB8fCAoYXR0clZhbHVlID09PSBudWxsKSB8fCAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgaWYgKHRvUmVtb3ZlKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgLy8gSW4gSUUgPD0gNyBhbmQgSUU4IFF1aXJrcyBNb2RlLCB5b3UgaGF2ZSB0byB1c2UgdGhlIEphdmFzY3JpcHQgcHJvcGVydHkgbmFtZSBpbnN0ZWFkIG9mIHRoZVxuICAgICAgICAgICAgLy8gSFRNTCBhdHRyaWJ1dGUgbmFtZSBmb3IgY2VydGFpbiBhdHRyaWJ1dGVzLiBJRTggU3RhbmRhcmRzIE1vZGUgc3VwcG9ydHMgdGhlIGNvcnJlY3QgYmVoYXZpb3IsXG4gICAgICAgICAgICAvLyBidXQgaW5zdGVhZCBvZiBmaWd1cmluZyBvdXQgdGhlIG1vZGUsIHdlJ2xsIGp1c3Qgc2V0IHRoZSBhdHRyaWJ1dGUgdGhyb3VnaCB0aGUgSmF2YXNjcmlwdFxuICAgICAgICAgICAgLy8gcHJvcGVydHkgZm9yIElFIDw9IDguXG4gICAgICAgICAgICBpZiAoa28udXRpbHMuaWVWZXJzaW9uIDw9IDggJiYgYXR0ck5hbWUgaW4gYXR0ckh0bWxUb0phdmFzY3JpcHRNYXApIHtcbiAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHJIdG1sVG9KYXZhc2NyaXB0TWFwW2F0dHJOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAodG9SZW1vdmUpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbYXR0ck5hbWVdID0gYXR0clZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUcmVhdCBcIm5hbWVcIiBzcGVjaWFsbHkgLSBhbHRob3VnaCB5b3UgY2FuIHRoaW5rIG9mIGl0IGFzIGFuIGF0dHJpYnV0ZSwgaXQgYWxzbyBuZWVkc1xuICAgICAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBvbiBvbGRlciB2ZXJzaW9ucyBvZiBJRSAoaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L3B1bGwvMzMzKVxuICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGJlaW5nIGNhc2Utc2Vuc2l0aXZlIGhlcmUgYmVjYXVzZSBYSFRNTCB3b3VsZCByZWdhcmQgXCJOYW1lXCIgYXMgYSBkaWZmZXJlbnQgdGhpbmdcbiAgICAgICAgICAgIC8vIGVudGlyZWx5LCBhbmQgdGhlcmUncyBubyBzdHJvbmcgcmVhc29uIHRvIGFsbG93IGZvciBzdWNoIGNhc2luZyBpbiBIVE1MLlxuICAgICAgICAgICAgaWYgKGF0dHJOYW1lID09PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldEVsZW1lbnROYW1lKGVsZW1lbnQsIHRvUmVtb3ZlID8gXCJcIiA6IGF0dHJWYWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbihmdW5jdGlvbigpIHtcblxua28uYmluZGluZ0hhbmRsZXJzWydjaGVja2VkJ10gPSB7XG4gICAgJ2FmdGVyJzogWyd2YWx1ZScsICdhdHRyJ10sXG4gICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHtcbiAgICAgICAgdmFyIGNoZWNrZWRWYWx1ZSA9IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFRyZWF0IFwidmFsdWVcIiBsaWtlIFwiY2hlY2tlZFZhbHVlXCIgd2hlbiBpdCBpcyBpbmNsdWRlZCB3aXRoIFwiY2hlY2tlZFwiIGJpbmRpbmdcbiAgICAgICAgICAgIGlmIChhbGxCaW5kaW5nc1snaGFzJ10oJ2NoZWNrZWRWYWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYWxsQmluZGluZ3MuZ2V0KCdjaGVja2VkVmFsdWUnKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbEJpbmRpbmdzWydoYXMnXSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFsbEJpbmRpbmdzLmdldCgndmFsdWUnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVNb2RlbCgpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgdXBkYXRlcyB0aGUgbW9kZWwgdmFsdWUgZnJvbSB0aGUgdmlldyB2YWx1ZS5cbiAgICAgICAgICAgIC8vIEl0IHJ1bnMgaW4gcmVzcG9uc2UgdG8gRE9NIGV2ZW50cyAoY2xpY2spIGFuZCBjaGFuZ2VzIGluIGNoZWNrZWRWYWx1ZS5cbiAgICAgICAgICAgIHZhciBpc0NoZWNrZWQgPSBlbGVtZW50LmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgZWxlbVZhbHVlID0gdXNlQ2hlY2tlZFZhbHVlID8gY2hlY2tlZFZhbHVlKCkgOiBpc0NoZWNrZWQ7XG5cbiAgICAgICAgICAgIC8vIFdoZW4gd2UncmUgZmlyc3Qgc2V0dGluZyB1cCB0aGlzIGNvbXB1dGVkLCBkb24ndCBjaGFuZ2UgYW55IG1vZGVsIHN0YXRlLlxuICAgICAgICAgICAgaWYgKGtvLmNvbXB1dGVkQ29udGV4dC5pc0luaXRpYWwoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2UgY2FuIGlnbm9yZSB1bmNoZWNrZWQgcmFkaW8gYnV0dG9ucywgYmVjYXVzZSBzb21lIG90aGVyIHJhZGlvXG4gICAgICAgICAgICAvLyBidXR0b24gd2lsbCBiZSBnZXR0aW5nIGNoZWNrZWQsIGFuZCB0aGF0IG9uZSBjYW4gdGFrZSBjYXJlIG9mIHVwZGF0aW5nIHN0YXRlLlxuICAgICAgICAgICAgaWYgKGlzUmFkaW8gJiYgIWlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZSh2YWx1ZUFjY2Vzc29yKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZUlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgd3JpdGFibGVWYWx1ZSA9IHJhd1ZhbHVlSXNOb25BcnJheU9ic2VydmFibGUgPyBtb2RlbFZhbHVlLnBlZWsoKSA6IG1vZGVsVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKG9sZEVsZW1WYWx1ZSAhPT0gZWxlbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UncmUgcmVzcG9uZGluZyB0byB0aGUgY2hlY2tlZFZhbHVlIGNoYW5naW5nLCBhbmQgdGhlIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudGx5IGNoZWNrZWQsIHJlcGxhY2UgdGhlIG9sZCBlbGVtIHZhbHVlIHdpdGggdGhlIG5ldyBlbGVtIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSBtb2RlbCBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYWRkT3JSZW1vdmVJdGVtKHdyaXRhYmxlVmFsdWUsIGVsZW1WYWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5hZGRPclJlbW92ZUl0ZW0od3JpdGFibGVWYWx1ZSwgb2xkRWxlbVZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvbGRFbGVtVmFsdWUgPSBlbGVtVmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB3ZSdyZSByZXNwb25kaW5nIHRvIHRoZSB1c2VyIGhhdmluZyBjaGVja2VkL3VuY2hlY2tlZCBhIGNoZWNrYm94LFxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQvcmVtb3ZlIHRoZSBlbGVtZW50IHZhbHVlIHRvIHRoZSBtb2RlbCBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYWRkT3JSZW1vdmVJdGVtKHdyaXRhYmxlVmFsdWUsIGVsZW1WYWx1ZSwgaXNDaGVja2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJhd1ZhbHVlSXNOb25BcnJheU9ic2VydmFibGUgJiYga28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWUod3JpdGFibGVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLndyaXRlVmFsdWVUb1Byb3BlcnR5KG1vZGVsVmFsdWUsIGFsbEJpbmRpbmdzLCAnY2hlY2tlZCcsIGVsZW1WYWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVmlldygpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgdXBkYXRlcyB0aGUgdmlldyB2YWx1ZSBmcm9tIHRoZSBtb2RlbCB2YWx1ZS5cbiAgICAgICAgICAgIC8vIEl0IHJ1bnMgaW4gcmVzcG9uc2UgdG8gY2hhbmdlcyBpbiB0aGUgYm91bmQgKGNoZWNrZWQpIHZhbHVlLlxuICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGEgY2hlY2tib3ggaXMgYm91bmQgdG8gYW4gYXJyYXksIGJlaW5nIGNoZWNrZWQgcmVwcmVzZW50cyBpdHMgdmFsdWUgYmVpbmcgcHJlc2VudCBpbiB0aGF0IGFycmF5XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0ga28udXRpbHMuYXJyYXlJbmRleE9mKG1vZGVsVmFsdWUsIGNoZWNrZWRWYWx1ZSgpKSA+PSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NoZWNrYm94KSB7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBhIGNoZWNrYm94IGlzIGJvdW5kIHRvIGFueSBvdGhlciB2YWx1ZSAobm90IGFuIGFycmF5KSwgYmVpbmcgY2hlY2tlZCByZXByZXNlbnRzIHRoZSB2YWx1ZSBiZWluZyB0cnVlaXNoXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gbW9kZWxWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHJhZGlvIGJ1dHRvbnMsIGJlaW5nIGNoZWNrZWQgbWVhbnMgdGhhdCB0aGUgcmFkaW8gYnV0dG9uJ3MgdmFsdWUgY29ycmVzcG9uZHMgdG8gdGhlIG1vZGVsIHZhbHVlXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gKGNoZWNrZWRWYWx1ZSgpID09PSBtb2RlbFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaXNDaGVja2JveCA9IGVsZW1lbnQudHlwZSA9PSBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICBpc1JhZGlvID0gZWxlbWVudC50eXBlID09IFwicmFkaW9cIjtcblxuICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2hlY2sgYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgaWYgKCFpc0NoZWNrYm94ICYmICFpc1JhZGlvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmF3VmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCksXG4gICAgICAgICAgICB2YWx1ZUlzQXJyYXkgPSBpc0NoZWNrYm94ICYmIChrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJhd1ZhbHVlKSBpbnN0YW5jZW9mIEFycmF5KSxcbiAgICAgICAgICAgIHJhd1ZhbHVlSXNOb25BcnJheU9ic2VydmFibGUgPSAhKHZhbHVlSXNBcnJheSAmJiByYXdWYWx1ZS5wdXNoICYmIHJhd1ZhbHVlLnNwbGljZSksXG4gICAgICAgICAgICBvbGRFbGVtVmFsdWUgPSB2YWx1ZUlzQXJyYXkgPyBjaGVja2VkVmFsdWUoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVzZUNoZWNrZWRWYWx1ZSA9IGlzUmFkaW8gfHwgdmFsdWVJc0FycmF5O1xuXG4gICAgICAgIC8vIElFIDYgd29uJ3QgYWxsb3cgcmFkaW8gYnV0dG9ucyB0byBiZSBzZWxlY3RlZCB1bmxlc3MgdGhleSBoYXZlIGEgbmFtZVxuICAgICAgICBpZiAoaXNSYWRpbyAmJiAhZWxlbWVudC5uYW1lKVxuICAgICAgICAgICAga28uYmluZGluZ0hhbmRsZXJzWyd1bmlxdWVOYW1lJ11bJ2luaXQnXShlbGVtZW50LCBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWUgfSk7XG5cbiAgICAgICAgLy8gU2V0IHVwIHR3byBjb21wdXRlZHMgdG8gdXBkYXRlIHRoZSBiaW5kaW5nOlxuXG4gICAgICAgIC8vIFRoZSBmaXJzdCByZXNwb25kcyB0byBjaGFuZ2VzIGluIHRoZSBjaGVja2VkVmFsdWUgdmFsdWUgYW5kIHRvIGVsZW1lbnQgY2xpY2tzXG4gICAgICAgIGtvLmNvbXB1dGVkKHVwZGF0ZU1vZGVsLCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogZWxlbWVudCB9KTtcbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJjbGlja1wiLCB1cGRhdGVNb2RlbCk7XG5cbiAgICAgICAgLy8gVGhlIHNlY29uZCByZXNwb25kcyB0byBjaGFuZ2VzIGluIHRoZSBtb2RlbCB2YWx1ZSAodGhlIG9uZSBhc3NvY2lhdGVkIHdpdGggdGhlIGNoZWNrZWQgYmluZGluZylcbiAgICAgICAga28uY29tcHV0ZWQodXBkYXRlVmlldywgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW1lbnQgfSk7XG5cbiAgICAgICAgcmF3VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcbmtvLmV4cHJlc3Npb25SZXdyaXRpbmcudHdvV2F5QmluZGluZ3NbJ2NoZWNrZWQnXSA9IHRydWU7XG5cbmtvLmJpbmRpbmdIYW5kbGVyc1snY2hlY2tlZFZhbHVlJ10gPSB7XG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgfVxufTtcblxufSkoKTt2YXIgY2xhc3Nlc1dyaXR0ZW5CeUJpbmRpbmdLZXkgPSAnX19rb19fY3NzVmFsdWUnO1xua28uYmluZGluZ0hhbmRsZXJzWydjc3MnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpO1xuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2godmFsdWUsIGZ1bmN0aW9uKGNsYXNzTmFtZSwgc2hvdWxkSGF2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkSGF2ZUNsYXNzID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShzaG91bGRIYXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHNob3VsZEhhdmVDbGFzcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0ga28udXRpbHMuc3RyaW5nVHJpbShTdHJpbmcodmFsdWUgfHwgJycpKTsgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHRyeSB0byBzdG9yZSBvciBzZXQgYSBub24tc3RyaW5nIHZhbHVlXG4gICAgICAgICAgICBrby51dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3MoZWxlbWVudCwgZWxlbWVudFtjbGFzc2VzV3JpdHRlbkJ5QmluZGluZ0tleV0sIGZhbHNlKTtcbiAgICAgICAgICAgIGVsZW1lbnRbY2xhc3Nlc1dyaXR0ZW5CeUJpbmRpbmdLZXldID0gdmFsdWU7XG4gICAgICAgICAgICBrby51dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3MoZWxlbWVudCwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmtvLmJpbmRpbmdIYW5kbGVyc1snZW5hYmxlJ10gPSB7XG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTtcbiAgICAgICAgaWYgKHZhbHVlICYmIGVsZW1lbnQuZGlzYWJsZWQpXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBlbHNlIGlmICgoIXZhbHVlKSAmJiAoIWVsZW1lbnQuZGlzYWJsZWQpKVxuICAgICAgICAgICAgZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxufTtcblxua28uYmluZGluZ0hhbmRsZXJzWydkaXNhYmxlJ10gPSB7XG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIGtvLmJpbmRpbmdIYW5kbGVyc1snZW5hYmxlJ11bJ3VwZGF0ZSddKGVsZW1lbnQsIGZ1bmN0aW9uKCkgeyByZXR1cm4gIWtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKSB9KTtcbiAgICB9XG59O1xuLy8gRm9yIGNlcnRhaW4gY29tbW9uIGV2ZW50cyAoY3VycmVudGx5IGp1c3QgJ2NsaWNrJyksIGFsbG93IGEgc2ltcGxpZmllZCBkYXRhLWJpbmRpbmcgc3ludGF4XG4vLyBlLmcuIGNsaWNrOmhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgdXN1YWwgZnVsbC1sZW5ndGggZXZlbnQ6e2NsaWNrOmhhbmRsZXJ9XG5mdW5jdGlvbiBtYWtlRXZlbnRIYW5kbGVyU2hvcnRjdXQoZXZlbnROYW1lKSB7XG4gICAga28uYmluZGluZ0hhbmRsZXJzW2V2ZW50TmFtZV0gPSB7XG4gICAgICAgICdpbml0JzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZUFjY2Vzc29yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgICAgICByZXN1bHRbZXZlbnROYW1lXSA9IHZhbHVlQWNjZXNzb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBrby5iaW5kaW5nSGFuZGxlcnNbJ2V2ZW50J11bJ2luaXQnXS5jYWxsKHRoaXMsIGVsZW1lbnQsIG5ld1ZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxua28uYmluZGluZ0hhbmRsZXJzWydldmVudCddID0ge1xuICAgICdpbml0JyA6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncywgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICB2YXIgZXZlbnRzVG9IYW5kbGUgPSB2YWx1ZUFjY2Vzc29yKCkgfHwge307XG4gICAgICAgIGtvLnV0aWxzLm9iamVjdEZvckVhY2goZXZlbnRzVG9IYW5kbGUsIGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyUmV0dXJuVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyRnVuY3Rpb24gPSB2YWx1ZUFjY2Vzc29yKClbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVyRnVuY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRha2UgYWxsIHRoZSBldmVudCBhcmdzLCBhbmQgcHJlZml4IHdpdGggdGhlIHZpZXdtb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3NGb3JIYW5kbGVyID0ga28udXRpbHMubWFrZUFycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3TW9kZWwgPSBiaW5kaW5nQ29udGV4dFsnJGRhdGEnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NGb3JIYW5kbGVyLnVuc2hpZnQodmlld01vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJSZXR1cm5WYWx1ZSA9IGhhbmRsZXJGdW5jdGlvbi5hcHBseSh2aWV3TW9kZWwsIGFyZ3NGb3JIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyUmV0dXJuVmFsdWUgIT09IHRydWUpIHsgLy8gTm9ybWFsbHkgd2Ugd2FudCB0byBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLiBEZXZlbG9wZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmUgZXhwbGljaXRseSByZXR1cm5pbmcgdHJ1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ1YmJsZSA9IGFsbEJpbmRpbmdzLmdldChldmVudE5hbWUgKyAnQnViYmxlJykgIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1YmJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbi8vIFwiZm9yZWFjaDogc29tZUV4cHJlc3Npb25cIiBpcyBlcXVpdmFsZW50IHRvIFwidGVtcGxhdGU6IHsgZm9yZWFjaDogc29tZUV4cHJlc3Npb24gfVwiXG4vLyBcImZvcmVhY2g6IHsgZGF0YTogc29tZUV4cHJlc3Npb24sIGFmdGVyQWRkOiBteWZuIH1cIiBpcyBlcXVpdmFsZW50IHRvIFwidGVtcGxhdGU6IHsgZm9yZWFjaDogc29tZUV4cHJlc3Npb24sIGFmdGVyQWRkOiBteWZuIH1cIlxua28uYmluZGluZ0hhbmRsZXJzWydmb3JlYWNoJ10gPSB7XG4gICAgbWFrZVRlbXBsYXRlVmFsdWVBY2Nlc3NvcjogZnVuY3Rpb24odmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHZhbHVlQWNjZXNzb3IoKSxcbiAgICAgICAgICAgICAgICB1bndyYXBwZWRWYWx1ZSA9IGtvLnV0aWxzLnBlZWtPYnNlcnZhYmxlKG1vZGVsVmFsdWUpOyAgICAvLyBVbndyYXAgd2l0aG91dCBzZXR0aW5nIGEgZGVwZW5kZW5jeSBoZXJlXG5cbiAgICAgICAgICAgIC8vIElmIHVud3JhcHBlZFZhbHVlIGlzIHRoZSBhcnJheSwgcGFzcyBpbiB0aGUgd3JhcHBlZCB2YWx1ZSBvbiBpdHMgb3duXG4gICAgICAgICAgICAvLyBUaGUgdmFsdWUgd2lsbCBiZSB1bndyYXBwZWQgYW5kIHRyYWNrZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZSBiaW5kaW5nXG4gICAgICAgICAgICAvLyAoU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvNTIzKVxuICAgICAgICAgICAgaWYgKCghdW53cmFwcGVkVmFsdWUpIHx8IHR5cGVvZiB1bndyYXBwZWRWYWx1ZS5sZW5ndGggPT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4geyAnZm9yZWFjaCc6IG1vZGVsVmFsdWUsICd0ZW1wbGF0ZUVuZ2luZSc6IGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLmluc3RhbmNlIH07XG5cbiAgICAgICAgICAgIC8vIElmIHVud3JhcHBlZFZhbHVlLmRhdGEgaXMgdGhlIGFycmF5LCBwcmVzZXJ2ZSBhbGwgcmVsZXZhbnQgb3B0aW9ucyBhbmQgdW53cmFwIGFnYWluIHZhbHVlIHNvIHdlIGdldCB1cGRhdGVzXG4gICAgICAgICAgICBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnZm9yZWFjaCc6IHVud3JhcHBlZFZhbHVlWydkYXRhJ10sXG4gICAgICAgICAgICAgICAgJ2FzJzogdW53cmFwcGVkVmFsdWVbJ2FzJ10sXG4gICAgICAgICAgICAgICAgJ2luY2x1ZGVEZXN0cm95ZWQnOiB1bndyYXBwZWRWYWx1ZVsnaW5jbHVkZURlc3Ryb3llZCddLFxuICAgICAgICAgICAgICAgICdhZnRlckFkZCc6IHVud3JhcHBlZFZhbHVlWydhZnRlckFkZCddLFxuICAgICAgICAgICAgICAgICdiZWZvcmVSZW1vdmUnOiB1bndyYXBwZWRWYWx1ZVsnYmVmb3JlUmVtb3ZlJ10sXG4gICAgICAgICAgICAgICAgJ2FmdGVyUmVuZGVyJzogdW53cmFwcGVkVmFsdWVbJ2FmdGVyUmVuZGVyJ10sXG4gICAgICAgICAgICAgICAgJ2JlZm9yZU1vdmUnOiB1bndyYXBwZWRWYWx1ZVsnYmVmb3JlTW92ZSddLFxuICAgICAgICAgICAgICAgICdhZnRlck1vdmUnOiB1bndyYXBwZWRWYWx1ZVsnYWZ0ZXJNb3ZlJ10sXG4gICAgICAgICAgICAgICAgJ3RlbXBsYXRlRW5naW5lJzoga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUuaW5zdGFuY2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBrby5iaW5kaW5nSGFuZGxlcnNbJ3RlbXBsYXRlJ11bJ2luaXQnXShlbGVtZW50LCBrby5iaW5kaW5nSGFuZGxlcnNbJ2ZvcmVhY2gnXS5tYWtlVGVtcGxhdGVWYWx1ZUFjY2Vzc29yKHZhbHVlQWNjZXNzb3IpKTtcbiAgICB9LFxuICAgICd1cGRhdGUnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncywgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICByZXR1cm4ga28uYmluZGluZ0hhbmRsZXJzWyd0ZW1wbGF0ZSddWyd1cGRhdGUnXShlbGVtZW50LCBrby5iaW5kaW5nSGFuZGxlcnNbJ2ZvcmVhY2gnXS5tYWtlVGVtcGxhdGVWYWx1ZUFjY2Vzc29yKHZhbHVlQWNjZXNzb3IpLCBhbGxCaW5kaW5ncywgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCk7XG4gICAgfVxufTtcbmtvLmV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzWydmb3JlYWNoJ10gPSBmYWxzZTsgLy8gQ2FuJ3QgcmV3cml0ZSBjb250cm9sIGZsb3cgYmluZGluZ3NcbmtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbJ2ZvcmVhY2gnXSA9IHRydWU7XG52YXIgaGFzZm9jdXNVcGRhdGluZ1Byb3BlcnR5ID0gJ19fa29faGFzZm9jdXNVcGRhdGluZyc7XG52YXIgaGFzZm9jdXNMYXN0VmFsdWUgPSAnX19rb19oYXNmb2N1c0xhc3RWYWx1ZSc7XG5rby5iaW5kaW5nSGFuZGxlcnNbJ2hhc2ZvY3VzJ10gPSB7XG4gICAgJ2luaXQnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncykge1xuICAgICAgICB2YXIgaGFuZGxlRWxlbWVudEZvY3VzQ2hhbmdlID0gZnVuY3Rpb24oaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICAvLyBXaGVyZSBwb3NzaWJsZSwgaWdub3JlIHdoaWNoIGV2ZW50IHdhcyByYWlzZWQgYW5kIGRldGVybWluZSBmb2N1cyBzdGF0ZSB1c2luZyBhY3RpdmVFbGVtZW50LFxuICAgICAgICAgICAgLy8gYXMgdGhpcyBhdm9pZHMgcGhhbnRvbSBmb2N1cy9ibHVyIGV2ZW50cyByYWlzZWQgd2hlbiBjaGFuZ2luZyB0YWJzIGluIG1vZGVybiBicm93c2Vycy5cbiAgICAgICAgICAgIC8vIEhvd2V2ZXIsIG5vdCBhbGwgS08tdGFyZ2V0ZWQgYnJvd3NlcnMgKEZpcmVmb3ggMikgc3VwcG9ydCBhY3RpdmVFbGVtZW50LiBGb3IgdGhvc2UgYnJvd3NlcnMsXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGEgbG9zcyBvZiBmb2N1cyB3aGVuIGNoYW5naW5nIHRhYnMvd2luZG93cyBieSBzZXR0aW5nIGEgZmxhZyB0aGF0IHByZXZlbnRzIGhhc2ZvY3VzXG4gICAgICAgICAgICAvLyBmcm9tIGNhbGxpbmcgJ2JsdXIoKScgb24gdGhlIGVsZW1lbnQgd2hlbiBpdCBsb3NlcyBmb2N1cy5cbiAgICAgICAgICAgIC8vIERpc2N1c3Npb24gYXQgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L3B1bGwvMzUyXG4gICAgICAgICAgICBlbGVtZW50W2hhc2ZvY3VzVXBkYXRpbmdQcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG93bmVyRG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgaWYgKFwiYWN0aXZlRWxlbWVudFwiIGluIG93bmVyRG9jKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSBvd25lckRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJRTkgdGhyb3dzIGlmIHlvdSBhY2Nlc3MgYWN0aXZlRWxlbWVudCBkdXJpbmcgcGFnZSBsb2FkIChzZWUgaXNzdWUgIzcwMylcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gb3duZXJEb2MuYm9keTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNGb2N1c2VkID0gKGFjdGl2ZSA9PT0gZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHZhbHVlQWNjZXNzb3IoKTtcbiAgICAgICAgICAgIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcud3JpdGVWYWx1ZVRvUHJvcGVydHkobW9kZWxWYWx1ZSwgYWxsQmluZGluZ3MsICdoYXNmb2N1cycsIGlzRm9jdXNlZCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIC8vY2FjaGUgdGhlIGxhdGVzdCB2YWx1ZSwgc28gd2UgY2FuIGF2b2lkIHVubmVjZXNzYXJpbHkgY2FsbGluZyBmb2N1cy9ibHVyIGluIHRoZSB1cGRhdGUgZnVuY3Rpb25cbiAgICAgICAgICAgIGVsZW1lbnRbaGFzZm9jdXNMYXN0VmFsdWVdID0gaXNGb2N1c2VkO1xuICAgICAgICAgICAgZWxlbWVudFtoYXNmb2N1c1VwZGF0aW5nUHJvcGVydHldID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVFbGVtZW50Rm9jdXNJbiA9IGhhbmRsZUVsZW1lbnRGb2N1c0NoYW5nZS5iaW5kKG51bGwsIHRydWUpO1xuICAgICAgICB2YXIgaGFuZGxlRWxlbWVudEZvY3VzT3V0ID0gaGFuZGxlRWxlbWVudEZvY3VzQ2hhbmdlLmJpbmQobnVsbCwgZmFsc2UpO1xuXG4gICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiZm9jdXNcIiwgaGFuZGxlRWxlbWVudEZvY3VzSW4pO1xuICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcImZvY3VzaW5cIiwgaGFuZGxlRWxlbWVudEZvY3VzSW4pOyAvLyBGb3IgSUVcbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJibHVyXCIsICBoYW5kbGVFbGVtZW50Rm9jdXNPdXQpO1xuICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcImZvY3Vzb3V0XCIsICBoYW5kbGVFbGVtZW50Rm9jdXNPdXQpOyAvLyBGb3IgSUVcbiAgICB9LFxuICAgICd1cGRhdGUnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICEha28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpO1xuXG4gICAgICAgIGlmICghZWxlbWVudFtoYXNmb2N1c1VwZGF0aW5nUHJvcGVydHldICYmIGVsZW1lbnRbaGFzZm9jdXNMYXN0VmFsdWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPyBlbGVtZW50LmZvY3VzKCkgOiBlbGVtZW50LmJsdXIoKTtcblxuICAgICAgICAgICAgLy8gSW4gSUUsIHRoZSBibHVyIG1ldGhvZCBkb2Vzbid0IGFsd2F5cyBjYXVzZSB0aGUgZWxlbWVudCB0byBsb3NlIGZvY3VzIChmb3IgZXhhbXBsZSwgaWYgdGhlIHdpbmRvdyBpcyBub3QgaW4gZm9jdXMpLlxuICAgICAgICAgICAgLy8gU2V0dGluZyBmb2N1cyB0byB0aGUgYm9keSBlbGVtZW50IGRvZXMgc2VlbSB0byBiZSByZWxpYWJsZSBpbiBJRSwgYnV0IHNob3VsZCBvbmx5IGJlIHVzZWQgaWYgd2Uga25vdyB0aGF0IHRoZSBjdXJyZW50XG4gICAgICAgICAgICAvLyBlbGVtZW50IHdhcyBmb2N1c2VkIGFscmVhZHkuXG4gICAgICAgICAgICBpZiAoIXZhbHVlICYmIGVsZW1lbnRbaGFzZm9jdXNMYXN0VmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9yIElFLCB3aGljaCBkb2Vzbid0IHJlbGlhYmx5IGZpcmUgXCJmb2N1c1wiIG9yIFwiYmx1clwiIGV2ZW50cyBzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShrby51dGlscy50cmlnZ2VyRXZlbnQsIG51bGwsIFtlbGVtZW50LCB2YWx1ZSA/IFwiZm9jdXNpblwiIDogXCJmb2N1c291dFwiXSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xua28uZXhwcmVzc2lvblJld3JpdGluZy50d29XYXlCaW5kaW5nc1snaGFzZm9jdXMnXSA9IHRydWU7XG5cbmtvLmJpbmRpbmdIYW5kbGVyc1snaGFzRm9jdXMnXSA9IGtvLmJpbmRpbmdIYW5kbGVyc1snaGFzZm9jdXMnXTsgLy8gTWFrZSBcImhhc0ZvY3VzXCIgYW4gYWxpYXNcbmtvLmV4cHJlc3Npb25SZXdyaXRpbmcudHdvV2F5QmluZGluZ3NbJ2hhc0ZvY3VzJ10gPSB0cnVlO1xua28uYmluZGluZ0hhbmRsZXJzWydodG1sJ10gPSB7XG4gICAgJ2luaXQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUHJldmVudCBiaW5kaW5nIG9uIHRoZSBkeW5hbWljYWxseS1pbmplY3RlZCBIVE1MIChhcyBkZXZlbG9wZXJzIGFyZSB1bmxpa2VseSB0byBleHBlY3QgdGhhdCwgYW5kIGl0IGhhcyBzZWN1cml0eSBpbXBsaWNhdGlvbnMpXG4gICAgICAgIHJldHVybiB7ICdjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyc6IHRydWUgfTtcbiAgICB9LFxuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICAvLyBzZXRIdG1sIHdpbGwgdW53cmFwIHRoZSB2YWx1ZSBpZiBuZWVkZWRcbiAgICAgICAga28udXRpbHMuc2V0SHRtbChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKCkpO1xuICAgIH1cbn07XG4vLyBNYWtlcyBhIGJpbmRpbmcgbGlrZSB3aXRoIG9yIGlmXG5mdW5jdGlvbiBtYWtlV2l0aElmQmluZGluZyhiaW5kaW5nS2V5LCBpc1dpdGgsIGlzTm90LCBtYWtlQ29udGV4dENhbGxiYWNrKSB7XG4gICAga28uYmluZGluZ0hhbmRsZXJzW2JpbmRpbmdLZXldID0ge1xuICAgICAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgZGlkRGlzcGxheU9uTGFzdFVwZGF0ZSxcbiAgICAgICAgICAgICAgICBzYXZlZE5vZGVzO1xuICAgICAgICAgICAga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJhd1ZhbHVlID0gdmFsdWVBY2Nlc3NvcigpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJhd1ZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGlzcGxheSA9ICFpc05vdCAhPT0gIWRhdGFWYWx1ZSwgLy8gZXF1aXZhbGVudCB0byBpc05vdCA/ICFkYXRhVmFsdWUgOiAhIWRhdGFWYWx1ZVxuICAgICAgICAgICAgICAgICAgICBpc0ZpcnN0UmVuZGVyID0gIXNhdmVkTm9kZXMsXG4gICAgICAgICAgICAgICAgICAgIG5lZWRzUmVmcmVzaCA9IGlzRmlyc3RSZW5kZXIgfHwgaXNXaXRoIHx8IChzaG91bGREaXNwbGF5ICE9PSBkaWREaXNwbGF5T25MYXN0VXBkYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmIChuZWVkc1JlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBhIGNvcHkgb2YgdGhlIGlubmVyIG5vZGVzIG9uIHRoZSBpbml0aWFsIHVwZGF0ZSwgYnV0IG9ubHkgaWYgd2UgaGF2ZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0UmVuZGVyICYmIGtvLmNvbXB1dGVkQ29udGV4dC5nZXREZXBlbmRlbmNpZXNDb3VudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZE5vZGVzID0ga28udXRpbHMuY2xvbmVOb2Rlcyhrby52aXJ0dWFsRWxlbWVudHMuY2hpbGROb2RlcyhlbGVtZW50KSwgdHJ1ZSAvKiBzaG91bGRDbGVhbk5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGREaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmlyc3RSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuKGVsZW1lbnQsIGtvLnV0aWxzLmNsb25lTm9kZXMoc2F2ZWROb2RlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAga28uYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHMobWFrZUNvbnRleHRDYWxsYmFjayA/IG1ha2VDb250ZXh0Q2FsbGJhY2soYmluZGluZ0NvbnRleHQsIHJhd1ZhbHVlKSA6IGJpbmRpbmdDb250ZXh0LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkaWREaXNwbGF5T25MYXN0VXBkYXRlID0gc2hvdWxkRGlzcGxheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogZWxlbWVudCB9KTtcbiAgICAgICAgICAgIHJldHVybiB7ICdjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyc6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAga28uZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNbYmluZGluZ0tleV0gPSBmYWxzZTsgLy8gQ2FuJ3QgcmV3cml0ZSBjb250cm9sIGZsb3cgYmluZGluZ3NcbiAgICBrby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzW2JpbmRpbmdLZXldID0gdHJ1ZTtcbn1cblxuLy8gQ29uc3RydWN0IHRoZSBhY3R1YWwgYmluZGluZyBoYW5kbGVyc1xubWFrZVdpdGhJZkJpbmRpbmcoJ2lmJyk7XG5tYWtlV2l0aElmQmluZGluZygnaWZub3QnLCBmYWxzZSAvKiBpc1dpdGggKi8sIHRydWUgLyogaXNOb3QgKi8pO1xubWFrZVdpdGhJZkJpbmRpbmcoJ3dpdGgnLCB0cnVlIC8qIGlzV2l0aCAqLywgZmFsc2UgLyogaXNOb3QgKi8sXG4gICAgZnVuY3Rpb24oYmluZGluZ0NvbnRleHQsIGRhdGFWYWx1ZSkge1xuICAgICAgICByZXR1cm4gYmluZGluZ0NvbnRleHQuY3JlYXRlU3RhdGljQ2hpbGRDb250ZXh0KGRhdGFWYWx1ZSk7XG4gICAgfVxuKTtcbnZhciBjYXB0aW9uUGxhY2Vob2xkZXIgPSB7fTtcbmtvLmJpbmRpbmdIYW5kbGVyc1snb3B0aW9ucyddID0ge1xuICAgICdpbml0JzogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpZiAoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpICE9PSBcInNlbGVjdFwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIik7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBleGlzdGluZyA8b3B0aW9uPnMuXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBiaW5kaW5nIHByb2Nlc3NvciBkb2Vzbid0IHRyeSB0byBiaW5kIHRoZSBvcHRpb25zXG4gICAgICAgIHJldHVybiB7ICdjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyc6IHRydWUgfTtcbiAgICB9LFxuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHtcbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0ZWRPcHRpb25zKCkge1xuICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5RmlsdGVyKGVsZW1lbnQub3B0aW9ucywgZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUuc2VsZWN0ZWQ7IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdFdhc1ByZXZpb3VzbHlFbXB0eSA9IGVsZW1lbnQubGVuZ3RoID09IDAsXG4gICAgICAgICAgICBtdWx0aXBsZSA9IGVsZW1lbnQubXVsdGlwbGUsXG4gICAgICAgICAgICBwcmV2aW91c1Njcm9sbFRvcCA9ICghc2VsZWN0V2FzUHJldmlvdXNseUVtcHR5ICYmIG11bHRpcGxlKSA/IGVsZW1lbnQuc2Nyb2xsVG9wIDogbnVsbCxcbiAgICAgICAgICAgIHVud3JhcHBlZEFycmF5ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpLFxuICAgICAgICAgICAgdmFsdWVBbGxvd1Vuc2V0ID0gYWxsQmluZGluZ3MuZ2V0KCd2YWx1ZUFsbG93VW5zZXQnKSAmJiBhbGxCaW5kaW5nc1snaGFzJ10oJ3ZhbHVlJyksXG4gICAgICAgICAgICBpbmNsdWRlRGVzdHJveWVkID0gYWxsQmluZGluZ3MuZ2V0KCdvcHRpb25zSW5jbHVkZURlc3Ryb3llZCcpLFxuICAgICAgICAgICAgYXJyYXlUb0RvbU5vZGVDaGlsZHJlbk9wdGlvbnMgPSB7fSxcbiAgICAgICAgICAgIGNhcHRpb25WYWx1ZSxcbiAgICAgICAgICAgIGZpbHRlcmVkQXJyYXksXG4gICAgICAgICAgICBwcmV2aW91c1NlbGVjdGVkVmFsdWVzID0gW107XG5cbiAgICAgICAgaWYgKCF2YWx1ZUFsbG93VW5zZXQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSBrby51dGlscy5hcnJheU1hcChzZWxlY3RlZE9wdGlvbnMoKSwga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnNlbGVjdGVkSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMucHVzaChrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50Lm9wdGlvbnNbZWxlbWVudC5zZWxlY3RlZEluZGV4XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVud3JhcHBlZEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHVud3JhcHBlZEFycmF5Lmxlbmd0aCA9PSBcInVuZGVmaW5lZFwiKSAvLyBDb2VyY2Ugc2luZ2xlIHZhbHVlIGludG8gYXJyYXlcbiAgICAgICAgICAgICAgICB1bndyYXBwZWRBcnJheSA9IFt1bndyYXBwZWRBcnJheV07XG5cbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgYW55IGVudHJpZXMgbWFya2VkIGFzIGRlc3Ryb3llZFxuICAgICAgICAgICAgZmlsdGVyZWRBcnJheSA9IGtvLnV0aWxzLmFycmF5RmlsdGVyKHVud3JhcHBlZEFycmF5LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluY2x1ZGVEZXN0cm95ZWQgfHwgaXRlbSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0gPT09IG51bGwgfHwgIWtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoaXRlbVsnX2Rlc3Ryb3knXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSWYgY2FwdGlvbiBpcyBpbmNsdWRlZCwgYWRkIGl0IHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgaWYgKGFsbEJpbmRpbmdzWydoYXMnXSgnb3B0aW9uc0NhcHRpb24nKSkge1xuICAgICAgICAgICAgICAgIGNhcHRpb25WYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYWxsQmluZGluZ3MuZ2V0KCdvcHRpb25zQ2FwdGlvbicpKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBjYXB0aW9uIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkLCBkb24ndCBzaG93IGEgY2FwdGlvblxuICAgICAgICAgICAgICAgIGlmIChjYXB0aW9uVmFsdWUgIT09IG51bGwgJiYgY2FwdGlvblZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRBcnJheS51bnNoaWZ0KGNhcHRpb25QbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgYSBmYWxzeSB2YWx1ZSBpcyBwcm92aWRlZCAoZS5nLiBudWxsKSwgd2UnbGwgc2ltcGx5IGVtcHR5IHRoZSBzZWxlY3QgZWxlbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlUb09iamVjdChvYmplY3QsIHByZWRpY2F0ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcHJlZGljYXRlVHlwZSA9IHR5cGVvZiBwcmVkaWNhdGU7XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlVHlwZSA9PSBcImZ1bmN0aW9uXCIpICAgIC8vIEdpdmVuIGEgZnVuY3Rpb247IHJ1biBpdCBhZ2FpbnN0IHRoZSBkYXRhIHZhbHVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZWRpY2F0ZShvYmplY3QpO1xuICAgICAgICAgICAgZWxzZSBpZiAocHJlZGljYXRlVHlwZSA9PSBcInN0cmluZ1wiKSAvLyBHaXZlbiBhIHN0cmluZzsgdHJlYXQgaXQgYXMgYSBwcm9wZXJ0eSBuYW1lIG9uIHRoZSBkYXRhIHZhbHVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdFtwcmVkaWNhdGVdO1xuICAgICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2l2ZW4gbm8gb3B0aW9uc1RleHQgYXJnOyB1c2UgdGhlIGRhdGEgdmFsdWUgaXRzZWxmXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIGNhbiBydW4gYXQgdHdvIGRpZmZlcmVudCB0aW1lczpcbiAgICAgICAgLy8gVGhlIGZpcnN0IGlzIHdoZW4gdGhlIHdob2xlIGFycmF5IGlzIGJlaW5nIHVwZGF0ZWQgZGlyZWN0bHkgZnJvbSB0aGlzIGJpbmRpbmcgaGFuZGxlci5cbiAgICAgICAgLy8gVGhlIHNlY29uZCBpcyB3aGVuIGFuIG9ic2VydmFibGUgdmFsdWUgZm9yIGEgc3BlY2lmaWMgYXJyYXkgZW50cnkgaXMgdXBkYXRlZC5cbiAgICAgICAgLy8gb2xkT3B0aW9ucyB3aWxsIGJlIGVtcHR5IGluIHRoZSBmaXJzdCBjYXNlLCBidXQgd2lsbCBiZSBmaWxsZWQgd2l0aCB0aGUgcHJldmlvdXNseSBnZW5lcmF0ZWQgb3B0aW9uIGluIHRoZSBzZWNvbmQuXG4gICAgICAgIHZhciBpdGVtVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIG9wdGlvbkZvckFycmF5SXRlbShhcnJheUVudHJ5LCBpbmRleCwgb2xkT3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9sZE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTZWxlY3RlZFZhbHVlcyA9ICF2YWx1ZUFsbG93VW5zZXQgJiYgb2xkT3B0aW9uc1swXS5zZWxlY3RlZCA/IFsga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUob2xkT3B0aW9uc1swXSkgXSA6IFtdO1xuICAgICAgICAgICAgICAgIGl0ZW1VcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgaWYgKGFycmF5RW50cnkgPT09IGNhcHRpb25QbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldFRleHRDb250ZW50KG9wdGlvbiwgYWxsQmluZGluZ3MuZ2V0KCdvcHRpb25zQ2FwdGlvbicpKTtcbiAgICAgICAgICAgICAgICBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUob3B0aW9uLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBhIHZhbHVlIHRvIHRoZSBvcHRpb24gZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IGFwcGx5VG9PYmplY3QoYXJyYXlFbnRyeSwgYWxsQmluZGluZ3MuZ2V0KCdvcHRpb25zVmFsdWUnKSwgYXJyYXlFbnRyeSk7XG4gICAgICAgICAgICAgICAga28uc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlKG9wdGlvbiwga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShvcHRpb25WYWx1ZSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgc29tZSB0ZXh0IHRvIHRoZSBvcHRpb24gZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25UZXh0ID0gYXBwbHlUb09iamVjdChhcnJheUVudHJ5LCBhbGxCaW5kaW5ncy5nZXQoJ29wdGlvbnNUZXh0JyksIG9wdGlvblZhbHVlKTtcbiAgICAgICAgICAgICAgICBrby51dGlscy5zZXRUZXh0Q29udGVudChvcHRpb24sIG9wdGlvblRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtvcHRpb25dO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnkgdXNpbmcgYSBiZWZvcmVSZW1vdmUgY2FsbGJhY2ssIHdlIGRlbGF5IHRoZSByZW1vdmFsIHVudGlsIGFmdGVyIG5ldyBpdGVtcyBhcmUgYWRkZWQuIFRoaXMgZml4ZXMgYSBzZWxlY3Rpb25cbiAgICAgICAgLy8gcHJvYmxlbSBpbiBJRTw9OCBhbmQgRmlyZWZveC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rbm9ja291dC9rbm9ja291dC9pc3N1ZXMvMTIwOFxuICAgICAgICBhcnJheVRvRG9tTm9kZUNoaWxkcmVuT3B0aW9uc1snYmVmb3JlUmVtb3ZlJ10gPVxuICAgICAgICAgICAgZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0U2VsZWN0aW9uQ2FsbGJhY2soYXJyYXlFbnRyeSwgbmV3T3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKGl0ZW1VcGRhdGUgJiYgdmFsdWVBbGxvd1Vuc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIG1vZGVsIHZhbHVlIGlzIGF1dGhvcml0YXRpdmUsIHNvIG1ha2Ugc3VyZSBpdHMgdmFsdWUgaXMgdGhlIG9uZSBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIG5lZWQgdG8gdXNlIGRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlIHNpbmNlIHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcgZG9lcyBzbyBhbHJlYWR5LlxuICAgICAgICAgICAgICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZShlbGVtZW50LCBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFsbEJpbmRpbmdzLmdldCgndmFsdWUnKSksIHRydWUgLyogYWxsb3dVbnNldCAqLyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gSUU2IGRvZXNuJ3QgbGlrZSB1cyB0byBhc3NpZ24gc2VsZWN0aW9uIHRvIE9QVElPTiBub2RlcyBiZWZvcmUgdGhleSdyZSBhZGRlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVGhhdCdzIHdoeSB3ZSBmaXJzdCBhZGRlZCB0aGVtIHdpdGhvdXQgc2VsZWN0aW9uLiBOb3cgaXQncyB0aW1lIHRvIHNldCB0aGUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0ga28udXRpbHMuYXJyYXlJbmRleE9mKHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMsIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKG5ld09wdGlvbnNbMF0pKSA+PSAwO1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldE9wdGlvbk5vZGVTZWxlY3Rpb25TdGF0ZShuZXdPcHRpb25zWzBdLCBpc1NlbGVjdGVkKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgb3B0aW9uIHdhcyBjaGFuZ2VkIGZyb20gYmVpbmcgc2VsZWN0ZWQgZHVyaW5nIGEgc2luZ2xlLWl0ZW0gdXBkYXRlLCBub3RpZnkgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICAgIGlmIChpdGVtVXBkYXRlICYmICFpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGtvLnV0aWxzLnRyaWdnZXJFdmVudCwgbnVsbCwgW2VsZW1lbnQsIFwiY2hhbmdlXCJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBzZXRTZWxlY3Rpb25DYWxsYmFjaztcbiAgICAgICAgaWYgKGFsbEJpbmRpbmdzWydoYXMnXSgnb3B0aW9uc0FmdGVyUmVuZGVyJykgJiYgdHlwZW9mIGFsbEJpbmRpbmdzLmdldCgnb3B0aW9uc0FmdGVyUmVuZGVyJykgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uKGFycmF5RW50cnksIG5ld09wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb25DYWxsYmFjayhhcnJheUVudHJ5LCBuZXdPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShhbGxCaW5kaW5ncy5nZXQoJ29wdGlvbnNBZnRlclJlbmRlcicpLCBudWxsLCBbbmV3T3B0aW9uc1swXSwgYXJyYXlFbnRyeSAhPT0gY2FwdGlvblBsYWNlaG9sZGVyID8gYXJyYXlFbnRyeSA6IHVuZGVmaW5lZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAga28udXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZyhlbGVtZW50LCBmaWx0ZXJlZEFycmF5LCBvcHRpb25Gb3JBcnJheUl0ZW0sIGFycmF5VG9Eb21Ob2RlQ2hpbGRyZW5PcHRpb25zLCBjYWxsYmFjayk7XG5cbiAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlQWxsb3dVbnNldCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBtb2RlbCB2YWx1ZSBpcyBhdXRob3JpdGF0aXZlLCBzbyBtYWtlIHN1cmUgaXRzIHZhbHVlIGlzIHRoZSBvbmUgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUoZWxlbWVudCwga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhbGxCaW5kaW5ncy5nZXQoJ3ZhbHVlJykpLCB0cnVlIC8qIGFsbG93VW5zZXQgKi8pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCBhcyBhIHJlc3VsdCBvZiB1cGRhdGluZyB0aGUgb3B0aW9ucyBsaXN0XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbkNoYW5nZWQ7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBhIG11bHRpcGxlLXNlbGVjdCBib3gsIGNvbXBhcmUgdGhlIG5ldyBzZWxlY3Rpb24gY291bnQgdG8gdGhlIHByZXZpb3VzIG9uZVxuICAgICAgICAgICAgICAgICAgICAvLyBCdXQgaWYgbm90aGluZyB3YXMgc2VsZWN0ZWQgYmVmb3JlLCB0aGUgc2VsZWN0aW9uIGNhbid0IGhhdmUgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gcHJldmlvdXNTZWxlY3RlZFZhbHVlcy5sZW5ndGggJiYgc2VsZWN0ZWRPcHRpb25zKCkubGVuZ3RoIDwgcHJldmlvdXNTZWxlY3RlZFZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGEgc2luZ2xlLXNlbGVjdCBib3gsIGNvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgdG8gdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBpZiBub3RoaW5nIHdhcyBzZWxlY3RlZCBiZWZvcmUgb3Igbm90aGluZyBpcyBzZWxlY3RlZCBub3csIGp1c3QgbG9vayBmb3IgYSBjaGFuZ2UgaW4gc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSAocHJldmlvdXNTZWxlY3RlZFZhbHVlcy5sZW5ndGggJiYgZWxlbWVudC5zZWxlY3RlZEluZGV4ID49IDApXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50Lm9wdGlvbnNbZWxlbWVudC5zZWxlY3RlZEluZGV4XSkgIT09IHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChwcmV2aW91c1NlbGVjdGVkVmFsdWVzLmxlbmd0aCB8fCBlbGVtZW50LnNlbGVjdGVkSW5kZXggPj0gMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIGNvbnNpc3RlbmN5IGJldHdlZW4gbW9kZWwgdmFsdWUgYW5kIHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZHJvcGRvd24gd2FzIGNoYW5nZWQgc28gdGhhdCBzZWxlY3Rpb24gaXMgbm8gbG9uZ2VyIHRoZSBzYW1lLFxuICAgICAgICAgICAgICAgIC8vIG5vdGlmeSB0aGUgdmFsdWUgb3Igc2VsZWN0ZWRPcHRpb25zIGJpbmRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbkNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMudHJpZ2dlckV2ZW50KGVsZW1lbnQsIFwiY2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgSUUgYnVnXG4gICAgICAgIGtvLnV0aWxzLmVuc3VyZVNlbGVjdEVsZW1lbnRJc1JlbmRlcmVkQ29ycmVjdGx5KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Njcm9sbFRvcCAmJiBNYXRoLmFicyhwcmV2aW91c1Njcm9sbFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wKSA+IDIwKVxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBwcmV2aW91c1Njcm9sbFRvcDtcbiAgICB9XG59O1xua28uYmluZGluZ0hhbmRsZXJzWydvcHRpb25zJ10ub3B0aW9uVmFsdWVEb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3NlbGVjdGVkT3B0aW9ucyddID0ge1xuICAgICdhZnRlcic6IFsnb3B0aW9ucycsICdmb3JlYWNoJ10sXG4gICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHtcbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVBY2Nlc3NvcigpLCB2YWx1ZVRvV3JpdGUgPSBbXTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9Xcml0ZS5wdXNoKGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKG5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAga28uZXhwcmVzc2lvblJld3JpdGluZy53cml0ZVZhbHVlVG9Qcm9wZXJ0eSh2YWx1ZSwgYWxsQmluZGluZ3MsICdzZWxlY3RlZE9wdGlvbnMnLCB2YWx1ZVRvV3JpdGUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICBpZiAoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpICE9IFwic2VsZWN0XCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2YWx1ZXMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO1xuXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICYmIHR5cGVvZiBuZXdWYWx1ZS5sZW5ndGggPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihuZXdWYWx1ZSwga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUobm9kZSkpID49IDA7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQgIT0gaXNTZWxlY3RlZCkgeyAgICAgIC8vIFRoaXMgY2hlY2sgcHJldmVudHMgZmxhc2hpbmcgb2YgdGhlIHNlbGVjdCBlbGVtZW50IGluIElFXG4gICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldE9wdGlvbk5vZGVTZWxlY3Rpb25TdGF0ZShub2RlLCBpc1NlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gcHJldmlvdXNTY3JvbGxUb3A7XG4gICAgfVxufTtcbmtvLmV4cHJlc3Npb25SZXdyaXRpbmcudHdvV2F5QmluZGluZ3NbJ3NlbGVjdGVkT3B0aW9ucyddID0gdHJ1ZTtcbmtvLmJpbmRpbmdIYW5kbGVyc1snc3R5bGUnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkgfHwge30pO1xuICAgICAgICBrby51dGlscy5vYmplY3RGb3JFYWNoKHZhbHVlLCBmdW5jdGlvbihzdHlsZU5hbWUsIHN0eWxlVmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHN0eWxlVmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAoc3R5bGVWYWx1ZSA9PT0gbnVsbCB8fCBzdHlsZVZhbHVlID09PSB1bmRlZmluZWQgfHwgc3R5bGVWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBFbXB0eSBzdHJpbmcgcmVtb3ZlcyB0aGUgdmFsdWUsIHdoZXJlYXMgbnVsbC91bmRlZmluZWQgaGF2ZSBubyBlZmZlY3RcbiAgICAgICAgICAgICAgICBzdHlsZVZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZU5hbWVdID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmtvLmJpbmRpbmdIYW5kbGVyc1snc3VibWl0J10gPSB7XG4gICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZUFjY2Vzc29yKCkgIT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHZhbHVlIGZvciBhIHN1Ym1pdCBiaW5kaW5nIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlclJldHVyblZhbHVlO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVBY2Nlc3NvcigpO1xuICAgICAgICAgICAgdHJ5IHsgaGFuZGxlclJldHVyblZhbHVlID0gdmFsdWUuY2FsbChiaW5kaW5nQ29udGV4dFsnJGRhdGEnXSwgZWxlbWVudCk7IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyUmV0dXJuVmFsdWUgIT09IHRydWUpIHsgLy8gTm9ybWFsbHkgd2Ugd2FudCB0byBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLiBEZXZlbG9wZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmUgZXhwbGljaXRseSByZXR1cm5pbmcgdHJ1ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3RleHQnXSA9IHtcbiAgICAnaW5pdCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBQcmV2ZW50IGJpbmRpbmcgb24gdGhlIGR5bmFtaWNhbGx5LWluamVjdGVkIHRleHQgbm9kZSAoYXMgZGV2ZWxvcGVycyBhcmUgdW5saWtlbHkgdG8gZXhwZWN0IHRoYXQsIGFuZCBpdCBoYXMgc2VjdXJpdHkgaW1wbGljYXRpb25zKS5cbiAgICAgICAgLy8gSXQgc2hvdWxkIGFsc28gbWFrZSB0aGluZ3MgZmFzdGVyLCBhcyB3ZSBubyBsb25nZXIgaGF2ZSB0byBjb25zaWRlciB3aGV0aGVyIHRoZSB0ZXh0IG5vZGUgbWlnaHQgYmUgYmluZGFibGUuXG4gICAgICAgIHJldHVybiB7ICdjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyc6IHRydWUgfTtcbiAgICB9LFxuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICBrby51dGlscy5zZXRUZXh0Q29udGVudChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKCkpO1xuICAgIH1cbn07XG5rby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzWyd0ZXh0J10gPSB0cnVlO1xuKGZ1bmN0aW9uICgpIHtcblxuaWYgKHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgdmFyIHBhcnNlVmVyc2lvbiA9IGZ1bmN0aW9uIChtYXRjaGVzKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaGVzWzFdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBEZXRlY3QgdmFyaW91cyBicm93c2VyIHZlcnNpb25zIGJlY2F1c2Ugc29tZSBvbGQgdmVyc2lvbnMgZG9uJ3QgZnVsbHkgc3VwcG9ydCB0aGUgJ2lucHV0JyBldmVudFxuICAgIHZhciBvcGVyYVZlcnNpb24gPSB3aW5kb3cub3BlcmEgJiYgd2luZG93Lm9wZXJhLnZlcnNpb24gJiYgcGFyc2VJbnQod2luZG93Lm9wZXJhLnZlcnNpb24oKSksXG4gICAgICAgIHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICBzYWZhcmlWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHVzZXJBZ2VudC5tYXRjaCgvXig/Oig/IWNocm9tZSkuKSp2ZXJzaW9uXFwvKFteIF0qKSBzYWZhcmkvaSkpLFxuICAgICAgICBmaXJlZm94VmVyc2lvbiA9IHBhcnNlVmVyc2lvbih1c2VyQWdlbnQubWF0Y2goL0ZpcmVmb3hcXC8oW14gXSopLykpO1xufVxuXG4vLyBJRSA4IGFuZCA5IGhhdmUgYnVncyB0aGF0IHByZXZlbnQgdGhlIG5vcm1hbCBldmVudHMgZnJvbSBmaXJpbmcgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbi8vIEJ1dCBpdCBkb2VzIGZpcmUgdGhlICdzZWxlY3Rpb25jaGFuZ2UnIGV2ZW50IG9uIG1hbnkgb2YgdGhvc2UsIHByZXN1bWFibHkgYmVjYXVzZSB0aGVcbi8vIGN1cnNvciBpcyBtb3ZpbmcgYW5kIHRoYXQgY291bnRzIGFzIHRoZSBzZWxlY3Rpb24gY2hhbmdpbmcuIFRoZSAnc2VsZWN0aW9uY2hhbmdlJyBldmVudCBpc1xuLy8gZmlyZWQgYXQgdGhlIGRvY3VtZW50IGxldmVsIG9ubHkgYW5kIGRvZXNuJ3QgZGlyZWN0bHkgaW5kaWNhdGUgd2hpY2ggZWxlbWVudCBjaGFuZ2VkLiBXZVxuLy8gc2V0IHVwIGp1c3Qgb25lIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBkb2N1bWVudCBhbmQgdXNlICdhY3RpdmVFbGVtZW50JyB0byBkZXRlcm1pbmUgd2hpY2hcbi8vIGVsZW1lbnQgd2FzIGNoYW5nZWQuXG5pZiAoa28udXRpbHMuaWVWZXJzaW9uIDwgMTApIHtcbiAgICB2YXIgc2VsZWN0aW9uQ2hhbmdlUmVnaXN0ZXJlZE5hbWUgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKSxcbiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlck5hbWUgPSBrby51dGlscy5kb21EYXRhLm5leHRLZXkoKTtcbiAgICB2YXIgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBoYW5kbGVyID0gdGFyZ2V0ICYmIGtvLnV0aWxzLmRvbURhdGEuZ2V0KHRhcmdldCwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlck5hbWUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZWdpc3RlckZvclNlbGVjdGlvbkNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG93bmVyRG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICBpZiAoIWtvLnV0aWxzLmRvbURhdGEuZ2V0KG93bmVyRG9jLCBzZWxlY3Rpb25DaGFuZ2VSZWdpc3RlcmVkTmFtZSkpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KG93bmVyRG9jLCBzZWxlY3Rpb25DaGFuZ2VSZWdpc3RlcmVkTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihvd25lckRvYywgJ3NlbGVjdGlvbmNoYW5nZScsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KGVsZW1lbnQsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXJOYW1lLCBoYW5kbGVyKTtcbiAgICB9O1xufVxuXG5rby5iaW5kaW5nSGFuZGxlcnNbJ3RleHRJbnB1dCddID0ge1xuICAgICdpbml0JzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzKSB7XG5cbiAgICAgICAgdmFyIHByZXZpb3VzRWxlbWVudFZhbHVlID0gZWxlbWVudC52YWx1ZSxcbiAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUsXG4gICAgICAgICAgICBlbGVtZW50VmFsdWVCZWZvcmVFdmVudDtcblxuICAgICAgICB2YXIgdXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50ID0gdGltZW91dEhhbmRsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNFbGVtZW50VmFsdWUgIT09IGVsZW1lbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIFByb3ZpZGUgYSB3YXkgZm9yIHRlc3RzIHRvIGtub3cgZXhhY3RseSB3aGljaCBldmVudCB3YXMgcHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgaWYgKERFQlVHICYmIGV2ZW50KSBlbGVtZW50Wydfa29fdGV4dElucHV0UHJvY2Vzc2VkRXZlbnQnXSA9IGV2ZW50LnR5cGU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNFbGVtZW50VmFsdWUgPSBlbGVtZW50VmFsdWU7XG4gICAgICAgICAgICAgICAga28uZXhwcmVzc2lvblJld3JpdGluZy53cml0ZVZhbHVlVG9Qcm9wZXJ0eSh2YWx1ZUFjY2Vzc29yKCksIGFsbEJpbmRpbmdzLCAndGV4dElucHV0JywgZWxlbWVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZGVmZXJVcGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aW1lb3V0SGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50IHZhcmlhYmxlIGlzIHNldCAqb25seSogZHVyaW5nIHRoZSBicmllZiBnYXAgYmV0d2VlbiBhblxuICAgICAgICAgICAgICAgIC8vIGV2ZW50IGZpcmluZyBhbmQgdGhlIHVwZGF0ZU1vZGVsIGZ1bmN0aW9uIHJ1bm5pbmcuIFRoaXMgYWxsb3dzIHVzIHRvIGlnbm9yZSBtb2RlbFxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZXMgdGhhdCBhcmUgZnJvbSB0aGUgcHJldmlvdXMgc3RhdGUgb2YgdGhlIGVsZW1lbnQsIHVzdWFsbHkgZHVlIHRvIHRlY2huaXF1ZXNcbiAgICAgICAgICAgICAgICAvLyBzdWNoIGFzIHJhdGVMaW1pdC4gU3VjaCB1cGRhdGVzLCBpZiBub3QgaWdub3JlZCwgY2FuIGNhdXNlIGtleXN0cm9rZXMgdG8gYmUgbG9zdC5cbiAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVCZWZvcmVFdmVudCA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBERUJVRyA/IHVwZGF0ZU1vZGVsLmJpbmQoZWxlbWVudCwge3R5cGU6IGV2ZW50LnR5cGV9KSA6IHVwZGF0ZU1vZGVsO1xuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUgPSBrby51dGlscy5zZXRUaW1lb3V0KGhhbmRsZXIsIDQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElFOSB3aWxsIG1lc3MgdXAgdGhlIERPTSBpZiB5b3UgaGFuZGxlIGV2ZW50cyBzeW5jaHJvbm91c2x5IHdoaWNoIHJlc3VsdHMgaW4gRE9NIGNoYW5nZXMgKHN1Y2ggYXMgb3RoZXIgYmluZGluZ3MpO1xuICAgICAgICAvLyBzbyB3ZSdsbCBtYWtlIHN1cmUgYWxsIHVwZGF0ZXMgYXJlIGFzeW5jaHJvbm91c1xuICAgICAgICB2YXIgaWVVcGRhdGVNb2RlbCA9IGtvLnV0aWxzLmllVmVyc2lvbiA9PSA5ID8gZGVmZXJVcGRhdGVNb2RlbCA6IHVwZGF0ZU1vZGVsO1xuXG4gICAgICAgIHZhciB1cGRhdGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG5cbiAgICAgICAgICAgIGlmIChtb2RlbFZhbHVlID09PSBudWxsIHx8IG1vZGVsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50ICE9PSB1bmRlZmluZWQgJiYgbW9kZWxWYWx1ZSA9PT0gZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBrby51dGlscy5zZXRUaW1lb3V0KHVwZGF0ZVZpZXcsIDQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBlbGVtZW50IG9ubHkgaWYgdGhlIGVsZW1lbnQgYW5kIG1vZGVsIGFyZSBkaWZmZXJlbnQuIE9uIHNvbWUgYnJvd3NlcnMsIHVwZGF0aW5nIHRoZSB2YWx1ZVxuICAgICAgICAgICAgLy8gd2lsbCBtb3ZlIHRoZSBjdXJzb3IgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQsIHdoaWNoIHdvdWxkIGJlIGJhZCB3aGlsZSB0aGUgdXNlciBpcyB0eXBpbmcuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSAhPT0gbW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzRWxlbWVudFZhbHVlID0gbW9kZWxWYWx1ZTsgIC8vIE1ha2Ugc3VyZSB3ZSBpZ25vcmUgZXZlbnRzIChwcm9wZXJ0eWNoYW5nZSkgdGhhdCByZXN1bHQgZnJvbSB1cGRhdGluZyB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gbW9kZWxWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25FdmVudCA9IGZ1bmN0aW9uIChldmVudCwgaGFuZGxlcikge1xuICAgICAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChERUJVRyAmJiBrby5iaW5kaW5nSGFuZGxlcnNbJ3RleHRJbnB1dCddWydfZm9yY2VVcGRhdGVPbiddKSB7XG4gICAgICAgICAgICAvLyBQcm92aWRlIGEgd2F5IGZvciB0ZXN0cyB0byBzcGVjaWZ5IGV4YWN0bHkgd2hpY2ggZXZlbnRzIGFyZSBib3VuZFxuICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGtvLmJpbmRpbmdIYW5kbGVyc1sndGV4dElucHV0J11bJ19mb3JjZVVwZGF0ZU9uJ10sIGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUuc2xpY2UoMCw1KSA9PSAnYWZ0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoZXZlbnROYW1lLnNsaWNlKDUpLCBkZWZlclVwZGF0ZU1vZGVsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KGV2ZW50TmFtZSwgdXBkYXRlTW9kZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGtvLnV0aWxzLmllVmVyc2lvbiA8IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgPD0gOCBkb2Vzbid0IHN1cHBvcnQgdGhlICdpbnB1dCcgZXZlbnQsIGJ1dCBkb2VzIGluY2x1ZGUgJ3Byb3BlcnR5Y2hhbmdlJyB0aGF0IGZpcmVzIHdoZW5ldmVyXG4gICAgICAgICAgICAgICAgLy8gYW55IHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgY2hhbmdlcy4gVW5saWtlICdpbnB1dCcsIGl0IGFsc28gZmlyZXMgaWYgYSBwcm9wZXJ0eSBpcyBjaGFuZ2VkIGZyb20gSmF2YVNjcmlwdCBjb2RlLFxuICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGF0J3MgYW4gYWNjZXB0YWJsZSBjb21wcm9taXNlIGZvciB0aGlzIGJpbmRpbmcuIElFIDkgZG9lcyBzdXBwb3J0ICdpbnB1dCcsIGJ1dCBzaW5jZSBpdCBkb2Vzbid0IGZpcmUgaXRcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVzaW5nIGF1dG9jb21wbGV0ZSwgd2UnbGwgdXNlICdwcm9wZXJ0eWNoYW5nZScgZm9yIGl0IGFsc28uXG4gICAgICAgICAgICAgICAgb25FdmVudCgncHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZVVwZGF0ZU1vZGVsKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtvLnV0aWxzLmllVmVyc2lvbiA9PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElFIDggaGFzIGEgYnVnIHdoZXJlIGl0IGZhaWxzIHRvIGZpcmUgJ3Byb3BlcnR5Y2hhbmdlJyBvbiB0aGUgZmlyc3QgdXBkYXRlIGZvbGxvd2luZyBhIHZhbHVlIGNoYW5nZSBmcm9tXG4gICAgICAgICAgICAgICAgICAgIC8vIEphdmFTY3JpcHQgY29kZS4gSXQgYWxzbyBkb2Vzbid0IGZpcmUgaWYgeW91IGNsZWFyIHRoZSBlbnRpcmUgdmFsdWUuIFRvIGZpeCB0aGlzLCB3ZSBiaW5kIHRvIHRoZSBmb2xsb3dpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlbnRzIHRvby5cbiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgna2V5dXAnLCB1cGRhdGVNb2RlbCk7ICAgICAgLy8gQSBzaW5nbGUga2V5c3Rva2VcbiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgna2V5ZG93bicsIHVwZGF0ZU1vZGVsKTsgICAgLy8gVGhlIGZpcnN0IGNoYXJhY3RlciB3aGVuIGEga2V5IGlzIGhlbGQgZG93blxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuaWVWZXJzaW9uID49IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgOSBkb2Vzbid0IGZpcmUgdGhlICdpbnB1dCcgZXZlbnQgd2hlbiBkZWxldGluZyB0ZXh0LCBpbmNsdWRpbmcgdXNpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGJhY2tzcGFjZSwgZGVsZXRlLCBvciBjdHJsLXgga2V5cywgY2xpY2tpbmcgdGhlICd4JyB0byBjbGVhciB0aGUgaW5wdXQsIGRyYWdnaW5nIHRleHRcbiAgICAgICAgICAgICAgICAgICAgLy8gb3V0IG9mIHRoZSBmaWVsZCwgYW5kIGN1dHRpbmcgb3IgZGVsZXRpbmcgdGV4dCB1c2luZyB0aGUgY29udGV4dCBtZW51LiAnc2VsZWN0aW9uY2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAvLyBjYW4gZGV0ZWN0IGFsbCBvZiB0aG9zZSBleGNlcHQgZHJhZ2dpbmcgdGV4dCBvdXQgb2YgdGhlIGZpZWxkLCBmb3Igd2hpY2ggd2UgdXNlICdkcmFnZW5kJy5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgYXJlIGFsc28gbmVlZGVkIGluIElFOCBiZWNhdXNlIG9mIHRoZSBidWcgZGVzY3JpYmVkIGFib3ZlLlxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckZvclNlbGVjdGlvbkNoYW5nZUV2ZW50KGVsZW1lbnQsIGllVXBkYXRlTW9kZWwpOyAgLy8gJ3NlbGVjdGlvbmNoYW5nZScgY292ZXJzIGN1dCwgcGFzdGUsIGRyb3AsIGRlbGV0ZSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdkcmFnZW5kJywgZGVmZXJVcGRhdGVNb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBbGwgb3RoZXIgc3VwcG9ydGVkIGJyb3dzZXJzIHN1cHBvcnQgdGhlICdpbnB1dCcgZXZlbnQsIHdoaWNoIGZpcmVzIHdoZW5ldmVyIHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IGlzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAvLyB0aHJvdWdoIHRoZSB1c2VyIGludGVyZmFjZS5cbiAgICAgICAgICAgICAgICBvbkV2ZW50KCdpbnB1dCcsIHVwZGF0ZU1vZGVsKTtcblxuICAgICAgICAgICAgICAgIGlmIChzYWZhcmlWZXJzaW9uIDwgNSAmJiBrby51dGlscy50YWdOYW1lTG93ZXIoZWxlbWVudCkgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPDUgZG9lc24ndCBmaXJlIHRoZSAnaW5wdXQnIGV2ZW50IGZvciA8dGV4dGFyZWE+IGVsZW1lbnRzIChpdCBkb2VzIGZpcmUgJ3RleHRJbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IG9ubHkgd2hlbiB0eXBpbmcpLiBTbyB3ZSdsbCBqdXN0IGNhdGNoIGFzIG11Y2ggYXMgd2UgY2FuIHdpdGgga2V5ZG93biwgY3V0LCBhbmQgcGFzdGUuXG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2tleWRvd24nLCBkZWZlclVwZGF0ZU1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgncGFzdGUnLCBkZWZlclVwZGF0ZU1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgb25FdmVudCgnY3V0JywgZGVmZXJVcGRhdGVNb2RlbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYVZlcnNpb24gPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSAxMCBkb2Vzbid0IGFsd2F5cyBmaXJlIHRoZSAnaW5wdXQnIGV2ZW50IGZvciBjdXQsIHBhc3RlLCB1bmRvICYgZHJvcCBvcGVyYXRpb25zLlxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4gdHJ5IHRvIGNhdGNoIHNvbWUgb2YgdGhvc2UgdXNpbmcgJ2tleWRvd24nLlxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdrZXlkb3duJywgZGVmZXJVcGRhdGVNb2RlbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaXJlZm94VmVyc2lvbiA8IDQuMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IDw9IDMuNiBkb2Vzbid0IGZpcmUgdGhlICdpbnB1dCcgZXZlbnQgd2hlbiB0ZXh0IGlzIGZpbGxlZCBpbiB0aHJvdWdoIGF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICBvbkV2ZW50KCdET01BdXRvQ29tcGxldGUnLCB1cGRhdGVNb2RlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCA8PTMuNSBkb2Vzbid0IGZpcmUgdGhlICdpbnB1dCcgZXZlbnQgd2hlbiB0ZXh0IGlzIGRyb3BwZWQgaW50byB0aGUgaW5wdXQuXG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2RyYWdkcm9wJywgdXBkYXRlTW9kZWwpOyAgICAgICAvLyA8My41XG4gICAgICAgICAgICAgICAgICAgIG9uRXZlbnQoJ2Ryb3AnLCB1cGRhdGVNb2RlbCk7ICAgICAgICAgICAvLyAzLjVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIHRvIHRoZSBjaGFuZ2UgZXZlbnQgc28gdGhhdCB3ZSBjYW4gY2F0Y2ggcHJvZ3JhbW1hdGljIHVwZGF0ZXMgb2YgdGhlIHZhbHVlIHRoYXQgZmlyZSB0aGlzIGV2ZW50LlxuICAgICAgICBvbkV2ZW50KCdjaGFuZ2UnLCB1cGRhdGVNb2RlbCk7XG5cbiAgICAgICAga28uY29tcHV0ZWQodXBkYXRlVmlldywgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW1lbnQgfSk7XG4gICAgfVxufTtcbmtvLmV4cHJlc3Npb25SZXdyaXRpbmcudHdvV2F5QmluZGluZ3NbJ3RleHRJbnB1dCddID0gdHJ1ZTtcblxuLy8gdGV4dGlucHV0IGlzIGFuIGFsaWFzIGZvciB0ZXh0SW5wdXRcbmtvLmJpbmRpbmdIYW5kbGVyc1sndGV4dGlucHV0J10gPSB7XG4gICAgLy8gcHJlcHJvY2VzcyBpcyB0aGUgb25seSB3YXkgdG8gc2V0IHVwIGEgZnVsbCBhbGlhc1xuICAgICdwcmVwcm9jZXNzJzogZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBhZGRCaW5kaW5nKSB7XG4gICAgICAgIGFkZEJpbmRpbmcoJ3RleHRJbnB1dCcsIHZhbHVlKTtcbiAgICB9XG59O1xuXG59KSgpO2tvLmJpbmRpbmdIYW5kbGVyc1sndW5pcXVlTmFtZSddID0ge1xuICAgICdpbml0JzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgaWYgKHZhbHVlQWNjZXNzb3IoKSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcImtvX3VuaXF1ZV9cIiArICgrK2tvLmJpbmRpbmdIYW5kbGVyc1sndW5pcXVlTmFtZSddLmN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBrby51dGlscy5zZXRFbGVtZW50TmFtZShlbGVtZW50LCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3VuaXF1ZU5hbWUnXS5jdXJyZW50SW5kZXggPSAwO1xua28uYmluZGluZ0hhbmRsZXJzWyd2YWx1ZSddID0ge1xuICAgICdhZnRlcic6IFsnb3B0aW9ucycsICdmb3JlYWNoJ10sXG4gICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MpIHtcbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGJpbmRpbmcgaXMgcGxhY2VkIG9uIGEgcmFkaW8vY2hlY2tib3gsIHRoZW4ganVzdCBwYXNzIHRocm91Z2ggdG8gY2hlY2tlZFZhbHVlIGFuZCBxdWl0XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSBcImlucHV0XCIgJiYgKGVsZW1lbnQudHlwZSA9PSBcImNoZWNrYm94XCIgfHwgZWxlbWVudC50eXBlID09IFwicmFkaW9cIikpIHtcbiAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ0FjY2Vzc29yc1RvTm9kZShlbGVtZW50LCB7ICdjaGVja2VkVmFsdWUnOiB2YWx1ZUFjY2Vzc29yIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWx3YXlzIGNhdGNoIFwiY2hhbmdlXCIgZXZlbnQ7IHBvc3NpYmx5IG90aGVyIGV2ZW50cyB0b28gaWYgYXNrZWRcbiAgICAgICAgdmFyIGV2ZW50c1RvQ2F0Y2ggPSBbXCJjaGFuZ2VcIl07XG4gICAgICAgIHZhciByZXF1ZXN0ZWRFdmVudHNUb0NhdGNoID0gYWxsQmluZGluZ3MuZ2V0KFwidmFsdWVVcGRhdGVcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eUNoYW5nZWRGaXJlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgPSBudWxsO1xuXG4gICAgICAgIGlmIChyZXF1ZXN0ZWRFdmVudHNUb0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RlZEV2ZW50c1RvQ2F0Y2ggPT0gXCJzdHJpbmdcIikgLy8gQWxsb3cgYm90aCBpbmRpdmlkdWFsIGV2ZW50IG5hbWVzLCBhbmQgYXJyYXlzIG9mIGV2ZW50IG5hbWVzXG4gICAgICAgICAgICAgICAgcmVxdWVzdGVkRXZlbnRzVG9DYXRjaCA9IFtyZXF1ZXN0ZWRFdmVudHNUb0NhdGNoXTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UHVzaEFsbChldmVudHNUb0NhdGNoLCByZXF1ZXN0ZWRFdmVudHNUb0NhdGNoKTtcbiAgICAgICAgICAgIGV2ZW50c1RvQ2F0Y2ggPSBrby51dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzKGV2ZW50c1RvQ2F0Y2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlVXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgPSBudWxsO1xuICAgICAgICAgICAgcHJvcGVydHlDaGFuZ2VkRmlyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0gdmFsdWVBY2Nlc3NvcigpO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWx1ZSA9IGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQpO1xuICAgICAgICAgICAga28uZXhwcmVzc2lvblJld3JpdGluZy53cml0ZVZhbHVlVG9Qcm9wZXJ0eShtb2RlbFZhbHVlLCBhbGxCaW5kaW5ncywgJ3ZhbHVlJywgZWxlbWVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMTIyXG4gICAgICAgIC8vIElFIGRvZXNuJ3QgZmlyZSBcImNoYW5nZVwiIGV2ZW50cyBvbiB0ZXh0Ym94ZXMgaWYgdGhlIHVzZXIgc2VsZWN0cyBhIHZhbHVlIGZyb20gaXRzIGF1dG9jb21wbGV0ZSBsaXN0XG4gICAgICAgIHZhciBpZUF1dG9Db21wbGV0ZUhhY2tOZWVkZWQgPSBrby51dGlscy5pZVZlcnNpb24gJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJpbnB1dFwiICYmIGVsZW1lbnQudHlwZSA9PSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZWxlbWVudC5hdXRvY29tcGxldGUgIT0gXCJvZmZcIiAmJiAoIWVsZW1lbnQuZm9ybSB8fCBlbGVtZW50LmZvcm0uYXV0b2NvbXBsZXRlICE9IFwib2ZmXCIpO1xuICAgICAgICBpZiAoaWVBdXRvQ29tcGxldGVIYWNrTmVlZGVkICYmIGtvLnV0aWxzLmFycmF5SW5kZXhPZihldmVudHNUb0NhdGNoLCBcInByb3BlcnR5Y2hhbmdlXCIpID09IC0xKSB7XG4gICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcInByb3BlcnR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgcHJvcGVydHlDaGFuZ2VkRmlyZWQgPSB0cnVlIH0pO1xuICAgICAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7IHByb3BlcnR5Q2hhbmdlZEZpcmVkID0gZmFsc2UgfSk7XG4gICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5Q2hhbmdlZEZpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVXBkYXRlSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGV2ZW50c1RvQ2F0Y2gsIGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgLy8gVGhlIHN5bnRheCBcImFmdGVyPGV2ZW50bmFtZT5cIiBtZWFucyBcInJ1biB0aGUgaGFuZGxlciBhc3luY2hyb25vdXNseSBhZnRlciB0aGUgZXZlbnRcIlxuICAgICAgICAgICAgLy8gVGhpcyBpcyB1c2VmdWwsIGZvciBleGFtcGxlLCB0byBjYXRjaCBcImtleWRvd25cIiBldmVudHMgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIHVwZGF0ZWQgdGhlIGNvbnRyb2xcbiAgICAgICAgICAgIC8vIChvdGhlcndpc2UsIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKHRoaXMpIHdpbGwgcmVjZWl2ZSB0aGUgY29udHJvbCdzIHZhbHVlICpiZWZvcmUqIHRoZSBrZXkgZXZlbnQpXG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IHZhbHVlVXBkYXRlSGFuZGxlcjtcbiAgICAgICAgICAgIGlmIChrby51dGlscy5zdHJpbmdTdGFydHNXaXRoKGV2ZW50TmFtZSwgXCJhZnRlclwiKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnRWYWx1ZUJlZm9yZUV2ZW50IHZhcmlhYmxlIGlzIG5vbi1udWxsICpvbmx5KiBkdXJpbmcgdGhlIGJyaWVmIGdhcCBiZXR3ZWVuXG4gICAgICAgICAgICAgICAgICAgIC8vIGEga2V5WCBldmVudCBmaXJpbmcgYW5kIHRoZSB2YWx1ZVVwZGF0ZUhhbmRsZXIgcnVubmluZywgd2hpY2ggaXMgc2NoZWR1bGVkIHRvIGhhcHBlblxuICAgICAgICAgICAgICAgICAgICAvLyBhdCB0aGUgZWFybGllc3QgYXN5bmNocm9ub3VzIG9wcG9ydHVuaXR5LiBXZSBzdG9yZSB0aGlzIHRlbXBvcmFyeSBpbmZvcm1hdGlvbiBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmLCBiZXR3ZWVuIGtleVggYW5kIHZhbHVlVXBkYXRlSGFuZGxlciwgdGhlIHVuZGVybHlpbmcgbW9kZWwgdmFsdWUgY2hhbmdlcyBzZXBhcmF0ZWx5LFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gb3ZlcndyaXRlIHRoYXQgbW9kZWwgdmFsdWUgY2hhbmdlIHdpdGggdGhlIHZhbHVlIHRoZSB1c2VyIGp1c3QgdHlwZWQuIE90aGVyd2lzZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGVjaG5pcXVlcyBsaWtlIHJhdGVMaW1pdCBjYW4gdHJpZ2dlciBtb2RlbCBjaGFuZ2VzIGF0IGNyaXRpY2FsIG1vbWVudHMgdGhhdCB3aWxsXG4gICAgICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIHRoZSB1c2VyJ3MgaW5wdXRzLCBjYXVzaW5nIGtleXN0cm9rZXMgdG8gYmUgbG9zdC5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQgPSBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuc2V0VGltZW91dCh2YWx1ZVVwZGF0ZUhhbmRsZXIsIDApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lID0gZXZlbnROYW1lLnN1YnN0cmluZyhcImFmdGVyXCIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB1cGRhdGVGcm9tTW9kZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudFZhbHVlID0ga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VmFsdWVCZWZvcmVFdmVudCAhPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PT0gZWxlbWVudFZhbHVlQmVmb3JlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBrby51dGlscy5zZXRUaW1lb3V0KHVwZGF0ZUZyb21Nb2RlbCwgMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmFsdWVIYXNDaGFuZ2VkID0gKG5ld1ZhbHVlICE9PSBlbGVtZW50VmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVIYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWxsb3dVbnNldCA9IGFsbEJpbmRpbmdzLmdldCgndmFsdWVBbGxvd1Vuc2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcHBseVZhbHVlQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAga28uc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlKGVsZW1lbnQsIG5ld1ZhbHVlLCBhbGxvd1Vuc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlWYWx1ZUFjdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsb3dVbnNldCAmJiBuZXdWYWx1ZSAhPT0ga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHlvdSB0cnkgdG8gc2V0IGEgbW9kZWwgdmFsdWUgdGhhdCBjYW4ndCBiZSByZXByZXNlbnRlZCBpbiBhbiBhbHJlYWR5LXBvcHVsYXRlZCBkcm9wZG93biwgcmVqZWN0IHRoYXQgY2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB5b3UncmUgbm90IGFsbG93ZWQgdG8gaGF2ZSBhIG1vZGVsIHZhbHVlIHRoYXQgZGlzYWdyZWVzIHdpdGggYSB2aXNpYmxlIFVJIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGtvLnV0aWxzLnRyaWdnZXJFdmVudCwgbnVsbCwgW2VsZW1lbnQsIFwiY2hhbmdlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIElFNiBidWc6IEl0IHdvbid0IHJlbGlhYmx5IGFwcGx5IHZhbHVlcyB0byBTRUxFQ1Qgbm9kZXMgZHVyaW5nIHRoZSBzYW1lIGV4ZWN1dGlvbiB0aHJlYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFmdGVyIHlvdSd2ZSBjaGFuZ2VkIHRoZSBzZXQgb2YgT1BUSU9OIG5vZGVzIG9uIGl0LiBTbyBmb3IgdGhhdCBub2RlIHR5cGUsIHdlJ2xsIHNjaGVkdWxlIGEgc2Vjb25kIHRocmVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYXBwbHkgdGhlIHZhbHVlIGFzIHdlbGwuXG4gICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5zZXRUaW1lb3V0KGFwcGx5VmFsdWVBY3Rpb24sIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga28uc2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlKGVsZW1lbnQsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAga28uY29tcHV0ZWQodXBkYXRlRnJvbU1vZGVsLCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogZWxlbWVudCB9KTtcbiAgICB9LFxuICAgICd1cGRhdGUnOiBmdW5jdGlvbigpIHt9IC8vIEtlZXAgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggY29kZSB0aGF0IG1heSBoYXZlIHdyYXBwZWQgdmFsdWUgYmluZGluZ1xufTtcbmtvLmV4cHJlc3Npb25SZXdyaXRpbmcudHdvV2F5QmluZGluZ3NbJ3ZhbHVlJ10gPSB0cnVlO1xua28uYmluZGluZ0hhbmRsZXJzWyd2aXNpYmxlJ10gPSB7XG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTtcbiAgICAgICAgdmFyIGlzQ3VycmVudGx5VmlzaWJsZSA9ICEoZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKTtcbiAgICAgICAgaWYgKHZhbHVlICYmICFpc0N1cnJlbnRseVZpc2libGUpXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICBlbHNlIGlmICgoIXZhbHVlKSAmJiBpc0N1cnJlbnRseVZpc2libGUpXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59O1xuLy8gJ2NsaWNrJyBpcyBqdXN0IGEgc2hvcnRoYW5kIGZvciB0aGUgdXN1YWwgZnVsbC1sZW5ndGggZXZlbnQ6e2NsaWNrOmhhbmRsZXJ9XG5tYWtlRXZlbnRIYW5kbGVyU2hvcnRjdXQoJ2NsaWNrJyk7XG4vLyBJZiB5b3Ugd2FudCB0byBtYWtlIGEgY3VzdG9tIHRlbXBsYXRlIGVuZ2luZSxcbi8vXG4vLyBbMV0gSW5oZXJpdCBmcm9tIHRoaXMgY2xhc3MgKGxpa2Uga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUgZG9lcylcbi8vIFsyXSBPdmVycmlkZSAncmVuZGVyVGVtcGxhdGVTb3VyY2UnLCBzdXBwbHlpbmcgYSBmdW5jdGlvbiB3aXRoIHRoaXMgc2lnbmF0dXJlOlxuLy9cbi8vICAgICAgICBmdW5jdGlvbiAodGVtcGxhdGVTb3VyY2UsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zKSB7XG4vLyAgICAgICAgICAgIC8vIC0gdGVtcGxhdGVTb3VyY2UudGV4dCgpIGlzIHRoZSB0ZXh0IG9mIHRoZSB0ZW1wbGF0ZSB5b3Ugc2hvdWxkIHJlbmRlclxuLy8gICAgICAgICAgICAvLyAtIGJpbmRpbmdDb250ZXh0LiRkYXRhIGlzIHRoZSBkYXRhIHlvdSBzaG91bGQgcGFzcyBpbnRvIHRoZSB0ZW1wbGF0ZVxuLy8gICAgICAgICAgICAvLyAgIC0geW91IG1pZ2h0IGFsc28gd2FudCB0byBtYWtlIGJpbmRpbmdDb250ZXh0LiRwYXJlbnQsIGJpbmRpbmdDb250ZXh0LiRwYXJlbnRzLFxuLy8gICAgICAgICAgICAvLyAgICAgYW5kIGJpbmRpbmdDb250ZXh0LiRyb290IGF2YWlsYWJsZSBpbiB0aGUgdGVtcGxhdGUgdG9vXG4vLyAgICAgICAgICAgIC8vIC0gb3B0aW9ucyBnaXZlcyB5b3UgYWNjZXNzIHRvIGFueSBvdGhlciBwcm9wZXJ0aWVzIHNldCBvbiBcImRhdGEtYmluZDogeyB0ZW1wbGF0ZTogb3B0aW9ucyB9XCJcbi8vICAgICAgICAgICAgLy8gLSB0ZW1wbGF0ZURvY3VtZW50IGlzIHRoZSBkb2N1bWVudCBvYmplY3Qgb2YgdGhlIHRlbXBsYXRlXG4vLyAgICAgICAgICAgIC8vXG4vLyAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZTogYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG4vLyAgICAgICAgfVxuLy9cbi8vIFszXSBPdmVycmlkZSAnY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrJywgc3VwcGx5aW5nIGEgZnVuY3Rpb24gd2l0aCB0aGlzIHNpZ25hdHVyZTpcbi8vXG4vLyAgICAgICAgZnVuY3Rpb24gKHNjcmlwdCkge1xuLy8gICAgICAgICAgICAvLyBSZXR1cm4gdmFsdWU6IFdoYXRldmVyIHN5bnRheCBtZWFucyBcIkV2YWx1YXRlIHRoZSBKYXZhU2NyaXB0IHN0YXRlbWVudCAnc2NyaXB0JyBhbmQgb3V0cHV0IHRoZSByZXN1bHRcIlxuLy8gICAgICAgICAgICAvLyAgICAgICAgICAgICAgIEZvciBleGFtcGxlLCB0aGUganF1ZXJ5LnRtcGwgdGVtcGxhdGUgZW5naW5lIGNvbnZlcnRzICdzb21lU2NyaXB0JyB0byAnJHsgc29tZVNjcmlwdCB9J1xuLy8gICAgICAgIH1cbi8vXG4vLyAgICAgVGhpcyBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB5b3Ugd2FudCB0byBhbGxvdyBkYXRhLWJpbmQgYXR0cmlidXRlcyB0byByZWZlcmVuY2UgYXJiaXRyYXJ5IHRlbXBsYXRlIHZhcmlhYmxlcy5cbi8vICAgICBJZiB5b3UgZG9uJ3Qgd2FudCB0byBhbGxvdyB0aGF0LCB5b3UgY2FuIHNldCB0aGUgcHJvcGVydHkgJ2FsbG93VGVtcGxhdGVSZXdyaXRpbmcnIHRvIGZhbHNlIChsaWtlIGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lIGRvZXMpXG4vLyAgICAgYW5kIHRoZW4geW91IGRvbid0IG5lZWQgdG8gb3ZlcnJpZGUgJ2NyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaycuXG5cbmtvLnRlbXBsYXRlRW5naW5lID0gZnVuY3Rpb24gKCkgeyB9O1xuXG5rby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3JlbmRlclRlbXBsYXRlU291cmNlJ10gPSBmdW5jdGlvbiAodGVtcGxhdGVTb3VyY2UsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCB0ZW1wbGF0ZURvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiT3ZlcnJpZGUgcmVuZGVyVGVtcGxhdGVTb3VyY2VcIik7XG59O1xuXG5rby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ2NyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jayddID0gZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk92ZXJyaWRlIGNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9ja1wiKTtcbn07XG5cbmtvLnRlbXBsYXRlRW5naW5lLnByb3RvdHlwZVsnbWFrZVRlbXBsYXRlU291cmNlJ10gPSBmdW5jdGlvbih0ZW1wbGF0ZSwgdGVtcGxhdGVEb2N1bWVudCkge1xuICAgIC8vIE5hbWVkIHRlbXBsYXRlXG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRlbXBsYXRlRG9jdW1lbnQgPSB0ZW1wbGF0ZURvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgICB2YXIgZWxlbSA9IHRlbXBsYXRlRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGUpO1xuICAgICAgICBpZiAoIWVsZW0pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCB0ZW1wbGF0ZSB3aXRoIElEIFwiICsgdGVtcGxhdGUpO1xuICAgICAgICByZXR1cm4gbmV3IGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50KGVsZW0pO1xuICAgIH0gZWxzZSBpZiAoKHRlbXBsYXRlLm5vZGVUeXBlID09IDEpIHx8ICh0ZW1wbGF0ZS5ub2RlVHlwZSA9PSA4KSkge1xuICAgICAgICAvLyBBbm9ueW1vdXMgdGVtcGxhdGVcbiAgICAgICAgcmV0dXJuIG5ldyBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIH0gZWxzZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHRlbXBsYXRlIHR5cGU6IFwiICsgdGVtcGxhdGUpO1xufTtcblxua28udGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydyZW5kZXJUZW1wbGF0ZSddID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucywgdGVtcGxhdGVEb2N1bWVudCkge1xuICAgIHZhciB0ZW1wbGF0ZVNvdXJjZSA9IHRoaXNbJ21ha2VUZW1wbGF0ZVNvdXJjZSddKHRlbXBsYXRlLCB0ZW1wbGF0ZURvY3VtZW50KTtcbiAgICByZXR1cm4gdGhpc1sncmVuZGVyVGVtcGxhdGVTb3VyY2UnXSh0ZW1wbGF0ZVNvdXJjZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIHRlbXBsYXRlRG9jdW1lbnQpO1xufTtcblxua28udGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydpc1RlbXBsYXRlUmV3cml0dGVuJ10gPSBmdW5jdGlvbiAodGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpIHtcbiAgICAvLyBTa2lwIHJld3JpdGluZyBpZiByZXF1ZXN0ZWRcbiAgICBpZiAodGhpc1snYWxsb3dUZW1wbGF0ZVJld3JpdGluZyddID09PSBmYWxzZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXNbJ21ha2VUZW1wbGF0ZVNvdXJjZSddKHRlbXBsYXRlLCB0ZW1wbGF0ZURvY3VtZW50KVsnZGF0YSddKFwiaXNSZXdyaXR0ZW5cIik7XG59O1xuXG5rby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3Jld3JpdGVUZW1wbGF0ZSddID0gZnVuY3Rpb24gKHRlbXBsYXRlLCByZXdyaXRlckNhbGxiYWNrLCB0ZW1wbGF0ZURvY3VtZW50KSB7XG4gICAgdmFyIHRlbXBsYXRlU291cmNlID0gdGhpc1snbWFrZVRlbXBsYXRlU291cmNlJ10odGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpO1xuICAgIHZhciByZXdyaXR0ZW4gPSByZXdyaXRlckNhbGxiYWNrKHRlbXBsYXRlU291cmNlWyd0ZXh0J10oKSk7XG4gICAgdGVtcGxhdGVTb3VyY2VbJ3RleHQnXShyZXdyaXR0ZW4pO1xuICAgIHRlbXBsYXRlU291cmNlWydkYXRhJ10oXCJpc1Jld3JpdHRlblwiLCB0cnVlKTtcbn07XG5cbmtvLmV4cG9ydFN5bWJvbCgndGVtcGxhdGVFbmdpbmUnLCBrby50ZW1wbGF0ZUVuZ2luZSk7XG5cbmtvLnRlbXBsYXRlUmV3cml0aW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWVtb2l6ZURhdGFCaW5kaW5nQXR0cmlidXRlU3ludGF4UmVnZXggPSAvKDwoW2Etel0rXFxkKikoPzpcXHMrKD8hZGF0YS1iaW5kXFxzKj1cXHMqKVthLXowLTlcXC1dKyg/Oj0oPzpcXFwiW15cXFwiXSpcXFwifFxcJ1teXFwnXSpcXCd8W14+XSopKT8pKlxccyspZGF0YS1iaW5kXFxzKj1cXHMqKFtcIiddKShbXFxzXFxTXSo/KVxcMy9naTtcbiAgICB2YXIgbWVtb2l6ZVZpcnR1YWxDb250YWluZXJCaW5kaW5nU3ludGF4UmVnZXggPSAvPCEtLVxccyprb1xcYlxccyooW1xcc1xcU10qPylcXHMqLS0+L2c7XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZURhdGFCaW5kVmFsdWVzRm9yUmV3cml0aW5nKGtleVZhbHVlQXJyYXkpIHtcbiAgICAgICAgdmFyIGFsbFZhbGlkYXRvcnMgPSBrby5leHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9ycztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlWYWx1ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5VmFsdWVBcnJheVtpXVsna2V5J107XG4gICAgICAgICAgICBpZiAoYWxsVmFsaWRhdG9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IGFsbFZhbGlkYXRvcnNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmxlRXJyb3JNZXNzYWdlID0gdmFsaWRhdG9yKGtleVZhbHVlQXJyYXlbaV1bJ3ZhbHVlJ10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVFcnJvck1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocG9zc2libGVFcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnXCIgKyBrZXkgKyBcIicgYmluZGluZyB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25zdHJ1Y3RNZW1vaXplZFRhZ1JlcGxhY2VtZW50KGRhdGFCaW5kQXR0cmlidXRlVmFsdWUsIHRhZ1RvUmV0YWluLCBub2RlTmFtZSwgdGVtcGxhdGVFbmdpbmUpIHtcbiAgICAgICAgdmFyIGRhdGFCaW5kS2V5VmFsdWVBcnJheSA9IGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsKGRhdGFCaW5kQXR0cmlidXRlVmFsdWUpO1xuICAgICAgICB2YWxpZGF0ZURhdGFCaW5kVmFsdWVzRm9yUmV3cml0aW5nKGRhdGFCaW5kS2V5VmFsdWVBcnJheSk7XG4gICAgICAgIHZhciByZXdyaXR0ZW5EYXRhQmluZEF0dHJpYnV0ZVZhbHVlID0ga28uZXhwcmVzc2lvblJld3JpdGluZy5wcmVQcm9jZXNzQmluZGluZ3MoZGF0YUJpbmRLZXlWYWx1ZUFycmF5LCB7J3ZhbHVlQWNjZXNzb3JzJzp0cnVlfSk7XG5cbiAgICAgICAgLy8gRm9yIG5vIG9idmlvdXMgcmVhc29uLCBPcGVyYSBmYWlscyB0byBldmFsdWF0ZSByZXdyaXR0ZW5EYXRhQmluZEF0dHJpYnV0ZVZhbHVlIHVubGVzcyBpdCdzIHdyYXBwZWQgaW4gYW4gYWRkaXRpb25hbFxuICAgICAgICAvLyBhbm9ueW1vdXMgZnVuY3Rpb24sIGV2ZW4gdGhvdWdoIE9wZXJhJ3MgYnVpbHQtaW4gZGVidWdnZXIgY2FuIGV2YWx1YXRlIGl0IGFueXdheS4gTm8gb3RoZXIgYnJvd3NlciByZXF1aXJlcyB0aGlzXG4gICAgICAgIC8vIGV4dHJhIGluZGlyZWN0aW9uLlxuICAgICAgICB2YXIgYXBwbHlCaW5kaW5nc1RvTmV4dFNpYmxpbmdTY3JpcHQgPVxuICAgICAgICAgICAgXCJrby5fX3RyX2FtYnRucyhmdW5jdGlvbigkY29udGV4dCwkZWxlbWVudCl7cmV0dXJuKGZ1bmN0aW9uKCl7cmV0dXJueyBcIiArIHJld3JpdHRlbkRhdGFCaW5kQXR0cmlidXRlVmFsdWUgKyBcIiB9IH0pKCl9LCdcIiArIG5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgKyBcIicpXCI7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZUVuZ2luZVsnY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrJ10oYXBwbHlCaW5kaW5nc1RvTmV4dFNpYmxpbmdTY3JpcHQpICsgdGFnVG9SZXRhaW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5zdXJlVGVtcGxhdGVJc1Jld3JpdHRlbjogZnVuY3Rpb24gKHRlbXBsYXRlLCB0ZW1wbGF0ZUVuZ2luZSwgdGVtcGxhdGVEb2N1bWVudCkge1xuICAgICAgICAgICAgaWYgKCF0ZW1wbGF0ZUVuZ2luZVsnaXNUZW1wbGF0ZVJld3JpdHRlbiddKHRlbXBsYXRlLCB0ZW1wbGF0ZURvY3VtZW50KSlcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUVuZ2luZVsncmV3cml0ZVRlbXBsYXRlJ10odGVtcGxhdGUsIGZ1bmN0aW9uIChodG1sU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrby50ZW1wbGF0ZVJld3JpdGluZy5tZW1vaXplQmluZGluZ0F0dHJpYnV0ZVN5bnRheChodG1sU3RyaW5nLCB0ZW1wbGF0ZUVuZ2luZSk7XG4gICAgICAgICAgICAgICAgfSwgdGVtcGxhdGVEb2N1bWVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWVtb2l6ZUJpbmRpbmdBdHRyaWJ1dGVTeW50YXg6IGZ1bmN0aW9uIChodG1sU3RyaW5nLCB0ZW1wbGF0ZUVuZ2luZSkge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmcucmVwbGFjZShtZW1vaXplRGF0YUJpbmRpbmdBdHRyaWJ1dGVTeW50YXhSZWdleCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RNZW1vaXplZFRhZ1JlcGxhY2VtZW50KC8qIGRhdGFCaW5kQXR0cmlidXRlVmFsdWU6ICovIGFyZ3VtZW50c1s0XSwgLyogdGFnVG9SZXRhaW46ICovIGFyZ3VtZW50c1sxXSwgLyogbm9kZU5hbWU6ICovIGFyZ3VtZW50c1syXSwgdGVtcGxhdGVFbmdpbmUpO1xuICAgICAgICAgICAgfSkucmVwbGFjZShtZW1vaXplVmlydHVhbENvbnRhaW5lckJpbmRpbmdTeW50YXhSZWdleCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdE1lbW9pemVkVGFnUmVwbGFjZW1lbnQoLyogZGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZTogKi8gYXJndW1lbnRzWzFdLCAvKiB0YWdUb1JldGFpbjogKi8gXCI8IS0tIGtvIC0tPlwiLCAvKiBub2RlTmFtZTogKi8gXCIjY29tbWVudFwiLCB0ZW1wbGF0ZUVuZ2luZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhcHBseU1lbW9pemVkQmluZGluZ3NUb05leHRTaWJsaW5nOiBmdW5jdGlvbiAoYmluZGluZ3MsIG5vZGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4ga28ubWVtb2l6YXRpb24ubWVtb2l6ZShmdW5jdGlvbiAoZG9tTm9kZSwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZVRvQmluZCA9IGRvbU5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVUb0JpbmQgJiYgbm9kZVRvQmluZC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBrby5hcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGUobm9kZVRvQmluZCwgYmluZGluZ3MsIGJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG5cblxuLy8gRXhwb3J0ZWQgb25seSBiZWNhdXNlIGl0IGhhcyB0byBiZSByZWZlcmVuY2VkIGJ5IHN0cmluZyBsb29rdXAgZnJvbSB3aXRoaW4gcmV3cml0dGVuIHRlbXBsYXRlXG5rby5leHBvcnRTeW1ib2woJ19fdHJfYW1idG5zJywga28udGVtcGxhdGVSZXdyaXRpbmcuYXBwbHlNZW1vaXplZEJpbmRpbmdzVG9OZXh0U2libGluZyk7XG4oZnVuY3Rpb24oKSB7XG4gICAgLy8gQSB0ZW1wbGF0ZSBzb3VyY2UgcmVwcmVzZW50cyBhIHJlYWQvd3JpdGUgd2F5IG9mIGFjY2Vzc2luZyBhIHRlbXBsYXRlLiBUaGlzIGlzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3IgdGVtcGxhdGUgbG9hZGluZy9zYXZpbmdcbiAgICAvLyBsb2dpYyB0byBiZSBkdXBsaWNhdGVkIGluIGV2ZXJ5IHRlbXBsYXRlIGVuZ2luZSAoYW5kIG1lYW5zIHRoZXkgY2FuIGFsbCB3b3JrIHdpdGggYW5vbnltb3VzIHRlbXBsYXRlcywgZXRjLilcbiAgICAvL1xuICAgIC8vIFR3byBhcmUgcHJvdmlkZWQgYnkgZGVmYXVsdDpcbiAgICAvLyAgMS4ga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQgICAgICAgLSByZWFkcy93cml0ZXMgdGhlIHRleHQgY29udGVudCBvZiBhbiBhcmJpdHJhcnkgRE9NIGVsZW1lbnRcbiAgICAvLyAgMi4ga28udGVtcGxhdGVTb3VyY2VzLmFub255bW91c0VsZW1lbnQgLSB1c2VzIGtvLnV0aWxzLmRvbURhdGEgdG8gcmVhZC93cml0ZSB0ZXh0ICphc3NvY2lhdGVkKiB3aXRoIHRoZSBET00gZWxlbWVudCwgYnV0XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aG91dCByZWFkaW5nL3dyaXRpbmcgdGhlIGFjdHVhbCBlbGVtZW50IHRleHQgY29udGVudCwgc2luY2UgaXQgd2lsbCBiZSBvdmVyd3JpdHRlblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggdGhlIHJlbmRlcmVkIHRlbXBsYXRlIG91dHB1dC5cbiAgICAvLyBZb3UgY2FuIGltcGxlbWVudCB5b3VyIG93biB0ZW1wbGF0ZSBzb3VyY2UgaWYgeW91IHdhbnQgdG8gZmV0Y2gvc3RvcmUgdGVtcGxhdGVzIHNvbWV3aGVyZSBvdGhlciB0aGFuIGluIERPTSBlbGVtZW50cy5cbiAgICAvLyBUZW1wbGF0ZSBzb3VyY2VzIG5lZWQgdG8gaGF2ZSB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAgICAvLyAgIHRleHQoKSBcdFx0XHQtIHJldHVybnMgdGhlIHRlbXBsYXRlIHRleHQgZnJvbSB5b3VyIHN0b3JhZ2UgbG9jYXRpb25cbiAgICAvLyAgIHRleHQodmFsdWUpXHRcdC0gd3JpdGVzIHRoZSBzdXBwbGllZCB0ZW1wbGF0ZSB0ZXh0IHRvIHlvdXIgc3RvcmFnZSBsb2NhdGlvblxuICAgIC8vICAgZGF0YShrZXkpXHRcdFx0LSByZWFkcyB2YWx1ZXMgc3RvcmVkIHVzaW5nIGRhdGEoa2V5LCB2YWx1ZSkgLSBzZWUgYmVsb3dcbiAgICAvLyAgIGRhdGEoa2V5LCB2YWx1ZSlcdC0gYXNzb2NpYXRlcyBcInZhbHVlXCIgd2l0aCB0aGlzIHRlbXBsYXRlIGFuZCB0aGUga2V5IFwia2V5XCIuIElzIHVzZWQgdG8gc3RvcmUgaW5mb3JtYXRpb24gbGlrZSBcImlzUmV3cml0dGVuXCIuXG4gICAgLy9cbiAgICAvLyBPcHRpb25hbGx5LCB0ZW1wbGF0ZSBzb3VyY2VzIGNhbiBhbHNvIGhhdmUgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gICAgLy8gICBub2RlcygpICAgICAgICAgICAgLSByZXR1cm5zIGEgRE9NIGVsZW1lbnQgY29udGFpbmluZyB0aGUgbm9kZXMgb2YgdGhpcyB0ZW1wbGF0ZSwgd2hlcmUgYXZhaWxhYmxlXG4gICAgLy8gICBub2Rlcyh2YWx1ZSkgICAgICAgLSB3cml0ZXMgdGhlIGdpdmVuIERPTSBlbGVtZW50IHRvIHlvdXIgc3RvcmFnZSBsb2NhdGlvblxuICAgIC8vIElmIGEgRE9NIGVsZW1lbnQgaXMgYXZhaWxhYmxlIGZvciBhIGdpdmVuIHRlbXBsYXRlIHNvdXJjZSwgdGVtcGxhdGUgZW5naW5lcyBhcmUgZW5jb3VyYWdlZCB0byB1c2UgaXQgaW4gcHJlZmVyZW5jZSBvdmVyIHRleHQoKVxuICAgIC8vIGZvciBpbXByb3ZlZCBzcGVlZC4gSG93ZXZlciwgYWxsIHRlbXBsYXRlU291cmNlcyBtdXN0IHN1cHBseSB0ZXh0KCkgZXZlbiBpZiB0aGV5IGRvbid0IHN1cHBseSBub2RlcygpLlxuICAgIC8vXG4gICAgLy8gT25jZSB5b3UndmUgaW1wbGVtZW50ZWQgYSB0ZW1wbGF0ZVNvdXJjZSwgbWFrZSB5b3VyIHRlbXBsYXRlIGVuZ2luZSB1c2UgaXQgYnkgc3ViY2xhc3Npbmcgd2hhdGV2ZXIgdGVtcGxhdGUgZW5naW5lIHlvdSB3ZXJlXG4gICAgLy8gdXNpbmcgYW5kIG92ZXJyaWRpbmcgXCJtYWtlVGVtcGxhdGVTb3VyY2VcIiB0byByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgeW91ciBjdXN0b20gdGVtcGxhdGUgc291cmNlLlxuXG4gICAga28udGVtcGxhdGVTb3VyY2VzID0ge307XG5cbiAgICAvLyAtLS0tIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50IC0tLS0tXG5cbiAgICAvLyB0ZW1wbGF0ZSB0eXBlc1xuICAgIHZhciB0ZW1wbGF0ZVNjcmlwdCA9IDEsXG4gICAgICAgIHRlbXBsYXRlVGV4dEFyZWEgPSAyLFxuICAgICAgICB0ZW1wbGF0ZVRlbXBsYXRlID0gMyxcbiAgICAgICAgdGVtcGxhdGVFbGVtZW50ID0gNDtcblxuICAgIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgdGFnTmFtZUxvd2VyID0ga28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVR5cGUgPVxuICAgICAgICAgICAgICAgIHRhZ05hbWVMb3dlciA9PT0gXCJzY3JpcHRcIiA/IHRlbXBsYXRlU2NyaXB0IDpcbiAgICAgICAgICAgICAgICB0YWdOYW1lTG93ZXIgPT09IFwidGV4dGFyZWFcIiA/IHRlbXBsYXRlVGV4dEFyZWEgOlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYnJvd3NlcnMgd2l0aCBwcm9wZXIgPHRlbXBsYXRlPiBlbGVtZW50IHN1cHBvcnQsIHdoZXJlIHRoZSAuY29udGVudCBwcm9wZXJ0eSBnaXZlcyBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgICAgICAgICAgICAgdGFnTmFtZUxvd2VyID09IFwidGVtcGxhdGVcIiAmJiBlbGVtZW50LmNvbnRlbnQgJiYgZWxlbWVudC5jb250ZW50Lm5vZGVUeXBlID09PSAxMSA/IHRlbXBsYXRlVGVtcGxhdGUgOlxuICAgICAgICAgICAgICAgIHRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50LnByb3RvdHlwZVsndGV4dCddID0gZnVuY3Rpb24oLyogdmFsdWVUb1dyaXRlICovKSB7XG4gICAgICAgIHZhciBlbGVtQ29udGVudHNQcm9wZXJ0eSA9IHRoaXMudGVtcGxhdGVUeXBlID09PSB0ZW1wbGF0ZVNjcmlwdCA/IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMudGVtcGxhdGVUeXBlID09PSB0ZW1wbGF0ZVRleHRBcmVhID8gXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaW5uZXJIVE1MXCI7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudFtlbGVtQ29udGVudHNQcm9wZXJ0eV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVUb1dyaXRlID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgaWYgKGVsZW1Db250ZW50c1Byb3BlcnR5ID09PSBcImlubmVySFRNTFwiKVxuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldEh0bWwodGhpcy5kb21FbGVtZW50LCB2YWx1ZVRvV3JpdGUpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudFtlbGVtQ29udGVudHNQcm9wZXJ0eV0gPSB2YWx1ZVRvV3JpdGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRhdGFEb21EYXRhUHJlZml4ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCkgKyBcIl9cIjtcbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudC5wcm90b3R5cGVbJ2RhdGEnXSA9IGZ1bmN0aW9uKGtleSAvKiwgdmFsdWVUb1dyaXRlICovKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4ga28udXRpbHMuZG9tRGF0YS5nZXQodGhpcy5kb21FbGVtZW50LCBkYXRhRG9tRGF0YVByZWZpeCArIGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldCh0aGlzLmRvbUVsZW1lbnQsIGRhdGFEb21EYXRhUHJlZml4ICsga2V5LCBhcmd1bWVudHNbMV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciB0ZW1wbGF0ZXNEb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7XG4gICAgZnVuY3Rpb24gZ2V0VGVtcGxhdGVEb21EYXRhKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmRvbURhdGEuZ2V0KGVsZW1lbnQsIHRlbXBsYXRlc0RvbURhdGFLZXkpIHx8IHt9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRUZW1wbGF0ZURvbURhdGEoZWxlbWVudCwgZGF0YSkge1xuICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCB0ZW1wbGF0ZXNEb21EYXRhS2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudC5wcm90b3R5cGVbJ25vZGVzJ10gPSBmdW5jdGlvbigvKiB2YWx1ZVRvV3JpdGUgKi8pIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZURhdGEgPSBnZXRUZW1wbGF0ZURvbURhdGEoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgY29udGFpbmVyRGF0YSA9IHRlbXBsYXRlRGF0YS5jb250YWluZXJEYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckRhdGEgfHwgKFxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVUeXBlID09PSB0ZW1wbGF0ZVRlbXBsYXRlID8gZWxlbWVudC5jb250ZW50IDpcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlVHlwZSA9PT0gdGVtcGxhdGVFbGVtZW50ID8gZWxlbWVudCA6XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVRvV3JpdGUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBzZXRUZW1wbGF0ZURvbURhdGEoZWxlbWVudCwge2NvbnRhaW5lckRhdGE6IHZhbHVlVG9Xcml0ZX0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIC0tLS0ga28udGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlIC0tLS0tXG4gICAgLy8gQW5vbnltb3VzIHRlbXBsYXRlcyBhcmUgbm9ybWFsbHkgc2F2ZWQvcmV0cmlldmVkIGFzIERPTSBub2RlcyB0aHJvdWdoIFwibm9kZXNcIi5cbiAgICAvLyBGb3IgY29tcGF0aWJpbGl0eSwgeW91IGNhbiBhbHNvIHJlYWQgXCJ0ZXh0XCI7IGl0IHdpbGwgYmUgc2VyaWFsaXplZCBmcm9tIHRoZSBub2RlcyBvbiBkZW1hbmQuXG4gICAgLy8gV3JpdGluZyB0byBcInRleHRcIiBpcyBzdGlsbCBzdXBwb3J0ZWQsIGJ1dCB0aGVuIHRoZSB0ZW1wbGF0ZSBkYXRhIHdpbGwgbm90IGJlIGF2YWlsYWJsZSBhcyBET00gbm9kZXMuXG5cbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZS5wcm90b3R5cGUgPSBuZXcga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQoKTtcbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0ga28udGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlO1xuICAgIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZS5wcm90b3R5cGVbJ3RleHQnXSA9IGZ1bmN0aW9uKC8qIHZhbHVlVG9Xcml0ZSAqLykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVEYXRhID0gZ2V0VGVtcGxhdGVEb21EYXRhKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodGVtcGxhdGVEYXRhLnRleHREYXRhID09PSB1bmRlZmluZWQgJiYgdGVtcGxhdGVEYXRhLmNvbnRhaW5lckRhdGEpXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVEYXRhLnRleHREYXRhID0gdGVtcGxhdGVEYXRhLmNvbnRhaW5lckRhdGEuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlRGF0YS50ZXh0RGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVRvV3JpdGUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBzZXRUZW1wbGF0ZURvbURhdGEodGhpcy5kb21FbGVtZW50LCB7dGV4dERhdGE6IHZhbHVlVG9Xcml0ZX0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGtvLmV4cG9ydFN5bWJvbCgndGVtcGxhdGVTb3VyY2VzJywga28udGVtcGxhdGVTb3VyY2VzKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ3RlbXBsYXRlU291cmNlcy5kb21FbGVtZW50Jywga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgndGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlJywga28udGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlKTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGVtcGxhdGVFbmdpbmU7XG4gICAga28uc2V0VGVtcGxhdGVFbmdpbmUgPSBmdW5jdGlvbiAodGVtcGxhdGVFbmdpbmUpIHtcbiAgICAgICAgaWYgKCh0ZW1wbGF0ZUVuZ2luZSAhPSB1bmRlZmluZWQpICYmICEodGVtcGxhdGVFbmdpbmUgaW5zdGFuY2VvZiBrby50ZW1wbGF0ZUVuZ2luZSkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKTtcbiAgICAgICAgX3RlbXBsYXRlRW5naW5lID0gdGVtcGxhdGVFbmdpbmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52b2tlRm9yRWFjaE5vZGVJbkNvbnRpbnVvdXNSYW5nZShmaXJzdE5vZGUsIGxhc3ROb2RlLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIG5vZGUsIG5leHRJblF1ZXVlID0gZmlyc3ROb2RlLCBmaXJzdE91dE9mUmFuZ2VOb2RlID0ga28udmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nKGxhc3ROb2RlKTtcbiAgICAgICAgd2hpbGUgKG5leHRJblF1ZXVlICYmICgobm9kZSA9IG5leHRJblF1ZXVlKSAhPT0gZmlyc3RPdXRPZlJhbmdlTm9kZSkpIHtcbiAgICAgICAgICAgIG5leHRJblF1ZXVlID0ga28udmlydHVhbEVsZW1lbnRzLm5leHRTaWJsaW5nKG5vZGUpO1xuICAgICAgICAgICAgYWN0aW9uKG5vZGUsIG5leHRJblF1ZXVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmluZGluZ3NPbkNvbnRpbnVvdXNOb2RlQXJyYXkoY29udGludW91c05vZGVBcnJheSwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgLy8gVG8gYmUgdXNlZCBvbiBhbnkgbm9kZXMgdGhhdCBoYXZlIGJlZW4gcmVuZGVyZWQgYnkgYSB0ZW1wbGF0ZSBhbmQgaGF2ZSBiZWVuIGluc2VydGVkIGludG8gc29tZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAvLyBXYWxrcyB0aHJvdWdoIGNvbnRpbnVvdXNOb2RlQXJyYXkgKHdoaWNoICptdXN0KiBiZSBjb250aW51b3VzLCBpLmUuLCBhbiB1bmludGVycnVwdGVkIHNlcXVlbmNlIG9mIHNpYmxpbmcgbm9kZXMsIGJlY2F1c2VcbiAgICAgICAgLy8gdGhlIGFsZ29yaXRobSBmb3Igd2Fsa2luZyB0aGVtIHJlbGllcyBvbiB0aGlzKSwgYW5kIGZvciBlYWNoIHRvcC1sZXZlbCBpdGVtIGluIHRoZSB2aXJ0dWFsLWVsZW1lbnQgc2Vuc2UsXG4gICAgICAgIC8vICgxKSBEb2VzIGEgcmVndWxhciBcImFwcGx5QmluZGluZ3NcIiB0byBhc3NvY2lhdGUgYmluZGluZ0NvbnRleHQgd2l0aCB0aGlzIG5vZGUgYW5kIHRvIGFjdGl2YXRlIGFueSBub24tbWVtb2l6ZWQgYmluZGluZ3NcbiAgICAgICAgLy8gKDIpIFVubWVtb2l6ZXMgYW55IG1lbW9zIGluIHRoZSBET00gc3VidHJlZSAoZS5nLiwgdG8gYWN0aXZhdGUgYmluZGluZ3MgdGhhdCBoYWQgYmVlbiBtZW1vaXplZCBkdXJpbmcgdGVtcGxhdGUgcmV3cml0aW5nKVxuXG4gICAgICAgIGlmIChjb250aW51b3VzTm9kZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGZpcnN0Tm9kZSA9IGNvbnRpbnVvdXNOb2RlQXJyYXlbMF0sXG4gICAgICAgICAgICAgICAgbGFzdE5vZGUgPSBjb250aW51b3VzTm9kZUFycmF5W2NvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IGZpcnN0Tm9kZS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHByb3ZpZGVyID0ga28uYmluZGluZ1Byb3ZpZGVyWydpbnN0YW5jZSddLFxuICAgICAgICAgICAgICAgIHByZXByb2Nlc3NOb2RlID0gcHJvdmlkZXJbJ3ByZXByb2Nlc3NOb2RlJ107XG5cbiAgICAgICAgICAgIGlmIChwcmVwcm9jZXNzTm9kZSkge1xuICAgICAgICAgICAgICAgIGludm9rZUZvckVhY2hOb2RlSW5Db250aW51b3VzUmFuZ2UoZmlyc3ROb2RlLCBsYXN0Tm9kZSwgZnVuY3Rpb24obm9kZSwgbmV4dE5vZGVJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlUHJldmlvdXNTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdOb2RlcyA9IHByZXByb2Nlc3NOb2RlLmNhbGwocHJvdmlkZXIsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBmaXJzdE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROb2RlID0gbmV3Tm9kZXNbMF0gfHwgbmV4dE5vZGVJblJhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IGxhc3ROb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROb2RlID0gbmV3Tm9kZXNbbmV3Tm9kZXMubGVuZ3RoIC0gMV0gfHwgbm9kZVByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSBwcmVwcm9jZXNzTm9kZSBjYW4gY2hhbmdlIHRoZSBub2RlcywgaW5jbHVkaW5nIHRoZSBmaXJzdCBhbmQgbGFzdCBub2RlcywgdXBkYXRlIGNvbnRpbnVvdXNOb2RlQXJyYXkgdG8gbWF0Y2guXG4gICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0aGUgZnVsbCBzZXQsIGluY2x1ZGluZyBpbm5lciBub2RlcywgYmVjYXVzZSB0aGUgdW5tZW1vaXplIHN0ZXAgbWlnaHQgcmVtb3ZlIHRoZSBmaXJzdCBub2RlIChhbmQgc28gdGhlIHJlYWxcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBub2RlIG5lZWRzIHRvIGJlIGluIHRoZSBhcnJheSkuXG4gICAgICAgICAgICAgICAgY29udGludW91c05vZGVBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3ROb2RlKSB7IC8vIHByZXByb2Nlc3NOb2RlIG1pZ2h0IGhhdmUgcmVtb3ZlZCBhbGwgdGhlIG5vZGVzLCBpbiB3aGljaCBjYXNlIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIGRvXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0Tm9kZSA9PT0gbGFzdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludW91c05vZGVBcnJheS5wdXNoKGZpcnN0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludW91c05vZGVBcnJheS5wdXNoKGZpcnN0Tm9kZSwgbGFzdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBrby51dGlscy5maXhVcENvbnRpbnVvdXNOb2RlQXJyYXkoY29udGludW91c05vZGVBcnJheSwgcGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBOZWVkIHRvIGFwcGx5QmluZGluZ3MgKmJlZm9yZSogdW5tZW1vemlhdGlvbiwgYmVjYXVzZSB1bm1lbW9pemF0aW9uIG1pZ2h0IGludHJvZHVjZSBleHRyYSBub2RlcyAodGhhdCB3ZSBkb24ndCB3YW50IHRvIHJlLWJpbmQpXG4gICAgICAgICAgICAvLyB3aGVyZWFzIGEgcmVndWxhciBhcHBseUJpbmRpbmdzIHdvbid0IGludHJvZHVjZSBuZXcgbWVtb2l6ZWQgbm9kZXNcbiAgICAgICAgICAgIGludm9rZUZvckVhY2hOb2RlSW5Db250aW51b3VzUmFuZ2UoZmlyc3ROb2RlLCBsYXN0Tm9kZSwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDgpXG4gICAgICAgICAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3MoYmluZGluZ0NvbnRleHQsIG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnZva2VGb3JFYWNoTm9kZUluQ29udGludW91c1JhbmdlKGZpcnN0Tm9kZSwgbGFzdE5vZGUsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSB8fCBub2RlLm5vZGVUeXBlID09PSA4KVxuICAgICAgICAgICAgICAgICAgICBrby5tZW1vaXphdGlvbi51bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHMobm9kZSwgW2JpbmRpbmdDb250ZXh0XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGFueSBjaGFuZ2VzIGRvbmUgYnkgYXBwbHlCaW5kaW5ncyBvciB1bm1lbW9pemUgYXJlIHJlZmxlY3RlZCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgIGtvLnV0aWxzLmZpeFVwQ29udGludW91c05vZGVBcnJheShjb250aW51b3VzTm9kZUFycmF5LCBwYXJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEZpcnN0Tm9kZUZyb21Qb3NzaWJsZUFycmF5KG5vZGVPck5vZGVBcnJheSkge1xuICAgICAgICByZXR1cm4gbm9kZU9yTm9kZUFycmF5Lm5vZGVUeXBlID8gbm9kZU9yTm9kZUFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBub2RlT3JOb2RlQXJyYXkubGVuZ3RoID4gMCA/IG5vZGVPck5vZGVBcnJheVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlVGVtcGxhdGUodGFyZ2V0Tm9kZU9yTm9kZUFycmF5LCByZW5kZXJNb2RlLCB0ZW1wbGF0ZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBmaXJzdFRhcmdldE5vZGUgPSB0YXJnZXROb2RlT3JOb2RlQXJyYXkgJiYgZ2V0Rmlyc3ROb2RlRnJvbVBvc3NpYmxlQXJyYXkodGFyZ2V0Tm9kZU9yTm9kZUFycmF5KTtcbiAgICAgICAgdmFyIHRlbXBsYXRlRG9jdW1lbnQgPSAoZmlyc3RUYXJnZXROb2RlIHx8IHRlbXBsYXRlIHx8IHt9KS5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgdGVtcGxhdGVFbmdpbmVUb1VzZSA9IChvcHRpb25zWyd0ZW1wbGF0ZUVuZ2luZSddIHx8IF90ZW1wbGF0ZUVuZ2luZSk7XG4gICAgICAgIGtvLnRlbXBsYXRlUmV3cml0aW5nLmVuc3VyZVRlbXBsYXRlSXNSZXdyaXR0ZW4odGVtcGxhdGUsIHRlbXBsYXRlRW5naW5lVG9Vc2UsIHRlbXBsYXRlRG9jdW1lbnQpO1xuICAgICAgICB2YXIgcmVuZGVyZWROb2Rlc0FycmF5ID0gdGVtcGxhdGVFbmdpbmVUb1VzZVsncmVuZGVyVGVtcGxhdGUnXSh0ZW1wbGF0ZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIHRlbXBsYXRlRG9jdW1lbnQpO1xuXG4gICAgICAgIC8vIExvb3NlbHkgY2hlY2sgcmVzdWx0IGlzIGFuIGFycmF5IG9mIERPTSBub2Rlc1xuICAgICAgICBpZiAoKHR5cGVvZiByZW5kZXJlZE5vZGVzQXJyYXkubGVuZ3RoICE9IFwibnVtYmVyXCIpIHx8IChyZW5kZXJlZE5vZGVzQXJyYXkubGVuZ3RoID4gMCAmJiB0eXBlb2YgcmVuZGVyZWROb2Rlc0FycmF5WzBdLm5vZGVUeXBlICE9IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGxhdGUgZW5naW5lIG11c3QgcmV0dXJuIGFuIGFycmF5IG9mIERPTSBub2Rlc1wiKTtcblxuICAgICAgICB2YXIgaGF2ZUFkZGVkTm9kZXNUb1BhcmVudCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKHJlbmRlck1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJyZXBsYWNlQ2hpbGRyZW5cIjpcbiAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuKHRhcmdldE5vZGVPck5vZGVBcnJheSwgcmVuZGVyZWROb2Rlc0FycmF5KTtcbiAgICAgICAgICAgICAgICBoYXZlQWRkZWROb2Rlc1RvUGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXBsYWNlTm9kZVwiOlxuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnJlcGxhY2VEb21Ob2Rlcyh0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlcmVkTm9kZXNBcnJheSk7XG4gICAgICAgICAgICAgICAgaGF2ZUFkZGVkTm9kZXNUb1BhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWdub3JlVGFyZ2V0Tm9kZVwiOiBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biByZW5kZXJNb2RlOiBcIiArIHJlbmRlck1vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhdmVBZGRlZE5vZGVzVG9QYXJlbnQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlQmluZGluZ3NPbkNvbnRpbnVvdXNOb2RlQXJyYXkocmVuZGVyZWROb2Rlc0FycmF5LCBiaW5kaW5nQ29udGV4dCk7XG4gICAgICAgICAgICBpZiAob3B0aW9uc1snYWZ0ZXJSZW5kZXInXSlcbiAgICAgICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShvcHRpb25zWydhZnRlclJlbmRlciddLCBudWxsLCBbcmVuZGVyZWROb2Rlc0FycmF5LCBiaW5kaW5nQ29udGV4dFsnJGRhdGEnXV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkTm9kZXNBcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlVGVtcGxhdGVOYW1lKHRlbXBsYXRlLCBkYXRhLCBjb250ZXh0KSB7XG4gICAgICAgIC8vIFRoZSB0ZW1wbGF0ZSBjYW4gYmUgc3BlY2lmaWVkIGFzOlxuICAgICAgICBpZiAoa28uaXNPYnNlcnZhYmxlKHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgLy8gMS4gQW4gb2JzZXJ2YWJsZSwgd2l0aCBzdHJpbmcgdmFsdWVcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gMi4gQSBmdW5jdGlvbiBvZiAoZGF0YSwgY29udGV4dCkgcmV0dXJuaW5nIGEgc3RyaW5nXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUoZGF0YSwgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAzLiBBIHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga28ucmVuZGVyVGVtcGxhdGUgPSBmdW5jdGlvbiAodGVtcGxhdGUsIGRhdGFPckJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCB0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlck1vZGUpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICgob3B0aW9uc1sndGVtcGxhdGVFbmdpbmUnXSB8fCBfdGVtcGxhdGVFbmdpbmUpID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNldCBhIHRlbXBsYXRlIGVuZ2luZSBiZWZvcmUgY2FsbGluZyByZW5kZXJUZW1wbGF0ZVwiKTtcbiAgICAgICAgcmVuZGVyTW9kZSA9IHJlbmRlck1vZGUgfHwgXCJyZXBsYWNlQ2hpbGRyZW5cIjtcblxuICAgICAgICBpZiAodGFyZ2V0Tm9kZU9yTm9kZUFycmF5KSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RUYXJnZXROb2RlID0gZ2V0Rmlyc3ROb2RlRnJvbVBvc3NpYmxlQXJyYXkodGFyZ2V0Tm9kZU9yTm9kZUFycmF5KTtcblxuICAgICAgICAgICAgdmFyIHdoZW5Ub0Rpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoIWZpcnN0VGFyZ2V0Tm9kZSkgfHwgIWtvLnV0aWxzLmRvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudChmaXJzdFRhcmdldE5vZGUpOyB9OyAvLyBQYXNzaXZlIGRpc3Bvc2FsIChvbiBuZXh0IGV2YWx1YXRpb24pXG4gICAgICAgICAgICB2YXIgYWN0aXZlbHlEaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgPSAoZmlyc3RUYXJnZXROb2RlICYmIHJlbmRlck1vZGUgPT0gXCJyZXBsYWNlTm9kZVwiKSA/IGZpcnN0VGFyZ2V0Tm9kZS5wYXJlbnROb2RlIDogZmlyc3RUYXJnZXROb2RlO1xuXG4gICAgICAgICAgICByZXR1cm4ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSggLy8gU28gdGhlIERPTSBpcyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgd2hlbiBhbnkgZGVwZW5kZW5jeSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgd2UndmUgZ290IGEgcHJvcGVyIGJpbmRpbmcgY29udGV4dCB0byB3b3JrIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJpbmRpbmdDb250ZXh0ID0gKGRhdGFPckJpbmRpbmdDb250ZXh0ICYmIChkYXRhT3JCaW5kaW5nQ29udGV4dCBpbnN0YW5jZW9mIGtvLmJpbmRpbmdDb250ZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YU9yQmluZGluZ0NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IGtvLmJpbmRpbmdDb250ZXh0KGRhdGFPckJpbmRpbmdDb250ZXh0LCBudWxsLCBudWxsLCBudWxsLCB7IFwiZXhwb3J0RGVwZW5kZW5jaWVzXCI6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlTmFtZSA9IHJlc29sdmVUZW1wbGF0ZU5hbWUodGVtcGxhdGUsIGJpbmRpbmdDb250ZXh0WyckZGF0YSddLCBiaW5kaW5nQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlZE5vZGVzQXJyYXkgPSBleGVjdXRlVGVtcGxhdGUodGFyZ2V0Tm9kZU9yTm9kZUFycmF5LCByZW5kZXJNb2RlLCB0ZW1wbGF0ZU5hbWUsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVuZGVyTW9kZSA9PSBcInJlcGxhY2VOb2RlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGVPck5vZGVBcnJheSA9IHJlbmRlcmVkTm9kZXNBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VGFyZ2V0Tm9kZSA9IGdldEZpcnN0Tm9kZUZyb21Qb3NzaWJsZUFycmF5KHRhcmdldE5vZGVPck5vZGVBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgeyBkaXNwb3NlV2hlbjogd2hlblRvRGlzcG9zZSwgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBhY3RpdmVseURpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgeWV0IGhhdmUgYSBET00gbm9kZSB0byBldmFsdWF0ZSwgc28gdXNlIGEgbWVtbyBhbmQgcmVuZGVyIHRoZSB0ZW1wbGF0ZSBsYXRlciB3aGVuIHRoZXJlIGlzIGEgRE9NIG5vZGVcbiAgICAgICAgICAgIHJldHVybiBrby5tZW1vaXphdGlvbi5tZW1vaXplKGZ1bmN0aW9uIChkb21Ob2RlKSB7XG4gICAgICAgICAgICAgICAga28ucmVuZGVyVGVtcGxhdGUodGVtcGxhdGUsIGRhdGFPckJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCBkb21Ob2RlLCBcInJlcGxhY2VOb2RlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAga28ucmVuZGVyVGVtcGxhdGVGb3JFYWNoID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBhcnJheU9yT2JzZXJ2YWJsZUFycmF5LCBvcHRpb25zLCB0YXJnZXROb2RlLCBwYXJlbnRCaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAvLyBTaW5jZSBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nIGFsd2F5cyBjYWxscyBleGVjdXRlVGVtcGxhdGVGb3JBcnJheUl0ZW0gYW5kIHRoZW5cbiAgICAgICAgLy8gYWN0aXZhdGVCaW5kaW5nc0NhbGxiYWNrIGZvciBhZGRlZCBpdGVtcywgd2UgY2FuIHN0b3JlIHRoZSBiaW5kaW5nIGNvbnRleHQgaW4gdGhlIGZvcm1lciB0byB1c2UgaW4gdGhlIGxhdHRlci5cbiAgICAgICAgdmFyIGFycmF5SXRlbUNvbnRleHQ7XG5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nIHRvIGdldCB0aGUgbm9kZXMgdG8gYWRkIHRvIHRhcmdldE5vZGVcbiAgICAgICAgdmFyIGV4ZWN1dGVUZW1wbGF0ZUZvckFycmF5SXRlbSA9IGZ1bmN0aW9uIChhcnJheVZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgLy8gU3VwcG9ydCBzZWxlY3RpbmcgdGVtcGxhdGUgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGF0YSBiZWluZyByZW5kZXJlZFxuICAgICAgICAgICAgYXJyYXlJdGVtQ29udGV4dCA9IHBhcmVudEJpbmRpbmdDb250ZXh0WydjcmVhdGVDaGlsZENvbnRleHQnXShhcnJheVZhbHVlLCBvcHRpb25zWydhcyddLCBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dFsnJGluZGV4J10gPSBpbmRleDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVOYW1lID0gcmVzb2x2ZVRlbXBsYXRlTmFtZSh0ZW1wbGF0ZSwgYXJyYXlWYWx1ZSwgYXJyYXlJdGVtQ29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVRlbXBsYXRlKG51bGwsIFwiaWdub3JlVGFyZ2V0Tm9kZVwiLCB0ZW1wbGF0ZU5hbWUsIGFycmF5SXRlbUNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nIGhhcyBhZGRlZCBub2RlcyB0byB0YXJnZXROb2RlXG4gICAgICAgIHZhciBhY3RpdmF0ZUJpbmRpbmdzQ2FsbGJhY2sgPSBmdW5jdGlvbihhcnJheVZhbHVlLCBhZGRlZE5vZGVzQXJyYXksIGluZGV4KSB7XG4gICAgICAgICAgICBhY3RpdmF0ZUJpbmRpbmdzT25Db250aW51b3VzTm9kZUFycmF5KGFkZGVkTm9kZXNBcnJheSwgYXJyYXlJdGVtQ29udGV4dCk7XG4gICAgICAgICAgICBpZiAob3B0aW9uc1snYWZ0ZXJSZW5kZXInXSlcbiAgICAgICAgICAgICAgICBvcHRpb25zWydhZnRlclJlbmRlciddKGFkZGVkTm9kZXNBcnJheSwgYXJyYXlWYWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIHJlbGVhc2UgdGhlIFwiY2FjaGVcIiB2YXJpYWJsZSwgc28gdGhhdCBpdCBjYW4gYmUgY29sbGVjdGVkIGJ5XG4gICAgICAgICAgICAvLyB0aGUgR0Mgd2hlbiBpdHMgdmFsdWUgaXNuJ3QgdXNlZCBmcm9tIHdpdGhpbiB0aGUgYmluZGluZ3MgYW55bW9yZS5cbiAgICAgICAgICAgIGFycmF5SXRlbUNvbnRleHQgPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBrby5kZXBlbmRlbnRPYnNlcnZhYmxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1bndyYXBwZWRBcnJheSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYXJyYXlPck9ic2VydmFibGVBcnJheSkgfHwgW107XG4gICAgICAgICAgICBpZiAodHlwZW9mIHVud3JhcHBlZEFycmF5Lmxlbmd0aCA9PSBcInVuZGVmaW5lZFwiKSAvLyBDb2VyY2Ugc2luZ2xlIHZhbHVlIGludG8gYXJyYXlcbiAgICAgICAgICAgICAgICB1bndyYXBwZWRBcnJheSA9IFt1bndyYXBwZWRBcnJheV07XG5cbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgYW55IGVudHJpZXMgbWFya2VkIGFzIGRlc3Ryb3llZFxuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQXJyYXkgPSBrby51dGlscy5hcnJheUZpbHRlcih1bndyYXBwZWRBcnJheSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zWydpbmNsdWRlRGVzdHJveWVkJ10gfHwgaXRlbSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0gPT09IG51bGwgfHwgIWtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoaXRlbVsnX2Rlc3Ryb3knXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nLCBpZ25vcmluZyBhbnkgb2JzZXJ2YWJsZXMgdW53cmFwcGVkIHdpdGhpbiAobW9zdCBsaWtlbHkgZnJvbSBhIGNhbGxiYWNrIGZ1bmN0aW9uKS5cbiAgICAgICAgICAgIC8vIElmIHRoZSBhcnJheSBpdGVtcyBhcmUgb2JzZXJ2YWJsZXMsIHRob3VnaCwgdGhleSB3aWxsIGJlIHVud3JhcHBlZCBpbiBleGVjdXRlVGVtcGxhdGVGb3JBcnJheUl0ZW0gYW5kIG1hbmFnZWQgd2l0aGluIHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcuXG4gICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShrby51dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nLCBudWxsLCBbdGFyZ2V0Tm9kZSwgZmlsdGVyZWRBcnJheSwgZXhlY3V0ZVRlbXBsYXRlRm9yQXJyYXlJdGVtLCBvcHRpb25zLCBhY3RpdmF0ZUJpbmRpbmdzQ2FsbGJhY2tdKTtcblxuICAgICAgICB9LCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogdGFyZ2V0Tm9kZSB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHRlbXBsYXRlQ29tcHV0ZWREb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCk7XG4gICAgZnVuY3Rpb24gZGlzcG9zZU9sZENvbXB1dGVkQW5kU3RvcmVOZXdPbmUoZWxlbWVudCwgbmV3Q29tcHV0ZWQpIHtcbiAgICAgICAgdmFyIG9sZENvbXB1dGVkID0ga28udXRpbHMuZG9tRGF0YS5nZXQoZWxlbWVudCwgdGVtcGxhdGVDb21wdXRlZERvbURhdGFLZXkpO1xuICAgICAgICBpZiAob2xkQ29tcHV0ZWQgJiYgKHR5cGVvZihvbGRDb21wdXRlZC5kaXNwb3NlKSA9PSAnZnVuY3Rpb24nKSlcbiAgICAgICAgICAgIG9sZENvbXB1dGVkLmRpc3Bvc2UoKTtcbiAgICAgICAga28udXRpbHMuZG9tRGF0YS5zZXQoZWxlbWVudCwgdGVtcGxhdGVDb21wdXRlZERvbURhdGFLZXksIChuZXdDb21wdXRlZCAmJiBuZXdDb21wdXRlZC5pc0FjdGl2ZSgpKSA/IG5ld0NvbXB1dGVkIDogdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBrby5iaW5kaW5nSGFuZGxlcnNbJ3RlbXBsYXRlJ10gPSB7XG4gICAgICAgICdpbml0JzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICAgICAgLy8gU3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzXG4gICAgICAgICAgICB2YXIgYmluZGluZ1ZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiaW5kaW5nVmFsdWUgPT0gXCJzdHJpbmdcIiB8fCBiaW5kaW5nVmFsdWVbJ25hbWUnXSkge1xuICAgICAgICAgICAgICAgIC8vIEl0J3MgYSBuYW1lZCB0ZW1wbGF0ZSAtIGNsZWFyIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJ25vZGVzJyBpbiBiaW5kaW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSd2ZSBiZWVuIGdpdmVuIGFuIGFycmF5IG9mIERPTSBub2Rlcy4gU2F2ZSB0aGVtIGFzIHRoZSB0ZW1wbGF0ZSBzb3VyY2UuXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgbm8ga25vd24gdXNlIGNhc2UgZm9yIHRoZSBub2RlIGFycmF5IGJlaW5nIGFuIG9ic2VydmFibGUgYXJyYXkgKGlmIHRoZSBvdXRwdXRcbiAgICAgICAgICAgICAgICAvLyB2YXJpZXMsIHB1dCB0aGF0IGJlaGF2aW9yICppbnRvKiB5b3VyIHRlbXBsYXRlIC0gdGhhdCdzIHdoYXQgdGVtcGxhdGVzIGFyZSBmb3IpLCBhbmRcbiAgICAgICAgICAgICAgICAvLyB0aGUgaW1wbGVtZW50YXRpb24gd291bGQgYmUgYSBtZXNzLCBzbyBhc3NlcnQgdGhhdCBpdCdzIG5vdCBvYnNlcnZhYmxlLlxuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IGJpbmRpbmdWYWx1ZVsnbm9kZXMnXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpZiAoa28uaXNPYnNlcnZhYmxlKG5vZGVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcIm5vZGVzXCIgb3B0aW9uIG11c3QgYmUgYSBwbGFpbiwgbm9uLW9ic2VydmFibGUgYXJyYXkuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBrby51dGlscy5tb3ZlQ2xlYW5lZE5vZGVzVG9Db250YWluZXJFbGVtZW50KG5vZGVzKTsgLy8gVGhpcyBhbHNvIHJlbW92ZXMgdGhlIG5vZGVzIGZyb20gdGhlaXIgY3VycmVudCBwYXJlbnRcbiAgICAgICAgICAgICAgICBuZXcga28udGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlKGVsZW1lbnQpWydub2RlcyddKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEl0J3MgYW4gYW5vbnltb3VzIHRlbXBsYXRlIC0gc3RvcmUgdGhlIGVsZW1lbnQgY29udGVudHMsIHRoZW4gY2xlYXIgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVOb2RlcyA9IGtvLnZpcnR1YWxFbGVtZW50cy5jaGlsZE5vZGVzKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBrby51dGlscy5tb3ZlQ2xlYW5lZE5vZGVzVG9Db250YWluZXJFbGVtZW50KHRlbXBsYXRlTm9kZXMpOyAvLyBUaGlzIGFsc28gcmVtb3ZlcyB0aGUgbm9kZXMgZnJvbSB0aGVpciBjdXJyZW50IHBhcmVudFxuICAgICAgICAgICAgICAgIG5ldyBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUoZWxlbWVudClbJ25vZGVzJ10oY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7ICdjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyc6IHRydWUgfTtcbiAgICAgICAgfSxcbiAgICAgICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncywgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVBY2Nlc3NvcigpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlKSxcbiAgICAgICAgICAgICAgICBzaG91bGREaXNwbGF5ID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbXB1dGVkID0gbnVsbCxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBvcHRpb25zWyduYW1lJ107XG5cbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IFwiaWZcIi9cImlmbm90XCIgY29uZGl0aW9uc1xuICAgICAgICAgICAgICAgIGlmICgnaWYnIGluIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZERpc3BsYXkgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG9wdGlvbnNbJ2lmJ10pO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGREaXNwbGF5ICYmICdpZm5vdCcgaW4gb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGlzcGxheSA9ICFrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG9wdGlvbnNbJ2lmbm90J10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJ2ZvcmVhY2gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgb25jZSBmb3IgZWFjaCBkYXRhIHBvaW50ICh0cmVhdGluZyBkYXRhIHNldCBhcyBlbXB0eSBpZiBzaG91bGREaXNwbGF5PT1mYWxzZSlcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUFycmF5ID0gKHNob3VsZERpc3BsYXkgJiYgb3B0aW9uc1snZm9yZWFjaCddKSB8fCBbXTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbXB1dGVkID0ga28ucmVuZGVyVGVtcGxhdGVGb3JFYWNoKHRlbXBsYXRlTmFtZSB8fCBlbGVtZW50LCBkYXRhQXJyYXksIG9wdGlvbnMsIGVsZW1lbnQsIGJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNob3VsZERpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgb25jZSBmb3IgdGhpcyBzaW5nbGUgZGF0YSBwb2ludCAob3IgdXNlIHRoZSB2aWV3TW9kZWwgaWYgbm8gZGF0YSB3YXMgcHJvdmlkZWQpXG4gICAgICAgICAgICAgICAgdmFyIGlubmVyQmluZGluZ0NvbnRleHQgPSAoJ2RhdGEnIGluIG9wdGlvbnMpID9cbiAgICAgICAgICAgICAgICAgICAgYmluZGluZ0NvbnRleHQuY3JlYXRlU3RhdGljQ2hpbGRDb250ZXh0KG9wdGlvbnNbJ2RhdGEnXSwgb3B0aW9uc1snYXMnXSkgOiAgLy8gR2l2ZW4gYW4gZXhwbGl0aXQgJ2RhdGEnIHZhbHVlLCB3ZSBjcmVhdGUgYSBjaGlsZCBiaW5kaW5nIGNvbnRleHQgZm9yIGl0XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmdDb250ZXh0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2l2ZW4gbm8gZXhwbGljaXQgJ2RhdGEnIHZhbHVlLCB3ZSByZXRhaW4gdGhlIHNhbWUgYmluZGluZyBjb250ZXh0XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDb21wdXRlZCA9IGtvLnJlbmRlclRlbXBsYXRlKHRlbXBsYXRlTmFtZSB8fCBlbGVtZW50LCBpbm5lckJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSXQgb25seSBtYWtlcyBzZW5zZSB0byBoYXZlIGEgc2luZ2xlIHRlbXBsYXRlIGNvbXB1dGVkIHBlciBlbGVtZW50IChvdGhlcndpc2Ugd2hpY2ggb25lIHNob3VsZCBoYXZlIGl0cyBvdXRwdXQgZGlzcGxheWVkPylcbiAgICAgICAgICAgIGRpc3Bvc2VPbGRDb21wdXRlZEFuZFN0b3JlTmV3T25lKGVsZW1lbnQsIHRlbXBsYXRlQ29tcHV0ZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFub255bW91cyB0ZW1wbGF0ZXMgY2FuJ3QgYmUgcmV3cml0dGVuLiBHaXZlIGEgbmljZSBlcnJvciBtZXNzYWdlIGlmIHlvdSB0cnkgdG8gZG8gaXQuXG4gICAga28uZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNbJ3RlbXBsYXRlJ10gPSBmdW5jdGlvbihiaW5kaW5nVmFsdWUpIHtcbiAgICAgICAgdmFyIHBhcnNlZEJpbmRpbmdWYWx1ZSA9IGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsKGJpbmRpbmdWYWx1ZSk7XG5cbiAgICAgICAgaWYgKChwYXJzZWRCaW5kaW5nVmFsdWUubGVuZ3RoID09IDEpICYmIHBhcnNlZEJpbmRpbmdWYWx1ZVswXVsndW5rbm93biddKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIEl0IGxvb2tzIGxpa2UgYSBzdHJpbmcgbGl0ZXJhbCwgbm90IGFuIG9iamVjdCBsaXRlcmFsLCBzbyB0cmVhdCBpdCBhcyBhIG5hbWVkIHRlbXBsYXRlICh3aGljaCBpcyBhbGxvd2VkIGZvciByZXdyaXRpbmcpXG5cbiAgICAgICAgaWYgKGtvLmV4cHJlc3Npb25SZXdyaXRpbmcua2V5VmFsdWVBcnJheUNvbnRhaW5zS2V5KHBhcnNlZEJpbmRpbmdWYWx1ZSwgXCJuYW1lXCIpKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIE5hbWVkIHRlbXBsYXRlcyBjYW4gYmUgcmV3cml0dGVuLCBzbyByZXR1cm4gXCJubyBlcnJvclwiXG4gICAgICAgIHJldHVybiBcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgYW5vbnltb3VzIHRlbXBsYXRlcyBuZXN0ZWQgd2l0aGluIGl0cyB0ZW1wbGF0ZXNcIjtcbiAgICB9O1xuXG4gICAga28udmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1sndGVtcGxhdGUnXSA9IHRydWU7XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3NldFRlbXBsYXRlRW5naW5lJywga28uc2V0VGVtcGxhdGVFbmdpbmUpO1xua28uZXhwb3J0U3ltYm9sKCdyZW5kZXJUZW1wbGF0ZScsIGtvLnJlbmRlclRlbXBsYXRlKTtcbi8vIEdvIHRocm91Z2ggdGhlIGl0ZW1zIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIGFuZCBkZWxldGVkIGFuZCB0cnkgdG8gZmluZCBtYXRjaGVzIGJldHdlZW4gdGhlbS5cbmtvLnV0aWxzLmZpbmRNb3Zlc0luQXJyYXlDb21wYXJpc29uID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCBsaW1pdEZhaWxlZENvbXBhcmVzKSB7XG4gICAgaWYgKGxlZnQubGVuZ3RoICYmIHJpZ2h0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgZmFpbGVkQ29tcGFyZXMsIGwsIHIsIGxlZnRJdGVtLCByaWdodEl0ZW07XG4gICAgICAgIGZvciAoZmFpbGVkQ29tcGFyZXMgPSBsID0gMDsgKCFsaW1pdEZhaWxlZENvbXBhcmVzIHx8IGZhaWxlZENvbXBhcmVzIDwgbGltaXRGYWlsZWRDb21wYXJlcykgJiYgKGxlZnRJdGVtID0gbGVmdFtsXSk7ICsrbCkge1xuICAgICAgICAgICAgZm9yIChyID0gMDsgcmlnaHRJdGVtID0gcmlnaHRbcl07ICsrcikge1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0SXRlbVsndmFsdWUnXSA9PT0gcmlnaHRJdGVtWyd2YWx1ZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRJdGVtWydtb3ZlZCddID0gcmlnaHRJdGVtWydpbmRleCddO1xuICAgICAgICAgICAgICAgICAgICByaWdodEl0ZW1bJ21vdmVkJ10gPSBsZWZ0SXRlbVsnaW5kZXgnXTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQuc3BsaWNlKHIsIDEpOyAgICAgICAgIC8vIFRoaXMgaXRlbSBpcyBtYXJrZWQgYXMgbW92ZWQ7IHNvIHJlbW92ZSBpdCBmcm9tIHJpZ2h0IGxpc3RcbiAgICAgICAgICAgICAgICAgICAgZmFpbGVkQ29tcGFyZXMgPSByID0gMDsgICAgIC8vIFJlc2V0IGZhaWxlZCBjb21wYXJlcyBjb3VudCBiZWNhdXNlIHdlJ3JlIGNoZWNraW5nIGZvciBjb25zZWN1dGl2ZSBmYWlsdXJlc1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmYWlsZWRDb21wYXJlcyArPSByO1xuICAgICAgICB9XG4gICAgfVxufTtcblxua28udXRpbHMuY29tcGFyZUFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1c05vdEluT2xkID0gJ2FkZGVkJywgc3RhdHVzTm90SW5OZXcgPSAnZGVsZXRlZCc7XG5cbiAgICAvLyBTaW1wbGUgY2FsY3VsYXRpb24gYmFzZWQgb24gTGV2ZW5zaHRlaW4gZGlzdGFuY2UuXG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5cyhvbGRBcnJheSwgbmV3QXJyYXksIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGlmIHRoZSB0aGlyZCBhcmcgaXMgYWN0dWFsbHkgYSBib29sLCBpbnRlcnByZXRcbiAgICAgICAgLy8gaXQgYXMgdGhlIG9sZCBwYXJhbWV0ZXIgJ2RvbnRMaW1pdE1vdmVzJy4gTmV3ZXIgY29kZSBzaG91bGQgdXNlIHsgZG9udExpbWl0TW92ZXM6IHRydWUgfS5cbiAgICAgICAgb3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSA/IHsgJ2RvbnRMaW1pdE1vdmVzJzogb3B0aW9ucyB9IDogKG9wdGlvbnMgfHwge30pO1xuICAgICAgICBvbGRBcnJheSA9IG9sZEFycmF5IHx8IFtdO1xuICAgICAgICBuZXdBcnJheSA9IG5ld0FycmF5IHx8IFtdO1xuXG4gICAgICAgIGlmIChvbGRBcnJheS5sZW5ndGggPCBuZXdBcnJheS5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZVNtYWxsQXJyYXlUb0JpZ0FycmF5KG9sZEFycmF5LCBuZXdBcnJheSwgc3RhdHVzTm90SW5PbGQsIHN0YXR1c05vdEluTmV3LCBvcHRpb25zKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVTbWFsbEFycmF5VG9CaWdBcnJheShuZXdBcnJheSwgb2xkQXJyYXksIHN0YXR1c05vdEluTmV3LCBzdGF0dXNOb3RJbk9sZCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGFyZVNtYWxsQXJyYXlUb0JpZ0FycmF5KHNtbEFycmF5LCBiaWdBcnJheSwgc3RhdHVzTm90SW5TbWwsIHN0YXR1c05vdEluQmlnLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBteU1pbiA9IE1hdGgubWluLFxuICAgICAgICAgICAgbXlNYXggPSBNYXRoLm1heCxcbiAgICAgICAgICAgIGVkaXREaXN0YW5jZU1hdHJpeCA9IFtdLFxuICAgICAgICAgICAgc21sSW5kZXgsIHNtbEluZGV4TWF4ID0gc21sQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgYmlnSW5kZXgsIGJpZ0luZGV4TWF4ID0gYmlnQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgY29tcGFyZVJhbmdlID0gKGJpZ0luZGV4TWF4IC0gc21sSW5kZXhNYXgpIHx8IDEsXG4gICAgICAgICAgICBtYXhEaXN0YW5jZSA9IHNtbEluZGV4TWF4ICsgYmlnSW5kZXhNYXggKyAxLFxuICAgICAgICAgICAgdGhpc1JvdywgbGFzdFJvdyxcbiAgICAgICAgICAgIGJpZ0luZGV4TWF4Rm9yUm93LCBiaWdJbmRleE1pbkZvclJvdztcblxuICAgICAgICBmb3IgKHNtbEluZGV4ID0gMDsgc21sSW5kZXggPD0gc21sSW5kZXhNYXg7IHNtbEluZGV4KyspIHtcbiAgICAgICAgICAgIGxhc3RSb3cgPSB0aGlzUm93O1xuICAgICAgICAgICAgZWRpdERpc3RhbmNlTWF0cml4LnB1c2godGhpc1JvdyA9IFtdKTtcbiAgICAgICAgICAgIGJpZ0luZGV4TWF4Rm9yUm93ID0gbXlNaW4oYmlnSW5kZXhNYXgsIHNtbEluZGV4ICsgY29tcGFyZVJhbmdlKTtcbiAgICAgICAgICAgIGJpZ0luZGV4TWluRm9yUm93ID0gbXlNYXgoMCwgc21sSW5kZXggLSAxKTtcbiAgICAgICAgICAgIGZvciAoYmlnSW5kZXggPSBiaWdJbmRleE1pbkZvclJvdzsgYmlnSW5kZXggPD0gYmlnSW5kZXhNYXhGb3JSb3c7IGJpZ0luZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJpZ0luZGV4KVxuICAgICAgICAgICAgICAgICAgICB0aGlzUm93W2JpZ0luZGV4XSA9IHNtbEluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghc21sSW5kZXgpICAvLyBUb3Agcm93IC0gdHJhbnNmb3JtIGVtcHR5IGFycmF5IGludG8gbmV3IGFycmF5IHZpYSBhZGRpdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgdGhpc1Jvd1tiaWdJbmRleF0gPSBiaWdJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc21sQXJyYXlbc21sSW5kZXggLSAxXSA9PT0gYmlnQXJyYXlbYmlnSW5kZXggLSAxXSlcbiAgICAgICAgICAgICAgICAgICAgdGhpc1Jvd1tiaWdJbmRleF0gPSBsYXN0Um93W2JpZ0luZGV4IC0gMV07ICAgICAgICAgICAgICAgICAgLy8gY29weSB2YWx1ZSAobm8gZWRpdClcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vcnRoRGlzdGFuY2UgPSBsYXN0Um93W2JpZ0luZGV4XSB8fCBtYXhEaXN0YW5jZTsgICAgICAgLy8gbm90IGluIGJpZyAoZGVsZXRpb24pXG4gICAgICAgICAgICAgICAgICAgIHZhciB3ZXN0RGlzdGFuY2UgPSB0aGlzUm93W2JpZ0luZGV4IC0gMV0gfHwgbWF4RGlzdGFuY2U7ICAgIC8vIG5vdCBpbiBzbWFsbCAoYWRkaXRpb24pXG4gICAgICAgICAgICAgICAgICAgIHRoaXNSb3dbYmlnSW5kZXhdID0gbXlNaW4obm9ydGhEaXN0YW5jZSwgd2VzdERpc3RhbmNlKSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVkaXRTY3JpcHQgPSBbXSwgbWVNaW51c09uZSwgbm90SW5TbWwgPSBbXSwgbm90SW5CaWcgPSBbXTtcbiAgICAgICAgZm9yIChzbWxJbmRleCA9IHNtbEluZGV4TWF4LCBiaWdJbmRleCA9IGJpZ0luZGV4TWF4OyBzbWxJbmRleCB8fCBiaWdJbmRleDspIHtcbiAgICAgICAgICAgIG1lTWludXNPbmUgPSBlZGl0RGlzdGFuY2VNYXRyaXhbc21sSW5kZXhdW2JpZ0luZGV4XSAtIDE7XG4gICAgICAgICAgICBpZiAoYmlnSW5kZXggJiYgbWVNaW51c09uZSA9PT0gZWRpdERpc3RhbmNlTWF0cml4W3NtbEluZGV4XVtiaWdJbmRleC0xXSkge1xuICAgICAgICAgICAgICAgIG5vdEluU21sLnB1c2goZWRpdFNjcmlwdFtlZGl0U2NyaXB0Lmxlbmd0aF0gPSB7ICAgICAvLyBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJzogc3RhdHVzTm90SW5TbWwsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGJpZ0FycmF5Wy0tYmlnSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiBiaWdJbmRleCB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc21sSW5kZXggJiYgbWVNaW51c09uZSA9PT0gZWRpdERpc3RhbmNlTWF0cml4W3NtbEluZGV4IC0gMV1bYmlnSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgbm90SW5CaWcucHVzaChlZGl0U2NyaXB0W2VkaXRTY3JpcHQubGVuZ3RoXSA9IHsgICAgIC8vIGRlbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cyc6IHN0YXR1c05vdEluQmlnLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzbWxBcnJheVstLXNtbEluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4Jzogc21sSW5kZXggfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC0tYmlnSW5kZXg7XG4gICAgICAgICAgICAgICAgLS1zbWxJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnNbJ3NwYXJzZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRTY3JpcHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJzogXCJyZXRhaW5lZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogYmlnQXJyYXlbYmlnSW5kZXhdIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBhIGxpbWl0IG9uIHRoZSBudW1iZXIgb2YgY29uc2VjdXRpdmUgbm9uLW1hdGNoaW5nIGNvbXBhcmlzb25zOyBoYXZpbmcgaXQgYSBtdWx0aXBsZSBvZlxuICAgICAgICAvLyBzbWxJbmRleE1heCBrZWVwcyB0aGUgdGltZSBjb21wbGV4aXR5IG9mIHRoaXMgYWxnb3JpdGhtIGxpbmVhci5cbiAgICAgICAga28udXRpbHMuZmluZE1vdmVzSW5BcnJheUNvbXBhcmlzb24obm90SW5CaWcsIG5vdEluU21sLCAhb3B0aW9uc1snZG9udExpbWl0TW92ZXMnXSAmJiBzbWxJbmRleE1heCAqIDEwKTtcblxuICAgICAgICByZXR1cm4gZWRpdFNjcmlwdC5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVBcnJheXM7XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmNvbXBhcmVBcnJheXMnLCBrby51dGlscy5jb21wYXJlQXJyYXlzKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgLy8gT2JqZWN0aXZlOlxuICAgIC8vICogR2l2ZW4gYW4gaW5wdXQgYXJyYXksIGEgY29udGFpbmVyIERPTSBub2RlLCBhbmQgYSBmdW5jdGlvbiBmcm9tIGFycmF5IGVsZW1lbnRzIHRvIGFycmF5cyBvZiBET00gbm9kZXMsXG4gICAgLy8gICBtYXAgdGhlIGFycmF5IGVsZW1lbnRzIHRvIGFycmF5cyBvZiBET00gbm9kZXMsIGNvbmNhdGVuYXRlIHRvZ2V0aGVyIGFsbCB0aGVzZSBhcnJheXMsIGFuZCB1c2UgdGhlbSB0byBwb3B1bGF0ZSB0aGUgY29udGFpbmVyIERPTSBub2RlXG4gICAgLy8gKiBOZXh0IHRpbWUgd2UncmUgZ2l2ZW4gdGhlIHNhbWUgY29tYmluYXRpb24gb2YgdGhpbmdzICh3aXRoIHRoZSBhcnJheSBwb3NzaWJseSBoYXZpbmcgbXV0YXRlZCksIHVwZGF0ZSB0aGUgY29udGFpbmVyIERPTSBub2RlXG4gICAgLy8gICBzbyB0aGF0IGl0cyBjaGlsZHJlbiBpcyBhZ2FpbiB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGUgbWFwcGluZ3Mgb2YgdGhlIGFycmF5IGVsZW1lbnRzLCBidXQgZG9uJ3QgcmUtbWFwIGFueSBhcnJheSBlbGVtZW50cyB0aGF0IHdlXG4gICAgLy8gICBwcmV2aW91c2x5IG1hcHBlZCAtIHJldGFpbiB0aG9zZSBub2RlcywgYW5kIGp1c3QgaW5zZXJ0L2RlbGV0ZSBvdGhlciBvbmVzXG5cbiAgICAvLyBcImNhbGxiYWNrQWZ0ZXJBZGRpbmdOb2Rlc1wiIHdpbGwgYmUgaW52b2tlZCBhZnRlciBhbnkgXCJtYXBwaW5nXCItZ2VuZXJhdGVkIG5vZGVzIGFyZSBpbnNlcnRlZCBpbnRvIHRoZSBjb250YWluZXIgbm9kZVxuICAgIC8vIFlvdSBjYW4gdXNlIHRoaXMsIGZvciBleGFtcGxlLCB0byBhY3RpdmF0ZSBiaW5kaW5ncyBvbiB0aG9zZSBub2Rlcy5cblxuICAgIGZ1bmN0aW9uIG1hcE5vZGVBbmRSZWZyZXNoV2hlbkNoYW5nZWQoY29udGFpbmVyTm9kZSwgbWFwcGluZywgdmFsdWVUb01hcCwgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzLCBpbmRleCkge1xuICAgICAgICAvLyBNYXAgdGhpcyBhcnJheSB2YWx1ZSBpbnNpZGUgYSBkZXBlbmRlbnRPYnNlcnZhYmxlIHNvIHdlIHJlLW1hcCB3aGVuIGFueSBkZXBlbmRlbmN5IGNoYW5nZXNcbiAgICAgICAgdmFyIG1hcHBlZE5vZGVzID0gW107XG4gICAgICAgIHZhciBkZXBlbmRlbnRPYnNlcnZhYmxlID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBuZXdNYXBwZWROb2RlcyA9IG1hcHBpbmcodmFsdWVUb01hcCwgaW5kZXgsIGtvLnV0aWxzLmZpeFVwQ29udGludW91c05vZGVBcnJheShtYXBwZWROb2RlcywgY29udGFpbmVyTm9kZSkpIHx8IFtdO1xuXG4gICAgICAgICAgICAvLyBPbiBzdWJzZXF1ZW50IGV2YWx1YXRpb25zLCBqdXN0IHJlcGxhY2UgdGhlIHByZXZpb3VzbHktaW5zZXJ0ZWQgRE9NIG5vZGVzXG4gICAgICAgICAgICBpZiAobWFwcGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnJlcGxhY2VEb21Ob2RlcyhtYXBwZWROb2RlcywgbmV3TWFwcGVkTm9kZXMpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMpXG4gICAgICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGNhbGxiYWNrQWZ0ZXJBZGRpbmdOb2RlcywgbnVsbCwgW3ZhbHVlVG9NYXAsIG5ld01hcHBlZE5vZGVzLCBpbmRleF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiB0aGUgbWFwcGVkTm9kZXMgYXJyYXksIHRoZXJlYnkgdXBkYXRpbmcgdGhlIHJlY29yZFxuICAgICAgICAgICAgLy8gb2Ygd2hpY2ggbm9kZXMgd291bGQgYmUgZGVsZXRlZCBpZiB2YWx1ZVRvTWFwIHdhcyBpdHNlbGYgbGF0ZXIgcmVtb3ZlZFxuICAgICAgICAgICAgbWFwcGVkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5UHVzaEFsbChtYXBwZWROb2RlcywgbmV3TWFwcGVkTm9kZXMpO1xuICAgICAgICB9LCBudWxsLCB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDogY29udGFpbmVyTm9kZSwgZGlzcG9zZVdoZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gIWtvLnV0aWxzLmFueURvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudChtYXBwZWROb2Rlcyk7IH0gfSk7XG4gICAgICAgIHJldHVybiB7IG1hcHBlZE5vZGVzIDogbWFwcGVkTm9kZXMsIGRlcGVuZGVudE9ic2VydmFibGUgOiAoZGVwZW5kZW50T2JzZXJ2YWJsZS5pc0FjdGl2ZSgpID8gZGVwZW5kZW50T2JzZXJ2YWJsZSA6IHVuZGVmaW5lZCkgfTtcbiAgICB9XG5cbiAgICB2YXIgbGFzdE1hcHBpbmdSZXN1bHREb21EYXRhS2V5ID0ga28udXRpbHMuZG9tRGF0YS5uZXh0S2V5KCksXG4gICAgICAgIGRlbGV0ZWRJdGVtRHVtbXlWYWx1ZSA9IGtvLnV0aWxzLmRvbURhdGEubmV4dEtleSgpO1xuXG4gICAga28udXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZyA9IGZ1bmN0aW9uIChkb21Ob2RlLCBhcnJheSwgbWFwcGluZywgb3B0aW9ucywgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzKSB7XG4gICAgICAgIC8vIENvbXBhcmUgdGhlIHByb3ZpZGVkIGFycmF5IGFnYWluc3QgdGhlIHByZXZpb3VzIG9uZVxuICAgICAgICBhcnJheSA9IGFycmF5IHx8IFtdO1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGlzRmlyc3RFeGVjdXRpb24gPSBrby51dGlscy5kb21EYXRhLmdldChkb21Ob2RlLCBsYXN0TWFwcGluZ1Jlc3VsdERvbURhdGFLZXkpID09PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBsYXN0TWFwcGluZ1Jlc3VsdCA9IGtvLnV0aWxzLmRvbURhdGEuZ2V0KGRvbU5vZGUsIGxhc3RNYXBwaW5nUmVzdWx0RG9tRGF0YUtleSkgfHwgW107XG4gICAgICAgIHZhciBsYXN0QXJyYXkgPSBrby51dGlscy5hcnJheU1hcChsYXN0TWFwcGluZ1Jlc3VsdCwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguYXJyYXlFbnRyeTsgfSk7XG4gICAgICAgIHZhciBlZGl0U2NyaXB0ID0ga28udXRpbHMuY29tcGFyZUFycmF5cyhsYXN0QXJyYXksIGFycmF5LCBvcHRpb25zWydkb250TGltaXRNb3ZlcyddKTtcblxuICAgICAgICAvLyBCdWlsZCB0aGUgbmV3IG1hcHBpbmcgcmVzdWx0XG4gICAgICAgIHZhciBuZXdNYXBwaW5nUmVzdWx0ID0gW107XG4gICAgICAgIHZhciBsYXN0TWFwcGluZ1Jlc3VsdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIG5ld01hcHBpbmdSZXN1bHRJbmRleCA9IDA7XG5cbiAgICAgICAgdmFyIG5vZGVzVG9EZWxldGUgPSBbXTtcbiAgICAgICAgdmFyIGl0ZW1zVG9Qcm9jZXNzID0gW107XG4gICAgICAgIHZhciBpdGVtc0ZvckJlZm9yZVJlbW92ZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB2YXIgaXRlbXNGb3JNb3ZlQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHZhciBpdGVtc0ZvckFmdGVyQWRkQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHZhciBtYXBEYXRhO1xuXG4gICAgICAgIGZ1bmN0aW9uIGl0ZW1Nb3ZlZE9yUmV0YWluZWQoZWRpdFNjcmlwdEluZGV4LCBvbGRQb3NpdGlvbikge1xuICAgICAgICAgICAgbWFwRGF0YSA9IGxhc3RNYXBwaW5nUmVzdWx0W29sZFBvc2l0aW9uXTtcbiAgICAgICAgICAgIGlmIChuZXdNYXBwaW5nUmVzdWx0SW5kZXggIT09IG9sZFBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIGl0ZW1zRm9yTW92ZUNhbGxiYWNrc1tlZGl0U2NyaXB0SW5kZXhdID0gbWFwRGF0YTtcbiAgICAgICAgICAgIC8vIFNpbmNlIHVwZGF0aW5nIHRoZSBpbmRleCBtaWdodCBjaGFuZ2UgdGhlIG5vZGVzLCBkbyBzbyBiZWZvcmUgY2FsbGluZyBmaXhVcENvbnRpbnVvdXNOb2RlQXJyYXlcbiAgICAgICAgICAgIG1hcERhdGEuaW5kZXhPYnNlcnZhYmxlKG5ld01hcHBpbmdSZXN1bHRJbmRleCsrKTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmZpeFVwQ29udGludW91c05vZGVBcnJheShtYXBEYXRhLm1hcHBlZE5vZGVzLCBkb21Ob2RlKTtcbiAgICAgICAgICAgIG5ld01hcHBpbmdSZXN1bHQucHVzaChtYXBEYXRhKTtcbiAgICAgICAgICAgIGl0ZW1zVG9Qcm9jZXNzLnB1c2gobWFwRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjYWxsQ2FsbGJhY2soY2FsbGJhY2ssIGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChpdGVtc1tpXS5tYXBwZWROb2RlcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUsIGksIGl0ZW1zW2ldLmFycmF5RW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZWRpdFNjcmlwdEl0ZW0sIG1vdmVkSW5kZXg7IGVkaXRTY3JpcHRJdGVtID0gZWRpdFNjcmlwdFtpXTsgaSsrKSB7XG4gICAgICAgICAgICBtb3ZlZEluZGV4ID0gZWRpdFNjcmlwdEl0ZW1bJ21vdmVkJ107XG4gICAgICAgICAgICBzd2l0Y2ggKGVkaXRTY3JpcHRJdGVtWydzdGF0dXMnXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVkXCI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEgPSBsYXN0TWFwcGluZ1Jlc3VsdFtsYXN0TWFwcGluZ1Jlc3VsdEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0cmFja2luZyBjaGFuZ2VzIHRvIHRoZSBtYXBwaW5nIGZvciB0aGVzZSBub2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcERhdGEuZGVwZW5kZW50T2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEuZGVwZW5kZW50T2JzZXJ2YWJsZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS5kZXBlbmRlbnRPYnNlcnZhYmxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBRdWV1ZSB0aGVzZSBub2RlcyBmb3IgbGF0ZXIgcmVtb3ZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtvLnV0aWxzLmZpeFVwQ29udGludW91c05vZGVBcnJheShtYXBEYXRhLm1hcHBlZE5vZGVzLCBkb21Ob2RlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1snYmVmb3JlUmVtb3ZlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWFwcGluZ1Jlc3VsdC5wdXNoKG1hcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RvUHJvY2Vzcy5wdXNoKG1hcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwRGF0YS5hcnJheUVudHJ5ID09PSBkZWxldGVkSXRlbUR1bW15VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNGb3JCZWZvcmVSZW1vdmVDYWxsYmFja3NbaV0gPSBtYXBEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9EZWxldGUucHVzaC5hcHBseShub2Rlc1RvRGVsZXRlLCBtYXBEYXRhLm1hcHBlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE1hcHBpbmdSZXN1bHRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXRhaW5lZFwiOlxuICAgICAgICAgICAgICAgICAgICBpdGVtTW92ZWRPclJldGFpbmVkKGksIGxhc3RNYXBwaW5nUmVzdWx0SW5kZXgrKyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImFkZGVkXCI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Nb3ZlZE9yUmV0YWluZWQoaSwgbW92ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhID0geyBhcnJheUVudHJ5OiBlZGl0U2NyaXB0SXRlbVsndmFsdWUnXSwgaW5kZXhPYnNlcnZhYmxlOiBrby5vYnNlcnZhYmxlKG5ld01hcHBpbmdSZXN1bHRJbmRleCsrKSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWFwcGluZ1Jlc3VsdC5wdXNoKG1hcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNUb1Byb2Nlc3MucHVzaChtYXBEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdEV4ZWN1dGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0ZvckFmdGVyQWRkQ2FsbGJhY2tzW2ldID0gbWFwRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3JlIGEgY29weSBvZiB0aGUgYXJyYXkgaXRlbXMgd2UganVzdCBjb25zaWRlcmVkIHNvIHdlIGNhbiBkaWZmZXJlbmNlIGl0IG5leHQgdGltZVxuICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChkb21Ob2RlLCBsYXN0TWFwcGluZ1Jlc3VsdERvbURhdGFLZXksIG5ld01hcHBpbmdSZXN1bHQpO1xuXG4gICAgICAgIC8vIENhbGwgYmVmb3JlTW92ZSBmaXJzdCBiZWZvcmUgYW55IGNoYW5nZXMgaGF2ZSBiZWVuIG1hZGUgdG8gdGhlIERPTVxuICAgICAgICBjYWxsQ2FsbGJhY2sob3B0aW9uc1snYmVmb3JlTW92ZSddLCBpdGVtc0Zvck1vdmVDYWxsYmFja3MpO1xuXG4gICAgICAgIC8vIE5leHQgcmVtb3ZlIG5vZGVzIGZvciBkZWxldGVkIGl0ZW1zIChvciBqdXN0IGNsZWFuIGlmIHRoZXJlJ3MgYSBiZWZvcmVSZW1vdmUgY2FsbGJhY2spXG4gICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChub2Rlc1RvRGVsZXRlLCBvcHRpb25zWydiZWZvcmVSZW1vdmUnXSA/IGtvLmNsZWFuTm9kZSA6IGtvLnJlbW92ZU5vZGUpO1xuXG4gICAgICAgIC8vIE5leHQgYWRkL3Jlb3JkZXIgdGhlIHJlbWFpbmluZyBpdGVtcyAod2lsbCBpbmNsdWRlIGRlbGV0ZWQgaXRlbXMgaWYgdGhlcmUncyBhIGJlZm9yZVJlbW92ZSBjYWxsYmFjaylcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG5leHROb2RlID0ga28udmlydHVhbEVsZW1lbnRzLmZpcnN0Q2hpbGQoZG9tTm9kZSksIGxhc3ROb2RlLCBub2RlOyBtYXBEYXRhID0gaXRlbXNUb1Byb2Nlc3NbaV07IGkrKykge1xuICAgICAgICAgICAgLy8gR2V0IG5vZGVzIGZvciBuZXdseSBhZGRlZCBpdGVtc1xuICAgICAgICAgICAgaWYgKCFtYXBEYXRhLm1hcHBlZE5vZGVzKVxuICAgICAgICAgICAgICAgIGtvLnV0aWxzLmV4dGVuZChtYXBEYXRhLCBtYXBOb2RlQW5kUmVmcmVzaFdoZW5DaGFuZ2VkKGRvbU5vZGUsIG1hcHBpbmcsIG1hcERhdGEuYXJyYXlFbnRyeSwgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzLCBtYXBEYXRhLmluZGV4T2JzZXJ2YWJsZSkpO1xuXG4gICAgICAgICAgICAvLyBQdXQgbm9kZXMgaW4gdGhlIHJpZ2h0IHBsYWNlIGlmIHRoZXkgYXJlbid0IHRoZXJlIGFscmVhZHlcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBub2RlID0gbWFwRGF0YS5tYXBwZWROb2Rlc1tqXTsgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nLCBsYXN0Tm9kZSA9IG5vZGUsIGorKykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlICE9PSBuZXh0Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyKGRvbU5vZGUsIG5vZGUsIGxhc3ROb2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUnVuIHRoZSBjYWxsYmFja3MgZm9yIG5ld2x5IGFkZGVkIG5vZGVzIChmb3IgZXhhbXBsZSwgdG8gYXBwbHkgYmluZGluZ3MsIGV0Yy4pXG4gICAgICAgICAgICBpZiAoIW1hcERhdGEuaW5pdGlhbGl6ZWQgJiYgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzKG1hcERhdGEuYXJyYXlFbnRyeSwgbWFwRGF0YS5tYXBwZWROb2RlcywgbWFwRGF0YS5pbmRleE9ic2VydmFibGUpO1xuICAgICAgICAgICAgICAgIG1hcERhdGEuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIGJlZm9yZVJlbW92ZSBjYWxsYmFjaywgY2FsbCBpdCBhZnRlciByZW9yZGVyaW5nLlxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgYXNzdW1lIHRoYXQgdGhlIGJlZm9yZVJlbW92ZSBjYWxsYmFjayB3aWxsIHVzdWFsbHkgYmUgdXNlZCB0byByZW1vdmUgdGhlIG5vZGVzIHVzaW5nXG4gICAgICAgIC8vIHNvbWUgc29ydCBvZiBhbmltYXRpb24sIHdoaWNoIGlzIHdoeSB3ZSBmaXJzdCByZW9yZGVyIHRoZSBub2RlcyB0aGF0IHdpbGwgYmUgcmVtb3ZlZC4gSWYgdGhlXG4gICAgICAgIC8vIGNhbGxiYWNrIGluc3RlYWQgcmVtb3ZlcyB0aGUgbm9kZXMgcmlnaHQgYXdheSwgaXQgd291bGQgYmUgbW9yZSBlZmZpY2llbnQgdG8gc2tpcCByZW9yZGVyaW5nIHRoZW0uXG4gICAgICAgIC8vIFBlcmhhcHMgd2UnbGwgbWFrZSB0aGF0IGNoYW5nZSBpbiB0aGUgZnV0dXJlIGlmIHRoaXMgc2NlbmFyaW8gYmVjb21lcyBtb3JlIGNvbW1vbi5cbiAgICAgICAgY2FsbENhbGxiYWNrKG9wdGlvbnNbJ2JlZm9yZVJlbW92ZSddLCBpdGVtc0ZvckJlZm9yZVJlbW92ZUNhbGxiYWNrcyk7XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgc3RvcmVkIHZhbHVlcyBvZiBkZWxldGVkIGl0ZW1zIHdpdGggYSBkdW1teSB2YWx1ZS4gVGhpcyBwcm92aWRlcyB0d28gYmVuZWZpdHM6IGl0IG1hcmtzIHRoaXMgaXRlbVxuICAgICAgICAvLyBhcyBhbHJlYWR5IFwicmVtb3ZlZFwiIHNvIHdlIHdvbid0IGNhbGwgYmVmb3JlUmVtb3ZlIGZvciBpdCBhZ2FpbiwgYW5kIGl0IGVuc3VyZXMgdGhhdCB0aGUgaXRlbSB3b24ndCBtYXRjaCB1cFxuICAgICAgICAvLyB3aXRoIGFuIGFjdHVhbCBpdGVtIGluIHRoZSBhcnJheSBhbmQgYXBwZWFyIGFzIFwicmV0YWluZWRcIiBvciBcIm1vdmVkXCIuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtc0ZvckJlZm9yZVJlbW92ZUNhbGxiYWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1zRm9yQmVmb3JlUmVtb3ZlQ2FsbGJhY2tzW2ldKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNGb3JCZWZvcmVSZW1vdmVDYWxsYmFja3NbaV0uYXJyYXlFbnRyeSA9IGRlbGV0ZWRJdGVtRHVtbXlWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmFsbHkgY2FsbCBhZnRlck1vdmUgYW5kIGFmdGVyQWRkIGNhbGxiYWNrc1xuICAgICAgICBjYWxsQ2FsbGJhY2sob3B0aW9uc1snYWZ0ZXJNb3ZlJ10sIGl0ZW1zRm9yTW92ZUNhbGxiYWNrcyk7XG4gICAgICAgIGNhbGxDYWxsYmFjayhvcHRpb25zWydhZnRlckFkZCddLCBpdGVtc0ZvckFmdGVyQWRkQ2FsbGJhY2tzKTtcbiAgICB9XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcnLCBrby51dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nKTtcbmtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXNbJ2FsbG93VGVtcGxhdGVSZXdyaXRpbmcnXSA9IGZhbHNlO1xufVxuXG5rby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGUgPSBuZXcga28udGVtcGxhdGVFbmdpbmUoKTtcbmtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lO1xua28ubmF0aXZlVGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydyZW5kZXJUZW1wbGF0ZVNvdXJjZSddID0gZnVuY3Rpb24gKHRlbXBsYXRlU291cmNlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucywgdGVtcGxhdGVEb2N1bWVudCkge1xuICAgIHZhciB1c2VOb2Rlc0lmQXZhaWxhYmxlID0gIShrby51dGlscy5pZVZlcnNpb24gPCA5KSwgLy8gSUU8OSBjbG9uZU5vZGUgZG9lc24ndCB3b3JrIHByb3Blcmx5XG4gICAgICAgIHRlbXBsYXRlTm9kZXNGdW5jID0gdXNlTm9kZXNJZkF2YWlsYWJsZSA/IHRlbXBsYXRlU291cmNlWydub2RlcyddIDogbnVsbCxcbiAgICAgICAgdGVtcGxhdGVOb2RlcyA9IHRlbXBsYXRlTm9kZXNGdW5jID8gdGVtcGxhdGVTb3VyY2VbJ25vZGVzJ10oKSA6IG51bGw7XG5cbiAgICBpZiAodGVtcGxhdGVOb2Rlcykge1xuICAgICAgICByZXR1cm4ga28udXRpbHMubWFrZUFycmF5KHRlbXBsYXRlTm9kZXMuY2xvbmVOb2RlKHRydWUpLmNoaWxkTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZVRleHQgPSB0ZW1wbGF0ZVNvdXJjZVsndGV4dCddKCk7XG4gICAgICAgIHJldHVybiBrby51dGlscy5wYXJzZUh0bWxGcmFnbWVudCh0ZW1wbGF0ZVRleHQsIHRlbXBsYXRlRG9jdW1lbnQpO1xuICAgIH1cbn07XG5cbmtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLmluc3RhbmNlID0gbmV3IGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lKCk7XG5rby5zZXRUZW1wbGF0ZUVuZ2luZShrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5pbnN0YW5jZSk7XG5cbmtvLmV4cG9ydFN5bWJvbCgnbmF0aXZlVGVtcGxhdGVFbmdpbmUnLCBrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZSk7XG4oZnVuY3Rpb24oKSB7XG4gICAga28uanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZXRlY3Qgd2hpY2ggdmVyc2lvbiBvZiBqcXVlcnktdG1wbCB5b3UncmUgdXNpbmcuIFVuZm9ydHVuYXRlbHkganF1ZXJ5LXRtcGxcbiAgICAgICAgLy8gZG9lc24ndCBleHBvc2UgYSB2ZXJzaW9uIG51bWJlciwgc28gd2UgaGF2ZSB0byBpbmZlciBpdC5cbiAgICAgICAgLy8gTm90ZSB0aGF0IGFzIG9mIEtub2Nrb3V0IDEuMywgd2Ugb25seSBzdXBwb3J0IGpRdWVyeS50bXBsIDEuMC4wcHJlIGFuZCBsYXRlcixcbiAgICAgICAgLy8gd2hpY2ggS08gaW50ZXJuYWxseSByZWZlcnMgdG8gYXMgdmVyc2lvbiBcIjJcIiwgc28gb2xkZXIgdmVyc2lvbnMgYXJlIG5vIGxvbmdlciBkZXRlY3RlZC5cbiAgICAgICAgdmFyIGpRdWVyeVRtcGxWZXJzaW9uID0gdGhpcy5qUXVlcnlUbXBsVmVyc2lvbiA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghalF1ZXJ5SW5zdGFuY2UgfHwgIShqUXVlcnlJbnN0YW5jZVsndG1wbCddKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIC8vIFNpbmNlIGl0IGV4cG9zZXMgbm8gb2ZmaWNpYWwgdmVyc2lvbiBudW1iZXIsIHdlIHVzZSBvdXIgb3duIG51bWJlcmluZyBzeXN0ZW0uIFRvIGJlIHVwZGF0ZWQgYXMganF1ZXJ5LXRtcGwgZXZvbHZlcy5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeUluc3RhbmNlWyd0bXBsJ11bJ3RhZyddWyd0bXBsJ11bJ29wZW4nXS50b1N0cmluZygpLmluZGV4T2YoJ19fJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSAxLjAuMHByZSwgY3VzdG9tIHRhZ3Mgc2hvdWxkIGFwcGVuZCBtYXJrdXAgdG8gYW4gYXJyYXkgY2FsbGVkIFwiX19cIlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjsgLy8gRmluYWwgdmVyc2lvbiBvZiBqcXVlcnkudG1wbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXgpIHsgLyogQXBwYXJlbnRseSBub3QgdGhlIHZlcnNpb24gd2Ugd2VyZSBsb29raW5nIGZvciAqLyB9XG5cbiAgICAgICAgICAgIHJldHVybiAxOyAvLyBBbnkgb2xkZXIgdmVyc2lvbiB0aGF0IHdlIGRvbid0IHN1cHBvcnRcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBmdW5jdGlvbiBlbnN1cmVIYXNSZWZlcmVuY2VkSlF1ZXJ5VGVtcGxhdGVzKCkge1xuICAgICAgICAgICAgaWYgKGpRdWVyeVRtcGxWZXJzaW9uIDwgMilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3VyIHZlcnNpb24gb2YgalF1ZXJ5LnRtcGwgaXMgdG9vIG9sZC4gUGxlYXNlIHVwZ3JhZGUgdG8galF1ZXJ5LnRtcGwgMS4wLjBwcmUgb3IgbGF0ZXIuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZVRlbXBsYXRlKGNvbXBpbGVkVGVtcGxhdGUsIGRhdGEsIGpRdWVyeVRlbXBsYXRlT3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeUluc3RhbmNlWyd0bXBsJ10oY29tcGlsZWRUZW1wbGF0ZSwgZGF0YSwgalF1ZXJ5VGVtcGxhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbJ3JlbmRlclRlbXBsYXRlU291cmNlJ10gPSBmdW5jdGlvbih0ZW1wbGF0ZVNvdXJjZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMsIHRlbXBsYXRlRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlRG9jdW1lbnQgPSB0ZW1wbGF0ZURvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICBlbnN1cmVIYXNSZWZlcmVuY2VkSlF1ZXJ5VGVtcGxhdGVzKCk7XG5cbiAgICAgICAgICAgIC8vIEVuc3VyZSB3ZSBoYXZlIHN0b3JlZCBhIHByZWNvbXBpbGVkIHZlcnNpb24gb2YgdGhpcyB0ZW1wbGF0ZSAoZG9uJ3Qgd2FudCB0byByZXBhcnNlIG9uIGV2ZXJ5IHJlbmRlcilcbiAgICAgICAgICAgIHZhciBwcmVjb21waWxlZCA9IHRlbXBsYXRlU291cmNlWydkYXRhJ10oJ3ByZWNvbXBpbGVkJyk7XG4gICAgICAgICAgICBpZiAoIXByZWNvbXBpbGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlVGV4dCA9IHRlbXBsYXRlU291cmNlWyd0ZXh0J10oKSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgIC8vIFdyYXAgaW4gXCJ3aXRoKCR3aGF0ZXZlci5rb0JpbmRpbmdDb250ZXh0KSB7IC4uLiB9XCJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVRleHQgPSBcInt7a29fd2l0aCAkaXRlbS5rb0JpbmRpbmdDb250ZXh0fX1cIiArIHRlbXBsYXRlVGV4dCArIFwie3sva29fd2l0aH19XCI7XG5cbiAgICAgICAgICAgICAgICBwcmVjb21waWxlZCA9IGpRdWVyeUluc3RhbmNlWyd0ZW1wbGF0ZSddKG51bGwsIHRlbXBsYXRlVGV4dCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVTb3VyY2VbJ2RhdGEnXSgncHJlY29tcGlsZWQnLCBwcmVjb21waWxlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0gW2JpbmRpbmdDb250ZXh0WyckZGF0YSddXTsgLy8gUHJld3JhcCB0aGUgZGF0YSBpbiBhbiBhcnJheSB0byBzdG9wIGpxdWVyeS50bXBsIGZyb20gdHJ5aW5nIHRvIHVud3JhcCBhbnkgYXJyYXlzXG4gICAgICAgICAgICB2YXIgalF1ZXJ5VGVtcGxhdGVPcHRpb25zID0galF1ZXJ5SW5zdGFuY2VbJ2V4dGVuZCddKHsgJ2tvQmluZGluZ0NvbnRleHQnOiBiaW5kaW5nQ29udGV4dCB9LCBvcHRpb25zWyd0ZW1wbGF0ZU9wdGlvbnMnXSk7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHROb2RlcyA9IGV4ZWN1dGVUZW1wbGF0ZShwcmVjb21waWxlZCwgZGF0YSwgalF1ZXJ5VGVtcGxhdGVPcHRpb25zKTtcbiAgICAgICAgICAgIHJlc3VsdE5vZGVzWydhcHBlbmRUbyddKHRlbXBsYXRlRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7IC8vIFVzaW5nIFwiYXBwZW5kVG9cIiBmb3JjZXMgalF1ZXJ5L2pRdWVyeS50bXBsIHRvIHBlcmZvcm0gbmVjZXNzYXJ5IGNsZWFudXAgd29ya1xuXG4gICAgICAgICAgICBqUXVlcnlJbnN0YW5jZVsnZnJhZ21lbnRzJ10gPSB7fTsgLy8gQ2xlYXIgalF1ZXJ5J3MgZnJhZ21lbnQgY2FjaGUgdG8gYXZvaWQgYSBtZW1vcnkgbGVhayBhZnRlciBhIGxhcmdlIG51bWJlciBvZiB0ZW1wbGF0ZSByZW5kZXJzXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Tm9kZXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpc1snY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrJ10gPSBmdW5jdGlvbihzY3JpcHQpIHtcbiAgICAgICAgICAgIHJldHVybiBcInt7a29fY29kZSAoKGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIgKyBzY3JpcHQgKyBcIiB9KSgpKSB9fVwiO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXNbJ2FkZFRlbXBsYXRlJ10gPSBmdW5jdGlvbih0ZW1wbGF0ZU5hbWUsIHRlbXBsYXRlTWFya3VwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC53cml0ZShcIjxzY3JpcHQgdHlwZT0ndGV4dC9odG1sJyBpZD0nXCIgKyB0ZW1wbGF0ZU5hbWUgKyBcIic+XCIgKyB0ZW1wbGF0ZU1hcmt1cCArIFwiPFwiICsgXCIvc2NyaXB0PlwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoalF1ZXJ5VG1wbFZlcnNpb24gPiAwKSB7XG4gICAgICAgICAgICBqUXVlcnlJbnN0YW5jZVsndG1wbCddWyd0YWcnXVsna29fY29kZSddID0ge1xuICAgICAgICAgICAgICAgIG9wZW46IFwiX18ucHVzaCgkMSB8fCAnJyk7XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBqUXVlcnlJbnN0YW5jZVsndG1wbCddWyd0YWcnXVsna29fd2l0aCddID0ge1xuICAgICAgICAgICAgICAgIG9wZW46IFwid2l0aCgkMSkge1wiLFxuICAgICAgICAgICAgICAgIGNsb3NlOiBcIn0gXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAga28uanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lLnByb3RvdHlwZSA9IG5ldyBrby50ZW1wbGF0ZUVuZ2luZSgpO1xuICAgIGtvLmpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBrby5qcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmU7XG5cbiAgICAvLyBVc2UgdGhpcyBvbmUgYnkgZGVmYXVsdCAqb25seSBpZiBqcXVlcnkudG1wbCBpcyByZWZlcmVuY2VkKlxuICAgIHZhciBqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVJbnN0YW5jZSA9IG5ldyBrby5qcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmUoKTtcbiAgICBpZiAoanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lSW5zdGFuY2UualF1ZXJ5VG1wbFZlcnNpb24gPiAwKVxuICAgICAgICBrby5zZXRUZW1wbGF0ZUVuZ2luZShqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVJbnN0YW5jZSk7XG5cbiAgICBrby5leHBvcnRTeW1ib2woJ2pxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZScsIGtvLmpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZSk7XG59KSgpO1xufSkpO1xufSgpKTtcbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9rbm9ja291dC9idWlsZC9vdXRwdXQva25vY2tvdXQtbGF0ZXN0LmRlYnVnLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGh1bWFuaXplID0gcmVxdWlyZSgnaHVtYW5pemUnKVxuXG5leHBvcnQgY2xhc3MgSm9iIHtcblxuICAgIGlkIDogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgbmFtZSA6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGNhdGVnb3J5OiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBzdGF0dXMgOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBsb2cgOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBzaXplIDogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgdHJhbnNmZXJyZWQgOiBLbm9ja291dE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBwZXJjZW50IDogS25vY2tvdXRDb21wdXRlZDxudW1iZXI+O1xuICAgIHRyYW5zZmVycmVkVGV4dCA6IEtub2Nrb3V0Q29tcHV0ZWQ8c3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKGpvYjphbnkpIHtcblxuICAgICAgICB0aGlzLmlkID0ga28ub2JzZXJ2YWJsZShqb2IuaWQpO1xuICAgICAgICB0aGlzLm5hbWUgPSBrby5vYnNlcnZhYmxlKGpvYi5uYW1lKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBrby5vYnNlcnZhYmxlKGpvYi5zdGF0dXMpO1xuICAgICAgICB0aGlzLmxvZyA9IGtvLm9ic2VydmFibGUoam9iLmxvZyk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBrby5vYnNlcnZhYmxlKGpvYi5jYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IGtvLm9ic2VydmFibGUoam9iLnNpemUpO1xuICAgICAgICB0aGlzLnRyYW5zZmVycmVkID0ga28ub2JzZXJ2YWJsZShqb2IudHJhbnNmZXJyZWQpO1xuXG4gICAgICAgIHRoaXMucGVyY2VudCA9IGtvLmNvbXB1dGVkKHtcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgcmVhZDogICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2ZlcnJlZCgpIC8gdGhpcy5zaXplKCkgKiAxMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50cmFuc2ZlcnJlZFRleHQgPSBrby5jb21wdXRlZCh7XG4gICAgICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgICAgIHJlYWQ6ICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh1bWFuaXplLmZpbGVzaXplKHRoaXMudHJhbnNmZXJyZWQoKSkgKyBcIiAvIFwiICsgaHVtYW5pemUuZmlsZXNpemUodGhpcy5zaXplKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29uc3RydWN0aW5nIGpvYlwiKTtcblxuICAgIH1cblxuICAgIGNhblBhdXNlKCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzKCkgPT09IFwiZG93bmxvYWRpbmdcIiB8fCB0aGlzLnN0YXR1cygpID09PSBcInF1ZXVlZFwiO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNpbmcgam9iXCIgKyB0aGlzLm5hbWUoKSk7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9wYXVzZS8nICsgdGhpcy5pZCgpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNhblJlc3VtZSgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cygpID09PSBcInBhdXNlZFwiO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bWVpbmcgam9iXCIgKyB0aGlzLm5hbWUoKSk7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9yZXN1bWUvJyArIHRoaXMuaWQoKSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjYW5SZXRyeSgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cygpID09PSBcImZhaWxlZFwiO1xuICAgIH1cblxuICAgIHJldHJ5KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJ5aW5nIGpvYlwiICsgdGhpcy5uYW1lKCkpO1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvcmV0cnkvJyArIHRoaXMuaWQoKSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvam9iLnRzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgdGhpcy5kZWZhdWx0cywgeyBtZXRob2Q6ICdnZXQnIH0sIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbihmdW5jdGlvbigpIHtcblxuICAvLyBCYXNlbGluZSBzZXR1cFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIGluIHRoZSBicm93c2VyLCBvciBgZ2xvYmFsYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBodW1hbml6ZWAgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c0h1bWFuaXplID0gcm9vdC5odW1hbml6ZTtcblxuICB2YXIgaHVtYW5pemUgPSB7fTtcblxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBodW1hbml6ZTtcbiAgICB9XG4gICAgZXhwb3J0cy5odW1hbml6ZSA9IGh1bWFuaXplO1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIGRlZmluZSgnaHVtYW5pemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGh1bWFuaXplO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJvb3QuaHVtYW5pemUgPSBodW1hbml6ZTtcbiAgfVxuXG4gIGh1bWFuaXplLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Lmh1bWFuaXplID0gcHJldmlvdXNIdW1hbml6ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBodW1hbml6ZS5wYWQgPSBmdW5jdGlvbihzdHIsIGNvdW50LCBwYWRDaGFyLCB0eXBlKSB7XG4gICAgc3RyICs9ICcnO1xuICAgIGlmICghcGFkQ2hhcikge1xuICAgICAgcGFkQ2hhciA9ICcgJztcbiAgICB9IGVsc2UgaWYgKHBhZENoYXIubGVuZ3RoID4gMSkge1xuICAgICAgcGFkQ2hhciA9IHBhZENoYXIuY2hhckF0KDApO1xuICAgIH1cbiAgICB0eXBlID0gKHR5cGUgPT09IHVuZGVmaW5lZCkgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gICAgaWYgKHR5cGUgPT09ICdyaWdodCcpIHtcbiAgICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgY291bnQpIHtcbiAgICAgICAgc3RyID0gc3RyICsgcGFkQ2hhcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCB0byBsZWZ0XG4gICAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IGNvdW50KSB7XG4gICAgICAgIHN0ciA9IHBhZENoYXIgKyBzdHI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICAvLyBnZXRzIGN1cnJlbnQgdW5peCB0aW1lXG4gIGh1bWFuaXplLnRpbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQSFAtaW5zcGlyZWQgZGF0ZVxuICAgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgLyogIGphbiAgZmViICBtYXIgIGFwciAgbWF5ICBqdW4gIGp1bCAgYXVnICBzZXAgIG9jdCAgbm92ICBkZWMgKi9cbiAgdmFyIGRheVRhYmxlQ29tbW9uID0gWyAwLCAgIDAsICAzMSwgIDU5LCAgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0IF07XG4gIHZhciBkYXlUYWJsZUxlYXAgICA9IFsgMCwgICAwLCAgMzEsICA2MCwgIDkxLCAxMjEsIDE1MiwgMTgyLCAyMTMsIDI0NCwgMjc0LCAzMDUsIDMzNSBdO1xuICAvLyB2YXIgbXRhYmxlX2NvbW1vblsxM10gPSB7ICAwLCAgMzEsICAyOCwgIDMxLCAgMzAsICAzMSwgIDMwLCAgMzEsICAzMSwgIDMwLCAgMzEsICAzMCwgIDMxIH07XG4gIC8vIHN0YXRpYyBpbnQgbWxfdGFibGVfbGVhcFsxM10gICA9IHsgIDAsICAzMSwgIDI5LCAgMzEsICAzMCwgIDMxLCAgMzAsICAzMSwgIDMxLCAgMzAsICAzMSwgIDMwLCAgMzEgfTtcblxuXG4gIGh1bWFuaXplLmRhdGUgPSBmdW5jdGlvbihmb3JtYXQsIHRpbWVzdGFtcCkge1xuICAgIHZhciBqc2RhdGUgPSAoKHRpbWVzdGFtcCA9PT0gdW5kZWZpbmVkKSA/IG5ldyBEYXRlKCkgOiAvLyBOb3QgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAgICh0aW1lc3RhbXAgaW5zdGFuY2VvZiBEYXRlKSA/IG5ldyBEYXRlKHRpbWVzdGFtcCkgOiAvLyBKUyBEYXRlKClcbiAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHRpbWVzdGFtcCAqIDEwMDApIC8vIFVOSVggdGltZXN0YW1wIChhdXRvLWNvbnZlcnQgdG8gaW50KVxuICAgICAgICAgICAgICAgICApO1xuXG4gICAgdmFyIGZvcm1hdENociA9IC9cXFxcPyhbYS16XSkvZ2k7XG4gICAgdmFyIGZvcm1hdENockNiID0gZnVuY3Rpb24gKHQsIHMpIHtcbiAgICAgIHJldHVybiBmW3RdID8gZlt0XSgpIDogcztcbiAgICB9O1xuXG4gICAgdmFyIHNob3J0RGF5VHh0ID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIHZhciBtb250aFR4dCA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG4gICAgdmFyIGYgPSB7XG4gICAgICAvKiBEYXkgKi9cbiAgICAgIC8vIERheSBvZiBtb250aCB3L2xlYWRpbmcgMDsgMDEuLjMxXG4gICAgICBkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBodW1hbml6ZS5wYWQoZi5qKCksIDIsICcwJyk7IH0sXG5cbiAgICAgIC8vIFNob3J0aGFuZCBkYXkgbmFtZTsgTW9uLi5TdW5cbiAgICAgIEQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYubCgpLnNsaWNlKDAsIDMpOyB9LFxuXG4gICAgICAvLyBEYXkgb2YgbW9udGg7IDEuLjMxXG4gICAgICBqOiBmdW5jdGlvbiAoKSB7IHJldHVybiBqc2RhdGUuZ2V0RGF0ZSgpOyB9LFxuXG4gICAgICAvLyBGdWxsIGRheSBuYW1lOyBNb25kYXkuLlN1bmRheVxuICAgICAgbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2hvcnREYXlUeHRbZi53KCldOyB9LFxuXG4gICAgICAvLyBJU08tODYwMSBkYXkgb2Ygd2VlazsgMVtNb25dLi43W1N1bl1cbiAgICAgIE46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYudygpIHx8IDc7IH0sXG5cbiAgICAgIC8vIE9yZGluYWwgc3VmZml4IGZvciBkYXkgb2YgbW9udGg7IHN0LCBuZCwgcmQsIHRoXG4gICAgICBTOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBqID0gZi5qKCk7XG4gICAgICAgIHJldHVybiBqID4gNCAmJiBqIDwgMjEgPyAndGgnIDogezE6ICdzdCcsIDI6ICduZCcsIDM6ICdyZCd9W2ogJSAxMF0gfHwgJ3RoJztcbiAgICAgIH0sXG5cbiAgICAgIC8vIERheSBvZiB3ZWVrOyAwW1N1bl0uLjZbU2F0XVxuICAgICAgdzogZnVuY3Rpb24gKCkgeyByZXR1cm4ganNkYXRlLmdldERheSgpOyB9LFxuXG4gICAgICAvLyBEYXkgb2YgeWVhcjsgMC4uMzY1XG4gICAgICB6OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoZi5MKCkgPyBkYXlUYWJsZUxlYXBbZi5uKCldIDogZGF5VGFibGVDb21tb25bZi5uKCldKSArIGYuaigpIC0gMTtcbiAgICAgIH0sXG5cbiAgICAgIC8qIFdlZWsgKi9cbiAgICAgIC8vIElTTy04NjAxIHdlZWsgbnVtYmVyXG4gICAgICBXOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGRheXMgYmV0d2VlbiBtaWR3ZWVrIG9mIHRoaXMgd2VlayBhbmQgamFuIDRcbiAgICAgICAgLy8gKGYueigpIC0gZi5OKCkgKyAxICsgMy41KSAtIDNcbiAgICAgICAgdmFyIG1pZFdlZWtEYXlzRnJvbUphbjQgPSBmLnooKSAtIGYuTigpICsgMS41O1xuICAgICAgICAvLyAxICsgbnVtYmVyIG9mIHdlZWtzICsgcm91bmRlZCB3ZWVrXG4gICAgICAgIHJldHVybiBodW1hbml6ZS5wYWQoMSArIE1hdGguZmxvb3IoTWF0aC5hYnMobWlkV2Vla0RheXNGcm9tSmFuNCkgLyA3KSArIChtaWRXZWVrRGF5c0Zyb21KYW40ICUgNyA+IDMuNSA/IDEgOiAwKSwgMiwgJzAnKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qIE1vbnRoICovXG4gICAgICAvLyBGdWxsIG1vbnRoIG5hbWU7IEphbnVhcnkuLkRlY2VtYmVyXG4gICAgICBGOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb250aFR4dFtqc2RhdGUuZ2V0TW9udGgoKV07IH0sXG5cbiAgICAgIC8vIE1vbnRoIHcvbGVhZGluZyAwOyAwMS4uMTJcbiAgICAgIG06IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGh1bWFuaXplLnBhZChmLm4oKSwgMiwgJzAnKTsgfSxcblxuICAgICAgLy8gU2hvcnRoYW5kIG1vbnRoIG5hbWU7IEphbi4uRGVjXG4gICAgICBNOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmLkYoKS5zbGljZSgwLCAzKTsgfSxcblxuICAgICAgLy8gTW9udGg7IDEuLjEyXG4gICAgICBuOiBmdW5jdGlvbiAoKSB7IHJldHVybiBqc2RhdGUuZ2V0TW9udGgoKSArIDE7IH0sXG5cbiAgICAgIC8vIERheXMgaW4gbW9udGg7IDI4Li4zMVxuICAgICAgdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKG5ldyBEYXRlKGYuWSgpLCBmLm4oKSwgMCkpLmdldERhdGUoKTsgfSxcblxuICAgICAgLyogWWVhciAqL1xuICAgICAgLy8gSXMgbGVhcCB5ZWFyPzsgMCBvciAxXG4gICAgICBMOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRGF0ZShmLlkoKSwgMSwgMjkpLmdldE1vbnRoKCkgPT09IDEgPyAxIDogMDsgfSxcblxuICAgICAgLy8gSVNPLTg2MDEgeWVhclxuICAgICAgbzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbiA9IGYubigpO1xuICAgICAgICB2YXIgVyA9IGYuVygpO1xuICAgICAgICByZXR1cm4gZi5ZKCkgKyAobiA9PT0gMTIgJiYgVyA8IDkgPyAtMSA6IG4gPT09IDEgJiYgVyA+IDkpO1xuICAgICAgfSxcblxuICAgICAgLy8gRnVsbCB5ZWFyOyBlLmcuIDE5ODAuLjIwMTBcbiAgICAgIFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGpzZGF0ZS5nZXRGdWxsWWVhcigpOyB9LFxuXG4gICAgICAvLyBMYXN0IHR3byBkaWdpdHMgb2YgeWVhcjsgMDAuLjk5XG4gICAgICB5OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoU3RyaW5nKGYuWSgpKSkuc2xpY2UoLTIpOyB9LFxuXG4gICAgICAvKiBUaW1lICovXG4gICAgICAvLyBhbSBvciBwbVxuICAgICAgYTogZnVuY3Rpb24gKCkgeyByZXR1cm4ganNkYXRlLmdldEhvdXJzKCkgPiAxMSA/ICdwbScgOiAnYW0nOyB9LFxuXG4gICAgICAvLyBBTSBvciBQTVxuICAgICAgQTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZi5hKCkudG9VcHBlckNhc2UoKTsgfSxcblxuICAgICAgLy8gU3dhdGNoIEludGVybmV0IHRpbWU7IDAwMC4uOTk5XG4gICAgICBCOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1bml4VGltZSA9IGpzZGF0ZS5nZXRUaW1lKCkgLyAxMDAwO1xuICAgICAgICB2YXIgc2Vjb25kc1Bhc3NlZFRvZGF5ID0gdW5peFRpbWUgJSA4NjQwMCArIDM2MDA7IC8vIHNpbmNlIGl0J3MgYmFzZWQgb2ZmIG9mIFVUQysxXG4gICAgICAgIGlmIChzZWNvbmRzUGFzc2VkVG9kYXkgPCAwKSB7IHNlY29uZHNQYXNzZWRUb2RheSArPSA4NjQwMDsgfVxuICAgICAgICB2YXIgYmVhdHMgPSAoKHNlY29uZHNQYXNzZWRUb2RheSkgLyA4Ni40KSAlIDEwMDA7XG4gICAgICAgIGlmICh1bml4VGltZSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKGJlYXRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihiZWF0cyk7XG4gICAgICB9LFxuXG4gICAgICAvLyAxMi1Ib3VyczsgMS4uMTJcbiAgICAgIGc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYuRygpICUgMTIgfHwgMTI7IH0sXG5cbiAgICAgIC8vIDI0LUhvdXJzOyAwLi4yM1xuICAgICAgRzogZnVuY3Rpb24gKCkgeyByZXR1cm4ganNkYXRlLmdldEhvdXJzKCk7IH0sXG5cbiAgICAgIC8vIDEyLUhvdXJzIHcvbGVhZGluZyAwOyAwMS4uMTJcbiAgICAgIGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGh1bWFuaXplLnBhZChmLmcoKSwgMiwgJzAnKTsgfSxcblxuICAgICAgLy8gMjQtSG91cnMgdy9sZWFkaW5nIDA7IDAwLi4yM1xuICAgICAgSDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaHVtYW5pemUucGFkKGYuRygpLCAyLCAnMCcpOyB9LFxuXG4gICAgICAvLyBNaW51dGVzIHcvbGVhZGluZyAwOyAwMC4uNTlcbiAgICAgIGk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGh1bWFuaXplLnBhZChqc2RhdGUuZ2V0TWludXRlcygpLCAyLCAnMCcpOyB9LFxuXG4gICAgICAvLyBTZWNvbmRzIHcvbGVhZGluZyAwOyAwMC4uNTlcbiAgICAgIHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGh1bWFuaXplLnBhZChqc2RhdGUuZ2V0U2Vjb25kcygpLCAyLCAnMCcpOyB9LFxuXG4gICAgICAvLyBNaWNyb3NlY29uZHM7IDAwMDAwMC05OTkwMDBcbiAgICAgIHU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGh1bWFuaXplLnBhZChqc2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgKiAxMDAwLCA2LCAnMCcpOyB9LFxuXG4gICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgZGF0ZSBpcyBpbiBkYXlsaWdodCBzYXZpbmdzIHRpbWVcbiAgICAgIC8qXG4gICAgICBJOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENvbXBhcmVzIEphbiAxIG1pbnVzIEphbiAxIFVUQyB0byBKdWwgMSBtaW51cyBKdWwgMSBVVEMuXG4gICAgICAgIC8vIElmIHRoZXkgYXJlIG5vdCBlcXVhbCwgdGhlbiBEU1QgaXMgb2JzZXJ2ZWQuXG4gICAgICAgIHZhciBZID0gZi5ZKCk7XG4gICAgICAgIHJldHVybiAwICsgKChuZXcgRGF0ZShZLCAwKSAtIERhdGUuVVRDKFksIDApKSAhPT0gKG5ldyBEYXRlKFksIDYpIC0gRGF0ZS5VVEMoWSwgNikpKTtcbiAgICAgIH0sXG4gICAgICAqL1xuXG4gICAgICAvLyBEaWZmZXJlbmNlIHRvIEdNVCBpbiBob3VyIGZvcm1hdDsgZS5nLiArMDIwMFxuICAgICAgTzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHpvID0ganNkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgIHZhciB0em9OdW0gPSBNYXRoLmFicyh0em8pO1xuICAgICAgICByZXR1cm4gKHR6byA+IDAgPyAnLScgOiAnKycpICsgaHVtYW5pemUucGFkKE1hdGguZmxvb3IodHpvTnVtIC8gNjApICogMTAwICsgdHpvTnVtICUgNjAsIDQsICcwJyk7XG4gICAgICB9LFxuXG4gICAgICAvLyBEaWZmZXJlbmNlIHRvIEdNVCB3L2NvbG9uOyBlLmcuICswMjowMFxuICAgICAgUDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgTyA9IGYuTygpO1xuICAgICAgICByZXR1cm4gKE8uc3Vic3RyKDAsIDMpICsgJzonICsgTy5zdWJzdHIoMywgMikpO1xuICAgICAgfSxcblxuICAgICAgLy8gVGltZXpvbmUgb2Zmc2V0IGluIHNlY29uZHMgKC00MzIwMC4uNTA0MDApXG4gICAgICBaOiBmdW5jdGlvbiAoKSB7IHJldHVybiAtanNkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDsgfSxcblxuICAgICAgLy8gRnVsbCBEYXRlL1RpbWUsIElTTy04NjAxIGRhdGVcbiAgICAgIGM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdZLW0tZFxcXFxUSDppOnNQJy5yZXBsYWNlKGZvcm1hdENociwgZm9ybWF0Q2hyQ2IpOyB9LFxuXG4gICAgICAvLyBSRkMgMjgyMlxuICAgICAgcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0QsIGQgTSBZIEg6aTpzIE8nLnJlcGxhY2UoZm9ybWF0Q2hyLCBmb3JtYXRDaHJDYik7IH0sXG5cbiAgICAgIC8vIFNlY29uZHMgc2luY2UgVU5JWCBlcG9jaFxuICAgICAgVTogZnVuY3Rpb24gKCkgeyByZXR1cm4ganNkYXRlLmdldFRpbWUoKSAvIDEwMDAgfHwgMDsgfVxuICAgIH07ICAgIFxuXG4gICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKGZvcm1hdENociwgZm9ybWF0Q2hyQ2IpO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIGZvcm1hdCBudW1iZXIgYnkgYWRkaW5nIHRob3VzYW5kcyBzZXBhcmF0ZXJzIGFuZCBzaWduaWZpY2FudCBkaWdpdHMgd2hpbGUgcm91bmRpbmdcbiAgICovXG4gIGh1bWFuaXplLm51bWJlckZvcm1hdCA9IGZ1bmN0aW9uKG51bWJlciwgZGVjaW1hbHMsIGRlY1BvaW50LCB0aG91c2FuZHNTZXApIHtcbiAgICBkZWNpbWFscyA9IGlzTmFOKGRlY2ltYWxzKSA/IDIgOiBNYXRoLmFicyhkZWNpbWFscyk7XG4gICAgZGVjUG9pbnQgPSAoZGVjUG9pbnQgPT09IHVuZGVmaW5lZCkgPyAnLicgOiBkZWNQb2ludDtcbiAgICB0aG91c2FuZHNTZXAgPSAodGhvdXNhbmRzU2VwID09PSB1bmRlZmluZWQpID8gJywnIDogdGhvdXNhbmRzU2VwO1xuXG4gICAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gICAgbnVtYmVyID0gTWF0aC5hYnMoK251bWJlciB8fCAwKTtcblxuICAgIHZhciBpbnRQYXJ0ID0gcGFyc2VJbnQobnVtYmVyLnRvRml4ZWQoZGVjaW1hbHMpLCAxMCkgKyAnJztcbiAgICB2YXIgaiA9IGludFBhcnQubGVuZ3RoID4gMyA/IGludFBhcnQubGVuZ3RoICUgMyA6IDA7XG5cbiAgICByZXR1cm4gc2lnbiArIChqID8gaW50UGFydC5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHNTZXAgOiAnJykgKyBpbnRQYXJ0LnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgJyQxJyArIHRob3VzYW5kc1NlcCkgKyAoZGVjaW1hbHMgPyBkZWNQb2ludCArIE1hdGguYWJzKG51bWJlciAtIGludFBhcnQpLnRvRml4ZWQoZGVjaW1hbHMpLnNsaWNlKDIpIDogJycpO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIEZvciBkYXRlcyB0aGF0IGFyZSB0aGUgY3VycmVudCBkYXkgb3Igd2l0aGluIG9uZSBkYXksIHJldHVybiAndG9kYXknLCAndG9tb3Jyb3cnIG9yICd5ZXN0ZXJkYXknLCBhcyBhcHByb3ByaWF0ZS5cbiAgICogT3RoZXJ3aXNlLCBmb3JtYXQgdGhlIGRhdGUgdXNpbmcgdGhlIHBhc3NlZCBpbiBmb3JtYXQgc3RyaW5nLlxuICAgKlxuICAgKiBFeGFtcGxlcyAod2hlbiAndG9kYXknIGlzIDE3IEZlYiAyMDA3KTpcbiAgICogMTYgRmViIDIwMDcgYmVjb21lcyB5ZXN0ZXJkYXkuXG4gICAqIDE3IEZlYiAyMDA3IGJlY29tZXMgdG9kYXkuXG4gICAqIDE4IEZlYiAyMDA3IGJlY29tZXMgdG9tb3Jyb3cuXG4gICAqIEFueSBvdGhlciBkYXkgaXMgZm9ybWF0dGVkIGFjY29yZGluZyB0byBnaXZlbiBhcmd1bWVudCBvciB0aGUgREFURV9GT1JNQVQgc2V0dGluZyBpZiBubyBhcmd1bWVudCBpcyBnaXZlbi5cbiAgICovXG4gIGh1bWFuaXplLm5hdHVyYWxEYXkgPSBmdW5jdGlvbih0aW1lc3RhbXAsIGZvcm1hdCkge1xuICAgIHRpbWVzdGFtcCA9ICh0aW1lc3RhbXAgPT09IHVuZGVmaW5lZCkgPyBodW1hbml6ZS50aW1lKCkgOiB0aW1lc3RhbXA7XG4gICAgZm9ybWF0ID0gKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSA/ICdZLW0tZCcgOiBmb3JtYXQ7XG5cbiAgICB2YXIgb25lRGF5ID0gODY0MDA7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciB0b2RheSA9IChuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCkpKS5nZXRUaW1lKCkgLyAxMDAwO1xuXG4gICAgaWYgKHRpbWVzdGFtcCA8IHRvZGF5ICYmIHRpbWVzdGFtcCA+PSB0b2RheSAtIG9uZURheSkge1xuICAgICAgcmV0dXJuICd5ZXN0ZXJkYXknO1xuICAgIH0gZWxzZSBpZiAodGltZXN0YW1wID49IHRvZGF5ICYmIHRpbWVzdGFtcCA8IHRvZGF5ICsgb25lRGF5KSB7XG4gICAgICByZXR1cm4gJ3RvZGF5JztcbiAgICB9IGVsc2UgaWYgKHRpbWVzdGFtcCA+PSB0b2RheSArIG9uZURheSAmJiB0aW1lc3RhbXAgPCB0b2RheSArIDIgKiBvbmVEYXkpIHtcbiAgICAgIHJldHVybiAndG9tb3Jyb3cnO1xuICAgIH1cblxuICAgIHJldHVybiBodW1hbml6ZS5kYXRlKGZvcm1hdCwgdGltZXN0YW1wKTtcbiAgfTtcblxuICAvKipcbiAgICogcmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgaG93IG1hbnkgc2Vjb25kcywgbWludXRlcyBvciBob3VycyBhZ28gaXQgd2FzIG9yIHdpbGwgYmUgaW4gdGhlIGZ1dHVyZVxuICAgKiBXaWxsIGFsd2F5cyByZXR1cm4gYSByZWxhdGl2ZSB0aW1lLCBtb3N0IGdyYW51bGFyIG9mIHNlY29uZHMgdG8gbGVhc3QgZ3JhbnVsYXIgb2YgeWVhcnMuIFNlZSB1bml0IHRlc3RzIGZvciBtb3JlIGRldGFpbHNcbiAgICovXG4gIGh1bWFuaXplLnJlbGF0aXZlVGltZSA9IGZ1bmN0aW9uKHRpbWVzdGFtcCkge1xuICAgIHRpbWVzdGFtcCA9ICh0aW1lc3RhbXAgPT09IHVuZGVmaW5lZCkgPyBodW1hbml6ZS50aW1lKCkgOiB0aW1lc3RhbXA7XG5cbiAgICB2YXIgY3VyclRpbWUgPSBodW1hbml6ZS50aW1lKCk7XG4gICAgdmFyIHRpbWVEaWZmID0gY3VyclRpbWUgLSB0aW1lc3RhbXA7XG5cbiAgICAvLyB3aXRoaW4gMiBzZWNvbmRzXG4gICAgaWYgKHRpbWVEaWZmIDwgMiAmJiB0aW1lRGlmZiA+IC0yKSB7XG4gICAgICByZXR1cm4gKHRpbWVEaWZmID49IDAgPyAnanVzdCAnIDogJycpICsgJ25vdyc7XG4gICAgfVxuXG4gICAgLy8gd2l0aGluIGEgbWludXRlXG4gICAgaWYgKHRpbWVEaWZmIDwgNjAgJiYgdGltZURpZmYgPiAtNjApIHtcbiAgICAgIHJldHVybiAodGltZURpZmYgPj0gMCA/IE1hdGguZmxvb3IodGltZURpZmYpICsgJyBzZWNvbmRzIGFnbycgOiAnaW4gJyArIE1hdGguZmxvb3IoLXRpbWVEaWZmKSArICcgc2Vjb25kcycpO1xuICAgIH1cblxuICAgIC8vIHdpdGhpbiAyIG1pbnV0ZXNcbiAgICBpZiAodGltZURpZmYgPCAxMjAgJiYgdGltZURpZmYgPiAtMTIwKSB7XG4gICAgICByZXR1cm4gKHRpbWVEaWZmID49IDAgPyAnYWJvdXQgYSBtaW51dGUgYWdvJyA6ICdpbiBhYm91dCBhIG1pbnV0ZScpO1xuICAgIH1cblxuICAgIC8vIHdpdGhpbiBhbiBob3VyXG4gICAgaWYgKHRpbWVEaWZmIDwgMzYwMCAmJiB0aW1lRGlmZiA+IC0zNjAwKSB7XG4gICAgICByZXR1cm4gKHRpbWVEaWZmID49IDAgPyBNYXRoLmZsb29yKHRpbWVEaWZmIC8gNjApICsgJyBtaW51dGVzIGFnbycgOiAnaW4gJyArIE1hdGguZmxvb3IoLXRpbWVEaWZmIC8gNjApICsgJyBtaW51dGVzJyk7XG4gICAgfVxuXG4gICAgLy8gd2l0aGluIDIgaG91cnNcbiAgICBpZiAodGltZURpZmYgPCA3MjAwICYmIHRpbWVEaWZmID4gLTcyMDApIHtcbiAgICAgIHJldHVybiAodGltZURpZmYgPj0gMCA/ICdhYm91dCBhbiBob3VyIGFnbycgOiAnaW4gYWJvdXQgYW4gaG91cicpO1xuICAgIH1cblxuICAgIC8vIHdpdGhpbiAyNCBob3Vyc1xuICAgIGlmICh0aW1lRGlmZiA8IDg2NDAwICYmIHRpbWVEaWZmID4gLTg2NDAwKSB7XG4gICAgICByZXR1cm4gKHRpbWVEaWZmID49IDAgPyBNYXRoLmZsb29yKHRpbWVEaWZmIC8gMzYwMCkgKyAnIGhvdXJzIGFnbycgOiAnaW4gJyArIE1hdGguZmxvb3IoLXRpbWVEaWZmIC8gMzYwMCkgKyAnIGhvdXJzJyk7XG4gICAgfVxuXG4gICAgLy8gd2l0aGluIDIgZGF5c1xuICAgIHZhciBkYXlzMiA9IDIgKiA4NjQwMDtcbiAgICBpZiAodGltZURpZmYgPCBkYXlzMiAmJiB0aW1lRGlmZiA+IC1kYXlzMikge1xuICAgICAgcmV0dXJuICh0aW1lRGlmZiA+PSAwID8gJzEgZGF5IGFnbycgOiAnaW4gMSBkYXknKTtcbiAgICB9XG5cbiAgICAvLyB3aXRoaW4gMjkgZGF5c1xuICAgIHZhciBkYXlzMjkgPSAyOSAqIDg2NDAwO1xuICAgIGlmICh0aW1lRGlmZiA8IGRheXMyOSAmJiB0aW1lRGlmZiA+IC1kYXlzMjkpIHtcbiAgICAgIHJldHVybiAodGltZURpZmYgPj0gMCA/IE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCkgKyAnIGRheXMgYWdvJyA6ICdpbiAnICsgTWF0aC5mbG9vcigtdGltZURpZmYgLyA4NjQwMCkgKyAnIGRheXMnKTtcbiAgICB9XG5cbiAgICAvLyB3aXRoaW4gNjAgZGF5c1xuICAgIHZhciBkYXlzNjAgPSA2MCAqIDg2NDAwO1xuICAgIGlmICh0aW1lRGlmZiA8IGRheXM2MCAmJiB0aW1lRGlmZiA+IC1kYXlzNjApIHtcbiAgICAgIHJldHVybiAodGltZURpZmYgPj0gMCA/ICdhYm91dCBhIG1vbnRoIGFnbycgOiAnaW4gYWJvdXQgYSBtb250aCcpO1xuICAgIH1cblxuICAgIHZhciBjdXJyVGltZVllYXJzID0gcGFyc2VJbnQoaHVtYW5pemUuZGF0ZSgnWScsIGN1cnJUaW1lKSwgMTApO1xuICAgIHZhciB0aW1lc3RhbXBZZWFycyA9IHBhcnNlSW50KGh1bWFuaXplLmRhdGUoJ1knLCB0aW1lc3RhbXApLCAxMCk7XG4gICAgdmFyIGN1cnJUaW1lTW9udGhzID0gY3VyclRpbWVZZWFycyAqIDEyICsgcGFyc2VJbnQoaHVtYW5pemUuZGF0ZSgnbicsIGN1cnJUaW1lKSwgMTApO1xuICAgIHZhciB0aW1lc3RhbXBNb250aHMgPSB0aW1lc3RhbXBZZWFycyAqIDEyICsgcGFyc2VJbnQoaHVtYW5pemUuZGF0ZSgnbicsIHRpbWVzdGFtcCksIDEwKTtcblxuICAgIC8vIHdpdGhpbiBhIHllYXJcbiAgICB2YXIgbW9udGhEaWZmID0gY3VyclRpbWVNb250aHMgLSB0aW1lc3RhbXBNb250aHM7XG4gICAgaWYgKG1vbnRoRGlmZiA8IDEyICYmIG1vbnRoRGlmZiA+IC0xMikge1xuICAgICAgcmV0dXJuIChtb250aERpZmYgPj0gMCA/IG1vbnRoRGlmZiArICcgbW9udGhzIGFnbycgOiAnaW4gJyArICgtbW9udGhEaWZmKSArICcgbW9udGhzJyk7XG4gICAgfVxuXG4gICAgdmFyIHllYXJEaWZmID0gY3VyclRpbWVZZWFycyAtIHRpbWVzdGFtcFllYXJzO1xuICAgIGlmICh5ZWFyRGlmZiA8IDIgJiYgeWVhckRpZmYgPiAtMikge1xuICAgICAgcmV0dXJuICh5ZWFyRGlmZiA+PSAwID8gJ2EgeWVhciBhZ28nIDogJ2luIGEgeWVhcicpO1xuICAgIH1cblxuICAgIHJldHVybiAoeWVhckRpZmYgPj0gMCA/IHllYXJEaWZmICsgJyB5ZWFycyBhZ28nIDogJ2luICcgKyAoLXllYXJEaWZmKSArICcgeWVhcnMnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgYW4gaW50ZWdlciB0byBpdHMgb3JkaW5hbCBhcyBhIHN0cmluZy5cbiAgICpcbiAgICogMSBiZWNvbWVzIDFzdFxuICAgKiAyIGJlY29tZXMgMm5kXG4gICAqIDMgYmVjb21lcyAzcmQgZXRjXG4gICAqL1xuICBodW1hbml6ZS5vcmRpbmFsID0gZnVuY3Rpb24obnVtYmVyKSB7XG4gICAgbnVtYmVyID0gcGFyc2VJbnQobnVtYmVyLCAxMCk7XG4gICAgbnVtYmVyID0gaXNOYU4obnVtYmVyKSA/IDAgOiBudW1iZXI7XG4gICAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gICAgbnVtYmVyID0gTWF0aC5hYnMobnVtYmVyKTtcbiAgICB2YXIgdGVucyA9IG51bWJlciAlIDEwMDtcblxuICAgIHJldHVybiBzaWduICsgbnVtYmVyICsgKHRlbnMgPiA0ICYmIHRlbnMgPCAyMSA/ICd0aCcgOiB7MTogJ3N0JywgMjogJ25kJywgMzogJ3JkJ31bbnVtYmVyICUgMTBdIHx8ICd0aCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JtYXRzIHRoZSB2YWx1ZSBsaWtlIGEgJ2h1bWFuLXJlYWRhYmxlJyBmaWxlIHNpemUgKGkuZS4gJzEzIEtCJywgJzQuMSBNQicsICcxMDIgYnl0ZXMnLCBldGMpLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogSWYgdmFsdWUgaXMgMTIzNDU2Nzg5LCB0aGUgb3V0cHV0IHdvdWxkIGJlIDExNy43IE1CLlxuICAgKi9cbiAgaHVtYW5pemUuZmlsZXNpemUgPSBmdW5jdGlvbihmaWxlc2l6ZSwga2lsbywgZGVjaW1hbHMsIGRlY1BvaW50LCB0aG91c2FuZHNTZXAsIHN1ZmZpeFNlcCkge1xuICAgIGtpbG8gPSAoa2lsbyA9PT0gdW5kZWZpbmVkKSA/IDEwMjQgOiBraWxvO1xuICAgIGlmIChmaWxlc2l6ZSA8PSAwKSB7IHJldHVybiAnMCBieXRlcyc7IH1cbiAgICBpZiAoZmlsZXNpemUgPCBraWxvICYmIGRlY2ltYWxzID09PSB1bmRlZmluZWQpIHsgZGVjaW1hbHMgPSAwOyB9XG4gICAgaWYgKHN1ZmZpeFNlcCA9PT0gdW5kZWZpbmVkKSB7IHN1ZmZpeFNlcCA9ICcgJzsgfVxuICAgIHJldHVybiBodW1hbml6ZS5pbnR3b3JkKGZpbGVzaXplLCBbJ2J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJ10sIGtpbG8sIGRlY2ltYWxzLCBkZWNQb2ludCwgdGhvdXNhbmRzU2VwLCBzdWZmaXhTZXApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JtYXRzIHRoZSB2YWx1ZSBsaWtlIGEgJ2h1bWFuLXJlYWRhYmxlJyBudW1iZXIgKGkuZS4gJzEzIEsnLCAnNC4xIE0nLCAnMTAyJywgZXRjKS5cbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqIElmIHZhbHVlIGlzIDEyMzQ1Njc4OSwgdGhlIG91dHB1dCB3b3VsZCBiZSAxMTcuNyBNLlxuICAgKi9cbiAgaHVtYW5pemUuaW50d29yZCA9IGZ1bmN0aW9uKG51bWJlciwgdW5pdHMsIGtpbG8sIGRlY2ltYWxzLCBkZWNQb2ludCwgdGhvdXNhbmRzU2VwLCBzdWZmaXhTZXApIHtcbiAgICB2YXIgaHVtYW5pemVkLCB1bml0O1xuXG4gICAgdW5pdHMgPSB1bml0cyB8fCBbJycsICdLJywgJ00nLCAnQicsICdUJ10sXG4gICAgdW5pdCA9IHVuaXRzLmxlbmd0aCAtIDEsXG4gICAga2lsbyA9IGtpbG8gfHwgMTAwMCxcbiAgICBkZWNpbWFscyA9IGlzTmFOKGRlY2ltYWxzKSA/IDIgOiBNYXRoLmFicyhkZWNpbWFscyksXG4gICAgZGVjUG9pbnQgPSBkZWNQb2ludCB8fCAnLicsXG4gICAgdGhvdXNhbmRzU2VwID0gdGhvdXNhbmRzU2VwIHx8ICcsJyxcbiAgICBzdWZmaXhTZXAgPSBzdWZmaXhTZXAgfHwgJyc7XG5cbiAgICBmb3IgKHZhciBpPTA7IGkgPCB1bml0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG51bWJlciA8IE1hdGgucG93KGtpbG8sIGkrMSkpIHtcbiAgICAgICAgdW5pdCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBodW1hbml6ZWQgPSBudW1iZXIgLyBNYXRoLnBvdyhraWxvLCB1bml0KTtcblxuICAgIHZhciBzdWZmaXggPSB1bml0c1t1bml0XSA/IHN1ZmZpeFNlcCArIHVuaXRzW3VuaXRdIDogJyc7XG4gICAgcmV0dXJuIGh1bWFuaXplLm51bWJlckZvcm1hdChodW1hbml6ZWQsIGRlY2ltYWxzLCBkZWNQb2ludCwgdGhvdXNhbmRzU2VwKSArIHN1ZmZpeDtcbiAgfTtcblxuICAvKipcbiAgICogUmVwbGFjZXMgbGluZSBicmVha3MgaW4gcGxhaW4gdGV4dCB3aXRoIGFwcHJvcHJpYXRlIEhUTUxcbiAgICogQSBzaW5nbGUgbmV3bGluZSBiZWNvbWVzIGFuIEhUTUwgbGluZSBicmVhayAoPGJyIC8+KSBhbmQgYSBuZXcgbGluZSBmb2xsb3dlZCBieSBhIGJsYW5rIGxpbmUgYmVjb21lcyBhIHBhcmFncmFwaCBicmVhayAoPC9wPikuXG4gICAqIFxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogSWYgdmFsdWUgaXMgSm9lbFxcbmlzIGFcXG5cXG5zbHVnLCB0aGUgb3V0cHV0IHdpbGwgYmUgPHA+Sm9lbDxiciAvPmlzIGE8L3A+PHA+c2x1ZzwvcD5cbiAgICovXG4gIGh1bWFuaXplLmxpbmVicmVha3MgPSBmdW5jdGlvbihzdHIpIHtcbiAgICAvLyByZW1vdmUgYmVnaW5uaW5nIGFuZCBlbmRpbmcgbmV3bGluZXNcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXihbXFxufFxccl0qKS8sICcnKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFtcXG58XFxyXSopJC8sICcnKTtcblxuICAgIC8vIG5vcm1hbGl6ZSBhbGwgdG8gXFxuXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZywgXCJcXG5cIik7XG5cbiAgICAvLyBhbnkgY29uc2VjdXRpdmUgbmV3IGxpbmVzIG1vcmUgdGhhbiAyIGdldHMgdHVybmVkIGludG8gcCB0YWdzXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhcXG57Mix9KS9nLCAnPC9wPjxwPicpO1xuXG4gICAgLy8gYW55IHRoYXQgYXJlIHNpbmdsZXRvbnMgZ2V0IHR1cm5lZCBpbnRvIGJyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+Jyk7XG4gICAgcmV0dXJuICc8cD4nICsgc3RyICsgJzwvcD4nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbGwgbmV3bGluZXMgaW4gYSBwaWVjZSBvZiBwbGFpbiB0ZXh0IHRvIEhUTUwgbGluZSBicmVha3MgKDxiciAvPikuXG4gICAqL1xuICBodW1hbml6ZS5ubDJiciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nLCAnPGJyIC8+Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRydW5jYXRlcyBhIHN0cmluZyBpZiBpdCBpcyBsb25nZXIgdGhhbiB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBjaGFyYWN0ZXJzLlxuICAgKiBUcnVuY2F0ZWQgc3RyaW5ncyB3aWxsIGVuZCB3aXRoIGEgdHJhbnNsYXRhYmxlIGVsbGlwc2lzIHNlcXVlbmNlICgn4oCmJykuXG4gICAqL1xuICBodW1hbml6ZS50cnVuY2F0ZWNoYXJzID0gZnVuY3Rpb24oc3RyaW5nLCBsZW5ndGgpIHtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA8PSBsZW5ndGgpIHsgcmV0dXJuIHN0cmluZzsgfVxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyKDAsIGxlbmd0aCkgKyAn4oCmJztcbiAgfTtcblxuICAvKipcbiAgICogVHJ1bmNhdGVzIGEgc3RyaW5nIGFmdGVyIGEgY2VydGFpbiBudW1iZXIgb2Ygd29yZHMuXG4gICAqIE5ld2xpbmVzIHdpdGhpbiB0aGUgc3RyaW5nIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIGh1bWFuaXplLnRydW5jYXRld29yZHMgPSBmdW5jdGlvbihzdHJpbmcsIG51bVdvcmRzKSB7XG4gICAgdmFyIHdvcmRzID0gc3RyaW5nLnNwbGl0KCcgJyk7XG4gICAgaWYgKHdvcmRzLmxlbmd0aCA8IG51bVdvcmRzKSB7IHJldHVybiBzdHJpbmc7IH1cbiAgICByZXR1cm4gd29yZHMuc2xpY2UoMCwgbnVtV29yZHMpLmpvaW4oJyAnKSArICfigKYnO1xuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHVtYW5pemUvaHVtYW5pemUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=