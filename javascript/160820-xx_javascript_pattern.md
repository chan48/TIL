# Javascript Pattern

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
- 
