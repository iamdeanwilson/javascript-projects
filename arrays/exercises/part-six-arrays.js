//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1]); // Displays the entire row: [ 'helium', 'He', 4.003 ]
console.log(table[1][1]); // Only displays the object at at index [1][1] - in this case, "He"

// A single index will display the entire row, while two indices will display the specific object in that location

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2]); // The mass of element 1
console.log(table[1][0]); // The name of element 2
console.log(table[2][2]); // The abbreviation of element26

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let group = []
let Name1 = ["John"]
let Name2 = ["Richard"]
let Name3 = ["Sally"]
let Name4 = ["John"]
let Name5 = ["Richard"]
let Name6 = ["Sally"]
let Name7 = ["John"]
let Name8 = ["Richard"]
let Name9 = ["Sally"]
let Name10 = ["John"]
let Name11 = ["Richard"]
let Name12 = ["Sally"]

group.push("Subgroup 1: ", Name1, Name2, Name3);
group.push("Subgroup 2: ", Name4, Name5, Name6);
group.push("Subgroup 3: ", Name7, Name8, Name9);
group.push("Subgroup 4: ", Name10, Name11, Name12);
Name1.push("33 Years Old");
Name2.push("43 Years Old");
Name3.push("55 Years Old");
Name4.push("43 Years Old");
Name5.push("21 Years Old");
Name6.push("28 Years Old");
Name7.push("32 Years Old");
Name8.push("60 Years Old");
Name9.push("53 Years Old");
Name10.push("40 Years Old");
Name11.push("39 Years Old");
Name12.push("25 Years Old");


console.log(group);

