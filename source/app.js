/**
 * Get color from colorpicker and change navbar color.
 */
ColorPicker(
  document.getElementById('color-picker'),
  function(hex, hsv, rgb) {
      document.getElementById('navbar').style.backgroundColor = hex;
  });