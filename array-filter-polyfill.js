Array.prototype.filterPolyfill = function filter(cb) {
  const arr = this;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let flag = cb(arr[i], i, arr);
    if (flag) res.push(arr[i]);
  }

  return res;
};

let a = [1, 2, 3, 4];

console.log(a.filterPolyfill((a) => a % 2 === 0));
