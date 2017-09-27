'use strict'

function doubleAll(nums) {
  var result = []
  for (var i = 0; i < nums.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

function dblAll(nums) {
  return nums.map(function(num) {
    return num * 2
  })
}

module.exports = dblAll