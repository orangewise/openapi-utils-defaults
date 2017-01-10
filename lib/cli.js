var minimist = require('minimist')
var fs = require('fs')
var join = require('path').join

function usage () {
  return fs.readFileSync(join(__dirname, 'usage.txt'), 'utf8')
}

exports.parse = function () {
  var options = minimist(process.argv.slice(2))
  if (!(options.t && options.s)) {
    console.log(usage())
    process.exit(1)
  } else {
    return options
  }
}
