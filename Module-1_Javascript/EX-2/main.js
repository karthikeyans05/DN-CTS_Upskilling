const eventName = "Music Fest";
const eventDate = "10 June 2026";
let seats = 50;

let info = `Event: ${eventName}, Date: ${eventDate}, Seats: ${seats}`;
document.getElementById("output").innerHTML = info;

seats++;
console.log("Updated Seats:", seats);