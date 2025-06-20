// # js-problems-part1-practice-tasks

// ### Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(Celsius) {
  const Fahrenheit = Celsius * (9 / 5) + 32;
  return Fahrenheit;
}
console.log(celsiusToFahrenheit(10));
console.log(celsiusToFahrenheit(40));
// ---

// ### Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// array te  kun sonkha ta koto bar ace

// sample-input:
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function countOccurrences(numbers, duplicate) {
  let count = 0;
  for (let number of numbers) {
    if (number === duplicate) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
// console.log(countOccurrences(numbers, 5));
// console.log(countOccurrences(numbers, 25));

// 2. Using for loop with index

function countOccurrences(number, find) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === find) {
      count++;
    }
  }
  return count;
}
const number = [5, 6, 11, 12, 98, 5];
// console.log(countOccurrences(number, 5));
// console.log(countOccurrences(number, 25));
// console.log(countOccurrences(number, 6));
// // ----
// ### Task-3:
// Write a function to count the number of vowels in a string.
// মানে হলো — কোনো string-এর ভিতরে কতগুলো vowel (a, e, i, o, u) আছে, সেটা গণনা করতে হবে।

function countvowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countvowels("shahidul"));
console.log(countvowels("hellow world"));
// ---
// ### Task-4:
// Write a function to find the longest word in a given string.
function longestword(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
const str = "I am learning Programming to become a programmer";
console.log(longestword(str));
console.log(longestword("I am learning Programming to become a programmer"));
// sample-input:
// I am learning Programming to become a programmer

// sample-output: Programming

// ----
// ### Task-5:
// Generate a random number between 10 to 20.
const random = Math.floor(Math.random() * (30 - 20 + 1) + 20);
const random2 = Math.floor(Math.random() * (20 - 10 + 1) + 10);
console.log(random);
console.log(random2);
// এই রেঞ্জের মধ্যে মোট পূর্ণসংখ্যার সংখ্যা হলো 20 - 10 + 1 = 11
// এটি ১০ থেকে ২০ এর মধ্যে একটি র‍্যান্ডম পূর্ণসংখ্যা তৈরি করে
