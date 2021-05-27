/**
 * Function to update color based on mood
 * @param {string} mood - mood string
 * @param {HTMLElement} moodClass - mood class
 * @param {string} color - mood color
 */
function colorChange(mood, moodClass, color) {
  veryHappy.classList.toggle("very-happy-click", false);
  happy.classList.toggle("happy-click", false);
  neutral.classList.toggle("neutral-click", false);
  sad.classList.toggle("sad-click", false);
  verySad.classList.toggle("very-sad-click", false);
  var toggleString = mood + "-click";
  moodClass.classList.toggle(toggleString, true);
  auth.onAuthStateChanged((user) => {
    var color_string = "color-" + month + "-" + day;
    fs.collection("users")
      .doc(user.uid)
      .collection("data")
      .doc("mood")
      .update({ [color_string]: [color], selectedIcon: [mood] })
      .catch((err) => {
        fs.collection("users")
          .doc(user.uid)
          .collection("data")
          .doc("mood")
          .set({ [color_string]: [color], selectedIcon: [mood] });
      });
  });
}
