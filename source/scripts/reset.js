const loginForm = document.getElementById("reset-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailAddress = loginForm["email"].value;
  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function () {
      const loginError = document.getElementById("reset-error");
      loginError.innerText =
        "A password reset link has been sent to your email";
      setTimeout(function () {
        location = "./login.html";
      }, 3000);
    })
    .catch(function (err) {
      const loginError = document.getElementById("reset-error");
      loginError.innerText = err.message;
    });
});
