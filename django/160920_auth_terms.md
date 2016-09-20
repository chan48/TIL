# Oauth 용어 정리
#### Resource Owner
- OAuth2 를 이용하여 3rd 파티 어플리케이션에 리소스를 노출하는 어플리케이션의 사용자
- 리소스 오너는 리소스 오너의 데이터를 3rd 파티 어플리케이션에서 접근할 수 있도록 3rd 파티 어플리케이션에 권한을 줘야한다.

#### Authorization Server
- 인증 서버는 리소스 오너에게 클라이언트 어플리케이션이 리소스 오너의 데이터를 접근하게 할건지 동의를 구한다.
- authorization flow 를 위한 토큰을 발급하고 관리하며, 이는 OAuth2 스펙을 따른다.

#### Authorization Code
- 클라이언트와 리소스 오너간의 중계를 하기 위해 Authorization Server 를 이용하여 Authorization code 를 얻는다.
- 클라이언트를 인증하기 위해 사용되고, Access Token 의 전송을 허가한다.

#### Access Token
- OAuth2 가 보호하는 리소스를 접근하기 위해 필요한 토큰
- 매우 짧은 생명주기를 갖고 있다.

#### Resource Server
- OAuth2 스펙을 따르는 API 를 통해 리소스에 접근권한을 제공하는 어플리케이션
