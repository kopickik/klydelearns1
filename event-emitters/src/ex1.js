const EventEmitter = require('events')
/*
* All objects that emit events are instances of the EventEmitter class.
* These objects expose an eventEmitter.on() function that allows one or
* more functions to be attached to named events emitted by the object.
*/

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on('event', function(a, b) {
  console.log(a, b, this)
})

myEmitter.emit('event', '1', 2)

myEmitter.on('async', function() {
  setImmediate(() => console.log(++m))
})
/*
* When the EventEmitter object emits an event, all of the functions attached
* to that specific event are called synchronously. Any values returned by the
* called listeners are ignored and will be discarded.
*/

/*
* emitter.on(eventName, listener)#
* Added in: v0.1.101
* eventName <any> The name of the event.
* listener <Function> The callback function
* Adds the listener function to the end of the listeners array for the event
* named eventName. No checks are made to see if the listener has already been added.
* Multiple calls passing the same combination of eventName and listener will result
* in the listener being added, and called, multiple times.
*/
