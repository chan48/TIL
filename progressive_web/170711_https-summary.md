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
- SSL & TLS 를 이용하여 HTTP 프로토콜을 암호화
- 비대칭 Public Key Infrastructure 방식을 사용
  - Private Key : 사이트를 호스팅 하는 웹 서버에 구성해야 하는 키. 개발자가 private 하게 관리
  - Public Key : 브라우저에서 사이트를 접속하는 사용자들에게 배포되는 키.


---

![https-flow](https-flow)

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
<!-- footer : -->
# 끝
