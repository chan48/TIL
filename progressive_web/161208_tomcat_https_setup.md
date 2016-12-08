## 개요
- PWA 를 개발하기 위한 기본 환경은 HTTPS 통신을 이용한 웹 어플리케이션 접근이다.
- Tomcat 을 웹 서버로 활용하는 경우 HTTP 에서 HTTPS 로 어떻게 변환하는지 알아본다.

## 1. KeyStore 생성
- Keystore 란? : keystore 는 키를 저장하는 파일이다.
- 왜 keystore 가 필요한가? :
- JDK 를 이용한 keystore 생성은 커맨드 창에서 아래 명령어를 이용한다.

  ``` text
  // 윈도우의 경우
  "%JAVA_HOME%\bin\keytool" -genkey -alias tomcat_https -keypass changeit -storepass changeit -keyalg RSA -keystore c:\https_setup\.keystore
  ```

- 위를 해석해보면

  - "%JAVA_HOME%\bin\keytool" : 환경변수에 JAVA_HOME 이 Java 로 잡혀있을 때, Java bin 폴더의 keytool.exe 을 접근
  - "-alias tomcat_https" : tomcat_https 이라는 별칭을 생성
  - "-keystore c:\https_setup\.keystore" :  C 드라이브 밑의 https_setup 이라는 폴더에 .keystore 파일을 생성
  - "-keypass, -storepass" : key 와 store 의 비번 설정
  - "CN" : 이름과 성
  - "OU" : 조직 단위
  - "O"  : 조직 이름
  - "L"  : 구/군/시 선택
  - "ST" : 시/도 선택
  - "C"  : 국가 코드

- 이미지 첨부 ![키스토어 생성절차]()

## 2. Keystore 의 CSR을 txt 파일형태로 생성
- 아래의 명령어를 보자.

  ``` text
  "%JAVA_HOME%\bin\keytool" -certreq -alias tomcat_https -keyalg rsa -file csr.txt "-keystore c:\https_setup\.keystore"
  ```

  - "-certreq -alias tomcat_https" : tomcat_https 라는 별칭을 가진 keystore 를 접근
  - "-file csr.txt" : csr 이라는 이름의 txt 파일 형태로 생성
  - "-keystore c:\https_setup\.keystore" : 해당 주소의 keystore 를 접근

- 위 명령어를 입력하면 keystore 생성시에 입력한 암호를 요구한다. (여기서는 changeit)

## 3. 생성한 Keystore 를 인증서 cer 파일 형태로 저장하기
- 챕터 1에서 생성한 keystore 를 cer 파일의 형태로 저장할 수 있다.

  ``` text
  "%JAVA_HOME%\bin\keytool" -export -alias tomcat_https -storepass changeit -file c:\https_setup\server.cer -keystore c:\https_setup\.keystore
  ```

  - "-file c:\https_setup\server.cer" : 해당위치에 server 라는 이름의 cer 파일을 생성한다.

## 4. cer 인증서를 keystore 에 탑재하기
- 아래 명령어를 보면,

  ``` text
  "%JAVA_HOME%\bin\keytool" -import -v -trustcacerts -alias tomcat_https -file c:\https_setup\server.cer -keystore c:\https_setup\.keystore -keypass changeit -storepass changeit
  ```

## 참고
- [Tomcat SSL 설정](https://www.crosscert.com/symantec/board/tomcat5.pdf)
- [Keytool 을 이용한 Keystore 만들기](http://i5on9i.blogspot.kr/2015/10/keytool-keystore.html)
