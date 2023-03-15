var events = require('events');
var eventEmitter = new events.EventEmitter();


// ===================
eventEmitter.on('someEvent', function(msg) {
    console.log('connection event fired. ' + msg);
});

eventEmitter.emit('someEvent', 'Hello World! The event is emmited.');
// output: connection event fired. Hello World! The event is emmited.
// ===================