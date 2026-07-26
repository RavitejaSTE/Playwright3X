// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor
let scores = new Array(3); // creates [empty x 3]
scores[0] = "1";
let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]

let numbers = new Array(100, 200, 300, 400);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]

// let status = new Array(5);
// status[0] = "pass";
// status[1] = "fail";
// console.log(status.length);
// console.log(status.at(0)); // pass
// console.log(status.at(1)); // fail
// console.log(status.at(2)); // undefined