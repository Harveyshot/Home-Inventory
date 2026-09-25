const CACHE_NAME = 'home-inventory-v1';
const urlsToCache = [
  '/Home-Inventory/',
  '/Home-Inventory/index.html',
  '/Home-Inventory/manifest.json',
  '/Home-Inventory/favicon.png',
  '/Home-Inventory/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});