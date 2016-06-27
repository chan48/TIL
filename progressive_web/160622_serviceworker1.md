# Service Worker Introduction I

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
- 웹 페이지와 완전 별개의 라이프싸이클을 갖고 있다.
- **[등록]** 서비스워커 사용을 위해서는 먼저 페이지의 자바스크립트를 사용하여 등록해야 한다.
- **[설치]** 설치하는 과정에서 static한 자원들을 캐싱하고, 캐싱이 완료되면 서비스 워커가 설치가 된다. 한 개의 파일일라도 캐싱에 실패하면, 설치가 종료되고, 서비스워커는 다시 활성화되지 않는다.
- **[활성]** 설치가 되고 나면, 활성 스텝으로 넘어오고, 이 떄 이전(오래된) 캐쉬들을 다룰 수 있는 상태가 된다.
- **[제어]** 활성화 스텝 이후에는 서비스 워커가 본격적으로 모든 페이지를 제어하기 시작한다. 서비스워커에게 제어권이 돌아가면, 보통 아래 2가지 상태(Fetch, Terminated)로 나뉘게 된다.
- **[페치/메시지]** 네트워크 요청을 받거나 메시지를 페이지로부터 전달받았을 때 데이터를 fetch하거나 메시지 이벤트를 처리한다
- **[종료]** 메모리 효율을 위해 서비스워커를 종료한다

## Service Worker Overview Image
![ServiceWorker Lifecycle](/Users/user2/Documents/Programming/TIL/progressive_web/sw-lifecycle.png "Title")
