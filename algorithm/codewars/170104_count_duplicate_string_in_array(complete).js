"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'

function duplicateCount(text){
  var arr = text.toLowerCase().split(""),
      dpcnt = {},
      result = 0;
  for (var i = 0, length = arr.length ; i < length; i++) {
    dpcnt[arr[i]] == null ? dpcnt[arr[i]] = 0 : dpcnt[arr[i]] += 1;
  }
  for (var key in dpcnt) {
    dpcnt[key] > 0 ? result += 1 : result;
  }
  return result;
}
duplicateCount("aabbcde");

// Best Solution to understand the regular expression
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
