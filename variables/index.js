/*
variables 

-containers that store data in memory
* declaration
    -allows memory space to be reserved by using an indentifier
    -starts with the keywords of (let, var or const)
    -cannot start with a number, other than characters like (_$)
    -if no value is assigned, it will be 'undefined' by default

    * intialization
    -assignment of data value
    -can be any value or data type (str, int, arr, fx, class, etc.)
    -can be reassigned (excpet for the const)

    variable declaration

    /*/

    let myFirstName = "bianka";

    let myVar;
    console.log(myVar);

    console.log(myFirstName);
    // variable initialization

let myFirstName ="bianka"
let myLastName = "Escoto"

console,log (
    "the value if the first name is now",
    myFirstName
)

// go back to this part later during rewatch


// string concatenation
console.log(myFirstName + " " + myLastName);

let username = "iamagamer10" ;
// string interpolation

console.log(`hey, your username is: ${userName}`);
// (a) (b)(c) (d)

let address = "123 Main st, Salem, MA";
// a -keyword
// b- variable id
// c- assignment operator
// d- variable value assignment

console.log(testVar)
let testVar =5;

console.log(myVar);

const ssn = "555-55-5555"
// ssn - "something else"; //! Error assignment to a const variable


//  ? coding practice for Variables
 /* 
 -be concises (ex: firstName instead of usersFirstBornBlondHairedName)
 -Be specific (ex: item instead i)
 -Utilize camelCase (most popular in Js
- snake_case
_pascalCase
-skewer-case
-nocase
-SCREAMING_CASE (USED FOR ENVIRONMENTAL VARIABLES
    
    //! CHALLENG

   - Set variables of fName, lName, houseNumber, street, city, state, postcode
    -concatenate or interpolate them together
    -console log that result 
    -spicy challenge
    assign the state value to be lowercased, when you console.log it, it should capitalize the state
/*/


// my first try

console.log("fName") let firstName ="bianka"
console.log("lName") let lastName = "Escoto"
console.log("houseNumber") let houseNumber ="12345"
console.log("street") let street="ocean ave"
console.log("postcode") let postcode="54321"
console.log("")


// Class answer for example

let fName = "bianka";
let lName = "Escoto";
let houseNum = 123;
let street = "fake st";
let city = "CA";
let postCode = 55555;

console.log(` My name is ${fName} /n ${houseNum} ${street}, ${city}, ${state.toUpperCase()} ${postCode} `);