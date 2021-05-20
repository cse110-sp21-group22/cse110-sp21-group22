ColorPicker(document.getElementById("color-picker"), function (hex, hsv, rgb) {
  if (lightOrDark(hex) == "light") {
    document.getElementById("navbar").className =
      "navbar navbar-expand-md navbar-light fixed-top";
  } else {
    document.getElementById("navbar").className =
      "navbar navbar-expand-md navbar-dark fixed-top";
  }
  document.getElementById("navbar").style.backgroundColor = hex;
});

/**
 * Function to determine if a color is light or dark
 * @param {string} color - color in hex
 * @returns - "light" for light color or "dark" for dark color
 */
function lightOrDark(color) {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Convert hex to RGB: http://gist.github.com/983661
  color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

  r = color >> 16;
  g = (color >> 8) & 255;
  b = color & 255;

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
 * Function to log out user
 */
function logout() {
  auth.signOut();
}

function save() {
  auth.onAuthStateChanged((user) => {
    hStyle = document.getElementById("navbar").className;
    hColor = document.getElementById("navbar").style.backgroundColor;
    fs.collection("users")
      .doc(user.uid)
      .collection("settings")
      .doc("navbar")
      .set({ hStyle: hStyle, hColor: hColor });
  });
}

PageLoaded();
