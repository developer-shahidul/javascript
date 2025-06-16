// # Simple function Related Practice Tasks

// ### Task-1
// Take four parameters. Multiply the four numbers and then return the result
function multiplyNumbers(a, b, c, d) {
  const result = a * b * c * d;
  return result;
}
const output = multiplyNumbers(4, 6, 7, 8);
console.log("multiplication result is :", output);

// 1. Regular Function (return দিয়ে)
function multiply(a, b, c, d) {
  return a * b * c * d;
}
console.log(multiply(4, 6, 7, 8));
// ---,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// ### Task-2 return kore
// Take a number if the number is odd multiply it by 2 and return the result.
//  If the number is even divide it by two and return the result.

// push() লাগে তখনই, যখন তুমি for লুপ বা for...of লুপ দিয়ে নিজে array তৈরি করো।
// যদি তুমি সম্পূর্ণ রেজাল্ট চাও → array তৈরি করতেই হবে।

function procesNumber(numbers) {
  const result = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      const multiply = number * 2;

      result.push(multiply);
    } else {
      const divide = number / 2;

      result.push(divide);
    }
  }
  return result;
}
const number = [4, 6, 7, 9];
const result = procesNumber(number);
console.log(result);

////.2
function ProcesNumber(numbers) {
  const result = [];
  for (const num1 of numbers) {
    if (num1 % 2 !== 0) {
      result.push(num1 * 2);
    } else {
      result.push(num1 / 2);
    }
  }
  return result;
}
const numbers = [4, 6, 7, 9];
const result = ProcesNumber(numbers);
console.log(result);

// //..2    for...i traditional loop

function procesNumber(numbers) {
  const result = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    const num1 = numbers[i];
    if (num1 % 2 !== 0) {
      result.push(num1 * 2);
    } else {
      result.push(num1 / 2);
    }
  }
  return result;
}
const numbers = [4, 6, 7, 8, 9];
const result = procesNumber(numbers);
console.log(result);

//...return
function procesNumber(num1) {
  if (num1 % 2 === 1) {
    return num1 * 2;
  } else {
    return num1 / 2;
  }
}
console.log(procesNumber(5));
console.log(procesNumber(10));

// // ---result==>[2,3,14,18]

// ### Task-3,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// Write a function called make_avg() which will take an array of integers and the
// size of that array and return the average of those values.

function make_abg(numbers, size) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  console.log(sum);
  const average = sum / size;
  return average;
}

const numbers = [12, 48, 69, 78, 21, 35];
const size = numbers.length;
const abg = make_abg(numbers, size);
console.log("abg :", abg);

// ---উপায় 2: for loop (index দিয়ে)

function make_avg(num1, size) {
  let sum = 0;
  for (let i = 0; i < num1.length; i++) {
    sum = num1[i] + sum;
  }
  console.log(sum);
  const average = sum / size;
  return average;
}
const num1 = [12, 48, 69, 78, 21, 35];
const size = num1.length;
const avg = make_avg(num1, size);
console.log(avg);

// ### Task-4,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// Write a function called count_zero() which will take a binary string (Binary string
// is a string which is consist of only 0 and 1) as parameter and count how many 0’s are
// there in that string.

// let ... of
function count_zero(binaryString) {
  let count = 0;
  for (const char of binaryString) {
    if (char === "0") {
      count++;
    }
    console.log;
  }
  return count;
}
// const binary = "10101011011101001001011";
const result = count_zero(binary);
console.log("number of zero:", result);

// --- For Loop দিয়ে:

function count_zero(binaryString) {
  let count = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "0") {
      count++;
    }
  }

  return count;
}
const binary = "0101010111101101010110001";
const count_z = count_zero(binary);
console.log("count 0 : ", count_z);

// ### Task-5
// Write a function called odd_even() which takes an integer value and tells whether this
//  value is even or odd. If even return `Even`. If odd return `Odd`
function oddEven(num1) {
  if (num1 % 2 == 0) {
    return "even number";
  } else {
    return "odd number";
  }
}

console.log(oddEven(7));
console.log(oddEven(10));
