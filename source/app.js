/**
 * Get color from colorpicker and change navbar color.
 * @author Test
 * @example Test
 */
ColorPicker(
  document.getElementById('color-picker'),
  function(hex, hsv, rgb) {
    document.getElementById('navbar').style.backgroundColor = hex;
  });