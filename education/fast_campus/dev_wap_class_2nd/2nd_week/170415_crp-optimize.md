<!-- $size: 16:9 -->
<!-- page_number: true -->
# 브라우저 동작과정 최적화

---
<!-- footer : 브라우저 동작과정 최적화 - 프론트엔드 개발자를 위한 웹앱 프로젝트 CAMP -->
## 개요
- 브라우저의 기본적인 동작과정을 이해하고, 페이지 첫 렌더링을 빠르게 하기 위한 방법들을 학습한다.
- 화면 렌더링을 방해하는 CSS 와 DOM 생성을 방해하는 JS 를 이해한 웹앱 설계 방법을 학습한다.
- 화면 렌더링 속도를 향상시킬 수 있는 preload scanner, async, media query 에 대해서 학습한다.

---
## HTML - DOM 최적화
- 브라우저에 전송한 HTML 파일이 작으면 작을수록 다운로드 시간이 짧다.
- HTML 파일에 작성된 주석의 경우, 개발자에게 도움되지만 실제로 브라우저 입장에서는 의미가 없는 데이터
- 따라서 [minification](https://www.npmjs.com/package/html-minifier), [compression](https://htmlcompressor.com/compressor/), [cache](https://developer.mozilla.org/ko/docs/Web/HTTP/Caching) 등을 이용하여 html 파일 최적화를 진행해야 한다.

[Online Minifier](http://www.willpeavy.com/minifier/)

---
## 화면 렌더링을 방해하는 CSS 최적화
- 브라우저가 웹 페이지를 그리기 위해서는 HTML 다운로드 후, CSS 속성을 적용하고 나서 Render Tree 를 생성
- **따라서 CSS 는 브라우저의 화면 렌더링을 방해하는 요소로 분류 - Render Blocking**

---
#### Media Query 를 활용한 CSS 최적화
- CSS 를 로딩할 때 한번에 모두 로딩해야 할 때가 있지만 반대로 print 와 같이 특정 환경일 경우 선택적으로 로딩하는 것이 좋다.
- media query 값으로 초기 렌더링에 필요한 부분과 점진적으로 로딩할 부분을 구분

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="style-print.css" media="print">
```

---
- media query 값으로 `print` 를 지정하고 `@media print { }` 를 활용하여 분리

```css
/*style.css*/
body {
  font-size : 14px
}

@media screen and (orientation: landscape) {
  .menu {
    float: right
  }
}

/*style-print.css*/
@media print {
  body {
    font-size: 10px
  }
}
```

> **초기 렌더링에 관여하는 css 만 로딩하는 것을 원칙으로 스타일시트 작성**

---
#### Media Query 란?
- 기기의 너비, 높이, 방향, 해상도, 유형 에 따라 스타일을 변경할 수 있는 CSS 필터
- `@media (query)` 형태

```css
@media (max-height: 667px) {
  .navbar {
    display: inline-block;
  }
}
@media screen and (min-width: 1100px) {
  .navbar {
    display: none;
  }
}
@media print {}
```

[미디어 쿼리 적용된 사이트 분석](https://responsivedesign.is/examples/)

---
## 파싱을 방해하는 JS 최적화
자바스크립트는 아래와 같이 DOM 과 css 를 모두 조작할 수 있다.

```javascript
var span = document.getElementsByTagName('span')[0];
span.innerText = "faecam";
span.style.display = "inline";
```

---
아래와 같은 이유로 자바스크립트는 HTML -> DOM 파싱을 방해한다. **Parser Blocking**

```html
<p>
  The world's best
  <script type="text/javascript">
    document.write(" private academy - ");
  </script>
  Fast Campus
</p>
```

---
- 브라우저가 HTML 을 파싱하여 DOM 을 생성하는 와중에 script 를 만나면 js 의 실행이 끝날 때 까지 DOM 생성을 멈춘다.

```html
<p>
  The world's best
  <script src="loop.js"></script>
  Fast Campus
</p>
```

```js
// loop.js
for (var i = 0; i < 50000; i++) {
  console.log(i + " 번 반복");
}
document.write(" private academy - ");
document.querySelector('span').style.color = "blue";
```

[위 코드 결과 확인](https://joshua1988.github.io/DevCampWAP-BCO/js-parser-block/crp-optimize.html)

---
코드를 실제 실행해보면 알 수 있듯이 Javascript 는 DOM 생성을 방해하는 Parser Blocking.
- js 를 요청, 다운로드, 실행시간이 길 경우 HTML 을 파싱하여 DOM 을 생성하는데 악영향을 미친다.
- 때에 따라서는 인라인 자바스크립트가 성능에 도움이 될 수 있지만, 앱의 규모가 커졌을 때 동일 코드를 반복 작성하거나 실행하여 역효과가 발생

---
## css 스타일 시트와 js 실행과의 관계
웹 개발시 아래와 같은 상황에서 css 스타일 속성과 js 실행과의 관계를 파악해보자.

```html
<style src="style.css"/>
<!-- p { color : black } -->

<p>
  Performance optimization
  <script type="text/javascript">
    var e = document.getElementsByTagName("p")[0];
    e.style.color = "red";
  </script>
  is essential
</p>
```

- 렌더링 과정 : DOM 생성 -> CSSOM 생성 -> Render Tree 생성 -> Layout 조정 -> Paint
- 따라서, DOM 생성 중간에 마주치는 script 에 DOM 의 스타일 적용과 관계된 코드가 있을수도 있으니, js 실행 자체를 모든 css 스타일 시트를 로딩하고 나서야 동작한다.
---
- 결론적으로 실행 순서는 아래와 같다.

![css-stylesheet-js-exec](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/css-stylesheet-n-js-exec.png)

이처럼 **css 는 렌더링과 js 실행을 모두 방해**하기 때문에 css 를 최적화 하는 것이 중요하다.

---
## 실습 퀴즈 #1
- 아래 [소스](https://github.com/joshua1988/DevCampWAP-BCO/blob/master/optimize/quiz1/index.html)를 최적화 해봅니다.

```html
<html>
  <head>
    <title>web perf - Quiz</title>
    <link rel="stylesheet" href="style.css">
    <script>
      getCurrentDate();
    </script>
  </head>
  <body>
    <p>
      Welcome to Web Application Project class
    </p>
    <div>
      <img src="dog.png" alt="삽살개">
    </div>
  </body>
</html>
```

---
## 퀴즈 풀이
- 위 스타일 시트를 외부 파일로 로딩하지 않고, `style` 태그를 이용해 인라인으로 만들면 http 요청을 줄일 수가 있다.
- getCurrentDate() 는 함수 명에서도 볼 수 있듯이, 페이지 렌더링과 관계된 js 가 아니므로 렌더링을 방해하지 않는다.

**결론 : 인라인 css 를 이용하여 렌더링 속도를 향상**

---
## Async 와 onload event 활용
#### onload Event
- js 에 DOM 이나 CSS 조작하는 코드가 없다면 초기 렌더링에 포함되지 않도록 설정이 필요
- 아래는 onload event 를 활용한 방법으로 페이지가 로딩되고 나면 자바스크립트를 실행

```html
<script>
  function load() {
    console.log("load event detected!");
  }
  window.onload = load;
</script>

<body>
  <p>...</p>
  <div>...</div>
</body>
```

---
#### async
- 렌더링을 방해하지 않는 또다른 js 설정 방법은 `async` 속성을 아래와 같이 script 에 추가하는 것

```html
<script src="non-parser-blocking.js" async></script>
```

> 참고 : CSSOM 생성도 방해하지 않으나 다만 인라인 스크립트에는 적용 불가능

---

- async 속성은 네트워크 요청을 날린 후 응답까지 기다리지 않고 DOM 생성을 계속 진행

![async-vs-defer](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/script-async-defer.png)

---
## 간단한 퀴즈 #2
- 아래 그림에서 inline 스크립트와 async 속성을 가진 스크립트를 찾아보세요.

	![inline-block-async 35%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/inline-block-async.png)

---
## 중간정리
지금까지 배운 최적화 기법을 정리해보면,

- 바이트 최소화, 파일 압축, 파일 캐쉬
- 초기 렌더링을 지연시키는 CSS 요소를 최소화 (media query, inline css)
- HTML 파일 파싱을 지연시키는 js 요소를 최소화 (async, inline)

이를 종합해보면 아래와 같이 요약된다.

1. 서버로 보내는 바이트 숫자를 줄인다.
2. 렌더링에 방해되는 요소들을 줄인다.
3. 렌더링을 하기 위한 단계들을 줄인다.

---
## 주요 렌더링 요소 측정법

![basic-crp](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/2nd_week/images/crp-measure.png)

- 렌더링을 위해 필요한 자원의 수 (Critical Resources) : 2
- 렌더링을 위해 필요한 파일 크기 (Critical KB) : 9KB
- 렌더링을 위해 거쳐야 할 단계의 수 (CRP Length) : 2 (왕복)

---
## Preload Scanner
- Preload Scanner 를 이해하기 위해 브라우저에서 웹 페이지가 동작하는 방식을 보면
  1. **HTML 문서를 다운** 후 **브라우저가 파싱** 시작
  2. DOM 생성 중에 **외부 스타일 시트 (css)** 를 만나면 **네트워크 요청**을 서버에 보낸다.
  3. **css 를 다운로드 하는 동안, DOM 생성을 계속 진행**하다가 외부 js 스크립트 파일을 만난다.
  4. 외부 css 파일과 마찬가지로 **외부 js 파일을 다운 받기 위한 네트워크 요청을 발생**
  5. 다운로드 하고 나서 **실행할 때 까지 DOM 생성을 멈춘다.**

- (Q) 위와 같은 동작방식에서 예상되는 문제점은 무엇입니까?
  - (A) 외부 파일이 많을수록 네트워크 왕복 요청에 허비되는 시간이 많아짐

---
- **Preload Scanner 는 이를 해결하기 위해 메인 파서 이외에 보조 light weight 파서를 이용해서 js, css, img 등을 미리 다운로드**
- 따라서, 외부 js 다운로드시 메인 파서가 멈춰 있더라도 백그라운드에서 보조 파서를 이용하여 향후 지연이 발생될만한 요소들을 제거한다.

---
Preload Scanner 적용 방법은

```html
<link rel="dns-prefetch" href="hostname_to_resolve.com">
<link rel="subresource"  href="/javascript/myapp.js">
<link rel="prefetch"  href="/images/big.jpeg">
<link rel="prerender"  href="//domain.com/next_page.html">
```

- `dns-prefetch` : 해당 파일의 DNS Resolving 을 미리 해놓고 나중에 사용한다. (DNS Resolving 시간이 단축되어 더 빠른 로딩 가능)
- `subresource` : 현재 페이지를 위한 리소스 요청을 최대한 빨리 한다. (Chrome 만 가능)
- `prefetch` : 다음 페이지 탐색을 위한 리소스를 미리 다운받고 캐쉬에 저장하여 사용
- `prerender` : href 에 설정된 페이지를 미리 렌더링 해놓고, 필요할 때 지연없이 바로 화면에 표시

---
## Quiz #3
[간단한 웹 페이지](https://github.com/joshua1988/DevCampWAP-BCO/blob/master/optimize/quiz3/index.html)

- 위 코드의 동작과정을 분석하고, 다이어그램을 그려보자.
- 렌더링을 하기 위한 단계들을 파악하고, 최적화 할 부분들을 찾아본다.
- 마지막으로 크롬 개발자 도구의 Network 패널을 이용하여 최적화 전 / 후 타임라인을 스크린샷 후 이미지 명명 'final'

[위 페이지 결과](https://joshua1988.github.io/DevCampWAP-BCO/optmize/quiz3/index.html)

---
제출 방법
1. https://github.com/joshua1988/DevCampWAP-BCO 접속 후 fork
2. fork 한 repository 다운로드
3. `optimize/quiz3/index.html` 파일 최적화 전 / 후 성능 스샷
4. 스샷한 최적화 파일 이미지 이름은 `final` 로 저장
5. pull request 제목은 `이름 - 렌더링 최적화` 으로 하여 전송

---
## 과제 - 최종 프로젝트
[최종 프로젝트 - 웹 페이지](https://joshua1988.github.io/DevCampWAP-BCO/final/optimize.html)

1. 크롬 개발자 도구의 Timeline 으로 사이트를 분석 후 문제점 파악후 기술
2. HTML 파일의 문제점들을 고쳐서 Github Page 를 이용해 웹 사이트를 배포 (이전 파일, 이후 파일 구분)
3. 배포 후 사이트 링크 제출

---
## 참고
- [Website Performance Optimization - Udacity](https://classroom.udacity.com/courses/ud884)
- [Performance - Web Fundamentals](https://developers.google.com/web/fundamentals/performance/?hl=ko)
- [Preload Scanner, Ilya](https://docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o/present?slide=id.g33211238_0_2)
- [High Performance Networkin, Ilya](https://www.igvita.com/posa/high-performance-networking-in-google-chrome/)

---
<!-- footer : -->
# 끝
