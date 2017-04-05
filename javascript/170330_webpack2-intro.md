## Webpack 에 필요한 NPM 명령어
- `npm init` 웹팩 초기 설정에 필요한 명령어로 package.json 파일을 생성
- `npm install` (i) 라이브러리 명 (여러개 한번에 가능)

```text
npm i jquery jquery-mobile backbone underscore --save
```

## Webpack 명령어
- `webpack` for building once for development
- `webpack -p` for building once for production (minification)
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
- s

## Alias
- d

## Plugins

## Externals
- sdf

## entry & output
- dfdf

## require & imports?
- ss

## Reference
- [webpack-howto](https://github.com/petehunt/webpack-howto)
- [webpack-howto2](https://gist.github.com/xjamundx/b1c800e9282e16a6a18e)
- [requireJS-to-webpackConfig](https://www.npmjs.com/package/requirejs-to-webpack-cli)
- [migration from requirejs to webpack](https://medium.com/@ArtyomTrityak/migration-from-require-js-to-webpack-2-a733a4366ab5)
- [webpack-shimming](https://webpack.js.org/guides/shimming/)

http://j-query.blogspot.kr/2015/06/from-requirejs-to-webpack-part-1-reasons.html
