// 1️⃣ What is the difference between let and var in terms of scope?
// let is block scoped (only accessible inside the {} block where it’s defined); 
// var is function scoped (accessible anywhere inside the function).

// 2️⃣ What is the output of:

// console.log(typeof NaN);

// "number"




// 3️⃣ Convert the string "42.5" to a number so that decimal part is kept.
 // console.log (Number("42.5")) // or parseFloat("42.5")

// 4️⃣ What will this return?
// typeof null // object

//5️⃣ Explain what an Immediately Invoked Function Expression (IIFE) is and why it might be useful.
// Helps prevent polluting the global scope

// Write a function called doubleNumbers that takes an array of numbers and returns a new array with each number doubled.

// function doubleNumbers(arr) {
//   return arr.map(function(num) {
//     return num * 2;
//   });
// }

// Example:
// console.log(doubleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 4, 6]
 // with Arrow function =  const doubleNumbers = arr => arr.map(num => num * 2);


 // Write a function getEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

//  function getEvenNumbers (arr) {
//     return arr.filter (function (num) {
//        return num % 2 === 0;
//     })
//  }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); 
// const evens = arr => arr.filter(num => num % 2 === 0);
// console.log(evens([1, 2, 3, 4, 5, 6])); 


// const person = { name: "Alice", age: 25, city: "Delhi" };
// Write code to destructure the object so you get three variables: name, age, and city.
// Then, log them to the console.

// const {name, age, city} = person;

// console.log (name, age, city );

// ----------------------------------------------- \\




// Write a function called sumOfArray that:

// Takes an array of numbers as input

// Uses .reduce() to return the sum of all numbers in the array


const sumOfArray = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log (sumOfArray([10,20,30])); //60 