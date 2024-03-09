// Given an asynchronous function fn and a time t in milliseconds

// The time limited function should follow these rules:
// 1. If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// 2. If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded"

let delay = 1000;
let timeLimit = 200;  // t


async function fn () {  // fn()
  return await new Promise((resolve) => {
    setTimeout(() => {resolve("Resolved")}, delay);
  });
}

async function timeLimitedFn (fn, t) {
  return await new Promise(async (resolve, reject) => {
    const startTime = Date.now();
    const result = await fn();
    const endTime = Date.now();
    if(endTime - startTime < t) resolve(result);
    else reject("Time Limit Exceeded");
  });
}

let result = timeLimitedFn(fn, timeLimit)
              .then(res => console.log(res))
              .catch(err => console.log(err));