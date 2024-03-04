// ==> `pipe` and `compose` 
let myName = "John";

function capitalize(str) {
  return str.toUpperCase();
}

function reverse(str) {
  let arr = str.split("");
  arr = arr.reverse();
  return arr.join("");
}

function getLastTwoChars(str) {
return str.slice(str.length - 2, str.length);
}

function pipe (...fns) {
  return (value) => {
    return fns.reduce((currentValue, currentFunc) => {
      return currentFunc(currentValue);
    }, value);
  }
}

function compose (...fns) {
  return (value) => {
    return fns.reduceRight((currentValue, currentFunc) => {
      return currentFunc(currentValue)
    }, value); 
  }
}

// let capitalName = capitalize(myName);
// let reverseCapitalName = reverse(capitalName);
// let lastTwoCharsOfReverseCapitalName = getLastTwoChars(reverseCapitalName);

// console.log(lastTwoCharsOfReverseCapitalName);

let pipeVal = pipe(capitalize, reverse, getLastTwoChars)(myName);
let composeVal = compose(capitalize, reverse, getLastTwoChars)(myName);

// console.log(pipeVal, composeVal);