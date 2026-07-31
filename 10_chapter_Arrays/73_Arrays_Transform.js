let scores = [45, 82, 91, 60, 73];

// let grades = scores.map(item_score => item_score > 70 ? "Pass": "Fail");
// console.log(grades);

// Map My app is generally used whenever we want to 
// transform the array into a new array of the same size. 

// Filter

// let passing = scores.filter(s => s >= 70);
// console.log(passing);

let marks = [20, 35, 42, 68, 28, 55,98, 82, 61, 15];

let CGP = marks.map( result => result >= 35 ? "Pass" : "Fail");
console.log(CGP);

let distinction = marks.filter( result => result >= 80);
console.log(distinction);