# Best Practices for Faster HTML5 Web Apps

> 이 글은 HTML5Rocks 의 번역글을 요약하였습니다.
> [Best Practices for Faster HTML5 Web Apps](http://www.html5rocks.com/ko/tutorials/speed/quick/)

## 소개
- HTML5와 CSS3를 이용하여 앱을 반응형을 만드는 팁들을 소개합니다.

## Tip 1: 웹 스토리지에 쿠키 저장하기
- sessionStorage 와 localStorage를 이용하여 쿠키를 저장하면 서버 요청후 응답시간을 줄일 수 있어 효율적

## Tip 2: Javascript 애니메이션 대신에 CSS Transition 사용하기
- CSS 속성을 이용한 애니메이션은 Javascript의 애니메이션 라이브러리보다 바이트 숫자 양이 훨씬 적어 성능이 더 좋은 프로그램을 만들 수 있다.

## Tip 3: 서버 왕복보다는 클라이언트 사이드 데이터베이스 사용하기
- 웹 앱의 성능 향상을 위해서는 HTTP 요청수를 줄여야 한다.
- 서버로 HTTP 요청수를 줄이려면 WebSQL 또는 IndexedDB 와 같은 Client Side 데이터베이스를 이용하여 데이터를 검색 / 필터 / 정렬 할 때 HTTP 왕복 요청을 많이 줄일 수 있다.

## Tip 4: JavaScript 개선으로 얻게 되는 상당한 성능 이점들
- Javascript 1.6에 추가된 `.map()`, `.forEach()`, `.filter()`, , `.forEach.call()` 와 같은 메서드들은 `for (var i = 0, len = arr.length; i < len; i++)` 와 같은 전형적인 반복문보다 속도가 훨씬 빠르다.
- `String.trim()` 같은 API 도 동일 효과의 긴 JS 보다 성능이 훨씬 좋다.

## Tip 5: 오프라인 앱뿐만 아니라 라이브 사이트들에도 캐쉬 매니페스트 사용하기
- HTML5의 `applicationCache`와 `cache.manifest` 로 캐쉬를 구현할 수 있다.
- `Expires` 헤더 세팅시 상당한 이점이 있고, 브라우저에서 최적화를 해주며 사용 전에 미리 캐쉬까지도 가능하다.
- 정적인 HTML 템플릿을 보고 `cache.manifest`를 이용하여 마크업을 캐쉬할 수 있다.

## Tip 6: Visual Experience 향상을 위해 하드웨어 가속 활성화하기
- GPU 레벨을 가속하면 눈에 보이는 동작(전환, 회전, 크기변환, 투명도 변환)을 훨씬 부드럽게 처리할 수 있습니다.
- `.hwaccel {  -webkit-transform: translateZ(0); }` 을 이용하여 하드웨어를 가속할 수 있습니다 (모든 브라우저에서 보장되지 않습니다)

## Tip 7: CPU를 많이 소모하는 동작은 Web Workers로 처리하기
- 웹 워커는 빠르고, 작업을 하는 동안 브라우저가 반응하는 이점을 갖습니다.

## Tip 8: HTML5 폼 속성과 입력 타입
- HTML5 에서 새로 도입한 `text`, `password`, `file`, `search`, `tel`, `url`, `email`, `datetime` 등의 입력타입으로 긴 Javascript나 CSS로 구현할 필요가 없어졌습니다.
- 페이지 로딩속도와 위젯 반응성도 향상되었습니다.

## Tip 9: 무거운 이미지 스프라이트 요청 대신에 CSS3 효과 사용하기
- CSS3에서 이미지 대신 `gradients`, `border-radius`, `box-shadow`, `alpha opacity` 와 같은 속성들로 2k 이미지를 100 바이트로 줄입니다.

## Tip 10: XHR보다 적은 대역폭을 이용한 WebSockets의 빠른 전송
- WebSockets은 XHR보다 적은 대역폭을 이용하고, 전송시에 바이트가 35%가 감소됩니다.
- XHR의 HTTP Ping은 큰 요구사항 때문에 XHR보다 3~5배 정도 큽니다.
- 실시간 어플리케이션에는 WebSockets 프로토콜이 더 적합합니다.
