'use strict'

function repeat(op, num) {
  return function() {
    for (var i = 0; i < num; i++) {
      op();
    }
  }
}

module.exports = { repeat, repeater }

// Their answer below

function repeater(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}