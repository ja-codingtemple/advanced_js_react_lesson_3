/*
WHAT ARE ARRAY METHODS?:

Array methods are functions inside of JavaScript's Array object. They exist to allow you to act upon arrays and the data inside of them.
There are many built-in methods for arrays, however, these are a few that you should be familiar with:
- map()
- forEach()
- filter()
- find()
- includes()

Other array methods: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://www.w3schools.com/jsref/jsref_obj_array.asp
*/

// Define the array.
const names = ["brooke", "skye", "daniel", "jay", "virginia", "james", "luna", "prancer"];

/*
METHOD: map()
This method performs an operation on each element of the existing array and uses the result to create a new array from the modifications made to the original one.

EXAMPLE:
Use map() to create a new array with uppercase versions of each name.
*/
console.log("\nEXAMPLE: map()")
const uppercaseNames = names.map(name => name.toUpperCase());
console.log(uppercaseNames)

/*
METHOD: forEach()
This method will execute a function once 'for each' element inside of an array.

EXAMPLE:
Use forEach() to iterate over the array & convert each name to uppercase
*/
console.log("\nEXAMPLE: forEach()")
names.forEach((name, index, array) => {
    array[index] = name.toUpperCase(); // Convert each name to uppercase and update the array
});
console.log(names);


/*
METHOD: filter()
This method creates a new array from the old one that includes only the elements that pass the provided filter operation.

EXAMPLE:
Use filter() to create a new array that only includes names from the original array that start with "J"
*/
console.log("\nEXAMPLE: filter()")
const jNames = names.filter(name => name.startsWith("J"));
console.log(jNames)

/*
METHOD: find()
This method attempts to find the first element in an array that matches the specified criteria. It then returns the found element.

EXAMPLE:
Use find() to find the first element whose values starts with the letter P.
*/
console.log("\nEXAMPLE: find()")
const firstPName = names.find(name => name.startsWith("P"));
console.log(firstPName)

/*
METHOD: includes()
This method attempts to detect whether an array includes a particular value. If it does, it returns True. If not, it returns False.
*/
console.log("\nEXAMPLE: includes()")
const hasLuna = names.includes("LUNA");
console.log(hasLuna);