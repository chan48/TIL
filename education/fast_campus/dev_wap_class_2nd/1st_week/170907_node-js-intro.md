<!-- $size: 16:9 -->
<!-- page_number: true -->
# Node.js & NPM 소개

---
<!-- footer : Node.js & NPM - 프론트엔드 개발자를 위한 웹앱 프로젝트 CAMP -->
## 개요
- Server Side Javascript 인 Node.js 학습
- Gulp, Webpack 의 사용에 있어서 필수적인 NPM 학습
- Node js 웹 프레임워크인 Express 에 대해 이해하고 간단한 서버 구축
- 프론트엔드 개발자에게 필수지식이자 실습에서도 많이 활용될 NPM CLI 학습.

---
## Node.js 란?
> Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. - Wikipedia -

- Server-side 에서도 실행 가능한 자바스크립트 실행 환경. **Server Side Language**
- JS : 브라우저의 작은 단위 처리 -> Client Side FW -> Server Side Language
- HTTP 요청 서버 코드를 직접 작성해주거나 Express 같은 웹 프레임워크를 사용

---

```js
// HTTP 서버
var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!'); // 클라이언트에 보내는 응답
  res.end(); // 응답 종료
}).listen(8080); // 로컬호스트 8080 포트에서 서버 가동중
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

---
## Node.js 의 특징
**event-driven, non-blocking I/O model**
- Node.js 위에서 실행되는 API 는 모두 비동기 방식으로 실행된다.

```js
// server.js
app.get(function () {
  //
});

app.post(function () {
  //
});
...
```

---
## NPM? (Node Package Manager)
- js 개발자들이 편하게 개발할 수 있도록 js 라이브러리들을 모아놓은 열린 공간
- front-end web apps, mobile apps, robots, routers 라이브러리들이 존재
- Gulp, Webpack 모두 node 기반, NPM 을 사용하여 필요 라이브러리들을 로딩
- 재사용 가능한 code 를 **module, package** 라고 호칭
- **package.json** : 해당 package 에 대한 파일 정보가 들어가 있음
- keyword 로 패키지 [검색](https://www.npmjs.com/) 가능

![npm](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/npm.png)

---
## NPM 명령어 모음
#### Package.json 생성
- 프로젝트의 node module 들 관리를 위한 package.json 설정
- `-y` 를 붙이면 default 정보를 가지고 package.json 을 생성

  ```npm
  npm init
  npm init -y
  ```

#### 패키지 설치 및 업데이트
- 프로젝트에서 사용할 node module 설치 및 package.json 업데이트

  ```npm
  npm install 패키지명 --save
  npm i 패키지명 --save
  ```

---
#### Global 설치 vs Local 설치

  ```npm
  npm install gulp -global
  npm install gulp
  ```

![local-vs-global](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/local-vs-global.png)

---
- 터미널에서 해당 node module 을 명령어로 사용하기 위해 `-global`로 설치한 경우

  ![gulp-command-in-terminal](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/npm-global.png)

---
- 프로젝트에서 해당 node module 을 사용하기 위해 Local 로 설치한 경우

  ![gulp-node-modules-folder-structure 70%](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/gulp-node-modules-folder-structure.png)

  ```js
  // gulpfile.js
  var gulp = require('gulp');
  ```

---
#### install `--save` vs `--save-dev`
- `--save` 는 앱이 구동하기 위해 필요한 모듈 & 라이브러리 설치. ex) react, vue

```js
// package.json
"dependencies": {
  "vue": "^2.3.3"
  ...
},
```

- `--save -dev` 는 앱 개발시에 필요한 모듈 & 라이브러리 설치. ex) test, build tool, live reloading

```js
// package.json
"devDependencies": {
  "gulp": "^3.9.1",
  ...
}
```

---
#### NPM 커스텀 명령어 구성
- `package.json` 파일의 `scripts` 속성 값으로 명령어를 구성할 수 있다.

```js
{
  // ...
  "scripts" : {
    "start": "node server.js"
  }
  // ...
}
```

```js
npm start // node server.js 와 동일
```

---
## Node.js 관련 라이브러리
- 간단한 웹 애플리케이션을 구동하기 위한 설정 라이브러리를 알아보자.

---
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

---
#### [Body Parser](https://github.com/expressjs/body-parser)
- Request Body 에 대한 요청을 파싱하여 `req.body` 에 자동으로 담아주는 Node.js 파싱 미들웨어

```js
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // receive the request body in POST http request
  console.log(req.body);
})
```

---
#### [EJS](http://ejs.co/) (Embedded JavaScript templates)
- HTML 에서 JS 를 인식할 수 있도록 지원하는 템플릿 언어
- 정적인 HTML 에 뒷단의 데이터를 추가하여 동적으로 표현하기 위함

![ejs](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/ejs.png)

---
템플릿 엔진 구조 참고

![template-engines](/Users/gihyojoshuajang/Documents/Programming/TIL/education/fast_campus/3rd_week/images/template-engines.png)

---
## 간단한 실습
node.js & npm & express 로 로컬 서버 구성하기

#### 실습 절차
1. [node.js](https://nodejs.org/en/) LTS (npm) 설치
2. `server.js` 파일 생성 후 HTTP 서버코드 추가

```js
var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

---
3. npm 을 이용한 express 설치 및 간단한 서버 구성

```text
npm init
npm install express --save
```

```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

---
## 참고
- [What is NPM?](https://docs.npmjs.com/getting-started/what-is-npm)
- [Installing-locally](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
- [Installing-globally](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)
- [locally-vs-globally-install](https://docs.npmjs.com/files/folders)
- [Node.js Gzip 압축 적용](http://inspiredjw.com/entry/Expressjs%EC%97%90-Gzip-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
- [node-http-server](https://mylko72.gitbooks.io/node-js/content/index.html)

---
<!-- footer: -->
# 끝
