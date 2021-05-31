function cov_1o1ohvin3h() {
  var path =
    "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/app.js";
  var hash = "9882f7df81e54a5e553bb19b1a83727c43ebcdb7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path:
      "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/app.js",
    statementMap: {
      0: { start: { line: 2, column: 0 }, end: { line: 6, column: 3 } },
      1: { start: { line: 3, column: 2 }, end: { line: 5, column: 3 } },
      2: { start: { line: 4, column: 4 }, end: { line: 4, column: 28 } },
      3: { start: { line: 12, column: 2 }, end: { line: 12, column: 61 } },
      4: { start: { line: 13, column: 2 }, end: { line: 13, column: 61 } },
      5: { start: { line: 20, column: 2 }, end: { line: 20, column: 64 } },
      6: { start: { line: 21, column: 2 }, end: { line: 21, column: 58 } },
      7: { start: { line: 28, column: 2 }, end: { line: 28, column: 63 } },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: { start: { line: 2, column: 24 }, end: { line: 2, column: 25 } },
        loc: { start: { line: 2, column: 34 }, end: { line: 6, column: 1 } },
        line: 2,
      },
      1: {
        name: "PageLoaded",
        decl: { start: { line: 11, column: 9 }, end: { line: 11, column: 19 } },
        loc: { start: { line: 11, column: 22 }, end: { line: 14, column: 1 } },
        line: 11,
      },
      2: {
        name: "PageUnloaded",
        decl: { start: { line: 19, column: 9 }, end: { line: 19, column: 21 } },
        loc: { start: { line: 19, column: 24 }, end: { line: 22, column: 1 } },
        line: 19,
      },
      3: {
        name: "NavbarLoaded",
        decl: { start: { line: 27, column: 9 }, end: { line: 27, column: 21 } },
        loc: { start: { line: 27, column: 24 }, end: { line: 29, column: 1 } },
        line: 27,
      },
    },
    branchMap: {
      0: {
        loc: { start: { line: 3, column: 2 }, end: { line: 5, column: 3 } },
        type: "if",
        locations: [
          { start: { line: 3, column: 2 }, end: { line: 5, column: 3 } },
          { start: { line: 3, column: 2 }, end: { line: 5, column: 3 } },
        ],
        line: 3,
      },
    },
    s: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    },
    f: { 0: 0, 1: 0, 2: 0, 3: 0 },
    b: { 0: [0, 0] },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9882f7df81e54a5e553bb19b1a83727c43ebcdb7",
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1o1ohvin3h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1o1ohvin3h();
cov_1o1ohvin3h().s[0]++;
// checking if user is signed in or not
auth.onAuthStateChanged((user) => {
  cov_1o1ohvin3h().f[0]++;
  cov_1o1ohvin3h().s[1]++;

  if (!user) {
    cov_1o1ohvin3h().b[0][0]++;
    cov_1o1ohvin3h().s[2]++;
    location = "login.html";
  } else {
    cov_1o1ohvin3h().b[0][1]++;
  }
});
/**
 * Function to hide spinner and show page on load
 */

function PageLoaded() {
  cov_1o1ohvin3h().f[1]++;
  cov_1o1ohvin3h().s[3]++;
  document.getElementById("spinner").classList.add("d-none");
  cov_1o1ohvin3h().s[4]++;
  document.getElementById("main").classList.remove("d-none");
}
/**
 * Function to show spinner and hide page
 */

function PageUnloaded() {
  cov_1o1ohvin3h().f[2]++;
  cov_1o1ohvin3h().s[5]++;
  document.getElementById("spinner").classList.remove("d-none");
  cov_1o1ohvin3h().s[6]++;
  document.getElementById("main").classList.add("d-none");
}
/**
 * Function to show navbar when loaded
 */

function NavbarLoaded() {
  cov_1o1ohvin3h().f[3]++;
  cov_1o1ohvin3h().s[7]++;
  document.getElementById("navbar").classList.remove("d-none");
}
//#
//sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImxvY2F0aW9uIiwiUGFnZUxvYWRlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJQYWdlVW5sb2FkZWQiLCJOYXZiYXJMb2FkZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7QUFDQUEsSUFBSSxDQUFDQyxrQkFBTCxDQUF5QkMsSUFBRCxJQUFVO0FBQUE7QUFBQTs7QUFDaEMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFBQTtBQUFBO0FBQ1RDLElBQUFBLFFBQVEsR0FBRyxZQUFYO0FBQ0QsR0FGRDtBQUFBO0FBQUE7QUFHRCxDQUpEO0FBTUE7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTtBQUFBO0FBQ3BCQyxFQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLFNBQW5DLENBQTZDQyxHQUE3QyxDQUFpRCxRQUFqRDtBQURvQjtBQUVwQkgsRUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxTQUFoQyxDQUEwQ0UsTUFBMUMsQ0FBaUQsUUFBakQ7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0MsWUFBVCxHQUF3QjtBQUFBO0FBQUE7QUFDdEJMLEVBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsU0FBbkMsQ0FBNkNFLE1BQTdDLENBQW9ELFFBQXBEO0FBRHNCO0FBRXRCSixFQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFNBQWhDLENBQTBDQyxHQUExQyxDQUE4QyxRQUE5QztBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTRyxZQUFULEdBQXdCO0FBQUE7QUFBQTtBQUN0Qk4sRUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxTQUFsQyxDQUE0Q0UsTUFBNUMsQ0FBbUQsUUFBbkQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNoZWNraW5nIGlmIHVzZXIgaXMgc2lnbmVkIGluIG9yIG5vdFxuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgaWYgKCF1c2VyKSB7XG4gICAgbG9jYXRpb24gPSBcImxvZ2luLmh0bWxcIjtcbiAgfVxufSk7XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gaGlkZSBzcGlubmVyIGFuZCBzaG93IHBhZ2Ugb24gbG9hZFxuICovXG5mdW5jdGlvbiBQYWdlTG9hZGVkKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwaW5uZXJcIikuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gc2hvdyBzcGlubmVyIGFuZCBoaWRlIHBhZ2VcbiAqL1xuZnVuY3Rpb24gUGFnZVVubG9hZGVkKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwaW5uZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gc2hvdyBuYXZiYXIgd2hlbiBsb2FkZWRcbiAqL1xuZnVuY3Rpb24gTmF2YmFyTG9hZGVkKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xufVxuIl19
