titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
  var arr = title.toLowerCase().split(" "),
      minorArr = minorWords.split(" ");

  for (var i = 0, length = arr.length ; i < length ; i++) {
    for (var j = 0; j < minorArr.length; j++) {
      if (minorArr[j] != arr[i]) {
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
      } else {
        console.log("title equals to be minorWords");
      }
    }
  }

  console.log(arr);
}
