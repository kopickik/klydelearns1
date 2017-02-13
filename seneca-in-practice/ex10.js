'use strict';

var seneca = require('seneca')()
//var math = require('./ex8')// just send messages out.. :)

seneca
    .client({type:'tcp', host: '127.0.0.1'})
    .act({
        role:'math',cmd:'sum',
        left:process.argv[2],right:process.argv[3]
    }, function (err, result) {
        if (err) {
            console.error(err)
        }
        console.log(result)
        this.close()
    })
