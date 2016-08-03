# Hybrid Application Tuning Guide
## Mouse Event 보다는 Touch Event를 사용하자
- 모바일 단말기에서 'mousedown', 'mousemove', 'mouseup', 'click' 등의 마우스 이벤트들 보다는 'touchstart', 'touchmove', 'touchend' 등의 터치 이벤트들의 속도가 더 빠르다.
- Mouse 이벤트들의 경우 OS 레이어에서 그 동작을 탐지하여 실행하고, Touch 이벤트들의 경우 OS까지 가지 않고 웹뷰 단에서 즉시 이벤트를 감지하기 떄문이다.
- Touch 이벤트에서 마우스 click에 대한 이벤트 감지를 하지 않기 떄문에, [Zepto](http://zeptojs.com/#touch), [HammerJS](http://hammerjs.github.io/) 등의 라이브러리를 이용하여 click 이벤트를 처리한다.

## Content Reflow를 최소화한다
- `Reflow`란 HTML DOM 요소의 위치와 차원을 계산하는 브라우저 프로세스를 의미한다. `width`, `height`, `wrapping of text`, `DOM 요소의 절대, 상대 위치 선정` 등이 다 여기에 포함된다.
- DOM 내용이 바뀌거나, DOM 요소가 Resizing 되거나, CSS의 값이 바뀐다거나 할 떄 Reflow가 일어난다.
- [Google Reflow Guideline](https://developers.google.com/speed/articles/reflow) 의 내용은 아래와 같다.
  1. 불필요한 DOM Depth 줄이기
  2. CSS rules 최소화 하기
  3. 애니메이션 사용 시에는 `position-absolute` 또는 `position-fixed` 사용하기
  4. 불필요하게 복잡한 CSS selector 사용하지 않기


## Deel Level의 HTML DOM 사용은 피하자
- HTML의 DOM Level이 깊어질수록 Reflow시에 속도가 더뎌진다. 예를 들어, 특정 DOM 요소의 맨 아래 자식요소를 변환시에 그 요소에 연관된 모든 요소가 변하게 된다.

## HTML DOM 요소를 현명하게 사용하자
- Javascript Array 객체에 데이터가 있고 이 데이터를 `<table>`에 추가하여 화면에 나타낸다고 하자.
- `<table>` 요소를 HTML DOM 요소에 추가하고, Array 객체 안의 데이터들을 한`row` 씩 DOM 요소에 추가하게 되면 엄청난 비용이 발생한다.
- 대신 `<table>` 안에 배열의 값들을 모두 미리 집어 넣어, 한 table을 만든 후 `<table>`만 HTML DOM 요소에 Append 하는 식으로 코딩한다.

## 고정된 DOM 요소를 사용하라
- DOM 요소의 값이 이미 지정되어 있다면, 불필요한 Reflow는 일어나지 않는다.
- 특히 이미지의 경우 미리 사이즈를 지정하지 않으면, 이미지 로딩시에 상당히 expensive 한 cost가 발생되므로, 항상 이미지를 비롯한 DOM 요소는 미리 크기를 지정하도록 한다.

## CSS 스타일에 관련된 Asset들은 Pre-Loading 한다
- 미리 CSS 관련 자원들을 로딩 해놓는 경우, 웹 로딩시에 자원 로딩하는 시간을 기다리지 않아도 된다.
- 또한, 자원을 미리 로딩하였기에 Reflow 작업이 일어나지 않는다.
