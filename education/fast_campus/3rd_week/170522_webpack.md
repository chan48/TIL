<!-- $size: 16:9 -->
<!-- page_number: true -->
# Webpack - Module Bundler

---
## Webpack 은 무엇인가?
- 서로 연관 관계가 있는 웹 자원들을 js, css, img 와 같은 스태틱한 자원으로 변환 해주는 모듈 번들러
- 아래 사진은 직관적으로 webpack 의 역할을 설명

![what is webpack](C:\github\TIL\javascript\what-is-webpack.png)

---
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

---
## Webpack 에 필요한 NPM 명령어
- `npm init` 웹팩 초기 설정에 필요한 명령어로 package.json 파일을 생성
- `npm install` (i) 라이브러리 명 (여러개 한번에 가능)

```text
npm i jquery jquery-mobile backbone underscore --save
```

---
## Webpack 명령어
- `webpack` for building once for development
- `webpack -p` for building once for production (minification) : `webpack --optimize-minimize --define process.env.NODE_ENV="'production'"`
- `webpack --watch(-w)` for continuous incremental build in development (fast!)
- `webpack -d` to include source maps
- `webpack --display-error-details` to display the error details for debugging

---
## Webpack 가볍게 시작하기
- webpack 설정 값 여러개 받기

```js
require("!style!css!./style.css"); // ! 로 여러 설정값을 받을 수 있다.
require("./style.css");
```

- 간단한 [webpack2 tutorial](https://github.com/joshua1988/DevCampWAP-PAO/tree/master/webpack/getting-started)

---
## Webpack Entry
- webpack 으로 묶은 모든 라이브러리들을 로딩할 시작점 설정
- a,b,c 라이브러리를 모두 번들링한 bundle.js 를 로딩한다
- 1개 또는 2개 이상의 복수개 엔트리 포인트를 설정할 수 있다.

```js

var config = {
  // #1 - 간단한 entry 설정
  entry: './path/to/my/entry/file.js'
  // #2 - 앱 로직용, 외부 라이브러리용
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
  // #3 - 페이지당 불러오는 js 설정
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```

---
## Mutiple Entry points
- 앞에 복수개 엔트리 포인트에 대한 설정 예시

```js
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

---
## [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/)
- 여러개의 엔트리 포인트에 주입되는 공통의 모듈을 관리하기 위한 플러그인
- 모든 엔트리 포인트에 주입되는 라이브러리를 효율적으로 관리하기 위해, Chunk 라는 단위로 미리 분리하여 관리한다.
- 모든 번들에 로딩될 필요 없이, 초기에 한번만 로딩하는 장점과 캐쉬에 용이하다는 장점이 있다.

---
## Webpack Output
- entry 에서 설정하고 묶은 파일의 결과값을 설정

```js
var path = require('path');
module.exports = {
  entry: {
    // ...
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    // filename: '[name].js'
  }
};
```

---
## Webpack Loader
> webpack can only process JavaScript natively, but loaders are used to transform other resources into JavaScript. By doing so, every resource forms a module.

- 웹팩은 자바스크립트 파일만 처리가 가능하도록 되어 있다.
- 하지만 loader 를 이용하여 다른 형태의 웹 자원들을 (img, css, ...) 자바스크립트 형태로 변환이 가능하여 로딩할 수 있다.

```js
module.exports = {
  entry: {
    // ...
  },
  output: {
    // ...
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};
```

---
- loader 에서 모듈 로딩 순서는 배열의 요소 오른쪽에서 왼쪽으로 진행된다.

```js
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

> [Loader 더 많은 설정](https://webpack.js.org/concepts/loaders/)

---
## Webpack Plugins
- 플러그인은 파일별 커스텀 기능을 사용하기 위해서 사용한다.
  - ex) js 최소화, alias (별칭) 설정

```js
module.exports = {
  entry: {},
  output: {},
  module: {},
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
    // ...
  ]
};
```

---
## ProvidePlugins
- 모든 모듈에서 사용할 수 있도록 해당 모듈을 변수로 변환한다.
-

---
## ExtractTextWebpackPlugin
-

---
## CommonsChunkPlugin
-

---
## 개발자 도구 연동
- 브라우저에서 webpack 으로 컴파일된 파일을 디버깅 하기란 어려움
- 따라서, 아래와 같이 *source-map* 설정을 추가하여 원래의 파일구조에서 디버깅이 가능

```js
module.exports = {
    ...
    devtool: '#inline-source-map'
}
```

---
## Externals
- sdf

---
## critical-dependencies
- [critical-dependencies](http://webpack.github.io/docs/context.html#critical-dependencies)

---
## Reference
- [webpack-howto](https://github.com/petehunt/webpack-howto)
- [webpack-howto2](https://gist.github.com/xjamundx/b1c800e9282e16a6a18e)
- [requireJS-to-webpackConfig](https://www.npmjs.com/package/requirejs-to-webpack-cli)
- [migration from requirejs to webpack](https://medium.com/@ArtyomTrityak/migration-from-require-js-to-webpack-2-a733a4366ab5)
- [webpack-shimming](https://webpack.js.org/guides/shimming/)
- [Gulp Webpack plugin](https://www.npmjs.com/package/gulp-webpack)
- [from require to webpac](http://j-query.blogspot.kr/2015/06/from-requirejs-to-webpack-part-1-reasons.html)
