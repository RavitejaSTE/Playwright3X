let arr = [10, 20, 30, 40];
console.log(arr.length);
// 0 to 3
console.log(arr[4]); // undefined
console.log('the value is: ' + arr.at(2)); // 40

let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null];

console.log(testResults.at(1)); // fail
console.log(mixed.at(1)); // hello