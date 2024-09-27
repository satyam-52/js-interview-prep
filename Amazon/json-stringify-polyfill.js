/**
 * @name stringifyJSON
 * @param {String | Number | Array | Object} data
 * @description Create a function `stringifyJSON` which takes in a data attribute
 *              which can be of type `string`, `number`, `array`, or `object` and convert it to a string
 * @returns {String}
 */
function stringifyJSON(data) {
  let datatype = typeof data;

  let str = "";
  if (datatype === "string") {
    str += `"${data}"`;
  }
  if (datatype === "number" || datatype === "boolean") {
    str += data;
  } else if (Array.isArray(data)) {
    str += "[";
    for (let el of data) {
      str += `${stringifyJSON(el)},`;
    }
    str = str.slice(0, str.length - 1) + "]";
  } else if (datatype === "object") {
    str = "{";
    for (let key of Object.keys(data)) {
      str += `"${key}":${stringifyJSON(data[key])},`;
    }
    str = str.slice(0, str.length - 1) + "}";
  }

  return str;
}

let a = {
  id: 123,
  details: {
    name: "Satyam",
    surname: "Dua",
  },
  exp: [1, 2],
  expDetails: [
    { time: 1, company: "Volumetree" },
    { time: 2, company: "Lenskart" },
  ],
  isAvailable: true,
};

console.log("JSON string: ", stringifyJSON(a));
console.log("JSON value: ", JSON.parse(stringifyJSON(a)));
