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
 * function for progress bar
 */

// Calculate the date diff and what week
function cal_date(start, end) {
  const today = new Date();
  const one_day_per_second = 1000 * 60 * 60 * 24;
  const one_week_per_second = one_day_per_second * 7;
  const date_diff = (end - start) / one_day_per_second;
  let weeks = (today - start) / one_week_per_second;
  weeks = Math.round(weeks);
  let progress = (today - start) / one_day_per_second / date_diff;
  progress = Math.round(progress * 100);
  return [progress, weeks];
}

// Update the bar
function update_bar(element, value) {
  if (value > 100) {
    value = 100;
  }
  if (value <= 5) {
    element.style.backgroundColor = "#86e01e";
  } else if (value <= 25 && value > 5) {
    element.style.backgroundColor = "organge";
  } else if (value <= 50 && value > 25) {
    element.style.backgroundColor = "gold";
  } else if (value <= 75 && value > 50) {
    element.style.backgroundColor = "yellow";
  } else {
    element.style.backgroundColor = "red";
  }
  element.style.width = `${value}%`;
}

/* When user create a new prograss, this function will be called and bind the
 * date picker*/
function update_progress(start, end, bar) {
  $(".startdate").datepicker();
  $(".enddate").datepicker();
  const select_start = "#" + start.id;
  const select_end = "#" + end.id;
  $(select_start).bind("change", function () {
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
  });
  $(select_end).bind("change", function () {
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
  });
}

// Function where you can delete a progress
function btn(button, element) {
  button.addEventListener("click", () => {
    element.remove();
  });
}

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

function create_new_progress() {
  const progress_section = document.getElementById("progess_section");
  let id = "id" + performance.now();
  const text = document.getElementById("newproresstitle").value;
  const start = document.getElementById("newstartdate").value;
  const end = document.getElementById("newenddate").value;

  const new_progress = document.createElement("div");
  new_progress.setAttribute("class", "new_progress");

  const title = document.createElement("h1");
  title.contentEditable = true;
  title.innerHTML = text;

  const bar = document.createElement("div");
  bar.setAttribute("class", "bar");
  const bar_content = document.createElement("div");
  bar_content.setAttribute("data-size", 0);
  bar_content.setAttribute("class", "progress");
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
  btn_remove.setAttribute("href", "#");
  btn_remove.setAttribute("class", "button_remove");
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
document.getElementById("button_add").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
  $("#newstartdate").datepicker();
  $("#newenddate").datepicker();
});

// Close the modal
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

// Submit the progress
document.getElementById("button_submit").addEventListener("click", () => {
  create_new_progress();
  document.querySelector(".modal").style.display = "none";
});
