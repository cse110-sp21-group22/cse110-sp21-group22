var CACHE_NAME = 'bujo-cache';
var urlsToPrefetch = [
  '/app.js',
  '/calendar.js',
  '/color.js',
  '/index.js',
  '/moodFunctionality.js',
  '/settings.js',
  '/404.html',
  '/calendar.html',
  '/index.html',
  '/main.html',
  '/moodtracker.html',
  '/settings.html',
  '/main.css',
  '/moodStyle.css',
  '/assets/green.svg',
  '/assets/happy.svg',
  '/assets/orange.svg',
  '/assets/running.svg',
  '/assets/sad.svg',
  '/assets/yellow.svg',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/navigo@8.11.1/lib/navigo.min.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
  'https://code.jquery.com/jquery-3.6.0.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js',
  'https://cdn.jsdelivr.net/gh/DavidDurman/FlexiColorPicker@master/colorpicker.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToPrefetch);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});