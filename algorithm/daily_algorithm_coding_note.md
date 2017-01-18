# Array
## Array.map()
- [참고](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Array.reduce()
- [참고](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Array.unshift()
- 배열의 맨 처음에 element 를 추가해준다.

``` javascript
var arr = ["2", "3", "4"];
arr.unshift("1");
// ["1", "2", "3", "4"]
```

## Array.splice()
- 배열의 특정 위치에 특정 요소를 삽입한다.

``` javascript
var arr = ["1", "2", "3", "4"];
arr.splice(1, 0, "1");
// ["1", "1", "2", "3", "4"]
```

## Array.indexOf()
- 배열에서 입력받은 매개변수 값에 해당하는 인덱스 값을 반환한다.

``` javascript
var arr = ["a", "b", "c"];
arr.indexOf("b"); // 1
```

## Array.forEach()
- 배열의 인덱스를 접근하는 반복문
- 일반 for 반복문보다 95% 느리다.
- IE 하위 버전에서는 호환되지 않는 경우가 있다.

``` javascript
var arr = ["a", "b", "c"];
arr.forEach(function (a) {
  console.log(a);
});
// a
// b
// c
```

## Array.join()
- 각 배열의 인덱스 값을 모두 합쳐서 한 길이의 문자열로 만든다.

``` javascript
var arr = ["Hello", "World", "!"];
arr.join(""); // "HelloWorld!"
```

## Array.indexOf()
- 입력된 값의 배열 인덱스를 반환해준다.
- 만약, 해당 값이 배열 안에 없다면 -1 을 반환한다.

``` javascript
var arr = ["Hello", "World", "!"];
arr.indexOf("World"); // 1
```

## Array.lastIndexOf()
- indexOf 는 앞에서부터 시작하지만, lastIndexOf 는 뒤에서부터 탐색한다.

``` javascript
var arr = ["Hello", "World", "!", "World"];
arr.indexOf("World"); // 3
```

## Array.filter()
- 해당 배열의 필터 조건에 해당되는 배열을 반환하여준다.

``` javascript
var arr = [0, 0, 2, 0, 1];
arr.filter(function (x) { return x === 0; }); // [0, 0, 0]
arr.filter(function (x) { return x !== 0; }); // [2, 1]
```

## Array.pop(), push()
- Stack 의 pop, push 를 생각하면 된다.
- 배열의 원소를 꺼내고 (pop), 원소를 추가 (push) 하는 메서드다.
- 주의할 점은 if 와 같은 조건문에서 메서드를 수행하더라도, 기존 배열에 원소의 추가, 삭제가 그대로 반영된다.

``` javascript
var arr = ["1", "2", "3"];
arr.pop(); // "3"
arr.push("3"); // ["1", "2", "3"]

// pop, push 메서드 사용시 주의할 점 (조건문 안에 사용될 경우)
if (arr.pop() == "3") arr.push("4"); // ["1", "2", "4"]
```

## Array 배열 스트링 값의 인덱스 접근
- 배열이 아래와 같이 있을 때, 각 배열 인덱스의 스트링의 문자열을 인덱스로 접근이 가능하다.

``` javascript
var arr = ["hello", "world"];
console.log(arr[0]); // hello
console.log(arr[0][0]); // h
```

- **하지만 위처럼 배열 인덱스의 문자열의 캐릭터를 인덱스로 접근하는 경우 변경은 되지 않는다.**

``` javascript
// 위와 동일
arr[0][0] = "H";
console.log(arr[0]); // hello
```

# String
## String.toLowerCase()
- 매개변수로 입력받은 값을 모두 소문자로 변경하여 반환한다.

``` javascript
var str = "Hello World";
str.toLowerCase(); // "hello world"
```

## String.split();
- 입력받은 매개변수로 문자열을 잘라 배열로 저장한다.
- "abbc" 형태의 문자열을 ["a", "b", "b", "c"] 의 배열 형태로 변경할 수 있다.

``` javascript
var str = "aabbccd";
str.split(""); // ["a", "a", "b", "b", "c", "c", "d"]

var commaStr = "a,bdf,es";
commaStr.split(","); // ["a", "bdf", "es"]
```

# Object
## Object for..in
- 해당 객체 안의 key / value 쌍을 모두 반복하여 접근한다.
- `for (var key in Object) { ... }`

``` javascript
var obj = {
  a: 2,
  b: "4",
  c: "text"
}

for (var key in obj) {
  console.log("key : " + key + ", value : " + obj[key]);
  // key : a, value : 2
  // key : b, value : 4
  // key : c, value : text
}
```
