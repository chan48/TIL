// cracking the coding interview chapter #10
var arr = [90,70,60,30,10],
    temp = null;

var bubbleSorting = function(arr) {
  for (var i = 0, size = arr.length ; i < size; i++) {
    for (var j = 0; j < size - 1; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      console.log(arr);
    }
  }
  console.log("Sorted array is " + arr);
};
