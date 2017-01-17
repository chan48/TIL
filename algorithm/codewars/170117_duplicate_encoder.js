Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("(( @"),"))((");

duplicateEncode("recede")
function duplicateEncode(word){
  var result = [],
      wordMap = {};

  word = word.toLowerCase().split("");
  for (var i = 0, length = word.length; i < length; i++) {
    if (!wordMap[word[i]]) wordMap[word[i]] = 1;
    else wordMap[word[i]] += 1;
  }

  for (var i = 0, length = word.length; i < length; i++) {
    if (wordMap[word[i]] > 1) result.push(")");
    else result.push("(");
  }

  return result.join("");
}

// The first draft
function duplicateEncode(word){
    var duplicateCheck = false,
    tempMap = {},
    wordArr = [];

    wordArr = word.toLowerCase().split("");
    wordArr.forEach(function (idx) {
      tempMap[idx] != null ? tempMap[idx] += 1 : tempMap[idx] = 1;
    });
    // console.log("tempMap : ", tempMap);

    for (var key in tempMap) {
      for (var i = 0; i < wordArr.length; i++) {
        if (tempMap[key] >= 2 && wordArr[i] == key) {
          wordArr[i] = ")";
          // console.log("duplicated array value : " + key);
        } else if (tempMap[key] < 2 && wordArr[i] == key){
          wordArr[i] = "(";
          // console.log("non duplicated array value : " + key);
        }
      }
    }

    // console.log("wordArr : " + wordArr);
    return wordArr.join("");
}


// Best Practice
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
