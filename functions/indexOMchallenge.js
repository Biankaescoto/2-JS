// ? Old Macdonald Sing Along

/* 
I want to create a function that takes in 2 paramenters
- The first parameter will be an animal
- The second parameter will be the sound the animal makes


Create a function that takes those parameters and will output a verse from the song:
! "Old MacDonald Had A Farm"
-Use string interpolation, to incorperate your parametes into the song.
-Call the function at least 3 times, with 3 different animals and sounds.


! Example with "cow" & "moo"
Old MacDonald had a farm,
    Ee i ee i o!
And on his farm he had some cows,
    Ee i ee i oh!
With a moo-moo here,
    And a moo-moo there.
Here a moo, there a moo,
    Everywhere a moo-moo.
Old MacDonald had a farm,
    Ee i ee i o!!!


TODO Bonus Challanges
1 - Have the function return it, and then Output the song to the window

2- If(you wrote a Traditional Function === true){
    return (create a new version that utilizes Arrow Functions)
} else{
    return (create a Traditional function from your arrow function)
}

 */



// traditional function
function OldMacDonaldSingAlong(animal, sound) {
    `Old MacDonald had a farm,
    Ee i ee i o!
And on his farm he had some ${animal}s,
    Ee i ee i oh!
With a ${sound}-${sound} here,
    And a ${sound}-${sound} there.
Here a ${sound}, there a ${sound},
    Everywhere a ${sound}-${sound}.
Old MacDonald had a farm,
    Ee i ee i o!!!`
}

OldMacDonaldSingAlong("cow","moo");




// arrow function below (this one did work for me)
let OldMacDonaldSingAlong = (animal, sound) => {console.log(
    `Old MacDonald had a farm,
    Ee i ee i o!
And on his farm he had some ${animal}s,
    Ee i ee i oh!
With a ${sound}-${sound} here,
    And a ${sound}-${sound} there.
Here a ${sound}, there a ${sound},
    Everywhere a ${sound}-${sound}.
Old MacDonald had a farm,
    Ee i ee i o!!!`)
}

OldMacDonaldSingAlong("cow","moo");









// My attempt
//  function (_Cow, _MOO ) {
//     let Old Mcdonald had a farm = 'Ee-i-Ee-i-o!'
//     console.log ("Old Mcdonald had a farm")
//  }
