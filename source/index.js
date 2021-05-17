/**
 * Tasks that occur whenever the webpage is loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  /* Quote Generator */

  let url = "https://api.quotable.io/random";

  // Fetches information from quote generator website
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      // Updates html objects with content from the website
      document.querySelector("#quote").innerHTML = '"' + result.content + '"';
      document.querySelector("#authors").innerHTML = "-" + result.author;
    });

  /*Quote Generator */
});

window.addEventListener(
  "resize",
  function () {
    // fire when less than 768px
    if (document.documentElement.clientWidth < 768) {
      document.getElementById("mood-selector").style = "flex-direction: row";
    }
    // fire when geq 768
    else {
      document.getElementById("mood-selector").style = "flex-direction: column";
    }
  },
  true
);

/* very happy mood selected */
veryHappy.addEventListener("click", function () {
  colorChange("very-happy", veryHappy, "green");
});

/* happy mood selected */
happy.addEventListener("click", function () {
  colorChange("happy", happy, "lightgreen");
});

/* neutral mood selected */
neutral.addEventListener("click", function () {
  colorChange("neutral", neutral, "yellow");
});

/* sad mood selected */
sad.addEventListener("click", function () {
  colorChange("sad", sad, "orange");
});

/* very sad mood selected */
verySad.addEventListener("click", function () {
  colorChange("very-sad", verySad, "red");
});

// Change mood buttons based on window size
if (document.documentElement.clientWidth < 768) {
  document.getElementById("mood-selector").style = "flex-direction: row";
} else {
  document.getElementById("mood-selector").style = "flex-direction: column";
}

PageLoaded();
