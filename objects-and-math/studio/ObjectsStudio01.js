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

let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:

function selectRandomEntry(arr){
  let randomNumber = arr[Math.floor(Math.random()*arr.length)];
  return randomNumber;
}


// Code your buildCrewArray function here:

let crew = []

function buildCrew(animalsToAdd){
  while (crew.length < animalsToAdd){
    let randomNumber = (selectRandomEntry(idNumbers));
    for ( let i = 0 ; i < animals.length ; i++){
      if (animals[i]['astronautID'] === randomNumber){
        if (crew.includes(animals[i]) === false){
          crew.push(animals[i]);
        }
      }
    }
  }
  return crew;
}

(buildCrew(3)); // the parameter is the number of animals to add to the crew


// Code your template literal and console.log statements:

console.log(`${crew[0]['name']} the ${crew[0]['species']}, ${crew[1]['name']} the ${crew[1]['species']}, and ${crew[2]['name']} the ${crew[2]['species']} are going to space!`);