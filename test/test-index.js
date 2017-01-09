var test = require('tape')
var defaults = require('../.')
var join = require('path').join

test('defaults 01', function (t) {
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

test('defaults 02', function (t) {
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

test('defaults 03', function (t) {
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
