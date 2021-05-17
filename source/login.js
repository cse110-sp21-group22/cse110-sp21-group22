// checking if user is signed in or not
auth.onAuthStateChanged((user) => {
  if (user) {
    location = "index.html";
  }
});

var provider = new firebase.auth.GoogleAuthProvider();
const googleButton = document.getElementById("gbutton");
googleButton.addEventListener("click", function() {
  auth.signInWithPopup(provider)
      .then(() => { location = "index.html"; })
      .catch((err) => {
        const loginError = document.getElementById("login-error");
        loginError.innerText = err.message;
      });
});

var provider2 = new firebase.auth.OAuthProvider('microsoft.com');
const microsoftButton = document.getElementById("mbutton");
microsoftButton.addEventListener("click", function() {
  auth.signInWithPopup(provider2)
      .then(() => { location = "index.html"; })
      .catch((err) => {
        const loginError = document.getElementById("login-error");
        loginError.innerText = err.message;
      });
});

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginEmail = loginForm["email"].value;
  const loginPassword = loginForm["password"].value;
  auth.signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(() => { location = "index.html"; })
      .catch((err) => {
        const loginError = document.getElementById("login-error");
        loginError.innerText = err.message;
      });
});
