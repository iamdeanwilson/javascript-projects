// Declare and assign the variables below

let nameOfTheSpaceShuttle = "Determination";
let shuttleSpeedMPH = 17500;
let distanceToMarsKM = 225000000;
let distanceToTheMoonKM = 384400;
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof nameOfTheSpaceShuttle)
console.log(typeof shuttleSpeedMPH)
console.log(typeof distanceToMarsKM)
console.log(typeof distanceToTheMoonKM)
console.log(typeof milesPerKilometer)

// Calculate a space mission below

let milesToMars = (distanceToMarsKM * milesPerKilometer)
let hoursToMars = (milesToMars / shuttleSpeedMPH)
let daysToMars = (hoursToMars / 24)

// Print the results of the space mission calculations below

console.log(nameOfTheSpaceShuttle + " will take " + daysToMars + " days to reach Mars.")

// Calculate a trip to the moon below

let milesToMoon = (distanceToTheMoonKM * milesPerKilometer)
let hoursToMoon = (milesToMoon / shuttleSpeedMPH)
let daysToMoon = (hoursToMoon / 24)

// Print the results of the trip to the moon below

console.log(nameOfTheSpaceShuttle + " will take " + daysToMoon + " days to reach the Moon.")
