'use strict'

module.exports = function math(options) {
    this.add({role:'math',cmd:'sum'}, function (args, done) {
        var result = args.left + args.right
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

    this.wrap({role:'math'}, function (args, done) {
        args.left = Number(args.left).valueOf()
        args.right = Number(args.right).valueOf()
        this.prior(args, done)
    })

    return 'operations'
}
