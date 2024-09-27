const user = {
  id: 1,
  firstName: "Satyam",
  lastName: "Dua",
  address: {
    addressLine1: "12/2B, Chandar Nagar",
    addressLine2: "Alambagh",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226005",
  },
  contactInfo: {
    countryCode: "+91",
    mobile: "7985334941",
    telephone: {
      prefix: "",
      number: "",
    },
  },
};

// Given an object and a filter function, write a function that recursively filters the object,
// returning only values which return true when called with the filter function (like Array.prototype.filter but for objects).
Object.prototype.filter = function (filterFn) {
  const currentContext = this || globalThis;
  let result = {};

  Object.entries(currentContext).forEach(([key, value]) => {
    if (typeof value !== "object") {
      if (filterFn(value)) result[key] = value;
    } else {
      result[key] = value.filter(filterFn);
      if (!Object.keys(result[key]).length) delete result[key];
    }
  });
  return result;
};

let res = user.filter((val) => typeof val === "string");
console.log({ res });
