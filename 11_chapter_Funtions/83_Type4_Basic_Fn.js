// Type 4 - With arg/ With return
function sumOfTwoNumbers(a,b){
    return a+b;
}

let c = sumOfTwoNumbers(4,5);
console.log(c);
console.log(sumOfTwoNumbers(4,5));

function reTryLogic(try1, try2) {
    console.log("re trying twice");
    return [try1, try2];
}

let urlLaunched = "https://example.com";
let pageNavigated = "https://example1.com";

let launch = reTryLogic(urlLaunched, pageNavigated);
console.log(launch);