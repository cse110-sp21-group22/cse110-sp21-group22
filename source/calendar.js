const PROGRESS_BAR = document.querySelector("#progressbar");
const WEEK = document.getElementById("weeks");
PROGRESS_BAR.style.width = `${0}%`;
const today = new Date();
const one_day_per_second = 1000 * 60 * 60 * 24;
const one_week_per_second = one_day_per_second * 7;

$("#datepicker1").datepicker();
$("#datepicker2").datepicker();

auth.onAuthStateChanged((user) => {
  PageLoaded();
  fs.collection("users")
    .doc(user.uid)
    .collection("settings")
    .doc("calendar")
    .onSnapshot((doc) => {
      try {
        var semester_start = doc.data().semester_start.toDate();
        var semester_end = doc.data().semester_end.toDate();
        $("#datepicker1").datepicker("update", semester_start);
        $("#datepicker2").datepicker("update", semester_end);
        progress_func();
      } catch (err) {
        console.log(err);
      }
    });
});

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}

/**
 * function for progress bar
 */
function progress_func() {
  var semester_start = $("#datepicker1").datepicker("getDate");
  var semester_end = $("#datepicker2").datepicker("getDate");
  auth.onAuthStateChanged((user) => {
    fs.collection("users")
      .doc(user.uid)
      .collection("settings")
      .doc("calendar")
      .set({ semester_start: semester_start, semester_end: semester_end });
  });
  if (semester_end != undefined && semester_start != undefined) {
    var date_diff = (semester_end - semester_start) / one_day_per_second;
    let weeks = (today - semester_start) / one_week_per_second;
    weeks = Math.round(weeks);
    var text = "Welcome to Week " + weeks + "!" + "😊";
    let progress = (today - semester_start) / one_day_per_second / date_diff;
    progress = Math.round(progress * 100);
    if (progress > 100) {
      progress = 100;
    }
    if (progress <= 5) {
      PROGRESS_BAR.style.backgroundColor = "red";
    } else if (progress <= 25 && progress > 5) {
      PROGRESS_BAR.style.backgroundColor = "organge";
    } else if (progress <= 50 && progress > 25) {
      PROGRESS_BAR.style.backgroundColor = "gold";
    } else if (progress <= 75 && progress > 50) {
      PROGRESS_BAR.style.backgroundColor = "yellow";
    } else {
      PROGRESS_BAR.style.backgroundColor = "#86e01e";
    }
    PROGRESS_BAR.style.width = `${progress}%`;
    WEEK.innerHTML = text;
  }
}

$("#datepicker1")
  .datepicker()
  .on("changeDate", function (ev) {
    progress_func();
  });
$("#datepicker2")
  .datepicker()
  .on("changeDate", function (ev) {
    progress_func();
  });
