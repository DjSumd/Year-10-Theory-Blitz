// Bump VERSION whenever any cached file changes so the device fetches fresh copies.
// Caches are namespaced with PREFIX so this app never clears another app's cache
// on the shared github.io origin.
const PREFIX = 'blitz-y10-';
const VERSION = PREFIX + 'v2';
const ASSETS = [
  './',
  './index.html',
  './glyphs.js',
  './content.js',
  './refs.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k.startsWith(PREFIX) && k !== VERSION).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
