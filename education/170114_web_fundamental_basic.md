<!-- $size: 16:9 -->
<!-- page_number: true -->
---
# 비 개발자를 위한 웹 개발 기초

---
## 웹은 무엇인가?
- 사용자가 원하는 정보를 얻기 위해 직접 먼 곳을 가지 않고도 언제 어디서든지 접근이 가능하게 하는 기술
	- 과거 : 서울에서 광주의 맛집을 알기 위해서는 직접 여기저기 돌아다녀보고 먹어봐야한다.
	- 현재 : 네이버와 같은 검색포털을 이용하여 맛집 블로그의 정보를 둘러보고 간접체험을 통해 지식을 습득.

---
## 웹은 어떻게 돌아갈까?
- 브라우저에 사이트 주소 입력 -> 입력한 주소에 해당하는 데이터를 찾음 -> 데이터를 브라우저 화면에 표시 -> 사용자가 해당 사이트 내용을 확인

---
## 웹 동작방식 (기술 관점)
1. 사용자가 웹 브라우저에서 사이트 주소를 입력한다.
2. 사이트 주소에 해당되는 Server IP 를 접근한다. (DNS - Domain Name System 라는 친구가 도와줌)
3. 해당 Server 에 도달하면 사용자가 원하는 정보를 찾아 다시 사용자에게 돌려준다.
4. Server 에서 받은 정보를 화면에 뿌리고 그 화면이 Naver 메인 페이지가 되어 사용자에게 보여진다.

---
## 웹 개발 기술
- HTML5 : 화면에 나타나는 요소 (텍스트 또는 이미지 등)
- CSS3 : 화면에 나타나는 요소를 이쁘게 꾸미는 기술
- Javascript : 화면에 나타나는 요소의 동작을 제어

---
- HTML 예시

  ``` html
  <button>Click me</button>
  ```

- CSS 예시

  ``` css
  button {
      color : red;
  }
  ```

- Javascript 예시

  ``` javascript
  function clickButton() {
      alert("you clicked it");
  }
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
  - CSS3 : text color, img border
  - Javscript : button action, facebook comment plugin

---
- 이미지 모서리 효과

``` css
img {
  border-radius: 25px;
}
```

- 텍스트 컬러 효과

``` css
p {
  color : blue;
}
```

- 버튼 클릭 효과

``` javascript
<button onclick="clickButton()">click</button>
<script>
function clickButton() {
  alert("좋아요");
}
</script>
```

---
- 웹 개발 실습 1 (자기소개 페이지)
  - HTML5 : p, br, img, button 태그
  - CSS3 : text color, img border
  - Javscript : button action, facebook comment plugin

---
- 웹 개발 실습 2
  - jQuery : ajax 를 이용한 페이지 부분 갱신
  - DB : 데이터 호출 및 화면 표시
  - Node : 클라이언트 - 서버 통신 및 데이터 베이스 연결

---
## 참고 : 웹 동작방식 관련 용어들
  - 클라이언트
  - 서버
  - 웹 브라우저
  - IP
  - DNS
  - URL

---
