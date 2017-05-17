<!-- $size: 16:9 -->
<!-- page_number: true -->
# 성능 최적화 팁과 요령

---
## 목차
- Javascript Best Practices (Done)
- V8 Engines Tuning (JS) (Done)
- Compression Tuning (Gzip)
  - Images : Logo & Icon (SVG), common - High compression (JPG)

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
#### 이미지 압축
- ㄴㅇ

---
#### Gzip 압축
- [Google App Engine & Node.js 가이드 참고 후 실습 예제 작성](https://github.com/h5bp/server-configs)
