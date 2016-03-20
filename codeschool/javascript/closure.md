# Closure

## First Video
```javascript
function testClosure() {
    var x = 10;
    return x;
}
console.log(x);  <--- error!

function testClosure() {
    var x = 10;
    function closeX() {
        return x;
    }
    return closeX;
}
```

## Modifying Bound Values after Closure
```javascript
function buildCoveTicketMaker(transport) {
    var passengerNumber = 0;
    return function(name) {
        passengerNumber++;
        alert("Here is your transport ticket via the" + transport + ".\n" +
              "welcome to the cold closures cove " + name + "!" +
              "You are passenger #" + passengerNumber + "."
        );
    }
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
getSubmarineTicket("Toad"); // transport -> Submarine , name -> Toad , passengrNumber -> 1 
```


## Last Video
-It's really important to pay a close attention to return times and final variable states at the very last moment when using closure.

-The function's actual return is the true "moment of closure", when the environment and all necessary variables are packaged up.

-Clousures bind the values at the very last time.
**아래는 클로져를 사용할 때 가장 흔하게 범하는 오류 케이스
``` javascript
function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    for (var i = 0 ; i < passengerArray.length ; i++) {
        if (passengerArray[i] == name) {
            torpedoAssignment = function () {
                alert("Ahoy, " + name + "!\n" +
                      "Man your post at Torpedo #" + (i+1) + "!");
            }
        }
    }
    return torpedoAssignment;
}
var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", ~~ ,"9까지"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
giveAssignment();  // 3이 나올것이라고 예상하지만 결과는 9
```

** 위의 잘못된 예는 이런식으로 바로 잡는다. (방법1)
```javascript
function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    for (var i = 0 ; i < passengerArray.length ; i++) {
        if (passengerArray[i] == name) {
            return function () {  // 이렇게 함으로써 i가 끝까지 도는 것을 막고, i를 locked 해놓을 수 있다.
                alert("Ahoy, " + name + "!\n" +
                      "Man your post at Torpedo #" + (i+1) + "!");
            }
        }  
    }
}
var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", ~~ ,"9까지"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
giveAssignment();
```

** 이렇게도 수정이 가능하다. (방법2)
```javascript
function makeTorpedoAssigner (passengerArray) {
    
    return function(name) {
        for (var i = 0 ; i < passengerArray.length ; i++) {
            if (passengerArray[i] == name) {
                return function () {  // 이렇게 함으로써 i가 끝까지 도는 것을 막고, i를 locked 해놓을 수 있다.
                    alert("Ahoy, " + name + "!\n" +
                          "Man your post at Torpedo #" + (i+1) + "!");
                }
            }  
        }
    }; 

}
var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", ~~ ,"9까지"];
var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("Chewie");
```

*마지막 강의는 꼭 다시 리뷰할 것!