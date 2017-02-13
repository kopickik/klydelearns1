'use strict'

module.exports = function math (options) {
    this.add({role:'math',cmd:'sum'}, function (args, done) {
        var operation = this.make$('operation')
        operation.cmd = 'sum'
        operation.left = args.left
        operation.right = args.right
        operation.save$(function (err, operation) {
            if (err) {
                return done(err)
            }
            return done(null, {answer: args.left + args.right})
        })
    })

    this.add({role:'math', cmd:'product'}, function (args, done) {
        var operation = this.make$('operation')
        operation.cmd = 'product'
        operation.left = args.left
        operation.right = args.right
        operation.save$(function (err, operation) {
            if (err) {
                return done(err)
            }
            return done(null, {answer: args.left * args.right})
        })
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

    this.add({role:'math', cmd:'operation-history'}, function (args, done) {
        var operation = this.make$('operation')
        operation.list$({}, function (err, list) {
            if (err) {
                return done(err)
            }
            return done(null, {answer: list})
        })
    })

    this.decorate('availableOperations', function() {
        return ['sum','product','operation-history']
    })
}
