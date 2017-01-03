Web Developer 로서 알아야 할 가장 기본적인 지식 중 하나는 바로 HTTP 요청방식인데요.
HTTP 요청방식은 클라이언트와 서버간의 요청-응답 을 수행하기 때문에,
화면을 개발하는 Front-End Engineer 나 뒷단의 데이터를 조작하는 Back-End Engineer 에게 모두 중요한 개념입니다.
오늘은 HTTP 통신방식 중에서도 POST 와 GET 에 대해 알아보겠습니다.

## POST 는 무엇인가?
> **POST** is one of many request methods supported by the HTTP protocol used by the World Wide Web.
> *HTTP 프로토콜 : 클라이언트와 서버 간의 통신을 지원하는 통신 프로토콜

- 정의 : HTTP 프로토콜이 지원하는 여러가지 요청 메서드 중의 하나.
- 용도 : 데이터를 서버로 전달하거나 상태를 바꾸기 위한 메서드. 주로 파일 업로드나 form 제출할 떄 사용한다.
- 형식
  - Content-Type : application/x-www-form-urlencoded (기본 값), multipart/form-data (파일 업로드시)
  -

## GET 과 POST 의 차이점
> **GET** - Requests data from a specified resource.
> **POST** - Submits data to be processed to a specified resource

- GET : 데이터를 조회하는 데 사용한다. (조회)
- POST : 데이터를 서버에 전달하여 값을 추가하거나 상태를 변경할 때 사용한다. (생성/변경)

#### GET
- GET 의 URL 형식 : http://sample.com/test.html?id=1&name=captain_pangyo
  - id 가 1 이고, name 이 captain_pangyo 인 인자값을 서버에 전달하고, 그 인자에 해당되는 데이터 결과를 조회하여 가져온다.
  - ? : 쿼리 시작
  - & : 변수 구분자
  - = : 키 값 쌍

- GET 요청의 특징
  - 캐쉬가 된다.
  - 변수가 브라우저 히스토리에 남는다. (따라서 암호와 같은 개인정보 전송시에는 사용하지 않는 것이 좋음)
  - URL 길이에 제한이 있다. (URL 최대길이 : 2048 characters)
  - 데이터 형식은 ASCII 문자만 가능.
  - 즐겨찾기가 된다.
  - **데이터를 받아올 때만 사용해야한다.**

#### POST
- POST 의 URL 형식 : http://sample.com/test.html
  - URL 에 전달되는 데이터가 노출되지 않고 form 형식으로 전달할 수 있다
  - 일반적으로는 request 메시지의 body 안에 데이터가 담겨 전달된다.
  - 따라서 대량의 데이터 형식이 전달 가능하다.

- POST 요청의 특징
  - 캐쉬가 되지 않는다.
  - 변수가 브라우저 히스토리에 남지 않는다.
  - 데이터 길이에 제한이 없다.
  - 데이터 형식에 제한이 없고, 바이너리 데이터도 허용된다.
  - 즐겨찾기가 되지 않는다.

## GET 과 POST 의 인코딩 형식
- GET 과 POST 모두 application/x-www-form-urlencoded 을 지원합니다.
- POST 의 경우 multipart/form-data 형식도 지원하기 때문에 바이너리 데이터 형태도 전송이 가능합니다.

## 참고
- [아웃사이더 블로그](https://blog.outsider.ne.kr/312)
- [W3C School](http://www.w3schools.com/tags/ref_httpmethods.asp)
- [Wikipedia POST](https://en.wikipedia.org/wiki/POST_(HTTP))
- [POST 인코딩 형식 상세설명](http://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data/4073451#4073451)
