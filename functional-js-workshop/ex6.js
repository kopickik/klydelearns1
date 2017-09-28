'use strict'

// The 2nd argument (after the anon func) to Array.prototype.reduce
// INITIALIZES THE VARIABLE "COUNT" TO AN OBJECT.

module.exports = function countWords(inputWords) {
  const count = inputWords.reduce(function (a, b) {// accumulator, string
    return Object.assign(a, {[b]: (a[b] || 0) + 1})
  }, {});// <!-- here's where that happens
  return count;
}

// The above worked as tasked.  Here is the official solution.

function countEm(arr) {
  return arr.reduce(function (countMap, word) {
    countMap[word] = ++countMap[word] || 1
    return countMap
  }, {})
};