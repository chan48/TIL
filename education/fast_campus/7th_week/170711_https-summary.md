<!-- $size: 16:9 -->
<!-- page_number: true -->
# HTTPS for PWA

---
<!-- footer : HTTPS - 프론트엔드 개발자를 위한 웹앱 프로젝트 CAMP -->
## HTTPS 란 무엇인가?
- Hyper Text Transfer Protocol Secure 의 약자
- Secured version of HTTP : HTTP 의 보안을 강화한 프로토콜

---
## HTTPS 는 어떻게 동작하는가?
- [SSL & TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) 를 이용하여 HTTP 프로토콜을 암호화
- 비대칭 Public Key Infrastructure 방식을 사용

  - Private Key : 사이트를 호스팅 하는 웹 서버에 구성해야 하는 키. 개발자가 private 하게 관리
  - Public Key : 브라우저에서 사이트를 접속하는 사용자들에게 배포되는 키.

- Public Key 에 의해 암호화된 내용을 Private Key 가 복호화(암호 해석) 하는 방식

---

![https-flow](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/7th_week/images/https-flow.png)

---
## HTTPS 적용 확인
- HTTPS 가 올바르게 적용되면 아래와 같이 주소창 왼편에 녹색 자물쇠 표시

![https-lock 50%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/7th_week/images/https-lock.jpg)

---
## HTTPS 디버깅
- 크롬 개발자 도구의 Security 패널에서 HTTPS 적용, 인증서 및 기타 옵션을 확인할 수 있다.

![chrome-dev-security 60%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/7th_week/images/https-security.png)

---
## HTTPS 인증서 구매 참고 사이트
- [ComodoSSL, 첫 3개월 무료. 3개월 이후는 아래 사이트가 더 저렴](https://ssl.comodo.com/free-ssl-certificate.php?track=8177)
- [ComodoSSL 국내](https://www.comodossl.co.kr/products/detail/ssl-certificate-positive.aspx)
- [Gabia SSL, 국내 호스팅 업체](https://sslhosting.gabia.com/service?utm_source=google&utm_medium=cpc&utm_term=SSL&utm_campaign=SSL%25EB%25B3%25B4%25EC%2595%2588%25EC%259D%25B8%25EC%25A6%259D)
- [SSL Mate, 16$ / 1년](https://sslmate.com/pricing)
- [Let's encrypt, 무료로 CA certificate 획득 가능](https://letsencrypt.org/getting-started/)

---
## HTTPS 인증서 구매 후 서버 적용 방법
- 보통은 해당 사이트 마다 각 서버에 적용하는 방법이 안내 되어있다.

  - ex) [Comodo SSL 안내](https://www.comodossl.co.kr/certificate/ssl-installation-guides.aspx)

---
## 기타 : HTTPS 인증서를 Tomcat 에 적용하는 방법
[사이트 참고](https://joshuajangblog.wordpress.com/2016/09/02/tls-ssl-intro-and-tomcat-configuration/)

---
## 참고
- [HTTPS 가 중요한 이유](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https?hl=ko)
- [서버에서 HTTPS 활성화](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/enable-https?hl=ko)

---
<!-- footer : -->
# 끝
