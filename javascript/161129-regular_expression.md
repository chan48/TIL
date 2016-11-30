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
