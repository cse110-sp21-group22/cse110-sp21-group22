// checking if user is signed in or not
auth.onAuthStateChanged((user) => {
  if (!user) {
    location = "login.html";
  }
});

/**
 * Function to hide spinner and show page on load
 */
function PageLoaded() {
  document.getElementById("spinner").classList.add("d-none");
  document.getElementById("main").classList.remove("d-none");
}

/**
 * Function to show spinner and hide page
 */
function PageUnloaded() {
  document.getElementById("spinner").classList.remove("d-none");
  document.getElementById("main").classList.add("d-none");
}

/**
 * Function to show navbar when loaded
 */
function NavbarLoaded() {
  document.getElementById("navbar").classList.remove("d-none");
}

/**
 * Function to change text color based on backgound color
 * @param {*} id
 */
function setTextColor(id) {
  lightDark = lightOrDark(
    document.getElementById("navbar").style.backgroundColor
  );
  if (lightDark == "light") {
    document.getElementById(id).style.color = "black";
  } else {
    document.getElementById(id).style.color = "white";
  }
}

/**
 * Function to determine if a color is light or dark
 * @param {string} color - color in rgb
 * @returns - "light" for light color or "dark" for dark color
 */
function lightOrDark(color) {
  if (!color) {
    return;
  }
  // Variables for red, green, blue values
  var r, g, b, hsp;
  var rgb = color.match(/\d+/g);

  r = rgb[0];
  g = rgb[1];
  b = rgb[2];

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return "light";
  } else {
    return "dark";
  }
}

/**
 * Function to convert date to day in year
 * @param {Date} date date to convert to day in year
 * @returns day in year
 */
function daysIntoYear(date) {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}

/**
 * Function to convert date of year to Date object
 * @param {int} doy
 * @param {int} year
 * @returns Date object
 */
function doyToDate(doy, year) {
  return new Date(year, 0, doy);
}

/**
 * BuJo Task/notes class
 * @constructor
 * @param {string} id id of task/note
 * @param {string} text task/note contents
 * @param {int} level specifies sub-elements
 * @param {int} type specifies type of task/note
 * @param {int} signifier sets signifier
 * @param {int} style sets text style
 */
class BujoElement {
  constructor(id, text, level, type, signifier, style) {
    this.id = id;
    this.text = text;
    this.level = level;
    this.type = type;
    this.signifier = signifier;
    this.style = style;
  }

  /**
   * Sync task/note to database
   * @param {int} selectedDate selected date in notebook
   */
  sync(selectedDate) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let dateYear = daysIntoYear(date) + selectedDate;
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("notes")
          .collection("" + dateYear)
          .doc("" + this.id)
          .withConverter(bujoConverter)
          .set(this)
          .catch((err) => {
            // console.log(err.message);
          });
      }
    });
  }

  /**
   * Delete task/note
   * @param {int} selectedDate selected date in notebook
   */
  delete(selectedDate) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let dateYear = daysIntoYear(date) + selectedDate;
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("notes")
          .collection("" + dateYear)
          .doc("" + this.id)
          .delete()
          .catch((err) => {
            // console.log(err.message);
          });
      }
    });
  }
}

/**
 * Progress tracker class
 * @constructor
 * @param {string} id id of progress tracker
 * @param {string} text title of progress tracker
 * @param {int} start specifies start date of progress tracker
 * @param {int} end specifies end date of progress tracker
 */
class ProgressTracker {
  constructor(id, text, start, end) {
    this.id = id;
    this.text = text;
    this.start = start;
    this.end = end;
  }

  /**
   * Sync progress tracker to database
   */
  sync() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("progress")
          .collection("progress")
          .doc("" + this.id)
          .withConverter(progressConverter)
          .set(this)
          .catch((err) => {
            // console.log(err.message);
          });
      }
    });
  }

  /**
   * Delete progress tracker
   */
  delete() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("progress")
          .collection("progress")
          .doc("" + this.id)
          .delete()
          .catch((err) => {
            // console.log(err.message);
          });
      }
    });
  }
}

// Task/note firestore data converter
var bujoConverter = {
  toFirestore: function (bujo) {
    let dateYear = daysIntoYear(date) + selectedDate;
    return {
      id: bujo.id,
      text: bujo.text,
      level: bujo.level,
      type: bujo.type,
      signifier: bujo.signifier,
      style: bujo.style,
      date: dateYear,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new BujoElement(
      data.id,
      data.text,
      data.level,
      data.type,
      data.signifier,
      data.style
    );
  },
};

// Progress tracker firestore data converter
var progressConverter = {
  toFirestore: function (progress) {
    return {
      id: progress.id,
      text: progress.text,
      start: progress.start,
      end: progress.end,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new ProgressTracker(data.id, data.text, data.start, data.end);
  },
};
