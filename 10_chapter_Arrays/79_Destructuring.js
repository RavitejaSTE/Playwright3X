// let [first, second, third] = [10, 20, 30];

// console.log(first);
// console.log(second);
// console.log(third);

// // Rest pattern (...) — collects everything left over into a NEW array.
// // Note: cannot reuse first/second/third here, `let` cannot be redeclared
// // in the same scope (SyntaxError: Identifier has already been declared).
// let [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a);    // 10
// console.log(b);    // 20
// console.log(rest); // [30, 40, 50]

// // Default values — used only when the slot is undefined
// let [x = 1, y = 2, z = 99] = [10, 20];
// console.log(x, y, z); // 10 20 99

// // Skip elements with a hole, and swap without a temp variable
// let [, , thirdOnly] = [10, 20, 30];
// console.log(thirdOnly); // 30

// let p = 1, q = 2;
// [p, q] = [q, p];
// console.log(p, q); // 2 1


//-------------------------------------

let [one, two, three] = [12,20,30,40];
console.log(one);
console.log(two);
console.log(three);

let [aa, bb, ...etc] = [1,2,3,4,5,6];
console.log(aa);
console.log(bb);
console.log(etc)

let [a=10,b=20,c=30,d,e] = [1,2,,null]
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let [s,,r] = [11,22,33,44];
console.log(s);
console.log(r);

let m=10, x=20;
[m,x]=[x,m]
console.log(m);
console.log(x);