// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * Calculates the sum of numbers in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The sum.
 */
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Calculates the average of numbers in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The average.
 */
function calculateAverage(arr) {
  return calculateSum(arr) / arr.length;
}

/**
 * Finds the maximum value in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The maximum number.
 */
function findMaximum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Finds the minimum value in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The minimum number.
 */
function findMinimum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * Main function to handle user input and print calculated results.
 */
function main() {
  const count = readlineSync.questionInt('How many numbers? ');

  if (count <= 0) {
    console.log('Error: Please enter a positive integer for the count.');
    return;
  }

  const numbers = [];
  for (let i = 1; i <= count; i++) {
    const num = readlineSync.questionInt(`Enter number ${i}: `);
    numbers.push(num);
  }

  console.log('\nResults:');
  console.log(`Sum:     ${calculateSum(numbers)}`);
  console.log(`Average: ${calculateAverage(numbers)}`);
  console.log(`Maximum: ${findMaximum(numbers)}`);
  console.log(`Minimum: ${findMinimum(numbers)}`);
}

// Run the program
main();




