// Add a custom method to global Array class, that flattens the array of any depth.
// 
// Example:
// let arr = [1,[2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]]
// arr = Array.flattenCustom(arr)
// arr = [1,2,3,4,5,6,7,8,9,10]

// [1,[2]]


function flattenCustom (arr) {
  let flatArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flatArr = flatArr.concat(flattenCustom(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

console.log({flat: flattenCustom([1,[2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]])})