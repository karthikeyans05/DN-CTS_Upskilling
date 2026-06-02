fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});

async function getEvents() {
    try {
        document.getElementById("loading").style.display = "block";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        console.log(data);

        document.getElementById("loading").style.display = "none";
    }
    catch(error) {
        console.log(error);
    }
}

getEvents();