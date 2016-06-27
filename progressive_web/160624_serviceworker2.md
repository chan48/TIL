# Service Worker Introduction II

## Service Worker 실행하기 위한 환경
- 지원되는 브라우저 : Chrome 46 ↑, Firefox, Opera, Safari (지원예정)
- 브라우저 지원에 대한 상세한 내용은 [여기](https://jakearchibald.github.io/isserviceworkerready/) 참고
- HTTPS 통신이 가능한 서버에서만 동작한다 (테스트를 위한 localhost 제외)

## Service Worker 등록하기
- 아래 코드처럼 javascript로 서비스워커를 등록한다.
``` javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
```
- 위 코드를 살펴보면, 먼저 서비스워커 API 존재 유무를 파악한다.
- 존재할 시에 `/sw.js` 파일을 등록한다.
- 한가지 알아둘 것은, 페이지가 로딩될 때 마다 `register()` API를 호출해도 된다. 브라우저가 서비스워커 실행 유무를 판단하여 알아서 처리하기 떄문이다.
- 서비스워커 파일은 도메인 루트에 위치한다. 예를 들어, 도메인이 `/example/sw.js` 인 경우, `/example/`로 시작하는 모든 도메인에 대하여 서비스워커가 실행된다.
- 크롬브라우저 주소창에 `chrome://inspect /#service-workers` 입력하면 서비스워커 콘솔을 사용할 수 있다.
- 등록된 서비스워커는 `chrome://serviceworker-internals` 을 통해 확인 및 관리 할 수 있다.

## Service Worker 설치하기
- 위 등록 절차를 거쳤다면, 이젠 서비스워커에서 사용할 자원들을 설치할 차례다.
- 아래 코드를 이용하여 어떤 파일들을 캐싱할 것인지 결정한다.
```javascript
self.addEventListener('install', function(event) {
  // Perform install steps
});
```
- install 콜백 함수 안에 다음 3가지 순서를 추가한다.
  1. **[열기]** cache 열기
  2. **[캐싱]** 사용할 파일들 캐싱하기
  3. **[확인]** 해당 파일들이 모두 캐싱 되었는지 확인

``` javascript
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
```

- `caches.open()`에 정의한 캐쉬명 변수를 이용하여 캐쉬 사용을 시작한다.
- 다음 `cache.addAll()`를 이용하여 array 안에 선언한 필요파일들을 모두 캐싱한다.
- `event.waitUntil()` 메서드로 설치가 얼마나 오래 걸리던 간에, 설치 후에 해당 이벤트를 수행할 수 있도록 한다. (Javascript Promise 사용됨)
- 결론적으로, 모든 파일들이 성공적으로 캐싱되면 서비스워커가 정상적으로 설치된다.
- 주의할 점은, 여기서 한 개의 파일이라도 캐싱에 실패할 경우 인스톨 전체의 프로세스가 종료된다는 것이다. 따라서 신중하게 캐싱할 파일 리스트를 정한다.

## Cache 와 Return 요청
- 서비스워커 설치까지 완료했다면, 이제 캐쉬된 결과를 받아볼 차례다
- 설치 완료후에 페이지 이동이나 갱신을 하게 되면, 서비스워커는 `fetch`라는 이벤트를 수행하게 된다.
``` javascript
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
```
- `caches.match()`는 들어오는 request에 대해서 서비스워커가 생성한 캐쉬가 있는지 확인한다
- 만약 생성된 캐쉬가 있다면, 캐쉬 값을 리턴한다. 그렇지 않은 경우에는 `fetch()` 를 콜한다.
- `fetch()` 네트워크로부터 받을 데이터가 있다면, 네트워크 요청을 보내 해당 데이터를 받는다.
- 네트워크 요청을 각각 캐쉬로 저장하고 싶다면, 아래와 같은 형식으로 구현하면 된다.
``` javascript
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
```
위 코드의 로직은 다음과 같다.
1. fetch reqeust에 대해 promise (then) 콜백 호출
2. 받은 response에 대하여 아래와 같은 절차를 수행
  - response 유효성 검사
  - status 값이 200인지 확인
  - type 값이 basic인지 확인 (our origin 인지 확인 / 3rd party 자원은 캐쉬가 되지 않는다는 의미)
3. 위 절차들을 통과하면, response를 복제한다. 이유는 response는 [Stream](https://streams.spec.whatwg.org/) 방식이기 떄문에, body는 오직 한번만 실행 가능하다. 캐쉬 후에 브라우저에도 response를 던져야 하기 때문에, 복제를 해서 한개는 캐쉬를 한개는 브라우저에 각각 사용한다.


## Service Worker 업데이트 하기
- 서비스워커를 업데이트 해야하는 시점에서의 작업 절차는 다음과 같다.
  1. 서비스워커를 업데이트 하라. 사용자가 사이트를 네비게이팅 할 떄, 서비스워커 파일이 1byte라도 다를 경우 새로운 서비스워커로 간주한다.
  2. 새로운 서비스 워커가 시작되고, `install` 이벤트가 발생한다.
  3. 이 시점에서, 예전에 등록된 서비스워커가 현재 페이지를 제어하고 있기 때문에 새로운 서비스 워커는 `waiting` 상태로 진입한다.
  4. 사이트에서 열려있었던 페이지가 닫히면, 이전 서비스워커는 종료되고 새로운 서비스워커가 제어를 넘겨받는다
  5. 새로운 서비스워커로 제어가 넘어오면, `activate` 이벤트가 발생된다.

- `activate` 콜백에서 발생하는 가장 흔한 작업은 cache management이다.
- 이유는 바로 `install` 단계에서 이전 캐쉬를 다 지우게 된다면, 현재 페이지의 제어를 담당하는 old 서비스워커(현재 페이지에서 사용되고 있는 서비스워커 : 새로운 서비스워커에 비교해 old로 간주)의 경우 캐쉬에서 파일을 제공할 수가 없기 때문이다.
- 예를 들어, `my-site-cache-v1` 캐쉬라는 파일이 있다고 가정하자. 그리고 이 캐쉬를 한개는 페이지에 한개는 블로그 포스트에 사용한다고 하자.
- 이 의미는 `install` 단계에서 `pages-cache-v1` 와 `blog-posts-cache-v1` 라는 두개의 캐쉬를 생성하고, 기존의 `my-site-cache-v1` 캐쉬는 지운다 는 것이다.
- 아래의 코드를 확인해보면, `cacheWhitelist`에 존재하지 않는 캐쉬는 모두 서비스워커에서 삭제한다.
```javascript
self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

## Rough Edges and Gotchas (현재 떠안고 있는 문제들)
서비스워커에는 현재 다음 두가지 이슈가 있다. [`설치 실패 여부 확인 어려움`](https://developers.google.com/web/fundamentals/primers/service-worker/rough-edges-and-gotchas?hl=en#if-installation-fails-were-not-so-good-at-telling-you-about-it), [`fetch() 디폴트 값`](https://developers.google.com/web/fundamentals/primers/service-worker/rough-edges-and-gotchas?hl=en#the-defaults-of-fetch)
1. 설치 실패 여부 확인 어려움
  - 서비스워커가 등록이 되더라도, `chrome://inspect/#service-workers`나 `chrome://serviceworker-internals` 로 확인하기 어렵다.
  - 따라서, `chrome://serviceworker-internals` 에서 `Open DevTools window and pause JavaScript execution on service worker startup for debugging.`를 체크하여 install event에 디버깅 문구를 넣어 확인한다.
2. fetch() 디폴트 값
  - No Credentials by Default : `fetch()` 이벤트를 default로 사용시에는 쿠키 같은 credential들을 포함하지 않는다. 만약 credential을 포함하고 싶다면 아래와 같이
  ``` javascript
  fetch(url, {
    credentials: 'include'
  })
  ```
  - Non-CORS Fail by Default : 3rd party URL을 통한 자원 획득은 허용되지 않는다(CORS 지원하지 않는다면). 만약 CORS를 지원하려면 `no-CORS` 옵션을 추가한다. 하지만 이 방법은 `opaque` 응답을 야기하는데, 받은 응답이 성공인지 실패인지 확인할 수 가 없는 단점이 있다.
  ``` javascript
  cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
    return new Request(urlToPrefetch, { mode: 'no-cors' });
  })).then(function() {
    console.log('All resources have been fetched and cached.');
  });
  ```
