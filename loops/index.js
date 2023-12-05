// ? Loops 

/* 
? For
-Takes in 3 parameters
    -initial expression
    -condition
    -increment expression

Structure:
for equals key word. 
    for (initial expression; condition; increment expression) {
        *code to execute if loop condition is satisfied 
    }
*/

// i in parenthesis is just a variable, it could be potato. i "increment"
//  first is initial expression, second is condition, third is increment expression

let i = 5
// ?    1      2       3     4
for (let i=0; i<= 10; i ++) {
console.log (i); // ? 3
}
console.log ("out of loop");
// console.log("final", i)

/*
? 1. Reserving a new variable named (i) to store an initial value
? 2. As long as this condition is met, run the following code execution in {}
? 3. code executes 
? 4. increases our variables count by 1

    Repeat steps 2-4
*/

for (let i =0; i<=20; i+=2) {
    console.log(i);
}

//! Challenge: using a for loop, count from 10 to 0, going down by 1
// use -- since you are counting down
for (let i = 10; i >=0; i--) {
    if ( 1==5) {
        console.log(i);
    }
}
    console.log(i);
    // break;
// break will allow us to exit the loop



for (let i = 10; i>=0; i--) console.log (i);
// display each character of each string
let firstName = "Timmy";

for (let index = 0; index < firstName.length; index ++) {
    console.log(firstName[index]);
}

// Add collected sum of numbers
let sum =0;

for (let i = 1; i<=50; i++) {
    sum += i;
    console.log(sum);
}


for (let i =1; i<=20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// array

let folders = ["Documents", "Desktop", "Pictures", "downloads"];

for(let arrayIndex = 0; arrayIndex < folders.length; arrayIndex ++) {
    console.log(folders[arrayIndex]);
}


// object
let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    // week: 1

};



// ? for in loops 
/*  great to use on objects */
console.log (student ["awesome"]);

for (let item in student ) {
    console.log( student [item]);
    console.log("key:", item, "value", student[item]);
}


// ? Array example

let catArray = [
    "tabby",
    "british short hair",
    "burmese",
    "maine coon",
    "rag doll",
];


for (let cat in catArray) {
    // console.log(catArray[cat]);
}

// ? For of
//  -Great to use on arrays

for (let cat in catArray) {
    // console.log(cat);

    if ( cat === "tabby") {
        console.log("this is cat is tabby");
    }
}

//  for of use on arrays ,for loops use on objects. 
// try not to use nesting in loops
