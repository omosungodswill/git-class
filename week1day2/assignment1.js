const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`How old are you?`, name => {
    if (name >=18) {
        console.log("You are an adult");
    }else {
        console.log("You are a minor");
    }
  rl.close();
});


