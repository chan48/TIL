// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var arr = [ 1, true, 2, 1, 0, 1, 0, 0 ];
var moveZeros = function (arr) {
  for (var i = 0, length = arr.length; i < length ; i++) {
    if (arr[i] === 0) {
      arr.splice(arr.indexOf(arr[i]), 1);
      arr.push(0);
    }
  }
  return arr;
};
moveZeros(arr);


// Best Practice
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
};
