const veryHappy = document.getElementById("very-happy");
const happy = document.getElementById("happy");
const neutral = document.getElementById("neutral");
const sad = document.getElementById("sad");
const verySad = document.getElementById("very-sad");
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();

/**
 * Tasks that occur whenever the webpage is loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  /* Quote Generator */

  let url = "https://api.quotable.io/random";

  // Fetches information from quote generator website
  fetch(url).then((response) => response.json()).then((result) => {
    // Updates html objects with content from the website
    document.querySelector("#quote").innerHTML = '"' + result.content + '"';
    document.querySelector("#authors").innerHTML = "-" + result.author;
  });

  /*Quote Generator */
});

/* very happy mood selected */
veryHappy.addEventListener(
    "click", function() { colorChange("very-happy", veryHappy, "green"); });

/* happy mood selected */
happy.addEventListener(
    "click", function() { colorChange("happy", happy, "lightgreen"); });

/* neutral mood selected */
neutral.addEventListener(
    "click", function() { colorChange("neutral", neutral, "yellow"); });

/* sad mood selected */
sad.addEventListener("click",
                     function() { colorChange("sad", sad, "orange"); });

/* very sad mood selected */
verySad.addEventListener(
    "click", function() { colorChange("very-sad", verySad, "red"); });

/**
 * Function to update color based on mood
 * @param {string} mood - mood string
 * @param {HTMLElement} moodClass - mood class
 * @param {string} color - mood color
 */
function colorChange(mood, moodClass, color) {
  veryHappy.classList.toggle("very-happy-click", false);
  happy.classList.toggle("happy-click", false);
  neutral.classList.toggle("neutral-click", false);
  sad.classList.toggle("sad-click", false);
  verySad.classList.toggle("very-sad-click", false);
  var toggleString = mood + "-click";
  moodClass.classList.toggle(toggleString, true);
  auth.onAuthStateChanged((user) => {
    try {
      var color_string = "color-" + month + "-" + day;
      fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("mood")
          .update({[color_string] : [ red ], selectedIcon : [ mood ]});
    } catch {
      color_string = "color-" + month + "-" + day;
      fs.collection("users").doc(user.uid).collection("data").doc("mood").set(
          {[color_string] : [ color ], selectedIcon : [ mood ]});
    }
  });
}

PageLoaded();
