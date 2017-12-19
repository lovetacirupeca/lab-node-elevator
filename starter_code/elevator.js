class Elevator {
  constructor(){
    this.floor = 0;
    this.maxFloor = 10;
    this.requests = [];
    this.direction = "up";
  }

  start() {
    this.startInterval = setInterval(() => {this.update();}, 1000);
  }
  stop() {
    clearInterval(this.startInterval);
  }
  update() {
    this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    this.floor == this.maxFloor ? console.log("You're on the top floor") : this.floor++;
    this.direction = "up";
  }
  floorDown() {
    this.floor == 0 ? console.log("You are in the vestibule") : this.floor--;
    this.direction = "down";
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
