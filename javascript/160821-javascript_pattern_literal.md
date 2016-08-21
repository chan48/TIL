# Javascript Pattern 리터럴 & 생성자

> 이 글은 *JavaScript Patterns Build Better Applications with Coding and Design Patterns* 책을 학습 후 중요 부분을 요약한 것입니다.

## 객체 리터럴
- **`new Object()` 보다는 객체 리터럴 `var obj = {};` 을 활용한다.**
- 아래와 같이 생성자에 어떤 인자를 받느냐에 따라 다른 객체가 생성된다.

  ``` javascript
  // 일반 객체
  var o = new Object();
  console.log(o.constructor === Object); // true

  // 숫자 객체
  var o = new Object(1);
  console.log(o.constructor === Number); // true
  console.log(o.toFixed(2)); // "1.00"

  // 스트링 객체
  var o = new Object("I am a strong");
  console.log(o.constructor === String); // true
  console.log(typeof o.substring); // "function"

  // boolean 객체
  var o = new Object(true);
  console.log(o.constructor === Boolean); // true
  ```

- 위와 같은 이유로, Object() 생성자는 런타임시 결정되는 동적인 값이 생성자에 인자로 전달된 경우 예기치 않은 결과가 반환될 수 있다.

## 사용자 정의 생성자 함수
- 내장 생성자가 아니라 직접 사용자가 정의한 생성자 함수 호출은 다음과 같다.

  ``` javascript
  var Person =  function (name) {
    this.name = name;
    this.say = function () {
      return "I am " + this.name;
    };
  };
  ```

- 위의 함수는 사실 아래와 같다.

  ``` javascript
  var Person =  function (name) {
    // var this = {};

    this.name = name;
    this.say = function () {
      return "I am " + this.name;
    };

    // return this;
  };
  ```

- *따라서, 생성자 함수 내부의 마지막에 다른 객체가 명시적으로 반환되지 않으면, 내부적으로 this 로 참조된 객체가 반환된다.*
- 한가지 더 유의할 점은, 이 Person 함수의 say() 메서드는 객체 생성시에 항상 default로 따라 붙기 때문에 메모리 관점에서 비효율적이다. 그렇기 때문에 아래와 같이

  ``` javascript
  Person.prototype.say = function() {
    return "I am " + this.name;
  }
  ```

- 처럼 필요한 경우에 **메서드 멤버는 prototype에 추가하여 사용하는 것이 더 효율적**이다.

## 생성자의 new 강제 패턴
- 생성자의 첫 글자를 대문자로 쓰는 명명규칙을 사용하여 해당 함수는 늘 생성자로 생성한다.
- 아래와 같은 **that 사용** 으로 해당 함수를 생성자로만 사용할 수 있다.

  ``` javascript
  function Waffle () {
    var that = {};
    that.tastes = "yummy";
    return that;
  }
  ```

- 위처럼 that 을 사용하게 되면 생성자 함수를 new 로 호출하지 않더라도, 항상 생성자 함수로서 역할을 한다.

  ``` javascript
  var first = new Waffle(),
      second = Waffle();
  console.log(first.tastes); // "yummy"
  console.log(second.tastes); // "yummy"
  ```

- **주의 : 위와 같은 that 패턴은 프로토타입에 추가한 멤버를 사용할 수 없게 된다**

### 해결방법
- 위와 같은 생성자 강제 new 패턴 문제점을 해결하려면 아래와 같은 방식을 사용한다.

  ``` javascript
  function Waffle () {

    if (!(this instanceof Waffle)) {
      return new Waffle();
    }

    this.tastes = "yummy";
  }
  Waffle.prototype.wantAnother = true;
  ```

## 배열 리터럴
- **배열 또한 `var a = new Array("1", "2");` 와 같은 형식보다는 `var a = [1,2];` 배열 리터럴을 이용한다.**
- 해당 객체가 배열인지 판별하려면 `.isArray([]);` 나 `Object.prototpe.toString()`를 사용한다.

## JSON
- JSON : `JavaScript Object Notation` 의 줄임말이다.

  ``` javascript
  var json = {
    "name" : "value",
    "some" : [1, 2, 3]
  };
  ```

## 정규표현식 리터럴
- 정규표현식 생성방법은 다음과 같다.
  - `var re = /\\/gm;`
  - `var re = new RegExp("\\\\", "gm");`
- 문법
  - g : 전역 매칭
  - m : 여러줄 매칭
  - i : 대소문자 구분없이 매칭
  - 여러개 패턴 동시 사용 가능 `var re = /pattern/gmi;`

## 원시 데이터 타입 래퍼
- 자바스크립트는 *Number, String, Boolean, null, undefiend* 5개의 원시 데이터 타입이 존재한다.

## 요약
- 객체 리터럴 표기법 : 이름 - 값 쌍을 쉼표로 분리하고, 괄호로 감싸 객체를 생성한다.
- 생성자 함수 : 내장 생성자 함수와 사용자 정의 생성자, 내장 생성자는 리터럴 표기가 낫다.
- 생성자 new 강제 패턴 : 생성자 함수가 항상 new 로 호출한 것처럼 보장하는 패턴
- 배열 리터럴 표기법 : `var a = ["1", "2"];`
- 정규표현식 리터럴 : `var a = new RegExp()` 보다는 `var a = /\\gm/gim;` 리터럴 방식을 사용한다.
