let events = [];

events.push({
    name: "Music Night",
    category: "Music"
});

events.push({
    name: "Baking Workshop",
    category: "Workshop"
});

let musicEvents = events.filter(event =>
    event.category === "Music"
);

console.log(musicEvents);

let cards = events.map(event =>
    `Workshop on ${event.name}`
);

console.log(cards);