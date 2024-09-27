Array.prototype.flat = function flattenArray() {
  const arr = this;
  let finalArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      finalArr = finalArr.concat(val.flat());
    } else {
      finalArr.push(val);
    }
  }

  return finalArr;
};

let arr = [1, [2, [3, [4, [5]]]]];

console.log(arr.flat());
