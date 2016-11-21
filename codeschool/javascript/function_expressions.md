# Function Expression

## First Video
```javascript
function declaredFunction(str) {
    // since its declared, this is actually loaded right when the program is run. And its loaded into memory and held there until you want to use it
},
var functionExpression = function declaredFunction(str) {
    // this will be only loaded when the program reach the line of this code.
}; // since its assigning to a var, it needs to have semicolon at the end.
```

어차피 `functionExpression("hello");` 를 사용할 것이기 때문에, declaredFunction 는 필요가 없다. 따라서 anonymous function을 사용한다. 다시 정리하면,

```javascript
var functionExpression = function (str) {
    // what a cushy job
};
```

확인창을 띄우려면?
`return confirm("questions")`

## Second Video (Passing Function Expressions As Parameters)
* map() method will always take in a funtion as a parameter, and return a new array with the results.
```javascript
var numbers = [12,4,3];
var results = numbers.map("input a function here");
```

* map() works like a loop that applies a function to each array index
map()을 사용하게 되면 위의 코드가 아래 코드의 효과를 갖게 된다.
```javascript
var results = [];
for (var i = 0; i < numbers.length ; i++) {
    results[i] = coolFunction(numbers[i]);
}
```

* 결론적으로 map() 으로 인해 코딩량을 줄일 수 있다.
> pass in : deliver or submit sth

## Third Video (How to return a function from a function)
`shift()` array의 가장 앞을 자른다.
'push()' array의 가장 맨 뒤에 데이터를 밀어 넣는다.

아래 예문은 다시 살펴봐야 할 필요성이 있다.
```javascript
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function(input, queue) {
  var length = queue.length;
  for (var i = 0; i < length ; i ++) {
    input = queue.shift()(input);
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));
```

이 문제 역시 다시 봐야할 필요가 있다. [코드스쿨 문제](https://www.codeschool.com/discuss/t/javascript-road-trip-part-3-level-1-challenge-14/10796)



