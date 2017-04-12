## Lighthouse 란
- 웹 페이지의 성능과 품질을 향상시키기 위한 자동화 도구
- 기존에 Page Insights 에서 하던 역할을 Progressive Web App 영역 까지 진단하여 개선점을 제시해준다고 생각하면 된다.
- Chrome Extension, CLI, Node Module 로 실행 가능

## 설치 환경
- 최신 버전의 [Chrome 브라우저](https://www.google.com/chrome/browser/desktop/) 설치
- [Chrome Extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) 설치
- [Node - LongTerm Support] 설치

## 사용방법 - Chrome Extension
- 크롬 확장프로그램에서 라이트 하우스 실행
- 옵션 설정

## 사용방법 - Node Module
- lighthouse 모듈 설치

```javascript
npm install -g lighthouse
```

- 원하는 페이지 URL 을 넣어 검사

```javascript
lighthouse <url>
```

- 추가 옵션은 아래 명령어로 확인

```javascript
lighthouse --help
```

## Lighthouse Viewer
- 사이트 리포팅 결과를 공유해서 볼 수 있는 [뷰어](https://googlechrome.github.io/lighthouse/viewer/)


## 참고
-

## 할 일
- npm 으로 설치 후 코드 직접 돌려서 띄우는 거 촬영 & 설명



## Youtube lighthouse
> "Lighthouse will help us identify areas for improvement, but it's not our end destination.
> It's not the ultimate source of truth as to wheather sth is or is not a progressive web app.
> What matters is the experience that your web app provides to your entire user community." by the presentor.

- 라이트하우스에만 전적으로 의존하지 말고, 기존 웹 애플리케이션 개발에서 하던 크로스 브라우징 테스트, 다양한 네트워크 환경, 그리고 여러 디바이스에서 테스트를 해볼 것을 권고합니다.
- Server Side Rendering 의 장점 : HTTP 한번의 요청으로 모든 페이지를 그릴 수 있어서, 어떤 관점에서 보면 Client Side 레더링보다 HTTP 요청 수가 줄어들어 더 빠른 렌더링이 가능할 수도 있다.
- 

## Original Outline
1. 라이트 하우스 소개
2. 라이트 하우스 설치
3. 라이트 하우스 사용
4. 라이트 하우스 적용 (실 사례)

도구 소개 -> 사용 방법 소개 -> 실 사이트 적용 및 분석 -> ?
