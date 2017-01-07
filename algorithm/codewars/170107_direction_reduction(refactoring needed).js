var test = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];  // ["WEST"]

function dirReduc(arr){
  var horizontalValue = 0,
      verticalValue = 0,
      result = [];

  if (arr.length <= 4) {
    switch (horizontalValue) {
      case 0:
        result.push("NORTH");
        result.push("SOUTH");
        break;
      case 1:
        result.push("NORTH");
        break;
      case -1:
        result.push("SOUTH");
        break;
      default:
        console.log("[Horizontal] arr.length is less than 5");
        break;
    }
    switch (verticalValue) {
      case 0:
        result.push("EAST");
        result.push("WEST");
        break;
      case 1:
        result.push("EAST");
        break;
      case -1:
        result.push("WEST");
        break;
      default:
        console.log("[Vertical] arr.length is less than 5");
        break;
    }
    return result;
  }

  for (var i = 0, length = arr.length; i < length; i++) {
    switch (arr[i]) {
      case "NORTH":
        horizontalValue += 1;
        break;
      case "SOUTH":
        horizontalValue -= 1;
        break;
      case "EAST":
        verticalValue += 1;
        break;
      case "WEST":
        verticalValue -= 1;
        break;
      default:
        console.log("nth has been given yet");
        return "";
    }
    console.log(" i : " + i + ". horizontalValue : " + horizontalValue +
    ". verticalValue : " + verticalValue + ".");
  }

  if (horizontalValue > 0) {
    while (horizontalValue > 0) {
      result.push("NORTH");
      horizontalValue -= 1;
    }
  } else if (horizontalValue < 0){
    while (horizontalValue < 0) {
      result.push("SOUTH");
      horizontalValue += 1;
    }
  }

  if (verticalValue > 0) {
    while (verticalValue > 0) {
      result.push("EAST");
      verticalValue -= 1;
    }
  } else if (verticalValue < 0){
    while (verticalValue < 0) {
      result.push("WEST");
      verticalValue += 1;
    }
  }

  // horizontalValue == 0 ? result.push("NORTH") : result.push("SOUTH");
  // verticalValue == 0 ? result.push("EAST") : result.push("SOUTH");
  return result;
}
