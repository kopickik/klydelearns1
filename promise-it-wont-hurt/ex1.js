'use strict';

function doIt(time) {
    return setTimeout(function(words) {
        console.log(words);
    }, time);
}

doIt('TIMED OUT!', 300);
