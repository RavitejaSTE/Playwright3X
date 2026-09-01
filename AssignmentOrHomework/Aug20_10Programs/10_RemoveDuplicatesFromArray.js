let input = [10, 20, 30, 10, 20, 20, 50, 30, 60, 70, 50];
let uniqueNumbers = [];

for(let i=0; i<=input.length-1; i++){
    if(!uniqueNumbers.includes(input[i])){
        console.log('Iteration -> ' + i);
        uniqueNumbers.push(input[i]);
    }
}

console.log('Size of the Array : ' + input.length);
console.log('Unique Numbers : ' + uniqueNumbers);