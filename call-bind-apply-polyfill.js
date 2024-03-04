// ==> polyfill for call, bind, and apply methods

let obj = {
  name: "Satyam",
  getName: function(age, height) {
    console.log("Name is, " + this.name + ", age is, " + age + ", height is, " + height);
  }
}

let johnObj = {
  name: "John",
}

let lulObj = {
  name: "Lul",
}

let ChauthaObj = {
  name: "Chautha",
}

// ==> call polyfill
Function.prototype.myCall = function(context, ...args) {
  var currentContext = context || globalThis;
  var random = Math.random();
  while(currentContext[random] !== undefined) {
    random = Math.random();
  }
  currentContext[random]= this;
  var result = currentContext[random](...args);
  delete currentContext[random];
  return result;
};

// obj.getName.myCall(johnObj, 24, 5.4);

// ==> apply polyfill
Function.prototype.myApply = function(context, args) {
  var currentContext = context || globalThis;
  var random = Math.random();
  while(currentContext[random] !== undefined) {
    random = Math.random();
  }
  currentContext[random] = this;
  var result = currentContext[random](...args);
  delete currentContext[random];
  return result;
}

// obj.getName.myApply(lulObj, [42, 7]);

// ==> bind polyfill
Function.prototype.myBind = function(context, ...args) {
  var currentContext = context || globalThis;
  var random = Math.random();
  while(currentContext[random] !== undefined) {
    random = Math.random();
  }
  currentContext[random] = this;

  return function(...arguments) {
    var result = currentContext[random](...args, ...arguments);
    delete currentContext[random];
    return result;
  }
}

// let func = obj.getName.myBind(ChauthaObj, 50);
// func(6.2);