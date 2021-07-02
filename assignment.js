// Question 1
//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// let ages = [3, 9, 23, 64, 2, 8, 28, 93, 16];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

// let sum = 0;

// console.log(ages[ages.length -1] - ages[0]);

// Use a loop to iterate through the array and calculate the average age. Print the result to the console.

// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
//   average = sum / ages.length;
// }
// console.log('average age is: ' + average);

// Question 2
// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

//let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

// let sum = 0;
// let concatNames = '';

// for (let i = 0; i < names.length; i++) {
//   sum += names[i].length;
// }
// console.log('Average number of letters per name is: ' + sum / names.length);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

// for (let i = 0; i < names.length; i++) {
//   const name = names[i];
//     if (i == names.length-1) {
//       concatNames = concatNames + name;
//     } else {
//       concatNames = concatNames + name + ' ';
//     }
// }
// console.log(concatNames);

// without loop
//console.log(names.join(' '));

//Question 3
//The last element of an array is accessed `<array-name>.length - 1`

//Question 4
//The first element of an array is accessed `<array-name>[0]`

//Question 5
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

//let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// solution using map method
// let lengths = names.map(name => {
//   return name.length
// })
// console.log(lengths);

//let nameLengths = [];
// solutions using loop (per requirement)
// for (let i = 0; i < names.length; i++) {
//     nameLengths.push(names[i].length);
// }
// console.log(nameLengths);

// Question 6
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
// let sum = 0;
// for (let i = 0; i < nameLengths.length; i++) {
//   sum = nameLengths[i] + sum;
// }
// console.log(sum);

// Question 7
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

// function repeatWord(word, n) {
//   return (word.repeat(n));
// }
// console.log(repeatWord('Linda', 3));

//Question 8
// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

// function fullName(firstName, lastName) {
//   return(firstName + ' ' + lastName);
// }

// console.log(fullName('Linda', 'Forlizzi'));

//Question 9
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// let sum = 0;
// let numbers = [2, 4, 6, 8, 10, 100];

// function arrayTotal(array) {
//   for (let i = 0; i < array.length; i++) {
//     sum = array[i] + sum;
//   }
//   if (sum > 100) {
//     return true;
//   }
// }
// console.log(arrayTotal(numbers));

// Question 10
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

// sum = 0;
// let numArray = [2, 4, 6, 8, 10];

// function averageArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     sum = array[i] + sum;
//     mean = sum / array.length;
//   }
//   return mean;
// }
// console.log(averageArray(numArray));
