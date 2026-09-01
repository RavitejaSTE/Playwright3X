// const input = "5 5 5";

// const values = String(input).includes(" ") ? String(input).split(/\s+/).map(Number) : String(input).split("").map(Number);

// const [a, b, c] = values;

// if (a + b > c && b + c > a && a + c > b) {
//     if (a === b && b === c) {
//         console.log('Equilateral');
//     } else if (a === b || b === c || a === c) {
//         console.log('Isosceles');
//     } else {
//         console.log('Scalene');
//     }
// } else {
//     console.log('Not a triangle');
// }



// let input = "7700";

// let [s1, s2, s3] = input.split("").map(Number);

// if (s1 === s2 && s2 === s3) {
//     console.log("Equilateral Triangle");
// } else if (s1 === s2 || s2 === s3 || s1 === s3) {
//     console.log("Isosceles Triangle");
// } else {
//     console.log("Scalene Triangle");
// }

const a1 = 3;
const b1 = 4;
const c1 = 4;

if(a1 === b1 && b1 === c1 && a1 === c1){
    console.log('Equilateral');
} else if ( a1 === b1 || b1 === c1 || c1 === a1 ){
    console.log('Isosceles');
} else{
    console.log('Not a Triangle');
}
