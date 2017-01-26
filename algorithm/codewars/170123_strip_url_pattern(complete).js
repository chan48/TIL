stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

// points to solve
// 1. remove the duplicate query string in the given URL
// 2. eliminate the second parameter in

stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])
function stripUrlParams(url, paramsToStrip){
  var result = "",
      queryKey = "",
      queryMap = {};

  // eliminate the second param (type : &params)
  if (url.split(/\?/)[1]) {
    url.split(/\?/)[1].split(/\&/).map(function (x) {
        queryKey = x.split(/=/)[0];

        if(queryKey == paramsToStrip || queryMap[queryKey]) {
          url = url.replace("&" + x, "");
        } else if (!queryMap[queryKey]){
          queryMap[queryKey] = 1;
        }
    });
  }
  return url;
}

// Best Solution
function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
  });
}
