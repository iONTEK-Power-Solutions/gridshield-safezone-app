/* iONTEK GridShield SafeRoute - Service Worker v1.0.0
 * (c) 2026 M.R.P. Ballestar / iONTEK Power Solutions Corporation. All Rights Reserved. RA 8293. */
const CACHE = 'safezone-ph-v3-1-3';
const SHELL = [
  './index.html',
  './install.html',
  './manifest.webmanifest',
  './safezones.json',
  './lgu_drrmc.json',
  './corridor.html',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* App shell: cache-first. Map tiles: network-first with cache fallback
 * so recently viewed areas remain visible offline. */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.hostname.includes('tile.openstreetmap.org')) {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
