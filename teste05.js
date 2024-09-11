const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma string: ', (str) => {
  let invertedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
  }

  console.log(`A string invertida é: ${invertedStr}`);
  rl.close();
});