var test3 = ["NORTH", "WEST", "SOUTH", "EAST"];

dirReduc(test3);
function dirReduc(arr){
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "NORTH":
        if (result[result.length - 1] != "SOUTH") result.push("NORTH");
        else if (result[result.length - 1] == "SOUTH") result.pop("SOUTH");
        break;
      case "SOUTH":
        if (result[result.length - 1] != "NORTH") result.push("SOUTH");
        else if (result[result.length - 1] == "NORTH") result.pop("NORTH");
        break;
      case "EAST":
        if (result[result.length - 1] != "WEST") result.push("EAST");
        else if (result[result.length - 1] == "WEST") result.pop("WEST");
        break;
      case "WEST":
        if (result[result.length - 1] != "EAST") result.push("WEST");
        else if (result[result.length - 1] == "EAST") result.pop("EAST");
        break;
      default:
    }
  }

  return result;
}


// 오리지날 소스
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


// Best Practice
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
