<!-- $size: 16:9 -->
<!-- page_number: true -->
# PageSpeed Insights - Perf Analysis

---
## PageSpeed Insights?
- 구글에서 제안하는 튜닝 가이드를 포함한 크롬 플러그인.
- 성능 분석 도구로 웹 사이트의 개선점을 구체적으로 제시하고 점수로 환산
- 사용자가 페이지를 접속했을 때 모바일 네트워크에서도 1초 내로 로딩될 수 있도록 자세한 가이드를 제공한다.

> 1초 내 로딩 기준은 사용자가 웹 사이트를 조작 가능한 시점까지 걸리는 시간

---
## 성능 분석이 필요한 이유와 배경
- 전 세계 모바일 웹을 접속하는 사용자들은 대부분 2G, 3G, 4G 등 다양한 네트워크 환경을 사용
- 전 세계적으로 3G를 대부분 사용하고 있고 4G는 아직 성장하고 있는 중
- 일반적인 네트워크 지연시간은 아래와 같은 범위를 갖는다.
  - 3G 네트워크 : 200 ~ 300ms 의 왕복시간
  - 4G 네트워크 :  50 ~ 100ms 의 왕복시간

---
아래 표를 보자.

![Timeline](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/pagespeed-timeline.png)

여기서 주목할 부분은 *네트워크 오버헤드* 에 600ms 가 사용된다는 점
1. hostname 을 IP 주소로 매칭하는 DNS 작업
2. TCP handshake 수행을 위한 네트워크 왕복
3. HTTP 요청을 보내기 위한 네트워크 왕복

---
## PageSpeed Insights 에서 제시하는 최적화 전략
1. 리다이렉트 횟수 최소화
2. 네트워크 왕복시 제한된 TCP 패킷 수를 고려한 콘텐츠 사이즈 최소화
3. 파싱을 방해하는 요소 (외부 js, css) 를 피하기 - 인라인 권고
4. 불필요한 코드 제거 및 개발자도구를 활용하여 병목이나 메모리 누수 확인

---
## Page Analysis 플러그인 설치 및 실습
- PageSpeed 크롬 확장 플러그인 [다운로드](https://chrome.google.com/webstore/detail/pagespeed-insights-with-p/lanlbpjbalfkflkhegagflkgcfklnbnh)
- [Page Insights Site](https://developers.google.com/speed/pagespeed/insights/?hl=ko)
- [Page Insights API Test with options](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed)

---
## 참고
- [Google Page Insights](https://developers.google.com/speed/docs/insights/about)

---
# 끝
