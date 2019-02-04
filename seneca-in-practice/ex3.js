'use strict'

module.exports = function math(options) {
    this.add({role:'math',cmd:'sum'}, function (args, done) {
        var result = args.left + args.right;
        done(null, {answer: result})
    })

    return 'operations'
}
