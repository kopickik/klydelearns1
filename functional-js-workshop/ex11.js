'use strict'

module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(a,b) {
    a.push(fn.call(a, b));
    return a;
  }, [])// Initialize accumulator to an array.
}
