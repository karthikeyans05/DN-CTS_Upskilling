const events = [
    { name: "Music Show", seats: 10, upcoming: true },
    { name: "Dance Event", seats: 0, upcoming: true },
    { name: "Workshop", seats: 20, upcoming: false }
];

events.forEach(event => {
    if (event.upcoming && event.seats > 0) {
        document.getElementById("events").innerHTML +=
            `<li>${event.name}</li>`;
    }
});

function register(event) {
    try {
        if (event.seats <= 0) {
            throw "No seats available";
        }

        event.seats--;
        console.log("Registered Successfully");
    }
    catch(error) {
        console.log(error);
    }
}

register(events[1]);