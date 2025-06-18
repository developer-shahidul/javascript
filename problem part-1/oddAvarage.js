/***
 * function takes an array as parameter
 *give the avarage of the odd numbers in the array
 *
 *
 *
 * 2.put  odd numbers in an array
 *
 */

function oddAvarage(numbers) {
  let odd = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      //   console.log(number);
      odd.push(number);
    }
  }
  // odd is the array that contains only the odd numbers.
  //   console.log(odd);
  let sum = 0;
  for (const number of odd) {
    sum += number;
  }
  const count = odd.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}
const numbers = [44, 54, 54, 89, 99, 31];
const avg = oddAvarage(numbers);
console.log("avarage of the odd number is the :", avg);
