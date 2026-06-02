const container = document.querySelector("#eventContainer");

const card = document.createElement("div");
card.innerHTML = `
    <h3>Music Festival</h3>
    <button>Register</button>
`;

container.appendChild(card);

card.querySelector("button").onclick = function() {
    card.innerHTML += "<p>Registered Successfully</p>";
};