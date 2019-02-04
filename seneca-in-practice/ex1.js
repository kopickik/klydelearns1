'use strict'
var seneca = require('seneca')()

seneca.add({role:'math',cmd:'sum'}, function (msg, respond) {
    var result = msg.left + msg.right;
    respond(null, {answer: result });
})

module.exports = seneca
