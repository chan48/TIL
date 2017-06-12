## Node.js 란?
> Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. - Wikipedia -

- Server-side 에서도 실행 가능한 자바스크립트 실행 환경. **Server Side Language**
- 브라우저의 작은 단위 처리 -> Client Side FW -> Server Side Language
- HTTP 요청 서버 코드를 직접 작성해주거나 Express 같은 웹 프레임워크를 사용

```js
// HTTP 서버
var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

```js
// Express 프레임워크
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
```

## Node.js 의 특징
- event-driven, non-blocking I/O model : Node.js 위에서 실행되는 API 는 모두 비동기 방식으로 실행된다.

```js
app.get(function () {
  //
});

app.post(function () {
  //
});
```

- npm : Node Package Manager

## NPM? (Node Package Manager)
- js 개발자들이 편하게 개발할 수 있도록 js 라이브러리들을 모아놓은 열린 공간
- front-end web apps, mobile apps, robots, routers 라이브러리들이 존재
- Gulp, Webpack 모두 node 기반, NPM 을 사용하여 필요 라이브러리들을 로딩

![npm](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/npm.png)

## NPM 명령어 모음
- 프로젝트의 node module 들 관리를 위한 package.json 설정
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

- Global 설치 vs Local 설치

```npm
npm install gulp -global
npm install gulp --save-dev
```

터미널에서 해당 node module 을 명령어로 사용하기 위해 global로 설치한 경우

![gulp-command-in-terminal](gulp-command-in-terminal)

프로젝트에서 해당 node module 을 사용하기 위해 Local 로 설치한 경우

![gulp-node-modules-folder-structure](gulp-node-modules-folder-structure)

```js
// gulpfile.js
var gulp = require('gulp');
```

#### `--save` vs `--save-dev`
- `--save` 는 앱이 구동하기 위해 필요한 모듈 & 라이브러리 설치. ex) react, vue
- `--save -dev` 는 앱 개발시에 필요한 모듈 & 라이브러리 설치. ex) test, live reloading

## Node.js 관련 라이브러리
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
- HTML 에서 JS 를 인식할 수 있도록 지원하는 템플릿 언어
- 정적인 HTML 에 뒷단의 데이터를 추가하여 동적으로 표현하기 위함

![template-engines](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/template-engines.png)

![ejs](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/ejs.png)

## 참고
- [Node.js Gzip 압축 적용](http://inspiredjw.com/entry/Expressjs%EC%97%90-Gzip-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
