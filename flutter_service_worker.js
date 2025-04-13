'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"app-ads.txt": "13243b1f571359387e5ebb63d5ad9fb2",
"assets/AssetManifest.bin": "c3bd0112a14ac36bd29e9637dd79118f",
"assets/AssetManifest.bin.json": "b505f9ceb576a64cf1e346cf4dbb643f",
"assets/AssetManifest.json": "df0b963c2940cb0b2e0ce56d8a7d06d2",
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
"assets/assets/images/projects/moweinLogo.png": "ceada92b6b621deed5b28efb2443fdac",
"assets/assets/images/projects/portofilio.png": "03cd67a704a6dee86260f7969cb0e11d",
"assets/assets/images/projects/ramadan.png": "8c4c98723b4ff0d6d740b26c48816bd8",
"assets/assets/images/projects/tohealLogo.jpg": "55b91d5163ab26ebf06a8c2a62ece7ed",
"assets/assets/logos/coappso.jpg": "2e140079c7e1818a9a4bb7e70c8fb2c3",
"assets/assets/logos/flojics.png": "638466fa8b1208915e2d475a0e3605e4",
"assets/assets/logos/rarecrew.png": "5762cb05bdd4240464918f5fc7de2909",
"assets/assets/logos/upwork.png": "b830bd0101ca4597f2fd681985f1999a",
"assets/assets/pdf/cv.pdf": "71ea760bcd76264f73a7d91c33c421eb",
"assets/assets/pdf/resume.pdf": "9a42e5af1718e1a01f2ed39908f8290f",
"assets/FontManifest.json": "42077b154b4fc18507fab4ff6c90ebb0",
"assets/fonts/MaterialIcons-Regular.otf": "ad442978c2d1a639ef1e721cd53391c7",
"assets/NOTICES": "a7ce60bb8879d0118bc69e78e04b3020",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f6e76a98c173cc762933210f5562745b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "0e83b17135ddc0ede99552b9e939dbd9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e52189e0419161f327b2faac5df7fdfa",
"icons/Icon-192.png": "22dd5748bfa9c78057601174b9560eb6",
"icons/Icon-512.png": "5fae733ee9d0836bb92aecf614d77d76",
"icons/Icon-maskable-192.png": "22dd5748bfa9c78057601174b9560eb6",
"icons/Icon-maskable-512.png": "5fae733ee9d0836bb92aecf614d77d76",
"index.html": "c698d59eaf51b04f6eec25a003c88bea",
"/": "c698d59eaf51b04f6eec25a003c88bea",
"main.dart.js": "6595785ea56b9930820a697c5e29af6f",
"manifest.json": "b20fc39e25336b02bce596fb7d5f0c7f",
"version.json": "fd4586d03ff0512fc51654fd6b1fc139"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
