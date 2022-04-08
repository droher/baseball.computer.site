var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// ../../node_modules/wasm-feature-detect/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/wasm-feature-detect/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var e = async (e2) => {
      try {
        return (await WebAssembly.instantiate(e2)).instance.exports.b(BigInt(0)) === BigInt(0);
      } catch (e3) {
        return false;
      }
    };
    var a = async (e2) => {
      try {
        return typeof MessageChannel != "undefined" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e2);
      } catch (e3) {
        return false;
      }
    };
    var n = { bigInt: () => e(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 126, 1, 126, 3, 2, 1, 0, 7, 5, 1, 1, 98, 0, 0, 10, 6, 1, 4, 0, 32, 0, 11])), bulkMemory: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), exceptions: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), multiValue: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 0, 2, 127, 127, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 65, 0, 11])), mutableGlobals: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 2, 8, 1, 1, 97, 1, 98, 3, 127, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 5, 1, 1, 97, 3, 1])), referenceTypes: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1, 5, 0, 208, 112, 26, 11])), saturatedFloatToInt: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11])), signExtensions: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11])), simd: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), tailCall: async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 6, 1, 4, 0, 18, 0, 11])), threads: () => a(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])) };
    module2.exports = n;
  }
});

// ../../node_modules/fast-glob/out/utils/array.js
var require_array = __commonJS({
  "../../node_modules/fast-glob/out/utils/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitWhen = exports.flatten = void 0;
    function flatten(items) {
      return items.reduce((collection, item) => [].concat(collection, item), []);
    }
    exports.flatten = flatten;
    function splitWhen(items, predicate) {
      const result = [[]];
      let groupIndex = 0;
      for (const item of items) {
        if (predicate(item)) {
          groupIndex++;
          result[groupIndex] = [];
        } else {
          result[groupIndex].push(item);
        }
      }
      return result;
    }
    exports.splitWhen = splitWhen;
  }
});

// ../../node_modules/fast-glob/out/utils/errno.js
var require_errno = __commonJS({
  "../../node_modules/fast-glob/out/utils/errno.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEnoentCodeError = void 0;
    function isEnoentCodeError(error) {
      return error.code === "ENOENT";
    }
    exports.isEnoentCodeError = isEnoentCodeError;
  }
});

// ../../node_modules/fast-glob/out/utils/fs.js
var require_fs = __commonJS({
  "../../node_modules/fast-glob/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// ../../node_modules/fast-glob/out/utils/path.js
var require_path = __commonJS({
  "../../node_modules/fast-glob/out/utils/path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeLeadingDotSegment = exports.escape = exports.makeAbsolute = exports.unixify = void 0;
    var path2 = require("path");
    var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
    var UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
    function unixify(filepath) {
      return filepath.replace(/\\/g, "/");
    }
    exports.unixify = unixify;
    function makeAbsolute(cwd, filepath) {
      return path2.resolve(cwd, filepath);
    }
    exports.makeAbsolute = makeAbsolute;
    function escape(pattern) {
      return pattern.replace(UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escape = escape;
    function removeLeadingDotSegment(entry) {
      if (entry.charAt(0) === ".") {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === "/" || secondCharactery === "\\") {
          return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
      }
      return entry;
    }
    exports.removeLeadingDotSegment = removeLeadingDotSegment;
  }
});

// ../../node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "../../node_modules/is-extglob/index.js"(exports, module2) {
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2])
          return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// ../../node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "../../node_modules/is-glob/index.js"(exports, module2) {
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check2 = strictCheck;
      if (options && options.strict === false) {
        check2 = relaxedCheck;
      }
      return check2(str);
    };
  }
});

// ../../node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "../../node_modules/glob-parent/index.js"(exports, module2) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = require("path").posix.dirname;
    var isWin32 = require("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts) {
      var options = Object.assign({ flipBackslashes: true }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// ../../node_modules/braces/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false)
        return false;
      if (!exports.isInteger(min) || !exports.isInteger(max))
        return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      let node = block.nodes[n];
      if (!node)
        return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace")
        return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace")
        return false;
      if (block.invalid === true || block.dollar)
        return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text")
        acc.push(node.value);
      if (node.type === "range")
        node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          let ele = arr[i];
          Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// ../../node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/braces/lib/stringify.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = (ast, options = {}) => {
      let stringify = (node, parent = {}) => {
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});

// ../../node_modules/is-number/index.js
var require_is_number = __commonJS({
  "../../node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// ../../node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "../../node_modules/to-regex-range/index.js"(exports, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = __spreadValues({ relaxZeros: true }, options);
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++)
        arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// ../../node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "../../node_modules/fill-range/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-")
        value = value.slice(1);
      if (value === "0")
        return false;
      while (value[++index] === "0")
        ;
      return index > 0;
    };
    var stringify = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash)
          input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength)
        input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, __spreadValues({ wrap: false }, options));
      }
      let start = String.fromCharCode(a);
      if (a === b)
        return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true)
        throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      }
      if (a === 0)
        a = 0;
      if (b === 0)
        b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, __spreadValues({ wrap: false }, options));
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = __spreadValues({}, options);
      if (opts.capture === true)
        opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step))
          return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// ../../node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "../../node_modules/braces/lib/compile.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils();
    var compile = (ast, options = {}) => {
      let walk = (node, parent = {}) => {
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          let range = fill(...args, __spreadProps(__spreadValues({}, options), { wrap: false, toRegex: true }));
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// ../../node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "../../node_modules/braces/lib/expand.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils();
    var append = (queue = "", stash = "", enclose = false) => {
      let result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length)
        return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (let item of queue) {
        if (Array.isArray(item)) {
          for (let value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string")
              ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      let walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          let child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1)
              queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// ../../node_modules/braces/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      CHAR_0: "0",
      CHAR_9: "9",
      CHAR_UPPERCASE_A: "A",
      CHAR_LOWERCASE_A: "a",
      CHAR_UPPERCASE_Z: "Z",
      CHAR_LOWERCASE_Z: "z",
      CHAR_LEFT_PARENTHESES: "(",
      CHAR_RIGHT_PARENTHESES: ")",
      CHAR_ASTERISK: "*",
      CHAR_AMPERSAND: "&",
      CHAR_AT: "@",
      CHAR_BACKSLASH: "\\",
      CHAR_BACKTICK: "`",
      CHAR_CARRIAGE_RETURN: "\r",
      CHAR_CIRCUMFLEX_ACCENT: "^",
      CHAR_COLON: ":",
      CHAR_COMMA: ",",
      CHAR_DOLLAR: "$",
      CHAR_DOT: ".",
      CHAR_DOUBLE_QUOTE: '"',
      CHAR_EQUAL: "=",
      CHAR_EXCLAMATION_MARK: "!",
      CHAR_FORM_FEED: "\f",
      CHAR_FORWARD_SLASH: "/",
      CHAR_HASH: "#",
      CHAR_HYPHEN_MINUS: "-",
      CHAR_LEFT_ANGLE_BRACKET: "<",
      CHAR_LEFT_CURLY_BRACE: "{",
      CHAR_LEFT_SQUARE_BRACKET: "[",
      CHAR_LINE_FEED: "\n",
      CHAR_NO_BREAK_SPACE: "\xA0",
      CHAR_PERCENT: "%",
      CHAR_PLUS: "+",
      CHAR_QUESTION_MARK: "?",
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      CHAR_RIGHT_CURLY_BRACE: "}",
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      CHAR_SEMICOLON: ";",
      CHAR_SINGLE_QUOTE: "'",
      CHAR_SPACE: " ",
      CHAR_TAB: "	",
      CHAR_UNDERSCORE: "_",
      CHAR_VERTICAL_LINE: "|",
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
    };
  }
});

// ../../node_modules/braces/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      CHAR_BACKTICK,
      CHAR_COMMA,
      CHAR_DOT,
      CHAR_LEFT_PARENTHESES,
      CHAR_RIGHT_PARENTHESES,
      CHAR_LEFT_CURLY_BRACE,
      CHAR_RIGHT_CURLY_BRACE,
      CHAR_LEFT_SQUARE_BRACKET,
      CHAR_RIGHT_SQUARE_BRACKET,
      CHAR_DOUBLE_QUOTE,
      CHAR_SINGLE_QUOTE,
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      let opts = options || {};
      let max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      let ast = { type: "root", input, nodes: [] };
      let stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      let length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      let memo = {};
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let closed = true;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          let open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true)
                value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          let brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          let type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            let open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          let siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            let before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open")
                node.isOpen = true;
              if (node.type === "close")
                node.isClose = true;
              if (!node.nodes)
                node.type = "text";
              node.invalid = true;
            }
          });
          let parent = stack[stack.length - 1];
          let index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// ../../node_modules/braces/index.js
var require_braces = __commonJS({
  "../../node_modules/braces/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (let pattern of input) {
          let result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// ../../node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var path2 = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = __spreadProps(__spreadValues({}, POSIX_CHARS), {
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    });
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      CHAR_0: 48,
      CHAR_9: 57,
      CHAR_UPPERCASE_A: 65,
      CHAR_LOWERCASE_A: 97,
      CHAR_UPPERCASE_Z: 90,
      CHAR_LOWERCASE_Z: 122,
      CHAR_LEFT_PARENTHESES: 40,
      CHAR_RIGHT_PARENTHESES: 41,
      CHAR_ASTERISK: 42,
      CHAR_AMPERSAND: 38,
      CHAR_AT: 64,
      CHAR_BACKWARD_SLASH: 92,
      CHAR_CARRIAGE_RETURN: 13,
      CHAR_CIRCUMFLEX_ACCENT: 94,
      CHAR_COLON: 58,
      CHAR_COMMA: 44,
      CHAR_DOT: 46,
      CHAR_DOUBLE_QUOTE: 34,
      CHAR_EQUAL: 61,
      CHAR_EXCLAMATION_MARK: 33,
      CHAR_FORM_FEED: 12,
      CHAR_FORWARD_SLASH: 47,
      CHAR_GRAVE_ACCENT: 96,
      CHAR_HASH: 35,
      CHAR_HYPHEN_MINUS: 45,
      CHAR_LEFT_ANGLE_BRACKET: 60,
      CHAR_LEFT_CURLY_BRACE: 123,
      CHAR_LEFT_SQUARE_BRACKET: 91,
      CHAR_LINE_FEED: 10,
      CHAR_NO_BREAK_SPACE: 160,
      CHAR_PERCENT: 37,
      CHAR_PLUS: 43,
      CHAR_QUESTION_MARK: 63,
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      CHAR_RIGHT_CURLY_BRACE: 125,
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      CHAR_SEMICOLON: 59,
      CHAR_SINGLE_QUOTE: 39,
      CHAR_SPACE: 32,
      CHAR_TAB: 9,
      CHAR_UNDERSCORE: 95,
      CHAR_VERTICAL_LINE: 124,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      SEP: path2.sep,
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// ../../node_modules/picomatch/lib/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path2 = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path2.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1)
        return input;
      if (input[idx - 1] === "\\")
        return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// ../../node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "../../node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var {
      CHAR_ASTERISK,
      CHAR_AT,
      CHAR_BACKWARD_SLASH,
      CHAR_COMMA,
      CHAR_DOT,
      CHAR_EXCLAMATION_MARK,
      CHAR_FORWARD_SLASH,
      CHAR_LEFT_CURLY_BRACE,
      CHAR_LEFT_PARENTHESES,
      CHAR_LEFT_SQUARE_BRACKET,
      CHAR_PLUS,
      CHAR_QUESTION_MARK,
      CHAR_RIGHT_CURLY_BRACE,
      CHAR_RIGHT_PARENTHESES,
      CHAR_RIGHT_SQUARE_BRACKET
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true)
            continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK)
            isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob)
          glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// ../../node_modules/picomatch/lib/parse.js
var require_parse2 = __commonJS({
  "../../node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    var constants = require_constants2();
    var utils = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output)
          append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = __spreadProps(__spreadValues({}, EXTGLOB_CHARS[value2]), { conditions: 1, inner: "" });
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            output = token.close = `)${rest})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".")
              prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true)
          return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match)
              return;
            const source2 = create(match[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// ../../node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "../../node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    var path2 = require("path");
    var scan = require_scan();
    var parse = require_parse2();
    var utils = require_utils2();
    var constants = require_constants2();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2)
              return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = __spreadProps(__spreadValues({}, options), { ignore: null, onMatch: null, onResult: null });
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path2.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, __spreadProps(__spreadValues({}, options), { fastpaths: false }));
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true)
          throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// ../../node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "../../node_modules/picomatch/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// ../../node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "../../node_modules/micromatch/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils = require_utils2();
    var isEmptyString = (val) => val === "" || val === "./";
    var micromatch = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options && options.onResult) {
          options.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), __spreadProps(__spreadValues({}, options), { onResult }), true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated)
          negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match)
            continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch.match = micromatch;
    micromatch.matcher = (pattern, options) => picomatch(pattern, options);
    micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    micromatch.any = micromatch.isMatch;
    micromatch.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state) => {
        if (options.onResult)
          options.onResult(state);
        items.push(state.output);
      };
      let matches = micromatch(list, patterns, __spreadProps(__spreadValues({}, options), { onResult }));
      for (let item of items) {
        if (!matches.includes(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch.isMatch(str, pattern, __spreadProps(__spreadValues({}, options), { contains: true }));
    };
    micromatch.matchKeys = (obj, patterns, options) => {
      if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys)
        res[key] = obj[key];
      return res;
    };
    micromatch.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options)(str));
    };
    micromatch.capture = (glob, input, options) => {
      let posix = utils.isWindows(options);
      let regex = picomatch.makeRe(String(glob), __spreadProps(__spreadValues({}, options), { capture: true }));
      let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch.scan = (...args) => picomatch.scan(...args);
    micromatch.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch.parse(str, options));
        }
      }
      return res;
    };
    micromatch.braces = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      return micromatch.braces(pattern, __spreadProps(__spreadValues({}, options), { expand: true }));
    };
    module2.exports = micromatch;
  }
});

// ../../node_modules/fast-glob/out/utils/pattern.js
var require_pattern = __commonJS({
  "../../node_modules/fast-glob/out/utils/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
    var path2 = require("path");
    var globParent = require_glob_parent();
    var micromatch = require_micromatch();
    var GLOBSTAR = "**";
    var ESCAPE_SYMBOL = "\\";
    var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
    var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
    var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
    var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
    var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
    function isStaticPattern(pattern, options = {}) {
      return !isDynamicPattern(pattern, options);
    }
    exports.isStaticPattern = isStaticPattern;
    function isDynamicPattern(pattern, options = {}) {
      if (pattern === "") {
        return false;
      }
      if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
      }
      if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
        return true;
      }
      return false;
    }
    exports.isDynamicPattern = isDynamicPattern;
    function hasBraceExpansion(pattern) {
      const openingBraceIndex = pattern.indexOf("{");
      if (openingBraceIndex === -1) {
        return false;
      }
      const closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
      if (closingBraceIndex === -1) {
        return false;
      }
      const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
      return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
    }
    function convertToPositivePattern(pattern) {
      return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
    }
    exports.convertToPositivePattern = convertToPositivePattern;
    function convertToNegativePattern(pattern) {
      return "!" + pattern;
    }
    exports.convertToNegativePattern = convertToNegativePattern;
    function isNegativePattern(pattern) {
      return pattern.startsWith("!") && pattern[1] !== "(";
    }
    exports.isNegativePattern = isNegativePattern;
    function isPositivePattern(pattern) {
      return !isNegativePattern(pattern);
    }
    exports.isPositivePattern = isPositivePattern;
    function getNegativePatterns(patterns) {
      return patterns.filter(isNegativePattern);
    }
    exports.getNegativePatterns = getNegativePatterns;
    function getPositivePatterns(patterns) {
      return patterns.filter(isPositivePattern);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getPatternsInsideCurrentDirectory(patterns) {
      return patterns.filter((pattern) => !isPatternRelatedToParentDirectory(pattern));
    }
    exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
    function getPatternsOutsideCurrentDirectory(patterns) {
      return patterns.filter(isPatternRelatedToParentDirectory);
    }
    exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
    function isPatternRelatedToParentDirectory(pattern) {
      return pattern.startsWith("..") || pattern.startsWith("./..");
    }
    exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
    function getBaseDirectory(pattern) {
      return globParent(pattern, { flipBackslashes: false });
    }
    exports.getBaseDirectory = getBaseDirectory;
    function hasGlobStar(pattern) {
      return pattern.includes(GLOBSTAR);
    }
    exports.hasGlobStar = hasGlobStar;
    function endsWithSlashGlobStar(pattern) {
      return pattern.endsWith("/" + GLOBSTAR);
    }
    exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
    function isAffectDepthOfReadingPattern(pattern) {
      const basename = path2.basename(pattern);
      return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
    }
    exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
    function expandPatternsWithBraceExpansion(patterns) {
      return patterns.reduce((collection, pattern) => {
        return collection.concat(expandBraceExpansion(pattern));
      }, []);
    }
    exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
    function expandBraceExpansion(pattern) {
      return micromatch.braces(pattern, {
        expand: true,
        nodupes: true
      });
    }
    exports.expandBraceExpansion = expandBraceExpansion;
    function getPatternParts(pattern, options) {
      let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), { parts: true }));
      if (parts.length === 0) {
        parts = [pattern];
      }
      if (parts[0].startsWith("/")) {
        parts[0] = parts[0].slice(1);
        parts.unshift("");
      }
      return parts;
    }
    exports.getPatternParts = getPatternParts;
    function makeRe(pattern, options) {
      return micromatch.makeRe(pattern, options);
    }
    exports.makeRe = makeRe;
    function convertPatternsToRe(patterns, options) {
      return patterns.map((pattern) => makeRe(pattern, options));
    }
    exports.convertPatternsToRe = convertPatternsToRe;
    function matchAny(entry, patternsRe) {
      return patternsRe.some((patternRe) => patternRe.test(entry));
    }
    exports.matchAny = matchAny;
  }
});

// ../../node_modules/merge2/index.js
var require_merge2 = __commonJS({
  "../../node_modules/merge2/index.js"(exports, module2) {
    "use strict";
    var Stream = require("stream");
    var PassThrough = Stream.PassThrough;
    var slice = Array.prototype.slice;
    module2.exports = merge2;
    function merge2() {
      const streamsQueue = [];
      const args = slice.call(arguments);
      let merging = false;
      let options = args[args.length - 1];
      if (options && !Array.isArray(options) && options.pipe == null) {
        args.pop();
      } else {
        options = {};
      }
      const doEnd = options.end !== false;
      const doPipeError = options.pipeError === true;
      if (options.objectMode == null) {
        options.objectMode = true;
      }
      if (options.highWaterMark == null) {
        options.highWaterMark = 64 * 1024;
      }
      const mergedStream = PassThrough(options);
      function addStream() {
        for (let i = 0, len = arguments.length; i < len; i++) {
          streamsQueue.push(pauseStreams(arguments[i], options));
        }
        mergeStream();
        return this;
      }
      function mergeStream() {
        if (merging) {
          return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
          process.nextTick(endStream);
          return;
        }
        if (!Array.isArray(streams)) {
          streams = [streams];
        }
        let pipesCount = streams.length + 1;
        function next() {
          if (--pipesCount > 0) {
            return;
          }
          merging = false;
          mergeStream();
        }
        function pipe(stream) {
          function onend() {
            stream.removeListener("merge2UnpipeEnd", onend);
            stream.removeListener("end", onend);
            if (doPipeError) {
              stream.removeListener("error", onerror);
            }
            next();
          }
          function onerror(err) {
            mergedStream.emit("error", err);
          }
          if (stream._readableState.endEmitted) {
            return next();
          }
          stream.on("merge2UnpipeEnd", onend);
          stream.on("end", onend);
          if (doPipeError) {
            stream.on("error", onerror);
          }
          stream.pipe(mergedStream, { end: false });
          stream.resume();
        }
        for (let i = 0; i < streams.length; i++) {
          pipe(streams[i]);
        }
        next();
      }
      function endStream() {
        merging = false;
        mergedStream.emit("queueDrain");
        if (doEnd) {
          mergedStream.end();
        }
      }
      mergedStream.setMaxListeners(0);
      mergedStream.add = addStream;
      mergedStream.on("unpipe", function(stream) {
        stream.emit("merge2UnpipeEnd");
      });
      if (args.length) {
        addStream.apply(null, args);
      }
      return mergedStream;
    }
    function pauseStreams(streams, options) {
      if (!Array.isArray(streams)) {
        if (!streams._readableState && streams.pipe) {
          streams = streams.pipe(PassThrough(options));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
          throw new Error("Only readable stream can be merged.");
        }
        streams.pause();
      } else {
        for (let i = 0, len = streams.length; i < len; i++) {
          streams[i] = pauseStreams(streams[i], options);
        }
      }
      return streams;
    }
  }
});

// ../../node_modules/fast-glob/out/utils/stream.js
var require_stream = __commonJS({
  "../../node_modules/fast-glob/out/utils/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var merge2 = require_merge2();
    function merge(streams) {
      const mergedStream = merge2(streams);
      streams.forEach((stream) => {
        stream.once("error", (error) => mergedStream.emit("error", error));
      });
      mergedStream.once("close", () => propagateCloseEventToSources(streams));
      mergedStream.once("end", () => propagateCloseEventToSources(streams));
      return mergedStream;
    }
    exports.merge = merge;
    function propagateCloseEventToSources(streams) {
      streams.forEach((stream) => stream.emit("close"));
    }
  }
});

// ../../node_modules/fast-glob/out/utils/string.js
var require_string = __commonJS({
  "../../node_modules/fast-glob/out/utils/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmpty = exports.isString = void 0;
    function isString(input) {
      return typeof input === "string";
    }
    exports.isString = isString;
    function isEmpty(input) {
      return input === "";
    }
    exports.isEmpty = isEmpty;
  }
});

// ../../node_modules/fast-glob/out/utils/index.js
var require_utils3 = __commonJS({
  "../../node_modules/fast-glob/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
    var array = require_array();
    exports.array = array;
    var errno = require_errno();
    exports.errno = errno;
    var fs4 = require_fs();
    exports.fs = fs4;
    var path2 = require_path();
    exports.path = path2;
    var pattern = require_pattern();
    exports.pattern = pattern;
    var stream = require_stream();
    exports.stream = stream;
    var string = require_string();
    exports.string = string;
  }
});

// ../../node_modules/fast-glob/out/managers/tasks.js
var require_tasks = __commonJS({
  "../../node_modules/fast-glob/out/managers/tasks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
    var utils = require_utils3();
    function generate(patterns, settings) {
      const positivePatterns = getPositivePatterns(patterns);
      const negativePatterns = getNegativePatternsAsPositive(patterns, settings.ignore);
      const staticPatterns = positivePatterns.filter((pattern) => utils.pattern.isStaticPattern(pattern, settings));
      const dynamicPatterns = positivePatterns.filter((pattern) => utils.pattern.isDynamicPattern(pattern, settings));
      const staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns, false);
      const dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns, true);
      return staticTasks.concat(dynamicTasks);
    }
    exports.generate = generate;
    function convertPatternsToTasks(positive, negative, dynamic) {
      const tasks = [];
      const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
      const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
      const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
      const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
      tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
      if ("." in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
      } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
      }
      return tasks;
    }
    exports.convertPatternsToTasks = convertPatternsToTasks;
    function getPositivePatterns(patterns) {
      return utils.pattern.getPositivePatterns(patterns);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getNegativePatternsAsPositive(patterns, ignore) {
      const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
      const positive = negative.map(utils.pattern.convertToPositivePattern);
      return positive;
    }
    exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
    function groupPatternsByBaseDirectory(patterns) {
      const group = {};
      return patterns.reduce((collection, pattern) => {
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
          collection[base].push(pattern);
        } else {
          collection[base] = [pattern];
        }
        return collection;
      }, group);
    }
    exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
    function convertPatternGroupsToTasks(positive, negative, dynamic) {
      return Object.keys(positive).map((base) => {
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
      });
    }
    exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
    function convertPatternGroupToTask(base, positive, negative, dynamic) {
      return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
      };
    }
    exports.convertPatternGroupToTask = convertPatternGroupToTask;
  }
});

// ../../node_modules/fast-glob/out/managers/patterns.js
var require_patterns = __commonJS({
  "../../node_modules/fast-glob/out/managers/patterns.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeDuplicateSlashes = exports.transform = void 0;
    var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
    function transform(patterns) {
      return patterns.map((pattern) => removeDuplicateSlashes(pattern));
    }
    exports.transform = transform;
    function removeDuplicateSlashes(pattern) {
      return pattern.replace(DOUBLE_SLASH_RE, "/");
    }
    exports.removeDuplicateSlashes = removeDuplicateSlashes;
  }
});

// ../../node_modules/@nodelib/fs.stat/out/providers/async.js
var require_async = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path2, settings, callback) {
      settings.fs.lstat(path2, (lstatError, lstat) => {
        if (lstatError !== null) {
          callFailureCallback(callback, lstatError);
          return;
        }
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
          callSuccessCallback(callback, lstat);
          return;
        }
        settings.fs.stat(path2, (statError, stat) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              callFailureCallback(callback, statError);
              return;
            }
            callSuccessCallback(callback, lstat);
            return;
          }
          if (settings.markSymbolicLink) {
            stat.isSymbolicLink = () => true;
          }
          callSuccessCallback(callback, stat);
        });
      });
    }
    exports.read = read;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// ../../node_modules/@nodelib/fs.stat/out/providers/sync.js
var require_sync = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path2, settings) {
      const lstat = settings.fs.lstatSync(path2);
      if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat;
      }
      try {
        const stat = settings.fs.statSync(path2);
        if (settings.markSymbolicLink) {
          stat.isSymbolicLink = () => true;
        }
        return stat;
      } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
          return lstat;
        }
        throw error;
      }
    }
    exports.read = read;
  }
});

// ../../node_modules/@nodelib/fs.stat/out/adapters/fs.js
var require_fs2 = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      stat: fs4.stat,
      lstatSync: fs4.lstatSync,
      statSync: fs4.statSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// ../../node_modules/@nodelib/fs.stat/out/settings.js
var require_settings = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs4 = require_fs2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs4.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// ../../node_modules/@nodelib/fs.stat/out/index.js
var require_out = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statSync = exports.stat = exports.Settings = void 0;
    var async = require_async();
    var sync2 = require_sync();
    var settings_1 = require_settings();
    exports.Settings = settings_1.default;
    function stat(path2, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path2, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.stat = stat;
    function statSync(path2, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync2.read(path2, settings);
    }
    exports.statSync = statSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// ../../node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
  "../../node_modules/queue-microtask/index.js"(exports, module2) {
    var promise;
    module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});

// ../../node_modules/run-parallel/index.js
var require_run_parallel = __commonJS({
  "../../node_modules/run-parallel/index.js"(exports, module2) {
    module2.exports = runParallel;
    var queueMicrotask2 = require_queue_microtask();
    function runParallel(tasks, cb) {
      let results, pending, keys;
      let isSync = true;
      if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
      } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
      }
      function done(err) {
        function end() {
          if (cb)
            cb(err, results);
          cb = null;
        }
        if (isSync)
          queueMicrotask2(end);
        else
          end();
      }
      function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
          done(err);
        }
      }
      if (!pending) {
        done(null);
      } else if (keys) {
        keys.forEach(function(key) {
          tasks[key](function(err, result) {
            each(key, err, result);
          });
        });
      } else {
        tasks.forEach(function(task, i) {
          task(function(err, result) {
            each(i, err, result);
          });
        });
      }
      isSync = false;
    }
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/constants.js
var require_constants3 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
    var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
    if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
      throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
    }
    var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
    var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
    var SUPPORTED_MAJOR_VERSION = 10;
    var SUPPORTED_MINOR_VERSION = 10;
    var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
    var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/utils/fs.js
var require_fs3 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/utils/index.js
var require_utils4 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fs = void 0;
    var fs4 = require_fs3();
    exports.fs = fs4;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/providers/common.js
var require_common = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/providers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = void 0;
    function joinPathSegments(a, b, separator) {
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/providers/async.js
var require_async2 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var rpl = require_run_parallel();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings, callback) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
      }
      readdir(directory, settings, callback);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings, callback) {
      settings.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const entries = dirents.map((dirent) => ({
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        }));
        if (!settings.followSymbolicLinks) {
          callSuccessCallback(callback, entries);
          return;
        }
        const tasks = entries.map((entry) => makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, rplEntries);
        });
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function makeRplTaskEntry(entry, settings) {
      return (done) => {
        if (!entry.dirent.isSymbolicLink()) {
          done(null, entry);
          return;
        }
        settings.fs.stat(entry.path, (statError, stats) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              done(statError);
              return;
            }
            done(null, entry);
            return;
          }
          entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          done(null, entry);
        });
      };
    }
    function readdir(directory, settings, callback) {
      settings.fs.readdir(directory, (readdirError, names) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const tasks = names.map((name) => {
          const path2 = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
          return (done) => {
            fsStat.stat(path2, settings.fsStatSettings, (error, stats) => {
              if (error !== null) {
                done(error);
                return;
              }
              const entry = {
                name,
                path: path2,
                dirent: utils.fs.createDirentFromStats(name, stats)
              };
              if (settings.stats) {
                entry.stats = stats;
              }
              done(null, entry);
            });
          };
        });
        rpl(tasks, (rplError, entries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, entries);
        });
      });
    }
    exports.readdir = readdir;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/providers/sync.js
var require_sync2 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
      }
      return readdir(directory, settings);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings) {
      const dirents = settings.fs.readdirSync(directory, { withFileTypes: true });
      return dirents.map((dirent) => {
        const entry = {
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
          try {
            const stats = settings.fs.statSync(entry.path);
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          } catch (error) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              throw error;
            }
          }
        }
        return entry;
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function readdir(directory, settings) {
      const names = settings.fs.readdirSync(directory);
      return names.map((name) => {
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
          name,
          path: entryPath,
          dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
          entry.stats = stats;
        }
        return entry;
      });
    }
    exports.readdir = readdir;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/adapters/fs.js
var require_fs4 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      stat: fs4.stat,
      lstatSync: fs4.lstatSync,
      statSync: fs4.statSync,
      readdir: fs4.readdir,
      readdirSync: fs4.readdirSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/settings.js
var require_settings2 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsStat = require_out();
    var fs4 = require_fs4();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs4.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this.followSymbolicLinks,
          fs: this.fs,
          throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/index.js
var require_out2 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.scandirSync = exports.scandir = void 0;
    var async = require_async2();
    var sync2 = require_sync2();
    var settings_1 = require_settings2();
    exports.Settings = settings_1.default;
    function scandir(path2, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path2, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.scandir = scandir;
    function scandirSync(path2, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync2.read(path2, settings);
    }
    exports.scandirSync = scandirSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// ../../node_modules/reusify/reusify.js
var require_reusify = __commonJS({
  "../../node_modules/reusify/reusify.js"(exports, module2) {
    "use strict";
    function reusify(Constructor) {
      var head = new Constructor();
      var tail = head;
      function get() {
        var current = head;
        if (current.next) {
          head = current.next;
        } else {
          head = new Constructor();
          tail = head;
        }
        current.next = null;
        return current;
      }
      function release(obj) {
        tail.next = obj;
        tail = obj;
      }
      return {
        get,
        release
      };
    }
    module2.exports = reusify;
  }
});

// ../../node_modules/fastq/queue.js
var require_queue = __commonJS({
  "../../node_modules/fastq/queue.js"(exports, module2) {
    "use strict";
    var reusify = require_reusify();
    function fastqueue(context, worker2, concurrency) {
      if (typeof context === "function") {
        concurrency = worker2;
        worker2 = context;
        context = null;
      }
      if (concurrency < 1) {
        throw new Error("fastqueue concurrency must be greater than 1");
      }
      var cache = reusify(Task);
      var queueHead = null;
      var queueTail = null;
      var _running = 0;
      var errorHandler = null;
      var self2 = {
        push,
        drain: noop,
        saturated: noop,
        pause,
        paused: false,
        concurrency,
        running,
        resume,
        idle,
        length,
        getQueue,
        unshift,
        empty: noop,
        kill,
        killAndDrain,
        error
      };
      return self2;
      function running() {
        return _running;
      }
      function pause() {
        self2.paused = true;
      }
      function length() {
        var current = queueHead;
        var counter = 0;
        while (current) {
          current = current.next;
          counter++;
        }
        return counter;
      }
      function getQueue() {
        var current = queueHead;
        var tasks = [];
        while (current) {
          tasks.push(current.value);
          current = current.next;
        }
        return tasks;
      }
      function resume() {
        if (!self2.paused)
          return;
        self2.paused = false;
        for (var i = 0; i < self2.concurrency; i++) {
          _running++;
          release();
        }
      }
      function idle() {
        return _running === 0 && self2.length() === 0;
      }
      function push(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        current.errorHandler = errorHandler;
        if (_running === self2.concurrency || self2.paused) {
          if (queueTail) {
            queueTail.next = current;
            queueTail = current;
          } else {
            queueHead = current;
            queueTail = current;
            self2.saturated();
          }
        } else {
          _running++;
          worker2.call(context, current.value, current.worked);
        }
      }
      function unshift(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        if (_running === self2.concurrency || self2.paused) {
          if (queueHead) {
            current.next = queueHead;
            queueHead = current;
          } else {
            queueHead = current;
            queueTail = current;
            self2.saturated();
          }
        } else {
          _running++;
          worker2.call(context, current.value, current.worked);
        }
      }
      function release(holder) {
        if (holder) {
          cache.release(holder);
        }
        var next = queueHead;
        if (next) {
          if (!self2.paused) {
            if (queueTail === queueHead) {
              queueTail = null;
            }
            queueHead = next.next;
            next.next = null;
            worker2.call(context, next.value, next.worked);
            if (queueTail === null) {
              self2.empty();
            }
          } else {
            _running--;
          }
        } else if (--_running === 0) {
          self2.drain();
        }
      }
      function kill() {
        queueHead = null;
        queueTail = null;
        self2.drain = noop;
      }
      function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self2.drain();
        self2.drain = noop;
      }
      function error(handler) {
        errorHandler = handler;
      }
    }
    function noop() {
    }
    function Task() {
      this.value = null;
      this.callback = noop;
      this.next = null;
      this.release = noop;
      this.context = null;
      this.errorHandler = null;
      var self2 = this;
      this.worked = function worked(err, result) {
        var callback = self2.callback;
        var errorHandler = self2.errorHandler;
        var val = self2.value;
        self2.value = null;
        self2.callback = noop;
        if (self2.errorHandler) {
          errorHandler(err, val);
        }
        callback.call(self2.context, err, result);
        self2.release(self2);
      };
    }
    function queueAsPromised(context, worker2, concurrency) {
      if (typeof context === "function") {
        concurrency = worker2;
        worker2 = context;
        context = null;
      }
      function asyncWrapper(arg, cb) {
        worker2.call(this, arg).then(function(res) {
          cb(null, res);
        }, cb);
      }
      var queue = fastqueue(context, asyncWrapper, concurrency);
      var pushCb = queue.push;
      var unshiftCb = queue.unshift;
      queue.push = push;
      queue.unshift = unshift;
      queue.drained = drained;
      return queue;
      function push(value) {
        var p = new Promise(function(resolve, reject) {
          pushCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function unshift(value) {
        var p = new Promise(function(resolve, reject) {
          unshiftCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function drained() {
        var previousDrain = queue.drain;
        var p = new Promise(function(resolve) {
          queue.drain = function() {
            previousDrain();
            resolve();
          };
        });
        return p;
      }
    }
    module2.exports = fastqueue;
    module2.exports.promise = queueAsPromised;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/readers/common.js
var require_common2 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/readers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
    function isFatalError(settings, error) {
      if (settings.errorFilter === null) {
        return true;
      }
      return !settings.errorFilter(error);
    }
    exports.isFatalError = isFatalError;
    function isAppliedFilter(filter, value) {
      return filter === null || filter(value);
    }
    exports.isAppliedFilter = isAppliedFilter;
    function replacePathSegmentSeparator(filepath, separator) {
      return filepath.split(/[/\\]/).join(separator);
    }
    exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
    function joinPathSegments(a, b, separator) {
      if (a === "") {
        return b;
      }
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/readers/reader.js
var require_reader = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var common = require_common2();
    var Reader = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
      }
    };
    exports.default = Reader;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/readers/async.js
var require_async3 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require("events");
    var fsScandir = require_out2();
    var fastq = require_queue();
    var common = require_common2();
    var reader_1 = require_reader();
    var AsyncReader = class extends reader_1.default {
      constructor(_root, _settings) {
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = () => {
          if (!this._isFatalError) {
            this._emitter.emit("end");
          }
        };
      }
      read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(() => {
          this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
      }
      get isDestroyed() {
        return this._isDestroyed;
      }
      destroy() {
        if (this._isDestroyed) {
          throw new Error("The reader is already destroyed");
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
      }
      onEntry(callback) {
        this._emitter.on("entry", callback);
      }
      onError(callback) {
        this._emitter.once("error", callback);
      }
      onEnd(callback) {
        this._emitter.once("end", callback);
      }
      _pushToQueue(directory, base) {
        const queueItem = { directory, base };
        this._queue.push(queueItem, (error) => {
          if (error !== null) {
            this._handleError(error);
          }
        });
      }
      _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
          if (error !== null) {
            done(error, void 0);
            return;
          }
          for (const entry of entries) {
            this._handleEntry(entry, item.base);
          }
          done(null, void 0);
        });
      }
      _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
          return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit("error", error);
      }
      _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
          return;
        }
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _emitEntry(entry) {
        this._emitter.emit("entry", entry);
      }
    };
    exports.default = AsyncReader;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/providers/async.js
var require_async4 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async3();
    var AsyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
      }
      read(callback) {
        this._reader.onError((error) => {
          callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry) => {
          this._storage.push(entry);
        });
        this._reader.onEnd(() => {
          callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
      }
    };
    exports.default = AsyncProvider;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, entries) {
      callback(null, entries);
    }
  }
});

// ../../node_modules/@nodelib/fs.walk/out/providers/stream.js
var require_stream2 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var async_1 = require_async3();
    var StreamProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
          objectMode: true,
          read: () => {
          },
          destroy: () => {
            if (!this._reader.isDestroyed) {
              this._reader.destroy();
            }
          }
        });
      }
      read() {
        this._reader.onError((error) => {
          this._stream.emit("error", error);
        });
        this._reader.onEntry((entry) => {
          this._stream.push(entry);
        });
        this._reader.onEnd(() => {
          this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
      }
    };
    exports.default = StreamProvider;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/readers/sync.js
var require_sync3 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsScandir = require_out2();
    var common = require_common2();
    var reader_1 = require_reader();
    var SyncReader = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = /* @__PURE__ */ new Set();
      }
      read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
      }
      _pushToQueue(directory, base) {
        this._queue.add({ directory, base });
      }
      _handleQueue() {
        for (const item of this._queue.values()) {
          this._handleDirectory(item.directory, item.base);
        }
      }
      _handleDirectory(directory, base) {
        try {
          const entries = this._scandir(directory, this._settings.fsScandirSettings);
          for (const entry of entries) {
            this._handleEntry(entry, base);
          }
        } catch (error) {
          this._handleError(error);
        }
      }
      _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
          return;
        }
        throw error;
      }
      _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _pushToStorage(entry) {
        this._storage.push(entry);
      }
    };
    exports.default = SyncReader;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/providers/sync.js
var require_sync4 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync3();
    var SyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
      }
      read() {
        return this._reader.read();
      }
    };
    exports.default = SyncProvider;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/settings.js
var require_settings3 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsScandir = require_out2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, void 0);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
        this.fsScandirSettings = new fsScandir.Settings({
          followSymbolicLinks: this._options.followSymbolicLinks,
          fs: this._options.fs,
          pathSegmentSeparator: this._options.pathSegmentSeparator,
          stats: this._options.stats,
          throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/index.js
var require_out3 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
    var async_1 = require_async4();
    var stream_1 = require_stream2();
    var sync_1 = require_sync4();
    var settings_1 = require_settings3();
    exports.Settings = settings_1.default;
    function walk(directory, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
      }
      new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
    }
    exports.walk = walk;
    function walkSync(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new sync_1.default(directory, settings);
      return provider.read();
    }
    exports.walkSync = walkSync;
    function walkStream(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new stream_1.default(directory, settings);
      return provider.read();
    }
    exports.walkStream = walkStream;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// ../../node_modules/fast-glob/out/readers/reader.js
var require_reader2 = __commonJS({
  "../../node_modules/fast-glob/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsStat = require_out();
    var utils = require_utils3();
    var Reader = class {
      constructor(_settings) {
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
      }
      _getFullEntryPath(filepath) {
        return path2.resolve(this._settings.cwd, filepath);
      }
      _makeEntry(stats, pattern) {
        const entry = {
          name: pattern,
          path: pattern,
          dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
          entry.stats = stats;
        }
        return entry;
      }
      _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
      }
    };
    exports.default = Reader;
  }
});

// ../../node_modules/fast-glob/out/readers/stream.js
var require_stream3 = __commonJS({
  "../../node_modules/fast-glob/out/readers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderStream = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
      }
      dynamic(root, options) {
        return this._walkStream(root, options);
      }
      static(patterns, options) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({ objectMode: true });
        stream._write = (index, _enc, done) => {
          return this._getEntry(filepaths[index], patterns[index], options).then((entry) => {
            if (entry !== null && options.entryFilter(entry)) {
              stream.push(entry);
            }
            if (index === filepaths.length - 1) {
              stream.end();
            }
            done();
          }).catch(done);
        };
        for (let i = 0; i < filepaths.length; i++) {
          stream.write(i);
        }
        return stream;
      }
      _getEntry(filepath, pattern, options) {
        return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern)).catch((error) => {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        });
      }
      _getStat(filepath) {
        return new Promise((resolve, reject) => {
          this._stat(filepath, this._fsStatSettings, (error, stats) => {
            return error === null ? resolve(stats) : reject(error);
          });
        });
      }
    };
    exports.default = ReaderStream;
  }
});

// ../../node_modules/fast-glob/out/providers/matchers/matcher.js
var require_matcher = __commonJS({
  "../../node_modules/fast-glob/out/providers/matchers/matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var Matcher = class {
      constructor(_patterns, _settings, _micromatchOptions) {
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
      }
      _fillStorage() {
        const patterns = utils.pattern.expandPatternsWithBraceExpansion(this._patterns);
        for (const pattern of patterns) {
          const segments = this._getPatternSegments(pattern);
          const sections = this._splitSegmentsIntoSections(segments);
          this._storage.push({
            complete: sections.length <= 1,
            pattern,
            segments,
            sections
          });
        }
      }
      _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part) => {
          const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
          if (!dynamic) {
            return {
              dynamic: false,
              pattern: part
            };
          }
          return {
            dynamic: true,
            pattern: part,
            patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
          };
        });
      }
      _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment) => segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
      }
    };
    exports.default = Matcher;
  }
});

// ../../node_modules/fast-glob/out/providers/matchers/partial.js
var require_partial = __commonJS({
  "../../node_modules/fast-glob/out/providers/matchers/partial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var matcher_1 = require_matcher();
    var PartialMatcher = class extends matcher_1.default {
      match(filepath) {
        const parts = filepath.split("/");
        const levels = parts.length;
        const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
        for (const pattern of patterns) {
          const section = pattern.sections[0];
          if (!pattern.complete && levels > section.length) {
            return true;
          }
          const match = parts.every((part, index) => {
            const segment = pattern.segments[index];
            if (segment.dynamic && segment.patternRe.test(part)) {
              return true;
            }
            if (!segment.dynamic && segment.pattern === part) {
              return true;
            }
            return false;
          });
          if (match) {
            return true;
          }
        }
        return false;
      }
    };
    exports.default = PartialMatcher;
  }
});

// ../../node_modules/fast-glob/out/providers/filters/deep.js
var require_deep = __commonJS({
  "../../node_modules/fast-glob/out/providers/filters/deep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var partial_1 = require_partial();
    var DeepFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
      }
      getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry) => this._filter(basePath, entry, matcher, negativeRe);
      }
      _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
      }
      _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
      }
      _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
          return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
          return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
          return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
      }
      _isSkippedByDeep(basePath, entryPath) {
        if (this._settings.deep === Infinity) {
          return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
      }
      _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split("/").length;
        if (basePath === "") {
          return entryPathDepth;
        }
        const basePathDepth = basePath.split("/").length;
        return entryPathDepth - basePathDepth;
      }
      _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
      }
      _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
      }
      _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
      }
    };
    exports.default = DeepFilter;
  }
});

// ../../node_modules/fast-glob/out/providers/filters/entry.js
var require_entry = __commonJS({
  "../../node_modules/fast-glob/out/providers/filters/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = /* @__PURE__ */ new Map();
      }
      getFilter(positive, negative) {
        const positiveRe = utils.pattern.convertPatternsToRe(positive, this._micromatchOptions);
        const negativeRe = utils.pattern.convertPatternsToRe(negative, this._micromatchOptions);
        return (entry) => this._filter(entry, positiveRe, negativeRe);
      }
      _filter(entry, positiveRe, negativeRe) {
        if (this._settings.unique && this._isDuplicateEntry(entry)) {
          return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
          return false;
        }
        if (this._isSkippedByAbsoluteNegativePatterns(entry.path, negativeRe)) {
          return false;
        }
        const filepath = this._settings.baseNameMatch ? entry.name : entry.path;
        const isMatched = this._isMatchToPatterns(filepath, positiveRe) && !this._isMatchToPatterns(entry.path, negativeRe);
        if (this._settings.unique && isMatched) {
          this._createIndexRecord(entry);
        }
        return isMatched;
      }
      _isDuplicateEntry(entry) {
        return this.index.has(entry.path);
      }
      _createIndexRecord(entry) {
        this.index.set(entry.path, void 0);
      }
      _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
      }
      _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
      }
      _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
        if (!this._settings.absolute) {
          return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, entryPath);
        return utils.pattern.matchAny(fullpath, patternsRe);
      }
      _isMatchToPatterns(entryPath, patternsRe) {
        const filepath = utils.path.removeLeadingDotSegment(entryPath);
        return utils.pattern.matchAny(filepath, patternsRe) || utils.pattern.matchAny(filepath + "/", patternsRe);
      }
    };
    exports.default = EntryFilter;
  }
});

// ../../node_modules/fast-glob/out/providers/filters/error.js
var require_error = __commonJS({
  "../../node_modules/fast-glob/out/providers/filters/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var ErrorFilter = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getFilter() {
        return (error) => this._isNonFatalError(error);
      }
      _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
      }
    };
    exports.default = ErrorFilter;
  }
});

// ../../node_modules/fast-glob/out/providers/transformers/entry.js
var require_entry2 = __commonJS({
  "../../node_modules/fast-glob/out/providers/transformers/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryTransformer = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getTransformer() {
        return (entry) => this._transform(entry);
      }
      _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
          filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
          filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
          filepath += "/";
        }
        if (!this._settings.objectMode) {
          return filepath;
        }
        return Object.assign(Object.assign({}, entry), { path: filepath });
      }
    };
    exports.default = EntryTransformer;
  }
});

// ../../node_modules/fast-glob/out/providers/provider.js
var require_provider = __commonJS({
  "../../node_modules/fast-glob/out/providers/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var deep_1 = require_deep();
    var entry_1 = require_entry();
    var error_1 = require_error();
    var entry_2 = require_entry2();
    var Provider = class {
      constructor(_settings) {
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
      }
      _getRootDirectory(task) {
        return path2.resolve(this._settings.cwd, task.base);
      }
      _getReaderOptions(task) {
        const basePath = task.base === "." ? "" : task.base;
        return {
          basePath,
          pathSegmentSeparator: "/",
          concurrency: this._settings.concurrency,
          deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
          entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
          errorFilter: this.errorFilter.getFilter(),
          followSymbolicLinks: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          stats: this._settings.stats,
          throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
          transform: this.entryTransformer.getTransformer()
        };
      }
      _getMicromatchOptions() {
        return {
          dot: this._settings.dot,
          matchBase: this._settings.baseNameMatch,
          nobrace: !this._settings.braceExpansion,
          nocase: !this._settings.caseSensitiveMatch,
          noext: !this._settings.extglob,
          noglobstar: !this._settings.globstar,
          posix: true,
          strictSlashes: false
        };
      }
    };
    exports.default = Provider;
  }
});

// ../../node_modules/fast-glob/out/providers/async.js
var require_async5 = __commonJS({
  "../../node_modules/fast-glob/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require_stream3();
    var provider_1 = require_provider();
    var ProviderAsync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_1.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = [];
        return new Promise((resolve, reject) => {
          const stream = this.api(root, task, options);
          stream.once("error", reject);
          stream.on("data", (entry) => entries.push(options.transform(entry)));
          stream.once("end", () => resolve(entries));
        });
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderAsync;
  }
});

// ../../node_modules/fast-glob/out/providers/stream.js
var require_stream4 = __commonJS({
  "../../node_modules/fast-glob/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var stream_2 = require_stream3();
    var provider_1 = require_provider();
    var ProviderStream = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const source = this.api(root, task, options);
        const destination = new stream_1.Readable({ objectMode: true, read: () => {
        } });
        source.once("error", (error) => destination.emit("error", error)).on("data", (entry) => destination.emit("data", options.transform(entry))).once("end", () => destination.emit("end"));
        destination.once("close", () => source.destroy());
        return destination;
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderStream;
  }
});

// ../../node_modules/fast-glob/out/readers/sync.js
var require_sync5 = __commonJS({
  "../../node_modules/fast-glob/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderSync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
      }
      dynamic(root, options) {
        return this._walkSync(root, options);
      }
      static(patterns, options) {
        const entries = [];
        for (const pattern of patterns) {
          const filepath = this._getFullEntryPath(pattern);
          const entry = this._getEntry(filepath, pattern, options);
          if (entry === null || !options.entryFilter(entry)) {
            continue;
          }
          entries.push(entry);
        }
        return entries;
      }
      _getEntry(filepath, pattern, options) {
        try {
          const stats = this._getStat(filepath);
          return this._makeEntry(stats, pattern);
        } catch (error) {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        }
      }
      _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
      }
    };
    exports.default = ReaderSync;
  }
});

// ../../node_modules/fast-glob/out/providers/sync.js
var require_sync6 = __commonJS({
  "../../node_modules/fast-glob/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync5();
    var provider_1 = require_provider();
    var ProviderSync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = this.api(root, task, options);
        return entries.map(options.transform);
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderSync;
  }
});

// ../../node_modules/fast-glob/out/settings.js
var require_settings4 = __commonJS({
  "../../node_modules/fast-glob/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = require("fs");
    var os = require("os");
    var CPU_COUNT = Math.max(os.cpus().length, 1);
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      lstatSync: fs4.lstatSync,
      stat: fs4.stat,
      statSync: fs4.statSync,
      readdir: fs4.readdir,
      readdirSync: fs4.readdirSync
    };
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
          this.onlyFiles = false;
        }
        if (this.stats) {
          this.objectMode = true;
        }
      }
      _getValue(option, value) {
        return option === void 0 ? value : option;
      }
      _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
      }
    };
    exports.default = Settings;
  }
});

// ../../node_modules/fast-glob/out/index.js
var require_out4 = __commonJS({
  "../../node_modules/fast-glob/out/index.js"(exports, module2) {
    "use strict";
    var taskManager = require_tasks();
    var patternManager = require_patterns();
    var async_1 = require_async5();
    var stream_1 = require_stream4();
    var sync_1 = require_sync6();
    var settings_1 = require_settings4();
    var utils = require_utils3();
    async function FastGlob(source, options) {
      assertPatternsInput(source);
      const works = getWorks(source, async_1.default, options);
      const result = await Promise.all(works);
      return utils.array.flatten(result);
    }
    (function(FastGlob2) {
      function sync2(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, sync_1.default, options);
        return utils.array.flatten(works);
      }
      FastGlob2.sync = sync2;
      function stream(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, stream_1.default, options);
        return utils.stream.merge(works);
      }
      FastGlob2.stream = stream;
      function generateTasks(source, options) {
        assertPatternsInput(source);
        const patterns = patternManager.transform([].concat(source));
        const settings = new settings_1.default(options);
        return taskManager.generate(patterns, settings);
      }
      FastGlob2.generateTasks = generateTasks;
      function isDynamicPattern(source, options) {
        assertPatternsInput(source);
        const settings = new settings_1.default(options);
        return utils.pattern.isDynamicPattern(source, settings);
      }
      FastGlob2.isDynamicPattern = isDynamicPattern;
      function escapePath(source) {
        assertPatternsInput(source);
        return utils.path.escape(source);
      }
      FastGlob2.escapePath = escapePath;
    })(FastGlob || (FastGlob = {}));
    function getWorks(source, _Provider, options) {
      const patterns = patternManager.transform([].concat(source));
      const settings = new settings_1.default(options);
      const tasks = taskManager.generate(patterns, settings);
      const provider = new _Provider(settings);
      return tasks.map(provider.read, provider);
    }
    function assertPatternsInput(input) {
      const source = [].concat(input);
      const isValidSource = source.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
      if (!isValidSource) {
        throw new TypeError("Patterns must be a string (non empty) or an array of strings");
      }
    }
    module2.exports = FastGlob;
  }
});

// src/bindings/connection.ts
var arrow = __toESM(require("apache-arrow"));
var DuckDBConnection = class {
  constructor(bindings, conn) {
    this._bindings = bindings;
    this._conn = conn;
  }
  close() {
    this._bindings.disconnect(this._conn);
  }
  useUnsafe(callback) {
    return callback(this._bindings, this._conn);
  }
  query(text) {
    const buffer = this._bindings.runQuery(this._conn, text);
    const reader = arrow.RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new arrow.Table(reader);
  }
  send(text) {
    const header = this._bindings.sendQuery(this._conn, text);
    const iter = new ResultStreamIterator(this._bindings, this._conn, header);
    const reader = arrow.RecordBatchReader.from(iter);
    console.assert(reader.isSync());
    console.assert(reader.isStream());
    return reader;
  }
  getTableNames(query) {
    return this._bindings.getTableNames(this._conn, query);
  }
  prepare(text) {
    const stmt = this._bindings.createPrepared(this._conn, text);
    return new PreparedStatement(this._bindings, this._conn, stmt);
  }
  createScalarFunction(name, returns, func) {
    this._bindings.createScalarFunction(this._conn, name, returns, func);
  }
  insertArrowTable(table, options) {
    const writer = new arrow.RecordBatchStreamWriter();
    writer.writeAll(table);
    const buffer = writer.toUint8Array(true);
    this.insertArrowFromIPCStream(buffer, options);
  }
  insertArrowFromIPCStream(buffer, options) {
    this._bindings.insertArrowFromIPCStream(this._conn, buffer, options);
  }
  insertCSVFromPath(path2, options) {
    this._bindings.insertCSVFromPath(this._conn, path2, options);
  }
  insertJSONFromPath(path2, options) {
    this._bindings.insertJSONFromPath(this._conn, path2, options);
  }
};
var ResultStreamIterator = class {
  constructor(bindings, conn, header) {
    this.bindings = bindings;
    this.conn = conn;
    this.header = header;
    this._first = true;
    this._depleted = false;
  }
  next() {
    if (this._first) {
      this._first = false;
      return { done: false, value: this.header };
    }
    if (this._depleted) {
      return { done: true, value: null };
    }
    const bufferI8 = this.bindings.fetchQueryResults(this.conn);
    this._depleted = bufferI8.length == 0;
    return {
      done: this._depleted,
      value: bufferI8
    };
  }
  [Symbol.iterator]() {
    return this;
  }
};
var PreparedStatement = class {
  constructor(bindings, connectionId, statementId) {
    this.bindings = bindings;
    this.connectionId = connectionId;
    this.statementId = statementId;
  }
  close() {
    this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  query(...params) {
    const buffer = this.bindings.runPrepared(this.connectionId, this.statementId, params);
    const reader = arrow.RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new arrow.Table(reader);
  }
  send(...params) {
    const header = this.bindings.sendPrepared(this.connectionId, this.statementId, params);
    const iter = new ResultStreamIterator(this.bindings, this.connectionId, header);
    const reader = arrow.RecordBatchReader.from(iter);
    console.assert(reader.isSync());
    console.assert(reader.isStream());
    return reader;
  }
};

// src/bindings/udf_runtime.ts
var TEXT_ENCODER = new TextEncoder();
var TEXT_DECODER = new TextDecoder("utf-8");
function storeError(mod, response, message) {
  const msgBuffer = TEXT_ENCODER.encode(message);
  const heapAddr = mod._malloc(msgBuffer.byteLength);
  const heapArray = mod.HEAPU8.subarray(heapAddr, heapAddr + msgBuffer.byteLength);
  heapArray.set(msgBuffer);
  mod.HEAPF64[(response >> 3) + 0] = 1;
  mod.HEAPF64[(response >> 3) + 1] = heapAddr;
  mod.HEAPF64[(response >> 3) + 2] = heapArray.byteLength;
}
function getTypeSize(ptype) {
  switch (ptype) {
    case "UINT8":
    case "INT8":
      return 1;
    case "INT32":
    case "FLOAT":
      return 4;
    case "INT64":
    case "UINT64":
    case "DOUBLE":
    case "VARCHAR":
      return 8;
    default:
      return 0;
  }
}
function ptrToArray(mod, ptr, ptype, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n * getTypeSize(ptype));
  switch (ptype) {
    case "UINT8":
      return new Uint8Array(heap.buffer, heap.byteOffset, n);
    case "INT8":
      return new Int8Array(heap.buffer, heap.byteOffset, n);
    case "INT32":
      return new Int32Array(heap.buffer, heap.byteOffset, n);
    case "FLOAT":
      return new Float32Array(heap.buffer, heap.byteOffset, n);
    case "DOUBLE":
      return new Float64Array(heap.buffer, heap.byteOffset, n);
    case "VARCHAR":
      return new Float64Array(heap.buffer, heap.byteOffset, n);
    default:
      return new Array(0);
  }
}
function ptrToUint8Array(mod, ptr, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n);
  return new Uint8Array(heap.buffer, heap.byteOffset, n);
}
function ptrToFloat64Array(mod, ptr, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n * 8);
  return new Float64Array(heap.buffer, heap.byteOffset, n);
}
function callScalarUDF(runtime, mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize) {
  try {
    const udf = runtime._udfFunctions.get(funcId);
    if (!udf) {
      storeError(mod, response, "Unknown UDF with id: " + funcId);
      return;
    }
    const descStr = TEXT_DECODER.decode(mod.HEAPU8.subarray(descPtr, descPtr + descSize));
    const desc = JSON.parse(descStr);
    const ptrs = ptrToFloat64Array(mod, ptrsPtr, ptrsSize / 8);
    const argValidity = [];
    const argData = [];
    for (let i = 0; i < desc.args.length; ++i) {
      const argDesc = desc.args[i];
      const data = ptrToArray(mod, ptrs[argDesc.dataBuffer], argDesc.physicalType, desc.rows);
      const validity = ptrToUint8Array(mod, ptrs[argDesc.validityBuffer], desc.rows);
      if (data.length == 0 || validity.length == 0) {
        storeError(mod, response, "Can't create physical arrays for argument " + argDesc.physicalType);
        return;
      }
      argValidity.push(validity);
      switch (argDesc.physicalType) {
        case "VARCHAR": {
          const lengthsArray = ptrToFloat64Array(mod, ptrs[argDesc.lengthBuffer], desc.rows);
          const dataArray = [];
          for (let j = 0; j < desc.rows; ++j) {
            if (!validity[j]) {
              dataArray.push(null);
              continue;
            }
            const subarray = mod.HEAPU8.subarray(data[j], data[j] + lengthsArray[j]);
            const str = TEXT_DECODER.decode(subarray);
            dataArray.push(str);
          }
          argData.push(dataArray);
          break;
        }
        default: {
          argData.push(data);
        }
      }
    }
    const resultDataLen = desc.rows * getTypeSize(desc.ret.physicalType);
    const resultDataPtr = mod._malloc(resultDataLen);
    const resultData = ptrToArray(mod, resultDataPtr, desc.ret.physicalType, desc.rows);
    const resultValidityPtr = mod._malloc(desc.rows);
    const resultValidity = ptrToUint8Array(mod, resultValidityPtr, desc.rows);
    if (resultData.length == 0 || resultValidity.length == 0) {
      storeError(mod, response, "Can't create physical arrays for result");
      return;
    }
    let rawResultData = resultData;
    if (desc.ret.physicalType == "VARCHAR") {
      rawResultData = new Array(desc.rows);
    }
    const args = [];
    for (let i = 0; i < desc.args.length; ++i) {
      args.push(null);
    }
    for (let i = 0; i < desc.rows; ++i) {
      for (let j = 0; j < desc.args.length; ++j) {
        args[j] = argValidity[j][i] ? argData[j][i] : null;
      }
      const res = udf.func(...args);
      rawResultData[i] = res;
      resultValidity[i] = res === void 0 || res === null ? 0 : 1;
    }
    let resultLengthsPtr = 0;
    switch (desc.ret.physicalType) {
      case "VARCHAR": {
        const resultDataUTF8 = new Array(0);
        resultLengthsPtr = mod._malloc(desc.rows * getTypeSize("DOUBLE"));
        const resultLengths = ptrToFloat64Array(mod, resultLengthsPtr, desc.rows);
        let totalLength = 0;
        for (let row = 0; row < desc.rows; ++row) {
          const utf8 = TEXT_ENCODER.encode(rawResultData[row] || "");
          resultDataUTF8.push(utf8);
          resultLengths[row] = utf8.length;
          totalLength += utf8.length;
        }
        const resultStringPtr = mod._malloc(totalLength);
        const resultStringBuf = mod.HEAPU8.subarray(resultStringPtr, resultStringPtr + totalLength);
        let writerOffset = 0;
        for (let row = 0; row < desc.rows; ++row) {
          resultData[row] = writerOffset;
          const resultUTF8 = resultDataUTF8[row];
          const writer = resultStringBuf.subarray(writerOffset, writerOffset + resultUTF8.length);
          writer.set(resultUTF8);
          writerOffset += resultUTF8.length;
        }
      }
    }
    const retLen = 3 * 8;
    const retPtr = mod._malloc(retLen);
    const retBuffer = ptrToFloat64Array(mod, retPtr, 3);
    retBuffer[0] = resultDataPtr;
    retBuffer[1] = resultValidityPtr;
    retBuffer[2] = resultLengthsPtr;
    mod.HEAPF64[(response >> 3) + 0] = 0;
    mod.HEAPF64[(response >> 3) + 1] = retPtr;
    mod.HEAPF64[(response >> 3) + 2] = 0;
  } catch (e) {
    storeError(mod, response, e.toString());
  }
}

// src/bindings/runtime.ts
function TextDecoderWrapper() {
  const decoder2 = new TextDecoder();
  return (data) => {
    if (typeof SharedArrayBuffer !== "undefined" && data.buffer instanceof SharedArrayBuffer) {
      data = new Uint8Array(data);
    }
    return decoder2.decode(data);
  };
}
var decodeText = TextDecoderWrapper();
function failWith(mod, msg) {
  mod.ccall("duckdb_web_fail_with", null, ["string"], [msg]);
}
function copyBuffer(mod, begin, length) {
  const buffer = mod.HEAPU8.subarray(begin, begin + length);
  const copy = new Uint8Array(new ArrayBuffer(buffer.byteLength));
  copy.set(buffer);
  return copy;
}
function readString(mod, begin, length) {
  return decodeText(mod.HEAPU8.subarray(begin, begin + length));
}
function callSRet(mod, funcName, argTypes, args) {
  const stackPointer = mod.stackSave();
  const response = mod.stackAlloc(3 * 8);
  argTypes.unshift("number");
  args.unshift(response);
  mod.ccall(funcName, null, argTypes, args);
  const status = mod.HEAPF64[(response >> 3) + 0];
  const data = mod.HEAPF64[(response >> 3) + 1];
  const dataSize = mod.HEAPF64[(response >> 3) + 2];
  mod.stackRestore(stackPointer);
  return [status, data, dataSize];
}
function dropResponseBuffers(mod) {
  mod.ccall("duckdb_web_clear_response", null, [], []);
}

// src/bindings/file_stats.ts
var FileStatistics = class {
  constructor(u8array) {
    const f64 = new Float64Array(u8array.buffer, u8array.byteOffset, u8array.byteLength / 8);
    const blocks = new Uint8Array(new ArrayBuffer(u8array.byteLength));
    blocks.set(u8array.subarray(7 * 8));
    this.totalFileReadsCold = f64[0];
    this.totalFileReadsAhead = f64[1];
    this.totalFileReadsCached = f64[2];
    this.totalFileWrites = f64[3];
    this.totalPageAccesses = f64[4];
    this.totalPageLoads = f64[5];
    this.blockSize = f64[6];
    this.blockStats = blocks;
  }
  getBlockStats(index, out) {
    out = out || {
      file_reads_cold: 0,
      file_reads_ahead: 0,
      file_reads_cached: 0,
      file_writes: 0,
      page_accesses: 0,
      page_loads: 0
    };
    out.file_writes = this.blockStats[index * 3 + 0] & 15;
    out.file_reads_cold = this.blockStats[index * 3 + 0] >> 4;
    out.file_reads_ahead = this.blockStats[index * 3 + 1] & 15;
    out.file_reads_cached = this.blockStats[index * 3 + 1] >> 4;
    out.page_accesses = this.blockStats[index * 3 + 1] & 15;
    out.page_loads = this.blockStats[index * 3 + 1] >> 4;
    return out;
  }
};

// src/json_typedef.ts
var arrow2 = __toESM(require("apache-arrow"));
function arrowToSQLType(type) {
  switch (type.typeId) {
    case arrow2.Type.Binary:
      return { sqlType: "binary" };
    case arrow2.Type.Bool:
      return { sqlType: "bool" };
    case arrow2.Type.Date:
      return { sqlType: "date" };
    case arrow2.Type.DateDay:
      return { sqlType: "date32[d]" };
    case arrow2.Type.DateMillisecond:
      return { sqlType: "date64[ms]" };
    case arrow2.Type.Decimal: {
      const dec = type;
      return { sqlType: "decimal", precision: dec.precision, scale: dec.scale };
    }
    case arrow2.Type.Float:
      return { sqlType: "float" };
    case arrow2.Type.Float16:
      return { sqlType: "float16" };
    case arrow2.Type.Float32:
      return { sqlType: "float32" };
    case arrow2.Type.Float64:
      return { sqlType: "float64" };
    case arrow2.Type.Int:
      return { sqlType: "int32" };
    case arrow2.Type.Int16:
      return { sqlType: "int16" };
    case arrow2.Type.Int32:
      return { sqlType: "int32" };
    case arrow2.Type.Int64:
      return { sqlType: "int64" };
    case arrow2.Type.Uint16:
      return { sqlType: "uint16" };
    case arrow2.Type.Uint32:
      return { sqlType: "uint32" };
    case arrow2.Type.Uint64:
      return { sqlType: "uint64" };
    case arrow2.Type.Uint8:
      return { sqlType: "uint8" };
    case arrow2.Type.IntervalDayTime:
      return { sqlType: "interval[dt]" };
    case arrow2.Type.IntervalYearMonth:
      return { sqlType: "interval[m]" };
    case arrow2.Type.List: {
      const list = type;
      return {
        sqlType: "list",
        valueType: arrowToSQLType(list.valueType)
      };
    }
    case arrow2.Type.FixedSizeBinary: {
      const bin = type;
      return { sqlType: "fixedsizebinary", byteWidth: bin.byteWidth };
    }
    case arrow2.Type.Null:
      return { sqlType: "null" };
    case arrow2.Type.Utf8:
      return { sqlType: "utf8" };
    case arrow2.Type.Struct: {
      const struct_ = type;
      return {
        sqlType: "struct",
        fields: struct_.children.map((c) => arrowToSQLField(c.name, c.type))
      };
    }
    case arrow2.Type.Map: {
      const map_ = type;
      return {
        sqlType: "map",
        keyType: arrowToSQLType(map_.keyType),
        valueType: arrowToSQLType(map_.valueType)
      };
    }
    case arrow2.Type.Time:
      return { sqlType: "time[s]" };
    case arrow2.Type.TimeMicrosecond:
      return { sqlType: "time[us]" };
    case arrow2.Type.TimeMillisecond:
      return { sqlType: "time[ms]" };
    case arrow2.Type.TimeNanosecond:
      return { sqlType: "time[ns]" };
    case arrow2.Type.TimeSecond:
      return { sqlType: "time[s]" };
    case arrow2.Type.Timestamp: {
      const ts = type;
      return { sqlType: "timestamp", timezone: ts.timezone || void 0 };
    }
    case arrow2.Type.TimestampSecond: {
      const ts = type;
      return { sqlType: "timestamp[s]", timezone: ts.timezone || void 0 };
    }
    case arrow2.Type.TimestampMicrosecond: {
      const ts = type;
      return { sqlType: "timestamp[us]", timezone: ts.timezone || void 0 };
    }
    case arrow2.Type.TimestampNanosecond: {
      const ts = type;
      return { sqlType: "timestamp[ns]", timezone: ts.timezone || void 0 };
    }
    case arrow2.Type.TimestampMillisecond: {
      const ts = type;
      return { sqlType: "timestamp[ms]", timezone: ts.timezone || void 0 };
    }
  }
  throw new Error(`unsupported arrow type: ${type.toString()}`);
}
function arrowToSQLField(name, type) {
  const t = arrowToSQLType(type);
  t.name = name;
  return t;
}

// src/bindings/bindings_base.ts
var TEXT_ENCODER2 = new TextEncoder();
var DuckDBBindingsBase = class {
  constructor(logger, runtime) {
    this._instance = null;
    this._initPromise = null;
    this._initPromiseResolver = () => {
    };
    this.onInstantiationProgress = [];
    this._logger = logger;
    this._runtime = runtime;
    this._nextUDFId = 1;
  }
  get logger() {
    return this._logger;
  }
  get mod() {
    return this._instance;
  }
  get pthread() {
    return this.mod.PThread || null;
  }
  async instantiate(onProgress = (_) => {
  }) {
    if (this._instance != null) {
      return this;
    }
    if (this._initPromise != null) {
      this.onInstantiationProgress.push(onProgress);
      await this._initPromise;
    }
    this._initPromise = new Promise((resolve) => {
      this._initPromiseResolver = resolve;
    });
    this.onInstantiationProgress = [onProgress];
    this._instance = await this.instantiateImpl({
      print: console.log.bind(console),
      printErr: console.log.bind(console),
      onRuntimeInitialized: this._initPromiseResolver
    });
    await this._initPromise;
    this._initPromise = null;
    this.onInstantiationProgress = this.onInstantiationProgress.filter((x) => x != onProgress);
    return this;
  }
  open(config) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_open", ["string"], [JSON.stringify(config)]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  reset() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_reset", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  getVersion() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_get_version", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const version = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return version;
  }
  getFeatureFlags() {
    return this.mod.ccall("duckdb_web_get_feature_flags", "number", [], []);
  }
  tokenize(text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_tokenize", ["string"], [text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return JSON.parse(res);
  }
  connect() {
    const conn = this.mod.ccall("duckdb_web_connect", "number", [], []);
    return new DuckDBConnection(this, conn);
  }
  disconnect(conn) {
    this.mod.ccall("duckdb_web_disconnect", null, ["number"], [conn]);
    if (this.pthread) {
      for (const worker2 of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) {
        worker2.postMessage({
          cmd: "dropUDFFunctions",
          connectionId: conn
        });
      }
    }
  }
  runQuery(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_query_run", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  sendQuery(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_query_send", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  fetchQueryResults(conn) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_query_fetch_results", ["number"], [conn]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  getTableNames(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_get_tablenames", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return JSON.parse(res);
  }
  createScalarFunction(conn, name, returns, func) {
    const decl = {
      functionId: this._nextUDFId,
      name,
      returnType: arrowToSQLType(returns)
    };
    const def = {
      functionId: decl.functionId,
      connectionId: conn,
      name,
      returnType: returns,
      func
    };
    this._nextUDFId += 1;
    const [s, d, n] = callSRet(this.mod, "duckdb_web_udf_scalar_create", ["number", "string"], [conn, JSON.stringify(decl)]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    globalThis.DUCKDB_RUNTIME._udfFunctions = (globalThis.DUCKDB_RUNTIME._udfFunctions || /* @__PURE__ */ new Map()).set(def.functionId, def);
    if (this.pthread) {
      for (const worker2 of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) {
        worker2.postMessage({
          cmd: "registerUDFFunction",
          udf: def
        });
      }
    }
  }
  createPrepared(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_prepared_create", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    return d;
  }
  closePrepared(conn, statement) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_prepared_close", ["number", "number"], [conn, statement]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  runPrepared(conn, statement, params) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_prepared_run", ["number", "number", "string"], [conn, statement, JSON.stringify(params)]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  sendPrepared(conn, statement, params) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_prepared_send", ["number", "number", "string"], [conn, statement, JSON.stringify(params)]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  insertArrowFromIPCStream(conn, buffer, options) {
    if (buffer.length == 0)
      return;
    const bufferPtr = this.mod._malloc(buffer.length);
    const bufferOfs = this.mod.HEAPU8.subarray(bufferPtr, bufferPtr + buffer.length);
    bufferOfs.set(buffer);
    const optJSON = options ? JSON.stringify(options) : "";
    const [s, d, n] = callSRet(this.mod, "duckdb_web_insert_arrow_from_ipc_stream", ["number", "number", "number", "string"], [conn, bufferPtr, buffer.length, optJSON]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  insertCSVFromPath(conn, path2, options) {
    if (options.columns !== void 0) {
      options.columnsFlat = [];
      for (const k in options.columns) {
        options.columnsFlat.push(arrowToSQLField(k, options.columns[k]));
      }
    }
    const opt = __spreadValues({}, options);
    opt.columns = opt.columnsFlat;
    delete opt.columnsFlat;
    const optJSON = JSON.stringify(opt);
    const [s, d, n] = callSRet(this.mod, "duckdb_web_insert_csv_from_path", ["number", "string", "string"], [conn, path2, optJSON]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  insertJSONFromPath(conn, path2, options) {
    if (options.columns !== void 0) {
      options.columnsFlat = [];
      for (const k in options.columns) {
        options.columnsFlat.push(arrowToSQLField(k, options.columns[k]));
      }
    }
    const opt = __spreadValues({}, options);
    opt.columns = opt.columnsFlat;
    delete opt.columnsFlat;
    const optJSON = JSON.stringify(opt);
    const [s, d, n] = callSRet(this.mod, "duckdb_web_insert_json_from_path", ["number", "string", "string"], [conn, path2, optJSON]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  globFiles(path2) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_glob_file_infos", ["string"], [path2]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const infoStr = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    const info = JSON.parse(infoStr);
    if (info == null) {
      return [];
    }
    return info;
  }
  registerFileURL(name, url) {
    if (url === void 0) {
      url = name;
    }
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_register_file_url", ["string", "string", "number"], [name, url, -1]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  registerFileText(name, text) {
    const buffer = TEXT_ENCODER2.encode(text);
    this.registerFileBuffer(name, buffer);
  }
  registerFileBuffer(name, buffer) {
    const ptr = this.mod._malloc(buffer.length);
    const dst = this.mod.HEAPU8.subarray(ptr, ptr + buffer.length);
    dst.set(buffer);
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_register_file_buffer", ["string", "number", "number"], [name, ptr, buffer.length]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  registerFileHandle(name, handle) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_register_file_url", ["string", "string", "number"], [name, name, -1]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    globalThis.DUCKDB_RUNTIME._files = (globalThis.DUCKDB_RUNTIME._files || /* @__PURE__ */ new Map()).set(name, handle);
    if (this.pthread) {
      for (const worker2 of this.pthread.runningWorkers) {
        worker2.postMessage({
          cmd: "registerFileHandle",
          fileName: name,
          fileHandle: handle
        });
      }
      for (const worker2 of this.pthread.unusedWorkers) {
        worker2.postMessage({
          cmd: "dropFileHandle",
          fileName: name
        });
      }
    }
  }
  dropFile(name) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_drop_file", ["string"], [name]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  dropFiles() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_drop_files", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  flushFiles() {
    this.mod.ccall("duckdb_web_flush_files", null, [], []);
  }
  copyFileToPath(name, path2) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_copy_file_to_path", ["string", "string"], [name, path2]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  copyFileToBuffer(name) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_copy_file_to_buffer", ["string"], [name]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const buffer = this.mod.HEAPU8.subarray(d, d + n);
    const copy = new Uint8Array(buffer.length);
    copy.set(buffer);
    dropResponseBuffers(this.mod);
    return copy;
  }
  collectFileStatistics(file, enable) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_collect_file_stats", ["string", "boolean"], [file, enable]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  exportFileStatistics(file) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_export_file_stats", ["string"], [file]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    return new FileStatistics(this.mod.HEAPU8.subarray(d, d + n));
  }
};

// src/log.ts
var VoidLogger = class {
  log(_entry) {
  }
};

// src/platform.ts
var check = __toESM(require_cjs());
var isNode = () => typeof navigator === "undefined" ? true : false;
var userAgent = () => isNode() ? "node" : navigator.userAgent;
var isSafari = () => /^((?!chrome|android).)*safari/i.test(userAgent());
var bigInt64Array = null;
var wasmExceptions = null;
var wasmThreads = null;
var wasmSIMD = null;
var wasmBulkMemory = null;
async function getPlatformFeatures() {
  if (bigInt64Array == null) {
    bigInt64Array = typeof BigInt64Array != "undefined";
  }
  if (wasmExceptions == null) {
    wasmExceptions = await check.exceptions();
  }
  if (wasmThreads == null) {
    wasmThreads = await check.threads();
  }
  if (wasmSIMD == null) {
    wasmSIMD = await check.simd();
  }
  if (wasmBulkMemory == null) {
    wasmBulkMemory = await check.bulkMemory();
  }
  return {
    bigInt64Array,
    crossOriginIsolated: isNode() || globalThis.crossOriginIsolated || false,
    wasmExceptions,
    wasmSIMD,
    wasmThreads,
    wasmBulkMemory
  };
}
async function selectBundle(bundles) {
  const platform = await getPlatformFeatures();
  if (platform.wasmExceptions && !isSafari()) {
    if (platform.wasmSIMD && platform.wasmThreads && platform.crossOriginIsolated && bundles.coi) {
      return {
        mainModule: bundles.coi.mainModule,
        mainWorker: bundles.coi.mainWorker,
        pthreadWorker: bundles.coi.pthreadWorker
      };
    }
    if (bundles.eh) {
      return {
        mainModule: bundles.eh.mainModule,
        mainWorker: bundles.eh.mainWorker,
        pthreadWorker: null
      };
    }
  }
  return {
    mainModule: bundles.mvp.mainModule,
    mainWorker: bundles.mvp.mainWorker,
    pthreadWorker: null
  };
}

// src/bindings/runtime_node.ts
var import_fs = __toESM(require("fs"));
var fg = __toESM(require_out4());
var NODE_RUNTIME = {
  _files: /* @__PURE__ */ new Map(),
  _fileInfoCache: /* @__PURE__ */ new Map(),
  _udfFunctions: /* @__PURE__ */ new Map(),
  resolveFileInfo(mod, fileId) {
    try {
      const cached = NODE_RUNTIME._fileInfoCache.get(fileId);
      const [s, d, n] = callSRet(mod, "duckdb_web_fs_get_file_info_by_id", ["number", "number"], [fileId, (cached == null ? void 0 : cached.cacheEpoch) || 0]);
      if (s !== 0 /* SUCCESS */) {
        failWith(mod, readString(mod, d, n));
        return null;
      } else if (n === 0) {
        return cached;
      }
      const infoStr = readString(mod, d, n);
      dropResponseBuffers(mod);
      const info = JSON.parse(infoStr);
      if (info == null)
        return null;
      NODE_RUNTIME._fileInfoCache.set(fileId, info);
      return info;
    } catch (e) {
      failWith(mod, e.toString());
      return null;
    }
  },
  testPlatformFeature: (_mod, feature) => {
    switch (feature) {
      case 1:
        return typeof BigInt64Array !== "undefined";
      default:
        console.warn(`test for unknown feature: ${feature}`);
        return false;
    }
  },
  openFile(mod, fileId, flags) {
    try {
      NODE_RUNTIME._fileInfoCache.delete(fileId);
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NATIVE */: {
          file.dataNativeFd = import_fs.default.openSync(file.dataUrl, import_fs.default.constants.O_CREAT | import_fs.default.constants.O_RDWR, import_fs.default.constants.S_IRUSR | import_fs.default.constants.S_IWUSR);
          const [s, d, n] = callSRet(mod, "duckdb_web_fs_set_file_descriptor", ["number", "number"], [fileId, file.dataNativeFd]);
          if (s !== 0 /* SUCCESS */) {
            failWith(mod, readString(mod, d, n));
          }
          const fileSize = import_fs.default.fstatSync(file.dataNativeFd).size;
          const result = mod._malloc(2 * 8);
          mod.HEAPF64[(result >> 3) + 0] = +fileSize;
          mod.HEAPF64[(result >> 3) + 1] = 0;
          return result;
        }
        case 3 /* HTTP */:
        case 4 /* S3 */:
          failWith(mod, "Not implemented");
      }
    } catch (e) {
      failWith(mod, e.toString());
    }
    return 0;
  },
  syncFile: (_mod, _fileId) => {
  },
  closeFile: (mod, fileId) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      NODE_RUNTIME._fileInfoCache.delete(fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NATIVE */: {
          if (!file.dataNativeFd) {
            failWith(mod, `File ${fileId} is missing a file descriptor`);
            return 0;
          }
          import_fs.default.closeSync(file.dataNativeFd);
          file.dataNativeFd = null;
          break;
        }
        case 3 /* HTTP */:
        case 4 /* S3 */:
          failWith(mod, `Not implemented`);
      }
    } catch (e) {
      failWith(mod, e.toString());
    }
    return 0;
  },
  truncateFile: (mod, fileId, newSize) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NATIVE */: {
          if (!file.dataNativeFd) {
            failWith(mod, `File ${fileId} is missing a file descriptor`);
            return 0;
          }
          import_fs.default.truncateSync(file.dataUrl, newSize);
          break;
        }
        case 3 /* HTTP */:
        case 4 /* S3 */:
          failWith(mod, `Not implemented`);
      }
    } catch (e) {
      failWith(mod, e.toString());
    }
    return 0;
  },
  readFile: (mod, fileId, buf, bytes, location) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NATIVE */: {
          if (!file.dataNativeFd) {
            failWith(mod, `File ${fileId} is missing a file descriptor`);
            return 0;
          }
          return import_fs.default.readSync(file.dataNativeFd, mod.HEAPU8, buf, bytes, location);
        }
        case 3 /* HTTP */:
        case 4 /* S3 */:
          failWith(mod, `Not implemented`);
      }
    } catch (e) {
      failWith(mod, e.toString());
    }
    return 0;
  },
  writeFile: (mod, fileId, buf, bytes, location) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NATIVE */: {
          if (!file.dataNativeFd) {
            failWith(mod, `File ${fileId} is missing a file descriptor`);
            return 0;
          }
          const src = mod.HEAPU8.subarray(buf, buf + bytes);
          return import_fs.default.writeSync(file.dataNativeFd, src, 0, src.length, location);
        }
      }
    } catch (e) {
      failWith(mod, e.toString());
    }
    return 0;
  },
  getLastFileModificationTime: (mod, fileId) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NATIVE */: {
          if (!file.dataNativeFd) {
            failWith(mod, `File ${fileId} is missing a file descriptor`);
            return 0;
          }
          return import_fs.default.fstatSync(file.dataNativeFd).mtime.getTime();
        }
        case 3 /* HTTP */:
        case 4 /* S3 */:
          failWith(mod, "Not implemented");
      }
    } catch (e) {
      failWith(mod, e.toString());
    }
    return 0;
  },
  checkDirectory: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.existsSync(path2);
    } catch (e) {
      failWith(mod, e.toString());
      return false;
    }
  },
  createDirectory: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.mkdirSync(path2);
    } catch (e) {
      failWith(mod, e.toString());
      return 0;
    }
  },
  removeDirectory: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.rmdirSync(path2);
    } catch (e) {
      failWith(mod, e.toString());
      return 0;
    }
  },
  listDirectoryEntries: (mod, _pathPtr, _pathLen) => {
    failWith(mod, "Not Implemented");
    return false;
  },
  glob: (mod, pathPtr, pathLen) => {
    try {
      const path2 = readString(mod, pathPtr, pathLen);
      const entries = fg.sync([path2], { dot: true });
      for (const entry of entries) {
        mod.ccall("duckdb_web_fs_glob_add_path", null, ["string"], [entry]);
      }
    } catch (e) {
      failWith(mod, e.toString());
      return 0;
    }
  },
  moveFile: (mod, fromPtr, fromLen, toPtr, toLen) => {
    try {
      const from = decodeText(mod.HEAPU8.subarray(fromPtr, fromPtr + fromLen));
      const to = decodeText(mod.HEAPU8.subarray(toPtr, toPtr + toLen));
      return import_fs.default.renameSync(from, to);
    } catch (e) {
      failWith(mod, e.toString());
      return 0;
    }
  },
  checkFile: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.existsSync(path2);
    } catch (e) {
      failWith(mod, e.toString());
      return false;
    }
  },
  removeFile: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.rmSync(path2);
    } catch (e) {
      failWith(mod, e.toString());
      return 0;
    }
  },
  callScalarUDF: (mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize) => {
    callScalarUDF(NODE_RUNTIME, mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize);
  }
};

// src/bindings/duckdb-mvp.js
var import_meta = {};
var DuckDB = (() => {
  var _scriptDir = import_meta.url;
  return function(DuckDB5) {
    DuckDB5 = DuckDB5 || {};
    var Module = typeof DuckDB5 !== "undefined" ? DuckDB5 : {};
    var objAssign = Object.assign;
    var readyPromiseResolve, readyPromiseReject;
    Module["ready"] = new Promise(function(resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var moduleOverrides = objAssign({}, Module);
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = typeof window === "object";
    var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    var ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    var scriptDirectory = "";
    function locateFile(path2) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path2, scriptDirectory);
      }
      return scriptDirectory + path2;
    }
    var read_, readAsync, readBinary, setWindowTitle;
    function logExceptionOnExit(e) {
      if (e instanceof ExitStatus)
        return;
      let toLog = e;
      err("exiting due to exception: " + toLog);
    }
    var fs4;
    var nodePath;
    var requireNodeFS;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require("path").dirname(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      requireNodeFS = function() {
        if (!nodePath) {
          fs4 = require("fs");
          nodePath = require("path");
        }
      };
      read_ = function shell_read(filename, binary) {
        requireNodeFS();
        filename = nodePath["normalize"](filename);
        return fs4.readFileSync(filename, binary ? null : "utf8");
      };
      readBinary = function readBinary2(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        return ret;
      };
      readAsync = function readAsync2(filename, onload, onerror) {
        requireNodeFS();
        filename = nodePath["normalize"](filename);
        fs4.readFile(filename, function(err2, data) {
          if (err2)
            onerror(err2);
          else
            onload(data.buffer);
        });
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/");
      }
      arguments_ = process["argv"].slice(2);
      process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", function(reason) {
        throw reason;
      });
      quit_ = (status, toThrow) => {
        if (keepRuntimeAlive()) {
          process["exitCode"] = status;
          throw toThrow;
        }
        logExceptionOnExit(toThrow);
        process["exit"](status);
      };
      Module["inspect"] = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document !== "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      {
        read_ = function(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = function(url, onload, onerror) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = function() {
            if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = (title) => document.title = title;
    } else {
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    objAssign(Module, moduleOverrides);
    moduleOverrides = null;
    if (Module["arguments"])
      arguments_ = Module["arguments"];
    if (Module["thisProgram"])
      thisProgram = Module["thisProgram"];
    if (Module["quit"])
      quit_ = Module["quit"];
    var tempRet0 = 0;
    var setTempRet0 = function(value) {
      tempRet0 = value;
    };
    var getTempRet0 = function() {
      return tempRet0;
    };
    var wasmBinary;
    if (Module["wasmBinary"])
      wasmBinary = Module["wasmBinary"];
    var noExitRuntime = Module["noExitRuntime"] || true;
    if (typeof WebAssembly !== "object") {
      abort("no native wasm support detected");
    }
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    function assert(condition, text) {
      if (!condition) {
        abort(text);
      }
    }
    function getCFunc(ident) {
      var func = Module["_" + ident];
      return func;
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = { "string": function(str) {
        var ret2 = 0;
        if (str !== null && str !== void 0 && str !== 0) {
          var len = (str.length << 2) + 1;
          ret2 = stackAlloc(len);
          stringToUTF8(str, ret2, len);
        }
        return ret2;
      }, "array": function(arr) {
        var ret2 = stackAlloc(arr.length);
        writeArrayToMemory(arr, ret2);
        return ret2;
      } };
      function convertReturnValue(ret2) {
        if (returnType === "string")
          return UTF8ToString(ret2);
        if (returnType === "boolean")
          return Boolean(ret2);
        return ret2;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0)
              stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      function onDone(ret2) {
        if (stack !== 0)
          stackRestore(stack);
        return convertReturnValue(ret2);
      }
      ret = onDone(ret);
      return ret;
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(heap, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heap[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
      if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = heap[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = heap[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }
          var u2 = heap[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0))
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx)
            break;
          heap[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx)
            break;
          heap[outIdx++] = 192 | u >> 6;
          heap[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx)
            break;
          heap[outIdx++] = 224 | u >> 12;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx)
            break;
          heap[outIdx++] = 240 | u >> 18;
          heap[outIdx++] = 128 | u >> 12 & 63;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        }
      }
      heap[outIdx] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
          u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
          ++len;
        else if (u <= 2047)
          len += 2;
        else if (u <= 65535)
          len += 3;
        else
          len += 4;
      }
      return len;
    }
    function writeArrayToMemory(array, buffer2) {
      HEAP8.set(array, buffer2);
    }
    function writeAsciiToMemory(str, buffer2, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull)
        HEAP8[buffer2 >> 0] = 0;
    }
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    var wasmTable;
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    var runtimeKeepaliveCounter = 0;
    function keepRuntimeAlive() {
      return noExitRuntime || runtimeKeepaliveCounter > 0;
    }
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      runtimeExited = true;
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) {
      {
        if (Module["onAbort"]) {
          Module["onAbort"](what);
        }
      }
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what += ". Build with -s ASSERTIONS=1 for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return filename.startsWith(dataURIPrefix);
    }
    var wasmBinaryFile;
    if (Module["locateFile"]) {
      wasmBinaryFile = "./duckdb-mvp.wasm";
      if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = locateFile(wasmBinaryFile);
      }
    } else {
      wasmBinaryFile = new URL("./duckdb-mvp.wasm", import_meta.url).toString();
    }
    function getBinary(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(file);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch === "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            if (!response["ok"]) {
              throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
            }
            return response["arrayBuffer"]();
          }).catch(function() {
            return getBinary(wasmBinaryFile);
          });
        }
      }
      return Promise.resolve().then(function() {
        return getBinary(wasmBinaryFile);
      });
    }
    function createWasm() {
      var info = { "a": asmLibraryArg };
      function receiveInstance(instance, module2) {
        var exports2 = instance.exports;
        Module["asm"] = exports2;
        wasmMemory = Module["asm"]["Se"];
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module["asm"]["Ve"];
        addOnInit(Module["asm"]["Te"]);
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      function receiveInstantiationResult(result) {
        receiveInstance(result["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(function(instance) {
          return instance;
        }).then(receiver, function(reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiationResult, function(reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              return instantiateArrayBuffer(receiveInstantiationResult);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiationResult);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports = Module["instantiateWasm"](info, receiveInstance);
          return exports;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {};
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
          callback(Module);
          continue;
        }
        var func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === void 0) {
            getWasmTableEntry(func)();
          } else {
            getWasmTableEntry(func)(callback.arg);
          }
        } else {
          func(callback.arg === void 0 ? null : callback.arg);
        }
      }
    }
    var wasmTableMirror = [];
    function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length)
          wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    }
    function handleException(e) {
      if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS;
      }
      quit_(1, e);
    }
    function ___assert_fail(condition, filename, line, func) {
      abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
    }
    function ___cxa_allocate_exception(size) {
      return _malloc(size + 16) + 16;
    }
    function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - 16;
      this.set_type = function(type) {
        HEAP32[this.ptr + 4 >> 2] = type;
      };
      this.get_type = function() {
        return HEAP32[this.ptr + 4 >> 2];
      };
      this.set_destructor = function(destructor) {
        HEAP32[this.ptr + 8 >> 2] = destructor;
      };
      this.get_destructor = function() {
        return HEAP32[this.ptr + 8 >> 2];
      };
      this.set_refcount = function(refcount) {
        HEAP32[this.ptr >> 2] = refcount;
      };
      this.set_caught = function(caught) {
        caught = caught ? 1 : 0;
        HEAP8[this.ptr + 12 >> 0] = caught;
      };
      this.get_caught = function() {
        return HEAP8[this.ptr + 12 >> 0] != 0;
      };
      this.set_rethrown = function(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[this.ptr + 13 >> 0] = rethrown;
      };
      this.get_rethrown = function() {
        return HEAP8[this.ptr + 13 >> 0] != 0;
      };
      this.init = function(type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      };
      this.add_ref = function() {
        var value = HEAP32[this.ptr >> 2];
        HEAP32[this.ptr >> 2] = value + 1;
      };
      this.release_ref = function() {
        var prev = HEAP32[this.ptr >> 2];
        HEAP32[this.ptr >> 2] = prev - 1;
        return prev === 1;
      };
    }
    function CatchInfo(ptr) {
      this.free = function() {
        _free(this.ptr);
        this.ptr = 0;
      };
      this.set_base_ptr = function(basePtr) {
        HEAP32[this.ptr >> 2] = basePtr;
      };
      this.get_base_ptr = function() {
        return HEAP32[this.ptr >> 2];
      };
      this.set_adjusted_ptr = function(adjustedPtr) {
        HEAP32[this.ptr + 4 >> 2] = adjustedPtr;
      };
      this.get_adjusted_ptr_addr = function() {
        return this.ptr + 4;
      };
      this.get_adjusted_ptr = function() {
        return HEAP32[this.ptr + 4 >> 2];
      };
      this.get_exception_ptr = function() {
        var isPointer = ___cxa_is_pointer_type(this.get_exception_info().get_type());
        if (isPointer) {
          return HEAP32[this.get_base_ptr() >> 2];
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0)
          return adjusted;
        return this.get_base_ptr();
      };
      this.get_exception_info = function() {
        return new ExceptionInfo(this.get_base_ptr());
      };
      if (ptr === void 0) {
        this.ptr = _malloc(8);
        this.set_adjusted_ptr(0);
      } else {
        this.ptr = ptr;
      }
    }
    var exceptionCaught = [];
    function exception_addRef(info) {
      info.add_ref();
    }
    var uncaughtExceptionCount = 0;
    function ___cxa_begin_catch(ptr) {
      var catchInfo = new CatchInfo(ptr);
      var info = catchInfo.get_exception_info();
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--;
      }
      info.set_rethrown(false);
      exceptionCaught.push(catchInfo);
      exception_addRef(info);
      return catchInfo.get_exception_ptr();
    }
    var exceptionLast = 0;
    function ___cxa_free_exception(ptr) {
      return _free(new ExceptionInfo(ptr).ptr);
    }
    function exception_decRef(info) {
      if (info.release_ref() && !info.get_rethrown()) {
        var destructor = info.get_destructor();
        if (destructor) {
          getWasmTableEntry(destructor)(info.excPtr);
        }
        ___cxa_free_exception(info.excPtr);
      }
    }
    function ___cxa_end_catch() {
      _setThrew(0);
      var catchInfo = exceptionCaught.pop();
      exception_decRef(catchInfo.get_exception_info());
      catchInfo.free();
      exceptionLast = 0;
    }
    function ___resumeException(catchInfoPtr) {
      var catchInfo = new CatchInfo(catchInfoPtr);
      var ptr = catchInfo.get_base_ptr();
      if (!exceptionLast) {
        exceptionLast = ptr;
      }
      catchInfo.free();
      throw ptr;
    }
    function ___cxa_find_matching_catch_2() {
      var thrown = exceptionLast;
      if (!thrown) {
        setTempRet0(0);
        return 0 | 0;
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo();
      catchInfo.set_base_ptr(thrown);
      catchInfo.set_adjusted_ptr(thrown);
      if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0;
      }
      var typeArray = Array.prototype.slice.call(arguments);
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          break;
        }
        if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
          setTempRet0(caughtType);
          return catchInfo.ptr | 0;
        }
      }
      setTempRet0(thrownType);
      return catchInfo.ptr | 0;
    }
    function ___cxa_find_matching_catch_3() {
      var thrown = exceptionLast;
      if (!thrown) {
        setTempRet0(0);
        return 0 | 0;
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo();
      catchInfo.set_base_ptr(thrown);
      catchInfo.set_adjusted_ptr(thrown);
      if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0;
      }
      var typeArray = Array.prototype.slice.call(arguments);
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          break;
        }
        if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
          setTempRet0(caughtType);
          return catchInfo.ptr | 0;
        }
      }
      setTempRet0(thrownType);
      return catchInfo.ptr | 0;
    }
    function ___cxa_find_matching_catch_4() {
      var thrown = exceptionLast;
      if (!thrown) {
        setTempRet0(0);
        return 0 | 0;
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo();
      catchInfo.set_base_ptr(thrown);
      catchInfo.set_adjusted_ptr(thrown);
      if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0;
      }
      var typeArray = Array.prototype.slice.call(arguments);
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          break;
        }
        if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
          setTempRet0(caughtType);
          return catchInfo.ptr | 0;
        }
      }
      setTempRet0(thrownType);
      return catchInfo.ptr | 0;
    }
    function ___cxa_find_matching_catch_5() {
      var thrown = exceptionLast;
      if (!thrown) {
        setTempRet0(0);
        return 0 | 0;
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo();
      catchInfo.set_base_ptr(thrown);
      catchInfo.set_adjusted_ptr(thrown);
      if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0;
      }
      var typeArray = Array.prototype.slice.call(arguments);
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          break;
        }
        if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
          setTempRet0(caughtType);
          return catchInfo.ptr | 0;
        }
      }
      setTempRet0(thrownType);
      return catchInfo.ptr | 0;
    }
    function ___cxa_rethrow() {
      var catchInfo = exceptionCaught.pop();
      if (!catchInfo) {
        abort("no exception to throw");
      }
      var info = catchInfo.get_exception_info();
      var ptr = catchInfo.get_base_ptr();
      if (!info.get_rethrown()) {
        exceptionCaught.push(catchInfo);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++;
      } else {
        catchInfo.free();
      }
      exceptionLast = ptr;
      throw ptr;
    }
    function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr;
    }
    function ___cxa_uncaught_exceptions() {
      return uncaughtExceptionCount;
    }
    var SYSCALLS = { mappings: {}, buffers: [null, [], []], printChar: function(stream, curr) {
      var buffer2 = SYSCALLS.buffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
        buffer2.length = 0;
      } else {
        buffer2.push(curr);
      }
    }, varargs: void 0, get: function() {
      SYSCALLS.varargs += 4;
      var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
      return ret;
    }, getStr: function(ptr) {
      var ret = UTF8ToString(ptr);
      return ret;
    }, get64: function(low, high) {
      return low;
    } };
    function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
    }
    function ___syscall_access(path2, amode) {
      path2 = SYSCALLS.getStr(path2);
      return SYSCALLS.doAccess(path2, amode);
    }
    function SOCKFS() {
      err("missing function: $SOCKFS");
      abort(-1);
    }
    function FS() {
      err("missing function: $FS");
      abort(-1);
    }
    function getSocketFromFD(fd) {
      var socket = SOCKFS.getSocket(fd);
      if (!socket)
        throw new FS.ErrnoError(8);
      return socket;
    }
    function setErrNo(value) {
      HEAP32[___errno_location() >> 2] = value;
      return value;
    }
    function inetNtop4(addr) {
      return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
    }
    function inetNtop6(ints) {
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
      var hasipv4 = true;
      var v4part = "";
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) {
          hasipv4 = false;
          break;
        }
      }
      if (hasipv4) {
        v4part = inetNtop4(parts[6] | parts[7] << 16);
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        if (parts[5] === 0) {
          str = "::";
          if (v4part === "0.0.0.0")
            v4part = "";
          if (v4part === "0.0.0.1")
            v4part = "1";
          str += v4part;
          return str;
        }
      }
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0)
                str += ":";
            }
            continue;
          }
        }
        str += Number(_ntohs(parts[word] & 65535)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
    function readSockaddr(sa, salen) {
      var family = HEAP16[sa >> 1];
      var port = _ntohs(HEAPU16[sa + 2 >> 1]);
      var addr;
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[sa + 4 >> 2];
          addr = inetNtop4(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [HEAP32[sa + 8 >> 2], HEAP32[sa + 12 >> 2], HEAP32[sa + 16 >> 2], HEAP32[sa + 20 >> 2]];
          addr = inetNtop6(addr);
          break;
        default:
          return { errno: 5 };
      }
      return { family, addr, port };
    }
    function inetPton4(str) {
      var b = str.split(".");
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp))
          return null;
        b[i] = tmp;
      }
      return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    }
    function jstoi_q(str) {
      return parseInt(str);
    }
    function inetPton6(str) {
      var words;
      var w, offset, z;
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (str.startsWith("::")) {
        str = str.replace("::", "Z:");
      } else {
        str = str.replace("::", ":Z:");
      }
      if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]", "g"), ":");
        words = str.split(":");
        words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
        words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2);
      } else {
        words = str.split(":");
      }
      offset = 0;
      z = 0;
      for (w = 0; w < words.length; w++) {
        if (typeof words[w] === "string") {
          if (words[w] === "Z") {
            for (z = 0; z < 8 - words.length + 1; z++) {
              parts[w + z] = 0;
            }
            offset = z - 1;
          } else {
            parts[w + offset] = _htons(parseInt(words[w], 16));
          }
        } else {
          parts[w + offset] = words[w];
        }
      }
      return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]];
    }
    var DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: function(name) {
      var res = inetPton4(name);
      if (res !== null) {
        return name;
      }
      res = inetPton6(name);
      if (res !== null) {
        return name;
      }
      var addr;
      if (DNS.address_map.addrs[name]) {
        addr = DNS.address_map.addrs[name];
      } else {
        var id = DNS.address_map.id++;
        assert(id < 65535, "exceeded max address mappings of 65535");
        addr = "172.29." + (id & 255) + "." + (id & 65280);
        DNS.address_map.names[addr] = name;
        DNS.address_map.addrs[name] = addr;
      }
      return addr;
    }, lookup_addr: function(addr) {
      if (DNS.address_map.names[addr]) {
        return DNS.address_map.names[addr];
      }
      return null;
    } };
    function getSocketAddress(addrp, addrlen, allowNull) {
      if (allowNull && addrp === 0)
        return null;
      var info = readSockaddr(addrp, addrlen);
      if (info.errno)
        throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    }
    function ___syscall_bind(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.bind(sock, info.addr, info.port);
      return 0;
    }
    function ___syscall_connect(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.connect(sock, info.addr, info.port);
      return 0;
    }
    function ___syscall_fcntl64(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      return 0;
    }
    function ___syscall_fstat64(fd, buf) {
    }
    function ___syscall_fstatat64(dirfd, path2, buf, flags) {
    }
    function ___syscall_ftruncate64(fd, low, high) {
    }
    function ___syscall_getdents64(fd, dirp, count) {
    }
    function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
    }
    function writeSockaddr(sa, family, addr, port, addrlen) {
      switch (family) {
        case 2:
          addr = inetPton4(addr);
          zeroMemory(sa, 16);
          if (addrlen) {
            HEAP32[addrlen >> 2] = 16;
          }
          HEAP16[sa >> 1] = family;
          HEAP32[sa + 4 >> 2] = addr;
          HEAP16[sa + 2 >> 1] = _htons(port);
          break;
        case 10:
          addr = inetPton6(addr);
          zeroMemory(sa, 28);
          if (addrlen) {
            HEAP32[addrlen >> 2] = 28;
          }
          HEAP32[sa >> 2] = family;
          HEAP32[sa + 8 >> 2] = addr[0];
          HEAP32[sa + 12 >> 2] = addr[1];
          HEAP32[sa + 16 >> 2] = addr[2];
          HEAP32[sa + 20 >> 2] = addr[3];
          HEAP16[sa + 2 >> 1] = _htons(port);
          break;
        default:
          return 5;
      }
      return 0;
    }
    function ___syscall_getpeername(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      if (!sock.daddr) {
        return -53;
      }
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
      return 0;
    }
    function ___syscall_getsockopt(fd, level, optname, optval, optlen) {
      var sock = getSocketFromFD(fd);
      if (level === 1) {
        if (optname === 4) {
          HEAP32[optval >> 2] = sock.error;
          HEAP32[optlen >> 2] = 4;
          sock.error = null;
          return 0;
        }
      }
      return -50;
    }
    function ___syscall_ioctl(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      return 0;
    }
    function ___syscall_lstat64(path2, buf) {
    }
    function ___syscall_mkdir(path2, mode) {
      path2 = SYSCALLS.getStr(path2);
      return SYSCALLS.doMkdir(path2, mode);
    }
    function ___syscall_open(path2, flags, varargs) {
      SYSCALLS.varargs = varargs;
    }
    function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var msg = sock.sock_ops.recvmsg(sock, len);
      if (!msg)
        return 0;
      if (addr) {
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
      }
      HEAPU8.set(msg.buffer, buf);
      return msg.buffer.byteLength;
    }
    function ___syscall_rename(old_path, new_path) {
    }
    function ___syscall_rmdir(path2) {
    }
    function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
    }
    function ___syscall_socket(domain, type, protocol) {
    }
    function ___syscall_stat64(path2, buf) {
    }
    function ___syscall_unlink(path2) {
    }
    function __dlopen_js(filename, flag) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }
    function __dlsym_js(handle, symbol) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }
    function _abort() {
      abort("");
    }
    var _emscripten_get_now;
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = () => {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6;
      };
    } else
      _emscripten_get_now = () => performance.now();
    var _emscripten_get_now_is_monotonic = true;
    function _clock_gettime(clk_id, tp) {
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[tp >> 2] = now / 1e3 | 0;
      HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
      return 0;
    }
    function _duckdb_web_fs_directory_create(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.createDirectory(Module, path2, pathLen);
    }
    function _duckdb_web_fs_directory_exists(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.checkDirectory(Module, path2, pathLen);
    }
    function _duckdb_web_fs_directory_list_files(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(Module, path2, pathLen);
    }
    function _duckdb_web_fs_directory_remove(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.removeDirectory(Module, path2, pathLen);
    }
    function _duckdb_web_fs_file_close(fileId) {
      return globalThis.DUCKDB_RUNTIME.closeFile(Module, fileId);
    }
    function _duckdb_web_fs_file_exists(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.checkFile(Module, path2, pathLen);
    }
    function _duckdb_web_fs_file_get_last_modified_time(fileId) {
      return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(Module, fileId);
    }
    function _duckdb_web_fs_file_move(from, fromLen, to, toLen) {
      return globalThis.DUCKDB_RUNTIME.moveFile(Module, from, fromLen, to, toLen);
    }
    function _duckdb_web_fs_file_open(fileId, flags) {
      return globalThis.DUCKDB_RUNTIME.openFile(Module, fileId, flags);
    }
    function _duckdb_web_fs_file_read(fileId, buf, size, location) {
      return globalThis.DUCKDB_RUNTIME.readFile(Module, fileId, buf, size, location);
    }
    function _duckdb_web_fs_file_truncate(fileId, newSize) {
      return globalThis.DUCKDB_RUNTIME.truncateFile(Module, fileId, newSize);
    }
    function _duckdb_web_fs_file_write(fileId, buf, size, location) {
      return globalThis.DUCKDB_RUNTIME.writeFile(Module, fileId, buf, size, location);
    }
    function _duckdb_web_fs_glob(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.glob(Module, path2, pathLen);
    }
    function _duckdb_web_test_platform_feature(feature) {
      return globalThis.DUCKDB_RUNTIME.testPlatformFeature(Module, feature);
    }
    function _duckdb_web_udf_scalar_call(funcId, descPtr, descSize, ptrsPtr, ptrsSize, response) {
      return globalThis.DUCKDB_RUNTIME.callScalarUDF(Module, funcId, descPtr, descSize, ptrsPtr, ptrsSize, response);
    }
    function _emscripten_get_heap_max() {
      return 2147483648;
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        return false;
      }
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    }
    var ENV = {};
    function getExecutableName() {
      return thisProgram || "./this.program";
    }
    function getEnvStrings() {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
        for (var x in ENV) {
          if (ENV[x] === void 0)
            delete env[x];
          else
            env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + "=" + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
    function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0;
    }
    function _fd_close(fd) {
      return 0;
    }
    function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt, offset_low);
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt, offset_low);
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _fd_read(fd, iov, iovcnt, pnum) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    }
    function _fd_sync(fd) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (stream.stream_ops && stream.stream_ops.fsync) {
        return -stream.stream_ops.fsync(stream);
      }
      return 0;
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov >> 2];
        var len = HEAP32[iov + 4 >> 2];
        iov += 8;
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _getTempRet0() {
      return getTempRet0();
    }
    function _getaddrinfo(node, service, hint, out2) {
      var addr = 0;
      var port = 0;
      var flags = 0;
      var family = 0;
      var type = 0;
      var proto = 0;
      var ai;
      function allocaddrinfo(family2, type2, proto2, canon, addr2, port2) {
        var sa, salen, ai2;
        var errno;
        salen = family2 === 10 ? 28 : 16;
        addr2 = family2 === 10 ? inetNtop6(addr2) : inetNtop4(addr2);
        sa = _malloc(salen);
        errno = writeSockaddr(sa, family2, addr2, port2);
        assert(!errno);
        ai2 = _malloc(32);
        HEAP32[ai2 + 4 >> 2] = family2;
        HEAP32[ai2 + 8 >> 2] = type2;
        HEAP32[ai2 + 12 >> 2] = proto2;
        HEAP32[ai2 + 24 >> 2] = canon;
        HEAP32[ai2 + 20 >> 2] = sa;
        if (family2 === 10) {
          HEAP32[ai2 + 16 >> 2] = 28;
        } else {
          HEAP32[ai2 + 16 >> 2] = 16;
        }
        HEAP32[ai2 + 28 >> 2] = 0;
        return ai2;
      }
      if (hint) {
        flags = HEAP32[hint >> 2];
        family = HEAP32[hint + 4 >> 2];
        type = HEAP32[hint + 8 >> 2];
        proto = HEAP32[hint + 12 >> 2];
      }
      if (type && !proto) {
        proto = type === 2 ? 17 : 6;
      }
      if (!type && proto) {
        type = proto === 17 ? 2 : 1;
      }
      if (proto === 0) {
        proto = 6;
      }
      if (type === 0) {
        type = 1;
      }
      if (!node && !service) {
        return -2;
      }
      if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
        return -1;
      }
      if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) {
        return -1;
      }
      if (flags & 32) {
        return -2;
      }
      if (type !== 0 && type !== 1 && type !== 2) {
        return -7;
      }
      if (family !== 0 && family !== 2 && family !== 10) {
        return -6;
      }
      if (service) {
        service = UTF8ToString(service);
        port = parseInt(service, 10);
        if (isNaN(port)) {
          if (flags & 1024) {
            return -2;
          }
          return -8;
        }
      }
      if (!node) {
        if (family === 0) {
          family = 2;
        }
        if ((flags & 1) === 0) {
          if (family === 2) {
            addr = _htonl(2130706433);
          } else {
            addr = [0, 0, 0, 1];
          }
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAP32[out2 >> 2] = ai;
        return 0;
      }
      node = UTF8ToString(node);
      addr = inetPton4(node);
      if (addr !== null) {
        if (family === 0 || family === 2) {
          family = 2;
        } else if (family === 10 && flags & 8) {
          addr = [0, 0, _htonl(65535), addr];
          family = 10;
        } else {
          return -2;
        }
      } else {
        addr = inetPton6(node);
        if (addr !== null) {
          if (family === 0 || family === 10) {
            family = 10;
          } else {
            return -2;
          }
        }
      }
      if (addr != null) {
        ai = allocaddrinfo(family, type, proto, node, addr, port);
        HEAP32[out2 >> 2] = ai;
        return 0;
      }
      if (flags & 4) {
        return -2;
      }
      node = DNS.lookup_name(node);
      addr = inetPton4(node);
      if (family === 0) {
        family = 2;
      } else if (family === 10) {
        addr = [0, 0, _htonl(65535), addr];
      }
      ai = allocaddrinfo(family, type, proto, null, addr, port);
      HEAP32[out2 >> 2] = ai;
      return 0;
    }
    function getRandomDevice() {
      if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
        var randomBuffer = new Uint8Array(1);
        return function() {
          crypto.getRandomValues(randomBuffer);
          return randomBuffer[0];
        };
      } else if (ENVIRONMENT_IS_NODE) {
        try {
          var crypto_module = require("crypto");
          return function() {
            return crypto_module["randomBytes"](1)[0];
          };
        } catch (e) {
        }
      }
      return function() {
        abort("randomDevice");
      };
    }
    function _getentropy(buffer2, size) {
      if (!_getentropy.randomDevice) {
        _getentropy.randomDevice = getRandomDevice();
      }
      for (var i = 0; i < size; i++) {
        HEAP8[buffer2 + i >> 0] = _getentropy.randomDevice();
      }
      return 0;
    }
    function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
      var info = readSockaddr(sa, salen);
      if (info.errno) {
        return -6;
      }
      var port = info.port;
      var addr = info.addr;
      var overflowed = false;
      if (node && nodelen) {
        var lookup;
        if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
          if (flags & 8) {
            return -2;
          }
        } else {
          addr = lookup;
        }
        var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
        if (numBytesWrittenExclNull + 1 >= nodelen) {
          overflowed = true;
        }
      }
      if (serv && servlen) {
        port = "" + port;
        var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
        if (numBytesWrittenExclNull + 1 >= servlen) {
          overflowed = true;
        }
      }
      if (overflowed) {
        return -12;
      }
      return 0;
    }
    function _llvm_eh_typeid_for(type) {
      return type;
    }
    function _setTempRet0(val) {
      setTempRet0(val);
    }
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
      }
      return sum;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[tm + 40 >> 2];
      var date = { tm_sec: HEAP32[tm >> 2], tm_min: HEAP32[tm + 4 >> 2], tm_hour: HEAP32[tm + 8 >> 2], tm_mday: HEAP32[tm + 12 >> 2], tm_mon: HEAP32[tm + 16 >> 2], tm_year: HEAP32[tm + 20 >> 2], tm_wday: HEAP32[tm + 24 >> 2], tm_yday: HEAP32[tm + 28 >> 2], tm_isdst: HEAP32[tm + 32 >> 2], tm_gmtoff: HEAP32[tm + 36 >> 2], tm_zone: tm_zone ? UTF8ToString(tm_zone) : "" };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date2) {
        var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          } else {
            return thisDate.getFullYear();
          }
        } else {
          return thisDate.getFullYear() - 1;
        }
      }
      var EXPANSION_RULES_2 = { "%a": function(date2) {
        return WEEKDAYS[date2.tm_wday].substring(0, 3);
      }, "%A": function(date2) {
        return WEEKDAYS[date2.tm_wday];
      }, "%b": function(date2) {
        return MONTHS[date2.tm_mon].substring(0, 3);
      }, "%B": function(date2) {
        return MONTHS[date2.tm_mon];
      }, "%C": function(date2) {
        var year = date2.tm_year + 1900;
        return leadingNulls(year / 100 | 0, 2);
      }, "%d": function(date2) {
        return leadingNulls(date2.tm_mday, 2);
      }, "%e": function(date2) {
        return leadingSomething(date2.tm_mday, 2, " ");
      }, "%g": function(date2) {
        return getWeekBasedYear(date2).toString().substring(2);
      }, "%G": function(date2) {
        return getWeekBasedYear(date2);
      }, "%H": function(date2) {
        return leadingNulls(date2.tm_hour, 2);
      }, "%I": function(date2) {
        var twelveHour = date2.tm_hour;
        if (twelveHour == 0)
          twelveHour = 12;
        else if (twelveHour > 12)
          twelveHour -= 12;
        return leadingNulls(twelveHour, 2);
      }, "%j": function(date2) {
        return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
      }, "%m": function(date2) {
        return leadingNulls(date2.tm_mon + 1, 2);
      }, "%M": function(date2) {
        return leadingNulls(date2.tm_min, 2);
      }, "%n": function() {
        return "\n";
      }, "%p": function(date2) {
        if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      }, "%S": function(date2) {
        return leadingNulls(date2.tm_sec, 2);
      }, "%t": function() {
        return "	";
      }, "%u": function(date2) {
        return date2.tm_wday || 7;
      }, "%U": function(date2) {
        var janFirst = new Date(date2.tm_year + 1900, 0, 1);
        var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
        var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
        if (compareByDay(firstSunday, endDate) < 0) {
          var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
          var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
          var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
          return leadingNulls(Math.ceil(days / 7), 2);
        }
        return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
      }, "%V": function(date2) {
        var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
        var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
          return "53";
        }
        if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
          return "01";
        }
        var daysDifference;
        if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
          daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
        } else {
          daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
        }
        return leadingNulls(Math.ceil(daysDifference / 7), 2);
      }, "%w": function(date2) {
        return date2.tm_wday;
      }, "%W": function(date2) {
        var janFirst = new Date(date2.tm_year, 0, 1);
        var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
        var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
        if (compareByDay(firstMonday, endDate) < 0) {
          var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
          var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
          var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
          return leadingNulls(Math.ceil(days / 7), 2);
        }
        return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
      }, "%y": function(date2) {
        return (date2.tm_year + 1900).toString().substring(2);
      }, "%Y": function(date2) {
        return date2.tm_year + 1900;
      }, "%z": function(date2) {
        var off = date2.tm_gmtoff;
        var ahead = off >= 0;
        off = Math.abs(off) / 60;
        off = off / 60 * 100 + off % 60;
        return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
      }, "%Z": function(date2) {
        return date2.tm_zone;
      }, "%%": function() {
        return "%";
      } };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }
    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm);
    }
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull)
        u8array.length = numBytesWritten;
      return u8array;
    }
    var asmLibraryArg = { "p": ___assert_fail, "j": ___cxa_allocate_exception, "A": ___cxa_begin_catch, "F": ___cxa_end_catch, "b": ___cxa_find_matching_catch_2, "n": ___cxa_find_matching_catch_3, "I": ___cxa_find_matching_catch_4, "X": ___cxa_find_matching_catch_5, "i": ___cxa_free_exception, "ea": ___cxa_rethrow, "v": ___cxa_throw, "E": ___cxa_uncaught_exceptions, "e": ___resumeException, "Ea": ___syscall__newselect, "ya": ___syscall_access, "Ga": ___syscall_bind, "Fa": ___syscall_connect, "Q": ___syscall_fcntl64, "Sa": ___syscall_fstat64, "Qa": ___syscall_fstatat64, "Na": ___syscall_ftruncate64, "Oa": ___syscall_getdents64, "Aa": ___syscall_getpeername, "Da": ___syscall_getsockopt, "Ua": ___syscall_ioctl, "Pa": ___syscall_lstat64, "Ta": ___syscall_mkdir, "pa": ___syscall_open, "Ba": ___syscall_recvfrom, "Qe": ___syscall_rename, "na": ___syscall_rmdir, "Ca": ___syscall_sendto, "ja": ___syscall_socket, "Ra": ___syscall_stat64, "oa": ___syscall_unlink, "ka": __dlopen_js, "Ia": __dlsym_js, "$": _abort, "ma": _clock_gettime, "Ie": _duckdb_web_fs_directory_create, "Je": _duckdb_web_fs_directory_exists, "Ge": _duckdb_web_fs_directory_list_files, "He": _duckdb_web_fs_directory_remove, "wa": _duckdb_web_fs_file_close, "Ee": _duckdb_web_fs_file_exists, "Le": _duckdb_web_fs_file_get_last_modified_time, "Fe": _duckdb_web_fs_file_move, "Me": _duckdb_web_fs_file_open, "ga": _duckdb_web_fs_file_read, "Ke": _duckdb_web_fs_file_truncate, "xa": _duckdb_web_fs_file_write, "De": _duckdb_web_fs_glob, "va": _duckdb_web_test_platform_feature, "Ne": _duckdb_web_udf_scalar_call, "Va": _emscripten_get_heap_max, "lb": _emscripten_memcpy_big, "fd": _emscripten_resize_heap, "Xa": _environ_get, "Ya": _environ_sizes_get, "V": _fd_close, "pe": _fd_pread, "wb": _fd_pwrite, "ra": _fd_read, "ye": _fd_seek, "Re": _fd_sync, "fa": _fd_write, "a": _getTempRet0, "Ha": _getaddrinfo, "Ma": _getentropy, "za": _getnameinfo, "ta": invoke_d, "N": invoke_di, "Ja": invoke_dii, "T": invoke_diii, "yc": invoke_diijii, "ua": invoke_f, "Y": invoke_fi, "sa": invoke_fiii, "zc": invoke_fiijii, "u": invoke_i, "Be": invoke_id, "Ka": invoke_idd, "_": invoke_idiii, "Ce": invoke_if, "La": invoke_iff, "d": invoke_ii, "ba": invoke_iid, "D": invoke_iidii, "Pb": invoke_iidj, "c": invoke_iii, "Z": invoke_iiid, "ha": invoke_iiif, "h": invoke_iiii, "Nb": invoke_iiiidjj, "m": invoke_iiiii, "qa": invoke_iiiiid, "o": invoke_iiiiii, "w": invoke_iiiiiii, "z": invoke_iiiiiiii, "S": invoke_iiiiiiiii, "U": invoke_iiiiiiiiii, "y": invoke_iiiiiiiiiii, "x": invoke_iiiiiiiiiiii, "q": invoke_iiiiiiiiiiiiiii, "O": invoke_iiiiiiiiiiiiiiiiiiii, "J": invoke_iiiiiiiiiiiiiiiiiiiii, "cc": invoke_iiiiiiiiiiiij, "fc": invoke_iiiiiiiiiiji, "ic": invoke_iiiiiiiij, "oc": invoke_iiiiiiiiji, "dc": invoke_iiiiiiij, "Ob": invoke_iiiiiiiji, "xc": invoke_iiiiiiijii, "gc": invoke_iiiiiij, "pc": invoke_iiiiiiji, "db": invoke_iiiiiijji, "ue": invoke_iiiiij, "Qd": invoke_iiiiiji, "Jd": invoke_iiiiijii, "te": invoke_iiiiijj, "Ub": invoke_iiiiijji, "jd": invoke_iiiiijjiijj, "$a": invoke_iiiiijjj, "_a": invoke_iiiiijjji, "Xd": invoke_iiiij, "Pd": invoke_iiiiji, "Eb": invoke_iiiijii, "Xc": invoke_iiiijiii, "Wd": invoke_iiiijj, "Ec": invoke_iiiijji, "Vb": invoke_iiiijjii, "Mb": invoke_iiiijjj, "ke": invoke_iiij, "Td": invoke_iiiji, "Ac": invoke_iiijii, "Kd": invoke_iiijiii, "vd": invoke_iiijiiii, "Hd": invoke_iiijiij, "sb": invoke_iiijiijj, "Ud": invoke_iiijij, "me": invoke_iiijj, "Rd": invoke_iiijji, "id": invoke_iiijjii, "nb": invoke_iiijjji, "cb": invoke_iiijjjii, "se": invoke_iij, "Yd": invoke_iiji, "xd": invoke_iijii, "Cb": invoke_iijiii, "Ld": invoke_iijiiii, "ob": invoke_iijiijj, "Lb": invoke_iijiji, "Sd": invoke_iijj, "Dd": invoke_iijji, "Gd": invoke_iijjii, "Fd": invoke_iijjiii, "Ed": invoke_iijjiiii, "Ad": invoke_iijjijj, "mc": invoke_iijjj, "$b": invoke_ij, "ee": invoke_iji, "qc": invoke_ijji, "ae": invoke_ijjiii, "qe": invoke_j, "tc": invoke_jd, "sc": invoke_jf, "xe": invoke_ji, "we": invoke_jii, "Od": invoke_jiii, "Ae": invoke_jiiii, "qd": invoke_jiiiii, "rc": invoke_jiiiiii, "ec": invoke_jiiiiiii, "Fc": invoke_jiiiiiijii, "vc": invoke_jiiiiijiiii, "Uc": invoke_jiiiij, "Bb": invoke_jiiiiji, "Bc": invoke_jiiiijii, "sd": invoke_jiiij, "md": invoke_jiiiji, "Mc": invoke_jiiijii, "wc": invoke_jiiijiii, "Fb": invoke_jiiijj, "ac": invoke_jiij, "od": invoke_jiiji, "dd": invoke_jiijii, "Pc": invoke_jiijiiiii, "Oc": invoke_jiijiijiii, "Lc": invoke_jiijijii, "Nc": invoke_jiijjiii, "td": invoke_jij, "ad": invoke_jijiii, "ab": invoke_jijiiii, "kc": invoke_jijijjij, "ub": invoke_jijj, "_c": invoke_jijjij, "uc": invoke_jj, "Ib": invoke_jji, "Yb": invoke_jjj, "Jb": invoke_jjjii, "Wb": invoke_jjjjjjd, "t": invoke_v, "k": invoke_vi, "C": invoke_vid, "ca": invoke_vidi, "yb": invoke_vidiijj, "K": invoke_vif, "da": invoke_vifi, "zb": invoke_vifiijj, "f": invoke_vii, "W": invoke_viid, "R": invoke_viidii, "Cc": invoke_viif, "g": invoke_viii, "l": invoke_viiii, "Pe": invoke_viiiidiiii, "s": invoke_viiiii, "r": invoke_viiiiii, "ia": invoke_viiiiiidiii, "B": invoke_viiiiiii, "L": invoke_viiiiiiii, "P": invoke_viiiiiiiii, "M": invoke_viiiiiiiiii, "Oe": invoke_viiiiiiiiiii, "la": invoke_viiiiiiiiiiiii, "aa": invoke_viiiiiiiiiiiiiii, "Cd": invoke_viiiiiij, "xb": invoke_viiiiij, "kd": invoke_viiiiiji, "bc": invoke_viiiiijiii, "Dc": invoke_viiiiijiiii, "nc": invoke_viiiiijj, "Qb": invoke_viiiiijji, "Za": invoke_viiiiijjj, "qb": invoke_viiiiijjji, "ie": invoke_viiiij, "Vd": invoke_viiiiji, "Db": invoke_viiiijii, "kb": invoke_viiiijiii, "yd": invoke_viiiijiiii, "zd": invoke_viiiijiiiii, "Zb": invoke_viiiijiiiiiiii, "Yc": invoke_viiiijj, "Sb": invoke_viiiijji, "Rb": invoke_viiiijjii, "eb": invoke_viiiijjj, "Qc": invoke_viiiijjjj, "he": invoke_viiij, "_d": invoke_viiiji, "Bd": invoke_viiijii, "Wc": invoke_viiijiii, "Ic": invoke_viiijiiiijjj, "Gb": invoke_viiijij, "bb": invoke_viiijiji, "Hb": invoke_viiijijiji, "pb": invoke_viiijijjj, "ce": invoke_viiijj, "ud": invoke_viiijji, "Tb": invoke_viiijjii, "Gc": invoke_viiijjiij, "Tc": invoke_viiijjij, "ge": invoke_viiijjj, "mb": invoke_viiijjjji, "oe": invoke_viij, "re": invoke_viiji, "ve": invoke_viijii, "Id": invoke_viijiii, "jb": invoke_viijiiii, "cd": invoke_viijiiiii, "Kc": invoke_viijiiiiij, "Jc": invoke_viijiiiijj, "bd": invoke_viijiiij, "Zc": invoke_viijiij, "nd": invoke_viijiiji, "rb": invoke_viijiijj, "hd": invoke_viijij, "ib": invoke_viijiji, "Hc": invoke_viijijiiiijjj, "tb": invoke_viijijj, "ze": invoke_viijj, "le": invoke_viijji, "ed": invoke_viijjii, "Rc": invoke_viijjij, "be": invoke_viijjj, "hc": invoke_viijjji, "je": invoke_vij, "de": invoke_viji, "gd": invoke_vijii, "Nd": invoke_vijiii, "Md": invoke_vijiiii, "$c": invoke_vijiiiji, "Ab": invoke_vijiijj, "ld": invoke_vijij, "lc": invoke_vijijiiiijjj, "fe": invoke_vijijj, "hb": invoke_vijijjiiiii, "Sc": invoke_vijijjiij, "vb": invoke_vijijjji, "$d": invoke_vijj, "Vc": invoke_vijji, "fb": invoke_vijjiiii, "gb": invoke_vijjiiiii, "jc": invoke_vijjij, "ne": invoke_vijjj, "rd": invoke_vijjji, "Zd": invoke_vj, "Xb": invoke_vjii, "_b": invoke_vjiiii, "Kb": invoke_vjiiiji, "wd": invoke_vjjii, "pd": invoke_vjjijij, "G": _llvm_eh_typeid_for, "H": _setTempRet0, "Wa": _strftime_l };
    var asm = createWasm();
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
      return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["Te"]).apply(null, arguments);
    };
    var _main = Module["_main"] = function() {
      return (_main = Module["_main"] = Module["asm"]["Ue"]).apply(null, arguments);
    };
    var _duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = function() {
      return (_duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = Module["asm"]["We"]).apply(null, arguments);
    };
    var _duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = function() {
      return (_duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = Module["asm"]["Xe"]).apply(null, arguments);
    };
    var _duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = function() {
      return (_duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = Module["asm"]["Ye"]).apply(null, arguments);
    };
    var _duckdb_web_reset = Module["_duckdb_web_reset"] = function() {
      return (_duckdb_web_reset = Module["_duckdb_web_reset"] = Module["asm"]["Ze"]).apply(null, arguments);
    };
    var _duckdb_web_connect = Module["_duckdb_web_connect"] = function() {
      return (_duckdb_web_connect = Module["_duckdb_web_connect"] = Module["asm"]["_e"]).apply(null, arguments);
    };
    var _duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = function() {
      return (_duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = Module["asm"]["$e"]).apply(null, arguments);
    };
    var _duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = function() {
      return (_duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = Module["asm"]["af"]).apply(null, arguments);
    };
    var _duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = function() {
      return (_duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = Module["asm"]["bf"]).apply(null, arguments);
    };
    var _duckdb_web_open = Module["_duckdb_web_open"] = function() {
      return (_duckdb_web_open = Module["_duckdb_web_open"] = Module["asm"]["cf"]).apply(null, arguments);
    };
    var _duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = function() {
      return (_duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = Module["asm"]["df"]).apply(null, arguments);
    };
    var _duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = function() {
      return (_duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = Module["asm"]["ef"]).apply(null, arguments);
    };
    var _duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = function() {
      return (_duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = Module["asm"]["ff"]).apply(null, arguments);
    };
    var _duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = function() {
      return (_duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = Module["asm"]["gf"]).apply(null, arguments);
    };
    var _duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = function() {
      return (_duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = Module["asm"]["hf"]).apply(null, arguments);
    };
    var _duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = function() {
      return (_duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = Module["asm"]["jf"]).apply(null, arguments);
    };
    var _duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = function() {
      return (_duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = Module["asm"]["kf"]).apply(null, arguments);
    };
    var _duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = function() {
      return (_duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = Module["asm"]["lf"]).apply(null, arguments);
    };
    var _duckdb_web_fs_set_file_descriptor = Module["_duckdb_web_fs_set_file_descriptor"] = function() {
      return (_duckdb_web_fs_set_file_descriptor = Module["_duckdb_web_fs_set_file_descriptor"] = Module["asm"]["mf"]).apply(null, arguments);
    };
    var _duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = function() {
      return (_duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = Module["asm"]["nf"]).apply(null, arguments);
    };
    var _duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = function() {
      return (_duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = Module["asm"]["of"]).apply(null, arguments);
    };
    var _duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = function() {
      return (_duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = Module["asm"]["pf"]).apply(null, arguments);
    };
    var _duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = function() {
      return (_duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = Module["asm"]["qf"]).apply(null, arguments);
    };
    var _duckdb_web_get_version = Module["_duckdb_web_get_version"] = function() {
      return (_duckdb_web_get_version = Module["_duckdb_web_get_version"] = Module["asm"]["rf"]).apply(null, arguments);
    };
    var _duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = function() {
      return (_duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = Module["asm"]["sf"]).apply(null, arguments);
    };
    var _duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = function() {
      return (_duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = Module["asm"]["tf"]).apply(null, arguments);
    };
    var _duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = function() {
      return (_duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = Module["asm"]["uf"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = function() {
      return (_duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = Module["asm"]["vf"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = function() {
      return (_duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = Module["asm"]["wf"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = function() {
      return (_duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = Module["asm"]["xf"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = function() {
      return (_duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = Module["asm"]["yf"]).apply(null, arguments);
    };
    var _duckdb_web_query_run = Module["_duckdb_web_query_run"] = function() {
      return (_duckdb_web_query_run = Module["_duckdb_web_query_run"] = Module["asm"]["zf"]).apply(null, arguments);
    };
    var _duckdb_web_query_send = Module["_duckdb_web_query_send"] = function() {
      return (_duckdb_web_query_send = Module["_duckdb_web_query_send"] = Module["asm"]["Af"]).apply(null, arguments);
    };
    var _duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = function() {
      return (_duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = Module["asm"]["Bf"]).apply(null, arguments);
    };
    var _duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = function() {
      return (_duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = Module["asm"]["Cf"]).apply(null, arguments);
    };
    var _duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = function() {
      return (_duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = Module["asm"]["Df"]).apply(null, arguments);
    };
    var _duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = function() {
      return (_duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = Module["asm"]["Ef"]).apply(null, arguments);
    };
    var _duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = function() {
      return (_duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = Module["asm"]["Ff"]).apply(null, arguments);
    };
    var ___errno_location = Module["___errno_location"] = function() {
      return (___errno_location = Module["___errno_location"] = Module["asm"]["Gf"]).apply(null, arguments);
    };
    var _htonl = Module["_htonl"] = function() {
      return (_htonl = Module["_htonl"] = Module["asm"]["Hf"]).apply(null, arguments);
    };
    var _htons = Module["_htons"] = function() {
      return (_htons = Module["_htons"] = Module["asm"]["If"]).apply(null, arguments);
    };
    var _ntohs = Module["_ntohs"] = function() {
      return (_ntohs = Module["_ntohs"] = Module["asm"]["Jf"]).apply(null, arguments);
    };
    var _setThrew = Module["_setThrew"] = function() {
      return (_setThrew = Module["_setThrew"] = Module["asm"]["Kf"]).apply(null, arguments);
    };
    var stackSave = Module["stackSave"] = function() {
      return (stackSave = Module["stackSave"] = Module["asm"]["Lf"]).apply(null, arguments);
    };
    var stackRestore = Module["stackRestore"] = function() {
      return (stackRestore = Module["stackRestore"] = Module["asm"]["Mf"]).apply(null, arguments);
    };
    var stackAlloc = Module["stackAlloc"] = function() {
      return (stackAlloc = Module["stackAlloc"] = Module["asm"]["Nf"]).apply(null, arguments);
    };
    var ___cxa_can_catch = Module["___cxa_can_catch"] = function() {
      return (___cxa_can_catch = Module["___cxa_can_catch"] = Module["asm"]["Of"]).apply(null, arguments);
    };
    var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = function() {
      return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["Pf"]).apply(null, arguments);
    };
    var _malloc = Module["_malloc"] = function() {
      return (_malloc = Module["_malloc"] = Module["asm"]["Qf"]).apply(null, arguments);
    };
    var _free = Module["_free"] = function() {
      return (_free = Module["_free"] = Module["asm"]["Rf"]).apply(null, arguments);
    };
    var dynCall_jiiii = Module["dynCall_jiiii"] = function() {
      return (dynCall_jiiii = Module["dynCall_jiiii"] = Module["asm"]["Sf"]).apply(null, arguments);
    };
    var dynCall_iiiiij = Module["dynCall_iiiiij"] = function() {
      return (dynCall_iiiiij = Module["dynCall_iiiiij"] = Module["asm"]["Tf"]).apply(null, arguments);
    };
    var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = function() {
      return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = Module["asm"]["Uf"]).apply(null, arguments);
    };
    var dynCall_viijii = Module["dynCall_viijii"] = function() {
      return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["Vf"]).apply(null, arguments);
    };
    var dynCall_j = Module["dynCall_j"] = function() {
      return (dynCall_j = Module["dynCall_j"] = Module["asm"]["Wf"]).apply(null, arguments);
    };
    var dynCall_ji = Module["dynCall_ji"] = function() {
      return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["Xf"]).apply(null, arguments);
    };
    var dynCall_iij = Module["dynCall_iij"] = function() {
      return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["Yf"]).apply(null, arguments);
    };
    var dynCall_viij = Module["dynCall_viij"] = function() {
      return (dynCall_viij = Module["dynCall_viij"] = Module["asm"]["Zf"]).apply(null, arguments);
    };
    var dynCall_viijji = Module["dynCall_viijji"] = function() {
      return (dynCall_viijji = Module["dynCall_viijji"] = Module["asm"]["_f"]).apply(null, arguments);
    };
    var dynCall_viijj = Module["dynCall_viijj"] = function() {
      return (dynCall_viijj = Module["dynCall_viijj"] = Module["asm"]["$f"]).apply(null, arguments);
    };
    var dynCall_viiijj = Module["dynCall_viiijj"] = function() {
      return (dynCall_viiijj = Module["dynCall_viiijj"] = Module["asm"]["ag"]).apply(null, arguments);
    };
    var dynCall_viiji = Module["dynCall_viiji"] = function() {
      return (dynCall_viiji = Module["dynCall_viiji"] = Module["asm"]["bg"]).apply(null, arguments);
    };
    var dynCall_vijjj = Module["dynCall_vijjj"] = function() {
      return (dynCall_vijjj = Module["dynCall_vijjj"] = Module["asm"]["cg"]).apply(null, arguments);
    };
    var dynCall_iiijj = Module["dynCall_iiijj"] = function() {
      return (dynCall_iiijj = Module["dynCall_iiijj"] = Module["asm"]["dg"]).apply(null, arguments);
    };
    var dynCall_viiij = Module["dynCall_viiij"] = function() {
      return (dynCall_viiij = Module["dynCall_viiij"] = Module["asm"]["eg"]).apply(null, arguments);
    };
    var dynCall_viijij = Module["dynCall_viijij"] = function() {
      return (dynCall_viijij = Module["dynCall_viijij"] = Module["asm"]["fg"]).apply(null, arguments);
    };
    var dynCall_viiijjj = Module["dynCall_viiijjj"] = function() {
      return (dynCall_viiijjj = Module["dynCall_viiijjj"] = Module["asm"]["gg"]).apply(null, arguments);
    };
    var dynCall_iiij = Module["dynCall_iiij"] = function() {
      return (dynCall_iiij = Module["dynCall_iiij"] = Module["asm"]["hg"]).apply(null, arguments);
    };
    var dynCall_vijijj = Module["dynCall_vijijj"] = function() {
      return (dynCall_vijijj = Module["dynCall_vijijj"] = Module["asm"]["ig"]).apply(null, arguments);
    };
    var dynCall_iji = Module["dynCall_iji"] = function() {
      return (dynCall_iji = Module["dynCall_iji"] = Module["asm"]["jg"]).apply(null, arguments);
    };
    var dynCall_viji = Module["dynCall_viji"] = function() {
      return (dynCall_viji = Module["dynCall_viji"] = Module["asm"]["kg"]).apply(null, arguments);
    };
    var dynCall_vij = Module["dynCall_vij"] = function() {
      return (dynCall_vij = Module["dynCall_vij"] = Module["asm"]["lg"]).apply(null, arguments);
    };
    var dynCall_viiiij = Module["dynCall_viiiij"] = function() {
      return (dynCall_viiiij = Module["dynCall_viiiij"] = Module["asm"]["mg"]).apply(null, arguments);
    };
    var dynCall_jii = Module["dynCall_jii"] = function() {
      return (dynCall_jii = Module["dynCall_jii"] = Module["asm"]["ng"]).apply(null, arguments);
    };
    var dynCall_viiiji = Module["dynCall_viiiji"] = function() {
      return (dynCall_viiiji = Module["dynCall_viiiji"] = Module["asm"]["og"]).apply(null, arguments);
    };
    var dynCall_vijj = Module["dynCall_vijj"] = function() {
      return (dynCall_vijj = Module["dynCall_vijj"] = Module["asm"]["pg"]).apply(null, arguments);
    };
    var dynCall_vj = Module["dynCall_vj"] = function() {
      return (dynCall_vj = Module["dynCall_vj"] = Module["asm"]["qg"]).apply(null, arguments);
    };
    var dynCall_iiji = Module["dynCall_iiji"] = function() {
      return (dynCall_iiji = Module["dynCall_iiji"] = Module["asm"]["rg"]).apply(null, arguments);
    };
    var dynCall_iiiij = Module["dynCall_iiiij"] = function() {
      return (dynCall_iiiij = Module["dynCall_iiiij"] = Module["asm"]["sg"]).apply(null, arguments);
    };
    var dynCall_iiiiiji = Module["dynCall_iiiiiji"] = function() {
      return (dynCall_iiiiiji = Module["dynCall_iiiiiji"] = Module["asm"]["tg"]).apply(null, arguments);
    };
    var dynCall_iiiji = Module["dynCall_iiiji"] = function() {
      return (dynCall_iiiji = Module["dynCall_iiiji"] = Module["asm"]["ug"]).apply(null, arguments);
    };
    var dynCall_iiiiji = Module["dynCall_iiiiji"] = function() {
      return (dynCall_iiiiji = Module["dynCall_iiiiji"] = Module["asm"]["vg"]).apply(null, arguments);
    };
    var dynCall_jiii = Module["dynCall_jiii"] = function() {
      return (dynCall_jiii = Module["dynCall_jiii"] = Module["asm"]["wg"]).apply(null, arguments);
    };
    var dynCall_jij = Module["dynCall_jij"] = function() {
      return (dynCall_jij = Module["dynCall_jij"] = Module["asm"]["xg"]).apply(null, arguments);
    };
    var dynCall_iijjijj = Module["dynCall_iijjijj"] = function() {
      return (dynCall_iijjijj = Module["dynCall_iijjijj"] = Module["asm"]["yg"]).apply(null, arguments);
    };
    var dynCall_viiiijiiiii = Module["dynCall_viiiijiiiii"] = function() {
      return (dynCall_viiiijiiiii = Module["dynCall_viiiijiiiii"] = Module["asm"]["zg"]).apply(null, arguments);
    };
    var dynCall_viiiijiiii = Module["dynCall_viiiijiiii"] = function() {
      return (dynCall_viiiijiiii = Module["dynCall_viiiijiiii"] = Module["asm"]["Ag"]).apply(null, arguments);
    };
    var dynCall_viiijii = Module["dynCall_viiijii"] = function() {
      return (dynCall_viiijii = Module["dynCall_viiijii"] = Module["asm"]["Bg"]).apply(null, arguments);
    };
    var dynCall_viiiiiij = Module["dynCall_viiiiiij"] = function() {
      return (dynCall_viiiiiij = Module["dynCall_viiiiiij"] = Module["asm"]["Cg"]).apply(null, arguments);
    };
    var dynCall_iiijiii = Module["dynCall_iiijiii"] = function() {
      return (dynCall_iiijiii = Module["dynCall_iiijiii"] = Module["asm"]["Dg"]).apply(null, arguments);
    };
    var dynCall_iiiiijii = Module["dynCall_iiiiijii"] = function() {
      return (dynCall_iiiiijii = Module["dynCall_iiiiijii"] = Module["asm"]["Eg"]).apply(null, arguments);
    };
    var dynCall_viijiii = Module["dynCall_viijiii"] = function() {
      return (dynCall_viijiii = Module["dynCall_viijiii"] = Module["asm"]["Fg"]).apply(null, arguments);
    };
    var dynCall_iiijiij = Module["dynCall_iiijiij"] = function() {
      return (dynCall_iiijiij = Module["dynCall_iiijiij"] = Module["asm"]["Gg"]).apply(null, arguments);
    };
    var dynCall_vijiii = Module["dynCall_vijiii"] = function() {
      return (dynCall_vijiii = Module["dynCall_vijiii"] = Module["asm"]["Hg"]).apply(null, arguments);
    };
    var dynCall_iijjii = Module["dynCall_iijjii"] = function() {
      return (dynCall_iijjii = Module["dynCall_iijjii"] = Module["asm"]["Ig"]).apply(null, arguments);
    };
    var dynCall_iijjiii = Module["dynCall_iijjiii"] = function() {
      return (dynCall_iijjiii = Module["dynCall_iijjiii"] = Module["asm"]["Jg"]).apply(null, arguments);
    };
    var dynCall_iijjiiii = Module["dynCall_iijjiiii"] = function() {
      return (dynCall_iijjiiii = Module["dynCall_iijjiiii"] = Module["asm"]["Kg"]).apply(null, arguments);
    };
    var dynCall_iijji = Module["dynCall_iijji"] = function() {
      return (dynCall_iijji = Module["dynCall_iijji"] = Module["asm"]["Lg"]).apply(null, arguments);
    };
    var dynCall_vijiiii = Module["dynCall_vijiiii"] = function() {
      return (dynCall_vijiiii = Module["dynCall_vijiiii"] = Module["asm"]["Mg"]).apply(null, arguments);
    };
    var dynCall_iijiiii = Module["dynCall_iijiiii"] = function() {
      return (dynCall_iijiiii = Module["dynCall_iijiiii"] = Module["asm"]["Ng"]).apply(null, arguments);
    };
    var dynCall_iijii = Module["dynCall_iijii"] = function() {
      return (dynCall_iijii = Module["dynCall_iijii"] = Module["asm"]["Og"]).apply(null, arguments);
    };
    var dynCall_vijij = Module["dynCall_vijij"] = function() {
      return (dynCall_vijij = Module["dynCall_vijij"] = Module["asm"]["Pg"]).apply(null, arguments);
    };
    var dynCall_iiijiiii = Module["dynCall_iiijiiii"] = function() {
      return (dynCall_iiijiiii = Module["dynCall_iiijiiii"] = Module["asm"]["Qg"]).apply(null, arguments);
    };
    var dynCall_jiiij = Module["dynCall_jiiij"] = function() {
      return (dynCall_jiiij = Module["dynCall_jiiij"] = Module["asm"]["Rg"]).apply(null, arguments);
    };
    var dynCall_jiiiii = Module["dynCall_jiiiii"] = function() {
      return (dynCall_jiiiii = Module["dynCall_jiiiii"] = Module["asm"]["Sg"]).apply(null, arguments);
    };
    var dynCall_iiiiijjiijj = Module["dynCall_iiiiijjiijj"] = function() {
      return (dynCall_iiiiijjiijj = Module["dynCall_iiiiijjiijj"] = Module["asm"]["Tg"]).apply(null, arguments);
    };
    var dynCall_viijiiji = Module["dynCall_viijiiji"] = function() {
      return (dynCall_viijiiji = Module["dynCall_viijiiji"] = Module["asm"]["Ug"]).apply(null, arguments);
    };
    var dynCall_vjjijij = Module["dynCall_vjjijij"] = function() {
      return (dynCall_vjjijij = Module["dynCall_vjjijij"] = Module["asm"]["Vg"]).apply(null, arguments);
    };
    var dynCall_vijjji = Module["dynCall_vijjji"] = function() {
      return (dynCall_vijjji = Module["dynCall_vijjji"] = Module["asm"]["Wg"]).apply(null, arguments);
    };
    var dynCall_vjjii = Module["dynCall_vjjii"] = function() {
      return (dynCall_vjjii = Module["dynCall_vjjii"] = Module["asm"]["Xg"]).apply(null, arguments);
    };
    var dynCall_viiiiiji = Module["dynCall_viiiiiji"] = function() {
      return (dynCall_viiiiiji = Module["dynCall_viiiiiji"] = Module["asm"]["Yg"]).apply(null, arguments);
    };
    var dynCall_jiiiji = Module["dynCall_jiiiji"] = function() {
      return (dynCall_jiiiji = Module["dynCall_jiiiji"] = Module["asm"]["Zg"]).apply(null, arguments);
    };
    var dynCall_iijj = Module["dynCall_iijj"] = function() {
      return (dynCall_iijj = Module["dynCall_iijj"] = Module["asm"]["_g"]).apply(null, arguments);
    };
    var dynCall_iiijjii = Module["dynCall_iiijjii"] = function() {
      return (dynCall_iiijjii = Module["dynCall_iiijjii"] = Module["asm"]["$g"]).apply(null, arguments);
    };
    var dynCall_vijii = Module["dynCall_vijii"] = function() {
      return (dynCall_vijii = Module["dynCall_vijii"] = Module["asm"]["ah"]).apply(null, arguments);
    };
    var dynCall_viijjii = Module["dynCall_viijjii"] = function() {
      return (dynCall_viijjii = Module["dynCall_viijjii"] = Module["asm"]["bh"]).apply(null, arguments);
    };
    var dynCall_viiiijj = Module["dynCall_viiiijj"] = function() {
      return (dynCall_viiiijj = Module["dynCall_viiiijj"] = Module["asm"]["ch"]).apply(null, arguments);
    };
    var dynCall_jijjij = Module["dynCall_jijjij"] = function() {
      return (dynCall_jijjij = Module["dynCall_jijjij"] = Module["asm"]["dh"]).apply(null, arguments);
    };
    var dynCall_jiijii = Module["dynCall_jiijii"] = function() {
      return (dynCall_jiijii = Module["dynCall_jiijii"] = Module["asm"]["eh"]).apply(null, arguments);
    };
    var dynCall_jijiii = Module["dynCall_jijiii"] = function() {
      return (dynCall_jijiii = Module["dynCall_jijiii"] = Module["asm"]["fh"]).apply(null, arguments);
    };
    var dynCall_viijiiiii = Module["dynCall_viijiiiii"] = function() {
      return (dynCall_viijiiiii = Module["dynCall_viijiiiii"] = Module["asm"]["gh"]).apply(null, arguments);
    };
    var dynCall_viijiiij = Module["dynCall_viijiiij"] = function() {
      return (dynCall_viijiiij = Module["dynCall_viijiiij"] = Module["asm"]["hh"]).apply(null, arguments);
    };
    var dynCall_vijiiiji = Module["dynCall_vijiiiji"] = function() {
      return (dynCall_vijiiiji = Module["dynCall_vijiiiji"] = Module["asm"]["ih"]).apply(null, arguments);
    };
    var dynCall_jiiji = Module["dynCall_jiiji"] = function() {
      return (dynCall_jiiji = Module["dynCall_jiiji"] = Module["asm"]["jh"]).apply(null, arguments);
    };
    var dynCall_viiijij = Module["dynCall_viiijij"] = function() {
      return (dynCall_viiijij = Module["dynCall_viiijij"] = Module["asm"]["kh"]).apply(null, arguments);
    };
    var dynCall_viijiij = Module["dynCall_viijiij"] = function() {
      return (dynCall_viijiij = Module["dynCall_viijiij"] = Module["asm"]["lh"]).apply(null, arguments);
    };
    var dynCall_viiiiijj = Module["dynCall_viiiiijj"] = function() {
      return (dynCall_viiiiijj = Module["dynCall_viiiiijj"] = Module["asm"]["mh"]).apply(null, arguments);
    };
    var dynCall_viiijji = Module["dynCall_viiijji"] = function() {
      return (dynCall_viiijji = Module["dynCall_viiijji"] = Module["asm"]["nh"]).apply(null, arguments);
    };
    var dynCall_iiiijiii = Module["dynCall_iiiijiii"] = function() {
      return (dynCall_iiiijiii = Module["dynCall_iiiijiii"] = Module["asm"]["oh"]).apply(null, arguments);
    };
    var dynCall_iiijij = Module["dynCall_iiijij"] = function() {
      return (dynCall_iiijij = Module["dynCall_iiijij"] = Module["asm"]["ph"]).apply(null, arguments);
    };
    var dynCall_iiijji = Module["dynCall_iiijji"] = function() {
      return (dynCall_iiijji = Module["dynCall_iiijji"] = Module["asm"]["qh"]).apply(null, arguments);
    };
    var dynCall_iiiijj = Module["dynCall_iiiijj"] = function() {
      return (dynCall_iiiijj = Module["dynCall_iiiijj"] = Module["asm"]["rh"]).apply(null, arguments);
    };
    var dynCall_viiijiii = Module["dynCall_viiijiii"] = function() {
      return (dynCall_viiijiii = Module["dynCall_viiijiii"] = Module["asm"]["sh"]).apply(null, arguments);
    };
    var dynCall_vijji = Module["dynCall_vijji"] = function() {
      return (dynCall_vijji = Module["dynCall_vijji"] = Module["asm"]["th"]).apply(null, arguments);
    };
    var dynCall_jiiiij = Module["dynCall_jiiiij"] = function() {
      return (dynCall_jiiiij = Module["dynCall_jiiiij"] = Module["asm"]["uh"]).apply(null, arguments);
    };
    var dynCall_jiijiiiii = Module["dynCall_jiijiiiii"] = function() {
      return (dynCall_jiijiiiii = Module["dynCall_jiijiiiii"] = Module["asm"]["vh"]).apply(null, arguments);
    };
    var dynCall_jiijiijiii = Module["dynCall_jiijiijiii"] = function() {
      return (dynCall_jiijiijiii = Module["dynCall_jiijiijiii"] = Module["asm"]["wh"]).apply(null, arguments);
    };
    var dynCall_jiijjiii = Module["dynCall_jiijjiii"] = function() {
      return (dynCall_jiijjiii = Module["dynCall_jiijjiii"] = Module["asm"]["xh"]).apply(null, arguments);
    };
    var dynCall_jiiijii = Module["dynCall_jiiijii"] = function() {
      return (dynCall_jiiijii = Module["dynCall_jiiijii"] = Module["asm"]["yh"]).apply(null, arguments);
    };
    var dynCall_jiijijii = Module["dynCall_jiijijii"] = function() {
      return (dynCall_jiijijii = Module["dynCall_jiijijii"] = Module["asm"]["zh"]).apply(null, arguments);
    };
    var dynCall_viiijjij = Module["dynCall_viiijjij"] = function() {
      return (dynCall_viiijjij = Module["dynCall_viiijjij"] = Module["asm"]["Ah"]).apply(null, arguments);
    };
    var dynCall_vijijjiij = Module["dynCall_vijijjiij"] = function() {
      return (dynCall_vijijjiij = Module["dynCall_vijijjiij"] = Module["asm"]["Bh"]).apply(null, arguments);
    };
    var dynCall_viijjij = Module["dynCall_viijjij"] = function() {
      return (dynCall_viijjij = Module["dynCall_viijjij"] = Module["asm"]["Ch"]).apply(null, arguments);
    };
    var dynCall_viiijjiij = Module["dynCall_viiijjiij"] = function() {
      return (dynCall_viiijjiij = Module["dynCall_viiijjiij"] = Module["asm"]["Dh"]).apply(null, arguments);
    };
    var dynCall_viiiijjjj = Module["dynCall_viiiijjjj"] = function() {
      return (dynCall_viiiijjjj = Module["dynCall_viiiijjjj"] = Module["asm"]["Eh"]).apply(null, arguments);
    };
    var dynCall_viijiiiiij = Module["dynCall_viijiiiiij"] = function() {
      return (dynCall_viijiiiiij = Module["dynCall_viijiiiiij"] = Module["asm"]["Fh"]).apply(null, arguments);
    };
    var dynCall_viijiiiijj = Module["dynCall_viijiiiijj"] = function() {
      return (dynCall_viijiiiijj = Module["dynCall_viijiiiijj"] = Module["asm"]["Gh"]).apply(null, arguments);
    };
    var dynCall_viiijiiiijjj = Module["dynCall_viiijiiiijjj"] = function() {
      return (dynCall_viiijiiiijjj = Module["dynCall_viiijiiiijjj"] = Module["asm"]["Hh"]).apply(null, arguments);
    };
    var dynCall_viijijiiiijjj = Module["dynCall_viijijiiiijjj"] = function() {
      return (dynCall_viijijiiiijjj = Module["dynCall_viijijiiiijjj"] = Module["asm"]["Ih"]).apply(null, arguments);
    };
    var dynCall_viiiiijiiii = Module["dynCall_viiiiijiiii"] = function() {
      return (dynCall_viiiiijiiii = Module["dynCall_viiiiijiiii"] = Module["asm"]["Jh"]).apply(null, arguments);
    };
    var dynCall_iiijii = Module["dynCall_iiijii"] = function() {
      return (dynCall_iiijii = Module["dynCall_iiijii"] = Module["asm"]["Kh"]).apply(null, arguments);
    };
    var dynCall_fiijii = Module["dynCall_fiijii"] = function() {
      return (dynCall_fiijii = Module["dynCall_fiijii"] = Module["asm"]["Lh"]).apply(null, arguments);
    };
    var dynCall_diijii = Module["dynCall_diijii"] = function() {
      return (dynCall_diijii = Module["dynCall_diijii"] = Module["asm"]["Mh"]).apply(null, arguments);
    };
    var dynCall_iiiiiiijii = Module["dynCall_iiiiiiijii"] = function() {
      return (dynCall_iiiiiiijii = Module["dynCall_iiiiiiijii"] = Module["asm"]["Nh"]).apply(null, arguments);
    };
    var dynCall_viiiiji = Module["dynCall_viiiiji"] = function() {
      return (dynCall_viiiiji = Module["dynCall_viiiiji"] = Module["asm"]["Oh"]).apply(null, arguments);
    };
    var dynCall_jiiiijii = Module["dynCall_jiiiijii"] = function() {
      return (dynCall_jiiiijii = Module["dynCall_jiiiijii"] = Module["asm"]["Ph"]).apply(null, arguments);
    };
    var dynCall_jiiijiii = Module["dynCall_jiiijiii"] = function() {
      return (dynCall_jiiijiii = Module["dynCall_jiiijiii"] = Module["asm"]["Qh"]).apply(null, arguments);
    };
    var dynCall_jiiiiijiiii = Module["dynCall_jiiiiijiiii"] = function() {
      return (dynCall_jiiiiijiiii = Module["dynCall_jiiiiijiiii"] = Module["asm"]["Rh"]).apply(null, arguments);
    };
    var dynCall_jj = Module["dynCall_jj"] = function() {
      return (dynCall_jj = Module["dynCall_jj"] = Module["asm"]["Sh"]).apply(null, arguments);
    };
    var dynCall_jd = Module["dynCall_jd"] = function() {
      return (dynCall_jd = Module["dynCall_jd"] = Module["asm"]["Th"]).apply(null, arguments);
    };
    var dynCall_jf = Module["dynCall_jf"] = function() {
      return (dynCall_jf = Module["dynCall_jf"] = Module["asm"]["Uh"]).apply(null, arguments);
    };
    var dynCall_iijjj = Module["dynCall_iijjj"] = function() {
      return (dynCall_iijjj = Module["dynCall_iijjj"] = Module["asm"]["Vh"]).apply(null, arguments);
    };
    var dynCall_vijijiiiijjj = Module["dynCall_vijijiiiijjj"] = function() {
      return (dynCall_vijijiiiijjj = Module["dynCall_vijijiiiijjj"] = Module["asm"]["Wh"]).apply(null, arguments);
    };
    var dynCall_iiiiiiji = Module["dynCall_iiiiiiji"] = function() {
      return (dynCall_iiiiiiji = Module["dynCall_iiiiiiji"] = Module["asm"]["Xh"]).apply(null, arguments);
    };
    var dynCall_iiiiiiiiji = Module["dynCall_iiiiiiiiji"] = function() {
      return (dynCall_iiiiiiiiji = Module["dynCall_iiiiiiiiji"] = Module["asm"]["Yh"]).apply(null, arguments);
    };
    var dynCall_jijijjij = Module["dynCall_jijijjij"] = function() {
      return (dynCall_jijijjij = Module["dynCall_jijijjij"] = Module["asm"]["Zh"]).apply(null, arguments);
    };
    var dynCall_viijjj = Module["dynCall_viijjj"] = function() {
      return (dynCall_viijjj = Module["dynCall_viijjj"] = Module["asm"]["_h"]).apply(null, arguments);
    };
    var dynCall_vijjij = Module["dynCall_vijjij"] = function() {
      return (dynCall_vijjij = Module["dynCall_vijjij"] = Module["asm"]["$h"]).apply(null, arguments);
    };
    var dynCall_viijjji = Module["dynCall_viijjji"] = function() {
      return (dynCall_viijjji = Module["dynCall_viijjji"] = Module["asm"]["ai"]).apply(null, arguments);
    };
    var dynCall_iiiiiij = Module["dynCall_iiiiiij"] = function() {
      return (dynCall_iiiiiij = Module["dynCall_iiiiiij"] = Module["asm"]["bi"]).apply(null, arguments);
    };
    var dynCall_iiiiiiiiiiji = Module["dynCall_iiiiiiiiiiji"] = function() {
      return (dynCall_iiiiiiiiiiji = Module["dynCall_iiiiiiiiiiji"] = Module["asm"]["ci"]).apply(null, arguments);
    };
    var dynCall_jiiiiiii = Module["dynCall_jiiiiiii"] = function() {
      return (dynCall_jiiiiiii = Module["dynCall_jiiiiiii"] = Module["asm"]["di"]).apply(null, arguments);
    };
    var dynCall_jijj = Module["dynCall_jijj"] = function() {
      return (dynCall_jijj = Module["dynCall_jijj"] = Module["asm"]["ei"]).apply(null, arguments);
    };
    var dynCall_viiiijiiiiiiii = Module["dynCall_viiiijiiiiiiii"] = function() {
      return (dynCall_viiiijiiiiiiii = Module["dynCall_viiiijiiiiiiii"] = Module["asm"]["fi"]).apply(null, arguments);
    };
    var dynCall_ij = Module["dynCall_ij"] = function() {
      return (dynCall_ij = Module["dynCall_ij"] = Module["asm"]["gi"]).apply(null, arguments);
    };
    var dynCall_jjj = Module["dynCall_jjj"] = function() {
      return (dynCall_jjj = Module["dynCall_jjj"] = Module["asm"]["hi"]).apply(null, arguments);
    };
    var dynCall_vjii = Module["dynCall_vjii"] = function() {
      return (dynCall_vjii = Module["dynCall_vjii"] = Module["asm"]["ii"]).apply(null, arguments);
    };
    var dynCall_jjjjjjd = Module["dynCall_jjjjjjd"] = function() {
      return (dynCall_jjjjjjd = Module["dynCall_jjjjjjd"] = Module["asm"]["ji"]).apply(null, arguments);
    };
    var dynCall_vjiiii = Module["dynCall_vjiiii"] = function() {
      return (dynCall_vjiiii = Module["dynCall_vjiiii"] = Module["asm"]["ki"]).apply(null, arguments);
    };
    var dynCall_viiiiijiii = Module["dynCall_viiiiijiii"] = function() {
      return (dynCall_viiiiijiii = Module["dynCall_viiiiijiii"] = Module["asm"]["li"]).apply(null, arguments);
    };
    var dynCall_jiij = Module["dynCall_jiij"] = function() {
      return (dynCall_jiij = Module["dynCall_jiij"] = Module["asm"]["mi"]).apply(null, arguments);
    };
    var dynCall_iiiijjii = Module["dynCall_iiiijjii"] = function() {
      return (dynCall_iiiijjii = Module["dynCall_iiiijjii"] = Module["asm"]["ni"]).apply(null, arguments);
    };
    var dynCall_iiiiijji = Module["dynCall_iiiiijji"] = function() {
      return (dynCall_iiiiijji = Module["dynCall_iiiiijji"] = Module["asm"]["oi"]).apply(null, arguments);
    };
    var dynCall_viiijjii = Module["dynCall_viiijjii"] = function() {
      return (dynCall_viiijjii = Module["dynCall_viiijjii"] = Module["asm"]["pi"]).apply(null, arguments);
    };
    var dynCall_viiiijji = Module["dynCall_viiiijji"] = function() {
      return (dynCall_viiiijji = Module["dynCall_viiiijji"] = Module["asm"]["qi"]).apply(null, arguments);
    };
    var dynCall_viiiijjii = Module["dynCall_viiiijjii"] = function() {
      return (dynCall_viiiijjii = Module["dynCall_viiiijjii"] = Module["asm"]["ri"]).apply(null, arguments);
    };
    var dynCall_viiiiijji = Module["dynCall_viiiiijji"] = function() {
      return (dynCall_viiiiijji = Module["dynCall_viiiiijji"] = Module["asm"]["si"]).apply(null, arguments);
    };
    var dynCall_iidj = Module["dynCall_iidj"] = function() {
      return (dynCall_iidj = Module["dynCall_iidj"] = Module["asm"]["ti"]).apply(null, arguments);
    };
    var dynCall_ijji = Module["dynCall_ijji"] = function() {
      return (dynCall_ijji = Module["dynCall_ijji"] = Module["asm"]["ui"]).apply(null, arguments);
    };
    var dynCall_iiiiiiiij = Module["dynCall_iiiiiiiij"] = function() {
      return (dynCall_iiiiiiiij = Module["dynCall_iiiiiiiij"] = Module["asm"]["vi"]).apply(null, arguments);
    };
    var dynCall_iiiiiiij = Module["dynCall_iiiiiiij"] = function() {
      return (dynCall_iiiiiiij = Module["dynCall_iiiiiiij"] = Module["asm"]["wi"]).apply(null, arguments);
    };
    var dynCall_iiiiiiiiiiiij = Module["dynCall_iiiiiiiiiiiij"] = function() {
      return (dynCall_iiiiiiiiiiiij = Module["dynCall_iiiiiiiiiiiij"] = Module["asm"]["xi"]).apply(null, arguments);
    };
    var dynCall_iiiiiiiji = Module["dynCall_iiiiiiiji"] = function() {
      return (dynCall_iiiiiiiji = Module["dynCall_iiiiiiiji"] = Module["asm"]["yi"]).apply(null, arguments);
    };
    var dynCall_iiiidjj = Module["dynCall_iiiidjj"] = function() {
      return (dynCall_iiiidjj = Module["dynCall_iiiidjj"] = Module["asm"]["zi"]).apply(null, arguments);
    };
    var dynCall_iiiijjj = Module["dynCall_iiiijjj"] = function() {
      return (dynCall_iiiijjj = Module["dynCall_iiiijjj"] = Module["asm"]["Ai"]).apply(null, arguments);
    };
    var dynCall_jiiiiiijii = Module["dynCall_jiiiiiijii"] = function() {
      return (dynCall_jiiiiiijii = Module["dynCall_jiiiiiijii"] = Module["asm"]["Bi"]).apply(null, arguments);
    };
    var dynCall_iiiijji = Module["dynCall_iiiijji"] = function() {
      return (dynCall_iiiijji = Module["dynCall_iiiijji"] = Module["asm"]["Ci"]).apply(null, arguments);
    };
    var dynCall_jiiiiii = Module["dynCall_jiiiiii"] = function() {
      return (dynCall_jiiiiii = Module["dynCall_jiiiiii"] = Module["asm"]["Di"]).apply(null, arguments);
    };
    var dynCall_iijiji = Module["dynCall_iijiji"] = function() {
      return (dynCall_iijiji = Module["dynCall_iijiji"] = Module["asm"]["Ei"]).apply(null, arguments);
    };
    var dynCall_vjiiiji = Module["dynCall_vjiiiji"] = function() {
      return (dynCall_vjiiiji = Module["dynCall_vjiiiji"] = Module["asm"]["Fi"]).apply(null, arguments);
    };
    var dynCall_jjjii = Module["dynCall_jjjii"] = function() {
      return (dynCall_jjjii = Module["dynCall_jjjii"] = Module["asm"]["Gi"]).apply(null, arguments);
    };
    var dynCall_jji = Module["dynCall_jji"] = function() {
      return (dynCall_jji = Module["dynCall_jji"] = Module["asm"]["Hi"]).apply(null, arguments);
    };
    var dynCall_viiijijiji = Module["dynCall_viiijijiji"] = function() {
      return (dynCall_viiijijiji = Module["dynCall_viiijijiji"] = Module["asm"]["Ii"]).apply(null, arguments);
    };
    var dynCall_jiiijj = Module["dynCall_jiiijj"] = function() {
      return (dynCall_jiiijj = Module["dynCall_jiiijj"] = Module["asm"]["Ji"]).apply(null, arguments);
    };
    var dynCall_iiiijii = Module["dynCall_iiiijii"] = function() {
      return (dynCall_iiiijii = Module["dynCall_iiiijii"] = Module["asm"]["Ki"]).apply(null, arguments);
    };
    var dynCall_viiiijii = Module["dynCall_viiiijii"] = function() {
      return (dynCall_viiiijii = Module["dynCall_viiiijii"] = Module["asm"]["Li"]).apply(null, arguments);
    };
    var dynCall_iijiii = Module["dynCall_iijiii"] = function() {
      return (dynCall_iijiii = Module["dynCall_iijiii"] = Module["asm"]["Mi"]).apply(null, arguments);
    };
    var dynCall_jiiiiji = Module["dynCall_jiiiiji"] = function() {
      return (dynCall_jiiiiji = Module["dynCall_jiiiiji"] = Module["asm"]["Ni"]).apply(null, arguments);
    };
    var dynCall_vijiijj = Module["dynCall_vijiijj"] = function() {
      return (dynCall_vijiijj = Module["dynCall_vijiijj"] = Module["asm"]["Oi"]).apply(null, arguments);
    };
    var dynCall_vifiijj = Module["dynCall_vifiijj"] = function() {
      return (dynCall_vifiijj = Module["dynCall_vifiijj"] = Module["asm"]["Pi"]).apply(null, arguments);
    };
    var dynCall_vidiijj = Module["dynCall_vidiijj"] = function() {
      return (dynCall_vidiijj = Module["dynCall_vidiijj"] = Module["asm"]["Qi"]).apply(null, arguments);
    };
    var dynCall_viiiiij = Module["dynCall_viiiiij"] = function() {
      return (dynCall_viiiiij = Module["dynCall_viiiiij"] = Module["asm"]["Ri"]).apply(null, arguments);
    };
    var dynCall_ijjiii = Module["dynCall_ijjiii"] = function() {
      return (dynCall_ijjiii = Module["dynCall_ijjiii"] = Module["asm"]["Si"]).apply(null, arguments);
    };
    var dynCall_vijijjji = Module["dynCall_vijijjji"] = function() {
      return (dynCall_vijijjji = Module["dynCall_vijijjji"] = Module["asm"]["Ti"]).apply(null, arguments);
    };
    var dynCall_viijiijj = Module["dynCall_viijiijj"] = function() {
      return (dynCall_viijiijj = Module["dynCall_viijiijj"] = Module["asm"]["Ui"]).apply(null, arguments);
    };
    var dynCall_viijijj = Module["dynCall_viijijj"] = function() {
      return (dynCall_viijijj = Module["dynCall_viijijj"] = Module["asm"]["Vi"]).apply(null, arguments);
    };
    var dynCall_viiiiijjji = Module["dynCall_viiiiijjji"] = function() {
      return (dynCall_viiiiijjji = Module["dynCall_viiiiijjji"] = Module["asm"]["Wi"]).apply(null, arguments);
    };
    var dynCall_iiijiijj = Module["dynCall_iiijiijj"] = function() {
      return (dynCall_iiijiijj = Module["dynCall_iiijiijj"] = Module["asm"]["Xi"]).apply(null, arguments);
    };
    var dynCall_viiijijjj = Module["dynCall_viiijijjj"] = function() {
      return (dynCall_viiijijjj = Module["dynCall_viiijijjj"] = Module["asm"]["Yi"]).apply(null, arguments);
    };
    var dynCall_iijiijj = Module["dynCall_iijiijj"] = function() {
      return (dynCall_iijiijj = Module["dynCall_iijiijj"] = Module["asm"]["Zi"]).apply(null, arguments);
    };
    var dynCall_viiijjjji = Module["dynCall_viiijjjji"] = function() {
      return (dynCall_viiijjjji = Module["dynCall_viiijjjji"] = Module["asm"]["_i"]).apply(null, arguments);
    };
    var dynCall_viiiijiii = Module["dynCall_viiiijiii"] = function() {
      return (dynCall_viiiijiii = Module["dynCall_viiiijiii"] = Module["asm"]["$i"]).apply(null, arguments);
    };
    var dynCall_viijiiii = Module["dynCall_viijiiii"] = function() {
      return (dynCall_viijiiii = Module["dynCall_viijiiii"] = Module["asm"]["aj"]).apply(null, arguments);
    };
    var dynCall_vijjiiii = Module["dynCall_vijjiiii"] = function() {
      return (dynCall_vijjiiii = Module["dynCall_vijjiiii"] = Module["asm"]["bj"]).apply(null, arguments);
    };
    var dynCall_vijijjiiiii = Module["dynCall_vijijjiiiii"] = function() {
      return (dynCall_vijijjiiiii = Module["dynCall_vijijjiiiii"] = Module["asm"]["cj"]).apply(null, arguments);
    };
    var dynCall_vijjiiiii = Module["dynCall_vijjiiiii"] = function() {
      return (dynCall_vijjiiiii = Module["dynCall_vijjiiiii"] = Module["asm"]["dj"]).apply(null, arguments);
    };
    var dynCall_iiijjji = Module["dynCall_iiijjji"] = function() {
      return (dynCall_iiijjji = Module["dynCall_iiijjji"] = Module["asm"]["ej"]).apply(null, arguments);
    };
    var dynCall_iiiiiijji = Module["dynCall_iiiiiijji"] = function() {
      return (dynCall_iiiiiijji = Module["dynCall_iiiiiijji"] = Module["asm"]["fj"]).apply(null, arguments);
    };
    var dynCall_iiiiijjj = Module["dynCall_iiiiijjj"] = function() {
      return (dynCall_iiiiijjj = Module["dynCall_iiiiijjj"] = Module["asm"]["gj"]).apply(null, arguments);
    };
    var dynCall_jijiiii = Module["dynCall_jijiiii"] = function() {
      return (dynCall_jijiiii = Module["dynCall_jijiiii"] = Module["asm"]["hj"]).apply(null, arguments);
    };
    var dynCall_viiijiji = Module["dynCall_viiijiji"] = function() {
      return (dynCall_viiijiji = Module["dynCall_viiijiji"] = Module["asm"]["ij"]).apply(null, arguments);
    };
    var dynCall_iiijjjii = Module["dynCall_iiijjjii"] = function() {
      return (dynCall_iiijjjii = Module["dynCall_iiijjjii"] = Module["asm"]["jj"]).apply(null, arguments);
    };
    var dynCall_iiiiijjji = Module["dynCall_iiiiijjji"] = function() {
      return (dynCall_iiiiijjji = Module["dynCall_iiiiijjji"] = Module["asm"]["kj"]).apply(null, arguments);
    };
    var dynCall_viiiijjj = Module["dynCall_viiiijjj"] = function() {
      return (dynCall_viiiijjj = Module["dynCall_viiiijjj"] = Module["asm"]["lj"]).apply(null, arguments);
    };
    var dynCall_viiiiijjj = Module["dynCall_viiiiijjj"] = function() {
      return (dynCall_viiiiijjj = Module["dynCall_viiiiijjj"] = Module["asm"]["mj"]).apply(null, arguments);
    };
    var dynCall_viijiji = Module["dynCall_viijiji"] = function() {
      return (dynCall_viijiji = Module["dynCall_viijiji"] = Module["asm"]["nj"]).apply(null, arguments);
    };
    function invoke_v(index) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vii(index, a1, a2) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_ii(index, a1) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iii(index, a1, a2) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vi(index, a1) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_fiii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_diii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viif(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viid(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_i(index) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iff(index, a1, a2) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_idd(index, a1, a2) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_idiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iidii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viidii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vif(index, a1, a2) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vid(index, a1, a2) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_di(index, a1) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiid(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_fi(index, a1) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vifi(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vidi(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_dii(index, a1, a2) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iid(index, a1, a2) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiidiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiif(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiidiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_f(index) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_d(index) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_if(index, a1) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_id(index, a1) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return dynCall_jiiii(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijj(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_viijj(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_ji(index, a1) {
      var sp = stackSave();
      try {
        return dynCall_ji(index, a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jii(index, a1, a2) {
      var sp = stackSave();
      try {
        return dynCall_jii(index, a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_viijii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiij(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_iiiiij(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iij(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return dynCall_iij(index, a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiji(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        dynCall_viiji(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_j(index) {
      var sp = stackSave();
      try {
        return dynCall_j(index);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viij(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        dynCall_viij(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijjj(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_vijjj(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijj(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_iiijj(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijji(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_viijji(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiij(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return dynCall_iiij(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vij(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        dynCall_vij(index, a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiij(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_viiiij(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiij(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        dynCall_viiij(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_vijijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iji(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return dynCall_iji(index, a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viji(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        dynCall_viji(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijj(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_viiijj(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijjj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viijjj(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_ijjiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_ijjiii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijj(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        dynCall_vijj(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiji(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_viiiji(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vj(index, a1, a2) {
      var sp = stackSave();
      try {
        dynCall_vj(index, a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiji(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return dynCall_iiji(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiij(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_iiiij(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiijj(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iiiijj(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_viiiiji(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijij(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iiijij(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiji(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_iiiji(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijj(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_iijj(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijji(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iiijji(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiji(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiji(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_iiiiji(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return dynCall_jiii(index, a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_vijiii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_vijiiii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iijiiii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iiijiii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_viijiii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiijiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijjii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iijjii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijjiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iijjiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_iijjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijji(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_iijji(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_viiijii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijjijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return dynCall_iijjijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        dynCall_viiiijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_viiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_iijii(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vjjii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_vjjii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viiijji(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jij(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return dynCall_jij(index, a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiij(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_jiiij(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijjji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_vijjji(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_jiiiii(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vjjijij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_vjjijij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiji(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_jiiji(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viijiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiji(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_jiiiji(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijij(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_vijij(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiijjiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        return dynCall_iiiiijjiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijij(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_viijij(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        dynCall_vijii(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijjii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viijjii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiijii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_jiijii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viijiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jijiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_jijiii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_vijiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jijjij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_jijjij(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viijiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijji(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_vijji(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiij(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_jiiiij(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_viiijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijijjiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        dynCall_vijijjiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijjjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        dynCall_viiiijjjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_jiijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiijiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return dynCall_jiijiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiijjiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_jiijjiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiijii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_jiiijii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiijijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_jiijijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        dynCall_viijiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        dynCall_viijiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
      var sp = stackSave();
      try {
        dynCall_viiijiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijijiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
      var sp = stackSave();
      try {
        dynCall_viijijiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijjiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        dynCall_viiijjiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return dynCall_jiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        dynCall_viiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_jiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_iiijii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_fiijii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_fiijii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_diijii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_diijii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_jiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return dynCall_jiiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jj(index, a1, a2) {
      var sp = stackSave();
      try {
        return dynCall_jj(index, a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jd(index, a1) {
      var sp = stackSave();
      try {
        return dynCall_jd(index, a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jf(index, a1) {
      var sp = stackSave();
      try {
        return dynCall_jf(index, a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_jiiiiii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_ijji(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_ijji(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijjj(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iijjj(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijijiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
      var sp = stackSave();
      try {
        dynCall_vijijiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jijijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return dynCall_jijijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijjij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_vijjij(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiij(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiij(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_jiiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiiiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_viiiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiij(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return dynCall_jiij(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_ij(index, a1, a2) {
      var sp = stackSave();
      try {
        return dynCall_ij(index, a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vjiiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        dynCall_vjiiii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        dynCall_viiiijiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jjj(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return dynCall_jjj(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vjii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        dynCall_vjii(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jjjjjjd(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return dynCall_jjjjjjd(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_iiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_iiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_viiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_viiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iidj(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return dynCall_iidj(index, a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiidjj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return dynCall_iiiidjj(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_iiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijiji(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iijiji(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vjiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_vjiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jjjii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_jjjii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jji(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return dynCall_jji(index, a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijijiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        dynCall_viiijijiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viiijij(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiijj(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_jiiijj(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiijii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_iiiijii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_iijiii(index, a1, a2, a3, a4, a5, a6);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_jiiiiji(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_vijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vifiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_vifiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vidiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_vidiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiij(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        dynCall_viiiiij(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        dynCall_vijijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jijj(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return dynCall_jijj(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viijijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return dynCall_iiijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_viijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        dynCall_viiiiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        dynCall_viiijijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_iijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return dynCall_iiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijjjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        dynCall_viiijjjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        dynCall_viijiji(index, a1, a2, a3, a4, a5, a6, a7, a8);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijijjiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
      var sp = stackSave();
      try {
        dynCall_vijijjiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijjiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_vijjiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vijjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_vijjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        dynCall_viiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return dynCall_iiiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiijjjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return dynCall_iiijjjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiijiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        dynCall_viiijiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_jijiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return dynCall_jijiiii(index, a1, a2, a3, a4, a5, a6, a7);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return dynCall_iiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return dynCall_iiiiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        dynCall_viiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0);
      }
    }
    Module["ccall"] = ccall;
    var calledRun;
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    var calledMain = false;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun)
        run();
      if (!calledRun)
        dependenciesFulfilled = runCaller;
    };
    function callMain(args) {
      var entryFunction = Module["_main"];
      var argc = 0;
      var argv = 0;
      try {
        var ret = entryFunction(argc, argv);
        exit(ret, true);
        return ret;
      } catch (e) {
        return handleException(e);
      } finally {
        calledMain = true;
      }
    }
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun)
          return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT)
          return;
        initRuntime();
        preMain();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"])
          Module["onRuntimeInitialized"]();
        if (shouldRunNow)
          callMain(args);
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    Module["run"] = run;
    function exit(status, implicit) {
      EXITSTATUS = status;
      if (keepRuntimeAlive()) {
      } else {
        exitRuntime();
      }
      procExit(status);
    }
    function procExit(code) {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module["onExit"])
          Module["onExit"](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    var shouldRunNow = true;
    if (Module["noInitialRun"])
      shouldRunNow = false;
    run();
    return DuckDB5.ready;
  };
})();
var duckdb_mvp_default = DuckDB;

// src/bindings/bindings_node_base.ts
var import_fs2 = __toESM(require("fs"));
var DuckDBNodeBindings = class extends DuckDBBindingsBase {
  constructor(logger, runtime, mainModulePath, pthreadWorkerPath) {
    super(logger, runtime);
    this.mainModulePath = mainModulePath;
    this.pthreadWorkerPath = pthreadWorkerPath;
  }
  locateFile(path2, prefix) {
    if (path2.endsWith(".wasm")) {
      return this.mainModulePath;
    }
    if (path2.endsWith(".worker.js")) {
      if (!this.pthreadWorkerPath) {
        throw new Error("Missing DuckDB worker path!");
      }
      return this.pthreadWorkerPath;
    }
    throw new Error(`WASM instantiation requested unexpected file: prefix=${prefix} path=${path2}`);
  }
  instantiateWasm(imports, success) {
    globalThis.DUCKDB_RUNTIME = {};
    for (const func of Object.getOwnPropertyNames(this._runtime)) {
      if (func == "constructor")
        continue;
      globalThis.DUCKDB_RUNTIME[func] = Object.getOwnPropertyDescriptor(this._runtime, func).value;
    }
    const buf = import_fs2.default.readFileSync(this.mainModulePath);
    WebAssembly.instantiate(buf, imports).then((output) => {
      success(output.instance, output.module);
    });
    return [];
  }
  instantiateImpl(moduleOverrides) {
    return duckdb_mvp_default(__spreadProps(__spreadValues({}, moduleOverrides), {
      instantiateWasm: this.instantiateWasm.bind(this)
    }));
  }
};

// src/bindings/bindings_node_mvp.ts
var DuckDB2 = class extends DuckDBNodeBindings {
  constructor(logger, runtime, mainModulePath, pthreadWorkerPath = null) {
    super(logger, runtime, mainModulePath, pthreadWorkerPath);
  }
  instantiateImpl(moduleOverrides) {
    return duckdb_mvp_default(__spreadProps(__spreadValues({}, moduleOverrides), {
      instantiateWasm: this.instantiateWasm.bind(this),
      locateFile: this.locateFile.bind(this)
    }));
  }
};

// src/bindings/duckdb-eh.js
var import_meta2 = {};
var DuckDB3 = (() => {
  var _scriptDir = import_meta2.url;
  return function(DuckDB5) {
    DuckDB5 = DuckDB5 || {};
    var Module = typeof DuckDB5 !== "undefined" ? DuckDB5 : {};
    var objAssign = Object.assign;
    var readyPromiseResolve, readyPromiseReject;
    Module["ready"] = new Promise(function(resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var moduleOverrides = objAssign({}, Module);
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = typeof window === "object";
    var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    var ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    var scriptDirectory = "";
    function locateFile(path2) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path2, scriptDirectory);
      }
      return scriptDirectory + path2;
    }
    var read_, readAsync, readBinary, setWindowTitle;
    function logExceptionOnExit(e) {
      if (e instanceof ExitStatus)
        return;
      let toLog = e;
      err("exiting due to exception: " + toLog);
    }
    var fs4;
    var nodePath;
    var requireNodeFS;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require("path").dirname(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      requireNodeFS = function() {
        if (!nodePath) {
          fs4 = require("fs");
          nodePath = require("path");
        }
      };
      read_ = function shell_read(filename, binary) {
        requireNodeFS();
        filename = nodePath["normalize"](filename);
        return fs4.readFileSync(filename, binary ? null : "utf8");
      };
      readBinary = function readBinary2(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        return ret;
      };
      readAsync = function readAsync2(filename, onload, onerror) {
        requireNodeFS();
        filename = nodePath["normalize"](filename);
        fs4.readFile(filename, function(err2, data) {
          if (err2)
            onerror(err2);
          else
            onload(data.buffer);
        });
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/");
      }
      arguments_ = process["argv"].slice(2);
      process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", function(reason) {
        throw reason;
      });
      quit_ = (status, toThrow) => {
        if (keepRuntimeAlive()) {
          process["exitCode"] = status;
          throw toThrow;
        }
        logExceptionOnExit(toThrow);
        process["exit"](status);
      };
      Module["inspect"] = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document !== "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      {
        read_ = function(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = function(url, onload, onerror) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = function() {
            if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = (title) => document.title = title;
    } else {
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    objAssign(Module, moduleOverrides);
    moduleOverrides = null;
    if (Module["arguments"])
      arguments_ = Module["arguments"];
    if (Module["thisProgram"])
      thisProgram = Module["thisProgram"];
    if (Module["quit"])
      quit_ = Module["quit"];
    var wasmBinary;
    if (Module["wasmBinary"])
      wasmBinary = Module["wasmBinary"];
    var noExitRuntime = Module["noExitRuntime"] || true;
    if (typeof WebAssembly !== "object") {
      abort("no native wasm support detected");
    }
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    function assert(condition, text) {
      if (!condition) {
        abort(text);
      }
    }
    function getCFunc(ident) {
      var func = Module["_" + ident];
      return func;
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = { "string": function(str) {
        var ret2 = 0;
        if (str !== null && str !== void 0 && str !== 0) {
          var len = (str.length << 2) + 1;
          ret2 = stackAlloc(len);
          stringToUTF8(str, ret2, len);
        }
        return ret2;
      }, "array": function(arr) {
        var ret2 = stackAlloc(arr.length);
        writeArrayToMemory(arr, ret2);
        return ret2;
      } };
      function convertReturnValue(ret2) {
        if (returnType === "string")
          return UTF8ToString(ret2);
        if (returnType === "boolean")
          return Boolean(ret2);
        return ret2;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0)
              stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      function onDone(ret2) {
        if (stack !== 0)
          stackRestore(stack);
        return convertReturnValue(ret2);
      }
      ret = onDone(ret);
      return ret;
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(heap, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heap[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
      if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = heap[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = heap[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }
          var u2 = heap[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0))
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx)
            break;
          heap[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx)
            break;
          heap[outIdx++] = 192 | u >> 6;
          heap[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx)
            break;
          heap[outIdx++] = 224 | u >> 12;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx)
            break;
          heap[outIdx++] = 240 | u >> 18;
          heap[outIdx++] = 128 | u >> 12 & 63;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        }
      }
      heap[outIdx] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
          u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
          ++len;
        else if (u <= 2047)
          len += 2;
        else if (u <= 65535)
          len += 3;
        else
          len += 4;
      }
      return len;
    }
    function writeArrayToMemory(array, buffer2) {
      HEAP8.set(array, buffer2);
    }
    function writeAsciiToMemory(str, buffer2, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull)
        HEAP8[buffer2 >> 0] = 0;
    }
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    var wasmTable;
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    var runtimeKeepaliveCounter = 0;
    function keepRuntimeAlive() {
      return noExitRuntime || runtimeKeepaliveCounter > 0;
    }
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      runtimeExited = true;
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) {
      {
        if (Module["onAbort"]) {
          Module["onAbort"](what);
        }
      }
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what += ". Build with -s ASSERTIONS=1 for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return filename.startsWith(dataURIPrefix);
    }
    var wasmBinaryFile;
    if (Module["locateFile"]) {
      wasmBinaryFile = "./duckdb-eh.wasm";
      if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = locateFile(wasmBinaryFile);
      }
    } else {
      wasmBinaryFile = new URL("./duckdb-eh.wasm", import_meta2.url).toString();
    }
    function getBinary(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(file);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch === "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            if (!response["ok"]) {
              throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
            }
            return response["arrayBuffer"]();
          }).catch(function() {
            return getBinary(wasmBinaryFile);
          });
        }
      }
      return Promise.resolve().then(function() {
        return getBinary(wasmBinaryFile);
      });
    }
    function createWasm() {
      var info = { "a": asmLibraryArg };
      function receiveInstance(instance, module2) {
        var exports2 = instance.exports;
        Module["asm"] = exports2;
        wasmMemory = Module["asm"]["ea"];
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module["asm"]["ha"];
        addOnInit(Module["asm"]["fa"]);
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      function receiveInstantiationResult(result) {
        receiveInstance(result["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(function(instance) {
          return instance;
        }).then(receiver, function(reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiationResult, function(reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              return instantiateArrayBuffer(receiveInstantiationResult);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiationResult);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports = Module["instantiateWasm"](info, receiveInstance);
          return exports;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {};
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
          callback(Module);
          continue;
        }
        var func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === void 0) {
            getWasmTableEntry(func)();
          } else {
            getWasmTableEntry(func)(callback.arg);
          }
        } else {
          func(callback.arg === void 0 ? null : callback.arg);
        }
      }
    }
    var wasmTableMirror = [];
    function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length)
          wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    }
    function handleException(e) {
      if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS;
      }
      quit_(1, e);
    }
    function ___assert_fail(condition, filename, line, func) {
      abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
    }
    var SYSCALLS = { mappings: {}, buffers: [null, [], []], printChar: function(stream, curr) {
      var buffer2 = SYSCALLS.buffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
        buffer2.length = 0;
      } else {
        buffer2.push(curr);
      }
    }, varargs: void 0, get: function() {
      SYSCALLS.varargs += 4;
      var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
      return ret;
    }, getStr: function(ptr) {
      var ret = UTF8ToString(ptr);
      return ret;
    }, get64: function(low, high) {
      return low;
    } };
    function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
    }
    function ___syscall_access(path2, amode) {
      path2 = SYSCALLS.getStr(path2);
      return SYSCALLS.doAccess(path2, amode);
    }
    function SOCKFS() {
      err("missing function: $SOCKFS");
      abort(-1);
    }
    function FS() {
      err("missing function: $FS");
      abort(-1);
    }
    function getSocketFromFD(fd) {
      var socket = SOCKFS.getSocket(fd);
      if (!socket)
        throw new FS.ErrnoError(8);
      return socket;
    }
    function setErrNo(value) {
      HEAP32[___errno_location() >> 2] = value;
      return value;
    }
    function inetNtop4(addr) {
      return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
    }
    function inetNtop6(ints) {
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
      var hasipv4 = true;
      var v4part = "";
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) {
          hasipv4 = false;
          break;
        }
      }
      if (hasipv4) {
        v4part = inetNtop4(parts[6] | parts[7] << 16);
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        if (parts[5] === 0) {
          str = "::";
          if (v4part === "0.0.0.0")
            v4part = "";
          if (v4part === "0.0.0.1")
            v4part = "1";
          str += v4part;
          return str;
        }
      }
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0)
                str += ":";
            }
            continue;
          }
        }
        str += Number(_ntohs(parts[word] & 65535)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
    function readSockaddr(sa, salen) {
      var family = HEAP16[sa >> 1];
      var port = _ntohs(HEAPU16[sa + 2 >> 1]);
      var addr;
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[sa + 4 >> 2];
          addr = inetNtop4(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [HEAP32[sa + 8 >> 2], HEAP32[sa + 12 >> 2], HEAP32[sa + 16 >> 2], HEAP32[sa + 20 >> 2]];
          addr = inetNtop6(addr);
          break;
        default:
          return { errno: 5 };
      }
      return { family, addr, port };
    }
    function inetPton4(str) {
      var b = str.split(".");
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp))
          return null;
        b[i] = tmp;
      }
      return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    }
    function jstoi_q(str) {
      return parseInt(str);
    }
    function inetPton6(str) {
      var words;
      var w, offset, z;
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (str.startsWith("::")) {
        str = str.replace("::", "Z:");
      } else {
        str = str.replace("::", ":Z:");
      }
      if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]", "g"), ":");
        words = str.split(":");
        words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
        words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2);
      } else {
        words = str.split(":");
      }
      offset = 0;
      z = 0;
      for (w = 0; w < words.length; w++) {
        if (typeof words[w] === "string") {
          if (words[w] === "Z") {
            for (z = 0; z < 8 - words.length + 1; z++) {
              parts[w + z] = 0;
            }
            offset = z - 1;
          } else {
            parts[w + offset] = _htons(parseInt(words[w], 16));
          }
        } else {
          parts[w + offset] = words[w];
        }
      }
      return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]];
    }
    var DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: function(name) {
      var res = inetPton4(name);
      if (res !== null) {
        return name;
      }
      res = inetPton6(name);
      if (res !== null) {
        return name;
      }
      var addr;
      if (DNS.address_map.addrs[name]) {
        addr = DNS.address_map.addrs[name];
      } else {
        var id = DNS.address_map.id++;
        assert(id < 65535, "exceeded max address mappings of 65535");
        addr = "172.29." + (id & 255) + "." + (id & 65280);
        DNS.address_map.names[addr] = name;
        DNS.address_map.addrs[name] = addr;
      }
      return addr;
    }, lookup_addr: function(addr) {
      if (DNS.address_map.names[addr]) {
        return DNS.address_map.names[addr];
      }
      return null;
    } };
    function getSocketAddress(addrp, addrlen, allowNull) {
      if (allowNull && addrp === 0)
        return null;
      var info = readSockaddr(addrp, addrlen);
      if (info.errno)
        throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    }
    function ___syscall_bind(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.bind(sock, info.addr, info.port);
      return 0;
    }
    function ___syscall_connect(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.connect(sock, info.addr, info.port);
      return 0;
    }
    function ___syscall_fcntl64(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      return 0;
    }
    function ___syscall_fstat64(fd, buf) {
    }
    function ___syscall_fstatat64(dirfd, path2, buf, flags) {
    }
    function ___syscall_ftruncate64(fd, low, high) {
    }
    function ___syscall_getdents64(fd, dirp, count) {
    }
    function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
    }
    function writeSockaddr(sa, family, addr, port, addrlen) {
      switch (family) {
        case 2:
          addr = inetPton4(addr);
          zeroMemory(sa, 16);
          if (addrlen) {
            HEAP32[addrlen >> 2] = 16;
          }
          HEAP16[sa >> 1] = family;
          HEAP32[sa + 4 >> 2] = addr;
          HEAP16[sa + 2 >> 1] = _htons(port);
          break;
        case 10:
          addr = inetPton6(addr);
          zeroMemory(sa, 28);
          if (addrlen) {
            HEAP32[addrlen >> 2] = 28;
          }
          HEAP32[sa >> 2] = family;
          HEAP32[sa + 8 >> 2] = addr[0];
          HEAP32[sa + 12 >> 2] = addr[1];
          HEAP32[sa + 16 >> 2] = addr[2];
          HEAP32[sa + 20 >> 2] = addr[3];
          HEAP16[sa + 2 >> 1] = _htons(port);
          break;
        default:
          return 5;
      }
      return 0;
    }
    function ___syscall_getpeername(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      if (!sock.daddr) {
        return -53;
      }
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
      return 0;
    }
    function ___syscall_getsockopt(fd, level, optname, optval, optlen) {
      var sock = getSocketFromFD(fd);
      if (level === 1) {
        if (optname === 4) {
          HEAP32[optval >> 2] = sock.error;
          HEAP32[optlen >> 2] = 4;
          sock.error = null;
          return 0;
        }
      }
      return -50;
    }
    function ___syscall_ioctl(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      return 0;
    }
    function ___syscall_lstat64(path2, buf) {
    }
    function ___syscall_mkdir(path2, mode) {
      path2 = SYSCALLS.getStr(path2);
      return SYSCALLS.doMkdir(path2, mode);
    }
    function ___syscall_open(path2, flags, varargs) {
      SYSCALLS.varargs = varargs;
    }
    function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var msg = sock.sock_ops.recvmsg(sock, len);
      if (!msg)
        return 0;
      if (addr) {
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
      }
      HEAPU8.set(msg.buffer, buf);
      return msg.buffer.byteLength;
    }
    function ___syscall_rename(old_path, new_path) {
    }
    function ___syscall_rmdir(path2) {
    }
    function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
    }
    function ___syscall_socket(domain, type, protocol) {
    }
    function ___syscall_stat64(path2, buf) {
    }
    function ___syscall_unlink(path2) {
    }
    function __dlopen_js(filename, flag) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }
    function __dlsym_js(handle, symbol) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }
    function _abort() {
      abort("");
    }
    var _emscripten_get_now;
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = () => {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6;
      };
    } else
      _emscripten_get_now = () => performance.now();
    var _emscripten_get_now_is_monotonic = true;
    function _clock_gettime(clk_id, tp) {
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[tp >> 2] = now / 1e3 | 0;
      HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
      return 0;
    }
    function _duckdb_web_fs_directory_create(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.createDirectory(Module, path2, pathLen);
    }
    function _duckdb_web_fs_directory_exists(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.checkDirectory(Module, path2, pathLen);
    }
    function _duckdb_web_fs_directory_list_files(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(Module, path2, pathLen);
    }
    function _duckdb_web_fs_directory_remove(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.removeDirectory(Module, path2, pathLen);
    }
    function _duckdb_web_fs_file_close(fileId) {
      return globalThis.DUCKDB_RUNTIME.closeFile(Module, fileId);
    }
    function _duckdb_web_fs_file_exists(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.checkFile(Module, path2, pathLen);
    }
    function _duckdb_web_fs_file_get_last_modified_time(fileId) {
      return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(Module, fileId);
    }
    function _duckdb_web_fs_file_move(from, fromLen, to, toLen) {
      return globalThis.DUCKDB_RUNTIME.moveFile(Module, from, fromLen, to, toLen);
    }
    function _duckdb_web_fs_file_open(fileId, flags) {
      return globalThis.DUCKDB_RUNTIME.openFile(Module, fileId, flags);
    }
    function _duckdb_web_fs_file_read(fileId, buf, size, location) {
      return globalThis.DUCKDB_RUNTIME.readFile(Module, fileId, buf, size, location);
    }
    function _duckdb_web_fs_file_truncate(fileId, newSize) {
      return globalThis.DUCKDB_RUNTIME.truncateFile(Module, fileId, newSize);
    }
    function _duckdb_web_fs_file_write(fileId, buf, size, location) {
      return globalThis.DUCKDB_RUNTIME.writeFile(Module, fileId, buf, size, location);
    }
    function _duckdb_web_fs_glob(path2, pathLen) {
      return globalThis.DUCKDB_RUNTIME.glob(Module, path2, pathLen);
    }
    function _duckdb_web_test_platform_feature(feature) {
      return globalThis.DUCKDB_RUNTIME.testPlatformFeature(Module, feature);
    }
    function _duckdb_web_udf_scalar_call(funcId, descPtr, descSize, ptrsPtr, ptrsSize, response) {
      return globalThis.DUCKDB_RUNTIME.callScalarUDF(Module, funcId, descPtr, descSize, ptrsPtr, ptrsSize, response);
    }
    function _emscripten_get_heap_max() {
      return 2147483648;
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        return false;
      }
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    }
    var ENV = {};
    function getExecutableName() {
      return thisProgram || "./this.program";
    }
    function getEnvStrings() {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
        for (var x in ENV) {
          if (ENV[x] === void 0)
            delete env[x];
          else
            env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + "=" + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
    function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0;
    }
    function _fd_close(fd) {
      return 0;
    }
    function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt, offset_low);
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt, offset_low);
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _fd_read(fd, iov, iovcnt, pnum) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    }
    function _fd_sync(fd) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (stream.stream_ops && stream.stream_ops.fsync) {
        return -stream.stream_ops.fsync(stream);
      }
      return 0;
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov >> 2];
        var len = HEAP32[iov + 4 >> 2];
        iov += 8;
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _getaddrinfo(node, service, hint, out2) {
      var addr = 0;
      var port = 0;
      var flags = 0;
      var family = 0;
      var type = 0;
      var proto = 0;
      var ai;
      function allocaddrinfo(family2, type2, proto2, canon, addr2, port2) {
        var sa, salen, ai2;
        var errno;
        salen = family2 === 10 ? 28 : 16;
        addr2 = family2 === 10 ? inetNtop6(addr2) : inetNtop4(addr2);
        sa = _malloc(salen);
        errno = writeSockaddr(sa, family2, addr2, port2);
        assert(!errno);
        ai2 = _malloc(32);
        HEAP32[ai2 + 4 >> 2] = family2;
        HEAP32[ai2 + 8 >> 2] = type2;
        HEAP32[ai2 + 12 >> 2] = proto2;
        HEAP32[ai2 + 24 >> 2] = canon;
        HEAP32[ai2 + 20 >> 2] = sa;
        if (family2 === 10) {
          HEAP32[ai2 + 16 >> 2] = 28;
        } else {
          HEAP32[ai2 + 16 >> 2] = 16;
        }
        HEAP32[ai2 + 28 >> 2] = 0;
        return ai2;
      }
      if (hint) {
        flags = HEAP32[hint >> 2];
        family = HEAP32[hint + 4 >> 2];
        type = HEAP32[hint + 8 >> 2];
        proto = HEAP32[hint + 12 >> 2];
      }
      if (type && !proto) {
        proto = type === 2 ? 17 : 6;
      }
      if (!type && proto) {
        type = proto === 17 ? 2 : 1;
      }
      if (proto === 0) {
        proto = 6;
      }
      if (type === 0) {
        type = 1;
      }
      if (!node && !service) {
        return -2;
      }
      if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
        return -1;
      }
      if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) {
        return -1;
      }
      if (flags & 32) {
        return -2;
      }
      if (type !== 0 && type !== 1 && type !== 2) {
        return -7;
      }
      if (family !== 0 && family !== 2 && family !== 10) {
        return -6;
      }
      if (service) {
        service = UTF8ToString(service);
        port = parseInt(service, 10);
        if (isNaN(port)) {
          if (flags & 1024) {
            return -2;
          }
          return -8;
        }
      }
      if (!node) {
        if (family === 0) {
          family = 2;
        }
        if ((flags & 1) === 0) {
          if (family === 2) {
            addr = _htonl(2130706433);
          } else {
            addr = [0, 0, 0, 1];
          }
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAP32[out2 >> 2] = ai;
        return 0;
      }
      node = UTF8ToString(node);
      addr = inetPton4(node);
      if (addr !== null) {
        if (family === 0 || family === 2) {
          family = 2;
        } else if (family === 10 && flags & 8) {
          addr = [0, 0, _htonl(65535), addr];
          family = 10;
        } else {
          return -2;
        }
      } else {
        addr = inetPton6(node);
        if (addr !== null) {
          if (family === 0 || family === 10) {
            family = 10;
          } else {
            return -2;
          }
        }
      }
      if (addr != null) {
        ai = allocaddrinfo(family, type, proto, node, addr, port);
        HEAP32[out2 >> 2] = ai;
        return 0;
      }
      if (flags & 4) {
        return -2;
      }
      node = DNS.lookup_name(node);
      addr = inetPton4(node);
      if (family === 0) {
        family = 2;
      } else if (family === 10) {
        addr = [0, 0, _htonl(65535), addr];
      }
      ai = allocaddrinfo(family, type, proto, null, addr, port);
      HEAP32[out2 >> 2] = ai;
      return 0;
    }
    function getRandomDevice() {
      if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
        var randomBuffer = new Uint8Array(1);
        return function() {
          crypto.getRandomValues(randomBuffer);
          return randomBuffer[0];
        };
      } else if (ENVIRONMENT_IS_NODE) {
        try {
          var crypto_module = require("crypto");
          return function() {
            return crypto_module["randomBytes"](1)[0];
          };
        } catch (e) {
        }
      }
      return function() {
        abort("randomDevice");
      };
    }
    function _getentropy(buffer2, size) {
      if (!_getentropy.randomDevice) {
        _getentropy.randomDevice = getRandomDevice();
      }
      for (var i = 0; i < size; i++) {
        HEAP8[buffer2 + i >> 0] = _getentropy.randomDevice();
      }
      return 0;
    }
    function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
      var info = readSockaddr(sa, salen);
      if (info.errno) {
        return -6;
      }
      var port = info.port;
      var addr = info.addr;
      var overflowed = false;
      if (node && nodelen) {
        var lookup;
        if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
          if (flags & 8) {
            return -2;
          }
        } else {
          addr = lookup;
        }
        var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
        if (numBytesWrittenExclNull + 1 >= nodelen) {
          overflowed = true;
        }
      }
      if (serv && servlen) {
        port = "" + port;
        var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
        if (numBytesWrittenExclNull + 1 >= servlen) {
          overflowed = true;
        }
      }
      if (overflowed) {
        return -12;
      }
      return 0;
    }
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
      }
      return sum;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[tm + 40 >> 2];
      var date = { tm_sec: HEAP32[tm >> 2], tm_min: HEAP32[tm + 4 >> 2], tm_hour: HEAP32[tm + 8 >> 2], tm_mday: HEAP32[tm + 12 >> 2], tm_mon: HEAP32[tm + 16 >> 2], tm_year: HEAP32[tm + 20 >> 2], tm_wday: HEAP32[tm + 24 >> 2], tm_yday: HEAP32[tm + 28 >> 2], tm_isdst: HEAP32[tm + 32 >> 2], tm_gmtoff: HEAP32[tm + 36 >> 2], tm_zone: tm_zone ? UTF8ToString(tm_zone) : "" };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date2) {
        var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          } else {
            return thisDate.getFullYear();
          }
        } else {
          return thisDate.getFullYear() - 1;
        }
      }
      var EXPANSION_RULES_2 = { "%a": function(date2) {
        return WEEKDAYS[date2.tm_wday].substring(0, 3);
      }, "%A": function(date2) {
        return WEEKDAYS[date2.tm_wday];
      }, "%b": function(date2) {
        return MONTHS[date2.tm_mon].substring(0, 3);
      }, "%B": function(date2) {
        return MONTHS[date2.tm_mon];
      }, "%C": function(date2) {
        var year = date2.tm_year + 1900;
        return leadingNulls(year / 100 | 0, 2);
      }, "%d": function(date2) {
        return leadingNulls(date2.tm_mday, 2);
      }, "%e": function(date2) {
        return leadingSomething(date2.tm_mday, 2, " ");
      }, "%g": function(date2) {
        return getWeekBasedYear(date2).toString().substring(2);
      }, "%G": function(date2) {
        return getWeekBasedYear(date2);
      }, "%H": function(date2) {
        return leadingNulls(date2.tm_hour, 2);
      }, "%I": function(date2) {
        var twelveHour = date2.tm_hour;
        if (twelveHour == 0)
          twelveHour = 12;
        else if (twelveHour > 12)
          twelveHour -= 12;
        return leadingNulls(twelveHour, 2);
      }, "%j": function(date2) {
        return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
      }, "%m": function(date2) {
        return leadingNulls(date2.tm_mon + 1, 2);
      }, "%M": function(date2) {
        return leadingNulls(date2.tm_min, 2);
      }, "%n": function() {
        return "\n";
      }, "%p": function(date2) {
        if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      }, "%S": function(date2) {
        return leadingNulls(date2.tm_sec, 2);
      }, "%t": function() {
        return "	";
      }, "%u": function(date2) {
        return date2.tm_wday || 7;
      }, "%U": function(date2) {
        var janFirst = new Date(date2.tm_year + 1900, 0, 1);
        var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
        var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
        if (compareByDay(firstSunday, endDate) < 0) {
          var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
          var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
          var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
          return leadingNulls(Math.ceil(days / 7), 2);
        }
        return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
      }, "%V": function(date2) {
        var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
        var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
          return "53";
        }
        if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
          return "01";
        }
        var daysDifference;
        if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
          daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
        } else {
          daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
        }
        return leadingNulls(Math.ceil(daysDifference / 7), 2);
      }, "%w": function(date2) {
        return date2.tm_wday;
      }, "%W": function(date2) {
        var janFirst = new Date(date2.tm_year, 0, 1);
        var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
        var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
        if (compareByDay(firstMonday, endDate) < 0) {
          var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
          var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
          var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
          return leadingNulls(Math.ceil(days / 7), 2);
        }
        return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
      }, "%y": function(date2) {
        return (date2.tm_year + 1900).toString().substring(2);
      }, "%Y": function(date2) {
        return date2.tm_year + 1900;
      }, "%z": function(date2) {
        var off = date2.tm_gmtoff;
        var ahead = off >= 0;
        off = Math.abs(off) / 60;
        off = off / 60 * 100 + off % 60;
        return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
      }, "%Z": function(date2) {
        return date2.tm_zone;
      }, "%%": function() {
        return "%";
      } };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }
    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm);
    }
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull)
        u8array.length = numBytesWritten;
      return u8array;
    }
    var asmLibraryArg = { "a": ___assert_fail, "R": ___syscall__newselect, "L": ___syscall_access, "T": ___syscall_bind, "S": ___syscall_connect, "b": ___syscall_fcntl64, "$": ___syscall_fstat64, "Z": ___syscall_fstatat64, "W": ___syscall_ftruncate64, "X": ___syscall_getdents64, "N": ___syscall_getpeername, "Q": ___syscall_getsockopt, "ba": ___syscall_ioctl, "Y": ___syscall_lstat64, "aa": ___syscall_mkdir, "q": ___syscall_open, "O": ___syscall_recvfrom, "J": ___syscall_rename, "o": ___syscall_rmdir, "P": ___syscall_sendto, "k": ___syscall_socket, "_": ___syscall_stat64, "p": ___syscall_unlink, "m": __dlopen_js, "U": __dlsym_js, "d": _abort, "n": _clock_gettime, "D": _duckdb_web_fs_directory_create, "E": _duckdb_web_fs_directory_exists, "B": _duckdb_web_fs_directory_list_files, "C": _duckdb_web_fs_directory_remove, "h": _duckdb_web_fs_file_close, "z": _duckdb_web_fs_file_exists, "G": _duckdb_web_fs_file_get_last_modified_time, "A": _duckdb_web_fs_file_move, "H": _duckdb_web_fs_file_open, "f": _duckdb_web_fs_file_read, "F": _duckdb_web_fs_file_truncate, "i": _duckdb_web_fs_file_write, "y": _duckdb_web_fs_glob, "g": _duckdb_web_test_platform_feature, "I": _duckdb_web_udf_scalar_call, "r": _emscripten_get_heap_max, "ca": _emscripten_memcpy_big, "da": _emscripten_resize_heap, "t": _environ_get, "u": _environ_sizes_get, "c": _fd_close, "w": _fd_pread, "v": _fd_pwrite, "j": _fd_read, "x": _fd_seek, "K": _fd_sync, "e": _fd_write, "l": _getaddrinfo, "V": _getentropy, "M": _getnameinfo, "s": _strftime_l };
    var asm = createWasm();
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
      return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["fa"]).apply(null, arguments);
    };
    var _main = Module["_main"] = function() {
      return (_main = Module["_main"] = Module["asm"]["ga"]).apply(null, arguments);
    };
    var _duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = function() {
      return (_duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = Module["asm"]["ia"]).apply(null, arguments);
    };
    var _duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = function() {
      return (_duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = Module["asm"]["ja"]).apply(null, arguments);
    };
    var _duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = function() {
      return (_duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = Module["asm"]["ka"]).apply(null, arguments);
    };
    var _duckdb_web_reset = Module["_duckdb_web_reset"] = function() {
      return (_duckdb_web_reset = Module["_duckdb_web_reset"] = Module["asm"]["la"]).apply(null, arguments);
    };
    var _duckdb_web_connect = Module["_duckdb_web_connect"] = function() {
      return (_duckdb_web_connect = Module["_duckdb_web_connect"] = Module["asm"]["ma"]).apply(null, arguments);
    };
    var _duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = function() {
      return (_duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = Module["asm"]["na"]).apply(null, arguments);
    };
    var _duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = function() {
      return (_duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = Module["asm"]["oa"]).apply(null, arguments);
    };
    var _duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = function() {
      return (_duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = Module["asm"]["pa"]).apply(null, arguments);
    };
    var _duckdb_web_open = Module["_duckdb_web_open"] = function() {
      return (_duckdb_web_open = Module["_duckdb_web_open"] = Module["asm"]["qa"]).apply(null, arguments);
    };
    var _duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = function() {
      return (_duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = Module["asm"]["ra"]).apply(null, arguments);
    };
    var _duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = function() {
      return (_duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = Module["asm"]["sa"]).apply(null, arguments);
    };
    var _duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = function() {
      return (_duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = Module["asm"]["ta"]).apply(null, arguments);
    };
    var _duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = function() {
      return (_duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = Module["asm"]["ua"]).apply(null, arguments);
    };
    var _duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = function() {
      return (_duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = Module["asm"]["va"]).apply(null, arguments);
    };
    var _duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = function() {
      return (_duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = Module["asm"]["wa"]).apply(null, arguments);
    };
    var _duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = function() {
      return (_duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = Module["asm"]["xa"]).apply(null, arguments);
    };
    var _duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = function() {
      return (_duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = Module["asm"]["ya"]).apply(null, arguments);
    };
    var _duckdb_web_fs_set_file_descriptor = Module["_duckdb_web_fs_set_file_descriptor"] = function() {
      return (_duckdb_web_fs_set_file_descriptor = Module["_duckdb_web_fs_set_file_descriptor"] = Module["asm"]["za"]).apply(null, arguments);
    };
    var _duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = function() {
      return (_duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = Module["asm"]["Aa"]).apply(null, arguments);
    };
    var _duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = function() {
      return (_duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = Module["asm"]["Ba"]).apply(null, arguments);
    };
    var _duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = function() {
      return (_duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = Module["asm"]["Ca"]).apply(null, arguments);
    };
    var _duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = function() {
      return (_duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = Module["asm"]["Da"]).apply(null, arguments);
    };
    var _duckdb_web_get_version = Module["_duckdb_web_get_version"] = function() {
      return (_duckdb_web_get_version = Module["_duckdb_web_get_version"] = Module["asm"]["Ea"]).apply(null, arguments);
    };
    var _duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = function() {
      return (_duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = Module["asm"]["Fa"]).apply(null, arguments);
    };
    var _duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = function() {
      return (_duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = Module["asm"]["Ga"]).apply(null, arguments);
    };
    var _duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = function() {
      return (_duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = Module["asm"]["Ha"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = function() {
      return (_duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = Module["asm"]["Ia"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = function() {
      return (_duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = Module["asm"]["Ja"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = function() {
      return (_duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = Module["asm"]["Ka"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = function() {
      return (_duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = Module["asm"]["La"]).apply(null, arguments);
    };
    var _duckdb_web_query_run = Module["_duckdb_web_query_run"] = function() {
      return (_duckdb_web_query_run = Module["_duckdb_web_query_run"] = Module["asm"]["Ma"]).apply(null, arguments);
    };
    var _duckdb_web_query_send = Module["_duckdb_web_query_send"] = function() {
      return (_duckdb_web_query_send = Module["_duckdb_web_query_send"] = Module["asm"]["Na"]).apply(null, arguments);
    };
    var _duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = function() {
      return (_duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = Module["asm"]["Oa"]).apply(null, arguments);
    };
    var _duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = function() {
      return (_duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = Module["asm"]["Pa"]).apply(null, arguments);
    };
    var _duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = function() {
      return (_duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = Module["asm"]["Qa"]).apply(null, arguments);
    };
    var _duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = function() {
      return (_duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = Module["asm"]["Ra"]).apply(null, arguments);
    };
    var _duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = function() {
      return (_duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = Module["asm"]["Sa"]).apply(null, arguments);
    };
    var ___errno_location = Module["___errno_location"] = function() {
      return (___errno_location = Module["___errno_location"] = Module["asm"]["Ta"]).apply(null, arguments);
    };
    var _htonl = Module["_htonl"] = function() {
      return (_htonl = Module["_htonl"] = Module["asm"]["Ua"]).apply(null, arguments);
    };
    var _htons = Module["_htons"] = function() {
      return (_htons = Module["_htons"] = Module["asm"]["Va"]).apply(null, arguments);
    };
    var _ntohs = Module["_ntohs"] = function() {
      return (_ntohs = Module["_ntohs"] = Module["asm"]["Wa"]).apply(null, arguments);
    };
    var stackSave = Module["stackSave"] = function() {
      return (stackSave = Module["stackSave"] = Module["asm"]["Xa"]).apply(null, arguments);
    };
    var stackRestore = Module["stackRestore"] = function() {
      return (stackRestore = Module["stackRestore"] = Module["asm"]["Ya"]).apply(null, arguments);
    };
    var stackAlloc = Module["stackAlloc"] = function() {
      return (stackAlloc = Module["stackAlloc"] = Module["asm"]["Za"]).apply(null, arguments);
    };
    var _malloc = Module["_malloc"] = function() {
      return (_malloc = Module["_malloc"] = Module["asm"]["_a"]).apply(null, arguments);
    };
    var _free = Module["_free"] = function() {
      return (_free = Module["_free"] = Module["asm"]["$a"]).apply(null, arguments);
    };
    Module["ccall"] = ccall;
    var calledRun;
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    var calledMain = false;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun)
        run();
      if (!calledRun)
        dependenciesFulfilled = runCaller;
    };
    function callMain(args) {
      var entryFunction = Module["_main"];
      var argc = 0;
      var argv = 0;
      try {
        var ret = entryFunction(argc, argv);
        exit(ret, true);
        return ret;
      } catch (e) {
        return handleException(e);
      } finally {
        calledMain = true;
      }
    }
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun)
          return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT)
          return;
        initRuntime();
        preMain();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"])
          Module["onRuntimeInitialized"]();
        if (shouldRunNow)
          callMain(args);
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    Module["run"] = run;
    function exit(status, implicit) {
      EXITSTATUS = status;
      if (keepRuntimeAlive()) {
      } else {
        exitRuntime();
      }
      procExit(status);
    }
    function procExit(code) {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module["onExit"])
          Module["onExit"](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    var shouldRunNow = true;
    if (Module["noInitialRun"])
      shouldRunNow = false;
    run();
    return DuckDB5.ready;
  };
})();
var duckdb_eh_default = DuckDB3;

// src/bindings/bindings_node_eh.ts
var DuckDB4 = class extends DuckDBNodeBindings {
  constructor(logger, runtime, mainModulePath, pthreadWorkerPath = null) {
    super(logger, runtime, mainModulePath, pthreadWorkerPath);
  }
  instantiateImpl(moduleOverrides) {
    return duckdb_eh_default(__spreadProps(__spreadValues({}, moduleOverrides), {
      instantiateWasm: this.instantiateWasm.bind(this),
      locateFile: this.locateFile.bind(this)
    }));
  }
};

// src/targets/duckdb-node-blocking.ts
async function createDuckDB(bundles, logger, runtime) {
  const platform = await getPlatformFeatures();
  if (platform.wasmExceptions) {
    if (bundles.eh) {
      return new DuckDB4(logger, runtime, bundles.eh.mainModule);
    }
  }
  return new DuckDB2(logger, runtime, bundles.mvp.mainModule);
}

// src/parallel/async_connection.ts
var arrow3 = __toESM(require("apache-arrow"));
var AsyncDuckDBConnection = class {
  constructor(bindings, conn) {
    this._bindings = bindings;
    this._conn = conn;
  }
  get bindings() {
    return this._bindings;
  }
  async close() {
    return this._bindings.disconnect(this._conn);
  }
  useUnsafe(callback) {
    return callback(this._bindings, this._conn);
  }
  async query(text) {
    this._bindings.logger.log({
      timestamp: new Date(),
      level: 2 /* INFO */,
      origin: 4 /* ASYNC_DUCKDB */,
      topic: 4 /* QUERY */,
      event: 4 /* RUN */,
      value: text
    });
    const buffer = await this._bindings.runQuery(this._conn, text);
    const reader = arrow3.RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new arrow3.Table(reader);
  }
  async send(text) {
    this._bindings.logger.log({
      timestamp: new Date(),
      level: 2 /* INFO */,
      origin: 4 /* ASYNC_DUCKDB */,
      topic: 4 /* QUERY */,
      event: 4 /* RUN */,
      value: text
    });
    const header = await this._bindings.sendQuery(this._conn, text);
    const iter = new AsyncResultStreamIterator(this._bindings, this._conn, header);
    const reader = await arrow3.RecordBatchReader.from(iter);
    console.assert(reader.isAsync());
    console.assert(reader.isStream());
    return reader;
  }
  async getTableNames(query) {
    return await this._bindings.getTableNames(this._conn, query);
  }
  async prepare(text) {
    const stmt = await this._bindings.createPrepared(this._conn, text);
    return new AsyncPreparedStatement(this._bindings, this._conn, stmt);
  }
  async insertArrowTable(table, options) {
    const buffer = arrow3.tableToIPC(table, "stream");
    await this.insertArrowFromIPCStream(buffer, options);
  }
  async insertArrowFromIPCStream(buffer, options) {
    await this._bindings.insertArrowFromIPCStream(this._conn, buffer, options);
  }
  async insertCSVFromPath(text, options) {
    await this._bindings.insertCSVFromPath(this._conn, text, options);
  }
  async insertJSONFromPath(text, options) {
    await this._bindings.insertJSONFromPath(this._conn, text, options);
  }
};
var AsyncResultStreamIterator = class {
  constructor(db2, conn, header) {
    this.db = db2;
    this.conn = conn;
    this.header = header;
    this._first = true;
    this._depleted = false;
    this._inFlight = null;
  }
  async next() {
    if (this._first) {
      this._first = false;
      return { done: false, value: this.header };
    }
    if (this._depleted) {
      return { done: true, value: null };
    }
    let buffer;
    if (this._inFlight != null) {
      buffer = await this._inFlight;
      this._inFlight = null;
    } else {
      buffer = await this.db.fetchQueryResults(this.conn);
    }
    this._depleted = buffer.length == 0;
    if (!this._depleted) {
      this._inFlight = this.db.fetchQueryResults(this.conn);
    }
    return {
      done: this._depleted,
      value: buffer
    };
  }
  [Symbol.asyncIterator]() {
    return this;
  }
};
var AsyncPreparedStatement = class {
  constructor(bindings, connectionId, statementId) {
    this.bindings = bindings;
    this.connectionId = connectionId;
    this.statementId = statementId;
  }
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  async query(...params) {
    const buffer = await this.bindings.runPrepared(this.connectionId, this.statementId, params);
    const reader = arrow3.RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new arrow3.Table(reader);
  }
  async send(...params) {
    const header = await this.bindings.sendPrepared(this.connectionId, this.statementId, params);
    const iter = new AsyncResultStreamIterator(this.bindings, this.connectionId, header);
    const reader = await arrow3.RecordBatchReader.from(iter);
    console.assert(reader.isAsync());
    console.assert(reader.isStream());
    return reader;
  }
};

// src/parallel/worker_request.ts
var WorkerTask = class {
  constructor(type, data) {
    this.promiseResolver = () => {
    };
    this.promiseRejecter = () => {
    };
    this.type = type;
    this.data = data;
    this.promise = new Promise((resolve, reject) => {
      this.promiseResolver = resolve;
      this.promiseRejecter = reject;
    });
  }
};

// src/parallel/async_bindings.ts
var TEXT_ENCODER3 = new TextEncoder();
var AsyncDuckDB = class {
  constructor(logger, worker2 = null) {
    this._onInstantiationProgress = [];
    this._worker = null;
    this._workerShutdownPromise = null;
    this._workerShutdownResolver = () => {
    };
    this._nextMessageId = 0;
    this._pendingRequests = /* @__PURE__ */ new Map();
    this._logger = logger;
    this._onMessageHandler = this.onMessage.bind(this);
    this._onErrorHandler = this.onError.bind(this);
    this._onCloseHandler = this.onClose.bind(this);
    if (worker2 != null)
      this.attach(worker2);
  }
  get logger() {
    return this._logger;
  }
  attach(worker2) {
    this._worker = worker2;
    this._worker.addEventListener("message", this._onMessageHandler);
    this._worker.addEventListener("error", this._onErrorHandler);
    this._worker.addEventListener("close", this._onCloseHandler);
    this._workerShutdownPromise = new Promise((resolve, _reject) => {
      this._workerShutdownResolver = resolve;
    });
  }
  detach() {
    if (!this._worker)
      return;
    this._worker.removeEventListener("message", this._onMessageHandler);
    this._worker.removeEventListener("error", this._onErrorHandler);
    this._worker.removeEventListener("close", this._onCloseHandler);
    this._worker = null;
    this._workerShutdownResolver(null);
    this._workerShutdownPromise = null;
    this._workerShutdownResolver = () => {
    };
  }
  async terminate() {
    if (!this._worker)
      return;
    this._worker.terminate();
    this._worker = null;
    this._workerShutdownPromise = null;
    this._workerShutdownResolver = () => {
    };
  }
  async postTask(task, transfer = []) {
    if (!this._worker) {
      console.error("cannot send a message since the worker is not set!");
      return void 0;
    }
    const mid = this._nextMessageId++;
    this._pendingRequests.set(mid, task);
    this._worker.postMessage({
      messageId: mid,
      type: task.type,
      data: task.data
    }, transfer);
    return await task.promise;
  }
  onMessage(event) {
    const response = event.data;
    switch (response.type) {
      case "LOG" /* LOG */: {
        this._logger.log(response.data);
        return;
      }
      case "INSTANTIATE_PROGRESS" /* INSTANTIATE_PROGRESS */: {
        for (const p of this._onInstantiationProgress) {
          p(response.data);
        }
        return;
      }
    }
    const task = this._pendingRequests.get(response.requestId);
    if (!task) {
      console.warn(`unassociated response: [${response.requestId}, ${response.type.toString()}]`);
      return;
    }
    this._pendingRequests.delete(response.requestId);
    if (response.type == "ERROR" /* ERROR */) {
      const e = new Error(response.data.message);
      e.name = response.data.name;
      e.stack = response.data.stack;
      task.promiseRejecter(e);
      return;
    }
    switch (task.type) {
      case "CLOSE_PREPARED" /* CLOSE_PREPARED */:
      case "COLLECT_FILE_STATISTICS" /* COLLECT_FILE_STATISTICS */:
      case "COPY_FILE_TO_PATH" /* COPY_FILE_TO_PATH */:
      case "DISCONNECT" /* DISCONNECT */:
      case "DROP_FILE" /* DROP_FILE */:
      case "DROP_FILES" /* DROP_FILES */:
      case "FLUSH_FILES" /* FLUSH_FILES */:
      case "INSERT_ARROW_FROM_IPC_STREAM" /* INSERT_ARROW_FROM_IPC_STREAM */:
      case "IMPORT_CSV_FROM_PATH" /* INSERT_CSV_FROM_PATH */:
      case "IMPORT_JSON_FROM_PATH" /* INSERT_JSON_FROM_PATH */:
      case "OPEN" /* OPEN */:
      case "PING" /* PING */:
      case "REGISTER_FILE_BUFFER" /* REGISTER_FILE_BUFFER */:
      case "REGISTER_FILE_HANDLE" /* REGISTER_FILE_HANDLE */:
      case "REGISTER_FILE_URL" /* REGISTER_FILE_URL */:
      case "RESET" /* RESET */:
        if (response.type == "OK" /* OK */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "INSTANTIATE" /* INSTANTIATE */:
        this._onInstantiationProgress = [];
        if (response.type == "OK" /* OK */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "GLOB_FILE_INFOS" /* GLOB_FILE_INFOS */:
        if (response.type == "FILE_INFOS" /* FILE_INFOS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "GET_VERSION" /* GET_VERSION */:
        if (response.type == "VERSION_STRING" /* VERSION_STRING */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "GET_FEATURE_FLAGS" /* GET_FEATURE_FLAGS */:
        if (response.type == "FEATURE_FLAGS" /* FEATURE_FLAGS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "GET_TABLE_NAMES" /* GET_TABLE_NAMES */:
        if (response.type == "TABLE_NAMES" /* TABLE_NAMES */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "TOKENIZE" /* TOKENIZE */:
        if (response.type == "SCRIPT_TOKENS" /* SCRIPT_TOKENS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "COPY_FILE_TO_BUFFER" /* COPY_FILE_TO_BUFFER */:
        if (response.type == "FILE_BUFFER" /* FILE_BUFFER */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "EXPORT_FILE_STATISTICS" /* EXPORT_FILE_STATISTICS */:
        if (response.type == "FILE_STATISTICS" /* FILE_STATISTICS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "CONNECT" /* CONNECT */:
        if (response.type == "CONNECTION_INFO" /* CONNECTION_INFO */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "RUN_PREPARED" /* RUN_PREPARED */:
      case "RUN_QUERY" /* RUN_QUERY */:
        if (response.type == "QUERY_RESULT" /* QUERY_RESULT */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "SEND_PREPARED" /* SEND_PREPARED */:
      case "SEND_QUERY" /* SEND_QUERY */:
        if (response.type == "QUERY_START" /* QUERY_START */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "FETCH_QUERY_RESULTS" /* FETCH_QUERY_RESULTS */:
        if (response.type == "QUERY_RESULT_CHUNK" /* QUERY_RESULT_CHUNK */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "CREATE_PREPARED" /* CREATE_PREPARED */:
        if (response.type == "PREPARED_STATEMENT_ID" /* PREPARED_STATEMENT_ID */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
    }
    task.promiseRejecter(new Error(`unexpected response type: ${response.type.toString()}`));
  }
  onError(event) {
    console.error(event);
    console.error(`error in duckdb worker: ${event.message}`);
    this._pendingRequests.clear();
  }
  onClose() {
    this._workerShutdownResolver(null);
    if (this._pendingRequests.size != 0) {
      console.warn(`worker terminated with ${this._pendingRequests.size} pending requests`);
      return;
    }
    this._pendingRequests.clear();
  }
  async reset() {
    const task = new WorkerTask("RESET" /* RESET */, null);
    return await this.postTask(task);
  }
  async ping() {
    const task = new WorkerTask("PING" /* PING */, null);
    await this.postTask(task);
  }
  async dropFile(name) {
    const task = new WorkerTask("DROP_FILE" /* DROP_FILE */, name);
    return await this.postTask(task);
  }
  async dropFiles() {
    const task = new WorkerTask("DROP_FILES" /* DROP_FILES */, null);
    return await this.postTask(task);
  }
  async flushFiles() {
    const task = new WorkerTask("FLUSH_FILES" /* FLUSH_FILES */, null);
    return await this.postTask(task);
  }
  async instantiate(mainModuleURL, pthreadWorkerURL = null, progress = (_p) => {
  }) {
    this._onInstantiationProgress.push(progress);
    const task = new WorkerTask("INSTANTIATE" /* INSTANTIATE */, [mainModuleURL, pthreadWorkerURL]);
    return await this.postTask(task);
  }
  async getVersion() {
    const task = new WorkerTask("GET_VERSION" /* GET_VERSION */, null);
    const version = await this.postTask(task);
    return version;
  }
  async getFeatureFlags() {
    const task = new WorkerTask("GET_FEATURE_FLAGS" /* GET_FEATURE_FLAGS */, null);
    const feature = await this.postTask(task);
    return feature;
  }
  async open(config) {
    const task = new WorkerTask("OPEN" /* OPEN */, config);
    await this.postTask(task);
  }
  async tokenize(text) {
    const task = new WorkerTask("TOKENIZE" /* TOKENIZE */, text);
    const tokens = await this.postTask(task);
    return tokens;
  }
  async connectInternal() {
    const task = new WorkerTask("CONNECT" /* CONNECT */, null);
    return await this.postTask(task);
  }
  async connect() {
    const cid = await this.connectInternal();
    return new AsyncDuckDBConnection(this, cid);
  }
  async disconnect(conn) {
    const task = new WorkerTask("DISCONNECT" /* DISCONNECT */, conn);
    await this.postTask(task);
  }
  async runQuery(conn, text) {
    const task = new WorkerTask("RUN_QUERY" /* RUN_QUERY */, [conn, text]);
    return await this.postTask(task);
  }
  async sendQuery(conn, text) {
    const task = new WorkerTask("SEND_QUERY" /* SEND_QUERY */, [conn, text]);
    return await this.postTask(task);
  }
  async fetchQueryResults(conn) {
    const task = new WorkerTask("FETCH_QUERY_RESULTS" /* FETCH_QUERY_RESULTS */, conn);
    return await this.postTask(task);
  }
  async getTableNames(conn, text) {
    const task = new WorkerTask("GET_TABLE_NAMES" /* GET_TABLE_NAMES */, [conn, text]);
    return await this.postTask(task);
  }
  async createPrepared(conn, text) {
    const task = new WorkerTask("CREATE_PREPARED" /* CREATE_PREPARED */, [conn, text]);
    return await this.postTask(task);
  }
  async closePrepared(conn, statement) {
    const task = new WorkerTask("CLOSE_PREPARED" /* CLOSE_PREPARED */, [conn, statement]);
    await this.postTask(task);
  }
  async runPrepared(conn, statement, params) {
    const task = new WorkerTask("RUN_PREPARED" /* RUN_PREPARED */, [conn, statement, params]);
    return await this.postTask(task);
  }
  async sendPrepared(conn, statement, params) {
    const task = new WorkerTask("SEND_PREPARED" /* SEND_PREPARED */, [conn, statement, params]);
    return await this.postTask(task);
  }
  async globFiles(path2) {
    const task = new WorkerTask("GLOB_FILE_INFOS" /* GLOB_FILE_INFOS */, path2);
    return await this.postTask(task);
  }
  async registerFileText(name, text) {
    const buffer = TEXT_ENCODER3.encode(text);
    await this.registerFileBuffer(name, buffer);
  }
  async registerFileURL(name, url) {
    if (url === void 0) {
      url = name;
    }
    const task = new WorkerTask("REGISTER_FILE_URL" /* REGISTER_FILE_URL */, [name, url]);
    await this.postTask(task);
  }
  async registerEmptyFileBuffer(name) {
    const task = new WorkerTask("REGISTER_FILE_BUFFER" /* REGISTER_FILE_BUFFER */, [name, new Uint8Array()]);
    await this.postTask(task);
  }
  async registerFileBuffer(name, buffer) {
    const task = new WorkerTask("REGISTER_FILE_BUFFER" /* REGISTER_FILE_BUFFER */, [name, buffer]);
    await this.postTask(task, [buffer.buffer]);
  }
  async registerFileHandle(name, handle) {
    const task = new WorkerTask("REGISTER_FILE_HANDLE" /* REGISTER_FILE_HANDLE */, [name, handle]);
    await this.postTask(task, []);
  }
  async collectFileStatistics(name, enable) {
    const task = new WorkerTask("COLLECT_FILE_STATISTICS" /* COLLECT_FILE_STATISTICS */, [name, enable]);
    await this.postTask(task, []);
  }
  async exportFileStatistics(name) {
    const task = new WorkerTask("EXPORT_FILE_STATISTICS" /* EXPORT_FILE_STATISTICS */, name);
    return await this.postTask(task, []);
  }
  async copyFileToBuffer(name) {
    const task = new WorkerTask("COPY_FILE_TO_BUFFER" /* COPY_FILE_TO_BUFFER */, name);
    return await this.postTask(task);
  }
  async copyFileToPath(name, path2) {
    const task = new WorkerTask("COPY_FILE_TO_PATH" /* COPY_FILE_TO_PATH */, [name, path2]);
    await this.postTask(task);
  }
  async insertArrowFromIPCStream(conn, buffer, options) {
    if (buffer.length == 0)
      return;
    const task = new WorkerTask("INSERT_ARROW_FROM_IPC_STREAM" /* INSERT_ARROW_FROM_IPC_STREAM */, [conn, buffer, options]);
    await this.postTask(task, [buffer.buffer]);
  }
  async insertCSVFromPath(conn, path2, options) {
    if (options.columns !== void 0) {
      const out = [];
      for (const k in options.columns) {
        const type = options.columns[k];
        out.push(arrowToSQLField(k, type));
      }
      options.columnsFlat = out;
      delete options.columns;
    }
    const task = new WorkerTask("IMPORT_CSV_FROM_PATH" /* INSERT_CSV_FROM_PATH */, [conn, path2, options]);
    await this.postTask(task);
  }
  async insertJSONFromPath(conn, path2, options) {
    if (options.columns !== void 0) {
      const out = [];
      for (const k in options.columns) {
        const type = options.columns[k];
        out.push(arrowToSQLField(k, type));
      }
      options.columnsFlat = out;
      delete options.columns;
    }
    const task = new WorkerTask("IMPORT_JSON_FROM_PATH" /* INSERT_JSON_FROM_PATH */, [conn, path2, options]);
    await this.postTask(task);
  }
};

// test/index_node.ts
var import_path = __toESM(require("path"));
var import_web_worker = __toESM(require("web-worker"));
var import_fs3 = __toESM(require("fs"));

// test/all_types.test.ts
var import_apache_arrow = require("apache-arrow");
var MAX_INTERVAL_US = (((83 * (12 * 30) + 3 * 30 + 999) * 24 * 60 + 16) * 60 + 39) * 1e6 + 999e3;
var MINIMUM_DATE_STR = "-271821-04-20";
var MINIMUM_DATE = new Date(Date.UTC(-271821, 3, 20));
var MAXIMUM_DATE_STR = "275760-09-13";
var MAXIMUM_DATE = new Date(Date.UTC(275760, 8, 13));
var NOT_IMPLEMENTED_TYPES = [
  "timestamp_s",
  "timestamp_ms",
  "timestamp_ns",
  "timestamp_tz",
  "hugeint",
  "dec_18_6",
  "dec38_10",
  "uuid",
  "map"
];
var PARTIALLY_IMPLEMENTED_TYPES = ["date", "timestamp"];
var PARTIALLY_IMPLEMENTED_ANSWER_MAP = {
  date: [MINIMUM_DATE.valueOf(), MAXIMUM_DATE.valueOf(), null],
  timestamp: [MINIMUM_DATE.valueOf(), MAXIMUM_DATE.valueOf(), null]
};
var PARTIALLY_IMPLEMENTED_TYPES_SUBSTITUTIONS = [
  `(SELECT array_extract(['${MINIMUM_DATE_STR}'::Date,'${MAXIMUM_DATE_STR}'::Date,null],i)) as date`,
  `(SELECT array_extract(['${MINIMUM_DATE_STR}'::Timestamp,'${MAXIMUM_DATE_STR}'::Timestamp,null],i)) as timestamp`
];
var TYPES_REQUIRING_CUSTOM_CONFIG = ["dec_4_1", "dec_9_4"];
var FULLY_IMPLEMENTED_ANSWER_MAP = {
  bool: [false, true, null],
  tinyint: [-128, 127, null],
  smallint: [-32768, 32767, null],
  int: [-2147483648, 2147483647, null],
  utinyint: [0, 255, null],
  usmallint: [0, 65535, null],
  uint: [0, 4294967295, null],
  ubigint: [BigInt(0), BigInt("18446744073709551615"), null],
  bigint: [BigInt("-9223372036854775808"), BigInt("9223372036854775807"), null],
  time: [BigInt(0), BigInt(new Date("1970-01-01T23:59:59.999+00:00").valueOf()) * BigInt(1e3) + BigInt(999), null],
  time_tz: [
    BigInt(0),
    BigInt(new Date("1970-01-01T23:59:59.999+00:00").valueOf()) * BigInt(1e3) + BigInt(999),
    null
  ],
  interval: [BigInt(0), BigInt(MAX_INTERVAL_US), null],
  float: [-34028234663852886e22, 34028234663852886e22, null],
  double: [-17976931348623157e292, 17976931348623157e292, null],
  varchar: ["\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}", "goose", null],
  small_enum: ["DUCK_DUCK_ENUM", "GOOSE", null],
  medium_enum: ["enum_0", "enum_299", null],
  large_enum: ["enum_0", "enum_69999", null],
  int_array: [[], [42, 999, null, null, -42], null],
  varchar_array: [[], ["\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}", "goose", null, ""], null],
  nested_int_array: [[], [[], [42, 999, null, null, -42], null, [], [42, 999, null, null, -42]], null],
  struct: ['{"a":null,"b":null}', '{"a":42,"b":"\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}"}', null],
  struct_of_arrays: [
    '{"a":null,"b":null}',
    '{"a":[42,999,null,null,-42],"b":["\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}","goose",null,""]}',
    null
  ],
  array_of_structs: [[], ['{"a":null,"b":null}', '{"a":42,"b":"\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}"}', null], null],
  blob: [
    Uint8Array.from([
      116,
      104,
      105,
      115,
      105,
      115,
      97,
      108,
      111,
      110,
      103,
      98,
      108,
      111,
      98,
      0,
      119,
      105,
      116,
      104,
      110,
      117,
      108,
      108,
      98,
      121,
      116,
      101,
      115
    ]),
    Uint8Array.from([92, 120, 48, 48, 92, 120, 48, 48, 92, 120, 48, 48, 97]),
    null
  ]
};
var REPLACE_COLUMNS = PARTIALLY_IMPLEMENTED_TYPES.concat(NOT_IMPLEMENTED_TYPES).concat(TYPES_REQUIRING_CUSTOM_CONFIG);
function unpack(v) {
  if (v === null)
    return null;
  if (v instanceof import_apache_arrow.Vector) {
    const ret = Array.from(v.toArray());
    for (let i = 0; i < ret.length; i++) {
      if (!v.isValid(i)) {
        ret[i] = null;
      }
    }
    return unpack(ret);
  } else if (v instanceof Array) {
    const ret = [];
    for (let i = 0; i < v.length; i++) {
      ret[i] = unpack(v[i]);
    }
    return ret;
  } else if (v instanceof Uint8Array) {
    return v;
  } else if (v instanceof Object) {
    return JSON.stringify(v.toJSON());
  }
  return v;
}
function getValue(x) {
  if (typeof (x == null ? void 0 : x.valueOf) === "function") {
    return x.valueOf();
  } else {
    return x;
  }
}
var ALL_TYPES_TEST = [
  {
    name: "fully supported types",
    query: `SELECT * REPLACE('not_implemented' as map) FROM test_all_types()`,
    skip: REPLACE_COLUMNS,
    answerMap: FULLY_IMPLEMENTED_ANSWER_MAP,
    answerCount: REPLACE_COLUMNS.length + Object.keys(FULLY_IMPLEMENTED_ANSWER_MAP).length,
    queryConfig: null
  },
  {
    name: "partially supported types",
    query: `SELECT ${PARTIALLY_IMPLEMENTED_TYPES_SUBSTITUTIONS.join(", ")}
                FROM range(0, 3) tbl(i)`,
    skip: [],
    answerMap: PARTIALLY_IMPLEMENTED_ANSWER_MAP,
    answerCount: PARTIALLY_IMPLEMENTED_TYPES.length,
    queryConfig: null
  },
  {
    name: "types with custom config",
    query: `SELECT ${TYPES_REQUIRING_CUSTOM_CONFIG.join(",")} FROM test_all_types()`,
    skip: [],
    answerMap: {
      dec_4_1: [-999.9000000000001, 999.9000000000001, null],
      dec_9_4: [-99999.99990000001, 99999.99990000001, null]
    },
    answerCount: TYPES_REQUIRING_CUSTOM_CONFIG.length,
    queryConfig: {
      castDecimalToDouble: true
    }
  }
];
function testAllTypes(db2) {
  let conn;
  beforeEach(() => {
    db2().flushFiles();
  });
  afterEach(() => {
    if (conn) {
      conn.close();
      conn = null;
    }
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("Test All Types", () => {
    for (const test of ALL_TYPES_TEST) {
      it(test.name, () => {
        if (test.queryConfig)
          db2().open({ query: test.queryConfig });
        conn = db2().connect();
        const results = conn.query(test.query);
        expect(results.numCols).toEqual(test.answerCount);
        const skip = /* @__PURE__ */ new Map();
        for (const s of test.skip) {
          skip.set(s, true);
        }
        for (let i = 0; i < results.numCols; i++) {
          const name = results.schema.fields[i].name;
          const col = results.getChildAt(i);
          if (skip.get(name))
            continue;
          expect(col).not.toBeNull();
          expect(col == null ? void 0 : col.length).not.toEqual(0);
          expect(unpack(getValue(col.get(0)))).withContext(name).toEqual(test.answerMap[name][0]);
          expect(unpack(getValue(col.get(1)))).withContext(name).toEqual(test.answerMap[name][1]);
          expect(col.get(2)).toEqual(test.answerMap[name][2]);
        }
      });
    }
  });
}
function testAllTypesAsync(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("Test All Types Async", () => {
    for (const test of ALL_TYPES_TEST) {
      it(test.name, async () => {
        if (test.queryConfig)
          db2().open({ query: test.queryConfig });
        conn = await db2().connect();
        const results = await conn.query(test.query);
        expect(results.numCols).toEqual(test.answerCount);
        const skip = /* @__PURE__ */ new Map();
        for (const s of test.skip) {
          skip.set(s, true);
        }
        for (let i = 0; i < results.numCols; i++) {
          const name = results.schema.fields[i].name;
          const col = results.getChildAt(i);
          if (skip.get(name))
            continue;
          expect(col).not.toBeNull();
          expect(col == null ? void 0 : col.length).not.toEqual(0);
          expect(Object.keys(test.answerMap)).toContain(name);
          expect(unpack(getValue(col.get(0)))).withContext(name).toEqual(test.answerMap[name][0]);
          expect(unpack(getValue(col.get(1)))).withContext(name).toEqual(test.answerMap[name][1]);
          expect(col.get(2)).toEqual(test.answerMap[name][2]);
        }
      });
    }
  });
}

// test/bindings.test.ts
var arrow4 = __toESM(require("apache-arrow"));
function testBindings(db2, baseURL) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("DuckDBBindings", () => {
    describe("error handling", () => {
      it("INVALID SQL", async () => {
        let error = null;
        try {
          conn.send("INVALID");
        } catch (e) {
          error = e;
        }
        expect(error).not.toBe(null);
      });
    });
    describe("Reset", () => {
      it("table must disappear", async () => {
        var _a;
        await db2().reset();
        conn = db2().connect();
        conn.query("CREATE TABLE foo (a int)");
        let table = conn.query("PRAGMA show_tables;");
        let rows = table.toArray();
        expect(rows.length).toEqual(1);
        expect((_a = rows[0]) == null ? void 0 : _a.name).toEqual("foo");
        await db2().reset();
        conn = db2().connect();
        table = conn.query("PRAGMA show_tables;");
        rows = table.toArray();
        expect(rows.length).toEqual(0);
      });
    });
    describe("Prepared Statement", () => {
      it("Materialized", async () => {
        const stmt = conn.prepare("SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);");
        const result = stmt.query(234);
        expect(result.numRows).toBe(10001);
        stmt.close();
      });
      it("Streaming", async () => {
        const stmt = conn.prepare("SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);");
        const stream = stmt.send(234);
        let size = 0;
        for (const batch of stream) {
          size += batch.numRows;
        }
        expect(size).toBe(10001);
        conn.close();
      });
      it("Typecheck", async () => {
        conn.query(`CREATE TABLE typecheck (
                    a BOOLEAN DEFAULT NULL,
                    b TINYINT DEFAULT NULL,
                    c SMALLINT DEFAULT NULL,
                    d INTEGER DEFAULT NULL,
                    e BIGINT DEFAULT NULL,
                    f FLOAT DEFAULT NULL,
                    g DOUBLE DEFAULT NULL,
                    h CHAR(11) DEFAULT NULL,
                    i VARCHAR(11) DEFAULT NULL
                )`);
        const stmt = conn.prepare("INSERT INTO typecheck VALUES(?,?,?,?,?,?,?,?,?)");
        expect(() => stmt.query(true, 100, 1e4, 1e6, 5e9, 0.5, Math.PI, "hello world", "hi")).not.toThrow();
        expect(() => stmt.query("test", 100, 1e4, 1e6, 5e9, 0.5, Math.PI, "hello world", "hi")).toThrow();
        expect(() => stmt.query(true, 1e4, 1e4, 1e6, 5e9, 0.5, Math.PI, "hello world", "hi")).toThrow();
        expect(() => stmt.query(true, 100, 1e6, 1e6, 5e9, 0.5, Math.PI, "hello world", "hi")).toThrow();
        expect(() => stmt.query(true, 100, 1e4, 5e9, 5e9, 0.5, Math.PI, "hello world", "hi")).toThrow();
        conn.close();
      });
    });
  });
}
function testAsyncBindings(adb2, baseURL) {
  beforeEach(async () => {
  });
  afterEach(async () => {
    await adb2().flushFiles();
    await adb2().dropFiles();
    await adb2().open({
      path: ":memory:"
    });
  });
  describe("Bindings", () => {
    describe("Open", () => {
      it("Remote TPCH 0_01", async () => {
        var _a;
        await adb2().registerFileURL("tpch_0_01.db", `${baseURL}/tpch/0_01/duckdb/db`);
        await adb2().open({
          path: "tpch_0_01.db"
        });
        const conn = await adb2().connect();
        const table = await conn.query("select count(*)::INTEGER as a from lineitem");
        const rows = table.toArray();
        expect(rows.length).toEqual(1);
        expect((_a = rows[0]) == null ? void 0 : _a.a).toEqual(60175);
      });
    });
    describe("Patching", () => {
      it("Count(*) Default", async () => {
        await adb2().open({
          path: ":memory:",
          query: {
            castBigIntToDouble: false
          }
        });
        const conn = await adb2().connect();
        const table = await conn.query("select 1::BIGINT");
        expect(table.schema.fields.length).toEqual(1);
        expect(table.schema.fields[0].typeId).toEqual(arrow4.Type.Int);
      });
      it("Count(*) No BigInt", async () => {
        await adb2().open({
          path: ":memory:",
          query: {
            castBigIntToDouble: true
          }
        });
        const conn = await adb2().connect();
        const table = await conn.query("select 1::BIGINT");
        expect(table.schema.fields.length).toEqual(1);
        expect(table.schema.fields[0].typeId).toEqual(arrow4.Type.Float);
      });
    });
    describe("Prepared Statement", () => {
      it("Materialized", async () => {
        const conn = await adb2().connect();
        const stmt = await conn.prepare("SELECT v + ? FROM generate_series(0, 10000) as t(v);");
        const result = await stmt.query(234);
        expect(result.numRows).toBe(10001);
        await stmt.close();
      });
      it("Streaming", async () => {
        const conn = await adb2().connect();
        const stmt = await conn.prepare("SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);");
        const stream = await stmt.send(234);
        let size = 0;
        for await (const batch of stream) {
          size += batch.numRows;
        }
        expect(size).toBe(10001);
        await conn.close();
      });
      it("Typecheck", async () => {
        const conn = await adb2().connect();
        await conn.query(`CREATE TABLE typecheck (
                    a BOOLEAN DEFAULT NULL,
                    b TINYINT DEFAULT NULL,
                    c SMALLINT DEFAULT NULL,
                    d INTEGER DEFAULT NULL,
                    e BIGINT DEFAULT NULL,
                    f FLOAT DEFAULT NULL,
                    g DOUBLE DEFAULT NULL,
                    h CHAR(11) DEFAULT NULL,
                    i VARCHAR(11) DEFAULT NULL
                )`);
        const stmt = await conn.prepare("INSERT INTO typecheck VALUES(?,?,?,?,?,?,?,?,?)");
        const expectToThrow = async (fn) => {
          let throwed = false;
          try {
            await fn();
          } catch (e) {
            throwed = true;
          }
          expect(throwed).toBe(true);
        };
        expectToThrow(async () => {
          await stmt.query("test", 100, 1e4, 1e6, 5e9, 0.5, Math.PI, "hello world", "hi");
        });
        expectToThrow(async () => {
          await stmt.query(true, 1e4, 1e4, 1e6, 5e9, 0.5, Math.PI, "hello world", "hi");
        });
        expectToThrow(async () => {
          await stmt.query(true, 100, 1e6, 1e6, 5e9, 0.5, Math.PI, "hello world", "hi");
        });
        expectToThrow(async () => {
          await stmt.query(true, 100, 1e4, 5e9, 5e9, 0.5, Math.PI, "hello world", "hi");
        });
        await conn.close();
      });
    });
  });
}

// test/batch_stream.test.ts
var testRows = 1e4;
function testBatchStream(db2) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("Arrow Record-Batches Row-Major", () => {
    describe("single column", () => {
      it("TINYINT", () => {
        const result = conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(i++ & 127);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("SMALLINT", () => {
        const result = conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(i++ & 32767);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("INTEGER", () => {
        const result = conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(i++);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("BIGINT", () => {
        const result = conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(BigInt(i++));
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("STRING", () => {
        const result = conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(String(i++));
          }
        }
        expect(i).toBe(testRows + 1);
      });
    });
  });
  describe("Arrow Record-Batches Column-Major", () => {
    describe("single column", () => {
      it("TINYINT", () => {
        const result = conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 127);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("SMALLINT", () => {
        const result = conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 32767);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("INTEGER", () => {
        const result = conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("BIGINT", () => {
        const result = conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(BigInt(i++));
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("STRING", () => {
        const result = conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(String(i++));
          }
        }
        expect(i).toBe(testRows + 1);
      });
    });
  });
  describe("Arrow Table Row-Major", () => {
    describe("single column", () => {
      it("TINYINT", () => {
        const table = conn.query(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++ & 127);
        }
        expect(i).toBe(testRows + 1);
      });
      it("SMALLINT", () => {
        const table = conn.query(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++ & 32767);
        }
        expect(i).toBe(testRows + 1);
      });
      it("INTEGER", () => {
        const table = conn.query(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++);
        }
        expect(i).toBe(testRows + 1);
      });
      it("BIGINT", () => {
        const table = conn.query(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(BigInt(i++));
        }
        expect(i).toBe(testRows + 1);
      });
      it("STRING", () => {
        const table = conn.query(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v.valueOf()).toBe(String(i++));
        }
        expect(i).toBe(testRows + 1);
      });
    });
  });
  describe("Arrow Table Column-Major", () => {
    describe("single column", () => {
      it("TINYINT", () => {
        const table = conn.query(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++ & 127);
        }
        expect(i).toBe(testRows + 1);
      });
      it("SMALLINT", () => {
        const table = conn.query(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++ & 32767);
        }
        expect(i).toBe(testRows + 1);
      });
      it("INTEGER", () => {
        const table = conn.query(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++);
        }
        expect(i).toBe(testRows + 1);
      });
      it("BIGINT", () => {
        const table = conn.query(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(BigInt(i++));
        }
        expect(i).toBe(testRows + 1);
      });
      it("STRING", () => {
        const table = conn.query(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(String(i++));
        }
        expect(i).toBe(testRows + 1);
      });
    });
  });
}

// test/filesystem.test.ts
var arrow5 = __toESM(require("apache-arrow"));
var decoder = new TextDecoder();
function testFilesystem(db2, resolveData2, baseDir) {
  let conn;
  beforeEach(async () => {
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("File buffer registration", () => {
    const test = async () => {
      var _a;
      const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555]));
    };
    it("File buffer used once", async () => {
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await test();
    });
    it("File buffer registered twice", async () => {
      const students0 = await resolveData2("/uni/studenten.parquet");
      const students1 = await resolveData2("/uni/studenten.parquet");
      expect(students0).not.toBeNull();
      expect(students1).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students0);
      await test();
      await db2().registerFileBuffer("studenten.parquet", students1);
      await test();
    });
    it("File buffer used twice", async () => {
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await test();
      await test();
    });
  });
  describe("Parquet Scans", () => {
    it("single table from buffer", async () => {
      var _a;
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555]));
    });
    it("simple join", async () => {
      var _a;
      const students = await resolveData2("/uni/studenten.parquet");
      const hoeren = await resolveData2("/uni/hoeren.parquet");
      const vorlesungen = await resolveData2("/uni/vorlesungen.parquet");
      expect(students).not.toBeNull();
      expect(hoeren).not.toBeNull();
      expect(vorlesungen).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await db2().registerFileBuffer("hoeren.parquet", hoeren);
      await db2().registerFileBuffer("vorlesungen.parquet", vorlesungen);
      const result = await conn.send(`
                    SELECT students.matrnr, vorlesungen.titel
                    FROM parquet_scan('studenten.parquet') students
                    INNER JOIN parquet_scan('hoeren.parquet') hoeren ON (students.matrnr = hoeren.matrnr)
                    INNER JOIN parquet_scan('vorlesungen.parquet') vorlesungen ON (vorlesungen.vorlnr = hoeren.vorlnr);
                `);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect(table.numCols).toBe(2);
      const flat = [];
      for (const row of table) {
        flat.push({
          matrnr: row == null ? void 0 : row.matrnr,
          titel: (_a = row == null ? void 0 : row.titel) == null ? void 0 : _a.toString()
        });
      }
      expect(flat).toEqual([
        { matrnr: 26120, titel: "Grundz\xFCge" },
        { matrnr: 27550, titel: "Grundz\xFCge" },
        { matrnr: 27550, titel: "Logik" },
        { matrnr: 28106, titel: "Ethik" },
        { matrnr: 28106, titel: "Wissenschaftstheorie" },
        { matrnr: 28106, titel: "Bioethik" },
        { matrnr: 28106, titel: "Der Wiener Kreis" },
        { matrnr: 29120, titel: "Grundz\xFCge" },
        { matrnr: 29120, titel: "Ethik" },
        { matrnr: 29120, titel: "M\xE4eutik" },
        { matrnr: 29555, titel: "Glaube und Wissen" },
        { matrnr: 25403, titel: "Glaube und Wissen" }
      ]);
    });
  });
  describe("Writing", () => {
    it("Copy To CSV Buffer", async () => {
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await db2().registerEmptyFileBuffer("students.csv");
      await conn.query(`CREATE TABLE students AS SELECT * FROM parquet_scan('studenten.parquet');`);
      await conn.query(`COPY students TO 'students.csv' WITH (HEADER 1, DELIMITER ';', FORMAT CSV);`);
      await conn.query(`DROP TABLE IF EXISTS students`);
      const outBuffer = await db2().copyFileToBuffer("students.csv");
      expect(outBuffer).not.toBeNull();
      const text = decoder.decode(outBuffer);
      expect(text).toBe(`matrnr;name;semester
24002;Xenokrates;18
25403;Jonas;12
26120;Fichte;10
26830;Aristoxenos;8
27550;Schopenhauer;6
28106;Carnap;3
29120;Theophrastos;2
29555;Feuerbach;2
`);
    });
    it("Copy To Parquet", async () => {
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await db2().registerEmptyFileBuffer("students2.parquet");
      await conn.query(`CREATE TABLE students2 AS SELECT * FROM parquet_scan('studenten.parquet');`);
      await conn.query(`COPY students2 TO 'students2.parquet' (FORMAT PARQUET);`);
      const url = await db2().copyFileToBuffer("students2.parquet");
      expect(url).not.toBeNull();
    });
    it("Copy To Parquet And Load Again", async () => {
      var _a;
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await db2().registerEmptyFileBuffer("students3.parquet");
      await conn.query(`CREATE TABLE students3 AS SELECT * FROM parquet_scan('studenten.parquet');`);
      await conn.query(`COPY students3 TO 'students3.parquet' (FORMAT PARQUET);`);
      const url = await db2().copyFileToBuffer("students3.parquet");
      expect(url).not.toBeNull();
      await conn.query(`CREATE TABLE students4 AS SELECT * FROM parquet_scan('students3.parquet');`);
      const result = await conn.send(`SELECT matrnr FROM students4;`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555]));
    });
  });
  describe("File access", () => {
    it("Small Parquet file", async () => {
      var _a;
      await db2().registerFileURL("studenten.parquet", `${baseDir}/uni/studenten.parquet`);
      const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555]));
    });
    it("Large Parquet file", async () => {
      var _a;
      await db2().registerFileURL("lineitem.parquet", `${baseDir}/tpch/0_01/parquet/lineitem.parquet`);
      const result = await conn.send(`SELECT count(*)::INTEGER as cnt FROM parquet_scan('lineitem.parquet');`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.get(0)).toBeGreaterThan(6e4);
    });
  });
  describe("Export", () => {
    it("Generate Series as CSV", async () => {
      await conn.query("CREATE TABLE foo AS SELECT * FROM generate_series(1, 5) t(v)");
      await conn.query(`EXPORT DATABASE '/tmp/duckdbexportcsv'`);
      const results = await db2().globFiles("/tmp/duckdbexportcsv/*");
      expect(results).not.toEqual([]);
      expect(results.length).toEqual(3);
      const filenames = results.map((file) => file.fileName).sort();
      expect(filenames).toEqual([
        "/tmp/duckdbexportcsv/0_foo.csv",
        "/tmp/duckdbexportcsv/load.sql",
        "/tmp/duckdbexportcsv/schema.sql"
      ]);
      const csv_buffer_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportcsv/0_foo.csv");
      const load_script_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportcsv/load.sql");
      const schema_script_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportcsv/schema.sql");
      expect(load_script_utf8.length).not.toEqual(0);
      expect(schema_script_utf8.length).not.toEqual(0);
      expect(csv_buffer_utf8.length).not.toEqual(0);
      const load_script = decoder.decode(load_script_utf8);
      const schema_script = decoder.decode(schema_script_utf8);
      const csv_buffer = decoder.decode(csv_buffer_utf8);
      expect(load_script.trim()).toEqual(`COPY foo FROM '/tmp/duckdbexportcsv/0_foo.csv' (FORMAT 'csv', quote '"', delimiter ',', header 0);`);
      expect(schema_script.trim()).toEqual(`CREATE TABLE foo(v BIGINT);`);
      expect(csv_buffer.trim()).toEqual(`1
2
3
4
5`);
    });
    it("Generate Series as Parquet", async () => {
      var _a;
      await conn.query("CREATE TABLE foo AS SELECT * FROM generate_series(1, 5) t(v)");
      await conn.query(`EXPORT DATABASE '/tmp/duckdbexportparquet' (FORMAT PARQUET)`);
      const results = await db2().globFiles("/tmp/duckdbexportparquet/*");
      expect(results).not.toEqual([]);
      expect(results.length).toEqual(3);
      const filenames = results.map((file) => file.fileName).sort();
      expect(filenames).toEqual([
        "/tmp/duckdbexportparquet/0_foo.parquet",
        "/tmp/duckdbexportparquet/load.sql",
        "/tmp/duckdbexportparquet/schema.sql"
      ]);
      const parquet_buffer = await db2().copyFileToBuffer("/tmp/duckdbexportparquet/0_foo.parquet");
      const load_script_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportparquet/load.sql");
      const schema_script_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportparquet/schema.sql");
      expect(load_script_utf8.length).not.toEqual(0);
      expect(schema_script_utf8.length).not.toEqual(0);
      expect(parquet_buffer.length).not.toEqual(0);
      const content = await conn.query(`SELECT v::integer FROM parquet_scan('/tmp/duckdbexportparquet/0_foo.parquet')`);
      expect(content.nullCount).toEqual(0);
      expect(content.numRows).toEqual(5);
      expect((_a = content.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([1, 2, 3, 4, 5]));
    });
  });
  describe("Copy", () => {
    it("Generate Series as Parquet", async () => {
      var _a;
      await conn.query(`COPY (SELECT * FROM generate_series(1, 5) t(v)) TO '/tmp/duckdbcopytest.parquet' (FORMAT 'parquet')`);
      const results = await db2().globFiles("/tmp/duckdbcopytest*");
      expect(results).not.toEqual([]);
      expect(results.length).toEqual(1);
      const filenames = results.map((file) => file.fileName).sort();
      expect(filenames).toEqual(["/tmp/duckdbcopytest.parquet"]);
      const parquet_buffer = await db2().copyFileToBuffer("/tmp/duckdbcopytest.parquet");
      expect(parquet_buffer.length).not.toEqual(0);
      const content = await conn.query(`SELECT v::integer FROM parquet_scan('/tmp/duckdbcopytest.parquet')`);
      expect(content.numRows).toEqual(5);
      expect((_a = content.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([1, 2, 3, 4, 5]));
    });
  });
}

// test/batch_stream_async.test.ts
var testRows2 = 1e4;
function testAsyncBatchStream(db2) {
  let conn;
  beforeEach(async () => {
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("AsyncDuckDB", () => {
    it("ping", async () => {
      await db2().ping();
    });
  });
  describe("Arrow Record-Batches Row-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(i++ & 127);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("SMALLINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 32767);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("INTEGER", async () => {
        const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("BIGINT", async () => {
        const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(BigInt(i++));
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("STRING", async () => {
        const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(String(i++));
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
    describe("scripts", () => {
      it("test1", async () => {
        const result = await conn.send(`
                    SELECT v::INTEGER AS x, (sin(v) * 100 + 100)::INTEGER AS y FROM generate_series(0, ${testRows2}) as t(v)
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(2);
          for (const row of batch) {
            expect(row.x).toBe(i++);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
  });
  describe("Arrow Record-Batches Column-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 127);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("SMALLINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 32767);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("INTEGER", async () => {
        const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("BIGINT", async () => {
        const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(BigInt(i++));
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("STRING", async () => {
        const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(String(i++));
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
  });
  describe("Arrow Table Row-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const table = await conn.query(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++ & 127);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("SMALLINT", async () => {
        const table = await conn.query(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++ & 32767);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("INTEGER", async () => {
        const table = await conn.query(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("BIGINT", async () => {
        const table = await conn.query(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(BigInt(i++));
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("STRING", async () => {
        const table = await conn.query(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v.valueOf()).toBe(String(i++));
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
  });
  describe("Arrow Table Column-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const table = await conn.query(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++ & 127);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("SMALLINT", async () => {
        const table = await conn.query(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++ & 32767);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("INTEGER", async () => {
        const table = await conn.query(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("BIGINT", async () => {
        const table = await conn.query(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(BigInt(i++));
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("STRING", async () => {
        const table = await conn.query(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(String(i++));
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
  });
}

// test/insert_arrow.test.ts
var arrow6 = __toESM(require("apache-arrow"));

// test/table_test.ts
function compareTable(table, expected) {
  var _a, _b;
  const colCount = expected.length;
  expect(table.numCols).toEqual(colCount);
  if (colCount == 0)
    return;
  const rowCount = expected[0].values.length;
  for (let i = 0; i < colCount; ++i) {
    expect(expected[i].values.length).toEqual(rowCount);
    expect((_a = table.getChildAt(i)) == null ? void 0 : _a.length).toEqual(rowCount);
    expect((_b = table.schema.fields[i]) == null ? void 0 : _b.name).toEqual(expected[i].name);
  }
  for (let i = 0; i < colCount; ++i) {
    const col = table.getChildAt(i);
    const have = [];
    for (let j = 0; j < rowCount; ++j) {
      have.push(col.get(j));
    }
    expect(have).toEqual(expected[i].values);
  }
}

// test/insert_arrow.test.ts
var buildUtf8Array = (values) => {
  const builder = new arrow6.Utf8Builder({
    type: new arrow6.Utf8()
  });
  for (const v of values) {
    builder.append(v);
  }
  builder.finish();
  return builder.flush();
};
var ARROW_INSERT_TESTS = [
  {
    name: "integers_1",
    schema: new arrow6.Schema([
      new arrow6.Field("a", new arrow6.Int32()),
      new arrow6.Field("b", new arrow6.Int32()),
      new arrow6.Field("c", new arrow6.Int32())
    ]),
    batches: [
      {
        numRows: 3,
        columns: [
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([1, 4, 7]) }),
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([2, 5, 8]) }),
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([3, 6, 9]) })
        ]
      }
    ],
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "combined_1",
    schema: new arrow6.Schema([
      new arrow6.Field("a", new arrow6.Int32()),
      new arrow6.Field("b", new arrow6.Int16()),
      new arrow6.Field("c", new arrow6.Utf8())
    ]),
    batches: [
      {
        numRows: 3,
        columns: [
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([1, 4, 7]) }),
          arrow6.makeData({ type: new arrow6.Int16(), data: new Int16Array([2, 5, 8]) }),
          buildUtf8Array(["3", "6", "9"])
        ]
      }
    ],
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: ["3", "6", "9"] }
    ]
  },
  {
    name: "combined_2",
    schema: new arrow6.Schema([
      new arrow6.Field("a", new arrow6.Int32()),
      new arrow6.Field("b", new arrow6.Int16()),
      new arrow6.Field("c", new arrow6.Utf8())
    ]),
    batches: [
      {
        numRows: 3,
        columns: [
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([1, 4, 7]) }),
          arrow6.makeData({ type: new arrow6.Int16(), data: new Int16Array([2, 5, 8]) }),
          buildUtf8Array(["3", "6", "9"])
        ]
      },
      {
        numRows: 2,
        columns: [
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([10, 13]) }),
          arrow6.makeData({ type: new arrow6.Int16(), data: new Int16Array([11, 14]) }),
          buildUtf8Array(["12", "15"])
        ]
      }
    ],
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7, 10, 13] },
      { name: "b", values: [2, 5, 8, 11, 14] },
      { name: "c", values: ["3", "6", "9", "12", "15"] }
    ]
  }
];
function testArrowInsert(db2) {
  let conn;
  beforeEach(async () => {
    db2().flushFiles();
    conn = db2().connect();
  });
  afterEach(async () => {
    conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("Arrow insert from iterable", () => {
    for (const test of ARROW_INSERT_TESTS) {
      it(test.name, () => {
        conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const batches = test.batches.map((b) => {
          const data = arrow6.makeData({
            type: new arrow6.Struct(test.schema.fields),
            children: b.columns
          });
          return new arrow6.RecordBatch(test.schema, data);
        });
        const table = new arrow6.Table(test.schema, batches);
        conn.insertArrowTable(table, test.options);
        const results = conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}
function testArrowInsertAsync(db2) {
  let conn;
  beforeEach(async () => {
    await db2().flushFiles();
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("Arrow async insert from iterable", () => {
    for (const test of ARROW_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const batches = test.batches.map((b) => {
          const data = arrow6.makeData({
            type: new arrow6.Struct(test.schema.fields),
            children: b.columns
          });
          return new arrow6.RecordBatch(test.schema, data);
        });
        const table = new arrow6.Table(test.schema, batches);
        await conn.insertArrowTable(table, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
  describe("Arrow async insert from table", () => {
    it("simple integers", async () => {
      await conn.query(`DROP TABLE IF EXISTS insert_from_table`);
      const table = new arrow6.Table({
        a: arrow6.makeVector(new Int32Array([1, 4, 7])),
        b: arrow6.makeVector(new Int32Array([2, 5, 8])),
        c: arrow6.vectorFromArray(["3", "6", "9"])
      });
      await conn.insertArrowTable(table, {
        name: "insert_from_vectors"
      });
      const results = await conn.query("select * from insert_from_vectors");
      compareTable(results, [
        { name: "a", values: [1, 4, 7] },
        { name: "b", values: [2, 5, 8] },
        { name: "c", values: ["3", "6", "9"] }
      ]);
    });
  });
}

// test/insert_json.test.ts
var arrow7 = __toESM(require("apache-arrow"));
function describeBrowser(description, specDefinitions) {
  if (typeof window !== "undefined") {
    describe(description, specDefinitions);
  }
}
var encoder = new TextEncoder();
var JSON_INSERT_TESTS = [
  {
    name: "rows_integers",
    input: `[
            {"a":1, "b":2, "c":3},
            {"a":4, "b":5, "c":6},
            {"a":7, "b":8, "c":9},
        ]`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "cols_integers",
    input: `{
            "a": [1, 4, 7],
            "b": [2, 5, 8],
            "c": [3, 6, 9]
        }`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "options_1",
    input: `[
            {"a":1, "b":2, "c":3},
            {"a":4, "b":5, "c":6},
            {"a":7, "b":8, "c":9},
        ]`,
    options: {
      schema: "main",
      name: "foo",
      shape: "row-array" /* ROW_ARRAY */,
      columns: {
        a: new arrow7.Int16(),
        b: new arrow7.Int32(),
        c: new arrow7.Utf8()
      }
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: ["3", "6", "9"] }
    ]
  }
];
var TEST_FILE = "TEST";
function testJSONInsert(db2) {
  let conn;
  beforeEach(async () => {
    db2().flushFiles();
    conn = db2().connect();
  });
  afterEach(async () => {
    conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("JSON Insert Sync", () => {
    for (const test of JSON_INSERT_TESTS) {
      it(test.name, () => {
        conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder.encode(test.input);
        db2().registerFileBuffer(TEST_FILE, buffer);
        conn.insertJSONFromPath(TEST_FILE, test.options);
        const results = conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}
function testJSONInsertAsync(db2) {
  let conn;
  beforeEach(async () => {
    await db2().flushFiles();
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("JSON Insert Buffer Async", () => {
    for (const test of JSON_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder.encode(test.input);
        await db2().registerFileBuffer(TEST_FILE, buffer);
        await conn.insertJSONFromPath(TEST_FILE, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
  describeBrowser("JSON Insert Blob Async", () => {
    for (const test of JSON_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder.encode(test.input);
        const blob = new Blob([buffer]);
        await db2().registerFileHandle(TEST_FILE, blob);
        await conn.insertJSONFromPath(TEST_FILE, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}

// test/insert_csv.test.ts
var arrow8 = __toESM(require("apache-arrow"));
function describeBrowser2(description, specDefinitions) {
  if (typeof window !== "undefined") {
    describe(description, specDefinitions);
  }
}
var encoder2 = new TextEncoder();
var CSV_INSERT_TESTS = [
  {
    name: "integers_auto_1",
    input: `"a","b","c"
1,2,3
4,5,6
7,8,9
`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "integers_auto_2",
    input: `a,b,c
1,2,3
4,5,6
7,8,9
`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "integers_auto_3",
    input: `a,b,c`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "column0", values: ["a"] },
      { name: "column1", values: ["b"] },
      { name: "column2", values: ["c"] }
    ]
  },
  {
    name: "integers_auto_2",
    input: `a
1
4
7
`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [{ name: "a", values: [1, 4, 7] }]
  },
  {
    name: "options_1",
    input: `1,2,3
4,5,6
7,8,9
`,
    options: {
      schema: "main",
      name: "foo2",
      header: false,
      detect: false,
      columns: {
        a: new arrow8.Int16(),
        b: new arrow8.Int32(),
        c: new arrow8.Utf8()
      }
    },
    query: "SELECT * FROM main.foo2",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: ["3", "6", "9"] }
    ]
  },
  {
    name: "options_2",
    input: `1|2|01/02/2020
4|5|01/03/2020
7|8|01/04/2020
`,
    options: {
      schema: "main",
      name: "foo",
      detect: false,
      header: false,
      delimiter: "|",
      dateFormat: "%m/%d/%Y",
      columns: {
        a: new arrow8.Int16(),
        b: new arrow8.Int32(),
        c: new arrow8.DateDay()
      }
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      {
        name: "c",
        values: [
          new Date(Date.UTC(2020, 0, 2)),
          new Date(Date.UTC(2020, 0, 3)),
          new Date(Date.UTC(2020, 0, 4))
        ]
      }
    ]
  },
  {
    name: "options_3",
    input: `1|2|20:32:45 1992-03-02
4|5|20:32:50 1992-03-02
7|8|20:32:55 1992-03-02
`,
    options: {
      schema: "main",
      name: "foo",
      detect: false,
      header: false,
      delimiter: "|",
      quote: "'",
      timestampFormat: "%H:%M:%S %Y-%m-%d",
      columns: {
        a: new arrow8.Int16(),
        b: new arrow8.Int32(),
        c: new arrow8.TimestampSecond()
      }
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      {
        name: "c",
        values: [
          new Date(Date.UTC(1992, 2, 2, 20, 32, 45)).getTime(),
          new Date(Date.UTC(1992, 2, 2, 20, 32, 50)).getTime(),
          new Date(Date.UTC(1992, 2, 2, 20, 32, 55)).getTime()
        ]
      }
    ]
  }
];
var TEST_FILE2 = "TEST";
function testCSVInsert(db2) {
  let conn;
  beforeEach(async () => {
    db2().flushFiles();
    conn = db2().connect();
  });
  afterEach(async () => {
    conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("CSV Insert Sync", () => {
    for (const test of CSV_INSERT_TESTS) {
      it(test.name, () => {
        conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder2.encode(test.input);
        db2().registerFileBuffer(TEST_FILE2, buffer);
        conn.insertCSVFromPath(TEST_FILE2, test.options);
        const results = conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}
function testCSVInsertAsync(db2) {
  let conn;
  beforeEach(async () => {
    await db2().flushFiles();
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("CSV Insert Buffer Async", () => {
    for (const test of CSV_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder2.encode(test.input);
        await db2().registerFileBuffer(TEST_FILE2, buffer);
        await conn.insertCSVFromPath(TEST_FILE2, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
  describeBrowser2("CSV Insert Blob Async", () => {
    for (const test of CSV_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder2.encode(test.input);
        const blob = new Blob([buffer]);
        await db2().registerFileHandle(TEST_FILE2, blob);
        await conn.insertCSVFromPath(TEST_FILE2, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}

// test/tokenizer.test.ts
function testTokenization(db2) {
  describe("Tokenizer", () => {
    it("SELECT 1", async () => {
      expect(db2().tokenize("SELECT 1")).toEqual({
        offsets: [0, 7],
        types: [4, 1]
      });
    });
    it("SELECT * FROM region", async () => {
      expect(db2().tokenize("SELECT * FROM region")).toEqual({
        offsets: [0, 7, 9, 14],
        types: [4, 3, 4, 0]
      });
    });
  });
}
function testTokenizationAsync(db2) {
  describe("Tokenizer", () => {
    it("SELECT 1", async () => {
      expect(await db2().tokenize("SELECT 1")).toEqual({
        offsets: [0, 7],
        types: [4, 1]
      });
    });
    it("SELECT * FROM region", async () => {
      expect(await db2().tokenize("SELECT * FROM region")).toEqual({
        offsets: [0, 7, 9, 14],
        types: [4, 3, 4, 0]
      });
    });
  });
}

// test/tablenames.test.ts
var TABLENAME_TESTS = [
  {
    name: "standard",
    input: "SELECT * FROM my_table",
    tables: ["my_table"]
  },
  {
    name: "fetch_specific",
    input: "SELECT col_a FROM my_table",
    tables: ["my_table"]
  },
  {
    name: "multiple_tables",
    input: "SELECT * FROM my_table1, my_table2, my_table3",
    tables: ["my_table1", "my_table2", "my_table3"]
  },
  {
    name: "same_table_multiple_times",
    input: "SELECT col_a FROM my_table, my_table m2, my_table m3",
    tables: ["my_table"]
  },
  {
    name: "subqueries",
    input: "SELECT * FROM (SELECT * FROM (SELECT * FROM my_table) bla) bla3",
    tables: ["my_table"]
  },
  {
    name: "join",
    input: "SELECT col_a FROM my_table JOIN my_table2 ON (my_table.col_b=my_table2.col_d)",
    tables: ["my_table", "my_table2"]
  },
  {
    name: "scalar_subquery",
    input: "SELECT (SELECT COUNT(*) FROM my_table)",
    tables: ["my_table"]
  },
  {
    name: "set_operations",
    input: "SELECT * FROM my_table UNION ALL SELECT * FROM my_table2 INTERSECT SELECT * FROM my_table3",
    tables: ["my_table", "my_table2", "my_table3"]
  },
  {
    name: "window_functions",
    input: "SELECT row_number() OVER (ORDER BY (SELECT i+j FROM my_table2)) FROM my_table",
    tables: ["my_table", "my_table2"]
  }
];
function testTableNames(db2) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
  });
  describe("TableNames", () => {
    for (const test of TABLENAME_TESTS) {
      it(test.name, () => {
        const tables = conn.getTableNames(test.input);
        expect(tables).toEqual(test.tables);
      });
    }
  });
}
function testTableNamesAsync(db2) {
  let conn;
  beforeEach(async () => {
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
  });
  describe("TableNames Async", () => {
    for (const test of TABLENAME_TESTS) {
      it(test.name, async () => {
        const tables = await conn.getTableNames(test.input);
        expect(tables).toEqual(test.tables);
      });
    }
  });
}

// test/udf.test.ts
var import_apache_arrow2 = require("apache-arrow");
function testUDF(db2) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("UDF", () => {
    it("simple", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf", new import_apache_arrow2.Int32(), (a) => a);
      const result = conn.query("SELECT max(jsudf(v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([1e4]));
    });
    it("double", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf2", new import_apache_arrow2.Float64(), (a) => a);
      const result = conn.query("SELECT max(jsudf2(v::DOUBLE))::DOUBLE as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Float64Array([1e4]));
    });
    it("2 args", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf3", new import_apache_arrow2.Int32(), (a, b) => a + b);
      const result = conn.query("SELECT max(jsudf3(v::INTEGER, v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([2e4]));
    });
    it("3 args", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf3args", new import_apache_arrow2.Int32(), (a, b, c) => a + b + c);
      const result = conn.query("SELECT max(jsudf3args(v::INTEGER, v::INTEGER, v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([3e4]));
    });
    it("4 args", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf4args", new import_apache_arrow2.Int32(), (a, b, c, d) => a + b + c + d);
      const result = conn.query("SELECT max(jsudf4args(v::INTEGER, v::INTEGER, v::INTEGER, v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([4e4]));
    });
    it("noargs", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf4", new import_apache_arrow2.Int32(), () => 42);
      const result = conn.query("SELECT max(jsudf4())::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([42]));
    });
    it("withnulls", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf5", new import_apache_arrow2.Int32(), (a) => a == void 0 ? -100 : a);
      const result = conn.query("SELECT min(jsudf5((case when v % 2 = 0 then v else null end)::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([-100]));
    });
    it("stringparam", async () => {
      var _a, _b;
      function jsudf6(s) {
        return s.length;
      }
      conn.createScalarFunction("jsudf6", new import_apache_arrow2.Int32(), jsudf6);
      const result = conn.query("SELECT max(jsudf6('str_' || v))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([9]));
    });
    it("stringparamnulls", async () => {
      var _a, _b;
      function jsudf7(s) {
        if (s == void 0) {
          return 0;
        } else {
          return s.length;
        }
      }
      conn.createScalarFunction("jsudf7", new import_apache_arrow2.Int32(), jsudf7);
      const result = conn.query("SELECT max(jsudf7((case when v % 2 = 0 then 'str_' || v else null end)::VARCHAR))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([9]));
    });
    it("nullintreturn", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf8", new import_apache_arrow2.Int32(), (a) => void 0);
      const result = conn.query("SELECT max(COALESCE(jsudf8(v::INTEGER), 42))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([42]));
    });
    it("stringreturn", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf9", new import_apache_arrow2.Utf8(), (a) => "Hello " + a);
      const result = conn.query("SELECT max(LENGTH(jsudf9(v::INTEGER)))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([11]));
    });
    it("nullstringreturn", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf10", new import_apache_arrow2.Utf8(), (a) => a % 2 == 0 ? "Hello" : void 0);
      const result = conn.query("SELECT COUNT(jsudf10(v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([5e3]));
    });
  });
}

// test/regression/github_332.test.ts
function test332(db2) {
  let conn;
  beforeEach(async () => {
    await db2().flushFiles();
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("332", async () => {
      await db2().registerFileText("Products.csv", `ProductGroup,Product,Year,Quarter,Revenue,Units,Count,Product Key,Reseller,Product Info,QuarterAsNumber
Electronics,Phone,2018,Q1,103,7,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q1,102,4,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2019,Q1,98,12,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Computer,2018,Q1,104,3,1,2018-Q1,Samsung,Format=XML; <Properties>\u2026,1
Electronics,Computer,2019,Q1,83,7,1,2019-Q1,Google,Format=XML; <Properties>\u2026,1
Media,Theater,2018,Q1,17,4,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Theater,2019,Q1,20,7,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2018,Q1,25,12,1,2018-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Media,Movies,2019,Q1,26,13,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q2,105,5,1,2018-Q2,Samsung,Format=XML; <Properties>\u2026,2
Electronics,Phone,2019,Q2,82,15,1,2019-Q2,LG,Format=XML; <Properties>\u2026,2
Electronics,Computer,2018,Q2,99,4,1,2018-Q2,LG,Format=XML; <Properties>\u2026,2
Electronics,Computer,2019,Q2,84,20,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2018,Q2,17,4,1,2018-Q2,Microsoft,Format=XML; <Properties>\u2026,2
Media,Theater,2019,Q2,22,5,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2018,Q2,25,12,1,2018-Q2,Samsung,Format=XML; <Properties>\u2026,2
Media,Movies,2019,Q2,26,14,1,2019-Q2,Google,Format=XML; <Properties>\u2026,2
Electronics,Phone,2000,Q1,103,7,1,2000-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2001,Q1,102,4,1,2001-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2002,Q1,98,12,1,2002-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Electronics,Computer,2003,Q1,104,3,1,2003-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Computer,2004,Q1,83,7,1,2004-Q1,Samsung,Format=XML; <Properties>\u2026,1
Media,Theater,2005,Q1,17,4,1,2005-Q1,Google,Format=XML; <Properties>\u2026,1
Media,Theater,2006,Q1,20,7,1,2006-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2007,Q1,25,12,1,2007-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2008,Q1,26,13,1,2008-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Electronics,Phone,2009,Q2,105,5,1,2009-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Phone,2010,Q2,82,15,1,2010-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2011,Q2,99,4,1,2011-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2012,Q2,84,20,1,2012-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2013,Q2,17,4,1,2013-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2014,Q2,22,5,1,2014-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2015,Q2,25,12,1,2015-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2016,Q2,26,14,1,2016-Q2,Samsung,Format=XML; <Properties>\u2026,2
Media,Movies,2017,Q1,26,13,1,2017-Q1,Google,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q2,105,5,1,2018-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Phone,2019,Q2,82,15,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2020,Q2,99,4,1,2020-Q2,Microsoft,Format=XML; <Properties>\u2026,2
Electronics,Phone,2020,Q1,103,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2020,Q2,102,4,1,2020-Q2,Samsung,Format=XML; <Properties>\u2026,2
Electronics,Phone,2020,Q3,98,12,1,2020-Q3,LG,Format=XML; <Properties>\u2026,3
Electronics,Computer,2020,Q4,104,3,1,2020-Q4,LG,Format=XML; <Properties>\u2026,4
Electronics,Computer,2020,Q1,83,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Theater,2020,Q1,17,4,1,2020-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Media,Theater,2020,Q1,20,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
`);
      await conn.query("CREATE TABLE products AS SELECT * FROM 'Products.csv'");
      const all = await conn.query("SELECT * FROM products");
      expect(all.schema.fields.length).toBe(11);
      expect(all.schema.fields[0].name).toBe("ProductGroup");
      const insensitive = await conn.query("SELECT productgroup FROM products GROUP BY productgroup");
      expect(insensitive.schema.fields.length).toBe(1);
      expect(insensitive.schema.fields[0].name).toBe("ProductGroup");
      expect(insensitive.toArray().length).toEqual(2);
      await conn.query("DROP TABLE products");
    });
  });
}

// test/regression/github_334.test.ts
var arrow9 = __toESM(require("apache-arrow"));
function test334(adb2) {
  describe("GitHub issues", () => {
    describe("334", () => {
      it("CSV insert", async () => {
        await adb2().registerFileText(`data.csv`, "1|foo\n2|bar\n");
        const conn = await adb2().connect();
        await conn.insertCSVFromPath("data.csv", {
          schema: "main",
          name: "foo",
          detect: false,
          header: false,
          delimiter: "|",
          columns: {
            col1: new arrow9.Int32(),
            col2: new arrow9.Utf8()
          }
        });
        await conn.query("DROP TABLE IF EXISTS foo");
        await conn.close();
        await adb2().dropFile("data.csv");
      });
      it("JSON row insert", async () => {
        await adb2().registerFileText("rows.json", `[
                    { "col1": 1, "col2": "foo" },
                    { "col1": 2, "col2": "bar" },
                ]`);
        const conn = await adb2().connect();
        await conn.insertJSONFromPath("rows.json", { name: "rows" });
        await conn.query("DROP TABLE IF EXISTS rows");
        await conn.close();
        await adb2().dropFile("rows.json");
      });
      it("JSON column insert", async () => {
        await adb2().registerFileText("columns.json", `{
                    "col1": [1, 2],
                    "col2": ["foo", "bar"]
                }`);
        const conn = await adb2().connect();
        await conn.insertJSONFromPath("columns.json", { name: "columns" });
        await conn.query("DROP TABLE IF EXISTS columns");
        await conn.close();
        await adb2().dropFile("columns.json");
      });
      it("Query result materialized", async () => {
        const conn = await adb2().connect();
        await conn.query(`
                SELECT * FROM generate_series(1, 100) t(v)
            `);
        await conn.close();
      });
      it("Query result streamed", async () => {
        const conn = await adb2().connect();
        for await (const batch of await conn.send(`
                SELECT * FROM generate_series(1, 100) t(v)
            `)) {
          expect(batch.numRows).toBeGreaterThan(0);
        }
        await conn.close();
      });
      it("Prepared statement materialized", async () => {
        const conn = await adb2().connect();
        const stmt = await conn.prepare(`SELECT v + ? FROM generate_series(0, 10000) as t(v);`);
        await stmt.query(234);
        await stmt.close();
        await conn.close();
      });
      it("Prepared statement streamed", async () => {
        const conn = await adb2().connect();
        const stmt = await conn.prepare(`SELECT v + ? FROM generate_series(0, 10000) as t(v);`);
        for await (const batch of await stmt.send(234)) {
          expect(batch.numRows).toBeGreaterThan(0);
        }
        await stmt.close();
        await conn.close();
      });
    });
  });
}

// test/regression/github_393.test.ts
function test393(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("393", async () => {
      var _a, _b;
      await db2().open({
        path: ":memory:",
        query: {
          castTimestampToDate: false
        }
      });
      conn = await db2().connect();
      const resultWithoutCast = await conn.query(`SELECT TIMESTAMP '1992-03-22 01:02:03' as ts`);
      expect((_a = resultWithoutCast.toArray()[0]) == null ? void 0 : _a.ts).toEqual(new Date(Date.UTC(1992, 2, 22, 1, 2, 3)).getTime());
      await db2().open({
        path: ":memory:",
        query: {
          castTimestampToDate: true
        }
      });
      conn = await db2().connect();
      const resultWithCast = await conn.query(`SELECT TIMESTAMP '1992-03-22 01:02:03' as ts`);
      expect((_b = resultWithCast.toArray()[0]) == null ? void 0 : _b.ts).toEqual(new Date(Date.UTC(1992, 2, 22, 1, 2, 3)));
    });
  });
}

// test/regression/github_448.test.ts
function test448(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("448", async () => {
      var _a;
      conn = await db2().connect();
      await conn.query(`create temp table test448(i integer)`);
      await conn.query(`insert into test448 values (1),(2),(1)`);
      let result = await conn.query(`select * from test448`);
      expect(result.numCols).toBe(1);
      expect(result.numRows).toBe(3);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([1, 2, 1]));
      result = await conn.query(`select histogram(i) from test448`);
      expect(result.numCols).toBe(1);
      expect(result.numRows).toBe(1);
      const array = result.getChildAt(0).toArray();
      expect(array.length).toEqual(1);
      expect(array[0].toString()).toEqual("{1: 2, 2: 1}");
    });
  });
}

// test/regression/github_470.test.ts
function test470(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("470", async () => {
      var _a, _b, _c, _d;
      await db2().open({
        path: ":memory:",
        query: {
          castDurationToTime64: false
        }
      });
      conn = await db2().connect();
      conn.query(`SELECT INTERVAL '3' MONTH AS interval`).then((x) => fail("Query is expected to fail due to duration type not being implemented")).catch((x) => {
        expect(x).toEqual(new Error('Unrecognized type: "Duration" (18)'));
      });
      await db2().open({
        path: ":memory:",
        query: {
          castDurationToTime64: true
        }
      });
      conn = await db2().connect();
      const resultWithCast = await conn.query(`SELECT INTERVAL '3' MONTH AS interval`);
      expect((_b = (_a = resultWithCast.toArray()[0]) == null ? void 0 : _a.interval) == null ? void 0 : _b.toString()).toEqual("7776000000000");
      await db2().open({
        path: ":memory:",
        query: {}
      });
      conn = await db2().connect();
      const resultWithDefault = await conn.query(`SELECT INTERVAL '3' MONTH AS interval`);
      expect((_d = (_c = resultWithDefault.toArray()[0]) == null ? void 0 : _c.interval) == null ? void 0 : _d.toString()).toEqual("7776000000000");
    });
  });
}

// test/regression/github_477.test.ts
function test477(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("477", async () => {
      var _a, _b;
      await db2().open({
        path: ":memory:",
        query: {}
      });
      conn = await db2().connect();
      const resultWithoutCast = await conn.query(`SELECT (-1.9)::DECIMAL(2,1) as decimal`);
      expect(resultWithoutCast.schema.fields[0].type.scale).toEqual(1);
      expect(resultWithoutCast.schema.fields[0].type.precision).toEqual(2);
      expect(((_a = resultWithoutCast.toArray()[0]) == null ? void 0 : _a.decimal) == -19).toBe(false);
      await db2().open({
        path: ":memory:",
        query: {
          castDecimalToDouble: true
        }
      });
      conn = await db2().connect();
      const resultWithCast = await conn.query(`SELECT (-1.9)::DECIMAL(2,1) as decimal`);
      expect((_b = resultWithCast.toArray()[0]) == null ? void 0 : _b.decimal).toEqual(-1.9000000000000001);
    });
  });
}

// test/regression/index.ts
function testRegressionAsync(adb2) {
  test332(adb2);
  test334(adb2);
  test393(adb2);
  test448(adb2);
  test470(adb2);
  test477(adb2);
}

// test/fts.test.ts
function testFTS(db2) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("FTS", () => {
    it("sample", async () => {
      var _a;
      await conn.query("CREATE TABLE documents(document_identifier VARCHAR, text_content VARCHAR, author VARCHAR, doc_version INTEGER);");
      await conn.query("INSERT INTO documents VALUES ('doc1', 'The mallard is a dabbling duck that breeds throughout the temperate.','Hannes M\xFChleisen', 3), ('doc2', 'The cat is a domestic species of small carnivorous mammal.', 'Laurens Kuiper', 2);");
      await conn.query("PRAGMA create_fts_index('documents', 'document_identifier', 'text_content', 'author');");
      const result = conn.query("SELECT document_identifier, score\n            FROM (SELECT *, fts_main_documents.match_bm25(document_identifier, 'Muhleisen', fields := 'author') AS score\n            FROM documents) sq\n            WHERE score IS NOT NULL\n            AND doc_version > 2\n            ORDER BY score DESC;");
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(["doc1"]);
    });
  });
}

// test/index_node.ts
jasmine.DEFAULT_TIMEOUT_INTERVAL = 6e4;
var dataDir = import_path.default.resolve(__dirname, "../../../data");
var resolveBuffer = (url) => {
  const p = import_path.default.join(dataDir, url);
  if (!import_fs3.default.existsSync(p))
    return null;
  return new Uint8Array(import_fs3.default.readFileSync(p));
};
var resolveData = async (url) => {
  switch (url) {
    case "/uni/all.zip":
      return await resolveBuffer("/uni/all.zip");
    case "/uni/assistenten.parquet":
      return await resolveBuffer("/uni/assistenten.parquet");
    case "/uni/studenten.parquet":
      return await resolveBuffer("/uni/studenten.parquet");
    case "/uni/hoeren.parquet":
      return await resolveBuffer("/uni/hoeren.parquet");
    case "/uni/vorlesungen.parquet":
      return await resolveBuffer("/uni/vorlesungen.parquet");
    default:
      return null;
  }
};
var db = null;
var adb = null;
var worker = null;
beforeAll(async () => {
  const DUCKDB_BUNDLES = {
    mvp: {
      mainModule: import_path.default.resolve(__dirname, "./duckdb-mvp.wasm"),
      mainWorker: import_path.default.resolve(__dirname, "./duckdb-node-mvp.worker.cjs")
    },
    eh: {
      mainModule: import_path.default.resolve(__dirname, "./duckdb-eh.wasm"),
      mainWorker: import_path.default.resolve(__dirname, "./duckdb-node-eh.worker.cjs")
    }
  };
  const DUCKDB_CONFIG = await selectBundle(DUCKDB_BUNDLES);
  const logger = new VoidLogger();
  db = await createDuckDB(DUCKDB_BUNDLES, logger, NODE_RUNTIME);
  await db.instantiate((_) => {
  });
  worker = new import_web_worker.default(DUCKDB_CONFIG.mainWorker);
  adb = new AsyncDuckDB(logger, worker);
  await adb.instantiate(DUCKDB_CONFIG.mainModule, DUCKDB_CONFIG.pthreadWorker);
});
afterAll(async () => {
  if (worker)
    worker.terminate();
});
testUDF(() => db);
testTableNames(() => db);
testTableNamesAsync(() => adb);
testRegressionAsync(() => adb);
testAllTypes(() => db);
testAllTypesAsync(() => adb);
testBindings(() => db, dataDir);
testAsyncBindings(() => adb, dataDir);
testBatchStream(() => db);
testAsyncBatchStream(() => adb);
testFilesystem(() => adb, resolveData, dataDir);
testArrowInsert(() => db);
testArrowInsertAsync(() => adb);
testJSONInsert(() => db);
testJSONInsertAsync(() => adb);
testCSVInsert(() => db);
testCSVInsertAsync(() => adb);
testTokenization(() => db);
testTokenizationAsync(() => adb);
testFTS(() => db);
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=tests-node.cjs.map
