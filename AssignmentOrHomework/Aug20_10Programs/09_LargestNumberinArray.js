let arrayInput = [10, 20, 30, 40, 50];
let largest = arrayInput[0];

for(let i=1; i<=arrayInput.length; i++){
    if(arrayInput[i]>largest){
        largest = arrayInput[i]
    }
}

console.log('Largest Number is : ' + largest);