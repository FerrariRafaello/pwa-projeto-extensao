const CACHE_NAME = 'zappybuy-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './main.js',
  './manifest.webmanifest',
  'https://unpkg.com/vue@3/dist/vue.global.prod.js'
];
// cdn.tailwindcss.com redireciona (302) para uma URL versionada; esse
// redirecionamento cross-origin é bloqueado pelo CORS dentro de addAll(),
// então ele precisa ser buscado em modo no-cors e guardado à parte.
const NO_CORS_URLS = ['https://cdn.tailwindcss.com'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all([
        cache.addAll(URLS_TO_CACHE),
        ...NO_CORS_URLS.map((url) =>
          fetch(url, { mode: 'no-cors' }).then((resp) => cache.put(url, resp))
        )
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : undefined)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
