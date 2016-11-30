> '클래스 상속보다 객체 합성을 우선시하라'

## 클래스 방식 vs 새로운 방식 상속 패턴
- 자바 상속 패턴을 따른 클래스 방식

``` javascript
Person adam = new Person();
var adam = new Person();
```

## 클래스 방식 상속패턴 #1
- inherit() 함수를 선언하고 이용하는 방법

``` javascript
function inherit(C, P) {
  C.prototype = new P();
}

function Parent(name) {
  this.name = name || "Adam";
}

Parent.prototype.say = function () {
  return this.name;
};

function Child(name) {

}

inherit(Child, Parent);

// 상속 결과
var kid = new Child();
kid.say(); // "Adam"
```

## 프로토 타이핑 체이닝
-
