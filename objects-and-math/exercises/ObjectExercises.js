let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
beagle["astronautID"] = 4;
tardigrade["astronautID"] = 5;

superChimpOne["move"] = Math.round(Math.random()*10);
salamander["move"] = Math.round(Math.random()*10);
superChimpTwo["move"] = Math.round(Math.random()*10);
beagle["move"] = Math.round(Math.random()*10);
tardigrade["move"] = Math.round(Math.random()*10);

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade]

// Print out the relevant information about each animal.

function crewReports(){
   for ( i = 0 ; i < crew.length ; i++){
   console.log(`${crew[i]["name"]}  is a ${crew[i]["species"]}. They are ${crew[i]["age"]} years old and ${crew[i]["mass"]} kilograms. Their ID is ${crew[i]["astronautID"]}.`);
   }
 }
 
 crewReports(crew)

// Start an animal race!

let arr = []

/*
For each animal:
 - need to track distance traveled
 - need to increase distance each turn until it reaches 20
 - need to return turns
 - need to log the number of turns it took to reach 20
*/


function fitnessTest(arr){
   let turns = 0
   let distance = 0
   if (arr["move"] === 0){
     console.log(`${arr["name"]} never left the starting line.`);  
   } else for ( let i = 0 ; distance < 20 ; i++){
     turns = i;
     distance = distance + arr["move"];
   }
    if (arr["move"] !== 0){
   console.log(`${arr["name"]} took ${turns} turns to take 20 steps.`);
    }
 }
 
 crew.map(fitnessTest);