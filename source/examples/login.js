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
