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

-
