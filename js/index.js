var num1 = 10;
let num2 = 099;
const num3 = 0.02;

function whitespace() {
  console.log(`=================
`);
}

/**
 * Manipulation: Number
 * Level 0-1
 */

console.log("var num1: " + num1);
console.log("var num2: " + num2);
console.log("var num3: " + num3);
whitespace();

console.log("Addition");
console.log(num1 + num2 + num3);
whitespace();

console.log("Substraction");
console.log(num1 - num2 - num3);
whitespace();

console.log("Multiplication");
console.log(num1 * num2 * num3);
whitespace();

console.log("Division");
console.log(num1 / num2 / num3);
whitespace();

// Level 2

console.log(num1 + " Hell of world " + num2 + num3);
console.log(num1 + num2 + num3 + -100 * 99);
whitespace();

// Level 3

let arr = [num1, num2, num3, " Hell of world "];
const truth = true;
arr.unshift(truth);
console.log(arr);
whitespace();

arr.pop();
console.log(arr);

arr.push(" Push method ");
console.log(arr);
whitespace();

console.log("Display array value using for loop:");
for (x = 0; x <= 3; x++) {
  console.log(arr[x]);
}
whitespace();

/**
 * Manipulation: String
 * Level 4
 */

const firstname = "Paul ";
const lastname = "Jenkin";

console.log(firstname);
console.log(lastname);
whitespace();

// Level 5

console.log(firstname + " " + lastname);
const fullname = `${firstname} ${lastname}`;
console.log(fullname);
whitespace();

// Level 6

let speak1 = "HELL OF WORLD";
let speak2 = "hell of old";
let speak3 = "first sentence must be capitalize";
console.log(speak1.toLowerCase());
console.log(speak2.toUpperCase());
whitespace();

// Level 7

function ucfirst(str) {
  var pieces = str.split(" "); // split str to array
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1); // change every first char to uppercase in every word
  }
  return pieces.join(" "); //join every words with space
}
console.log(ucfirst(speak3));
whitespace();

/**
 * Comparison: Number
 * Level 8
 */

const phi = 3.14;
const r = 14;

console.log(phi);
console.log(r);

if (phi >= r) {
  console.log("phi greater than r");
} else {
  console.log("r greater than phi");
}
whitespace();

// Level 10

let intA = 8;
let intB = 10;

intA >= intB
  ? console.log("A greater than B")
  : console.log("B Greater than A");
whitespace();

// Level 11

let intC = 12;
console.log(4 >= intA >= 10);
console.log(intB && intC); // will output the biggest the number
whitespace();

// Level 12

function mathRect(x, y) {
  return x * y;
}
console.log(mathRect(3, 4));

// Level 13

let rand = Math.random();
console.log("Random number: ", rand);
whitespace();

/**
 * Calculator Math
 * Level 14-15
 */
let calc = {
  add: (x, y) => {
    return x + y;
  },
  substract: (x, y) => {
    return x - y;
  },
  multiply: (x, y) => {
    return x * y;
  },
  devide: (x, y) => {
    return x / y;
  },
  modulo: (x, y) => {
    return x % y;
  }
};
console.log(calc.multiply(13, 2));
whitespace();

// Level 16

var d = 10;
var e = 2;
var f = 3;
var g = 4;

function addition(x, y) {
  return x + y;
}

function substraction(x, y) {
  return x - y;
}
var h = addition(10, 2);
var i = substraction(7, 4);

function combine(x, y) {
  return x + " " + y;
}

console.log(combine(h, i));
whitespace();
/**
 * Calculator: Shape
 * Level 17-18
 */

function square(x, y, operation) {
  this.calculateSquareArea = function() {
    return x * y;
  };

  this.calculateSquarePerimeter = function() {
    return 4 * x;
  };

  let value = 0;
  if (operation == "calculateSquareArea") {
    value = this.calculateSquareArea();
  } else if (operation == "calculateSquarePerimeter") {
    value = this.calculateSquarePerimeter();
  } else {
    return "Doesnt recognize the input!";
  }
  return value;
}

function circle(r, operation) {
  const phi = 3.14;
  this.calculateCircleArea = function() {
    return phi * Math.pow(r, 2);
  };

  this.calculateCircleCircumference = function() {
    return phi * r + r;
  };
  let value = 0;
  if (operation == "calculateCircleArea") {
    value = this.calculateCircleArea();
  } else if (operation == "calculateCircleCircumference") {
    value = this.calculateCircleCircumference();
  } else {
    return "Doesnt recognize the input!";
  }
  return value;
}

function cube(x, operation) {
  this.calculateCubeArea = function() {
    return 6 * x * x;
  };

  this.calculateCubeVolume = function() {
    return Math.pow(r, 3);
  };

  let value = 0;
  if (operation == "calculateCubeArea") {
    value = this.calculateCubeArea();
  } else if (operation == "calculateCubeVolume") {
    value = this.calculateCubeVolume();
  }
  return value;
}

function tube(r, t, operation) {
  const phi = 3.14;
  this.calculateTubeArea = function() {
    return 2 * phi * Math.pow(r, 2) + phi * r * 2 * t;
  };

  this.calculateTubeVolume = function() {
    return phi * Math.pow(r, 2) * t;
  };

  let value = 0;
  if (operation == "calculateTubeArea") {
    value = this.calculateTubeArea();
  } else if (operation == "calculateTubeVolume") {
    value = this.calculateTubeVolume();
  } else {
    return "Doenst recognize the input!";
  }
  return value;
}

console.log(cube(12, "calculateCubeArea"));
whitespace();

// Level 19

var val1 = 20;
var val2 = 2;
var val3 = 10;
var val4 = 3;
var res = square(
  addition(val1, val2),
  addition(val3, val4),
  "calculateSquareArea"
);
console.log(res);

function calculateTubeVolumeWithCircle(x, t) {
  return x * t;
}
var rC = 7;
var resCircleArea = circle(rC, "calculateCircleArea");

console.log(calculateTubeVolumeWithCircle(resCircleArea, 28));

/**
 * Calculated Time
 * Level 20-22
 */

var timeTools = {
  t: new Date(),
  checkYear: () => {
    return t.getFullYear();
  },
  checkMonth: () => {
    return t.getMonth();
  },
  checkDay: () => {
    return t.getDay();
  },
  checkHours: () => {
    return t.getHours();
  },
  checkMinutes: () => {
    return t.getHours();
  },
  checkSeconds: () => {
    return t.getSeconds();
  },
  checkMiliseconds: () => {
    return t.getMilliseconds();
  },
  convertHoursToSeconds: x => {
    return x * 3600;
  },
  convertHoursToMinutes: x => {
    return x * 60;
  },
  convertMinutesToHours: x => {
    return x / 60;
  },
  convertMinutesToSeconds: x => {
    return x * 60;
  },
  convertMinutesToMiliseconds: x => {
    return x * 60000;
  },
  convertSecondToHours: x => {
    return x / 3600;
  },
  convertSecondToMinutes: x => {
    return x / 60;
  },
  convertSecondToMiliseconds: x => {
    return x * 1000;
  }
};
