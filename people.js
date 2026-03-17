const EventEmitter = require("node:events");

class School extends EventEmitter {
  startPeriod() {
    this.emit("bellRing", "first class ended");
  }
}

module.exports = School;
