let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split());
console.log(str.split(''));
console.log(str.split('e'));
console.log(str.split(' '));

// the character defined within the parameter will determine where all "splits" will occur when separating objects into an array

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));

//the character defined within the parameter will determine what will be displayed between the joined characters, after they're combined into a string

//3) Do split or join change the original string/array?

console.log(str);
console.log(arr);
console.log(typeof(str));
console.log(typeof(arr));

// No, split and join do not change the original string or array

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let arr1 = cargoHold.split(',');
arr1.sort();
cargoHold = arr1.join();
console.log(cargoHold);
console.log(typeof(cargoHold));
