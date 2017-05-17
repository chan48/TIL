<!-- $size: 16:9 -->
<!-- page_number: true -->
# 브라우저 동작과정 최적화

---
## HTML - DOM 최적화
- 브라우저에 전송한 HTML 파일이 작으면 작을수록 다운로드 시간이 짧다.
- HTML 파일에 작성된 주석의 경우, 개발자에게 도움되지만 실제로 브라우저 입장에서는 의미가 없는 데이터
- 따라서 minification, compression, cache 등을 이용하여 html 파일 최적화를 진행해야 한다.

---
## Media Query 를 활용한 CSS 최적화
- 브라우저가 웹 페이지를 그리기 위해서는 HTML 다운로드 후, CSS 속성을 적용하고 나서 Render Tree 를 생성
- *따라서 CSS 는 브라우저 렌더링을 방해하는 요소로 분류*
- CSS 를 로딩할 때 한번에 모두 로딩해야 할 때가 있지만 반대로 print 와 같이 특정 환경일 경우 선택적으로 로딩하는 것이 좋다.
- media query 값으로 초기 렌더링에 필요한 부분과 점진적으로 로딩할 부분을 구분

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="style-priunt.css" media="print">
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

> 초기 렌더링에 관여하는 css 만 로딩하는 것을 기조로 유지

---
## 파싱을 방해하는 JS 최적화
- 자바스크립트는 아래와 같이 DOM 과 css 를 모두 조작할 수 있다.

```javascript
var span = document.getElementsByTagName('span')[0];
span.innerText = "faecam";
span.style.display = "inline";
```

---
- 아래와 같은 이유로 자바스크립트는 DOM 파싱을 방해한다.

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

[위 코드 결과 확인](https://joshua1988.github.io/DevCampWAP-DevTools/timeline/crp-optimize.html)
- 이와 같이 js 를 요청하여 받는 시간과 실행시간이 길 경우 HTML 을 파싱하여 DOM 을 생성하는데 악영향을 미친다.
- 때에 따라서는 인라인 자바스크립트가 성능에 도움이 될 수 있지만, 앱의 규모가 커졌을 때 동일 코드를 반복 작성하거나 실행하여 역효과가 발생

---
## css 스타일 시트와 js 실행과의 관계
- 조금 전까지 자바스크립트가 HTML 파싱을 방해한다고 배웠다.
- 이제는 실제 웹 개발에서 아래와 같은 상황이 있을 때, css 스타일 속성과 js 실행과 어떤 연관관계가 있을지 파악해보자.

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

---
- 브라우저가 페이지를 그리는 과정은 DOM 생성 -> CSSOM 생성 -> Render Tree 생성 -> Layout 조정 -> Paint 이었다.
- 따라서, DOM 생성 중간에 마주치는 script 에 DOM 의 스타일 적용과 관계된 코드가 있을지도 모르니, js 실행 자체를 모든 css 스타일 시트를 로딩하고 나서야 동작한다.
- 결론적으로 실행 순서는 아래와 같다.

![css-stylesheet-js-exec](C:\github\TIL\education\fast_campus\css-stylesheet-n-js-exec.PNG)

- 이처럼 css 는 렌더링과 js 실행을 모두 방해하기 떄문에 css 를 최적화 하는 것이 중요하다.

> CSS 는 화면 렌더링과 JS 실행을 모두 방해

---
## 퀴즈 #1
- 아래 소스를 최적화 해봅니다. [@@@ 소스 링크]()

```html
<!DOCTYPE html>
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
      Welcome to web perf class
    </p>
    <div>
      <img src="dog.png" alt="삽살개">
    </div>
  </body>
</html>
```

---
## 퀴즈 #1 풀이
- 위 스타일시트를 외부 파일로 로딩하지 않고, `style` 태그를 이용해 인라인으로 만들면 http 요청을 줄일 수가 있다.
- getCurrentDate() 는 함수 명에서도 볼 수 있듯이, 페이지 렌더링과 관계된 js 가 아니므로 렌더링을 방해하지 않는다.

> 따라서, inline style sheet 사용

---
## Async 와 onload event 활용
- 모든 js 가 html 파싱을 방해하지 않는다는 것을 방금 전 퀴즈로 확인하였습니다.
- 그렇다면 자바스크립트 실행이 DOM 이나 CSSOM 생성에 영향을 주지 않으면, 렌더링 할 때 로딩을 하지 않아도 된다고 브라우저에게 말해야 할텐데요.
- 한 가지 방법은 onload event 를 아래와 같이 이용하는 것입니다.

```html
...
<script>
  function load() {
    console.log("load event detected!");
  }
  window.onload = load;
</script>

<body>
  <p>
    ...
  </p>
  <div>
    ...
  </div>
</body>
```

- 위의 경우 로그는 페이지가 모두 로딩되고 나면 실행이 됩니다.
---
- 렌더링에 방해되지 않도록 js 를 설정하는 또 다른 방법은 `async` 속성을 추가하는 것입니다.

```html
<script src="non-parser-blocking.js" async></script>
```

- async 속성은 해당 스크립트를 가져오기 위한 요청을 날린 후 응답을 받을 때 까지 기다리지 않고, DOM 생성을 계속 진행합니다.
- async 속성을 추가하기 전에, 해당 자바스크립트에서 DOM 접근이나 css 조작을 하는지 꼭 확인합니다.
- 또한, CSSOM 의 생성도 방해하지 않고, 인라인 스크립트에는 async 속성을 붙일 수가 없습니다.

## 퀴즈
- inline / blocking / async 를 구분할 수 있도록, 크롬 개발자 도구 네트워크 패널에서 해당 이미지 스크린 샷 후 첨부

## 중간정리
지금까지 배운 최적화 기법을 정리해보면,

- 바이트 최소화, 파일 압축, 파일 캐쉬
- 초기 렌더링을 지연시키는 CSS 요소를 최소화 (media query, inline css)
- HTML 파일 파싱을 지연시키는 js 요소를 최소화 (async, inline)

이를 종합해보면 아래와 같이 요약된다.

1. 서버로 보내는 바이트 숫자를 줄인다.
2. 렌더링에 방해되는 요소들을 줄인다.
3. 렌더링을 하기 위한 단계들을 줄인다.

## 주요 렌더링 요소 측정법
아래 표를 참고

![basic-crp](C:\github\TIL\education\fast_campus\css-stylesheet-n-js-exec.PNG)

## Preload Scanner
- Preload Scanner 를 쓰기 전에 먼저 브라우저가 웹 페이지를 동작하는 방식에 대해 알아보면,
  1. HTML 문서를 다운 받고 나서, 브라우저가 파싱을 시작한다.
  2. DOM 생성 중에 외부 스타일 시트 (css) 를 만나면 이를 다운로드 하기 위해 네트워크 요청을 서버에 보낸다.
  3. css 를 다운로드 하는 동안, DOM 생성을 계속 진행하다가 외부 js 스크립트 파일을 만난다.
  4. 외부 css 파일과 마찬가지로 외부 js 파일을 다운받기 위한 네트워크 요청을 발생시키고, 다운로드 하고 나서 실행할 때 까지 DOM 생성을 멈춘다.

- 위와 같은 브라우저의 동작방식에서 예상되는 문제점은 로딩할 외부 스크립트 파일이 많을 때, 스크립트 태그를 마주칠 때마다 지연이 발생해서 전체 페이지 로딩이 더뎌진다는 점이다.
- Preload Scanner 는 이를 해결하기 위해 메인 파서 이외에 보조 light weight 파서를 이용해서 js, css, img 등을 미리 다운로드 한다.
- 따라서, 외부 스크립트를 다운로드 받을 때, 메인 파서가 멈춰 있더라도 백그라운드에서 보조 파서를 이용하여 향후 지연이 발생될만한 요소들을 제거한다.
- 사용법은 아래와 같다.

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

[참고 - 일리야 슬라이드](https://docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o/present?slide=id.g33211238_0_2)
[참고 - 일리야 성능 관련 글](https://www.igvita.com/posa/high-performance-networking-in-google-chrome/)

## 실습
- 실제 사이트의 동작과정을 분석하고, 다이어그램을 그려보자.
- 렌더링을 하기 위한 단계들을 파악하고, 최적화 할 부분들을 찾아본다.
- 마지막으로 크롬 개발자 도구의 Network 패널을 이용하여 사이트 타임라인과 비교해본다.

[실습자료 - 따로 만들어서 추가 필요](https://github.com/igrigorik/udacity-webperf/blob/master/assets/ex2-diagram.html)

## 최종 프로젝트
- [crp-repo - 커스터마이징 및 새로 추가 필요](https://github.com/udacity/frontend-nanodegree-mobile-portfolio/blob/master/index.html)
