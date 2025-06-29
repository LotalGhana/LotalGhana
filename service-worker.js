self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((reg) => {
      console.log("Service Worker registered:", reg);
    })
    .catch((err) => {
      console.error("Service Worker registration failed:", err);
    });
}

