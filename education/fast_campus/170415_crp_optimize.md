## HTML - DOM optimization
- 브라우저에 전송한 HTML 파일이 작으면 작을수록 다운로드 시간이 짧다.
- HTML 파일에 작성된 주석의 경우, 개발자에게 도움되지만 실제로 브라우저 입장에서는 의미가 없는 데이터
- 따라서 minification, compression, cache 등을 이용하여 html 파일 최적화를 진행해야 한다.

## Gzip 압축
- [Google App Engine & Node.js 가이드 참고 후 실습 예제 작성](https://github.com/h5bp/server-configs)

## CSS - Unblocking css with Media query
- 브라우저가 웹 페이지를 그리기 위해서는 HTML 다운로드 후, CSS 속성을 적용하고 나서 Render Tree 를 만들어야 한다.
- 따라서 CSS 를 렌더링 방해요소로 볼 수 있다.
- CSS 를 로딩할 때 한번에 모두 로딩해야 할 때가 있지만, 반대로 print 와 같이 특정 환경일 경우 선택적으로 로딩하는 것이 좋을 떄가 있다.
- 이를 분리하기 위해서는 media query 로 초기 렌더링을 방해하지 않을 수 있다.

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="style-priunt.css" media="print">
```

- HTML 파일에 위 태그를 포함시키고 각 css 파일의 내용을 아래와 같이 했을 때, `media` 속성으로 프린트 할 때만 두번째 css 파일이 적용된다.
- 따라서 초기 렌더링에 두 css 파일이 모두 관여하는 것이 아니라, 첫번쨰 파일만 적용된다.

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

## JS - Parser Blocking
- 자바스크립트가 DOM 과 css 를 모두 조작할 수 있다는 것을 보여주는 코드

```javascript
var span = document.getElementsByTagName('span')[0];
span.innerText = "faecam";
span.style.display = "inline";
```

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

- 브라우저가 HTML 파일을 파싱하여 DOM 을 생성하는 와중에 `script` 태그를 만나면, script 안에 들어가는 js 의 실행이 끝날 때까지 DOM 생성을 멈추고 기다린다.
- 위 예제의 경우에는 inline js 이기 떄문에 파싱 방해가 길지 않을 것으로 보이지만, 아래의 경우는 어떠할까?

```html
<p>
  The world's best
  <script src="loop.js"></script>
  Fast Campus
</p>
```

```js
// loop.js
for (var i = 0; i < 10000; i++) {
  console.log("일만번 반복");
}
document.write(" private academy - ");
```

- 이런식으로 js 실행이 오래 걸리거나, 또는 브라우저가 http 요청을 날려 js 를 받아올 때 까지의 걸리는 시간이 길다면, DOM 생성을 무한 대기 해야하는 상황이 발생한다.
- 따라서, 인라인 자바스크립트를 하는 경우에는 성능에 도움이 될 수 있지만, 애플리케이션 규모가 커져 여러 페이지에서 동일한 코드를 계속 실행하게 되면 오히려 역효과가 발생한다.

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

- 브라우저가 페이지를 그리는 과정은 DOM 생성 -> CSSOM 생성 -> Render Tree 생성 -> Layout 조정 -> Paint 이었다.
- 따라서, DOM 생성 중간에 마주치는 script 에 DOM 의 스타일 적용과 관계된 코드가 있을지도 모르니, js 실행 자체를 모든 css 스타일 시트를 로딩하고 나서야 동작한다.
- 결론적으로 실행 순서는 아래와 같다.

![css-stylesheet-js-exec](C:\github\TIL\education\fast_campus\css-stylesheet-n-js-exec.PNG)

- 이처럼 css 는 렌더링과 js 실행을 모두 방해하기 떄문에 css 를 최적화 하는 것이 중요하다.

> CSS blocks Rendering & Javascript execution.

## 퀴즈
- 아래 소스를 최적화 해봅니다.

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

- 위 스타일시트를 외부 파일로 로딩하지 않고, `style` 태그를 이용해 인라인으로 만들면 http 요청을 줄일 수가 있다.
- getCurrentDate() 는 함수 명에서도 볼 수 있듯이, 페이지 렌더링과 관계된 js 가 아니므로 렌더링을 방해하지 않는다.

> 따라서, inline style sheet 사용

## Async Javascript & onload event
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

TBD
https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css
https://classroom.udacity.com/courses/ud884/lessons/1469569174/concepts/15657086130923#
