dailyLog = document.getElementById("daily-log");
add = document.getElementById("add");
addItem = document.getElementById("add-item");
veryHappy = document.getElementById("very-happy");
happy = document.getElementById("happy");
neutral = document.getElementById("neutral");
sad = document.getElementById("sad");
verySad = document.getElementById("very-sad");

window.addEventListener("resize", resize, true);

/* very happy mood selected */
veryHappy.addEventListener("click", function () {
  colorChange("very-happy", veryHappy, "green");
});

/* happy mood selected */
happy.addEventListener("click", function () {
  colorChange("happy", happy, "lightgreen");
});

/* neutral mood selected */
neutral.addEventListener("click", function () {
  colorChange("neutral", neutral, "yellow");
});

/* sad mood selected */
sad.addEventListener("click", function () {
  colorChange("sad", sad, "orange");
});

/* very sad mood selected */
verySad.addEventListener("click", function () {
  colorChange("very-sad", verySad, "red");
});

var rosethorn = document.getElementById("rosethorn");
var rose = document.getElementById("rose");
var thorn = document.getElementById("thorn");
var date_string = month + "-" + day;

auth.onAuthStateChanged((user) => {
  fs.collection("users")
    .doc(user.uid)
    .collection("data")
    .doc("rosethorn")
    .onSnapshot((doc) => {
      try {
        rose.innerHTML = doc.data().rose;
        thorn.innerHTML = doc.data().thorn;
      } catch (err) {
        console.log(err);
      }
    });
});

rosethorn.addEventListener("focusout", (event) => {
  auth.onAuthStateChanged((user) => {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("rosethorn")
      .update({
        date: [date_string],
        rose: [rose.innerHTML],
        thorn: [thorn.innerHTML],
      })
      .catch((err) => {
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("rosethorn")
          .set({
            date: [date_string],
            rose: [rose.innerHTML],
            thorn: [thorn.innerHTML],
          });
      });
  });
});

auth.onAuthStateChanged((user) => {
  fs.collection("users")
    .doc(user.uid)
    .collection("data")
    .doc("rosethorn")
    .get()
    .then((doc) => {
      try {
        if (doc.data().date != date_string) {
          fs.collection("users")
            .doc(user.uid)
            .collection("data")
            .doc("rosethorn")
            .set({
              date: [date_string],
              rose: "Rose: ",
              thorn: "Thorn: ",
            });
        }
      } catch (err) {
        console.log(err);
      }
    });
});

// Demonstration of functionality of collapsible sub-lists
$(".fa-chevron-down").on("click", function () {
  $("#item2").toggleClass("hide");
  $(this).toggleClass("fa-chevron-down");
  $(this).toggleClass("fa-chevron-right");
});

// Disable enter key
$(".text").on("keydown", function (e) {
  // Enter was pressed
  if (e.keyCode == 13) {
    // prevent default behavior
    e.preventDefault();
  }
});

// Clear "Add new note"
$("#add-item").on("click", function () {
  $(this).children().empty();
});

// Reset message if no new note
$("#add-item").on("focusout", function () {
  if ($(this).children().text() == "") {
    $(this).children().text("Add new note");
  }
});

/**
 * Set the signifier for a note
 * @param {int} signifier specifies which signifier
 * @param {node} node node to set signifier for
 */
function setSignifier(signifier, node) {
  node.children(":first").removeClass();
  switch (signifier) {
    case 1:
      node.children(":first").addClass("fa");
      node.children(":first").addClass("fa-star");
      break;
    case 2:
      node.children(":first").addClass("fa");
      node.children(":first").addClass("fa-eye");
      break;
    case 3:
      node.children(":first").addClass("fa");
      node.children(":first").addClass("fa-exclamation");
      break;
    default:
      node.children(":first").addClass("fa");
  }
}

/**
 * Function to render data from a doc
 * @param {FirestoreDoc} individualDoc - Individual firestore doc or bujo
 *     element
 */
function renderData(individualDoc) {
  let note = bujoConverter.fromFirestore(individualDoc);

  // parent div
  let parentDiv = document.createElement("div");
  parentDiv.className = "item";
  parentDiv.setAttribute("id", note.id);

  // bullet-sub
  let bulletSubDiv = document.createElement("div");
  bulletSubDiv.className = "bullet bullet-sub";
  let bulletSubI = document.createElement("i");
  bulletSubI.className = "fa";
  parentDiv.setAttribute("signifier", note.signifier);
  bulletSubDiv.appendChild(bulletSubI);

  // bullet-main
  let bulletMainDiv = document.createElement("div");
  bulletMainDiv.className = "bullet bullet-main";
  let bulletMainI = document.createElement("i");
  bulletMainI.className = "fa fa-minus";
  parentDiv.setAttribute("type", note.type);
  bulletMainDiv.appendChild(bulletMainI);

  // note div
  let noteDiv = document.createElement("div");
  noteDiv.className = "text";
  let noteDivP = document.createElement("p");
  noteDivP.setAttribute("contenteditable", "true");
  noteDivP.textContent = note.text;
  noteDiv.appendChild(noteDivP);

  // options
  let optionsDiv = document.createElement("div");
  optionsDiv.className = "options";
  let optionsDivI = document.createElement("i");
  optionsDivI.className = "fa fa-ellipsis-h";
  optionsDiv.appendChild(optionsDivI);

  // appending
  parentDiv.appendChild(bulletSubDiv);
  parentDiv.appendChild(bulletMainDiv);
  parentDiv.appendChild(noteDiv);
  parentDiv.appendChild(optionsDiv);

  dailyLog.insertBefore(parentDiv, add);
  setSignifier(note.signifier, $("#" + note.id).children(":first"));
  addItem.firstElementChild.textContent = "Add new note";

  // Disable enter key
  noteDiv.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
      event.preventDefault();
    }
  });

  // Update note on edit
  $("#" + note.id)
    .children(":nth-child(3)")
    .on("focusout", function () {
      var signifier = $(this).parent().attr("signifier");
      var id = $(this).parent().attr("id");
      var note = new BujoElement(id, $(this).text(), 0, 0, signifier);
      note.sync();
    });

  // Update signifier
  $("#" + note.id)
    .children(":first")
    .on("click", function () {
      var signifier = (parseInt($(this).parent().attr("signifier")) + 1) % 4;
      $(this).parent().attr("signifier", signifier);
      setSignifier(signifier, $(this));
      var id = $(this).parent().attr("id");
      var text = $(this).parent().children().text();
      var note = new BujoElement(id, text, 0, 0, signifier);
      note.sync();
    });
}

// Adding a new todo
addItem.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    document.activeElement.blur();

    // grabbing new todo text from input
    var noteText = addItem.firstElementChild.textContent;

    // create new bujo task/note element
    var note = new BujoElement(new Date().getTime(), noteText, 0, 0, 0);
    note.sync();
  }
});

// realtime listners
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("notes")
      .collection(month + "-" + day)
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type == "added") {
            renderData(change.doc);
          } else if (change.type == "removed") {
            let note = dailyLog.querySelector('[id="' + change.doc.id + '"]');
            dailyLog.removeChild(note);
          }
        });
      });
  }
});

// Change mood buttons based on window size
if (document.documentElement.clientWidth < 768) {
  document.getElementById("mood-selector").style = "flex-direction: row";
} else {
  document.getElementById("mood-selector").style = "flex-direction: column";
}

url = "https://api.quotable.io/random";

// Fetches information from quote generator website
if (navigator.onLine) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      // Updates html objects with content from the website
      document.querySelector("#quote").innerHTML = '"' + result.content + '"';
      document.querySelector("#authors").innerHTML = "-" + result.author;
    })
    .then(() => {
      PageLoaded();
    });
} else {
  document.querySelector("#quote").innerHTML =
    '"To acquire knowledge, one must study; but to acquire wisdom, one must observe."';
  document.querySelector("#authors").innerHTML = "-Marilyn vos Savant";
  PageLoaded();
}
