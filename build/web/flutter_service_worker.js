'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "091190b2746cba6baf107d961a259229",
"assets/assets/icon/facebook.png": "7ac4f70f8d267cc44ad9cd3b174eec44",
"assets/assets/icon/instagram.png": "6e25c1f8ed5606bc77e9fa32bafa4460",
"assets/assets/icon/twitter.png": "1dbf9c1ad0c8139ad8f18b488d9da186",
"assets/assets/image/content/access_denied.png": "83acf770661f41ef253927019cd476a6",
"assets/assets/image/content/achieve_donate_1.png": "4fdbceeda2ca764fffcd50f22eb520e6",
"assets/assets/image/content/achieve_donate_100.png": "33f423a4b11b684244ed8f35592822ed",
"assets/assets/image/content/achieve_exchange_1.png": "ff0e9f1bb1130090c74064ba186af2f6",
"assets/assets/image/content/coin_1.png": "0fe797b8317cc6551ae2dd7592810e6a",
"assets/assets/image/content/coin_3.png": "f5ae3984189eea92ce3434329d59db7d",
"assets/assets/image/content/coin_5.png": "acb3f1b04d790a058c63b169a3a2285c",
"assets/assets/image/content/company.png": "1ee7cf0bf62d580eb1e809f63929b5f7",
"assets/assets/image/content/day_1.png": "310357bf38e80eebdc460ae6c0b05c9c",
"assets/assets/image/content/day_2.png": "321ce5a3805f495899a956a779b183e7",
"assets/assets/image/content/day_3.png": "4861c224bef8af5463321a6e18adb85e",
"assets/assets/image/content/day_4.png": "b0e0b993c84c5fbd364fc79fe36d5e4c",
"assets/assets/image/content/day_5.png": "12b5d1eff3ba73bcb33f158422267932",
"assets/assets/image/content/day_6.png": "0198a8ef8106512219616e0614bf2dfc",
"assets/assets/image/content/day_7.png": "67d689ad224ad66069869458fd164251",
"assets/assets/image/content/default_1.png": "aaa2b256e8f2753c2b25b32f57b0a3a0",
"assets/assets/image/content/default_2.png": "257072451c4051bf9d15392c3b6422e5",
"assets/assets/image/content/default_3.png": "f734c2b5744c8e53a1ca54e1a05fb97d",
"assets/assets/image/content/dev_selfie.png": "5923d0288c8b557607180267b036bbc1",
"assets/assets/image/content/donate.png": "3ff6e8fc768044ea24b576ec36c3c808",
"assets/assets/image/content/donate_1.png": "057efaa14a51730c6f2648849cc86ac8",
"assets/assets/image/content/donate_2.png": "d2c6f34995fea422b14aabaaf6005db7",
"assets/assets/image/content/donate_3.png": "db78ef599ea94766bff02e8c0435ee6c",
"assets/assets/image/content/donor_exchange.png": "df7da31d6ad62ec034e2d9c99bcdfeb4",
"assets/assets/image/content/error.png": "e59f8fff1371888ceeb49c66e100734a",
"assets/assets/image/content/exchange.png": "491665fc4eba33e1a8c2ae91c9f15d50",
"assets/assets/image/content/exchange_1.png": "507d916e1e651cc91491d56395e1da02",
"assets/assets/image/content/exchange_2.png": "16f85318798e4d1a1424767e3601456d",
"assets/assets/image/content/exchange_3.png": "e5a63180889fe654047b18ba4c1f3e71",
"assets/assets/image/content/item_type_1.png": "5f881965222dd8e788b4814e71ddf91e",
"assets/assets/image/content/item_type_2.png": "16f6cc9caf2f646d3d9bf06ba795a59a",
"assets/assets/image/content/item_type_3.png": "0604eb48d445d57f30b86321a77fc340",
"assets/assets/image/content/item_type_4.png": "9ad749e86f0622e2694ec310be3ced2d",
"assets/assets/image/content/item_type_5.png": "07b92d11d30082ae9b2f9552ee171e8e",
"assets/assets/image/content/member_1.png": "896c98f3d2e6e5ec3c864f914c209c51",
"assets/assets/image/content/member_2.png": "1743888d1cf1572a55e5afcf9e3c2d67",
"assets/assets/image/content/member_3.png": "092d812dcca967e8b5488be9d60af5f7",
"assets/assets/image/content/member_4.png": "6d09b744777680eb7565a02f901d7b81",
"assets/assets/image/content/member_5.png": "8f8c1f3b175935454b7efbc497bf8ed5",
"assets/assets/image/content/mini_default_1.png": "468a125501eb8029cfb68630f1e1d767",
"assets/assets/image/content/mini_default_2.png": "1529cbfaebd3aa54f4ed93ebf223aa2d",
"assets/assets/image/content/placeholder.png": "66c4959a9b4b946fbbfa3c7fe2aa56b1",
"assets/assets/image/content/spin_wheel.png": "d42890c1dfc9f2d42bdb5ce740df3e51",
"assets/assets/image/content/spin_wheel_pointer.png": "685808bd725e2eef65f138fc5afb3c97",
"assets/assets/image/content/warning.png": "dab3ddbaf7d89bcd6acdfc8ec9550d41",
"assets/assets/image/dummy/collector_1.png": "7088dcbfb8266d65b350326cf303ccae",
"assets/assets/image/dummy/collector_2.png": "fb7dc07dca38ad247656797cc63653a8",
"assets/assets/image/dummy/collector_3.png": "270711a28cf968b59dc1a5a1b99981bd",
"assets/assets/image/dummy/company_logo_1.png": "236c315a9f26b69c8d6bf23f1fd7aae8",
"assets/assets/image/dummy/company_logo_2.png": "ee311288f60fe76fc056d192e17ad0d2",
"assets/assets/image/dummy/company_logo_3.png": "2cb404f8997345849915f0afcc22d552",
"assets/assets/image/dummy/donate.png": "3ff6e8fc768044ea24b576ec36c3c808",
"assets/assets/image/dummy/donate_1.png": "057efaa14a51730c6f2648849cc86ac8",
"assets/assets/image/dummy/donate_2.png": "d2c6f34995fea422b14aabaaf6005db7",
"assets/assets/image/dummy/donate_3.png": "db78ef599ea94766bff02e8c0435ee6c",
"assets/assets/image/dummy/exchange.png": "491665fc4eba33e1a8c2ae91c9f15d50",
"assets/assets/image/dummy/exchange_1.png": "507d916e1e651cc91491d56395e1da02",
"assets/assets/image/dummy/exchange_2.png": "16f85318798e4d1a1424767e3601456d",
"assets/assets/image/dummy/exchange_3.png": "e5a63180889fe654047b18ba4c1f3e71",
"assets/assets/image/dummy/feedback_1.jpg": "957135d90627dccbda900d00420c3e9c",
"assets/assets/image/dummy/feedback_2.jpg": "bcecc9043ac38d154be2a48bb54da517",
"assets/assets/image/dummy/feedback_3.jpg": "9666a052787de0735045fcfc0b8596e2",
"assets/assets/image/dummy/feedback_4.jpg": "d5c368867cbd97d2b250484b8d5cd7bb",
"assets/assets/image/dummy/item_1_capture.PNG": "59ecc3a7c9c6663ada0c659ec2c1b078",
"assets/assets/image/dummy/item_1_donate.PNG": "3b0eca2431c0c8e6db05c3a356aa588c",
"assets/assets/image/dummy/item_1_exchange.PNG": "cf3c04615bf772b75cb5bdca09f3eb24",
"assets/assets/image/dummy/item_2_capture.jpg": "9edb80b1ae2783ef59e6b3f6b66d2972",
"assets/assets/image/dummy/item_2_donate.jpg": "7beabfc499f0183b759fb765417ac311",
"assets/assets/image/dummy/item_2_exchange.jpg": "981b9078266de7d845e7ed1450fc9270",
"assets/assets/image/dummy/item_3_exchange.jpg": "ad16abc0addbd6f43c19ff305a3e57a0",
"assets/assets/image/dummy/item_4_exchange.jpg": "86e9e690487d9223207bd8d4a89aad07",
"assets/assets/image/dummy/normal_1.png": "1fda31ca851086473b7e7c44f2f21a3e",
"assets/assets/image/dummy/normal_2.png": "1c33569e4fa593e02cc6850f4d6e50b7",
"assets/assets/image/dummy/normal_3.png": "d36c8ca02f94746e1803891094982966",
"assets/assets/image/dummy/normal_4.png": "abea4f7f4d0ccb7aac88b55d1c5ca820",
"assets/assets/image/logo/default/logo1080.jpg": "53deadb19aecce82cd010cd43aed0a16",
"assets/assets/image/logo/default/logo1280.jpg": "30d9a65c348ef9c66245ded3f7ef288a",
"assets/assets/image/logo/default/logo144.jpg": "4902216e375e995ba02ef1b2fac60793",
"assets/assets/image/logo/default/logo16.jpg": "b30e7a8d8c83d6c80e1a75bd37b97c01",
"assets/assets/image/logo/default/logo192.jpg": "edcfc9c37e571cf7812c8aef09167a1a",
"assets/assets/image/logo/default/logo32.jpg": "1ccab3d32649353b5c302274b19fd738",
"assets/assets/image/logo/default/logo320.jpg": "dedf023e2900a5bbb539d9d8d45aaaa4",
"assets/assets/image/logo/default/logo48.jpg": "499f3308fb1955ad4ac6b86d188c7c39",
"assets/assets/image/logo/default/logo512.jpg": "4d91f5d6db98a0da21e8df83a7343d16",
"assets/assets/image/logo/default/logo640.jpg": "b8646725b9ba8f825738661e1fe031e8",
"assets/assets/image/logo/default/logo72.jpg": "5c2965887460e987d869bc7abdd73d72",
"assets/assets/image/logo/default/logo96.jpg": "8ac2d0234f478861392a3e6aeb3cdb72",
"assets/assets/image/logo/noBG/logo1080.png": "ec08210099b2b8fb176dad48dd28ea78",
"assets/assets/image/logo/noBG/logo1280.png": "04448350a78f5b92705a714014f5cb69",
"assets/assets/image/logo/noBG/logo144.png": "38b4d83005df1d9b277f5dc3ab7fb574",
"assets/assets/image/logo/noBG/logo16.png": "613ee08cadca799840560a333cf5ec19",
"assets/assets/image/logo/noBG/logo192.png": "615f5a61ad4b2e3267183e6e7b89a213",
"assets/assets/image/logo/noBG/logo32.png": "c30f2b17af3bab444419114d904cf398",
"assets/assets/image/logo/noBG/logo320.png": "249e874fcb8398d53f1cff2f00911562",
"assets/assets/image/logo/noBG/logo48.png": "d9d25fb4cd4683e9cae2388e28d0d8f4",
"assets/assets/image/logo/noBG/logo512.png": "69322e12244b8564d157635937dedcb1",
"assets/assets/image/logo/noBG/logo64.png": "a9f21606dfd2fc34bebe7a9a16fd4576",
"assets/assets/image/logo/noBG/logo640.png": "c6877d073d8c5b4f62cb3a59c746f447",
"assets/assets/image/logo/noBG/logo72.png": "2fcea5ccf31df52d3a7703e76fd6f361",
"assets/assets/image/logo/noBG/logo96.png": "79a01db3072100ea60befb2b3da8697e",
"assets/assets/image/placeholder.png": "66c4959a9b4b946fbbfa3c7fe2aa56b1",
"assets/FontManifest.json": "5f40f6c7d7aed37f97dd6ad12fb6ff29",
"assets/fonts/AmaticSC-Regular.ttf": "bc94a100a8065b2c6ffa0f561cdf4fc7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "e38fa73ff96b9e91165b504caea45460",
"favicon.png": "613ee08cadca799840560a333cf5ec19",
"icons/Icon-192.png": "799a90139b5f3432bdc80c3e25ba1b0a",
"icons/Icon-512.png": "799a90139b5f3432bdc80c3e25ba1b0a",
"index.html": "e2257986ef9c321edb251cfefaa4fcde",
"/": "e2257986ef9c321edb251cfefaa4fcde",
"main.dart.js": "4cd2fc970dca605714b46d4a29e44e70",
"manifest.json": "991ab0567e249b75e838057328b40472",
"version.json": "17782119683fdd0e1c7415ed739f7964"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
