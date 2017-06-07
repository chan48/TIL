<!-- $size: 16:9 -->
<!-- page_number: true -->
# Firebase - Google Cloud Platform

---
## 개요

---
## 목차

---
## Firebase?
앱 개발을 시작하는 분들에게 가장 부담스러운 부분들
- DB 조사, 선택, 설치, 구성, 테이블 설계
- Server 조사, 선택, 설치, 구성, 세부 내용 설정
- 사용자 인증? SNS 인증? Hosting?

> 이제 겨우 화면 그리기 시작했는데... 이건 다 뭔가.....??

---
- Firebase 는 BasS (Backend as a Service)
- BasS : 애플리케이션 개발에서 화면 부분을 제외한 뒷단의 DB, 서버, 인증 등의 기능을 서비스하는 SW

[baas-structure](baas-structure)

---
- Firebase 는 Android, iOS 등의 모바일 앱과 Web 앱을 개발하기 위한 통한 Backend 플랫폼
- **Push, Analytics, Storage, Auth, Hosting** 등의 다양한 기능 제공
- SDK 및 API 사용에 관한 전반적인 문서화가 잘되어 있고 한글 번역 품질 우수

[Firebase 소개 영상](https://www.youtube.com/watch?v=ySmWlU9j3j4)

---
## Firebase Features
- Realtime DB : 데이터 조작에 관한 직관적인 API 를 제공하고, Firebase Storage 와 연동이 가능
- Storage : 이미지, 동영상 등 대용량 파일을 저장할 수 있는 공간. 일반적으로 DB 와 연결해서 사용가능
- Firebase Cloud Messaging : 기존 모바일 푸시인 GCM 에 Web 플랫폼까지 커버하는 통합 푸시 메시지 서비스
- Authentication : Oauth, SNS 연동 등의 인증 서비스를 제공. 오직 화면단의 코드로 로그인 인증이 가능
- Hosting : Firebase 에서 제공하는 무료 호스팅. 전세계를 커버하는 빠른 CDN. HTTPS 지원

---
## Firebase SDK 를 이용한 Auth & DB 실습


---
## 참조
- [Firebase Official Site](https://firebase.google.com/)
- [Firebase 란?](http://cocomo.tistory.com/487)
- [모바일 앱 개발자를 위한 클라우드 서비스](https://www.slideshare.net/WeAreDIT/baa-s-pt201361)

---
# 끝
