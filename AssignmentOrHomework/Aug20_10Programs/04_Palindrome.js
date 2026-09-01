let input = 'LeveL';
let palindrome = '';

for(let i=input.length-1; i>=0; i--){
    palindrome = palindrome + input[i];
}

if(input === palindrome){
    console.log('Its a Palindrome');
} else{
    console.log('Its not apalindrome');
}


