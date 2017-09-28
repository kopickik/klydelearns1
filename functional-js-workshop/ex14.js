'use strict'

function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  setTimeout(function() {
    operation()
    return repeat(operation, --num);
  }, 50);
}

function trampoline(fn) {
  if (!fn && typeof fn !== Function.prototype.fn) return
  return fn = fn()
  // You probably want to implement a trampoline!
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  trampoline(function () {
    return repeat(operation, num)
  })
}