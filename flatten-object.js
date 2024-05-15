let user = {
  firstName: "John",
  lastName: "John",
  address: {
    personal: {
      city: "Delhi",
      state: "Delhi",
    },
    work: {
      city: "Gurgaon",
      state: "Gurgaon",
    },
    country: "India",
  },
};


function getFlattenedObj(obj, left = "") {
  let flattenedObj = {};
  for (let key in obj) {
    const leftStr = left ? `${left}.` : "";
    if (typeof obj[key] === "object") {
      flattenedObj = { ...flattenedObj, ...getFlattenedObj(obj[key], `${leftStr}${key}`) }
    } else {
      flattenedObj[`${leftStr}${key}`] = obj[key]
    }
  }
  return flattenedObj;
}

console.table(getFlattenedObj(user));
