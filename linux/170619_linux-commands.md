## Linux 주요 커맨드 명령어
- ls (list) : 윈도우의 dir 명령어와 비슷하고, 해당 위치 하위의 파일과 디렉토리 리스트를 보여준다.
- cd (change directory): 파일 디렉토리 간의 이동시에 사용
- mv (move) : 파일을 이동시키는 명령어. 윈도우 탐색이의 파일 드래그 앤 드랍의 이동과 같다
- man (manual) : 대상 명령어의 사용법을 알려주는 명령어 `man cd` 파일 이동 관련해서 알려줌
- mkdir (make directory) : 새 디렉토리 생성
- touch (make file) : 새 파일 생성. mkdir 은 새 디렉토리 생성
- rmdir (remove directory) : 디렉토리 제거
- rm (remove) : 파일 제거. rmdir 은 디렉토리만 제거하는 반면 rm 은 파일과 디렉토리 모두 제거
- locate (find file) : 파일 탐색. `locate -i *red*house**city*` i 의 경우 대소문자 구분 안함
- clear (clear screen) : Linux CLI 의 로그, 텍스트, 명령어 등 표시된 모든 정보를 clean
- cp (copy): : 파일 복사.
- cat (check content & concatenation) : 파일 내용 확인 또는 복수개 파일 병합. `cat app.js`\
- pwd (print working directory) : 현재 디렉토리 위치 출력
- ping (check the network availability) : 대상 IP & URL 에 패킷을 보내 통신이 정상적으로 연결됐는지 확인
- grep (find a searchstring) : 파일에서 특정 문자열을 검색. 일반적으로 `ps aux | grep PROCESS_NAME` 형태로 킬
  - awk (select the specific field) : 테이블의 여러 컬럼 중 선택하여 출력
- ps (display all processes) : `ps aux` 모든 프로세스의 상세 정보를 표시


## 파일 선택시 유용한 Wildcard 사용법
![wild-cards](C:\github\TIL\linux\images\wildcards.png)

## Cat 관련 사용법
[https://www.tecmint.com/13-basic-cat-command-examples-in-linux/](https://www.tecmint.com/13-basic-cat-command-examples-in-linux/)

## Grep 사용법

## Linux CLI 관련 주의사항
- `rm -rf` : rm (remove) - r (reculsive) f (force) / (home)

## Linux shell commands that I used for a project.
- 디렉토리 재명명 `mv /home/user/oldname /home/user/newname`
- 현재 디렉토리 위치 파악 `pwd`
- 프로세스 찾기 ``
- 관련된 모든 프로세스 죽이기 `killall mongod`
- `sudo apt-get install`
- `sudo apt-get remove`
- `sudo apt-get update`
- 파일 or 디렉토리 지우기 `rm -rf 이름`

## 참고
- [The 10 Most Important Linux Commands](http://www.informit.com/blogs/blog.aspx?uk=The-10-Most-Important-Linux-Commands)
- [Basic Cat 13 examples](https://www.tecmint.com/13-basic-cat-command-examples-in-linux/)
- [Kill multiple processes](https://haandol.wordpress.com/2013/08/23/grep%EC%9C%BC%EB%A1%9C-pid-%EC%B0%BE%EC%95%84%EB%82%B4%EC%84%9C-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0%EB%A5%BC-%EC%89%98-%EB%AA%85%EB%A0%B9-%ED%95%9C%EC%A4%84/)
