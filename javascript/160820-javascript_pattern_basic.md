# Javascript Pattern 기초
> 이 글은 *JavaScript Patterns
Build Better Applications with Coding and Design Patterns* 책을 학습 후 중요 부분을 요약한 것입니다.

## Basics
- 전역변수 사용 최소화
- var 선언 1회
- 루프내 length 캐쉬 사용
- 코딩 규칙 준수

## 전역변수 사용 최소화
- 네임스페이스 패턴 & 즉시 실행함수 사용
- 아래와 같은 안티패턴은 피한다.

  ``` javascript
  function foo () {
    var a = b = 0;
  }
  ```

  위는 이렇게 바꿔야 한다.

  ``` javascript
  function foo () {
    var a, b;
    a = b = 0;
  }
  ```

- 전역객체 접근방법

  ``` javascript
  var global = (function() {
    return this; // new 와 생성자를 이용하지 않고 호출하면 this는 항상 전역객체를 가리킨다.
  }());
  ```

- 단일 var 패턴

  ``` javascript
  function func () {
    var a = 1,
        b = 2,
        sum = a + b,
        myobject = {},
        i,

        // 변수를 선언할 때는 항상 초기값을 같이 지정하는 습관을 들인다.
  }
  ```

  위와 같은 코드 기법은 코드 작성량과 전송량이 모두 줄어드는 이점이 있다.

## For 루프
- 아래의 코드는 루프 순회시마다 배열의 length에 접근하는 문제점이 있다 (일반적으로 length 접근은 비용이 크다)

  ``` javascript
  for (var i = 0; i < array.length; i++) {
    //
  }
  ```

  위 코드를 아래와 같이 바꾼다.

  ``` javascript
  for (var i = 0, var max = array.length; i < max; i++) {
    //
  }
  ```

  또한 이를 단일 var 패턴과 조합하면,

  ``` javascript
  function looper () {
    var i = 0,
        max,
        array = [];

    for (i = 0, max = array.length; i < max; i++) {

    }
  }
  ```

  가 될 수 있다.

## For-in 루프
- 객체를 순회할 때 사용하는 함수

  ``` javascript
  var man = {
    hands: 2,
    legs: 2,
    heads: 1
  };

  if (typeof Object.prototype.clone === "undefined") {
    Object.prototype.clone = function () {};
  }
  ```

- 위 코드의 경우 for-in 루프를 사용할 때 주의할 점은

  ``` javascript
  // 안티패턴
  for (var variable in object) {
    console.log(i, ":", man[i]);
  }
  // 콘솔 출력 내용
  // hands : 2
  // legs : 2
  // heads : 1
  // clone function()
  ```

- 프로토타입 체인에 따라 상속받은 메서드를 의도치 않게 출력하였다. 따라서 이는 아래와 같이

  ``` javascript
  // 올바른 패턴
  for (var i in man) {
    if (man.hasOwnProperty(i)) {
      console.log(i, ":", man[i]);
    }
  }
  // 콘솔 출력 내용
  // hands : 2
  // legs : 2
  // heads : 1
  ```

## Switch
- 아래의 패턴으로 가독성을 향상시킬 수 있다.

  ``` javascript
  var inspect_me = 0,
      result = '';

  switch (inspect_me) {
    case 0:
      result = "zero";
      break; // 각 case문에 break 반드시 포함
    case 1:
      result = "one";
      break;
    default: // switch 문 안에 default 는 반드시 포함
      result = "unknown";
  }
  ```

## 들여쓰기
- 중괄호 `{ }` 의 안에 있으면 들여쓴다.
- 중괄호 `{` 시작의 위치는 개발자마다 아래와 같이 2가지로 분류된다.

  ``` javascript
  // (1)
  if (true) {
    // body
  }
  // (2)
  if (true)
  {
    // body
  }
  ```
- 위의 (2) 경우가 아래와 같은 문제를 만들 수 있다.

  ``` javascript
  function func () {
    return
    {
        name : "Bat"
    };
  } // 결과값 : undefined
  ```

- 자바스크립트는 행 종료시 자동으로 세미콜론을 추가하기 때문에 위의 코드는 결국 아래와 같다.

  ``` javascript
  function func () {
    return undefined;
    {
        name : "Bat"
    };
  } // 결과값 : undefined
  ```

- **결론 :** 여는 중괄호 `{` 는 항상 선행하는 명령문과 동일한 라인에 두어야 한다.

  ``` javascript
  function func () {
    return {
        name : "Bat"
    };
  } // 결과값 : {name : "Bat"}
  ```

## 공백
- 문어체 영어는 *쉼표*와 *마침표* 뒤에 공백을 둔다.

  ``` javascript
  // (1)
  for (var i = 0, max = 10; i < max; i += 1) {

  }
  // (2)
  var a = [1, 2, 3];
  // (3)
  var o = {a: 1, b: 2};
  // (4)
  myFunc (a ,b ,c)
  // (5)
  function myFunc() {}
  // (6)
  var myFunc = function () {};
  ```

- 공백을 많이 사용하여 코드의 가독성을 높이면, 코드의 Byte 양이 늘어나는 부작용이 있다.
- 이는 compression을 이용하여 해결한다. (빌드용 & 배포용 나눌 것)

## 명명규칙
- 생성자 함수의 첫 글자는 대문자로
- 카멜 표기법 (camel case) : 각 단어의 첫 글자만 대문자 `firstName`
- 언더스코어 표기법 (underscore) : 단어를 _로 잇는다. `first_name`

## 주석작성
- 코드내 주석으로 API 문서를 자동화 해주는 툴은 [jsdoc](http://code.google.com/p/jsdoc-toolkit/) 과 [yuidoc](http://yuilbrary.com/projects/yuidoc/) 이 있다.

## 코드압축
- 압축도구는 아래와 같은 작업으로 코드 Byte 양을 줄인다.
  1. *공백, 줄바꿈, 주석* 등을 제거한다.
  - *매개변수 길이* 를 줄인다.
  - **전역변수** 를 바꾸는 경우 코드를 망가뜨릴 수 있으므로, 보통 **지역변수** 를 바꾼다.
- **미리부터 압축된 코드를 작성하려는 것은 잘못된 생각!!**

## 요약
- 전역변수 사용 최소화
- 함수 내 var 선언은 1회
- 내장 생성자의 프로토타입은 확장하지 X
- 공백, 중괄호 규칙 준수
- 명명 규칙 준수
