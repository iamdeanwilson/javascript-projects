let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

/*
console.log(protoArray1.includes(',')); // true
console.log(protoArray1.includes(';')); // false
console.log(protoArray1.includes(' ')); // false
console.log(protoArray2.includes(',')); // false
console.log(protoArray2.includes(';')); // true
console.log(protoArray2.includes(' ')); // false
console.log(protoArray3.includes(',')); // false
console.log(protoArray3.includes(';')); // false
console.log(protoArray3.includes(' ')); // true
console.log(protoArray4.includes(',')); // true
console.log(protoArray4.includes(';')); // false
console.log(protoArray4.includes(' ')); // true
*/

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check;
	let output;
	//TODO: 2. write the code required for this step

	let array1 = strings[0].split(',');

	array1.reverse();

	console.log(array1);

	strings[0] = array1.join(',');

	console.log(strings[0]);

	output = (strings[0]);

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output; 
}

//3)
function semiDash() {
	let check;
	let output;
//TODO: write the code required for this step

	let array2 = strings[1].split(';');

	array2.sort();

	strings[1] = array2.join('-');
  
	console.log(strings[1]);

	output = (strings[1]);

	return output;
}

//4)
function reverseSpaces() {
	let check;
	let output;
  //TODO: write the code required for this step

	let array3 = strings[2].split(' ');
  
	array3.sort().reverse();
  
	strings[2] = array3.join(" ");

	console.log(strings[2]);

	output = (strings[2]);

	return output;
}

//5)
function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step
  
	let array4 = strings[3].split(', ');
	
	array4.reverse();
	
	strings[3] = array4.join(",");
	
	console.log(strings[3]);

	output = (strings[3]);

	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
