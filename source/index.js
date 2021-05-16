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

PageLoaded();
