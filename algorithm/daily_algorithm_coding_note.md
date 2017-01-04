# Array
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

##



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
