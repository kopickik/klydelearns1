'use strict'
var math = require('./ex5')
var seneca = require('seneca')()
var NUMS1 = parseFloat((process.argv[2] || '').split(','))
var NUMS2 = parseFloat((process.argv[3] || '').split(','))

seneca.use(math)
    .act({
        role: 'math',
        cmd: 'sum',
        left: NUMS1,
        right: NUMS2
    }, function (err, result) {
        if (err) {
            return console.log('Hit a snag: ', err);
        }
        console.log(result);
    })
    .act({
        role: 'math',
        cmd: 'sum',
        integer: true,
        left: NUMS1,
        right: NUMS2
    }, function (err, result) {
        if (err) {
            return console.log('Hit a snag: ', err);
        }
        console.log(result);
    });

