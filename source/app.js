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

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
 function Book(title, author) {
}