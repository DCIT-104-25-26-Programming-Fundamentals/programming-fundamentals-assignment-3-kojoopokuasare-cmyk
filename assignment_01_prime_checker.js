const readlineSync = require('readline-sync');

/**
 * Checks whether a given number is prime.
 * @param {number} n - The integer to check.
 * @returns {boolean} True if prime, false otherwise.
 */
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Main execution function to handle user input and output.
 */
function main() {
  const number = readlineSync.questionInt('Enter a number: ');

  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is NOT a prime number.`);
  }
}

// Run the program
main();

