<!-- $size: 16:9 -->
<!-- page_number: true -->
# Service Worker - Caching, Offline, Native Features

---
<!-- footer : Service Worker - 프론트엔드 개발자를 위한 웹앱 프로젝트 CAMP -->
## 목차
- 서비스 워커 소개
- 서비스 워커 특징
- 서비스 워커 배경 & 워커 종류 소개
- 서비스 워커 실습 #1 - 예제
- 서비스 워커 라이프 싸이클
- 서비스 워커 캐싱
- 서비스 워커 디버깅
- 서비스 워커 실습 #2 - 과제
- 서비스 워커 푸시

---
## Service Worker 소개
- **브라우저와 서버 사이의 미들웨어 역할을 하는 스크립트 파일**
- PWA 에서 가장 중요한 역할을 하고, **Offline 경험** 과 **모바일 Push 알람** 구현을 제공하는 기반기술

![Service Worker location](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/4st_week/images/sw-location.png)

---
## Service Worker 특징
1. **브라우저의 백그라운드에서 실행**되며 웹 페이지와 별개의 라이프 싸이클을 가짐
  - Javascript UI 쓰레드랑 별도로 동작하는 또 다른 쓰레드

2. **네트워크 요청을 가로챌 수 있어** 해당 자원에 대한 캐쉬 제공 또는 서버에 자원 요청
  - 프로그래밍 가능한 네트워크 프록시

3. **브라우저 종속적인 생명주기로 백그라운드 동기화 기능 제공**
4. **Web & Mobile Push** 수신이 가능하도록 notification 제공
5. **navigator.serviceworker** 로 접근

---
## Service Worker 배경
#### [AppCache](https://www.html5rocks.com/en/tutorials/appcache/beginner/)
- 오프라인 경험을 제공하기 위한 캐시 제공, HTML 표준
- 복수 페이지 앱에서 오동작, 파일 변화에 대해 둔감한 캐싱등의 [문제](https://alistapart.com/article/application-cache-is-a-douchebag)

```html
<html manifest="example.appcache">
  ...
</html>
```

```js
CACHE MANIFEST
# 2010-06-18:v3

# Explicitly cached entries
index.html
css/style.css

# Additional resources to cache
CACHE:
images/logo1.png
```

---
#### Workers
- 특정 작업을 병렬 스크립트로 백그라운드에서 실행 및 처리하기 위한 수단, HTML 표준
- 종류 :
  - [Dedicated Workers](https://www.html5rocks.com/en/tutorials/workers/basics/), 라이프싸이클 - 페이지 종속적
  - [Shared Workers](https://html.spec.whatwg.org/multipage/workers.html#sharedworker), 브라우징 컨텍스트

---
## Service Worker 등록
- 브라우저에 존재 유무를 확인 후 `register()` 사용

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
```

> 기억하시죠? 초기 렌더링에 방해되는 리소스는 최대한 뒤로 미룹니다.

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // sw 의 `install` 에 필요한 자원 네트워크 요청이, 초기 렌더링에 필요한 자원 요청보다 나중에 일어나는 효과
    navigator.serviceWorker.register('/service-worker.js');
  });
}
```

---
- 서비스워커가 동작할 url scope 지정하기

```js
navigator.serviceWorker.register('/service-worker.js', {
  scope: './myApp'
});
```

---
## Service Worker 설치
- `register()` 에서 등록한 스크립트 파일에서 `install()` 호출

```js
self.addEventListener('install', function(event) {
  // 캐쉬 등록 또는 기타 로직 수행
});
```

---

```js
var CACHE_NAME = 'cache-v1';
var filesToCache = [
  '/',
  '/js/app.js',
  '/css/base.css'
];
```

- `CACHE_NAME` : 캐쉬를 담을 파일명 정의
- `filesToCache` : 캐쉬할 웹 자원들 정의

---

```js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // 위에 지정한 캐쉬 목록을 `cache-v1` 캐쉬에 추가
      return cache.addAll(filesToCache);
    })
  );
});
```

- `waitUntil()` : 안의 로직이 수행될 때 까지 대기

**주의 : 캐쉬할 파일 중 한개라도 실패하면 전체 실패. 이를 해결하기 위해 sw-toolbox 사용**

---
#### [sw-toolbox](https://github.com/googlechrome/sw-toolbox)


---
#### [sw-precache](https://github.com/googlechrome/sw-precache) in Gulp


---
## Service Worker 네트워크 요청 응답
- 서비스워커 설치 후 캐쉬된 자원에 대한 네트워크 요청이 있을 때는 캐쉬로 돌려준다.

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
```

- `respondWith()` : 안의 로직에서 반환된 값으로 화면에 돌려줌
- `match()` : 해당 request 에 상응하는 캐쉬가 있으면 찾아서 돌려주고 아니면 네트워크 요청을 날려 (fetch) 자원을 획득

---
## Service Worker 활성화 및 업데이트
- 새로운 서비스워커가 설치되면 활성화 단계로 넘어온다.
- 이전에 사용하던 서비스워커와 이전 캐쉬는 모두 삭제하는 작업 진행

```js
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 새로운 서비스 워커에서 사용할 캐쉬 이외의 캐쉬는 모두 삭제
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

> 기존에 실행 중인 서비스워커와 사이즈를 비교하여 1 바이트라도 차이나면 새걸로 간주

---
## Service Worker 실습 #1 - 함께하는 예제
- [Lighthouse Sample Source, branch - step3](https://github.com/joshua1988/PWA-Roadshow-Lighthouse)

해당 예제를 같이 작성합니다..!

---
## Service Worker 라이프 싸이클
- 

---
## Service Worker 디버깅
- 크롬 개발자 도구의 `Application` 패널에서 Service Workers
- 주소창에 `chrome://inspect/#service-workers` & `chrome://serviceworker-internals`
- 주의사항 : 등록 과정에서 실패하였더라도 콘솔에 로그가 찍히지 않는 경우가 있음
  - *event.waitUntil() 내부 콜백 로직 확인 권고*

---
## 실습 #2 - 과제
- 금일 배운 내용을 바탕으로 Offline 서비스를 지원하는 간단한 1 개의 웹 페이지 제작후 Github Page 에 호스팅
  - Github 복수개 Repository 호스팅 방법 같이 [실습]

- 조건 : 실습에 포함할 파일
  - html 1 개
  - css 1 개
  - js 1 개 이상
  - 최소 images 1 개 이상

- 제출 : 소통 채널 (FB & Slack) 에 해당 페이지 호스팅된 링크 보내주세요.
주제는 자유 선택. ex) 신문 기사, Instargram Feed, 날씨 예보 등

---
## 참고
- [Service Worker Spec](https://w3c.github.io/ServiceWorker/)
- [Instant and Offline Apps, Google - Slide Share](https://www.slideshare.net/cwdoh/instant-and-offline-apps-with-service-worker)
- [Cache Storage - MDN](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)
- [Fetch() Spec](https://fetch.spec.whatwg.org/)

---
<!-- footer : -->
# 끝
