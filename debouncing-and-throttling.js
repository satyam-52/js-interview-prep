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

function myDebounce (cb, d) {
  let timer;
  return () => {
    if(timer) clearTimeout(timer);
    timer = setTimeout(cb, d);
  }
}

function myThrottle (cb, d) {
  let last = 0;
  return () => {
    let now = new Date().getTime();
    if(now - last < d) return;
    last = now;
    cb();
  }
}

const increaseWithDebouce = myDebounce(() => {
  debounced.innerHTML = ++dVal
},1000);

const increaseWithThrottle = myThrottle(() => {
  throttled.innerHTML = ++tVal;
},1000);

button.addEventListener("click", () => {
  normal.innerHTML = ++nVal;
  increaseWithDebouce();
  increaseWithThrottle();
})