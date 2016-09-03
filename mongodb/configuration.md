# Mongo DB 환경구성
[Mac]
몽고 DB 다운로드 후 bin 폴더로 이동
root 폴더로 이동하여 /data/db/ 폴더를 생성한다.
mongod : mongo를 실행시킬 수 있게 하는 서버를 의미한다.
mongo : 서버에 접속하여 몽고 드라이버와의 통신을 한다.

## Mongo DB 명령어
- db.collections.insertOne({})
- db.collections.find().pretty()

## Mongo DB 와 Node.js
몽고와 노드는 BSON 형식의 데이터로 통신을 한다.
노드에서 MongoDB와 통신이 가능한 드라이버를 포함시키면, MongoDB에서는 그냥 데이터 조작에 필요한 API만 콜하고 나머지 데이터 통신은 모두 뒷단에서 알아서 처리가 된다.

