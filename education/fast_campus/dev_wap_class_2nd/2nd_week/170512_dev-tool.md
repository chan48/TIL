<!-- $size: 16:9 -->
<!-- page_number: true -->
# Chrome Developer Tools

---
<!-- footer : Chrome Developer Tools - 프론트엔드 개발자를 위한 웹앱 프로젝트 CAMP -->
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
- `Show Device Frame` 기능은 PT 제작시 유용
- `Show Media Query` 로 RWD Layout 설계시 이용
- `More Tools - Search` 원하는 요소를 빠르게 검색 가능

	![디바이스 모드 35%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/tools/device-mode.png)

---
## 요소 검사 (Elements)
- 로딩된 사이트의 DOM 요소와 CSS 속성보기 및 변경이 가능하다.
- 워크스페이스에 별도로 추가하지 않는 한 새로고침하면 변경된 내역이 사라진다.
- 상속된 스타일은 `inherited from ~`, cascading 로 재정의 된 규칙은 *취소선*
- 요소 오른쪽 클릭 후 `Scroll Into View` 로 해당 위치 바로가기

	![요소 20%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/tools/ele-inspect.png)

---
## 콘솔 (Console)
- 웹 페이지의 로그 (Timestamp 옵션)를 확인할 수 있는 패널
- 자바스크립트 코드 실행이 가능하다
- 콘솔 clear 단축키 : Windows `Ctrl + l` , Mac `Cmd + k`
- `console.group()` - `console.groupEnd()` 그룹 단위로 로그 출력
- `console.error()`, 빨간색 에러 메시지 출력

	![콘솔 50%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/console-log.png)

---
## 소스 (Sources)
- 로딩한 웹 페이지의 자바스크립트를 디버깅 할 수 있는 패널
- 하단의 `{}` 를 이용하면 minified 버전의 소스를 보기 좋게 정렬
- [디버깅 실습](https://joshua1988.github.io/DevCampWAP-DevTools/js-debug/index.html)

	![소스 50%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/tools/source.png)

---
## 네트워크 (Network)
- 웹 페이지와 관련된 네트워크 요청들을 확인할 수 있는 패널
- 웹 페이지를 로딩하기 위해 필요한 순서들 (서버 요청, 스크립트 실행, 이미지, HTML 다운로드) 을 모두 확인할 수 있고 각 파일들의 상세한 정보까지 확인 가능
- `Capture screenshots` 를 활성화 하여 페이지의 로딩과정을 촬영할 수 있다.
- `Throttling` 과 `disable cache` 기능을 이용하면 저 사양 모바일 기기에서의 웹 페이지 로딩을 체험 가능

---
- [실습 예제](https://joshua1988.github.io/DevCampWAP-DevTools/network/index.html)
	- 실습 순서 #1, 웹 페이지 로딩과정 확인
	- 실습 순서 #2, 스크린샷 및 Throttling 활성화
	- 실습 순서 #3, `DOMContentLoaded` 에 주목하여 페이지 렌더링 방해 요소 파악 (script, request for image, jpg to svg). [실습 답안](https://joshua1988.github.io/DevCampWAP-DevTools/network/index-complete.html)

	![네트워크 50%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/tools/network.png)

---
## 퍼포먼스 (Performance)
- 사이트 로딩, 화면 렌더링 등 모든 활동들의 기록을 측정하고 분석하는 패널
- 브라우저 렌더링에 관한 과정을 직접 눈으로 확인할 수 있다.
- [성능 측정 실습](https://joshua1988.github.io/DevCampWAP-DevTools/network/index-complete.html)

	![성능 30%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/tools/performance.png)

---
## 메모리 (Memory)
- 페이지 성능과 관계된 메모리 릭(leak) 등의 이슈를 진단할 수 있는 패널
- 타임라인 패널의 `Memory` 옵션을 활용하여 추이를 보는 것이 더 효과적

	![메모리 50%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/tools/memory.png)

---
## 어플리케이션 (Application)
- 웹 스토리지, 쿠키, 세션 등의 저장소와 PWA의 주요 기능들을 확인할 수 있는 패널
- [Alibaba](http://www.alibaba.com/) 로 Application 패널 실습

	![sw 50%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/tools/application.png)

---
## 보안 (Security)
- 개인정보 보안이나 인증서와 관계된 사항을 확인할 수 있는 패널
- [HTTPS 사이트](https://www.google.com)
- [Non HTTP 사이트](http://www.stealmylogin.com/)
	![보안 50%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/tools/security.png)

---
## 마무리
- 웹 개발자, 웹 디자이너에게 필수 도구인 크롬개발자 도구
- 웹 페이지 성능 최적화를 위한 기능들은 숙지

---
## 참고
- [Chrome Developer Tools - Docs](https://developers.google.com/web/tools/chrome-devtools/)
- [Dev Tools Tutorial - Code School](https://www.codeschool.com/courses/discover-devtools)

---
<!-- footer : -->
# 끝
