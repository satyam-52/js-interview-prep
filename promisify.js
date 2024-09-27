// Promisify a function.

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.apply(this, [
        args,
        (error, results) => {
          if (error) reject(error);
          else resolve(results);
        },
      ]);
    });
  };
}

// Fn to Promisify
const printNameAfterASecond = (fullName, cb) => {
  setTimeout(() => {
    cb(null, fullName);
  }, 1000);
};

// Traditional way to invoke the fn
printNameAfterASecond("Satyam Dua", (err, res) => {
  if (err) console.log("ERROR: ", err);
  else console.log("RESPONSE: ", res);
});

// Using our promisify fn
let func = promisify(printNameAfterASecond);

func("Satyam Dua")
  .then((res) => console.log("PROMISIFY RESPONSE: ", res))
  .catch((err) => console.log("PROMISIFY ERROR: ", err));
