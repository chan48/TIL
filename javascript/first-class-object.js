// 함수를 객체 속성에 담을 수 있다.
var car = {
  price: 1000,
  speed: function () {
    console.log("nice");
  }
};
car.speed(); // nice

// 함수를 변수 안에 담을 수 있다.
var obj = function() {};
console.log(obj); // function () {}

// 함수는 다른 함수의 인자로 들어올 수 있다 (Callback 함수)
function getNumbers() {
    return "1";
}
function sumNumbers(getNumbers) {
  getNumbers();
}
