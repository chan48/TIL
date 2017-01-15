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
  var result = [];

  

  return result;
}
snail([[1,2,3],[8,9,4],[7,6,5]]);
snail([[1,2,3,4],[12,13,14,5],[11,16,15,6], [10,9,8,7]]);


// incremental & decremental in turn
arr[0][0]   arr[0][0]
arr[0][1]   arr[0][1]
arr[0][2]   arr[0][2]
arr[1][2]   arr[0][3]
arr[2][2]   arr[1][3]
arr[2][1]   arr[2][3]
arr[2][0]   arr[3][3]
arr[1][0]   arr[3][2]
arr[1][1]   arr[3][1]
            arr[3][0]
            arr[2][0]
            arr[1][0]
            arr[1][1]
            arr[1][2]
            arr[2][2]
            arr[2][1]



// @@ for 문 풀이 실패
// for (var i = 0; i < arr.length; i++) {
//   if (!switched) {
//     result.push(arr[i][arr.length-1]);
//   } else {
//     for (var j = 0; j < arr[i].length; j++) {
//       result.push(arr[i][j]);
//     }
//     switched = !switched;
//   }
//
//   if (i == arr.length) switched = !switched;
// }


// @@ Solution with for 문
// if (arr.length == 0) return result;
//
// var max = arr[0].length - 1;
// for (var i = 0; i <= max; i++) {
//   result.push(arr[0][i]);
// }
//
// for (var i = 1; i < max; i++) {
//   result.push(arr[i][max]);
// }
//
// for (var i = max; i >= 0; i--) {
//   result.push(arr[max][i]);
// }
//
// for (var i = max-1; i > 0; i--) {
//   result.push(arr[i][0]);
// }
//
//
// var subArray = [];
// for (var i=1;i<max;i++) {
//   subArray.push(arr[i].splice(1,max-1));
// }
//
// console.log("subArray : ", subArray);
//
// // //call it recursively
// result = result.concat(snail(subArray));
//
// return result;
