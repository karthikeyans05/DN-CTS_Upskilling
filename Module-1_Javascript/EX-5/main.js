function Event(name, seats) {
    this.name = name;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

let event1 = new Event("Music Show", 30);

console.log(event1.checkAvailability());

Object.entries(event1).forEach(([key, value]) => {
    console.log(key, value);
});