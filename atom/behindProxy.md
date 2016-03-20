# 회사 HTTPS 나 SSL 통신에 의해 패키지 설치가 Atom Tool에서 되지 않을 때는?

## 아래와 같은 문제를 겪고 있나요?
Atom 툴을 사용할 때, settings 탭에서 Install Packages / Themes 를 주로 이용하여 필요한 확장 플러그인들을 설치한다. 
하지만 회사에서 HTTPS나 SSL 통신에 의해 
`UNABLE_TO_VERIFY_LEAF_SIGNATURE` 라는 메시지가 뜨면서, 검색이 안되는 경우가 있다.

해결책은 아래와 같다.

## Windows 사용시
(1) `C:\User(사용자 이름)\.atom\` 폴더위치로 가서 apmrc 파일을 생성하는데, 
이 파일은 이미 (2) `C:\User(사용자 이름)\.atom\.apm` 밑에 늘 쿠키 파일로 생성이 된다.
해당 파일을 (2)에서 복사하여 (1)으로 옮긴 후 `strict-ssl=false` 값을 추가하여 주면 
Install Packages / Themes 에서 `UNABLE_TO_VERIFY_LEAF_SIGNATURE` 오류가 발생하지 않고 검색하여 설치가 가능하다.