function MyPromise(executor) {
  let resolveVal,
    rejectVal,
    resolveCb = [],
    rejectCb = [],
    isFulfilled = false,
    isRejected = false,
    isPending = true;

  function resolve(value) {
    resolveVal = value;
    isFulfilled = true;
    if (resolveCb.length && isPending) {
      resolveCb.forEach((cb, idx) => {
        resolveVal = cb(resolveVal)
      })
      resolveCb = [];
      isPending = false;
    }
  }

  function reject(value) {
    rejectVal = value;
    isRejected = true;
    if (rejectCb.length && isPending) {
      rejectCb.forEach((cb, idx) => {
        rejectVal = cb(rejectVal);
      });
      rejectCb = [];
      isPending = false;
    }
  }

  this.then = function (cb) {
    resolveCb.push(cb);
    if (isFulfilled && resolveVal) {
      resolveCb(resolveVal);
    }

    return this;
  }

  this.catch = function (cb) {
    rejectCb.push(cb);
    if (isRejected && rejectVal) {
      rejectCb(rejectVal);
    }

    return this;
  }

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5)
      resolve("Hi");
    else reject("Bye");
  }, 1000);
})
  .then((res) => {
    console.log("First: ", res);
    return "Bye!"
  })
  .catch((err) => {
    console.log("Error: ", err);
    return "Catch"
  })
  .then((res) => console.log("Second: ", res));
