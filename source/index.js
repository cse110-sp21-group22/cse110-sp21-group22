window.addEventListener("resize", resize, true);

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

// Change mood buttons based on window size
if (document.documentElement.clientWidth < 768) {
  document.getElementById("mood-selector").style = "flex-direction: row";
} else {
  document.getElementById("mood-selector").style = "flex-direction: column";
}

url = "https://api.quotable.io/random";

// Fetches information from quote generator website
if (navigator.onLine) {
  fetch(url)
      .then((response) => response.json())
      .then((result) => {
        // Updates html objects with content from the website
        document.querySelector("#quote").innerHTML = '"' + result.content + '"';
        document.querySelector("#authors").innerHTML = "-" + result.author;
      })
      .then(() => { PageLoaded(); });
} else {
  document.querySelector("#quote").innerHTML =
      '"To acquire knowledge, one must study; but to acquire wisdom, one must observe."';
  document.querySelector("#authors").innerHTML = '-Marilyn vos Savant';
  PageLoaded();
}
