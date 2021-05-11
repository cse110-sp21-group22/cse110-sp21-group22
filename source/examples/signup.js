const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  const name = signupForm['name'].value;
  signupForm.reset();
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    const userCredentials = {
      name: name,
      email: email,
      createdAt: new Date().toISOString(),
      uid: cred.user.uid
    };
    return db.collection('users').doc(cred.user.uid).set(userCredentials).then(() => {
      location = 'login.html';
    }).catch(err => {
      const signupError = document.getElementById('signup-error');
      signupError.innerText = err.message;
    });
  }).catch(err => {
    const signupError2 = document.getElementById('signup-error');
    signupError2.innerText = err.message;
  });
});
