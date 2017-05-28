<!-- $size: 16:9 -->
<!-- page_number: true -->
# Web App Manifest - Install Banner & App Icon

---
<!-- footer : Web App Manifest - 프론트엔드 개발자를 위한 웹앱 프로젝트 CAMP -->
## Web App Manifest 란?
- Progressive Web App 의 설치와 앱 구성정보를 담고 있는 **json** 형식의 설정 파일
  - 앱 아이콘, 화면 런쳐 방식 및 배경색, 시작 페이지 등을 설정할 수 있는 JSON 파일

- 앱 관련 구성정보에는 아래와 같은 항목들이 설정됩니다.
  - **Start URL** : 웹 앱이 시작되는 지점
  - **Launch Image** : 웹 앱 시작 화면
  - **Display Type** : 웹 앱의 화면 형태
  - **Display Orientation** : 웹 앱 화면 방향
  - **App Icon** : 앱 아이콘 이미지와 크기

---
## Web App Manifest 파일 구조

```json
{
  "short_name": "앱 아이콘 이름",
  "name": "하단 설치 배너에 표기될 이름 & 앱에서 검색시 키워드",
  "icons": [
    {
      "src": "dist/images/icons/icon-32x32.png",
      "type": "image/png",
      "sizes": "32x32"
    },
    {}
  ],
  "background_color": "#1E88E5",
  "display": "standalone",
  "start_url": "./"
}
```

---
## Web App Manifest 파일 등록
- 메인 html 파일의 head 에 아래와 같은 meta 태그 추가

```html
<link rel="manifest" href="/manifest.json">
```

![브라우저 별로 meta 별도로 설정해야 하나?]()

---
## Wev App Manifest 주요 구성 정보
#### 1) App Icon
- 해당 웹 사이트가 모바일 화면에서 표시될 아이콘 이미지 지정

![솔루션 포탈 아이콘 스샷]()

---

```json
"icons": [{
    "src": "images/touch/icon-128x128.png",
    "type": "image/png",
    "sizes": "128x128"
  }, {
    "src": "images/touch/apple-touch-icon.png",
    "type": "image/png",
    "sizes": "152x152"
  }, {
    "src": "images/touch/chrome-touch-icon-192x192.png",
    "type": "image/png",
    "sizes": "192x192"
  }],
```

- `src` : 로딩할 이미지 파일 경로
- `type` : 로딩할 이미지 타입
- `sizes` : 로딩할 이미지 크기

---
주의사항
- app icon 미지정시 html 파일의 `<link rel=”icon”>` 태그를 검색한다.
- Safari 의 경우 아래의 meta 태그를 head 에 별도로 추가해주어야 한다.

```html
<link rel="apple-touch-icon" href="touch-icon-iphone.png">
<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png">
<link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-retina.png">
<link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-retina.png">
```

---
#### 2) Launch Image - Splash Screen
- 웹앱이 시작될 때 거치는 시작 화면을 설정 가능
- **모바일 앱의 시작과 동일한 느낌을 가져감**
- 화면의 조합 : 아이콘 + 배경색 + 아이콘 이름

![vue-with-pwa](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/4st_week/images/splash-screen.png)

---
- 배경색 설정은 `background_color` 속성 이용

```json
"background_color": "#2196F3",
```

- 아이콘은 icon 에 지정한 이미지 중 128[dp](https://developers.google.com/web/updates/2015/10/splashscreen) = 192px 에 가장 가까운 크기로 지정
- 따라서, 192px 크기의 이미지는 꼭 지정

---
어떻게 Splash Screen 이 생성이 되는가?
  -


---
#### 3) Start URL
- 앱이 시작될 때 로딩될 페이지 위치 지정

```js
"start_url": "./"
```

- GA 분석을 위해 query string 을 뒤에 붙일 수 있다.

```js
"start_url": "index.html?launcher=homescreen"
```

---
#### 4) Display Type
- 웹앱 화면의 전체적인 모양을 정할 수 있다.
- **웹앱이 모바일 앱의 느낌을 가져갈 수 있도록 결정짓는 속성**

![구글 display 이미지](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/4st_week/images/manifest-display-options.png)

---

```json
"display": "standalone"
```

- `display` 속성을 이용하고 옵션 값은 아래와 같다.
  - `standalone` : 상단 URL 바 제거하여 네이티브 앱 느낌 제공
  - `browser` : 해당 OS 브라우저에서 웹앱 실행
  - `fullscreen` : 크롬이 아닌 기타 브라우저에서 네이티브 앱 느낌 제공 **(확인 필요)**
  - `minimul-ui` : fullscreen 과 비슷하나 네비게이션 관련 최소 UI 를 제공

![각 display 속성별 이미지 스샷 및 첨부 !!!]()

---
주의 사항 : iOS 에서 standalone 사용시
  - <a> 를 이용한 네비게이션 이동 시 새 브라우저 열기로 인해 context 을 잃게 됨.
  - 따라서, location.href 또는 SPA 를 이용한 네비게이팅으로 전체 UX 를 가져갈 필요가 있음
  - 참고 : create a SPA experience or use location.href instead of <a> links for internal navigation
          `<meta name=”apple-mobile-web-app-capable” content=”yes”>`
    [Medium 글](create a SPA experience or use location.href instead of <a> links for internal navigation)

---
- `theme-color` 를 이용하여 앱 테마 색상을 정의할 수 있다.
- *홈 화면에서 시작해야 설정한 도메인의 모든 페이지에 적용됨*

```json
"theme_color": "#2196F3"
```

---
#### 5) Display Orientation
- 화면 방향은 `orientation` 속성을 이용하고 옵션 값은 아래와 같다.
  - `portrait` : 세로 방향
  - `landscape` : 가로 방향

```json
"orientation": "landscape"
```

---
## Web App Manifest Navigation Scope
- "같은 도메인 아래의 웹 페이지들을 같은 scope 에 있다" 한다.
  - scope : 일반적인 네이티브 앱의 context 와 동일

```json
"scope" : "/myapp"
```

- scope 밖의 웹 페이지로 이동할 경우 새로운 브라우저를 실행한다.
- 위 문제를 피하는 방법으로 `<a href="">` 사용하지 않고 deep link 를 사용
- deep link 를 이용해 모바일 앱과 웹 앱 간의 매끄러운 전환도 가능

> 'deep link' : 설치된 웹 앱의 지정된 scope 안의 url 들을 지칭

---
## Web App Manifest Debugging
- 크롬 개발자 도구의 `Application tab` 을 이용하여 설정 정보 확인가능
- **앱 아이콘 설치** 등을 테스트 해볼 수 있다.

![manifest-debugging](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/4st_week/images/manifest-debugging.png)

---
## 지원되는 브라우저 (17년 5월 기준)
- Chrome 42 이상
- Firefox
- Opera
- Samsung Internet

---
## 참고
- [Web App Manifest Spec, W3C](https://www.w3.org/TR/appmanifest/)
- [Web App Manifest Spec, html5doctor](http://html5doctor.com/web-manifest-specification/)
- [Web App Manifest Spec, MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest#Splash_screens)
- [Getting Started w PWA, Eddy](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/)
- [Understanding the manifest](https://thishereweb.com/understanding-the-manifest-for-web-app-3f6cd2b853d6)
- [포켓몬 도감 PWA](http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org)

---
<!-- footer : -->
# 끝
