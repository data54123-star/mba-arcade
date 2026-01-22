const CACHE_NAME = 'arcade-v18'; 

const urlsToCache = [
  './',
  './index.html',
  './lobby.html',
  './snake.html',
  './manifest.json'
];

// INSTALLATION: Cachen und sofort "warten" überspringen
self.addEventListener('install', event => {
  self.skipWaiting(); // <--- DAS IST DER TURBO
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// AKTIVIERUNG: Alte Caches löschen und sofort Kontrolle übernehmen
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Lösche alten Cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // <--- SOFORT ÜBERNEHMEN
});

// FETCH: Standard Cache-Strategie
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});