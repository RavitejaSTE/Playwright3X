let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);                                                                                                                                                               

// spread (modern way) - concatenation. (...)
// ... all the eleement
let d = [...a,...b];
console.log(d);

// Join 
// array into bug string
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);


let r = ["Apple", "Banana", "Cherry"].join(" - ");
console.log(r);


let m = [...b].join("*");
console.log(m);