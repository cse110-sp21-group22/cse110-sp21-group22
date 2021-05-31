// checking if user is signed in or not
auth.onAuthStateChanged((user) => {
  if (user) {
    location = "./";
  }
});

var provider = new firebase.auth.GoogleAuthProvider();
const googleButton = document.getElementById("gbutton");
googleButton.addEventListener("click", function () {
  auth.signInWithPopup(provider).catch((error) => {
    const signupError2 = document.getElementById("signup-error");
    signupError2.innerText = error.message;
  });
});

var provider2 = new firebase.auth.OAuthProvider("microsoft.com");
const microsoftButton = document.getElementById("mbutton");
microsoftButton.addEventListener("click", function () {
  auth.signInWithPopup(provider2).catch((error) => {
    const signupError2 = document.getElementById("signup-error");
    signupError2.innerText = error.message;
  });
});

const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["email"].value;
  const password = signupForm["password"].value;
  const name = signupForm["name"].value;
  signupForm.reset();
  auth.createUserWithEmailAndPassword(email, password).catch((err) => {
    const signupError2 = document.getElementById("signup-error");
    signupError2.innerText = err.message;
  });
});
