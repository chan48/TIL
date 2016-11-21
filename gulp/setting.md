# Gulp 환경구성 및 기본 설명
Gulp는 Sass(Css Extension language)컴파일이나 웹 리소스를 compress 하는 번거로운 작업들을 자동화 해주는 Build Automation Tool이다.

## Gulp npm 설치 및 폴더구성
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

## Gulp의 4 top level functions!
- gulp.task
    + 어떤 동작을 할 지 정하는 명령어다.
    + arguments 로는 다음과 같이 3개를 받는다. (name, deps, fn)
    + name : string
    + deps : an array of task names
    + fn : 수행할 동작이 들어가는 function
``` javascript
gulp.task('mytask', function() {
  //do stuff
});

gulp.task('dependenttask', ['mytask'], function() {
  //do stuff after 'mytask' is done.
});
```

- gulp.src
    + 사용할 파일의 위치를 가리킨다.
    + `.pipe` 를 이용해서 결과 값을 다른 플러그인으로 넘겨줄 수 있다.

- gulp.dest
    + 최종 결과값이 출력될 파일 위치를 지정한다.
``` javascript
gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});
```

- gulp.watch
    + 두 개의 인자를 받는데, 앞의 인자가 지정한 조건에 대해서 변경이 일어나면 array 안에 들어 있는 두 번째 인자의 조건이 수행된다.
```javascript
gulp.watch('source/javascript/**/*.js', ['jshint']);
```
위의 예제에서는, `source/javscript`의 밑에 위치한 어느 서브폴더든, 해당 위치의 js 파일이 변경이 되면, 뒤에 지정한 jshint 가 동작을 한다.
