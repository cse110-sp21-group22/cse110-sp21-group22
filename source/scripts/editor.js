// global variables
let previousSelected; // previously selected container
let selectedDate; // date that the user is viewing (0 = today)
let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// When user decides to add a new task
document.querySelector("#add").addEventListener("click", () => {
  let container = newEntry();
  document.querySelector("#editor").append(container);
});

// When user clicks on previous Day
document.querySelector("#previous").addEventListener("click", () => {
  selectedDate--;
  showDay(selectedDate);

  // Disable buttons to set 3 day window restriction on user
  if (selectedDate == 2) {
    document.querySelector("#next").disabled = false;
  }
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
  if (selectedDate == -2) {
    document.querySelector("#previous").disabled = false;
  }
});

// When user clicks on Today button (only visible when not on current day)
document.querySelector("#today").addEventListener("click", () => {
  let next = document.querySelector("#next");
  let previous = document.querySelector("#previous");

  selectedDate = 0;
  showDay(selectedDate);
  if (next.disabled == true) {
    next.disabled = false;
  }

  if (previous.disabled == true) {
    previous.disabled = false;
  }
});

// When user toggles between View/Edit
document.querySelector("#toggle").addEventListener("click", () => {
  let toggle = document.querySelector("#toggle");

  let inputs = document.querySelectorAll("#editor p");

  if (toggle.textContent == "Edit") {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].contentEditable = true;
    }
    toggle.textContent = "View";
  } else {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].contentEditable = false;
    }
    toggle.textContent = "Edit";
  }
});

document.querySelector("#bold").addEventListener("click", () => {
  if (previousSelected.style.fontWeight == "bold") {
    previousSelected.style.setProperty("font-weight", "normal");
  } else {
    previousSelected.style.setProperty("font-weight", "bold");
  }
});
document.querySelector("#italic").addEventListener("click", () => {
  if (previousSelected.style.fontStyle == "normal") {
    previousSelected.style.setProperty("font-style", "italic");
  } else {
    previousSelected.style.setProperty("font-style", "normal");
  }
});

document.querySelector("#underline").addEventListener("click", () => {
  if (previousSelected.style.textDecoration == "underline") {
    previousSelected.style.setProperty("text-decoration", "none");
  } else {
    previousSelected.style.setProperty("text-decoration", "underline");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  selectedDate = 0;
  showDay(selectedDate);

  let d = new Date();
  let year = d.getFullYear();

  // leap year, adjust daysinmonths array
  if (year % 4 == 0) {
    daysInMonths[1] = 29;
  }
});

/*
 * Function creates a new entry inside of a container
 * @param content enter predefined content into an entry
 * @return a reference to the container created
 */
function newEntry(content) {
  // Initializing elements for adding a new task
  let container = document.createElement("DIV");
  let input = document.createElement("P");
  let checkbox = document.createElement("INPUT");
  let trash = document.createElement("IMG");
  const initialText = "Enter text here...";

  let toggle = document.querySelector("#toggle");

  /* Implementation for the checkbox */
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "checkbox";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked == true) {
      input.style.setProperty("text-decoration", "line-through");
    } else {
      input.style.setProperty("text-decoration", "none");
    }
    previousSelected = input;
  });

  /* Implementation for the checkbox */

  /* Implementation for the textbox*/
  input.className = "text";

  // Given pre-defined input
  if (content) {
    input.append(content);
  } else {
    input.innerText = initialText;
  }
  // Adjusting whether text should be editable
  if (toggle.textContent == "Edit") {
    input.contentEditable = false;
  } else {
    input.contentEditable = true;
  }

  // When user clicks on textbox, updates initial text, updates previousSelected
  input.addEventListener("click", () => {
    previousSelected = input;

    if (input.innerText == initialText && toggle.textContent == "View") {
      input.innerText = "";
    }
  });

  // When a user clicks off, checks if empty content, if so adds initial text
  input.addEventListener("blur", () => {
    if (input.innerText == "") {
      input.innerText = initialText;
    }
  });

  // When user presses tab, creates a list
  input.addEventListener("keydown", (e) => {
    if (e.key == "Tab") {
      let listContainer = newEntry();
      listContainer.style.display = "list-item";
      listContainer.style.marginLeft = "10%";
      container.appendChild(listContainer);
    }
  });

  if (previousSelected == null) {
    previousSelected = input;
  }

  /* Implementation for the texbox */

  /* Implemenation for Trash Icon*/
  trash.src = "./trash.jpg";

  trash.addEventListener("click", () => {
    container.remove();
  });
  /* Implemenation for Trash Icon*/

  container.append(checkbox);
  container.append(input);
  container.append(trash);
  container.className = "container";
  container.setAttribute("data-date", selectedDate);

  return container;
}

/*
 * Helper function to display the relevant day
 * @param day - the day to display
 */
function showDay(day) {
  let entries, today;

  entries = document.querySelectorAll("#editor div");

  for (let i = 0; i < entries.length; i++) {
    if (entries[i].getAttribute("data-date") == day) {
      entries[i].style.display = "list-item";
    } else {
      entries[i].style.display = "none";
    }
  }

  let d = new Date();
  let editorDate = document.querySelector("#date");

  let month = d.getMonth();
  let date = d.getDate() + selectedDate;
  let year = d.getFullYear();

  // Go to previous month
  if (date < 1) {
    // Go to previous year
    if (month < 1) {
      month = 11;
      year--;
    }
    date = daysInMonths[month - 1] + date;
    month--;
  }
  // Go to next month
  if (date > daysInMonths[month]) {
    date = date - daysInMonths[month];
    month++;

    // Go to next year
    if (month > 11) {
      month = 0;
      year++;
    }
  }

  month = (month + 1).toString();
  date = date.toString();
  year = year.toString();

  editorDate.innerText = month + "/" + date + "/" + year;

  today = document.querySelector("#today");

  if (selectedDate == 0) {
    today.style.display = "none";
  } else {
    today.style.display = "inline-block";
  }
}
