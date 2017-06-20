# Simple Push App with Service Worker & Manifest

---
## 개요
- 앞에서 배운 Service Worker 를 활용하여 Push Messaging 구현방법 학습
- Firebase Cloud Messaging 서비스를 활용하기 위한 기본절차 학습
- Push 메시지 수신이 가능한 간단한 앱을 구현 및 호스팅 실습

---
## 목차
- PWA 의 Push API & Notification API 소개
- Push 알람 사례 및 활용 방안
- 일반적인 모바일 Push 알람 구조
- PWA 의 Push 알람 구조
- Firebase Cloud Messaging 서비스 소개
- 구현할 샘플 서비스의 구조
- 구현절차 - 실습

---
## PWA 의 Push API & Notification API 소개
- 모바일에서만 가능했던 Push 알람 기능을 API 로 간단하게 구현 가능
- 브라우저 기반 Push 알람. Windows & Mac & [Android](https://www.youtube.com/watch?v=PaIh3ty5gT0) 에서 동작
- 구현하기 위해서는 Service Worker 를 필수로 구현해야 한다.

![mobile-push-noti](mobile-push.png)

---
## Push 알람 사례 및 활용 방안
- Facebook 새 게시글 알람

![facebook-sw-push.png](sw-push.png)

- Twitter Lite [소개 영상](https://blog.twitter.com/official/en_us/topics/product/2017/introducing-twitter-lite.html). [Case Study](https://developers.google.com/web/showcase/2017/twitter)
- Alibaba [Case Studies](https://developers.google.com/web/showcase/2016/alibaba)
- [Wego](https://developers.google.com/web/showcase/2017/wego) (PWA + AMP + Web Payment + Credential API)

---
## 일반적인 Mobile Push 알람 구조
- Android : GCM (Google Cloud Messaging) & FCM
- iOS : APNS (Apple Push Notification Service) & FCM

![gcm-architecture](gcm-archi.png)

---
## PWA 의 Push 알람 구조
- FCM : GCM 의 최신버전으로 Mobile + Web 모두 지원

![fcm](fcm.png)

---
## Firebase Cloud Messaging 서비스 소개
- Mobile & Web Push 알람을 위한 콘솔창 제공
- Push 등록된 기기에 대한 정보 및 알림 전송 기능
- 보낸 Push 메시지에 대한 분석 기능 제공
- 가능한 프로토콜 HTTP & XMPP (미들웨어 메시징 프로토콜)

---
## 오늘 구현할 샘플 서비스 구조
-

---
## 1. 기기별 Push Key 값 등록
- Firebase 초기 config 에서 **messagingSenderId** 값을 복사

```js
var config = {
  // ...
  messagingSenderId: "800635767370"
};
```

- App Manifest Json 파일에 **gcm_sender_id** 속성 생성 후 값 붙여넣기

```json
"gcm_sender_id": "800635767370"
```

---
## 2. Firebase 애플리케이션 server public key 획득
- Firebase console 에서 해당 프로젝트의 설정으로 이동
- 클라우드 메시징의 **Server Key** 활용

---
## Subscribe 시 기존 예제의 public key 제외

```js
swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    // 아래는 public 키 생성 예제 사이트를 참고할 때 필요
    // applicationServerKey: applicationServerKey
})
```

---
## 3. 웹 사이트의 Push 알림 설정 확인

![push-permission-check](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/4th_week/images/push-permission-check.png)

---
## 참고
- [Push Web App Code Labs](https://developers.google.com/web/fundamentals/getting-started/codelabs/push-notifications/?hl=ko)
- [JS Client Cloud Messaging Config](https://firebase.google.com/docs/cloud-messaging/js/client)
- [Push Notifications on the Open Web](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web)
