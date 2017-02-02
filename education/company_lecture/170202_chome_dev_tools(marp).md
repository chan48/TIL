<!-- $size: 16:9 -->
<!-- page_number: true -->

# Chrome Developer Tools

---
## 개요
- 크롬 개발자 도구의 각 패널들의 역할과 기능을 소개
- 크롬 개발자 도구에서 자바스크립트 디버깅 방법을 설명하고 실습
- 크롬 개발자 도구에서 프로필 기능을 활용하여 사이트를 진단

---
## 크롬 개발자 도구 소개
- Google 크롬 브라우저에서 제공하는 개발자 도구
- 사이트의 요소검사, 네트워크, 타임라인, 프로필, 보안, 어플리케이션 기능 제공
- V8 자바스크립트 엔진이 탑재되어 있어 자바스크립트 코드 해석 및 실행
- Progressive Web App 의 Service Worker, Web App Manifest 파일 디버깅 가능

---
## 크롬 개발자 도구 실행방법
- 크롬 메뉴에서 **도구 더보기** -> **개발자 도구** 실행
- 웹 페이지 상에서 마우스 오른쪽 클릭 후 **검사** 실행
- Ctrl + Shift + I (윈도우) / Cmd + Opt + I (맥)
- F12 키 (윈도우)

---
## 디바이스 모드 (Device Mode)
- PC 브라우저에서 모바일 브라우저 보기가 가능하다.
- 모바일 기종, 너비, 높이 선택 가능

	![디바이스 모드 35%](C:\TIL\TIL\education\company_lecture\device_mode.png)

---
## 요소 검사 (Elements)
- 로딩된 사이트의 DOM 요소와 CSS 속성보기와 변경이 가능하다.
- 워크스페이스에 별도로 추가하지 않는 한 새로고침하면 변경된 내역이 사라진다.

	![요소 40%](C:\TIL\TIL\education\company_lecture\elements-panel.png)

---
## 콘솔 (Console)
- 웹 페이지의 로그를 확인할 수 있는 패널
- 자바스크립트 코드 실행이 가능하다

	![콘솔 40%](C:\TIL\TIL\education\company_lecture\console-panel.png)

---
## 소스 (Sources)
- 로딩한 웹 페이지의 자바스크립트를 디버깅 할 수 있는 패널
- [디버깅 실습](https://googlechrome.github.io/devtools-samples/debug-js/get-started)

	![소스 35%](C:\TIL\TIL\education\company_lecture\sources.png)

---
## 네트워크 (Network)
- 웹 페이지와 관련된 네트워크 요청들을 확인할 수 있는 패널
- [실습 예제](https://googlechrome.github.io/devtools-samples/network/gs/v1.html)
- [실습 답안](https://googlechrome.github.io/devtools-samples/network/gs/v2.html)

	![네트워크 30%](C:\TIL\TIL\education\company_lecture\network.png)

---
## 타임라인 (Timeline)
- 사이트 로딩, 화면 렌더링 등 모든 활동들의 기록을 측정할 수 있는 패널
- [타임라인 측정 실습](https://googlechrome.github.io/devtools-samples/network/gs/v2.html)

	![타임라인 35%](C:\TIL\TIL\education\company_lecture\performance.png)

---
## 프로필 (Profiles)
- 페이지 성능과 관계된 메모리 릭(leak) 등의 이슈를 진단할 수 있는 패널

	![프로필 40%](C:\TIL\TIL\education\company_lecture\memory.png)
---
## 어플리케이션 (Application)
- 웹 스토리지, 쿠키, 세션 등의 저장소와 PWA의 주요 기능들을 확인할 수 있는 패널

	![sw 40%](C:\TIL\TIL\education\company_lecture\application.png)

---
## 보안 (Security)
- 개인정보 보안이나 인증서와 관계된 사항을 확인할 수 있는 패널

	![보안 40%](C:\TIL\TIL\education\company_lecture\security.png)

---
## 마무리
- 웹 개발자, 디자이너에게 필수 도구인 크롬개발자 도구
- 웹 페이지 성능 최적화를 위한 기능들은 숙지

---
## 참고
- [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/)

---
# 끝
