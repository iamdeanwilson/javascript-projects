let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crew = [];
let duration = 3; // CAN BE MODIFIED AS NEEDED
for ( let i = 0 ; i < animals.length ; i++){
 let candidate = animals[i];
 candidate["o2Used"] = Math.round(candidate.o2Used(duration)*1000)/1000;
}
let massOfCrewKg = 0;
let crewSize = 3; // CAN BE MODIFIED AS NEEDED
let uncrewedRocketMassKg = 75000;

// Function to create crew based on least O2 usage

function o2Consumption (animals, crewSize){
  for ( let i = 0 ; i < crewSize ; i++){
   let sortedAnimals = animals.sort(
     (p1, p2) => (p1.o2Used > p2.o2Used) ? 1 : (p1.o2Used < p2.o2Used) ? -1 : 0);
    crew.push(sortedAnimals[i]);
  }
  return crew
}

crew = o2Consumption(animals, crewSize);

// Code your crewMass function here:

function crewMass (crew){
 for ( let i = 0 ; i < crew.length ; i++){
   massOfCrewKg += crew[i]["mass"];
 }
 return massOfCrewKg;
}

massOfCrewKg = crewMass(crew);
let crewedMass = uncrewedRocketMassKg + massOfCrewKg;

// Code your fuelRequired function here:

function fuelRequired (uncrewedRocketMassKg, massOfCrewKg){
 let requiredFuel = (uncrewedRocketMassKg + massOfCrewKg)*9.5;
 for (let i = 0 ; i < crew.length ; i++){
   if (crew[i]["species"] === "dog" | crew[i]["species"] === "cat" ){
     requiredFuel += 200;
   } else if (crew[i]["species"] !== "dog" | crew[i]["species"] !== "cat" ){
     requiredFuel += 100;
   }
 }
 return Math.ceil(requiredFuel);
}

requiredFuel = fuelRequired(uncrewedRocketMassKg, massOfCrewKg);

for (let i = 0 ; i < crew.length ; i++){
 console.log(`Candidate ${i + 1} is ${crew[i]["name"]} the ${crew[i]["species"]}.`)
}
console.log(`'The mission has a launch mass of ${uncrewedRocketMassKg + massOfCrewKg} kg and requires ${requiredFuel} kg of fuel.'`);
