let events = [];

function addEvent(name, category) {
    events.push({ name, category });
}

function registerUser(eventName) {
    console.log("Registered for " + eventName);
}

function filterEventsByCategory(category, callback) {
    let result = events.filter(event => event.category === category);
    callback(result);
}

function registrationCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const trackRegistration = registrationCounter();

addEvent("Music Show", "Music");
addEvent("Cooking Class", "Workshop");

filterEventsByCategory("Music", function(result) {
    console.log(result);
});

console.log(trackRegistration());
console.log(trackRegistration());