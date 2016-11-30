# Spring Rest Controller

## Pass javascript's object to spring rest controller with POST
- javascript 의 post 요청을 받을 때, 아래와 같이 데이터 타입을 유의해야한다.

```javascript
// 잘못된 경우
fetch('/solutionpot/push/subscription', {
  method: 'post',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: {
    "key"   : "123",
    "value" : "col"
  }
})

// 올바른 경우
var data = {
  "key"   : "123",
  "value" : "col"
};

fetch('/test/132', {
  method: 'post',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify(data) // JSON.stringfy() 를 이용에 주의
})
```

> 위처럼 javascript 상에서 json 객체의 형태로 보낸다고 하더라도 Spring REST Controller 에서 content-type 을 application/json 했을 때, 자바스크립트의 값을 꼭 JSON 형태의 문자열로 변환 해줘야 **Required request body is missing** 이라는 오류메시지가 콘솔에 나타나지 않는다.

## javascript POST ajax & fetch 요청을 Spring REST Controller 에서 받기
- 어느 형태의 javascript object 도 받을 수 있는 REST 의 구조는 다음과 같다.

```java
@RequestMapping(value="/push/subscription", method=RequestMethod.POST, headers = {"content-type=application/json"})
@ResponseBody
public PushSubscription updateSubscription(@RequestBody Map<String,String> data) {
  // javascript 객체가 다음과 같을경우
  // var data = {
  // "test" : "123"
  // };

  logger.info(" data : " + data.get("test")); // 123을 리턴한다.
  // ...
}
```
