<!-- $size: 16:9 -->
<!-- page_number: true -->
# Firebase - Google Cloud Platform

---
<!-- footer : Firebase - 프론트엔드 개발자를 위한 웹앱 프로젝트 CAMP -->
## 개요
- 실시간 DB 와 SNS 인증 등. 프론트엔드 개발자에게 유용한 기능을 제공하는 Firebase 학습
- Firebase 특징과 각 구성 요소 (Hosting, Auth, DB, Storage) 들을 소개
- Firebase SDK & Auth & DB 의 API 를 참고하여 간단한 샘플 제작

---
## 목차
- Firebase 소개
- Firebase 설치 - 실습 #1
- Firebase 구성요소 및 특징
- Firebase Hosting
- Firebase Hosting - 실습 #2
- Firebase Auth
- Firebase Auth - 실습 #3
- Firebase DB
- Firebase Storage
- Firebase DB - 실습 #4

---
## Firebase 소개에 앞서..
앱 개발을 시작하는 분들에게 가장 부담스러운 부분들
- DB 조사, 선택, 설치, 구성, 테이블 설계
- Server 조사, 선택, 설치, 구성, 세부 내용 설정
- 사용자 인증? SNS 인증? Hosting?

> 이제 겨우 화면 그리기 시작했는데... 이건 다 뭔가.....??

---
- Firebase 는 BaaS (Backend as a Service)
- BaaS : 애플리케이션 개발에서 화면 부분을 제외한 뒷단의 DB, 서버, 인증 등의 기능을 서비스하는 SW

![baas-structure](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/5th_week/images/baas-structure.png)

---
## Firebase 란?
- **Firebase 는 Android, iOS 등의 모바일 앱과 Web 앱을 개발하기 위한 통합 Backend 플랫폼**
- **Push, Analytics, Storage, Auth, Hosting** 등의 다양한 기능 제공
- SDK 및 API 사용에 관한 전반적인 문서화가 잘되어 있고 한글 번역 품질 우수
- **HTTPS** 로 호스팅을 제공하기 때문에 PWA 를 제작하여 배포하기 적합

[Firebase 소개 영상](https://www.youtube.com/watch?v=ySmWlU9j3j4)

---
## 실습 #1 - Firebase SDK 설치 및 프로젝트 구성
Firebase SDK 를 이용하여 프로젝트를 구성해보자.

#### 실습절차
1. [Firebase Console](https://console.firebase.google.com/) 접속 후 Gmail 로그인
2. Firebase 프로젝트 생성
3. 웹 앱에 Firebase 추가 버튼 클릭
4. 생성된 script 코드 HTML 하단에 복사 붙여넣기
5. 페이지 로딩 후 `firebase` 로그 출력 및 로딩여부 확인

---
## Firebase Features
- Realtime DB : **데이터 조작에 관한 직관적인 API 를 제공**하고, Firebase Storage 와 연동이 가능
- Storage : **이미지, 동영상 등 대용량 파일을 저장**할 수 있는 공간. 일반적으로 DB 와 연결해서 사용가능
- Firebase Cloud Messaging : 기존 GCM 서비스에 Web 까지 커버하는 **통합 푸시 메시지 서비스**
- Authentication : **OAuth, SNS 연동 등의 인증** 서비스를 제공. 화면단의 코드만으로 로그인 인증 가능
- Hosting : Firebase 에서 제공하는 **무료** 호스팅. 전세계를 커버하는 **빠른 CDN. HTTPS 지원**

---
## Firebase Hosting
- **Fast, Secure, Realiable**
- 구글이 가진 서버 인프라를 활용하기 때문에 빠른 접속속도를 보장
- HTTPS 로 사이트 호스팅하기 때문에 PWA 호스팅 하기 적합
- Firebase CLI 를 설치하여 `deploy` 명령어 1줄로 간편히 호스팅 가능

---
## 실습 #2 - Firebase Hosting 실습
Firebase CLI 를 이용하여 간단한 프로젝트를 호스팅해본다.

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
## Firebase Auth
- **주요 SNS (Google, Facebook, Github, Twitter) 인증** 서비스 제공
- Firebase Login UI 또는 자체 Form 에서 API 로 간편하게 인증 가능
- `Authentication` 탭에서 email & password 를 이용하여 사용자 관리 가능

---
## 실습 #3 - Firebase Auth 연동 및 인증
Firebase Auth 를 이용하여 SNS, Email 계정 연동 및 회원가입을 구현

---
#### 실습 절차
1. `index.html` 파일 생성 및 내용 작성
2. Firebase 프로젝트 초기 구성 `firebase-init.js`
3. `firebase.auth().signInWithEmailAndPassword()` 로 이메일 & 비번 로그인 구현
4. `firebase.auth().signInWithPopup(provider)` 로 3rd party 인증 로그인 구현
5. `firebase.auth().createUserWithEmailAndPassword()` 로 회원가입 구현
6. **할일** : [API 문서](https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signOut) 참고하여 **`firebaseSignOut()`** 구현

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
## 실습 #4 - Firebase DB 연동 및 조작
Firebase 실시간 DB 를 활용하여 간단한 텍스트를 DB에 저장하고 조회해보자.

#### 실습절차
1. `index.html` 파일 생성 및 내용 작성
2. Firebase 프로젝트 초기 구성 `firebase-init.js`
3. Input 값을 DB 에 저장하는 `addToDB()` 구현
4. 데이터 변경에 반응하는 `dbRef.on('value', appendItemsToList())` 구현
5. DB 데이터를 모두 배열에 담아 화면에 표시하는 `appendItemsToList()` 구현

---
## 참고
- [Firebase Official Site](https://firebase.google.com/)
- [Firebase Offical Docs](https://firebase.google.com/docs/)
- [Firebase 란?](http://cocomo.tistory.com/487)
- [모바일 앱 개발자를 위한 클라우드 서비스](https://www.slideshare.net/WeAreDIT/baa-s-pt201361)

---
<!-- footer : -->
# 끝
