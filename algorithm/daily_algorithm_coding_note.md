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
