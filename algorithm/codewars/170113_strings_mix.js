mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr"
mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"

// function checkValue(obj) {
//   return obj && obj !== 'null' && obj !== 'undefined'
// }


mix("Are they here", "yes, they are here");
function mix(s1, s2) {
  var s1Arr = s1.replace(/\s+/g, '').replace(/\W/gi, '').toLowerCase().split(""),
      s2Arr = s2.replace(/\s+/g, '').replace(/\W/gi, '').toLowerCase().split(""),
      s1Map = {},
      s2Map = {};

  for (var i = 0; i < s1Arr.length; i++) {
    s1Map[s1Arr[i]] !== undefined ? s1Map[s1Arr[i]] += 1 : s1Map[s1Arr[i]] = 0;
  }

  for (var i = 0; i < s2Arr.length; i++) {
    s2Map[s2Arr[i]] !== undefined ? s2Map[s2Arr[i]] += 1 : s2Map[s2Arr[i]] = 0;
  }

  console.log(s1Map);
  console.log(s2Map);
}
