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