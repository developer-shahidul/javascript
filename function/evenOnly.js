/***
 * creat function that will return only the even numvers
 * return the sum of even numbers
 */
function evenNumbersOnly(numbers) {
  const even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      even.push(number);
    }
  }
  return even; // loop shesh hoite hobe tar por return hote hobe
}
const numbers = [45, 56, 97, 45, 12];
const even = evenNumbersOnly(numbers);
console.log("even numbers even", even);

//..2
function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (let number of numbers) {
    console.log(number);
    if (number % 2 === 0) {
      sum = number + sum;
    }
  }
  return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log("sum of the even numbers is", sum);
