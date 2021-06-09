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
var urlsToPrefetch = (cov_2nda24wdjk().s[1]++, ["../../instrumented/scripts/app.js", "../../instrumented/scripts/calendar.js", "../../instrumented/scripts/color.js", "../../instrumented/scripts/index.js", "../../instrumented/scripts/moodFunctionality.js", "../../instrumented/scripts/settings.js", "../../instrumented/scripts/router.js", "../404.html", "../pages/calendar.html", "../index.html", "../pages/main.html", "../pages/moodtracker.html", "../pages/settings.html", "../style/main.css", "../style/moodStyle.css", "../assets/green.svg", "../assets/happy.svg", "../assets/orange.svg", "../assets/running.svg", "../assets/sad.svg", "../assets/yellow.svg", "../assets/wave.svg", "../assets/wave.png", "../assets/topography.svg", "../assets/topo.png", "../assets/graph-paper.svg", "../assets/graph.png", "../assets/brand/catch22.svg", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css", "https://use.fontawesome.com/releases/v5.7.2/css/all.css", "https://cdn.jsdelivr.net/npm/navigo@8.11.1/lib/navigo.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js", "https://code.jquery.com/jquery-3.6.0.min.js", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js", "https://cdn.jsdelivr.net/gh/DavidDurman/FlexiColorPicker@master/colorpicker.min.js"]); // Cache elements

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3LmpzIl0sIm5hbWVzIjpbIkNBQ0hFX05BTUUiLCJ1cmxzVG9QcmVmZXRjaCIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ3YWl0VW50aWwiLCJjYWNoZXMiLCJvcGVuIiwidGhlbiIsImNhY2hlIiwiYWRkQWxsIiwicmVzcG9uZFdpdGgiLCJtYXRjaCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosSUFBSUEsVUFBVSw2QkFBRyxZQUFILENBQWQ7QUFDQSxJQUFJQyxjQUFjLDZCQUFHLENBQ25CLG1DQURtQixFQUVuQix3Q0FGbUIsRUFHbkIscUNBSG1CLEVBSW5CLHFDQUptQixFQUtuQixpREFMbUIsRUFNbkIsd0NBTm1CLEVBT25CLHNDQVBtQixFQVFuQixhQVJtQixFQVNuQix3QkFUbUIsRUFVbkIsZUFWbUIsRUFXbkIsb0JBWG1CLEVBWW5CLDJCQVptQixFQWFuQix3QkFibUIsRUFjbkIsbUJBZG1CLEVBZW5CLHdCQWZtQixFQWdCbkIscUJBaEJtQixFQWlCbkIscUJBakJtQixFQWtCbkIsc0JBbEJtQixFQW1CbkIsdUJBbkJtQixFQW9CbkIsbUJBcEJtQixFQXFCbkIsc0JBckJtQixFQXNCbkIsb0JBdEJtQixFQXVCbkIsb0JBdkJtQixFQXdCbkIsMEJBeEJtQixFQXlCbkIsb0JBekJtQixFQTBCbkIsMkJBMUJtQixFQTJCbkIscUJBM0JtQixFQTRCbkIsNkJBNUJtQixFQTZCbkIseUVBN0JtQixFQThCbkIseURBOUJtQixFQStCbkIsOERBL0JtQixFQWdDbkIsOEVBaENtQixFQWlDbkIsNkNBakNtQixFQWtDbkIsa0dBbENtQixFQW1DbkIsb0ZBbkNtQixDQUFILENBQWxCLEMsQ0FzQ0E7OztBQUNBQyxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLFVBQVVDLEtBQVYsRUFBaUI7QUFBQTtBQUFBO0FBQ2hEQSxFQUFBQSxLQUFLLENBQUNDLFNBQU4sQ0FDRUMsTUFBTSxDQUFDQyxJQUFQLENBQVlQLFVBQVosRUFBd0JRLElBQXhCLENBQTZCLFVBQVVDLEtBQVYsRUFBaUI7QUFBQTtBQUFBO0FBQzVDLFdBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhVCxjQUFiLENBQVA7QUFDRCxHQUZELENBREY7QUFLRCxDQU5ELEUsQ0FRQTs7O0FBQ0FDLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBVUMsS0FBVixFQUFpQjtBQUFBO0FBQUE7QUFDOUNBLEVBQUFBLEtBQUssQ0FBQ08sV0FBTixDQUNFTCxNQUFNLENBQUNNLEtBQVAsQ0FBYVIsS0FBSyxDQUFDUyxPQUFuQixFQUE0QkwsSUFBNUIsQ0FBaUMsVUFBVU0sUUFBVixFQUFvQjtBQUFBO0FBQUE7QUFDbkQsV0FBTyw2QkFBQUEsUUFBUSxrQ0FBSUMsS0FBSyxDQUFDWCxLQUFLLENBQUNTLE9BQVAsQ0FBVCxDQUFmO0FBQ0QsR0FGRCxDQURGO0FBS0QsQ0FORCIsInNvdXJjZXNDb250ZW50IjpbInZhciBDQUNIRV9OQU1FID0gXCJidWpvLWNhY2hlXCI7XG52YXIgdXJsc1RvUHJlZmV0Y2ggPSBbXG4gIFwiLi4vLi4vaW5zdHJ1bWVudGVkL3NjcmlwdHMvYXBwLmpzXCIsXG4gIFwiLi4vLi4vaW5zdHJ1bWVudGVkL3NjcmlwdHMvY2FsZW5kYXIuanNcIixcbiAgXCIuLi8uLi9pbnN0cnVtZW50ZWQvc2NyaXB0cy9jb2xvci5qc1wiLFxuICBcIi4uLy4uL2luc3RydW1lbnRlZC9zY3JpcHRzL2luZGV4LmpzXCIsXG4gIFwiLi4vLi4vaW5zdHJ1bWVudGVkL3NjcmlwdHMvbW9vZEZ1bmN0aW9uYWxpdHkuanNcIixcbiAgXCIuLi8uLi9pbnN0cnVtZW50ZWQvc2NyaXB0cy9zZXR0aW5ncy5qc1wiLFxuICBcIi4uLy4uL2luc3RydW1lbnRlZC9zY3JpcHRzL3JvdXRlci5qc1wiLFxuICBcIi4uLzQwNC5odG1sXCIsXG4gIFwiLi4vcGFnZXMvY2FsZW5kYXIuaHRtbFwiLFxuICBcIi4uL2luZGV4Lmh0bWxcIixcbiAgXCIuLi9wYWdlcy9tYWluLmh0bWxcIixcbiAgXCIuLi9wYWdlcy9tb29kdHJhY2tlci5odG1sXCIsXG4gIFwiLi4vcGFnZXMvc2V0dGluZ3MuaHRtbFwiLFxuICBcIi4uL3N0eWxlL21haW4uY3NzXCIsXG4gIFwiLi4vc3R5bGUvbW9vZFN0eWxlLmNzc1wiLFxuICBcIi4uL2Fzc2V0cy9ncmVlbi5zdmdcIixcbiAgXCIuLi9hc3NldHMvaGFwcHkuc3ZnXCIsXG4gIFwiLi4vYXNzZXRzL29yYW5nZS5zdmdcIixcbiAgXCIuLi9hc3NldHMvcnVubmluZy5zdmdcIixcbiAgXCIuLi9hc3NldHMvc2FkLnN2Z1wiLFxuICBcIi4uL2Fzc2V0cy95ZWxsb3cuc3ZnXCIsXG4gIFwiLi4vYXNzZXRzL3dhdmUuc3ZnXCIsXG4gIFwiLi4vYXNzZXRzL3dhdmUucG5nXCIsXG4gIFwiLi4vYXNzZXRzL3RvcG9ncmFwaHkuc3ZnXCIsXG4gIFwiLi4vYXNzZXRzL3RvcG8ucG5nXCIsXG4gIFwiLi4vYXNzZXRzL2dyYXBoLXBhcGVyLnN2Z1wiLFxuICBcIi4uL2Fzc2V0cy9ncmFwaC5wbmdcIixcbiAgXCIuLi9hc3NldHMvYnJhbmQvY2F0Y2gyMi5zdmdcIixcbiAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiLFxuICBcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS43LjIvY3NzL2FsbC5jc3NcIixcbiAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL25hdmlnb0A4LjExLjEvbGliL25hdmlnby5taW4uanNcIixcbiAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCIsXG4gIFwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNi4wLm1pbi5qc1wiLFxuICBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLzEuOS4wL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qc1wiLFxuICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9EYXZpZER1cm1hbi9GbGV4aUNvbG9yUGlja2VyQG1hc3Rlci9jb2xvcnBpY2tlci5taW4uanNcIixcbl07XG5cbi8vIENhY2hlIGVsZW1lbnRzXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC53YWl0VW50aWwoXG4gICAgY2FjaGVzLm9wZW4oQ0FDSEVfTkFNRSkudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwodXJsc1RvUHJlZmV0Y2gpO1xuICAgIH0pXG4gICk7XG59KTtcblxuLy8gZmFsbGJhY2sgdG8gbmV0d29yayBvbiBmZXRjaFxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnJlc3BvbmRXaXRoKFxuICAgIGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlIHx8IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgIH0pXG4gICk7XG59KTtcbiJdfQ==