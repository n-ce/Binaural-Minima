const staticLoader = "Binaurma"
const assets = [
  "/",
  "index.html",
  "192px_icon.png",
  "512px_icon.png",
  "photo.jpg",
  "script.js",
  "style.css",
]

self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticLoader).then(cache => {
			cache.addAll(assets)
		})
	)
})
self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})