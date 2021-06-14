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
  colorChange("very-happy", veryHappy, "#55D805");
});

/* happy mood selected */
happy.addEventListener("click", function () {
  colorChange("happy", happy, "#BFD102");
});

/* neutral mood selected */
neutral.addEventListener("click", function () {
  colorChange("neutral", neutral, "#FECD32");
});

/* sad mood selected */
sad.addEventListener("click", function () {
  colorChange("sad", sad, "#FF9226");
});

/* very sad mood selected */
verySad.addEventListener("click", function () {
  colorChange("very-sad", verySad, "#EB3233");
});

/************ Start Rose and Thorn ************/

var rosethorn = document.getElementById("rosethorn");
var rose = document.getElementById("rose");
var thorn = document.getElementById("thorn");
var date_string = month + "-" + day;

auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("rosethorn")
      .onSnapshot((doc) => {
        try {
          rose.innerHTML = doc.data().rose;
          thorn.innerHTML = doc.data().thorn;
        } catch (err) {
          // console.log(err);
        }
      });
  }
});

rosethorn.addEventListener("focusout", (event) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
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
    }
  });
});

auth.onAuthStateChanged((user) => {
  if (user) {
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
                rose: "",
                thorn: "",
              });
          }
        } catch (err) {
          // console.log(err);
        }
      });
  }
});

/************ End Rose and Thorn ************/

/************ Start Daily Log ************/

// When user clicks on previous Day
document.querySelector("#previous").addEventListener("click", () => {
  selectedDate--;
  showDay(selectedDate);

  // Disable buttons to set 3 day window restriction on user
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
});

window.currFocus = document;
// Catch focusin
$(window).on("focusin", function () {
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
  if (next.disabled) {
    next.disabled = false;
  }

  if (previous.disabled) {
    previous.disabled = false;
  }
});

// When user toggles between View/Edit
document.querySelector("#toggle").addEventListener("click", () => {
  let toggle = document.querySelector("#toggle");
  let inputs = document.querySelectorAll(".text p");
  editStatus = !editStatus;

  if (toggle.textContent == "Edit") {
    for (let note of inputs) {
      note.contentEditable = true;
    }
    toggle.textContent = "View";
  } else {
    for (let note of inputs) {
      note.contentEditable = false;
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
  if (previousSelected.style.textDecoration.includes("underline")) {
    if (previousSelected.style.textDecoration.includes("line-through")) {
      previousSelected.style.setProperty("text-decoration", "line-through");
    } else {
      previousSelected.style.setProperty("text-decoration", "none");
    }
    updateStyle(-4);
  } else {
    if (previousSelected.style.textDecoration.includes("line-through")) {
      previousSelected.style.setProperty(
        "text-decoration",
        "line-through underline"
      );
    } else {
      previousSelected.style.setProperty("text-decoration", "underline");
    }
    updateStyle(4);
  }
});

/**
 * Function to update text tyle
 * @param {int} style style to apply
 */
function updateStyle(style) {
  if (
    document.querySelector("#toggle").innerText == "View" &&
    previousSelected.parentNode.className == "text flex-fill"
  ) {
    let parentDiv = $("#" + previousSelected.parentNode.parentNode.id);
    let currStyle = parseInt(parentDiv.attr("stylenum")) + style;
    parentDiv.attr("stylenum", currStyle);
    setStyle(style, parentDiv);
    let id = parentDiv.attr("id");
    let text = parentDiv.children().text();
    let signifier = parseInt(parentDiv.attr("signifier"));
    let type = parseInt(parentDiv.attr("type"));
    let level = parseInt(parentDiv.attr("level"));
    let note2 = new BujoElement(id, text, level, type, signifier, currStyle);
    note2.sync(selectedDate);
  }
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
  if ($(this).children().text() == "Add new note") {
    $(this).children().text(" ");
  }
});

// Reset message if no new note
$("#add-item").on("focusout", function () {
  if ($(this).children().text() == " " || $(this).children().text() == "") {
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
  if (
    node
      .parent()
      .children(":nth-child(3)")
      .children(":first")
      .css("text-decoration")
      .includes("underline")
  ) {
    node
      .parent()
      .children(":nth-child(3)")
      .children(":first")
      .css("text-decoration", "underline");
  } else {
    node
      .parent()
      .children(":nth-child(3)")
      .children(":first")
      .css("text-decoration", "none");
  }
  switch (type) {
    case 1:
      node.children(":first").addClass("far");
      node.children(":first").addClass("fa-square");
      break;
    case 2:
      node.children(":first").addClass("far");
      node.children(":first").addClass("fa-check-square");
      if (
        node
          .parent()
          .children(":nth-child(3)")
          .children(":first")
          .css("text-decoration")
          .includes("none")
      ) {
        node
          .parent()
          .children(":nth-child(3)")
          .children(":first")
          .css("text-decoration", "line-through");
      } else {
        node
          .parent()
          .children(":nth-child(3)")
          .children(":first")
          .css("text-decoration", "line-through underline");
      }
      break;
    case 3:
      node.children(":first").addClass("far");
      node.children(":first").addClass("fa-circle");
      break;
    case 4:
      node.children(":first").addClass("far");
      node.children(":first").addClass("fa-check-circle");
      if (
        node
          .parent()
          .children(":nth-child(3)")
          .children(":first")
          .css("text-decoration")
          .includes("none")
      ) {
        node
          .parent()
          .children(":nth-child(3)")
          .children(":first")
          .css("text-decoration", "line-through");
      } else {
        node
          .parent()
          .children(":nth-child(3)")
          .children(":first")
          .css("text-decoration", "line-through underline");
      }
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
  if (node.children(":first").css("text-decoration").includes("line-through")) {
    node.children(":first").css("text-decoration", "line-through");
  } else {
    node.children(":first").css("text-decoration", "none");
  }
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
      if (
        node.children(":first").css("text-decoration").includes("line-through")
      ) {
        node
          .children(":first")
          .css("text-decoration", "line-through underline");
      } else {
        node.children(":first").css("text-decoration", "underline");
      }
      break;
    case 5:
      node.children(":first").css("font-weight", "bold");
      if (
        node.children(":first").css("text-decoration").includes("line-through")
      ) {
        node
          .children(":first")
          .css("text-decoration", "line-through underline");
      } else {
        node.children(":first").css("text-decoration", "underline");
      }
      break;
    case 6:
      node.children(":first").css("font-style", "italic");
      if (
        node.children(":first").css("text-decoration").includes("line-through")
      ) {
        node
          .children(":first")
          .css("text-decoration", "line-through underline");
      } else {
        node.children(":first").css("text-decoration", "underline");
      }
      break;
    case 7:
      node.children(":first").css("font-weight", "bold");
      node.children(":first").css("font-style", "italic");
      if (
        node.children(":first").css("text-decoration").includes("line-through")
      ) {
        node
          .children(":first")
          .css("text-decoration", "line-through underline");
      } else {
        node.children(":first").css("text-decoration", "underline");
      }
      break;
    default:
      node.children(":first").css("font-style", "normal");
      node.children(":first").css("font-weight", "normal");
      node.children(":first").css("text-decoration", "none");
  }
}

/**
 * Set the level for a note
 * @param {int} level specifies which level
 * @param {node} node node to set level for
 */
function setLevel(level, node) {
  let levelString = level > 0 ? level * 40 + "px" : "0";
  node.css("padding-left", levelString);
  node.attr("level", level);
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
  parentDiv.className = "item note d-flex";
  parentDiv.setAttribute("id", note.id);
  parentDiv.setAttribute("date", individualDoc.data().date);
  parentDiv.setAttribute("level", note.level);

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
  noteDiv.className = "text flex-fill";
  let noteDivP = document.createElement("p");
  if (editStatus) {
    noteDivP.setAttribute("contenteditable", "true");
  } else {
    noteDivP.setAttribute("contenteditable", "false");
  }
  parentDiv.setAttribute("stylenum", note.style);
  noteDivP.textContent = note.text;
  noteDiv.appendChild(noteDivP);

  // trash (was previously options)
  let optionsDiv = document.createElement("div");
  optionsDiv.className = "options";
  let optionsDivI = document.createElement("i");
  optionsDivI.className = "fa fa-trash";
  optionsDiv.appendChild(optionsDivI);

  // appending
  parentDiv.appendChild(bulletSubDiv);
  parentDiv.appendChild(bulletMainDiv);
  parentDiv.appendChild(noteDiv);
  parentDiv.appendChild(optionsDiv);

  dailyLog.insertBefore(parentDiv, add);
  setSignifier(note.signifier, $("#" + note.id).children(":first"));
  setStyle(note.style, $("#" + note.id).children(":nth-child(3)"));
  setType(note.type, $("#" + note.id).children(":nth-child(2)"));
  setLevel(note.level, $("#" + note.id));
  setLevel(0, $("#add"));
  addItem.firstElementChild.textContent = "Add new note";

  // Disable enter key
  noteDiv.addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
      event.preventDefault();
    }
  });

  // Listen for tab
  $("#" + note.id)
    .children(":nth-child(3)")
    .on("keydown", function (e) {
      var keyCode = e.keyCode || e.which;

      if (keyCode == 9) {
        e.preventDefault();
        let id = $(this).parent().attr("id");
        let text = $(this)
          .parent()
          .children(":nth-child(3)")
          .children(":first")
          .text();
        let signifier = parseInt($(this).parent().attr("signifier"));
        let type = parseInt($(this).parent().attr("type"));
        let style = parseInt($(this).parent().attr("stylenum"));
        let level = parseInt($(this).parent().attr("level")) + 1;
        setLevel(level, $(this).parent());
        let note2 = new BujoElement(id, text, level, type, signifier, style);
        note2.sync(selectedDate);
      }
    });

  // Update note on edit
  $("#" + note.id)
    .children(":nth-child(3)")
    .on("focusout", function () {
      let signifier = parseInt($(this).parent().attr("signifier"));
      let id = $(this).parent().attr("id");
      let text = $(this).text();
      let type = parseInt($(this).parent().attr("type"));
      let style = parseInt($(this).parent().attr("stylenum"));
      let level = parseInt($(this).parent().attr("level"));
      let note2 = new BujoElement(id, text, level, type, signifier, style);
      note2.sync(selectedDate);
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
      let style = parseInt($(this).parent().attr("styleNum"));
      let level = parseInt($(this).parent().attr("level"));
      let note2 = new BujoElement(id, text, level, type, signifier, style);
      note2.sync(selectedDate);
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
      let style = parseInt($(this).parent().attr("stylenum"));
      let level = parseInt($(this).parent().attr("level"));
      let note2 = new BujoElement(id, text, level, type, signifier, style);
      note2.sync(selectedDate);
    });

  // Delete
  $("#" + note.id)
    .children(":nth-child(4)")
    .on("click", function () {
      let id = $(this).parent().attr("id");
      let note2 = new BujoElement(id, "", 0, 0, 0, 0);
      note2.delete(selectedDate);
    });
}

// Adding a new note/task
addItem.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    event.preventDefault();
    document.activeElement.blur();

    // grabbing new note/task text from input
    let noteText = addItem.firstElementChild.textContent;

    let level = parseInt(add.getAttribute("level"));

    // create new bujo task/note element
    let note2 = new BujoElement(new Date().getTime(), noteText, level, 0, 0, 0);
    note2.sync(selectedDate);
  } else if (event.code == "Tab") {
    event.preventDefault();
    setLevel(parseInt(add.getAttribute("level")) + 1, $("#add"));
  }
});

/*
 * Helper function to display the relevant day
 * @param day - the day to display
 */
function showDay(selectedDate) {
  $(".note").each(function () {
    if ($(this).attr("date") == daysIntoYear(date) + selectedDate) {
      $(this).removeClass("hidden");
      $(this).removeClass("d-none");
    } else {
      $(this).addClass("hidden");
      $(this).addClass("d-none");
    }
  });

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

  month2 = month2.toString();
  date2 = date2.toString();
  year2 = year2.toString();

  editorDate.innerText =
    weekDay[(date.getDay() + selectedDate) % 7] +
    ", " +
    monthNameLong[month2] +
    " " +
    date2;
}

// realtime listners
for (var i = -3; i < 4; ++i) {
  let dateYear = daysIntoYear(date) + i;
  auth.onAuthStateChanged((user) => {
    if (user) {
      fs.collection("users")
        .doc(user.uid)
        .collection("data")
        .doc("notes")
        .collection("" + dateYear)
        .onSnapshot((snapshot) => {
          let changes = snapshot.docChanges();
          changes.forEach((change) => {
            if (change.type == "added") {
              if (
                dailyLog.querySelector('[id="' + change.doc.id + '"]') == null
              ) {
                renderData(change.doc);
              }
            } else if (change.type == "removed") {
              let note = dailyLog.querySelector('[id="' + change.doc.id + '"]');
              if (
                dailyLog.querySelector('[id="' + change.doc.id + '"]') != null
              ) {
                dailyLog.removeChild(note);
              }
            }
          });
          showDay(selectedDate);
        });
    }
  });
}

/************ End Daily Log ************/

/************ Start Upcoming ************/

/**
 * Function to render upcoming data from a doc
 * @param {FirestoreDoc} individualDoc - Individual firestore doc or bujo
 *     element
 */
function renderUpcoming(individualDoc) {
  let progress = progressConverter.fromFirestore(individualDoc);
  let id = progress.id;
  let text = progress.text;
  let end = doyToDate(parseInt(progress.end), year);

  let upcoming_section = document.getElementById("upcoming");
  let new_progress = document.createElement("section");
  new_progress.setAttribute("id", id);

  let upcoming_text = document.createElement("label");
  upcoming_text.textContent =
    end.getMonth() + 1 + "-" + end.getDate() + "   " + text;

  new_progress.appendChild(upcoming_text);
  upcoming_section.appendChild(new_progress);
}

// realtime listner
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("progress")
      .collection("progress")
      .orderBy("end")
      .limit(3)
      .onSnapshot((snapshot) => {
        let upcoming_section = document.getElementById("upcoming");
        let empty = true;
        if (upcoming_section) {
          upcoming_section.innerHTML = "";
        } else {
          return;
        }
        snapshot.forEach((doc) => {
          renderUpcoming(doc);
          empty = false;
        });
        if (empty) {
          let new_progress = document.createElement("section");
          let upcoming_text = document.createElement("label");
          upcoming_text.textContent = "No upcoming events!";
          new_progress.appendChild(upcoming_text);
          upcoming_section.appendChild(new_progress);
        }
      });
  }
});

/************ End Upcoming ************/

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

/**
 * Function to turn on overlay2
 */
function overlayOn2() {
  document.getElementById("overlay2").style.display = "block";
}

/**
 * Function to turn off overlay2
 */
function overlayOff2() {
  document.getElementById("overlay2").style.display = "none";
}

// Change mood buttons based on window size
if (document.documentElement.clientWidth < 768) {
  document.getElementById("mood-selector").style = "flex-direction: row";
} else {
  document.getElementById("mood-selector").style = "flex-direction: column";
}

setIcon();

// Updates html objects with content from the website
document.querySelector("#quote").innerHTML = quote;
document.querySelector("#authors").innerHTML = author;

selectedDate = 0;
showDay(selectedDate);

// leap year, adjust daysinmonth array
if (year % 4 == 0) {
  daysInMonths[1] = 29;
}

PageLoaded();

// Walkthrough demo
auth.onAuthStateChanged((user) => {
  if (user) {
    if (
      Math.floor(
        (new Date() - Date.parse(user.metadata.creationTime)) / 1000 / 60
      ) < 1
    ) {
      introJs()
        .setOptions({
          steps: [
            {
              title: "Welcome",
              intro: "Meet CatchUp, a daily journal for you!",
            },
            {
              element: document.querySelector(".navbar-brand"),
              intro: "You can always return to the main page by clicking here",
            },
            {
              element: document.querySelector("#nav-calendar"),
              intro: "Click here to create progress trackers for your events",
            },
            {
              element: document.querySelector("#nav-mood"),
              intro: "Click here to access the mood tracker",
            },
            {
              element: document.querySelector("#nav-settings"),
              intro: "Click here to personalize your journal and to log out",
            },
            {
              element: document.querySelector("#mood-selector"),
              intro: "Click how you're feeling to keep track of your mood",
            },
            {
              element: document.querySelector(".notebook-container"),
              intro:
                "This is your journal. To change days, click on the arrows next to the date. To return to today simply press the today button",
            },
            {
              element: document.querySelector(".text-add"),
              intro:
                "To add a new note, simply click here and begin typing! Press tab to indent and enter to save your note",
            },
            {
              element: document.querySelector(".bullet-sub"),
              intro:
                "To add signifiers, simply click on the space here next to a note",
            },
            {
              element: document.querySelector(".bullet-main"),
              intro:
                "To change a note type, simply click on the space here next to a note",
            },
            {
              element: document.querySelector(".options"),
              intro:
                "To delete a note, simply click on the trash can that will appear here",
            },
            {
              element: document.querySelector("#toggle"),
              intro:
                "To edit notes, simply press the Edit button. To return to view mode, press this button again",
            },
            {
              element: document.querySelector(".textmodsub"),
              intro:
                "In edit mode, you can style your notes by using the buttons here",
            },
            {
              element: document.querySelector(".blackboard"),
              intro:
                "Your three earlierst deadlines from the calendar will appear here",
            },
            {
              element: document.querySelector(".rosethorn"),
              intro:
                "Keep a daily reflection here. Click the question mark to learn more",
            },
            {
              intro: "That's about it. We hope you enjoy using this journal!",
            },
          ],
        })
        .start();
    }
  }
});
