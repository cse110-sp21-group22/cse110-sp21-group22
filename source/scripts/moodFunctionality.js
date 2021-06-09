yearGrid = document.getElementById("year-grid");
veryHappy = document.getElementById("very-happy");
happy = document.getElementById("happy");
neutral = document.getElementById("neutral");
sad = document.getElementById("sad");
verySad = document.getElementById("very-sad");

setIcon();

/* populate yearGrid calendar */
populateCalendar();

/**
 *  Creates yearGrid for the current year
 */
function populateCalendar() {
  createBlank();
  fillDays();
  fillMonths();
}

/**
 * Creates first row of yearGrid (day labels)
 */
function fillDays() {
  var i;
  for (i = 1; i < 32; i++) {
    var dayLabel = document.createElement("P");
    dayLabel.innerText = i;
    dayLabel.classList.add("day-label");
    yearGrid.append(dayLabel);
  }
}

/**
 * Creates all rows of yearGrid (each month)
 */
function fillMonths() {
  auth.onAuthStateChanged((user) => {
    if (user) {
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
              if (i == month && j == day) {
                emptyDay.setAttribute("data-cy", "current-date");
              }
              emptyDay.classList.add("empty-mood");
              emptyDay.classList.add(i + "-" + j);
              emptyDay.id = "color-" + i + "-" + j;
              emptyDay.setAttribute("style", "background-color:" + color);
              yearGrid.append(emptyDay);
              j++;
            }
            fillMonthsHelper(i, j);
          }
          setCurrDate();
          PageLoaded();
        });
    }
  });
}

/**
 * Helper method for fillMonths
 * @param {int} i - counter for months
 * @param {int} j - counter for days
 */
function fillMonthsHelper(i, j) {
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

/**
 * Creates blank box element
 */
function createBlank() {
  var blank = document.createElement("P");
  blank.classList.add("blank");
  yearGrid.append(blank);
}

/**
 * sets up box that belongs to the current date
 */
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
  colorChange("very-happy", veryHappy, "#55D805");
  dayColorChange("#55D805");
});

/* happy mood selected */
happy.addEventListener("click", function () {
  colorChange("happy", happy, "#BFD102");
  dayColorChange("#BFD102");
});

/* neutral mood selected */
neutral.addEventListener("click", function () {
  colorChange("neutral", neutral, "#FECD32");
  dayColorChange("#FECD32");
});

/* sad mood selected */
sad.addEventListener("click", function () {
  colorChange("sad", sad, "#FF9226");
  dayColorChange("#FF9226");
});

/* very sad mood selected */
verySad.addEventListener("click", function () {
  colorChange("very-sad", verySad, "#EB3233");
  dayColorChange("#EB3233");
});

/**
 * Function to change day's color
 * @param {string} color
 */
function dayColorChange(color) {
  var styleString = "background-color: " + color;
  currDate.setAttribute("style", styleString);
}

auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("mood")
      .onSnapshot((doc) => {
        if (doc.data()) {
          for (var key of Object.keys(doc.data())) {
            if (key != "selectedIcon") {
              let day = document.getElementById(key);
              try {
                day.setAttribute(
                  "style",
                  "background-color:" + doc.data()[key][0]
                );
              } catch {
                // console.log("not loaded");
              }
            }
          }
        }
      });
  }
});
