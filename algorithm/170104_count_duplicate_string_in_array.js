var str = "aabbcd";
var arr = str.split("");
var valueMap = {};
var duplicateArray = [];
var duplicateCount = 0;
var finalResult = "";

function duplicateCount(arr) {
  arr.forEach(function (x) {
    if (!valueMap[x]) {
      console.log(valueMap);
      valueMap[x] = 1;
    } else {
      valueMap[x] += 1;
    }
  });

  for (var key in valueMap) {
    if (valueMap[key] > 1) {
      console.log("This " + key + " has duplicate value : " + valueMap[key]);
      duplicateArray.push(key);
      duplicateCount += 1;
    }
  }

  if (duplicateCount == 0) {
    return 0 + "# no characters repeats more than once";
  } else if (duplicateCount == 1) {
    return duplicateCount + "# '" + duplicateArray.pop() + "'";
  } else {

    // 중복 문자 3개면 'and' 2개
    // 중복 문자 4개면 'and' 3개
    // ...
    // 위를 구현하는 방법?
    duplicateArray.forEach(function (x) {
      finalResult = "'" + duplicateArray[x] + "'";

    });
    return duplicateCount + "# " + finalResult;
  }
}
