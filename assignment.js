// Question 1
//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

// Use a loop to iterate through the array and calculate the average age. Print the result to the console.

// let ages = [3, 9, 23, 64, 2, 8, 28, 93, 16];
// let sum = 0;

// console.log(ages[ages.length -1] - ages[0]);

// for (let i = 0; i < ages.length; i++) {
//   sum += ages[i];
//   average = sum / ages.length;
// }
// console.log('average age is: ' + average);

// Question 2
// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

// let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// let sum = 0;
// let concatNames = '';

// for (let i = 0; i < names.length; i++) {
//   sum += names[i].length;
// }
// console.log('Average number of letters per name is: ' + sum / names.length);

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

// Question 3
// The last element of an array is accessed `<array-name>.length - 1`

// Question 4
// The first element of an array is accessed `<array-name>[0]`

//Question 5
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// //solution using map method
// let lengths = names.map(name => {
//   return name.length
// })
// console.log(lengths);

// let nameLengths = [];
// //solutions using loop (per requirement)
// for (let i = 0; i < names.length; i++) {
//     nameLengths.push(names[i].length);
// }
// console.log(nameLengths);

// Question 6
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

// let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// let nameLengths = [];
// for (let i = 0; i < names.length; i++) {
//     nameLengths.push(names[i].length);
// }

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

// let sum = 0;
// let numArray = [2, 4, 6, 8, 10];

// function averageArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     sum = array[i] + sum;
//     mean = sum / array.length;
//   }
//   return mean;
// }
// console.log(averageArray(numArray));

// Question 11
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


// let array1 = [1, 2, 3, 4, 5];
// let array2 = [100, 200, 300];

// function compareArrays(arrayOne, arrayTwo) {
//   let sum = 0;
//   for (let i = 0; i < arrayOne.length; i++) {
//     sum1 = arrayOne[i] + sum;
//   }
//   let mean1 = sum1 / arrayOne.length;

//   let sum2 = 0;
//   for (let i = 0; i < arrayTwo.length; i++) {
//     sum2 = arrayTwo[i] + sum2;
//   }
//   let mean2 = sum2 / arrayTwo.length;

//   if (mean1 > mean2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(compareArrays(array1, array2));

// Question 12
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// let isHotOutside = true;
// let moneyInPocket = 6;

// function willBuyDrink(bool, num) {
//   if (isHotOutside == true && moneyInPocket > 10.5) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(willBuyDrink());

// Question 13
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

let times = [15, 20, 30, 60];
let weekend = true;
let parade = true;
let Manchester = true;
let greenLights = true;

function workCommuteTime(array) {
  for (let i = 0; i < array.length; i++) {
    if (parade == true || Manchester == false) {
      return 60;
      }
    if (weekend == true && Manchester == true) {
      if (greenLights == true) {
        return 15;
      } else {
        return 20;
      }
    } else {
        return 'Are you even going to work?!';
    }
  }
}
console.log(workCommuteTime(times));
