'use strict'

module.exports = function Spy(target, method) {
  var originalFn = target[method];// test: [Function test]
  var result = {
    count: 0
  }
  target[method] = function() {// override
    result.count++;
    return originalFn.apply(this, arguments)
  }
  return result
}

