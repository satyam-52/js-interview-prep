function memoize(fn) {
  let cache = {};
  return (...attr) => {
    if (cache[attr.join(",")]) return cache[attr.join(",")];
    const result = fn(...attr); // expensive computation
    cache[attr.join(",")] = result;
    return result;
  };
}

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

const memoizedFactorial = memoize(factorial);

// console.time();
// for (let i = 0; i < 10000; i++) {
//   memoizedFactorial(10000);
//   // factorial(10000);
//   console.log(`Factorial is: ${memoizedFactorial(10000)}`);
// }
// console.timeEnd();
