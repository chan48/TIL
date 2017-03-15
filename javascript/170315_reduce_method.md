## Javscript Reduce 함수
- 자바스크립트 Reduce 메서드는 함수 프로그래밍의 기본입니다.
- 이 글에서는 Reduce 가 어떻게 동작하고, 언제 사용하고, 어디에 활용할 수 있는지 알아봅니다.

## 기본적인 환산
- 여러 금액을 배열로 갖고, 모든 금액을 더하고 싶을 떄 사용하세요.


```javascript
const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount);
sum // 118.11
```


- ㄴ

## 참고
- [원문](https://medium.freecodecamp.com/reduce-f47a7da511a9#.5vhi7uyhx)
