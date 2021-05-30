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

// When user clicks on previous Day
document.querySelector("#previous").addEventListener("click", () => {
  selectedDate--;
  showDay(selectedDate);

  // Disable buttons to set 3 day window restriction on user
  if (selectedDate == 2) {
    document.querySelector("#next").disabled = false;
  }
  if (selectedDate == -3) {
    document.querySelector("#previous").disabled = true;
  }
});

// When user clicks on next Day
document.querySelector("#next").addEventListener("click", () => {
  selectedDate++;
  showDay(selectedDate);

  // Disable buttons to set 3 day window restriction on user
  if (selectedDate == 3) {
    document.querySelector("#next").disabled = true;
  }
  if (selectedDate == -2) {
    document.querySelector("#previous").disabled = false;
  }
});

window.currFocus = document;
// Catch focusin 
$(window).on( 'focusin', function () {
  window.prevFocus = window.currFocus;
  previousSelected = window.currFocus;
  window.currFocus = document.activeElement;
});

// When user clicks on Today button (only visible when not on current day)
document.querySelector("#today").addEventListener("click", () => {
  let next = document.querySelector("#next");
  let previous = document.querySelector("#previous");

  selectedDate = 0;
  showDay(selectedDate);
  if (next.disabled == true) {
    next.disabled = false;
  }

  if (previous.disabled == true) {
    previous.disabled = false;
  }
});

// When user toggles between View/Edit
document.querySelector("#toggle").addEventListener("click", () => {
  let toggle = document.querySelector("#toggle");

  let inputs = document.querySelectorAll(".text p");

  if (toggle.textContent == "Edit") {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].contentEditable = true;
    }
    toggle.textContent = "View";
  } else {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].contentEditable = false;
    }
    toggle.textContent = "Edit";
  }
});

document.querySelector("#bold").addEventListener("click", () => {
  if (previousSelected.style.fontWeight == "bold") {
    previousSelected.style.setProperty("font-weight", "normal");
    updateStyle(-1);
  } else {
    previousSelected.style.setProperty("font-weight", "bold");
    updateStyle(1);
  }
});

document.querySelector("#italic").addEventListener("click", () => {
  if (previousSelected.style.fontStyle == "normal") {
    previousSelected.style.setProperty("font-style", "italic");
    updateStyle(2);
  } else {
    previousSelected.style.setProperty("font-style", "normal");
    updateStyle(-2);
  }
});

document.querySelector("#underline").addEventListener("click", () => {
  if (previousSelected.style.textDecoration == "underline") {
    previousSelected.style.setProperty("text-decoration", "none");
    updateStyle(-4);
  } else {
    previousSelected.style.setProperty("text-decoration", "underline");
    updateStyle(4);
  }
});

/**
 * Function to update text tyle
 * @param {int} style style to apply
 */
function updateStyle(style) {
  let parentDiv = $("#" + previousSelected.parentNode.parentNode.id);
  let currStyle = parseInt(parentDiv.attr("style")) + style;
  parentDiv.attr("style", currStyle);
  setStyle(style, parentDiv);
  let id = parentDiv.attr("id");
  let text = parentDiv.children().text();
  let signifier = parseInt(parentDiv.attr("signifier"));
  let type = parseInt(parentDiv.attr("type"));
  let note2 = new BujoElement(id, text, 0, type, signifier, currStyle);
  note2.sync();
}

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
 * Set the type for a note
 * @param {int} type specifies which type
 * @param {node} node node to set type for
 */
function setType(type, node) {
  node.children(":first").removeClass();
  switch (type) {
    case 1:
      node.children(":first").addClass("far");
      node.children(":first").addClass("fa-square");
      break;
    case 2:
      node.children(":first").addClass("far");
      node.children(":first").addClass("fa-check-square");
      break;
    case 3:
      node.children(":first").addClass("far");
      node.children(":first").addClass("fa-circle");
      break;
    case 4:
      node.children(":first").addClass("far");
      node.children(":first").addClass("fa-check-circle");
      break;
    default:
      node.children(":first").addClass("fa");
      node.children(":first").addClass("fa-minus");
  }
}

/**
 * Set the style for a note
 * @param {int} style specifies which type
 * @param {node} node node to set type for
 */
 function setStyle(style, node) {
  node.children(":first").css("font-style", "normal");
  node.children(":first").css("font-weight", "normal");
  node.children(":first").css("text-decoration", "none");
  switch (style) {
    case 1:
      node.children(":first").css("font-weight", "bold");
      break;
    case 2:
      node.children(":first").css("font-style", "italic");
      break;
    case 3:
      node.children(":first").css("font-weight", "bold");
      node.children(":first").css("font-style", "italic");
      break;
    case 4:
      node.children(":first").css("text-decoration", "underline");
      break;
    case 5:
      node.children(":first").css("font-weight", "bold");
      node.children(":first").css("text-decoration", "underline");
      break;
    case 6:
      node.children(":first").css("font-style", "italic");
      node.children(":first").css("text-decoration", "underline");
      break;
    case 7:
      node.children(":first").css("font-weight", "bold");
      node.children(":first").css("font-style", "italic");
      node.children(":first").css("text-decoration", "underline");
      break;
    default:
      node.children(":first").css("font-style", "normal");
      node.children(":first").css("font-weight", "normal");
      node.children(":first").css("text-decoration", "none");
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
  bulletMainI.className = "fa";
  parentDiv.setAttribute("type", note.type);
  bulletMainDiv.appendChild(bulletMainI);

  // note div
  let noteDiv = document.createElement("div");
  noteDiv.className = "text";
  let noteDivP = document.createElement("p");
  noteDivP.setAttribute("contenteditable", "true");
  parentDiv.setAttribute("style", note.style);
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
  setType(note.type, $("#" + note.id).children(":nth-child(2)"));
  setStyle(note.style, $("#" + note.id).children(":nth-child(3)"));
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
      let signifier = parseInt($(this).parent().attr("signifier"));
      let id = $(this).parent().attr("id");
      let type = parseInt($(this).parent().attr("type"));
      let style = parseInt($(this).parent().attr("signifier"));
      let note2 = new BujoElement(id, $(this).text(), 0, type, signifier, style);
      note2.sync();
    });

  // Update signifier
  $("#" + note.id)
    .children(":first")
    .on("click", function () {
      let signifier = (parseInt($(this).parent().attr("signifier")) + 1) % 4;
      $(this).parent().attr("signifier", signifier);
      setSignifier(signifier, $(this));
      let id = $(this).parent().attr("id");
      let text = $(this).parent().children().text();
      let type = parseInt($(this).parent().attr("type"));
      let style = parseInt($(this).parent().attr("style"));
      let note2 = new BujoElement(id, text, 0, type, signifier, style);
      note2.sync();
    });

  // Update type
  $("#" + note.id)
    .children(":nth-child(2)")
    .on("click", function () {
      let type = (parseInt($(this).parent().attr("type")) + 1) % 5;
      $(this).parent().attr("type", type);
      setType(type, $(this));
      let id = $(this).parent().attr("id");
      let text = $(this).parent().children().text();
      let signifier = parseInt($(this).parent().attr("signifier"));
      let style = parseInt($(this).parent().attr("style"));
      let note2 = new BujoElement(id, text, 0, type, signifier, style);
      note2.sync();
    });

  // Delete
  $("#" + note.id)
    .children(":nth-child(4)")
    .on("click", function () {
      let id = $(this).parent().attr("id");
      let note2 = new BujoElement(id, "", 0, 0, 0, 0);
      note2.delete();
    });
}

// Adding a new note/task
addItem.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    document.activeElement.blur();

    // grabbing new note/task text from input
    let noteText = addItem.firstElementChild.textContent;

    // create new bujo task/note element
    let note2 = new BujoElement(new Date().getTime(), noteText, 0, 0, 0, 0);
    note2.sync();
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
            if (dailyLog.querySelector('[id="' + change.doc.id + '"]') == null) {
              renderData(change.doc);
            }
          } else if (change.type == "removed") {
            let note = dailyLog.querySelector('[id="' + change.doc.id + '"]');
            dailyLog.removeChild(note);
          }
        });
      });
  }
});

// Save everything
$(window).on("beforeunload", function () {
  document.activeElement.blur();
});

/**
 * Function to turn on overlay
 */
function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

/**
 * Function to turn off overlay
 */
function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

/*
 * Helper function to display the relevant day
 * @param day - the day to display
 */
function showDay(selectedDate) {
  let entries, today;

  entries = document.querySelectorAll("#editor div");

  /*
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].getAttribute("data-date") == day) {
      entries[i].style.display = "list-item";
    } else {
      entries[i].style.display = "none";
    }
  }
  */

  let editorDate = document.querySelector("#date");

  let date2 = day + selectedDate;
  let month2 = month;
  let year2 = year;

  // Go to previous month
  if (date2 < 1) {
    // Go to previous year
    if (month2 < 1) {
      month2 = 11;
      year2--;
    }
    date2 = daysInMonth[month2 - 1] + date2;
    month2--;
  }
  // Go to next month
  if (date2 > daysInMonth[month2]) {
    date2 = date2 - daysInMonth[month2];
    month2++;

    // Go to next year
    if (month2 > 11) {
      month2 = 0;
      year2++;
    }
  }

  month2 = (month2 + 1).toString();
  date2 = date2.toString();
  year2 = year2.toString();

  editorDate.innerText = month2 + "/" + date2 + "/" + year2;

  today = document.querySelector("#today");

  if (selectedDate == 0) {
    today.style.display = "none";
  } else {
    today.style.display = "inline-block";
  }
}

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

selectedDate = 0;
showDay(selectedDate);

// leap year, adjust daysinmonths array
if (year % 4 == 0) {
  daysInMonths[1] = 29;
}
