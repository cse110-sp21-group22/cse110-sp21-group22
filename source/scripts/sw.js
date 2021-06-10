var CACHE_NAME = "bujo-cache";
var urlsToPrefetch = [
  "../scripts/app.js",
  "../scripts/calendar.js",
  "../scripts/color.js",
  "../scripts/index.js",
  "../scripts/moodFunctionality.js",
  "../scripts/settings.js",
  "../scripts/router.js",
  "../404.html",
  "../pages/calendar.html",
  "../index.html",
  "../pages/main.html",
  "../pages/moodtracker.html",
  "../pages/settings.html",
  "../style/main.css",
  "../style/moodStyle.css",
  "../assets/green.svg",
  "../assets/happy.svg",
  "../assets/orange.svg",
  "../assets/running.svg",
  "../assets/sad.svg",
  "../assets/yellow.svg",
  "../assets/wave.svg",
  "../assets/wave.png",
  "../assets/topography.svg",
  "../assets/topo.png",
  "../assets/graph-paper.svg",
  "../assets/graph.png",
  "../assets/brand/catch22.svg",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css",
  "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
  "https://cdn.jsdelivr.net/npm/navigo@8.11.1/lib/navigo.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
  "https://code.jquery.com/jquery-3.6.0.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js",
  "https://cdn.jsdelivr.net/gh/DavidDurman/FlexiColorPicker@master/colorpicker.min.js",
];

// Cache elements
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToPrefetch);
    })
  );
});

// fallback to network on fetch
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
