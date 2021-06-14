const router = new Navigo("/", { hash: true });
let home = "";
let calendar = "";
let moodtracker = "";
let settings = "";
const rootDiv = document.getElementById("main");

// Initialize all needed variables
let veryHappy = "";
let happy = "";
let neutral = "";
let sad = "";
let verySad = "";
let hColor = "";
let hStyle = "";
let bColor = "";
let bStyle = "";
let topo = "";
let wave = "";
let graph = "";
let lightDark = "light";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
let url = "";
let yearGrid = "";
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
const monthNameLong = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let daysInMonth = [29, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let currDate = "";
let PROGRESS_BAR = "";
let WEEK = "";
const today = new Date();
const one_day_per_second = 1000 * 60 * 60 * 24;
const one_week_per_second = one_day_per_second * 7;
let dailyLog = "";
let add = "";
let addItem = "";
let previousSelected = "";
let selectedDate = 0;
let editStatus = false;
let quote =
  '"To acquire knowledge, one must study; but to acquire wisdom, one must observe."';
let author = "-Marilyn vos Savant";

/**
 * Function to load subpages
 * @param {string} page page to load
 * @returns html of page
 */
const loadPage = async (page) => {
  const response = await fetch(page);
  return response.text();
};

/**
 * Load all pages and save them in variables
 */
const loadAllPages = async () => {
  home = await loadPage("./pages/main.html");
  calendar = await loadPage("./pages/calendar.html");
  moodtracker = await loadPage("./pages/moodtracker.html");
  settings = await loadPage("./pages/settings.html");
};

/**
 * The main function is an async function that first loads all Page HTML to the
 * variables. Once the variables are loaded with the contents, then the routes
 * are established.
 */
const main = async () => {
  await loadAllPages();
  router.on("/", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = home;
    setTextColor("feelings");
    setTextColor("quote");
    setTextColor("authors");
    dynamicallyLoadScript(
      "./scripts/index.js",
      dynamicallyLoadScript("./scripts/color.js", updateNavbar("home"))
    );
  });
  router.on("/calendar", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = calendar;
    dynamicallyLoadScript(
      "./scripts/calendar.js",
      updateNavbar("nav-calendar")
    );
  });
  router.on("/mood", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = moodtracker;
    dynamicallyLoadScript(
      "./scripts/moodFunctionality.js",
      dynamicallyLoadScript("./scripts/color.js", updateNavbar("nav-mood"))
    );
  });
  router.on("/settings", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = settings;
    setTextColor("user-background");
    setTextColor("settings");
    dynamicallyLoadScript(
      "./scripts/settings.js",
      updateNavbar("nav-settings")
    );
  });
};

/**
 * Dynamically load scripts based on page
 * @param {string} location location of script
 * @param {function} callback function to execute
 */
function dynamicallyLoadScript(location, callback) {
  var script = document.createElement("script");
  script.src = location;
  script.className = "dynamic-script";
  document.body.appendChild(script);
  script.onreadystatechange = callback;
  script.onload = callback;
}

/**
 * Function to unload all page scripts
 */
function unloadScripts() {
  window.removeEventListener("resize", resize, true);
  var scripts = document.getElementsByClassName("dynamic-script");
  while (scripts[0]) {
    scripts[0].parentNode.removeChild(scripts[0]);
  }
}

/**
 * Function to update the navbar based on the page
 * @param {string} page page to set navbar to
 */
function updateNavbar(page) {
  document.getElementById("nav-settings").className = "nav-link";
  document.getElementById("nav-calendar").className = "nav-link";
  document.getElementById("nav-mood").className = "nav-link";
  if (page != "home") {
    document.getElementById(page).className = "nav-link active";
  }
}

/**
 * Function to make mood tracker horizontal on small screens
 */
function resize() {
  // fire when less than 768px
  if (document.documentElement.clientWidth < 768) {
    document.getElementById("mood-selector").style = "flex-direction: row";
  }
  // fire when geq 768
  else {
    document.getElementById("mood-selector").style = "flex-direction: column";
  }
}

// Update navbar color from firebase
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("settings")
      .doc("navbar")
      .onSnapshot((doc) => {
        try {
          hColor = doc.data().hColor;
          hStyle = doc.data().hStyle;
          document.getElementById("navbar").className = hStyle;
          document.getElementById("navbar").style.backgroundColor = hColor;
        } catch (err) {
          // console.log(err);
        }
        NavbarLoaded();
        if (document.getElementById("quote")) {
          setTextColor("feelings");
          setTextColor("quote");
          setTextColor("authors");
        }
      });
  }
});

// Update background from firebase
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("settings")
      .doc("body")
      .onSnapshot((doc) => {
        try {
          bColor = doc.data().bColor;
          bStyle = doc.data().bStyle;
          document.getElementById("body").className = bStyle;
          document.getElementById("body").style.backgroundColor = bColor;
        } catch (err) {
          // console.log(err);
        }
      });
  }
});

// register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./scripts/sw.js");
  });
}

// Get quote
const loadQuote = async () => {
  url = "https://api.quotable.io/random";

  // Fetches information from quote generator website
  if (navigator.onLine) {
    await fetch(url)
      .then((response) => response.json())
      .then((result) => {
        // Updates html objects with content from the website
        quote = '"' + result.content + '"';
        author = "-" + result.author;
      });
  } else {
    quote =
      '"To acquire knowledge, one must study; but to acquire wisdom, one must observe."';
    author = "-Marilyn vos Savant";
  }
};

/**
 * The Function is invoked when the window.history's state changes
 */
window.onpopstate = () => {
  router.resolve();
};

loadQuote().then(() => {
  main().then(() => {
    rootDiv.innerHTML = home;
    setTextColor("feelings");
    setTextColor("quote");
    setTextColor("authors");
    setTimeout(() => {
      dynamicallyLoadScript(
        "./scripts/index.js",
        dynamicallyLoadScript("./scripts/color.js", updateNavbar("home"))
      );
    }, 1500);
  });
});

// Clear mood tracker data on new year
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("mood")
      .get()
      .then((doc) => {
        if (month == 1 && day == 1 && "color-1-2" in doc.data()) {
          fs.collection("users")
            .doc(user.uid)
            .collection("data")
            .doc("mood")
            .delete();
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  }
});
