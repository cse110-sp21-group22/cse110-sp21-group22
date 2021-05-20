// Change default path if testing locally (/source)
const router = new Navigo("/");
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
const daysInMonth = [29, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let currDate = "";
let PROGRESS_BAR = "";
let WEEK = "";
const today = new Date();
const one_day_per_second = 1000 * 60 * 60 * 24;
const one_week_per_second = one_day_per_second * 7;

/**
 *
 * @param {String} page - Represents the page information that needs to be
 *     retrieved
 * @returns {String} resHtml - The Page's HTML is returned from the async
 *     invocation
 */

const loadPage = async (page) => {
  const response = await fetch(page);
  return response.text();
};

/**
 * The Async function loads all HTML to the variables
 */
const loadAllPages = async () => {
  home = await loadPage("main.html");
  calendar = await loadPage("calendar.html");
  moodtracker = await loadPage("moodtracker.html");
  settings = await loadPage("settings.html");
};

/**
 * The Main Function is an async function that first loads All Page HTML to the
 * variables Once the variables are loaded with the contents, then they are
 * assigned to the 'routes' variable
 */
const main = async () => {
  await loadAllPages();
  rootDiv.innerHTML = home;
  dynamicallyLoadScript("color.js");
  dynamicallyLoadScript("index.js");
  PageLoaded();
  router.on("/", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = home;
    dynamicallyLoadScript(
      "color.js",
      dynamicallyLoadScript("index.js", updateNavbar("home"))
    );
  });
  router.on("/calendar", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = calendar;
    dynamicallyLoadScript("calendar.js", updateNavbar("nav-calendar"));
  });
  router.on("/mood", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = moodtracker;
    dynamicallyLoadScript(
      "color.js",
      dynamicallyLoadScript("moodFunctionality.js", updateNavbar("nav-mood"))
    );
  });
  router.on("/settings", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = settings;
    dynamicallyLoadScript("settings.js", updateNavbar("nav-settings"));
  });
};

function dynamicallyLoadScript(location, callback) {
  var script = document.createElement("script");
  script.src = location;
  script.className = "dynamic-script";
  document.body.appendChild(script);
  script.onreadystatechange = callback;
  script.onload = callback;
}

function unloadScripts() {
  var scripts = document.getElementsByClassName("dynamic-script");
  while (scripts[0]) {
    scripts[0].parentNode.removeChild(scripts[0]);
  }
}

function updateNavbar(page) {
  document.getElementById("nav-settings").className = "nav-link";
  document.getElementById("nav-calendar").className = "nav-link";
  document.getElementById("nav-mood").className = "nav-link";
  if (page != "home") {
    document.getElementById(page).className = "nav-link active";
  }
}

/**
 * The Function is invoked when the window.history's state changes
 */
window.onpopstate = () => {
  router.resolve();
};

main();
