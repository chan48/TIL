var test1 = "()";
var test2 = "(())((()())())";
var test3 = ")(";
var test4 = ")()("

function validParentheses(parens){
  var validStack = [],
      validCheck = 0;
  validStack = parens.split("");

  for (var i = 0, length = validStack.length ; i < length; i++) {
    validStack[i] == "(" ? validCheck += 1 : validCheck -= 1;
    if (validCheck < 0) {
      return false;
    }
  }

  return validCheck == 0 ? true : false;
}
validParentheses(test2);

// 규칙
- 괄호 순서의 관계없이 모든 괄호의 합이 0이 되면 유효한 괄호 값이다. (O)
- 괄호의 순서를 기억해야 한다. ()
  - 열고 나면 반드시 닫아야 한다.
  - 열기 전에 닫으면 유효하지 않다.
