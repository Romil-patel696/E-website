const LoginForm = document.getElementById("Login-form");
const LoginButton = document.getElementById("login-form-submit");
const LoginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ROMILPATEL" && password === "RP123") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})