var defaults = require('lodash.defaultsdeep')
var RefParser = require('json-schema-ref-parser')

exports.apiDefaults = function (target, source, cb) {
  RefParser.dereference(target, function (e, t) {
    if (e) return cb(e)
    RefParser.dereference(source, function (e, s) {
      if (e) return cb(e)
      return cb(null, defaults(t, s))
    })
  })
}
