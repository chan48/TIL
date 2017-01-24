// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("
// Fail on thie example :
// m( wmmRmIPmmumT)m

var word = "m( wmmRmIPmmumT)m";
var duplicateCheck = false,
    tempMap = {},
    wordArr = [];

function duplicateEncode(word){
    wordArr = word.toLowerCase().split("");
    wordArr.forEach(function (idx) {
      tempMap[idx] != null ? tempMap[idx] += 1 : tempMap[idx] = 1;
    });
    console.log("tempMap : ", tempMap);

    for (var key in tempMap) {
      for (var i = 0; i < wordArr.length; i++) {
        if (tempMap[key] >= 2 && wordArr[i] == key) {
          wordArr[i] = ")";
          console.log("duplicated array value : " + key);
        } else if (tempMap[key] < 2 && wordArr[i] == key){
          wordArr[i] = "(";
          console.log("non duplicated array value : " + key);
        }
      }
    }

    console.log("wordArr : " + wordArr);
    return wordArr.join("");
}
duplicateEncode(word);
