var find = require('lodash.find')
var findIndex = require('lodash.findindex')
var isequal = require('lodash.isequal')
var defaults = require('lodash.defaultsdeep')
var RefParser = require('json-schema-ref-parser')

var union = function (targetElements, sourceElements) {
  // target has key but is is an array, create a union first
  var elements = []
  var unprocessedTargetElements = targetElements
  sourceElements.forEach(function (sourceElement) {
    var targetElement = find(unprocessedTargetElements, { name: sourceElement.name })
    var targetElementIndex = findIndex(unprocessedTargetElements, { name: sourceElement.name })
    if (isequal(targetElement, sourceElement)) {
      elements.push(targetElement)
    } else {
      elements.push(defaults(targetElement, sourceElement))
    }
    if (targetElementIndex >= 0) unprocessedTargetElements.splice(targetElementIndex, 1)
  })

  return elements.concat(unprocessedTargetElements)
}

// Function that loops through the keys of an openapi definition (target) and
// tries to add defaults from a source definition
var applyDefaults = function (target, source) {
  var result = target

  Object.keys(source).forEach(function (sourceKey) {
    if (!result[sourceKey]) {
      // Target does not have this key, add it without changing
      result[sourceKey] = source[sourceKey]
    } else if (result[sourceKey] && !Array.isArray(source[sourceKey])) {
      // target has key but is is not an array, assign the source properties
      // onto the target properties, and then add them to the target
      result[sourceKey] = defaults(result[sourceKey], source[sourceKey])
    } else if (
      result[sourceKey] &&
      Array.isArray(result[sourceKey]) &&
      Array.isArray(source[sourceKey])) {
      // target has key but is is an array, create a union first,
      // and then add them to the target
      result[sourceKey] = union(result[sourceKey], source[sourceKey])
    }
  })

  return result
}

exports.apiDefaults = function (target, source, cb) {
  RefParser.dereference(target, function (e, t) {
    if (e) return cb(e)
    RefParser.dereference(source, function (e, s) {
      if (e) return cb(e)
      return cb(null, applyDefaults(t, s))
    })
  })
}
