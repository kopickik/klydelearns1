const Rx = require('rxjs')

const concatMap = Rx.operators.concatMap
const delay = Rx.operators.delay
const mergeMap = Rx.operators.mergeMap
const of = Rx.Observable.of

const source = of(200, 1000)

const example = source.pipe(
  concatMap(val => of(`Delayed by ${val}ms`).pipe(delay(val))),
)

const subscription = example.subscribe(val => {
  return console.log(`With concatmap: ${val}`)
})

const mergeMapExample = source
  .pipe(
    delay(5000),
    mergeMap(val => of(`Delayed by ${val}ms`).pipe(delay(val))),
  )
  .subscribe(val => console.log(`With mergeMap: ${val}`))

subscription
mergeMapExample
