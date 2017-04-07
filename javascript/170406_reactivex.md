> Reactive Programming 을 이해하기 위한 선수 지식으로
> Javascript map(), reduce(), filter() 에 대한 이해가 필요


## Reactive X 란 무엇인가?
Microsoft 에서 나온 정의를 요약하면 아래와 같다.

- Reactive Extensions :
  1. a set of types representing asynchronous data streams
  2. a set of operators to query asynchronous data streams
  3. a set of types to parameterize concurrency
- Rx : Observables + Linq + Schedulers

Reactive Programming 에 관한 여러가지 자료와 튜토리얼 중 단연 베스트로 꼽히는 github wiki 에 아래와 같이 정의되어 있다.

> Reactive programming is programming with asynchronous data streams.

어떻게 보자면, 위 표현은 전혀 새로운 게 아니다. 여기서 말하는 스트림이란 변수, 사용자 입력, 속성, 캐쉬, 데이터 구조 등의 프로그래밍에서 사용되는 어떤 형식이든 다 포함된다.

![rx-click-diagram](C:\github\TIL\javascript\rx-click-event.png)

위 표를 보고 내가 이해한 스트림이란, 기존의 이벤트 클릭의 단위가 클릭 횟수라면 스트림 처리에 있어서 클릭 이벤트는 바로 클릭한 시간에 근거한다는 것이다.

> A stream is a sequence of ongoing events ordered in time - 스트림이란 시간 순서대로 발생한 이벤트들의 순서 (차례)

이러한 스트림 방식은 **value, error, completed signal** 이 3 가지 콜백을 갖는다. 여기서 이 3 가지를 각각 살펴보면,

- value : 클릭 이벤트 시에 발생시킬 콜백 함수
- error : 클릭 이벤트 실패시에 발생하는 콜백
- completed signal : 어떤 형태로든 (윈도우나, 해당 버튼이 사라질 때) 버튼 클릭 이벤트가 완료되는 시점의 콜백

이를 코드로 살펴보면 아래와 같다.

```javascript
var Observable = Rx.Observable;
var click = Observable.fromEvent(button, 'click');
var subscription =
  clicks.forEach(
    function onNext(e) {
      alert('clicked');
      subscription.dispose();
    },
    function onError(err) {
      console.log('Error!');
    },
    function onCompleted() {
      console.log('done');
    });
```

여기서 우리가 인지해야 할 중요한 사실은 위 코드는 아래와 같이 순차적 (동기적) 으로 실행되는 것이 아니라, 이벤트 핸들링 결과에 따라 비동기 적으로 처리된다는 점이다. 예를 들어, 클릭 이벤트가 발생했을 때, 실패했을 때, 완료됐을 때, 각각 이에 해당하는 콜백이 실행된다.

```javascript
// 동기 처리
var button = document.getElementById('button');
var handler = function (e) {
  alert('clicked');
  button.removeEventListener('click', handler);
};
button.addEventListener('click', handler);
```

## 용어 설명
위 첫번째 코드처럼, Observable 을 이용하여 Stream 을 Listening 하는 주체를 Observers 라고 하고, 이와 같은 프로그래밍 방식을 Reactive Programming 이라고 한다.
또한 Stream 을 Listening 하는 행위를 Subscribing 이라고 한다.

##


## Synchronous vs Asynchronous
버튼에 클릭 이벤트를 추가하고, 클릭후 다시 해제하는 코드

```javascript
// 동기 처리
var button = document.getElementById('button');
var handler = function (e) {
  alert('clicked');
  button.removeEventListener('click', handler);
};
button.addEventListener('click', handler);
```

위와 같은 순차적인 이벤트 등록 해지 방식을 Observable 구현으로 비동기 방식 처리가 가능하다.

```javascript
var Observable = Rx.Observable;

var click = Observable.fromEvent(button, 'click');

var subscription =
  clicks.forEach(
    function onNext(e) {
      alert('clicked');
      subscription.dispose();
    },
    function onError(err) {
      console.log('Error!');
    },
    function onCompleted() {
      console.log('done');
    });
```

## 참고
- [The most practical tutorial in Reactive Programming - git wiki](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
-
