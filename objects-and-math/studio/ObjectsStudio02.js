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
let crew = [candidateA,candidateC,candidateE];

// Code your orbitCircumference function here:

function orbitCircumference(radius){
 let circumference = 2*Math.PI*radius
 return circumference
}

let orbitRadiusKm = 2000
let orbitalSpeed = 28000
let circumference = Math.round(orbitCircumference(orbitRadiusKm));
let duration = 0

// Code your missionDuration function here:

function missionDuration(numOrbits, circumference, orbitalSpeed){
 let orbitsToComplete = numOrbits
 while ( orbitsToComplete > 0 ){
  duration +=  circumference/orbitalSpeed
  orbitsToComplete--
 }
 return duration;
}

let numOrbits = 5;

missionDuration(numOrbits, circumference, orbitalSpeed);
//console.log(`The mission will travel ${circumference*numOrbits} km around the planet, and it will take ${Math.round(duration*100)/100} hours to complete.`);

duration = (Math.round(duration*100)/100)
//console.log(duration);

// Copy/paste your selectRandomEntry function here:

// function selectRandomEntry(arr){
//   let randomNumber = arr[Math.floor(Math.random()*arr.length)];
//   return randomNumber;
// }

// Code your oxygenExpended function here:

function oxygenExpended(candidate){
 spacewalkDuration = duration;
 let used02 = (Math.round(candidate.o2Used(duration)*1000)/1000);
 let str = `${candidate["name"]} will perform the spacewalk, which will last ${duration} hours and require ${used02} kg of oxygen.`
 return str
}

console.log(oxygenExpended(candidateA))

//BONUS MISSION - Create function to select candidate that uses the least O2

for ( let i = 0 ; i < animals.length ; i++){
  let candidate = animals[i];
  candidate["o2Used"] = Math.round(candidate.o2Used(duration)*1000)/1000;
 }

function o2Efficient(candidate){
  let o2EfficientCandidate = animals[0];
  for ( let i=0 ; i < animals.length ; i++){
    if (candidate[i]['o2Used'] < o2EfficientCandidate['o2Used']){
      o2EfficientCandidate = candidate[i];
    }
  }
  return o2EfficientCandidate;
}
console.log(o2Efficient(animals));
