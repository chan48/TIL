# React 인가 Vue 인가?

## 들어가며
Angular, React, Vue 와 같이 요즘 무수히 쏟아져 나오는 Front-End 프레임워크들을 보면 정말 "어떤 프레임워크를 써야 하는가?" "어떤 프레임워크가 현재 진행하려는 프로젝트의 목적에 가장 부합하고, 프레임워크 특성을 헤치지 않고 장점을 살려 구현할 수 있을까?" 라는 질문을 스스로 수도 없이 하게 됩니다.

본 글은 **React or Vue: Which Javascript UI Library Should You Be Using?** 라는 원문을 번역한 글로서, 현재 가장 인지도가 높은 React 와 새로운 강자 Vue 를 Framework 특성 관점에서 장단점을 비교한 글입니다. 새로 Front-End 에 입문하셔서 어떤 프레임워크를 쓰실지 고민하시는 분이나, 기존 React 나 Vue 개발자 분들 모두에게 도움이 될 것 같습니다.

그럼 재밌게 읽으시길 바라며... - Captain Pangyo -
---

2016년 React 는 Javascript 웹 프레임워크 왕으로서 입지를 견고히 하였습니다. 특히 Web & Mobile 라이브러리 모두 빠르게 성장하며 주요 경쟁 상대인 Angular 보다 더 편하게 우위를 차지하고 있죠.

하지만 2016년은 Vue 에게도 꽤 인상적인 한해 였습니다. 2.x 버전이 릴리즈 되면서 Javascript 커뮤니티 진영에 강한 인상을 남겼고, Vue 의 Github 리포지토리는 25,000 개 이상의 별을 획득했죠.

React 와 Vue 의 관점은 상당히 유사합니다. 둘 다 View Layer 에 집중된 경량 UI 라이브러리죠. 이 둘은 모두 간단한 프로젝트부터 복잡한 프로젝트까지 어느 프로젝트에도 사용할 수 있습니다.

결과적으로, 많은 웹 개발자들은 대체 어떤 프레임워크를 써야하나? 늘 고민합니다. 이 두 프레임워크에 우리가 알아야할 명확한 장점과 단점이 있는지? 아니면 별반 차이가 없는건지...?

## 두 개의 프레임워크와 각 프레임워크 지지자들
이 글에서 공정하고 철저한 분석을 통해 위 질문에 대한 답을 구하려고 합니다. 유일한 문제점은 제가 Vue 에 대해 선입견을 가진 낯 두꺼운 Vue 팬이라는 점이죠. 저는 올해 Vue 로 많은 프로젝트를 진행했습니다. Udemy 에 Vue [강의](https://www.udemy.com/vuejs-2-essentials/?couponCode=JSDOJO-MEDIUM)를 하고, Medium 에 기사를 쓸 정도로 말이죠.

편견을 가진 제 관점에서 벗어나기 위해, 훌륭한 자바스크립트 개발자 이며 React 광팬인 Alexis Mangin 을 끌여들었습니다. 이 친구는 React 에 푹 빠져있고, Web 과 Mobile 에 모두 React 를 많이 적용해봤죠.

Alexis 하루는 저에게 이렇게 물었습니다. "너 왜 React 말고 Vue 를 더 좋아해?" 제가 React 를 잘 몰랐기 때문에, 좋은 답변을 해주지 못했습니다. 그래서 이 친구에게 하루 날 잡고 까페에 노트북을 들고 가서, 서로 그렇게 좋아하는 Vue 와 React 라이브러리가 주는 장단점을 함께 살펴보자고 했죠.

그렇게 많은 토론과 양쪽의 입장에서 모두 배워보고나니, 아래와 같이 6가지의 주요점이 나왔습니다.

## Templates 형식으로 앱 제작을 원한다면 Vue
Vue 앱에서는 HTML 파일에 마크업을 추가하는게 기본 설정입니다. Angular 랑 비슷하게, 콧수염 괄호 `{{ }}` 로 데이터 바인딩을 하고, 표준 HTML 태그 이외에 Directive 라는 특별 HTML Attritube 를 이용하여 Template 의 기능을 확장할 수 있습니다.

아래 코드는 간단한 Vue App 입니다. `Hello Vue.js!` 라는 message 를 출력하고, 버튼을 누르면 해당 메시지가 역순으로 바뀝니다.

```html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});
```

이와는 반대로 React App 은 Template 구조를 사용하지 않고, 개발자가 JSX 를 사용하여 자바스크립트에서 DOM 을 생성하게 합니다. 아래는 위 Vue 와 동일한 기능을 하는 React 코드입니다.

```html
<div id="app"></div>
```

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello React.js!'
    };
  }
  reverseMessage() {
    this.setState({
      message: this.state.message.split('').reverse().join('')
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.reverseMessage()}>
          Reverse Message
        </button>
      </div>
    )
  }
}
ReactDOM.render(App, document.getElementById('app'));
```

Template 은 전통적인 웹 개발 패러다임과 유사한 방식이므로 입문 개발자가 이해하기 쉽습니다. 그리고 심지어 숙련된 개발자 분들께도 Functionality 동작과 태그 Layout 을 분리할 수 있어서 선호되는 방식입니다. 또 Pug 와 같은 전처리기를 추가할 수 있는 옵션도 생기죠.

하지만 Template 은 표준 HTML 이외에 추가적인 HTML 구문을 학습해야 한다는 단점이 있습니다. React 의 render() 는 표준 HTML 과 Javascript 만 알면 되거든요. render() 는 또 쉽게 디버깅 하고 테스팅이 가능한 장점이 있습니다.

이 부분에서 알아두셔야 할 부분은 **Vue 가 버전 2.x 부터 Template 과 render() 를 모두 지원**한다는 사실입니다.

## 간단한 것과 "일단 동작" 되는 걸 좋아하면 Vue
간단한 Vue 프로젝트는 별도의 변환작업 (Transpilation) 없이도 브라우저에서 바로 동작이 됩니다. 이러한 부분이 jQuery 처럼 쉽게 프로젝트에 적용할 수 있는거죠.

React 도 기술적으로는 가능합니다만, 일반적인 React 코드는 JSX 와 ES6 (class, non-mutating array method)에 의존을 많이 하고 있습니다.

이와 다르게 Vue 의 단순함은 라이브러리 **설계 ?? 구조?** 구조에서 더 진가를 발휘합니다. 이 두 라이브러리가 어떻게 application data (state) 를 처리하는지 보죠.

React 에서 state 는 불변(immutable) 의 속성을 가집니다. 그래서 직접적으로 변경할 수 없죠. 만약 상태를 변경하고 싶다면 아래처럼 setState() 를 사용해야 합니다.

```js
this.setState({
    message: this.state.message.split('').reverse().join('')
});
```

React 는 현재와 이전 상태를 비교하여 언제, 어떻게 다시 DOM 을 렌더링 할지 결정합니다, 그렇기 때문에 imuttable state 가 필요하죠.

반대로, Vue 에서 data 는 변형될 수 있습니다. 아래는 `위의 React 의 message 와 같은 data 속성`을 직접 변경 하는 모습입니다.

```js
// 아래의 message 속성은 Vue 인스턴스에서 접근 할 수 있습니다.
this.message = this.message.split('').reverse().join('');
```
