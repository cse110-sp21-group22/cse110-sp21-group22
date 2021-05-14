// checking if user is signed in or not
auth.onAuthStateChanged((user) => {
  if (!user) {
    location = "login.html";
  }
});

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}
