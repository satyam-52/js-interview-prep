function promiseAll(promises) {
  let results = new Array(promises.length);

  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, idx) => {
      try {
        const res = await promise();
        results[idx] = res;

        if (idx === promises.length - 1) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}
