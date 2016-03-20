# Object

## First Video
- Object is often called as a composite value
- `var obj = {};` 여기서 {} 는 Object Literal
- 오브젝트 안의 프로퍼티가 외부의 배열을 참조할 경우, 오브젝트를 통해 프로퍼티를 조작하게 되면 바로 그 외부의 배열의 값을 변경하는 것과 같다.
- `obj["property 1"]`을 이용하면 property 의 이름에 공백을 사용할 수 있다.
``` javascript
mybox.["# of stops"] = 2;
var mybox = {
    destination1 : "korea",
    destination2 : "japan",
    "# of stops" : 2
};
```

- ["string"]의 접근방법으로 다음과 같이 하드코딩을 예방할 수 있다.
``` javascript
for ( var i = 0 ; i <= mybox["# of stops"] ; i ++) {
    console.log(mybox["destination "+i]); // 결과 : korea, japan
}
```

- String index 접근 방법으로 다음과 같이 객체 추가도 가능하다.
```javascript
function addBook (box, name, writter) {
    box["# of Books"]++;
    box["book" + box["# of Books"]] = {title: name, author: writer};
}
addBook(mybox, "The Journey of Objects", "Josh");
```

## Object Functionality
객체 안에 함수를 넣는 방법은 다음 두가지를 활용한다.
1.
```javascript
var aquarium = {
    Nemo : { type: "fish", species : "clownfish", length: 3.7},
    addFunction : function (name, type, species, length) {
        this[name] = {type: type, species: species, length: length};
    }
};
```
2.
```javascript
aquarium.takeOut = function(name) {
  this[name].name = name;
  var temp = this[name];
  delete this[name];
  return temp;  
};
```
## For In Loop to Objects.
- 실수 할 수 있는 부분 
```javascript
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns(guns) {
  for (var speargun in guns) {
    // modify the log message here
        console.log("Behold! "+speargun+", with "+guns[speargun].heft+" heft!"); // guns.speargun.heft 로 접근 할 경우, speargun 이 string 값이므로 property 에 접근할 수 없다.
  }
}

listGuns(rockSpearguns);
```

