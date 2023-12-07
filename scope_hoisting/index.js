/* 

? Scope & Hoisting
    * Used to determine how information in different code blocks can be accessed 
    ? Five scope types:
    *Global/window
    *Block
    *Function
    *Module-if use external files
    *lexical
*/

/* 
?Global Scope


* Outer most scope
* window object when in the client/browser
* in the js file when in Node
* accessible from every other scope
*/ 

// outside 
let globalScopeVariable ="This is a global scope variable";
let x = 5;
// inside can look outside, but outside cant look in
{
    {
        {
            {
                {
                    {
                        {
                            console.log(globalScopeVariable);
                            // console.log (x)
                            let innerScopeVariable = "this is a inner scoped variable";
                        }
                    }
                }
            }
        }
    }
}

// console.log (innerScopeVariable); //! ERROR: InnerScopedVariable is not defined



/*

? Function Scope
* Accessible only inside of the function
*/


function scope () {
let fxScopeVariable = "This is a function scope variable";
console.log(fxScopeVariable);
return fxScopeVariable;
}

scope(); //== "This is a function scope variable"
// console.log(fxScopeVariable);


/*
?Block Scope

*anywhere there are curly's {}
*/

{
    let blockScopeVariable = "block scope variable";
}
// console.log(blockScopeVariable) //!ERROR: Reference error


/*

?Lexical Scope
    *Variables are accessible by their nested position
    *Inner fx scope {} can access outer function scope {}
*/

function outerfx () {

    let ofxy="outer fx scope variable";

    function innerFx (){
    let ifxv ="Inner fx scope variable" ;
    console.log(ofxv);
    }


    
  return  innerFx(); // === "Inner fx scope variable"
}

console.log (outerfx()); //=== "Inner fx scope variable"


/*
? Hoisting

*JS' parsing engine reads top to bottom, left to right
*JS' interpreter runs the code twice
        -First, it looks for VARiables and fx declarations and hoists them
        -It  allocates memory space for those declaration
        -It then executes the code line-by-line
*/

// console.log(myDog); //! ERROR Cannot access 'myDog' before initialization
let myDog = "lab";
console.log (myDog);

console.log(age);   //! Returns undefined 
var age = 32;   
// avoid using VAR, use "let" instead
console.log(age) // prints our value of 32



x();  //traditional functions grt hoisted. Able to call them before they are declared
function x () {
    console.log("function x executed");


let y = functions() 
console.log("Function expressions");

};



y();
function run() {
    var foo ="foo";
    let bar ="bar";
    var fxVariable ="test";
    console.log(foo, bar, fxVariable);


{
    var moo ="moo";
    let baz ="baz";
    console.log(moo, baz);
}

// console.log(baz); //! Error, trying to access a nested scoped variable
console.log(noo); //Able to print, because var  an be accessed by outer scope

}


run();
//console.log(fxVariable); //!referenceError: fxVariable is not defined 

//! using var is bad practice, don't tru to use hoisting to your "benefit"!!!!!!!