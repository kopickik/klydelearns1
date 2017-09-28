'use strict'

module.exports = function reduce(arr, fn, initial) {
  const count = arr.reduce(function (a, b) {// accumulator, string
    return Object.assign(a, {[b]: (a[b] || 0) + 1})
  }, {});// <!-- here's where that happens
  return count;
}

// Passed as tasked.  Official:

// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//   })(0, initial) // IIFE. kick off recursion with initial values
// }