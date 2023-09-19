const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let cabinet0 = food.split(',');
let cabinet1 = equipment.split(',');
let cabinet2 = pets.split(',');
let cabinet3 = sleepAids.split(',');

cabinet0.sort();
cabinet1.sort();
cabinet2.sort();
cabinet3.sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];

cargoHold.push(cabinet0);
cargoHold.push(cabinet1);
cargoHold.push(cabinet2);
cargoHold.push(cabinet3);

console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let userAnswer1 = Number(input.question("Please select a cabinet from the Cargo Hold, Number 0-3: "));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (userAnswer1  === 0) {
    console.log(`The contents of Cabinet 0 are: ${cabinet0}.`);
    } else if (userAnswer1  === 1) {
    console.log(`The contents of Cabinet 1 are: ${cabinet1}.`);
    } else if (userAnswer1   === 2) {
    console.log(`The contents of Cabinet 2 are: ${cabinet2}.`);
    } else if (userAnswer1  === 3) {
    console.log(`The contents of Cabinet 3 are: ${cabinet3}.`);
    } else console.log("Invalid Entry")

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let userAnswer2 = Number(input.question("Please select a cabinet from the Cargo Hold, Number 0-3: "));
let item = (input.question("What are you looking for in this cabinet? "));

if (userAnswer2 === 0) {
  answer = cabinet0;
} else if (userAnswer2 === 1) {
   answer = cabinet1;
} else if ( userAnswer2 === 2) {
   answer = cabinet2;
} else if ( userAnswer2 === 3) {
   answer = cabinet3;
}

if (answer.includes(item) == true) {
 console.log(`Cabinet ${userAnswer2} DOES contain ${item}.`);
} else {
  console.log(`Cabinet ${userAnswer2} DOES NOT contain ${item}.`);
}