/***
 *    object : write a function to gime me the sum of all numbers in an array?
 * step:1..  : declare a function
 * step:2..  : call check weather the function is called properly.
 * step:3..  : set a parameter (s)
 * step:4..  : pass the parameter (s), check weather parameter is passed in a proper
 * format
 * step:5..  : do the function task (step by step)
 */
function sumOfNumbers(numbers) {
  let sum = 0;

  for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  }
  return sum;
}
const numbs = [45, 54, 48, 3];
const sum = sumOfNumbers(numbs);
console.log("sum of  numbers is", sum);
