/* 
    ? IO & Callbacks
    *Process
        *An event that runs in the background or foreground of your machine
    *NodeJS allows access to its processes via process object
    *This allows us to process external input and internal input (I/O)
    *We do this by using process.stdin and process.stdout
*/

// Import Statement
// example below has been commented out
// const process = require("process"); // ?importing our module from Node
// console.log(`This is an output. From Node process PID ${process.pid}`);


/*
    ? Callback function
    *fx that is passed as an argument to another fx or method
    *Is a fx that runs when something occurs
        -Anonymous Functions
        ex) function(parameter) {} OR (parameter) => {}
            * Typically used in callbacks
            *short lived
            *non reusable
*/

// console.log("Please enter some input");


//?Anon arrow function
// process.stdin.once("data",(input) => {
//     console.log(input.toString());
// });

//? Anon traditional function
// process.stdin.once("data", function (input){
//     console.log(input.toString());
// });

//? example
// const myFunction = (question, callback) => {
//     console.log("Question", question);
//     process.stdin.once("data", (input) => {
//         callback(input.toString().trim());
//     });
// };

// myFunction("What is your name", (word) => {
//     console.log("login from the call back", word);
//     process.exit();
// });

//? passing function by reference

// function handleInput(input) {
//     console.log(input.toString());
// }
// process.stdin.once("data", handleInput)


/*
    (1)   (2)(3)    (4)     (5)
process.stdin.on("data", (input) => console.log(input.toString()))

*1. Node's process interface
*2. In data stream
*3. Event listener method
*4. Event that we are listened for
*5. Callback fx which runs when the event occurs

*/


//Example
// process.stdout.write("what is your username? \n");
// process.stdin.on("data", (input)=> {
//     let value = input.toString().trim();
//     console.log(value);
//     value ==="name123"
//     ? process.stdout.write("Username Recognized")
//     : process.stdout.write("Username not recognized");
//     process.exit();
// });


//? Readline
const readline = require("readline"); // Import of module 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question("what is your favorite color?", (input) => {
// rl.setPrompt(`Your fav color is: ${input}`);
// rl.prompt();
// rl.prompt();
// });



//example [might have to rewatch class vid to catch later]
// function ask(questionText) {
//     return new Promise ((resolve, reject) => {
//         if (questionText){
//      rl.question(questionText + "\n", (input) =>  resolve(input));
//         } else {
//           reject("provide a question please");
//         }
//     });
// }


// const start = async (question) => {
//     try {
//         let response = await ask("What is your fav food?");
//         let response = await ask (""); //! Will hit the reject in promise
// console.log("Our Data from Promise?", response);
//     } catch (err) {
//         console.log("Hey you hit an error?", err);
//     }
// };

// start("do you like pie? (Y/N)");
// //start("Do you like animals (Y/N)") //! cant ask multiple questions

// console.log("I wonder what  your answer will be?"); //?executes will promise being handled


async function ask(question) {
    return new Promise ((resolve, reject) => {
        rl.question(question + "\n", (userInput) => {
        resolve(userInput);
            // console.log("your input:", userInput);
        });
    });
}

// Using async to allow waiting for our value to be present.
async function start() {
    const firstQAnswer = await ask ("What is your name?");
    console.log("Answer to first question is:", firstQAnswer);

    const secondQAnswer = await ask ("what is your age?");
    console.log("Answer to second question is:",
    secondQAnswer);

    rl.close();
}

start();
