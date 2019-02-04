'use strict';

const fs = require('fs')

var peach = function (obj) {
    // trace the message "traced"
    console.trace("traced");
    // dump obj to stdout
    console.log(obj);
}

var bowser = function (callback) {
    fs.readFile(process.argv[2], {encoding: 'utf-8'}, callback)
}

var koopa = function (error, file) {
    // handle error by printing something to stderr
    if (error) { return console.error("Handle your errors folks!")};
    peach(JSON.parse(file));
}

bowser(koopa);