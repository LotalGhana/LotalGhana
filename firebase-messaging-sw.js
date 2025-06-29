importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyARq-cvXbo6y6aWUQwJ-D9vGHukLRCKd7s",
  authDomain: "lotalghanacms.firebaseapp.com",
  projectId: "lotalghanacms",
  storageBucket: "lotalghanacms.firebasestorage.app",
  messagingSenderId: "1059279214193",
  appId: "1:1059279214193:web:a8f10ab98ffb3c90576dd0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/LotalGhana.jpg' // optional icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
