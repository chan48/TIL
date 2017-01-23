stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

// points to solve
// 1. remove the duplicate query string in the given URL
// 2. eliminate the second parameter in

stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])
function stripUrlParams(url, paramsToStrip){
  // if (!paramsToStrip) return url;
  var result = "";

  // eliminate the second param (comes with & before)
  var a = url.split(/\?/)[1].split(/\&/).map(function (x) {
      if(x.split(/=/)[0] == paramsToStrip) {
        result += x;
      }
  });

  // return result;
  return url.replace(result+"&", "");
}


// Regex replace
var b = "hello";
var c = b.replace("ll", "oo");
console.log(c);
