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

Object.prototype.flat = function flattenObject(
  startingKey = "",
  seperator = "."
) {
  const obj = this;
  let finalObj = {};
  for (let [key, value] of Object.entries(obj)) {
    let finalKey = (startingKey ? startingKey + seperator : "") + key;
    if (typeof value !== "object") {
      finalObj[finalKey] = value;
    } else {
      finalObj = { ...finalObj, ...value.flat(finalKey, ".") };
    }
  }
  return finalObj;
};

console.log(user.flat());
