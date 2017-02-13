'use strict'

module.exports = function math(options) {
    this.add({role:'math',cmd:'sum'}, function (args, done) {
        var result = Number(args.left) + Number(args.right);
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

    this.add({role:'math',cmd:'sum'}, function (args, done) {
        if (!isFinite(args.left) || !isFinite(args.right)) {
            return done(new Error('Expected left and right to be numbers.'))
        }
        this.prior(args, function(err, result) {
            if (err) {
                return done(err)
            }
            result.info = `${args.left} + ${args.right}`
            done(null, result)
        })
    })

    return 'operations'
}
