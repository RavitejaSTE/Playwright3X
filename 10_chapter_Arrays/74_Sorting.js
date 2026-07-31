let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
//  alphabetical by default 

let score = [4,3,2];
console.log(score.sort());

let nums = [10,1,21,2];
// nums.sort();
console.log(nums); //  1,2,10,21 -
// Natural Sorting - Lexicographic / string sort 

// Proper Sorting, Asc , Desc
// nums.sort((a,b) => a-b);

nums.sort((a,b) => b-a); // Desc
console.log(nums);
nums.reverse();
console.log(nums);



let marks = [-33, -11, 20, 35, 42, 68, 28, 55,98, 82, 61, 15];
console .log("Number Sorting");
console.log(marks.sort());
console.log(marks.sort((a,b) => a-b)); // Asc
console.log(marks.sort((a,b) => b-a)); // Desc
console.log(marks.reverse()); // Desc     

