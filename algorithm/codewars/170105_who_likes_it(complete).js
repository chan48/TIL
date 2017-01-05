function likes(names) {
  var arrLength = names.length,
      result = "";

  if (arrLength == 0) {
    result = "no one likes this";
  } else if (arrLength == 1) {
    result = names[0] + " likes this";
  } else if (arrLength == 2) {
    result = names[0] + " and " + names[1] + " like this";
  } else if (arrLength == 3) {
    result = names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    result = names[0] + ", " + names[1] + " and " + (arrLength - 2) + " others like this";
  }

  return result;
}

// Best Practice
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0: return "no one likes this"; break;
    case 1: return names[0] + " likes this"; break;
    case 2: return names[0] + " and " + names[1] + " like this"; break;
    case 3: names[0] + ", " + names[1] + " and " + names[2] + " like this"; break;
    default: names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}
