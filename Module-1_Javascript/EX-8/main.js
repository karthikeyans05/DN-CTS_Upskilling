function register() {
    alert("Registration Successful");
}

document.getElementById("category").onchange = function() {
    console.log("Category:", this.value);
};

document.getElementById("search").addEventListener("keydown", function(e) {
    console.log("Key Pressed:", e.key);
});