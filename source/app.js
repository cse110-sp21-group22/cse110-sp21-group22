/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}

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
