# Simple Push App with Service Worker & Manifest

---
## 개요
- 앞에서 배운 Service Worker 를 활용하여 Push Messaging 구현방법 학습
- Firebase Cloud Messaging 서비스를 활용하기 위한 기본절차 학습
- Push 메시지 수신이 가능한 간단한 앱을 구현 및 호스팅 실습

---
## 목차
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
