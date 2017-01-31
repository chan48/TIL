reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"

function reverseVowels(str) {
  // var vowel = ["a", "e", "i", "o", "u"];
  var vowel = {
      "a" : null,
      "e" : null,
      "i" : null,
      "o" : null,
      "u" : null
  };
  var vowelSwitch = {};

  var arr = str.toLowerCase().split("");
  for (var i = 0; i < arr.length; i++) {
    if (vowel.hasOwnProperty(arr[i])) {
      console.log("this is vowel : " + arr[i]);
      vowelSwitch[arr[i]] = i;
    }
  }
  console.log(vowelSwitch);

  // swap the vowels
  str.replace(vowelSwitch)
}

// solution
const reverseVowels = str => {
  let vowels = str.replace(/[^aeiou]/gi, '').split('');
  console.log(str);
  return str.replace(/[aeiou]/gi, _ => vowels.pop());
};

reverseVowels("Hello!"); // "Holle!"
