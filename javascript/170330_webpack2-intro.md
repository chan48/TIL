## Webpack 은 무엇인가?
- 서로 연관 관계가 있는 웹 자원들을 js, css, img 와 같은 스태틱한 자원으로 변환 해주는 모듈 번들러
- 아래 사진은 직관적으로 webpack 의 역할을 설명

![what is webpack](C:\github\TIL\javascript\what-is-webpack.png)

## Webpack 을 사용하는 이유 & 배경?
1. 새로운 형태의 Web Task Manager
  - 기존 웹 개발에서 사용하던 Web Task Manager (Gulp, Grunt) 에서 지원하는 기능들과 함께 추가로 모듈 의존성까지 관리해주기 때문에 사용성이 뛰어나다.
  - 예를 들어, 웹 성능 최적화를 위해 필수로 진행하는 minification 기능을 별도의 플러그인이나 코딩 없이, `webpack -p` 와 같은 webpack 고유의 커맨드로 실행이 가능하다는 점들은 다른 web task manager 들과의 차별점을 제공한다.

2. 자바스크립트 Code based Modules 관리
  - 기존의 모듈 로더들과의 가장 큰 차이점은 모듈 간의 관계를 청크 (chunk) 단위로 나눠 필요할 때 로딩하는 점이다.
  - 현대의 웹 애플리케이션은 자바스크립트 역할이 커짐에 따라, Client Side 에 들어가는 코드량이 많아지고 복잡해졌다.
  - 이렇게 복잡한 웹 애플리케이션을 구조적으로 관리하기 위해 모듈 단위로 관리할 필요성이 대두 되었고 Common JS, AMD, ES6 Modules 등이 등장했다.
  - 여기서 모듈 관리에 대해 `script` 태그로 자바스크립트를 모듈화 하는 것을 간단히 예를 들어보자면 아래와 같다,

```html
<script src="module1.js"></script>
<script src="module2.js"></script>
<script src="library1.js"></script>
<script src="module3.js"></script>
```

  - 상기 모듈 로딩 방식에는 다음과 같은 문제점이 있다. *전역변수 충돌, 스크립트 로딩 순서, 복잡도가 커졌을 때 발생하는 관리상의 문제* 등
  - 이러한 부분들을 해결하기 위해 AMD 를 비롯한 기타 모듈 로더들이 등장하였지만, 가독성이나 다수 모듈 미병행 처리등의 약점을 보완하기 위해 Webpack 이 등장하였다.

## Webpack 에 필요한 NPM 명령어
- `npm init` 웹팩 초기 설정에 필요한 명령어로 package.json 파일을 생성
- `npm install` (i) 라이브러리 명 (여러개 한번에 가능)

```text
npm i jquery jquery-mobile backbone underscore --save
```

## Webpack 명령어
- `webpack` for building once for development
- `webpack -p` for building once for production (minification) : `webpack --optimize-minimize --define process.env.NODE_ENV="'production'"`
- `webpack --watch(-w)` for continuous incremental build in development (fast!)
- `webpack -d` to include source maps
- `webpack --display-error-details` to display the error details for debugging

## Mutiple Entry points
- s

```javascript
// webpack.config.js
module.exports = {
  entry: {
    Profile: './profile.js',
    Feed: './feed.js'
  },
  output: {
    path: 'build',
    filename: '[name].js' // 위에 지정한 entry 키의 이름에 맞춰서 결과 산출
  }
};

// 최종 Profile.js 를 <script src="build/Profile.js"></script> 로 삽입
```

## [Require.ensure](https://webpack.js.org/guides/code-splitting-require/#require-ensure-)
- AMD 와 같은 역할, 지정한 라이브러리를 로딩한 후에야 순차적으로 라이브러리 실행 가능

## Resolve
-

## Loader?
> webpack can only process JavaScript natively, but loaders are used to transform other resources into JavaScript. By doing so, every resource forms a module.

- 웹팩은 자바스크립트 파일만 처리가 가능하도록 되어 있다.
- 하지만 loader 를 이용하여 다른 형태의 웹 자원들을 (img, css, ...) 자바스크립트 형태로 변환이 가능하여 로딩할 수 있다.
- loader 에서 모듈 로딩 순서는 배열의 요소 오른쪽에서 왼쪽으로 진행된다.

```javascript
{
  test: /backbone/,
  use: [
    'expose-loader?Backbone',
    'imports-loader?_=underscore,jquery,this=>window'
    // 순서대로 (1) jquery , (2) underscore 로딩
  ]
}
```

- 위 설정 파일을 webpack 으로 번들링 한 결과물은 아래와 같다.

```javascript
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
var _ = __webpack_require__(0);
var jquery = __webpack_require__(1);
```

- 아래 설명할 3 개 로더들의 로딩 순서
  - expose!imports!exports, 1) expose 2) imports 3) exports.

#### expose-loader
-

#### exports-loader
- df

#### imports-loader
- 특정 전역 변수에 의존하는 모듈을 사용할 수 있다.
- 로딩시에 아래와 같이 해당 모듈을 특정 변수로 변경하여 받을 수 있다.

```javascript
{
  test: /backbone/,
  use: [
    'expose-loader?Backbone',
    'imports-loader?_=underscore,jquery,this=>window' // underscore 라이브러리가 로딩 후 _ 값에 저장
  ]
}
```

## Alias
- d

## ProvidePlugins
- 모든 모듈에서 사용할 수 있도록 해당 모듈을 변수로 변환한다.
-

## Externals
- sdf

## entry & output
- dfdf

## require & imports?
- ss

## Dynamic Requires
-

## critical-dependencies
- [critical-dependencies](http://webpack.github.io/docs/context.html#critical-dependencies)

## Reference
- [webpack-howto](https://github.com/petehunt/webpack-howto)
- [webpack-howto2](https://gist.github.com/xjamundx/b1c800e9282e16a6a18e)
- [requireJS-to-webpackConfig](https://www.npmjs.com/package/requirejs-to-webpack-cli)
- [migration from requirejs to webpack](https://medium.com/@ArtyomTrityak/migration-from-require-js-to-webpack-2-a733a4366ab5)
- [webpack-shimming](https://webpack.js.org/guides/shimming/)

http://j-query.blogspot.kr/2015/06/from-requirejs-to-webpack-part-1-reasons.html
