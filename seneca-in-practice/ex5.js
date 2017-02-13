'use strict'

module.exports = function math(options) {
    this.add({role:'math',cmd:'sum'}, function (args, done) {
        var result = args.left + args.right;
        done(null, {answer: result})
    })

    this.add({role:'math', cmd:'product'}, function (args, done) {
        var result = args.left * args.right;
        done(null, {answer: result})
    })

    this.add({role:'math',cmd:'sum',integer:true}, function (args, done) {
        var result = Math.floor(args.left) + Math.floor(args.right);
        done(null, {answer: result})
    })

    return 'operations'
}
