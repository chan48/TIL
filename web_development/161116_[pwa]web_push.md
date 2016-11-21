## Web Push Notifications 구현
- 푸쉬 메시지 전송시 사용하는 키는 Firebase 의 CloudMessaging 탭의 **Server Key** 다.

## Service Worker Pending 오류
- Service worker 등록이 제대로 안되고 Status 가 Pending 으로 남아있는 경우에는 서비스워커 자바스크립트 파일 위치를 Root Context 로 해줘야 한다.
- Chrome 개발자 콘솔의 Application 탭에서 Service Worker 를 확인할 수 있는데, 여기서 기 등록된 Service Worker 를 Unregister 해주고 페이지를 강력 새로고침 하는 것이 좋다. (아직은 브라우저에서 서비스워커 관리를 현명하게 해주는 것 같지는 않다)
