/* 
?While loop structure

While (expression) {

        ...code to run if expression is true
}

-The main purpose for while loops are when iteration is uncertain
-Ex) if we wanted to guess a spade from a randomized amount of cards we can use a while loop to continuously go through until the condition is met
*/

let numARR = [1,5,35,-23,0,3,10,4.24];
let index =0; 
let sum =0;

while (index < numARR.length) {
    console.log (numARR[index]);
    numARR[index] > 0 ? (sum+= numARR[index] ) : null;
 index++;
}

console.log(sum);
console.log (`the sum of all the positive integers is: ${sum}`); 
// string example above


let city = [
    "building",
    "sign",
    "window",
    "bridge",
    "lighthouse",
    "light pole",
    "tree",
    "empty street",
];

let structure = city[0];
let pos =0;

while (structure != "empty street") {
    console.log(`spiderman swings from the ${structure}`)
    pos++;

    structure = city[pos]
}

console.log(`spider man is landing in the ${structure}`);

let spidyHP = 20;
let badGuys = [
{ 
    baddie: "Green Goblin",
    hp: 15,
},
{
    baddie: "Venom",
    hp: 25,
},
{
    baddie: "Silt-man",
    hp: 5,
},
{
    baddie: "Thug",
    hp: 0,
},
]

/*
? Do while
do {
    ...code block
} while (expression)

-works just like a while loop with the exception that it will run our code block at least once

*/





let random = Math.floor(Math.random() * badGuys.length);
// console.log(random);
let villain = badGuys[random];
// console.log (villain);

console.log(`${villain.baddie} has appeared.`);

do {
    if(villain.baddie === "thug") {
        console.log("spiderman webs the thug ... EZPZ");
        break;
    }
    console.log(`${villain.baddie} hits spider-Main!`);
    spidyHP--;
    console.log("Spider-Man HP:" , spidyHP);

    let spidyHit = Math.floor(Math.random() * 3);
    
    console.log(`Spider-Man hits ${villain.baddie} for ${spidyHit} damage`);

   villain.hp -= spidyHit;
   console.log("Villain HP", villain.hp);

   if(spidyHP ===0) {
    break;
   }

}while ( villain.hp > 0);

villain.hp <= 0 
? console.log(`Spider-Man captures ${villain.name}`)
: console.log(`${villain.baddie} has taken down Spider-Man`);


let i = 0
for (let i = 0; i<=100; i ++) {
    console.log(i);
    console.log (`i divided by 5 = buzz ${i/5}`);
    console.log (`i divided by 3 = fizz ${i/3}`);
}


for(let i = 1; 1<=100; i++) {
    if(i %3 == 0 && i % == 0)  console.log(`Fizz Buzz ${i}`);
     else if ( i % 3 == 0) { console.log(`Fizz ${i}`);
    } else if (i % 5 == 0) {console.log(`Buzz ${i}`);
    }
}