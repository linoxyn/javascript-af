"use strict";var precacheConfig=[["/javascript-af/index.html","85553316577d003105f101f5ba7f27b8"],["/javascript-af/static/css/main.f665663e.css","743ab1f81249b4929e21176b799649b2"],["/javascript-af/static/js/0.77432dce.chunk.js","df1cf343f4a32a6cfd8d836df6b9277d"],["/javascript-af/static/js/1.8849b600.chunk.js","0102a41611dad3e8308ba5b123074150"],["/javascript-af/static/js/main.77709c37.js","36b01ae4016d9bf54d8559651161686a"],["/javascript-af/static/media/josefin-sans-latin-100.4b40bd93.woff","4b40bd93126d9a348b15722d39e62c1f"],["/javascript-af/static/media/josefin-sans-latin-100.a8638c8f.woff2","a8638c8ff48035224b27391d1d1fa14a"],["/javascript-af/static/media/josefin-sans-latin-100italic.017e52dd.woff","017e52ddc51eab0b3ef3f796ec195da2"],["/javascript-af/static/media/josefin-sans-latin-100italic.6e5beced.woff2","6e5beced2a212daf6155835f5bf99b0d"],["/javascript-af/static/media/josefin-sans-latin-300.4393ca91.woff","4393ca913f37b4ad826e5c6fb4d6ed1e"],["/javascript-af/static/media/josefin-sans-latin-300.a7a6275f.woff2","a7a6275f943df67b111996209c4767a3"],["/javascript-af/static/media/josefin-sans-latin-300italic.393fb416.woff","393fb416afdb272dc71fca4a5e26a61b"],["/javascript-af/static/media/josefin-sans-latin-300italic.dc08d67e.woff2","dc08d67ea25cd328d96cd4ea814dbbe3"],["/javascript-af/static/media/josefin-sans-latin-400.6537892d.woff","6537892df3329ee8024ec1bd09ca6122"],["/javascript-af/static/media/josefin-sans-latin-400.a80a033f.woff2","a80a033f0cf0b8186287fa277c334efb"],["/javascript-af/static/media/josefin-sans-latin-400italic.03176f6f.woff2","03176f6f2001235d00339c763f7b93d0"],["/javascript-af/static/media/josefin-sans-latin-400italic.47526181.woff","475261813adba6463f0ffdb67ca90755"],["/javascript-af/static/media/josefin-sans-latin-600.035e3844.woff2","035e3844f86fd3c8ad364429d0c9dc17"],["/javascript-af/static/media/josefin-sans-latin-600.c3dd9b0c.woff","c3dd9b0cc353d26e80f3c2e4477d01d9"],["/javascript-af/static/media/josefin-sans-latin-600italic.73a94738.woff","73a94738700e107531e0cea5c40b4014"],["/javascript-af/static/media/josefin-sans-latin-600italic.a45b63bc.woff2","a45b63bc9d2273ef3b67a7ebb0583916"],["/javascript-af/static/media/josefin-sans-latin-700.816542f1.woff","816542f10b7e97e5deb159c1aec84976"],["/javascript-af/static/media/josefin-sans-latin-700.ed780de1.woff2","ed780de1b24634dbc7490a9caff2e35d"],["/javascript-af/static/media/josefin-sans-latin-700italic.052635dc.woff2","052635dce76754ce05c0a2473edf9d59"],["/javascript-af/static/media/josefin-sans-latin-700italic.2c7a8aa0.woff","2c7a8aa0ca92fbfac79d12b811092b04"],["/javascript-af/static/media/loginimg.661fbaf1.jpg","661fbaf10cc47f15bf8feae0036ee659"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,t,n){var s=new URL(a);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,e){var t=new URL(a);return t.hash="",t.search=t.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],n=new URL(e,self.location),s=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!e.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(t){return Promise.all(t.map(function(t){if(!e.has(t.url))return a.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var s="/javascript-af/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});