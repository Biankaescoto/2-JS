const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();


secretNumber = (26)


async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");

    while (secretNumber != 26) {
      // console.log('You entered:' + secretNumber);
      console.log("That was incorrect");
      let secretNumber = await ask ("Please guess again");
      }
      while (secretNumber === 26 ) {
        resolve.break
        console.log("You're right! My Secret Number is 26");
          Break
        } 


    rl.close();
  // process.close();
};



// console.log(ask);


  // process.exit();