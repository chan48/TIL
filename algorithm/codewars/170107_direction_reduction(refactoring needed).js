// var test1 = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];  // ["WEST"]
// var test2 = ["NORTH", "EAST"];
// var test3 = ["NORTH", "WEST", "SOUTH", "EAST"];
// var test4 =
// ['EAST','WEST','NORTH','SOUTH','NORTH','EAST','EAST','WEST','NORTH','SOUTH'];
var test5 =
['NORTH','SOUTH','WEST','EAST','NORTH','SOUTH','NORTH','EAST','WEST','EAST','SOUTH','NORTH','WEST', 'EAST'];


// 바로 인접하지 않은 N-S W-E 쌍에 대해서는 줄이지 않는다를 구현
var test3 = ["NORTH", "WEST", "SOUTH", "EAST"];

function dirReduc(arr){
  var verFlag = false,
      horFlag = false,
      result = [];

  console.log("@@@ Array : ", arr);

  for (var i = 0, length = arr.length; i < length; i++) {
    switch (arr[i]) {
      case "NORTH":
        var southIdx = result.lastIndexOf("SOUTH");
        southIdx > -1 ? result.splice(southIdx, 1) : result.push("NORTH");
        break;
      case "SOUTH":
        var northIdx = result.lastIndexOf("NORTH");
        northIdx > -1 ? result.splice(northIdx, 1) : result.push("SOUTH");
        break;
      case "EAST":
        var westIdx = result.lastIndexOf("WEST");
        westIdx > -1 ? result.splice(westIdx, 1) : result.push("EAST");
        break;
      case "WEST":
        var eastIdx = result.lastIndexOf("EAST");
        eastIdx > -1 ? result.splice(eastIdx, 1) : result.push("WEST");
        break;
      default:
        console.log("nth has been given yet");
        return "";
    }
    console.log(" result : ", result);
  }

  return result;
}
