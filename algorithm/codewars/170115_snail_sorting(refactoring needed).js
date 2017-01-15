snail([[]]) - Expected: '[]'
snail([[1]]) - Expected: '[1]'
snail([[1,2,3],[4,5,6],[7,8,9]]) - Expected: '[1, 2, 3, 6, 9, 8, 7, 4, 5]'
snail([[1,2,3],[8,9,4],[7,6,5]]) - Expected: '[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]'
snail([[1,2,3,4,5,6],[20,21,22,23,24,7],[19,32,33,34,25,8],[18,31,36,35,26,9],[17,30,29,28,27,10],[16,15,14,13,12,11]]) - Expected: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]'
snail([[1,2,3,4],[12,13,14,5],[11,16,15,6], [10,9,8,7]])

[1 ,2 ,3 ,4]
[12,13,14,5]
[11,16,15,6]
[10,9 ,8 ,7]

var snail = function (arr) {
  var length = arr.length,
      result = [];

  if (length == 0) return result;
  if (length == 1) return arr[0];

  for (var i = 0; i < length; i++) {
    result.push(arr[0][i]);
  }
  for (var i = 1; i < length; i++) {
    result.push(arr[i][length-1]);
  }
  for (var i = length-1; i > 0; i--) {
    result.push(arr[length-1][i-1]);
  }
  // console.log("result : ", result); // [1, 2, 3, 4, 5, 6, 7]
  for (var i = length-1; i > 1; i--) {
    result.push(arr[i-1][0]);
  }

  var subArr = [];
  for (var i = 1 ; i < length-1 ; i++) {
    subArr.push(arr[i].splice(1, length-2));
  }

  result = result.concat(snail(subArr));
  return result;
}
snail([[1,2,3],[8,9,4],[7,6,5]]);
snail([[1,2,3,4],[12,13,14,5],[11,16,15,6], [10,9,8,7]]);


// incremental & decremental in turn
arr[0][0]   arr[0][0]
arr[0][1]   arr[0][1]
arr[0][2]   arr[0][2]
arr[1][2]   arr[0][3] -
arr[2][2]   arr[1][3]
arr[2][1]   arr[2][3]
arr[2][0]   arr[3][3] -
arr[1][0]   arr[3][2]
arr[1][1]   arr[3][1]
            arr[3][0] -
            arr[2][0]
            arr[1][0] -
            arr[1][1]
            arr[1][2] -
            arr[2][2] -
            arr[2][1] -


// Best Solution
snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
