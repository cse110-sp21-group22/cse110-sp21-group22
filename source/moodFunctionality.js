const yearGrid = document.getElementById("year-grid");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const monthName = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const daysInMonth = [29, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var currDate;
const veryHappy = document.getElementById("very-happy");
const happy = document.getElementById("happy");
const neutral = document.getElementById("neutral");
const sad = document.getElementById("sad");
const verySad = document.getElementById("very-sad");

/* clear grid when new year */
if (month == 1 && day == 1) {
  auth.onAuthStateChanged((user) => {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("mood")
      .delete();
  });
}

/* populate yearGrid calendar */
populateCalendar();

/* creates yearGrid for the current year */
function populateCalendar() {
  createBlank();
  fillDays();
  fillMonths();
}

/* first row of yearGrid (day labels) */
function fillDays() {
  var i;
  for (i = 1; i < 32; i++) {
    var dayLabel = document.createElement("P");
    dayLabel.innerText = i;
    dayLabel.classList.add("day-label");
    yearGrid.append(dayLabel);
  }
}

/* all rows of yearGrid (each month) */
function fillMonths() {
  auth.onAuthStateChanged((user) => {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("mood")
      .get()
      .then((doc) => {
        var i;
        for (i = 1; i < 13; i++) {
          /* month label */
          var monthLabel = document.createElement("P");
          monthLabel.innerText = monthName[i];
          yearGrid.append(monthLabel);
          /* days for month */
          var j = 1;
          while (j <= daysInMonth[i]) {
            var emptyDay = document.createElement("P");
            try {
              var color_string = "color-" + i + "-" + j;
              var color = doc.data()[color_string];
            } catch {
              color = null;
            }
            emptyDay.classList.add("empty-mood");
            emptyDay.classList.add(i + "-" + j);
            emptyDay.setAttribute("style", "background-color:" + color);
            yearGrid.append(emptyDay);
            j++;
          }
          /* leap year adds day to feb */
          if (i == 2 && year % 4 == 0) {
            var emptyDay2 = document.createElement("P");
            emptyDay2.classList.add("empty-mood");
            emptyDay2.classList.add(i + "-" + j);
            yearGrid.append(emptyDay2);
            j++;
          }
          /* blank spaces in grid if month less than 31 days */
          while (j < 32) {
            createBlank();
            j++;
          }
        }
        setCurrDate();
        PageLoaded();
      });
  });
}

/* creates blank box element */
function createBlank() {
  var blank = document.createElement("P");
  blank.classList.add("blank");
  yearGrid.append(blank);
}

/* sets up box that belongs to the current date */
function setCurrDate() {
  var dates = document.getElementsByClassName("empty-mood");
  var i;
  for (i = 0; i < dates.length; i++) {
    var e = dates[i];
    if (e.classList.contains(month + "-" + day)) {
      e.classList.add("curr-day");
      currDate = e;
    }
  }
}

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

function colorChange(mood, moodClass, color) {
  veryHappy.classList.toggle("very-happy-click", false);
  happy.classList.toggle("happy-click", false);
  neutral.classList.toggle("neutral-click", false);
  sad.classList.toggle("sad-click", false);
  verySad.classList.toggle("very-sad-click", false);
  var toggleString = mood + "-click";
  moodClass.classList.toggle(toggleString, true);
  var styleString = "background-color: " + color;
  currDate.setAttribute("style", styleString);
  auth.onAuthStateChanged((user) => {
    try {
      color_string = "color-" + month + "-" + day;
      fs.collection("users")
        .doc(user.uid)
        .collection("data")
        .doc("mood")
        .update({[color_string]: [red], "selectedIcon": [mood]});
    } catch {
      color_string = "color-" + month + "-" + day;
      fs.collection("users")
        .doc(user.uid)
        .collection("data")
        .doc("mood")
        .set({[color_string]: [color], "selectedIcon": [mood]});
    }
  });
}