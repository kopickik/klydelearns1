/**
 * Querying Arrays only gives us a snapshot. By contrast, querying Observables
 * allows us to create data sets that react and update as the system changes over time.
 * Let's start off by contrasting Observable with Events.
 */
const _ = require('lodash')
const { Observable } = require('rxjs');

// Event subscription
(function(btn) {
    let handler = (e) => {
        btn.removeEventListener("click", handler);
        console.log("Button clicked.  Unsubscribing..")
    }
    btn.addEventListener("click", handler)
})

/**
 * Subscribing to an Event and traversing an Array are fundamentally the same operation.
 * The only difference is that Array traversal is synchronous and completes, and Event
 * traversal is asynchronous and never completes. If we convert a button click Event
 * to an Observable object, we can use forEach() to traverse the Event.
 */
(function(btn) {
    let buttonClicks = Observable.fromEvent(btn, "click")
    let subscription = buttonClicks.forEach((clickEvent) => {
        console.log("Button was clicked.  Stopping event traversal..")
        subscription.dispose()
    })
})

/**
 * An Observable based on an Event will never complete on its own. take()
 * creates a new sequence that completes after a discrete number of items arrive.
 * This is important, because unlike an Event, when an Observable sequence completes
 * it unsubscribes all of its listeners. That means that if we use take() to complete
 * our Event sequence, we don't need to unsubscribe!
 */
(function(btn) {
    let buttonClicks = Observable.fromEvent(btn, "click")
    buttonClicks
        .take(1)
        .forEach(() => console.log("Button was clicked. Stopping traversal.."))
})()
