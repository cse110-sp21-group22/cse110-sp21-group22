function cov_1i7sov98la() {
  var path = "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/color.js";
  var hash = "d20fe0aad66df3b6db8d805ee3fa5f4cd95cb409";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/color.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 56
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 47
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 51
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 43
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 52
        }
      },
      "5": {
        start: {
          line: 13,
          column: 21
        },
        end: {
          line: 13,
          column: 36
        }
      },
      "6": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 49
        }
      },
      "7": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "8": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 30,
          column: 7
        }
      },
      "9": {
        start: {
          line: 17,
          column: 25
        },
        end: {
          line: 17,
          column: 53
        }
      },
      "10": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 29,
          column: 11
        }
      },
      "11": {
        start: {
          line: 24,
          column: 10
        },
        end: {
          line: 28,
          column: 68
        }
      }
    },
    fnMap: {
      "0": {
        name: "colorChange",
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 45
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 26
          },
          end: {
            line: 15,
            column: 27
          }
        },
        loc: {
          start: {
            line: 15,
            column: 36
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 15
          },
          end: {
            line: 23,
            column: 16
          }
        },
        loc: {
          start: {
            line: 23,
            column: 24
          },
          end: {
            line: 29,
            column: 9
          }
        },
        line: 23
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 30,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 30,
            column: 7
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 30,
            column: 7
          }
        }],
        line: 16
      }
    },
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
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d20fe0aad66df3b6db8d805ee3fa5f4cd95cb409"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1i7sov98la = function () {
      return actualCoverage;
    };
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
    cov_1i7sov98la().s[8]++;

    if (user) {
      cov_1i7sov98la().b[0][0]++;
      var color_string = (cov_1i7sov98la().s[9]++, "color-" + month + "-" + day);
      cov_1i7sov98la().s[10]++;
      fs.collection("users").doc(user.uid).collection("data").doc("mood").update({
        [color_string]: [color],
        selectedIcon: [mood]
      }).catch(err => {
        cov_1i7sov98la().f[2]++;
        cov_1i7sov98la().s[11]++;
        fs.collection("users").doc(user.uid).collection("data").doc("mood").set({
          [color_string]: [color],
          selectedIcon: [mood]
        });
      });
    } else {
      cov_1i7sov98la().b[0][1]++;
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLmpzIl0sIm5hbWVzIjpbImNvbG9yQ2hhbmdlIiwibW9vZCIsIm1vb2RDbGFzcyIsImNvbG9yIiwidmVyeUhhcHB5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaGFwcHkiLCJuZXV0cmFsIiwic2FkIiwidmVyeVNhZCIsInRvZ2dsZVN0cmluZyIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiY29sb3Jfc3RyaW5nIiwibW9udGgiLCJkYXkiLCJmcyIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJ1cGRhdGUiLCJzZWxlY3RlZEljb24iLCJjYXRjaCIsImVyciIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0EsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkJDLFNBQTNCLEVBQXNDQyxLQUF0QyxFQUE2QztBQUFBO0FBQUE7QUFDM0NDLEVBQUFBLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsa0JBQTNCLEVBQStDLEtBQS9DO0FBRDJDO0FBRTNDQyxFQUFBQSxLQUFLLENBQUNGLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLGFBQXZCLEVBQXNDLEtBQXRDO0FBRjJDO0FBRzNDRSxFQUFBQSxPQUFPLENBQUNILFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGVBQXpCLEVBQTBDLEtBQTFDO0FBSDJDO0FBSTNDRyxFQUFBQSxHQUFHLENBQUNKLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixXQUFyQixFQUFrQyxLQUFsQztBQUoyQztBQUszQ0ksRUFBQUEsT0FBTyxDQUFDTCxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixnQkFBekIsRUFBMkMsS0FBM0M7QUFDQSxNQUFJSyxZQUFZLDZCQUFHVixJQUFJLEdBQUcsUUFBVixDQUFoQjtBQU4yQztBQU8zQ0MsRUFBQUEsU0FBUyxDQUFDRyxTQUFWLENBQW9CQyxNQUFwQixDQUEyQkssWUFBM0IsRUFBeUMsSUFBekM7QUFQMkM7QUFRM0NDLEVBQUFBLElBQUksQ0FBQ0Msa0JBQUwsQ0FBeUJDLElBQUQsSUFBVTtBQUFBO0FBQUE7O0FBQ2hDLFFBQUlBLElBQUosRUFBVTtBQUFBO0FBQ1IsVUFBSUMsWUFBWSw2QkFBRyxXQUFXQyxLQUFYLEdBQW1CLEdBQW5CLEdBQXlCQyxHQUE1QixDQUFoQjtBQURRO0FBRVJDLE1BQUFBLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFDR0MsR0FESCxDQUNPTixJQUFJLENBQUNPLEdBRFosRUFFR0YsVUFGSCxDQUVjLE1BRmQsRUFHR0MsR0FISCxDQUdPLE1BSFAsRUFJR0UsTUFKSCxDQUlVO0FBQUUsU0FBQ1AsWUFBRCxHQUFnQixDQUFDWixLQUFELENBQWxCO0FBQTJCb0IsUUFBQUEsWUFBWSxFQUFFLENBQUN0QixJQUFEO0FBQXpDLE9BSlYsRUFLR3VCLEtBTEgsQ0FLVUMsR0FBRCxJQUFTO0FBQUE7QUFBQTtBQUNkUCxRQUFBQSxFQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQ0dDLEdBREgsQ0FDT04sSUFBSSxDQUFDTyxHQURaLEVBRUdGLFVBRkgsQ0FFYyxNQUZkLEVBR0dDLEdBSEgsQ0FHTyxNQUhQLEVBSUdNLEdBSkgsQ0FJTztBQUFFLFdBQUNYLFlBQUQsR0FBZ0IsQ0FBQ1osS0FBRCxDQUFsQjtBQUEyQm9CLFVBQUFBLFlBQVksRUFBRSxDQUFDdEIsSUFBRDtBQUF6QyxTQUpQO0FBS0QsT0FYSDtBQVlDLEtBZEg7QUFBQTtBQUFBO0FBZUQsR0FoQkQ7QUFpQkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZ1bmN0aW9uIHRvIHVwZGF0ZSBjb2xvciBiYXNlZCBvbiBtb29kXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9vZCAtIG1vb2Qgc3RyaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBtb29kQ2xhc3MgLSBtb29kIGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBtb29kIGNvbG9yXG4gKi9cbmZ1bmN0aW9uIGNvbG9yQ2hhbmdlKG1vb2QsIG1vb2RDbGFzcywgY29sb3IpIHtcbiAgdmVyeUhhcHB5LmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ5LWhhcHB5LWNsaWNrXCIsIGZhbHNlKTtcbiAgaGFwcHkuY2xhc3NMaXN0LnRvZ2dsZShcImhhcHB5LWNsaWNrXCIsIGZhbHNlKTtcbiAgbmV1dHJhbC5jbGFzc0xpc3QudG9nZ2xlKFwibmV1dHJhbC1jbGlja1wiLCBmYWxzZSk7XG4gIHNhZC5jbGFzc0xpc3QudG9nZ2xlKFwic2FkLWNsaWNrXCIsIGZhbHNlKTtcbiAgdmVyeVNhZC5jbGFzc0xpc3QudG9nZ2xlKFwidmVyeS1zYWQtY2xpY2tcIiwgZmFsc2UpO1xuICB2YXIgdG9nZ2xlU3RyaW5nID0gbW9vZCArIFwiLWNsaWNrXCI7XG4gIG1vb2RDbGFzcy5jbGFzc0xpc3QudG9nZ2xlKHRvZ2dsZVN0cmluZywgdHJ1ZSk7XG4gIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHZhciBjb2xvcl9zdHJpbmcgPSBcImNvbG9yLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcbiAgICAgIGZzLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuICAgICAgICAuZG9jKHVzZXIudWlkKVxuICAgICAgICAuY29sbGVjdGlvbihcImRhdGFcIilcbiAgICAgICAgLmRvYyhcIm1vb2RcIilcbiAgICAgICAgLnVwZGF0ZSh7IFtjb2xvcl9zdHJpbmddOiBbY29sb3JdLCBzZWxlY3RlZEljb246IFttb29kXSB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGZzLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuICAgICAgICAgICAgLmRvYyh1c2VyLnVpZClcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiZGF0YVwiKVxuICAgICAgICAgICAgLmRvYyhcIm1vb2RcIilcbiAgICAgICAgICAgIC5zZXQoeyBbY29sb3Jfc3RyaW5nXTogW2NvbG9yXSwgc2VsZWN0ZWRJY29uOiBbbW9vZF0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICB9KTtcbn1cbiJdfQ==