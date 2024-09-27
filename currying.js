// ==> SUM WITHOUT `CURRYING`
function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// ==> SUM WITH `CURRYING`
function add(a) {
  //26
  return (b) => {
    //undefined
    if (b) return add(a + b);
    return a;
  };
}

// console.log(sum(5, 10, 4, 7));
// console.log("Sum: ", add(5)(10)(4)(7)());
