# Ubuntu 12.04.05 LTS 에서 add-apt-repository 프록시 오류 시 대처법
https ssl 통신 보안이 엄격한 사내망에서 linux 위에 node 를 apt-get 명령어를 이용하여 설치를 하다 다음과 같은 오류를 만났다.

내가 실행한 명령어는 `sudo add-apt-repository ppa:chris-lea/node.js` 였고, 해당 ppa를 추가할 수 없다는 식의 오류 메시지가 발생했다.

이를 해결하기 위해서 구글링 하던 중 다음과 같은 사이트를 발견 
[Can't add any PPA's [duplicate]](http://askubuntu.com/questions/355729/cant-add-any-ppas)

해당 사이트의 내용을 참조하여 https proxy를 우회하는 방법으로 nodejs 설치를 완료했다.

http://stackoverflow.com/questions/2424346/getting-error-while-running-simple-javascript-using-node-framework
http://blog.saltfactory.net/node/axconfig-port-1-not-active-error-in-ubuntu.html