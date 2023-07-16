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
        // Generate a secure token
        var accessToken = generateToken();
        sessionStorage.setItem("accessToken", accessToken);

        // Redirect to the project list page
        window.location.href = "index.html";
    } else {
        loginError.textContent = "Invalid username or password.";
    }
});

function generateToken() {
  // This function can be replaced with a secure token generation mechanism
  // For this example, a simple random string is generated.
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var token = "";
  for (var i = 0; i < 20; i++) {
      token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

