# jQuery 개발자가 Angular를 대처하는 방법

## Don't design your page, and then change it with DOM manipulations
- jQuery의 경우는 페이지를 먼저 제작 후 그 페이지를 다이나믹하게 만드는 기법을 사용하였다. 예를 들면,
페이지를 제작 후 DOM을 이용하여 무언가를 하도록 구현하는 패턴이다.
- Angular의 경우는 전체적인 목표를 설정하고, 어플리케이션의 구성을 다 디자인 한 후 그 다음에 View를 설계해야한다.

## Don't augment jQuery with Angular JS
- jQuery 개발자가 흔히 저지르는 또 하나의 실수 중 하나는, 일반적으로 jQuery를 이용하여 기능들을 구현한 뒤에 Angular를 그 뒤에 덧붙이는 식으로 어플리케이션을 개발하는 것이다.
- 그렇기 떄문에, 처음 시작하는 사람들에게는 jQuery를 전혀 사용하지 않고 Angular만 사용하여 어플리케이션을 개발해보는 것을 권고한다.
- 일단 먼저 Angular를 이용하여 개발하고, 모르는 것이 있으면 일단 먼저 스택오버플로우에 묻자. 그러고 나서도 못 찾겠으면 그 때 한번 jQuery를 이용하는 것을 권고한다.

## Always think in terms of architecture
- SPA (Single Page Application)도 단순한 웹페이지가 아닌 어플리케이션이다. 그렇기 때문에, Client Side 개발자 관점에서 보는 것이 아니라, 어플리케이션 전체를 Server Side 개발자 관점에서 각 컴포넌트가 독립적이고 확장가능하며 테스트가 가능하도록 구성해야한다.


**1. The View is "Offical Record"**

- 아래와 같은 jQuery 코드가 있다.
``` html
<ul class="main-menu">
    <li class="active">
        <a href="#/home">Home</a>
    </li>
    <li>
        <a href="#/menu1">Menu 1</a>
        <ul>
            <li><a href="#/sm1">Submenu 1</a></li>
            <li><a href="#/sm2">Submenu 2</a></li>
            <li><a href="#/sm3">Submenu 3</a></li>
        </ul>
    </li>
    <li>
        <a href="#/home">Menu 2</a>
    </li>
</ul>
```

- 그리고 `$('.main-menu').dropdownMenu();` 를 이용하여 Dropdown 기능을 구현하게 된다.
이렇게 되면, 위의 코드 형식은 HTML 태그만 봐서는 정확히 어떤 역할을 하게 될지 파악하기 힘들 뿐 더러, 가독성을 떨어뜨려 유지보수가 어려워지는 단점이 있다.

- 자 이젠 Angular Way를 살펴보자.
``` html
<ul class="main-menu" dropdown-menu>
    ...
</ul>
```
- html 태그만 보고도 `ul` 태그가 어떤 기능을 하게 될 지 바로 알 수 있다.

- 위 예제들을 비교해보면, Angular의 View가 왜 Official Record의 역할을 하는지 알 수 있다. Angular를 이용한다면, DOM을 조작할 필요도 없을 것이고, Angular의 Directives를 이용하여 뷰를 독립적으로 만들 수 있다.
- Remember : Don't design and then mark up. You must architect and then design.

**2. Data Binding**

- 아래의 jQuery 코드를 살펴보자
```javascript
$.ajax({
  url: '/myEndpoint.json',
  success: function ( data, status ) {
    $('ul#log').append('<li>Data Received!</li>');
  }
});
```
- 이 jQuery에 해당하는 뷰의 코드는 다음과 같다.
```html
<ul class="messages" id="log">
</ul>
```
- 위 코드의 단점은 log 값을 지우려고 할 떄, jQuery와 HTML DOM 요소를 모두 만져야 하는 번거로움이 있다.
- 이 문제를 Angular는 이런식으로 해결해준다.
```javascript
$http( '/myEndpoint.json' ).then( function ( response ) {
    $scope.log.push( { msg: 'Data Received!' } );
});
```
- View의 모양은 다음과 같다.
```html
<ul class="messages">
    <li ng-repeat="entry in log">{{ entry.msg }}</li>
</ul>
```
- 또는 아래와 같을 수 있다.
```html
<div class="messages">
    <div class="alert" ng-repeat="entry in log">
        {{ entry.msg }}
    </div>
</div>
```

- 위와 같은 Angular Way로 DOM의 요소만 조금 바꾸면, Controller의 코드는 변경하지 않고도 의도하는 바를 달성할 수 있다.
- 또한 Angular는 2 Way Binding 이기 떄문에, Log msg 또한 `<input ng-model="entry.msg" />`를 이용하여 유연하게 내용을 수정할 수 있다.

**3.Distinct Model Layer**
- jQuery에서는 DOM이 데이터 모델의 역할을 하지만, Angular에서는 별도의 데이터 모델 레이어가 있어 View와 분리하여 독립적으로 관리할 수 있다.

**4.Separation of Concerns**
- Angular의 전체적인 컴포넌트 구조는 다음과 같이 독립이 가능한 형태로 이루어져 있다.
- View는 어떤 기능을 할 것인가에 대한 명시적인 형태를 띄고 있다. Model은 데이터를 제어하는 역할을 하고, Service 컴포넌트를 이용해 재사용이 가능한 코드들을 모듈형태로 가지고 있을 수 있다. Directives를 이용하여 DOM Manipulation을 가능하게 하며, 이 모든 것을 Controller에 붙여서 전체적인 흐름을 제어할 수 있다.

**5.Dependency Injection**
- DI(Dependency Injection)는 Server Side 개발자에게 익숙한 용어라, Client Side 개발자에게는 다소 낯선 용어일 것이다.
- DI의 개녕은 컴포넌트를 정의를 하게 되면, 다른 컴포넌트에서 해당 컴포넌트에 대한 loading order / file location 등에 대해 신경쓰지 않고, 해당 컴포넌트의 instance만 부여받아서 사용할 수 있게 되는 방식이다.
- 이러한 방식은 특히 테스팅 방식에서 매우 유용한데, 예를 들어 REST API를 이용하여 테스트를 할 경우에, Controller에서 별도의 설정을 변경하지 않고도 Fake data를 이용하여 테스트를 할 수 있다.

## Conceptually, directives are not packaged jQuery
- Angular의 Directives는 `ngClass` 같이 html tag요소들의 스타일링을 해주는 역할로도 잘 알려져 있지만, 다음과 같은 다른 기능들도 제공한다.
- ngClass : 클래스를 동적으로 업데이트한다.
- ngModel : 2 way binding 이 가능하다.
- ngShow / ngHide : tag요소에 대해 보이기 숨기기 기능이 가능하다.
- 위와 같은 기능들을 이용하여 DOM을 조작하지 않고도 충분히 기능들을 구현할 수 있다. 그리고 이렇게 하면서 어플리케이션의 재사용성을 높일 수 있게 된다.

- 많은 개발자들이 범하는 실수 중 하나는 Controller에서 DOM 조작을 할 수 없기 떄문에, Directives에서 하면 된다고 생각하는 것이다.
- 아래의 Angular 코드를 살펴보자.
```javascript
.directive( 'myDirective', function () {
    return {
        template: '<a class="btn">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            var on = false;

            $(element).click( function () {
                on = !on;
                $(element).toggleClass('active', on);
            });
        }
    };
});
```
- 위 코드가 잘못된 부분은 다음과 같다.
  - jQuery는 절대 필요하지 않다.
  - $(element)대신에 angular.element를 사용하면 된다.
  - template 코드를 로직에 넣는 것 자체가 불필요하다.


- 따라서 다음과 같이 수정할 수 있다.
```javascript
.directive( 'myDirective', function () {
    return {
        scope: true,
        template: '<a class="btn" ng-class="{active: on}" ng-click="toggle()">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            scope.on = false;

            scope.toggle = function () {
                scope.on = !scope.on;
            };
        }
    };
});
```
- 여태까지 설명한 부분을 통해 Directives가 단순히 jQuery의 기능들을 대신하는 것 뿐만 아니라, 실제로 `Extensions of HTML` 이라는 것을 알 수가 있다.

## Summary
결론은, jQuery를 아예 쓰지 말라는 것이다. 심지어 라이브러리를 Angular 어플리케이션에 포함하지도 말라. 어떤 문제를 해결할 때, $가 떠오른다면, 최대한 그 문제를 Angular의 confines들을 이용하여 해결하라. 그렇게 함으로써, 당신은 Angular Way를 더 이해하게 될 것이다.
