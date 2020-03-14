var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on("connection",function connectHandler(){
    console.log("connection established");
    emitter.emit('data_received');
});
emitter.on("data_received",function(){
    console.log("Data Received");
 });
emitter.emit('connection');
