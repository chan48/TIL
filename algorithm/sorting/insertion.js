var arr = [4, 30, 2, 100, 23];

var insertionSorting = function (arr) {
  for (var i = 0, length = arr.length; i < length; i++) {
    for (var j = i+1; j < length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    console.log("arr " + i + " : ", arr);
    }
  }
  console.log("Sorted array is " + arr);
};

// call by reference
var insertionSorting = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        Swap(arr[i], arr[j]);
      }
    }
    console.log("arr " + j + " : ", arr);
  }
  console.log("Sorted array is " + arr);
};

function Swap(a, b) {
  var temp = null;
  temp = b;
  b = a;
  a = temp;
}
