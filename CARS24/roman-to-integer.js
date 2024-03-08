// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000


// Roman to Integer

// XL
// Input:"LVIII"
// Output: 58
// Explanation: C = 100, L = 50, XXX = 30 and III = 3.

// Input:"MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


var map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};

// XL
function convertNumber(str) {
  let sum = 0;
  let i = 0
  while(i < str.length) {
    let twoChars;
    if(i === str.length -1) {
      twoChars = str[i];
      i++;
    } else {
      twoChars = str.slice(i, i+2);
      console.log({twoChars})
    }
    if(map[twoChars]) {
      sum += map[twoChars]
      i+=2;
    }
    else if(map[str[i]]) {
      sum += map[str[i]];
      i++;
    };
  }
  return sum;
}


console.log(convertNumber("MCMXCIV"))