const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuel = 0;
let astronautCount = 0;
let altitudeKm = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  startingFuel = input.question("Please enter the starting fuel level between 5,000 and 30,000: ");
  startingFuel = Number(startingFuel);
  
  while(startingFuel > 30000 || startingFuel < 5000 || isNaN(startingFuel)){
    startingFuel = input.question("Invalid Entry. Please enter the starting fuel level between 5,000 and 30,000: ");
    startingFuel = Number(startingFuel);
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
astronautCount = input.question("Please enter the number of astronauts on board: ");
astronautCount = Number(astronautCount);

while(astronautCount > 7 || astronautCount < 1){
  astronautCount = input.question("Invalid Entry. Must be between 1 and 7 astronauts. Please enter again: ");
  astronautCount = Number(astronautCount);
}

  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while(startingFuel >= 0){
  startingFuel = startingFuel - (100 * astronautCount)
  altitudeKm = (altitudeKm + 50)
}

console.log(`The shuttle gained an altitude of ${altitudeKm} km.`)

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if(altitudeKm >= 2000){
  console.log("Orbit achieved!");
} else console.log("Failed to reach orbit.");