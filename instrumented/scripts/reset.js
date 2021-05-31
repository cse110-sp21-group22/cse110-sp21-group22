function cov_272b3tfbfx() {
  var path = "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/reset.js";
  var hash = "60e4a6e9cedb336b6e8fd233ea2380defc7b67be";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/reset.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 1,
          column: 55
        }
      },
      "1": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "2": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 21
        }
      },
      "3": {
        start: {
          line: 4,
          column: 23
        },
        end: {
          line: 4,
          column: 47
        }
      },
      "4": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 13,
          column: 7
        }
      },
      "5": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 32
        }
      },
      "6": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 11,
          column: 63
        }
      },
      "7": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 37
          },
          end: {
            line: 2,
            column: 38
          }
        },
        loc: {
          start: {
            line: 2,
            column: 44
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 11
          }
        },
        loc: {
          start: {
            line: 7,
            column: 22
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 10,
            column: 12
          }
        },
        loc: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "60e4a6e9cedb336b6e8fd233ea2380defc7b67be"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_272b3tfbfx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_272b3tfbfx();
const loginForm = (cov_272b3tfbfx().s[0]++, document.getElementById("reset-form"));
cov_272b3tfbfx().s[1]++;
loginForm.addEventListener("submit", e => {
  cov_272b3tfbfx().f[0]++;
  cov_272b3tfbfx().s[2]++;
  e.preventDefault();
  const emailAddress = (cov_272b3tfbfx().s[3]++, loginForm["email"].value);
  cov_272b3tfbfx().s[4]++;
  auth.sendPasswordResetEmail(emailAddress).then(function () {
    cov_272b3tfbfx().f[1]++;
    cov_272b3tfbfx().s[5]++;
    location = "./login.html";
  }).catch(function (err) {
    cov_272b3tfbfx().f[2]++;
    const loginError = (cov_272b3tfbfx().s[6]++, document.getElementById("reset-error"));
    cov_272b3tfbfx().s[7]++;
    loginError.innerText = err.message;
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LmpzIl0sIm5hbWVzIjpbImxvZ2luRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxBZGRyZXNzIiwidmFsdWUiLCJhdXRoIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInRoZW4iLCJsb2NhdGlvbiIsImNhdGNoIiwiZXJyIiwibG9naW5FcnJvciIsImlubmVyVGV4dCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE1BQU1BLFNBQVMsNkJBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFILENBQWY7O0FBQ0FGLFNBQVMsQ0FBQ0csZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBc0NDLENBQUQsSUFBTztBQUFBO0FBQUE7QUFDMUNBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLFlBQVksNkJBQUdOLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FBbUJPLEtBQXRCLENBQWxCO0FBRjBDO0FBRzFDQyxFQUFBQSxJQUFJLENBQ0RDLHNCQURILENBQzBCSCxZQUQxQixFQUVHSSxJQUZILENBRVEsWUFBWTtBQUFBO0FBQUE7QUFDaEJDLElBQUFBLFFBQVEsR0FBRyxjQUFYO0FBQ0QsR0FKSCxFQUtHQyxLQUxILENBS1MsVUFBVUMsR0FBVixFQUFlO0FBQUE7QUFDcEIsVUFBTUMsVUFBVSw2QkFBR2IsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQUgsQ0FBaEI7QUFEb0I7QUFFcEJZLElBQUFBLFVBQVUsQ0FBQ0MsU0FBWCxHQUF1QkYsR0FBRyxDQUFDRyxPQUEzQjtBQUNELEdBUkg7QUFTRCxDQVpEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1mb3JtXCIpO1xubG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBlbWFpbEFkZHJlc3MgPSBsb2dpbkZvcm1bXCJlbWFpbFwiXS52YWx1ZTtcbiAgYXV0aFxuICAgIC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsQWRkcmVzcylcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBsb2NhdGlvbiA9IFwiLi9sb2dpbi5odG1sXCI7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc3QgbG9naW5FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXQtZXJyb3JcIik7XG4gICAgICBsb2dpbkVycm9yLmlubmVyVGV4dCA9IGVyci5tZXNzYWdlO1xuICAgIH0pO1xufSk7XG4iXX0=