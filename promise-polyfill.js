function PromisePolyfill (executor) {
  let onResolve, 
      onReject, 
      isCalled = false, 
      isFullfilled = false, 
      isRejected = false,
      value;

  this.then = function(callback) {
    onResolve = callback;

    if(isFullfilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }

    return this;
  }

  this.catch = function(callback) {
    onReject = callback;

    if(isFullfilled && !isCalled) {
      onReject(value);
      isCalled = true;
    }

    return this;
  }

  function resolve(val) {
    isFullfilled = true;
    value = val;

    if(typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if(typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  try {
    executor(resolve, reject);
  } catch(err) {
    reject(err);
  }
}

// new PromisePolyfill((resolve, reject) => {
//   setTimeout(() => {
//     const result = Math.random() > 0.5 ? true : false;
//     if(result) resolve("Resolved!");
//     else reject("Rejected!")
//   },1000);
// }).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.error(err);
// })
