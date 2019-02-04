'use strict';

var Rx = require('rxjs/Rx');

var mailCounter = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(function () {
        observer.next(4);
        observer.complete();
    }, 1000);
});
console.log('just before subscribe.');
mailCounter.subscribe({
    next: function next(x) {
        return console.log('got value ' + x);
    },
    error: function error(err) {
        return console.error('something wrong happened: ' + err);
    },
    complete: function complete() {
        return console.log('done.');
    }
});
console.log('just after subscribe.');
