let el = document.getElementById("t-w-d-b");

let state = {
  value: "",
};

window.state = state;

model(el, state);

function model(element, state) {
  let stateKeys = Object.keys(state);
  function update() {
    state.value = "Hi!";
    for (const key of stateKeys) {
      element[key] = state[key];
    }
  }

  for (let key of stateKeys) {
    Object.defineProperty(state, key, {
      get() {
        return this[`_${key}`];
      },
      set(value) {
        this[`_${key}`] = value;
        element[key] = value;
      },
    });
  }

  update();

  element.addEventListener("input", (e) => {
    state.value = e.target.value;
  });
}
