console.log("hello world");

// -java script-
// -found in 1996 by Brandon Eich
// -client sided language (runs in the browser)
// interpreted language (not compiled)
// functional language
// -object oriented (OOP)
// -prototype-based
// -weakly typed (dynamic)
// -multi paradigm language
// -ECMA script -- organization for setting the language standards

// -console object-
// -gives us access to the browser or nodes debugging console
// -allows the developer to view the output from their program



// ! 2+2 Does not show us the output
// console.log (2+2); shows the output of 4

// JS data types
// primitives
// strings
// , numbers,
//  boolean, 
//  null, 
//  undefined 
//  Nan


// reference
// arrays,
//  objects,
//   maps,
//    sets


// strings 

// *primitive data type representing characters 
// * enclosed in ", "" "", or ''

// examples

console.log("this is a test");
console.log("this is a test");
console.log("this is a test");

// strings representation of number
console.log("2023");

// we can concatenate different strings (adding them together)
console.log("hello, I'm Bianka" + "and i like apple pie");

// strings are also indexed starting from (0)
console.log("sdjfhadsjfhasdf"[4]);

// string interpolation ('')
// process of including space for an experience
// syntax:
// -'string $[5+5]'

console.log('my fav number is: ${5 + 5} ');

// string 
// - .length
// - .slice
// - .toUpperCase ()
// - .toLowerCase ()

console.log("some string" .length);
console.log("some string again" .slice(0,4));
console.log ("some string again" .indexOf ("S"));
// Multi line strings
console.log ("hello \n this \n is \n multi \n lined");

console.log (typeof 9); 

// ?Booleans
// *binary value
// either true (on) or false (off)
// Examples of falsey value:
//  -0
//  -undefined
//  -null
//  -NaN
//  -""

console.log (2 == 2);


// boolean ( ) interface that can return true or false, or if a value is truthy or falsey
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(boolean(undefined));


// type Coercion
// *JS is weakly typed programming language
// *doesn't require any data type definitions
// * comparison operator (==) performs type coercion before resolving the expression
// - will check the data values, but NOT their coercion
// *strictly equals (===) used to avoid the type coercion
// - will check the data values and types

console.log(2 == 2);
console.log( 2 == "2");
console.log(2 ==="2");

//  not a number or (Nan)
// triggered when performing operations with numbers and non numbers
// used when making mathematical computations that don't make sense


console.log(undefined + 6);

console.log(Math.sqrt(-1));

/* 
? Operations

*addition (+)
*subtraction (-)
* multiply (*)
division ()
exponent
dot
modulo (%)
assignment (=)
comparison (==)
strict comparison (===)
is not equal 
*/

// Modulo

console.log (10/2);
console.log (10 % 2 === 0); //true divisible by 2 with no remainder
console.log ( 10 % 3 === 0); // false not able to be evenly divided by 3

//Assignment 
let myName = "Bianka"

console.log (myName);

console.log (myName == "bianka");

// strict comparison
let myVal = 10;

// Is not equal
console.log ( 2 = 2); //returns false (even though its true; it flips the value)
comsole.log (!true); // returns false, flipped value

//real life example 
if (!myName) {
    console.log ("name doesn't exist");
} else {
    console.log ("hello", myName);
}



 ? Arrays
let arrayOfStuff = ["item 1", "item 2" " ", true, 10]

console.log(arrayOfStuff)

// catch up here. watch classroom vid

// ? objects

let userProfile = new Object ();
userProfile.name = "Bianka"
userProfile.favColor = "blue";

console.log(userprofile);

let obj = {
name: "sonic the hedgehog",
rings: 40,
emeralds: 5,
lives: 3,


}