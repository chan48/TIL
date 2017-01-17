// points to solve
// 1. close brace 를 만났을 때, 가장 최근에 들어간 open brace 와 일치해야 한다.

validBraces( "(){}[]" ) => returns true
validBraces( "[(])" ) => returns false
validBraces( "([{}])" ) => returns true
validBraces("(){}[]");
validBraces("}}]]))}])"); => returns false


// parentheses ( )
// brackets [ ]
// curly braces { }
function validBraces(braces){
  console.log(braces);

  braces = braces.split("");

  var parenthesesSum = 0,
      bracketsSum = 0,
      curlyBraceSum = 0,
      braceStack = [],
      result = false;

  for (var i = 0; i < braces.length; i++) {
    switch (braces[i]) {
      case "(":
        parenthesesSum -= 1;
        braceStack.push(braces[i]);
        break;
      case "[":
        bracketsSum -= 1;
        braceStack.push(braces[i]);
        break;
      case "{":
        curlyBraceSum -= 1;
        braceStack.push(braces[i]);
        break;
      case ")":
        if (braceStack.pop(braces[i]) == "(") {
          parenthesesSum += 1;
          valid = true;
        } else {
          valid = false;
        }
        break;
      case "]":
        if (braceStack.pop(braces[i]) == "[") {
          bracketsSum += 1;
          valid = true;
        } else {
          valid = false;
        }
        break;
      case "}":
        if (braceStack.pop(braces[i]) == "{") {
          curlyBraceSum += 1;
          valid = true;
        } else {
          valid = false;
        }
        break;
      default:
    }
  }

  if (parenthesesSum == 0 && bracketsSum == 0 && curlyBraceSum == 0 && valid) result = true;
  return result;
}


// didn't consider the order of each brace
// ex) "[(])" is wrong even if each brace has their own pair.
function validBraces(braces){
  braces = braces.split("");

  var parenthesesFlag = 0,
      bracketsFlag = 0,
      curlyBraceFlag = 0,
      result = false;

  for (var i = 0; i < braces.length; i++) {
    switch (braces[i]) {
      case "(":
        parenthesesFlag -= 1;
        break;
      case ")":
        parenthesesFlag += 1;
        break;
      case "[":
        bracketsFlag -= 1;
        break;
      case "]":
        bracketsFlag += 1;
        break;
      case "{":
        curlyBraceFlag -= 1;
        break;
      case "}":
        curlyBraceFlag += 1;
        break;
      default:
    }
  }

  if (parenthesesFlag == 0 && bracketsFlag == 0 && curlyBraceFlag == 0) result = true;
  return result;
}


// Best Practice
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
