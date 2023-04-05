'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "app-ads.txt": "13243b1f571359387e5ebb63d5ad9fb2",
"assets/AssetManifest.json": "752ff856a35e524b6ff4050f9b735ff5",
"assets/assets/fonts/MyFlutterApp.ttf": "4412d1dae0b38881fd342cb3721c617f",
"assets/assets/fonts/TSRotger/ArbFONTS-TSRotger-Bold.otf": "5753f9d45ffc580f01afca5305598aba",
"assets/assets/fonts/TSRotger/ArbFONTS-TSRotger-Light.otf": "0d3c80ca11594786b98e645269f070d3",
"assets/assets/fonts/TSRotger/ArbFONTS-TSRotger-Regular.otf": "fdc370599c69bcd394a18865ac4fd1ee",
"assets/assets/gifs/chatting.gif": "51ba415a1d94c3b42c041c748e9195f8",
"assets/assets/gifs/getMyLocation.gif": "9c62c4c81bd2c05f14ecad2a60c7f18c",
"assets/assets/gifs/localNotification.gif": "9aadf958acee5e90da5156d7b86d4f9e",
"assets/assets/gifs/maps.gif": "8d904e4317e17d871d13f49e1d23749b",
"assets/assets/gifs/notifications.gif": "d2b63a48a8d21be76ec705fa785e7493",
"assets/assets/images/0.png": "c084e63ed912ac4774faf7bd23ed9db1",
"assets/assets/images/1.png": "8c5b5748d3387b94ad4a9561cd3d45c3",
"assets/assets/images/2.png": "4e52dfc737e6922c5f046648a2426c7f",
"assets/assets/images/3.png": "e08987a55e06ee326c43f15f2e02239e",
"assets/assets/images/63205-flutter.json": "ab819bc7ddbca7dcd5f74fffc02e2f53",
"assets/assets/images/Backcircle.png": "d60ef76ad584d201bbd066913b0a5728",
"assets/assets/images/google-play-png-logo-3798.png": "fd53fc3ed492c70d4db90920da79f7d3",
"assets/assets/images/projects/3ilagy.png": "0ba9b183570d8daf940e771f6eeb228b",
"assets/assets/images/projects/casting.png": "b324bfe230a27e73b1aebabbb42ec95f",
"assets/assets/images/projects/clinic.png": "b1562c5eda36002a86115384a0c96f7e",
"assets/assets/images/projects/gym.png": "aa49048ca475b583574318b7f72d7bda",
"assets/assets/images/projects/hera.png": "16d25f2cf648e3fb92f323dafa535518",
"assets/assets/images/projects/hiring.png": "75dc8578eeec3312afc2d953ae22a994",
"assets/assets/images/projects/islamic.png": "7e6be7bc0bf79171341b08f5125370b3",
"assets/assets/images/projects/portofilio.png": "03cd67a704a6dee86260f7969cb0e11d",
"assets/assets/images/projects/ramadan.png": "8c4c98723b4ff0d6d740b26c48816bd8",
"assets/assets/pdf/resume.pdf": "9a42e5af1718e1a01f2ed39908f8290f",
"assets/FontManifest.json": "42077b154b4fc18507fab4ff6c90ebb0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "68eefcc1a773c101819989d29585740e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "241853515c54f0ecb73f0ab13d1c0848",
"/": "241853515c54f0ecb73f0ab13d1c0848",
"main.dart.js": "0f3ba41853573dd38be1e374b7c209ec",
"manifest.json": "f70471aa1b4f2795c55722eec256656c",
"version.json": "e8fd4c060184c10cb53d8691949d88c0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
