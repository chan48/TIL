# 크롬 플러그인의 content_scripts.js 분석

## 사이트 별로 다른 Content Script 적용

  ``` json
  "content_scripts": [
    {
      "matches": ["http://www.google.com/*"],
      "css": ["mygooglestyles.css"],
      "js": ["jquery.js", "mygooglescript.js"]
    },
    {
      "matches": ["http://www.yahoo.com/*"],
      "css": ["myyahoostyles.css"],
      "js": ["jquery.js", "myyahooscript.js"]
    }
  ],
  ```

## Content Script 의 jQuery 사용
- content_script.js 에서 jquery로 DOM 을 접근하면, 크롬 익스텐션에서 정의한 popup 페이지에 대한 DOM 접근을 한다.

  ``` json
  "browser_action": {
    "default_popup": "popup.html"
  },
  "content_scripts": [
    {
      "matches": ["http://*/*","https://*/*","<all_urls>"],
      "js": ["js/jquery.js","js/content_script.js"]
    }
  ]
  ```

  ``` html
  <head>
    <script src="js/jquery.js"></script>
    <script src="js/content_script.js"></script>
  </head>
  <body>
    <div id='product_name'>Injecting Product Name....</div>
    <!-- ... -->
  </body>
  ```

  ``` javascript
  // content_script.js
  function onWindowLoad() {
    console.log("팝업 페이지의 DOM 접근 : ", $("#product_name").text());
    // 위 결과는 위 html 파일에서 product_name 아이디의 태그 값인 Injecting Product Name.... 이 된다.
  }

  window.onload = onWindowLoad;
  ```

- `manifest.json` 파일의 js 속성을 위처럼 `jquery.js, content_script.js` 로 지정하면 content_script 에서 $ 연산자 사용이 가능하고, ajax 콜도 가능하다.


## conent script.js 코드 파편
- 아래 코드는 참고

  ``` javascript
  document.addEventListener('DOMContentLoaded', function() {
    console.log("content loaded");
    console.log("Meta description property : ", $('meta[property="og:description"]'));
  });
  ```
