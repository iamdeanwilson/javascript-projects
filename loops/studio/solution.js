const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

let i;
let j;
let k;
let numMeals;

  function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
    let pantry = [protein, grains, veggies, beverages, desserts];
    let meals = [];
    while (meals.length < numMeals ){
      meals.push([]);
      }

    /// Part A #2: Write a ``for`` loop inside this function
    /// Code your solution for part A #2 below this comment (and above the return statement) ... ///

      //i = which pantry are we taking from (Max equal to number of categories in pantry)
      //j = which item we're taking from the pantry (Max equal to number of items in pantry)
      //k = number of the meal that is being made (max equal to 'numMeals')
      for( i = 0 , j = 0 , k = 0; j < (pantry[i].length) ; i++){
        meals[k].push(pantry[i][j])
        if(i == (pantry.length - 1)){
          i = -1;
          j++;
          k++;
        } if (k == numMeals){
          break;
        }
      }
    return meals;
  }

function askForNumber() {
  numMeals = input.question("How many meals would you like to make? ");
  
  /// CODE YOUR SOLUTION TO PART B here ///
  while( numMeals > 6 || numMeals < 1 || isNaN(numMeals) ){
    numMeals = input.question("Invalid Entry. Please enter a number between 1-6: ");
  }

  return numMeals;
}

function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission Solution here ///

  for(let i = 0; code.length < ((string1.length + string2.length) - 1) ; i++){
   
    code = code + (string1[i] + string2[i])
  }

  return code;
}

function runProgram() {
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
   //let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 6);
   //console.log(meals)
  
  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
   let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
   console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

   //let string1 = '1234';
   //let string2 = '5678';
   //console.log("Time to run the password generator so we can update the menu tomorrow.")
   //console.log(`The new password is: ${generatePassword(string1, string2)}`);
}

runProgram();

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
} 