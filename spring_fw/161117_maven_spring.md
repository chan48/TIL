## Maven 프로젝트 구성 후 Eclipse 내 Tomcat Server 이용시 주의
- Eclipse 를 신뢰하지 마라 : 빈번한 clean 이나 build 를 하게 되면, 클래스 컴파일이 제대로 되지 않는 현상이 발생한다. 서버에 올려서 시작을 눌렀는데도, 클래스 컴파일이 안되면 workspace 의 다음 폴더 경로를 참고한다.

> .metadata -> .plugins -> org.eclipse.wst.server.core -> tmp0 (가변적) -> wtpwebapps -> 해당 Web Project
