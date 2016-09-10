# Javascript Pattern 함수
## Background
- 자바스크립트의 함수는 일급 객체다.
- 함수는 유효범위를 갖는다.
- 함수는 다음과 같은 특징을 갖는 객체다.
  - 프로그램 실행(런타임) 중에 동적으로 생성한다
  - 변수에 할당할 수 있고, 다른 변수에 참조를 복사할 수 있고, 확장가능하고, 삭제할 수 있다.
  - 다른 함수의 인자로 전달할 수 있고, 다른 함수의 반환 값이 될 수 있다.
  - 프로퍼티와 메서드를 가질 수 있다.
- **자바스크립트에서 함수는 하나의 객체**
- 자바스크립트는 *중괄호* `{}` 의 유효범위가 함수 내부를 제외하곤 없다.

### 용어
- 기명 함수 (named function expression)

  ``` javascript
  var add = function add (a, b) {
    return a + b;
  };
  ```

- 무기명 함수 (unnamed function expression) & 함수 표현식 (function expression)

  ``` javascript
  var add = function (a, b) {
    return a + b;
  };
  ```

- 함수 선언문 (function declaration)

  ``` javascript
  function foo() {
    // body
  }
  ```

## 콜백 패턴
- 함수는 객체이기 때문에 아래처럼 함수를 다른 함수에 콜백 형태로 전달할 수 있다.

  ``` javascript
  function writeCode (callback) {
    callback();
  }

  function introduceBugs () {
    // body...
  }
  writeCode(introduceBugs);
  // ! introduceBugs() 를 넘기게 되면 함수가 호출이 되므로 함수의 참조값만 넘긴다.
  ```

- 대부분의 클라이언트 브라우저 프로그래밍은 event-driven 방식 : `Don't call us, we'll call you`
- 아래는 타임아웃에 관한 안티패턴이다.

  ``` javascript
  var thePlotThickens = function () {
    console.log('500ms later...');
  }
  setTimeout(thePlotThickens(), 500); // 안티패턴
  // setTimeout(thePlotThickens, 500) 처럼 함수 포인터만 넘겨줘야 한다.
  ```

## 함수 반환하기
- 함수 반환의 간단한 예

  ``` javascript
  var setup = function () {
    alert(1);
    return function() {
      alert(2);
    };
  };

  var my = setup(); // alert(1)
  my();             // alert(2)
  ```

- 함수 반환에서 사용되는 클로저의 예

  ``` javascript
  var setup = function() {
    var count = 0;
    return function () {
      return (count += 1);
    };
  };

  var next = setup();
  next(); // 1
  next(); // 2
  next(); // 3
  ```

## 자기 자신을 정의하는 함수
- 새로운 함수로 자기 자신을 덮어쓰는 경우 : **어플리케이션 성능에 많은 도움이 된다**

  ``` javascript
  // Lazy Function Definition : 사용 시점 전까지 함수를 정의하지 않고 있다가, 호출된 이후에는 더 적게 일한다.
  var scareMe = function () {
    alert("Boo!");
    scareMe = function () {
      alert("Double boo!");
    };
  };

  scareMe();  // Boo!
  scareMe();  // Double Boo!
  ```

- scareMe() 함수를 일급객체로 사용하는 예

  ``` javascript
  scareMe.property = "properly";
  var prank = scareMe;v
  var spooky = {
    boo: scareMe;
  };

  prank();  // Boo!
  prank();  // Boo!
  console.log(prank.property); // "properly"

  spooky.boo(); // Boo!
  spooky.boo(); // Boo!
  console.log(spooky.boo.property); // "properly"

  scareMe();  // Double Boo!
  scareMe();  // Double Boo!
  console.log(scareMe.property);  // undefined
  ```

## 즉시 실행 함수
- 즉시 실행함수는 선언됨과 동시에 실행된다. **자기 실행함수** 라고도 한다.
- 즉시 실행함수의 패턴은 다음과 같다.
  1. 함수를 함수 표현식으로 선언한다 (var a = function(){}; 타입으로는 동작하지 않는다.)
  2. 함수 마지막에 괄호쌍을 추가한다.
  3. 전체 함수를 괄호로 감싼다.

- 즉시 실행함수는 코드 안의 모든 코드를 지역 유효범위로 감싸고, 어떤 변수도 전역 유효범위로 새어나가지 않게 한다.

  ``` javascript
  (function () {
    var days = ["Sun", "Mon"];
        today = new Date();
        msg = "Today is" + days[today.getDay()];

    alert(msg);
  }());

  // days, today, msg 변수들의 범위는 모두 전역이 아니다.
  ```

- 즉시 실행함수의 매개변수는 다음과 같이 전달한다.

  ``` javascript
  (function (who, when) {

    console.log("I met " + who + " on " + when);

  }("Joe Black", new Date()));
  ```

- 일반적으로 즉시 실행함수에는 매개변수를 많이 전달하지 않는게 코드 가독성에 도웅이 된다.

## 즉시 실행함수의 반환 값
- 다른 함수와 마찬가지로 즉시 실행함수도 값을 반환할 수 있고, 변수에 할당할 수 있다.

  ``` javascript
  var result = (function() {
    return 2 + 2;
  }());

  var getResult = (function () {
    var res = 2 + 2;
    return function () {
      return res;
    };
  }());
  ```

- 장점과 사용방법 : 선언된 모든 변수는 스스로를 호출하는 함수의 지역변수가 되기 때문에, 임시 변수가 전역 공간을 어지럽힐까 걱정하지 않아아도 된다.

## 즉시 객체 초기화
- 아래 패턴은 객체가 생성된 즉시 객체를 초기화 한다.

  ``` javascript
  ({
    maxWidth: 600.
    maxHeight: 400,

    gimmeMax : function () {
      return this.maxWidth + "x" + this.maxHeight;
    },
    init : function () {
      console.log(this.gimmeMax());
    }
  }).init();
  ```

- 위 패턴의 장점은 초기화 하는 동안, 전역 네임스페이스를 보호할 수 있다.
- 위 패턴의 단점은 자바스크립트 compression 시에 즉시 실행 함수 패턴에 비해 효과적으로 압축하지 못할 수 있다. 왜냐하면 비공개 프로퍼티와 이름이 더 짧게 변경되지 않는 것이 compression 도구 관점에서는 안전하기 때문.

## 초기화 시점의 분기
- 초기화 시점의 분기(로드타임 분기)는 각각 브라우저의 기능을 확인하는 최적화 패턴이다.
- 아래 코드처럼 각 브라우저의 기능 지원범위를 확인할 수 있다.

  ``` javascript
  var utils = {
    addListener: function (el, type, fn) {
      if (typeof window.addEventListener === 'function') {
        el.addEventListener(type, fn, false);
      } else if (typeof document.attachEvent === 'function') {
        el.attachEvent('on' + type, fn);
      } else {
        el['on' + type] = fn;
      }
    },
    removeListener: function (el, type, fn) {
      // ...
    }
  };
  ```

- 브라우저의 기능은 독립적으로 변하기 때문에, 상기 코드로 초기화 시점 분기를 사용해 기능 지원여부를 판단한다.

## 설정 객체 패턴
- 설정 객체 패턴은 좀 더 깨끗한 API 를 제공하는 방법. 라이브러리나 reuse 컴포넌트를 만들 때 유용하다.
- `addPerson()` 이라는 함수를 만들 때, 인자수가 많아지면 다음과 같이 `addPerson("First Name", "Last Name", ...)` 함수 선언이 길어지므로 아래와 같은 패턴을 사용한다.

  ``` javascript
  addPerson(conf);
  var conf = {
    userName : "batman",
    first: "Bruce",
    last: "Wayne"
  };
  ```

- 위 패턴의 장점은
  1. 매개변수와 순서를 기억할 필요가 없다.
  2. 선택적인 매개변수를 안전하게 생략이 가능하다.
  3. 매개변수 추가 제거가 편하다.

- 위 패턴의 단점은
  1. 매개변수의 이름을 기억해야한다.
  2. 프로퍼티의 이름은 압축되지 않는다.

## 커리 (Curry)
### 함수 적용
- 순수한 함수형 프로그래밍에서 함수는 호출된다고 표현하기 보다 적용된다고 표현한다.
- 자바스크립트에서도 `Function.prototype.apply()` 를 이용하여 함수를 적용할 수 있다.

  ``` javascript
  var sayHi = function (who) {
    return "Hello" + (who ? ", "+ who : "") + "!";
  };

  sayHi();        // "Hello"
  sayHi("World"); // "Hello, World"
  sayHi.apply(null, ["hello"]); // "Hello, hello!"
  ```

- apply 의 첫 번째 매개변수가 null 이면 this 는 전역 객체를 가리킨다.

  ``` javascript
  var alien = {
    sayHi: function(who) {
      return "Hello" + (who ? ", " + who : "") + "!";
    }
  };

  alien.sayHi("world"); // "Hello, world!"
  sayHi.apply(alien, ["humans"]); // "Hello, humans!"
  ```

- 이 코드에서 sayHi() 내부의 this 는 alien 을 가리킨다. 앞선 예제의 this 는 전역 객체를 가리킨다.
- call() 메서드 역시 apply() 메서드와 비슷하며, 함수의 매개변수가 하나일 때는 굳이 배열을 만들지 않고 아래와 같이 call() 을 이용한다.

  ``` javascript
  sayHi.apply(alien, ["humans"]); // "Hello, humans!"
  sayHi.call(alien, "humans");    // "Hello, humans!"
  ```
