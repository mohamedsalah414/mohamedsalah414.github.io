'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"app-ads.txt": "13243b1f571359387e5ebb63d5ad9fb2",
"assets/AssetManifest.bin": "a2295f8e190840f4caf180f4c68c0026",
"assets/AssetManifest.bin.json": "b953fff41f52753403834450f73c1de4",
"assets/AssetManifest.json": "8609426e9da26fae9bd2c7782ec7f555",
"assets/assets/fonts/MyFlutterApp.ttf": "4e6be6305bba81183724f117eff63497",
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
"assets/assets/images/App_Store_(iOS).png": "23d39ea9dff093934dd603e15edad396",
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
"assets/assets/logos/coappso.jpg": "2e140079c7e1818a9a4bb7e70c8fb2c3",
"assets/assets/logos/flojics.png": "638466fa8b1208915e2d475a0e3605e4",
"assets/assets/logos/rarecrew.png": "5762cb05bdd4240464918f5fc7de2909",
"assets/assets/logos/upwork.png": "b830bd0101ca4597f2fd681985f1999a",
"assets/assets/pdf/cv.pdf": "71ea760bcd76264f73a7d91c33c421eb",
"assets/assets/pdf/resume.pdf": "9a42e5af1718e1a01f2ed39908f8290f",
"assets/FontManifest.json": "42077b154b4fc18507fab4ff6c90ebb0",
"assets/fonts/MaterialIcons-Regular.otf": "982ee6fd215d16f9572e3dd9dd2cb314",
"assets/NOTICES": "be0befa02d0cb36e6dd3a42a58b23697",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a9d0400f9df16db4b33dc8383aff97be",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "19d5241344825fac9506ede4d1bb0b96",
"/": "19d5241344825fac9506ede4d1bb0b96",
"main.dart.js": "06441561873beffdb0474a25a12c9d4a",
"manifest.json": "f70471aa1b4f2795c55722eec256656c",
"version.json": "23b0d289ea635934f91c5277fa2faaff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
