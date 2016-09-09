## Chrome Storage API
- `storage.sync` 는 크롬 간의 데이터 동기화가 가능
- `content_script` 에서 바로 접근해서 사용이 가능
- 데이터 *읽기/쓰기* 는 비동기 방식으로 동작 (동기 방식으로 다른 스크립트 동작으로 방해하는 localStorage API보다 빠르다)
- 데이터를 객체 단위로 저장할 수 있다. (localStorage 는 문자열만 가능)
- `storage.managed` 는 읽기 전용이며, 관리자가 데이터를 읽어올 수 있다.


## API 사용법
- 아래 코드를 보자

  ``` javascript
  // 데이터 저장하기
  chrome.storage.sync.set({‘value’: theValue’}, function () {
    //
  });

  // 데이터 불러오기
  chrome.storage.sync.get(‘value’, function (items) {
    // items : 저장한 객체의 key / value 값을 반환
  });

  ```



## 용량
- 로컬 저장소는 5MB 까지 저장할 수 있다. `unlimitedStorage` 권한 부여시 무제한 사용가능
- 동기화 저장소는 최대 100K, 아이템당 8K, 최대 아이템수 512개로 제한된다.
