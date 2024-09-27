/**
 * INPUT: compute(1,1,1);
 * OUTPUT:
 * {
 *  A: 3,
 *  B: -1,
 *  C: 1,
 *  D: {
 *    E: 1
 *  },
 * }
 */

const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a * b * c,
  D: {
    E: (a, b, c) => a / b / c,
  },
};

function compute(a, b, c) {
  function innerCompute(obj) {
    let results = {};
    for (let [key, value] of Object.entries(obj)) {
      if (typeof value === "function") {
        results[key] = value(a, b, c);
      } else if (typeof value === "object") {
        results[key] = innerCompute(obj[key]);
      }
    }
    return results;
  }

  return innerCompute(input);
}

console.log(compute(1, 1, 1));
