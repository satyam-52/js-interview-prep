(() => {
  let idx = 1;
  let promises = Array.from({ length: 5 }, function () {
    return fetch.bind(
      this,
      `https://${idx === 3 ? "satyam" : "reqres"}.in/api/users/${idx++}`
    );
  });

  /*
    1. Each time total limit number of api calls.
    2. Each time one of the request is fulfilled, replace it with the 
        next one in the queue.
  */

  async function rateLimitApiCalls(promises, limit = 2) {
    let queue = [...promises]; // O(n)
    let results = []; // O(n);
    return new Promise((resolve, reject) => {
      async function helper() {
        while (queue.length > 0) {
          // O(n);
          const cur = [];
          for (let i in Array(Math.min(limit, queue.length)).fill(null)) {
            // O(limit)
            cur.push(queue.shift());
          }
          try {
            const response = await Promise.all(cur.map((a) => a()));
            response.forEach((r) => results.push(r)); // O(limit)
          } catch (err) {
            reject(err);
            break;
          }
        }
        resolve(results);
      }
      helper();
    });
  }

  /**
   * TC:- O(n) * (O(2*limit)) ==> O(n) * O(limit)
   * SC:- O(n) + O(n) = O(2n) ==> O(n)
   */

  const btn = document.getElementById("app");

  btn.addEventListener("click", () => {
    rateLimitApiCalls(promises)
      .then((results) => {
        console.log({ results });
      })
      .catch((err) => console.log({ err }));
  });
})();
