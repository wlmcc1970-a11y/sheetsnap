/* SheetSnap parked — this service worker clears old caches and retires itself. App moved to /sheetmancer/. */
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.delete(k);}));})
    .then(function(){return self.registration.unregister();})
    .then(function(){return self.clients.claim();}));
});
