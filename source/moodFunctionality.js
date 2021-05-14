const yearGrid = document.getElementById("year-grid");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const monthName = [
  "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",
  "Nov", "Dec"
];
const daysInMonth = [ 29, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
var currDate;
const veryHappy = document.getElementsByClassName("very-happy")[0];
const happy = document.getElementsByClassName("happy")[0];
const neutral = document.getElementsByClassName("neutral")[0];
const sad = document.getElementsByClassName("sad")[0];
const verySad = document.getElementsByClassName("very-sad")[0];
const selectedIconName = localStorage.getItem("selected-icon");
const selectedIcon = document.getElementsByClassName(selectedIconName)[0];

/* clear grid when new year */
if (month == 1 && day == 1) {
  localStorage.clear();
}
/* populate yearGrid calendar */
populateCalendar();

/* creates yearGrid for the current year */
function populateCalendar() {
  createBlank();
  fillDays();
  fillMonths();
  setCurrDate();
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
      var color = localStorage.getItem("color-" + i + "-" + j);
      emptyDay.classList.add("empty-mood");
      emptyDay.classList.add(i + "-" + j);
      emptyDay.setAttribute("style", "background-color:" + color);
      yearGrid.append(emptyDay);
      j++;
    }
    /* leap year adds day to feb */
    if (i == 2 && year % 4 == 0) {
      var emptyDay = document.createElement("P");
      emptyDay.classList.add("empty-mood");
      emptyDay.classList.add(i + "-" + j);
      yearGrid.append(emptyDay);
      j++;
    }
    /* blank spaces in grid if month less than 31 days */
    while (j < 32) {
      createBlank();
      j++;
    }
  }
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
    e = dates[i];
    if (e.classList.contains(month + "-" + day)) {
      e.classList.add("curr-day");
      if ("selected-icon" in localStorage) {
        selectedIcon.classList.toggle(selectedIconName + "-click", true);
      }
      currDate = e;
    }
  }
}

/* very happy mood selected */
veryHappy.addEventListener("click", function() {
  veryHappy.classList.toggle("very-happy-click", true);
  happy.classList.toggle("happy-click", false);
  neutral.classList.toggle("neutral-click", false);
  sad.classList.toggle("sad-click", false);
  verySad.classList.toggle("very-sad-click", false);
  currDate.setAttribute("style", "background-color: green");
  localStorage.setItem("color-" + month + "-" + day, "green");
  localStorage.setItem("selected-icon", "very-happy");
});

/* happy mood selected */
happy.addEventListener("click", function() {
  veryHappy.classList.toggle("very-happy-click", false);
  happy.classList.toggle("happy-click", true);
  neutral.classList.toggle("neutral-click", false);
  sad.classList.toggle("sad-click", false);
  verySad.classList.toggle("very-sad-click", false);
  currDate.setAttribute("style", "background-color: lightgreen");
  localStorage.setItem("color-" + month + "-" + day, "lightgreen");
  localStorage.setItem("selected-icon", "happy");
});

/* neutral mood selected */
neutral.addEventListener("click", function() {
  veryHappy.classList.toggle("very-happy-click", false);
  happy.classList.toggle("happy-click", false);
  neutral.classList.toggle("neutral-click", true);
  sad.classList.toggle("sad-click", false);
  verySad.classList.toggle("very-sad-click", false);
  currDate.setAttribute("style", "background-color: yellow");
  localStorage.setItem("color-" + month + "-" + day, "yellow");
  localStorage.setItem("selected-icon", "neutral");
});

/* sad mood selected */
sad.addEventListener("click", function() {
  veryHappy.classList.toggle("very-happy-click", false);
  happy.classList.toggle("happy-click", false);
  neutral.classList.toggle("neutral-click", false);
  sad.classList.toggle("sad-click", true);
  verySad.classList.toggle("very-sad-click", false);
  currDate.setAttribute("style", "background-color: orange");
  localStorage.setItem("color-" + month + "-" + day, "orange");
  localStorage.setItem("selected-icon", "sad");
});

/* very sad mood selected */
verySad.addEventListener("click", function() {
  veryHappy.classList.toggle("very-happy-click", false);
  happy.classList.toggle("happy-click", false);
  neutral.classList.toggle("neutral-click", false);
  sad.classList.toggle("sad-click", false);
  verySad.classList.toggle("very-sad-click", true);
  currDate.setAttribute("style", "background-color: red");
  localStorage.setItem("color-" + month + "-" + day, "red");
  localStorage.setItem("selected-icon", "very-sad");
});