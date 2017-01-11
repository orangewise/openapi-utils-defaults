var test = require('tape')
var defaults = require('../.')
var join = require('path').join

test('defaults 01: properties are added', function (t) {
  defaults.apiDefaults(
    join(__dirname, 'fixtures/01target.yaml'),
    join(__dirname, 'fixtures/01source.yaml'),
    function (e, r) {
      t.equal(e, null, 'no errors found')
      var expected = require(join(__dirname, 'fixtures/01result.json'))
      t.deepEqual(r, expected, 'merge succeeded')
      t.end()
    })
})

test('defaults 02: properties are added', function (t) {
  defaults.apiDefaults(
    join(__dirname, 'fixtures/02target.yaml'),
    join(__dirname, 'fixtures/02source.yaml'),
    function (e, r) {
      t.equal(e, null, 'no errors found')
      var expected = require(join(__dirname, 'fixtures/02result.json'))
      t.deepEqual(r, expected, 'merge succeeded')
      t.end()
    })
})

test('defaults 03: response is not overwritten', function (t) {
  defaults.apiDefaults(
    join(__dirname, 'fixtures/03target.yaml'),
    join(__dirname, 'fixtures/03source.yaml'),
    function (e, r) {
      t.equal(e, null, 'no errors found')
      var expected = require(join(__dirname, 'fixtures/03result.json'))
      t.deepEqual(r, expected, 'merge succeeded')
      t.end()
    })
})

test('defaults 04: overwrite a nested key (method)', function (t) {
  defaults.apiDefaults(
    join(__dirname, 'fixtures/04target.yaml'),
    join(__dirname, 'fixtures/04source.yaml'),
    function (e, r) {
      t.equal(e, null, 'no errors found')
      var expected = require(join(__dirname, 'fixtures/04result.json'))
      t.deepEqual(r, expected, 'merge succeeded')
      t.end()
    })
})

test('README example', function (t) {
  defaults.apiDefaults(
    join(__dirname, 'fixtures/READMEtarget.yaml'),
    join(__dirname, 'fixtures/READMEsource.yaml'),
    function (e, r) {
      t.equal(e, null, 'no errors found')
      var expected = require(join(__dirname, 'fixtures/READMEresult.json'))
      t.deepEqual(r, expected, 'merge succeeded')
      t.end()
    })
})
