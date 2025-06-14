/* array-looping-tasks

### Task 1

Write a JavaScript code to reverse the array colors `without using the reverse method`.

**Input:** */

const colors = ["red", "blue", "green", "yellow", "orange"];
/**Output:**/
// for
let colors_rev = [];
for (let i = colors.length - 1; i >= 0; i--) {
  colors_rev.push(colors[i]);
}
// console.log(colors_rev);

// for ... of .... unshift
const color_reva = [];
for (const color of colors) {
  color_reva.unshift(color);
}
// console.log(color_reva);

// const colors_rusult = [("orange", "yellow", "green", "blue", "red")];

// ### Task 2

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Input:**
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evens = [];
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] % 2 === 0) {
//   //   evens.push(numbers[i]);
//   // }
// }
// console.log(evens);
// // odd fo...loop
// // const odd = [];
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] % 2 !== 0) {
//     // odd.push(numbers[i]);
//   }
// }

// ✅ ৪. (Bonus) filter() দিয়ে – (advanced functional way)
// const numbers = [12, 98, 5, 41, 23, 78, 46];

// const odd = numbers.filter((n) => n % 2 !== 0);
// console.log(odd);

// 🔸 filter() হলো একটি অ্যারের মেথড।
// 🔸 এটা প্রত্যেকটা আইটেমকে পরীক্ষা করে এবং যেগুলো শর্ত পূরণ করে, সেগুলো দিয়ে নতুন একটা অ্যারে তৈরি করে।
// 🔸 এখানে num প্রতিটি সংখ্যা — মানে numbers অ্যারেতে যতগুলো সংখ্যা আছে, প্রত্যেকটা একবার করে এখানে আসবে।
// **Output:**

// `[12, 98, 76, 46]`
// `[5 , 41 , 23]`
// ---

// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**

let result = "";
var numbers = ["Tom", "Tim", "Tin", "Tik"];
for (let number of numbers) {
  result = result.concat(number);
}
console.log(result);
// **Output:**

// `'TomTimTinTik'`

// ---

// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
const statement = "I am a hard working person";
let statement_rev = "";
for (let i = statement.length - 1; i >= 0; i--) {
  statement_rev += statement[i];
}
console.log(statement_rev);
// **Output:**

// `'person working hard a am I'`

// ---
