function cov_272b3tfbfx() {
  var path = "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/reset.js";
  var hash = "db2fcf25be548c6c096441e5e3099308c092d3fc";
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
          line: 19,
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
          line: 18,
          column: 7
        }
      },
      "5": {
        start: {
          line: 8,
          column: 25
        },
        end: {
          line: 8,
          column: 63
        }
      },
      "6": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 10,
          column: 60
        }
      },
      "7": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 13,
          column: 15
        }
      },
      "8": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 34
        }
      },
      "9": {
        start: {
          line: 16,
          column: 25
        },
        end: {
          line: 16,
          column: 63
        }
      },
      "10": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
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
            line: 19,
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
            line: 14,
            column: 5
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 17
          },
          end: {
            line: 11,
            column: 18
          }
        },
        loc: {
          start: {
            line: 11,
            column: 29
          },
          end: {
            line: 13,
            column: 7
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 11
          },
          end: {
            line: 15,
            column: 12
          }
        },
        loc: {
          start: {
            line: 15,
            column: 26
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 15
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "db2fcf25be548c6c096441e5e3099308c092d3fc"
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
    const loginError = (cov_272b3tfbfx().s[5]++, document.getElementById("reset-error"));
    cov_272b3tfbfx().s[6]++;
    loginError.innerText = "A password reset link has been sent to your email";
    cov_272b3tfbfx().s[7]++;
    setTimeout(function () {
      cov_272b3tfbfx().f[2]++;
      cov_272b3tfbfx().s[8]++;
      location = "./login.html";
    }, 3000);
  }).catch(function (err) {
    cov_272b3tfbfx().f[3]++;
    const loginError = (cov_272b3tfbfx().s[9]++, document.getElementById("reset-error"));
    cov_272b3tfbfx().s[10]++;
    loginError.innerText = err.message;
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LmpzIl0sIm5hbWVzIjpbImxvZ2luRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxBZGRyZXNzIiwidmFsdWUiLCJhdXRoIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInRoZW4iLCJsb2dpbkVycm9yIiwiaW5uZXJUZXh0Iiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosTUFBTUEsU0FBUyw2QkFBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQUgsQ0FBZjs7QUFDQUYsU0FBUyxDQUFDRyxnQkFBVixDQUEyQixRQUEzQixFQUFzQ0MsQ0FBRCxJQUFPO0FBQUE7QUFBQTtBQUMxQ0EsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsWUFBWSw2QkFBR04sU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQk8sS0FBdEIsQ0FBbEI7QUFGMEM7QUFHMUNDLEVBQUFBLElBQUksQ0FDREMsc0JBREgsQ0FDMEJILFlBRDFCLEVBRUdJLElBRkgsQ0FFUSxZQUFZO0FBQUE7QUFDaEIsVUFBTUMsVUFBVSw2QkFBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQUgsQ0FBaEI7QUFEZ0I7QUFFaEJTLElBQUFBLFVBQVUsQ0FBQ0MsU0FBWCxHQUNFLG1EQURGO0FBRmdCO0FBSWhCQyxJQUFBQSxVQUFVLENBQUMsWUFBWTtBQUFBO0FBQUE7QUFDckJDLE1BQUFBLFFBQVEsR0FBRyxjQUFYO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBVEgsRUFVR0MsS0FWSCxDQVVTLFVBQVVDLEdBQVYsRUFBZTtBQUFBO0FBQ3BCLFVBQU1MLFVBQVUsNkJBQUdWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFILENBQWhCO0FBRG9CO0FBRXBCUyxJQUFBQSxVQUFVLENBQUNDLFNBQVgsR0FBdUJJLEdBQUcsQ0FBQ0MsT0FBM0I7QUFDRCxHQWJIO0FBY0QsQ0FqQkQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWZvcm1cIik7XG5sb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGxvZ2luRm9ybVtcImVtYWlsXCJdLnZhbHVlO1xuICBhdXRoXG4gICAgLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWxBZGRyZXNzKVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGxvZ2luRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWVycm9yXCIpO1xuICAgICAgbG9naW5FcnJvci5pbm5lclRleHQgPVxuICAgICAgICBcIkEgcGFzc3dvcmQgcmVzZXQgbGluayBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWxcIjtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhdGlvbiA9IFwiLi9sb2dpbi5odG1sXCI7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zdCBsb2dpbkVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1lcnJvclwiKTtcbiAgICAgIGxvZ2luRXJyb3IuaW5uZXJUZXh0ID0gZXJyLm1lc3NhZ2U7XG4gICAgfSk7XG59KTtcbiJdfQ==