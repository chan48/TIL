# Javascript Int vs Float

## Hacker Rank 30 days Challenges
팁을 계산하는 기본적인 산술식의 테스트 중 오류가 있어 디버깅을 해보았다.

아래와 같은 Input 일 경우,
10.25
17
5

이 코드에서 정상적으로 돌지 않는다.
``` javascript
function processData(input) {
    //Enter your code here
    var result = input.split('\n', 3);
    var mealCost = parseInt(result[0]);
    var tipPercent = parseInt(result[1]);
    var taxPercent = parseInt(result[2]);
    var total = Math.round(mealCost + (mealCost * (tipPercent * 0.01)) + (mealCost * (taxPercent * 0.01)));
    console.log("The total meal cost is "+total+ " dollars.");
}
```

알고보니, parseInt가 커버하는 숫자의 범위를 제대로 알지 못하여서 10.25의 값이 10으로 들어가는 것을 발견하지 못한 까닭. 가장 기본적인 Int / Float 의 숫자 범위를 다시 한번 상기시켜준 예제였다.

아래 코드에서는 정상적으로 동작
```javascript
function processData(input) {
    //Enter your code here
    var result = input.split('\n', 3);
    var mealCost = parseFloat(result[0]);
    var tipPercent = parseFloat(result[1]);
    var taxPercent = parseFloat(result[2]);
    var total = Math.round(mealCost + (mealCost * (tipPercent * 0.01)) + (mealCost * (taxPercent * 0.01)));
    console.log("The total meal cost is "+total+ " dollars.");
} 
```

## What I've learned?
- 정규표현식의 .split() api : 해당 메서드르 사용하는 String에서 공백이나 줄바꿈을 찾아, 그 사이사이 값들을 array로 받아주는 api
- parseInt() : String to Int Parsing
- parseFloat() : String to Float Parsing
- Math.round() : Math 라이브러리의 반올림 메서드