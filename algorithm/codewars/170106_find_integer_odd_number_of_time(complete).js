var arr = [1,1,2,-2,5,2,4,4,-1,-2,5]

function findOdd(A) {
  var find = {},
      result = 0;

  for (var i = 0; i < A.length; i++) {
    find.hasOwnProperty(A[i]) ? find[A[i]] += 1 : find[A[i]] = 1;
  }

  for (var key in find) {
    if (find[key] % 2 == 1) result = Number(key);
  }

  return result;
}

findOdd(arr);

// Solution
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });

  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
