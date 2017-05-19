<!-- $size: 16:9 -->
<!-- page_number: true -->
# 성능 최적화 팁과 요령

---
## 목차
- Javascript Best Practices (Done)
- V8 Engines Tuning (JS) (Done)
- Compression Tuning
  - Image Compression (Done)
  - Gzip Compression (Gzip)
  - Caching

---
## Javscript Best Practices
#### 단순한 if else 구문 대신에 삼항연산자 사용

```js
var mad = true;
var hulk;

if(mad) {
  hulk = "incredible";
} else {
  hulk = "doctor";
}

// 삼항연산자 이용
var hulk = mad ? "incredible" : "doctor";
// 변수 두개 이상시, 즉시 실행함수
mad && crazy ? function () {
                 // ...
               }();
               :
               function () {
                 // ...
               }();
```

---
#### 논리 연산자 or 과 and 의 특징

```js
function addElements(element) {
  // 일반적인 유효 값 검사
  if (this.elements === null) {
    this.elements = [];
  }

  // OR 연산자를 활용한 값 검사
  this.elements = this.elements || [];
}
```

```js
var a = 10;
var b = 20;
var result1 = a && b;
console.log(result1); // 20
var result2 = b && a;
console.log(result2); // 10
```

---
#### `if - else` 와 `switch` 구문

```js
var a = 3;
if (a === 1) { }
else if (a === 2) { }
else if (a === 3) { }

switch (a) {
  case 1:
    ...
  case 2:
    ...
  case 3:
    ...
}
```

---
#### 반복문 최적화

```js
var puzzles = {
  pieces: ["A", "B", "C", "D"];
};

for (var i = 0; i < puzzles.pieces.length; i++) {
  console.log(puzzles.pieces[i]);
}
```

위 반복문에서 메모리 연산이 수행되는 부분은 다음과 같다.
1. i 값 검색
2. puzzles 객체 탐색
3. pieces 속성 탐색
4. pieces 배열 인덱스 검색
5. length 프로퍼티 검색

---
이전 반복문을 최적화 하면

```js
// 1 - x 로 불필요한 반복 접근수 감소
var x = puzzles.pieces.length;
for (var i = 0; i < x; i++) {
  console.log(puzzles.pieces[i]);
}
// 2 - 전역 변수 메모리 절약
for (var i = 0, x = puzzles.pieces.length; i < x; i++) {
  console.log(puzzles.pieces[i]);
}
// 3 - 객체 접근 연산 수 감소
var list = puzzles.pieces;
for (var i = 0, x = puzzles.pieces.length; i < x; i++) {
  console.log(list[i]);
}
```

---
#### 함수의 메서드 재활용 (상속 관점)

```js
function calculator(number) {
  this.number = number;
  this.add = function () {},
  this.sub = function () {}
}
```

```js
calculator.prototype = {
  add: function () {},
  sub: function () {}
}
```

---
## Chrome V8 Engines 의 JS 성능 최적화
#### Hidden Class 사용
- V8은 런타임시에 객체 처리를 위해 내부적으로 Hidden class를 만들어서 사용한다.
- Javascript 는 런타임시에 데이터 타입을 변경할 수 있다.

```js
// 성능 향상을 위해 엔진에서 생성하는 Hidden Class 이외에 별도의 Hidden Class 를 생성
function Point(x, y) {
  this.x = x;
  this.y = y;
}

var p1 = new Point(11, 22);
var p2 = new Point(33, 44);
// 위 p1, p2 는 위에 선언한 Hidden Class 를 공용으로 사용.
p2.z = 55;
// p2 가 바라보는 Hidden Class 가 바뀌어 별도의 Hidden Class 로 생성하여 처리해야 함
```

---
#### Array Usage
- Javascript 일반 배열의 경우 초기 값을 주는 것이 더 효과적
  - 키 값이 순서대로 정해졌을 때 사용되는 *선형 저장소*
  - 순서가 정해지지 않았을 때 사용하는 *해쉬 저장소*

```js
// 해쉬 타입 배열 저장소
a = new Array();
for (var b = 0; b < 10; b++) {
  a[0] = b;
}

// 선형 타입 배열 저장소
a = new Array();
a[0] = 0;
for (var b = 0; b < 10; b++) {
  a[0] = b;  // 배 이상의 속도가 차이남
}
```

---
- 불필요한 배열 타입 변환 및 할당을 피하기 위해 배열 선언시 리터럴로 선언

```js
var arr = new Array();
arr[0] = 0; // 일반 배열
arr[1] = 1.1; // 일반 -> Double 타입 배열
arr[2] = 2; // Double 타입 배열 -> 일반

// Javascript 는 런타임시에 타입이 변경되는 속성이 있다.
// 따라서, 배열 리터럴을 이용하여 아래와 같이 작성
var arr = [0, 1.1, 2];
```

---
#### V8 엔진의 컴파일러
- 초기 자바스크립트 언어는 인터프리터 형태, 최근에는 JS 런타임 엔진이 컴파일러를 사용
- 자바스크립트 JIT 컴파일러의 2 가지 종류
  - *Full Compiler* : 일반적인 자바스크립트 코드로 변환
  - Optimizing Compiler : 양질의 자바스크립트 코드로 변환 (더 긴 컴파일 시간)

---
#### Full Compiler
- 모든 코드에서 동작하고 빠르게 코드를 실행시키지만 코드 품질이 우수하진 않음
- 컴파일 시점에 데이터 타입에 대한 가정을 하지 않음 - 변수의 데이터 타입이 런타임시에 변경된다고 간주
- 연산시에 형변환이 자주 일어나지 않도록 주의하며 구현

```js
// 내부적으로 생성한 Hidden Class
function add(x, y) {
  return x + y;
}

add(1, 2);      // 위 함수의 타입을 숫자로 지정
add("a", "b");  // 숫자로 지정된 위 함수를 사용하지 않음
```

---
## Compression Tuning
#### Image 압축
- 불필요한 이미지 리소스 제거
- 대체 가능한 경우에는 CSS3 사용. ex) 애니메이션 등
- 이미지 안에 들어가는 텍스트 대신 웹 폰트 사용

> 효율적인 이미지 활용에 대해서 늘 재고하는 자세가 필요

---
#### Vector vs Laster
- Vector 이미지 : 선, 점 폴리곤을 이용하여 나타냄
  - ex) SVG (로고, 텍스트, 아이콘)
- Laster 이미지 : 픽셀의 값을 인코딩하여 이미지를 나타냄
  - ex) PNG, JPEG, GIF (쇼핑몰 상품이나 일반 사진)

> SVG 최적화는 [svgo](https://github.com/svg/svgo) 활용
> WebP 이미지 [참고](https://developers.google.com/speed/webp/docs/compression?hl=ko)

---
#### Image 활용

![](image-comparison)

- GIF : 애니메이션 활용에 사용
- JPEG : 압축으로 사이즈를 크게 줄일 수 있음. 품질과 사이지의 균형유지가 필요
- PNG : 고품질의 사진. 압축 불가능. 상대적으로 큰 사이즈

> 이미지 안에 들어간 텍스트는 변경이 안되므로 주의!

#### Image 크기
- 이미지 파일의 실제 크기보다 더 작게 웹페이지에 로딩되는 경우 불필요한 오버헤드가 발생

![해상도 차이에 따라 브라우저에 발생하는 불필요한 오버헤드](image-size)

- **따라서, 웹 페이지에서 보여지는 이미지 크기와 실제 이미지 크기가 최대한 같아야 한다.**

---
#### Image 최적화
- 확대 / 축소에 강한 SVG 활용
- 사이트의 특성과 요구사항에 맞게 압축을 활용
- 실제 이미지 파일 크기와 웹 페이지의 이미지 크기를 동일하게..!
- Gulp, Grunt 와 같은 자동화 도구를 이용하여 항상 이미지는 압축!

---
#### Gzip 압축
- ㄴ

#### Gzip 의 동작 원리
- Gzip 을 지원하는 브라우저에서 자원 요청 -> Gzip 설정이 된 서버에서 응답을 받아 해당 자원 반환 -> 브라우저에서 파일 수신 및 압축 해제 후 사용

#### Node.js 의 Gzip 압축
- Node.js 의 설정에 아래의 패키지를 설치하여 추가해준다.
  - Node v2.x : [gzippo](https://github.com/tomgco/gzippo)
  - Node v3.x : [compression](https://github.com/expressjs/compression)

#### Tomcat 의 Gzip 압축 설정

```xml
<Connector port="8080" protocol="HTTP/1.1" redirectPort="8443"
    URIEncoding="UTF-8"
    connectionTimeout="20000"
    compression="on"
    compressionMinSize="1024"
    noCompressionUserAgents="gozilla, traviata"
    compressableMimeType="text/html,text/xml,text/plain,text/javascript,text/css,application/javascript"/>
```

- `compression` : 압축 사용 여부. "off" (default)
- `compressionMinSize` : 압축하는 최소 파일 크기. "2048" (default)
- `noCompressionUserAgents` : 압축을 사용하지 않을 브라우저 지정. "" (default)
- `compressableMimeType` : 압축을 사용 할 파일 타입. "" (default)

#### Gzip 참고
- [Google App Engine & Node.js 가이드 참고 후 실습 예제 작성](https://github.com/h5bp/server-configs)
- [How to optimize your site with Gzip compression](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/)
- [Gzip compression](http://javascript.tutorialhorizon.com/2016/01/12/gzip-compress-cache-api-response-express/)

---
#### Caching
- 불필요한 Client - Server 간의 네트워크 왕복 요청을 줄이기 위해 필요한 기법
- 일반적으로 최신 브라우저에 모두 HTTP 캐싱이 다 구현되어 있음
- 개발자는 HTTP Header 에 적절한 캐싱 설정값을 세팅해주기만 하면 된다.

![캐쉬](C:\github\TIL\education\fast_campus\2nd_week\cache.png)

---
#### HTTP Header
- 크롬 개발자도구 Network 패널의 파일을 클릭하면 아래와 같이 표시

![Header 의 모양](C:\github\TIL\education\fast_campus\2nd_week\header.png)

---
#### E-tag
- 리소스 유효성 검사 태그로 *해당 리소스 의 갱신 필요여부를 확인*하는 지문 역할
- 웹 페이지의 리소스가 변경되지 않음을 Client - Server 간의 특정 값으로 검사
- 동작 방식
  1. Server 에서 해당 파일의 특정 해쉬값 발급
  2. Client 에서 이 해쉬값을 받아 확인 후 파일이 변하지 않으면 그대로 다시 Server 에 전송
  3. Server 에서 받은 해쉬값이 변경되지 않으면 `304 Not Modified` 반환
  4. 해당 파일을 다시 전송해서 받는 과정이 생략되어 시간과 대역폭 절약

![E-tag](C:\github\TIL\education\fast_campus\2nd_week\etag.png)

---
#### Cache-Control
- 캐싱에 대한 옵션을 설정하는 속성
- `no-cache` : 해당 리소스에 대한 확인 요청을 보내고 캐쉬를 강제
- `no-store` : 해당 리소스는 절대 캐쉬하지 않음
- `public` : 사이트 로고 와 같은 다수의 인원이 필요한 정보에 대해 캐싱 설정
- `private` : 로그인 정보와 같이 캐쉬가 필요 없는 개인정보를 다룰 때 설정. 서버와의 통신시 대역폭을 줄이기 위한 전략
- `max-age` : 서버로부터 받은 데이터의 유효시간 길이 설정 (초 단위)

![Cache Control](C:\github\TIL\education\fast_campus\2nd_week\cache-control.png)

---
## 참고
- [Web Fundamentals - Google](https://developers.google.com/web/fundamentals/performance/)
- [HTML5 Rocks - Google](https://www.html5rocks.com/en/tutorials/speed/v8/)
- [HTTP Spec - W3C](https://www.w3.org/Protocols/HTTP/Issues/cache-private.html)
- [Gzip is not enought - Youtube](https://www.youtube.com/watch?v=whGwm0Lky2s&feature=youtu.be&t=14m11s)

---
# 끝
