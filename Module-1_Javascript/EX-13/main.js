document.getElementById("submitBtn")
.addEventListener("click", function() {

    console.log("Step 1: Button Clicked");

    let user = {
        name: "Karthi",
        email: "test@gmail.com"
    };

    console.log("Step 2: User Data", user);

    debugger;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user)
    });

    console.log("Step 3: Request Sent");
});