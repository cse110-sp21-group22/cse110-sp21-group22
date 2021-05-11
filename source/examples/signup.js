const signupForm = document.getElementById("signup-form");
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    const name = signupForm['name'].value;
    // console.log(email, password);
    signupForm.reset();
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        // console.log(cred);
        const userCredentials = {
            name: name,
            email: email,
            createdAt: new Date().toISOString(),
            uid: cred.user.uid
        };
        return db.collection('users').doc(cred.user.uid).set(userCredentials).then(() => {
            // console.log('success');
            location = "login.html";
        }).catch(err => {
            // console.log(err.message);
            const signupError = document.getElementById('signupError');
            signupError.innerText = err.message;
        })
    }).catch(err => {
        // console.log(err.message);
        const signupError2 = document.getElementById('signupError');
        signupError2.innerText = err.message;
    })
})