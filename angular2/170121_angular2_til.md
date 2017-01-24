## Template 의 `` 와 '' 와 다른점
- '' 의 경우 템플릿의 내용이 길어지면 가독성이 떨어지고 멀티라인이 불가능.
- 이를 해결하기 위해서는 ES6 의 피쳐인 `` 를 사용
- `` 는 멀티라인이 가능하여 코드의 가독성이 높아짐

```javascript
// '' 경우
template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label>{{hero.name}}</div>'

// `` 경우
template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `
```

## Reusable Service
- 같은 데이터를 필요로 하는 컴포넌트의 개수가 많아질 때, 똑같은 코드를 반복 삽입 하는 것보다는 **재사용 가능한 데이터 서비스**를 생성하여 컴포넌트에 필요할 때 주입해주는 것이 좋다.
- 앵귤러 2의 데이터 서비스는 비동기 방식이다.
- `@Injectable()` 데코레이터에서 해당 서비스에 대한 메타 정보와, 해당 서비스에 주입할 디펜던시를 확인하는 메타 정보를 발생시킨다.
- 서비스를 사용하는 컴포넌트 입장에서는 서비스가 어디서 데이터를 가져오는지 알지 못한다. 서비스에서 호출한 데이터의 출처는 웹 서비스, 로컬스토리지, 임시 데이터가 될 수 있다.
- 서비스 생성시 주의할 점 :

  ``` javascript
  heroService = new HeroService(); // don't do this
  ```

  1. HeroService 생성자를 변경해야 할 때, 위와 같이 생성한 코드를 다 찾아서 고쳐줘야 하기 때문에 에러를 유발할 확률이 높고 테스팅에 부담이 된다.
  2. `new` 로 서비스를 생성하면, heroes 캐쉬 값을 다른 컴포넌트와 공유를 할 수 없다.
  3. 오프라인이나 임시 데이터를 사용하는 등의 다른 시나리오에서의 사용이 어려워진다.

## ngOnInit
- 서비스를 이용하여 데이터를 받아와서 화면에 표시해주는 작업을 constuctor 에 넣을 필요는 없다.
- constructor 에는 보통 간단하게 프로퍼티에 값을 매핑해주는 정도의 간단한 초기화 작업만 넣는 것이 정석이다.
- 따라서, 이러한 데이터 fetch 초기화 작업을 angular 2 에서는 `ngOnInit` 에서 한다.
- `lifecycle hook` 이라는 앵귤러의 컴포넌트 생명주기가 각 데이터의 생성, 변경, 삭제 시 이에 해당하는 작업을 자동으로 수행한다.

## 비동기 Promise 를 이용한 데이터 fetch

``` javascript
// app.component.ts
this.heroes = this.heroService.getHeroes();
```

- 앱 컴포넌트에서는 서비스로 서버에서 데이터를 얻어오는 과정을 기다려주지 않는다.
- 따라서 브라우저나 UI 에서 막히지 않고 얻어온 데이터를 표시하기 전에 표시해버리면 오류가 난다.
- 이런 경우 화면 렌더링을 효과적으로 수행하기 위해 Promise 사용이 필요하다.

``` javascript
// hero.service.ts
// 기존 코드
getHeroes(): Hero[] {
  return HEROES;
}

// Promise 를 이용한 코드
getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}
```

- Promise 는 원하는 결과가 준비 되었을 때 콜백을 호출해준다.
- Service 의 메서드를 Promise 로 변경하였으니, AppComponent 에도 동일하게 적용해주자.

``` javascript
// app.component.ts
// 기존
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}

// 변경
getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
```

## Router
-
