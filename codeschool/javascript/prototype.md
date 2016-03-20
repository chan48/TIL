# Prototype

## Prototypes
- A Prototype is like a blueprint Object for the Object we are trying to create.
- Inheritance helps avoid over-coding multiple properties and methods into similar objects.
- Constructor using Prototype
```javascript
function Shoe(shoeSize, shoeColor, forGender, constructorStyle) {
    this.size = shoeSize;
    this.color = shoeColor;
    this.gender = forGender;
    this.construction = constructorStyle;
    this.putOn = function() {alert("Shoe's on1");};
    this.takeOff = function() {alert("What's that smell?");};
}
var beachShoe = new Shoe(10, "blue", "women", "flipflop");
```

**위처럼 만약 모든 객체들이 공통으로 사용할 것 같은 메서드가 있다면,
```javascript
Shoe.prototype = {
    putOn : function(){alert("Your"+this.construction+"'s" +"on!");},
    takeOff : function(){this.size}
};
```
이런 식으로 공통 메서드만 따로 빼줄 수 있다.

## Overriding Prototypal Methods
- 연산자 == 와 ===의 차이점은 type 비교를 하느냐 안하느냐이다.
-
```javascript
var Tornado = function (category, affectedAreas, windGust) {
    this.category = category;
    this.affectedAreas = affectedAreas;
    this.windGust = windGust;
};
var cities = [["Seoul", 200],["Gwangju",150]];
var twister = new Tornado("F5", cities, 220);

Tornado.prototype.valueOf = function() {
    var sum = 0;
    for (var i = 0; i < this.affectedAreas.length ; i ++) {
        sum += this.affectedAreas[i][1];
    }
    return sum;
};
```

- 어떤 객체가 해당 프로퍼티를 갖고 있는지, 프로로타입 체인을 이용하여 확인하는 방법
```javascript
Object.prototype.findOwnerOfProperty = function(propName){
    var currentObject = this;
    while (currentObject !== null) {
        if (currentObject.hasOwnProperty(propName)) {
            return currentObject;
        }
        else {
            currentObject = currentObject.__proto__;
        }
    }
    return "No Property found";
};

twister.findOwnerOfProperty("valueOf"); // Object {valueOf: function, toString: function}
``` 