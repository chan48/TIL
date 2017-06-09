## Node.js 란?
- ㄴ

## Node.js 기본 설정
- 간단한 웹 애플리케이션을 구동하기 위한 설정 라이브러리를 알아보자.

#### Express.js
- Node.js 에서 가장 많이 쓰이는 웹 프레임워크로 간단하게 웹 서버를 구축 가능
- `express.Router()` 을 이용하여 라우팅 기능 사용이 가능

```js
var express = require('express');
var app = express();

// GET 요청에 대한 라우팅
app.get('/', function(req, res) {
  res.send('hello world');
});

// HTTP POST 요청에 대한 라우팅
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
```

#### [Body Parser](https://github.com/expressjs/body-parser)
- Request Body 에 대한 요청을 파싱하여 `req.body` 에 자동으로 담아주는 Node.js 파싱 미들웨어

#### [EJS](http://ejs.co/) (Embedded JavaScript templates)
- ㄴ

## Node.js 명령어 모음
- 프로젝트 패키지 관리를 위한 package.json 설정
- `-y` 를 붙이면 default 정보를 가지고 package.json 을 생성

```npm
npm init
npm init -y
```

- 패키지 설치 및 package.json 업데이트

```npm
npm install 패키지명 --save
npm i 패키지명 --save
```

#### `--save` vs `--save-dev`
- `--save` 는 앱이 구동하기 위해 필요한 모듈 & 라이브러리 설치. ex) react, vue
- `--save -dev` 는 앱 개발시에 필요한 모듈 & 라이브러리 설치. ex) test, live reloading

## Node.js Gzip 압축 적용
[참고](http://inspiredjw.com/entry/Expressjs%EC%97%90-Gzip-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
