const dailyLog = document.getElementById("daily-log");
const add = document.getElementById("add");

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

// Demonstration of functionality of checking tasks/events
$('.fa-square').on("click", function() {
  $(this).toggleClass('fa-square');
  $(this).toggleClass('fa-check-square');
});
$('.fa-check-square').on("click", function() {
  $(this).toggleClass('fa-square');
  $(this).toggleClass('fa-check-square');
});
$('.fa-circle').on("click", function() {
  $(this).toggleClass('fa-circle');
  $(this).toggleClass('fa-check-circle');
});
$('.fa-check-circle').on("click", function() {
  $(this).toggleClass('fa-circle');
  $(this).toggleClass('fa-check-circle');
});

// Demonstration of functionality of collapsible sub-lists
$('.fa-chevron-down').on("click", function() {
  $('#item2').toggleClass('hide');
  $(this).toggleClass('fa-chevron-down');
  $(this).toggleClass('fa-chevron-right');
});

$(".text").on("keydown", function(e) {
  // Enter was pressed
  if (e.keyCode == 13) {
      // prevent default behavior
      e.preventDefault();
  }
});

$("#add-item").on('click', function() { 
  $(this).children().empty();
});

$("#add-item").on('focusout', function() { 
  $(this).children().text("Add new note");
});

// Adding a new todo
var addItem = document.getElementById("add-item");
addItem.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    document.activeElement.blur();

    // grabbing new todo text from input
    var noteText = addItem.firstElementChild.textContent;

    // create new bujo task/note element
    var note = new BujoElement(new Date().getTime(), noteText, 0, "note", "none");

    // parent div
    let parentDiv = document.createElement("div");
    parentDiv.className = "item";
    parentDiv.setAttribute("id", note.id);

    // bullet-sub
    let bulletSubDiv = document.createElement("div");
    bulletSubDiv.className = "bullet bullet-sub";
    let bulletSubI = document.createElement("i");
    bulletSubI.className = "fa";
    bulletSubDiv.appendChild(bulletSubI);

    // bullet-main
    let bulletMainDiv = document.createElement("div");
    bulletMainDiv.className = "bullet bullet-main";
    let bulletMainI = document.createElement("i");
    bulletMainI.className = "fa fa-minus";
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
    addItem.firstElementChild.textContent = "Add new note";
    noteDiv.addEventListener('keydown', function(event) {
      if (event.code === 'Enter') {
        event.preventDefault();
      }
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
