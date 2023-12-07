/* 
    ? Promises
    *An Object that may produce a singular value in the future
   

? Three States
*Pending (unfinished)
* Fulfilled (completed with a value)
*Rejected (error)

*Promises allow other code to execute without having to wait for their completion
*/


function standard() {
    return "No promises here";
}

console.log(standard());

function getData () {
    setTimeout(() => {
        console.log ("running after 3 seconds");
        return "Data";
    }, 3000);
}

let data = getData();
console.log(data); //? Why undefined?

function promiseFx (value) {
    return new Promise (( resolve, reject) => {
        if (value){
            resolve("data in promise"); //resolved value can be returned outside of the 
        } else {
            reject ("cannot complete request");
        }
        setTimeout (() => {
            resolve ("data in promise");
        }, 3000);

    });
}

// console.log(promiseFx()); //? pending state....

//? in order to get tangible data out of the promise object, we MUST resolve it

promiseFx(5)
.then((msg) => {
    console.log (msg);
    console.log ("congrats u have data");
})

.catch((err) => {
     console.log ("hey you hit an err");
     //error handling,
});
  

/*
? Asynchronous Functions
* Introduced in ES7
* Alternative way to write promises
* A function that returns a promise object
* allows us to resolve or reject a promise

? Syntax
*async function myfx() {} //? Traditional Function
*const myFx - async function () {} //? Functional Expression
* const myFx = async () {} //? Arrow Function
*/

async function asyncFx() {
return "hello learners";  //Async functions return promise objects
}

console.log(asyncFx());

//? How do we get values out of async functions?

//1. Use a resolver 
asyncFx ().then((val) => console.log(val));

// 2. Use await keyword

async function start () {
    const val = await asyncFx();
    console.log(val);
}

start();


let networkStatus = false;

function promiseEx(networkConnection) {
    return new Promise((resolve, reject) => {
    setTimeout (()=> {
    if (networkConnection) {
        resolve ("this is data, woot woot!! :P");
    } else {
        reject(":( please check your network connection");
    }
}, 5000);
    });
}

async function handlePromiseAsync () {
    try {
        console.log(await promiseEx(networkStatus));
        console.log("Data received");
    } catch (err) {
        console.log("ERROR:", err);
    }
}

// handlePromiseAsync();
//? .then()syntax
promiseEx(networkStatus)
.then((data) => console.log(data))
.catch((err)=> console.log("error:", err));

const expensiveFunction = async () => {
    console.log("start");
    let result = await expensiveFunction();
    console.log ("loops done");
};

getDog();
console.log (
    "continue doing other tasks...while we wait for the loop to finish"
);