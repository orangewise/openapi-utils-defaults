const defaults = require('lodash.defaultsdeep')
const RefParser = require('json-schema-ref-parser')

const apiDefaults = (target, source, cb) => {
  RefParser.dereference(target, (e, t) => {
    if (e) return cb(e)
    RefParser.dereference(source, (e, s) => {
      if (e) return cb(e)
      return cb(null, defaults(t, s))
    })
  })
}

module.exports = { apiDefaults }
