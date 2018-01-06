const Rx = require('rxjs/Rx');

let mailCounter = Rx.Observable.create(function (observer) {
    observer.next(JSON.stringify({name: 'Introduction', content: `Today I'd like to introduce myself.`}, null, 2))
    observer.next(2)
    observer.next(3)
    setTimeout(() => {
        observer.next(4)
        observer.complete()
    }, 1000)
})
console.log(`just before subscribe.`)
mailCounter.subscribe({
    next: (x) => console.log(`got value ${x}`),
    error: err => console.error(`something wrong happened: ${err}`),
    complete: () => console.log(`done.`)
})
console.log(`just after subscribe.`)
