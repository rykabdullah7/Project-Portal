var loginForm = document.getElementById("login-form");
var loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", (event)  =>{
    event.preventDefault();

    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Static credentials for authentication
    var validUsername = "admin@gmail.com";
    var validPassword = "password";

    if (username === validUsername && password === validPassword) {
        sessionStorage.setItem("isLoggedIn","true")
        // Redirect to the project list page
        window.location.href = "index.html";
    } else {
        loginError.textContent = "Invalid username or password.";
    }
});
