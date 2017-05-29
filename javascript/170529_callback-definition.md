## Javascript Callback 이란?
- 함수의 인자로 다른 함수의 인자가 전달되어, 특정 로직이나 동작이 수행되면 반사적으로 실행되는 구조

## Callback 함수 간단한 예제
- jQuery

```js
$('#btn1').click(function () {
  alert("clicked");
});
```

- 내장 API

```js
var arr = [1, 2, 3, 4];
arr.forEach(function (value, index) {
  console.log("arr[" + index + "] : " + value);
});
```

- 대표적인 Callback - Promise

```js
p.then(function () {
  // 성공시 콜백
}, function () {
  // 실패시 콜백
})
```

---
## 참고
- [first class function, Wikipedia](https://en.wikipedia.org/wiki/First-class_function)
- [Callback Function, MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [Promise, MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using Promise, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
