const todoContainer = document.getElementById("todo-container");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

// checking if user is signed in or not
auth.onAuthStateChanged((user) => {
  if (!user) {
    location = "login.html";
  }
});

/**
 * Todo example class
 * @constructor
 */
class Todo {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
  toString() {
    return this.text;
  }
}

// Firestore data converter
var todoConverter = {
  toFirestore: function (todo) {
    return {
      id: todo.id,
      text: todo.text,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Todo(data.id, data.text);
  },
};

/**
 * Function to render data from a doc
 * @param {FirestoreDoc} individualDoc - Individual firestore doc
 */
function renderData(individualDoc) {
  let bujo = bujoConverter.fromFirestore(individualDoc);

  // parent div
  let parentDiv = document.createElement("div");
  parentDiv.className = "container todo-box";
  parentDiv.setAttribute("data-id", bujo.id);

  // task div
  let taskDiv = document.createElement("div");
  taskDiv.textContent = bujo.text;

  // button
  let trash = document.createElement("button");

  let i = document.createElement("i");
  i.className = "fas fa-trash";

  // appending
  trash.appendChild(i);

  parentDiv.appendChild(taskDiv);
  parentDiv.appendChild(trash);

  todoContainer.appendChild(parentDiv);

  // trash clicking event
  trash.addEventListener("click", (e) => {
    let id = e.target.parentElement.parentElement.getAttribute("data-id");
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("tasks")
          .collection(month + "-" + day)
          .doc("" + id)
          .delete();
      }
    });
  });
}

// adding tasks to firestore database
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = form["todos"].value;
  let id = new Date().getTime();
  let bujo = new BujoElement(id, text, 0, "test");
  form.reset();
  auth.onAuthStateChanged((user) => {
    if (user) {
      fs.collection("users")
        .doc(user.uid)
        .collection("data")
        .doc("tasks")
        .collection(month + "-" + day)
        .doc("" + id)
        .withConverter(bujoConverter)
        .set(bujo)
        .then(() => {
          console.log("todo added");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  });
});

/**
 * Function to log out user
 */
function logout() {
  auth.signOut();
}

// realtime listners
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("tasks")
      .collection(month + "-" + day)
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type == "added") {
            renderData(change.doc);
          } else if (change.type == "removed") {
            let li = todoContainer.querySelector(
              "[data-id=" + change.doc.id + "]"
            );
            todoContainer.removeChild(li);
          }
        });
      });
  }
});
