// 피보나치 예제
// number: 1 2 3 4 5 6 7  8  9  10 11
// value : 1 1 2 3 5 8 13 21 34 55

// Simple operation
function Fibonacci(num) {
  if (num == 0) return 0;
  if (num == 1) return 1;
  return Fibonacci(num-1) + Fibonacci(num-2);
}

// Apply cache to turn the function above into a dynamic programming
// 1. Top-Down 방식
function Fibonacci(num) {
  return Fibonacci_Dynamic(num, new Array(num+1));
}

function Fibonacci_Dynamic(num, arr) {
  if (num == 0 || num == 1) return num;

  console.log("array : ", arr);

  if (arr[num] == null) {
    arr[num] = Fibonacci_Dynamic(num-1, arr) + Fibonacci_Dynamic(num-2, arr);
  }

  return arr[num];
}

// 2. Bottom-Top 방식
function Fibonacci(num) {
  var a = 0, b = 1, c = 0;
  if (num == 0) return a;
  if (num == 1) return b;
  for (var i = 2; i < num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return a + b;
}
