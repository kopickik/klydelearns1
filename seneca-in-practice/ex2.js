'use strict'
var seneca = require('./ex1')
var NUMS1 = (process.argv[2] || '').split(',')
var NUMS2 = (process.argv[3] || '').split(',')

seneca.act({
    role: 'math',
    cmd: 'sum',
    left: parseInt(NUMS1, 10),
    right: parseInt(NUMS2, 10)
}, function (err, result) {
    if (err) {
        return console.log('Hit a snag: ', err);
    }
    console.log(result);
});

