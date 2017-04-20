## [gulp-plumber](https://github.com/floatdrop/gulp-plumber)
- Gulp 를 사용할 때 까다로운 점은 에러 처리를 하기 위한 로직을 별도로 추가해야 한다.
- 에러 핸들러를 추가하는 것 이외에도 Plumber 를 이용하여 에러를 catch 하고 pipe 가 깨지는 것을 막을 수 있다.

# Optimization & Minification

## JS minification - [gulp-uglify](http://browsenpm.org/package/gulp-uglify)
- 자바스크립트 파일의 바이트를 최소화

```javascript
var uglify = require('gulp-uglify');

// ...
```

- pump 를 사용하는 [이유?](https://github.com/terinjokes/gulp-uglify/blob/master/docs/why-use-pump/README.md#why-use-pump)

## JS concatenation - [gulp-concat](https://github.com/contra/gulp-concat)
- 자바스크립트 파일을 압축하는 것 이외에도, 여러 개의 js 파일을 한 개로 병합하면 왕복 네트워크 요청을 줄여 성능이 개선될 수 있다.

```javascript
var concat = require('gulp-concat');

// 아래 배열 요소 순서대로 file1, file2, file3 을 병합한다.
gulp.task('scripts', function() {
  return gulp.src(['./lib/file1.js', './lib/file2.js', './lib/file3.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
```

- concat 사용에 있어서 sourcemap 플러그인은 선택이 아닌 필수다 (설명은 추후에 직접 소스 확인 후 sourcemap 관한 내용 더 찾아보고 추가)

```javascript
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('javascript', function() {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
```

## [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- sourcemaps 플러그인을 지원하는 플러그인 [목록](https://github.com/gulp-sourcemaps/gulp-sourcemaps/wiki/Plugins-with-gulp-sourcemaps-support)

## HTML minification - [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
- html 파일 크기 최소화 플러그인

```javascript
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
```

## CSS minfication - [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
- CSS 용량 최소화 하는 플러그인

```javascript
var cssnano = require('gulp-cssnano');

gulp.task('default', function() {
    return gulp.src('./main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});

// Using Sourcemaps
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function () {
    return gulp.src('main.css')
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./out'));
});
```

## CSS optimzation - [gulp-uncss](https://github.com/ben-eb/gulp-uncss)
- 빌드 시점에 사용하지 않는 css 들을 모두 제외

```javascript
var uncss = require('gulp-uncss');

gulp.task('default', function () {
    return gulp.src('site.css')
        .pipe(uncss({
            html: ['index.html', 'posts/**/*.html', 'http://example.com']
        }))
        .pipe(gulp.dest('./out'));
});
```


## Images minification - [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- 이미지 파일의 품질을 떨어뜨리지 않는 선에서 용량을 최소화 한다.

```javascript
var gulp = require('gulp');
var imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('default', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin({
          progressive: true,
          use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});
```

## Image optimization [gulp-image-optimzation](https://www.npmjs.com/package/gulp-image-optimization)
- imagemin 플러그인과 함께 사용

```javascript
var gulp = require('gulp');
var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
    return gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/images')).on('end', cb).on('error', cb);
});
```

## File minification - [gulp-filesize](https://github.com/Metrime/gulp-filesize)
- 파일 최적화를 진행 후 파일 사이즈를 확인할 수 있는 플러그인

```javascript
var size = require('gulp-filesize');

gulp.src('./css/*.css')
    //all your gulp tasks
    .pipe(gulp.dest('./dist/'))
    .pipe(size()); // [gulp] Size example.css: 265.32 kB
```

## Gulp Utility - [gulp-util](https://github.com/gulpjs/gulp-util)
- gulp 사용에 필요할만한 유틸 라이브러리 집합
- log 결과에 색깔을 주는 기능등이 있다.

```javascript
gutil.log(gutil.colors.magenta('123'));
```

## Clean files - [gulp-del](https://www.npmjs.com/package/del)
- 해당 위치의 파일을 삭제

```javascript
var del = require('del');

del(['tmp/*.js', '!tmp/unicorn.js']).then(function(path) {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});
```

## Run synchronously - [gulp-runsequence](https://www.npmjs.com/package/run-sequence)
- 태스크들을 병행으로 처리하지 않고, 정한 순서대로 처리한다.

```javascript
// This will run in this order:
// * build-clean
// * build-scripts and build-styles in parallel
// * build-html
// * Finally call the callback function
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence('build-clean',
              ['build-scripts', 'build-styles'],
              'build-html',
              callback);
});
```

## 참고
- [Highly Useful Gulp Plugins](https://ilikekillnerds.com/2014/11/10-highly-useful-gulp-js-plugins-for-a-super-ninja-front-end-workflow/)
- [Scotch Gulp Tutorials](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
- [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

```javascript
// js optimzation - concat & ugilfy
gulp.task('build-js', function() {
  return gulp.src('source/javascript/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/javascript'));
});
```
