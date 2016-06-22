# Service Worker

## Service Worker 란 무엇인가
- Rich offline experiences, periodic background syncs, push notifications 등 네이티브 앱에서만 가능했던 기능들을 웹에서 사용할 수 있도록 지원하는 스크립트
- 웹 페이지와는 별개로 브라우저의 백그라운드에서 수행되는 스크립트
- 오늘 기준으로 [push notifications](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web) 와 [background sync](https://developers.google.com/web/updates/2015/12/background-sync) 를 지원한다.
- 오프라인 사용에 대한 완벽한 지원을 한다
- Service Worker 이전에는 SPA의 [AppCache](http://www.html5rocks.com/en/tutorials/appcache/beginner/) 와 같은 기능들이 존재 했었지만, multiple page에 대한 지원이 되지 않았다.

## Service Worker 를 통해 할 수 없는 것들은?
- Javascript Worker 이기에 DOM 에 직접 접근이 불가. (하지만 원하면 [postMessage](https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage) 와의 인터페이스를 통해 접근 가능)
- 프로그래밍 가능한 네트워크 프록시이기 떄문에, 페이지 핸들링에 관련된 네트워크 요청을 제어할 수 있다.
- 사용하지 않을 때는 종료된다. 따라서, onfetch & onmessage 핸들러를 통한 global state에 접근이 불가능 하지만, 원한다면 [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)를 이용하여 상태를 보존할 수 있다.

## Service Worker Lifecycle
(이어서 진행)
https://developers.google.com/web/fundamentals/primers/service-worker/service-worker-lifecycle?hl=en
