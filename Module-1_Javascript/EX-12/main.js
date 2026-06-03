document.getElementById("send").onclick = function() {

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Karthi",
                event: "Music Show"
            })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").innerHTML =
                "Registration Successful";
        })
        .catch(error => {
            document.getElementById("message").innerHTML =
                "Registration Failed";
        });

    }, 2000);
};