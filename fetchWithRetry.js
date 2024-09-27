async function fetchWithRetry(fetcher, count) {
  let attempts = 0;
  return new Promise((resolve, reject) => {
    function attemptFnCall() {
      console.log({ attempts });
      attempts++;
      fetcher()
        .then((response) => {
          if (typeof response.ok === "boolean" && !response.ok) {
            throw new Error("API call failed.");
          } else {
            resolve(response);
          }
        })
        .catch((err) => {
          if (attempts < count) {
            attemptFnCall();
          } else {
            reject(err);
          }
        });
    }
    attemptFnCall();
  });
}

let fetcher = () => fetch("https://httpbin.org/gett");

fetchWithRetry(fetcher, 3);
