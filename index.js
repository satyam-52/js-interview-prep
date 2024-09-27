function MyPromise(executor) {
  let resolveCbs = [],
    rejectCbs = [],
    finallyCb,
    isCalled = false,
    isFulfilled = false,
    isRejected = false,
    val;

  function resolve(value) {
    isFulfilled = true;
    val = value;

    if (!isCalled) {
      val = resolveCbs.reduce((acc, cb) => {
        return cb(acc);
      }, val);
      // finallyCb();
    }
  }

  function reject(value) {
    isRejected = true;
    val = value;
    if (!isCalled) {
      val = rejectCbs.reduce((acc, cb) => {
        return cb(acc);
      }, val);
      // finallyCb();
    }
  }

  this.then = function (cb) {
    resolveCbs.push(cb);
    if (isFulfilled && !isCalled) {
      val = resolveCbs.reduce((acc, cb) => {
        return cb(acc);
      }, val);
      // finallyCb();
      isCalled = true;
    }
    return this;
  };

  this.catch = function (cb) {
    rejectCbs.push(cb);
    if (isRejected && !isCalled) {
      val = rejectCbs.reduce((acc, cb) => {
        return cb(acc);
      }, val);
      // finallyCb();
      isCalled = true;
    }
    return this;
  };

  this.finally = function (cb) {
    finallyCb = cb;
    if ((isFulfilled || isRejected) && isCalled) {
      finallyCb();
    }
  };

  executor(resolve, reject);
}

let a = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  resolve("Satyam");
  // }, 100);
});

a.then((val) => {
  console.log(val);
  return "Dua";
}).finally(() => console.log("Finished"));
