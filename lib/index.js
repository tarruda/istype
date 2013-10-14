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
    default: return 'object';
  }
}


exports.array = function(obj) {
  return type(obj) === 'array';
};


exports.regexp = function(obj) {
  return type(obj) === 'regexp';
};


exports.date = function(obj) {
  return type(obj) === 'date';
};


exports.arguments = function(obj) {
  return type(obj) === 'arguments';
};


exports.func = function(obj) {
  return type(obj) === 'function';
};


exports.boolean = function(obj) {
  return type(obj) === 'boolean';
};


exports.undefined = function(obj) {
  return obj === undef;
};


exports.number = function(obj) {
  return type(obj) === 'number';
};


exports.string = function(obj) {
  return type(obj) === 'string';
};


exports.nil = function(obj) {
  return obj === null || obj === undef;
};


exports.type = type;
