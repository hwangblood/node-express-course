// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
eventEmitter.on("my_event", (name, id) => {
  console.log(`data received successfully. user ${name} with id '${id}'.`);
});

eventEmitter.on("my_event", () => {
  console.log("event emitted successfully.");
});

eventEmitter.emit("my_event", "hwangblood", "22010430305");
