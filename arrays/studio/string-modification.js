const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

console.log((str.slice(3, 10)) + (str.slice(0, 3)));

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`When we take the first 3 letters from the word ${str} and move them to the end of the word, the resulting word is ${(str.slice(3, 10)) + (str.slice(0, 3))}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userAnswer = input.question("Please enter the number of the letter with which to start the word 'LaunchCode'.")

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userAnswer < 0 || userAnswer > 10) {
    console.log(`Invalid Number. When we take the first three letters from the word ${str} and move them to the end of the word, the resulting word is ${ (str.slice(3, 10)) + (str.slice(0, 3))}.`);
    } else console.log (`When we take the first ${userAnswer} letters from the word ${str} and move them to the end of the word, the resulting word is ${(str.slice(Number(userAnswer), 10)) + (str.slice(0, (Number(userAnswer))))}.`);