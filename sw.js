const CACHE = "hddbm-v31";
const CORE = ["./", "./index.html", "./stock.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];
const EXT = [
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"
];
const CACHE_HOSTS = ["www.gstatic.com", "cdnjs.cloudflare.com", "cdn.jsdelivr.net", "tessdata.projectnaptha.com"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all([...CORE, ...EXT].map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const store = r => { if (r && r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; };
  if (CACHE_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(h => h || fetch(req).then(store)));
  } else if (url.origin === location.origin) {
    e.respondWith(fetch(req, { cache: "no-store" }).then(store).catch(() => caches.match(req).then(h => h || caches.match("./index.html"))));
  }
});
