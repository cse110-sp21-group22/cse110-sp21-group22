PROGRESS_BAR = document.querySelector("#week-bar");
WEEK = document.getElementById("weeks");
PROGRESS_BAR.style.width = `${0}%`;

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
 * Calculate the progress based on the start and end dates
 * @param {Date} start starting date
 * @param {Date} end ending date
 * @returns Array containing progress in percentage and the number of weeks
 *     since start
 */
function cal_date(start, end) {
  start = daysIntoYear(start);
  end = daysIntoYear(end);
  let today = daysIntoYear(new Date());
  let date_diff = end - start;
  let weeks = Math.round((today - start) / 7);
  let progress = (today - start) / date_diff;
  progress = Math.round(progress * 100);
  return [progress, weeks];
}

/**
 * Function to update the given bar
 * @param {HTMLElement} element bar to update
 * @param {int} value percentage of bar
 */
function update_bar(element, value) {
  if (value > 100) {
    value = 100;
  }
  if (value <= 5) {
    element.style.backgroundColor = "red";
  } else if (value <= 25 && value > 5) {
    element.style.backgroundColor = "orange";
  } else if (value <= 50 && value > 25) {
    element.style.backgroundColor = "gold";
  } else if (value <= 75 && value > 50) {
    element.style.backgroundColor = "yellow";
  } else {
    element.style.backgroundColor = "#86e01e";
  }
  element.style.width = `${value}%`;
}

/**
 * When user creates a new progress, this function will be called and bind the
 * date picker
 * @param {HTMLElement} start start date input
 * @param {HTMLElement} end end date input
 * @param {HTMLElement} bar HTML element for the bar to update
 */
function update_progress(start, end, bar) {
  $(".startdate").datepicker();
  $(".enddate").datepicker();
  const select_start = "#" + start.id;
  const select_end = "#" + end.id;
  $(select_start).bind("change", function () {
    select(bar);
  });
  $(select_end).bind("change", function () {
    select(bar);
  });
}

/**
 * Function to get start and end dates and update progress bar
 * @param {HTMLElement} bar HTML element for the bar to update
 */
function select(bar) {
  let start_date = new Date(document.getElementById(start.id).value);
  let end_date = new Date(document.getElementById(end.id).value);
  if (
    end_date != undefined &&
    start_date != undefined &&
    start_date <= end_date
  ) {
    const response = cal_date(start_date, end_date);
    update_bar(bar, response[0]);
  }
}

/**
 * Function to delete a progress tracker
 * @param {HTMLElement} button delete button
 * @param {HTMLElement} element progress tracker to remove
 */
function btn(button, element) {
  button.addEventListener("click", () => {
    element.remove();
  });
}

/**
 * Function to update the main tracker
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
    var response = cal_date(semester_start, semester_end);
    var text = "Welcome to Week " + response[1] + "!" + "😊";
    update_bar(PROGRESS_BAR, response[0]);
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

/**
 * Function to create a new progress tracker
 */
function create_new_progress() {
  const progress_section = document.getElementById("progress-section");
  let id = "id" + performance.now();
  const text = document.getElementById("newproresstitle").value;
  const start = document.getElementById("newstartdate").value;
  const end = document.getElementById("newenddate").value;

  const new_progress = document.createElement("div");
  new_progress.setAttribute("class", "new_progress");

  const title = document.createElement("h2");
  title.contentEditable = true;
  title.innerHTML = text;

  const bar = document.createElement("div");
  bar.setAttribute("class", "progress");
  const bar_content = document.createElement("div");
  bar_content.setAttribute("class", "progress-bar");
  bar_content.setAttribute("role", "progressbar");
  bar_content.setAttribute("style", "width: 100%");
  bar_content.setAttribute("aria-valuenow", "0");
  bar_content.setAttribute("aria-valuemin", "0");
  bar_content.setAttribute("aria-valuemax", "100");
  bar.appendChild(bar_content);

  const start_p = document.createElement("p");
  start_p.innerHTML = "Start";
  const start_input = document.createElement("input");
  start_input.setAttribute("type", "text");
  start_input.setAttribute("class", "startdate");
  start_input.setAttribute("value", start);
  id = id.replace(".", "");
  start_input.setAttribute("id", id);

  const end_p = document.createElement("p");
  end_p.innerText = "End";
  const end_input = document.createElement("input");
  end_input.setAttribute("type", "text");
  end_input.setAttribute("class", "enddate");
  end_input.setAttribute("value", end);
  id = "id" + performance.now();
  id = id.replace(".", "");
  end_input.setAttribute("id", id);

  const btn_remove = document.createElement("a");
  btn_remove.setAttribute("class", "button-remove");
  btn_remove.innerHTML = "Delete";

  new_progress.appendChild(title);
  new_progress.appendChild(bar);
  new_progress.appendChild(start_p);
  new_progress.appendChild(start_input);
  new_progress.appendChild(end_p);
  new_progress.appendChild(end_input);
  new_progress.appendChild(btn_remove);
  progress_section.appendChild(new_progress);

  const start_date = new Date(start);
  const end_date = new Date(end);
  start_input.addEventListener("input", () => {
    console.log("111111");
  });
  const response = cal_date(start_date, end_date);
  update_bar(bar_content, response[0]);
  update_progress(start_input, end_input, bar_content);
  btn(btn_remove, new_progress);
}

// Open the modal
document.getElementById("button-add").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
  $("#newstartdate").datepicker();
  $("#newenddate").datepicker();
});

// Close the modal
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

// Submit the progress
document.getElementById("button-submit").addEventListener("click", () => {
  create_new_progress();
  document.querySelector(".modal").style.display = "none";
});
