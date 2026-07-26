const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the numeric score: ', (score) => {
  const numScore = parseFloat(score.trim());
  
  let grade;
  if (numScore >= 90 && numScore <= 100) {
    grade = 'A';
  } else if (numScore >= 80 && numScore < 90) {
    grade = 'B';
  } else if (numScore >= 70 && numScore < 80) {
    grade = 'C';
  } else if (numScore >= 60 && numScore < 70) {
    grade = 'D';
  } else if (numScore < 60) {
    grade = 'F';
  } else {
    grade = 'Invalid Score';
  }
  
  console.log(`Score: ${numScore} -> Grade: ${grade}`);
  rl.close();
});
