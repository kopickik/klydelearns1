'use strict'

module.exports = function countWords(inputWords) {
  const count = inputWords.reduce(function (a, b) {
    return Object.assign(a, {[b]: (a[b] || 0) + 1})
  }, {});// THE SECOND ARGUMENT TO REDUCE INITIALIZES COUNT TO AN OBJECT.
  return count;
}

// The above worked as tasked.  Here is the official solution.
// +1 LOC for theirs, mind you.

function countEm(arr) {
  return arr.reduce(function (countMap, word) {
    countMap[word] = ++countMap[word] || 1
    return countMap
  }, {})
};