function cov_2nda24wdjk() {
  var path = "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/sw.js";
  var hash = "1fb3c0109886bc9dba7220d3b057aae9737e2338";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/rwake/Documents/school/cs110/cse110-sp21-group22/source/scripts/sw.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 1,
          column: 29
        }
      },
      "1": {
        start: {
          line: 2,
          column: 21
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "2": {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 47,
          column: 3
        }
      },
      "3": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 46,
          column: 4
        }
      },
      "4": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 44,
          column: 42
        }
      },
      "5": {
        start: {
          line: 50,
          column: 0
        },
        end: {
          line: 56,
          column: 3
        }
      },
      "6": {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 55,
          column: 4
        }
      },
      "7": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 53,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 41,
            column: 33
          },
          end: {
            line: 41,
            column: 34
          }
        },
        loc: {
          start: {
            line: 41,
            column: 50
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 41
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 33
          },
          end: {
            line: 43,
            column: 34
          }
        },
        loc: {
          start: {
            line: 43,
            column: 50
          },
          end: {
            line: 45,
            column: 5
          }
        },
        line: 43
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 50,
            column: 31
          },
          end: {
            line: 50,
            column: 32
          }
        },
        loc: {
          start: {
            line: 50,
            column: 48
          },
          end: {
            line: 56,
            column: 1
          }
        },
        line: 50
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 52,
            column: 37
          },
          end: {
            line: 52,
            column: 38
          }
        },
        loc: {
          start: {
            line: 52,
            column: 57
          },
          end: {
            line: 54,
            column: 5
          }
        },
        line: 52
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 53,
            column: 13
          },
          end: {
            line: 53,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 53,
            column: 13
          },
          end: {
            line: 53,
            column: 21
          }
        }, {
          start: {
            line: 53,
            column: 25
          },
          end: {
            line: 53,
            column: 45
          }
        }],
        line: 53
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1fb3c0109886bc9dba7220d3b057aae9737e2338"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2nda24wdjk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2nda24wdjk();
var CACHE_NAME = (cov_2nda24wdjk().s[0]++, "bujo-cache");
var urlsToPrefetch = (cov_2nda24wdjk().s[1]++, ["../scripts/app.js", "../scripts/calendar.js", "../scripts/color.js", "../scripts/index.js", "../scripts/moodFunctionality.js", "../scripts/settings.js", "../scripts/router.js", "../404.html", "../pages/calendar.html", "../index.html", "../pages/main.html", "../pages/moodtracker.html", "../pages/settings.html", "../style/main.css", "../style/moodStyle.css", "../assets/green.svg", "../assets/happy.svg", "../assets/orange.svg", "../assets/running.svg", "../assets/sad.svg", "../assets/yellow.svg", "../assets/wave.svg", "../assets/wave.png", "../assets/topography.svg", "../assets/topo.png", "../assets/graph-paper.svg", "../assets/graph.png", "../assets/brand/catch22.svg", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css", "https://use.fontawesome.com/releases/v5.7.2/css/all.css", "https://cdn.jsdelivr.net/npm/navigo@8.11.1/lib/navigo.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js", "https://code.jquery.com/jquery-3.6.0.min.js", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js", "https://cdn.jsdelivr.net/gh/DavidDurman/FlexiColorPicker@master/colorpicker.min.js"]); // Cache elements

cov_2nda24wdjk().s[2]++;
self.addEventListener("install", function (event) {
  cov_2nda24wdjk().f[0]++;
  cov_2nda24wdjk().s[3]++;
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    cov_2nda24wdjk().f[1]++;
    cov_2nda24wdjk().s[4]++;
    return cache.addAll(urlsToPrefetch);
  }));
}); // fallback to network on fetch

cov_2nda24wdjk().s[5]++;
self.addEventListener("fetch", function (event) {
  cov_2nda24wdjk().f[2]++;
  cov_2nda24wdjk().s[6]++;
  event.respondWith(caches.match(event.request).then(function (response) {
    cov_2nda24wdjk().f[3]++;
    cov_2nda24wdjk().s[7]++;
    return (cov_2nda24wdjk().b[0][0]++, response) || (cov_2nda24wdjk().b[0][1]++, fetch(event.request));
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3LmpzIl0sIm5hbWVzIjpbIkNBQ0hFX05BTUUiLCJ1cmxzVG9QcmVmZXRjaCIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ3YWl0VW50aWwiLCJjYWNoZXMiLCJvcGVuIiwidGhlbiIsImNhY2hlIiwiYWRkQWxsIiwicmVzcG9uZFdpdGgiLCJtYXRjaCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosSUFBSUEsVUFBVSw2QkFBRyxZQUFILENBQWQ7QUFDQSxJQUFJQyxjQUFjLDZCQUFHLENBQ25CLG1CQURtQixFQUVuQix3QkFGbUIsRUFHbkIscUJBSG1CLEVBSW5CLHFCQUptQixFQUtuQixpQ0FMbUIsRUFNbkIsd0JBTm1CLEVBT25CLHNCQVBtQixFQVFuQixhQVJtQixFQVNuQix3QkFUbUIsRUFVbkIsZUFWbUIsRUFXbkIsb0JBWG1CLEVBWW5CLDJCQVptQixFQWFuQix3QkFibUIsRUFjbkIsbUJBZG1CLEVBZW5CLHdCQWZtQixFQWdCbkIscUJBaEJtQixFQWlCbkIscUJBakJtQixFQWtCbkIsc0JBbEJtQixFQW1CbkIsdUJBbkJtQixFQW9CbkIsbUJBcEJtQixFQXFCbkIsc0JBckJtQixFQXNCbkIsb0JBdEJtQixFQXVCbkIsb0JBdkJtQixFQXdCbkIsMEJBeEJtQixFQXlCbkIsb0JBekJtQixFQTBCbkIsMkJBMUJtQixFQTJCbkIscUJBM0JtQixFQTRCbkIsNkJBNUJtQixFQTZCbkIseUVBN0JtQixFQThCbkIseURBOUJtQixFQStCbkIsOERBL0JtQixFQWdDbkIsOEVBaENtQixFQWlDbkIsNkNBakNtQixFQWtDbkIsa0dBbENtQixFQW1DbkIsb0ZBbkNtQixDQUFILENBQWxCLEMsQ0FzQ0E7OztBQUNBQyxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLFVBQVVDLEtBQVYsRUFBaUI7QUFBQTtBQUFBO0FBQ2hEQSxFQUFBQSxLQUFLLENBQUNDLFNBQU4sQ0FDRUMsTUFBTSxDQUFDQyxJQUFQLENBQVlQLFVBQVosRUFBd0JRLElBQXhCLENBQTZCLFVBQVVDLEtBQVYsRUFBaUI7QUFBQTtBQUFBO0FBQzVDLFdBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhVCxjQUFiLENBQVA7QUFDRCxHQUZELENBREY7QUFLRCxDQU5ELEUsQ0FRQTs7O0FBQ0FDLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBVUMsS0FBVixFQUFpQjtBQUFBO0FBQUE7QUFDOUNBLEVBQUFBLEtBQUssQ0FBQ08sV0FBTixDQUNFTCxNQUFNLENBQUNNLEtBQVAsQ0FBYVIsS0FBSyxDQUFDUyxPQUFuQixFQUE0QkwsSUFBNUIsQ0FBaUMsVUFBVU0sUUFBVixFQUFvQjtBQUFBO0FBQUE7QUFDbkQsV0FBTyw2QkFBQUEsUUFBUSxrQ0FBSUMsS0FBSyxDQUFDWCxLQUFLLENBQUNTLE9BQVAsQ0FBVCxDQUFmO0FBQ0QsR0FGRCxDQURGO0FBS0QsQ0FORCIsInNvdXJjZXNDb250ZW50IjpbInZhciBDQUNIRV9OQU1FID0gXCJidWpvLWNhY2hlXCI7XG52YXIgdXJsc1RvUHJlZmV0Y2ggPSBbXG4gIFwiLi4vc2NyaXB0cy9hcHAuanNcIixcbiAgXCIuLi9zY3JpcHRzL2NhbGVuZGFyLmpzXCIsXG4gIFwiLi4vc2NyaXB0cy9jb2xvci5qc1wiLFxuICBcIi4uL3NjcmlwdHMvaW5kZXguanNcIixcbiAgXCIuLi9zY3JpcHRzL21vb2RGdW5jdGlvbmFsaXR5LmpzXCIsXG4gIFwiLi4vc2NyaXB0cy9zZXR0aW5ncy5qc1wiLFxuICBcIi4uL3NjcmlwdHMvcm91dGVyLmpzXCIsXG4gIFwiLi4vNDA0Lmh0bWxcIixcbiAgXCIuLi9wYWdlcy9jYWxlbmRhci5odG1sXCIsXG4gIFwiLi4vaW5kZXguaHRtbFwiLFxuICBcIi4uL3BhZ2VzL21haW4uaHRtbFwiLFxuICBcIi4uL3BhZ2VzL21vb2R0cmFja2VyLmh0bWxcIixcbiAgXCIuLi9wYWdlcy9zZXR0aW5ncy5odG1sXCIsXG4gIFwiLi4vc3R5bGUvbWFpbi5jc3NcIixcbiAgXCIuLi9zdHlsZS9tb29kU3R5bGUuY3NzXCIsXG4gIFwiLi4vYXNzZXRzL2dyZWVuLnN2Z1wiLFxuICBcIi4uL2Fzc2V0cy9oYXBweS5zdmdcIixcbiAgXCIuLi9hc3NldHMvb3JhbmdlLnN2Z1wiLFxuICBcIi4uL2Fzc2V0cy9ydW5uaW5nLnN2Z1wiLFxuICBcIi4uL2Fzc2V0cy9zYWQuc3ZnXCIsXG4gIFwiLi4vYXNzZXRzL3llbGxvdy5zdmdcIixcbiAgXCIuLi9hc3NldHMvd2F2ZS5zdmdcIixcbiAgXCIuLi9hc3NldHMvd2F2ZS5wbmdcIixcbiAgXCIuLi9hc3NldHMvdG9wb2dyYXBoeS5zdmdcIixcbiAgXCIuLi9hc3NldHMvdG9wby5wbmdcIixcbiAgXCIuLi9hc3NldHMvZ3JhcGgtcGFwZXIuc3ZnXCIsXG4gIFwiLi4vYXNzZXRzL2dyYXBoLnBuZ1wiLFxuICBcIi4uL2Fzc2V0cy9icmFuZC9jYXRjaDIyLnN2Z1wiLFxuICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIsXG4gIFwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjcuMi9jc3MvYWxsLmNzc1wiLFxuICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbmF2aWdvQDguMTEuMS9saWIvbmF2aWdvLm1pbi5qc1wiLFxuICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIixcbiAgXCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy42LjAubWluLmpzXCIsXG4gIFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYm9vdHN0cmFwLWRhdGVwaWNrZXIvMS45LjAvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXIubWluLmpzXCIsXG4gIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0RhdmlkRHVybWFuL0ZsZXhpQ29sb3JQaWNrZXJAbWFzdGVyL2NvbG9ycGlja2VyLm1pbi5qc1wiLFxuXTtcblxuLy8gQ2FjaGUgZWxlbWVudHNcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImluc3RhbGxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjYWNoZXMub3BlbihDQUNIRV9OQU1FKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmFkZEFsbCh1cmxzVG9QcmVmZXRjaCk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG4vLyBmYWxsYmFjayB0byBuZXR3b3JrIG9uIGZldGNoXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UgfHwgZmV0Y2goZXZlbnQucmVxdWVzdCk7XG4gICAgfSlcbiAgKTtcbn0pO1xuIl19