/* global first, second */
'use strict';



var second = first.then(function (resolved) {
    return second(resolved);
})

second.then(console.log)