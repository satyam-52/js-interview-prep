// ==> DEBOUNCING AND THROTTLING
var button = document.querySelector("button");
var normal = document.querySelector(".normal");
var throttled = document.querySelector(".throttled");
var debounced = document.querySelector(".debounced");

let nVal = 0;
let tVal = 0;
let dVal = 0;

normal.innerHTML = nVal;
throttled.innerHTML = tVal;
debounced.innerHTML = dVal;

function throttle(callback, delay) {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    callback.apply(this, args);
  };
}

function debounce(callback, delay) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const increaseWithDebouce = debounce(() => {
  debounced.innerHTML = ++dVal;
}, 1000);

const increaseWithThrottle = throttle(() => {
  throttled.innerHTML = ++tVal;
}, 1000);

button.addEventListener("click", () => {
  normal.innerHTML = ++nVal;
  increaseWithDebouce();
  increaseWithThrottle();
});
