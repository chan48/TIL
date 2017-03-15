## Javascript Reduce 메서드
- 자바스크립트 Reduce 메서드는 함수 프로그래밍의 기본이다.
- 이 글에서는 Reduce 가 어떻게 동작하고, 언제 사용하고, 어디에 활용할 수 있는지 알아본다.

## 기본적인 환산
아래와 같이 여러 금액을 요소로 갖는 배열의 합을 구할 때 Reduce 메서드를 사용할 수 있다.

```javascript
const euros = [29, 41, 46];
const sum = euros.reduce((total, amount) => total + amount);
sum // 116
```

위 코드를 더 자세히 살펴보면,
- reduce() 는 total, amount 매개변수 2개를 갖는다.
- reduce() 는 for 반복문과 같이 배열의 각 요소를 반복접근한다.
- 루프 반복을 시작했을 때, total 값은 맨 왼쪽의 29 이고 amount 값은 그 바로 다음인 41 이다.
- 위 상황에서 41 을 29 에 더함으로써 total 은 70이 된다.
- 이러한 과정을 반복하여 배열 요소 전체에 대해 계산한다.
- 배열에 더 이상 접근할 요소가 없으면, total 값을 리턴한다.

## ES5 버전 Reduce 메서드
ES6 에 익숙하지 않은 분들을 위해 위 예제 코드를 ES5 버전으로 아래와 같이 변환해보았다.

```javascript
var euros = [29, 41, 46];
var sum = euros.reduce( function(total, amount){
  return total + amount
});
sum // 116
```

이 코드의 경우 ES5, ES6 의 차이가 거의 없다. const 대신에 var 를 사용하고, function 을 "fat arrow" (=>) 로 대체했을 뿐이다.
그리고 return 을 제거했다. 아래 내용부터는 더 적은 에러와 정확한 설명을 위해 ES6 를 이용한다.

## Reduce 로 평균 값 구하기
sum 을 모두 출력하여 평균 값을 구하는 대신에, 배열의 길이로 sum 을 나눠 평균 값을 구한다.
Reduce 메서드의 index, array 매개변수를 이용하면 된다.
반복문과 마찬가지로 index 는 반복이 몇 번 되었는지를 의미하고, array 는 배열 자체를 의미한다.

```javascript
const euros = [29, 41, 46];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) {
    return total/array.length;
  }else {
    return total;
  }
});
average // 38.66...
```

## Map 과 Filter
위와 같이 평균을 이용하는데 Reduce 메서드를 사용할 수 있으면 어떤 방법이든 원하는대로 Reduce 를 사용할 수 있다.

예를 들면, total 값을 두 배로 한다든지, 모든 값을 합산하기 전에 각 값을 절반으로 나눈다든지,
또는 if 문을 이용하여 값이 오직 10 이상일 때만 합산한다든지가 가능하다.



## 참고
- [원문](https://medium.freecodecamp.com/reduce-f47a7da511a9#.5vhi7uyhx)
