const loginForm = document.getElementById("reset-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailAddress = loginForm["email"].value;
  auth
    .sendPasswordResetEmail(emailAddress).then(function() {
      location = "./login.html";
    }).catch(function(err) {
      const loginError = document.getElementById("reset-error");
      loginError.innerText = err.message;  
    });
});
