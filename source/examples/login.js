// checking if user is signed in or not
auth.onAuthStateChanged(user => {
  if (user) {
    location = 'index.html'
  }
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const loginEmail = loginForm['email'].value;
  const loginPassword = loginForm['password'].value;
  console.log(loginEmail, loginPassword);
  auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
    location = 'index.html';
  }).catch(err => {
    const loginError = document.getElementById('login-error');
    loginError.innerText = err.message;
  });
});
