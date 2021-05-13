const todoContainer = document.getElementById('todo-container');

// checking if user is signed in or not
auth.onAuthStateChanged(user => {
  if (!user) {
    location = 'login.html';
  }
});

class Todo {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
  toString() { return this.text; }
}

// Firestore data converter
var todoConverter = {
  toFirestore : function(todo) {
    return {
      id : todo.id,
      text : todo.text,
    };
  },
  fromFirestore : function(snapshot, options) {
    const data = snapshot.data(options);
    return new Todo(data.id, data.text);
  }
};

// retriving tasks
function renderData(individualDoc) {
  // parent div
  let parentDiv = document.createElement('div');
  parentDiv.className = 'container todo-box';
  parentDiv.setAttribute('data-id', individualDoc.id);

  // task div
  let taskDiv = document.createElement('div');
  taskDiv.textContent = individualDoc.data().text;

  // button
  let trash = document.createElement('button');

  let i = document.createElement('i');
  i.className = 'fas fa-trash';

  // appending
  trash.appendChild(i);

  parentDiv.appendChild(taskDiv);
  parentDiv.appendChild(trash);

  todoContainer.appendChild(parentDiv);

  // trash clicking event
  trash.addEventListener('click', e => {
    let id = e.target.parentElement.parentElement.getAttribute('data-id');
    auth.onAuthStateChanged(user => {
      if (user) {
        fs.collection(user.uid).doc(id).delete();
      }
    });
  });
}

// retriving username
auth.onAuthStateChanged(user => {
  const username = document.getElementById('username');
  if (user) {
    fs.collection('users').doc(user.uid).get().then(
        (snapshot) => { username.innerText = snapshot.data().name; });
  }
});

// adding tasks to firestore database
const form = document.getElementById('form');
let date = new Date();
let time = date.getTime();
let counter = time;
form.addEventListener('submit', e => {
  e.preventDefault();
  const todos = form['todos'].value;
  let id = counter += 1;
  form.reset();
  auth.onAuthStateChanged(user => {
    if (user) {
      fs.collection(user.uid)
          .doc('_' + id)
          .withConverter(todoConverter)
          .set(new Todo(id, todos))
          .then(() => { console.log('todo added'); })
          .catch(err => { console.log(err.message); });
    }
  });
});

// logout
function logout() { auth.signOut(); }

// realtime listners
auth.onAuthStateChanged(user => {
  if (user) {
    fs.collection(user.uid).onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type == 'added') {
          renderData(change.doc);
        } else if (change.type == 'removed') {
          let li =
              todoContainer.querySelector('[data-id=' + change.doc.id + ']');
          todoContainer.removeChild(li);
        }
      });
    });
  }
});
