const test = require('tape')
const defaults = require('../.')
const join = require('path').join

test('defaults 01', t => {
  defaults.apiDefaults(
    join(__dirname, 'fixtures/01target.yaml'),
    join(__dirname, 'fixtures/01source.yaml'),
    (e, r) => {
      t.equal(e, null, 'no errors found')
      const expected = require(join(__dirname, 'fixtures/01result.json'))
      t.deepEqual(r, expected, 'merge succeeded')
      t.end()
    })
})

test('defaults 02', t => {
  defaults.apiDefaults(
    join(__dirname, 'fixtures/02target.yaml'),
    join(__dirname, 'fixtures/02source.yaml'),
    (e, r) => {
      t.equal(e, null, 'no errors found')
      const expected = require(join(__dirname, 'fixtures/02result.json'))
      t.deepEqual(r, expected, 'merge succeeded')
      t.end()
    })
})

test('defaults 03', t => {
  defaults.apiDefaults(
    join(__dirname, 'fixtures/03target.yaml'),
    join(__dirname, 'fixtures/03source.yaml'),
    (e, r) => {
      t.equal(e, null, 'no errors found')
      const expected = require(join(__dirname, 'fixtures/03result.json'))
      t.deepEqual(r, expected, 'merge succeeded')
      t.end()
    })
})
