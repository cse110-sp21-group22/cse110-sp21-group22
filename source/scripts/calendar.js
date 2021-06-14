PROGRESS_BAR = "week-bar";
WEEK = document.getElementById("weeks");
document.getElementById(PROGRESS_BAR).style.width = `${0}%`;

$("#datepicker1").datepicker();
$("#datepicker2").datepicker();

auth.onAuthStateChanged((user) => {
  if (user) {
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
          // console.log(err);
        }
      });
  }
});

/**
 * Calculate the progress based on the start and end dates
 * @param {Date} start starting date
 * @param {Date} end ending date
 * @returns Array containing progress in percentage and the number of weeks
 *     since start
 */
function cal_date(start, end) {
  let today = daysIntoYear(new Date());
  let date_diff = end - start;
  let weeks = Math.round((today - start) / 7);
  let progress = (today - start) / date_diff;
  progress = Math.round(progress * 100);
  return [progress, weeks];
}

/**
 * Function to update the given bar
 * @param {string} id bar to update
 * @param {int} value percentage of bar
 */
function update_bar(id, value) {
  let element = document.getElementById(id);
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
 * @param {string} id id of progress tracker
 */
function update_progress(id) {
  const select_start = "#start_" + id;
  const select_end = "#end_" + id;
  $(select_start).bind("change", function () {
    select(id);
    let text = $("#" + id).attr("text");
    let start_date = parseInt(
      daysIntoYear($("#start_" + id).datepicker("getDate"))
    );
    let end_date = parseInt($("#" + id).attr("end"));
    let progress = new ProgressTracker(id, text, start_date, end_date);
    progress.sync();
    $("#" + id).attr("start", start_date);
  });
  $(select_end).bind("change", function () {
    select(id);
    let text = $("#" + id).attr("text");
    let end_date = parseInt(
      daysIntoYear($("#end_" + id).datepicker("getDate"))
    );
    let start_date = parseInt($("#" + id).attr("start"));
    let progress = new ProgressTracker(id, text, start_date, end_date);
    progress.sync();
    $("#" + id).attr("end", end_date);
  });
}

/**
 * Function to get start and end dates and update progress bar
 * @param {string} id id of progress tracker
 */
function select(id) {
  let start_date = parseInt(
    daysIntoYear($("#start_" + id).datepicker("getDate"))
  );
  let end_date = parseInt(daysIntoYear($("#end_" + id).datepicker("getDate")));
  if (
    end_date != undefined &&
    start_date != undefined &&
    start_date <= end_date
  ) {
    const response = cal_date(start_date, end_date);
    update_bar("bar_" + id, response[0]);
  }
}

/**
 * Function to delete a progress tracker
 * @param {HTMLElement} button delete button
 * @param {HTMLElement} element progress tracker to remove
 */
function btn(button, element) {
  button.addEventListener("click", () => {
    let id = element.getAttribute("id");
    let progress = new ProgressTracker(id, "", 0, 0);
    progress.delete();
  });
}

/**
 * Function to update the main tracker
 */
function progress_func() {
  var semester_start = $("#datepicker1").datepicker("getDate");
  var semester_end = $("#datepicker2").datepicker("getDate");
  auth.onAuthStateChanged((user) => {
    if (user) {
      fs.collection("users")
        .doc(user.uid)
        .collection("settings")
        .doc("calendar")
        .set({ semester_start: semester_start, semester_end: semester_end });
    }
  });
  if (semester_end != undefined && semester_start != undefined) {
    var response = cal_date(
      daysIntoYear(semester_start),
      daysIntoYear(semester_end)
    );
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
 * Function to render progress data from a doc
 * @param {FirestoreDoc} individualDoc - Individual firestore doc
 */
function renderData(individualDoc) {
  let progress = progressConverter.fromFirestore(individualDoc);
  let id = progress.id;
  let text = progress.text;
  let start = parseInt(progress.start);
  let end = parseInt(progress.end);

  const progress_section = document.getElementById("progress-section");
  const new_progress = document.createElement("div");
  new_progress.setAttribute("class", "new_progress");
  new_progress.setAttribute("id", id);
  new_progress.setAttribute("text", text);
  new_progress.setAttribute("start", start);
  new_progress.setAttribute("end", end);

  const title = document.createElement("h2");
  title.contentEditable = true;
  title.innerHTML = text;

  const bar = document.createElement("div");
  bar.setAttribute("class", "progress");
  const bar_content = document.createElement("div");
  bar_content.setAttribute("id", "bar_" + id);
  bar_content.setAttribute("class", "progress-bar");
  bar_content.setAttribute("role", "progressbar");
  bar_content.setAttribute("style", "width: 100%");
  bar_content.setAttribute("aria-valuenow", "0");
  bar_content.setAttribute("aria-valuemin", "0");
  bar_content.setAttribute("aria-valuemax", "100");
  bar.appendChild(bar_content);

  /*
  <div class="dateinput">
    <label>Start:</label>
    <input type="text" id=?></input>
    <label>End:</label>
    <input type="text" id=?></input>
    <a class"button-remove">Delete</a>
  </div>
  */
  const date_input_div = document.createElement("div");
  date_input_div.setAttribute("class", "dateinput");
  const start_label = document.createElement("label");
  start_label.innerHTML = "Start:";
  const start_input = document.createElement("input");
  start_input.setAttribute("class", "form-control");
  start_input.setAttribute("id", "start_" + id);
  start_input.setAttribute("data-provide", "datepicker");
  start_input.setAttribute("style", "width: 110px");
  date_input_div.appendChild(start_label);
  date_input_div.appendChild(start_input);

  const end_label = document.createElement("label");
  end_label.innerText = "End:";
  const end_input = document.createElement("input");
  end_input.setAttribute("class", "form-control");
  end_input.setAttribute("id", "end_" + id);
  end_input.setAttribute("data-provide", "datepicker");
  end_input.setAttribute("style", "width: 110px");
  date_input_div.appendChild(end_label);
  date_input_div.appendChild(end_input);

  const btn_remove = document.createElement("a");
  btn_remove.setAttribute("class", "button-remove");
  btn_remove.innerHTML = "Delete";
  date_input_div.appendChild(btn_remove);

  new_progress.appendChild(document.createElement("br"));
  new_progress.appendChild(title);
  new_progress.appendChild(bar);
  new_progress.appendChild(document.createElement("br"));
  new_progress.appendChild(date_input_div);
  progress_section.appendChild(new_progress);

  $("#start_" + id).datepicker();
  $("#start_" + id).datepicker("update", doyToDate(start, year));
  $("#end_" + id).datepicker();
  $("#end_" + id).datepicker("update", doyToDate(end, year));

  let response = cal_date(start, end);
  update_bar("bar_" + id, response[0]);
  update_progress(id);
  btn(btn_remove, new_progress);
}

// realtime listners
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("progress")
      .collection("progress")
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        let progress_section = document.getElementById("progress-section");
        changes.forEach((change) => {
          if (change.type == "added") {
            if (
              dailyLog.querySelector('[id="' + change.doc.id + '"]') == null
            ) {
              renderData(change.doc);
            }
          } else if (change.type == "removed") {
            let progress = progress_section.querySelector(
              '[id="' + change.doc.id + '"]'
            );
            if (
              progress_section.querySelector('[id="' + change.doc.id + '"]') !=
              null
            ) {
              progress_section.removeChild(progress);
            }
          }
        });
      });
  }
});

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
  let id = new Date().getTime();
  let text = document.getElementById("newproresstitle").value;
  let start = daysIntoYear($("#newstartdate").datepicker("getDate"));
  let end = daysIntoYear($("#newenddate").datepicker("getDate"));
  let progress = new ProgressTracker(id, text, start, end);
  progress.sync();
  document.querySelector(".modal").style.display = "none";
});

PageLoaded();
