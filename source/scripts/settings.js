topo = document.getElementById("topo");
wave = document.getElementById("wave");
graph = document.getElementById("graph");

/* topography selected */
topo.addEventListener("click", function () {
  document.getElementById("body").className = "body topo";
});

/* topography selected */
wave.addEventListener("click", function () {
  document.getElementById("body").className = "body wave";
});

/* topography selected */
graph.addEventListener("click", function () {
  document.getElementById("body").className = "body graph";
});

// Change elements based on color picker
ColorPicker(document.getElementById("color-picker"), function (hex, hsv, rgb) {
  lightDark = lightOrDark("rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")");
  if (lightDark == "light") {
    document.getElementById("navbar").className =
      "navbar navbar-expand-md navbar-light fixed-top";
    document.getElementById("body").style.backgroundColor = RGB_Linear_Shade(
      -0.25,
      "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"
    );
  } else {
    document.getElementById("navbar").className =
      "navbar navbar-expand-md navbar-dark fixed-top";
    document.getElementById("body").style.backgroundColor = RGB_Linear_Shade(
      0.3,
      "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"
    );
  }
  document.getElementById("navbar").style.backgroundColor =
    "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
  setTextColor("user-background");
  setTextColor("settings");
});

/**
 * Function to shade a color
 * @param {float} p percetage to lighten or darken
 * @param {rgb} color color in rgb
 */
function RGB_Linear_Shade(p, color) {
  var i = parseInt,
    r = Math.round,
    [a, b, c, d] = color.split(","),
    P1 = p < 0,
    t = P1 ? 0 : 255 * p,
    P = P1 ? 1 + p : 1 - p;
  return (
    "rgb" +
    (d ? "a(" : "(") +
    r(i(a[3] == "a" ? a.slice(5) : a.slice(4)) * P + t) +
    "," +
    r(i(b) * P + t) +
    "," +
    r(i(c) * P + t) +
    (d ? "," + d : ")")
  );
}

/**
 * Function to log out user
 */
function logout() {
  auth.signOut();
}

/**
 * Function to save color preference
 */
function save() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      hStyle = document.getElementById("navbar").className;
      hColor = document.getElementById("navbar").style.backgroundColor;
      bStyle = document.getElementById("body").className;
      bColor = document.getElementById("body").style.backgroundColor;

      fs.collection("users")
        .doc(user.uid)
        .collection("settings")
        .doc("navbar")
        .set({ hStyle: hStyle, hColor: hColor });

      fs.collection("users")
        .doc(user.uid)
        .collection("settings")
        .doc("body")
        .set({ bStyle: bStyle, bColor: bColor });
    }
  });
}

$(window).on("beforeunload", function () {
  save();
});

// Enable popovers
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

PageLoaded();
