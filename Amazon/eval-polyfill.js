// 10+2+6+2*5=100

/**
 * @name evalExp
 * @param {String} expression
 * @description write a function which takes in a arithmetic expression as a string and returns it's evaluation
 * @returns {Number}
 */
function evalExp(expression) {
  let arr = expression.split("");
  let num1 = "",
    num2 = "",
    operator = "",
    next = false;

  for (let i in arr) {
    let char = arr[i];

    if (!Number.isNaN(+char)) {
      if (!operator) {
        num1 += char;
      } else {
        num2 += char;
        if (+i === arr.length - 1) num1 = evaluate(+num1, operator, +num2);
      }
    } else {
      if (!next) {
        next = true;
        operator = char;
      } else {
        num1 = evaluate(+num1, operator, +num2);
        num2 = "";
        operator = char;
      }
    }
  }

  return num1;
}

let OPERATORS = ["+", "-", "*", "/"];

function evaluate(num1, operator, num2) {
  switch (operator) {
    case OPERATORS[0]:
      return num1 + num2;
    case OPERATORS[1]:
      return num1 - num2;
    case OPERATORS[2]:
      return num1 * num2;
    case OPERATORS[4]:
      return num1 / num2;
  }
}

console.log(evalExp("10+2+6+2*5"));
