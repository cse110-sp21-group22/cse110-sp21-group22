const PROGRESS_BAR = document.querySelector("#progress-bar");
const WEEK = document.getElementById("weeks");
const { size } = PROGRESS_BAR.dataset;
PROGRESS_BAR.style.width = `${0}%`;
const today = new Date();
const one_day_per_second = 1000 * 60 * 60 * 24;
const one_week_per_second = one_day_per_second * 7;
let semester_start;
let semester_end;

$("#datepicker1").datepicker();
$("#datepicker2").datepicker();
$("#datepicker1").bind("change", function () {
  semester_start = new Date($("#datepicker1").val());
  if (semester_end != undefined && semester_start != undefined) {
    const date_diff = (semester_end - semester_start) / one_day_per_second;
    let weeks = (today - semester_start) / one_week_per_second;
    weeks = Math.round(weeks);
    const text = "Welcome to Week " + weeks + "!" + "😊";
    let progress = (today - semester_start) / one_day_per_second / date_diff;
    progress = Math.round(progress * 100);
    if (progress > 100) progress = 100;
    if (progress <= 5) PROGRESS_BAR.style.backgroundColor = "red";
    else if (progress <= 25 && progress > 5)
      PROGRESS_BAR.style.backgroundColor = "organge";
    else if (progress <= 50 && progress > 25)
      PROGRESS_BAR.style.backgroundColor = "gold";
    else if (progress <= 75 && progress > 50)
      PROGRESS_BAR.style.backgroundColor = "yellow";
    else PROGRESS_BAR.style.backgroundColor = "#86e01e";
    console.log(PROGRESS_BAR.style.backgroundColor);
    PROGRESS_BAR.style.width = `${progress}%`;
    WEEK.innerHTML = text;
  }
});
$("#datepicker2").bind("change", function () {
  semester_end = new Date($("#datepicker2").val());
  if (semester_end != undefined && semester_start != undefined) {
    const date_diff = (semester_end - semester_start) / one_day_per_second;
    let weeks = (today - semester_start) / one_week_per_second;
    weeks = Math.round(weeks);
    const text = "Welcome to Week " + weeks + "!" + "😊";
    let progress = (today - semester_start) / one_day_per_second / date_diff;
    progress = Math.round(progress * 100);
    if (progress > 100) progress = 100;
    if (progress <= 5) PROGRESS_BAR.style.backgroundColor = "red";
    else if (progress <= 25 && progress > 5)
      PROGRESS_BAR.style.backgroundColor = "organge";
    else if (progress <= 50 && progress > 25)
      PROGRESS_BAR.style.backgroundColor = "gold";
    else if (progress <= 75 && progress > 50)
      PROGRESS_BAR.style.backgroundColor = "yellow";
    else PROGRESS_BAR.style.backgroundColor = "#86e01e";
    console.log(PROGRESS_BAR.style.backgroundColor);
    PROGRESS_BAR.style.width = `${progress}%`;
    WEEK.innerHTML = text;
  }
});
