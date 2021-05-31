function cov_1i7sov98la() {
  var path =
      "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/color.js";
  var hash = "f00a197746b75c8e66b40b0e83f7d38a70176510";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path :
        "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/color.js",
    statementMap : {
      "0" : {start : {line : 8, column : 2}, end : {line : 8, column : 56}},
      "1" : {start : {line : 9, column : 2}, end : {line : 9, column : 47}},
      "2" : {start : {line : 10, column : 2}, end : {line : 10, column : 51}},
      "3" : {start : {line : 11, column : 2}, end : {line : 11, column : 43}},
      "4" : {start : {line : 12, column : 2}, end : {line : 12, column : 52}},
      "5" : {start : {line : 13, column : 21}, end : {line : 13, column : 36}},
      "6" : {start : {line : 14, column : 2}, end : {line : 14, column : 49}},
      "7" : {start : {line : 15, column : 2}, end : {line : 29, column : 5}},
      "8" : {start : {line : 16, column : 23}, end : {line : 16, column : 51}},
      "9" : {start : {line : 17, column : 4}, end : {line : 28, column : 9}},
      "10" : {start : {line : 23, column : 8}, end : {line : 27, column : 66}}
    },
    fnMap : {
      "0" : {
        name : "colorChange",
        decl : {start : {line : 7, column : 9}, end : {line : 7, column : 20}},
        loc : {start : {line : 7, column : 45}, end : {line : 30, column : 1}},
        line : 7
      },
      "1" : {
        name : "(anonymous_1)",
        decl :
            {start : {line : 15, column : 26}, end : {line : 15, column : 27}},
        loc : {start : {line : 15, column : 36}, end : {line : 29, column : 3}},
        line : 15
      },
      "2" : {
        name : "(anonymous_2)",
        decl :
            {start : {line : 22, column : 13}, end : {line : 22, column : 14}},
        loc : {start : {line : 22, column : 22}, end : {line : 28, column : 7}},
        line : 22
      }
    },
    branchMap : {},
    s : {
      "0" : 0,
      "1" : 0,
      "2" : 0,
      "3" : 0,
      "4" : 0,
      "5" : 0,
      "6" : 0,
      "7" : 0,
      "8" : 0,
      "9" : 0,
      "10" : 0
    },
    f : {"0" : 0, "1" : 0, "2" : 0},
    b : {},
    _coverageSchema : "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash : "f00a197746b75c8e66b40b0e83f7d38a70176510"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1i7sov98la = function() { return actualCoverage; };
  }
  return actualCoverage;
}

cov_1i7sov98la();

/**
 * Function to update color based on mood
 * @param {string} mood - mood string
 * @param {HTMLElement} moodClass - mood class
 * @param {string} color - mood color
 */
function colorChange(mood, moodClass, color) {
  cov_1i7sov98la().f[0]++;
  cov_1i7sov98la().s[0]++;
  veryHappy.classList.toggle("very-happy-click", false);
  cov_1i7sov98la().s[1]++;
  happy.classList.toggle("happy-click", false);
  cov_1i7sov98la().s[2]++;
  neutral.classList.toggle("neutral-click", false);
  cov_1i7sov98la().s[3]++;
  sad.classList.toggle("sad-click", false);
  cov_1i7sov98la().s[4]++;
  verySad.classList.toggle("very-sad-click", false);
  var toggleString = (cov_1i7sov98la().s[5]++, mood + "-click");
  cov_1i7sov98la().s[6]++;
  moodClass.classList.toggle(toggleString, true);
  cov_1i7sov98la().s[7]++;
  auth.onAuthStateChanged(user => {
    cov_1i7sov98la().f[1]++;
    var color_string = (cov_1i7sov98la().s[8]++, "color-" + month + "-" + day);
    cov_1i7sov98la().s[9]++;
    fs.collection("users")
        .doc(user.uid)
        .collection("data")
        .doc("mood")
        .update({[color_string] : [ color ], selectedIcon : [ mood ]})
        .catch(err => {
          cov_1i7sov98la().f[2]++;
          cov_1i7sov98la().s[10]++;
          fs.collection("users")
              .doc(user.uid)
              .collection("data")
              .doc("mood")
              .set({[color_string] : [ color ], selectedIcon : [ mood ]});
        });
  });
}
//#
//sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLmpzIl0sIm5hbWVzIjpbImNvbG9yQ2hhbmdlIiwibW9vZCIsIm1vb2RDbGFzcyIsImNvbG9yIiwidmVyeUhhcHB5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaGFwcHkiLCJuZXV0cmFsIiwic2FkIiwidmVyeVNhZCIsInRvZ2dsZVN0cmluZyIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiY29sb3Jfc3RyaW5nIiwibW9udGgiLCJkYXkiLCJmcyIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJ1cGRhdGUiLCJzZWxlY3RlZEljb24iLCJjYXRjaCIsImVyciIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxTQUEzQixFQUFzQ0MsS0FBdEMsRUFBNkM7QUFBQTtBQUFBO0FBQzNDQyxFQUFBQSxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLGtCQUEzQixFQUErQyxLQUEvQztBQUQyQztBQUUzQ0MsRUFBQUEsS0FBSyxDQUFDRixTQUFOLENBQWdCQyxNQUFoQixDQUF1QixhQUF2QixFQUFzQyxLQUF0QztBQUYyQztBQUczQ0UsRUFBQUEsT0FBTyxDQUFDSCxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixlQUF6QixFQUEwQyxLQUExQztBQUgyQztBQUkzQ0csRUFBQUEsR0FBRyxDQUFDSixTQUFKLENBQWNDLE1BQWQsQ0FBcUIsV0FBckIsRUFBa0MsS0FBbEM7QUFKMkM7QUFLM0NJLEVBQUFBLE9BQU8sQ0FBQ0wsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsZ0JBQXpCLEVBQTJDLEtBQTNDO0FBQ0EsTUFBSUssWUFBWSw2QkFBR1YsSUFBSSxHQUFHLFFBQVYsQ0FBaEI7QUFOMkM7QUFPM0NDLEVBQUFBLFNBQVMsQ0FBQ0csU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkJLLFlBQTNCLEVBQXlDLElBQXpDO0FBUDJDO0FBUTNDQyxFQUFBQSxJQUFJLENBQUNDLGtCQUFMLENBQXlCQyxJQUFELElBQVU7QUFBQTtBQUNoQyxRQUFJQyxZQUFZLDZCQUFHLFdBQVdDLEtBQVgsR0FBbUIsR0FBbkIsR0FBeUJDLEdBQTVCLENBQWhCO0FBRGdDO0FBRWhDQyxJQUFBQSxFQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQ0dDLEdBREgsQ0FDT04sSUFBSSxDQUFDTyxHQURaLEVBRUdGLFVBRkgsQ0FFYyxNQUZkLEVBR0dDLEdBSEgsQ0FHTyxNQUhQLEVBSUdFLE1BSkgsQ0FJVTtBQUFFLE9BQUNQLFlBQUQsR0FBZ0IsQ0FBQ1osS0FBRCxDQUFsQjtBQUEyQm9CLE1BQUFBLFlBQVksRUFBRSxDQUFDdEIsSUFBRDtBQUF6QyxLQUpWLEVBS0d1QixLQUxILENBS1VDLEdBQUQsSUFBUztBQUFBO0FBQUE7QUFDZFAsTUFBQUEsRUFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUNHQyxHQURILENBQ09OLElBQUksQ0FBQ08sR0FEWixFQUVHRixVQUZILENBRWMsTUFGZCxFQUdHQyxHQUhILENBR08sTUFIUCxFQUlHTSxHQUpILENBSU87QUFBRSxTQUFDWCxZQUFELEdBQWdCLENBQUNaLEtBQUQsQ0FBbEI7QUFBMkJvQixRQUFBQSxZQUFZLEVBQUUsQ0FBQ3RCLElBQUQ7QUFBekMsT0FKUDtBQUtELEtBWEg7QUFZRCxHQWREO0FBZUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZ1bmN0aW9uIHRvIHVwZGF0ZSBjb2xvciBiYXNlZCBvbiBtb29kXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9vZCAtIG1vb2Qgc3RyaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBtb29kQ2xhc3MgLSBtb29kIGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBtb29kIGNvbG9yXG4gKi9cbmZ1bmN0aW9uIGNvbG9yQ2hhbmdlKG1vb2QsIG1vb2RDbGFzcywgY29sb3IpIHtcbiAgdmVyeUhhcHB5LmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ5LWhhcHB5LWNsaWNrXCIsIGZhbHNlKTtcbiAgaGFwcHkuY2xhc3NMaXN0LnRvZ2dsZShcImhhcHB5LWNsaWNrXCIsIGZhbHNlKTtcbiAgbmV1dHJhbC5jbGFzc0xpc3QudG9nZ2xlKFwibmV1dHJhbC1jbGlja1wiLCBmYWxzZSk7XG4gIHNhZC5jbGFzc0xpc3QudG9nZ2xlKFwic2FkLWNsaWNrXCIsIGZhbHNlKTtcbiAgdmVyeVNhZC5jbGFzc0xpc3QudG9nZ2xlKFwidmVyeS1zYWQtY2xpY2tcIiwgZmFsc2UpO1xuICB2YXIgdG9nZ2xlU3RyaW5nID0gbW9vZCArIFwiLWNsaWNrXCI7XG4gIG1vb2RDbGFzcy5jbGFzc0xpc3QudG9nZ2xlKHRvZ2dsZVN0cmluZywgdHJ1ZSk7XG4gIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgdmFyIGNvbG9yX3N0cmluZyA9IFwiY29sb3ItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xuICAgIGZzLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuICAgICAgLmRvYyh1c2VyLnVpZClcbiAgICAgIC5jb2xsZWN0aW9uKFwiZGF0YVwiKVxuICAgICAgLmRvYyhcIm1vb2RcIilcbiAgICAgIC51cGRhdGUoeyBbY29sb3Jfc3RyaW5nXTogW2NvbG9yXSwgc2VsZWN0ZWRJY29uOiBbbW9vZF0gfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGZzLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuICAgICAgICAgIC5kb2ModXNlci51aWQpXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJkYXRhXCIpXG4gICAgICAgICAgLmRvYyhcIm1vb2RcIilcbiAgICAgICAgICAuc2V0KHsgW2NvbG9yX3N0cmluZ106IFtjb2xvcl0sIHNlbGVjdGVkSWNvbjogW21vb2RdIH0pO1xuICAgICAgfSk7XG4gIH0pO1xufVxuIl19