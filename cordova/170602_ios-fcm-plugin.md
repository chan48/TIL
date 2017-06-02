## iOS FCM 라이브러리 추가 및 사용 절차
- Cordova CLI 를 이용한 Cordova Project 생성

```
npm install -g cordova-cli
cordova create fcm-sample
cordova platform add ios
```

- Cordova CLI 를 이용한 FCM 라이브러리 추가

```
cordova plugin add cordova-plugin-fcm
```

- Firebase Console 에 App ID (Bundle ID) 을 이용하여 iOS App 추가
- GoogleService-Info.plist 다운받아 루트 폴더에 위치
- index.js 에 FCM Javascript API 추가

```js
FCMPlugin.getToken(function(token){
    alert(token);
});

FCMPlugin.onNotificationReceived(function (data) {
  var listeningElement = document.querySelector('.push');
  console.log("successfully received");
  listeningElement.innerText = JSON.stringify(data);
});

FCMPlugin.onNotification(function(data){
    if(data.wasTapped){
//Notification was received on device tray and tapped by the user.
      alert( JSON.stringify(data) );
    }else{
      //Notification was received in foreground. Maybe the user needs to be notified.
      alert( JSON.stringify(data) );
    }
}, function (data) {
  console.log("successfully received");
  alert(data);
  console.log(data);
}, function (err) {
  console.log("error occurs");
  console.log(err);
  alert(err);
});
```

- APNS 서비스 이용을 위해서는 애플 개발자 등록이 필수
  - App ID 등록 (Push 설정 필수)
  - Certificate 등록 (Push 설정 필수)
  - Provisioning Profile 발급
  - APNS Auth Key 추가 (최신 APNS Push 스펙으로 조건으로 보임)

- Firebase Console 의 Project Settings -> Cloud Messaging
  - 화면 아래쪽에, 앞에서 추가한 iOS 앱의 구성정보로 가면 APNs Certificate 및 Auth Key 업로드 가능. 아래 참조 가이드에 따라 해당 파일들 추가

## 참고
- [APN SSL 인증서 발급 방법, FCM](https://firebase.google.com/docs/cloud-messaging/ios/certs)
- [Cordova FCM Library](https://github.com/fechanique/cordova-plugin-fcm/)
- [Apple APNS](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html#//apple_ref/doc/uid/TP40008194-CH8-SW1)
-
