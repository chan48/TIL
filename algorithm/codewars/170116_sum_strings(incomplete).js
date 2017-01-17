// first point to solve : shorter string should be added to the last digits of the longer string
// second point to sovle : in case sum of the two numbers exceeds 10, the very next number should go up


sumStrings("135","247");
sumStrings("1","24");
sumStrings("135","2");
sumStrings("135","27");

// my solution that doesn't work with the large numbers
function sumStrings(a,b) {
  if (a && a !== undefined && a !== null) var a = parseFloat(a);
  else var a = 0;
  if (b && b !== undefined && b !== null) var b = parseFloat(b);
  else var b = 0;

  return (a+b).toFixed(1)+"";
}


























// sum strings
add("135","27");
function add(a, b) {
  if ((a | 0) == 0 && (b | 0) == 0) {
      return '0';
  }

  a = a.split('').reverse();
  b = b.split('').reverse();
  var result = [];

  for (var i = 0; (a[i] >= 0) || (b[i] >= 0); i++) {
      var sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

      if (!result[i]) {
          result[i] = 0;
      }

      var next = ((result[i] + sum) / 10) | 0;
      result[i] = (result[i] + sum) % 10;

      if (next) {
          result[i + 1] = next;
      }
  }

  return result.reverse().join('');
}
