<!-- $size: 16:9 -->
<!-- page_number: true -->
# The Future of Web - Progressive Web App

---
## 목차
1. PWA 소개
2. PWA 배경
3. PWA 특징
4. PWA 사례
	- Ali Express
	- Carnival Cruise Line
	- Solution Portal
5. PWA 기술
	- Wep App Manifest (Icon, Banner)
	- Service Worker (Cache, Web Push)
6. 참고 자료

---
## 프로필
- [Captain Pangyo](https://joshua1988.github.io/)
- Open Source Contributor
	- Google Web Fundamentals (The Fundamental Knowledge for Web)
	- Google HTML5 Rocks (Top Notch Resources for Web Developer)

- Google Developer Group - Web Tech 커뮤니티 리더

---
## PWA 소개
> "Progressive Web Apps are experiences that combine the best of the web and the best of apps" - 최고의 모바일 앱과 최고의 웹 앱을 결합한 경험

---
- Progressive Web Apps 는 무엇인가?

	- 진보한 웹 앱
	- 최신 웹 기술들로 웹 앱에서도 모바일 앱과 같은 사용자 경험을 느낄 수 있는 웹앱
	- 빌드 X, 배포 X, 설치 O, 오프라인 O, 알람 O ...
	- **최적화된 웹 성능에 모바일 Native 기능을 결합한 최신 웹 앱**

---
## PWA 등장 배경
- Mobile 기기 확산으로 Mobile 사용자 증가 : PC -> Mobile 브라우저
- 양분화된 어플리케이션 시장과 개발자의 고민 : Web, Mobile, Hybrid 앱
- Hybrid 앱의 단점 : Native UI 의 성능을 따라가기가 어려움
- 번거로운 Mobile 앱 개발 주기 : 앱 개발, 빌드, 배포, 검색, 다운로드, 설치
- Offline Web App 의 필요성 : 느린 인터넷의 보급으로 Mobile Web 의 사용성 저하

---
## PWA 기술 특징
- **Responsive : PC, Mobile, Tablet 에 관계없이 해당 기기에 최적화된 UI**

![반응형디자인](C:\TIL\TIL\education\responsive.png)

---
<br>
<br>

- **Connectivity : 저속의 네트워크 환경, 오프라인 환경에서도 사용 가능**

![오프라인경험 45%](C:\TIL\TIL\education\pwa-reliable(origin).png)

---
<br>
<br>

- **App-like : Mobile App 과 동일한 실행방식 (icon) 과 사용자 인터랙션 (UX) 을 제공**

	![갤럭시 솔루션 팟 아이콘](C:\TIL\TIL\education\app-icon.PNG)

---
<br>
<br>

- **Discoverable : URL 로 사이트 접근 후 원클릭 설치 가능 (banner)**

![인스톨배너 110%](C:\TIL\TIL\education\add-to-home-screen.png)

---
<br>
<br>

- **Engageable : Push 알람으로 사용자의 재방문 유도가 용이**

![App Push 알람 50%](C:\TIL\TIL\education\web-noti.png)

---
<br>
<br>

- **Safe : HTTPS 통신으로 기밀 정보의 유지가 가능**

	![HTTPS SSL](C:\TIL\TIL\education\https.png)

---
## PWA 적용 사례
- Alibaba
  - 전세계 최대 규모의 B2B 전자상거래 시스템
  - Add-Home Screen 기능으로 모바일 Active Users 44% 증가
  - [Case Study 자료](https://developers.google.com/web/showcase/2016/pdfs/alibaba.pdf)
![참고 이미지 13%](C:\TIL\TIL\education\alibaba.png)

---
- Carnival Cruise Line
  - 세계 10대 크루저 여행사
  - Web & Mobile Push 알람을 이용하여 결제 전환율 48% 증가
  - [Case Study 자료](https://developers.google.com/web/showcase/2016/pdfs/carnival.pdf)
	![참고 이미지 50%](C:\TIL\TIL\education\carnival.png)

---
- POSCO ICT

	- 포스코 ICT 기반 솔루션 (Glue, Glue Mobile, Posbee) 기술질의 게시판
	- WebPush 알람을 이용한 기술질의 응답속도 3배 증가

	![참고 이미지 70%](C:\login.png)

---
- 기존 [Solution Portal](https://solutionpot.co.kr/) 의 문제점

	- Mobile 기기 미지원 : Mobile 게시글 확인 및 솔루션 홍보에 부적절
	- 실시간 게시글 확인 미지원 : 고객의 게시글 여부를 Manual 하게 일일이 확인해야함

	![참고 이미지 50%](C:\TIL\TIL\education\old-sp-w-frame.png)

---
- PWA 를 적용한 Solution Portal

	- Responsive : 반응형 웹 디자인을 적용한 Mobile 기기 지원

	![반응형 적용 40%](C:\TIL\TIL\education\new.png)

---
- PWA 를 적용한 Solution Portal
	- App-like : 모바일 Icon 을 이용한 사이트 접속 및 모바일 UX 제공

    ![솔루션 팟 아이콘](C:\TIL\TIL\education\app-icon.png)

---
- PWA 를 적용한 Solution Portal
	- Engageable : Web & Mobile Push 알람을 이용한 **실시간** 게시글 알림

	![알람](C:\TIL\TIL\education\chrome-push.png)

---
## PWA 주요 기술

#### Wep App Manifest (Icon & Install Banner)
- 앱 아이콘, 화면 런쳐 방식 및 배경색, 시작 페이지 등을 설정할 수 있는 JSON 파일

---
  ``` json
  {
    "short_name": "SolPot_dev",
    "name": "Solution Portal",
    "icons": [
      {
        "src": "dist/images/icons/icon-32x32.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      ...
    ],
    "background_color": "#1E88E5",
    "display": "standalone",
    "start_url": "./"
  }
  ```

---
- Web App Manifest 파일에서 지원하는 기능들

	- 홈 화면에 Web App Icon 추가
	- 사이트 방문시 하단에 설치 배너 표시 (5분 간격 2번 이상 방문시 표시됨)
	- 런쳐화면 방향, 크기, 배경색 설정

---
- 인스톨 배너를 이용한 앱 설치 및 실행
	
	- [데모](https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/)

---
- 크롬 개발자 콘솔의 Application 탭에서 디버깅 및 조작 가능

  ![개발자 콘솔](C:\TIL\TIL\education\web-app-manifest.PNG)

---
#### Service Worker (Offline, Cache, Web Push)
- 오프라인 서비스, 푸쉬 알람 등의 모바일 기능을 웹에서 가능하게 하는 코어 기술
- 브라우저의 백그라운드에서 돌아가는 script 파일, 브라우저와 네트워크의 미들웨어

---
- 웹 페이지에서 네트워크 요청 발생시 해당 요청을 가로챔
- 캐쉬가 있을 경우 즉시 로딩하여 속도가 매우 빠름

![서비스워커 흐름도 90%](C:\TIL\TIL\education\service-worker-network-falling-back-to-cache.png)

---
- 웹 페이지와는 별개의 라이프 싸이클을 가진다.

![서비스워커 라이프싸이클 80%](C:\TIL\TIL\education\sw-lifecycle.png)

---
#### Service Worker 코드
- 서비스 워커 등록 : `navigator.serviceWorker.register()`

``` javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // 등록 성공
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // 등록 실패
    console.log('ServiceWorker registration failed: ', err);
  });
}
```

---
- 서비스 워커 설치 : `self.addEventListener('install', function(event) {});`

``` javascript
var CACHE_NAME = "my-first-cache";
var cacheFiles = [
  "/",
  "/pwa.png"
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(cacheFiles);
      })
  );
  console.log("서비스 워커 설치 완료");
});
```

---
- 서비스 워커 디버깅

  - Chrome Developer Tools 의 Application 탭
  - 실행중인 서비스 워커 확인은 `chrome://inspect/#service-workers`

---
- 서비스 워커를 이용한 Push 알람 시연

	- [POSCO ICT 솔루션 포탈](https://www.solutionpot.co.kr)

---
- 서비스 워커 개발 환경

	- HTTPS 통신 + 최신 모던 브라우저

---
- 지원 브라우저

  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge
  - Opera
  - Samsung Mobile Browser
  - Safari (지원 예정)

---
## 마무리
- 아직은 디버깅이 어려운 서비스 워커
- 기 개발된 서비스에 적용하기에는 제약사항이 존재
- HTTP 와 HTTPS 의 어마어마한 차이
- 일부 모바일 앱을 대체할 수 있는 사용자 경험
- 현재 보다는 앞으로가 더 기대되는 PWA

---
## 참고 자료
- [Google Web Fundamentals](https://developers.google.com/web/fundamentals/)
- [Google HTML5 Rocks](https://www.html5rocks.com/ko/)
- [Service Worker 지원 브라우저](https://jakearchibald.github.io/isserviceworkerready/)
- [지디넷 - 오프라인 웹이 온다](http://www.zdnet.co.kr/news/news_view.asp?artice_id=20160922012153)

---
# 감사합니다.
