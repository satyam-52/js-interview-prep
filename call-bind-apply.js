// ==> call, bind, and apply methods
let cba = {
  name: "Satyam",
  getName: function(age, height) {
    console.log("Name is, " + this.name + ", age is, " + age + ", height is, " + height);
  }
}

let johnCba = {
  name: "John",
}

let lulCba = {
  name: "Lul",
}

let ChauthaCba = {
  name: "Chautha",
}

// cba.getName.call(johnCba, 24, 5.4);

// cba.getName.apply(lulCba, [24, 5.4]);

// let func = cba.getName.bind(ChauthaCba, 24, 5.4);
// func();

// cba.getName(24,  6);