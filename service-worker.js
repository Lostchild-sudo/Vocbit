// Cache files for offline use
const CACHE_NAME = "vocbit-cache-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/chat.html",
    "/style.css",
    "/app.js",
    "/words.js",
    "/manifest.json"
];

// Install service worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Fetch cached content
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Background notification trigger
self.addEventListener("sync", (event) => {
    if (event.tag === "dailyWordNotification") {
        event.waitUntil(showDailyNotification());
    }
});

async function showDailyNotification() {
    self.registration.showNotification("Vocbit - Word of the Day", {
        body: "Your new word is ready! Open the app.",
        icon: "/icon-192.png"
    });
}
