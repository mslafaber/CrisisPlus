self.addEventListener("install", function(event) {
    event.waitUntil(
        cashes.open(cacheName).then(function(cache) {
            return cache.addAll([
                "./",
                "./000contact.html",
                "./crime.html",
                "./disaster.html",
                "./mentalhealth.html",
                "./poisons.html",
                ".js/mapscript.js",
                ".css/style.css",
                "/images/imageicons/000img.jpg",
                "/images/imageicons/callbtn.jpg",
                "/images/imageicons/crimestoppers1.jpg",
                "/images/imageicons/floods.jpg",
                "/images/imageicons/healthdirect.jpg",
                "/images/imageicons/logo1.PNG",
                "/images/imageicons/poison.jpg",
                "/images/imageicons/suisideprevention.png"
            ]
        );
    })
);
});

self.addEventListener("fetch", e => {
    e.respondWith(
        cashes.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});