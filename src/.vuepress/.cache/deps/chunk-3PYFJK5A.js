import {
  renderer
} from "./chunk-YV43AHMX.js";
import {
  Map_default,
  UnknownDiagramError,
  baseGetTag_default,
  detectType,
  directiveSanitizer,
  extractFrontMatter,
  freeGlobal_default,
  getDiagram,
  getDiagramLoader,
  getNative_default,
  getStyles$1,
  isFunction_default,
  parseDirective$1,
  registerDiagram,
  registerLazyLoadedDiagrams,
  root_default,
  toSource_default,
  utils
} from "./chunk-5G4YUUOS.js";
import {
  addDirective,
  defaultConfig,
  evaluate,
  getConfig,
  getSiteConfig,
  log,
  purify,
  reset,
  saveConfigFromInitialize,
  select_default,
  setConfig,
  setLogLevel,
  setSiteConfig,
  theme,
  updateSiteConfig
} from "./chunk-W3FTNUPT.js";

// node_modules/stylis/src/Enum.js
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/lodash-es/_isPrototype.js
var objectProto = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto2 = Object.prototype;
var hasOwnProperty = objectProto2.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
var Set = getNative_default(root_default, "Set");
var Set_default = Set;

// node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap;

// node_modules/lodash-es/_getTag.js
var mapTag = "[object Map]";
var objectTag = "[object Object]";
var promiseTag = "[object Promise]";
var setTag = "[object Set]";
var weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag || Map_default && getTag(new Map_default()) != mapTag || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto3 = Object.prototype;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var propertyIsEnumerable = objectProto3.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag = "[object Function]";
var mapTag2 = "[object Map]";
var numberTag = "[object Number]";
var objectTag2 = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag2 = "[object Set]";
var stringTag = "[object String]";
var weakMapTag2 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag2 = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag2] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag2] = typedArrayTags[numberTag] = typedArrayTags[objectTag2] = typedArrayTags[regexpTag] = typedArrayTags[setTag2] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag2] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/isEmpty.js
var mapTag3 = "[object Map]";
var setTag3 = "[object Set]";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
    return !value.length;
  }
  var tag = getTag_default(value);
  if (tag == mapTag3 || tag == setTag3) {
    return !value.size;
  }
  if (isPrototype_default(value)) {
    return !baseKeys_default(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty3.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_default = isEmpty;

// node_modules/mermaid/dist/mermaidAPI-0716c7c2.js
var version = "10.0.2";
var id$i = "c4";
var detector$i = (txt) => {
  return txt.match(/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/) !== null;
};
var loader$i = async () => {
  const { diagram } = await import("./c4Diagram-f9e67060-BRKYDEMQ.js");
  return { id: id$i, diagram };
};
var plugin$i = {
  id: id$i,
  detector: detector$i,
  loader: loader$i
};
var c4 = plugin$i;
var id$h = "flowchart";
var detector$h = (txt, config) => {
  var _a, _b;
  if (((_a = config == null ? void 0 : config.flowchart) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper" || ((_b = config == null ? void 0 : config.flowchart) == null ? void 0 : _b.defaultRenderer) === "elk") {
    return false;
  }
  return txt.match(/^\s*graph/) !== null;
};
var loader$h = async () => {
  const { diagram } = await import("./flowDiagram-42bb1e4d-UUP4UDU2.js");
  return { id: id$h, diagram };
};
var plugin$h = {
  id: id$h,
  detector: detector$h,
  loader: loader$h
};
var flowchart = plugin$h;
var id$g = "flowchart-v2";
var detector$g = (txt, config) => {
  var _a, _b, _c;
  if (((_a = config == null ? void 0 : config.flowchart) == null ? void 0 : _a.defaultRenderer) === "dagre-d3" || ((_b = config == null ? void 0 : config.flowchart) == null ? void 0 : _b.defaultRenderer) === "elk") {
    return false;
  }
  if (txt.match(/^\s*graph/) !== null && ((_c = config == null ? void 0 : config.flowchart) == null ? void 0 : _c.defaultRenderer) === "dagre-wrapper") {
    return true;
  }
  return txt.match(/^\s*flowchart/) !== null;
};
var loader$g = async () => {
  const { diagram } = await import("./flowDiagram-v2-4c9a7611-EH5QPAPI.js");
  return { id: id$g, diagram };
};
var plugin$g = {
  id: id$g,
  detector: detector$g,
  loader: loader$g
};
var flowchartV2 = plugin$g;
var id$f = "er";
var detector$f = (txt) => {
  return txt.match(/^\s*erDiagram/) !== null;
};
var loader$f = async () => {
  const { diagram } = await import("./erDiagram-25977acd-Z4FIM4WM.js");
  return { id: id$f, diagram };
};
var plugin$f = {
  id: id$f,
  detector: detector$f,
  loader: loader$f
};
var er = plugin$f;
var id$e = "gitGraph";
var detector$e = (txt) => {
  return txt.match(/^\s*gitGraph/) !== null;
};
var loader$e = async () => {
  const { diagram } = await import("./gitGraphDiagram-30dcca6d-ADVSGOFB.js");
  return { id: id$e, diagram };
};
var plugin$e = {
  id: id$e,
  detector: detector$e,
  loader: loader$e
};
var git = plugin$e;
var id$d = "gantt";
var detector$d = (txt) => {
  return txt.match(/^\s*gantt/) !== null;
};
var loader$d = async () => {
  const { diagram } = await import("./ganttDiagram-41439120-Z3TB74AN.js");
  return { id: id$d, diagram };
};
var plugin$d = {
  id: id$d,
  detector: detector$d,
  loader: loader$d
};
var gantt = plugin$d;
var id$c = "info";
var detector$c = (txt) => {
  return txt.match(/^\s*info/) !== null;
};
var loader$c = async () => {
  const { diagram } = await import("./infoDiagram-1b335302-JH53EEZT.js");
  return { id: id$c, diagram };
};
var plugin$c = {
  id: id$c,
  detector: detector$c,
  loader: loader$c
};
var info = plugin$c;
var id$b = "pie";
var detector$b = (txt) => {
  return txt.match(/^\s*pie/) !== null;
};
var loader$b = async () => {
  const { diagram } = await import("./pieDiagram-905ac727-ATFW4AVX.js");
  return { id: id$b, diagram };
};
var plugin$b = {
  id: id$b,
  detector: detector$b,
  loader: loader$b
};
var pie = plugin$b;
var id$a = "requirement";
var detector$a = (txt) => {
  return txt.match(/^\s*requirement(Diagram)?/) !== null;
};
var loader$a = async () => {
  const { diagram } = await import("./requirementDiagram-84e9ae78-KUDQHGXU.js");
  return { id: id$a, diagram };
};
var plugin$a = {
  id: id$a,
  detector: detector$a,
  loader: loader$a
};
var requirement = plugin$a;
var id$9 = "sequence";
var detector$9 = (txt) => {
  return txt.match(/^\s*sequenceDiagram/) !== null;
};
var loader$9 = async () => {
  const { diagram } = await import("./sequenceDiagram-2c95880e-TPBVTBHL.js");
  return { id: id$9, diagram };
};
var plugin$9 = {
  id: id$9,
  detector: detector$9,
  loader: loader$9
};
var sequence = plugin$9;
var id$8 = "class";
var detector$8 = (txt, config) => {
  var _a;
  if (((_a = config == null ? void 0 : config.class) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") {
    return false;
  }
  return txt.match(/^\s*classDiagram/) !== null;
};
var loader$8 = async () => {
  const { diagram } = await import("./classDiagram-4456d403-7RLOATDM.js");
  return { id: id$8, diagram };
};
var plugin$8 = {
  id: id$8,
  detector: detector$8,
  loader: loader$8
};
var classDiagram = plugin$8;
var id$7 = "classDiagram";
var detector$7 = (txt, config) => {
  var _a;
  if (txt.match(/^\s*classDiagram/) !== null && ((_a = config == null ? void 0 : config.class) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") {
    return true;
  }
  return txt.match(/^\s*classDiagram-v2/) !== null;
};
var loader$7 = async () => {
  const { diagram } = await import("./classDiagram-v2-539b00ca-IDZERVCS.js");
  return { id: id$7, diagram };
};
var plugin$7 = {
  id: id$7,
  detector: detector$7,
  loader: loader$7
};
var classDiagramV2 = plugin$7;
var id$6 = "state";
var detector$6 = (txt, config) => {
  var _a;
  if (((_a = config == null ? void 0 : config.state) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") {
    return false;
  }
  return txt.match(/^\s*stateDiagram/) !== null;
};
var loader$6 = async () => {
  const { diagram } = await import("./stateDiagram-95825141-RLCPYHN4.js");
  return { id: id$6, diagram };
};
var plugin$6 = {
  id: id$6,
  detector: detector$6,
  loader: loader$6
};
var state = plugin$6;
var id$5 = "stateDiagram";
var detector$5 = (text, config) => {
  var _a, _b;
  if (text.match(/^\s*stateDiagram-v2/) !== null) {
    return true;
  }
  if (text.match(/^\s*stateDiagram/) && ((_a = config == null ? void 0 : config.state) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") {
    return true;
  }
  if (text.match(/^\s*stateDiagram/) && ((_b = config == null ? void 0 : config.state) == null ? void 0 : _b.defaultRenderer) === "dagre-wrapper") {
    return true;
  }
  return false;
};
var loader$5 = async () => {
  const { diagram } = await import("./stateDiagram-v2-1cc5d8ed-HP4ZYM77.js");
  return { id: id$5, diagram };
};
var plugin$5 = {
  id: id$5,
  detector: detector$5,
  loader: loader$5
};
var stateV2 = plugin$5;
var id$4 = "journey";
var detector$4 = (txt) => {
  return txt.match(/^\s*journey/) !== null;
};
var loader$4 = async () => {
  const { diagram } = await import("./journeyDiagram-ded66ec9-5PTE3FTN.js");
  return { id: id$4, diagram };
};
var plugin$4 = {
  id: id$4,
  detector: detector$4,
  loader: loader$4
};
var journey = plugin$4;
var id$3 = "error";
var detector$3 = (text) => {
  return text.toLowerCase().trim() === "error";
};
var loader$3 = async () => {
  const { diagram } = await import("./errorDiagram-bb949655-NOU2CLG3.js");
  return { id: id$3, diagram };
};
var plugin$3 = {
  id: id$3,
  detector: detector$3,
  loader: loader$3
};
var error = plugin$3;
var id$2 = "flowchart-elk";
var detector$2 = (txt, config) => {
  var _a;
  if (
    // If diagram explicitly states flowchart-elk
    txt.match(/^\s*flowchart-elk/) || // If a flowchart/graph diagram has their default renderer set to elk
    txt.match(/^\s*flowchart|graph/) && ((_a = config == null ? void 0 : config.flowchart) == null ? void 0 : _a.defaultRenderer) === "elk"
  ) {
    return true;
  }
  return false;
};
var loader$2 = async () => {
  const { diagram } = await import("./flowchart-elk-definition-c9fc5e04-7XF4XJAG.js");
  return { id: id$2, diagram };
};
var plugin$2 = {
  id: id$2,
  detector: detector$2,
  loader: loader$2
};
var flowchartElk = plugin$2;
var id$1 = "timeline";
var detector$1 = (txt) => {
  return txt.match(/^\s*timeline/) !== null;
};
var loader$1 = async () => {
  const { diagram } = await import("./timeline-definition-24ebf147-PETQXR3C.js");
  return { id: id$1, diagram };
};
var plugin$1 = {
  id: id$1,
  detector: detector$1,
  loader: loader$1
};
var timeline = plugin$1;
var id = "mindmap";
var detector = (txt) => {
  return txt.match(/^\s*mindmap/) !== null;
};
var loader = async () => {
  const { diagram } = await import("./mindmap-definition-c8a05b8a-BKN2A7BJ.js");
  return { id, diagram };
};
var plugin = {
  id,
  detector,
  loader
};
var mindmap = plugin;
var hasLoadedDiagrams = false;
var addDiagrams = () => {
  if (hasLoadedDiagrams) {
    return;
  }
  hasLoadedDiagrams = true;
  registerDiagram(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {},
      // should never be used
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (text) => {
      return text.toLowerCase().trimStart().startsWith("---");
    }
  );
  registerLazyLoadedDiagrams(
    error,
    c4,
    classDiagramV2,
    classDiagram,
    er,
    gantt,
    info,
    pie,
    requirement,
    sequence,
    flowchartElk,
    flowchartV2,
    flowchart,
    mindmap,
    timeline,
    git,
    stateV2,
    state,
    journey
  );
};
var Diagram = class {
  constructor(text) {
    var _a, _b;
    this.text = text;
    this.type = "graph";
    this.text += "\n";
    const cnf = getConfig();
    try {
      this.type = detectType(text, cnf);
    } catch (e) {
      this.type = "error";
      this.detectError = e;
    }
    const diagram = getDiagram(this.type);
    log.debug("Type " + this.type);
    this.db = diagram.db;
    (_b = (_a = this.db).clear) == null ? void 0 : _b.call(_a);
    this.renderer = diagram.renderer;
    this.parser = diagram.parser;
    const originalParse = this.parser.parse.bind(this.parser);
    this.parser.parse = (text2) => originalParse(extractFrontMatter(text2, this.db));
    this.parser.parser.yy = this.db;
    if (diagram.init) {
      diagram.init(cnf);
      log.info("Initialized diagram " + this.type, cnf);
    }
    this.parse();
  }
  parse() {
    var _a, _b;
    if (this.detectError) {
      throw this.detectError;
    }
    (_b = (_a = this.db).clear) == null ? void 0 : _b.call(_a);
    this.parser.parse(this.text);
  }
  async render(id2, version2) {
    await this.renderer.draw(this.text, id2, version2, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
};
var getDiagramFromText = async (text) => {
  const type = detectType(text, getConfig());
  try {
    getDiagram(type);
  } catch (error2) {
    const loader2 = getDiagramLoader(type);
    if (!loader2) {
      throw new UnknownDiagramError(`Diagram ${type} not found.`);
    }
    const { id: id2, diagram } = await loader2();
    registerDiagram(id2, diagram);
  }
  return new Diagram(text);
};
var interactionFunctions = [];
var addFunction = (func) => {
  interactionFunctions.push(func);
};
var attachFunctions = () => {
  interactionFunctions.forEach((f) => {
    f();
  });
  interactionFunctions = [];
};
var SVG_ROLE = "graphics-document document";
function setA11yDiagramInfo(svg, diagramType) {
  svg.attr("role", SVG_ROLE);
  if (!isEmpty_default(diagramType)) {
    svg.attr("aria-roledescription", diagramType);
  }
}
function addSVGa11yTitleDescription(svg, a11yTitle, a11yDesc, baseId) {
  if (svg.insert === void 0) {
    return;
  }
  if (a11yTitle || a11yDesc) {
    if (a11yDesc) {
      const descId = "chart-desc-" + baseId;
      svg.attr("aria-describedby", descId);
      svg.insert("desc", ":first-child").attr("id", descId).text(a11yDesc);
    }
    if (a11yTitle) {
      const titleId = "chart-title-" + baseId;
      svg.attr("aria-labelledby", titleId);
      svg.insert("title", ":first-child").attr("id", titleId).text(a11yTitle);
    }
  } else {
    return;
  }
}
var CLASSDEF_DIAGRAMS = ["graph", "flowchart", "flowchart-v2", "stateDiagram", "stateDiagram-v2"];
var MAX_TEXTLENGTH = 5e4;
var MAX_TEXTLENGTH_EXCEEDED_MSG = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var SECURITY_LVL_SANDBOX = "sandbox";
var SECURITY_LVL_LOOSE = "loose";
var XMLNS_SVG_STD = "http://www.w3.org/2000/svg";
var XMLNS_XLINK_STD = "http://www.w3.org/1999/xlink";
var XMLNS_XHTML_STD = "http://www.w3.org/1999/xhtml";
var IFRAME_WIDTH = "100%";
var IFRAME_HEIGHT = "100%";
var IFRAME_STYLES = "border:0;margin:0;";
var IFRAME_BODY_STYLE = "margin:0";
var IFRAME_SANDBOX_OPTS = "allow-top-navigation-by-user-activation allow-popups";
var IFRAME_NOT_SUPPORTED_MSG = 'The "iframe" tag is not supported by your browser.';
var DOMPURIFY_TAGS = ["foreignobject"];
var DOMPURIFY_ATTR = ["dominant-baseline"];
async function parse2(text, parseOptions) {
  addDiagrams();
  let error2;
  try {
    const diagram = await getDiagramFromText(text);
    diagram.parse();
  } catch (err) {
    error2 = err;
  }
  if (parseOptions == null ? void 0 : parseOptions.suppressErrors) {
    return error2 === void 0;
  }
  if (error2) {
    throw error2;
  }
}
var encodeEntities = function(text) {
  let txt = text;
  txt = txt.replace(/style.*:\S*#.*;/g, function(s) {
    return s.substring(0, s.length - 1);
  });
  txt = txt.replace(/classDef.*:\S*#.*;/g, function(s) {
    return s.substring(0, s.length - 1);
  });
  txt = txt.replace(/#\w+;/g, function(s) {
    const innerTxt = s.substring(1, s.length - 1);
    const isInt = /^\+?\d+$/.test(innerTxt);
    if (isInt) {
      return "ﬂ°°" + innerTxt + "¶ß";
    } else {
      return "ﬂ°" + innerTxt + "¶ß";
    }
  });
  return txt;
};
var decodeEntities = function(text) {
  let txt = text;
  txt = txt.replace(/ﬂ°°/g, "&#");
  txt = txt.replace(/ﬂ°/g, "&");
  txt = txt.replace(/¶ß/g, ";");
  return txt;
};
var cssImportantStyles = (cssClass, element, cssClasses = []) => {
  return `
.${cssClass} ${element} { ${cssClasses.join(" !important; ")} !important; }`;
};
var createCssStyles = (config, graphType, classDefs = {}) => {
  var _a;
  let cssStyles = "";
  if (config.themeCSS !== void 0) {
    cssStyles += `
${config.themeCSS}`;
  }
  if (config.fontFamily !== void 0) {
    cssStyles += `
:root { --mermaid-font-family: ${config.fontFamily}}`;
  }
  if (config.altFontFamily !== void 0) {
    cssStyles += `
:root { --mermaid-alt-font-family: ${config.altFontFamily}}`;
  }
  if (!isEmpty_default(classDefs) && CLASSDEF_DIAGRAMS.includes(graphType)) {
    const htmlLabels = config.htmlLabels || ((_a = config.flowchart) == null ? void 0 : _a.htmlLabels);
    const cssHtmlElements = ["> *", "span"];
    const cssShapeElements = ["rect", "polygon", "ellipse", "circle", "path"];
    const cssElements = htmlLabels ? cssHtmlElements : cssShapeElements;
    for (const classId in classDefs) {
      const styleClassDef = classDefs[classId];
      if (!isEmpty_default(styleClassDef.styles)) {
        cssElements.forEach((cssElement) => {
          cssStyles += cssImportantStyles(styleClassDef.id, cssElement, styleClassDef.styles);
        });
      }
      if (!isEmpty_default(styleClassDef.textStyles)) {
        cssStyles += cssImportantStyles(styleClassDef.id, "tspan", styleClassDef.textStyles);
      }
    }
  }
  return cssStyles;
};
var createUserStyles = (config, graphType, classDefs, svgId) => {
  const userCSSstyles = createCssStyles(config, graphType, classDefs);
  const allStyles = getStyles$1(graphType, userCSSstyles, config.themeVariables);
  return serialize(compile(`${svgId}{${allStyles}}`), stringify);
};
var cleanUpSvgCode = (svgCode = "", inSandboxMode, useArrowMarkerUrls) => {
  let cleanedUpSvg = svgCode;
  if (!useArrowMarkerUrls && !inSandboxMode) {
    cleanedUpSvg = cleanedUpSvg.replace(/marker-end="url\(.*?#/g, 'marker-end="url(#');
  }
  cleanedUpSvg = decodeEntities(cleanedUpSvg);
  cleanedUpSvg = cleanedUpSvg.replace(/<br>/g, "<br/>");
  return cleanedUpSvg;
};
var putIntoIFrame = (svgCode = "", svgElement) => {
  const height = svgElement ? svgElement.viewBox.baseVal.height + "px" : IFRAME_HEIGHT;
  const base64encodedSrc = btoa('<body style="' + IFRAME_BODY_STYLE + '">' + svgCode + "</body>");
  return `<iframe style="width:${IFRAME_WIDTH};height:${height};${IFRAME_STYLES}" src="data:text/html;base64,${base64encodedSrc}" sandbox="${IFRAME_SANDBOX_OPTS}">
  ${IFRAME_NOT_SUPPORTED_MSG}
</iframe>`;
};
var appendDivSvgG = (parentRoot, id2, enclosingDivId, divStyle, svgXlink) => {
  const enclosingDiv = parentRoot.append("div");
  enclosingDiv.attr("id", enclosingDivId);
  if (divStyle) {
    enclosingDiv.attr("style", divStyle);
  }
  const svgNode = enclosingDiv.append("svg").attr("id", id2).attr("width", "100%").attr("xmlns", XMLNS_SVG_STD);
  if (svgXlink) {
    svgNode.attr("xmlns:xlink", svgXlink);
  }
  svgNode.append("g");
  return parentRoot;
};
function sandboxedIframe(parentNode, iFrameId) {
  return parentNode.append("iframe").attr("id", iFrameId).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var removeExistingElements = (doc, id2, divId, iFrameId) => {
  var _a, _b, _c;
  (_a = doc.getElementById(id2)) == null ? void 0 : _a.remove();
  (_b = doc.getElementById(divId)) == null ? void 0 : _b.remove();
  (_c = doc.getElementById(iFrameId)) == null ? void 0 : _c.remove();
};
var render = async function(id2, text, svgContainingElement) {
  var _a, _b, _c, _d;
  addDiagrams();
  reset();
  const graphInit = utils.detectInit(text);
  if (graphInit) {
    directiveSanitizer(graphInit);
    addDirective(graphInit);
  }
  const config = getConfig();
  log.debug(config);
  if (text.length > ((config == null ? void 0 : config.maxTextSize) ?? MAX_TEXTLENGTH)) {
    text = MAX_TEXTLENGTH_EXCEEDED_MSG;
  }
  text = text.replace(/\r\n?/g, "\n");
  const idSelector = "#" + id2;
  const iFrameID = "i" + id2;
  const iFrameID_selector = "#" + iFrameID;
  const enclosingDivID = "d" + id2;
  const enclosingDivID_selector = "#" + enclosingDivID;
  let root = select_default("body");
  const isSandboxed = config.securityLevel === SECURITY_LVL_SANDBOX;
  const isLooseSecurityLevel = config.securityLevel === SECURITY_LVL_LOOSE;
  const fontFamily = config.fontFamily;
  if (svgContainingElement !== void 0) {
    if (svgContainingElement) {
      svgContainingElement.innerHTML = "";
    }
    if (isSandboxed) {
      const iframe = sandboxedIframe(select_default(svgContainingElement), iFrameID);
      root = select_default(iframe.nodes()[0].contentDocument.body);
      root.node().style.margin = 0;
    } else {
      root = select_default(svgContainingElement);
    }
    appendDivSvgG(root, id2, enclosingDivID, `font-family: ${fontFamily}`, XMLNS_XLINK_STD);
  } else {
    removeExistingElements(document, id2, enclosingDivID, iFrameID);
    if (isSandboxed) {
      const iframe = sandboxedIframe(select_default("body"), iFrameID);
      root = select_default(iframe.nodes()[0].contentDocument.body);
      root.node().style.margin = 0;
    } else {
      root = select_default("body");
    }
    appendDivSvgG(root, id2, enclosingDivID);
  }
  text = encodeEntities(text);
  let diag;
  let parseEncounteredException;
  try {
    diag = await getDiagramFromText(text);
  } catch (error2) {
    diag = new Diagram("error");
    parseEncounteredException = error2;
  }
  const element = root.select(enclosingDivID_selector).node();
  const graphType = diag.type;
  const svg = element.firstChild;
  const firstChild = svg.firstChild;
  const diagramClassDefs = CLASSDEF_DIAGRAMS.includes(graphType) ? diag.renderer.getClasses(text, diag) : {};
  const rules = createUserStyles(
    config,
    graphType,
    // @ts-ignore convert renderer to TS.
    diagramClassDefs,
    idSelector
  );
  const style1 = document.createElement("style");
  style1.innerHTML = rules;
  svg.insertBefore(style1, firstChild);
  try {
    await diag.renderer.draw(text, id2, version, diag);
  } catch (e) {
    renderer.draw(text, id2, version);
    throw e;
  }
  const svgNode = root.select(`${enclosingDivID_selector} svg`);
  const a11yTitle = (_b = (_a = diag.db).getAccTitle) == null ? void 0 : _b.call(_a);
  const a11yDescr = (_d = (_c = diag.db).getAccDescription) == null ? void 0 : _d.call(_c);
  addA11yInfo(graphType, svgNode, a11yTitle, a11yDescr);
  root.select(`[id="${id2}"]`).selectAll("foreignobject > *").attr("xmlns", XMLNS_XHTML_STD);
  let svgCode = root.select(enclosingDivID_selector).node().innerHTML;
  log.debug("config.arrowMarkerAbsolute", config.arrowMarkerAbsolute);
  svgCode = cleanUpSvgCode(svgCode, isSandboxed, evaluate(config.arrowMarkerAbsolute));
  if (isSandboxed) {
    const svgEl = root.select(enclosingDivID_selector + " svg").node();
    svgCode = putIntoIFrame(svgCode, svgEl);
  } else if (!isLooseSecurityLevel) {
    svgCode = purify.sanitize(svgCode, {
      ADD_TAGS: DOMPURIFY_TAGS,
      ADD_ATTR: DOMPURIFY_ATTR
    });
  }
  attachFunctions();
  const tmpElementSelector = isSandboxed ? iFrameID_selector : enclosingDivID_selector;
  const node2 = select_default(tmpElementSelector).node();
  if (node2 && "remove" in node2) {
    node2.remove();
  }
  if (parseEncounteredException) {
    throw parseEncounteredException;
  }
  return {
    svg: svgCode,
    bindFunctions: diag.db.bindFunctions
  };
};
function initialize(options = {}) {
  var _a;
  if ((options == null ? void 0 : options.fontFamily) && !((_a = options.themeVariables) == null ? void 0 : _a.fontFamily)) {
    if (!options.themeVariables) {
      options.themeVariables = {};
    }
    options.themeVariables.fontFamily = options.fontFamily;
  }
  saveConfigFromInitialize(options);
  if ((options == null ? void 0 : options.theme) && options.theme in theme) {
    options.themeVariables = theme[options.theme].getThemeVariables(
      options.themeVariables
    );
  } else if (options) {
    options.themeVariables = theme.default.getThemeVariables(options.themeVariables);
  }
  const config = typeof options === "object" ? setSiteConfig(options) : getSiteConfig();
  setLogLevel(config.logLevel);
  addDiagrams();
}
function addA11yInfo(graphType, svgNode, a11yTitle, a11yDescr) {
  setA11yDiagramInfo(svgNode, graphType);
  addSVGa11yTitleDescription(svgNode, a11yTitle, a11yDescr, svgNode.attr("id"));
}
var mermaidAPI = Object.freeze({
  render,
  parse: parse2,
  parseDirective: parseDirective$1,
  initialize,
  getConfig,
  setConfig,
  getSiteConfig,
  updateSiteConfig,
  reset: () => {
    reset();
  },
  globalReset: () => {
    reset(defaultConfig);
  },
  defaultConfig
});
setLogLevel(getConfig().logLevel);
reset(getConfig());

export {
  isPrototype_default,
  overArg_default,
  baseKeys_default,
  Set_default,
  WeakMap_default,
  getTag_default,
  isObjectLike_default,
  isArguments_default,
  isArray_default,
  isLength_default,
  isArrayLike_default,
  stubFalse_default,
  isBuffer_default,
  baseUnary_default,
  nodeUtil_default,
  isTypedArray_default,
  isEmpty_default,
  addFunction,
  decodeEntities,
  mermaidAPI
};
//# sourceMappingURL=chunk-3PYFJK5A.js.map
