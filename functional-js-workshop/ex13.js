'use strict'

function repeat (op, num) {
  // modify this so it can be interrupted
  setTimeout(function() {
    if (num<=0) return;
    op()
    return repeat(op, --num)
  }, 0);
}

module.exports = repeat