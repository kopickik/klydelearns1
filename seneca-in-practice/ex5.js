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

    this.add({role:'math',cmd:'sum'}, function (msg, respond) {
        if (!isFinite(msg.left) || !isFinite(msg.right)) {
            return respond(new Error('Expected left and right to be numbers.'))
        }
        this.prior(msg, function(err, result) {
            if (err) {
                return respond(err)
            }
            result.info = `${msg.left} + ${msg.right}`
            respond(null, result)
        })
    })

    return 'operations'
}
