## Arrow Function
- 기존 자바스크립트의 함수 표현식의 역할을 하면서 더 짧은 신택스를 제공하는 ES6 의 함수다.
- 항상 익명함수로 구현이 된다.
- 기존의 함수 표현식의 문법을 좀 더 간결하게 하고자 등장한 것으로 보인다.

``` javascript
// Arrow Function 예제
var materials = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

// 기존 자바스크립트 함수표현식 사용시
var materialsLength1 = materials.map(function (material) {
  return material.length;
});

// Arrow Function 을 이용하여 function() 지정어를 별도로 사용하지 않고 구현
var materialsLength2 = materials.map((material) => {
  return material.length;
});

// 위 문법에서 {} statement 와 return 없이 간결하게 구현
var materialsLength3 = materials.map(materials => material.length);
```

## `this` 를 바인딩 하지 않는 특징
- 기존 자바스크립트에서는 아래와 같이 생성자 안에서의 this 와, 생성자 안의 메서드 함수에서 사용되는 this 의 범위가 다르다.

``` javascript
function Person() {
  // 아래 this 는 생성자 내부의 스코프롤 가짐
  this.age = 0;

  setInterval(function growUp() {
    // 위 this 와 스코프가 다름 (아래는 전역 변수)
    this.age++;
  }, 1000);
}

var p = new Person();
```

- 따라서 위의 문제를 해결하기 위해서는 기존의 `that` 변수로 해결이 가능하였다.

``` javascript
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    that.age++;
  }, 1000);
}

var p = new Person();
```

- 위와 같은 자바스크립트의 특징은 객체지향적이지 않다고 여겨졌기 떄문에, 아래와 같이 Arrow Function 이 객체 지향적 프로그래밍을 가능하게 한다.

``` javascript
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // 위 this 를 동일하게 가르킴
  }, 1000);
}

var p = new Person();
```

## Function Body
- Arrow Function 는 "간결한 바디" 또는 "블락 바디" 를 가질 수 있다.

``` javascript
// 함수표현식
var func = function(x) {
  return x * x;
}

// Arrow Function (간결한 바디)
var func = x => x * x; // "{}" 를 선언할 필요 없다

// Arrow Function (블락 바디)
var func = (x, y) => {return x + y;}; // "{}" 선언을 꼭 해줘야 한다.
```
