'use strict'

module.exports = function duckCount() {
  const args = Array.prototype.slice.call(arguments)

  return args.filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

