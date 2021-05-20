// Change default path if testing locally (/source)
const router = new Navigo("/source");
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
  router.on("/", () => {
    PageUnloaded();
    unloadScripts();
    rootDiv.innerHTML = home;
    dynamicallyLoadScript(
      "index.js",
      dynamicallyLoadScript("color.js", updateNavbar("home"))
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
      "moodFunctionality.js",
      dynamicallyLoadScript("color.js", updateNavbar("nav-mood"))
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
  window.removeEventListener("resize", resize, true);
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

auth.onAuthStateChanged((user) => {
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
        console.log(err);
      }
    });
});

/**
 * The Function is invoked when the window.history's state changes
 */
window.onpopstate = () => {
  router.resolve();
};

main().then(() => {
  rootDiv.innerHTML = home;
  dynamicallyLoadScript(
    "index.js",
    dynamicallyLoadScript("color.js", updateNavbar("home"))
  );
});
