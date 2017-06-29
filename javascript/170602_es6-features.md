## var vs let, const
- let
  - 한번 선언한 값에 대해서 다시 선언 불가능

  ```js
  let a;
  let a; // ERROR: Uncaught SyntaxError: Identifier 'a' has already been declared
  ```

  - 대입 값 변경은 가능

  ```js
  let a;
  a = 10;
  a = 20;
  ```

  - 호이스팅 적용 안됨

  ```js
  console.log(a); // undefined
  var a;

  console.log(a); // Error: Uncaught ReferenceError: a is not defined
  let a;
  ```

  - 변수 유효범위가 `{}` 안으로 지정

  ```js
  let a = '1';
  console.log(a); // 1

  if (true) {
    let a = '2';
    console.log(a) // 2
  }

  console.log(a); // 1
  ```

- const
  - 한번 값을 대입하고 나서 변경 불가능

```js
function f() {
  {
    let x;
    {
      // this is ok since it's a block scoped name
      const x = "sneaky";
      // error, was just defined with `const` above
      // x = "foo";
    }
    // this is ok since it was declared with `let`
    x = "bar";
    // error, already declared above in this block
    // let x = "inner";
    x = "foo";
  }
}
```

## Fat Arrows
- function 의 축약형

```js
// ES5
var arr = ["a", "b", "c"];
arr.forEach(function (value) {
  console.log(value);
});

// ES6
var arr = ["a", "b", "c"];
arr.forEach((value) => console.log(value));
```

- 객체 property 의 값으로 사용 불가능

```js
// function ()
var myObj = {
    a: 1,
    b: 2,
    c: function () {
      return this.a + this.b;
    }
};
console.log(myObj.c()); // 3;

// Fat Arrow
var myObj = {
    a: 1,
    b: 2,
    c: () => {
        return this.a + this.b;
    }
};
console.log(myObj.c()); // NaN
```

## Promise
> A promise is an object that may produce a single value some time in the future

- 비동기 함수를 순차적으로 처리할 수 있는 객체를 의미
- node.js 에서 `promise` 를 코어로 구현하였음

---
- 실제 js 앱 로직의 대부분의 작업은 비동기 방식이다.

```js
function getWeatherInfo() {
  $("#btn").click(function () {
    $.get('temperature.json', function (data1) {
      $.get('precipitation.xml', function (data2) {
        // ...
      });
    });
  })
}
```

- ES5 Promise 의 resolve, reject 의 방식을 then 의 success, fail 콜백으로 변환
- 주목 : **`then()` , `catch()` 로 프로미스를 간편하게 사용할 수 있게 되었다** 는 점

---
#### then()
Promise 객체의 resolve() 메서드 결과 값에 반응하는 콜백함수

```js
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

```js
promise.then(function(result) { // 성공 콜백
  console.log(result); // "Stuff worked!"
}.catch(function(err) { // 실패 콜백
  console.log(err); // Error: "It broke"
}));
```

---
then 을 아래와 같이 또 다른 then 으로 연결할 수 있다.

```js
getJSON('story1.json').then(function(story1data) {
  console.log(story1data);
  return getJSON('story2.json');
}).then(function(story2data) {
  console.log(story2data);
})
```

```js
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});
```

---
[promise-chain](/Users/gihyojoshuajang/Documents/Programming/TIL/javascript/images/promise-then-catch-chain.png)

---
#### catch()
Promise 객체의 reject() 메서드 결과 값에 반응하는 콜백함수

```js
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Done!'); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });

// From the console:
// 'catch: Done!'
```

---
## 참고
- [ES6 Features, Babel](https://babeljs.io/learn-es2015/#ecmascript-2015-features-symbols)
- [var, let, const](http://blog.nekoromancer.kr/2016/01/26/es6-var-let-%EA%B7%B8%EB%A6%AC%EA%B3%A0-const/)
- [Promise, david walsh tutorial](https://davidwalsh.name/promises)
- [Promise Medium](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
- [Promise 한글](http://programmingsummaries.tistory.com/325)
