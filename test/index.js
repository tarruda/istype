var assert = require('assert');

var is = require('../lib');


for (var k in assert) global[k] = assert[k];


runMocha({
  'Suite': {
    'function': function() {
      ok(is.func(Object));
      ok(is.func(new Function('console.log(123)')));
    },

    'number': function() {
      ok(is.number(5));
      ok(is.number(new Number(5)));
    },

    'boolean': function() {
      ok(is.boolean(false));
      ok(is.boolean(new Boolean(false)));
    },

    'string': function() {
      ok(is.string('string'));
      ok(is.string(new String('string')));
    },

    'null': function() {
      ok(is.nil(null));
      ok(is.nil(undefined));
    },

    'undefined': function() {
      ok(is.undefined(undefined));
      ok(!is.undefined(null));
    },

    'regexp': function() {
      ok(is.regexp(/regexp/));
      ok(is.regexp(new RegExp('regexp')));
    },

    'date': function() {
      ok(is.date(new Date()));
    },

    'array': function() {
      ok(is.array([]));
      ok(is.array(new Array()));
    },

    'type': function() {
      equal(is.type(null), 'null');
      equal(is.type(undefined), 'undefined');
      equal(is.type(5), 'number');
      equal(is.type(new Number(5)), 'number');
      equal(is.type(true), 'boolean');
      equal(is.type(new Boolean(true)), 'boolean');
      equal(is.type('str'), 'string');
      equal(is.type(new String('str')), 'string');
      equal(is.type(new Date()), 'date');
      equal(is.type(new RegExp('regexp')), 'regexp');
      equal(is.type(/regexp/), 'regexp');
      equal(is.type(new Array()), 'array');
      equal(is.type([]), 'array');
      equal(is.type(new Function()), 'function');
      equal(is.type(Object), 'function');
    }
  }
});
