# 인사이드 자바스크립트 정리
## 자바스크립트 타입
기본 타입
1. Number - 실수, 부동소수점 64비트(double)
2. String - 문자열
3. Boolean - True, False
4. undefined - 변수에 값이 할당되지 않을 때 인터프리터가 undefined 로 할당. 값이자 타입
5. null - 개발자가 의도적으로 할당하는 값. typeof 값이 Object 로 반환. 따라서 === 로 확인

```js
var nullCheck = null;
console.log(typeof nullCheck === null); // false
console.log(nullCheck === null); // true
```

참조 타입(객체 타입)
1. Object
2. Array - 배열도 객체로 취급
3. Function - 함수도 객체로 취급

## NaN (Not a Number)
수치 연산을 해서 정상적인 값을 얻지 못할 때 발생하는 에러

```js
console.log(1 - 'hello'); // NaN

var foo = {
  name: 'foo',
  major: 'cs'
};
foo['full-name'] = 'ffoo';
console.log(foo['full-name']); // 'ffoo'
console.log(foo.full-name); // NaN, 프로퍼티명이 연산자를 포함할 경우
```

## delete 연산자
객체 프로퍼티를 삭제하는 기능. 객체 삭제는 불가능

```js
// 1. 객체 프로퍼티를 삭제
var foo = {
  name: 'foo',
  nickname: 'pangyo'
};

delete foo.nickname;
console.log(foo.nickname);
console.log(foo); // {name: "foo"}
```

```js
// 2. delete 로 객체를 삭제할 경우 (변화 없음)
var foo = {
  name: 'foo',
  nickname: 'pangyo'
};

delete foo;
console.log(foo); // {name: "foo", nickname: "pangyo"}
```

## 객체의 모든 연산은 참조 값을 처리
값 비교시에 사용하는 == 를 적용한 예제를 보자.

```js
var a = 10;
var b = 10;

var objA = {
  value: 100
};
var objB = {
  value: 100
};
var objC = objB;

console.log(a == b); // true
console.log(objA == objB); // false
console.log(objB == objC); // true
```

## Array 랑 Object 구분 방법

```js
var arr = [];
var obj = {};

arr.constructor.name; // "Array"
obj.constructor.name; // "Object"
```

## delete & splice 연산자 in 배열
배열에서 delete 를 사용하면 요소의 값만 undefined 로 변경하고, 해당 요소 index 를 지우지는 않는다.

```js
var arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, undefined × 1, 3]
```

반대로 splice 는 해당 요소 전체를 아예 드러낸다.

```js
var arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr); // [1, 3]
```

## typeof 연산자
각 데이터 타입에 대한 typeof 수행결과는 다음과 같다.

```js
var num = 10;
var str = "a";
var boolean = true;
var obj = {};
var undefined;
var nullValue = null;
var arr = [];
function func() {};

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof boolean); // boolean
console.log(typeof obj); // object
console.log(typeof undefined); // undefined
console.log(typeof nullValue); // object (null 은 object)
console.log(typeof arr); // object (배열도 object)
console.log(typeof func); // function
```

## == 연산자와 === 연산자
== 와 === 의 가장 큰 차이점은 값 뿐만 아니라 타입까지 체크하느냐이다.
또한 == 는 수행시에 타입이 다를 경우 타입을 일치시켜 값을 비교하는 특징이 있다.

```js
console.log(1 == '1'); // true
console.log(1 === '1'); // false
```

## 실행 컨텍스트를 이해하기 위한 문제
비동기 실행 방식인 setTimeout 를 이용한 예제이다.

```js
console.log("1");
function exec() {
  setTimeout(function() {
    console.log("2");
  }, 3000);
  setTimeout(function() {
    console.log("3");
  }, 0);
  console.log("4");
  setTimeout(function() {
    console.log(5);
  }, 1000);
}
console.log(exec()); // 1, 4, 3, 5, 2
```

setTimeout 이 지연시간이 0 이라고 할지라도 실행 컨텍스트가 다르기 때문에 1,4 가 먼저 출력된다.

이번엔 for 문과 setTimeout 이다.

```js
var i;
for (i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 5, 5, 5, 5, 5
  }, 1000);
}
```

위 코드를 실행시켰을 때, 이 코드가 실행되는 메인 컨텍스트와 setTimeout 이 실행되는 컨텍스트가 다르기 때문에
일반 프로그래밍 지식 관점에서는 0,1,2,3,4 이라고 추측하겠지만, 실제로는 for 문의 실행이 모두 끝난 후에
setTimeout 의 콜백 함수가 실행되기 때문에 숫자 5가 다섯 번 출력된다.

## 함수 호이스팅

```js
add(2, 3); // add is not a function
var add = function (a, b) {
  return a + b;
};
add(4, 5);
```

위 코드의 실행 결과는 **add is not a function** 이다.
위 코드를 실행할 때 자바스크립트 엔진 관점에서 호이스팅을 적용하여 코드 순서를 변경해보면 아래의 결과가 된다.

```js
var add;
add(2, 3);
add = function (a, b) {
  return a + b;
};
add(4, 5);
```

## 함수의 length 속성

```js
function func1(a) { return a; }
function func2(a, b) { return a + b; }
function func3(a, b, c) { return a + b + c; }

console.log('func1 length : ' + func1.length); // func1 length : 1
console.log('func2 length : ' + func2.length); // func2 length : 2
console.log('func3 length : ' + func3.length); // func3 length : 3
```

## prototype & constructor

```js
function func() {
  return true;
}
console.log(func.prototype);
console.log(func.prototype.constructor);
```

## 즉시 실행 함수
함수를 정의함과 동시에 바로 실행하는 함수. 함수를 다시 호출할 수 없다는 특징이 있다.
따라서, 최초 한 번의 실행만 요구되는 초기화 코드에 적합하다.
jQuery 와 같은 오픈소스 라이브러리들의 구조.

```js
(function (name) {
  console.log('This is the immediate function : ' + name);
})('foo');
```

## 내부 함수
함수의 내부에 정의한 함수

```js
function parent() {
  var a = 10;
  var b = 20;

  function child() {
    var b = 30;
    console.log(a);
    console.log(b);
  }
  child();
}
parent(); // 10, 30
child(); // child is not defined
```

## 클로져
실행이 끝난 함수의 스코프를 참조할 수 있는 함수 **(정의 더 가다듬을 필요 있음)**

```js
function parent() {
  var a = 'Parent is done';
  function child() {
    console.log(a);
  }
  return child;
}
var closure = parent();
closure();
```

위 내부함수의 정의대로라면 parent 의 내부함수인 child() 는 외부에서 접근이 불가능하다.
하지만 return 값에 child 를 넘김으로써 외부에서도 child 를 호출할 수 있게 된다.
따라서, child() 에서 parent 의 값을 참고하고 있다면, child() 를 밖에서 호출함으로써
parent() 의 변수에 접근이 가능하게 된다. 이것이 **클로져**

## map() 구현


```js
// definition
Array.prototype.myMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

//tests
var arrs = ['dic tanin', 'boo radley', 'hans gruber'];
var numbers2 = [1, 4, 9];

var goodT = arrs.myMap(function(n) {
    return n;
});

var squareRoot = numbers2.myMap(function(num) {
    return Math.sqrt(num);
});

console.log(goodT); // [ 'dic tanin', 'boo radley', 'hans gruber' ]
console.log(squareRoot); // [ 1, 2, 3 ]
```
