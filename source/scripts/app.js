// checking if user is signed in or not
auth.onAuthStateChanged((user) => {
  if (!user) {
    location = "login.html";
  }
});

/**
 * Function to hide spinner and show page on load
 */
function PageLoaded() {
  document.getElementById("spinner").classList.add("d-none");
  document.getElementById("main").classList.remove("d-none");
}

/**
 * Function to show spinner and hide page
 */
function PageUnloaded() {
  document.getElementById("spinner").classList.remove("d-none");
  document.getElementById("main").classList.add("d-none");
}

/**
 * Function to show navbar when loaded
 */
function NavbarLoaded() {
  document.getElementById("navbar").classList.remove("d-none");
}

/**
 * BuJo Task/notes class
 * @constructor
 * @param {string} id id of task/note
 * @param {string} text task/note contents
 * @param {int} level specifies sub-elements
 * @param {int} type specifies type of task/note
 * @param {int} signifier sets signifier
 */
 class BujoElement {
  constructor(id, text, level, type, signifier) {
    this.id = id;
    this.text = text;
    this.level = level;
    this.type = type;
    this.signifier = signifier;
  }

  /**
   * Update a task/note
   * @param {string} text task/note contents
   * @param {int} level specifies what sub-level
   * @param {int} type specifies what type of task/note
   * @param {int} signifier specifies signifier
   */
  update(text, level, type, signifier) {
    this.text = text;
    this.level = level;
    this.type = type
    this.signifier = signifier;
  }

  /**
   * Sync task/note to database
   */
  sync() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("notes")
          .collection(month + "-" + day)
          .doc("" + this.id)
          .withConverter(bujoConverter)
          .set(this)
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  }
}

// Firestore data converter
var bujoConverter = {
  toFirestore: function (bujo) {
    return {
      id: bujo.id,
      text: bujo.text,
      level: bujo.level,
      type: bujo.type,
      signifier: bujo.signifier
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new BujoElement(data.id, data.text, data.level, data.type, data.signifier);
  },
};
