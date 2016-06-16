# Enterprise Hybrid Application Consulting & Supervising​

## Requirement Engineering
- 프로젝트 착수 초기에 Business Layer에서 요건 명확하게 정의하여 Native App 개발이 필요한지 확인
- 기존 플러그인 및 개발된 자원을 재활용하는 경우 초기에 추가 Native App 개발 분량을 산정하여 개발자 확보
- (예) 웹 개발자 80%  모바일 개발자 20% 비율


## Development Environment Setting
- Android SDK / ADT 실행 가능한 Windows PC
- iOS 앱 배포 가능한 XCode / Mac Book
- 커버할 Android 버전 별 Test Device
- 커버할 iOS 버전 별 Test Device
- 모바일 단말기에 앱 배포 시 서버 자원을 접근할 수 있는 WiFi


## Design Customization
- 초기 화면 설계서를 보고, 화면 성격에 따른 UI Framework 선정하는 것이 매우 중요
- Mobile First 화면이 아닌 이상, jQuery Mobile을 디자인 커스터마이징 하는 것은 매우 어려운 작업
- 디자이너 별도 고용시에는 일반 Web 퍼블리싱 방식으로 단말기별 사이즈를 고려하여 진행
- UI 화면 설계는 Web Oriented 화면이 아닌 Mobile Oriented 화면으로


## Implementation & Test
- Hybrid Application 은 일반 웹 어플리케이션 개발과 다르다
- 구현한 기능들에 대한 단위테스트는 모두 모바일 단말기(Android & iOS) 위에서 진행
- Android Application 은 Eclipse Android ADT(DDMS 콘솔)과 [Chrome 원격 디버깅](https://developer.chrome.com/devtools/docs/remote-debugging)을 활용
- iOS Application 은 XCode 콘솔과 [Safari 개발자 도구](http://geeklearning.io/apache-cordova-and-remote-debugging-on-ios/)를 활용 (iPhone 6 이상 지원)


## Application Performance Tuning
- 하이브리드 앱이란 과자상자 (Mobile) 안에 낱개로 포장된 과자 (Web Contents)가 들어 있는 구조
- Hybrid Application의 성능 개선은 마치 과자상자의 무게를 줄이는 것 과 같다.
- 따라서 과자상자가 가벼워지기 위해서는 포장된 Web Contents의 사이즈가 줄어야 한다.
- Web 자원(Javascript / HTML5 / CSS3 / Image)에 Compressing & Uglify를 이용하여 웹 어플리케이션 성능을 먼저 최대화
[Web Application Tuning Guide by Google](https://developers.google.com/speed/docs/insights/rules)
- 그 후 Mobile Application에 들어가는 Image 용량 최소화를 비롯하여 미사용 Plugin 자원들을 제거해 모바일의 앱 성능을 향상

※ WebView 렌더링의 성능에 대해서는 여기서 다루지 않는다

## Lesson & Learned
- 5 개월 프로젝트 기간 중 실질 개발 기간 1.5개월 정도
- 까다로운 고객 요구사항을 수렴하기에는 jQuery Mobile 한계가 있음
- 웹 자원 Server Side 배치가 유지보수 관점에서는 편할 수 있으나, 해외 사용자나 WAS & Infra 관점에서 독이 됌
- Native API 기능이 있는 경우에는, 프로젝트 초기 단계에 먼저 기능부터 뽑아내고, 단말기 위에서 단위 테스트 진행해가면서, 화면 개발을 진행해야 함. (우선순위 Native API 기능 > 화면 개발)
- 개발자용 테스트 계정 및 접근 권한은 미리 신청 (결재 프로세스가 매우 느림)


## Prepartion for the next project
- 자원 배포 유통경로 확보 (라이브러리 / 플러그인 수시 재배포 경우)
- Framework 자원별 형상관리 및 특히 iOS 프로젝트 소스코드 관리
