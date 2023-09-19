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

	let array1 = protoArray1.split(',');

	array1.reverse();

	let newProtoArray1 = array1.join(',');

	console.log(newProtoArray1)


	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let check;
	let output;
//TODO: write the code required for this step

	let array2 = protoArray2.split(';');

	array2.reverse();

	let newProtoArray2 = [];

	newProtoArray2 = array2.join('-');
  
	console.log(newProtoArray2);

	return output;
}

//4)
function reverseSpaces() {
	let check;
	let output;
  //TODO: write the code required for this step

	let array3 = protoArray3.split(';');
  
	array3.reverse();
  
	let newProtoArray3 = [];

	newProtoArray3 = array3.join(" ");

	console.log(newProtoArray3);

	return output;
}

//5)
function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step
  
	let array4 = protoArray4.split(', ');
	
	array4.reverse();
	
	let newProtoArray4 = [];

	newProtoArray4 = array4.join(", ");
	
	console.log(newProtoArray4)

	return output;
}

reverseCommas();
semiDash();
reverseSpaces();
commaSpace();
// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
