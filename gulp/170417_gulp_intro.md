## Gulp 란?
Gulp는 Sass(Css Extension language) 컴파일이나 웹 리소스 최적화 같이 번거로운 작업들을 자동화 하는 Build Automation Tool 이다.

## Gulp 설치 & 시작하기
Gulp를 설치하기 위해서는 node.js가 pc에 설치되어 있어야 한다. [node.js](https://nodejs.org/en/)
노드를 설치 후 다음 절차를 따라한다.

- `npm install --global gulp` 를 이용하여 Gulp 를 설치한다.
- `npm init` 명령어를 이용하여 package.json 파일을 생성한다 (config 관련된 정보는 추가로 업데이트 할 예정)
    + name, description, commands... etc
- 프로젝트의 devDependencies에 Gulp를 추가하기 위해서, `npm install --save-dev gulp` 를 입력한다.
- gulpfile.js 파일을 프로젝트 루트에 위치 시킨다.
- gulpfile.js 파일에 다음의 내용을 추가해보자.

``` javascript
/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});
```

- 추가 후 gulp를 치면, `Gulp is running` 이라는 콘솔이 찍혀야 구성이 제대로 된 것 이다.

## gulp.task()
- 어떤 동작을 할 지 정하는 명령어다.

``` javascript
gulp.task('taskname', function() {
  // 실행할 로직 추가
});
```

#### task() API 형식

``` javascript
gulp.task(name, [deps], fn)
```

- `name` : task 의 명칭. 이름 중간에 스페이스는 허용되지 않는다.
- `deps` : 해당 task 를 수행하기 전에 실행 및 완료되어야 할 tasks 의 목록. array 형태며 선택 사항이다.

``` javascript
gulp.task('mytask', function() {
  var a = 1,
      b = 2;
  console.log(a+b); // 3
  console.log("mytask 실행 후 아래가 실행 됨");
});

gulp.task('yourtask', ['mytask'], function() {
  console.log("yourtask 실행");
});
```

- `fn` : task 의 실제 수행할 로직이 들어가는 function. 선택 사항이다.

``` javascript
// function 을 제외하고, build 작업을 수행하기 위해 미리 처리되어야 할 작업들만 명시
// 주의할 점은 배열의 작업들이 순차적으로 처리되는 게 아니라 병행으로 처리됨
gulp.task('build', ['array', 'of', 'task', 'names']);
```

#### gulp task 비동기 처리
- task 를 순차적으로 처리하는 것이 아니라, 아래와 같이 async 하게 처리가 가능할 수 있다.

``` javascript
// run a command in a shell
var exec = require('child_process').exec;
gulp.task('jekyll', function(cb) {
  // build Jekyll
  exec('jekyll build', function(err) {
    if (err) return cb(err); // return error
    cb(); // finished task
  });
});

// use an async result in a pipe
gulp.task('somename', function(cb) {
  getFilesAsync(function(err, res) {
    if (err) return cb(err);
    var stream = gulp.src(res)
      .pipe(minify())
      .pipe(gulp.dest('build'))
      .on('end', cb); // 위 jekyll 에서 작업한 결과가 콜백으로 반환되면 somename 이 수행된다.
  });
});
```

- 아래는 stream 방식으로 처리하는 방법이다.

``` javascript
gulp.task('somename', function() {
  var stream = gulp.src('client/**/*.js')
    .pipe(minify())
    .pipe(gulp.dest('build'));
  return stream;
});
```

## gulp.src()
- 해당 위치의 파일들이 설정한 로직을 거쳐 [Vinyl](https://github.com/gulpjs/vinyl-fs) 파일의 Stream 형태로 반환된다.
- `.pipe` 를 이용해서 결과 값을 다른 플러그인으로 넘겨줄 수 있다.

```javascript
gulp.src('client/templates/*.jade')
  .pipe(jade())
  .pipe(minify())
  .pipe(gulp.dest('build/minified_templates'));
```

#### src() API 형식

```javascript
gulp.src(globs, [options])
```

- `globs` : 1개 또는 여러 개의 파일을 String || Array 로 지정이 가능하다. 파일 지정 형식에 관해서는 아래를 참고하자.

```javascript
// 파일 1개 지정시
gulp.src('client/*.js')

// 배열을 이용한 여러 개의 파일 지정 및 규칙
gulp.src(['client/*.js', '!client/b*.js', 'client/bad.js'])
  // * 를 이용하여 복수 개의 파일 지정 가능.
  // ! 를 이용하여 해당 파일 배제
```

- `options` : 설정한 옵션은 glob-stream 을 이용하여 node-glob 에 넘겨진다. ??
  - `options.buffer` : 값을 `false` 로 놓으면 버퍼 형식이 아니 스트림 형식으로 결과를 낸다.
  - `options.read` : 'false' 로 설정하면 파일 읽기가 안되고, `file.contents` 값이 null 이 된다.

## gulp.dest()
- 최종 결과값이 출력될 파일 위치를 지정한다. 해당 위치에 폴더가 없는 경우에는 새로 생성한다.

``` javascript
gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});
```

## gulp.watch()
- 두 개의 인자를 받는데, 앞의 인자가 지정한 조건에 대해서 변경이 일어나면 array 안에 들어 있는 두 번째 인자의 조건이 수행된다.
- API 수행 결과로는 change 이벤트를 발생시키는 EventEmitter 를 반환한다.

```javascript
// `source/javscript`의 밑에 위치한 js 파일이 변경되면, `jshint` 태스크가 수행된다.
gulp.watch('source/javascript/**/*.js', ['jshint']);
```

#### watch() API 형식

```javascript
gulp.watch(glob, [cb])
```

  - `glob` : String 또는 Array 로 변화를 감시할 파일들을 지정한다.
  - `cb(event)` : 지정된 파일의 변화가 있을 때 마다 불려질 콜백 함수. event object 에 콜백이 반환된다.

```javascript
gulp.watch('js/**/*.js', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  // event type : added, changed, delted, renamed 중 어떤 변화가 일어났는지
  // event path : change 이벤트를 발생시킨 파일의 경로
});
```
