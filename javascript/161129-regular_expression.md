## split() 을 이용한 String reverse

``` javascript
var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
// split() returns an array on which reverse() and join() can be applied
```

## split() 을 이용한 정규표현식 적용

``` javascript
var url = "https://github.com/captain_pangyo/APIkey";
alert(url.split("captain_pangyo/")[1]); // APIkey
```

## 비단어 문자 찾는 패턴 (영숫자 제외한 특수문자 찾기)
- a to z, 0 to 9 를 제외한 특수문자나 공백을 찾으려면 `\W` 를 사용한다.

``` javascript
"HelloWorld!".search(/\W/gi); // 10
"HelloWorld!".search(/[^A-Za-z0-9_]/gi); // 10
```

## _를 포함한 단어 문자 찾는 패턴 (영숫자 찾기)
- 알파벳이나 숫자를 찾으려면 `\w` 를 사용한다.

``` javascript
"Apple".search(/\w/gi); // 0
"!!1!!".search(/[A-Za-z0-9_]/gi); // 2
```

## 특수문자 (?, &) 검색하기
- 정규표현식을 이용하여 "?" 와 같은 특수문자를 검색하려면, "\" backlash 를 이용하여 찾는다.

``` javascript
var str = "www.abc.com/?a=1";
str.match("/\?/"); // ["/"]
```

## ? 문자 역할
-

``` javascript
var a = "123abc";

// d (digital character) : 0~9 까지 해당되는 숫자 (디지털 문자)
a.match(/\d/); // "1"
a.match(/\d+/); // "abc"
a.match(/\d+?/); // "a"
```

## `/&?([^?=]+)=.+?/g` 해석
- "?" 는 영어로 quantifier 라고 한다..
- [참고](https://jex.im/regulex/#!embed=false&flags=&re=%26%3F(%5B%5E%3F%3D%5D%2B)%3D.%2B%3F)
