<!-- $size: 16:9 -->
<!-- page_number: true -->
# Firebase - Google Cloud Platform

---
## 개요
- 실시간 DB 와 SNS 인증 등 프론트엔드 개발자에게 유용한 기능을 제공하는 Firebase 학습
- Firebase 특징과 각 구성 요소들을 소개
- Firebase SDK & Auth & DB 의 API 를 참고하여 간단한 샘플 제작

---
## 목차
- Firebase 소개
- 실습 #1 - Firebase 설치
- Firebase 구성요소 및 특징
- Firebase Auth
- 실습 #2 - Firebase Auth
- Firebase DB
- Firebase Storage
- 실습 #3 - Firebase DB
- Firebase Hosting
- 실습 #4 - Firebase Hosting

---
## Firebase 란?
앱 개발을 시작하는 분들에게 가장 부담스러운 부분들
- DB 조사, 선택, 설치, 구성, 테이블 설계
- Server 조사, 선택, 설치, 구성, 세부 내용 설정
- 사용자 인증? SNS 인증? Hosting?

> 이제 겨우 화면 그리기 시작했는데... 이건 다 뭔가.....??

---
- Firebase 는 BasS (Backend as a Service)
- BasS : 애플리케이션 개발에서 화면 부분을 제외한 뒷단의 DB, 서버, 인증 등의 기능을 서비스하는 SW

![baas-structure](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/5th_week/170607_firebase.md)

---
- **Firebase 는 Android, iOS 등의 모바일 앱과 Web 앱을 개발하기 위한 통합 Backend 플랫폼**
- **Push, Analytics, Storage, Auth, Hosting** 등의 다양한 기능 제공
- SDK 및 API 사용에 관한 전반적인 문서화가 잘되어 있고 한글 번역 품질 우수
- **HTTPS** 로 호스팅을 제공하기 때문에 PWA 를 제작하여 배포하기 적합

[Firebase 소개 영상](https://www.youtube.com/watch?v=ySmWlU9j3j4)

---
## 실습 #1 - Firebase SDK 설치 및 프로젝트 구성
1. [Firebase Console](https://console.firebase.google.com/) 접속 후 Gmail 로그인
2. Firebase 프로젝트 생성
3. 웹 앱에 Firebase 추가 버튼 클릭
4. 생성된 script 코드 HTML 하단에 복사 붙여넣기
5. 페이지 로딩 후 `firebase` 로그 출력 및 로딩여부 확인

---
## Firebase Features
- Realtime DB : 데이터 조작에 관한 직관적인 API 를 제공하고, Firebase Storage 와 연동이 가능
- Storage : 이미지, 동영상 등 대용량 파일을 저장할 수 있는 공간. 일반적으로 DB 와 연결해서 사용가능
- Firebase Cloud Messaging : 기존 모바일 푸시인 GCM 에 Web 플랫폼까지 커버하는 통합 푸시 메시지 서비스
- Authentication : Oauth, SNS 연동 등의 인증 서비스를 제공. 오직 화면단의 코드로 로그인 인증이 가능
- Hosting : Firebase 에서 제공하는 무료 호스팅. 전세계를 커버하는 빠른 CDN. HTTPS 지원

---
## Firebase Auth
- 주요 SNS (Google, Facebook, Github, Twitter) 인증 서비스 제공
- Firebase Login UI 또는 자체 Form 에서 API 로 간편하게 인증 가능
- `Authentication` 탭에서 email & password 를 이용하여 사용자 관리 가능

---
## 실습 #2 - Firebase Auth 연동 및 인증


---
## Firebase Realtime DB
- 실시간, 오프라인 서비스 기능 제공
- DB 접근 권한에 대한 설정 가능
- DB 에 들어가는 데이터 형식은 JSON 기반
- 데이터 변경에 대해서 모든 기기를 ms 단위 내에 동기화

---
## Firebase Storage
- 이미지, 비디오 등의 미디어 파일을 저장할 수 있는 공간
- 보통 DB 에 Storage 경로를 저장하여 연동하는 방식을 사용
- Auth 와 함께 접근 권한을 설정할 수 있다.
- 인터넷 연결이 중간에 끊길 때, 이어서 시작하는 연결성 보장

---
## 실습 #3 - Firebase DB 연동 및 조작

---
## Firebase Hosting
- Fast, Secure, Realiable
- 구글이 가진 서버 인프라를 활용하기 때문에 빠른 접속속도를 보장
- HTTPS 로 사이트 호스팅
- Firebase CLI 를 설치하여 `deploy` 명령어 1줄로 간편히 호스팅 가능

---
## 실습 #4 - Firebase Hosting 실습
1. Firebase CLI 설치

```
npm install -g firebase-tools
```

2. Firebase 프로젝트 초기화 및 호스팅

```
firebase init
firebase deploy
```

---
## 참조
- [Firebase Official Site](https://firebase.google.com/)
- [Firebase 란?](http://cocomo.tistory.com/487)
- [모바일 앱 개발자를 위한 클라우드 서비스](https://www.slideshare.net/WeAreDIT/baa-s-pt201361)

---
# 끝
