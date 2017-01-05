var ls = [50, 55, 57, 58, 60];

function chooseBestSum(t, k, ls) {
  // t = total distance
  // k = number of town to visit
  // ls = list of distances
  var bestPossibleSum = 0;
  var cnt = 0;
  var sum = [];

  if (ls.length < k) return null;

  for (var i = 0; i < ls.length; i++) {
    for (var j = i+1; j < ls.length; j++) {
      for (var k = j+1; k < ls.length; k++) {
        cnt += 1;
        sum[cnt] = ls[i] + ls[j] + ls[k];
        console.log("1) " + ls[i] + ", 2) " + ls[j] + ", 3) " + ls[k] +
          ". Total count : " + cnt + ", Sum : " + sum[cnt]);
      }
    }
  }

  sum = SortSum(sum);
  for (var i = 0; i < cnt; i++) {
    if (sum[i] > t) {
      bestPossibleSum = sum[i-1];
      break;
    }
  }
  return bestPossibleSum;
}

function SortSum(n) {
  n.sort(function (a, b) {
    return a - b;
  });
  return n;
}

// 5C3 조합 만들기
// 이전 케이스로부터 또 다른 문제를 풀어나가는 과정에 해당
// 재귀함수 적용해보기
function ListCombination(t, ls) {
  var cnt = 0;
  var sum = [];
  var result = 0;
  for (var i = 0; i < ls.length; i++) {
    for (var j = i+1; j < ls.length; j++) {
      for (var k = j+1; k < ls.length; k++) {
        cnt += 1;
        console.log("1) " + ls[i] + ", 2) " + ls[j] + ", 3) " + ls[k] + ". Total count : " + cnt);
        sum[cnt] = ls[i] + ls[j] + ls[k];
      }
    }
  }

  for (var a = 0; a < cnt; a++) {
    if (sum[a] > t) {
      result = sum[a-1];
    }
  }

  console.log(sum);
}


chooseBestSum(ts);
