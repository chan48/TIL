## Comodo SSL Certificates 설치 절차 (Tomcat 이용시)
신규 등록시 기준으로 아래 절차를 따르고, 작업환경은 커맨드 명령 프롬프트에서 Java Keytool 을 활용한다.

[CSR Generation: Java Based Web Servers (Tomcat) using keytool](https://support.comodo.com/index.php?/comodo/Knowledgebase/Article/View/90/19/)

1. Keystore 생성

```text
keytool -genkey -keyalg RSA -keysize 2048 -keystore ${keystoreName} -alias ${aliasName}
```

2. CSR 생성

```text
keytool -genkey -keyalg RSA -keysize 2048 -keystore ${keystoreName} -alias ${aliasName}
```

[Certificate Installation: Java Based Web Servers (Tomcat) using keytool](https://support.comodo.com/index.php?/comodo/Knowledgebase/Article/View/638/0/certificate-installation-java-based-web-servers-tomcat-using-keytool)

3. Root CA Certificate 설치

```text
keytool -import -trustcacerts -alias AddTrustExternalCARoot -file AddTrustExternalCARoot.crt -keystore ${keystoreName}
```

4. Intermediate CA Certificate 설치

```text
keytool -import -trustcacerts -alias COMODORSAAddTrustCA -file COMODORSAAddTrustCA.crt -keystore ${keystoreName}
keytool -import -trustcacerts -alias COMODORSADomainValidationSecureServerCA -file COMODORSADomainValidationSecureServerCA.crt -keystore ${keystoreName}
```

5. COMODO SSL Certificate 설치

```text
keytool -import -trustcacerts -alias ${aliasName} -file ${yourDomainName}.crt -keystore ${keystoreName}
```

## Keytool 명령어 모음
- 저장된 keystore 확인 명령어

```text
keytool -list -keystore solutionpot.keystore
```

- keystore 삭제 명령어

```text
keytool -delete -alias ${aliasName} -keystore ${keystoreName} -storepass password
// ex) keytool -delete -alias addtrustexternalcaroot -keystore .keystore -storepass changeit
```

- keystore jks 저장소 확인

```text
keytool -list -v -storetype jks -keystore ${keystoreName}
```

## Comodo SSL Certificate 갱신시 가이드라인
- Certificate 을 새로 구매하면 Comodo 에서 Zip 파일이 날라온다. 아래 4개 파일 포함됨
  - AddTrustExternalCARoot.crt
  - COMODORSAAddTrustCA.crt
  - COMODORSADomainValidationSecureServerCA.crt
  - {도메인명}.crt

- 여기서 기존의 설정을 건드리지 않고 **{도메인명}.crt 따로 기존 keystore 값에 추가해준다.**

```text
keytool -import -trustcacerts -alias ${aliasName} -file ${yourDomainName}.crt -keystore ${keystoreName}
// keytool -import -trustcacerts -alias tomcat_https -file www_solutionpot_co_kr.crt -keystore .keystore
```
