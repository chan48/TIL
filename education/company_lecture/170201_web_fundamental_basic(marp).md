<!-- $size: 16:9 -->
<!-- page_number: true -->
# 비 개발자를 위한 웹 개발 기초

---
## 인터넷은 무엇인가?
- 사용자가 원하는 정보를 얻기 위해 직접 먼 곳을 가지 않고도 언제 어디서든지 접근이 가능하게 하는 기술
	- 과거 : 서울에서 광주의 맛집을 알기 위해서는 **직접** 여기저기 돌아다녀봐야함
	- 현재 : 네이버와 같은 검색포털을 이용하여 맛집 블로그의 정보를 둘러보고 **간접체험**을 통해 지식을 습득.

---
## 웹은 무엇인가?
- 인터넷을 이용하여 원거리에 있는 문서들을 열람하는 공간
	- 해당 문서들은 웹 브라우저가 해석 가능한 특정 형식으로 작성되어 있음

---
## 웹 브라우저는 무엇인가?
- 웹에 있는 문서들을 사용자가 보기 편하게 표시해주는 소프트웨어
- URL (Uniform Resource Locator) 을 통해 해당 문서에 접근이 가능하도록 구성되어있음

---
## 웹은 어떻게 돌아갈까?
1. 웹 브라우저에 사이트 주소(URL) 입력
2. 입력한 주소의 서버에서 해당 정보를 찾음
3. 해당 정보를 브라우저 화면에 표시
4. 사용자가 해당 사이트 내용을 확인

---
## 웹의 동작방식 (기술 관점)
1. 사용자가 웹 브라우저에서 사이트 주소를 입력한다.
2. 사이트 주소에 해당되는 Server IP 를 접근한다. (DNS - Domain Name System 이용)
3. 해당 Server 에 도달하면 사용자가 원하는 문서를 다시 웹 브라우저에 전송한다.
4. 웹 브라우저의 렌더링엔진에서 해당 문서를 다음과 같은 순서로 파싱
	- HTML 를 DOM (Document Object Model) 으로 변환
	- CSS 를 DOM 에 추가
	- DOM 으로 렌더트리 생성
	- 렌더트리 배치
	- 렌더트리 그리기
5. 렌더트리를 브라우저에 표시하고 사용자에게 웹 페이지로 보여준다.

---
## 웹 개발 기술
- HTML5 : 화면에 나타나는 요소 (텍스트 또는 이미지 등)
- CSS3 : 화면에 나타나는 요소를 이쁘게 꾸미는 기술
- Javascript : 화면에 나타나는 요소의 동작을 제어

---
## HTML
- Hyper Text Markup Language : 웹 페이지를 제작하기 위한 표준 언어
- Markup Lanugage : 태그를 이용하여 데이터를 구조화하는 언어
- 시작 태그 / 끝 태그 형식으로 구성

---
- HTML 예시

  ``` html
  <html>
    <head>
        <title>HTML 예시</title>
    </head>
    <body>
        <button>Click me</button>
        <!-- ... -->
    </body>
  </html>
  ```

---
## CSS
- Cascading Style Sheets : 브라우저상에서 HTML 요소들이 시각적으로 어떻게 표현되는지를 정의
- 별도의 파일로 분리하여 모든 HTML 요소에 스타일링 가능
- HTML 요소에서 직접 스타일링 가능

---
- CSS 예시

  ``` css
  button {
      color : red;
  }
  ```

- CSS 인라인 속성 예시

  ``` html
  <p style="color:red;">이 문단은 빨간색입니다.</p>
  ```

---
## Javascript
- 웹 페이지 상에서 요소들의 동작을 제어하는 스크립트 언어
- 현대의 최신 브라우저에서 지배적으로 사용하고 있음
- 과거에는 클라이언트 언어, 최근에는 풀스택 언어로 사용
- 자바와 자바스크립트는 전혀 [다른 언어](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%86%8C%EA%B0%9C#JavaScript_and_Java)
	- 자바스크립트의 초기 이름은 LiveScript 였으나 자바의 인기에 편승하기 위해 변경

---
- Javascript 예시

  ``` javascript
  function clickButton() {
      alert("you clicked it");
  }
  ```
  
  ``` html
  <button onclick="clickButton()">click me</button>
  ```

---
## 웹 개발 관련 용어들
- jQuery : javascript 를 좀 더 편하게 쓸 수 있는 기술 모음집 (라이브러리)
- 라이브러리 : 유용한 기술들을 한 곳에 모아놓고 편하게 가져다 사용할 수 있는 기술 모음집
- Angular : Google 이 만든 웹 개발 프레임워크 (웹 개발시에 일정한 룰이나 패턴을 따라 개발하도록 만든 도구)

---
## 웹 개발 실습
- 목표 : HTML5, CSS3, Javscript 를 이용하여 자기소개 페이지를 만들어보자
  - HTML5 : p, br, img, button 태그
  - CSS3 : text color, img border 속성
  - Javscript : button action 동작, facebook comment plugin 오픈 API

---
## 실습 #1 - 화면 요소 생성
- HTML 파일 생성
- html, head, body 추가
- 자기소개 내용 작성 (p, span 태그)
- 프로필 사진 추가 (img 태그)
- 좋아요 버튼 추가 (button 태그)

---
## 실습 #2 - 화면 요소 스타일링
- 텍스트 색, 버튼 배경색 변경

  ``` css
  button {
    color: white;
    background-color: #3366ff;
  }
  ```

- 버튼 모서리 효과

  ``` css
  button {
    border-radius: 5px;
  }
  ```

---
- 버튼 이미지 수직 정렬

  ``` css
  button {
    display: inline-block;
  }
  
  button img {
  	vertical-align: text-top;
  }
  ```

---
## 실습 #3 - 화면 요소 동작제어
- 버튼 클릭 이벤트 추가

  ``` html
  <button onclick="clickButton()">click</button>
  
  <script>
  function clickButton() {
    alert("프로필을 좋아합니다.");
  }
  </script>
  ```

---
## 실습 #4 - 반응형 웹 디자인 적용
- Responsive Web Design : 웹 페이지가 해당 기기의 크기에 맞춰 레이아웃이 자동 조절되는 디자인 기법

  ``` html
  <header>
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </header>
  ```

---
## 실습 #5 - Facebook Comment API
- [Github Page](https://pages.github.com/) 를 활용하여 자기소개 웹 페이지 업로드
	- [Github](https://github.com/) 가입
	- Repository 생성
	- Repository 클론
	- HTML, 이미지 파일 업로드
	- http://*username*.github.io 에서 페이지 확인

---
- [Facebook Developer](https://developers.facebook.com/) 에서 Comment API 플러그인 다운
	- [Facebook](https://www.facebook.com/) 계정 생성
	- [Facebook Developer](https://developers.facebook.com/) 에서 페이스북 계정 연동 후 App 생성
	- App 의 Settings 에서 Github Page 추가
	- Facebook SDK [설치](https://developers.facebook.com/docs/javascript/quickstart)
	- Comment Plugin [설치](https://developers.facebook.com/docs/plugins/comments/)

---
## 완성된 페이지
![완성된 화면 80%](C:\TIL\TIL\education\f_result.png)

---
## 참고 #1 - 웹 동작방식 관련 용어들
  - 클라이언트
  - 서버
  - HTTP
  - IP
  - DNS
  - URL

---
## 참고 #2 - 웹 개발 관련 사이트
- [W3C School](http://www.w3schools.com/)
- [Mozilla Developer Network](https://developer.mozilla.org/ko/docs/Web)
- [Google Web Fundamentals](https://developers.google.com/web/fundamentals/)

---
# 끝
