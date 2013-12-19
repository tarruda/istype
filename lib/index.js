var undef;
var toString = Object.prototype.toString;


function type(obj) {
  if (obj === undef) return 'undefined';
  if (obj === null) return 'null';

  var t = typeof obj;

  switch (t) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'function':
    return t;
  }

  var str = toString.call(obj);

  switch (str) {
    case '[object Array]': return 'array';
    case '[object RegExp]': return 'regexp';
    case '[object Date]': return 'date';
    case '[object Arguments]': return 'arguments';
    case '[object Function]': return 'function';
    case '[object Boolean]': return 'boolean';
    case '[object Number]': return 'number';
    case '[object String]': return 'string';
    default:
      if (isBuffer(obj)) return 'buffer';
      return 'object';
  }
}


exports.array = function isArray(obj) {
  return type(obj) === 'array';
};


exports.regexp = function isRegExp(obj) {
  return type(obj) === 'regexp';
};


exports.date = function isDate(obj) {
  return type(obj) === 'date';
};


exports.arguments = function isArguments(obj) {
  return type(obj) === 'arguments';
};


exports.func = function isFunction(obj) {
  return type(obj) === 'function';
};


exports.boolean = function isBoolean(obj) {
  return type(obj) === 'boolean';
};


exports.undefined = function isUndefined(obj) {
  return obj === undef;
};


exports.number = function isNumber(obj) {
  return type(obj) === 'number';
};


exports.string = function isString(obj) {
  return type(obj) === 'string';
};


exports.nil = function isNil(obj) {
  return obj === null || obj === undef;
};


var isBuffer = exports.buffer = function isBuffer(obj) {
  return typeof Buffer === 'function' &&
    ((typeof Buffer.isBuffer === 'function' && Buffer.isBuffer(obj)) ||
    obj instanceof Buffer);
};


exports.type = type;
