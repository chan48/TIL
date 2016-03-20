# Hoisting

## First Video
- memory is going to be set aside for all the necessary variables and declared functions.
- Declared stuff that needs space in memory is first "hoisted" to the top of scope before any operational code is run.

Declared Function 의 경우 안에 어떤 것이 있을 지 모르기 때문에, 메모리에서 먼저 할당하는 방식이 바로 호이스팅이라고 생각하면 되겠다.

```javascript
function hoistingEx() {
    function willBeOveridden() {
        return 10;
    }
    willBeOveridden();
    function willBeOveridden() {
        return 5;
    }
}
```
위의 결과는 `5`이다. 호이스팅 (lift, raise up 과 유사어)에 의해서 밑에 정의된 함수가 결국엔 스코프에 의해 위로 올라가게 되고, 기존의 것을 덮어쓰게 된다.
- All the functions pop up to the top and they are loaded into memory and sit there waiting for us to use them


