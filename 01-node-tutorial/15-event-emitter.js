var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("my_event", () => {
  console.log("data received successfully.");
});

eventEmitter.emit("my_event");
