mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr"
mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"

mix("Are they here", "yes, they are here");
function mix(s1, s2) {
  var s1Arr = s1.replace(/\s+/g, '').replace(/\W/gi, '').toLowerCase().split(""),
      s2Arr = s2.replace(/\s+/g, '').replace(/\W/gi, '').toLowerCase().split(""),
      s1Map = {},
      s2Map = {},
      result = "";

  for (var i = 0; i < s1Arr.length; i++) {
    s1Map[s1Arr[i]] !== undefined ? s1Map[s1Arr[i]] += 1 : s1Map[s1Arr[i]] = 1;
  }

  for (var i = 0; i < s2Arr.length; i++) {
    s2Map[s2Arr[i]] !== undefined ? s2Map[s2Arr[i]] += 1 : s2Map[s2Arr[i]] = 1;
  }

  console.log(s1Map);
  console.log(s2Map);

  var s1SortedArr = sortMap(s1Map);
  var s2SortedArr = sortMap(s2Map);
  var totalLength = 0;
  s1SortedArr.length - s2SortedArr.length > 0 ? totalLength = s1SortedArr.length : totalLength = s2SortedArr.length;

  for (var i = 0; i < totalLength; i++) {
    if (s1Map[s1SortedArr[i]] > 1 && s2Map[s2SortedArr[i]] > 1) {
      if (s1Map[s1SortedArr[i]] > s2Map[s2SortedArr[i]]) {
        result += 1 + ":" + concatKey(s1SortedArr[i], s1Map[s1SortedArr[i]]);
      } else if (s2Map[s2SortedArr[i]] > s1Map[s1SortedArr[i]]) {
        result += 2 + ":" + concatKey(s2SortedArr[i], s2Map[s2SortedArr[i]]);
      } else {
        result += "=:" + concatKey(s1SortedArr[i], s1Map[s1SortedArr[i]]);
      }
      result += "/";
    }

    if (i == totalLength - 1) {
      result = result.replace(/\/$/gi, "");
    }
  }

  return result;
}

function concatKey(k, v) {
  var concatResult = "";
  for (var i = 0; i < v; i++) {
    concatResult += k;
  }
  return concatResult;
}

function sortMap(obj) {
  var result = Object.keys(obj).sort(function (a, b) {
    return obj[b] - obj[a];
  });
  return result;
}
