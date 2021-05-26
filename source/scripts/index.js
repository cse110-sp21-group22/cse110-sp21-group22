window.addEventListener("resize", resize, true);

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

var rosethorn = document.getElementById("rosethorn");
var rose = document.getElementById("rose");
var thorn = document.getElementById("thorn");
var date_string = month + "-" + day;

auth.onAuthStateChanged((user) => {
  fs.collection("users")
    .doc(user.uid)
    .collection("data")
    .doc("rosethorn")
    .onSnapshot((doc) => {
      try {
        rose.innerHTML = doc.data().rose;
        thorn.innerHTML = doc.data().thorn;
      } catch (err) {
        console.log(err);
      }
    });
});

rosethorn.addEventListener("focusout", (event) => {
  auth.onAuthStateChanged((user) => {
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("rosethorn")
      .update({
        date: [date_string],
        rose: [rose.innerHTML],
        thorn: [thorn.innerHTML],
      })
      .catch((err) => {
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("rosethorn")
          .set({
            date: [date_string],
            rose: [rose.innerHTML],
            thorn: [thorn.innerHTML],
          });
      });
  });
});

auth.onAuthStateChanged((user) => {
  fs.collection("users")
    .doc(user.uid)
    .collection("data")
    .doc("rosethorn")
    .get()
    .then((doc) => {
      try {
        if (doc.data().date != date_string) {
          fs.collection("users")
            .doc(user.uid)
            .collection("data")
            .doc("rosethorn")
            .set({
              date: [date_string],
              rose: "Rose: ",
              thorn: "Thorn: ",
            });
        }
      } catch (err) {
        console.log(err);
      }
    });
});

// Demonstration of functionality of checking tasks/events
$('.fa-square').click(function(){
  $(this).toggleClass('fa-square');
  $(this).toggleClass('fa-check-square');
});
$('.fa-check-square').click(function(){
  $(this).toggleClass('fa-square');
  $(this).toggleClass('fa-check-square');
});
$('.fa-circle').click(function(){
  $(this).toggleClass('fa-circle');
  $(this).toggleClass('fa-check-circle');
});
$('.fa-check-circle').click(function(){
  $(this).toggleClass('fa-circle');
  $(this).toggleClass('fa-check-circle');
});

// Demonstration of functionality of collapsible sub-lists
$('.fa-chevron-down').click(function(){
  $('#item2').toggleClass('hide');
  $(this).toggleClass('fa-chevron-down');
  $(this).toggleClass('fa-chevron-right');
});

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
    .then(() => {
      PageLoaded();
    });
} else {
  document.querySelector("#quote").innerHTML =
    '"To acquire knowledge, one must study; but to acquire wisdom, one must observe."';
  document.querySelector("#authors").innerHTML = "-Marilyn vos Savant";
  PageLoaded();
}
