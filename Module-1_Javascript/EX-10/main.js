function showEvent(name = "Community Event") {
    console.log(name);
}

const event = {
    name: "Music Show",
    date: "10 June 2026"
};

const { name, date } = event;

console.log(name);
console.log(date);

const eventList = ["Music", "Dance"];

const copiedList = [...eventList];

console.log(copiedList);

showEvent();