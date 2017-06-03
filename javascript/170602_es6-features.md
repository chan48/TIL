## var vs let, const
- let :
- const :

```js
function f() {
  {
    let x;
    {
      // this is ok since it's a block scoped name
      const x = "sneaky";
      // error, was just defined with `const` above
      // x = "foo";
    }
    // this is ok since it was declared with `let`
    x = "bar";
    // error, already declared above in this block
    // let x = "inner";
    x = "foo";
  }
}
```

## Fat Arrows
- function 의 축약형

```js
// ES5
var arr = ["a", "b", "c"];
arr.forEach(function (value) {
  console.log(value);
});

// ES6
var arr = ["a", "b", "c"];
arr.forEach((value) => console.log(value));
```

- **기존 function this 의 범위가 바뀌었다는 것을 코드로 예제 작성**

```js

```

## 참고
- [ES6 Features, Babel](https://babeljs.io/learn-es2015/#ecmascript-2015-features-symbols)
- [var, let, const](http://blog.nekoromancer.kr/2016/01/26/es6-var-let-%EA%B7%B8%EB%A6%AC%EA%B3%A0-const/)
-
