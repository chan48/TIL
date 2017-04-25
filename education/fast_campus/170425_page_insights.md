# Page Insights - Performance Measuring Tool

## 소개
- 웹 페이지의 성능을 진단하고 측정해주는 도구
- 구글에서 제안하는 튜닝 가이드를 포함한 크롬 플러그인 or NPM 형태로 제공
- 사용자가 페이지를 접속했을 때 모바일 네트워크에서도 일초 내로 로딩될 수 있도록 자세한 가이드를 제공
- 여기서 말하는 1초 이내의 페이지 렌더링은 사용자가 웹 어플리케이션을 조작할 수 있도록 기본적인 ATF (Above The Fold) 콘텐츠를 로딩하는 것을 의미

## 배경
- 구글에서 진행한 연구결과에 따르면 페이지 로딩시 일초 이상 지연이 발생하면 사용자에게 Poor Experience 를 초래
- 모바일 웹을 접속하는 사용자들은 대부분 2G, 3G, 4G 등 다양한 네트워크를 이용
- 전 세계적으로 3G를 대부분 사용하고 있고, 4G는 아직 성장하고 있는 중
- 네트워크 지연시간은 아래와 같은 범위를 가짐
  - 3G 네트워크 : 200 ~ 300ms 의 왕복시간
  - 4G 네트워크 :  50 ~ 100ms 의 왕복시간

## 브라우저 통신 절차
- 여기서 브라우저와 서버와의 일반적인 통신 절차를 보면 아래와 같다. ![ServerBrowserCommunication](/Users/user2/Documents/Programming/TIL/web_development/server_browser_communication.png "ServerBrowserCommunication")

- 위 표를 보면 네트워크 오버헤드에 고정적으로 600ms 시간이 쓰이는데, 내역은 아래와 같다.
  1. hostname (예. google.com) 을 IP 주소로 매칭하는 DNS 작업
  2. TCP handshake 수행을 위한 네트워크 왕복
  3. HTTP 요청을 보내기 위한 네트워크 왕복

## 특징
- 데스크톱과 모바일 기기에서의 성능을 모두 측정하여 0 ~ 100 사이의 점수로 환산
- 일반적으로 85점 이상인 경우 페이지의 성능이 우수하다고 볼 수 있다.
- 성능 측정시 변이가 심한 네트워크 환경은 제외하고 아래 항목에 기반한다.
  - 페이지의 HTML 구조
  - 이미지 & JS & CSS 등의 외부 리소스의 사용 방식

## 성능 측정 지표
- *페이지 이동* : 사용자가 새로운 페이지 로딩을 위해 요청을 날리고, 사용자가 1초 내로 새 페이지를 조작할 수 있는 반응성을 제공하는지 측정
- *페이지 로딩* : 사용자가 새로운 페이지를 요청한 뒤 새 페이지가 실제로 그려지는 순간까지의 시간 측정

> 전체적인 성능 측정이 화면 렌더링의 속도와 연관이 있다는 걸 인지

## Delivering the sub one second rendering experience
- 위에서 설명한 네트워크 지연시간을 제외하고는 페이지 렌더링 처리를 위해 약 400ms가 남는다. 해당 시간안에 아래와 같은 내용을 처리해야한다.
  - 서버에서 응답을 준다
  - 클라이언트 사이트 코드가 실행 되어야 한다.
  - 브라우저가 콘텐츠의 레이아웃을 조정하고, 렌더링을 해야한다.
- 이제 각 항목에 대해서 자세히 들여다보자.

### (1) Server must render the response (< 200 ms)
- 서버의 응답시간은 서버가 초기 HTML 파일을 클라이언트에 전달하는데 걸리는 시간이다.
- Optimization 을 위한 시간이 많지 않기 떄문에 최대한 200 ms 이내가 걸리도록 한다.

### (2) Number of redirects should be minimized
- HTTP redirect 요청이 늘어날 때마다 최소 1개에서 2개의 네트워크 왕복이 늘어난다. (추가적인 DNS 이용이 필요할 시 2개)
- 따라서, redirect 요청을 최소화 하거나 혹은 아예 없도록 구현한다. (HTML에서 "m dot" 하지 않도록 주의)

### (3) Number of roundtrips to first render should be minimized
- TCP 통신 특성
  - 서버는 첫 네트워크 왕복에서 TCP 패킷을 10개까지 보낼 수 있다. (~14KB)
  - 서버가 보낸 요청을 클라이언트가 인식하기까지 약간의 대기 시간이 발생한다.
- 이러한 TCP 특성 떄문에 페이지의 첫 렌더링을 위한 콘텐츠의 양을 최대한 줄여 네트워크 왕복 수를 줄여야한다.
- 브라우저가 한 번의 네트워크 왕복만 하고 바로 페이지를 그릴 수 있게끔 ATF는 14KB 이하로 맞추는 것이 좋다.
- TCP 표준이 최근에 업데이트가 되어 10개까지 패킷을 보낼 수 있기 때문에, 서버의 구성정보를 최신 버전으로 맞추어 3~4 개가 아닌 10개가 되도록 한다.

### (4) Avoid external blocking JavaScript and CSS in above-the-fold content
- **브라우저는 페이지를 사용자에게 보여주기 전에 파싱을 해야한다.**
- 파싱을 하는 동안 non-async 스크립트나 외장 스크립트를 마주치면 진행하던 파싱을 멈추고 해당 리소스를 다운로드 해야한다.
- 이렇게 매번 수행할 때마다 네트워크 왕복이 매번 증가하기 때문에 페이지 렌더링이 늦어진다.
- 결론적으로 Javascript 와 CSS 는 인라인으로 포함하는 게 좋다.
- **첫 페이지 렌더링에 필요한 리소스만 먼저 로딩하고 나머지 기능은 추가로 로딩하도록 구현해야한다.**

### (5) Reserve time for browser layout and rendering (200 ms)
- HTML과 CSS 파싱과 Javascript 실행은 모두 시간을 요하는 작업이다.
- 모바일 기기의 속도와 페이지의 복잡도에 따라서 이 작업이 수백초가 걸릴 수 있다.
- 브라우저 오버헤드는 200ms 이하가 되도록 설정한다.

### (6) Optimize JavaScript execution and rendering time
- 복잡하고 비효율적인 코드는 수십 ~ 수백 초가 걸린다.
- 브라우저에 내장된 개발자도구를 이용하여 코드를 profile 하고 최적화 한다. [Chrome Developer Tool Course](http://discover-devtools.codeschool.com/)


## 성능 측정에 따른 상태 표기
![테이블](C:\github\TIL\education\fast_campus\page_insight_table.png)

## 참고
- [Mobile Analysis in Page Insights](https://developers.google.com/speed/docs/insights/mobile)
