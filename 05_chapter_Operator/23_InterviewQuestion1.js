let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);

let success = true;
let failed = false;
let testexecution = success === failed ? "✅ PASS" : "❌ FAIL";
console.log(testexecution);

let maths = 60;
let science = 70;
let telugu = 80;
let totalMarks = maths + science + telugu;
let averageMarks = totalMarks / 3;
let result = averageMarks >= 35 ? "✅ PASS" : "❌ FAIL";
console.log("Average Marks: ", averageMarks);
console.log(result);